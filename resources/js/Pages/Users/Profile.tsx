import React, { useState } from 'react';

const Profile = () => {
	const [someText] = useState('hoge')
	return <div><p>react dayo: {someText}</p></div>
}

export default Profile