
import './App.css'

function App() {
const handleSubmit=(e)=>{
e.preventDefault()
const form=e.target;
const name=form.name.value
const email=form.email.value
const user={name,email}
console.log(user);

fetch('http://localhost:4000/user',{
  method:'POST',
  headers:{
    'content-type':'application/json'
  },
  body:JSON.stringify(user)
})
.then(res=>res.json())
.then(data=>{
  console.log(data)
  if(data.insertedId){
    alert('post to monogodb successfully')
    form.reset();
  }
})
}

  return (
    <>
      
      <h2>Simple CRUD Client site first time</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="" /> <br />
        <input type="email" name="email" id="" /> <br />
        <input type="submit" value="Add user" />
      </form>

     
    </>
  )
}

export default App
