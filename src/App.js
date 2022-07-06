import PageLayout from 'layouts/PageLayout';
import { AboutUs, Banner, ContactUs, HowAppWorks } from 'components';

const App = () => (
  <PageLayout pageClass="pt-4" loading={false}>
    <Banner />
    <HowAppWorks />
    <AboutUs />
    <ContactUs />
  </PageLayout>
);

export default App;
