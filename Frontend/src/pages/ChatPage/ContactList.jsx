import ContactPersonSelect from "./ContactPersonSelect";

const ContactList = ({chatList, selectedChatroom, changeRoom}) => {

    return (
        <div className="bg-[#141414] rounded-lg p-2 h-[calc(90%)] overflow-y-auto">
            {
                chatList.map((frdsDetail, i) => (
                    <ContactPersonSelect 
                        key={i}
                        chatRoom={frdsDetail}
                        changeRoom={changeRoom}
                        selectedChatroom={selectedChatroom}
                    />
                ))
            }
        </div>
    );
}

export default ContactList;