import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './SingleMember.css';

const { useParams } = require("react-router-dom");
const { getMember, deleteMember } = require("../../Services/MemberApi");

const SingleMember = () => {
    const { id } = useParams();
    const [memberData, setMemberData] = useState(null);
    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            await deleteMember(id);
            navigate('/members');
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const fetchMember = async () => {
            const data = await getMember(id);
            setMemberData(data);
        }
        fetchMember();
    }, [id]);

    if (!memberData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="single-member">

            <h2>{memberData.firstName} {memberData.lastName}</h2>
            <p>ת.ז: {memberData.tz}</p>
            <p>כתובת: {memberData.address.street} {memberData.address.number}, {memberData.address.city}</p>
            <p>תאריך לידה: {new Date(memberData.dateBirth).toLocaleDateString()}</p>
            <p>{memberData.phone ? `טלפון: ${memberData.phone}` : ''}</p>
            <p>{memberData.mobilePhone ? `טלפון נייד: ${memberData.mobilePhone}` : ''}</p>
            <div className="corona-details">
                <p>פרטי קורונה:</p>
                <ul>
                    <p>תאריך בדיקה חיובית: {memberData.coronaDetails.positiveTestDate ? new Date(memberData.coronaDetails.positiveTestDate).toLocaleDateString() : ''}</p>
                    <p>תאריך החלמה: {memberData.coronaDetails.recoveryDate ? new Date(memberData.coronaDetails.recoveryDate).toLocaleDateString() : ''}</p>

                    <ul>
                        {memberData.coronaDetails.vaccinations.map((vaccine, index) => (
                            <li key={index}>
                                <h5>חיסון {index + 1}:</h5>
                                <p>תאריך: {new Date(vaccine.date).toLocaleDateString()}</p>
                                <p>יצרן: {vaccine.manufacturer}</p>

                            </li>
                        ))}
                    </ul>
                </ul>
            </div>
            <div className="member-actions">
                <button onClick={() => navigate(`/members/${memberData._id}/edit`)}>עריכה</button>
                <button onClick={handleDelete}>מחיקה</button>
            </div>
        </div>
    );
}

export default SingleMember;