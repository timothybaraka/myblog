const express = require('express');

//express app
const app = express();

//register view engine
app.set('view engine','ejs');
 

//listen for requests
app.listen(3000);

app.get('/',(req,res)=>{
    const blogs = [
        {title: 'Yoshi finds eggs', snippet:'Lorem ipsum sit amet'},
        {title: 'Yoshi finds eggs', snippet:'Lorem ipsum sit amet'},
        {title: 'Yoshi finds eggs', snippet:'Lorem ipsum sit amet'},
    ];
            //sets the content type,infers status code
        res.render('index',{ title:'Home',blogs:blogs });
});



app.get('/about',(req,res)=>{
   // res.send('<p>About Page!!</p>');         //sets the content type,infers status code
   res.render('about');
});

app.get('/blogs/create',(req,res)=>{
    res.render('create');
})

//404 page if ther's no match with the other requests then this runs
app.use((req,res) => {
    res.status(404).render('404');
});