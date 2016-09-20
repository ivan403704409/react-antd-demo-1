import React from 'react'

export default class NameList extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			names: ['Alice', 'Emily', 'Kate']
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
				<div class="clazz">
					
				</div>
				<div class="student">
					{
					    this.props.names.map(function (name) {
					      return <div>Hello, {name}!</div>
					    })
					}
				</div>
				
			</div>
		)
	}
	

}