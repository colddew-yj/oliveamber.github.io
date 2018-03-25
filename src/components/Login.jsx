import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getStep, setNum,asySend} from './../redux/action'
import {fetchPromise} from  'Common/common'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginStatus: 0
        }
    }

    componentDidMount() {
        console.log(0)
        console.log(this.props)
        console.log('start');
    }

    componentWillReceiveProps(nextProps) {
        console.log(1111)
        console.log(this.props);
    }

    componentWillUpdate() {
        console.log(2)
        console.log(this.props.loginStatus);
    }

    componentDidUpdate() {
        console.log(this.props.loginStatus);
        console.log(3)
    }


    handerClick1() {
        console.log(this.props);
        fetchPromise('/mock',{name1:'111',key1:'222'})
        // fetch('/mock').then((res) => {
        //     res.json().then((val)=>{
        //         console.log(val);
        //
        //     }).catch(function(err){
        //         console.log(err)
        //     });
        // })
    }

    handerClick2() {
        // fetch('/mock').then((res) => {
        //     res.json().then((val)=>{
        //         console.log(val);
        //         this.props.changeStatus({status:val.name});
        //     });
        //
        // }).catch(function(err){
        //     console.log(err)
        // })
        this.props.asySend('/mock',{name1:'111',key1:'222'});
        // this.props.changNum({num:111});

        console.log(this.props.loginStatus);
    }

    toReg() {
        this.props.history.push('/reg')
    }

    render() {
        let style = {
            background: 'red',
            height: '50px',
            width: '80px'
        }
        let style2 = {
            background: 'blue',
            height: '50px',
            width: '80px'
        }
        return (<div>
            <div onClick={this.handerClick1.bind(this)} style={style}>click1</div>
            <div onClick={this.handerClick2.bind(this)} style={style2}>click2</div>
            <button onClick={this.toReg.bind(this)}>go register</button>
        </div>)
    }
}
const mapStateToProps = (state) => {
    return {loginStatus: state.logincCom.status}
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        changeStatus: (data={}) => {
            return getStep(dispatch,data)
        },
        changNum: (data={}) => {
            return setNum(dispatch,data)
        }
    }

}
export default connect(mapStateToProps, {asySend})(Login)
