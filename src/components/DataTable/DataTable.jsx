import { useSortableData } from '../../hooks/useSortableData';

export function DataTable({ persons }) {
  const { items, requestSort, sortConfig } = useSortableData(persons);
  const elements = items.map((e) => {
    return (
      <tr key={e.id + e.phone}>
        <td>{e.id}</td>
        <td>{e.firstName}</td>
        <td>{e.lastName}</td>
        <td>{e.email}</td>
        <td>{e.phone}</td>
      </tr>
    );
  });
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col" onClick={() => requestSort('id')}>
            id {sortConfig.direction && sortConfig.direction}
          </th>
          <th scope="col" onClick={() => requestSort('firstName')}>
            firstName
          </th>
          <th scope="col" onClick={() => requestSort('lastName')}>
            lastName
          </th>
          <th scope="col" onClick={() => requestSort('email')}>
            email
          </th>
          <th scope="col" onClick={() => requestSort('phone')}>
            phone
          </th>
        </tr>
      </thead>
      <tbody>{items && elements}</tbody>
    </table>
  );
}
