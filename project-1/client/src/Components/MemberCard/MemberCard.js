import './MemberCard.css';
import { useNavigate } from 'react-router-dom';
import { useDeleteMemberMutation, useUploadMemberImageMutation } from '../../features/membersApiSlice';
import { useState } from 'react';
import ImageContainer from './ImageContainer';
import MemberDetails from './MemberDetails';
import MemberActions from './MemberActions';

const MemberCard = ({ member, onDelete }) => {
    const navigate = useNavigate();
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

    return (
        <div className="member-card">
            <ImageContainer member={member} memberImage={memberImage} handleImageUpload={handleImageUpload} />
            <MemberDetails member={member} />
            <MemberActions member={member} handleDelete={handleDelete} />
        </div>
    );
};

export default MemberCard;