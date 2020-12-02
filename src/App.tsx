import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Breadcrumb } from 'antd';

function App() {
  return (
    <div>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </Breadcrumb>
      Sistema de biblioteca
    </div>
  );
}

export default App;
