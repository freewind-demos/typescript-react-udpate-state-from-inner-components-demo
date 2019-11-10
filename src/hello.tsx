import React, {useState} from 'react'
import Inner from './Inner';

export default function Hello() {
  const [names, setNames] = useState<string[]>([]);

  function updateNames(newNames: string[]) {
    // incorrect:
    // setNames([...names, ...newNames])

    // correct:
    setNames(oriNames => [...oriNames, ...newNames])
  }

  return <div>
    <h1>Hello React</h1>
    <div>{JSON.stringify(names)}</div>
    <div>
      <Inner action={() => updateNames(['AAA', 'BBB'])}/>
      <Inner action={() => updateNames(['CCC', 'DDD'])}/>
      <Inner action={() => updateNames(['EEE', 'FFF'])}/>
    </div>
  </div>
};
