const pino=require('pino');
//import pretty from "pino-pretty";
const pretty = require('pino-pretty');

//create a transport
const transport=pino.transport({
    targets:[
        {
            target:'pino-pretty',
            options:{destination:'./app.log',mkdir:true,colorize:false} //it will send the response to the app.log.
        },
        {
            //target:'pino/file // logs to the standard output by default
            target:'pino-pretty',
            //options: { destination: `${__dirname}/app.log` }, //u can also put ur app.log in separate 
            options:{destination: process.stdout.fd}//fd-filedescription
        }
    ]
})

// const levels = {
//     emerg: 80,
//     alert: 70,
//     crit: 60,
//     error: 50,
//     warn: 40,
//     notice: 30,
//     info: 20,
//     debug: 10,
//   };

//create a logger instance
var logger= pino({
    level :process.env.PINO_LOG_LEVEL || 'info',
    //customLevels: levels,
    formatters: {
        bindings: (bindings:any) => {
            return { pid: bindings.pid, 
                host: bindings.hostname,
                node_version: process.version,
             };
          },
    //     level: (label:any) => {
    //       return { level: label.toUpperCase() };
    //     },
       },
    timestamp: pino.stdTimeFunctions.isoTime,
},transport
// pino.destination(`${__dirname}/app.log`)  //u can do this instead of transport.
);


module.exports = logger ;