const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
	if (/jpg|jpeg|png|gif|js/.test(req.url)) {
		fs.readFile(req.url.replace('/', ''), (err, data) => {
			if (err) {
				res.end('Error');
				throw new Error('Error while reading');
			} else {
				res.end(data);
			}
		})
		return;
	}

	fs.readFile('index.html', 'utf-8', (err, data) => {
		if(err) {
			res.end('<strong>Error</strong>');
			throw new Error('Error while reading index.html');
		}
		let date = new Date();

		data = data.replace(`</body>`, `<hr><div>${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}</div></body>`);
		res.end(data);
	})
}).listen(3000, () => console.log('Server is listening on 3000'));