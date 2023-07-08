const ContactPersonSelect = ({userID, chatRoom, handleState, selectedChatroom}) => {
    
    return ( 
        <div className={`${(selectedChatroom.userA==userID)?'bg-[#003865]':''} border-gray-700 border rounded-xl p-4 m-3 hover:bg-[#003865] duration-300`}
            onClick={() => handleState(chatRoom)}>
            {userID}
        </div>
    );
}

export default ContactPersonSelect;