export function getFormat(url, context, defaultGetFormat) {
  if (url.endsWith('.unknown')) {
    return {
      format: 'module'
    };
  }
  return defaultGetFormat(url, context, defaultGetFormat);
}

export function getSource(url, context, defaultGetSource) {
  if (url.endsWith('.unknown') && context.format === 'module') {
    return {
      source: `export const message = 'FOO'`
    };
  }
  return defaultGetSource(url, context, defaultGetSource);
}

export function transformSource(source, context, defaultTransformSource) {
  if (context.url.endsWith('.unknown') && context.format === 'module') {
    return {
      source: source.replace(/FOO/, 'ESM')
    };
  }
  return defaultTransformSource(source, context, defaultTransformSource);
}
