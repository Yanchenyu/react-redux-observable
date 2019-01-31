/**
 * @description 首页
 * @author yan_cy@Ctrip.com
 */

import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from './redux/actions';

const loading = {
    width: '50px',
    height: '50px',
    background: '#999'
}

class App extends Component {

    render() {

        const {number, isLoading, actions} = this.props;
        
        return (
            <div>
                <p>{number}</p>
                <button onClick={actions.addNumbers}>click me add 1</button>
                <button onClick={actions.minusNumbers}>click me minus 1</button>
                <button onClick={() => actions.addNumbersDelay(true)}>click me add 1 delay 1s</button>
                <p style={{...loading, 'display': isLoading ? 'block' : 'none'}}>loading...</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        number: state.number,
        isLoading: state.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
