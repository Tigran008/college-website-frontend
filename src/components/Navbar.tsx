import {
    HomeOutlined,
    AppstoreOutlined,
    InfoCircleOutlined,
    PhoneOutlined,
    UserAddOutlined,
    MobileOutlined,
    MenuOutlined,
    CloseOutlined,
} from '@ant-design/icons';

import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        label: <Link to="/">Գլխավոր</Link>,
        key: 'home',
        icon: <HomeOutlined />,
    },
    {
        label: <Link to="/faculties">Բաժիններ</Link>,
        key: 'faculties',
        icon: <AppstoreOutlined />,
    },
    {
        label: <Link to="/about">Մեր մասին</Link>,
        key: 'aboutUs',
        icon: <InfoCircleOutlined />,
    },
    {
        label: <Link to="/contact">Կապ մեզ հետ</Link>,
        key: 'contact',
        icon: <PhoneOutlined />,
    },
    {
        label: <Link to="/applicant">Դիմորդ</Link>,
        key: 'applicant',
        icon: <UserAddOutlined />,
    },
    {
        label: <Link to="/renforce">REnForce</Link>,
        key: 'renforce',
        icon: <MobileOutlined />,
    },
];

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const location = useLocation();

    return (
        <nav>
            {/* Burger Icon */}
            <motion.button
                className="burger"
                onClick={() => setIsOpen(!isOpen)}
                animate={{ rotate: isOpen ? 180 : 0 }} // Rotate animation
                transition={{ duration: 0.3 }}
            >
                {isOpen ? <CloseOutlined /> : <MenuOutlined />}
            </motion.button>

            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={
                    isOpen
                        ? { height: 'auto', opacity: 1 }
                        : { height: 0, opacity: 0 }
                }
                transition={{ duration: 0.3 }}
                className="mobile-menu"
                onClick={() => setIsOpen(false)} 
            >
                <ul>
                    <li>
                        <Link to="/">Գլխավոր</Link>
                    </li>
                    <li>
                        <Link to="/faculties">Բաժիններ</Link>
                    </li>
                    <li>
                        <Link to="/about">Մեր մասին</Link>
                    </li>
                    <li>
                        <Link to="/contact">Կապ մեզ հետ</Link>
                    </li>
                    <li>
                        <Link to="/applicant">Դիմորդ</Link>
                    </li>
                    <li>
                        <Link to="/renforce">Քոլեջի հավելված</Link>
                    </li>
                </ul>
            </motion.div>

            <Menu
                selectedKeys={[location.pathname.slice(1) || 'home']}
                mode="horizontal"
                items={items}
            />
        </nav>
    );
};

export default Navbar;
