import { faker } from '@faker-js/faker';

const GenerateMockUsers = () => {
    const users = [];
    const roles = ['verified', 'not verified'];

    // Add admin user
    users.push({
        id: 1,
        firstName: 'Admin',
        lastName: 'User',
        role: 'admin',
        email: 'admin@example.com',
        location: 'Tomar',
        username: 'admin',
    });

    // Generate 19 regular users
    for (let i = 2; i <= 20; i++) {
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const role = roles[Math.floor(Math.random() * roles.length)];
        // Ensure email uniqueness by appending index
        const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${i}@example.com`;
        // Updated method to get random element from array
        const location = faker.helpers.arrayElement(['Tomar', 'Lisboa', 'Coimbra', 'VilaReal', 'Porto']);
        // Generate a unique username by including the index
        const username = `${firstName.toLowerCase()}_${lastName.toLowerCase()}_${i}`;
        //const photo = URL

        users.push({
            id: i,
            firstName,
            lastName,
            role,
            email,
            location,
            username,
        });
    }

    return users;
};

export default GenerateMockUsers;
