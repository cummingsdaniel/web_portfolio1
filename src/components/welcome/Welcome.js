import React from 'react';

class Alert extends React.PureComponent {
    dismiss = (e) => {
        e.preventDefault();

        this.props.onDissmiss();
    }

    render() {
        const { message } = this.props;

        if (!message) return null;

        return(
            
        )
    }
}