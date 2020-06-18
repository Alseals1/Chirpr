import React, { Component } from "react";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newUser: "",
            newMessage: "",

            chirps: [
                {
                    Name: "Alandis",
                    Message: "I'm The King",
                },
                {
                    Name: "Aria",
                    Message: "I Love Dad",
                },
                {
                    Name: "Dave",
                    Message: "Ummmmmm Yea",
                },
            ],
        };
        this.handleNewUser = this.handleNewUser.bind(this)
        this.handleNewMessage = this.handleNewMessage.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleNewUser(e) {
        this.setState({ newUser: e.target.value })
    }
    handleNewMessage(e) {
        this.setState({newMessage: e.target.value})
    }

    handleSubmit(e) {
        let newChirp = {
            name: this.state.newUser,
            message: this.state.newMessage
        } 
        this.setState({chirps: [...this.state.chirps, newChirp]})
    }

    render() {
        return (
            <div className="container">
                <h1>Chirp</h1>
                <div class="form-group">
                    <input
                        type="name"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="What Your Name" onChange={this.handleNewUser}
                    />
                </div>

                <div class="form-group">
                    <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Say Something" onChange={this.handleNewMessage} 
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-danger" onClick = {this.handleSubmit}>Submit</button>
                {this.state.chirps.map((chirp) => {
                    return (
                        <>
                            <h2>{chirp.Name}</h2>
                            <p>{chirp.Message}</p>
                        </>
                    );
                })}
            </div>
        );
    }
}

export default App;
