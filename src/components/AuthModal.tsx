import React, { useContext } from 'react';
import { X } from 'lucide-react';
import { AuthContext } from '../contexts/AuthContext';
import SignIn from './SignIn';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const { user } = useContext(AuthContext);

  if (!isOpen || user) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-800 rounded-lg p-8 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-200"
        >
          <X size={24} />
        </button>
        <SignIn onClose={onClose} />
      </div>
    </div>
  );
};

export default AuthModal;