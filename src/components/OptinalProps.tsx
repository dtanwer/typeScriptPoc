type propsType={
    name:string,
    age?:number
}

const OptinalProps=(props:propsType)=> {
  const {age=10,name}=props
  return (
    <div>
        name : {name} <br />
        age : {age}
    </div>
  )
}

export default OptinalProps