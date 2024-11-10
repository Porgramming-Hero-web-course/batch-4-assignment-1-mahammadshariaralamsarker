function calculateShapeArea(shape) {
    if (shape.shape === "circle") {
        return (Math.PI * shape.radius * shape.radius).toFixed(2);
    }
    else if (shape.shape === "rectangle") {
        return shape.width * shape.height;
    }
}
