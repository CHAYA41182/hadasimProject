import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDeleteMemberMutation, useGetMemberQuery } from "../../features/membersApiSlice";
import './SingleMember.css';

const { useParams } = require("react-router-dom");

const SingleMember = () => {
    const { id } = useParams();
    const [member, setMember] = useState();
    const navigate = useNavigate();

    const { data: memberData, error, isLoading, isError, isSuccess} = useGetMemberQuery(id);
    console.log(id);
    const [deleteMember, { isSuccess: isSuccessDelete }] = useDeleteMemberMutation();


    if (isLoading) return <div>Loading...</div>

    const handleDelete = async () => {
        try {
            await deleteMember(id);
            if (isSuccessDelete) {
                navigate('/members');
            }
        } catch (error) {
            console.log(error);
        }
    }


    if (isLoading) return <div>Loading...</div>
    if(error) return <div>{JSON.stringify(error)}</div>
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