import React from 'react';
import PropTypes from 'prop-types';

ChatBoxRight.propTypes = {

};

function ChatBoxRight(props) {
    return (
        <div className="wchat-body wchat-chat-tile-container" style={{ backgroundSize: 'cover' }}>
            <div>
                <span>
                    <div className="scroll-down" style={{ transform: 'scaleX(1) scaleY(1)', opacity: 1, visibility: 'hidden' }}>
                        <span className="ti-angle-down" />
                    </div>
                </span>
                <div className="wchat-chat-msgs wchat-chat-body lastTabIndex" tabIndex={0}>
                    <div className="wchat-chat-empty" />
                    <div className="message-list">
                        <div className="chat-list" id="resultchat">
                            {/*Here content comes dynamically*/}
                            <div id="chatbox_Deven" className="chat chatboxcontent active-chat" data-chat="person_1" client="Deven">
                                <div className="col-xs-12 p-b-10">
                                    <div className="chat-image  profile-picture max-profile-picture">
                                        <img alt="Deven" src="storage/user_image/Deven.jpg" className="bg-theme" />
                                    </div>
                                    <div className="chat-body">
                                        <div className="chat-text">
                                            <h4>Deven Patel</h4>
                                            <p><a url="storage/user_files/image-chat.jpg" onclick="trigq(this)"><img src="storage/user_files/image-chat.jpg" className="userfiles" /></a></p>
                                            <b>23 days ago</b>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 p-b-10 odd">
                                    <div className="chat-image  profile-picture max-profile-picture">
                                        <img alt="Bylancer" src="storage/user_image/Bylancer.jpg" />
                                    </div>
                                    <div className="chat-body">
                                        <div className="chat-text">
                                            <h4>Bylancer</h4>
                                            <p>Hi</p>
                                            <b>Just Now</b>
                                            <span className="msg-status msg-mega"><i className="fa fa-check" /></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="chatbox_John" className="chat chatboxcontent active-chat" data-chat="person_2" client="John">
                                <div className="col-xs-12 p-b-10">
                                    <div className="chat-image  profile-picture max-profile-picture">
                                        <img alt="John" src="storage/user_image/avatar_default.png" className="bg-theme" />
                                    </div>
                                    <div className="chat-body">
                                        <div className="chat-text">
                                            <h4>John Cena</h4>
                                            <p><video className="userfiles" controls><source src="storage/user_files/video.mp4" type="video/mp4" />Your browser does not support HTML5 video.</video></p>
                                            <b>1 Hours ago</b>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 p-b-10 odd">
                                    <div className="chat-image  profile-picture max-profile-picture">
                                        <img alt="Bylancer" src="storage/user_image/Bylancer.jpg" />
                                    </div>
                                    <div className="chat-body">
                                        <div className="chat-text">
                                            <h4>Bylancer</h4>
                                            <p>Hi, Its really nice, love this video. <br />Please send some comedy video.</p>
                                            <b>Just Now</b>
                                            <span className="msg-status msg-mega"><i className="fa fa-check" /></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 p-b-10">
                                    <div className="chat-image  profile-picture max-profile-picture">
                                        <img alt="John" src="storage/user_image/avatar_default.png" className="bg-theme" />
                                    </div>
                                    <div className="chat-body">
                                        <div className="chat-text">
                                            <h4>John Cena</h4>
                                            <p><a href="storage/user_files/file.zip" className="download-link" download /></p>
                                            <b>1 Hours ago</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="chatbox_Kristina" className="chat chatboxcontent active-chat" data-chat="person_3" client="Kristina">
                                <div className="col-xs-12 p-b-10">
                                    <div className="chat-image  profile-picture max-profile-picture">
                                        <img alt="Kristina" src="storage/user_image/Kristina.jpg" className="bg-theme" />
                                    </div>
                                    <div className="chat-body">
                                        <div className="chat-text">
                                            <h4>Kristina</h4>
                                            <p><video className="userfiles" controls><source src="storage/user_files/video.mp4" type="video/mp4" />Your browser does not support HTML5 video.</video></p>
                                            <b>1 Hours ago</b>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 p-b-10 odd">
                                    <div className="chat-image  profile-picture max-profile-picture">
                                        <img alt="Bylancer" src="storage/user_image/Bylancer.jpg" />
                                    </div>
                                    <div className="chat-body">
                                        <div className="chat-text">
                                            <h4>Bylancer</h4>
                                            <p>Nice.</p>
                                            <b>Just Now</b>
                                            <span className="msg-status msg-mega"><i className="fa fa-check" /></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 p-b-10">
                                    <div className="chat-image  profile-picture max-profile-picture">
                                        <img alt="Kristina" src="storage/user_image/Kristina.jpg" className="bg-theme" />
                                    </div>
                                    <div className="chat-body">
                                        <div className="chat-text">
                                            <h4>Kristina</h4>
                                            <p>Thank you</p>
                                            <b>1 Hours ago</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatBoxRight;