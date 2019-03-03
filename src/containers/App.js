import React, {Component} from 'react';
import './App.css';
import Moods from '../components/Moods/Moods';
import DatePicker from '../components/DatePicker/DatePicker';
import Confirmation from '../components/Confirmation/Confirmation'

class App extends Component {

    defaultMoods = [
        {id: 'hgo9z', moodName: 'gniew', selected: false},
        {id: '8ymb0', moodName: 'nienawisc', selected: false},
        {id: 'z9arl', moodName: 'obraza', selected: false},
        {id: '1vkec', moodName: 'rozdraznienie', selected: false},
        {id: '7w29j', moodName: 'sarkazm', selected: false},
        {id: 'ytzum', moodName: 'wrogosc', selected: false},
        {id: 'oowqc', moodName: 'wscieklosc', selected: false},
        {id: 'cb4ee', moodName: 'zniewazenie', selected: false},
        {id: 'km5ni', moodName: 'zlosc', selected: false},
        {id: 'fsp58', moodName: 'radosc', selected: false},
        {id: '5hn4t', moodName: 'rozluznienie', selected: false},
        {id: '9zgb0', moodName: 'spokoj', selected: false},
        {id: 'ffgcb', moodName: 'sympatia', selected: false},
        {id: '0ms4d', moodName: 'ulga', selected: false},
        {id: 'qgdb0', moodName: 'wzruszenie', selected: false},
        {id: 'i41mq', moodName: 'zachwyt', selected: false},
        {id: 'v1jiw', moodName: 'zadowolenie', selected: false},
        {id: '3kwry', moodName: 'zapal', selected: false},
        {id: 'u78k6', moodName: 'zyczliwosc', selected: false},
        {id: '91t9h', moodName: 'smutek', selected: false},
        {id: 'cr27x', moodName: 'bezradnosc', selected: false},
        {id: '4f8n3', moodName: 'bol', selected: false},
        {id: 'mbfrh', moodName: 'cierpienie', selected: false},
        {id: '6fqxz', moodName: 'odrzucenie', selected: false},
        {id: 'fdiec', moodName: 'porazka', selected: false},
        {id: 'cq9um', moodName: 'rozczarowanie', selected: false},
        {id: 'yfci1', moodName: 'rozgoryczenie', selected: false},
        {id: 'c6m7f', moodName: 'tesknota', selected: false},
        {id: 'cwxyz', moodName: 'uzaleznienie', selected: false},
        {id: 'n4i9b', moodName: 'zranienie', selected: false},
        {id: '6ji18', moodName: 'strach', selected: false},
        {id: 'hhb7w', moodName: 'bojazliwosc', selected: false},
        {id: 'np2fz', moodName: 'dreczenie', selected: false},
        {id: 'a7u44', moodName: 'litosc', selected: false},
        {id: 'kkj4v', moodName: 'lek', selected: false},
        {id: 'jt3bz', moodName: 'niepokoj', selected: false},
        {id: 'ud43s', moodName: 'nieufnosc', selected: false},
        {id: 'uyin7', moodName: 'niesmialosc', selected: false},
        {id: 'o2v3m', moodName: 'obawa', selected: false},
        {id: 'q2ve9', moodName: 'ostroznosc', selected: false},
        {id: 'kq4je', moodName: 'panika', selected: false},
        {id: 'ttn9x', moodName: 'zdenerwowanie', selected: false},
        {id: 'jn27q', moodName: 'zawisc', selected: false},
        {id: '5f5yi', moodName: 'zazdrosc', selected: false},
        {id: 'yomt8', moodName: 'powsciagliwosc', selected: false},
        {id: 'rarky', moodName: 'wstyd', selected: false},
        {id: 'ach5p', moodName: 'lekcewazenie', selected: false},
        {id: 'lpqh5', moodName: 'oszukanie', selected: false},
        {id: 'rt3su', moodName: 'poczucie wyzszosci', selected: false},
        {id: 'bkd7y', moodName: 'poczucie nizszosci', selected: false},
        {id: 'zxfvb', moodName: 'wyrzuty sumienia', selected: false},
        {id: 'ih3fr', moodName: 'zaklopotanie', selected: false}
    ];
    state = {
        moods: this.defaultMoods
    };

    setToday = () => {
        const currentDate = new Date();
        const Today = currentDate.toISOString().split('T')[0];
        this.setState({currentDate: Today});
    };

    updateDateHandler = (event) => {
        const newDate = event.target.value;
        this.setState({currentDate: newDate});

    };

    selectMoodHandler = (id) => {

        const moods = [...this.state.moods];
        const selectedState = moods[id].selected;
        moods[id].selected = !selectedState;

        this.setState({moods: moods});
    };

    saveDataHandler = () => {
        localStorage.setItem(this.state.currentDate, JSON.stringify(this.state.moods));
    };

    populateStateFromLocalStorage = () => {
        const retrievedData = JSON.parse(localStorage.getItem(this.state.currentDate));
        if (retrievedData)
            this.setState({moods: retrievedData});
    };

    provideDataForCurrentDate = (event) => {
        this.updateDateHandler(event);
        this.populateStateFromLocalStorage();
    };



    componentDidMount() {
        this.setToday();
        this.populateStateFromLocalStorage();
    }

    render() {


        return (
            <div>
                <Moods
                    clicked={this.selectMoodHandler}
                    allMoods={this.state.moods}
                />
                <DatePicker
                    changed={(event) => this.provideDataForCurrentDate(event)}
                    value={this.state.currentDate}
                />
                <Confirmation
                    saveData={this.saveDataHandler}
                />
            </div>
        )
    }
}

export default App;
