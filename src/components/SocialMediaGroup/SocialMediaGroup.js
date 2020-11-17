import React from "react";
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram,
    FaPinterestP, FaGithub, FaYoutube, FaLinkedinIn, FaWhatsapp, FaShareAlt,
    FaShare, } from 'react-icons/fa';
import StyledSocialMediaGroup from './SocialMediaGroup.styled';

const SocialMediaGroup = (props) =>{
    const { size, url, facebook, twitter, gitHub, whatsApp, share,
        linkedIn, youTube, instaGram, google, pInterest, isRound, color, bgColor, iconType, onClick, onChange  } = props;

    return(
        <StyledSocialMediaGroup className="icon-bar" size={size} url={url} color={color}
            isRound={isRound} bgColor={bgColor} onClick={onClick} {...props}
        >
            {iconType==='facebook' && 
                <a href={url}> <FaFacebookF /> </a>
            } 
             {iconType==='twitter' && 
                <a href={url}> <FaTwitter /> </a>
            }
             {iconType==='gitHub' && 
                <a href={url}> <FaGithub /> </a>
            }
             {iconType==='google' && 
                <a href={url}> <FaGoogle /> </a>
            }
             {iconType==='whatsApp' && 
                <a href={url}> <FaWhatsapp /> </a>
            }
             {iconType==='instaGram' && 
                <a href={url}> <FaInstagram /> </a>
            }
             {iconType==='youTube' && 
                <a href={url}> <FaYoutube /> </a>
            }
             {iconType==='linkedIn' && 
                <a href={url}> <FaLinkedinIn /> </a>
            }
             {iconType==='pInterest' && 
                <a href={url}> <FaPinterestP /> </a>
            }
             {iconType==='share' && 
                <a href={url}> <FaShareAlt /> </a>
            }  
         </StyledSocialMediaGroup>
      
      );
}

export default SocialMediaGroup;