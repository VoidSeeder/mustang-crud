import ListContainer from "./Container";
import ListHeader from "./Header";
import Table from "./Table";

export default function List() {
  return (
    <ListContainer>
      <ListHeader />
      <Table/>
    </ListContainer>
  );
}
