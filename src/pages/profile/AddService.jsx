import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addService } from "../../features/serviceSlice";
import serviceService from "../../services/serviceService";

import toast from "react-hot-toast";

import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import Button from "../../components/Button";
import Loading from "../../components/hoc/Loading";

import cities from "../../services/citiesService";

function AddService() {
  const dispatch = useDispatch();

  const [categories, setCategories] = useState([]);

  const [formData, setFormData] = useState({
    category_id: "",
    city: "",
    title: "",
    price: "",
    description: "",
  });

  const { title, price, description } = formData;
  const { isError, message, isLoading } = useSelector((state) => state.service);

  useEffect(() => {
    serviceService.getServiceCategories().then((res) => setCategories(res));

    if (message) {
      if (isError) toast.error(message);
      else toast.success(message);
    }
  }, [isError, message]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addService(formData));
  };

  return (
    <div className="w-10/12 max-w-x mx-auto mb-4">
      {isLoading && <Loading />}
      <h2 className="my-7 font-bold text-darken text-2xl">Nouveau Service</h2>
      <div className="border rounded-lg overflow-hidden bg-white">
        <form onSubmit={onSubmit} className="flex-1 p-4 md:p-6 lg:p-7">
          {/* row */}
          <div className="flex gap-x-3 flex-col md:flex-row">
            <div className="flex flex-col my-1 grow basis-1/2">
              <label htmlFor="category" className="text-grayish font-normal">
                Catégorie
              </label>
              <select
                onChange={onChange}
                name="category_id"
                className="input"
                id="category"
              >
                <option value="" className="text-gray-400">
                  Catégorie
                </option>
                {categories.map((cat) => (
                  <option key={`${cat.cat_id}cat4524`} value={cat.cat_id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col my-1 grow basis-1/2">
              <label htmlFor="city" className="text-grayish font-normal">
                Vill
              </label>
              <select
                onChange={onChange}
                name="city"
                className="input"
                id="city"
              >
                <option value="" className="text-gray-400">
                  Tout les villes
                </option>
                {cities.map((city) => (
                  <option key={`${city.id}city4524`} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* row */}
          <div className="flex gap-x-3 flex-col md:flex-row">
            <Input
              id="title"
              label="Titre"
              holder="Entrer le titre de service"
              name="title"
              value={title}
              type="text"
              classes="grow"
              onChange={onChange}
            />
            <Input
              id="price"
              label="Prix"
              holder="300.00 Dh"
              name="price"
              value={price}
              type="number"
              classes="grow"
              required={true}
              onChange={onChange}
            />
          </div>
          <div>
            <TextArea
              id="desc"
              label="Description"
              holder="Entrer la description..."
              name="description"
              value={description}
              onChange={onChange}
            />
          </div>
          <div className="flex justify-end mt-5">
            <Button text="Déposer" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddService;
