export default function DatesPrayer({ name, time }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "5px 25px",
        marginBottom: "25px",
        backgroundColor: "#dd5d3dff",
        color: "white",
        borderRadius: "7px",
        flexWrap: "wrap",
      }}
    >
      <p>{name}</p>
      <p>{time}</p>
    </div>
  );
}
