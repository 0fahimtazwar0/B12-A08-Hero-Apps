import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';
import ScrollToTop from '../../utilities/ScrollToTop/ScrollToTop';
import { Bounce, ToastContainer } from 'react-toastify';
import { HiBadgeCheck } from 'react-icons/hi';

const Root = () => {

    return (
        <div className='min-h-[100vh] flex flex-col justify-between'>
            <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
            icon={({ type }) => {
          switch (type) {
            case 'success':
              return <HiBadgeCheck color='oklch(72.3% 0.219 149.579)' size='100%'/>;
            case 'warning':
              return <HiBadgeCheck color='oklch(79.5% 0.184 86.047)' size='100%' />;
            default:
              return null;
          }
        }}
      />
            <ScrollToTop/>
            <div>
            <Navbar />
            <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;