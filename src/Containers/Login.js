import { connect } from 'react-redux';
import Login from '../Components/Login';
import { updateUser } from '../Redux/actions';

const mapStateToProps = (state) => {
	return {
		user: state.user,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateUser: (username) => dispatch(updateUser(username)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);