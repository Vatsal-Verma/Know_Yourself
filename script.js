document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.sync.get(['name', 'github', 'linkedin', 'leetcode', 'twitter'], (result) => {
        if (result.name || result.github || result.linkedin || result.leetcode || result.twitter) {
            window.location.href = 'display.html';
        }
    });
    document.getElementById('save').addEventListener('click', () => {
        const name = document.getElementById('name').value;
        const github = document.getElementById('github').value;
        const linkedin = document.getElementById('linkedin').value;
        const leetcode = document.getElementById('leetcode').value;
        const twitter = document.getElementById('twitter').value;
        chrome.storage.sync.set({ name, github, linkedin, leetcode, twitter }, () => {
            window.location.href = 'display.html';
        });
    });
});
