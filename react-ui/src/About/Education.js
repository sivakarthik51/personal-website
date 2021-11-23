import React from 'react';
import { Table } from 'antd';

export default class EductionComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            columns: [
                {
                  title: 'Institution',
                  dataIndex: 'institution',
                  key: 'institution',
                },
                {
                  title: 'Attended Dates',
                  dataIndex: 'date',
                  key: 'date',
                },
                {
                  title: 'Grade',
                  dataIndex: 'grade',
                  key: 'grade',
                },
              ],
              dataSource: [
                {
                  key: '1',
                  institution: 'Georgia Institute of Technology',
                  date: '2021-2023',
                  grade: 'N/A',
              },
                {
                  key: '2',
                  institution: 'R.V. College of Engineering',
                  date: '2014-2018',
                  grade: '9.56/10.0',
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