import Item from "@/component/Item";
import { useRouter } from "next/router";

export default function ItemDetailsPage({ onChange, groceriesList, onDelete }) {
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return null;
  }
  return (
    <Item
      id={id}
      onChange={onChange}
      grocerySelectedItem={groceriesList.find((item) => item.id === id)}
      onDelete={onDelete}
    />
  );
}
