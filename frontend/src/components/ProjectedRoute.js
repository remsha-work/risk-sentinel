// src/components/ProtectedRoute.js - ROLE-BASED REDIRECT
import { Navigate, useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/login" />;
  
  // Role-based dashboard redirect
  const roleDashboards = {
    'Admin': '/admin-dashboard',
    'PM': '/pm-dashboard', 
    'Risk Analyst': '/analyst-dashboard',
    'TL': '/tl-dashboard',
    'SrDev': '/srdev-dashboard',
    'JrDev': '/jrdev-dashboard',
    'Vendor': '/vendor-portal'
  };
  
  return <Navigate to={roleDashboards[user.role] || '/dashboard'} />;
};
export default ProtectedRoute;
