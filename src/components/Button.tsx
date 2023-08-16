type buttonProps={
    varient:'primary'|'secondary'
    children:string
}& Omit<React.ComponentProps<'button'>,'children'>
const Button=({varient,children,...rest}:buttonProps)=> {
  return (
    <div>

        <button className={`btn-${varient}`} {...rest}>{children}</button>
    </div>
    
  )
}

export default Button