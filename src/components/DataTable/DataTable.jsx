import { useSortableData } from '../../hooks/useSortableData';

export function DataTable({ persons }) {
  const { items, requestSort, sortConfig } = useSortableData(persons);
  const tableHeaders = ['id', 'firstName', 'lastName', 'email', 'phone'];
  const headElements = tableHeaders.map((e) => {
    return (
      <th scope="col" onClick={() => requestSort(e)} key={e}>
        {e} {sortConfig?.key === e ? sortConfig?.direction : ''}
      </th>
    );
  });
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
        <tr>{headElements}</tr>
      </thead>
      <tbody>{items && elements}</tbody>
    </table>
  );
}
