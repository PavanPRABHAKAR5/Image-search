import {useState, useEffect} from "react"; 
import axios from "axios";


function Images(){
    const [response, setResponse] = useState([]);
    useEffect(()=>{
        axios.get("https://api.unsplash.com/photos/?client_id=qp94GgDnAaRLZQdRmnDam3N9aQpU5YaTN5ISY0njzzk")
        .then((data)=>{
            setResponse(data.data)
            // console.log(data.data)
        })
    },[])

    return response;
}


function SearchImages(query){
    const [response, setResponse] = useState([]);
    useEffect(()=>{
        axios.get("https://api.unsplash.com/search/photos?query="+query+"&client_id=qp94GgDnAaRLZQdRmnDam3N9aQpU5YaTN5ISY0njzzk")
        .then((data)=>{
            setResponse(data.data.results)
            // console.log(data.data.results)
        })
    },[query])

    return response;
}
export {Images, SearchImages};


// <https://api.unsplash.com/search/photos?query=&client_id=qp94GgDnAaRLZQdRmnDam3N9aQpU5YaTN5ISY0njzzk>