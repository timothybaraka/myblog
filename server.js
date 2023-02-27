const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req,res)=>{
    //lodash
    const num = _.random(0,20);
    console.log(num);

    const greet = _.once(()=>{
        console.log('Hello');
    });
    greet();

    //set header 
res.setHeader('Content-Type', ' text/html');

let path = './views/';
switch(req.url){
    case '/':
        path += 'index.html';
        res.statusCode = 200;
        break;
    case '/about':
        path +='about.html';
        res.statusCode = 200;
        break;
    case '/about-blah':
        res.statusCode = 301;
        res.setHeader('Location','/about');
        res.end();
        break;
    default:
        path +='404.html';
        res.statusCode = 404;
        break;            
}
//read a file
fs.readFile(path,(err,data)=>{
    if(err){
        console.log(err); 
        res.end();
    }else{
        //res.write(data);
        res.end(data);
    }
})
});


//adding a listen function to listen to the port no.
server.listen(3000,'localhost',()=>{
    console.log('Listening for requests on port 3000');
})