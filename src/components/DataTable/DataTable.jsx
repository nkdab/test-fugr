import { useSortableData } from '../../hooks/useSortableData';

export function DataTable({ persons }) {
  const { items, requestSort, sortConfig } = useSortableData(persons);
  const elements = items.map((e) => {
    return (
      <tr key={e.id + Math.random()}>
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
          <th scope="col" onClick={requestSort('id')}>
            id
          </th>
          <th scope="col" onClick={requestSort('id')}>
            firstName
          </th>
          <th scope="col" onClick={requestSort('id')}>
            lastName
          </th>
          <th scope="col" onClick={requestSort('id')}>
            email
          </th>
          <th scope="col" onClick={requestSort('id')}>
            phone
          </th>
        </tr>
      </thead>
      <tbody>{items && elements}</tbody>
    </table>
  );
}
