const AlertMessage = ({ type, message }) => {
  if (!message) return null;

  const styles = {
    success: "bg-green-100 border border-green-400 text-green-700",
    error: "bg-red-100 border border-red-400 text-red-700",
  };

  return (
    <div
      className={`${styles[type]} px-4 py-3 rounded-lg mb-6 text-sm`}
      role="alert"
    >
      {type === "error" && <p className="font-semibold">Error:</p>}
      <p>{message}</p>
    </div>
  );
};

export default AlertMessage;
