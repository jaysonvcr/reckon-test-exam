import app from "./app";

const PORT = process.env.PORT || 8888;

app.listen(PORT, ():void => {
    console.log(`Server Running here 👉 https://localhost:${PORT}`);
});

export default app;

