import './App.css';
import React from 'react';
import logo from './logo.svg';
import { Layout, Menu, Breadcrumb } from 'antd';
import { MemoryRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import AboutComponent from './About/About';
import PortfolioComponent from './Portfolio/Portfolio';
import ContactComponent from './Contact/Contact';
import { MailOutlined,SmileOutlined,CodeOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;



function App() {
  return (
    <Router>
      <Layout className="layout">
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" >
          <logo />
        </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1"> <SmileOutlined />About<Link to='/about' /></Menu.Item>
        <Menu.Item key="2"><CodeOutlined />Portfolio<Link to='/portfolio' /></Menu.Item>
        <Menu.Item key="3"><MailOutlined />Contact<Link to='/contact' /></Menu.Item>
      </Menu>
    </Header>
    <Content className = "site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Hello</Breadcrumb.Item>
        <Breadcrumb.Item>There</Breadcrumb.Item>
        <Breadcrumb.Item>Stranger</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content" style={{ padding: 24, minHeight: '90vh' }}>
      <Route path="/" render={() => (
                    <Redirect to="/about" />
                  )} />
        <Route path = "/about" component={AboutComponent}/>
        <Route path = "/portfolio" component = {PortfolioComponent} />
        <Route path = "/contact" component = {ContactComponent} />
      </div>
      
    </Content>
    <Footer style={{ textAlign: 'center',position:'absolute',top:'100vh',width:'100%' }}>Siva Karthik ©{(new Date().getFullYear())} </Footer>
  </Layout>
  </Router>
    
  );
}

export default App;
