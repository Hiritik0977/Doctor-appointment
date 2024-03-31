const Notification = ({ type, message, description }) => {
    const iconType = type === "success" ? "check-circle" : "exclamation-circle";
    const iconColor = type === "success" ? "#52c41a" : "#f5222d";
  
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ marginRight: "8px" }}>
          <i className={`anticon anticon-${iconType}`} style={{ fontSize: "24px", color: iconColor }} />
        </div>
        <div>
          <h3 style={{ margin: 0 }}>{message}</h3>
          <p style={{ margin: 0 }}>{description}</p>
        </div>
      </div>
    );
  };
  
  export default Notification;