import React from 'react';
import Navbar from '../components/Navbar';
import {
    FacebookOutlined,
    InstagramOutlined,
    LinkedinOutlined,
    XOutlined,
} from '@ant-design/icons';

const Header: React.FC = () => {
    return (
        <header>
            <div className="top-section">
                <div className="languages">
                    <p>Armenian</p>
                    <p>English</p>
                </div>
                <div className="logo">
                    <img src="/images/Logo.png" alt="Logo" />
                </div>
                <div className="socialMediaIcons">
                    <FacebookOutlined />
                    <InstagramOutlined />
                    <LinkedinOutlined />
                    <XOutlined />
                </div>
            </div>

            <Navbar />
        </header>
    );
};

export default Header;
