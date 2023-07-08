const ContactPersonSelect = ({userID, chatRoom, handleState}) => {
    
    return ( 
        <div className="border-gray-700 border rounded-xl p-4 m-3 hover:bg-[#00f9ff] hover:text-gray-900 duration-300"
            onClick={() => handleState(chatRoom)}>
            {userID}
        </div>
    );
}

export default ContactPersonSelect;