import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withNamespaces } from 'react-i18next';
import { firebaseConnect } from 'react-redux-firebase'
import moment from 'moment';

// React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

import Utils from '../../Utils';

const Stats = ({ stats, t }) => {

    // Compute lbs/notch
    stats.forEach(s => {
        s['lbs_notch'] = Utils.roundNumber(s.nb_barrels * 420 / s.nb_notches);
    });

    const columns = [
        {
            Header: t("year"),
            accessor: "year",
            Footer: <strong>{t("average") + ":"}</strong>
        },
        {
            Header: t("start_date"),
            id: "start_date",
            accessor: d => moment(d.start_date).format(),
            Footer: <strong>{Utils.getAverageDate(stats.map(s => s.start_date))}</strong>
        },
        {
            Header: t("end_date"),
            id: "end_date",
            accessor: d => moment(d.end_date).format(),
            Footer: <strong>{Utils.getAverageDate(stats.map(s => s.end_date))}</strong>
        },
        {
            Header: t("nb_boiled_days"),
            accessor: "nb_boiled_days",
            Footer: <strong>{Utils.average(stats.map(s => s.nb_boiled_days))}</strong>

        },
        {
            Header: t("nb_notches"),
            accessor: "nb_notches",
            Footer: <strong>{Utils.average(stats.map(s => s.nb_notches))}</strong>
        },
        {
            Header: t("nb_barrels"),
            accessor: "nb_barrels",
            Footer: <strong>{Utils.average(stats.map(s => s.nb_barrels))}</strong>
        },
        {
            Header: t("lbs_notch"),
            accessor: "lbs_notch",
            Footer: <strong>{Utils.average(stats.map(s => s.lbs_notch))}</strong>
        },
    ];

    if (stats.length === 0) return null

    return (
        <div>
            <ReactTable
                className="-striped -highlight"
                data={stats}
                columns={columns}
                showPagination={false}
                resizable={false}
                defaultPageSize={stats.length} />
        </div >
    )
}

export default compose(
    firebaseConnect([
        'stats',
    ]),
    connect((state) => ({
        stats: Utils.getObjectValues(state.firebase.data.stats),
    })),
    withNamespaces('stats'),
)(Stats)