import React, { useState, useEffect } from 'react';
import {getMembers} from '../../Services/MemberApi'
import MemberCard from '../../Components/MemberCard/MemberCard'
import './MemberList.css';

const MemberList = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        const fetchMembers = async () => {
            const membersData = await getMembers();
            setMembers(membersData);
        };

        fetchMembers();
    }, []);

    return (
        <div className="member-list">
            <h1>רשימת חברי קופת חולים</h1>
            {members.map(member => (
                <MemberCard key={member._id} member={member} />
            ))}
        </div>
    );
}

export default MemberList;