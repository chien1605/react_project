import React, {useEffect, useState} from "react";
import './DisplayInfor.scss'
import logo from '../../src/logo.svg'

// class DisplayInfor extends React.Component {
//
//     render() {
//         console.log("call me render")
//         const {listUsers} = this.props;
//         return(
//             <div className='display-infor-container'>
//                 {/*<img src={logo}/>*/}
//                 {listUsers.map((user) => {
//                     return(
//                         <div>
//                             {true &&
//                                 <div key={user.id} className = {+user.age > 11 ? "green" : "red"}>
//                                     <div>my name is {user.name}</div>
//                                     <div>I'm {user.age} year old</div>
//                                     <div>
//                                         <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                                     </div>
//                                     <hr/>
//                                 </div>
//                             }
//
//                         </div>
//                     )
//                 })}
//
//             </div>
//         )
//     }
// }

const DisplayInfor = (props) => {
    const {listUsers} = props;
    const [isShowHideListUser, setShowHideListUser] = useState(true);

    const showHideListUser = () => {
        setShowHideListUser(!isShowHideListUser);
    }

    console.log('call me sender');
    useEffect(() => {
        if (listUsers.length === 0) {
            alert('het user roi nha')
        }

    }, [listUsers])

        return(
            <div className='display-infor-container'>
                <div>
                    <span onClick={() => showHideListUser()}>
                        {isShowHideListUser ? 'hide List User' : 'show List user'}
                    </span>
                </div>
                {listUsers.map((user) => {
                    return(
                        <div>
                            {isShowHideListUser &&
                                <div key={user.id} className = {+user.age > 11 ? "green" : "red"}>
                                    <div>my name is {user.name}</div>
                                    <div>I'm {user.age} year old</div>
                                    <div>
                                        <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                    </div>
                                    <hr/>
                                </div>
                            }

                        </div>
                    )
                })}

            </div>
        )
}
export default DisplayInfor;