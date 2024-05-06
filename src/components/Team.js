function Team(props) {
    let alert;
  
    if (props.title > 10) {
      alert = "alert alert-success";
    } else if (props.title > 0) {
      alert = "alert alert-warning";
    } else {
      alert = "alert alert-danger";
    }
  
    return (
      <p className={alert}>
        <b>{props.name}</b> a remporté <b>{props.title}</b> titre(s)
      </p>
    );
  }
  
  export default Team;