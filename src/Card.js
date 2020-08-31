import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <div className="ui celled list">
                <div className="item">
                    <div className="content">
                        <div className="header">
                            {this.props.exName}
                        </div>
                        <div>
                            Lbs: {this.props.weightNum}
                        </div>
                        <div>
                            Sets: {this.props.setNum}
                        </div>
                        <div>
                            Reps: {this.props.repNum}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;