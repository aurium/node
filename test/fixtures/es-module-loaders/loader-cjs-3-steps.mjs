export function getFormat(url, context, defaultGetFormat) {
  if (url.endsWith('.unknown')) {
    return {
      format: 'commonjs'
    };
  }
  return defaultGetFormat(url, context, defaultGetFormat);
}

export function getSource(url, context, defaultGetSource) {
  if (url.endsWith('.unknown') && context.format === 'commonjs') {
    return {
      source: `exports.message = 'FOO'`
    };
  }
  return defaultGetSource(url, context, defaultGetSource);
}

export function transformSource(source, context, defaultTransformSource) {
  if (context.url.endsWith('.unknown') && context.format === 'commonjs') {
    return {
      source: source.replace(/FOO/, 'CJS')
    };
  }
  return defaultTransformSource(source, context, defaultTransformSource);
}
