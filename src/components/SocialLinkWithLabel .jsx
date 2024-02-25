import React, { useState } from 'react';
import { IoLogoInstagram, IoLogoWhatsapp, IoLogoTwitter } from "react-icons/io";
import { FiLinkedin, FiGithub } from "react-icons/fi";

const SocialLinkWithLabel = ({ href, title, icon, iconName }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const renderIcon = () => {
        if (icon === 'instagram') {
            return <IoLogoInstagram className={`text-2xl  text-rose-400 m-3 md:m-px ${isHovered ? 'hover:text-sky-500 text-4xl' : ''}`} />;
        } else if (icon === 'whatsapp') {
            return <IoLogoWhatsapp className={`text-2xl  text-rose-400 m-3 md:m-px ${isHovered ? 'hover:text-sky-500 text-4xl' : ''}`} />;
        } else if (icon === 'twitter') {
            return <IoLogoTwitter className={`text-2xl  text-rose-400 m-3 md:m-px ${isHovered ? 'hover:text-sky-500 text-4xl' : ''}`} />;
        } else if (icon === 'linkedin') {
            return <FiLinkedin className={`text-2xl  text-rose-400 m-3 md:m-px ${isHovered ? 'hover:text-sky-500 text-4xl' : ''}`} />;
        } else if (icon === 'github') {
            return <FiGithub className={`text-2xl  text-rose-400 m-3 md:m-px ${isHovered ? 'hover:text-sky-500 text-4xl' : ''}`} />;
        } else {
            return null;
        }
    };

    return (
        <a
            href={href}
            title={title}
            target="_blank"
            className="relative inline-block "
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {renderIcon()}
            {isHovered && (
                <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white p-2 bg-slate-800 rounded-md border-2 border-slate-500 shadow-md">
                    {iconName}
                </span>
            )}
        </a>
    );
};

export default SocialLinkWithLabel;
