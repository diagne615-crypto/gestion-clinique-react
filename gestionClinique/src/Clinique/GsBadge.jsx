const groupeColors = {

  "A+": {
    bg: "#fee2e2",
    color: "#991b1b"
  },

  "A-": {
    bg: "#fecaca",
    color: "#7f1d1d"
  },

  "B+": {
    bg: "#dbeafe",
    color: "#1e40af"
  },

  "B-": {
    bg: "#bfdbfe",
    color: "#1e3a8a"
  },

  "AB+": {
    bg: "#d1fae5",
    color: "#065f46"
  },

  "AB-": {
    bg: "#a7f3d0",
    color: "#064e3b"
  },

  "O+": {
    bg: "#fef9c3",
    color: "#854d0e"
  },

  "O-": {
    bg: "#fde68a",
    color: "#78350f"
  }

};

function GsBadge({ gs }) {

  const style = groupeColors[gs] || {
    bg: "#f1f5f9",
    color: "#475569"
  };

  return (
    <span
      style={{
        background: style.bg,
        color: style.color,
        padding: "4px 10px",
        borderRadius: "6px",
        fontWeight: "bold",
        fontSize: "12px"
      }}
    >
      {gs}
    </span>
  );
}

export default GsBadge;