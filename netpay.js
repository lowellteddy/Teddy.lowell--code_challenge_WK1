
// This is an array which contains objects that shows the KRA tax rates for a range of ksh
const KRA_TAX_RATES = [ 
  { range: 0, rate: 0 },               
  { range: 24000, rate: 0.1 },        
  { range: 32333, rate: 0.25 },
  { range: 500000, rate: 0.3 },
  { range: 800000, rate: 0.325 },
  { range: Infinity, rate: 0.35 }
];

//This is an array which contains objects to display the NHIF rates for a range of ksh
const NHIF_RATES = [
  { range: 0, rate: 0 },
  { range: 5999, rate: 150 },      
  { range: 7999, rate: 300 },         
  { range: 11999, rate: 400 },
  { range: 14999, rate: 500 },
  { range: 19999, rate: 600 },
  { range: 24999, rate: 750 },
  { range: 29999, rate: 850 },
  { range: 34999, rate: 900 },
  { range: 39999, rate: 950 },
  { range: 44999, rate: 1000 },
  { range: 49999, rate: 1100 },
  { range: 59999, rate: 1200 },
  { range: 69999, rate: 1300 },
  { range: 79999, rate: 1400 },
  { range: 89999, rate: 1500 },
  { range: 99999, rate: 1600 },
  { range: Infinity, rate: 1700 }
];

 // A deduction during calculation bur depends on one's salary
const NSSF_RATE = 0.06 


// calculate Gross Tax depending on the salary
function calculateTax(basicSalary, benefits) {
  let taxableSalary = basicSalary + benefits;
  let tax = 0; //The tax is a placeholder for the KRA_TAX_RATE object
  
  // This is used to iterate between the key values of the object in question 
  for (let i = 0; i < KRA_TAX_RATES.length; i++) { 
    const rate = KRA_TAX_RATES[i];                       

    if (taxableSalary <= rate.range) {
      break;
    }

    tax += (rate.range - (i > 0 ? KRA_TAX_RATES[i - 1].range : 0)) * rate.rate;
  }

  tax += (taxableSalary - tax) * KRA_TAX_RATES[KRA_TAX_RATES.length - 1].rate;

  return tax;
}

// calculate NHIF deductions using the object 
function calculateNHIFDeductions(basicSalary) {
  let rate = 0; //The rate is a placeholder for the NHIF object

  for (let i = 0; i < NHIF_RATES.length; i++) {    
    const nhifRate = NHIF_RATES[i];

    if (basicSalary <= nhifRate.range) {
      rate = nhifRate.rate;
      break;
    }
  }

  return rate;
}

// calculate NSSF deductions
function calculateNSSFDeductions(basicSalary) { 
   if (basicSalary > 36000) {
   return 36000 * NSSF_RATE             
   } else {
     return basicSalary * NSSF_RATE
   }
}

// calculate Gross Salary => GS = BS + All Allowances(Benefits)
function calculateGrossSalary(basicSalary, benefits) {
  return basicSalary + benefits;
}


// calculate Net Salary => NS = GS - (Rate + Tax + NSSF)
function calculateNetSalary() {
 // Prompt the user for their basic salary and allowances
  const basicSalaryString = prompt("Enter your basic salary:"); 
  const basicSalary = parseFloat(basicSalaryString);
  const benefitsString = prompt("Enter your total Allowances:"); 
  const benefits = parseFloat(benefitsString);
// Number required for the program to run
  if (isNaN(basicSalary) || isNaN(benefits)) {
    console.log("Invalid input. Please enter a number.");
    return;
  }

  const grossSalary = calculateGrossSalary(basicSalary, benefits);
  const tax = calculateTax(grossSalary, 0);
  const nhifDeductions = calculateNHIFDeductions(basicSalary);
  const nssfDeductions = calculateNSSFDeductions(basicSalary);

  const netSalary = grossSalary - tax - nhifDeductions - nssfDeductions;
   console.log('Gross Salary:', grossSalary);
   console.log('Net Salary:', netSalary);
  window.alert(`The Gross Salary of Ksh${grossSalary} gives The net salary of Ksh${netSalary}`)
}


calculateNetSalary();
