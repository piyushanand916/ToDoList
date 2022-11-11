import React ,{useState} from 'react'

export default function InputField() {
const [text, setText]=useState('');
const [list, addList]=useState([]);

function addto(){
  if(text.length===0){
    alert("Enter your list");
    return;
  }
  else{
  addList([...list, text]);
  }
}
function remove(i){
  const updated=list.filter((elem, id)=>{
    return i!==id;
  })
  addList(updated);
 // document.body.style.backgroundColor="#253956"


}
  return (
    <div className='container my-2' style={{backgroundColor:"#253956"}} >
      <h1 className='my-3' style={{color:"white", textAlign:"center"}}>TO DO LIST</h1>

      <div className="input-group mb-3">
  <input type="text" value={text} className="form-control my-3" placeholder="Enter your list" onChange={(e)=>{setText(e.target.value)}}/>
  <button type="button" onClick={addto} className="btn btn-success my-3">Add</button>
  </div>
      <h4 className='my-2' style={{backgroundColor:'lightslategray', textDecoration:"underline", textAlign:"left"}}>Here  is your todolist</h4>
      <div className='container'style={{marginLeft:"200"}}>
{list!==[]  && list.map((data, i)=>{
return(
<>
<p key={i}>
  <div>
    
  
<div className="d-inline-flex p-2 my-2" style={{backgroundColor:"lightgrey"}}>{data}</div>
<button type="button" className="mx-1 btn btn-outline-danger" onClick={()=>remove(i)}>Remove</button>
    
    </div>
    
</p>

</>

)

})}
{list.length>=1 && 
  <button type="button" className="mx-1 btn btn-danger"  onClick={()=>{addList([])}}>Remove All</button>
  
}
<p>.</p>
</div>
    </div>
  )
}
