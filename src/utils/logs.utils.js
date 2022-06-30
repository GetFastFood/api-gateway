const {createLogger, format, transports} = require('winston');


   const logs = createLogger({
        level: 'info',
        exitOnError: false,
        format: format.combine(
            format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}),
            format.align(),
            format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`)),
        transports: [
            new transports.File({filename: './logs/server.log', level: 'info'}),
        ],
    });
    
module.exports = logs;