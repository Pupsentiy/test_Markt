import { CellModal } from '@/components/CellModal';
import { Header } from '@/components/Header';
import { PageLoader } from '@/components/PageLoader';
import { MainPage } from '@/pages/MainPage';
import { Suspense, useCallback, useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false);

  const onShowModal = useCallback(() => setShowModal(true), []);
  const onCloseModal = useCallback(() => setShowModal(false), []);
  return (
    <main>
      <div className={'container'}>
        <div className="container_inner">
          <div className="column"></div>
          <div className="column"></div>
          <div className="column"></div>
        </div>
        <Suspense fallback={<PageLoader />}>
          <Header />
          <MainPage onShowModal={onShowModal} />
          <CellModal onCloseModal={onCloseModal} onShowModal={onShowModal} showModal={showModal} />
        </Suspense>
      </div>
    </main>
  );
}

export default App;
