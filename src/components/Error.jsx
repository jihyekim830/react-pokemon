function Error({ message }) {
  return (
    <div className="mt-30 text-center text-lg whitespace-pre-wrap">
      ⚠️ {message}
    </div>
  );
}

export default Error;
