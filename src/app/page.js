'use client'
import { Button, ConfigProvider } from 'antd';
import React from 'react';
import theme from '../theme/themeConfig';
import { Layout, Space } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import List from "../components/List";

const HomePage = () => (
  <ConfigProvider theme={theme}>
    <div className="App">
      <Layout>
        <Header style={{color: '#fff'}}>
          My Apps name
        </Header>
        <Content>
          <List />
        </Content>
        <Footer>
          &copy; Copyright 2023
        </Footer>        
      </Layout>
    </div>
  </ConfigProvider>
);

export default HomePage;