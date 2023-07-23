import { Button, ConfigProvider } from 'antd';
import React from 'react';
import theme from '../theme/themeConfig';

const HomePage = () => (
  <ConfigProvider theme={theme}>
    <div className="App">
      <></>
    </div>
  </ConfigProvider>
);

export default HomePage;