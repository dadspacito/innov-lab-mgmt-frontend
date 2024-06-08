//fazer um mock de uma lista como se recebesse do backend de user
//vai receber um array de users que dispoe numa lista
import React, {useState, useEffect} from 'react'
import generateMockUsers from '../../../Services/utils/GenerateMockUsers'
//o que é a some keyword

//recebe a user list
//const mockUserList = generateMockUsers();
const users = generateMockUsers();

const ProjectMembers = ({formData, onChange}) =>{
    const [projectMembers, setProjectMembers] = useState([]);
    //falta depois ver aqui o onChange
    useEffect(()=>{
        console.log(users)
    },[])
    
    const handleCheckboxChange = (user) => {
        // Check if the user is already selected
        const index = projectMembers.findIndex((member) => member.id === user.id);
        if (index === -1) {
            // If the user is not selected, add them to the projectMembers array
            setProjectMembers([...projectMembers, user]);
        } else {
            // If the user is already selected, remove them from the projectMembers array
            const updatedMembers = [...projectMembers];
            updatedMembers.splice(index, 1);
            setProjectMembers(updatedMembers);
        }
    };



    return (
        <div>
            <h3>Project Members</h3>
            <div>
                {users.map((user) => (
                    <div key={user.id}>
                        <input
                            type="checkbox"
                            checked={projectMembers.some((member) => member.id === user.id)} 
                            onChange={() => handleCheckboxChange(user)}
                        />
                        <label>{user.firstName + ' ' +  user.lastName}</label>
                    </div>
                ))}
            </div>
            <h3>Selected Members</h3>
            <div>
                {projectMembers.map((member) => (
                    <div key={member.id}>
                        <span>{member.name}</span>
                    </div>
                ))}
            </div>
        </div>

    )
}
export default ProjectMembers;