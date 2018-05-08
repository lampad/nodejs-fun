import express from 'express';
import createError from 'http-errors';
import path from 'path'
import bodyParser from 'body-parser';
import logger from 'morgan';
import apiRoutes from './routes/api';
import cookieParser from 'cookie-parser';

module.exports = express()
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'jade')
    .use(logger('dev'))
    .use(express.json())
    .use(express.urlencoded({ extended: false }))
    .use(cookieParser())
    .use(express.static(path.join(__dirname, 'public')))
    .use('/api', apiRoutes)

// catch 404 and forward to error handler
    .use(function(req, res, next) {
	next(createError(404));
    })

// error handler
    .use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};
	
	// render the error page
	res.status(err.status || 500);
	res.render('error');
    })
    .listen(3000, () => {
	console.log('Server is listening on port 3000');
    });

