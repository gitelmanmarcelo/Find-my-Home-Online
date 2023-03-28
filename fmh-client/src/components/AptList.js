import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";

function AptList() 
{
    const {searchOptions,setSearchOptions} = useContext(AppContext);
    const [aptList,setAptList] = useState([]);

    useEffect(() => {
        console.log('effect')
        console.log(searchOptions)
        fetch("http://localhost:5000/apartment/search",{ 
            method: 'POST', 
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({condition:searchOptions})
        })
        .then(response => response.json())
        .then(data => {
            console.log(data); 
            if (data[0])
                setAptList(aptList.concat(data))
            else
                setAptList([]);
        })
        .catch(err => console.log("ERR:",err))
    },[searchOptions])


    console.log('aptlist=',aptList)
    if (aptList.length === 0)
        return (
            <>
            No match
            </>
        )
        else
    return (
        <>
        <h1>Apt List</h1>
        {
            aptList.map(apt => (
                <>
                {apt.bedrooms}<br/>
                {apt.street}<br/>
                ${apt.price}<br/>
                </>
            ))
        }
        </>
    )
}

export default AptList;