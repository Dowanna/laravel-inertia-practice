import React, { useState } from 'react';
import {Example} from '../../Components/TestChakra'
import { TestSwr } from '../../Components/TestSwr';

// todo: inertiaから返ってくるデータの型つけたい
const Profile = ({user}: any) => {
	const [someText] = useState('hoge')
	return (<div>
		<p>react dayo: {someText}</p>
		<TestSwr user={user} />
		<Example />
		</div>
		)
}

export default Profile