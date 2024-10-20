import React, { useState, useContext, useRef } from 'react';
import { UserPlus, Bell, MessageSquare, HelpCircle, Menu, ChevronDown, FileText, RefreshCcw, Settings, Users, ExternalLink, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import Notifications from './Notifications';
import Messages from './Messages';
import { AuthContext } from '../contexts/AuthContext';
import useOutsideClick from '../hooks/useOutsideClick';

interface HeaderProps {
  openAuthModal: () => void;
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ openAuthModal, toggleSidebar, isSidebarOpen }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const { user, logout } = useContext(AuthContext);

  const notificationsRef = useRef<HTMLDivElement>(null);
  const messagesRef = useRef<HTMLDivElement>(null);
  const profileMenuRef = useRef<HTMLDivElement>(null);

  useOutsideClick(notificationsRef, () => setShowNotifications(false));
  useOutsideClick(messagesRef, () => setShowMessages(false));
  useOutsideClick(profileMenuRef, () => setShowProfileMenu(false));

  const handleLogout = () => {
    setShowProfileMenu(false);
    logout();
  };

  const getBusinessName = () => {
    if (user?.email === 'admin@senderachristianacademy.com') {
      return 'Sendera Christian Academy';
    }
    return 'Apperion Software Solution';
  };

  return (
    <header className="bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          {user ? (
            <button onClick={toggleSidebar} className="text-gray-300 hover:text-white mr-4">
              <Menu size={24} />
            </button>
          ) : null}
          {(!user || !isSidebarOpen) && (
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <UserPlus size={24} className="text-white" />
              </div>
              <span className="text-2xl font-semibold text-white">FastTrack</span>
            </Link>
          )}
        </div>
        <nav className="hidden md:flex space-x-6 items-center">
          {!user && (
            <>
              <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
              <Link to="/about" className="text-gray-300 hover:text-white">About</Link>
              <Link to="/pricing" className="text-gray-300 hover:text-white">Pricing</Link>
              <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
            </>
          )}
          {user ? (
            <>
              <div ref={notificationsRef} className="relative">
                <button className="text-gray-300 hover:text-white relative" onClick={() => setShowNotifications(!showNotifications)}>
                  <Bell size={24} />
                  <span className="absolute top-0 right-0 bg-red-500 rounded-full w-2 h-2"></span>
                </button>
                {showNotifications && <Notifications />}
              </div>
              <div ref={messagesRef} className="relative">
                <button className="text-gray-300 hover:text-white relative" onClick={() => setShowMessages(!showMessages)}>
                  <MessageSquare size={24} />
                  <span className="absolute top-0 right-0 bg-red-500 rounded-full w-2 h-2"></span>
                </button>
                {showMessages && <Messages />}
              </div>
              <button className="text-gray-300 hover:text-white">
                <HelpCircle size={24} />
              </button>
              <div ref={profileMenuRef} className="relative">
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white"
                >
                  <span className="truncate max-w-[150px]" title={user.email}>{user.email}</span>
                  <ChevronDown size={20} />
                </button>
                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 w-64 bg-gray-800 rounded-md shadow-lg z-20 border border-gray-700">
                    <div className="p-4 border-b border-gray-700">
                      <h3 className="text-lg font-semibold text-white">{getBusinessName()}</h3>
                    </div>
                    <div className="p-2">
                      <ProfileMenuItem icon={<FileText size={18} />} text="Billing and invoices" />
                      <ProfileMenuItem icon={<RefreshCcw size={18} />} text="Subscriptions" />
                      <ProfileMenuItem icon={<Settings size={18} />} text="Employer settings" />
                      <ProfileMenuItem icon={<Users size={18} />} text="Company page" isExternal />
                      <ProfileMenuItem icon={<Users size={18} />} text="Users" />
                      <ProfileMenuItem icon={<Settings size={18} />} text="Integrations" />
                      <ProfileMenuItem icon={<MessageSquare size={18} />} text="Contact us" />
                    </div>
                    <div className="p-4 border-t border-gray-700">
                      <p className="text-sm text-gray-400 mb-2 truncate" title={user.email}>{user.email}</p>
                      <ProfileMenuItem icon={<Settings size={18} />} text="Account settings" />
                      <ProfileMenuItem icon={<ExternalLink size={18} />} text="Visit Indeed for job seekers" isExternal />
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-2 py-1 text-gray-300 hover:bg-gray-700 rounded flex items-center space-x-2"
                      >
                        <LogOut size={18} />
                        <span>Sign out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <button
              onClick={openAuthModal}
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300"
            >
              Sign In
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

interface ProfileMenuItemProps {
  icon: React.ReactNode;
  text: string;
  isExternal?: boolean;
}

const ProfileMenuItem: React.FC<ProfileMenuItemProps> = ({ icon, text, isExternal }) => (
  <button className="w-full text-left px-2 py-1 text-gray-300 hover:bg-gray-700 rounded flex items-center space-x-2">
    {icon}
    <span>{text}</span>
    {isExternal && <ExternalLink size={14} className="ml-auto" />}
  </button>
);

export default Header;