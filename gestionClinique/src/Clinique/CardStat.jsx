import Icon from "./Icon";

function CardStat({
  title,
  value,
  icon,
  color = "#2563eb",
}) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "12px",
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,.1)",
      }}
    >
      <div>
        <p
          style={{
            margin: 0,
            color: "#666",
            fontSize: "14px",
          }}
        >
          {title}
        </p>

        <h2
          style={{
            marginTop: "10px",
            color,
          }}
        >
          {value}
        </h2>
      </div>

      <div
        style={{
          background: color,
          padding: "15px",
          borderRadius: "50%",
        }}
      >
        <Icon
          name={icon}
          size={24}
          color="#fff"
        />
      </div>
    </div>
  );
}

export default CardStat;