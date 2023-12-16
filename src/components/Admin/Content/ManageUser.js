import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { FcPlus } from 'react-icons/fc';
import {getAllUsers} from "../../../services/apiService";
import {useEffect, useState} from "react";
import TableUser from "./TableUser";
import ModalUpdateUser from "./ModalUpdateUser";


const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({});

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
    
    const handleClickBtnUpdate = (user) => {
        setShowModalUpdateUser(true);
        setDataUpdate(user);
    }
    
    const resetUpdateData = () => {
        setDataUpdate({});
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
                    <TableUser
                        listUsers={listUsers}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                    />
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetListUsers={fetListUsers}
                />
                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    dataUpdate={dataUpdate}
                    fetListUsers={fetListUsers}
                    resetUpdateData={resetUpdateData}
                />
            </div>
        </div>
    )
};
export default ManageUser;