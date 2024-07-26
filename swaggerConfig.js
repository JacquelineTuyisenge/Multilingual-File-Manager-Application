import swaggerJSDoc from 'swagger-jsdoc';

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: ' MultiLingual File Manager Application',
      version: '1.0.0',
      description: 'API Documentation for MultiLingual File Manager Application',
    },
    servers: [
      {
        url: 'http://localhost:3000/api/',
        description: 'Local server'
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    },
    security: [
      {
        BearerAuth: []
      }
    ],
  },
  apis: ['./routes/*.js', './controllers/*.js'], 
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
export default swaggerDocs;
