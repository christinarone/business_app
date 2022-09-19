import { connect } from 'react-redux';
import AddBusiness from '../components/AddBusiness';
import { addBusiness, fetchLocation } from '../redux/actions';

const mapStateToProps = (state) => {
	return {
		listings: state.listings,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addBusiness: (listing) => dispatch(addBusiness(listing)),
		// fetchLocation: (maplisting) => dispatch(fetchLocation(maplisting)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBusiness);