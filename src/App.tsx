import './App.css';
import { Header } from './assets/layout/header/Header';
import { Deskription } from './assets/layout/sections/characteristic/Deskription';
import { Contackt } from './assets/layout/sections/contacts/Contackt';
import { Learning } from './assets/layout/sections/learning/Learning';
import { Main } from './assets/layout/sections/main/Main';
import { Projects } from './assets/layout/sections/projects/Projects';
import { Services } from './assets/layout/sections/services/Services';



function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Projects/>
            <Deskription/>
            <Services/>
            <Learning/>
            <Contackt/>
            
        </div>
    );
}

export default App;

