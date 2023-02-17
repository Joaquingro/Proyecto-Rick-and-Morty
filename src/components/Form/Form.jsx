import { useState } from "react"
import style from './Form.module.css'
import validate from './validate.js'

export default function Form({login}) {
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
      });

      const handleInputChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        setInputs({
            ...inputs,
            [property] : value
          });
        setErrors(validate({
          ...inputs,
          [property] : value

        }))
      }

      const [errors, setErrors] = useState({
        username: '',
        password: ''
      }); 

      const handleSubmit = (event) => {
        event.preventDefault();
        login(inputs);
    }
    return (
    
        <form onSubmit={handleSubmit} className = {style.form} >
        <div className= {style.lab}>
        <img className= {style.img} src = "https://e7.pngegg.com/pngimages/286/70/png-clipart-rick-sanchez-morty-smith-pocket-mortys-rick-morty.png" />
        <label className= {style.label} htmlFor="username">Username:</label>
        <input className = {errors.username && style.warning}name="username" type='text' value = {inputs.username } onChange = {handleInputChange}></input>
        {errors.username && <p className={style.warning}>{errors.username}</p>}
        <label htmlFor="password">Password:</label>
        <input name="password" type='password' value = {inputs.password} onChange = {handleInputChange}></input>
        {errors.password && <p className= {style.warning}>{errors.password}</p>}
        </div>
        
        <button className= {style.button}>LOGIN</button>
        </form>
    
        )
 }