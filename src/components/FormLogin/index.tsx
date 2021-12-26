import * as React from 'react'
import { ValidationRule } from '../../../src/interfaces/'
import FormInput from '../../../src/components/FormInput'
import { validationData } from '../../../src/utils/validations'
import formFields from './fields'


const validateFields = (type:string, value:string, validations:string[]) : ValidationRule['message'] => {
  const rules = validationData

  let result = {
    hasError:false,
    message:''
  }
  for(let i = 0; i < validations.length;i++){
    const rule = validations[i]
    console.log(rules, rule, value)
    result = rules[rule](value)
    if(result.hasError){
      break;
    }
  }
  console.log('isEmpty', rules['isEmpty'](value))
  return result.message
}

const LoginForm = ()=>{
  const [fields, setFields] = React.useState(formFields)
  
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void=>{
    const {value, name } = e.target
    // UX Note: Onchange only validate on fields that have errors
    // otherwise Onblur event must be preferred
    let errorMessage:ValidationRule['message'] = ''
    if(fields[name].error){
      const {validations} = fields[name]
      errorMessage = validateFields(name, value, validations)
    }

    setFields((oldFields)=>({
      ...oldFields,
      [name]:{
        ...oldFields[name],
        value,
        error:errorMessage
      }
    }))
  }

  const handleBlur = (e:React.FocusEvent<HTMLInputElement>):void=>{
    const {value, name } = e.target
    const {validations} = fields[name]
    const errorMessage = validateFields(name, value, validations)
    if(errorMessage){
      setFields((oldFields)=>({
        ...oldFields,
        [name]:{
          ...oldFields[name],
          error:errorMessage
        }
      }))
    }
  }
  
  return(
    <div className="loginForm">
      {Object.keys(fields).map((key,i)=>(
        <FormInput
          key={key}
          id={fields[key].id}
          name={key}
          type={fields[key].type}
          label={fields[key].label}
          value={fields[key].value}
          onChange={handleChange}
          onBlur={handleBlur}
          hint={fields[key].hint}
          error={fields[key].error}
          tabIndex={i+1}
          required={fields[key].required}
        />
      ))}
  </div>
  )
}

export default LoginForm