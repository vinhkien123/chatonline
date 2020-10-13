import React from 'react';
import PropTypes from 'prop-types';
import ChatBox from '../../Component/ChatBox';
import ChatLeftPanel from '../../Component/ChatLeftPanel';
import HeaderTopRight from '../../Component/HeaderTopRight';
import ChatBoxRight from '../../Component/ChatBoxRight';
import Icone from '../../Component/Icone';
import Theme from '../../Component/Theme';
import LightBox from '../../Component/LightBox';

Home.propTypes = {

};

function Home(props) {
    return (
        <>
            <div id="wchat">
                <div className="wchat-wrapper wchat-wrapper-web wchat-wrapper-main">
                    <div tabIndex={-1} className="wchat two">
                        {/*Khung chat*/}
                        <ChatBox />
                        {/* .chat-left-panel */}
                        <ChatLeftPanel />
                        {/* .chat-left-panel */}
                        {/* .chat-right-panel */}
                        <div tabIndex={-1} id="main right" className="pane wchat-chat wchat-two chat-right-aside right" style={{ visibility: 'hidden' }}>
                            <div className="wchat-chat-tile" />
                            {/* .Header top right */}
                            <HeaderTopRight />
                            {/*-Khung chat*/}
                            <ChatBoxRight />
                            <div className="wchat-filler" style={{ height: 0 }} />
                            <footer tabIndex={-1} className="wchat-footer wchat-chat-footer">
                                {/*--CHAT BOX ITEM*/}
                                <div id="chatFrom">
                                </div>
                                {/*-ICONE*/}
                                <Icone />
                                <span className="mentions-positioning-container" />
                            </footer>
                            <span />
                        </div>
                        {/* .chat-right-panel */}
                    </div>
                </div>
            </div>
            <Theme />
            <LightBox />
        </>

    );
}

export default Home;