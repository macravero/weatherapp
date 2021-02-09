const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div style={{ backgroundColor: "red", color: "white" }}>
      {" "}
      There was an error: {error.message}
      <button onClick={resetErrorBoundary}>Try Again</button>
    </div>
  );
};

export default ErrorFallback;
