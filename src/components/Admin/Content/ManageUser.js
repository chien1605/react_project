import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { FcPlus } from 'react-icons/fc';
import {getAllUsers} from "../../../services/apiService";
import {useEffect, useState} from "react";
import TableUser from "./TableUser";


const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [listUsers, setListUsers] = useState([]);

    useEffect(() => {
        fetListUsers();
    }, []);
    const fetListUsers = async () => {
        let res = await getAllUsers();
        if (res.EC === 0) {
            setListUsers(res.DT);
        }
    }
    return (
        <div className="manage-user-container">
            <div className="title">
                <div>
                    Manage User
                </div>
            </div>
            <div className="user-content">
                <div className="btn-add-new">
                    <button className="btn btn-primary" onClick={() => setShowModalCreateUser(true)}><FcPlus/> Add new user</button>
                </div>
                <div className="table-users-container">
                    <TableUser listUsers={listUsers}/>
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetListUsers={fetListUsers}
                />
            </div>
        </div>
    )
};
export default ManageUser;