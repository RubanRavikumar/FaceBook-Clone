import React from "react";
import "./MessengerKids.css";

function MessengerKids(){
    return (
      <div className="messenger-kids">
        <div className="row">
          {/* left side box */}
          <div className="col-3 border-end shadow min-vh-100 px-2 py-3">
            <div>
              <span className="fw-7 fs-4">Messenger Kids</span>
            </div>
            <div className="mt-2 fw-5 fs-6">Create an account for my child</div>
          </div>
          <div className="col-9 bg-color">
            <div className="d-flex justify-content-center">
              <div className="mt-3 p-5 border shadow w-50">Feeds</div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default MessengerKids;