import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <NavLink end 
                style={({ isActive }) => ({'color': isActive ? '#9f0013' : 'inherit'})} 
                to='/context'>Context</NavLink> <br />
            <NavLink end 
                style={({ isActive }) => ({'color': isActive ? '#9f0013' : 'inherit'})} 
                to='/counter'>Counter</NavLink> <br />
            <NavLink end 
                style={({ isActive }) => ({'color': isActive ? '#9f0013' : 'inherit'})} 
                to='/reduxclear'>ReduxClear</NavLink> <br />
            <NavLink end 
                style={({ isActive }) => ({'color': isActive ? '#9f0013' : 'inherit'})} 
                to='/reduxslice'>ReduxSlice</NavLink> <br />
            <NavLink end 
                style={({ isActive }) => ({'color': isActive ? '#9f0013' : 'inherit'})} 
                to='/wrapper'>Wrapper</NavLink> <br />  
            <NavLink end 
                style={({ isActive }) => ({'color': isActive ? '#9f0013' : 'inherit'})} 
                to='/training2'>training2</NavLink> <br />    
            <NavLink end 
                style={({ isActive }) => ({'color': isActive ? '#9f0013' : 'inherit'})} 
                to='/reactquery'>reactQuery</NavLink> <br /> 
        </div>
    )
}
export default Nav