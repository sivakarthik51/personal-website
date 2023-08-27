import React from 'react';
import { Table, Tag } from 'antd';

export default class WorkExperienceComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            columns: [
                {
                  title: 'Organization',
                  dataIndex: 'organization',
                  key: 'organization',
                },
                {
                    title: 'Designation',
                    dataIndex: 'designation',
                    key: 'designation',
                  },
                {
                  title: 'Attended Dates',
                  dataIndex: 'date',
                  key: 'date',
                },
                {
                    title: 'Tags',
                    key: 'tags',
                    dataIndex: 'tags',
                    render: tags => (
                      <span>
                        {tags.map(tag => {
                          let color = tag.length > 5 ? 'geekblue' : 'green';
                          if (tag === 'loser') {
                            color = 'volcano';
                          }
                          return (
                            <Tag color={color} key={tag}>
                              {tag.toUpperCase()}
                            </Tag>
                          );
                        })}
                      </span>
                    ),
                  },
              ],
              dataSource: [
                {
                  key: '1',
                  organization: 'Siemens Technologies',
                  date: '2016-2017',
                  designation:'Intern',
                  tags: ['Security','Web Development']
                },
                {
                    key: '2',
                    organization: 'Akamai Technologies',
                    date: '2018',
                    designation:'Intern',
                    tags: ['Web Development','Angular', 'Salesforce']
                },
                {
                    key: '3',
                    organization: 'Akamai Technologies',
                    date: '2018-2021',
                    designation:'Software Engineer II',
                    tags: ['Search', 'Web Development','Machine Learning']
                },
                {
                  key:'4',
                  organization: 'Optum Labs | UnitedHealth Group',
                  date:'2022',
                  designation: 'Software Engineer Intern',
                  tags: ['Backend']
                },
                {
                  key:'5',
                  organization: 'Amazon',
                  date:'2022',
                  designation: 'Software Engineer Intern',
                  tags: ['Backend']
                },
                {
                  key:'6',
                  organization: 'Georgia Institute of Technology',
                  date:'2022-2023',
                  designation: 'Graduate Research Assistant',
                  tags: ['Backend']
                },
                {
                  key:'7',
                  organization: 'Arch',
                  date:'2023- Present',
                  designation: 'Software Engineer',
                  tags: ['Full Stack']
                },
              ]

        }
    }

    render() {
        return (
            <Table dataSource={this.state.dataSource} columns={this.state.columns} pagination={false} scroll={{x:window.innerHeight}} />
        )
    }
}