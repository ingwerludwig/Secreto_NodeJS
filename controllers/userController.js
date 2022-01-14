exports.home = (req, res) => {res.render('home')}
exports.updateuser = (req, res) => {res.render('update')}
exports.deleteuser = (req, res) => {res.render('delete')}

const db = require('../database/connection')
const uuid = require('uuid')
const user = db.user
const alert = require('alert')
db.sequelize.sync()

exports.insert = (req, res) => {
    let inserted = {
        id: uuid.v4(),
        name: req.body.name,
        message: req.body.message,
        createdAt: new Date(),
        updatedAt: new Date()
    }
    console.log(inserted)
    user.findAll({where:{name:inserted.name},raw:true})
    .then((data)=> {
        if(data.length>0){
            res.render('home')
            alert('Name has already been taken, try another one!')
        }else{
            user.create(inserted)
            .then (() => {
                res.redirect('/');
                alert('Your data has been inserted!')
                console.log(inserted)
            })
            .catch(() => res.render('home'))
        }
    })

    
}

exports.showuser = (req, res) => {
    user.findAll({raw:true,nest:true})
    .then((data)=>{

        console.log(data)
        res.render('show', {items: data});
    })
}

exports.update = (req, res) => {
    let updated = {
        name: req.body.name,
        message: req.body.message
    }
    user.findAll({where:{name:updated.name},raw:true})
    .then((data)=> {
        if(data.length<1){
            res.render('home')
            alert('Name not found!')
        }else{
            user.update(updated,{
                where:{name: updated.name}
            })
            .then (() => {
                res.redirect('/');
                alert('Your data has been updated!')
                console.log(updated)
            })
            .catch(() => res.render('home'))
        }
    })
}

exports.delete = (req, res) => {
    let deleted = {
        name: req.body.name
    }
    user.findAll({where:{name:deleted.name},raw:true})
    .then((data)=> {
        if(data.length<1){
            res.render('home')
            alert('Name not found!')
        }else{
            user.destroy({where : {name: deleted.name}})
            .then (() => {
                res.redirect('/');
                alert('Your data has been deleted!')
                console.log(deleted)
            })
            .catch(() => res.render('home'))
        }
    })
}