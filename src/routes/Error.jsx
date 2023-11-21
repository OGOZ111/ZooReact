import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <>
      <h1>This is not the page you are looking for</h1>
      <p>{error.statusText || error.message}</p>
    </>
  );
}
