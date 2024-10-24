import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();
    const fromMe = message.senderId === authUser._id;
    const formattedTime = extractTime(message.createdAt);
    const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;

    return (
        <div>
            <div>
                <img alt="Profile" src={profilePic} style={{ width: "40px", borderRadius: "50%" }} />
            </div>
            <div>
                {message.message}
            </div>
            <div>
                {formattedTime}
            </div>
        </div>
    );
};

export default Message;
