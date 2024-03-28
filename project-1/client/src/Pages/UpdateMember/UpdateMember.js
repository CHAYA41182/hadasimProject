import { useEffect, useState } from "react";
import MemberForm from "../../Components/MemberForm/MemberForm";
import { useNavigate, useParams } from "react-router-dom";
import { useGetMemberQuery, useUpdateMemberMutation } from "../../features/membersApiSlice";

const UpdateMember = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: memberData, error, isLoading, isSuccess } = useGetMemberQuery(id);
    const [updateMember, { isSuccess: isSuccessUpdate }] = useUpdateMemberMutation();

    const [formattedMemberData, setFormattedMemberData] = useState(null);

    useEffect(() => {
        // Format the date fields before passing them to the form
        if (memberData) {
            const formattedData = {
                ...memberData,
                dateBirth: new Date(memberData.dateBirth).toISOString().split('T')[0],
                coronaDetails: {
                    ...memberData.coronaDetails,
                    positiveTestDate: new Date(memberData.coronaDetails.positiveTestDate).toISOString().split('T')[0],
                    recoveryDate: new Date(memberData.coronaDetails.recoveryDate).toISOString().split('T')[0]
                }
            };
            setFormattedMemberData(formattedData);
        }
    }, [memberData]);

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

    if (isLoading || !formattedMemberData) return <div>Loading...</div>;

    return (
        <div>
            <h1>עדכון פרטי חבר</h1>
            <MemberForm handleSubmit={handleSubmit} initialValues={formattedMemberData} />
        </div>
    )
}

export default UpdateMember;
