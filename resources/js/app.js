import './bootstrap';

import React from 'react'
// import { render } from 'react-dom'
import { createRoot } from 'react-dom/client';
import { InertiaApp } from '@inertiajs/inertia-react';
import { ChakraProvider } from '@chakra-ui/react'

const container = document.getElementById('app');
const root = createRoot(container)
root.render(
	<ChakraProvider>
	<InertiaApp
		initialPage={JSON.parse(app.dataset.page)}
		resolveComponent={name =>
		import(`./Pages/${name}`).then(module => module.default)
		}
	/>
	</ChakraProvider>,
)