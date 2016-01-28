/**
 * Cron Configuration
 * (app.config.cron)
 *
 * Configure cron tasks
 *
 * @see {@link https://github.com/jaumard/trailpack-cron}
 */
module.exports = {
  defaultTimeZone: 'Europe/Paris', // Default timezone use for tasks
  jobs: {
    myJob: {
      schedule: '* * * * * *',
      onTick: function (app) {
        app.log.info('I am ticking');
      },
      onComplete: function (app) {
        app.log.info('I am done');
      },
      start: true, // Start task immediately
      timezone: 'Europe/Paris' // Custom timezone
    }
  }
}
