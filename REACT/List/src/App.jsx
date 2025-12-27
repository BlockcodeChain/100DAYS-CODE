const App=()=>{
    const numbers=[1,2,3,4,5]
   const userinfo = [
  {
    name: "Ishi",
    email: "ishi@gmail.com",
    phone: "8333333333"
  },
  {
    name: "Aanshi",
    email: "aanshi@gmail.com",
    phone: "9444444444"
  },
  {
    name: "Riya",
    email: "riya@gmail.com",
    phone: "7555555555"
  },
  {
    name: "Neha",
    email: "neha@gmail.com",
    phone: "8666666666"
  },
  {
    name: "Pooja",
    email: "pooja@gmail.com",
    phone: "9777777777"
  }
]

return (

<div>
{numbers.map((num,idx)=>(
  <ul key={Math.random()}>
    <li>{idx}:-{num}</li>
  {/* {key} */}
 </ul>
))}

  {
userinfo.map(({name,email,phone},idx)=>(
  <ul key={idx}>
    <li>{idx}{name}</li>
    <li>{idx}{email}</li>
    <li>{idx}{phone}</li>
  </ul>
))
  }
</div>
)
}
export default App