import {Link} from 'react-router-dom'
import {NavStyle} from '../css/NavStyle'
const Nav = ()=>{
    return(
        <>
        <NavStyle>
            <section className="nav">
            <Link to='/'>Home</Link>
            </section>
        </NavStyle>

        </>
    )
}

export default Nav