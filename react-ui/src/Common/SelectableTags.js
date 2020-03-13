
import React from 'react';
import { Tag } from 'antd';

const { CheckableTag } = Tag;


export default class SelectableTags extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        selectedTags: [],
        availableTags: props.tags
      };
    
    }
  handleChange(tag, checked) {
    const { selectedTags } = this.state;
    const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
    console.log('You are interested in: ', nextSelectedTags);
    this.setState({ selectedTags: nextSelectedTags });
    this.props.getSelectedTags(nextSelectedTags);
  }

  render() {
    const { selectedTags } = this.state;
    return (
      <div>
        
        {this.state.availableTags.map(tag => (
          <CheckableTag
            key={tag}
            checked={selectedTags.indexOf(tag) > -1}
            onChange={checked => this.handleChange(tag, checked)}
          >
            {tag}
          </CheckableTag>
        ))}
      </div>
    );
  }
}
