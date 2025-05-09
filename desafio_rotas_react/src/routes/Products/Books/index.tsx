import { getBooks } from "../../../data.ts";

interface Books {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

export default function Books() {
  return (
    <>
      <div className="ds-books mr-160 ml-160">
        <ul className="ds-list-products">
          {getBooks().map((books: Books) => (
            <li key={books.id}>
              <p>{books.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
