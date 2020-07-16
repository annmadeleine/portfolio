import React from 'react';
import { colors } from '../../../styles/colors';

interface ColorsProps {
    color: string
}

export default function Colors() {
    const colorItems = colors.map((color) =>
        <li>{color.name} - {color.colorCode}</li>
    );
    return (
        <ul>{colorItems}</ul>
    )
}