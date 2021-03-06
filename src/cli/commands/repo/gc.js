'use strict'

module.exports = {
  command: 'gc',

  describe: 'Perform a garbage collection sweep on the repo.',

  builder: {},

  handler (argv) {
    argv.resolve((async () => {
      await argv.ipfs.repo.gc()
    })())
  }
}
