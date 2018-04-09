import * as React from 'react';
import './App.css';
import Viewer from './components/Viewer';
import AlphaVantage from './AlphaVantage';

interface Props {

}

interface State {
  data?: string;
  symbol?: string;
}

class App extends React.Component {
  client: AlphaVantage;
  data: string;
  state: State;
  constructor(props: Props) {
    super(props);
    const apikey = 'W1TL3BT9IF7JOJZJ';
    this.state = {
      data: undefined,
      symbol: 'AAPL'
    };
    this.client = new AlphaVantage(apikey);
    this.loadSymbol();
  }

  async loadSymbol() {
    const data = await this.client.getTimeSeriesDaily({ symbol: this.state.symbol });
    this.setState({ data });
  }

  render() {
    return (
      <div className="App">
        <input 
          type="text" 
          value={this.state.symbol}
          onChange={(e) => {
            const val = e.target.value as string;
            this.setState({ symbol: val });
          }}
          onKeyPress={(e) => {
            if (e.key !== 'Enter') {
              return;
            }
            global.console.log('submit');
            this.loadSymbol();
          }}
        />
        <Viewer data={this.state.data} />
      </div>
    );
  }
}

export default App;
