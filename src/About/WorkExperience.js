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
                    date: '2018-Present',
                    designation:'Software Engineer',
                    tags: ['Search', 'Web Development','Machine Learning']
                }
              ]

        }
    }

    render() {
        return (
            <Table dataSource={this.state.dataSource} columns={this.state.columns} pagination={false} />
        )
    }
}