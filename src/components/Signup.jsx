import React, { useState } from 'react'
import {useForm} from "react-hook-form"
import authService from '../appwrite/auth'
import { login as authLogin } from '../slice/authSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Input from './Input'
import Button from './Button'

function Signup() {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const [error,setError]=useState("")
    const {register,handleSubmit}=useForm()
    const handleCreate=async(data)=>{
        setError("")
        try {
            const user=await authService.createAccount(data)
            if(user){
                const userData=await authService.getCurrentAccount()
                if(userData){
                    dispatch(authLogin(userData))
                    navigate("/")
                }
            }
        } catch (error) {
            setError(error.message)
        }

    }
  return (
    <div>
      <form onSubmit={handleSubmit(handleCreate)}>
        <Input
        label="Name"
        type="text"
        placeholder="Enter YOur Name: "
        {...register("name",{required:true})}
        />
        <Input
        label="Email"
        type="email"
        placeholder="Enter YOur Email: "
        {...register("email",{required:true})}
        />
        <Input
        label="Password"
        type="password"
        placeholder="Enter Your Password"
        {...register("password",{required:true})}
        />
        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  )
}

export default Signup
