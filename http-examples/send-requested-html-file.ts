import { serve } from "https://deno.land/std@v0.24.0/http/server.ts";
import { readFileStr } from 'https://deno.land/std/fs/mod.ts';

const server = serve({ port: 8080 });
const httpPath = "./assets/";

console.log("Server listening at http://localhost:" + 8080);

for await (const req of server) {
    let requestedFile:string = req.url;

    if (requestedFile == "/")
        requestedFile = "/index.html";

    let text:string = "";
    
    try {
        text = await readFileStr(httpPath + requestedFile);
    } catch (e) {
        text = "<h1>404</h1>";
    }
    
    const body:any = new TextEncoder().encode(text);
    req.respond({ body });
}