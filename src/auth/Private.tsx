import Login from "./Login"
import { profileProps } from "./Pro"


type PrivateProps={
    isLogin:boolean,
    componet:React.ComponentType<profileProps>
}
function Private({isLogin,componet:Component}:PrivateProps) {
    if(isLogin)
    {
        return <Component name="deepak"/>
    }
    else{
        return <Login/>
    }
}

export default Private