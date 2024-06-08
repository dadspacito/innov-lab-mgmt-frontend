import React, { useState, useEffect } from 'react';
import { Typography, FormControl, Select, Chip, MenuItem, TextField, Button } from '@mui/material';
import GenerateMockKeywords from '../../../Services/utils/GenerateMockKeywords';

// Generate mock keywords
const mockKeywords = GenerateMockKeywords();

const ProjectKeywords = ({ formData, onChange }) => {
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [selectedInterests, setSelectedInterests] = useState([]);
    const [newKeyword, setNewKeyword] = useState('');
    const [selectedKeywords, setSelectedKeywords] = useState([]); // Combined keywords state

    useEffect(() => {
        console.log(mockKeywords);
    }, []);

    // Function to update the combined keywords state
    const updateSelectedKeywords = (skills, interests) => {
        const combinedKeywords = [...skills, ...interests];
        setSelectedKeywords(combinedKeywords);
        onChange('keywords', combinedKeywords); // Optionally notify the parent component
    };

    const handleSkillChange = (event) => {
        const skills = event.target.value;
        setSelectedSkills(skills);
        updateSelectedKeywords(skills, selectedInterests); // Update combined state
    };

    const handleInterestChange = (event) => {
        const interests = event.target.value;
        setSelectedInterests(interests);
        updateSelectedKeywords(selectedSkills, interests); // Update combined state
    };

    const handleNewKeywordChange = (event) => {
        setNewKeyword(event.target.value);
    };

    const handleAddKeyword = () => {
        if (formData.category === 'Skills' && newKeyword) {
            const updatedSkills = [...selectedSkills, newKeyword];
            setSelectedSkills(updatedSkills);
            updateSelectedKeywords(updatedSkills, selectedInterests); // Update combined state
        } else if (formData.category === 'Interests' && newKeyword) {
            const updatedInterests = [...selectedInterests, newKeyword];
            setSelectedInterests(updatedInterests);
            updateSelectedKeywords(selectedSkills, updatedInterests); // Update combined state
        }
        setNewKeyword(''); // Clear the input field
    };

    const handleDeleteKeyword = (keyword, category) => {
        if (category === 'Skills') {
            const updatedSkills = selectedSkills.filter((item) => item !== keyword);
            setSelectedSkills(updatedSkills);
            updateSelectedKeywords(updatedSkills, selectedInterests); // Update combined state
        } else if (category === 'Interests') {
            const updatedInterests = selectedInterests.filter((item) => item !== keyword);
            setSelectedInterests(updatedInterests);
            updateSelectedKeywords(selectedSkills, updatedInterests); // Update combined state
        }
    };

    return (
        <div>
            <Typography variant="h6">Skills</Typography>
            <FormControl fullWidth>
                <Select
                    multiple
                    value={selectedSkills}
                    onChange={handleSkillChange}
                    renderValue={(selected) => (
                        <div>
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                        </div>
                    )}
                >
                    {mockKeywords.find((item) => item.category === 'Skills').keywords.map((keyword) => (
                        <MenuItem key={keyword.id} value={keyword.name}>
                            {keyword.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <Typography variant="h6">Interests</Typography>
            <FormControl fullWidth>
                <Select
                    multiple
                    value={selectedInterests}
                    onChange={handleInterestChange}
                    renderValue={(selected) => (
                        <div>
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                        </div>
                    )}
                >
                    {mockKeywords.find((item) => item.category === 'Interests').keywords.map((keyword) => (
                        <MenuItem key={keyword.id} value={keyword.name}>
                            {keyword.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <Typography variant="h6">Selected Keywords</Typography>
            <div>
                {selectedKeywords.map((keyword) => (
                    <Chip 
                        key={keyword} 
                        label={keyword} 
                        onDelete={() => handleDeleteKeyword(keyword, selectedSkills.includes(keyword) ? 'Skills' : 'Interests')}
                    />
                ))}
            </div>

            <Typography variant="h6">Add New Keyword</Typography>
            <div>
                <TextField
                    label="New Keyword"
                    value={newKeyword}
                    onChange={handleNewKeywordChange}
                    variant="outlined"
                    fullWidth
                />
                <Button onClick={handleAddKeyword} variant="contained" color="primary" sx={{ mt: 2 }}>
                    Add Keyword
                </Button>
            </div>
        </div>
    );
};

export default ProjectKeywords;
