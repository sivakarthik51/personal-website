import React from 'react';
import {Card,Avatar,Col,Row,Badge, PageHeader,Tabs,Select , Tooltip} from 'antd';
import { GithubOutlined,LinkOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;
const { Option } = Select;
const { Meta } = Card;
export default class PortfolioComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedTags: [],
            allTags:[],
            filteredCollegeProjects:[],
            filteredVocationalProjects:[],
            filteredMiscProjects:[],
            miscProjects: [
                {
                    'key':'1',
                    'title':'NNCPP',
                    'description':' This is a basic implementation of a Neural Network in C++. A feedforward network framework.',
                    'dates':'2020',
                    'tags':['C++','Neural Network','Deep Learning','Machine Learning'],
                    'githubLink': 'https://github.com/sivakarthik51/NNCPP',
                    'active':false,
                    'avatarText':'C++'
                },
                {
                    'key':'2',
                    'title':'Chat Application',
                    'description':'Implementaion of a Simple Chat Application using socket.io, node and React. There is support for chat rooms.',
                    'dates':'2020',
                    'tags':['Node','React','socket-io'],
                    'githubLink': 'https://github.com/sivakarthik51/chat-app',
                    'projectLink':'https://antd-chat-app.netlify.app/',
                    'active':false,
                    'avatarText':'JS'
                },
                {
                    'key':'3',
                    'title':'Personal Website',
                    'description':'This current site you are browsing',
                    'dates':'2020',
                    'tags':['React','Node'],
                    'githubLink': 'https://github.com/sivakarthik51/personal-website',
                    'active':true,
                    'avatarText':'JS'
                },
                {
                    'key':'4',
                    'title':'Covid-19 Tracker',
                    'description':'Tracking the Covid-19 Outbreak. This includes the statistics for different countries with both a graph and map view.',
                    'dates':'2020',
                    'tags':['React','Node','antd','highcharts'],
                    'githubLink': 'https://github.com/sivakarthik51/covid-tracker',
                    'projectLink':'http://c19track.netlify.app/',
                    'active':false,
                    'avatarText':'JS'
                },
                {
                    'key':'5',
                    'title':'OCR Application',
                    'description':'Built an web application that can extract text from images. The extracted text can be edited and saved temporarily or copied. All file uploads are local and does not go through a server. The image processing happens on the browser using Web Assembly.',
                    'dates':'2020',
                    'tags':['React','tesseract.js','antd'],
                    'githubLink': 'https://github.com/sivakarthik51/ocr-tesseract',
                    'projectLink':'https://ocr-app.netlify.app/',
                    'active':false,
                    'avatarText':'JS'
                },
                {
                    'key':'6',
                    'title':'E-Commerce App',
                    'description':'Built an e-commerce application to help small business sellers market directly to customers.The backend is powered by CommerceJS and Stripe (for payment).',
                    'dates':'2020',
                    'tags':['React','commercejs','stripe','antd'],
                    'githubLink': 'https://github.com/sivakarthik51/market-place',
                    'projectLink':'https://sellersmarket.netlify.app/',
                    'active':false,
                    'avatarText':'JS'
                },
                {
                    'key':'7',
                    'title':'Voice Controlled News/Stock App',
                    'description':'Built a voice-controlled app that can get the news based on search terms and stock overview of different companies.',
                    'dates':'2020',
                    'tags':['React','alan.ai','antd','material-ui'],
                    'githubLink': 'https://github.com/sivakarthik51/news-application',
                    'projectLink':'https://news-hub.netlify.app/',
                    'active':false,
                    'avatarText':'JS'
                }


            ],
            collegeProjects:[
                {
                    'key':'1',
                    'title':'Theatre Management',
                    'description':'Theatre Management system for Owners and Customers. Theatre owners can list their outlets and movies. Customers can search for movies and book tickets.',
                    'dates':'2016',
                    'tags':['Python','Django','DBMS','Database', 'Web Development'],
                    'githubLink': 'https://github.com/sivakarthik51/TheatreManagement',
                    'avatarText':'Py'
                },
                {
                    'key':'2',
                    'title':'Load Balancing in SDN',
                    'description':'Implementing Load Balancing for SDN using floodlight controller',
                    'dates':'2018',
                    'tags':['Networks','Java','Floodlight','SDN'],
                    'githubLink': '',
                    'avatarText':'Java'
                },
                {
                    'key':'3',
                    'title':'Optimized Local Call Routing',
                    'description':'SIP based Local Call Routing mechanism',
                    'dates':'2015-18',
                    'tags':['SIP','Networks','Python'],
                    'githubLink': '',
                    'avatarText':'Py'
                },
                {
                    'key':'4',
                    'title':'Chatbot (ALTRON)',
                    'description':'Chatbot using RNN with LSTM units trained on Movie Dialogues',
                    'dates':'2017',
                    'tags':['Machine Learning','Deep Learning','Python'],
                    'githubLink': '',
                    'avatarText':'Py'
                }

            ],
            vocationalProjects:[
                {
                    'key':'1',
                    'title':'PPRM',
                    'description':'Project Portfolio and Resource Managment. This project aims to provide a tool for Management to track resource usage and allocate work accordingly.',
                    'dates':'2016',
                    'tags':['Javascript','Angular','Salesforce', 'Web Development'],
                    'githubLink': '',
                    'avatarText':'JS'
                },
                {
                    'key':'2',
                    'title':'Enterprise Search',
                    'description':'Created a Search Platform indexing all repositories in the organization. Worked on setting up a Machine Learning model to classify documents.',
                    'dates':'2019',
                    'tags':['C#','Python','Search', 'Machine Learning'],
                    'githubLink': '',
                    'active':true,
                    'avatarText':'C#'
                },
                {
                    'key':'3',
                    'title':'API Development',
                    'description':'Developed APIs for Salesforce Objects',
                    'dates':'2019',
                    'tags':['Mulesoft','Salesforce'],
                    'githubLink': '',
                    'avatarText':'API'
                }

            ]
        }
        
    }
    setAllTags = () => {
        
        let allTags = [];
        this.state.collegeProjects.forEach((data) => {
            allTags.push(...data.tags);
        })
        this.state.vocationalProjects.forEach((data) => {
            allTags.push(...data.tags);
        })
        this.state.miscProjects.forEach((data) => {
            allTags.push(...data.tags);
        })
        allTags = new Set(allTags);
        this.setState({allTags:Array.from(allTags)});
    }
    getSelectedTags = (selectedTags) => {

        var filteredMiscProjects = this.state.miscProjects.filter((data) => {
            return selectedTags.some(e => data.tags.includes(e));
        });
        
        var filteredCollegeProjects = this.state.collegeProjects.filter((data) => {
            return selectedTags.some(e => data.tags.includes(e));
        })
        var filteredVocationalProjects = this.state.vocationalProjects.filter((data) => {
            return selectedTags.some(e => data.tags.includes(e));
        })
        if (selectedTags.length === 0){
            this.setState({selectedTags:selectedTags,filteredCollegeProjects:this.state.collegeProjects,filteredVocationalProjects:this.state.vocationalProjects,filteredMiscProjects:this.state.miscProjects});
        }
        else
            this.setState({selectedTags:selectedTags,filteredCollegeProjects:filteredCollegeProjects,filteredVocationalProjects:filteredVocationalProjects,filteredMiscProjects:filteredMiscProjects});
    }
    componentWillMount(){
        this.setAllTags();
        this.setState({filteredCollegeProjects:this.state.collegeProjects,filteredVocationalProjects:this.state.vocationalProjects,filteredMiscProjects:this.state.miscProjects});
    }
    getActions(data)
    {
        var actions = [];
        if(data.githubLink) actions.push(<GithubOutlined key="github" onClick={()=> window.open(data.githubLink, "_blank")}/>);
        if(data.projectLink) actions.push(<LinkOutlined key="project-link" onClick={()=> window.open(data.projectLink, "_blank")}/>);
        return actions;
    }
    getCards(projects)
    {
        var crds = projects.map((data,index) =>{             
            return (
                <Col xs={24} sm={24} md={24} lg={12} xl={12} key={data.key}> 
                    <Card  style={{marginTop:16}}
                    actions={this.getActions(data)}
                    >
                        
                        <Meta
                            avatar={
                            <Avatar>{data.avatarText}</Avatar>
                            }
                            title={
                                <>
                                {data.title}
                                &nbsp; 
                                <Tooltip title="Active Project">
                                    <Badge status={data.active?"processing":null} />
                                </Tooltip>
                                </>
                                }
                            description={data.description}
                        />
                    </Card>
                
                {index%2===0?<br /> :null}
                </Col>
            )});
            return crds;
    }
    render(){
        
        const collegeProjs = this.getCards(this.state.filteredCollegeProjects);
        const vocationsProjs = this.getCards(this.state.filteredVocationalProjects);
        const miscProjs = this.getCards(this.state.filteredMiscProjects);
        const filterBySkills = (
            <Select
                    mode="multiple"
                    placeholder="Filter Skills"
                    onChange={this.getSelectedTags}
                    style={{ width: '100%' }}
                >
                    {this.state.allTags.map((element,i) => {
                        return <Option key={element} >{element}</Option>
                    })}
                </Select>
        );
    
        return (
            <>
            {filterBySkills}
                
                <br /> <br />
                <Tabs tabPosition="top">
                    <TabPane tab="Miscellaneous Projects" key="1">
                        <PageHeader title="Miscellaneous Projects" className="site-page-header" 
                            subTitle={<span className="sub-title">2020</span>} />

                        <Row gutter={16}>
                            {miscProjs}
                        </Row>
                    </TabPane>
                    <TabPane tab="Vocational Projects" key="2">
                        <PageHeader title="Vocational Projects" className="site-page-header" 
                            subTitle={<span className="sub-title">2018-2020</span>} />

                        <Row gutter={16}>
                            {vocationsProjs}
                        </Row>
                    </TabPane>
                    <TabPane tab="College Projects" key="3">
                        <PageHeader title="Projects in College" className="site-page-header" 
                            subTitle={<span className="sub-title">2014-2018</span>} />

                        <Row gutter={16}>
                            {collegeProjs}
                        </Row>
                    </TabPane>
                </Tabs>
            </>
        )
    }
}