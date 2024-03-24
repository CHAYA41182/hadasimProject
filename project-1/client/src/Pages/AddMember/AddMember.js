import MemberForm from "../../Components/MemberForm/MemberForm";
import { useAddMemberMutation } from "../../features/membersApiSlice";
import { useNavigate } from "react-router-dom";

const AddMember = () => {

    const navigate = useNavigate();
    const [addMember, { isSuccess, isError, error }] = useAddMemberMutation();

    const handleSubmit = async (values) => {
        try {
            console.log(values);
            await addMember(values);
            console.log("member added");
            if (isSuccess) {
                navigate('/members');
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1>Add Member</h1>
            <MemberForm handleSubmit={handleSubmit} />
        </div>
    )
}

export default AddMember;