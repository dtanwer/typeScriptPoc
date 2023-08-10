type propType={
    handelClickButton:(event:React.MouseEvent<HTMLButtonElement>,i:number)=> void
    handelOnChangeInput:(event:React.ChangeEvent<HTMLInputElement>)=> void
}
const EventProps=(props:propType)=>{
  return (
    <div>
        <button onClick={(e)=>props.handelClickButton(e,2)}>Cleck Me</button>
        <input type="text"  onChange={props.handelOnChangeInput} placeholder="input something here !!!" />
    </div>
  )
}

export default EventProps