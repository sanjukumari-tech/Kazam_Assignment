import dotenv from "dotenv";
dotenv.config();
import express from "express";
import Redis from "ioredis";
import cors from "cors";
// import { addNote, fetchAllNotes } from './controllers/taskController'
import taskRoutes from "./routes/taskRoutes.js";
import connectDB from "./config/db.js";
const app = express();
const PORT = process.env.PORT || 5000;
export const redis = new Redis({
  host: process.env.REDIS_HOSTNAME,
  port: Number(process.env.REDIS_PORT),
  password: process.env.REDIS_PASSWORD,
    username: process.env.REDIS_USERNAME,
});

redis.on("connect", () => {
  console.log("Connected to Redis");
});

redis.on("error", (err) => {
  console.error("Redis connection error:", err);
});

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json());

app.use("/api", taskRoutes);


app.listen(PORT,async () =>{
  await connectDB();
  console.log(`server is running on port no http://localhost:${PORT}`)
}
);

// import express from "express";
// import cors from "cors";
// import {createServer} from "http";
// import {Server} from "socket.io";
// import taskRoutes from "./routes/taskRoutes.js";
// const app = express();
// const httpServer = createServer(app);

// const io = new Server(httpServer,{
//    cors:{origin:"http://localhost:5173",
//       methods:["GET","POST"]
//    }
// });

// app.use(cors({
//   origin: 'http://localhost:5173',
//   methods: ['GET', 'POST'],
//   credentials: true
// }))

// const port = process.env.PORT ||5000;
// app.use(express.json());

// app.locals.io = io;
// app.use("/api",taskRoutes);

// io.on("connection",(socket)=>{
//    console.log("client connected: ",socket.id);
//    socket.on("disconnected",()=>{
//       console.log("client disconnected",socket.id)
//    })
// })

// httpServer.listen(port,()=>{
//    console.log(`Server running on http://localhost:${port}`)
// })
