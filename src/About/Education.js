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
                  institution: 'R.V. College of Engineering',
                  date: '2014-2018',
                  grade: '9.56/10.0',
                },
                {
                    key: '2',
                    institution: 'Miranda P.U. College',
                    date: '2012-2014',
                    grade: '94.2%',
                },
                {
                    key: '3',
                    institution: 'New Horizon Public School',
                    date: '2004-2012',
                    grade: '94%',
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