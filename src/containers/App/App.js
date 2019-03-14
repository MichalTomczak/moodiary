import React, {Component} from 'react';
import './App.css';
import Moods from '../../components/Moods/Moods';
import DatePicker from '../../components/DatePicker/DatePicker';
import Confirmation from '../../components/Confirmation/Confirmation';
import DefaultMoods from '../../data/DefaultMoods';
import NewDatePicker from '../NewDatePicker/NewDatePicker';

class App extends Component {

    constructor(props) {
        super(props);
        const currentDate = new Date().toISOString().split('T')[0];
        this.state = {
            currentDate: currentDate,
            moods: JSON.parse(localStorage.getItem(currentDate)) || DefaultMoods()
        };
    }


    updateDateHandler = (event) => {
        this.setState({
                currentDate: event.target.value
            },
            this.getDataFromStorage
        );
    };

    NewUpdateDateHandler = (date) => {
        this.setState({
                currentDate: date
            },
            this.getDataFromStorage
        );
    };

    selectMoodHandler = (id) => {

        const moods = [...this.state.moods];
        const selectedState = moods[id].selected;
        moods[id].selected = !selectedState;

        this.setState({moods: moods});
    };

    pushDataToStorage = () => {
        localStorage.setItem(this.state.currentDate, JSON.stringify(this.state.moods));
    };

    getDataFromStorage = () => {
        this.setState({moods: JSON.parse(localStorage.getItem(this.state.currentDate)) || DefaultMoods()});
    };


    render() {


        return (
            <div>
                <Moods
                    clicked={this.selectMoodHandler}
                    allMoods={this.state.moods}
                />
                <DatePicker
                    changed={(event) => this.updateDateHandler(event)}
                    value={this.state.currentDate}
                />
                <Confirmation
                    saveData={this.pushDataToStorage}
                />
                <NewDatePicker
                    currentDate={this.state.currentDate}
                    changed={this.NewUpdateDateHandler}
                />
            </div>
        )
    }
}

export default App;
