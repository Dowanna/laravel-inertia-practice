import React, { useState } from 'react';
import {Example} from '../../Components/TestChakra'
import { TestSwr } from '../../Components/TestSwr';

const Profile = () => {
	const [someText] = useState('hoge')
	return (<div>
		<p>react dayo: {someText}</p>
		<TestSwr />
		<Example />
		</div>
		)
}

export default Profile