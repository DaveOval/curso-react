import React from 'react'
import { useFetch, useCounter } from '../hooks'
import { LoadingQuote } from '../03-examples/components/LoadingQuote';
import { Quote } from '../03-examples/components/Quote';


export const Layout = () => {

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