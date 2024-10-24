import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
    const { loading, logout } = useLogout();

    return (
        <div>
            {!loading ? (
                <BiLogOut onClick={logout} />
            ) : (
                <span>Loading...</span>
            )}
        </div>
    );
};

export default LogoutButton;
