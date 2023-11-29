import { useContext } from "react"
import { userContext } from "./context"


const Level3 = () => {

    const users = useContext(userContext)
    console.log(users)
    return (
        <div>
            {users.map(item => (
                <div key={item.id}>
                    <b>{item.name}</b>:<b>{item.surname}</b><br/>
                    <i>{item.email}</i>
                </div>
            ))}
        </div>
    )
}

export default Level3