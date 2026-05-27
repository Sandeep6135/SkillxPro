import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Menu, X, Coins, User as UserIcon, LogOut, ShieldAlert, BookOpen, MessageSquare } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { user, adminUser, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
    navigate('/');
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-primary/10 shadow-glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <span className="text-2xl">🎓</span>
              <span className="text-xl font-black bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
                SkillxPro
              </span>
            </Link>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-textSecondary'
              }`}
            >
              Home
            </Link>
            
            {user && (
              <>
                <Link 
                  to="/dashboard" 
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive('/dashboard') ? 'text-primary' : 'text-textSecondary'
                  }`}
                >
                  Dashboard
                </Link>
              </>
            )}

            {adminUser && (
              <Link 
                to="/admin" 
                className={`flex items-center text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors ${
                  isActive('/admin') ? 'underline underline-offset-4' : ''
                }`}
              >
                <ShieldAlert className="w-4 h-4 mr-1" />
                Admin Panel
              </Link>
            )}

            {/* User Controls */}
            {user ? (
              <div className="flex items-center space-x-4">
                {/* Tokens display */}
                <div className="flex items-center bg-primary/10 border border-primary/20 rounded-full px-3 py-1 text-sm text-primary-light font-bold shadow-glow animate-pulse">
                  <Coins className="w-4 h-4 mr-1 text-yellow-400 fill-yellow-400" />
                  <span>{user.tokens} Tokens</span>
                </div>

                {/* Profile Dropdown */}
                <div className="relative">
                  <button 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center space-x-2 bg-bg2 border border-primary/15 rounded-full px-3 py-1.5 hover:border-primary/45 transition-all text-sm font-medium text-textPrimary"
                  >
                    <img 
                      src={user.avatarUrl || `https://api.dicebear.com/7.x/initials/svg?seed=${user.name}`} 
                      alt={user.name} 
                      className="w-6 h-6 rounded-full border border-primary/30"
                    />
                    <span className="max-w-[100px] truncate">{user.name}</span>
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 rounded-xl bg-bg2 border border-primary/25 shadow-glass py-1 z-50 text-sm">
                      <div className="px-4 py-2 border-b border-primary/10 text-xs text-textSecondary truncate">
                        Signed in as <br />
                        <span className="font-semibold text-textPrimary">{user.identifier}</span>
                      </div>
                      <Link 
                        to="/dashboard?tab=profile" 
                        onClick={() => setIsDropdownOpen(false)}
                        className="flex items-center px-4 py-2 text-textSecondary hover:text-textPrimary hover:bg-primary/10 transition-colors"
                      >
                        <UserIcon className="w-4 h-4 mr-2" />
                        My Profile
                      </Link>
                      <Link 
                        to="/dashboard?tab=skills" 
                        onClick={() => setIsDropdownOpen(false)}
                        className="flex items-center px-4 py-2 text-textSecondary hover:text-textPrimary hover:bg-primary/10 transition-colors"
                      >
                        <BookOpen className="w-4 h-4 mr-2" />
                        My Skills
                      </Link>
                      <Link 
                        to="/dashboard?tab=chat" 
                        onClick={() => setIsDropdownOpen(false)}
                        className="flex items-center px-4 py-2 text-textSecondary hover:text-textPrimary hover:bg-primary/10 transition-colors"
                      >
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Chat Hub
                      </Link>
                      <button 
                        onClick={handleLogout}
                        className="w-full flex items-center px-4 py-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 border-t border-primary/10 transition-colors text-left"
                      >
                        <LogOut className="w-4 h-4 mr-2" />
                        Log Out
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : adminUser ? (
              <div className="flex items-center space-x-4">
                <span className="text-xs uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full px-2.5 py-0.5 font-semibold">
                  Admin
                </span>
                <button 
                  onClick={handleLogout}
                  className="flex items-center bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 text-red-400 hover:text-red-300 text-sm font-semibold rounded-full px-4 py-1.5 transition-all"
                >
                  <LogOut className="w-4 h-4 mr-1" />
                  Log Out
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link 
                  to="/login" 
                  className="text-sm font-semibold text-textPrimary hover:text-primary transition-colors"
                >
                  Sign In
                </Link>
                <Link 
                  to="/login?tab=register" 
                  className="bg-gradient-to-r from-primary to-primary-light hover:opacity-90 text-white text-sm font-semibold px-5 py-2 rounded-full shadow-glow transition-all"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>

          {/* Hamburger menu for mobile */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-textSecondary hover:text-textPrimary focus:outline-none p-1"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-bg2 border-b border-primary/10 px-4 pt-2 pb-4 space-y-2 animate-fade-in shadow-glass">
          <Link 
            to="/" 
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isActive('/') ? 'bg-primary/10 text-primary' : 'text-textSecondary hover:text-textPrimary'
            }`}
          >
            Home
          </Link>
          
          {user && (
            <>
              <Link 
                to="/dashboard" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/dashboard') ? 'bg-primary/10 text-primary' : 'text-textSecondary hover:text-textPrimary'
                }`}
              >
                Dashboard
              </Link>
              <div className="flex items-center justify-between px-3 py-2 text-primary-light font-bold text-sm bg-primary/10 rounded-lg">
                <div className="flex items-center">
                  <Coins className="w-4 h-4 mr-1 text-yellow-400 fill-yellow-400" />
                  <span>Your Balance</span>
                </div>
                <span>{user.tokens} Tokens</span>
              </div>
            </>
          )}

          {adminUser && (
            <Link 
              to="/admin" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 text-emerald-400 font-medium hover:bg-emerald-500/10 rounded-md"
            >
              👮 Admin Panel
            </Link>
          )}

          <div className="pt-4 border-t border-primary/10">
            {user ? (
              <button 
                onClick={handleLogout}
                className="w-full flex items-center px-3 py-2 text-red-400 hover:bg-red-500/10 rounded-md font-medium"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Log Out
              </button>
            ) : adminUser ? (
              <button 
                onClick={handleLogout}
                className="w-full flex items-center px-3 py-2 text-red-400 hover:bg-red-500/10 rounded-md font-medium"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Log Out Admin
              </button>
            ) : (
              <div className="space-y-2">
                <Link 
                  to="/login" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-center w-full border border-primary/20 text-textPrimary py-2 rounded-full text-sm font-semibold hover:border-primary/50"
                >
                  Sign In
                </Link>
                <Link 
                  to="/login?tab=register" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-center w-full bg-gradient-to-r from-primary to-primary-light text-white py-2 rounded-full text-sm font-semibold shadow-glow"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
