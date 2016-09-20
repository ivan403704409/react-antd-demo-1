import React from 'react'

import Foot from './foot.js'
import NameList from './name_list.js'

// 登陆页
export default class Login extends React.Component {
	constructor(props){
		super(props)
	}

    

	render(){
		return (
			<div>
				<div>
					用户名： <input type="" name=""  />
				</div>
				<div>
					密码： <input type="" name="" />
				</div>
				<Foot text="Props"></Foot>
				<NameList names={ ['Alice', 'Emily', 'Kate'] } ></NameList>
			</div>
		)
	}


}