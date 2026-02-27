///Задание 1
function parseCount(pars) {
  const parsedValue = Number.parseFloat(pars);
    if (isNaN(parsedValue)) {
    throw new Error("Невалидное значение");
  }
  
  return parsedValue;
}

function validateCount(pars) {
  try {
    return parseCount(pars);
  } 
  catch (error) {
    return error;
  }
}

