import { TextArea } from "../../components/TextArea";
import { useState, useEffect } from "react";
import { Input } from "../../components/Input";
import Loading from "../../components/hoc/Loading";

import { useSelector, useDispatch } from "react-redux";
import { reset, registerProvider } from "../../features/authSlice";

import { BiImageAdd } from "react-icons/bi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import ProfileTop from "./components/ProfileTop";
import cities from "../../services/citiesService";
import Wrapper4XL from "../../components/hoc/Wrapper4XL";

function PrvRegister() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [inputValues, setInputValues] = useState({
    profession: "",
    zipcode: "",
    address: "",
    city: "",
    bio: "",
    image: "",
  });

  const { profession, zipcode, address, image, bio } = inputValues;

  let { isError, message, isLoading } = useSelector((state) => state.user);
  let role = useSelector((state) => state.auth.user.role);

  useEffect(() => {
    if (role === "provider") {
      navigate("/profile/update");
    }

    if (message) {
      if (isError) toast.error(message);
      else toast.success(message);
    }
    dispatch(reset());
  }, [message, isError, isLoading, role, navigate, dispatch]);

  const onChange = (e) => {
    setInputValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (role !== "provider") {
      dispatch(registerProvider(inputValues));
    }
  };

  return (
    <Wrapper4XL classes="mb-4">
      {isLoading && <Loading />}
      <ProfileTop title="Devenir vendeur" role={role} />
      <div className="flex border rounded-lg overflow-hidden bg-white">
        <form onSubmit={onSubmit} className="flex-1 p-4 md:p-6 lg:p-7">
          {/* row */}
          <div className="flex gap-x-3 flex-col md:flex-row">
            <div className="flex flex-col my-1 grow basis-1/2">
              <label htmlFor="city" className="text-grayish font-normal">
                Ville
              </label>
              <select
                onChange={onChange}
                name="city"
                className="input"
                id="city"
              >
                <option value="" className="text-gray-400">
                  Choiser une ville
                </option>
                {cities.map((city) => (
                  <option key={`${city.id}city4524`} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
            <Input
              label="Code postal"
              id="zipcode"
              type="number"
              holder="Entre votre code postal"
              classes="grow flex-1"
              onChange={onChange}
              value={zipcode}
              name="zipcode"
              required={true}
            />
          </div>
          {/* row */}
          <div className="flex gap-x-3 flex-col md:flex-row">
            {/* input group */}
            <Input
              label="Address"
              id="address"
              type="text"
              holder="Entre votre address"
              classes="grow"
              onChange={onChange}
              value={address}
              name="address"
              required={true}
            />

            {/* input group */}
            <Input
              label="Profession"
              id="profession"
              type="text"
              holder="Entre votre profession"
              classes="grow"
              onChange={onChange}
              value={profession}
              name="profession"
              required={true}
            />
          </div>

          <TextArea
            label="Bio"
            id="bio"
            holder="Je suis professeur, entraîneur, et un homme aimé."
            onChange={onChange}
            value={bio}
            name="bio"
            required={true}
          />
          {/* upload image */}
          <div className="hidden flex-col justify-center items-center w-full">
            <p className="self-start text-grayish font-medium my-1">Image</p>
            <label
              htmlFor="dropzone-file"
              className="flex flex-col justify-center items-center w-full bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col justify-center items-center pt-5 pb-6">
                <BiImageAdd size={35} color="#ccd" />
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">
                    Cliquez pour télécharger
                  </span>
                  ou glisser-déposer
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input
                name="image"
                id="dropzone-file"
                type="file"
                className="hidden"
                value={image}
                onChange={onChange}
              />
            </label>
          </div>
          <div className="flex justify-end mt-5">
            <button className="btn-primary bg-darken hover:bg-primary rounded-md">
              Confirmer
            </button>
          </div>
        </form>
      </div>
    </Wrapper4XL>
  );
}

export default PrvRegister;
