import express from 'express';
import router from './infrastructure/router';

const app = express();
const port = 3000;

// Use the routes in your application
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/radical', router.radicalRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});