import { Col, Layout, Menu } from 'antd';
import {
  UserOutlined,
  BookOutlined,
  HddOutlined
} from '@ant-design/icons';
import React from 'react';
import './Main.css'
import imagem from '../assets/img/book.png'
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
        <div className="logo">
          <img src={imagem} height={150} alt={'logo'}/>
          </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">        
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
            <SubMenu key="sub2" icon={<BookOutlined />} title="Livros">
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
            <SubMenu key="sub3" icon={<HddOutlined />} title="Empréstimos">
              <Menu.Item key="10">
                <Link to='/emprestimo'>
                  <span>Emprestar</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="11">
                <Link to='/visualizarEmprestimo'>
                  <span>Visualizar</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="12">
                <Link to='/devolucao'>
                  <span>Devolução</span>
                </Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ paddingLeft: 32, fontSize: 18 }}>Biblioteca</Header>
          <Content style={{ margin: '16px 16px' }}>
            <Col span={16}>
              {this.props.children}
            </Col>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}