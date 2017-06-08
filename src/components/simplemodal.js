import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'

require('../styles/modal.css')

//https://codepen.io/fabiobiondi/pen/adpzOK
export class SimpleModal extends Component {
  render() {
    const { show, bg  } = this.props;
    const styles = {
      modal: {
        display: (show) ? null : 'none',
        backgroundColor: bg || 'rgba(255, 255, 255, 0.8)'
      }
    };

    return (
      <span className="modal-wrapper" style={styles.modal}>
        <Icon className='modal-item glyphicon' onClick={this.props.onClose} name='close' />
        <span className="modal-item">
        	{ this.props.children }
				</span>
      </span>
    )
  }
}
