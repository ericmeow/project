const express = require('express');
var router = express.Router();
const db = require('../conf/database');


module.exports = router;

router.get('/getAllUsers',(req,res,next)=>{
    db.query('SELECT * from users;', (err, results, fields)=>{
        if(err){
            next(err);
        }
        console.log(results);
        res.send(results);
    })
})

router.get('/getAllPosts',(req,res,next)=>{
    db.query('SELECT * from posts;', (err, results, fields)=>{
        if(err){
            next(err);
        }
        console.log(results);
        res.send(results);
    })
})

router.post('/createUser', (req,res,next)=>{
    console.log(req.body);
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    //validate data, if bad send back response
    //res.redirect('/registration');
    let baseSQL = 'INSERT INTO users (username, email, password, created) VALUES (?,?,?, now())';
    db.query(baseSQL, [username, email,password]).
    then(([results,fields])=>{
        if(results && results.affectedRows){
            res.send('user made');

        }else{
            res.send('not user made');
        }
    })
})

module.exports = router;