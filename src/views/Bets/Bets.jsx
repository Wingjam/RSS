import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firebaseConnect } from 'react-redux-firebase'

import SimpleLineChart from '../../components/SimpleLineChart/SimpleLineChart'
import Utils from '../../Utils';

const Bets = ({ bets, firebase }) => {
    return (
        <SimpleLineChart bets={bets} />
    )
}

export default compose(
    firebaseConnect([
        'bets',
    ]),
    connect((state) => ({
        bets: Utils.getObjectValues(state.firebase.data.bets),
    }))
)(Bets)
