import React, {useState} from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

// class MyComponent extends React.Component {
//
//     state = {
//         listUsers: [
//             {id: 1, name: "ok1", age: 10},
//             {id: 2, name: "ok2", age: 20},
//             {id: 3, name: "ok3", age: 30},
//         ]
//     }
//
//     handleAddNewUser = (obj) => {
//         console.log(obj)
//         this.setState({
//             listUsers: [obj, ...this.state.listUsers]
//             // listUsers: [...this.state.listUsers, obj]
//         })
//     }
//
//     handleDeleteUser = (userId) => {
//         let listUserClone = [...this.state.listUsers];
//         listUserClone = listUserClone.filter(item => item.id !== userId);
//         this.setState({
//             listUsers: listUserClone
//         })
//     }
//
//     render() {
//         return(
//             <>
//                 <div className='a'>
//                     <AddUserInfor
//                         handleAddUser={this.handleAddNewUser}
//                     />
//                     <br/><br/>
//                     <DisplayInfor
//                         listUsers={this.state.listUsers}
//                         users={this.state.listUsers}
//                         handleDeleteUser={this.handleDeleteUser}
//                     />
//                 </div>
//
//                 <div className='b'>
//
//                 </div>
//             </>
//         );
//
//     }
// }

const MyComponent = (props) => {
    const [listUsers, setListUsers] = useState(
        [
            {id: 1, name: "ok1", age: 10},
            {id: 2, name: "ok2", age: 20},
            {id: 3, name: "ok3", age: 30},
        ]
    )

    const handleAddNewUser = (obj) => {
        setListUsers([obj, ...listUsers]);
        // this.setState({
        //     listUsers: [obj, ...this.state.listUsers]
        //     // listUsers: [...this.state.listUsers, obj]
        // })
    }

    const handleDeleteUser = (userId) => {

        let listUserClone = listUsers;
        listUserClone = listUserClone.filter(item => item.id !== userId);
        setListUsers(listUserClone);
        // this.setState({
        //     listUsers: listUserClone
        // })
    }
    return(
                    <>
                <div className='a'>
                    <AddUserInfor
                        handleAddUser={handleAddNewUser}
                    />
                    <br/><br/>
                    <DisplayInfor
                        listUsers={listUsers}
                        users={listUsers}
                        handleDeleteUser={handleDeleteUser}
                    />
                </div>

                <div className='b'>

                </div>
            </>
    )
}

export default MyComponent;