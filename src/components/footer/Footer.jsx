import React from 'react';
import { FaGithub, FaLinkedin, FaCloudRain } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer">
            <p>Made with  💚 &nbsp;<FaCloudRain /> &nbsp; in Joinville  , Brazil</p>
            <div className="social-icons">
                <a href="https://github.com/dioLemos" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/pedro-diogenes-lemos/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
            </div>
        </div>
    );
}

export default Footer;