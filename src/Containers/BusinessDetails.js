import { connect } from 'react-redux';
import BusinessDetails from '../Components/BusinessDetails';

const mapStateToProps = (state) => {
	return {
		listings: state.listings,
	};
};

export default connect(mapStateToProps)(BusinessDetails);