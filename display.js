document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.sync.get(['name', 'github', 'linkedin', 'leetcode', 'twitter'], (result) => {
        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML = `
            <p>Name: ${result.name || 'N/A'}</p>
            <p>GitHub: ${result.github || 'N/A'}</p>
            <p>LinkedIn: ${result.linkedin || 'N/A'}</p>
            <p>LeetCode: ${result.leetcode || 'N/A'}</p>
            <p>Twitter: ${result.twitter || 'N/A'}</p>
        `;
    });

    document.getElementById('reset').addEventListener('click', () => {
        chrome.storage.sync.clear(() => {
            // alert('Data has been reset.');
            window.location.href = 'index.html';
        });
    });
});
