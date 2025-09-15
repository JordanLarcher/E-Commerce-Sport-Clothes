export default function Notification({ message, type = "info" }) {
  const color =
    type === "error"
      ? "bg-red-500"
      : type === "success"
      ? "bg-green-500"
      : "bg-gymYellow";
  return (
    <div
      className={`fixed top-6 right-6 px-6 py-3 rounded shadow-lg text-white font-bold z-50 ${color}`}
    >
      {message}
    </div>
  );
}
