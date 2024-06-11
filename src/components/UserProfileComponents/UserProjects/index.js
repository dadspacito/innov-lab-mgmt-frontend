// UserProjects.js

import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { GenerateMockProjects } from '../../../Services/utils/GenerateMockProjects'; // Import the mock project data generator
import './style.css'; // Import the external CSS file for styling

const UserProjects = () => {
  const mockProjects = GenerateMockProjects(); // Generate mock project data

  return (
    <div className="projects-section">
      <h2>Projects user is a part of</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Members</TableCell>
            <TableCell>Project Leader</TableCell>
            <TableCell>Members</TableCell>
            <TableCell>leave Project</TableCell>{/**aqui ou se faz hover para se sair do projeto ou tem um botão para sair */}
          </TableRow>
        </TableHead>
        <TableBody>
          {mockProjects.map((project) => (
            <TableRow key={project.id}>
              <TableCell>{project.title}</TableCell>
              <TableCell>{project.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserProjects;
