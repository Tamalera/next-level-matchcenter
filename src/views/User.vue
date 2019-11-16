<template>
  <div class="user w-full">
    <div
      class="h-screen pt-8 flex flex-col justify-center items-center bg-no-repeat bg-center bg-cover shadow-inner"
      :style="{
        backgroundImage: 'url(/images/stadion.jpg)',
      }"
    >
      <div
        class="-mt-16 flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div class="content-center">
          <div class="content-center userheader">
            <img
              src="/images/user.jpg"
              align="middle"
              class="flex shadow-inner border-double border-4 border-yellow-500 picture mx-auto "
            />
            <h1 class="text-center text-4xl">Hallo Sebastian</h1>
            <h2 class="text-center text-2xl">Willkommen im MatchCenter</h2>
          </div>
          <br />
          <div class="content-center userinfo">
            <h3 class="text-center text-xl">Benutzerinformationen</h3>
            <table class="table-fixed content-center w-full mt-2">
              <tr class="content-center">
                <th
                  class="w-1/2 px-3 py-1 leading-tight text-gray-700 font-normal text-right"
                >
                  Vorname:
                </th>
                <td class="w-1/2 px-3 py-1 leading-tight">
                  Sebastian
                </td>
              </tr>
              <tr class="content-center">
                <th
                  class="w-1/2 px-3 py-1 leading-tight text-gray-700 font-normal text-right"
                >
                  Nachname:
                </th>
                <td class="w-1/2 px-3 py-1 leading-tight">
                  Helbig
                </td>
              </tr>
              <tr class="content-center">
                <th
                  class="w-1/2 px-3 py-1 leading-tight text-gray-700 font-normal text-right"
                >
                  Alter:
                </th>
                <td class="w-1/2 px-3 py-1 leading-tight">26</td>
              </tr>
            </table>
          </div>

          <div class="wrapper mt-6 mx-auto">
            <h3 class="text-center text-xl">Deine MOHF Taler</h3>
            <div class="progress-bar mt-2 mx-auto">
              <span class="progress-bar-fill" style="width: 70%;"></span>
            </div>
            <p class="mt-3 text-center text-l text-gray-700">
              Dir fehlen noch 30 MOHF Taler bis zur Überraschung
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {}
  },
  methods: {},
}
</script>

<style>
.picture {
  border-radius: 50%;
  height: 6rem;
  width: 6rem;
}

.wrapper {
  width: auto;
}

.progress-bar {
  width: 75%;
  background-color: #e0e0e0;
  padding: 3px;
  border-radius: 3px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
}

.progress-bar-fill {
  display: block;
  height: 22px;
  background-color: #ffd400;
  border-radius: 3px;
  transition: width 500ms ease-in-out;
}
</style>
