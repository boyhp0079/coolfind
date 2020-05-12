import React,{useState} from 'react'
import './SearchBar.css'
export default function SearchBar({searchHandler}) {
    const [text,setText] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        searchHandler(text)
    }
    return (
        <div className="SearchBar">
            <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={e=>setText(e.target.value)}/>
            <button type="submit"><img width="100px" src={process.env.PUBLIC_URL+'/searchicon.jpg'} alt="search"/></button>
            </form>
        </div>
    )
}
