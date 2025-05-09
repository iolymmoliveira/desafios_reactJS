import { getElectronics } from "../../../data";

interface Electronics {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

export default function Electronics() {
  return (
    <>
      <div className="ds-electronics mr-160 ml-160">
        <ul className="ds-list-products">
          {getElectronics().map((eletronics: Electronics) => (
            <li key={eletronics.id}>
              <p>{eletronics.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}