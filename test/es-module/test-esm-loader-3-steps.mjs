// Flags: --experimental-loader ./test/fixtures/es-module-loaders/loader-esm-3-steps.mjs
import { mustCall, mustNotCall } from '../common/index.mjs';
import assert from 'assert';

import('../fixtures/es-modules/package-type-module/extension.unknown')
.then(
  mustCall((ns) => {
    assert.strictEqual(ns.message, 'ESM');
  }),
  // Do not use .catch; want exclusive or
  mustNotCall(() => {})
);
