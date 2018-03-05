import React, {Component} from 'react'
import  {connect} from 'react-redux'
import {getStep,getStepAsyn} from './../redux/action'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginStatus: 0
        }
    }

    componentDidMount() {
        console.log(this.props)
        console.log('start');
    }
    componentWillReceiveProps(nextProps){
        console.log(1)
        console.log(this.props.loginStatus);
    }
    componentWillUpdate(){
        console.log(2)
        console.log(this.props.loginStatus);
    }
    componentDidUpdate(){

        console.log(this.props.loginStatus);
        console.log(3)
    }

    handerClick1() {
        console.log(this.props);
        console.log(this.props.loginStatus);
        fetch('/api').then((res)=>{
            console.log(res);
        })
    }

    handerClick2() {
        fetch('/mock').then((res)=>{
            console.log(res);
        })
        this.props.changeStatus();
        console.log(this.props.loginStatus);
    }
    toReg(){
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
        return (
            <div>
                <div onClick={this.handerClick1.bind(this)} style={style}>click1</div>
                <div onClick={this.handerClick2.bind(this)} style={style2}>click2</div>
                <button onClick={this.toReg.bind(this)}>go register</button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        loginStatus: state.status
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        changeStatus: ()=>{return getStep(dispatch,{status:100})}
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Login)