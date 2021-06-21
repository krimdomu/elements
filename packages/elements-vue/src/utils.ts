export const setupConfig = (config: any) => {
  const win = window as any;
  const InoElements = win.InoElements;
  if (InoElements && InoElements.config && InoElements.config.constructor.name !== 'Object') {
    return;
  }
  win.InoElements = win.Ionic || {};
  win.InoElements.config = {
    ...win.InoElements.config,
    ...config
  };
  return win.InoElements.config;
};

export const needsKebabCase = (version: string) => !['3.0.0', '3.0.1', '3.0.2', '3.0.3', '3.0.4', '3.0.5'].includes(version);
