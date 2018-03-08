import React, {Component} from 'react'
import PropTypes from 'prop-types';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
    }
    render() {
        return (
            <div>
                IndexTest22333344443444
            </div>
        )
    }
}
Index.contextTypes = {
    router: PropTypes.object
};
export default Index