<template>
  <div class="container">
    <div v-if="false" class="my-3 p-3 bg-grey rounded box-shadow">
      <h3 class="border-bottom border-gray pb-2 mb-0">
        <img
          src="@/assets/lens.png"
          class="mr-2"
          style="width: 50px; height: 50px"
          alt=""
        />
        <span class="mr-2" style="color: Grey"
          ><i class="fas fa-genderless"></i
        ></span>
        <span>漸進多焦點鏡片</span>
      </h3>
      <div class="media text-muted pt-3">
        <img
          data-src="holder.js/32x32?theme=thumb&bg=007bff&fg=007bff&size=1"
          alt=""
          class="mr-2 rounded"
        />
        <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
          <strong class="d-block h4">多功能同時可看遠中近</strong>
          <span class="h5"
            >漸變焦距的鏡片, 可同時看遠中近, 減低不同情況 更換眼鏡的煩惱</span
          >
        </p>
      </div>
    </div>

    <div v-for="(len, index) in lens" :key="index">
      <div class="card mb-5 lens-card">
        <div class="card-header h3">
          <img
            src="@/assets/lens-blue.png"
            class="mr-2"
            style="width: 60px; height: 60px"
            alt=""
          />{{ len.title }}
        </div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>{{ len.title2 }}</p>
            <footer class="blockquote-footer">
              {{ len.content }}
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lens: [
        {
          title: "漸進多焦點鏡片",
          title2: "多功能同時可看遠中近",
          content:
            "漸變焦距的鏡片,可同時看遠中近。減低不同情況下,需要更換眼鏡的煩惱。",
        },
        {
          title: "變色鏡片",
          title2: "根據紫外光的強弱程度自動變色",
          content:
            "當紫外光較強的時候例如戶外活動鏡片會顏色會逐漸變深, 當紫外光減少的時候例如室內環境鏡片顏色會逐漸變淺接近透明. 減少紫外光進入眼睛。",
        },
        {
          title: "抗藍光鏡片",
          title2: "過濾電腦、智慧型手機發出的的藍光",
          content: "保護眼睛, 減輕由3c產品藍光所造成的眼睛疲勞。",
        },
        {
          title: "偏光鏡片",
          title2: "功能性鏡片",
          content: "減少眩光, 適合戶外活動, 例如：海上活動, 釣魚、滑雪。",
        },
        {
          title: "彩色鏡片",
          title2: "可以選擇顏色",
          content: "時尚潮流,染成最新流行顏色,配以潮流服飾。",
        },
      ],
    };
  },
};
</script>
