import brandData from '../mockData/brandData.json';

// Takes in an array of brand data and returns an array of brand names
const displayBrands = (data) => {
  let output = [];
  for (let name of data) {
    output.push(name.brand);
  }
  return output
}
// console.log(displayBrands(brandData));
export default displayBrands;