import Icon from "./Icon";
import { btnIcon } from "./style";

function Modal({ title, children, onClose, wide = false }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "#fff",
          width: "100%",
          maxWidth: wide ? "750px" : "550px",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            padding: "15px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #ddd",
          }}
        >
          <h3>{title}</h3>

          <button
            onClick={onClose}
            style={{ ...btnIcon, border: "none" }}
          >
            <Icon name="x" />
          </button>
        </div>

        <div style={{ padding: "20px" }}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;