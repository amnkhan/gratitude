import React from "react";
import injectSheet from "react-jss";
import PropTypes from "prop-types";
import { react } from "@nosplatform/api-functions";

const { injectNOS, nosProps } = react.default;

const styles = {
  button: {
    margin: "16px",
    fontSize: "14px"
  }
};

class NOSActions extends React.Component {
  handleAlert = async func => alert(await func);

  // handleGetAddress = async () => alert(await this.props.nos.getAddress());

  handleClaimGas = () =>
    this.props.nos
      .claimGas()
      .then(alert)
      .catch(alert);

  render() {
    const { classes, nos } = this.props;

    const gas = "602c79718b16e442de58778e148d0b1084e3b2dffd5de6b7b16cee7969282de7";


    // Add your smart contract's scriptHash here
    const scriptHash = "";

    // The operation of your smart contract you want to (test)invoke
    const operation = "";

    // The necessary arguments for you (test)invoke
    const args = [];

    // The storagekey you want to query
    const key = "";

    // The amount and recipient of your send function
    const recipient = "";
    const amount = "";

    const invoke = { scriptHash, operation, args }; // and testInvoke
    const getStorage = { scriptHash, key };
    const send = { amount, asset: gas, recipient };

    return (
      <React.Fragment>
        <button className="" onClick={() => this.handleAlert(nos.getAddress())}>
          Get Address
        </button>

        <button className="" onClick={() => this.handleAlert(nos.getBalance({ asset: gas }))}>
          GAS Balance
        </button>

        <button className="" onClick={() => this.handleAlert(nos.send(send))}>
          Send GAS
        </button>


      </React.Fragment>
    );
  }
}

NOSActions.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
  nos: nosProps.isRequired
};

export default injectNOS(injectSheet(styles)(NOSActions));