import * as React from 'react'
import classNames from 'classnames'
import { FormInput } from '../../../src/interfaces/'
import style from './FormInput.module.css'

const List = (props: FormInput) => {
  const {
    id,
    value,
    label,
    placeholder,
    name,
    type,
    hint,
    disabled,
    readOnly,
    required,
    error,
    onChange,
    onFocus, 
    onBlur,
    tabIndex,
    className,
    autoComplete,
    autoCorrect,
    autoCapitalize,
    spellCheck
  } = props

  const [focused, setFocused] = React.useState(false)
  const handleFocus = (e:React.FocusEvent<HTMLInputElement>) => {
    if (onFocus) {
      onFocus(e)
    }
    setFocused(true)
  }

  const handleBlur = (e:React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(e)
    }
    setFocused(false)
  }

  const containerClassNames = classNames(style.container, className, {
    [style.error]: Boolean(error),
    [style.focused]: Boolean(focused),
    [style.filled]: Boolean(value),
    [style.hasPlaceholder]: Boolean(placeholder),
    [style.disabled]: Boolean(disabled),
  })
  return (
    <div className={containerClassNames}>
      <label className={style.field} htmlFor={`field-${name}`}>
        <input
          className={style.input}
          id={`field-${name}`}
          tabIndex={tabIndex}
          value={value}
          type={type}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoComplete={autoComplete}
          autoCorrect={autoCorrect}
          autoCapitalize={autoCapitalize}
          spellCheck={spellCheck}
        />
        {label && (
          <span className={style.label}>
            {label}
            {required ? '*' : null}
          </span>
        )}
      </label>
      <p className={style.supportText}>{error || hint}</p>
    </div>
  )
}

export default List
