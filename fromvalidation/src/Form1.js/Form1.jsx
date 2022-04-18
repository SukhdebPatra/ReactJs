import React from 'react'
import {useForm} from 'react-hook-form'

const Form1 = () => {
const {register,handleSubmit}=useForm();
const onSubmit=data=>console.log(data);



  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} >
        <input {...register('firstName',{required:true,maxLength:20})}placeholder="Name"/><br/>
<input {...register('lastName',{pattern:/^[a-zA-z]+$/i})}/><br/>
<input type='number' {...register('age',{min:18,max:90})}/><br/>

<input type='submit'/>


      </form>



    </div>
  )
}

export default Form1;
