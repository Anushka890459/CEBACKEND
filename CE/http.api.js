const http = require("http");
const port = 3000;
const server = http.createServer(async (req,res) => {
    console.log("New request received");
    resizeBy.writeHead(200,{'Content-Type': 'apploication/json'});
    const response = await fetch("https://dummyjson.com/products");
     const data =  await response.json();
    response.end(JSON.stringify(data));

    });
server.listen(port,() =>{
    console.log('Server is running on port ${port}');
});
