import './style.css';
import React, { useState } from 'react';

type Filters = {
  minPrice?: number;
  maxPrice?: number;
}

type Props = {
  onFilter: (minPrice: number, maxPrice: number) => void;
}

export default function Filter({ onFilter }: Props) {

  const [filters, setFilters] = useState<Filters>({});

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event?.target.value;
    const name = event?.target.name;

    setFilters({ ...filters, [name]: value });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    onFilter(
      filters.minPrice || 0,
      filters.maxPrice || Number.MAX_VALUE
    )
  }

  return (
    <form className="dsf-filter-container" onSubmit={handleSubmit}>
      <input 
        className='dsf-input'
        name='minPrice'
        value={filters.minPrice || ''}
        type='text'
        placeholder="Preço mínimo"
        onChange={handleInputChange}
      />
      <input
        className='dsf-input'
        name='maxPrice'
        value={filters.maxPrice || ''}
        type='text'
        placeholder="Preço máximo"
        onChange={handleInputChange}
      />
      <button 
        className='dsf-filter-button'
        type='submit'
      >
        Filtrar
      </button>
    </form>
  );
}