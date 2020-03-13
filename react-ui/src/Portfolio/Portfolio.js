import React from 'react';
import {Card,Descriptions,Col,Row,Tag, PageHeader} from 'antd';
import SelectableTags from '../Common/SelectableTags';
import { GithubOutlined } from '@ant-design/icons';

export default class PortfolioComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedTags: [],
            allTags:[],
            filteredCollegeProjects:[],
            filteredVocationalProjects:[],
            collegeProjects:[
                {
                    'key':'1',
                    'title':'Theatre Management',
                    'description':'Theatre Management system for admins and regular users',
                    'dates':'2016',
                    'tags':['Python','Django','DBMS','Database', 'Web Development'],
                    'githubLink': ''
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
                    'githubLink': ''
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
        allTags = new Set(allTags);
        this.setState({allTags:Array.from(allTags)});
    }
    getSelectedTags = (selectedTags) => {
        
        var filteredCollegeProjects = this.state.collegeProjects.filter((data) => {
            return selectedTags.some(e => data.tags.includes(e));
        })
        var filteredVocationalProjects = this.state.vocationalProjects.filter((data) => {
            return selectedTags.some(e => data.tags.includes(e));
        })
        if (selectedTags.length === 0){
            this.setState({selectedTags:selectedTags,filteredCollegeProjects:this.state.collegeProjects,filteredVocationalProjects:this.state.vocationalProjects});
        }
        else
            this.setState({selectedTags:selectedTags,filteredCollegeProjects:filteredCollegeProjects,filteredVocationalProjects:filteredVocationalProjects});
    }
    componentWillMount(){
        this.setAllTags();
        this.setState({filteredCollegeProjects:this.state.collegeProjects,filteredVocationalProjects:this.state.vocationalProjects});
    }
    render(){
        const collegeProjs = this.state.filteredCollegeProjects.map((data,index) =>{             
            return (
                <Col span={12} key={data.key}> 
                    <Card title={data.title} style={{marginTop:16}}
                    actions={[
                        <GithubOutlined key="github"/>,
                    ]}>
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
            const vocationsProjs = this.state.filteredVocationalProjects.map((data,index) =>{             
                return (
                    <Col span={12} key={data.key}> 
                        <Card title={data.title} style={{marginTop:16}}
                        actions={[
                            <GithubOutlined key="github"/>,
                        ]}>
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
        return (
            <>
                <PageHeader title="Skills" className="site-page-header" subTitle={<SelectableTags tags={this.state.allTags} getSelectedTags={this.getSelectedTags} />} />
                <br />
                <PageHeader title="Projects in College" className="site-page-header" subTitle="2014-2018" />
                
                <Row gutter={16}>
                    {collegeProjs}
                </Row>
                
                <PageHeader title="Vocational Projects" className="site-page-header" subTitle="2018-2020" />
                
                <Row gutter={16}>
                    {vocationsProjs}
                </Row>
            </>
        )
    }
}