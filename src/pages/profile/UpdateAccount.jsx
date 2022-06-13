import { TextArea } from "../../components/TextArea";
import { useState, useEffect } from "react";
import { Input } from "../../components/Input";
import Loading from "../../components/hoc/Loading";

import { useSelector, useDispatch } from "react-redux";
import { reset, updateClient, updateProvider } from "../../features/userSlice";

import userService from "../../services/userService";

import { BiImageAdd } from "react-icons/bi";
import toast from "react-hot-toast";

import ProfileTop from "./components/ProfileTop";
import cities from "../../services/citiesService";

function UpdateAccount() {
  const dispatch = useDispatch();

  const [clientInputValues, setClientInputValues] = useState({
    nic: "",
    fname: "",
    lname: "",
    phone: "",
    email: "",
  });

  const [providerInputValues, setProviderInputValues] = useState({
    profession: "",
    zipcode: "",
    city: "",
    address: "",
    bio: "",
    image: "",
  });

  const { nic, fname, lname, phone, email } = clientInputValues || {};

  const { profession, zipcode, address, bio, image } =
    providerInputValues || {};

  const onClientChange = (e) => {
    setClientInputValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onProviderChange = (e) => {
    setProviderInputValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  let { isError, message, isLoading } = useSelector((state) => state.user);
  let role = useSelector((state) => state.auth.user.role);
  let id = useSelector((state) => state.auth.user.id);
  let token = useSelector((state) => state.auth.user.token);

  useEffect(() => {
    userService.getClient({ id, token }).then((res) => {
      setClientInputValues({
        nic: res.nic,
        phone: res.phone,
        email: res.email,
        fname: res.first_name,
        lname: res.last_name,
      });
    });

    if (role === "provider") {
      userService.getProvider({ id, token }).then((res) => {
        setProviderInputValues(res);
      });
    }

    if (message) {
      if (isError) toast.error(message);
      else toast.success(message);
    }
    dispatch(reset());
  }, [message, isError, isLoading, role, id, token, dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(updateClient(clientInputValues));

    if (role === "provider") {
      dispatch(updateProvider(providerInputValues));
    }
  };

  return (
    <div className="w-10/12 max-w-x mx-auto mb-4">
      {isLoading && <Loading />}
      <ProfileTop title="Mettre à jour le profil" role={role} />
      <div className="flex border rounded-lg overflow-hidden bg-white">
        <form onSubmit={onSubmit} className="flex-1 p-4 md:p-6 lg:p-7">
          {/* input group */}
          <Input
            label="CINE"
            id="nic"
            type="text"
            holder="Entre votre cnie"
            onChange={onClientChange}
            value={nic}
            name="nic"
            required={true}
          />
          {/* row */}
          <div className="flex gap-x-3 flex-col md:flex-row">
            <Input
              label="Nom"
              id="fname"
              type="text"
              holder="Entre votre nom"
              classes="grow"
              onChange={onClientChange}
              value={fname}
              name="fname"
              required={true}
            />
            <Input
              label="Prénom"
              id="lname"
              type="text"
              holder="Entre votre prénom"
              classes="grow"
              onChange={onClientChange}
              value={lname}
              name="lname"
              required={true}
            />
          </div>
          {/* input group */}
          <Input
            label="Email"
            id="email"
            type="email"
            holder="Entre votre email"
            onChange={onClientChange}
            value={email}
            name="email"
            required={true}
          />
          <Input
            label="Tél"
            id="phone"
            type="tel"
            holder="Entre votre num de télephone"
            onChange={onClientChange}
            value={phone}
            name="phone"
            required={true}
          />

          {role === "provider" && (
            <>
              <div className="my-5 mt-7 border-dashed border-gray-400 border rounded-lg relative"></div>
              {/* row */}
              <div className="flex gap-x-3 flex-col md:flex-row">
                <div className="flex flex-col my-1 grow basis-1/2">
                  <label htmlFor="city" className="text-grayish font-normal">
                    Ville
                  </label>
                  <select
                    onChange={onProviderChange}
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
                  classes="grow"
                  onChange={onProviderChange}
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
                  onChange={onProviderChange}
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
                  onChange={onProviderChange}
                  value={profession}
                  name="profession"
                  required={true}
                />
              </div>

              <TextArea
                label="Bio"
                id="bio"
                holder="Je suis professeur, entraîneur, et un homme aimé."
                onChange={onProviderChange}
                value={bio}
                name="bio"
                required={true}
              />
              {/* upload image */}
              <div className="hidden flex-col justify-center items-center w-full">
                <p className="self-start text-grayish font-medium my-1">
                  Image
                </p>
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col justify-center items-center w-full bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col justify-center items-center pt-5 pb-6">
                    <BiImageAdd size={35} color="#ccd" />
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">
                        Cliquez pour télécharger
                      </span>{" "}
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
                    onChange={onProviderChange}
                  />
                </label>
              </div>
            </>
          )}
          <div className="flex justify-end mt-5">
            <button className="btn-primary bg-darken hover:bg-primary rounded-md">
              Confirmer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateAccount;
