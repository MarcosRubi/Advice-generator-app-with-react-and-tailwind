import { AdviceList } from "./components/AdviceList";
import Attribution from './components/Footer'

function App() {
   return (
      <main className="bg-slate-800 h-screen min-h-full grid justify-center content-center px-2">
         <div className="bg-slate-700 text-white px-4 pt-6 rounded-md max-w-md shadow-lg shadow-slate-900">
            <AdviceList />
            <Attribution/>
         </div>
      </main>
   );
}

export default App;
