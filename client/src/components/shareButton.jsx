import React from "react";
import share from '../assets/icons/global/Share.svg'
const ShareButton = ({title}) => {
    const handleShare = async() =>{
        try {
            if(navigator.share){
                await navigator.share({
                    title: `product name${title}`,
                    text: 'here is an interesting link',
                    url: window.location.href
                })
                 alert(`product name: ${title}`)
            }else{
                alert("Your browser does not support the share API")
            }
        } catch (error) {
            console.error("Errorsharing the link", error)
        }
    }

    return <img onClick={handleShare} className=" cursor-pointer" src={share} alt="" />;
};

export default ShareButton;
