import { connect } from 'react-redux';
import AddBusiness from '../Components/AddBusiness';
import { addListing, fetchLocation } from '../Redux/actions';
// import { addBusiness, fetchLocation } from '../import { connect } from 'react-redux''

const mapStateToProps = (state) => {
	return {
		listings: state.listings,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addListing: (listing) => dispatch(addListing(listing)),
		// fetchLocation: (maplisting) => dispatch(fetchLocation(maplisting)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBusiness);