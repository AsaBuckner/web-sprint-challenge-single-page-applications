import schema from "../Validation/formSchema"
import * as yup from "yup"
import axios from "axios"
import React ,{ useState, useEffect } from "react"
import "../App.css"
import { Link } from "react-router-dom"

const initialtoppings = {}

const initialState = {
    nameInput : '',
    toppings: '',
    size : '',
    sauce : '',
    subs : '',
    SpecialMsg : ''
}

const initialOrders = []

const initialFormErrors = {
    nameInput: '',
  }


const Order = (props) =>{


const [formValue, setFormValue] = useState(initialState)
const [orders, setOrders] = useState(initialOrders)
const [formError, setFormError] = useState(initialFormErrors)
     




const onChange = evt => {
    const { name, value, checked, type} = evt.target
    const valueToUse = type === "checkbox" ? value : value
    inputChange(name, valueToUse)
}


const inputChange = (name, value) => {
    // 🔥 STEP 10- RUN VALIDATION WITH YUP
    validate(name, value)
    setFormValue({
      ...formValue,
      [name]: value // NOT AN ARRAY
    })
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setFormError({...formError, [name]: ""}))
    .catch(err => setFormError({...formError, [name]: err.errors[0]}))
  }


//   const postUser = newUser => {
//     axios.post(`https://reqres.in/api/users`, newUser)
//     .then(res => {
//       setUsers([newUser, ...users])
      
//     })
//     .catch(err => console.error(err))
//     .finally(() => setFormValue(initialFormValues))
//   }
const onSubmit = () => {
    const newOrder = {
        nameInput: formValue.nameInput,
        toppings: formValue.toppings,
        size: formValue.size,
        sauce: formValue.sauce,
        subs: formValue.subs,
        SpecialMsg: formValue.SpecialMsg
    }
    postOrder(newOrder)
    console.log(newOrder)
}

const postOrder = newOrder => {
    axios.post(`https://reqres.in/`, newOrder)
    .then(res => {
      setOrders([newOrder, ...orders])
    })
    .catch(err => console.error(err))
    .finally(() => setFormValue(initialState))
  }




    return(
        <div className="orderPageWrapper">
            <div className="formWrapper">

                <div className="formTitle">
                    <h2>Build Your Own Pizza</h2>
                </div>

                <img className="orderPic" src=""/>
                <form id="pizza-form">


                    <div>
                    {formError.nameInput}
                    </div>


                    <div className="nameInput">
                        <input 
                        onChange={onChange}
                        type="text"
                        name="nameInput"
                        value={formValue.nameInput}
                        id="name-input"
                        placeholder="Name"
                        />
                    </div>

                    <div className="formText">
                        <label>Choice of Size</label>
                        <h4>Required</h4>
                    </div>

                    <select name="size"  onChange={onChange} id="size-dropdown" size={1}>
                        <optgroup value="" ></optgroup>
                        <option value="" >--Size--</option>
                        <option value="XL"  name="size" >X-Large</option>
                        <option value="LG"  name="size">Large</option>
                        <option value="RG"  name="size">Regular</option>
                        <option value="MN"  name="size">Mini</option>
                    </select>


                    <div className="formText">
                        <h3>Choice of Sauce</h3>
                        <h4>Required</h4>
                    </div>
                    
                    <label>
                    <input type="radio" onChange={onChange}  name="sauce" value="Original Red"/>
                    Original Red</label>
                   
                    <label>
                    <input type="radio"  onChange={onChange} name="sauce" value="Garlic Ranch"/>
                    Garlic Ranch</label>
                    
                    <label>
                    <input type="radio"  onChange={onChange} name="sauce" value="BBQ"/>
                    BBQ Sauce</label>
                   
                    <label>
                    <input type="radio" onChange={onChange} name="sauce" value="Spinach Alfredo"/>
                    Spinach Alfredo</label>



                    <div className="formText">
                        <h3>Add Toppings</h3>
                        <h4>Choose up to 10</h4>
                    </div>

                    <label>
                    <input type="checkbox" 
                        onChange={onChange} 
                        value="Pepperoni" 
                        name="toppings"/>
                     Pepperoni</label>

                    <label>
                    <input type="checkbox"
                        onChange={onChange} 
                        value="sausage"
                        name="toppings"/>
                    sausage</label>

                    <label>
                    <input type="checkbox"
                        onChange={onChange} 
                        value="Canadian Bacon"
                        name="toppings"/>
                    Canadian Bacon</label>


                    <label>
                    <input type="checkbox"
                        onChange={onChange}
                        value="Three Cheese" 
                        name="toppings"/>
                    Three Cheese</label>

                    <div className="formText">
                        <h3>Choice of Substitutions</h3>
                        <h4>Choose up to 1</h4>
                    </div>
                    <input type="checkbox" name="subs" onChange={onChange}/>
                    <label>Gluten Free Crust (+$1.00)</label>



                    <div className="formText">
                        <h3>Special Instructions</h3>
                    </div>
                    <input id='special-text'
                     type="text" name="SpecialMsg" 
                     onChange={onChange}
                     placeholder="Anything else you'd like to add?"
                     value={formValue.SpecialMsg}
                     ></input>
                </form>
                <Link to="/delivery">
                <button 
                    className="submit_Button"
                    onClick={onSubmit} 
                > ORDER! </button>
                </Link>
            </div>
        </div>
    )
}


export default Order
