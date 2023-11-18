import React, {useState} from "react";

// class AddUserInfor extends React.Component {
//     state = {
//         name: 'chien',
//         address: 'hoi dan IT',
//         age: 26
//     };
//
//     handleOnchangeInput = (event) => {
//         console.log(event.target.value);
//         this.setState({
//             name : event.target.value
//         })
//     }
//
//     handleOnchangeAge = (event) => {
//         console.log(event.target.value);
//         this.setState({
//             age : event.target.value
//         })
//     }
//
//     handleOnsubmit = (event) => {
//         event.preventDefault();
//         alert('meee')
//         this.props.handleAddUser({
//             id: Math.floor((Math.random() * 1000) + 1) + '_random',
//             name: this.state.name,
//             age: this.state.age
//         });
//     }
//     render() {
//         return(
//             <div>
//                 My name is {this.state.name} i'm {this.state.age} year old
//                 <form onSubmit={(event) => this.handleOnsubmit(event)}>
//                     <label>your name:</label>
//                     <input
//                         type="text"
//                         value={this.state.name}
//                         onChange={(event) => this.handleOnchangeInput(event)}/>
//
//                     <label>your age:</label>
//                     <input
//                         type="text"
//                         value={this.state.age}
//                         onChange={(event) => this.handleOnchangeAge(event)}/>
//                     <button>Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }

const AddUserInfor = (props) => {

    //     state = {
    //     name: 'chien',
    //     address: 'hoi dan IT',
    //     age: 26
    // };

        const [name, setName] = useState('chien');
        const [address, setAddress] = useState('hoi dan IT');
        const [age, setAge] = useState(26);

    const handleOnchangeInput = (event) => {
        // console.log(event.target.value);
        // this.setState({
        //     name : event.target.value
        // })
        setName(event.target.value);
    }

    const handleOnchangeAge = (event) => {
        // console.log(event.target.value);
        // this.setState({
        //     age : event.target.value
        // })
        setAge(event.target.value);
    }

    const handleOnsubmit = (event) => {
        event.preventDefault();
        alert('meee')
        props.handleAddUser({
            id: Math.floor((Math.random() * 1000) + 1) + '_random',
            name: name,
            age: age
        });
    }
    return(
                    <div>
                My name is {name} i'm {age} year old
                <form onSubmit={(event) => handleOnsubmit(event)}>
                    <label>your name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(event) => handleOnchangeInput(event)}/>

                    <label>your age:</label>
                    <input
                        type="text"
                        value={age}
                        onChange={(event) => handleOnchangeAge(event)}/>
                    <button>Submit</button>
                </form>
            </div>
    )
}

export default AddUserInfor;