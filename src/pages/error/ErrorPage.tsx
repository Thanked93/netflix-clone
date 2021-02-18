import React, { useContext } from "react";
import { Link } from "react-router-dom";
import StoreContext from "../../context/StoreContext";
import "./ErrorPage.css";

interface ErrorPageProps {
  errorMessage?: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ errorMessage }) => {
  const { accountState } = useContext(StoreContext);
  return (
    <div className="errorpage">
      <h2 className="errorpage__title">
        Hello <span className="errorpage__name">{accountState.name},</span>
      </h2>
      <h3>Something went wrong!</h3>
      <p>
        {errorMessage
          ? errorMessage
          : "You should not stay around in this empty spot."}
      </p>
      <Link style={{ marginTop: "10px" }} to="/">
        <button className="errorpage__button">Take me back</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
