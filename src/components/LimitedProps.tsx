
type NumberProp={
    value:number
}

type positiveNumberProps= NumberProp &{
    isPositive:boolean
    isNegtive?:never
    isZero?:never
}
type negetiveNumberProps= NumberProp &{
    isNegtive:boolean
    isPositive?:never
    isZero?:never
}
type zeroNumberProps= NumberProp &{
    isZero:boolean
    isPositive?:never
    isNegtive?:never
}

type randomNumberProps=positiveNumberProps|negetiveNumberProps|zeroNumberProps

const LimitedProps=({value}:randomNumberProps)=>{
  return (
    <div>LimitedProps {value}</div>
  )
}

export default LimitedProps