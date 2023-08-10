type ListProps<T>={
    items:T[],
    onClick:(value:T)=>void
}
const GenericProps=<T extends  {}>({items,onClick}:ListProps<T>)=> {
  return (
    <div>
        {
            items.map((item)=>{
                return(
                    <div>
                        {/* {item} */}
                    </div>
                )
            })
        }
    </div>
  )
}

export default GenericProps
