import React from 'react'
import Header from './Header';
import Footer from './Footer';

import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
const { Content } = Layout;

const MainLayout: React.FC = () => {
  return (
    <Layout className='mainLayout'>
        <Header />
        <Content className='container'>
            <Outlet />
        </Content>
        <Footer />
    </Layout>
  )
}

export default MainLayout;