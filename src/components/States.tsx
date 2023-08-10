import { useState } from "react"
import { user } from "./props.type"
const States=()=> {
    const [isLogin,setIsLogin]=useState(false)
    const [User,setUser]=useState<null|user>(null)
    // const [User,setUser]=useState<user>({} as user)  -> if we dont want to use optinal chaning and we know the user allways have value then we can do this in this way
    const handelClick=()=>{
        if(!isLogin)
        {
            setIsLogin(!isLogin);
            setUser({
                name:"Deepak",
                from:"haryana",
                phone:123456789
            })
            return;
        }
        setIsLogin(!isLogin);
        setUser(null)

    }
  return (
    <div>
        <button onClick={handelClick}>{isLogin===false?"Login":"LogOut"}</button>
        <h1> User is {isLogin===false?"Not Loged In":"LogIn"}</h1>
        <p>{User?.name}</p>
        <p>{User?.from}</p>
        <p>{User?.phone}</p>
    </div>
  )
}

export default States