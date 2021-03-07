import React from 'react';
import Counter from '../Counter';

class Pushups extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
    }

    render() {
        return (
            <div>
                <p>
                    <h2>Three sets of Push-Ups</h2>
                        <button onClick={() => {
                        const items =  this.state.items;
                        items.push(<Counter count={items.length} key={items.length} />);
                        this.setState({items: items});
                }}>Reps Counter</button>
                </p>                 
                <div>
                    {
                        this.state.items.map(element => {
                            return element
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Pushups;