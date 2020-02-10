import { serve } from "https://deno.land/std@v0.24.0/http/server.ts";

const server = serve({ port: 8080 });

console.log("Server listening at http://localhost:" + 8080);

for await (const req of server) {
    const body = new TextEncoder().encode("<h1>Hello world</h1> <p>A simple http server in Deno</p>");
    req.respond({ body });
}