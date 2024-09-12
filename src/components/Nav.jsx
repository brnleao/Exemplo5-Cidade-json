import { Link } from 'react-router-dom'

const Nav=()=>{
    return(
        <>
            <Link to={'/'}>Home</Link>
            <Link to={'/login'}>Login</Link>
            <Link to={'/dashboard'}>Dashboard</Link>
        </>
    )
}

export default Nav