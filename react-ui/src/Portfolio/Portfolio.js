import React from 'react';
import {Card,Descriptions,Col,Row,Tag, PageHeader} from 'antd';
import SelectableTags from '../Common/SelectableTags';
import { GithubOutlined,LinkOutlined } from '@ant-design/icons';

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
                    'description':'Implementation of a Neural Network in C++',
                    'dates':'2020',
                    'tags':['C++','Neural Network','Deep Learning'],
                    'githubLink': 'https://github.com/sivakarthik51/NNCPP',
                    'status':'In Progress'
                },
                {
                    'key':'2',
                    'title':'Chat Application',
                    'description':'Implementaion of a Simple Chat Application in React',
                    'dates':'2020',
                    'tags':['Node','React','socket-io'],
                    'githubLink': 'https://github.com/sivakarthik51/chat-app',
                    'projectLink':'https://antd-chat-app.netlify.app/',
                    'status':'In Progress'
                },
                {
                    'key':'3',
                    'title':'Personal Website',
                    'description':'This current site you are browsing',
                    'dates':'2020',
                    'tags':['React','Node'],
                    'githubLink': 'https://github.com/sivakarthik51/personal-website',
                    'status':'In Progress'
                }

            ],
            collegeProjects:[
                {
                    'key':'1',
                    'title':'Theatre Management',
                    'description':'Theatre Management system for admins and regular users',
                    'dates':'2016',
                    'tags':['Python','Django','DBMS','Database', 'Web Development'],
                    'githubLink': 'https://github.com/sivakarthik51/TheatreManagement'
                },
                {
                    'key':'2',
                    'title':'Load Balancing in SDN',
                    'description':'Implementing Load Balancing for SDN using floodlight controller',
                    'dates':'2018',
                    'tags':['Networks','Java','Floodlight','SDN'],
                    'githubLink': ''
                },
                {
                    'key':'3',
                    'title':'Optimized Local Call Routing',
                    'description':'SIP based Local Call Routing mechanism',
                    'dates':'2015-18',
                    'tags':['SIP','Networks','Python'],
                    'githubLink': ''
                },
                {
                    'key':'4',
                    'title':'Chatbot (ALTRON)',
                    'description':'Chatbot using RNN with LSTM units trained on Movie Dialogues',
                    'dates':'2017',
                    'tags':['Machine Learning','Deep Learning','Python'],
                    'githubLink': ''
                }

            ],
            vocationalProjects:[
                {
                    'key':'1',
                    'title':'PPRM',
                    'description':'Project Portfolio and Resource Managment',
                    'dates':'2016',
                    'tags':['Javascript','Angular','Salesforce', 'Web Development'],
                    'githubLink': ''
                },
                {
                    'key':'2',
                    'title':'Enterprise Search',
                    'description':'Created a Search Platform indexing all repositories in the organization',
                    'dates':'2019',
                    'tags':['C#','Python','Search'],
                    'githubLink': '',
                    'status':'Running'
                },
                {
                    'key':'3',
                    'title':'API Development',
                    'description':'Developed APIs for Salesforce Objects',
                    'dates':'2019',
                    'tags':['Mulesoft','Salesforce'],
                    'githubLink': ''
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
                <Col span={12} key={data.key}> 
                    <Card title={data.title} style={{marginTop:16}}
                    actions={this.getActions(data)}
                    extra={data.status?<Tag color="#108ee9">{data.status}</Tag>:null}>
                        <Descriptions bordered>
                       
                            <Descriptions.Item label="Description">{data.description}</Descriptions.Item>
                            <Descriptions.Item label="Dates">{data.dates}</Descriptions.Item>
                            <br />
                            <Descriptions.Item label="Tags">
                                {data.tags.map((tag,inx) => {
                                    return (<Tag key={index+'-'+inx}>{tag}</Tag>);
                                })}
                            </Descriptions.Item>
                        </Descriptions>
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
    
        return (
            <>
                <PageHeader title="Filter by Skills" className="site-page-header" subTitle={<SelectableTags tags={this.state.allTags} getSelectedTags={this.getSelectedTags} />} />
                <br />

                <PageHeader title="Miscellaneous Projects" className="site-page-header" subTitle="2020" />
                
                <Row gutter={16}>
                    {miscProjs}
                </Row>

                <PageHeader title="Vocational Projects" className="site-page-header" subTitle="2018-2020" />
                
                <Row gutter={16}>
                    {vocationsProjs}
                </Row>


                <PageHeader title="Projects in College" className="site-page-header" subTitle="2014-2018" />
                
                <Row gutter={16}>
                    {collegeProjs}
                </Row>
                
                
                
            </>
        )
    }
}