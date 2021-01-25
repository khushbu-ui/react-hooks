import React,{useState,useMemo,useReducer, useCallback} from 'react';

function UseMemo(){
    const [wordIndex, setWordIndex] = useState(0)
    const words =['hey','where','are','you'];
    const word =words[wordIndex];
    const computeLetterCount = word => {
        let i = 0;
        while (i < 1000) i++;
        return word.length;
    };
    const letterCount = useMemo(() => computeLetterCount(word), [word]);

    const initialCandies = ['snickers', 'dairy milk', 'oreo', 'silk']
    const [candies, setCandies] = useState(initialCandies)
    const dispense = React.useCallback(candy => {
        setCandies(allCandies => allCandies.filter(c => c !== candy))
    })

    return (
        <div>
        <div style={{ padding: '15px' }}>
            <h2>useMemo</h2>
            <h2>Count number of letters</h2>
            <p>"{word}" has {letterCount} letters</p>
            <button
                onClick={() => {
                    const next = wordIndex + 1 === words.length ? 0 : wordIndex + 1;
                    setWordIndex(next);
                }}
            >
                Next word
            </button>
        </div>
            <div>
                <h1>useCallback</h1>
                <div>
                    <div>Available Candy</div>
                    {candies.length === 0 ? (
                        <button onClick={() => setCandies(initialCandies)}>refill</button>
                    ) : (
                        <ul>
                            {candies.map(candy => (
                                <p key={candy}>
                                    <button onClick={() => dispense(candy)}>grab</button> {candy}
                                </p>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}
export default UseMemo;
