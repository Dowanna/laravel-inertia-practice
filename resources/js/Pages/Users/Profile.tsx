import React, { useState } from 'react';
import {Example} from '../../Components/TestChakra'

const Profile = () => {
	const [someText] = useState('hoge')
	return (<div>
		<p>react dayo: {someText}</p>
		<Example />
		</div>
		)
}

export default Profile