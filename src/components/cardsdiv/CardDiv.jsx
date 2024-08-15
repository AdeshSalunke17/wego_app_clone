import React, { useTransition } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Card from './Card'
import style from './CardDiv.module.css'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useTranslation } from 'react-i18next';
const cardData=[
    {
        id:1,
        path:"https://www.wego.co.in/visas/?wg_source=Onsite&wg_medium=carousel&wg_campaign=visa-desktop",
        imgurl:"https://zen.wego.com/marketing/carousel/Artboard%203%20(1)_313338516.png"
    },
    {
        id:2,
        path:"https://www.wego.co.in/flights?provider_codes=travomint&wg_source=merchflights&wg_medium=carousel&wg_campaign=travomint-desktop",
        imgurl:"https://zen.wego.com/marketing/carousel/travomint%20(1)_313346804.jpg"
    },
    {
        id:3,
        path:"https://www.wego.co.in/flights?provider_codes=travomint&wg_source=merchflights&wg_medium=carousel&wg_campaign=travomint-desktop",
        imgurl:"https://zen.wego.com/marketing/carousel/yatra_295889557.jpg"
    },
    {
        id:4,
        path:"https://www.wego.co.in/flights?provider_codes=travomint&wg_source=merchflights&wg_medium=carousel&wg_campaign=travomint-desktop",
        imgurl:"https://zen.wego.com/marketing/carousel/Color%20Options_295889833.jpg"
    },
    {
        id:5,
        path:"https://www.wego.co.in/flights?provider_codes=travomint&wg_source=merchflights&wg_medium=carousel&wg_campaign=travomint-desktop",
        imgurl:"https://zen.wego.com/marketing/carousel/Tripodeal%20(1)_305041476.jpg"
    }

]
function CardDiv() {
    const [displayArray,setDisplayArray]=useState(()=>{
        return cardData.filter((img,index)=> index<=2)
    })
   const next=(ref)=>{
    ref.shift()
    ref.push(cardData[cardData.indexOf(ref[ref.length-1])+1])
    const newRef=[...ref]
    setDisplayArray(newRef)
   }
   const back=(ref)=>{
    ref.pop()
    ref.unshift(cardData[cardData.indexOf(ref[0])-1])
    const newRef=[...ref]
    setDisplayArray(newRef)
   }
   const checkIfStartingIsEqual=()=>{
        if(displayArray[0]===cardData[0])
            return true
        else
            return false
   }
   const checkIfEndingIsEqual=()=>{
    if(displayArray[displayArray.length-1]===cardData[cardData.length-1])
        return true
    else
        return false
}
const {i18n}=useTranslation()
  return (
    <div className='w-100 d-flex '>
        <div className='col-1 py-5'>
            <button style={{float:"right",top:"77px",left:"32px"}} className={`${style.buttonCss} shadow ${checkIfStartingIsEqual() && style.backButtonHide}`} 
            onClick={()=>{
                if(i18n.language==='en')
                    back(displayArray)
                else
                    next(displayArray)
                }}><IoIosArrowBack /></button>
        </div>
        <div className='col-10 py-5 d-flex' style={{height:"300px"}}>
            {
                displayArray.map((img)=>{
                    return (
                        <div className='col-4 p-3' key={img.id}>
                            <Card imgurl={img.imgurl} path={img.path}/>
                        </div>
                    )
                })
            }
        </div>
        <div className='col-1 py-5'>
            <button style={{float:"left",top:"77px",right:"32px"}} className={`${style.buttonCss} shadow ${checkIfEndingIsEqual() && style.nextButtonHide}`} 
            onClick={()=>{
                if(i18n.language==='en')
                    next(displayArray)
                else
                    back(displayArray)
                }}><IoIosArrowForward /></button>
        </div>
    </div>
  )
}

export default CardDiv


// import React, { useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
// import Card from './Card';
// import style from './CardDiv.module.css';

// const cardData = [
//   {
//     id: 1,
//     path: 'https://www.wego.co.in/visas/?wg_source=Onsite&wg_medium=carousel&wg_campaign=visa-desktop',
//     imgurl: 'https://zen.wego.com/marketing/carousel/Artboard%203%20(1)_313338516.png'
//   },
//   {
//     id: 2,
//     path: 'https://www.wego.co.in/flights?provider_codes=travomint&wg_source=merchflights&wg_medium=carousel&wg_campaign=travomint-desktop',
//     imgurl: 'https://zen.wego.com/marketing/carousel/travomint%20(1)_313346804.jpg'
//   },
//     {
//         id:3,
//         path:"https://www.wego.co.in/flights?provider_codes=travomint&wg_source=merchflights&wg_medium=carousel&wg_campaign=travomint-desktop",
//         imgurl:"https://zen.wego.com/marketing/carousel/yatra_295889557.jpg"
//     },
//     {
//         id:4,
//         path:"https://www.wego.co.in/flights?provider_codes=travomint&wg_source=merchflights&wg_medium=carousel&wg_campaign=travomint-desktop",
//         imgurl:"https://zen.wego.com/marketing/carousel/Color%20Options_295889833.jpg"
//     },
//     {
//         id:5,
//         path:"https://www.wego.co.in/flights?provider_codes=travomint&wg_source=merchflights&wg_medium=carousel&wg_campaign=travomint-desktop",
//         imgurl:"https://zen.wego.com/marketing/carousel/Tripodeal%20(1)_305041476.jpg"
//     }
//   // Add more card data as needed
// ];

// function CardDiv() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const { i18n } = useTranslation();

//   const next = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === cardData.length - 1 ? 0 : prevIndex + 1));
//   };

//   const back = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? cardData.length - 1 : prevIndex - 1));
//   };

//   const translateXValue = -currentIndex * 100; // Assuming each card takes 100% width

//   return (
//     <div className="w-100 d-flex">
//       <div className="col-1 py-5">
//         <button
//           className={`${style.buttonCss} shadow ${currentIndex === 0 && style.backButtonHide}`}
//           onClick={i18n.language === 'en' ? back : next}
//         >
//           <IoIosArrowBack />
//         </button>
//       </div>
//       <div className="col-10 py-5 d-flex" style={{ overflow: 'hidden' }}>
//         <div
//           className="d-flex"
//           style={{
//             transform: `translateX(${translateXValue}%)`,
//             transition: 'transform 0.5s ease-in-out',
//             width: `${cardData.length * 100}%`
//           }}
//         >
//           {cardData.map((card) => (
//             <div className="col-4 p-3" key={card.id}>
//               <Card imgurl={card.imgurl} path={card.path} />
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="col-1 py-5">
//         <button
//           className={`${style.buttonCss} shadow ${currentIndex === cardData.length - 1 && style.nextButtonHide}`}
//           onClick={i18n.language === 'en' ? next : back}
//         >
//           <IoIosArrowForward />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default CardDiv;