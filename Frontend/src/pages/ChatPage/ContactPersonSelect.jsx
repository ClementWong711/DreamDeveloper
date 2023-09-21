import { useAuthContext } from "../../Hooks/useAuthContext";
import useFetch from "../../Hooks/useFetch";

const ContactPersonSelect = ({chatRoom, changeRoom, selectedChatroom}) => {
    const{ user } = useAuthContext()

    const fdName = chatRoom.user.find(chatFd => chatFd !== user.unique_name)
    const userData = useFetch(`/user/${fdName}`)
    const fdNickName =  (userData !== null)?userData[0].nick_name:""
    return ( 
        <div className={`${(selectedChatroom.user===chatRoom.user)?'bg-[#003865]':''} border-gray-700 border rounded-xl p-4 m-3 hover:bg-[#003865] duration-300 flex items-center justify-between`}
            onClick={() => changeRoom(chatRoom)}>
            <span>{fdNickName}</span>
            <span className="text-xs">@{fdName}</span>
        </div>
    );
}

export default ContactPersonSelect;