import { useState, useEffect } from 'react';

// import { Link } from '../../components/Link';
import { userService } from 'services';
import Meta from 'components/Meta';
import Link from 'next/link';
import tableStyles from '../../styles/Table.module.css'


function Index() {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        userService.getAll().then((x) => setUsers(x));
    }, []);

    function deleteUser(id) {
        setUsers(
            users.map((x) => {
                if (x.id === id) {
                    x.isDeleting = true;
                }
                return x;
            })
        );
        userService.delete(id).then(() => {
            setUsers((users) => users.filter((x) => x.id !== id));
        });
    }

    return (
        <div className={tableStyles.container}>
            <div>
                <h5>A TABLE</h5>
                <br />
                <div className={tableStyles.tableWrap}>
                    <table>
                        <thead>
                            <tr>
                                <th>NAME</th>
                                <th>ID</th>
                                <th>LATITUDE</th>
                                <th>LONGITUDE</th>
                                <th>TYPE</th>
                                <th>IP</th>
                                <th>OPTION</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {users &&
                                users.map((user) => (
                                    <tr key={user.id}>
                                        <td>{user.name}</td>
                                        <td>{user.ida}</td>
                                        <td>{user.latitude}</td>
                                        <td>{user.longitude}</td>
                                        <td>{user.type}</td>
                                        <td>{user.ip1}.{user.ip2}.{user.ip3}.{user.ip4}</td>
                                        <td>{user.option}</td>
                                        <td style={{ whiteSpace: 'nowrap' }}>
                                            <Link
                                                href={`/users/edit${user.id}`}
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                onClick={() => deleteUser(user.id)}
                                                className="btn btn-sm btn-danger btn-delete-user"
                                                disabled={user.isDeleting}
                                            >
                                                {user.isDeleting ? (
                                                    <span className="spinner-border spinner-border-sm"></span>
                                                ) : (
                                                    <span>Delete</span>
                                                )}
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            {!users && (
                                <tr>
                                    <td colSpan="4" className="text-center">
                                        <div className="spinner-border spinner-border-lg align-center"></div>
                                    </td>
                                </tr>
                            )}
                            {users && !users.length && (
                                <tr>
                                    <td colSpan="4" className="text-center">
                                        <div className="p-2">No Users To Display</div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={tableStyles.group}>
                <Link href='/'>
                    <button type="button">&lt; Back</button>
                </Link>
                <button type="button">Apply</button>
            </div>
        </div>
    );
}

export default Index;
