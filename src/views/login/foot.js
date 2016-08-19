import React from 'react'

export default class Foot extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			//...
		}
	}

	componentDidMount() {
        
    }

    static defaultProps = {
        text: 'React Component',
        show: false,
    }

	// 组件渲染
	render(){
		return (
			<div>
				{this.props.text}
			</div>
		)
	}
	

}