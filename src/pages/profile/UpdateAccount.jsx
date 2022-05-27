import { TextArea } from "../../components/TextArea";
import { useState, useEffect } from "react";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";

import { useSelector, useDispatch } from "react-redux";
import {
  reset,
  getClient,
  getProvider,
  updateClient,
  updateProvider,
  registerProvider,
} from "../../features/userSlice";

import { BiImageAdd } from "react-icons/bi";
import toast from "react-hot-toast";

function UpdateAccount() {
  const dispatch = useDispatch();

  const opts = [
    { value: null, label: "Ville" },
    { value: "safi1", label: "Safi - 1" },
    { value: "safi2", label: "Safi - 2" },
    { value: "safi3", label: "Safi - 3" },
  ];

  let { isError, message } = useSelector((state) => state.user);
  let role = useSelector((state) => state.auth.user.role);
  let client = useSelector((state) => state.user.client);
  let provider = useSelector((state) => state.user.provider);

  useEffect(() => {
    dispatch(getClient());

    if (role === "provider") {
      dispatch(getProvider());
    }

    if (message) {
      if (isError) toast.error(message);
      else toast.success(message);
    }
    dispatch(reset());
  }, [message, isError, role, dispatch]);

  let [nic, setNic] = useState(client?.nic);
  let [fname, setFname] = useState(client?.first_name);
  let [lname, setLname] = useState(client?.last_name);
  let [phone, setPhone] = useState(client?.phone);
  let [email, setEmail] = useState(client?.email);
  let [profession, setProfession] = useState(provider?.profession);
  let [zipcode, setZipcode] = useState(provider?.zipcode);
  let [address, setAddress] = useState(provider?.address);
  let [bio, setBio] = useState(provider?.bio);
  let [image, setImage] = useState(provider?.image);

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(
      updateClient({
        fname: fname,
        lname: lname,
        email: email,
        phone: phone,
        nic: nic,
      })
    );

    if (role === "provider") {
      dispatch(
        updateProvider({
          id: provider.provider_id,
          profession: profession,
          zipcode: zipcode,
          address: address,
          bio: bio,
        })
      );
    }

    if (role !== "provider") {
      dispatch(
        registerProvider({
          profession: profession,
          zipcode: zipcode,
          address: address,
          bio: bio,
        })
      );
    }
  };

  return (
    <div className="w-10/12 max-w-x mx-auto mb-4">
      <h2 className="my-7 font-bold text-darken text-2xl">
        {role === "client" ? "Devenir vendeur" : "Mettre à jour le profil"}
      </h2>
      <div className="flex border rounded-lg overflow-hidden bg-white">
        <form onSubmit={onSubmit} className="flex-1 p-4 md:p-6 lg:p-7">
          {/* input group */}
          <Input
            label="CINE"
            id="nic"
            type="text"
            holder="Entre votre cnie"
            onChange={(e) => setNic(e.target.value)}
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
              onChange={(e) => setFname(e.target.value)}
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
              onChange={(e) => setLname(e.target.value)}
              value={lname}
              name="lname"
              required={true}
            />
          </div>
          {/* input group */}
          <Input
            label="Profession"
            id="profession"
            type="text"
            holder="Entre votre profession"
            onChange={(e) => setProfession(e.target.value)}
            value={profession}
            name="profession"
            required={true}
          />
          {/* input group */}
          <Input
            label="Email"
            id="email"
            type="email"
            holder="Entre votre email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name="email"
            required={true}
          />
          <Input
            label="Tél"
            id="phone"
            type="tel"
            holder="Entre votre num de télephone"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            name="phone"
            required={true}
          />
          <div className="my-5 mt-7 h-2 bg-slate-200 rounded-lg relative">
            <div className="absolute w-5 h-5 rounded-full -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2 bg-slate-400"></div>
          </div>
          {/* row */}
          <div className="flex gap-x-3 flex-col md:flex-row">
            <Select label="Vile" id="city" opts={opts} required={true} />
            <Input
              label="Code postal"
              id="zipcode"
              type="number"
              holder="Entre votre code postal"
              classes="grow"
              onChange={(e) => setZipcode(e.target.value)}
              value={zipcode}
              name="zipcode"
              required={true}
            />
          </div>
          {/* input group */}
          <Input
            label="Address"
            id="address"
            type="text"
            holder="Entre votre address"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            name="address"
            required={true}
          />

          <TextArea
            label="Bio"
            id="bio"
            holder="Je suis professeur, entraîneur, et un homme aimé."
            onChange={(e) => setBio(e.target.value)}
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
                onChange={(e) => setImage(e.value)}
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
    </div>
  );
}

export default UpdateAccount;
