import { useAuthContext } from "../../Hooks/useAuthContext";

const ContactPersonSelect = ({chatRoom, changeRoom, selectedChatroom}) => {
    const{ user } = useAuthContext()

    const fdName = chatRoom.user.find(chatFd => chatFd !== user.unique_name)
    return ( 
        <div className={`${(selectedChatroom.user===chatRoom.user)?'bg-[#003865]':''} border-gray-700 border rounded-xl p-4 m-3 hover:bg-[#003865] duration-300`}
            onClick={() => changeRoom(chatRoom)}>
            {fdName}
        </div>
    );
}

export default ContactPersonSelect;