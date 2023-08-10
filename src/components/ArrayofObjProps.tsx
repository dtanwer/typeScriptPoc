import { user } from "./props.type"

type propsType={
    users:user[]
}
const ArrayofObjProps=({users}:propsType)=> {
  return (
    <div>
        {
            users.map((item,i)=>{
                return(
                    <p> name : {item.name}  {item.from} {item.phone}</p>
                )
            })
        }
    </div>
  )
}

export default ArrayofObjProps