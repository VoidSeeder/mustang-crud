import { Icon } from "@iconify/react";
import TableContainer from "./Table";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import TableIcon from "./TableIcon";

export default function Table() {
  return (
    <TableContainer>
      <thead>
        <TableHeader>
          <th>Nome</th>
          <th>Ano</th>
          <th>Velocidade máx Km/h</th>
          <th>Nota Economia</th>
          <th>Nota usuários</th>
          <th></th>
          <th></th>
        </TableHeader>
      </thead>
      <TableBody>
        <tr>
          <td>Nome</td>
          <td>Ano</td>
          <td>Velocidade máx Km/h</td>
          <td>Nota Economia</td>
          <td>Nota usuários</td>
          <td>
            <TableIcon icon="akar-icons:trash-can" />
          </td>
          <td>
            <TableIcon icon="clarity:edit-line" />
          </td>
        </tr>
      </TableBody>
    </TableContainer>
  );
}
