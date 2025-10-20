import React, { useState } from 'react';
import { addToDB, getAppsDB } from '../../utilities/AddToDB/AddToDb';
import { shortNum } from '../../utilities/shortNum/shortNum';
import { toast } from 'react-toastify';
import downloadImg from '/src/assets/icon-downloads.png'
import ratingsImg from '/src/assets/icon-ratings.png'
import reviewsImg from '/src/assets/icon-review.png'

const InstallCard = ({ single }) => {
    
    let {id, image, title, companyName, size, reviews, ratingAvg, downloads} = single
    

    const appInclude = () => {
    let apps = getAppsDB()
    console.log(apps);
    if (apps.includes(id)) {
        return true
    }
    else {
        return false
    }
    }
    const [clicked, setClicked] = useState(appInclude());
    
    const handleInstall = () => {
        addToDB(id)
        setClicked(appInclude())
        toast.success(`Installation Successful`)
    }

    downloads=shortNum(downloads)


    if (String(reviews).length > 6) {
        reviews = Math.round(reviews / 1000000) + 'M'
    }
    else if (String(reviews).length > 3) {
        reviews = Math.round(reviews / 1000) + 'K'
    }
    return (
       <div className='text-left flex gap-10'>
            <div>
                <img src={image} alt={`${title} Logo`} className='w-[350px] aspect-square'/>
            </div>
           <div className='flex flex-col justify-between'>
               <div>
                    <h4 className='text-[#001931] text-[2rem] font-bold'>{title}</h4>
                    <p className='text-[#627382] text-xl'>Developed by <span className='font-semibold bg-[linear-gradient(125deg,_#632EE3_5.68%,_#9F62F2_88.38%)] bg-clip-text text-transparent'>{companyName}</span></p>
                </div>
                <hr className='w-full h-[1px] opacity-20 text-[#001931]'/>
                <div className='flex gap-6'>
                    <Info type='downloads' info={downloads} />
                    <Info type='ratings' info={ratingAvg} />
                    <Info type='review' info={reviews} />
               </div>
                <button onClick={handleInstall} className={`btn text-xl relative font-semibold py-3.5 px-5 w-fit ${clicked ? 'btn-disabled' : 'bg-[#00D390] text-white'}`}>
                    <span className="invisible opacity-0" aria-hidden="true">{`install now (${size} MB)`}</span>
                    <span className="absolute inset-0 flex items-center justify-center">{`${clicked?'installed': `install now (${size} MB)`}`}</span>
                </button>
           </div>
       </div>
    );
};


const Info= ({type, info}) => {
    return (
        <div className='w-[150px]'>
            <img src={type=='downloads'? downloadImg: type=='ratings'? ratingsImg: reviewsImg} alt={type} />
            <p className='#001931 opacity-80'>{type=='downloads'? 'Downloads': type=='ratings'? 'Average Ratings': 'Total Reviews'}</p>
            <h3 className='font-extrabold text-[40px]'>{info}</h3>
        </div>
    );
};



export default InstallCard;