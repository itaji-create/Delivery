import { updateSale } from './requests';

const handleClick = async (id, status) => {
  await updateSale(`/sales/${id}`, { status });
  window.location.href = `/customer/orders/${id}`;
};

export default handleClick;
