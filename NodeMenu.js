/*jslint node: true */
/*jslint nomen: true */

(function () {
    'use strict';

    var fs = require('fs');
    var path = require('path');
    var winston = require('winston');
    var DailyRotateFile = require('winston-daily-rotate-file');

    var logger = winston.createLogger({
        level: 'info',
        format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.printf(info => {
                return `${info.timestamp} [${info.level.toUpperCase()}]: ${info.message}`;
            })
        ),
        transports: [
            new winston.transports.Console(),
            new DailyRotateFile({
                filename: 'logs/application-%DATE%.log',
                datePattern: 'YYYY-MM-DD',
                maxSize: '20m',
                maxFiles: '14d'
            })
        ]
    });

    var inputFile = path.join(__dirname, 'input.txt');
    var outputFile = path.join(__dirname, 'output.txt');

    logger.info('Script is starting...');
    logger.info('Input file path: ' + inputFile);
    logger.info('Output file path: ' + outputFile);

    function processFile(inputFilePath, outputFilePath) {
        logger.info('Starting file processing...');
        fs.readFile(inputFilePath, 'utf8', function (err, data) {
            if (err) {
                logger.error('Error reading file: ' + inputFilePath + ' - ' + err.message);
                return;
            }

            logger.info('File read successfully: ' + inputFilePath);

            var modifiedData = data + '\nTimestamp: ' + new Date().toISOString();

            fs.writeFile(outputFilePath, modifiedData, { flag: 'a' }, function (err) {
                if (err) {
                    logger.error('Error writing file: ' + outputFilePath + ' - ' + err.message);
                    return;
                }

                logger.info('File written successfully: ' + outputFilePath);
            });
        });
    }

    processFile(inputFile, outputFile);

}());
