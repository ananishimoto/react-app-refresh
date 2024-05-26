import { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
  visible: boolean;
  onCloseClick: () => void;
}

const Alert = ({ children, visible, onCloseClick }: AlertProps) => {
  if (visible) {
    return (
      <>
        <div
          className="alert alert-info alert-dismissible fade show"
          role="alert"
        >
          {children}
          <span>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              data-bs-dismiss="alert"
              onClick={onCloseClick}
            ></button>
          </span>
        </div>
      </>
    );
  }
};

export default Alert;
