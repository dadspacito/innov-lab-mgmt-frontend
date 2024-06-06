//pagina dos materiais, faz se um array de recursos


import React from 'react'
import GenerateMockMaterials from '../../../Services/utils/GenerateMockMaterials'

const mockMaterials = GenerateMockMaterials

const ProjectResources =({formData, onChange})=>{
    //same principle, there's a set to a state of selected materials and those are passed to the project creation. The on change must detect the the field and assign the value
    const [projectMaterials, setProjectMaterials] = useState([]);

       // Function to handle checkbox change
       const handleCheckboxChange = (materialId) => {
        // Toggle selection of the material
        if (selectedMaterials.includes(materialId)) {
            setSelectedMaterials(selectedMaterials.filter(id => id !== materialId));
        } else {
            setSelectedMaterials([...selectedMaterials, materialId]);
        }
    };

    return (
        <div>
            <h2>Project Resources</h2>
            <ul>
                {mockMaterials.map(material => (
                    <li key={material.id}>
                        <label>
                            <input
                                type="checkbox"
                                checked={selectedMaterials.includes(material.id)}
                                onChange={() => handleCheckboxChange(material.id)}
                            />
                            {material.name}
                        </label>
                    </li>
                ))}
            </ul>
            <div>
                <h3>Selected Materials</h3>
                <ul>
                    {selectedMaterials.map(materialId => (
                        <li key={materialId}>
                            {mockMaterials.find(material => material.id === materialId).name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );

}