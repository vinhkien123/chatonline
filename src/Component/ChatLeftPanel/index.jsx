import React from 'react';
import PropTypes from 'prop-types';

ChatLeftPanel.propTypes = {

};

function ChatLeftPanel(props) {
    return (
        <div id="side" className="wchat-list wchat-one chat-left-aside left">
            <div className="open-panel"><i className="ti-angle-right" /></div>
            <div className="chat-left-inner">
                <div id="my-profile" style={{ display: 'none' }}>
                </div>
                <div id="contact-list">
                    <header className="wchat-header wchat-chat-header top">
                        <div className="chat-avatar">
                            <div className="avatar icon-user-default" style={{ height: 40, width: 40 }}>
                                <div className="avatar-body userimage"><img src="storage/user_image/Bylancer.jpg" className="avatar-image is-loaded" width="100%" /></div>
                            </div>
                        </div>
                        <div className="chat-body">
                            <div className="chat-main"><h2 className="chat-title" dir="auto"><span className="wchatellips personName">Bylancer</span></h2></div>
                        </div>
                        {/*-Menu 3 cham*/}
                        <div className="wchat-chat-controls">
                            <div className="menu menu-horizontal">
                                <div className="menu-item active dropdown pull-right">
                                    <button className="icon dropdown-toggle" data-toggle="dropdown" href="#"><span className="font-19"><i className="icon icon-options-vertical" /></span></button>
                                    <ul className="dropdown-menu dropdown-user animated flipInY">
                                        <li><a href="#"><i className="ti-user" /> My Profile</a></li>
                                        <li><a href="#"><i className="ti-wallet" /> Edit Profile</a></li>
                                        <li role="separator" className="divider" />
                                        <li><a href="#"><i className="fa fa-power-off" /> Logout</a></li>
                                    </ul>
                                    {/* /.dropdown-user */}
                                </div>
                                <div className="menu-item right-side-toggle"><button className="icon ti-settings font-20" title="Attach" /><span /></div>
                            </div>
                        </div>
                    </header>
                    <div className="form-material">
                        <input className="form-control p-lr-20 live-search-box search_bg" id="searchbox" type="text" placeholder="Search By Username or Email" />
                    </div>
                    {/*-Luot chat*/}
                    <div className="contact-drawer">
                        <ul className="chatonline drawer-body contact-list" id="display" data-list-scroll-container="true" style={{ display: 'block' }}>
                            <li className="person chatboxhead active" id="chatbox1_Deven" data-chat="person_1" href="javascript:void(0)" onclick="javascript:chatWith('Deven','1','deven.jpg','Online')">
                                <a href="javascript:void(0)">
                                    <span className="userimage profile-picture min-profile-picture"><img src="storage/user_image/Deven.jpg" alt="Deven" className="avatar-image is-loaded bg-theme" width="100%" /></span>
                                    <span>
                                        <span className="bname personName">Deven Patel</span>
                                        <span className="personStatus"><span className="time Online"><i className="fa fa-circle" aria-hidden="true" /></span></span>
                                        <span className="count"><span className="icon-meta unread-count">2</span></span><br />
                                        <small className="preview"><span className="Online">Online</span></small>
                                    </span>
                                </a>
                            </li>
                            <li className="person chatboxhead" id="chatbox1_John" data-chat="person_2" href="javascript:void(0)" onclick="javascript:chatWith('John','2','avatar_default.png','last seen 23 days ago')">
                                <a href="javascript:void(0)">
                                    <span className="userimage profile-picture min-profile-picture"><img src="storage/user_image/avatar_default.png" alt="John" className="avatar-image is-loaded bg-theme" width="100%" /></span>
                                    <span>
                                        <span className="bname personName">John Cena</span>
                                        <span className="personStatus"><span className="time Offline"><i className="fa fa-circle" aria-hidden="true" /></span></span>
                                        <span className="count" /><br />
                                        <small className="preview"><span className="Offline">last seen 23 days ago</span></small>
                                    </span>
                                </a>
                            </li>
                            <li className="person chatboxhead active" id="chatbox1_Kristina" data-chat="person_3" href="javascript:void(0)" onclick="javascript:chatWith('Kristina','3','Kristina.jpg','Offline')">
                                <a href="javascript:void(0)">
                                    <span className="userimage profile-picture min-profile-picture"><img src="storage/user_image/Kristina.jpg" alt="Deven" className="avatar-image is-loaded bg-theme" width="100%" /></span>
                                    <span>
                                        <span className="bname personName">Kristina</span>
                                        <span className="personStatus"><span className="time Offline"><i className="fa fa-circle" aria-hidden="true" /></span></span>
                                        <span className="count" /><br />
                                        <small className="preview"><span className="Offline">Offline</span></small>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatLeftPanel;