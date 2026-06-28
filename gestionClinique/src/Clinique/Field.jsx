function Field({
  label,
  required = false,
  children,
  hint,
}) {
  return (
    <div
      style={{
        marginBottom: "18px",
      }}
    >
      <label
        style={{
          display: "block",
          marginBottom: "6px",
          fontWeight: "600",
          fontSize: "14px",
        }}
      >
        {label}

        {required && (
          <span
            style={{
              color: "red",
            }}
          >
            {" "}
            *
          </span>
        )}
      </label>

      {children}

      {hint && (
        <small
          style={{
            color: "#666",
          }}
        >
          {hint}
        </small>
      )}
    </div>
  );
}

export default Field;