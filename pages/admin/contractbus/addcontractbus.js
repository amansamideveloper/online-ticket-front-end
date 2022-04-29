import React, { useEffect } from "react";

// components

import CardAddcontractbus from "components/Cards/CardSettings.js";

// import AddTicketForm from "./addBusForm";
// layout for page
import AddContractForm from "../contractbus/addContractForm";
import Admin from "layouts/Admin.js";

export default function Addcontractbus() {

    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-8/12 px-4">
                    <AddContractForm />
                </div>
                {/* <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div> */}
            </div>
        </>
    );
}

Addcontractbus.layout = Admin;
