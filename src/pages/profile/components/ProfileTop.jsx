import To from "../../../components/Link";

const ProfileTop = ({ title = "profile title", role = "client" }) => {
  return (
    <>
      <h2 className="my-7 font-bold text-darken text-2xl">{title}</h2>
      <div className="flex my-3 bg-white md:px-6 lg:px-7 p-3 border rounded">
        <To
          to="/profile/update"
          className="text-darken hover:underline"
          current="text-blue"
        >
          Mettre à jour le profil
        </To>
        <span className="mx-2 text-gray-300">|</span>
        {role !== "provider" && (
          <>
            <To
              to="/profile/register-provider"
              className="text-darken hover:underline"
              current="text-blue"
            >
              Devenir vendeur
            </To>
            <span className="mx-2 text-gray-300">|</span>
          </>
        )}
        <To
          to="/services"
          className="text-darken hover:underline"
          current="text-blue"
        >
          Services
        </To>
      </div>
    </>
  );
};

export default ProfileTop;
