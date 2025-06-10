/* eslint-disable no-unused-vars */
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Login from './pages/Login';
import Dashboard from './pages/System-Manager/Dashboard';
import ManagerPanel from './pages/System-Manager/ManagerPanel';
import CashierPanel from './pages/System-Manager/CashierPanel';
import WareHouse from './pages/System-Manager/WareHouse';
import Shops from './pages/System-Manager/Shops';
import Vehicles from './pages/System-Manager/Vehicles';
import MainLayout from './components/MainLayout';
import './styles/App.css';
import Products from './pages/System-Manager/Products';
import Account from './pages/System-Manager/Account';
import ForgetPass from './pages/ForgetPass';
import ForgetUn from './pages/ForgetUn';
import Customers from './pages/System-Manager/Customers';
import Employees from './pages/System-Manager/Employees';

function App() {
  const location = useLocation(); // برای گرفتن مسیر فعلی

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Login />} />
        <Route path="/login/forgetPass" element={<ForgetPass />} />
        <Route path="/login/forgetUn" element={<ForgetUn />} />

        <Route element={<MainLayout />}>
          <Route
            path="/Dashboard"
            element={
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.3 }}
                style={{ minHeight: '100%' }}
              >
                <Dashboard />
              </motion.div>
            }
          />
          <Route
            path="/WareHouse"
            element={
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.3 }}
                style={{ minHeight: '100%' }}
              >
                <WareHouse />
              </motion.div>
            }
          />
          <Route
            path="/Shops"
            element={
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.3 }}
                style={{ minHeight: '100%' }}
              >
                <Shops />
              </motion.div>
            }
          />
          <Route
            path="/Vehicles"
            element={
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.3 }}
                style={{ minHeight: '100%' }}
              >
                <Vehicles />
              </motion.div>
            }
          />
          <Route
            path="/Products"
            element={
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.3 }}
                style={{ minHeight: '100%' }}
              >
                <Products />
              </motion.div>
            }
          />
          <Route
            path="/Account"
            element={
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.3 }}
                style={{ minHeight: '100%' }}
              >
                <Account />
              </motion.div>
            }
          />
          <Route
            path="/Customers"
            element={
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.3 }}
                style={{ minHeight: '100%' }}
              >
                <Customers />
              </motion.div>
            }
          />
          <Route
            path="/Employee"
            element={
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.3 }}
                style={{ minHeight: '100%' }}
              >
                <Employees />
              </motion.div>
            }
          />
        </Route>
        
      </Routes>
    </AnimatePresence>
  );
}

export default App;