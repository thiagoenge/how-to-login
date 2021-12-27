import * as React from 'react'
import classNames from 'classnames'
import { ButtonProps } from 'src/interfaces/'
import style from './Button.module.css'

const Button = (props: ButtonProps) => {
  const {
    className,
    type,
    label,
    variant='primary',
    onClick,
    disabled,
    loading,
    ...rest
  } = props
  
  const buttonClassNames = classNames(style.button, style[variant],style.standard ,{
    [style.disabled]: disabled,
  })


  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(buttonClassNames, className)}
      disabled={disabled}
      {...rest}
    >
      {label}
    </button>
  )
}

export default Button
