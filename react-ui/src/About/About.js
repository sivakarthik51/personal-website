import React from 'react';
import {PageHeader,Timeline,Row,Col,Card,Tabs} from 'antd';
import { BookOutlined } from '@ant-design/icons';


import EducationComponent from './Education';
import WorkExperienceComponent from './WorkExperience';
import GoodreadsComponent from './Goodreads';
const { TabPane } = Tabs;

export default class AboutComponent extends React.Component {
    render(){
        return (
            <>
            <PageHeader
            className="site-page-header"
            
            title="Siva Karthik R"
            subTitle="Avid Reader, Technology Enthusiast"
            />
            <br />
            <br />
          <Row>
            <Col span={4}>
                <Timeline mode="alternate">
                    <Timeline.Item dot={<BookOutlined style={{ fontSize: '16px' }} />}> School (NHPS) - 2003-2012</Timeline.Item>
                    <Timeline.Item dot={<BookOutlined style={{ fontSize: '16px' }} />} color="green">PU - 2012-2014</Timeline.Item>
                    <Timeline.Item dot={<BookOutlined style={{ fontSize: '16px' }} />}>
                        RVCE CS - 2014-2018
                    </Timeline.Item>
                    <Timeline.Item color="blue">Siemens Technologies</Timeline.Item>
                    <Timeline.Item color="red">Akamai Technologies</Timeline.Item>
                    <Timeline.Item></Timeline.Item>
                    
                </Timeline>
            </Col>
            <Col span= {1}/>
            <Col span={19}>
            <Tabs defaultActiveKey="1" >
                <TabPane tab="Education" key="1">
                    <Card title="Education" bordered={true}>
                        <EducationComponent />
                    </Card>
                </TabPane>
                <TabPane tab="Work Experience" key="2">
                    <Card title="Work Experience" bordered={true}>
                        <WorkExperienceComponent />
                    </Card>
                </TabPane>
                <TabPane tab="Goodreads" key="3">
                    
                        <GoodreadsComponent />
                    
                </TabPane>
               
            </Tabs>
               
                </Col>
                </Row>
          </>
        )
    }
}