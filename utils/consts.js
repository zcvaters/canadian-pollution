const columnToMongo = {
  TPM: "$TPM (t)",
  PM10: "$PM10 (t)",
  PM25: "$PM25 (t)",
  SOX: "$SOX (t)",
  NOX: "$NOX (t)",
  VOC: "$VOC (t)",
  CO: "$CO (t)",
  NH3: "$NH3 (t)",
  Pb: "$Pb (kg)",
  Cd: "$Cd (kg)",
  Hg: "$Hg (kg)",
  PAH: "$PAH (kg)",
};

const provinces = [
  "ON",
  "QC",
  "NS",
  "NB",
  "MB",
  "BC",
  "PE",
  "SK",
  "AB",
  "NL",
  "NT",
  "YT",
  "NU",
];

const toxins = [
  "TPM",
  "PM10",
  "PM25",
  "SOX",
  "NOX",
  "VOC",
  "CO",
  "NH3",
  "Pb",
  "Cd",
  "Hg",
  "PAH",
];

const sources = [
  "Agriculture",
  "Commercial / Residential / Institutional",
  "Dust",
  "Electric Power Generation (Utilities)",
  "Fires",
  "Incineration and Waste",
  "Manufacturing",
  "Oil and Gas Industry",
  "Ore and Mineral Industries",
  "Paints and Solvents",
  "Transportation and Mobile Equipment",
];

module.exports = { columnToMongo, toxins, provinces, sources };
