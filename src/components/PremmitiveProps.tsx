import { user } from "./props.type"
type propsType={
    str:string,
    num:number,
    flag:boolean,
    data:user
}

const PremmitiveProps=(props:propsType)=> {
  const {str,num,flag,data}=props
  return (
    <div>
      <ul>
        <li>{str}</li>
        <li>{num}</li>
        <li>{flag===true?"true":"false"}</li>
        <li>{data.name}</li>
        <li>{data.phone}</li>
        <li>{data.from}</li>
      </ul>
    </div>
  )
}

export default PremmitiveProps