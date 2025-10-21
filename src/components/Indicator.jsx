function Indicator() {
  return (
    <section className="flex-center mt-40 w-full flex-col gap-4">
      <div className="size-10 animate-spin rounded-[50%] border-6 border-stone-300 border-t-red-500"></div>
      <p className="text-lg">Loading...</p>
    </section>
  );
}

export default Indicator;
