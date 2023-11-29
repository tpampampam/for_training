import axios from "axios"
import { useEffect, useState } from "react"


export const useGetUsers = (url) => {
    const [users, setUsers] = useState([])
    const getData = async() => {
        const {data}= await axios.get(url)
        setUsers(data)
    }
    useEffect(() => {
        getData()
    },[])
               
    return users
    
}