// table.js

// react
import React from 'react';
import PropTypes from 'prop-types';

// time ago
import TimeAgo from 'react-timeago';

// material ui
import { withStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Paper from '@material-ui/core/Paper';

// store
import { store } from '../reducers/index';

// actions
import { setSelectedVisit } from '../actions/visitActions';

/**
 * displays material UI table of data in store.visits
 *
 * Created by David Goldstein on 2/9/18
 **/

// columns for table. Exported for testing
const styles = {
  root: {
    width: '100%',
    marginTop: 8 * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  }
};

// columns for table. Exported for testing
export const columns = [
  { display: 'Ip Address', key: 'ip' },
  { display: 'City', key: 'city' },
  { display: 'State or Region', key: 'region_code' },
  { display: 'Country', key: 'country_code' },
  { display: 'Visit Date', key: 'visit_date' }
];

class VisitTable extends React.Component {
  constructor(props) {
    super(props);
    // bound methods
    this._handleRowClick = this._handleRowClick.bind(this);
  }

  /**
   * handler for when the user clicks a row
   * @param {json} visit
   **/
  _handleRowClick(visit) {
    if (
      this.props.visits.selectedVisit === undefined ||
      this.props.visits.selectedVisit.visit_date !== visit.visit_date
    )
      store.dispatch(setSelectedVisit(visit));
  }

  render() {
    return (
      <Paper style={styles.root}>
        <Table style={styles.table}>
          <TableHead>
            <TableRow>
              {columns.map((col, colId) => {
                return <TableCell key={colId}>{col.display}</TableCell>;
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.visits.visits.map((visit, vId) => {
              return (
                <TableRow
                  hover
                  key={vId}
                  onClick={() => this._handleRowClick(visit)}
                >
                  {columns.map((col, colId) => {
                    if (col.key === 'visit_date') {
                      return (
                        <TableCell key={colId}>
                          <TimeAgo date={visit['visit_date']} live={true} />
                        </TableCell>
                      );
                    }
                    return <TableCell key={colId}>{visit[col.key]}</TableCell>;
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

VisitTable.propTypes = {
  visits: PropTypes.object.isRequired
};

export default VisitTable;
