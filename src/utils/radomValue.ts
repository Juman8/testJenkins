export const randomBasicColor = () => {
  return Math.floor(Math.random() * 16777215).toString(16);
};

export const randomFormatColor = (format: string) => {
  const color = Math.floor(0x100000000 * Math.random());
  switch (format) {
    case 'hex':
      return '#' + ('00000' + color.toString(16)).slice(-6).toUpperCase();
    case 'hexa':
      return '#' + ('0000000' + color.toString(16)).slice(-8).toUpperCase();
    case 'rgb':
      return (
        'rgb(' + (color & 255) + ',' + ((color >> 8) & 255) + ',' + ((color >> 16) & 255) + ')'
      );
    case 'rgba':
      return (
        'rgba(' +
        (color & 255) +
        ',' +
        ((color >> 8) & 255) +
        ',' +
        ((color >> 16) & 255) +
        ',' +
        ((color >> 24) & 255) / 255 +
        ')'
      );
    default:
      return color;
  }
};

export function getRandomRightColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
