import './Menue.css';
import { Link } from 'react-router-dom';

const Menue = () => {
  return (
    <div className="menue">
      <Link to="/">בית</Link>
      <Link to="/members">רשימת חברים</Link>
        <Link to="/add-member">הוספת חבר</Link>
    </div>
  );
}

export default Menue;