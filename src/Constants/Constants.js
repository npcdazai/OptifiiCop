
import dns from "node:dns"




export function getTomorrowDate() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  
  // Format the date as YYYY-MM-DD (ISO 8601)
  return tomorrow.toISOString().split('T')[0];
}


export function removeTrailingZeros(value) {
  // Convert the value to a number and then to a string
  let number = parseFloat(value);
  let result = number.toString();

  // Check if the result contains a decimal point
  if (result.includes('.')) {
    // Remove trailing zeros if the decimal part is 0 or 00
    result = result.replace(/(\.\d*?)0+$/, '$1'); // Remove trailing zeros
    result = result.replace(/\.$/, ''); // Remove the decimal point if it's the last character
  }

  return result;
}


 export function getCountdownTimer(utcDateString) {
  // Parse the UTC datetime string into a Date object 
  const targetDate = new Date(utcDateString);
  const now = new Date();

  // Calculate the difference in milliseconds
  const difference = targetDate - now;

  if (difference <= 0) {
    return 'The time has passed or is now!';
  }

  // Convert the difference from milliseconds to a more readable format
  const seconds = Math.floor(difference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  const remainingDays = days;
  const remainingHours = hours % 24;
  const remainingMinutes = minutes % 60;
  const remainingSeconds = seconds % 60;

  return `${remainingDays === 0 ? "": remainingDays+"d"}  ${remainingHours === 0 ? "": remainingHours+"h"} ${remainingMinutes}m `;
}



export function startCountdown(utcDateString) {
  // Function to update the countdown
  const updateCountdown = () => {
    const countdown = getCountdownTimer(utcDateString);
    console.log(countdown);
  };

  // Update countdown immediately
  updateCountdown();

  // Set up interval to update countdown every minute (60000 milliseconds)
  setInterval(updateCountdown, 60000);
}

export const getFileNameFromPath = (filePath) => {
  const parts = filePath?.split("/");
  return parts?.[parts?.length - 1];
};

export function debounce(func, delay) {
  let debounceTimer;
  return function (...args) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(this, args), delay);
  };
}



async function resolveMx(domain, recordType) {
  return new Promise((resolve, reject) => {
      dns.resolveMx(domain, (err, mxRecords) => {
          if (err) {
              reject(err);
              return;
          }
          const addresses = mxRecords.map((mxRecord) => mxRecord.exchange);
          resolve(addresses);
      });
  });
}
// Async function to check email address validity
export async function checkEmailValidity(email) {
  try {
      const domain = email?.split("@")[1];
      const addresses = await resolveMx(domain, "MX");

      if (addresses && addresses?.length > 0) {
          return true;
      }
      return false; // No MX record exists
  } catch (err) {
      return false; // Error occurred
  }
}


// Function to convert timestamp to readable date format in Gulf timezone
export function formatTimestampInGulfTimezone(timestamp) {
  const date = new Date(timestamp);
  const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit', 
      timeZone: 'Asia/Dubai', // Gulf Standard Time (GST) timezone
      timeZoneName: 'short'
  };
  return date.toLocaleDateString('en-GB', options);
}
