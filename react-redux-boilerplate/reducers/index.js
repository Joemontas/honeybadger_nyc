// reducers/index.js
import { INCREMENT, DECREMENT, CLEAR, INCREMENT5 } from '../actions';

const initialState = 0;
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case CLEAR:
      state = 0
      return state;
    case INCREMENT5:
      return state + 5;
    default:
      return state;
  }
};







// export default (state = { counter: 0 }, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return Object.assign({}, state, {
//         counter: state.counter = action.value
//       });

//       return state - 1;
//     case CLEAR:
//       state = 0
//       return state;
//     case INCREMENT5:
//       return state + 5;
//     default:
//       return state;
//   }
// };

// this.state = {
//   blog: [
//     post = {
//       title: 'string',
//       description: 'string',
//       date: integer
//     }
//   ]
// }