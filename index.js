const app = require("./app");

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log("MONGO_URL:", process.env.MONGO_URL);

});
