import React from 'react';
import {Typography,Row,Col,Card,Tabs,PageHeader} from 'antd';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';



import EducationComponent from './Education';
import WorkExperienceComponent from './WorkExperience';
import GoodreadsComponent from './Goodreads';
const { TabPane } = Tabs;
const { Paragraph } = Typography;
  
export default class AboutComponent extends React.Component {
    render(){
        return (
            <>
          <Row justify="center">
          
          <Col xs={24} sm={24} md={24} lg={6} xl={6} style={{horizontalAlign:'center'}}>
                <Card
                    className="photo-card"
                    cover={
                    <img
                        alt="Siva Karthik"
                        src={require('../sivakarthik.jpg')}
                        
                    />
                    }
                    actions={[
                        <GithubOutlined key="github" onClick={()=> window.open("https://github.com/sivakarthik51", "_blank")}/>,
                        <LinkedinOutlined key="linkedin" onClick={()=> window.open("https://www.linkedin.com/in/sivakarthik51/", "_blank")}/>
                    ]}
                    >
                </Card>
           </Col>

              &nbsp;&nbsp;&nbsp;
            <Col xs={24} sm={24} md={24} lg={16} xl={16} style={{horizontalAlign:'center'}} >
            <Tabs defaultActiveKey="1" >
                <TabPane tab="About Me" key="1">
                <PageHeader
                    className="site-page-header"
                    
                    title="Siva Karthik Ramesh"
                    subTitle={<span className="sub-title">Avid Reader, Technology Enthusiast</span>}/>
                    <br />
                    <Card>
                <Paragraph justify>
                    <ul>
                        <li>Currently a Master's student at Georgia Institute of Technology majoring in Computer Science (specialization in Machine Learning).</li>
                        <li><strong>Looking for Full Time Software Engineer/Senior Software Engineer or Full Stack Engineer Opportunities.</strong></li>
                        <li>I have 4 years of work experience spanning across multiple domains.</li>
                        <li>I build web applications out of topics that I learn in order to understand it better and it has become a hobby. [See Portfolio]</li>
                    </ul>
                </Paragraph>
                </Card>

                </TabPane>
                <TabPane tab="Education" key="2">
                    <Card title="Education" bordered={true}>
                        <EducationComponent />
                    </Card>
                </TabPane>
                <TabPane tab="Work Experience" key="3">
                    <Card title="Work Experience" bordered={true}>
                        <WorkExperienceComponent />
                    </Card>
                </TabPane>
                <TabPane tab="Goodreads" key="4"> 
                    <GoodreadsComponent />
                </TabPane>
               
            </Tabs>
               
                </Col>
                     
                </Row>
          </>
        )
    }
}