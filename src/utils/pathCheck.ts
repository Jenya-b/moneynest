export const pathCheck = (locationPath: string, path: string) => {
  return locationPath.split('/')[1] === path.slice(1);
};
