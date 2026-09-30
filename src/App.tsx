import { TopBar } from './components/layout/TopBar';
import { Header } from './components/layout/Header';
import { BottomNav } from './components/layout/BottomNav';
import { Footer } from './components/layout/Footer';
import { Container } from './components/ui/Container';
import { Hero } from './components/sections/Hero';
import { Audience } from './components/sections/Audience';
import { Terms } from './components/sections/Terms';
import { Process } from './components/sections/Process';
import { Popular } from './components/sections/Popular';
import { LeadForm } from './components/sections/LeadForm';

export function App() {
  return (
    <>
      <TopBar />
      <Header />
      <Container>
        <main>
          <Hero />
          <Audience />
          <Terms />
          <Process />
          <Popular />
          <LeadForm />
        </main>
      </Container>
      <Footer />
      <BottomNav />
    </>
  );
}
