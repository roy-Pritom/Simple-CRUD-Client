import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const User = () => {
    const loadedUser=useLoaderData()
    const [users,setUsers]=useState(loadedUser)
    // console.log(users);
    const handleDelete=(id)=>{
     console.log(id);
     fetch(`http://localhost:4000/user/${id}`,{
        method:'DELETE'
     })
     .then(res=>res.json())
     .then(data=>{
        console.log(data)
        if(data.deletedCount>0)
        {
            alert('Deleted from db successfully')
            const remaining=users.filter(user=>user._id!==id)
            setUsers(remaining)
        

        }
     })
    }
    console.log(users);
    return (
        <div>
            
            <h2>Number of users is : {users.length}</h2>
            <div className="">
                {
                    users.map(user=><p
                    key={user._id}
                    >{user.name} {user.email} 
                   <button> <Link to={`/update/${user._id}`}>Update</Link></button>
                    <button
                    onClick={()=>handleDelete(user._id)}
                    >X</button></p>)
                }
            </div>
        </div>
    );
};

export default User;