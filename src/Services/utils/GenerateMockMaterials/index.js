// GenerateMockMaterials.js

const GenerateMockMaterials = () => {
    // Helper function to generate a random 8-digit identifier
    const generateIdentifier = () => {
      return Math.floor(10000000 + Math.random() * 90000000).toString();
    };
  
    // Helper function to generate a random 9-digit supplier contact
    const generateSupplierContact = () => {
      return Math.floor(100000000 + Math.random() * 900000000).toString();
    };
  
    // Helper function to generate a random supplier name
    const supplierNames = ['TechSupply', 'ElectroWorld', 'CompStore', 'GigaMart', 'MegaDevices'];
    const generateSupplierName = () => {
      return supplierNames[Math.floor(Math.random() * supplierNames.length)];
    };
  
    // Helper function to generate a random amount between 1 and 100
    const generateAmount = () => {
      return Math.floor(1 + Math.random() * 100).toString();
    };
  
    // Helper function to generate a random comment
    const comments = [
      'Urgent delivery',
      'High demand',
      'Check stock regularly',
      'Seasonal item',
      'Special order'
    ];
    const generateComment = () => {
      return comments[Math.floor(Math.random() * comments.length)];
    };
  
    // Materials data with random values for the specified fields
    return {
      materials: [
        { id: 1, name: 'Arduino Uno', brand: 'Arduino', type: 'component', identifier: generateIdentifier(), supplier: generateSupplierName(), supplierContact: generateSupplierContact(), amount: generateAmount(), comments: generateComment() },
        { id: 2, name: 'Raspberry Pi 4', brand: 'Raspberry', type: 'component', identifier: generateIdentifier(), supplier: generateSupplierName(), supplierContact: generateSupplierContact(), amount: generateAmount(), comments: generateComment() },
        { id: 3, name: 'Laptop', brand: 'Asus', type: 'component', identifier: generateIdentifier(), supplier: generateSupplierName(), supplierContact: generateSupplierContact(), amount: generateAmount(), comments: generateComment() },
        { id: 4, name: 'Desktop PC', brand: 'HP', type: 'component', identifier: generateIdentifier(), supplier: generateSupplierName(), supplierContact: generateSupplierContact(), amount: generateAmount(), comments: generateComment() },
        { id: 5, name: 'LEDs', brand: 'LEDInc', type: 'component', identifier: generateIdentifier(), supplier: generateSupplierName(), supplierContact: generateSupplierContact(), amount: generateAmount(), comments: generateComment() },
        { id: 6, name: 'Resistors', brand: 'JasonElectronics', type: 'component', identifier: generateIdentifier(), supplier: generateSupplierName(), supplierContact: generateSupplierContact(), amount: generateAmount(), comments: generateComment() },
        { id: 7, name: 'Sensors', brand: 'JasonElectronics', type: 'component', identifier: generateIdentifier(), supplier: generateSupplierName(), supplierContact: generateSupplierContact(), amount: generateAmount(), comments: generateComment() },
        { id: 8, name: 'Breadboard', brand: 'JasonElectronics', type: 'component', identifier: generateIdentifier(), supplier: generateSupplierName(), supplierContact: generateSupplierContact(), amount: generateAmount(), comments: generateComment() },
        { id: 9, name: 'Jumper Wires', brand: 'JasonElectronics', type: 'component', identifier: generateIdentifier(), supplier: generateSupplierName(), supplierContact: generateSupplierContact(), amount: generateAmount(), comments: generateComment() },
        { id: 10, name: 'USB Cables', brand: 'JasonElectronics', type: 'component', identifier: generateIdentifier(), supplier: generateSupplierName(), supplierContact: generateSupplierContact(), amount: generateAmount(), comments: generateComment() },
  
        { id: 11, name: 'Software License', brand: 'Oracle', type: 'resource', identifier: generateIdentifier(), supplier: generateSupplierName(), supplierContact: generateSupplierContact(), amount: generateAmount(), comments: generateComment() },
        { id: 12, name: 'Consulting Services', brand: 'ConsultingCS', type: 'resource', identifier: generateIdentifier(), supplier: generateSupplierName(), supplierContact: generateSupplierContact(), amount: generateAmount(), comments: generateComment() },
        { id: 13, name: 'Graphic Design', brand: 'ConsultingCS', type: 'resource', identifier: generateIdentifier(), supplier: generateSupplierName(), supplierContact: generateSupplierContact(), amount: generateAmount(), comments: generateComment() },
        { id: 14, name: 'Web Hosting', brand: 'Amazon', type: 'resource', identifier: generateIdentifier(), supplier: generateSupplierName(), supplierContact: generateSupplierContact(), amount: generateAmount(), comments: generateComment() },
        { id: 15, name: 'Cloud Storage', brand: 'Amazon', type: 'resource', identifier: generateIdentifier(), supplier: generateSupplierName(), supplierContact: generateSupplierContact(), amount: generateAmount(), comments: generateComment() },
        { id: 16, name: 'Training Courses', brand: 'Critical Tech', type: 'resource', identifier: generateIdentifier(), supplier: generateSupplierName(), supplierContact: generateSupplierContact(), amount: generateAmount(), comments: generateComment() },
        { id: 17, name: 'Contractors', brand: 'Mota-engil', type: 'resource', identifier: generateIdentifier(), supplier: generateSupplierName(), supplierContact: generateSupplierContact(), amount: generateAmount(), comments: generateComment() },
        { id: 18, name: 'Project Management Software', brand: 'AgileSP', type: 'resource', identifier: generateIdentifier(), supplier: generateSupplierName(), supplierContact: generateSupplierContact(), amount: generateAmount(), comments: generateComment() },
        { id: 19, name: 'Prototyping Services', brand: 'Bosch', type: 'resource', identifier: generateIdentifier(), supplier: generateSupplierName(), supplierContact: generateSupplierContact(), amount: generateAmount(), comments: generateComment() },
        { id: 20, name: 'Documentation Tools', brand: 'Oracle', type: 'resource', identifier: generateIdentifier(), supplier: generateSupplierName(), supplierContact: generateSupplierContact(), amount: generateAmount(), comments: generateComment() }
      ]
    };
  };
  
  export default GenerateMockMaterials;
  