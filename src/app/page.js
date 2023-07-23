'use client'
import { Button, ConfigProvider } from 'antd';
import React from 'react';
import theme from '../theme/themeConfig';
import { Layout, Space } from 'antd';
const { Header, Footer, Sider, Content } = Layout;


const HomePage = () => (
  <ConfigProvider theme={theme}>
    <div className="App">
      <Layout>
        <Header>
          Header
        </Header>
        <Content>
          Content
        </Content>
        <Footer>
          Footer
        </Footer>        
      </Layout>
    </div>
  </ConfigProvider>
);

export default HomePage;