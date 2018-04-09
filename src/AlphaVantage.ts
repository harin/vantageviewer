const HOST = 'https://www.alphavantage.co';

class AlphaVantage {
    apikey?: string | null;
    constructor(apikey: string) {
        this.apikey = apikey;
    }

    async getTimeSeriesDaily({ symbol}: { symbol?: string | null }) {
        const target = `${HOST}/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${this.apikey}`;
        const resp = await fetch(target);
        const data = await resp.json();
        return data;
    }
}

export default AlphaVantage;
