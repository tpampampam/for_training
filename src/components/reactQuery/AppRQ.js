import axios from "axios"
import { useEffect, useState } from "react"
import { useQuery } from "react-query"



const fetchCoins = async(id=1) => {
    const {data }= await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    console.log(data)
    return [data]
}



const AppRQ = () => {

    const [page, setPage] = useState(1)
    const {data, isLoading, isError} = useQuery(
        ['coins', page], 
        () => fetchCoins(page),
        {
            keepPreviousData:true
        })
    console.log(data)

    if(isLoading) {
        return <h3>Loading...</h3>
    }
    if(isError) {
        return <h3>Error!!!</h3>
    }
    if(!data) {
        return <h3>No data!</h3>
    }

    return(
        <div>
            {data.map(item => (
                <div key={item.id}>
                    {item.name}
                </div>
            ))}
            <button onClick={() => setPage(p => p + 1)}>next</button>
            <button onClick={() => setPage(p => p - 1)}>back</button>
        </div>
    )

}

export default AppRQ