import { updateSale } from './requests';

const handleClick = async (id, status) => {
  const result = await updateSale(`/sales/${id}`, { status });
  console.log(result);
};

export default handleClick;
