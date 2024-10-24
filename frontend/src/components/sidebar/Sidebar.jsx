import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
    return (
        <div>
            <SearchInput />
            <div></div> {/* Placeholder for divider */}
            <Conversations />
            <LogoutButton />
        </div>
    );
};

export default Sidebar;
