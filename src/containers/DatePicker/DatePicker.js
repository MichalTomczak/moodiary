/**
 * Created by Grucha on 11/03/2019.
 */
import React, {Component} from 'react';
import styles from './DatePicker.module.css';
import Months from '../../data/Months'

class newDatePicker extends Component {

    constructor(props) {
        super(props);

        let day = Number(props.currentDate.split('-')[2]);
        let month = Number(props.currentDate.split('-')[1]);
        let year = Number(props.currentDate.split('-')[0]);

        this.months = Months();

        this.state = {
            day: day,
            month: month,
            year: year,
            daysInMonth: new Date(year, month, 0).getDate()
        };


    }


    getDaysInMonth = (month, year) => {
        return new Date(year, month, 0).getDate()
    };

    updateDate = (event) => {
        let eventProps = [event.target.name, Number(event.target.value)];
        let year = eventProps[0] === 'year' ? eventProps[1] : this.state.year,
            month = eventProps[0] === 'month' ? eventProps[1] : this.state.month,
            day = eventProps[0] === 'day' ? eventProps[1] : this.state.day,
            daysInMonth = this.getDaysInMonth(month, year);
        if (day > daysInMonth) day = daysInMonth;

        this.setState({
                year: year,
                month: month,
                day: day,
                daysInMonth: daysInMonth
            },
            () => {
                if (this.state.month < 10) month = '0' + this.state.month;
                if (this.state.day < 10) day = '0' + this.state.day;
                this.props.changed(year + '-' + month + '-' + day);
            }
        )

    };

    createDaysList = () => {
        let returnedDays = [];
        for (let i = 0; i < this.state.daysInMonth; i++) {
            returnedDays.push(<option value={i + 1}>{i + 1}</option>);
        }
        return returnedDays
    };


    render = () => {
        return (
            <div className={styles.dateBlock}>

                <button
                    onClick={this.updateDate}
                    name="month" value={+this.state.month - 1}
                    disabled={this.state.month === 1}> &lt;&lt;
                </button>
                <button
                    onClick={this.updateDate}
                    name="day" value={+this.state.day - 1}
                    disabled={this.state.day === 1}>&lt;</button>
                <select
                    onChange={this.updateDate}
                    name="day"
                    value={this.state.day}>
                    {this.createDaysList()}
                </select>
                <select
                    onChange={this.updateDate}
                    name="month"
                    value={this.state.month}>
                    {this.months.map((month, index) => <option value={index + 1}>{month}</option>)}
                </select>
                <input
                    onChange={this.updateDate}
                    type="number"
                    min="2019"
                    max="2100"
                    name="year"
                    value={this.state.year}/>
                <button
                    onClick={this.updateDate}
                    name="day" value={+this.state.day + 1}
                    disabled={this.state.day === this.state.daysInMonth}>&gt;</button>
                <button
                    onClick={this.updateDate}
                    name="month" value={+this.state.month + 1} disabled={this.state.month === 12}>&gt;&gt;</button>

            </div>
        )
    }

}

export default newDatePicker;