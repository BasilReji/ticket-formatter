export const formatTicket = (inputString) => {
  const matches = inputString.match(/\bhttps?:\/\/\S+/);

  if (matches && matches.length > 0) {
    const url = matches[0]; // Extracting the URL
    const remainingText = inputString.replace(url, "").trim(); // Extracting the remaining text
    return {
      url,
      description: remainingText,
    };
  } else {
    return { url: inputString, description: inputString };
  }
};

export const copyToClipBoard = (value) => {
  navigator.clipboard.writeText(value);
};
