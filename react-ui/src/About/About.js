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
          <Row >
          <Col xs={24} sm={24} md={24} lg={10} xl={10} style={{horizontalAlign:'center'}}>
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

              
            <Col xs={24} sm={24} md={24} lg={14} xl={14} >
            <Tabs defaultActiveKey="1" >
                <TabPane tab="About Me" key="1">
                <PageHeader
                    className="site-page-header"
                    
                    title="Siva Karthik R"
                    subTitle="Avid Reader, Technology Enthusiast"/>
                    <br />
                <Paragraph>
                    I am a software developer currently employed at Akamai Technologies. I have some web development experience but my interests primarily lie in the area of Machine Learning.
                </Paragraph>
                

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