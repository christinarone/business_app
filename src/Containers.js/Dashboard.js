//create a container for specific component to link up to redux

import {connect} from 'react-redux';
import Dashboard from '../components/Dashboard';
import { fetchList, removeBusiness } from '../redux/actions';

const mapStateToProps = ({businesses}) => {
    return {
        businesses
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchList: () => dispatch(fetchList()),
        removeBusiness: (index) => dispatch(removeBusiness(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)