import { PaginationWrapper } from "../components/home/pagination-wrapper";

export default function Home() {
  const initialState = {
    page: 0,
    index: 10,
    currentId: 0,
  };

  return (
    <main>
      <section>
        <PaginationWrapper state={initialState} />
      </section>
    </main>
  );
}
