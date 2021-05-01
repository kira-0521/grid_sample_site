<template>
  <div class="layout">
      <header class="header">
	      <div class="container">
		      <div class="site">
			      <a href="base-index.html">
				      <img src="images/logo.svg" alt="ESSENTIALS">
			      </a>
		      </div>
		      <nav class="nav">
			      <ul>
				      <li><a href="base-index.html">TOP</a></li>
				      <li><a href="base-about.html">ABOUT</a></li>
			      </ul>
		      </nav>
	      </div>
      </header>
      <slot/>
      <footer class="footer">
	      <div class="container">
		      <div class="site">
		      <a href="base-index.html">
			      <img src="images/logo-w.svg" alt="ESSENTIALS">
			      <p>おいしい食材と食事を探求するサイト</p>
		      </a>
		      </div>
		      <ul class="sns">
			      <li>
				      <a href="https://twitter.com/">
					      <i class="fab fa-twitter"></i>
					      <span class="sr-only">Twitter</span>
				      </a>
			      </li>
			      <li>
				      <a href="https://facebook.com/">
					      <i class="fab fa-facebook-square"></i>
					      <span class="sr-only">Facebook</span>
				      </a>
			      </li>
			      <li>
				      <a href="http://instagram.com/">
					      <i class="fab fa-instagram"></i>
					      <span class="sr-only">Instagram</span>
				      </a>
			      </li>
		      </ul>
	      </div>
      </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

