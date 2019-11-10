import React, {useEffect} from 'react';

type Props = {
  action: () => void
}

export default function Inner({action}: Props) {
  useEffect(() => {
    action()
  }, []);
  return <button onClick={() => action()}>Run</button>;
};
