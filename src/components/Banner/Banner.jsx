import React from 'react';
import heroBg from '/src/assets/hero.png'

const Banner = () => {

    const playStoreLogo = 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_Play_2022_icon.svg';
    const appStoreLogo = 'https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg';

    return (

     <div>
                <h1 className='text-[##001931] text-7xl font-bold opacity-90 bg-[linear-gradient(125deg,_#632EE3_5.68%,_#9F62F2_88.38%)] bg-clip-text'>We Build <br /><span className='text-transparent font-black'>Productive</span> Apps</h1>
                <p className='text-[#627382] text-xl mt-4'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='flex gap-4 mt-10 w-full justify-center'>
                    
                <StoreBtn onClick={() => window.open('https://play.google.com/', '_blank')} logo={playStoreLogo} text='Google Play'/>
                <StoreBtn onClick={() => window.open('https://www.apple.com/app-store/', '_blank')} logo={appStoreLogo} text='App Store'/>
                </div>
                <img className='w-4xl mx-auto mt-10' src={heroBg} alt="Hero Banner" />
     </div>

    );
};

const StoreBtn = ({logo, text, onClick}) => {
    return (
        <button onClick={onClick} className='btn flex gap-2.5 justify-center items-center px-6 py-3 rounded-sm border border-[#D2D2D2] text-xl font-semibold text-[#001931] h-fit'><img className='w-8' src={logo} alt={`${text} logo`} />{text}</button>
    )
}



export default Banner;