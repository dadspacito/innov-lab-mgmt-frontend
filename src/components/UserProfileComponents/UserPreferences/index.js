// PreferencesSection.js
import React, { useState } from 'react';
import GenerateMockKeywords from '../../../Services/utils/GenerateMockKeywords';
import { Button, Chip, Dialog, DialogActions, DialogContent, DialogTitle, TextField, List, ListItem, ListItemText, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CloseIcon from '@mui/icons-material/Close';
import './style.css'; // Import the CSS file

const UserPreferences = ({ user }) => {
  const mockKeywords = GenerateMockKeywords();
  const [selectedSkills, setSelectedSkills] = useState(user.skills || []);
  const [selectedInterests, setSelectedInterests] = useState(user.interests || []);
  const [newSkill, setNewSkill] = useState('');
  const [newInterest, setNewInterest] = useState('');
  const [skillModalOpen, setSkillModalOpen] = useState(false);
  const [interestModalOpen, setInterestModalOpen] = useState(false);

  // Open and close modal handlers
  const handleSkillModalOpen = () => setSkillModalOpen(true);
  const handleSkillModalClose = () => setSkillModalOpen(false);
  const handleInterestModalOpen = () => setInterestModalOpen(true);
  const handleInterestModalClose = () => setInterestModalOpen(false);

  // Adding new skill
  const handleAddSkill = () => {
    if (newSkill && !selectedSkills.includes(newSkill)) {
      setSelectedSkills([...selectedSkills, newSkill]);
      setNewSkill(''); // Clear input field
    }
  };

  // Adding new interest
  const handleAddInterest = () => {
    if (newInterest && !selectedInterests.includes(newInterest)) {
      setSelectedInterests([...selectedInterests, newInterest]);
      setNewInterest(''); // Clear input field
    }
  };

  // Adding mock skill to user
  const handleAddMockSkill = (skill) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  // Adding mock interest to user
  const handleAddMockInterest = (interest) => {
    if (!selectedInterests.includes(interest)) {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  return (
    <div className="preferences-section">
      <h2>Preferences</h2>
      {/* Privacy Toggle */}
      <label>
        <input type="checkbox" checked={user.private} readOnly />
        Private Profile
      </label>

      {/* Skills Section */}
      <div className="skills-section">
        <h3>Skills</h3>
        <div className="chips-container">
          {selectedSkills.map((skill, index) => (
            <Chip key={index} label={skill} className="chip" />
          ))}
          <IconButton onClick={handleSkillModalOpen} className="add-icon">
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
      </div>

      {/* Interests Section */}
      <div className="interests-section">
        <h3>Interests</h3>
        <div className="chips-container">
          {selectedInterests.map((interest, index) => (
            <Chip key={index} label={interest} className="chip" />
          ))}
          <IconButton onClick={handleInterestModalOpen} className="add-icon">
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
      </div>

      

      {/* Skills Modal */}
      <Dialog open={skillModalOpen} onClose={handleSkillModalClose}>
        <DialogTitle>
          Add Skills
          <IconButton className="close-button" onClick={handleSkillModalClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <List>
            {mockKeywords.find(category => category.category === 'Skills').keywords.map(skill => (
              <ListItem button key={skill.id} onClick={() => handleAddMockSkill(skill.name)}>
                <ListItemText primary={skill.name} />
              </ListItem>
            ))}
          </List>
          <TextField
            label="Add new skill"
            variant="outlined"
            value={newSkill}
            onChange={e => setNewSkill(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddSkill} variant="contained">Add Skill</Button>
        </DialogActions>
      </Dialog>

      {/* Interests Modal */}
      <Dialog open={interestModalOpen} onClose={handleInterestModalClose}>
        <DialogTitle>
          Add Interests
          <IconButton className="close-button" onClick={handleInterestModalClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <List>
            {mockKeywords.find(category => category.category === 'Interests').keywords.map(interest => (
              <ListItem button key={interest.id} onClick={() => handleAddMockInterest(interest.name)}>
                <ListItemText primary={interest.name} />
              </ListItem>
            ))}
          </List>
          <TextField
            label="Add new interest"
            variant="outlined"
            value={newInterest}
            onChange={e => setNewInterest(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddInterest} variant="contained">Add Interest</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UserPreferences;
