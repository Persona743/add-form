import { useState, useEffect } from 'react';

import { NextLink } from '../../components/Link';
import { userService } from 'services';
import Meta from 'components/Meta';
import Link from 'next/link';
import tableStyles from '../../styles/Table.module.css'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPencil, faExclamation } from '@fortawesome/free-solid-svg-icons'

function Index() {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        userService.getAll().then((x) => setUsers(x));
    }, []);

    function deleteUser(id) {
        const confirmBox = window.confirm("Are you sure about deleting this item?")
        if (confirmBox === true) {
            setUsers(
                users.map((x) => {
                    if (x.id === id) {
                        x.isDeleting = true;
                    }
                    return x;
                })
            );
        } else {
            return null
        }
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
                                                href={`/users/edit/${user.id}`}
                                            >
                                                <FontAwesomeIcon icon={faPencil} className={tableStyles.icon} />
                                            </Link>

                                            <a
                                                onClick={() => deleteUser(user.id)}
                                                disabled={user.isDeleting}
                                            >
                                                {user.isDeleting ? (
                                                    <span></span>
                                                ) : (
                                                    <FontAwesomeIcon icon={faTrashCan} className={tableStyles.icon1} />
                                                )}
                                            </a>

                                        </td>
                                    </tr>
                                ))}
                            {!users && (
                                <tr>
                                    <td>
                                        <div></div>
                                    </td>
                                </tr>
                            )}
                            {users && !users.length && (
                                <span>
                                    <FontAwesomeIcon icon={faExclamation} className={tableStyles.icon2} />
                                    NO ITEM FOUND IN THE TABLE
                                </span>
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
