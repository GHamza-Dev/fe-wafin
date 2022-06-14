import { Outlet } from "react-router-dom";
import ProfileNav from "../../components/profilenav/ProfileNav";
function Profile() {
  return (
    <div className="md:flex">
      <ProfileNav />
      <Outlet />
    </div>
  );
}

export default Profile;
