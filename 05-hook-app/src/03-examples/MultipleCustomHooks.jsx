import React from 'react'
import { useFetch, useCounter } from '../hooks'
import { LoadingQuote } from './components/LoadingQuote';
import { Quote } from './components/Quote';


export const MultipleCustomHooks = () => {

  const { counter, increment } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/character/${ counter }`);

  return (
    <>
        <h1>Simpsons Quotes</h1>
        <hr />

        {
          isLoading
              ? <LoadingQuote/>
              : <Quote {...data}/>   
        }

        <button 
          className='btn btn-primary' 
          disabled={ isLoading }
          onClick={ () => increment()}>
          Next quot
        </button>
    </>
  )
}
