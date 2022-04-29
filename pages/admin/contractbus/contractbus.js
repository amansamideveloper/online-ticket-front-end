import React, { useState, useEffect } from "react";
import axios from "axios";
// components

import CardTable from "components/Cards/CardTable.js";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// layout for page
import { getContractBuses } from "../../../actions/contractbusAction";

import Admin from "layouts/Admin.js";
import { useRouter } from "next/router";
import { isAdmin } from "actions/authAction";
import Usercard from "../user/Usercard";
import ContractBuscard from "./ContractBuscard";
function Contractbus(props) {
    const router = useRouter();
    useEffect(() => {
        // console.log('aaaaaaaaaa')
        // getTickets()
        props.getContractBuses()
        props.isAdmin(props.auth.user.id)
    }, [])
    console.log(props.auth.admin)
    if (props.auth.admin && props.auth.admin === true) {

        return (<>
            <div className="flex flex-wrap mt-4">
                <div className="w-full mb-12 px-4">
                    {/* <CardTable /> */}
                    <ContractBuscard buses={props.buses} />
                </div>
                {/* <div className="w-full mb-12 px-4">
      <CardTable color="dark" />
    </div> */}
            </div>
        </>)
    } else {
        return null
    }

}
Contractbus.propTypes = {
    getUsers: PropTypes.func.isRequired,

    errors: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
    buses: state.contractbus


})

Contractbus.layout = Admin;
export default connect(mapStateToProps, { getContractBuses, isAdmin })(Contractbus)
