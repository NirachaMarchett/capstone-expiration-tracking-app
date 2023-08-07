import Item from "@/component/Item";
import { useRouter } from "next/router";

export default function ItemDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return null;
  }
  return (
    <>
      <Item id={id} />
    </>
  );
}
