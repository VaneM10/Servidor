const { response, request }= require('express');
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

const agregarUsuario = async(req=request, res=response) =>{

    const {email, username} = req.body;
    const result = await prisma.user.create({
        data:{
            email,
            username
        }
    }).catch((e)=>{
        return e.message;
    }).finally(async ()=>{
        await prisma.$disconnect()
    })

    res.json({
        result
    })
}

const mostrarUsuarios = async(req=request, res=response) =>{
    const usuarios = await prisma.user.findMany()
    .catch((e)=>{
        return e.message;
    }).finally(async ()=>{
        await prisma.$disconnect()
    })
    res.json({
        usuarios
    })
}

const editarUsuarios = async(req=request, res=response) =>{
    const {id, email} = req.body;
    const updateUser = await prisma.user.update({
        where: {
            id,
        },
        data: {
          email
        },
      }).catch((e)=>{
        return e.message;
    }).finally(async ()=>{
        await prisma.$disconnect()
    })
    res.json({
        updateUser
    })
}

const eliminarUsuarios = async(req=request, res=response) =>{
    const {id} = req.body;
    const deleteUser = await prisma.user.delete({
        where: {
          id,
        },
      }).catch((e)=>{
        return e.message;
    }).finally(async ()=>{
        await prisma.$disconnect()
    })
    res.json({
        deleteUser
    })
}


module.exports = {
    agregarUsuario,
    mostrarUsuarios,
    editarUsuarios,
    eliminarUsuarios
}