import React from 'react';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import {
    FacebookOutlined,
    InstagramOutlined,
    LinkedinOutlined,
    XOutlined,
} from '@ant-design/icons';

const { Text } = Typography;

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="footer">
                <div className="info-section">
                    <div>
                        <div className="logo">
                            <img src="/images/Logo.png" alt="logo" />
                        </div>
                    </div>
                    <div>
                        <div className="info">
                            <Text>info@polytechnic.am</Text>
                            <Text>+374 10 58 01 02</Text>
                            <Text>Հայաստան, ք.Երևան, Տերյան 105, 0009</Text>
                        </div>
                    </div>
                    <div>
                        <div className="pages">
                            <Text>
                                <Link to="/about">Մեր մասին</Link>
                            </Text>
                            <Text>
                                <Link to="/faculties">Բաժիններ</Link>
                            </Text>
                            <Text>
                                <Link to="/contact">Կապ մեզ հետ</Link>
                            </Text>
                        </div>
                    </div>
                </div>

                <div className="social-media-section">
                    <Text className="social-media-section-text">
                        Միացի՛ր Պոլիտեխնիկի Քոլեջին
                    </Text>
                    <div className="socialMediaIcons">
                        <FacebookOutlined />
                        <InstagramOutlined />
                        <LinkedinOutlined />
                        <XOutlined />
                    </div>
                </div>
            </div>

            <div className="copyright">
              <Text>Copyright "© [2025] [PolyTime]. All Rights Reserved."</Text>
            </div>
        </footer>
    );
};

export default Footer;
