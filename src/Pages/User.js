
import  {useSelector,useDispatch} from "react-redux"
import Navbar from '../Components/Navbar'
import { deleteuser } from "../Store/actions/user";


const User = () => {
const users = useSelector(state => state.users);
 const dispatch = useDispatch()
    return (
        <div>
          <Navbar/>
          
          {users.map((user,index)=>{
            return(
              <div key={index}>
                <br/>
                <h2>User Information</h2><br/>
                <p>{user.name}</p><br/>
                <p>{user.email}</p><br/>
                <p>{user.contact}</p><br/>
                <p>{user.address}</p><br/>
                <button onClick={()=>dispatch(deleteuser(index))}>Delete</button>
                </div>
            )
          })
          }
        </div>
    )
}

export default User
