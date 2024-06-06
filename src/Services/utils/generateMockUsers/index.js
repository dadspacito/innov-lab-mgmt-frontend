const faker = require('faker');

const generateMockUsers = () => {
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
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const role = roles[Math.floor(Math.random() * roles.length)];
        const email = faker.internet.email();
        const location = faker.random.arrayElement(['Tomar', 'Lisboa', 'Coimbra', 'VilaReal', 'Porto']);
        const username = `${firstName.toLowerCase()}_${lastName.toLowerCase()}_${i}`;

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

const mockUsers = generateMockUsers();
console.log(mockUsers);
