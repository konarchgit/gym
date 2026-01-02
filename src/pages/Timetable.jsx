import React, { useState } from 'react';
import ShopHero from '../components/Shop/ShopHero';
import './Timetable.css';

const scheduleData = [
    // format: { day: 'Monday', time: '07.00 - 08.00', class: 'OPEN GYM', instructor: '', category: 'Gym' }
    { day: 'Monday', time: '06.00 - 07.00', class: 'OPEN GYM', instructor: '', category: 'Gym' },
    { day: 'Monday', time: '07.00 - 08.00', class: 'OPEN GYM', instructor: '', category: 'Gym' },
    { day: 'Monday', time: '10.00 - 11.00', class: 'OPEN GYM', instructor: '', category: 'Gym' },
    { day: 'Monday', time: '11.00 - 12.00', class: 'OPEN GYM', instructor: '', category: 'Gym' },
    { day: 'Monday', time: '12.00 - 13.00', class: 'POWER LIFTING', instructor: 'JOE BELL', category: 'Powerlifting' },
    { day: 'Monday', time: '18.00 - 19.00', class: 'CROSSFIT CLASS', instructor: 'MADISON FREN', category: 'Crossfit' },
    { day: 'Monday', time: '19.00 - 20.00', class: 'CROSSFIT CLASS', instructor: 'MADISON FREN', category: 'Crossfit' },
    { day: 'Monday', time: '20.00 - 21.00', class: 'CARDIO BURN', instructor: 'ANNA SIMMS JR.', category: 'Cardio' },

    { day: 'Tuesday', time: '06.00 - 07.00', class: 'CROSSFIT CLASS', instructor: 'MADISON FREN', category: 'Crossfit' },
    { day: 'Tuesday', time: '08.00 - 12.00', class: 'OPEN GYM', instructor: '', category: 'Gym', span: 4 },
    { day: 'Tuesday', time: '14.00 - 15.00', class: 'OPEN GYM', instructor: '', category: 'Gym' },
    { day: 'Tuesday', time: '18.00 - 19.00', class: 'POWER LIFTING', instructor: 'JOE BELL', category: 'Powerlifting' },

    { day: 'Wednesday', time: '08.00 - 09.00', class: 'POWER LIFTING', instructor: 'JOE BELL', category: 'Powerlifting' },
    { day: 'Wednesday', time: '12.00 - 13.00', class: 'CARDIO BURN', instructor: 'ANNA SIMMS JR.', category: 'Cardio' },
    { day: 'Wednesday', time: '14.00 - 15.00', class: 'OPEN GYM', instructor: '', category: 'Gym' },

    { day: 'Friday', time: '08.00 - 09.00', class: 'POWER LIFTING', instructor: 'JOE BELL', category: 'Powerlifting' },
    { day: 'Friday', time: '10.00 - 11.00', class: 'OPEN GYM', instructor: '', category: 'Gym' },
    { day: 'Friday', time: '12.00 - 13.00', class: 'CROSSFIT CLASS', instructor: 'MADISON FREN', category: 'Crossfit' },
    { day: 'Friday', time: '20.00 - 21.00', class: 'CARDIO BURN', instructor: 'ANNA SIMMS JR.', category: 'Cardio' },

    { day: 'Saturday', time: '07.00 - 08.00', class: 'CARDIO BURN', instructor: 'ANNA SIMMS JR.', category: 'Cardio' },
    { day: 'Saturday', time: '10.00 - 11.00', class: 'OPEN GYM', instructor: '', category: 'Gym' },
    { day: 'Saturday', time: '12.00 - 13.00', class: 'CROSSFIT CLASS', instructor: 'MADISON FREN', category: 'Crossfit' },

    { day: 'Sunday', time: '08.00 - 09.00', class: 'OPEN GYM', instructor: '', category: 'Gym' },
];

const timeSlots = [
    '06.00 - 07.00', '07.00 - 08.00', '08.00 - 09.00', '09.00 - 10.00',
    '10.00 - 11.00', '11.00 - 12.00', '12.00 - 13.00', '13.00 - 14.00',
    '14.00 - 15.00', '15.00 - 16.00', '18.00 - 19.00', '19.00 - 20.00', '20.00 - 21.00'
];

const days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];

const Timetable = () => {
    const [filter, setFilter] = useState('ALL EVENTS');
    const categories = ['ALL EVENTS', 'CARDIO', 'CROSSFIT', 'GYM', 'POWERLIFTING'];

    const filteredSchedule = scheduleData.filter(item =>
        filter === 'ALL EVENTS' || item.category.toUpperCase() === filter
    );

    const getCellContent = (day, time) => {
        const item = filteredSchedule.find(s => s.day.toUpperCase() === day && s.time === time);
        if (!item) return null;
        return (
            <div className={`timetable-item ${item.category.toLowerCase()}`}>
                <div className="item-title">{item.class}</div>
                {item.instructor && <div className="item-instructor">{item.instructor}</div>}
            </div>
        );
    };

    return (
        <div className="timetable-page">
            <ShopHero title="TIMETABLE" />

            <div className="timetable-content">
                <div className="container">
                    <h2 className="timetable-heading">CLASSES AND WORKING HOURS</h2>

                    <div className="timetable-filters">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                                onClick={() => setFilter(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="timetable-grid-wrapper">
                        <table className="timetable-grid">
                            <thead>
                                <tr>
                                    <th></th>
                                    {days.map(day => <th key={day}>{day}</th>)}
                                </tr>
                            </thead>
                            <tbody>
                                {timeSlots.map(time => (
                                    <tr key={time}>
                                        <td className="time-slot-label">{time}</td>
                                        {days.map(day => (
                                            <td key={`${day}-${time}`}>
                                                {getCellContent(day, time)}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timetable;
