import React from 'react';
import {Col} from 'antd'
export default class GoodreadsComponent extends React.Component{
    render(){
        return (
            <>
                <Col span={7}>
                    <div id="gr_updates_widget">
                    <iframe title="gReadsUpdates" id="the_iframe" src="https://goodreads.com/widgets/user_update_widget?height=400&num_updates=3&user=12848479&width=250" width="248" height="330" frameBorder="0"></iframe>
                    <div id="gr_footer">
                        <a href="https://www.goodreads.com/"><img alt="Goodreads: Book reviews, recommendations, and discussion" src="https://www.goodreads.com/images/layout/goodreads_logo_140.png" /></a>
                    </div>
                    </div>
                </Col>
                
            </>
        )
    }
}