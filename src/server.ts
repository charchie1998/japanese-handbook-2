import express from 'express';
import { radicalRouter, kanjiRouter, vocabularyRouter } from './infrastructure/router';

const app = express();
const port = 3000;

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.use('/radical', radicalRouter);
app.use('/kanji', kanjiRouter);
app.use('/vocabulary', vocabularyRouter);

// ADD DATA TO DATABASE
app.use('/seed', kanjiRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});