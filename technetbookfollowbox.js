
document.addEventListener('DOMContentLoaded', function() {
  const postBody = document.querySelector('.post-body');
  if (!postBody) return;

  const followBox = document.createElement('div');
  followBox.className = 'follow-box';
  followBox.innerHTML = `
    <a href="https://news.google.com/publications/CAAqLAgKIiZDQklTRmdnTWFoSUtFSFJsWTJodVpYUmliMjlyY3k1amIyMG9BQVAB" class="btn" target="_blank" rel="noopener">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="28" height="28" style="margin-right:10px;">
        <path fill="#EA4335" d="M24 9.5c3.94 0 7.25 1.64 9.61 4.27l7.07-7.07C36.96 2.55 30.89 0 24 0 14.64 0 6.51 4.91 2.56 12.02l8.23 6.39C12.67 13.54 17.9 9.5 24 9.5z"/>
        <path fill="#34A853" d="M46.98 24.55c0-1.47-.13-2.88-.37-4.24H24v8.04h13.02c-.56 2.88-2.24 5.32-4.77 6.97l7.32 5.69C43.77 36.73 46.98 31.17 46.98 24.55z"/>
        <path fill="#FBBC05" d="M10.79 28.41a14.54 14.54 0 0 1-.81-4.86c0-1.69.29-3.32.81-4.86l-8.23-6.39C1.16 15.41 0 19.57 0 24c0 4.43 1.16 8.59 3.12 12.09l7.67-7.68z"/>
        <path fill="#4285F4" d="M24 48c6.52 0 11.99-2.16 15.99-5.88l-7.32-5.69C30.29 38.66 27.3 39.5 24 39.5c-6.1 0-11.33-4.04-13.21-9.64l-7.67 7.68C6.51 43.09 14.64 48 24 48z"/>
      </svg>
      Follow on Google News
    </a>
    <p>
      Stay up to date with <strong>Technetbook</strong> your source for the latest tech reviews, news &amp; insights. 
      Follow us on <a href="https://news.google.com/publications/CAAqLAgKIiZDQklTRmdnTWFoSUtFSFJsWTJodVpYUmliMjlyY3k1amIyMG9BQVAB" target="_blank" rel="noopener">Google News</a> 
      or <a href="https://www.google.com/preferences/source?q=" target="_blank" rel="noopener">add us to your feed</a>.
    </p>
  `;
  
  postBody.insertAdjacentElement('afterend', followBox);
});

