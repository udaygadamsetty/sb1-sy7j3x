import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import AuthModal from './components/AuthModal';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import JobPosts from './components/JobPosts';
import CreateJob from './components/CreateJob';
import Candidates from './components/Candidates';
import Interviews from './components/Interviews';
import Analytics from './components/Analytics';
import Tools from './components/Tools';
import SmartSourcing from './components/SmartSourcing';
import AdminPanel from './components/AdminPanel';
import { AuthContext } from './contexts/AuthContext';

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { user } = React.useContext(AuthContext);

  const openAuthModal = () => {
    setIsAuthModalOpen(true);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col font-sans">
      <Header 
        openAuthModal={openAuthModal}
        toggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
      />
      <div className="flex flex-grow">
        {user && <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}
        <main className={`flex-grow p-6 ${user ? (isSidebarOpen ? 'ml-64' : 'ml-16') : ''} transition-all duration-300`}>
          <Routes>
            <Route path="/" element={user ? <Navigate to="/dashboard" /> : <LandingPage openAuthModal={openAuthModal} />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing openAuthModal={openAuthModal} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/" />} />
            <Route path="/jobs" element={user ? <JobPosts /> : <Navigate to="/" />} />
            <Route path="/create-job" element={user ? <CreateJob /> : <Navigate to="/" />} />
            <Route path="/smart-sourcing" element={user ? <SmartSourcing /> : <Navigate to="/" />} />
            <Route path="/candidates" element={user ? <Candidates /> : <Navigate to="/" />} />
            <Route path="/interviews" element={user ? <Interviews /> : <Navigate to="/" />} />
            <Route path="/analytics" element={user ? <Analytics /> : <Navigate to="/" />} />
            <Route path="/tools" element={user ? <Tools /> : <Navigate to="/" />} />
            <Route path="/admin" element={user?.isAdmin ? <AdminPanel /> : <Navigate to="/" />} />
          </Routes>
        </main>
      </div>
      <Footer />
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </div>
  );
}

export default App;