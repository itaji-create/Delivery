import { updateSale } from './requests';

const handleClick = async (id, status) => {
  await updateSale(`/sales/${id}`, { status });
  window.location.reload();
};

export default handleClick;
