import { useEffect, useState } from "react";
import MemberForm from "../../Components/MemberForm/MemberForm";
import { useNavigate, useParams } from "react-router-dom";
import { useGetMemberQuery, useUpdateMemberMutation } from "../../features/membersApiSlice";



const UpdateMember = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const { data: memberData, error, isLoading, isSuccess } = useGetMemberQuery(id);
    const [updateMember, { isSuccess: isSuccessUpdate }] = useUpdateMemberMutation();


    if (isLoading) return <div>Loading...</div>

    const handleSubmit = async (values) => {
        try {
            await updateMember({ id, member: values });
            if (isSuccess) {
                navigate('/members');
            }
        } catch (error) {
            console.log(error);
        }
    }


    if (isLoading) return <div>Loading...</div>
    return (
        <div>
            <h1>עדכון פרטי חבר</h1>
            <MemberForm handleSubmit={handleSubmit} initialValues={memberData} />
        </div>
    )
}

export default UpdateMember;