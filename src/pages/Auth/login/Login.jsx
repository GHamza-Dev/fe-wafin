import { useState, useEffect } from "react";
import { Input } from "../../../components/Input";

import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../../../features/authSlice";

import styles from "./Login.module.css";
import toast from "react-hot-toast";

import { useNavigate, Link } from "react-router-dom";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { password, email } = formData;

  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (stat) => stat.auth
  );

  useEffect(() => {
    if (isSuccess || user) {
      dispatch(reset());
      navigate("/secret");
    }

    if (isError) {
      dispatch(reset());
      toast.error(message);
    }
  }, [user, isError, isSuccess, message, isLoading, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevStat) => ({
      ...prevStat,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };

  return (
    <div className="w-10/12 max-w-x mx-auto mb-4">
      <h2 className="my-7 font-bold text-darken text-2xl">Se connecter</h2>
      <div className="flex flex-row-reverse border rounded-lg overflow-hidden bg-white">
        <div className="flex-1 p-4 md:p-6 lg:p-10">
          <div>
            <p className="font-segoeui text-2xl text-grayish">Bonjour</p>
            <h3 className="text-3xl text-darken font-semibold my-2">
              Bienvenue à Wa<span className="text-primary">fin</span>
            </h3>
            <p className="font-light text-grayish">
              Entrez vos identifiants ci-dessous
            </p>
          </div>
          <form onSubmit={onSubmit} className="mt-7">
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
              classes="my-3"
              onChange={onChange}
              value={password}
              name="password"
            />
            <div className="flex justify-end mt-5">
              <button className="w-full btn-primary bg-darken hover:bg-primary rounded-md">
                Se connecter
              </button>
            </div>
            <p className="text-base text-center mt-6">
              <Link to={"/register"} className="underline ml-2 font-light">
                Vous n'avez pas de compte? Créer un compte
              </Link>
            </p>
          </form>
        </div>
        <div className={`flex-1 hidden lg:block ${styles.left}`}></div>
      </div>
    </div>
  );
}

export default Register;
