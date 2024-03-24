import { FaUpload } from 'react-icons/fa';

const ImageContainer = ({ member, memberImage, handleImageUpload }) => (
    <div className="image-container">
        <img src={memberImage ? memberImage : 'http://localhost:3000/defultAvatar.png'} alt="member" className='image' />
        <label htmlFor={member._id + "file-upload"} className="custom-file-upload" >
            <FaUpload />
        </label>
        <input id={member._id + "file-upload"} key={member._id} type="file" onChange={handleImageUpload} style={{ display: 'none' }} />
    </div>
);

export default ImageContainer;