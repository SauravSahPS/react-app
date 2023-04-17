import React from "react";

interface Props {
  showAlertPopup: boolean;
  closeAlert: () => void;
}

const DismissingAlert = ({ showAlertPopup, closeAlert }: Props) => {
  console.log(showAlertPopup);
  let show = "hide";
  if (showAlertPopup) show = "show";

  return (
    <div
      className={"alert alert-warning alert-dismissible fade " + show}
      role="alert"
    >
      <strong>Holy guacamole!</strong> You should check in on some of those
      fields below.
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={closeAlert}
      ></button>
    </div>
  );
};

export default DismissingAlert;
