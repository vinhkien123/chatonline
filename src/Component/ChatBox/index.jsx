import React from 'react';
import PropTypes from 'prop-types';

ChatBox.propTypes = {

};

function ChatBox(props) {
    return (
        <div className="drawer-manager">
            {/* Side Left-*/}
            <span className="pane wchat-one" />
            {/*Welcome chao*/}
            <span className="pane wchat-two">
                <div id="get-error">
                </div>
                <div id="showErrorModal" data-toggle="modal" data-target=".bs-example-modal-sm" />
                <div className="pane pane-intro" id="pane-intro" style={{ visibility: 'visible' }}>
                    <div className="intro-body">
                        <div className="intro-image" style={{ opacity: 1, transform: 'scale(1)' }} />
                        <div className="intro-text-container" style={{ opacity: 1, transform: 'translateY(0px)' }}>
                            <h1 className="intro-title">Welcome to wchat Bylancer1</h1>
                            <div className="intro-text">No Conversation sync. Please search users and start chat.
                       </div>
                        </div>
                    </div>
                </div>
                <div id="uploader" style={{ display: 'none' }}>
                    <p>Your browser doesn't have Flash, Silverlight or HTML5 support.</p>
                </div>
            </span>
            {/*???*/}
            <span className="pane wchat-three" style={{ transition: 'all 0.3s ease' }}>
                <span className="flow-drawer-container" style={{ transform: 'translateX(0px)', border: '1px solid rgba(0, 0, 0, .08)', display: 'block' }}>
                    <div className="drawer drawer-info">
                        <header className="wchat-header">
                            <div className="header-close">
                                <button><span className="icon icon-x  ti-close" /></button>
                            </div>
                            <div className="header-body">
                                <div className="header-main">
                                    <div className="header-title">Profile info</div>
                                </div>
                            </div>
                        </header>
                        <div className="drawer-body" id="userProfile" data-list-scroll-container="true">
                            {/*Here Profile comes dynamically*/}
                        </div>
                    </div>
                </span>
            </span>
        </div>
    );
}

export default ChatBox;