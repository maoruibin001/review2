/**
 * Created by lenovo on 2017/9/6.
 */
import addTodoAction from '../actions/addTodo';
import {connect} from 'react-redux';
import AddTodoComponents from '../components/AddTodo';

const mapDispatchToProp = (dispatch, ownProps) => {

    return {
        onClick: (text) => {
            return dispatch(addTodoAction(text))
        }
    }
}
const AddTodo = connect(
    null,
    mapDispatchToProp
)(AddTodoComponents);


export default AddTodo;