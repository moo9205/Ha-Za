import styled from 'styled-components';
import ItemCard from './ItemCard';

const IC = styled.div`
  border: 1px solid black;
  width: 25rem;
  padding: 10px 20px 15px 20px;
  height: 42rem;
  overflow: auto;
`;

const State = styled.div`
  font-weight: bold;
  font-size: 30px;
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
    console.log('1111111:', findItem);
  };
  return (
    <IC>
      <State>{level}</State>
      {list.length === 0
        ? 'Please add your ToDo List'
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
