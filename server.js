var express=require('express');
var app=express();
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));
app.use(express.static('public'));
// app.use(express.static('public/css'));
// app.use(express.static('public/images'));
app.set('view engine','ejs');
app.set('views','./views');
console.log("Server is running on http://localhost:5000");
app.get('/',function(req,res){res.render('home');});
app.listen(5000);