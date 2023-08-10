type propsType={
    name:string,
    age?:number
}

const OptinalProps=(props:propsType)=> {
  return (
    <div>
        name : {props.name} <br />
        age : {props.age}
    </div>
  )
}

export default OptinalProps