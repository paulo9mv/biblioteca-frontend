import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  BookOutlined
} from '@ant-design/icons';
import React from 'react';
import './Main.css'
import { Link } from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
export default class Main extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" style={{color: '#FFFFFF'}}>
            <BookOutlined style={{color:'#FFFFFF'}}/>
            Biblioteca PDS
          </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              <Link to='/emprestimo'>
                <span>Empréstimo</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Devolução
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="Clientes">
              <Menu.Item key="3">
                <Link to='/clientes'>
                  <span>Visualizar</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to='/cadastracliente'>
                  <span>Cadastrar</span>
                </Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Livros">
              <Menu.Item key="6">
                <Link to='/livros'>
                  <span>Visualizar</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="8">
                <Link to='/cadastralivros'>
                  <span>Cadastrar</span>
                </Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            {this.props.children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}