import { serveTLS } from "https://deno.land/std@v0.24.0/http/server.ts";

const server = serveTLS({ 
    port: 8080,
    certFile: "./path/of/your/certfile.crt",
    keyFile: "./path/of/your/keyfile.key"
});

console.log("Server listening at http://localhost:" + 8080);

for await (const req of server) {
    const body = new TextEncoder().encode("<h1>Hello world</h1> <p>A simple https server in Deno</p>");
    req.respond({ body });
}