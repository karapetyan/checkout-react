import { connect } from 'react-redux';
import Steps from '../../components/Steps/Steps'

const mapStateToProps = state => ({
    step: state.step
})


export default connect(
    mapStateToProps,
    null
)(Steps)