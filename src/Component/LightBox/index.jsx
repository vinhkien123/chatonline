import React from 'react';
import PropTypes from 'prop-types';

LightBox.propTypes = {

};

function LightBox(props) {
    return (
        <div id="lightbox" style={{ display: 'none' }}>
            <p>
                <img src="plugins/images/close-icon-white.png" width="30px" style={{ cursor: 'pointer' }} />
            </p>
            <div id="content">
                <img src="#" />
            </div>
        </div>


    );
}

export default LightBox;