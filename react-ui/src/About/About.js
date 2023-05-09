import React from 'react';
import {Row,Col,Card,Tabs,PageHeader, Avatar, List } from 'antd';
import { GithubOutlined, LinkedinOutlined ,CodeTwoTone, CarTwoTone, ExperimentTwoTone, FundTwoTone} from '@ant-design/icons';



import EducationComponent from './Education';
import WorkExperienceComponent from './WorkExperience';
import GoodreadsComponent from './Goodreads';
const { TabPane } = Tabs;

const data = [
    {
        title:'A little about me',
        description: 'I am a highly skilled and motivated Full Stack Engineer with a strong educational background in Computer Science, including a Master\'s degree from the Georgia Institute of Technology. With a solid GPA of 4.0, I have gained extensive experience through internships and projects, showcasing my ability to develop innovative solutions and make a positive impact using cutting-edge technologies. My previous roles at Amazon, Optum Labs, and Akamai Technologies have involved designing and implementing complex systems, optimizing workflows, and developing end-to-end solutions.',
        icon: <CodeTwoTone twoToneColor="#4C6ACF" />
        
    },
    {
        title: 'My Goals',
        description: 'I am passionate about leveraging technology to solve real-world problems and have a track record of building web applications and prototypes that have a meaningful impact on communities. I am excited to continue my career as a software engineer, bringing my expertise and enthusiasm to contribute to making better products.',
        icon: <FundTwoTone twoToneColor="#52c41a" />
    },
    {
        title: 'My Hobbies',
        description: 'I love reading historical fiction and playing some hoops during my free time.',
        icon: <CarTwoTone twoToneColor="#eb2f96" />
    },
    {
        title: 'Skills',
        description: 'I have a strong skill set in multiple programming languages, frameworks, and databases, including C/C++, C#, Python, Flask, Django, Java, JavaScript, React, Node.js, SQL, and MongoDB.',
        icon: <ExperimentTwoTone />
    }
]
  
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
                {/* <Paragraph justify>
                    <ul>
                         <li>Currently a Master's student at Georgia Institute of Technology majoring in Computer Science (specialization in Machine Learning).</li> 
                        <li><strong>Looking for Full Time Software Engineer/Senior Software Engineer or Full Stack Engineer Opportunities.</strong></li>
                        <li>  I am a highly skilled and motivated Full Stack Engineer with a strong educational background in Computer Science, including a Master's degree from the Georgia Institute of Technology. </li>
                        <li>With a solid GPA of 4.0, I have gained extensive experience through internships and projects, showcasing my ability to develop innovative solutions and make a positive impact using cutting-edge technologies. </li>
                        <li> My previous roles at Amazon, Optum Labs, and Akamai Technologies have involved designing and implementing complex systems, optimizing workflows, and developing end-to-end solutions.</li>
                        <li>I have 4 years of work experience spanning across multiple domains.</li>
                        <li>I build web applications out of topics that I learn in order to understand it better and it has become a hobby. [See Portfolio]</li>
                    </ul>
                </Paragraph> */}
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={(item, index) => (
                    <List.Item>
                        <List.Item.Meta
                        avatar={<Avatar style={{ backgroundColor: '#FCFAF7'}} icon={item.icon} />}
                        title={<a href="/">{item.title}</a>}
                        description={item.description}
                        />
                    </List.Item>
                    )}
                />

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