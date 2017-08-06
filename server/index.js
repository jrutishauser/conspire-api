import app from './app';
const port = process.env.PORT || 3001;
app.listen(port, (req, res) => {
  console.log('conspiracies list serving on: ' + port);
});