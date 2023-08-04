const { exec } = require('child_process');

function openLinkInBrowser(url) {
  let command = '';

  // Check the operating system to determine the appropriate command
  if (process.platform === 'darwin') {
    // macOS
    command = `open ${url}`;
  } else if (process.platform === 'win32') {
    // Windows
    command = `start "" "${url}"`;
  } else {
    // Linux/Unix
    command = `xdg-open ${url}`;
  }

  // Execute the command
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error opening link: ${error}`);
    }
  });
}

// Usage
const url = 'https://www.google.com';
openLinkInBrowser(url);
