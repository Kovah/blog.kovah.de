export default function loadSyntaxHighlighter(){
  const $post = document.querySelector('article.post pre');

  if ($post !== null) {
    const $highlightScript = document.getElementById('highlight-script');
    $highlightScript.src = $highlightScript.dataset.src;
  }
}
