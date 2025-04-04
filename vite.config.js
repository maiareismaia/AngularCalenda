export default {
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: 'all',
    // Allow all hosts to access
    hmr: {
      host: '0.0.0.0'
    },
    watch: {
      usePolling: true
    }
  }
};