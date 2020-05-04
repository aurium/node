// Flags: --experimental-loader ./test/fixtures/es-module-loaders/loader-cjs-3-steps.mjs
import { mustCall, mustNotCall } from '../common/index.mjs';
import assert from 'assert';

import('../fixtures/es-modules/package-type-module/extension.unknown')
.then(
  mustCall((ns) => {
    assert.strictEqual(ns.message, 'CJS');
  }),
  // Do not use .catch; want exclusive or
  mustNotCall(() => {})
);
