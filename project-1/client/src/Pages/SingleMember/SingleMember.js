import { useEffect, useState } from "react";
const { useParams } = require("react-router-dom");
const { getMember } = require("../../Services/MemberApi");

const SingleMember = () => {
    const { id } = useParams();
    const [memberData, setMemberData] = useState(null);

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
        <div>

            <h2>{memberData.firstName} {memberData.lastName}</h2>
            <p>ת.ז: {memberData.tz}</p>
            <p>כתובת: {memberData.address.street} {memberData.address.number}, {memberData.address.city}</p>
            <p>תאריך לידה: {new Date(memberData.dateBirth).toLocaleDateString()}</p>
            <div>
                <p>פרטי קורונה:</p>
                <ul>
                    <ul>
                        {memberData.coronaDetails.vaccinations.map((vaccine, index) => (
                            <li key={index}>תאריך: {new Date(vaccine.date).toLocaleDateString()}, יצרן: {vaccine.manufacturer}</li>
                        ))}
                    </ul>
                </ul>
                <p>תאריך בדיקה חיובית: {memberData.coronaDetails.positiveTestDate ? new Date(memberData.coronaDetails.positiveTestDate).toLocaleDateString() : ''}</p>
                <p>תאריך החלמה: {memberData.coronaDetails.recoveryDate ? new Date(memberData.coronaDetails.recoveryDate).toLocaleDateString() : ''}</p>
            </div>
        </div>
    );
}

export default SingleMember;