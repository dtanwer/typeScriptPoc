export type profileProps={
    name:string
}
export default function Profile({name}:profileProps) {
  return (
    <div>profile  {name}</div>
  )
}
