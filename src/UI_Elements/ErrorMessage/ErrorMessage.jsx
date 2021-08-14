import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { CSSTransition } from "react-transition-group";

import "./Style/ErrorMessage.style.css";

const ErrorMessage = ({ msg, type }) => {
  const dispatch = useDispatch();
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (msg) {
      setShowMessage(true);

      let timer = setTimeout(() => {
        dispatch({ type: type });
        setShowMessage(false);
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [dispatch, msg, type]);

  return (
    <>
      <CSSTransition
        in={showMessage}
        timeout={300}
        classNames="alert"
        unmountOnExit>
        {msg && <div className="error-message">{msg}</div>}
      </CSSTransition>
    </>
  );
};

export default ErrorMessage;
