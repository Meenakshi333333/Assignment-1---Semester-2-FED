const express = require('express');
const bodyParser = require('body-parser');
const xlsx = require('xlsx');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API endpoint to save data to an Excel file
app.post('/saveData', (req, res) => {
  const formData = req.body;

  const fileName = 'ConsultationData.xlsx';

  // Check if file exists, if not create it
  let workbook;
  if (fs.existsSync(fileName)) {
    workbook = xlsx.readFile(fileName);
  } else {
    workbook = xlsx.utils.book_new();
  }

  // Convert form data to worksheet format
  const worksheet = workbook.Sheets['Consultations'] || xlsx.utils.json_to_sheet([]);
  const data = xlsx.utils.sheet_to_json(worksheet);
  data.push(formData);

  // Update worksheet with new data
  const updatedWorksheet = xlsx.utils.json_to_sheet(data);
  xlsx.utils.book_append_sheet(workbook, updatedWorksheet, 'Consultations');

  // Save workbook
  xlsx.writeFile(workbook, fileName);

  res.status(200).send({ message: 'Data saved to Excel file successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
