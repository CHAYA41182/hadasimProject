import React, { useState, useEffect } from 'react';
import { getMembers, deleteMember } from '../../Services/MemberApi'
import MemberCard from '../../Components/MemberCard/MemberCard'
import './MemberList.css';

const MemberList = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        fetchMembers();
    }, []);

    const fetchMembers = async () => {
        const membersData = await getMembers();
        setMembers(membersData);
    };

    const handleDelete = async (id) => {
        try {
            await deleteMember(id);
            fetchMembers();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="member-list">
            <h1>רשימת חברי קופת חולים</h1>
            <div className="members">
                {members.map(member => (
                    <MemberCard key={member._id} member={member} onDelete={handleDelete} />
                ))}
            </div>
        </div>
    );
}

export default MemberList;