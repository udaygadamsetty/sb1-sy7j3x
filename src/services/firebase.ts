import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { getFirestore, enableIndexedDbPersistence, connectFirestoreEmulator, Firestore } from 'firebase/firestore';
import { BehaviorSubject } from 'rxjs';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();

let firestoreInstance: Firestore | null = null;

// Initialize Firestore with persistence enabled
export const initializeFirestore = async (): Promise<Firestore> => {
  if (firestoreInstance) {
    return firestoreInstance;
  }

  const db = getFirestore(app);

  // Enable offline persistence
  try {
    await enableIndexedDbPersistence(db);
  } catch (err) {
    if (err.code === 'failed-precondition') {
      console.warn('Multiple tabs open, persistence can only be enabled in one tab at a time.');
      // Persistence is already enabled in another tab, so we can continue without it
    } else if (err.code === 'unimplemented') {
      console.warn('The current browser does not support all of the features required to enable persistence');
      // Persistence is not available, but we can still use Firestore
    } else {
      // For any other error, we'll throw it to be handled by the caller
      throw err;
    }
  }

  // Check if we're running in development mode
  if (import.meta.env.DEV) {
    // Connect to Firestore emulator if available
    try {
      connectFirestoreEmulator(db, 'localhost', 8080);
    } catch (err) {
      console.warn('Failed to connect to Firestore emulator:', err);
      // We can continue without the emulator in development
    }
  }

  firestoreInstance = db;
  return db;
};

// Connection status
export const connectionStatus = new BehaviorSubject<'online' | 'offline'>('offline');

// Monitor online/offline status
if (typeof window !== 'undefined' && 'navigator' in window) {
  window.addEventListener('online', () => connectionStatus.next('online'));
  window.addEventListener('offline', () => connectionStatus.next('offline'));
}

export default app;