import { useNavigate } from 'react-router-dom';

const MemberActions = ({ member, handleDelete }) => {
    const navigate = useNavigate();
    return (
        <div className='left'>
            <div className="member-card__actions">
                <button onClick={() => navigate(`/members/${member._id}`)}>צפייה</button>
                <button onClick={() => navigate(`/members/${member._id}/edit`)}>עריכה</button>
                <button onClick={handleDelete}>מחיקה</button>
            </div>
        </div>
    );
};

export default MemberActions;