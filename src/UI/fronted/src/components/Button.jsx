export default function Button({
  children,
  onClick,
  className = "",
  ...props
}) {
  return (
    <button
      className={`btn bg-accent text-white font-bold py-2 px-4 rounded hover:bg-gymYellow hover:text-primary transition ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
