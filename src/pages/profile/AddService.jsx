import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addService } from "../../features/serviceSlice";

import toast from "react-hot-toast";

import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { TextArea } from "../../components/TextArea";
import Button from "../../components/Button";
import Loading from "../../components/Loading";

function AddService() {
  const dispatch = useDispatch();

  const categories = [
    { value: null, label: "Category" },
    { value: 1, label: "Category - 1" },
    { value: 2, label: "Category - 2" },
    { value: 3, label: "Category - 3" },
  ];

  const cities = [
    { value: null, label: "Ville" },
    { value: 1, label: "City - 1" },
    { value: 2, label: "City - 2" },
  ];

  const [formData, setFormData] = useState({
    category_id: 1,
    city: 1,
    title: "",
    price: "",
    description: "",
  });

  const { category_id, title, price, city, description } = formData;
  const { isError, message, isLoading } = useSelector((state) => state.service);

  useEffect(() => {
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
            <Select
              id="category"
              label="Categorie"
              opts={categories}
              classes="basis-1/2"
              onChange={onChange}
              name="category_id"
              value={category_id}
              selected={category_id}
            />
            <Select
              id="city"
              label="Ville"
              opts={cities}
              classes="basis-1/2"
              onChange={onChange}
              name="city"
              value={city}
            />
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
