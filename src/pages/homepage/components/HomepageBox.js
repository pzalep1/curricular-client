import React from 'react';
import ReactDOM from 'react-dom';
import '../Homepage.css';

class HomepageBox extends React.Component {
    render() {
        return <div id = {this.props.id} className = "homebox">
            {this.props.boxcontent}
        </div>
    }
}

export default HomepageBox;