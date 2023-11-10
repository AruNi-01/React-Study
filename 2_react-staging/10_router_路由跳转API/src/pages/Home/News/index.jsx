import React, {Component} from 'react';

class News extends Component {
    render() {
        // setTimeout(() => {
        //     this.props.history.push('/home/message');
        // }, 3000);

        return (
            <div>
                <ul>
                    <li>news001</li>
                    <li>news002</li>
                    <li>news003</li>
                </ul>
            </div>
        );
    }
}

export default News;