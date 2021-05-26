const User = require('../model/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { use } = require('../routes/auth')

const register = (req, res, next) =>{
    bcrypt.hash(req.body.password, 10, function(err, hashedPass){
        if(err){
            res.json({
                error: err
            })
        }

        let user = new User ({
            name: req.body.name,
            password: hashedPass,
            email: req.body.email,
            phone: req.body.phone
        })
        user.save()
        .then(user=>{
            res.json({
                message: 'User added Successfully!'
            })
        })
        .catch(error =>{
            res.json({
                message: 'An error occurred!'
            })
        })
    })
    
}

const login = (req, res, next) => {
    var username = req.body.username
    var password = req.body.password

    User.findOne({$or: [{email:username}, {phone:username}]})
    .then (use=>{
        if(use){
            bcrypt.compare(password, user.password, function(err, result){
                if(err){
                    req.json({
                        error:err
                    })
                }
                if(result){
                    let token = jwt.sign({name: user.name}, 'verySecretValue', {expiresIn: '1h'})
                    res.json({
                        message: 'Login Successful!',
                        token
                    })
                }else{
                    res.json({
                        message: 'Password does not matched!'
                    })
                }
            })
        }else{
            res.json({
                message: 'No user found!'
            })
        }
    })
}

module.exports = {
    register
}