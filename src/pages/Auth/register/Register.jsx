import { useState, useEffect } from "react";
import { Input } from "../../../components/Input";

import { useSelector, useDispatch } from "react-redux";
import { register, reset } from "../../../features/authSlice";

import styles from "./Register.module.css";
import toast from "react-hot-toast";

import { Link, useNavigate } from "react-router-dom";
import Loading from "../../../components/hoc/Loading";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    phone: "",
    nic: "",
  });

  const { nic, fname, lname, password, email, phone } = formData;

  const onChange = (e) => {
    setFormData((prevStat) => ({
      ...prevStat,
      [e.target.name]: e.target.value,
    }));
  };

  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isSuccess || user) {
      dispatch(reset());
      navigate("/vendors");
    }

    if (isError) {
      dispatch(reset());
      toast.error(message);
    }
  }, [user, isError, isSuccess, message, isLoading, navigate, dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(register(formData));
  };

  return (
    <div className="w-10/12 max-w-x mx-auto mb-4">
      {isLoading ? <Loading /> : null}
      <h2 className="my-7 font-bold text-darken text-2xl">Créer un compte</h2>
      <div className="flex border rounded-lg overflow-hidden bg-white">
        <form onSubmit={onSubmit} className="flex-1 p-4 md:p-6 lg:p-7">
          {/* row */}
          <div className="flex gap-x-3 flex-col md:flex-row">
            <Input
              label="Nom"
              id="fname"
              type="text"
              holder="Entre votre nom"
              classes="grow"
              onChange={onChange}
              value={fname}
              name="fname"
            />
            <Input
              label="Prénom"
              id="lname"
              type="text"
              holder="Entre votre prénom"
              classes="grow"
              onChange={onChange}
              value={lname}
              name="lname"
            />
          </div>
          {/* input group */}
          <div className="flex gap-x-3 flex-col md:flex-row">
            <Input
              label="CINE"
              id="nic"
              type="text"
              holder="Entre votre nic"
              classes="grow"
              onChange={onChange}
              value={nic}
              name="nic"
            />
            <Input
              label="Tél"
              id="phone"
              type="tel"
              holder="Entre votre tél"
              classes="grow"
              onChange={onChange}
              value={phone}
              name="phone"
            />
          </div>
          {/* input group */}
          <Input
            label="Email"
            id="email"
            type="email"
            holder="Entre votre email"
            onChange={onChange}
            value={email}
            name="email"
          />
          {/* input group */}
          <Input
            label="Password"
            id="password"
            type="password"
            holder="Entre votre mot de pass"
            onChange={onChange}
            value={password}
            name="password"
          />
          <div className="my-5 flex items-center">
            <input
              type="checkbox"
              className="appearance-none border border-slate-300 p-2 rounded-md"
            />
            <p className="text-base">
              <Link to="/" className="underline ml-2 font-light">
                Agree to our term of use
              </Link>
            </p>
          </div>
          <div className="flex justify-end mt-5">
            <button className="btn-primary bg-darken hover:bg-primary rounded-md">
              Confirmer
            </button>
          </div>
          <p className="text-base text-center mt-6">
            <Link to="/login" className="underline ml-2 font-light">
              Vous avez déjà un compte? se connecter
            </Link>
          </p>
        </form>
        <div className={`flex-1 hidden lg:block ${styles.left}`}></div>
      </div>
    </div>
  );
}

export default Register;
