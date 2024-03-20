import './MemberCard.css';

const MemberCard = ({ member }) => {
    return (
        <div className="member-card">
            <h2>{member.name}</h2>
            <p>{member.tz}</p>
            <p>{member.phone}</p>
            <p>{(new Date(member.birthDate)).toLocaleDateString()}</p>
            <div className="member-card__actions">
                <button onClick={() => navigate(`/members/${member._id}`)}>צפייה</button>
                <button onClick={() => navigate(`/members/${member._id}/edit`)}>עריכה</button>
                <button onClick={() => deleteMember(member._id)}>מחיקה</button>
            </div>
        </div>
    );
};

export default MemberCard;