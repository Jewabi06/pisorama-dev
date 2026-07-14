import Image from "next/image";
import { Header } from '../components/Header.js';
import { SmartAddBar } from '../components/SmartAddBar.js';
import { Filter } from '../components/Filter.js';
import { SummaryCard } from '../components/SummaryCard.js';
import { CategoryChart } from '../components/CategoryChart.js';
import { ExpenseLedger } from '../components/ExpenseLedger.js';
import { EmptyState } from '../components/EmptyState.js';

export default function Home() {
  const expenses = [];

  return (
    <>
      {expenses.length === 0 ? (
        <EmptyState />
      ) : (
        <>
          <Header />
          <SmartAddBar />
          <Filter />
          <SummaryCard />
          <CategoryChart />
          <ExpenseLedger />
        </>
      )}
    </>
  );
}
