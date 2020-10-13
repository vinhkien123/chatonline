import React from 'react';
import PropTypes from 'prop-types';

HeaderTopRight.propTypes = {

};

function HeaderTopRight(props) {
    return (
        <header className="wchat-header wchat-chat-header top" data-user>
            <button className="icon m-r-5 hidden-sm hidden-md hidden-lg open-panel" href="#"><span className="font-19"><i className="icon ti-arrow-left" /></span></button>
            <div className="chat-avatar" id="launchProfile">
                <div className="avatar icon-user-default" style={{ height: 40, width: 40 }}>
                    <div className="avatar-body userimage profile-picture">&nbsp;</div>
                </div>
            </div>
            <div className="chat-body">
                <div className="chat-main"><h2 className="chat-title" dir="auto"><span className="wchatellips personName">&nbsp;</span></h2></div>
                <div className="chat-status wchatellips" id="typing_on">
                    {/*last seen today at 8:52 PM*/}
                </div>
            </div>
            <div className="wchat-chat-controls">
                <div className="menu menu-horizontal">
                    <div className="menu-item active dropdown pull-right">
                        <button id="MobileChromeplaysound" className="hidden" />
                        <button className="icon dropdown-toggle font-19" data-toggle="dropdown" href="#" id="mute-sound"><i className="icon icon-volume-2" /></button>
                    </div>
                    <div className="mega-dropdown  pull-right"> <button className="dropdown-toggle waves-effect waves-light" data-toggle="dropdown" href="#" aria-expanded="false"><span className="font-19"><i className="icon fa fa-paperclip" /></span></button>
                        <ul className="dropdown-menu mega-dropdown-menu animated bounceInDown" style={{ width: 100, right: '-13px', boxShadow: '0 0 0 rgba(0, 0, 0, 0.05) !important', background: 'none' }}>
                            <li className="col-sm-12 demo-box">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="white-box text-center bg-purple uploadFile" id="uploadFile"><a href="#" className="text-white" data-toggle="tooltip" title data-original-title="Photos"><i className="icon ti-gallery font-19" /></a></div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="white-box text-center bg-success uploadFile"><a href="#" className="text-white" data-toggle="tooltip" title data-original-title="Videos"><i className="icon icon-camrecorder font-19" /></a></div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="white-box text-center bg-info uploadFile"><a href="#" className="text-white" data-toggle="tooltip" title data-original-title="Document"><i className="icon icon-doc font-19" /></a></div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="menu-item active dropdown pull-right">
                        <button className="icon dropdown-toggle" data-toggle="dropdown" href="#"><span className="font-19"><i className="icon icon-options-vertical" /></span></button>
                        <ul className="dropdown-menu dropdown-user animated flipInY">
                            <li><a href="javascript:void(0)" onclick="javascript:ShowProfile();"><i className="ti-user" /> User Profile</a></li>
                            <li><a href="javascript:void(0)"><i className="ti-wallet" /> Email This Chat</a></li>
                            <li><a href="javascript:void(0)"><i className="icon-doc" /> Save Chat</a></li>
                        </ul>
                        {/* /.dropdown-user */}
                    </div>
                    <div className="menu-item right-side-toggle hidden-xs hidden"><button className="icon ti-settings font-20" title="Attach" /><span /></div>
                </div>
            </div>
        </header>
    );
}

export default HeaderTopRight;