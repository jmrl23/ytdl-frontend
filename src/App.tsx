import { MainHeader, MainFooter, MainView } from '@/components';
import { useState, Fragment } from 'react';

function App() {
  const [videos, setVideos] = useState<Video[]>([]);

  return (
    <Fragment>
      <MainHeader setVideos={setVideos} />
      <MainView videos={videos} />
      <MainFooter />
    </Fragment>
  );
}

export default App;
