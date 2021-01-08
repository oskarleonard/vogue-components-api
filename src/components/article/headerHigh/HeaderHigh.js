import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function HeaderHigh({className, headerHigh}) {
    return (
        <div className={classNames('test')}>
            <h3>{headerHigh?.title}</h3>
        </div>
    );
}

HeaderHigh.propTypes = {
    className: PropTypes.string,
    headerHigh: PropTypes.shape({
        to: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    })
};

export default HeaderHigh;