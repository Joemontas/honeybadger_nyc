import { connect } from 'react-redux'
import { INCREMENT, DECREMENT } from '../actions'
import Counter from './Counter'

const mapStateToProps = (state, ownProps) => {
    return {
        value: state.value
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onIncrement: () => {
            dispatch({ type: INCREMENT })
        },
        onDecrement: () => {
            dispatch({ type: DECREMENT})
        }
    }
}

const CounterApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)