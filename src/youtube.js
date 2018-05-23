const google = require('googleapis');

const key = process.env.YOUTUBE_API_KEY;
const youtube = google.youtube('v3');

exports.channel = async id =>
  new Promise((resolve, reject) => {
    youtube.channels.list(
      {
        id,
        key,
        part: 'snippet,contentDetails,statistics'
      },
      (err, resp) => {
        if (err) return reject(err);
        resolve(resp);
      }
    );
  });

exports.channelVideos = async id =>
  new Promise((resolve, reject) => {
    youtube.search.list(
      {
        channelId: id,
        key,
        part: 'snippet'
      },
      (err, resp) => {
        if (err) return reject(err);
        resolve(resp);
      }
    );
  });

exports.video = async id =>
  new Promise((resolve, reject) => {
    youtube.videos.list(
      {
        id,
        key,
        part: 'snippet,contentDetails,statistics'
      },
      (err, resp) => {
        if (err) return reject(err);
        resolve(resp);
      }
    );
  });
