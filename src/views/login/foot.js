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

    static defaultProps = []

	// 组件渲染
	render(){
		return (
			<div>
				<span>小测</span>
				{
					this.props.tests.map(val => {
						return (
							<div>{ val.name } - { val.time }</div>
						)
					})
				}
			</div>
		)
	}
	

}