import './MemberCard.css';
import { useNavigate } from 'react-router-dom';
const MemberCard = ({ member }) => {
    const navigate = useNavigate();
    console.log(member);
    return (
        <div className="member-card">
            <h2>{`${member.firstName} ${member.lastName}`}</h2>
            <p>{`מספר ת.ז: ${member.tz}`}</p>
            <p>{member.phone? `טלפון: ${member.phone}` : member.mobilePhone ? `טלפון נייד: ${member.mobilePhone}` : ''}</p>
            <p>{`תאריך לידה: ${(new Date(member.dateBirth)).toLocaleDateString()}` }</p>
            <div className="member-card__actions">
                <button onClick={() => navigate(`/members/${member._id}`)}>צפייה</button>
                <button onClick={() => navigate(`/members/${member._id}/edit`)}>עריכה</button>
                <button >מחיקה</button>
            </div>
        </div>
    );
};

export default MemberCard;