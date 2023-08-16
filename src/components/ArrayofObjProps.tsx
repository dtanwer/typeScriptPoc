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
                    <p key={i}> name : {item.name}  {item.from} {item.phone}</p>
                )
            })
        }
    </div>
  )
}

export default ArrayofObjProps