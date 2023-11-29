import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { postsSelector } from "../store"
import { fetchPost } from "./slice"



const CompSlice = () => {

    const dispatch = useDispatch()
    const posts = useSelector(postsSelector)
    console.log(posts)

    useEffect(() => { 
        dispatch(fetchPost())
    },[])

    return (
        <div>
            {posts.map(item => (
                <div key={item.id}>
                    {item.id}:{item.title}
                </div>
            ))}
        </div>
    )
}
export default CompSlice