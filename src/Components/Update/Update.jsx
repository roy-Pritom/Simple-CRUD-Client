import { useLoaderData } from "react-router-dom";


const Update = () => {
    const loadedUser = useLoaderData();
    // console.log(loadedUser);
    const handleUpdate = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value
        const email = form.email.value
        const user={name,email}
        console.log(name,email);
        fetch(`http://localhost:4000/user/${loadedUser._id}`,{
            method:"PUT",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))

    }
    return (
        <div>
            <h2>{loadedUser.name} id : {loadedUser.email}</h2>
            <form onSubmit={handleUpdate}>
                <input type="text" name="text" defaultValue={loadedUser?.name} id="" /> <br />
                <input type="email" name="email" id="" defaultValue={loadedUser?.email} /> <br />
                <input type="Submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;