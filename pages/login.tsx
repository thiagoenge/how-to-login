import * as React from 'react'
import FormInput from 'src/components/FormInput'
import { FormFields } from 'src/interfaces/form'


const formFields:FormFields = {
  username:{
    type:'text',
    label:'email',
    value:'',
    hint:'digite o email cadastrado',
    id:'username',
    required:true,
    error:'',
    validations: ['isEmpty', 'isEmail'],
  },
  password:{
    type:'password',
    label:'senha',
    value: '',
    hint: 'digite a senha cadastrada',
    id:'password',
    required:true,
    error:'',
    validations: ['isEmpty']
  }
}

type ValidationRule = {
  hasError: boolean
  message: string
}
const validateFields = (type:string, value:string, validations:string[]) : ValidationRule['message'] => {
  const rules = {
    isEmpty(inputValue):ValidationRule{
      const isValid = !!inputValue
      const result = {
        error: !isValid ? 'o campo não pode ficar em branco' : ''
      }
      return ({
        hasError:!isValid,
        message: result.error
      })
    },
    isEmail(inputValue):ValidationRule{
      const emailRegex = /^[\w-\.\+]+@([\w-]+\.)+[\w-]{2,4}$/g
      const isValid = inputValue.match(emailRegex)
      const result = {
        error: !isValid ? 'o email digitado não é valido' : ''
      }
      return ({
        hasError:!isValid,
        message: result.error
      })
    }
  }

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

const LoginPage = ()=>{
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
    <div className="login">
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

export default LoginPage