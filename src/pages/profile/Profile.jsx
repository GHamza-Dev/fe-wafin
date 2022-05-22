import { Outlet } from "react-router-dom";
import ProfileNav from "../../components/ProfileNav";
function Profile() {
  return (
    <>
      <ProfileNav />
      <Outlet />
    </>
  );
}

export default Profile;
