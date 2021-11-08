import styled from 'styled-components';
import ItemCard from './ItemCard';
import { Colors } from '../utils/_var';

const IC = styled.div`
  border: 1px solid black;
  /* width: 25rem; */
  padding: 10px 20px 15px 20px;
  /* height: 42rem; */
  overflow: auto;
  /* modified values */
  width: 100%;
  height: 70vh;
  margin: auto 1rem;
  border: 1px solid ${Colors.mediumGray};
  color: ${Colors.mediumGray};
`;

const State = styled.div`
  font-weight: bold;
  /* font-size: 30px; */
  /* modified values */
  font-size: 1.7rem;
`;

type ItemContainerProps = {
  level: string;
  list: { id: number; type: string; content: string }[];
};

function ItemContainer({ level, list }: ItemContainerProps) {
  const changeContent = (id: number, content: string) => {
    const findItem = list.filter((el) => {
      return el.id === id;
    })[0];
    findItem.content = content;
    // console.log('1111111:', findItem);
  };
  return (
    <IC>
      <State>{level}</State>
      {list.length === 0 && level === 'ToDo'
        ? 'Please add your New ToDo List'
        : list.length === 0 && level === 'Doing'
        ? 'Please add your Doing List'
        : list.length === 0 && level === 'Done'
        ? 'Please add your Done List'
        : list
            .slice(0)
            .reverse()
            .filter((el: { id: number; content: string; type: string }) => {
              return el.type === level;
            })
            .map((el, key) => {
              return (
                <ItemCard
                  id={el.id}
                  key={key}
                  content={el.content}
                  type={el.type}
                  changeContent={changeContent}
                />
              );
            })}
    </IC>
  );
}

export default ItemContainer;
