 import ReactDOM from 'react-dom';
 import GifList from './components/GifList';
 import SearchBar from './components/SearchBar';
 import request from 'superagent';
  
  class App extends React.Component {
   constructor(props) {
     super(props);
 
     this.state = {
       gifs: [
         {
           id: 1,
           url: 'http://fakeimg.pl/300/'
         },
         {
           id: 2,
           url: 'http://fakeimg.pl/300/'
         },
         {
           id: 3,
           url: 'http://fakeimg.pl/300/'
         }
       ]
     }
   }

      handleTermChange(term) {
      console.log(term);
    }

    class App extends React.Component {
      return (
        <div>
          <SearchBar onTermChange={this.handleTermChange} />
          <GifList gifs={this.state.gifs} />
        </div>
      );
    }

ReactDOM.render(<App />, document.getElementById('app'));