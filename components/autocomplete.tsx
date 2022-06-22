import { forwardRef, useState } from 'react';
import { Center, Button, Group, Avatar, Text, MantineColor, SelectItemProps, Autocomplete } from '@mantine/core';
import { useForm } from '@mantine/form';
import {Props, currMovie} from '../utils/types'
import transformData from '../utils/transformData'

export default function Input({movies, handleSubmit}: Props, ) {
  const [selected, setSelected] = useState(null)
  const form = useForm({ initialValues: { name: '' } });
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
      <form onSubmit={form.onSubmit(() => {
        handleSubmit(selected)
        form.reset()
      })}>
        <Center>
          <Autocomplete
            placeholder="Select item before submitting"
            itemComponent={AutoCompleteItem}
            data={data}
            filter={(value, item) =>
              item.value.toLowerCase().includes(value.toLowerCase().trim())
            }
            onItemSubmit={(e) => setSelected(e)}
            style={{ width: "500px" }}
            onChange={(event) => {form.setFieldValue('name', event)}}
            value={form.values.name}
            limit={15}
          />
          <Button type="submit">Guess!</Button>
        </Center>
      </form>

    </>
  );
}