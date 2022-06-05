import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import orderService from "../../services/orderService";
import Loading from "../../components/hoc/Loading";
import OrderCard from "./components/OrderCard";
import Model from "../../components/hoc/Model";
import toast from "react-hot-toast";

const Orders = () => {
  const [orders, setOrders] = useState(null);
  const [filterBy, setFilterBy] = useState("all");
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [acceptModelOpened, setAcceptModelOpened] = useState(false);
  const [rejectModelOpened, setRejectModelOpened] = useState(false);

  const { token, id } = useSelector((state) => state.auth.user);
  let filtredOrders = [];

  useEffect(() => {
    orderService.getProviderOrders(id, token).then((res) => setOrders(res));
  }, [id, token]);

  const date = () => {
    const date = new Date();
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate() + 1}`;
  };

  const acceptOrderHandler = () => {
    if (selectedOrderId) {
      orderService.acceptOrder(selectedOrderId).then((res) => {
        if (!res.err) {
          toast.success(res.message);

          let index = orders.findIndex((o) => o.order_id === selectedOrderId);
          let edited = orders;

          edited[index].accepted_at = date();

          setOrders([...edited]);
        } else toast.error(res.message);
      });
    } else toast.error("Ops something went wrong please try again!");
  };

  const rejectOrderHandler = () => {
    if (selectedOrderId) {
      orderService.rejectOrder(selectedOrderId).then((res) => {
        if (!res.err) {
          toast(res.message);

          let index = orders.findIndex((o) => o.order_id === selectedOrderId);
          let edited = orders;

          edited[index].rejected_at = date();

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
      <Model
        opened={acceptModelOpened}
        title="Accepter cette commande"
        status="success"
        text="Cliquez sur confirmer pour compléter votre confirmation."
        onConfirm={() => {
          setAcceptModelOpened(false);
          acceptOrderHandler();
        }}
        onCancel={() => {
          setAcceptModelOpened(false);
        }}
      />
      <Model
        opened={rejectModelOpened}
        title="Rejéter cette commande"
        status="danger"
        text="Cliquez sur confirmer pour compléter votre confirmation."
        onConfirm={() => {
          setRejectModelOpened(false);
          rejectOrderHandler();
        }}
        onCancel={() => {
          setRejectModelOpened(false);
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
          <OrderCard
            key={o.order_id}
            title={o.title}
            date={o.created_at}
            name={`${o.first_name} ${o.last_name}`}
            phone={o.phone}
            email={o.email}
            serviceId={o.service}
            acceptedAt={o.accepted_at}
            rejectedAt={o.rejected_at}
            onAccept={() => {
              setAcceptModelOpened(true);
              setSelectedOrderId(o.order_id);
            }}
            onReject={() => {
              setRejectModelOpened(true);
              setSelectedOrderId(o.order_id);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Orders;
