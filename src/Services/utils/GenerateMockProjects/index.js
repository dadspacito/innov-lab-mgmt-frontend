export const GenerateMockProjects = () => {
    return [
        {
            id: 1,
            title: 'Project 1',
            description: 'This is a detailed description of Project 1.',
            manager: 'John Doe',
            state: 'In Progress',
            startDate: '2024-01-01',
            endDate: '2024-06-30',
            completionDate: '',
            tasks: [
                {
                    name: 'Task 1.1',
                    startDate: '2024-01-05',
                    endDate: '2024-01-15',
                    status: 'Completed',
                    priority: 'High',
                    responsible: 'Alice Smith',
                    comments: 'Completed ahead of schedule.'
                },
                {
                    name: 'Task 1.2',
                    startDate: '2024-01-16',
                    endDate: '2024-02-01',
                    status: 'In Progress',
                    priority: 'Medium',
                    responsible: 'Bob Brown',
                    comments: 'Currently on track.'
                }
            ],
            members: [
                { name: 'Alice Smith', role: 'Developer' },
                { name: 'Bob Brown', role: 'Tester' },
                { name: 'John Doe', role: 'Project Manager' }
            ],
            tags: ["React", "Java"]
        },
        {
            id: 2,
            title: 'Project 2',
            description: 'This is a detailed description of Project 2.',
            manager: 'Jane Roe',
            state: 'Completed',
            startDate: '2023-05-01',
            endDate: '2023-11-30',
            completionDate: '2023-11-20',
            tasks: [
                {
                    name: 'Task 2.1',
                    startDate: '2023-05-01',
                    endDate: '2023-05-20',
                    status: 'Completed',
                    priority: 'High',
                    responsible: 'Charlie Davis',
                    comments: 'Delivered on time.'
                },
                {
                    name: 'Task 2.2',
                    startDate: '2023-06-01',
                    endDate: '2023-06-15',
                    status: 'Completed',
                    priority: 'Low',
                    responsible: 'Dana Lee',
                    comments: 'Completed with minor delays.'
                }
            ],
            members: [
                { name: 'Charlie Davis', role: 'Lead Developer' },
                { name: 'Dana Lee', role: 'Designer' },
                { name: 'Jane Roe', role: 'Project Manager' }
            ],
            tags: ["Python", "AI"]
        },
        {
            id: 3,
            title: 'Project 3',
            description: 'This is a detailed description of Project 3.',
            manager: 'Jim Beam',
            state: 'In Progress',
            startDate: '2024-03-01',
            endDate: '2024-09-30',
            completionDate: '',
            tasks: [
                {
                    name: 'Task 3.1',
                    startDate: '2024-03-01',
                    endDate: '2024-03-10',
                    status: 'Completed',
                    priority: 'Medium',
                    responsible: 'Evelyn Clark',
                    comments: 'Finished as planned.'
                },
                {
                    name: 'Task 3.2',
                    startDate: '2024-03-15',
                    endDate: '2024-04-01',
                    status: 'In Progress',
                    priority: 'High',
                    responsible: 'Frank Green',
                    comments: 'Facing minor issues.'
                }
            ],
            members: [
                { name: 'Evelyn Clark', role: 'Software Engineer' },
                { name: 'Frank Green', role: 'Hardware Engineer' },
                { name: 'Jim Beam', role: 'Project Manager' }
            ],
            tags: ["C", "Embedded software"]
        },
        {
            id: 4,
            title: 'Project 4',
            description: 'This is a detailed description of Project 4.',
            manager: 'Nancy Drew',
            state: 'Planning',
            startDate: '2024-07-01',
            endDate: '2025-01-31',
            completionDate: '',
            tasks: [
                {
                    name: 'Task 4.1',
                    startDate: '2024-07-01',
                    endDate: '2024-07-10',
                    status: 'Not Started',
                    priority: 'High',
                    responsible: 'George Fayne',
                    comments: 'Initial planning stage.'
                },
                {
                    name: 'Task 4.2',
                    startDate: '2024-07-15',
                    endDate: '2024-07-25',
                    status: 'Not Started',
                    priority: 'Medium',
                    responsible: 'Bess Marvin',
                    comments: 'Awaiting requirements.'
                }
            ],
            members: [
                { name: 'George Fayne', role: 'Analyst' },
                { name: 'Bess Marvin', role: 'UI/UX Designer' },
                { name: 'Nancy Drew', role: 'Project Manager' }
            ],
            tags: ["Python", "Machine-learning"]
        },
        {
            id: 5,
            title: 'Project 5',
            description: 'This is a detailed description of Project 5.',
            manager: 'Tom Hardy',
            state: 'In Progress',
            startDate: '2024-04-01',
            endDate: '2024-12-31',
            completionDate: '',
            tasks: [
                {
                    name: 'Task 5.1',
                    startDate: '2024-04-01',
                    endDate: '2024-04-15',
                    status: 'Completed',
                    priority: 'Low',
                    responsible: 'Ivy Fisher',
                    comments: 'Simple task completed quickly.'
                },
                {
                    name: 'Task 5.2',
                    startDate: '2024-04-20',
                    endDate: '2024-05-10',
                    status: 'In Progress',
                    priority: 'High',
                    responsible: 'Oscar Wilde',
                    comments: 'Critical task for project success.'
                }
            ],
            members: [
                { name: 'Ivy Fisher', role: 'Developer' },
                { name: 'Oscar Wilde', role: 'Security Specialist' },
                { name: 'Tom Hardy', role: 'Project Manager' }
            ],
            tags: ["Rust", "Reverse-engineering"]
        }
    ];
};
