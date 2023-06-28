import ContactPersonSelect from "./ContactPersonSelect";

const ContactList = ({chatList, handleState}) => {
    return (
        <div className="bg-[#141414] rounded-lg p-2 h-[calc(90%)]">
            {
                chatList.map((frdsDetail) => (
                    <ContactPersonSelect 
                        userID={frdsDetail.userID} 
                        chatRoomID={frdsDetail.id}
                        handleState={handleState}
                    />
                ))
            }
        </div>
    );
}

export default ContactList;