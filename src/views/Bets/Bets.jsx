import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withNamespaces } from 'react-i18next';
import { firebaseConnect } from 'react-redux-firebase'

import SimpleLineChart from '../../components/SimpleLineChart/SimpleLineChart'
import Utils from '../../Utils';

const Bets = ({ bets, t }) => {
    return (
        <div>
            <SimpleLineChart bets={bets} />
            <p>{t("desc")}</p>
        </div>
    )
}

export default compose(
    firebaseConnect([
        'bets',
    ]),
    connect((state) => ({
        bets: Utils.getObjectValues(state.firebase.data.bets),
    })),
    withNamespaces('bets'),
)(Bets)
