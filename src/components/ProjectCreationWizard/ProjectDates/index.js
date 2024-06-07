import React from 'react';
import { DatePicker } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
const ProjectDates = ({ formData, onChange }) => {
    const handleStartDateChange = (date) => {
        onChange('startDate', date.toJSON());
    };

    const handleEndDateChange = (date) => {
        onChange('endDate', date.toJSON());
    };

    return (
        <div>
            <DatePicker
                label="Start Date"
                value={formData.startDate || null}
                onChange={handleStartDateChange}
                renderInput={(params) => <TextField {...params} />}
            />
            <DatePicker
                label="End Date"
                value={formData.endDate || null}
                onChange={handleEndDateChange}
                renderInput={(params) => <TextField {...params} />}
            />
        </div>
    );
};

export default ProjectDates;
