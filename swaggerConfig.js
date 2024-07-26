import swaggerJSDoc from 'swagger-jsdoc';

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: ' MultiLingual File Manager Application',
      version: '1.0.0',
      description: 'API Documentation for MultiLingual File Manager Application',
      contact: {
        name: 'Your Name',
        email: 'your-email@example.com'
      }
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Local server'
      }
    ],
  },
  apis: ['./routes/*.js', './controllers/*.js'], 
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
export default swaggerDocs;
