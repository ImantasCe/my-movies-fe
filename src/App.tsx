import { useQuery } from 'react-query';
import { fetchStatus } from 'api/health';
import MainLayout from 'components/MainLayout';
import Header from 'components/Header/Header';
import Footer from 'components/Footer';

function App(): JSX.Element {
  const { data: healthy } = useQuery('status', fetchStatus);

  return (
    <MainLayout footer={<Footer />} header={<Header />}>
      <p>Tell me about API Status: {healthy ? 'Hooray! API Is running 💪' : 'Hm, something is wrong'}</p>
    </MainLayout>
  );
}

export default App;
