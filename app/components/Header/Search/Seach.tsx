"use client";

import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

interface Fruit {
    value: string;
    label: string;
}
const films: Fruit[] = [
    { value: 'apple', label: 'りんご' },
    { value: 'banana', label: 'ばなな' },
    { value: 'cherry', label: 'さくらんぼ' },
];

const BasicAutocomplete = () => {
    const [value, setValue] = useState<Fruit | null>(null);

    return (
        <Autocomplete
            sx={{
                width: '200px',
                backgroundColor: 'white',
                marginInline: '1rem'
            }}
            value={value}
            onChange={(_e, newValue: Fruit | null) => {
                setValue(newValue);
            }}
            options={films}
            getOptionLabel={(option) => option.label}
            renderInput={(params) => (
                <TextField {...params} label="食材の名前で検索" variant="outlined" />
            )}
        />
    );
};

export default BasicAutocomplete;