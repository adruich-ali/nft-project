import './App.css';
import { Header, About, Discover, Collections,Artist } from './components/index'
import { Navbar, Footer, Title } from './containers/index'
import AboutTitle from './containers/Title/AboutTitle';

function App() {
  return (
    <div className="App">
      <div id="home">
        <Navbar />
        <Header />
      </div>
      <div id="discover"><Title text="Top artworks This Week" title="Discover" /></div>

      <Discover />
      <div  id="collections">
      <Title text="Top collections this week" title="Collections"/>
      </div>

      <Collections />
      <div id="artists" ><Title text="Top Artist this week" title="Artists" /></div>
   
      <Artist/>
      <div id="about"><AboutTitle title="CREATE AND SELL YOU NFTS WITH SKYNTF"  /></div>

      <About />
      <Footer />
    </div>
  );
}

export default App;
