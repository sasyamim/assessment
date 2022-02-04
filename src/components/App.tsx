import style from 'styled-components';
import mock_data from '../mock/data.json';

const App = (): JSX.Element => {
  console.log(mock_data.posts);

  return (
    <main>
      <h1>hello dillahrahim</h1>
    </main>
  );
};

export default App;
