import StatusLabel, { Status } from './components/status-label';
import AddCompanyButton from './components/add-company-button';

export default function Home() {
  return (
    <main>
      <h1 className="text-lime-800 underline text-xl m-4 italic font-bold">
        My Next
      </h1>
      <AddCompanyButton />
    </main>
  );
}
