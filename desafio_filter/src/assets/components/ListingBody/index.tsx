import './style.css';
import Filter from "../Filter";
import Listing from '../Listing';

export default function ListingBody() {
  return (
    <div className="dsf-listing-body-container">
      <Filter />
      <Listing/>
    </div>
  );
}