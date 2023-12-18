let data =[
    {id:1,name:"app",phone:"123"},
    {id:2,name:"tele",phone:"333"},
    {id:3,name:"whats",phone:"7654"},
    
]



function add(callback) {
    let newdata={
        id:4,
        name:"kimia",
        phone:"234"
    }
    setTimeout(()=>{
     data.push(newdata)
     callback()
    },3000)
}
function showdata() {
  data.forEach((elem) => {
    console.log(elem);
  });
}
add(showdata)
// showdata();
