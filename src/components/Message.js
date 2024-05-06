function Message(props) {
    return (
    <p className="bg-primary text-white display-3">
        This is a message from <b>{props.name}</b> who is a <b>{props.job}</b> and is <b>{props.age}</b> years old
        </p>
    );
}

export default Message;