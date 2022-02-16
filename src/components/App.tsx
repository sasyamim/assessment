import styled from 'styled-components';
import mock_data from '../mock/data.json';
import { setDateFormat } from '../logic/dateConveter';
import { useState } from 'react';

const default_categories: string[] = [
  'Surveys and Forms',
  'Digital Marketing',
  'Platform News and Updates',
  'Tips and Best Practise',
  'Data Management',
  'Marketing Analytics',
  'Landing Pages',
  'Ecommerce',
  'Email Marketing',
  'Marketing Automation',
];

const App = (): JSX.Element => {
  const [current_categories, setCurrentCategories] = useState<string>();

  // const setDisable = (name: string): boolean => {
  //   if (current_categories === name) return true;
  //   else return false;
  // };

  return (
    <Main>
      <section>
        <div>
          {default_categories.map((name) => (
            <>
              <button
                // disabled={setDisable(name)}
                onClick={() => {
                  setCurrentCategories(name);
                }}
              >
                {name}
              </button>
            </>
          ))}

          {mock_data.posts.map(({ author, categories }) => (
            <>
              {categories.map(({ name }) =>
                name === current_categories ? (
                  <>
                    <div>
                      <img src={author.avatar} alt={author.name} />
                      {author.name}
                    </div>
                  </>
                ) : null
              )}
            </>
          ))}
        </div>
      </section>
    </Main>
  );
};

export default App;

const Main = styled.main``;
