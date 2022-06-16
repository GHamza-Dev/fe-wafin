import { useState } from "react";
import Star from "./Star";
import { TextArea } from "../../components/TextArea";
import Button from "../Button";
import axios from "axios";
import { api } from "../../config/config";
import toast from "react-hot-toast";

const Rate = ({ orderId, providerId, onSubmit }) => {
  const [rate, setRate] = useState(1);
  const [feedback, setFeedback] = useState("");

  const getRate = (r) => {
    setRate((prevRate) => r);
  };

  const submitRate = async (e) => {
    e.preventDefault();
    const data = JSON.stringify({
      order_id: orderId,
      provider_id: providerId,
      stars: rate,
      comment: feedback,
    });
    try {
      const res = await axios.post(`${api}/rate/add`, data);
      if (res?.data?.code === 200) toast.success("Merci pour votre avis");
      else
        toast.error(
          "Ops quelque chose s'est mal passé, veuillez réessayer plus tard"
        );
      // Close the model
      onSubmit();
    } catch (error) {
      toast.error(
        "Ops quelque chose s'est mal passé, veuillez réessayer plus tard"
      );
    }
  };

  return (
    <div className="w-96 max-w-full mx-1 p-6 bg-white rounded-md">
      <ul className="flex justify-center mb-4">
        <Star isActive={true} starId={1} rate={rate} getRate={getRate} />
        <Star isActive={false} starId={2} rate={rate} getRate={getRate} />
        <Star isActive={false} starId={3} rate={rate} getRate={getRate} />
        <Star isActive={false} starId={4} rate={rate} getRate={getRate} />
        <Star isActive={false} starId={5} rate={rate} getRate={getRate} />
      </ul>
      <form>
        <TextArea
          label="Rédiger un commentaire"
          id="feedback"
          name="feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          holder="Vos impressions..."
        />
        <Button onClick={submitRate} text="Envoyer" classes="mt-2" />
      </form>
    </div>
  );
};

export default Rate;
