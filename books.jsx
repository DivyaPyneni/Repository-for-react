import React,{useState} from 'react';



export const Books=()=>{
const [data,setData]=useState({title:'',brief:'',category:'',subcategory:''})
const {title,brief,category,subcategory}=data;
const changeHandler=e=>{
    setData({...data,[e.target.name]:[e.target.value]})
}
const submitHandler=e=>{
    e.preventDefault();
    console.log(data);
}
return(
    <div>
        <center>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Title</label>
                    <input type="text" name="title" value={title} onChange={changeHandler}></input>
                </div>
                <div>
                    <label>Brief</label>
                    <input type="text" name="brief" value={brief} onChange={changeHandler}></input>
                </div>
                <div>
                    <label>Category</label>
                    <input type="text" name="category" value={category} onChange={changeHandler}></input>
                </div>
                <div>
                    <label>Sub-Category</label>
                    <input type="text" name="subcategory" value={subcategory} onChange={changeHandler}></input>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </center>
    </div>
)
}