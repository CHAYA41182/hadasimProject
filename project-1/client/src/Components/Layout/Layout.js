import { Outlet } from 'react-router-dom';
import Menue from '../Menue/Menue';
import './Layout.css';

const Layout = () => {
    return (
        <div className="layout">
            <Menue className="menue" />
            <Outlet className="outlet" />
        </div>
    );
}

export default Layout;