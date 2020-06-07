import './App.css';
import React from 'react';
import { Layout, Menu } from 'antd';
import { MemoryRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import AboutComponent from './About/About';
import PortfolioComponent from './Portfolio/Portfolio';
import ContactComponent from './Contact/Contact';

import { MailOutlined,SmileOutlined,CodeOutlined, MenuOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

const {SubMenu} = Menu;



function App() {
  return (
    <Router>
      <Layout className="layout">
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" >
        <img style={{height:'31px',marginBottom:'24px'}} src={require('./logo.png')} alt="logo" /> 
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
          <Menu.Item key="1" className="menuExpanded" icon={<SmileOutlined />} >About<Link to='/about' /></Menu.Item>
          <Menu.Item key="2" className="menuExpanded" icon={<CodeOutlined />}>Portfolio<Link to='/portfolio' /></Menu.Item>
          <Menu.Item key="3" className="menuExpanded" icon={<MailOutlined />}>Contact<Link to='/contact' /></Menu.Item>

        <SubMenu icon={<MenuOutlined />} className="subMenu">
          <Menu.Item key="1" icon={<SmileOutlined />} >About<Link to='/about' /></Menu.Item>
          <Menu.Item key="2" icon={<CodeOutlined />}>Portfolio<Link to='/portfolio' /></Menu.Item>
          <Menu.Item key="3" icont={<MailOutlined />}>Contact<Link to='/contact' /></Menu.Item>
        </SubMenu>
      </Menu>
    </Header>
    <Content className = "site-layout" style={{ padding: '0 20px', marginTop: 64 }}>
      
        <div className="site-layout-content" style={{ padding: 24 }}>
          <Route path="/" render={() => (
                      <Redirect to="/about" />
                    )} />
          <Route path = "/about" component={AboutComponent}/>
          <Route path = "/portfolio" component = {PortfolioComponent} />
          <Route path = "/contact" component = {ContactComponent} />
        </div>
      
    </Content>
    <Footer className="site-footer" style={{ textAlign: 'center',position:'relative',top:'100%',width:'100%' }}>Siva Karthik ©{(new Date().getFullYear())} </Footer>
  </Layout>
  </Router>
    
  );
}

export default App;
