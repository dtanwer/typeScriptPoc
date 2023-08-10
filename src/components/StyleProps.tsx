type styleProps={
    style:React.CSSProperties
}
const StyleProps=(props:styleProps)=> {
  return (
    <div style={props.style}>StyleProps</div>
  )
}

export default StyleProps