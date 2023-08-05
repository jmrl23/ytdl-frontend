import { useState } from 'react';

interface MainViewProps {
  videos: Video[];
}

export function MainView(props: MainViewProps) {
  const { videos } = props;

  if (videos.length < 1) {
    return <HomeView />;
  }

  return <VideosView videos={videos} />;
}

export function HomeView() {
  return (
    <div className='h-[calc(100vh-8rem)] place-items-center grid'>
      <div className='container text-center'>
        <div className='w-full max-w-[500px] mx-auto'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='100%'
            xmlSpace='preserve'
            y='0'
            x='0'
            id='Layer_1'
            version='1.1'
            viewBox='-57.15 -21.25 495.3 127.5'
          >
            <g id='g7433'>
              <path
                id='path7429'
                d='M118.9 13.3c-1.4-5.2-5.5-9.3-10.7-10.7C98.7 0 60.7 0 60.7 0s-38 0-47.5 2.5C8.1 3.9 3.9 8.1 2.5 13.3 0 22.8 0 42.5 0 42.5s0 19.8 2.5 29.2C3.9 76.9 8 81 13.2 82.4 22.8 85 60.7 85 60.7 85s38 0 47.5-2.5c5.2-1.4 9.3-5.5 10.7-10.7 2.5-9.5 2.5-29.2 2.5-29.2s.1-19.8-2.5-29.3z'
                fill='red'
              ></path>
              <path
                id='polygon7431'
                fill='#fff'
                d='M48.6 24.3v36.4l31.6-18.2z'
              ></path>
            </g>
            <g id='g7451'>
              <g id='g7449'>
                <path
                  id='path7435'
                  d='M176.3 77.4c-2.4-1.6-4.1-4.1-5.1-7.6-1-3.4-1.5-8-1.5-13.6v-7.7c0-5.7.6-10.3 1.7-13.8 1.2-3.5 3-6 5.4-7.6 2.5-1.6 5.7-2.4 9.7-2.4 3.9 0 7.1.8 9.5 2.4 2.4 1.6 4.1 4.2 5.2 7.6 1.1 3.4 1.7 8 1.7 13.8v7.7c0 5.7-.5 10.2-1.6 13.7-1.1 3.4-2.8 6-5.2 7.6-2.4 1.6-5.7 2.4-9.8 2.4-4.2-.1-7.6-.9-10-2.5zm13.5-8.4c.7-1.7 1-4.6 1-8.5V43.9c0-3.8-.3-6.6-1-8.4-.7-1.8-1.8-2.6-3.5-2.6-1.6 0-2.8.9-3.4 2.6-.7 1.8-1 4.6-1 8.4v16.6c0 3.9.3 6.8 1 8.5.6 1.7 1.8 2.6 3.5 2.6 1.6 0 2.7-.8 3.4-2.6z'
                  className='st2'
                ></path>
                <path
                  id='path7437'
                  d='M360.9 56.3V59c0 3.4.1 6 .3 7.7.2 1.7.6 3 1.3 3.7.6.8 1.6 1.2 3 1.2 1.8 0 3-.7 3.7-2.1.7-1.4 1-3.7 1.1-7l10.3.6c.1.5.1 1.1.1 1.9 0 4.9-1.3 8.6-4 11-2.7 2.4-6.5 3.6-11.4 3.6-5.9 0-10-1.9-12.4-5.6-2.4-3.7-3.6-9.4-3.6-17.2v-9.3c0-8 1.2-13.8 3.7-17.5 2.5-3.7 6.7-5.5 12.6-5.5 4.1 0 7.3.8 9.5 2.3 2.2 1.5 3.7 3.9 4.6 7 .9 3.2 1.3 7.6 1.3 13.2v9.1h-20.1zm1.5-22.4c-.6.8-1 2-1.2 3.7-.2 1.7-.3 4.3-.3 7.8v3.8h8.8v-3.8c0-3.4-.1-6-.3-7.8-.2-1.8-.7-3-1.3-3.7-.6-.7-1.6-1.1-2.8-1.1-1.4-.1-2.3.3-2.9 1.1z'
                  className='st2'
                ></path>
                <path
                  id='path7439'
                  d='M147.1 55.3L133.5 6h11.9l4.8 22.3c1.2 5.5 2.1 10.2 2.7 14.1h.3c.4-2.8 1.3-7.4 2.7-14l5-22.4h11.9L159 55.3v23.6h-11.8V55.3z'
                  className='st2'
                ></path>
                <path
                  id='path7441'
                  d='M241.6 25.7V79h-9.4l-1-6.5h-.3c-2.5 4.9-6.4 7.4-11.5 7.4-3.5 0-6.1-1.2-7.8-3.5-1.7-2.3-2.5-5.9-2.5-10.9V25.7h12v39.1c0 2.4.3 4.1.8 5.1s1.4 1.5 2.6 1.5c1 0 2-.3 3-1 1-.6 1.7-1.4 2.1-2.4V25.7z'
                  className='st2'
                ></path>
                <path
                  id='path7443'
                  d='M303.1 25.7V79h-9.4l-1-6.5h-.3c-2.5 4.9-6.4 7.4-11.5 7.4-3.5 0-6.1-1.2-7.8-3.5-1.7-2.3-2.5-5.9-2.5-10.9V25.7h12v39.1c0 2.4.3 4.1.8 5.1s1.4 1.5 2.6 1.5c1 0 2-.3 3-1 1-.6 1.7-1.4 2.1-2.4V25.7z'
                  className='st2'
                ></path>
                <path
                  id='path7445'
                  d='M274.2 15.7h-11.9v63.2h-11.7V15.7h-11.9V6h35.5z'
                  className='st2'
                ></path>
                <path
                  id='path7447'
                  d='M342.8 34.2c-.7-3.4-1.9-5.8-3.5-7.3s-3.9-2.3-6.7-2.3c-2.2 0-4.3.6-6.2 1.9-1.9 1.2-3.4 2.9-4.4 4.9h-.1V3.3h-11.6v75.6h9.9l1.2-5h.3c.9 1.8 2.3 3.2 4.2 4.3 1.9 1 3.9 1.6 6.2 1.6 4.1 0 7-1.9 8.9-5.6 1.9-3.7 2.9-9.6 2.9-17.5v-8.4c-.1-6.1-.4-10.8-1.1-14.1zm-11 21.7c0 3.9-.2 6.9-.5 9.1-.3 2.2-.9 3.8-1.6 4.7-.8.9-1.8 1.4-3 1.4-1 0-1.9-.2-2.7-.7-.8-.5-1.5-1.2-2-2.1V38.1c.4-1.4 1.1-2.6 2.1-3.6 1-.9 2.1-1.4 3.2-1.4 1.2 0 2.2.5 2.8 1.4.7 1 1.1 2.6 1.4 4.8.3 2.3.4 5.5.4 9.6v7z'
                  className='st2'
                ></path>
              </g>
            </g>
          </svg>
        </div>
        <h2 className='text-red-500 font-bold text-2xl my-4'>Downloader</h2>
        <p>
          Download videos from{' '}
          <a className='text-red-500 font-bold' href='https://www.youtube.com/'>
            youtube
          </a>{' '}
          in MP3 or MP4 format
        </p>
      </div>
    </div>
  );
}

