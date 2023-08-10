type statusProps={
    status:1|2|3
}
const StatusProps=({status}:statusProps)=> {
    let message="";
    if(status===1){
        message="Status is 1";
    }
    else if(status===2){
        message="Status is 2";
    }
    else{
        message="Status is 3";
    }
      return (
    <div>
        <h1>Status Message : {message}</h1>
    </div>
  )
}

export default StatusProps