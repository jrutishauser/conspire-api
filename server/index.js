import app from './app';
const port = process.env.PORT || 3001;
app.listen(port, (req, res) => {
  console.log('conspiracies list serving on: ' + port);
});

// userid
// 5987ae1b8fd95d1368f0b87d