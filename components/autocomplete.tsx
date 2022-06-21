import { forwardRef, useState } from 'react';
import { Button, Group, Avatar, Text, MantineColor, SelectItemProps, Autocomplete } from '@mantine/core';
import Props from './gameComp'

const transformData = (movies) => {
  return movies.movies.map((item) => ({id: item.id, image: `https://image.tmdb.org/t/p/w500${item.backdrop_path}`, value: item.original_title }));
}

export default function Input(movies) {
  const [selected, setSelected] = useState(null)
  const data = transformData(movies)

  interface ItemProps extends SelectItemProps {
    color: MantineColor;
    description: string;
    image: string;
  }
  // eslint-disable-next-line react/display-name
  const AutoCompleteItem = forwardRef<HTMLDivElement, ItemProps>(
    ({value, image, ...others }: ItemProps, ref) => (
      <div ref={ref} {...others}>
        <Group noWrap>
          <Avatar src={image} />

          <div>
            <Text>{value}</Text>
          </div>
        </Group>
      </div>
    )
  );

  return (
    <>
      <Autocomplete
        placeholder="Select item before submitting"
        itemComponent={AutoCompleteItem}
        data={data}
        filter={(value, item) =>
          item.value.toLowerCase().includes(value.toLowerCase().trim())
        }
        onItemSubmit={(e) => setSelected(e)}
        style={{ width: "500px" }}
      />
      <Button>Guess!</Button>
    </>
  );
}