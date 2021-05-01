<template>
  <Layout>
    <div>
      <section class="hero">
	      <figure>
		      <g-image src="~/images/hero.jpg" alt="" />
	      </figure>
	      <div class="catch">
		      <h1>There is no love sincerer than<br> the love of food.</h1>
		      <p>食物を愛するよりも誠実な愛はある ― バーナード・ジョーー</p>
	      </div>
	      <div class="wave">
		      <g-image src="~/images/wave.svg" alt="" />
	      </div>
      </section>
      <section class="food">
	      <div class="container">
		      <h2 class="bar">Food <span>Essence</span></h2>
		      <div class="details">
			      <div class="detail">
				      <figure>
					      <g-image src="~/images/fruit.jpg" alt="" />
				      </figure>
				      <h3>フルーツ</h3>
				      <p>FRUIT</p>
				      <p>甘くてすっぱくておいしい果実たち。<br>旬のフルーツを満喫します。</p>
			      </div>
			      <div class="detail">
				      <figure>
					      <g-image src="~/images/grain.jpg" alt="" />
				      </figure>
				      <h3>穀物</h3>
				      <p>GRAIN</p>
				      <p>食事の基本となる穀物。<br>毎日の活動のエネルギー源になります。</p>
			      </div>
			      <div class="detail">
				      <figure>
					      <g-image src="~/images/beverage.jpg" alt="" />
				      </figure>
				      <h3>飲み物</h3>
				      <p>BEVERAGE</p>
				      <p>リラックスするのに欠かせない飲み物。<br>お気に入りの一杯はありますか？</p>
			      </div>
		      </div>
	      </div>
      </section>
      <section class="photo">
	      <h2 class="sr-only">Photo</h2>
	      <figure>
		      <g-image src="~/images/berry.jpg" alt="赤く熟したベリー" />
	      </figure>
      </section>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'titleいじれるよ'
  }
}
</script>

