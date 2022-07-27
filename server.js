const express = require('express');
const swaggerUi = require('swagger-ui-express');
const app = express();
const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productsRoutes');
const swaggerFile = require('./swagger/swagger_output.json');

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(express.json());
app.listen(8080, () => {
    console.log('Server up...')
});

app.use('/api', userRouter);
app.use('/api/products', productRouter);