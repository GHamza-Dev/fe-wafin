import { Outlet } from "react-router-dom";
import ProfileNav from "../../components/profilenav/ProfileNav";
function Profile() {
  return (
    <div>
      <ProfileNav />
      <Outlet />
    </div>
  );
}

export default Profile;
