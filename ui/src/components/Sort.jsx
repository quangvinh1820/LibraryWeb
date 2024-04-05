import React from 'react';

export default function Sort({ fetchData }) {
    const alphabet = [
        'A', 'B', 'C', 'D', 'Đ', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];

    const handleSort = async (char) => {
        try {
            await fetchData(char);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <ul id="myDIV">
            {alphabet.map((char) => (
                <li className="btn" key={char}>
                    <a id="chuca" onClick={() => handleSort(char)}>{char}</a>
                </li>
            ))}
        </ul>
    );
}
