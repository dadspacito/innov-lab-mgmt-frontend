//quando aqui chegarmos, criamos uma mock table de keywords (interesses e skills? )
import React, {useState} from 'react'
import {Typography, FormControl, Select, Chip, MenuItem,TextField} from '@mui/material'
import GenerateMockKeywords from './../../../Services/utils/GenerateMockKeywords'

//gerar mock keywords
const mockKeywords = GenerateMockKeywords();
//solução podera ser a criação de um novo array que junta as skills e interesses selecionados 
const ProjectKeywords = ({formData, onChange})=>{
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [selectedInterests, setSelectedInterests] = useState([]);
    const [newKeyword, setNewKeyword] = useState('');
    //aqui será uma selected keyword
    //este state guarda as keywords escolhidas
    const [selectedKeywords, setSelectedKeywords] = useState([]);

    const handleSkillChange = (event) => {
        setSelectedSkills(event.target.value);
    };

    const handleInterestChange = (event) => {
        setSelectedInterests(event.target.value);
    };

    const handleNewKeywordChange = (event) => {
        setNewKeyword(event.target.value);
    };
    const handleAddKeyword = () => {
        // Add the new keyword to the appropriate category (skills or interests)
        if (formData.category === 'Skills') {
            setSelectedSkills([...selectedSkills, newKeyword]);
        } else if (formData.category === 'Interests') {
            setSelectedInterests([...selectedInterests, newKeyword]);
        }
        setNewKeyword('');
    };
    //aqui concatena as selected skills e interests como um array de 2 dimensoes para selected keywords



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
                {selectedSkills.map((keyword) => (
                    <Chip key={keyword} label={keyword} onDelete={() => setSelectedSkills(selectedSkills.filter((item) => item !== keyword))} />
                ))}
                {selectedInterests.map((keyword) => (
                    <Chip key={keyword} label={keyword} onDelete={() => setSelectedInterests(selectedInterests.filter((item) => item !== keyword))} />
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
                <button onClick={handleAddKeyword}>Add Keyword</button>
            </div>
        </div>
    );
    

}
export default ProjectKeywords;