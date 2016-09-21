import React from 'react'

import Foot from './foot.js'
import NameList from './name_list.js'
import Modal from './modal.js'

// 登陆页
export default class Login extends React.Component {
	constructor(props){
		super(props)
	}

    tests = [
    	{ name: '数学小测', time: '2016-09-20' },
    	{ name: '英语小测', time: '2016-09-21' }
    ]

	render(){
		return (
			<div>
				<div>
					用户名： <input type="" name=""  />
				</div>
				<div>
					密码： <input type="" name="" />
				</div>
				<Foot tests={this.tests} ></Foot>
				<NameList names={ ['Alice', 'Emily', 'Kate'] } ></NameList>
				<Modal></Modal>
			</div>
		)
	}


}