import './MemberCard.css';
import { useNavigate } from 'react-router-dom';
import { useDeleteMemberMutation, useUploadMemberImageMutation } from '../../features/membersApiSlice';
import { useState } from 'react';
import { FaUpload } from 'react-icons/fa';

const MemberCard = ({ member, onDelete }) => {
    const navigate = useNavigate();

    const [deleteMember, { isSuccess, isError, error, data }] = useDeleteMemberMutation();
    const [uploadMemberImage] = useUploadMemberImageMutation();
    const [memberImage, setMemberImage] = useState(member.imageUrl);

    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        const response = await uploadMemberImage({ id: member._id, image: file });
        if (response && response.data) {
            setMemberImage(response.data.imageUrl || member.imageUrl);
        } else {
            console.error('Unexpected response', response);
        }
    }


    const handleDelete = async () => {
        onDelete(member._id);
        navigate('/members');
    }
    if (isError) console.log(error);
    if (data) console.log(data);


    return (
        <div className="member-card">
            <div className="image-container">
                <img src={memberImage ? memberImage : 'http://localhost:3000/defultAvatar.png'} alt="member" className='image' />
                <label htmlFor={member._id + "file-upload"} className="custom-file-upload" >
                    <FaUpload />
                </label>
                <input id={member._id + "file-upload"} key={member._id} type="file" onChange={handleImageUpload} style={{ display: 'none' }} />
            </div>
            <div>
                <p>{isError ? JSON.stringify(error) : ''}</p>

                <div className='detiles'>
                    <h2>{`${member.firstName} ${member.lastName}`}</h2>
                    <p>{`מספר ת.ז: ${member.tz}`}</p>
                    <p>{member.phone ? `טלפון: ${member.phone}` : member.mobilePhone ? `טלפון נייד: ${member.mobilePhone}` : ''}</p>
                    <p>{`תאריך לידה: ${(new Date(member.dateBirth)).toLocaleDateString()}`}</p>
                </div>
                <div className='left'>
                    <div className="member-card__actions">
                        <button onClick={() => navigate(`/members/${member._id}`)}>צפייה</button>
                        <button onClick={() => navigate(`/members/${member._id}/edit`)}>עריכה</button>
                        <button onClick={handleDelete}>מחיקה</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberCard;
