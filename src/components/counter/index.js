import React, {Component} from 'react';
import {connect} from 'react-redux';

class Counter extends Component {
    render() {
        const {name , value,count} = this.props;
        return (
        <div>
            <div>
                i'm counter {name}
            </div>
            <div>
                <button onClick={()=>count(1)}>+</button>
                <input value={value}/>
                <button onClick={()=>count(-1)}>+</button>
            </div>
        </div>
        );

    }
}

function mapStateToProps(state) {
    return {
        name: state.Counter.name,
        value: state.Counter.value,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        count: (quantity) => {
            dispatch({type: "COUNT", payload: {quantity}})
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
