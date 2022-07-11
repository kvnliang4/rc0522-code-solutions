const express = require('express');
const app = express();
app.use(express.json());
const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res) => {
  const sql = `
    select *
      from "grades"
  `;

  db.query(sql)
    .then(result => {
      const grades = result.rows;
      res.status(200).json(grades);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error has occurred'
      });
    });
});

app.post('/api/grades', (req, res) => {
  const name = req.body.name;
  const course = req.body.course;
  const score = Number(req.body.score);

  if (!name || !course || !score) {
    res.status(400).json({
      error: 'Name, course, and score are required fields!'
    });
    return;
  } else if (score > 100 || score < 0 || !Number.isInteger(score)) {
    res.status(400).json({
      error: 'Score must be a number between 0 and 100!'
    });
    return;
  }

  const sql = `
    insert into "grades" ("name", "course", "score")
      values ($1, $2, $3)
      returning *
  `;

  const params = [name, course, score];

  db.query(sql, params)
    .then(result => {
      const grade = result.rows;
      res.status(201).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error has occurred' });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const name = req.body.name;
  const course = req.body.course;
  const score = Number(req.body.score);
  const gradeId = Number(req.params.gradeId);

  if (!name || !course || !score || !gradeId) {
    res.status(400).json({
      error: 'Name, course, score, are required fields!'
    });
    return;
  } else if (!Number.isInteger(score) || score > 100 || score < 0) {
    res.status(400).json({
      error: 'Score must be a number between 0 and 100!'
    });
    return;
  } else if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: 'GradeId must be a number greater than 0!'
    });
    return;
  }

  const sql = `
    update "grades"
       set "name" = $1,
           "course" = $2,
           "score" = $3
     where "gradeId" = $4
     returning *
  `;

  const params = [name, course, score, gradeId];

  db.query(sql, params)
    .then(result => {
      const grade = result.rows;

      if (!grade) {
        res.status(404).json({
          error: `Can't find grade with gradeId: ${gradeId}!`
        });
      } else {
        res.status(200).json(grade);
      }
    })

    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error has occurred'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);

  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: 'GradeId must be a number greater than 0!'
    });
    return;
  }

  const sql = `
    delete from "grades"
      where "gradeId" = $1
  `;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows;

      if (!grade) {
        res.status(404).json({
          error: `Can't find grade with gradeId: ${gradeId}!`
        });
      } else {
        res.status(200).json(grade);
      }
    })

    .catch(err => {
      if (err) {
        console.error(err);
        res.status(500).json({
          error: 'An unexpected error has occurred!'
        });
      }
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
