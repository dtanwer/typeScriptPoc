type horizontalPosition= "left"|"rigth"|"center"
type verticalPosition= "top"|"bottom"|"center"
type TostProps={
    position:Exclude<`${horizontalPosition}-${verticalPosition}`,'center-center'>|'center'
}
const Tost=({position}:TostProps)=> {
  return (
    <div>
        <h1>Tost postion</h1>
    </div>
  )
}

export default Tost