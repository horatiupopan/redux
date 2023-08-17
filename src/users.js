import { Outlet } from "react-router-dom";

const Users = () => {
    const myUsers = [
        {
            firstName: "George",
            lastName: "Washington"
        },
        {
            firstName: "John",
            lastName: "Doe"
        },
        {
            firstName: "Ann",
            lastName: "Parker"
        },
    ];
    const usersList = myUsers.map(x => <li>{x.firstName} {x.lastName}</li>);
    return (
        <div style={{}}>
            <div style={{position:"fixed"}}>
                <ul>
                    {usersList}
                </ul>
                <a href="/users/create">Add User</a>
            </div>
            <Outlet />
        </div>
    );
}

export default Users;