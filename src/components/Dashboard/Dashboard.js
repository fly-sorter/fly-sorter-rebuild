import React from 'react';
import { connect } from 'react-redux';
import logo from '../../assets/logo.png';
import NavUI from './NavUI/NavUI.js';
import './dashboard.scss';
import * as actions from './dashboardAction.js';
import PartsTable from './PartsTable/PartsTable.js';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      finishedLoading: false
    };
  }

  loadTable = () => {
    this.props.getTable({ bob: 'I am bob' });
    if (this.props.main.parts) {
      this.setState({ finishedLoading: true });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="toolbar">
          <img src={logo} />
          <NavUI />
        </div>
        <div className="centered">
          {!this.state.finishedLoading ? (
            <div>
              <p className="loading">Loading Table</p>
              <button onClick={this.loadTable}>Test Load</button>
            </div>
          ) : (
            <PartsTable />
          )}
        </div>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch, getState) => ({
  getTable: message => dispatch(actions.getTable(message))
});

const mapStateToProps = state => ({
  main: state.main
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
