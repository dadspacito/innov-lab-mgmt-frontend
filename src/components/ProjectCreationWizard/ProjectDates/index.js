//date picker tem de ser construido por causa de dependencias such as localization provider e adapter days 


import React from 'react';
import DatePickerComponent from '../../DatePicker';

const ProjectDates = ({ formData, onChange }) => {
    const handleStartDateChange = (date) => {
        onChange('startDate', date.toJSON());
    };

    const handleEndDateChange = (date) => {
        onChange('endDate', date.toJSON());
    };

    return (
        <div>
            <DatePickerComponent/>
        </div>
    );
};

export default ProjectDates;
