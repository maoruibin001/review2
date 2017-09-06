/**
 * Created by lenovo on 2017/9/6.
 */
import Link from '../components/Link';
import {connect} from 'react-redux';
import visibleTodo from '../actions/visibleTodo';


const mapStateToProps = (state, ownProps) => {
    return {
        active: state.visibleTodoFilter === ownProps.filter
    }
};

const mapDispatchToProps = (dispatch, ownProps ) => {
    return {
        onClick: () => {
            dispatch(visibleTodo(ownProps.filter))
        }
    }
};

const FooterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

export default FooterLink;