interface ViewVideoProps {
  videos: Video[];
}

export function VideosView(props: ViewVideoProps) {
  const { videos } = props;

  return (
    <main className='min-h-[calc(100vh-8rem)]'>
      <div className='container grid md:grid-cols-3 gap-4 py-4'>
        {videos.map((video) => (
          <VideoCard key={video.videoId} video={video} />
        ))}
      </div>
    </main>
  );
}

interface VideoCardProps {
  key: string;
  video: Video;
}

export function VideoCard(props: VideoCardProps) {
  const { video } = props;
  const [isViewingVideo, setIsViewingVideo] = useState<boolean>(false);

  return (
    <div className='rounded-lg mb-auto overflow-hidden shadow'>
      <header>
        <div>
          {!isViewingVideo ? (
            <img src={video.thumbnail} alt={video.title} />
          ) : (
            <iframe
              className='w-full min-h-[185px]'
              src={`https://www.youtube.com/embed/${video.videoId}?rel=0&enablejsapi=1&autoplay=1`}
              allow='autoplay; encrypted-media'
              title={video.title}
            />
          )}
        </div>
        <h2 className='m-4 px-4 text-ellipsis border-l-4 border-l-red-500 font-bold'>
          {video.title}
        </h2>
        <p className='text-slate-900/50 text-sm mx-4 font-bold mb-4'>
          {video.author.name}
        </p>
      </header>
      <section className='flex items-center text-white justify-between bg-red-700'>
        <a
          className='bg-red-500 hover:bg-red-700 transition-color duration-100 w-1/3 p-4 flex justify-center'
          href={`/api/download?type=audio&video_id=${video.videoId}`}
          target='_blank'
          download
          title='Download as audio'
          onClick={() => alert('Requesting download')}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-6 h-6'
          >
            <path
              fillRule='evenodd'
              d='M19.952 1.651a.75.75 0 01.298.599V16.303a3 3 0 01-2.176 2.884l-1.32.377a2.553 2.553 0 11-1.403-4.909l2.311-.66a1.5 1.5 0 001.088-1.442V6.994l-9 2.572v9.737a3 3 0 01-2.176 2.884l-1.32.377a2.553 2.553 0 11-1.402-4.909l2.31-.66a1.5 1.5 0 001.088-1.442V9.017 5.25a.75.75 0 01.544-.721l10.5-3a.75.75 0 01.658.122z'
              clipRule='evenodd'
            />
          </svg>
        </a>
        <button
          type='button'
          className='bg-red-500 hover:bg-red-700 transition-color duration-100 w-1/3 p-4 flex justify-center'
          title='View video'
          onClick={() => setIsViewingVideo((value) => !value)}
        >
          {!isViewingVideo && (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='w-6 h-6'
            >
              <path
                fillRule='evenodd'
                d='M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z'
                clipRule='evenodd'
              />
            </svg>
          )}
          {isViewingVideo && (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='w-6 h-6'
            >
              <path
                fillRule='evenodd'
                d='M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z'
                clipRule='evenodd'
              />
            </svg>
          )}
        </button>
        <a
          className='bg-red-500 hover:bg-red-700 transition-color duration-100 w-1/3 p-4 flex justify-center'
          href={`/api/download?type=video&video_id=${video.videoId}`}
          target='_blank'
          download
          title='Download as video'
          onClick={() => alert('Requesting download')}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-6 h-6'
          >
            <path
              fillRule='evenodd'
              d='M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zm1.5 0v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5A.375.375 0 003 5.625zm16.125-.375a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5A.375.375 0 0021 7.125v-1.5a.375.375 0 00-.375-.375h-1.5zM21 9.375A.375.375 0 0020.625 9h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zM4.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5zM3.375 15h1.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h1.5a.375.375 0 00.375-.375v-1.5A.375.375 0 004.875 9h-1.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375zm4.125 0a.75.75 0 000 1.5h9a.75.75 0 000-1.5h-9z'
              clipRule='evenodd'
            />
          </svg>
        </a>
      </section>
    </div>
  );
}
