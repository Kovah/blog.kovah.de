export function loadSyntaxHighlighter(){
  const $post = document.querySelector('article.post pre');
  console.log($post); //@DEBUG

  if ($post !== null) {
    const $highlightScript = document.getElementById('highlight-script');
    $highlightScript.src = $highlightScript.dataset.src;
  }
}
