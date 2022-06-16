import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import orderService from "../../services/orderService";
import Loading from "../../components/hoc/Loading";
import ClientOrderCard from "./components/ClientOrderCard";
import Model from "../../components/hoc/Model";
import toast from "react-hot-toast";
import BackDrop from "../../components/hoc/BackDrop";
import Rate from "../../components/Rate/Rate";

const ClientOrders = () => {
  const [orders, setOrders] = useState(null);
  const [filterBy, setFilterBy] = useState("all");
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [completeModelOpened, setCompleteModelOpened] = useState(false);

  const [rateModelOpened, setRateModelOpened] = useState(false);
  const [selectedProviderId, setSelectedProviderId] = useState(null);

  const { token, id } = useSelector((state) => state.auth.user);
  let filtredOrders = [];

  useEffect(() => {
    orderService.getClientOrders(id, token).then((res) => setOrders(res));
  }, [id, token]);

  const date = () => {
    const date = new Date();
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate() + 1}`;
  };

  const completeOrderHandler = () => {
    if (selectedOrderId) {
      orderService.completeOrder(selectedOrderId).then((res) => {
        if (!res.err) {
          toast.success(res.message);

          let index = orders.findIndex((o) => o.order_id === selectedOrderId);
          let edited = orders;

          edited[index].completed_at = date();

          setOrders([...edited]);
        } else toast.error(res.message);
      });
    } else toast.error("Ops something went wrong please try again!");
  };

  const filterOrders = (list) => {
    switch (filterBy) {
      case "new":
        filtredOrders = list.filter(
          (item) => item.accepted_at === null && item.rejected_at === null
        );
        break;

      case "accepted":
        filtredOrders = list.filter((item) => item.accepted_at !== null);
        break;

      case "completed":
        filtredOrders = list.filter((item) => item.completed_at !== null);
        break;

      case "rejected":
        filtredOrders = list.filter((item) => item.rejected_at !== null);
        break;

      default:
        filtredOrders = list;
        break;
    }
  };

  if (orders) filterOrders(orders);

  return (
    <div className="w-10/12 max-w-x mx-auto my-4">
      <BackDrop
        show={rateModelOpened}
        onBackDropClick={() => {
          setRateModelOpened(false);
        }}
      >
        <Rate
          orderId={selectedOrderId}
          providerId={selectedProviderId}
          onSubmit={() => {
            setRateModelOpened(false);
          }}
        />
      </BackDrop>
      <Model
        opened={completeModelOpened}
        title="Complété cette commande"
        status="success"
        text="Cliquez sur confirmer pour compléter votre confirmation."
        onConfirm={() => {
          setCompleteModelOpened(false);
          completeOrderHandler();
        }}
        onCancel={() => {
          setCompleteModelOpened(false);
        }}
      />

      {!orders && <Loading />}
      <div className="my-7 flex justify-between items-center">
        <h2 className=" font-bold text-darken text-2xl">Mes Demandes</h2>
        <select
          onChange={(e) => {
            setFilterBy(e.target.value);
          }}
          className="border p-2 input w-fit"
          id="filter"
        >
          <option value="all">Tout</option>
          <option value="new">Nouveaux</option>
          <option value="accepted">Accepté</option>
          <option value="completed">Complété</option>
          <option value="rejected">Rejetée</option>
        </select>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        {filtredOrders.map((o) => (
          <ClientOrderCard
            key={o.order_id}
            title={o.title}
            date={o.created_at}
            serviceId={o.service}
            providerId={o.provider_id}
            acceptedAt={o.accepted_at}
            rejectedAt={o.rejected_at}
            completedAt={o.completed_at}
            rateId={o.rate_id}
            onComplete={() => {
              setCompleteModelOpened(true);
              setSelectedOrderId(o.order_id);
            }}
            onRate={() => {
              setRateModelOpened(true);
              setSelectedOrderId(o.order_id);
              setSelectedProviderId(o.provider_id);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ClientOrders;
