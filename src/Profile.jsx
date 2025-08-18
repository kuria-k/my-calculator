function Profile({user}){
    return(
        <>
         <h2>{user.name}</h2>
         <h2>{user.age}</h2>
         <h2>{user.gender}</h2>

        </>
    )
}

export default Profile
