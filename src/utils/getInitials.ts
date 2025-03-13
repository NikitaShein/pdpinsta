export const getInitials = (fullName: string): string => {
  const words = fullName.trim().split(' ');
  if (words.length === 0) {
    return '';
  }

  const firstInitial = words[0]?.charAt(0).toUpperCase() || '';
  const lastInitial = words.length > 1 ? words[1]?.charAt(0).toUpperCase() : '';

  return firstInitial + lastInitial;
};
