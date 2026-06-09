import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

class TextModal extends Component {
    constructor( context ) {
        super( context );

        this.state = {
            showModal: false
        };

        this.open  = this.open.bind( this );
        this.close = this.close.bind( this );
    }

    open() {
        this.setState( { showModal: true } );
    }

    close() {
        this.setState( { showModal: false } );
    }

    doSomethingBeforeOpen() {
        this.open();
    }

    render() {
        return (
            <div className="menu-toggle align-self-center no-space">
                <span onClick={ this.doSomethingBeforeOpen.bind( this ) } type="button" data-toggle="modal" data-target="#menu-modal">
                    <p>{this.props.title}</p>
                </span>

                <Modal className={"modal modal-adv-1 modal-body-pr fade has-background-color-" + this.props.background+ " has-font-color-" + this.props.font_color}
                       id="menu-modal"
                       show={ this.state.showModal }
                       onHide={ this.close }
                       backdrop={ true }
                       aria-labelledby="menu-modal"
                       aria-hidden="true"
                       dialogClassName="modal-full wrapper h-100"
                       ref={ node => this.chart = node }>
                    <Modal.Header>
                        <button onClick={ this.close } type="button" className="close btn btn-link border-0 transform-scale-h" data-dismiss="modal" aria-label="Close">
                            <span className="align-right">Close</span>
                        </button>
                    </Modal.Header>

                    <Modal.Body>
                        <div className="background-typo spacer p-top-lg">
                            <h1 className="stroke-black opacity-50">{this.props.en_name} | {this.props.ko_name}</h1>
                            <h1 className="exlarge">{this.props.en_name} | {this.props.ko_name}</h1>
                            <h1 className="stroke-black">{this.props.en_name} | {this.props.ko_name}</h1>
                            <h1 className="stroke-black opacity-30">{this.props.en_name} | {this.props.ko_name}</h1>
                            <h1 className="stroke-black opacity-10">{this.props.en_name} | {this.props.ko_name}</h1>
                            <h1 className="stroke-black opacity-10">{this.props.en_name} | {this.props.ko_name}</h1>
                        </div>
                        <div className="foreground-contents">
                            {this.props.plylist.map((item) => {
                                return (
                                    <>
                                        <div>
                                            <a href={item.youtube}>
                                                <h3 className="margin-bottom 0">{item.title}</h3>
                                                <p>{item.artist}</p>
                                            </a>
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default TextModal;
