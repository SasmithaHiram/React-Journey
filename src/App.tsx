import { useEffect, useState } from "react";
import ApiClient, { CanceledError } from "./Services/Api-Client";
import type { AxiosError } from "axios";
import UserService, { type User } from "./Services/UserService";

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = UserService.getAll<User>();
    request
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })

      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError((err as AxiosError).message);
        setLoading(false);
      });
    return () => cancel();
  }, []);

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    UserService.delete(user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const createUser = () => {
    const orginalUsers = [...users];
    const newUser = { id: 0, name: "Sasmitha" };
    setUsers([newUser, ...users]);

    UserService.create(newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(orginalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    UserService.update(updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={() => createUser()}>
        Add User
      </button>

      <ul className="list-group">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={user.id}
          >
            {user.name}{" "}
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
