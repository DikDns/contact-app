import { useRouteError } from "react-router-dom";

export default function ErrorPages() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Waduh!</h1>
      <p>Mohon maaf, telah terjadi kesalahan tak terduga.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
