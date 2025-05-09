import { getComputers } from '../../../data.ts';

interface Computer {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

export default function Computers() {
  return (
    <>
      <div className="ds-computers mr-160 ml-160">
        <ul className="ds-list-products">
          {
            getComputers().map((computer : Computer) => (
              <li key={computer.id}>
                <p>{computer.name}</p>
              </li>
            ))
          }
        </ul>
      </div>
    </>
  )
}