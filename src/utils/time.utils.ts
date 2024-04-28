const convertToAMPMFormat = (time24hr: string): string => {
  const [hours, minutes] = time24hr.split(":");
  let ampm = "AM";
  let hour = parseInt(hours, 10);

  if (hour >= 12) {
    ampm = "PM";
    if (hour > 12) {
      hour -= 12;
    }
  }

  return `${hour.toString().padStart(2, "0")}:${minutes} ${ampm}`;
};
// utils.ts

export const calculateAge = (dob: string): number => {
  const today = new Date();
  const birthDate = new Date(dob);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};

export default convertToAMPMFormat;
