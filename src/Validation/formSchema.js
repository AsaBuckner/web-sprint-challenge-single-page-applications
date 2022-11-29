import * as yup from "yup"


const formSchema = yup.object().shape({

    nameInput: yup
    
        .string()
        
    
        .trim()
        

        .min(2,"name must be at least 2 characters")
    
        .required("Please Enter your first name"),
        

    size: yup
    .string()
    .required()
    ,
    
    sauce:yup
    .bool()
    ,
    
    toppings:yup
    .string()
    ,
    
    subs:yup
    .bool()
    ,
    
    SpecialMsg:yup

    .string()



})


export default formSchema