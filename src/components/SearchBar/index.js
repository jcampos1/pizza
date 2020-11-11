import React, { useState } from 'react';
import { Button, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import { usePizza } from '../../context/PizzaContext';

const SearchBar = () => {
    const [search, setSearch] = useState(null);
    const { applyFilter } = usePizza();

    const onClickSearch = () => 
        applyFilter(search)

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            onClickSearch();
        }
    }

    /**
     * handle search change
     * @param {Object} e event
     */
    const onSearchChange = e =>
        setSearch(e.target.value)


    return (
        <InputGroup size="sm">
            <Input
                onChange={onSearchChange}
                placeholder="Nombre o descripción de la tienda ..."
                onKeyDown={handleKeyDown}
            />
            <InputGroupAddon addonType="append">
                <Button
                    type="button"
                    color="primary"
                    onClick={onClickSearch}>Buscar</Button>
            </InputGroupAddon>
        </InputGroup>
    )
}

export default SearchBar