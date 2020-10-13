import React from 'react';
import PropTypes from 'prop-types';

Theme.propTypes = {

};

function Theme(props) {
    return (
        <div className="right-sidebar">
            <div className="slimscrollright">
                <div className="rpanel-title"> Theme Modify<span><i className="ti-close right-side-toggle" /></span> </div>
                <div className="r-panel-body">
                    <ul>
                        <li><b>Layout Options</b></li>
                    </ul>
                    <ul id="mainthemecolors" className="m-t-20">
                        <li><b>Theme (Light/Dark)</b></li>
                        <li><a href="javascript:void(0)" maintheme="style-light" className="light-theme working">1</a></li>
                        <li><a href="javascript:void(0)" maintheme="style-dark" className="dark-theme">2</a></li>
                    </ul>
                    <ul id="themecolors" className="m-t-20">
                        <li><b>With Color Effect</b></li>
                        <li><a href="javascript:void(0)" theme="default" className="default-theme">1</a></li>
                        <li><a href="javascript:void(0)" theme="green" className="green-theme">2</a></li>
                        <li><a href="javascript:void(0)" theme="gray" className="yellow-theme">3</a></li>
                        <li><a href="javascript:void(0)" theme="blue" className="blue-theme">4</a></li>
                        <li><a href="javascript:void(0)" theme="purple" className="purple-theme working">5</a></li>
                        <li><a href="javascript:void(0)" theme="megna" className="megna-theme">6</a></li>
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default Theme;