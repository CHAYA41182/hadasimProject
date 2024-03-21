import './MemberCard.css';
import { useNavigate } from 'react-router-dom';
import { deleteMember } from '../../Services/MemberApi';


const MemberCard = ({ member, onDelete }) => {
    const navigate = useNavigate();

    const handleDelete = () => {
        onDelete(member._id);
    }

    return (
        <div className="member-card">
            <div>
                <h2>{`${member.firstName} ${member.lastName}`}</h2>
                <p>{`מספר ת.ז: ${member.tz}`}</p>
                <p>{member.phone ? `טלפון: ${member.phone}` : member.mobilePhone ? `טלפון נייד: ${member.mobilePhone}` : ''}</p>
                <p>{`תאריך לידה: ${(new Date(member.dateBirth)).toLocaleDateString()}`}</p>
            </div>

            {member.imageURL && <img src={member.imageURL} alt="member" />}

            <div className="member-card__actions">
                <button onClick={() => navigate(`/members/${member._id}`)}>צפייה</button>
                <button onClick={() => navigate(`/members/${member._id}/edit`)}>עריכה</button>
                <button onClick={handleDelete}>מחיקה</button>
            </div>
        </div>
    );
};

export default MemberCard;
