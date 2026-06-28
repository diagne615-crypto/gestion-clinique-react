import Icon from "./Icon";
import { btnPrimary, btnSecondary } from "./style";

function ConfirmDialog({
  message,
  onConfirm,
  onCancel,
}) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "10px",
          width: "350px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            marginBottom: "15px",
          }}
        >
          <Icon
            name="trash"
            size={40}
            color="red"
          />
        </div>

        <h3>Confirmation</h3>

        <p>{message}</p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          <button
            style={btnSecondary}
            onClick={onCancel}
          >
            Annuler
          </button>

          <button
            style={{
              ...btnPrimary,
              background: "#dc2626",
            }}
            onClick={onConfirm}
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDialog;