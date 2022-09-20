import { connect } from 'react-redux';
import Listings from '../Components/Listings';
import { deleteListing } from '../Redux/actions';

const mapStateToProps = (state) => {
	return {
		user: state.user,
		listings: state.listings,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		deleteListing: (index) => dispatch(deleteListing(index)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Listings);