import { connect } from 'react-redux'
import Home from '../components/Home'

const mapStateToProps = (state) => (
{
    user: state.user,
    listings: state.listings
}
)
//home
export default connect(mapStateToProps)(Home)