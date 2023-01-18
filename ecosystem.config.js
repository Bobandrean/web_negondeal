module.exports = {
  apps: [
    {
      name: "nuxt-php-framework",
      exec_mode: "cluster",
      instances: "max",
      script: "./.output/server/index.mjs",
    },
  ],
};
