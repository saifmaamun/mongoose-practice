import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

async function server() {
  try {
    await mongoose.connect(config.database_url as string);
    app.listen(config.port, () => {
      console.log(
        `app listening on port ${config.port}, ${config.database_url}`,
      );
    });
  } catch (error) {
    console.log(error);
  }
}
server();
