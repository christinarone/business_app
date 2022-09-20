import { connect } from 'react-redux';
// import AddBusiness from '../components/AddBusiness';
// import { addBusiness, fetchLocation } from '../redux/actions';
// import { addBusiness, fetchLocation } from '../import { connect } from 'react-redux''

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