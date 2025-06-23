const { AppError } = require("../utils");
const { BAD_REQUEST } = require("../utils/errors");

const fetchMusic = async (body) => {
  const { mood, genre, audioData } = body;
  try {
    if (!mood || !genre || !audioData)
      throw new AppError({
        ...BAD_REQUEST,
        message: "Mood ,genre and audioData are compulsory",
      });
    const data = await audioData.filter(
      (item) => item?.mood === mood?.name && item?.genre === genre?.name
    );
    if (!data.length)throw new AppError({...BAD_REQUEST,message: "No matching tracks found for selected mood and genre."});

    const randomTrack = data[Math.floor(Math.random() * data.length)];
    return randomTrack;
  } catch (err) {
    throw err;
  }
};

module.exports = { fetchMusic };
