const calculateRectangleArea = function(length, width) {
  let rectangle = '';
  if (length >= 0 && width >= 0) {
    rectangle = length * width;
  }else {
    rectangle = undefined;
  }
  return rectangle;
}

const calculateTriangleArea = function(base, height) {
  let triangle = '';
  if (base >= 0 && height >= 0) {
    triangle = (base * height) / 2; 
  } else {
    triangle = undefined;
  }
  return triangle;
}


const calculateCircleArea = function(radius) {
  let circle = '';
  if (radius >= 0) {
    circle = Math.PI * (radius * radius);
  }else {
    circle = undefined;
  }
  return circle;
}

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined