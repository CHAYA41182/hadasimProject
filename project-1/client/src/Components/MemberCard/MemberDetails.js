const MemberDetails = ({ member }) => (
    <div>
        <div className='detiles'>
            <h2>{`${member.firstName} ${member.lastName}`}</h2>
            <p>{`מספר ת.ז: ${member.tz}`}</p>
            <p>{member.phone ? `טלפון: ${member.phone}` : member.mobilePhone ? `טלפון נייד: ${member.mobilePhone}` : ''}</p>
            <p>{`תאריך לידה: ${(new Date(member.dateBirth)).toLocaleDateString()}`}</p>
        </div>
    </div>
);

export default MemberDetails;