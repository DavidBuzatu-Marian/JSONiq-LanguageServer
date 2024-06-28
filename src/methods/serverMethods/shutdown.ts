export let isShutDownInitialized = false;
export const shutdown = (): null => {
  isShutDownInitialized = true;
  return null;
};
