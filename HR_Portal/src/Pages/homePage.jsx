const HomePage = () => {
  return (
    <div className="container py-5">
      <div className="p-5 rounded bg-light shadow text-center">
        <h1 className="display-3 text-primary fw-bold">
          Welcome to the HR Portal 👩‍💼👨‍💼
        </h1>

        <p className="fs-4 mt-4 text-dark">
          Where <strong>people</strong> are our greatest asset... and coffee is a close second ☕
        </p>

        <p className="fs-5 text-secondary">
          Whether you're here to check your calendar, request time off, or just procrastinate responsibly — we've got your back!
        </p>

        <div className="alert alert-info fs-5 mt-4 mx-auto" role="alert" style={{ maxWidth: '600px' }}>
          💡 <em>Pro Tip:</em> Smiling at HR increases your PTO by 0%. But we appreciate it anyway.
        </div>
      </div>
    </div>
  );
};

export default HomePage;
