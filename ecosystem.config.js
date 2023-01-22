module.exports = {
  apps: [
    {
      name: "web-negondeal",
      exec_mode: "cluster",
      instances: "max",
      script: "./.output/server/index.mjs",
    },
  ],
};
