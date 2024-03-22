import React, { useState, useEffect } from 'react';
import MemberCard from '../../Components/MemberCard/MemberCard'
import './MemberList.css';
import { useDeleteMemberMutation, useGetMembersQuery } from '../../features/membersApiSlice';

const MemberList = () => {
    const [members, setMembers] = useState([]);
    const { data: membersData, error, isLoading, isError } = useGetMembersQuery();
    const [deleteMember] = useDeleteMemberMutation();


    const handleDelete = async (id) => {
        try {
            await deleteMember(id);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (membersData) {
            setMembers(membersData);
        }
    }, [membersData]);

    if(isError) return <div>{JSON.stringify(error)}</div>
    if(isLoading) return <div>Loading...</div>
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