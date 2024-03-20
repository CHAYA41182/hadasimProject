import MemberForm from "../../Components/MemberForm/MemberForm";
import MemberApi from "../../Services/MemberApi";

const AddMember = () => {
    const handleSubmit = async (values) => {
        try {
            console.log(values);
            const data = await MemberApi.addMember(values);
            console.log("added member:", data);
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