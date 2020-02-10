import { serve } from "https://deno.land/std@v0.24.0/http/server.ts";
import { readFileStr } from 'https://deno.land/std/fs/mod.ts';

const server = serve({ port: 8080 });
const htmlPath = "./assets/index.html";

console.log("Server listening at http://localhost:" + 8080);

for await (const req of server) {
    const text:string = await readFileStr(htmlPath);
    const body:any = new TextEncoder().encode(text);
    req.respond({ body });
}