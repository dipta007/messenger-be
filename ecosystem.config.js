module.exports = {
  apps: [{
    name: 'chat-be',
    script: 'node dist/main',
    env: {
      NODE_ENV: 'development',
    },
    env_production: {
      NODE_ENV: 'production',
    },
  }],
};