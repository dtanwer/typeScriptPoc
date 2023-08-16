
import OptinalProps from "./OptinalProps"
const ExtractingCompProps=(prosps:React.ComponentProps<typeof OptinalProps>)=> {
  return (
    <div>ExtractingCompProps {prosps.name}</div>
  )
}

export default ExtractingCompProps