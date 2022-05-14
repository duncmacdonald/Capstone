import axios from "axios";
import React from "react";
import { useParams, Redirect } from "react-router-dom";


const URL = "http://localhost:3333/"

export default class Returns extends React.Component{
    state = {
        redirect: false
    }

    componentDidMount(){
        axios.put(`${URL}returns/${this.props.match.params.id}`).then(result => console.log(result));
    }

    render(){
        return(
            <div>
                {(this.state.redirect) ? (<Redirect to="" />) : (<></>)}
            </div>
        )
    }
}