import ContactPersonSelect from "./ContactPersonSelect";

const ContactList = ({chatList, handleState}) => {
    return (
        <div className="bg-[#141414] rounded-lg p-2 h-[calc(90%)] overflow-y-auto">
            {
                chatList.map((frdsDetail, i) => (
                    <ContactPersonSelect 
                        key={i}
                        userID={frdsDetail.userA} 
                        chatRoom={frdsDetail}
                        handleState={handleState}
                    />
                ))
            }
        </div>
    );
}

export default ContactList;