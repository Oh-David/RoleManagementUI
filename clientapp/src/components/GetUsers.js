import React from 'react';
import Axios from 'axios';
const API_URL = 'http://localhost:60595/api/activedirectory/users';

export default class GetUsers extends React.Component {
    state = {
        users: []
     }

     componentDidMount() {
        var username = 'David.Oh';
        // const url = `http://localhost:60595/api/activedirectory/users`;
        const url = `http://localhost:60595/api/activedirectory/user/David.Oh`;
  
    Axios
        .get(url)
        .then(response => response.data)
            .then((data) => {
            this.setState({ users: data })
            console.log(this.state.users)
            })
        .catch(err => {
            console.log(err);
            return null;
        })
    }
    render() {
        return (
            <div>
                {this.state.users.length === 0 ? (
                    <div>Data Loading...</div>
                ) : (
                    this.state.users.map((e, i) => {
                        return <div key={i}>{e.firstName}</div>;
                        })
                )}
            </div>
            )
    }
}