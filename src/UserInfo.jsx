function UserInfo (props){
    return(
        <>
        <h2>Name: {props.name}</h2>
        <p>Age: {props.age}</p>
        <p>Gender: {props.gender}</p>
        </>
    )
}

export default UserInfo