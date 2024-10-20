import React, { useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Briefcase, Users, Calendar, BarChart2, Settings, PlusCircle, ChevronLeft, Menu, UserPlus, Shield } from 'lucide-react';
import { AuthContext } from '../contexts/AuthContext';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleCreateNew = () => {
    navigate('/create-job');
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className={`bg-gray-900 text-white w-64 min-h-screen p-4 fixed left-0 top-0 transition-all duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex justify-between items-center mb-6">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <UserPlus size={20} className="text-white" />
          </div>
          <span className="text-xl font-semibold">FastTrack</span>
        </Link>
        <button onClick={toggleSidebar} className="text-gray-300 hover:text-white">
          <ChevronLeft size={24} />
        </button>
      </div>
      <nav>
        <ul className="space-y-2">
          <li>
            <button onClick={handleCreateNew} className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-800 w-full text-left">
              <PlusCircle size={20} />
              <span>Create new</span>
            </button>
          </li>
          <li>
            <Link to="/dashboard" className={`flex items-center space-x-2 p-2 rounded-md hover:bg-gray-800 w-full ${isActive('/dashboard') ? 'bg-gray-800' : ''}`}>
              <Briefcase size={20} />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/jobs" className={`flex items-center space-x-2 p-2 rounded-md hover:bg-gray-800 w-full ${isActive('/jobs') ? 'bg-gray-800' : ''}`}>
              <Briefcase size={20} />
              <span>Jobs</span>
            </Link>
          </li>
          <li>
            <Link to="/candidates" className={`flex items-center space-x-2 p-2 rounded-md hover:bg-gray-800 w-full ${isActive('/candidates') ? 'bg-gray-800' : ''}`}>
              <Users size={20} />
              <span>Candidates</span>
            </Link>
          </li>
          <li>
            <Link to="/interviews" className={`flex items-center space-x-2 p-2 rounded-md hover:bg-gray-800 w-full ${isActive('/interviews') ? 'bg-gray-800' : ''}`}>
              <Calendar size={20} />
              <span>Interviews</span>
            </Link>
          </li>
          <li>
            <Link to="/analytics" className={`flex items-center space-x-2 p-2 rounded-md hover:bg-gray-800 w-full ${isActive('/analytics') ? 'bg-gray-800' : ''}`}>
              <BarChart2 size={20} />
              <span>Analytics</span>
            </Link>
          </li>
          <li>
            <Link to="/settings" className={`flex items-center space-x-2 p-2 rounded-md hover:bg-gray-800 w-full ${isActive('/settings') ? 'bg-gray-800' : ''}`}>
              <Settings size={20} />
              <span>Settings</span>
            </Link>
          </li>
          {user?.isAdmin && (
            <li>
              <Link to="/admin" className={`flex items-center space-x-2 p-2 rounded-md hover:bg-gray-800 w-full ${isActive('/admin') ? 'bg-gray-800' : ''}`}>
                <Shield size={20} />
                <span>Admin Panel</span>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;