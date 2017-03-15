import express from 'express';
import middleware from './src/middleware';

const app = express();

// server-side render HERE via middleware
app.get('*', middleware);

app.listen(3000, '0.0.0.0', (err) => {
	if(err) {
		console.error(err);
	} else {
		console.info('Listening at http://localhost:3000');
	}
});
