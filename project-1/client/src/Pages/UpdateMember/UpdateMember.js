import { useEffect, useState } from "react";
import MemberForm from "../../Components/MemberForm/MemberForm";
import { updateMember, getMember } from "../../Services/MemberApi";
import { useParams } from "react-router-dom";


const UpdateMember = () => {

    const { id } = useParams();
    const [memberData, setMemberData] = useState(null);

    const handleSubmit = async (values) => {
        try {
            console.log(values);
            const data = await updateMember(id, values);
            console.log("updated member:", data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const fetchMember = async () => {
            const data = await getMember(id);
            setMemberData(data);
            console.log(data);
            
        }
        fetchMember();
    }, [id]);

    if (!memberData) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h1>עדכון פרטי חבר</h1>
            <MemberForm handleSubmit={handleSubmit} initialValues={memberData} />
        </div>
    )
}

export default UpdateMember;