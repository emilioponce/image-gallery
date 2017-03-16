import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';

export default (req, res) => {
	res.send(`
		<!doctype html>
		<html>
			<header>
				<title>SPA Image Gallery</title>
			</header>
			<body>
				<div id='app'>${renderToString(<App />)}</div>
				<script src='bundle.js'></script>
			</body>
		</html>
		`);
	};
