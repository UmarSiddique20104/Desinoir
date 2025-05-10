import React from 'react';

const StyledText = ({ text }: any) => {
    const words = text?.split(' '); // Split the text into words

    return (
        <span className="">
            {words?.length && words.map((word: string, index: number) => (
                <React.Fragment key={index}>
                    {/* Apply bold styling to the first word and every third word after the first */}
                    {(index === 0 || (index > 0 && (index + 1) % 4 === 0)) ? (
                        <span className="font-medium">{word}</span>
                    ) : (
                        word
                    )}
                    {/* Add a space after each word except the last one */}
                    {index < words.length - 1 ? ' ' : ''}
                </React.Fragment>
            ))}
        </span>
    );
};


export default StyledText