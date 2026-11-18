const isJapanese = document.documentElement.lang === 'ja';
const shareButton = document.querySelector('.share');
const feedback = document.querySelector('#share-feedback');
let feedbackTimer;
function announce(message) {
  feedback.textContent = message;
  feedback.hidden = false;
  clearTimeout(feedbackTimer);
  feedbackTimer = setTimeout(() => { feedback.hidden = true; }, 4000);
}
shareButton.addEventListener('click', async () => {
  const data = { title: document.title, text: document.querySelector('meta[name="description"]')?.content || 'Japanese roots. West Coast curiosity.', url: document.querySelector('link[rel="canonical"]')?.href || location.origin + location.pathname };
  try {
    if (navigator.share) await navigator.share(data);
    else if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(data.url);
      announce(isJapanese ? 'リンクをコピーしました。' : 'Link copied. Share a little culture.');
    } else announce(isJapanese ? 'アドレスバーのURLをコピーして共有してください。' : 'Share this page using the URL in your address bar.');
  } catch (error) {
    if (error.name !== 'AbortError') announce(isJapanese ? 'アドレスバーのURLをコピーして共有してください。' : 'Share this page using the URL in your address bar.');
  }
});
document.querySelector('#year').textContent = new Date().getFullYear();
