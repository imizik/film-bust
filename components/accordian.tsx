import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowDown,
  faArrowUp,
  faCheck,
} from '@fortawesome/free-solid-svg-icons'
import { Accordion, Text, Table } from '@mantine/core'
import tableData from './tableColor'

export default function AccordionRules() {
  return (
    <Accordion multiple={true}>
     <Accordion.Item label="Arrows" style={{ fontSize: '0.8rem' }}>
      <Text size='xs'>
        <FontAwesomeIcon icon={faArrowDown} /> Guess is too high, try
        something lower
      </Text>
      <br />
      <Text size='xs'>
        <FontAwesomeIcon icon={faArrowUp} /> Guess is too low, try
        something higher
      </Text>
      <br />
      <Text size='xs'>
        <FontAwesomeIcon icon={faCheck} /> Good Job! Exact Match
      </Text>
      <br />
      <br />
      <Text size='xs'>For genres, arrows are for comparing the number of genres between the guess and the movie</Text>
    </Accordion.Item>
    <Accordion.Item label="Colors" style={{ fontSize: '0.8rem' }}>
      <Table>
        <thead>
          <tr>
            <th>Category</th>
            <th style={{color: 'green'}}>Green</th>
            <th style={{color: 'yellow'}}>Yellow</th>
          </tr>
        </thead>
        <tbody>{tableData}</tbody>
      </Table>
    </Accordion.Item>
    <Accordion.Item label="Clues" style={{ fontSize: '0.8rem' }}>
     <Text size='xs' weight={600}>Having trouble guessing?</Text>
     <Text size='xs'>On 5th guess, click button on the top right to get the director&apos;s name</Text> <br/>
     <Text size='xs'>On 7th guess, click button on the top right to get the name of the top 3 billed actors (animated movies might have different roles for cast)</Text>
    </Accordion.Item>
  </Accordion>
  )
}