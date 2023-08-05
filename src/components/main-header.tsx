import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDebounce } from 'usehooks-ts';

interface MainHeaderProps {
  setVideos: React.Dispatch<React.SetStateAction<Video[]>>;
}

interface FormInputs {
  query: string;
}

export function MainHeader(props: MainHeaderProps) {
  const { setVideos } = props;
  const { register, handleSubmit, watch, setValue } = useForm<FormInputs>();
  const { query } = watch();
  const onSubmit: SubmitHandler<FormInputs> = async ({ query }) => {
    try {
      const response = await fetch('/api/videos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
          limit: 18,
        }),
      });
      const data = await response.json();

      if ('error' in data) throw new Error(data.message);

      const { videos } = data;

      setVideos(videos);
      setShowSuggestions(false);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error);
        alert(error.message);
      }
    }
  };
  const debouncedQuery = useDebounce(query, 500);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      if (!debouncedQuery) {
        setSuggestions([]);
        return;
      }
      try {
        const response = await fetch('/api/suggestions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: debouncedQuery,
            limit: 18,
          }),
        });
        const data = await response.json();

        if ('error' in data) throw new Error(data.message);

        const { suggestions } = data;

        setSuggestions(suggestions);
      } catch (error) {
        if (error instanceof Error) {
          console.error(error);
          alert(error.message);
        }
      }
    })();
  }, [debouncedQuery]);

  return (
    <header className='bg-red-500 py-4 shadow sticky top-0'>
      <div className='container flex flex-col md:flex-row justify-between items-center'>
        <h1 className='font-bold text-2xl md:text-xl text-white mb-4 md:mb-0'>
          <a onClick={() => setVideos([])}>Youtube Downloader</a>
        </h1>
        <nav className='w-full md:w-auto relative'>
          <form className='flex items-center' onSubmit={handleSubmit(onSubmit)}>
            <input
              className='rounded-l-lg p-2 pl-4 w-full lg:w-[275px]'
              placeholder='Search'
              autoComplete='off'
              title='Search'
              {...register('query')}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
              onFocus={() => setShowSuggestions(true)}
            />
            <button
              className='text-white bg-red-600 hover:bg-red-700 focus:bg-red-700 transition-colors duration-100 px-6 py-2 rounded-r-lg'
              type='submit'
              title='search'
              id='form-submit-button'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                />
              </svg>
            </button>
          </form>
          {showSuggestions && suggestions.length > 0 && (
            <div className='absolute left-0 top-12 w-full rounded-lg bg-white shadow overflow-auto text-sm'>
              {suggestions.map((suggestion) => (
                <p
                  key={suggestion}
                  className='p-4 cursor-default md:cursor-pointer hover:bg-gray-100'
                  onClick={() => {
                    setValue('query', suggestion);
                    document
                      .querySelector<HTMLButtonElement>('#form-submit-button')
                      ?.click();
                  }}
                >
                  {suggestion}
                </p>
              ))}
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
