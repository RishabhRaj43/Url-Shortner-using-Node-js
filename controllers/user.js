const shortId = require("shortid");
const url = require("../models/user");

const handleUrl = async (req, res) => {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required" });
  const shortid = shortId();
  await url.create({
    shortId: shortid,
    redirectUrl: body.url,
    visited: [],
  });
  return res.json({ id: shortid });
};

const redirectURL = async (req, res) => {
  const shortId = req.params.shortid;
  const entry = await url.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visited: {
          timestamps: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectUrl);
};

module.exports = {
  handleUrl,
  redirectURL,
};
