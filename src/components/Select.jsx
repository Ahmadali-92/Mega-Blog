import React, { useId } from 'react'

function Select({
    label,
    options,
    className="",
    ...props
},ref) {
    const {id}=useId()
  return (
    <div>
      {label && <label htmlFor={id}></label>}
      <select id={id} {...props} ref={ref} className={`{$className}`}>
            {options && options.map((option)=>(
                 <option value={option} key={option}>
                        {option}
                 </option>
            ))}
      </select>
    </div>
  )
}

export default React.forwardRef(Select)
