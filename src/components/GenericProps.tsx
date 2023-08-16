type ListProps<T>={
    items:T[],
    onClick:(value:T)=>void
}
const GenericProps=<T extends number>({items,onClick}:ListProps<T>)=> {
  return (
    <div>
        {
            items.map((item,i)=>{
                // console.log(item)
                return(
                    <div onClick={()=>onClick(item)} key={i}>
                        {item}
                    </div>
                )
            })
        }
    </div>
  )
}

export default GenericProps
