import {useState} from 'react';

type Selects = [string[], (id: string) => void];

export default function useSelects(): Selects {
  const [selects, setSelects] = useState<string[]>([]);

  function toggleSelect(id: string): void {
    if (selects.includes(id)) {
      setSelects(state => state.filter(item => item !== id));
    } else {
      setSelects(state => [...state, id]);
    }
  }

  return [selects, toggleSelect];
}
