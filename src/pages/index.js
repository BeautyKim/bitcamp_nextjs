import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const[inputs, setInputs] = useState({})
    const[result, setResult] = useState('')
    const{ num1, num2, opcode}=inputs;

    const handleChange=(e)=>{
        e.preventDefault()
        const{value, name} = e.target;
        setInputs({
            ...inputs, [name]: value
        })
    }
    const handleClick = (e)=>{
        e.preventDefault()
        const calcRequest = {num1, opcode, num2}
        memberCalc({num1, opcode, num2}).then(res => setResult(res.data)).catch( err => console.log(`에러발생 : ${err}`))
    }
    return(
      <div>
      
          <label htmlFor=""><b>num1</b></label>
          <input name="num1"  type="" onChange={handleChange}/><br/>
  
          <label htmlFor=""><b>opcode</b></label>
  
          <select type="" name="opcode" onChange={handleChange}>
              <option value="+">+</option>
              <option value="-">-</option>
              <option value="*">*</option>
              <option value="/">/</option>
              <option value="%">%</option>
          </select><br/>
          
          <label htmlFor=""><b>num2</b></label>
          <input name="num2" type="" onChange={handleChange}/><br/>
      
          </div>
          )
  
  }
