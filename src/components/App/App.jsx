import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { DataTable } from '../DataTable/DataTable';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../Loader/Loader';
import { useEffect } from 'react';
import { getDataStart } from '../../actions/getDataActions';

function App() {
  const loading = useSelector((state) => state.persons.isLoading);
  const persons = useSelector((state) => state.persons.persons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataStart());
  }, []);

  return (
    <div className="App">
      {loading ? <Loader /> : <DataTable persons={persons} />}
    </div>
  );
}

export default App;
