<template>
  <div class="px-2">
    Corner
    <div class="flex flex-wrap sm:inline-flex md:block lg:hidden xl:flex -mx-2">
      <div
        v-for="(n, index) in 30"
        :key="index"
        class="w-1/6 p-2 rounded overflow-hidden shadow-lg"
        @click="showPlayerDetail(index)"
      >
        <img
          class="w-full"
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExIWFhUXGBcXGBcVFhUVGBgZGhgYFxcVGhgYHSggGBolHRUXIjEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OFxAQGi0dHx0tLS0tKy0tLS0tKystLSstLSstLS0tKy0tLS0tLS0tLTctLS0rLS0tKysrLSsrLS0rN//AABEIAQEAxAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAgMEBQYBBwj/xABAEAABAwIDBQYFAgQDCAMAAAABAAIRAyEEEjEFQVFhkQYTInGBoTJSscHw0eEzQnLxFSNiBxSCg5KywuIkU6L/xAAaAQADAQEBAQAAAAAAAAAAAAAAAgMBBAUG/8QAKREBAQACAQQBAgYDAQAAAAAAAAECEQMEEiExQVFhBRMyM3GhFCJCBv/aAAwDAQACEQMRAD8A9s7pvyjoEd035R0CWhAI7pvyjoEd035R0CWhAI7pvyjoEd035R0CWhAI7lvyjoEd035R0CWhAI7pvyjoEd035R0CXKQ5/wCSgOd035R0CO6b8o6BMVccG6x5Tfoob9uUhvjzFvZZ3RuqtO6b8o6Bc7pvyjoFUDtJR4keiad2opaQ7zCX8zH6jtq87pvyjoF3um/KOgVCO1NLnHv+6k0O0VB1u8APB3h99PdH5mP1b21a9035R0CO6b8o6BdpvBuEpOUjum/KOgXO6b8o6BOIQDfdN+UdAjum/KOgTiEA33TflHQI7pvyjoE4hAN9035R0CEtCA6hdQgOIXUIDiF1NYirlExPkgFPfCi18bl1Ec3EBUu0NqOkgED2j3sqHE1cx/iA/VQz5pPSmPHtosZt4DgfJ3/r91T4rbReeHIEfU/oqr190ZJ/e6hlzZVSYSHn4tx4n1lNZ55eYCW3DDhHknhhnD/UPdJum8INQGeaj1JuW34t/RWzaYIt0O5R6tDh+clvbtm0FlTeNPf15rpcNC2eG4+hTDq7WPgkQ6CPImI5mSOhUtgnRZqxu07Y22n0SIJLJ+En6LeYDaDaokH84HgV5bhHZgfMj86K52Zi3MLXtN9/AjgVXj5LjdUmWMvl6KhRsBi21GBwPmN4PAhSl2RBxC6hAcQhCAEIQgFIQhACEIQCXugSsztbajiSAYby3+qn7YxmrRu1P6LM138T5DVc3Nya8RXjx35R8RU4z6KM544T0Xa53XKjZmjU/Q/dclydEiQ1/wDp6R91IpsnQ+hF1DD/AJXt4wWz90qo+oBLSwxyPSxkJsS1O7zLrbz0TwrHjlJ0mIJ3CVVYXa3e5qbhlqATAIc17eLSQPEOBA3cZVHh9uCnUNGqJpvEtMeEtn4mg3bzbq0gwrTFG1c7U2zkPjbkqDSZy1ANQDuP99xh5mPZUpsqNPgfYHg6YAMaGQQeYHFUPaCu5rcjz3lGp/CeTdrte5eeNjldrIjUSoXY2vno4miCYlr6e4guFx594xp/4k3azZztYz/INRtiyoCN3xGXNB4Zg/qFMwOMnC594A9Y1VVtTGipg65BkjuyP+s7vU9UrC1f/g/1aDkZJHsi4+GyrrZbpZmO+Pewt1Pqraj8I/N4H2WYwuIIaxrddJ56W8oK0DaobkaIvlYPMeJx9JCS4n2sBjalOTTc0EZiZJBMXsfsbFa3s/tjv2DMIdHodJ8jcWXl+08Zmeyk0mXyYG9siLeYn0Wu7JlrKdPK4HxDeItLTHnJ6E71bC6TynhuULjKgOhnySldNxC6hAcQuoQAhCEAJFXQpahbTxWRhI1Ngst1BGf2k8AkAzdUeKxAEn8/un9o4rLN/P6ws4+qKjgHuLQfhgEzOhkCF5ueVt8OzGahON22WmGsLvJsjqpGC2nnaczQCNRM66b1zEbFfueYHOPoq3Fu7rWte9jlMzqJi4tvkhGE+oy+y0rmm7iHbjP08t9uCye1to1cPUzNcf8Aua5vDmN8WiZEELlXaIDgQY5AuLTedJt9otCjbTxQqgbzzEza5tEExujmF1YyJWUk7cL3tcPC8XaQZnXwE75bIBt9ErbmJFQMeLNfL2n5KrfDUaI3OEmOQ4CKihg4MQdbfnnCtm4Q92W7i5pHQi3OLJvEHZUt2Nz03UKhs8MEn+VxlocOQqUmn/mu4lVnZvFmi4kzJ7sEf86kfpKcrYR8EReAOjg8fUJvEUHEyBY5d3yzfymOiNxvYZdiS2hWYD8dTKI+UAx/4qxdiZYKTZimAPWPFPll/wDyeKrf8NfqbDW978E42kcpAmCd9y463Omt43QONzcZ2VbbMxenENtvytiS821JiBv5q0/33KzvSCSZp0xv4VH30AECT8w1JgZ6g4Nbc2mfM6y7mImBwCXiMU6o6czYAytbIBDRfV1pJm8LLBpoNn0n1Xvc5wptcIc5sZ8o/lLjam2/nyUrHdoW03NoYaPBwzG8yBIB8zru4wMvTo13tysAAtrUYZPE3t+QFbbC2XUY4uqeID5Hghpvwgc9wkXsFjHqHZva76kCqCHbj4g11+dve61YK8x2EW0ajXAOyuJbVzO7wNEgMc6AMrdwcBA5r0ynoFbC7ieULQhCcoQhCAEIQgArO9oqsW4D6rQrG9s6+XvDwb/4qfL+k+HtkMdiBVfrpMNnKTBgkE6xbTj1iV8VmY5vwEA3ZaeIOhBvMyAVTU8dkcXBpHhjM64nQHxDSzjHxWtEwavF7QdVdBm1hJBPIuA04wLLnnHFtrGltOvmLabg0aWAJdzJ1J5ypuC2GHS6oS5xO8knzk6pWw8FAki/E6q+Y2Flq+GKuZsKlwUilsWlEZR6CNFOT1ELD6iD/gtOIyzyUfGbL4NlaBtNOijZDLpn6ezCRJAvAGs9fJdp7IbExC0Rp6JpzVomlDV2I0qNU2SLcR0P7rRObuUWo1YbUZ+rsZpBywPT2KpMVs0t3dAPuts5tlBrUwdyJaW4yxkcBhaRe0ZfELjM/K0wdIa32JA+iue+piqGl3izCJfSflO5rWl0z1Pi3EkqDtnAhpzAf3+iq31BUs1oaZ+KTOaLSSYDeQ3niqzy5csdV6CzH07Pa97SLPZD8hEwT3Z8LXtcQSRBGpXp2xq+eiw8o6WXguF2o4QCXS8AkmJnJknNxEASdfDN17R2GpkYOlJJJbNyDrpcWNoVOP2nl6aBCEKqYQhCAEIQgBYb/ae7u8M54iSWjz3key3KwH+1kTSp8A4n1IgfX8hLn6Nj7eTbQxBdLdA4ybaxoP6bA+kJvZlCXC2pgSZPMkpbmSRr8JHqco/VXWw9nFzrenkfz2UL6Xk8rvZ1MhunP91LCk9xDY4W3/dRHqV8OjGnwnKbkwHCEoFB1i19kB3morLp1p4IZpINTn902990SkEoGiXVEyXyl1GqM4QVjQ+2ijOYnnppmqBVTtWhLSsvh2Frqgj4QKgsI8DhOuoLSQRwcVv8Zhszefp0WKxtOHab4Plafr9VTFz5+UKo4ZgBujfO+RdfQvY6mG4LDgf/AFtN+JudPNfPdKn7/wB7L6F7IOnBYckQe7b/AHV8HPn6XKEIVEwhCEAIQhACyn+0XAZ8K54nMy4ETqYPt91qiVR4rbGGrNfRFQS5pbcEAyIgEiCsy1puO9vDhRgg8Pfl0+q2XZWiO7zHWyzmMwuSoWG0OcPX4Vr9kMii0jmY9VzOmHsWY9VVwSSrnFYdxZLQJjf+c1mcTXcwy5joHAW6/slyiuFWtOmpFKgqPD7fp8b/AJxVhS7QUd5y8yl0fuWrGBOijvCjU8Sx12uB9VIpVrrQd7m2i5/u9l01rJqpiEF8kOYoleinKuLYBd0Sor9q0h/MD7rNG2SaPNRXNLSnH7WYfhv5fkJipiL7410j9vdY3a4wUOHK6yXarCZKkgWN4948/iWwwjD3VhE/luCqu2OHzU2kagxP5wVnNaxj6JOXid356dV9B7Ew4ZQpNAgBg9xP3XieytnvrVqTWi8yY1FxO7db2Xt9HGUw4Uu8YXgAZZE/9M2VONLkS0IQqpBCEIAQhCAqe02LNPDvIEkw0DjP7SvNhXe5z21WNBsMwHhM6A8D7eS9C7Xj/IHJwPs5ZRzBJkTm97Afqubl9u3p9djO19mwALyJB6/uPdaLBsytaN0exTZo5g0HWQOhOvo4Hqpr2WCyFvsvEOhkcVR1Kl7qZjXk6KhxWAc8E7+OsfaUtuz4TTmJweFeCXOYw/MHBv7KjxuzaJnusWHE7pDvPRWdbYTXUoguqAg+LeBctE2FvoouyezZDw14cG6+NrQAM7nm4EuN4vPoLJpiXLKy+kLA03UzEnmLttHDVbDZ2PzDWTzTW1sFTzDurt+XSLG7Sfh005qLTpd3Ubz13a6GONkmXirY3wvi4lRcbiIaRN+n5ZWNN4yrP4trqtXIFjVFtHvKt82UcTA99PTmmcLsFpvUxDR5WPqVo8Ds9hqeMw0GCf5j/T8g3cfJUvaDs+e8qCncOzw4NNTwuyxv8LmwYT4yo55a+Fjg9kYVmlTMeb4HQEKzJ4aKiwWwiyk4h72OJ8LSSREAXabXM21upuzsG9uovxbb1jRLl4NjdxqsFWzU8umm5V/aGlNFx4On6iUrDPINyp9TD52kHQj9U8u08ppl8Bh3B4c1zm2IJYS0kaxI426KUMcGVBkpl5FyZIDec6l0/kqzbQEhgMaCecSegt5kIdhgHGBuyiNL6fRLfauGteXoez8R3lNj/maCpCr9hNihT/pnrcKwXXPTgvuhCELWBCEICHtfDd5Sc3fEjzF1hnUfCL6QPYH7r0QrF7SZ3VSozdOZvkb+0kf8KjzT5dHT5edKfDYUsq5h8Lozee49CfZW1VkhRH4kENHEz0j7T0U1pvCnirye1PXZdJhSsYyFGY9JT4zcLYeITxM7oTDnwumo7d9lsre0mo8M8RjkN5VLXqZqknWZPnuCl4vrzUTelt2aY6WtJ/h1VSahbUzSp9M+FV9YXWU2l62v3gnfvA1TzKgAuPZVGDfwVmHk8/NPMk7gS+o06fSElrPQJ2Umo63BKO00Ar/C0bBUuGbLgFe1Xho8mkqmCXJ70zdPP3jzo3QW1GpM8/sptKiXQJ+IgetwP+5PUaje7E6i3mrDYlPPWZazQXeomPcjolxm8j5Zax21tNgAAGgEJSAhdjgCEIQAhCEALN9r8CSG1W/E2x8jp7/VaRIqsDgQRINkuU3NGxy7bt5pjsFPwuIIOYA3Frq2wtSQDxAPW6NobMfTdBa5zdxaCR6xom8LTc1olpaJOWQRIndPmuaSyuvPKWSuYxkhVzWXVsRqFWOsYWZG46O7Traf57LjCuuqbglUVO2quWGjUqFTBUnGZe98R/ltzvf7LoxtJ8taW5m3gETG8EI03Z+nSJCr6wM6LQ0cWwNDYER6yqqvVY0kkjgL71uh3Gdl1PHkO+YKu3UVSUWt71kayT7FaBjrQs0ymHiEy8KU8JnLJQNpWyqfin8/LKTtitlpvO8jIPM2H6+iVgmQom1QXZBO8uPpYfUqnqOf3krWYZwZcg5RYNkjcIn39FsuyGEIpmo7V+n9I0956BUmyMKar2siwu4jSP3W5pUw0BosAIHkm4sflnPn47S0IQuhyhCEIAQhCAEIQgBVPaGlLA7gY6/uArZRtpUs1Nw5T0v9lmU8Nl1WNrOvEblAxTgYPFTMTeCq54sB/qIvzv1uuPKuzANelPqgBV2MrButvayocVtSo45WmRPqN5+yWVa1bbWfTc3xbr6weo0VE7DseRk8JFw4a9d6TVw9Z4NjFrWAAlKwWArWjLmje4DWIk8gITSM3UkVsQ3c10RcOjXS11EqUy+X1YcdA0iw8h91pMJsB7aJBdNRxkubpPL86LPbRwdW06tgbryTEx6yt1pnlc7HpU6d2yTpJMxyvp+y0FOsOKwVKlUHiAcG314ASFL2dtRzDDp5JW7bOo5GHglV9CvnHqpmHsHHl/ZE9lyvhbYV0kq8wOyqVSmHVGAmTBMyBOkjyWcwBsea3GFZlY0cAF0YTbl5LoYfDtYMrGho4AQnUIVkQhCEAIQhACEIQAhCEALhXUIDC7XpZKjm8D7G4+qr6m/zB/VWnacxXd6EecKpze9uq4+T27OP1EDH4Ev03W/PzcqDa+yKtItfTe0NJ8XhkjXRa6k6DfyTOObmEbkmKzPbIwzKrmtfXcHuzS3wzaOUaH8utFQ7OtcxrmVjff4XA8NPLis/X2YG/Fca/kp/C7OBjLIvILSWmeILTYqum3C+5kvG9nqwlvfDLvOU8ufP2Sa3Z5jJNSubAG5a3jczusmRsvEG5q1oAsc7wb883L2UPE7LbMvJcRvcS4+UuJKNFmOV/wCldtBlEfw67nuyFwDbibQC6IaTO/gVB2dsfEvaalV4dB+EAaG1jvIVpTw+Z1hAG9aDBwLDRLb4NZr52i4WiWx+fm9TaDfAeZA95SapE2TlPSPVJE8krA2vw/At6F55Sqf5jWToQXee4dPqvQwuricvK6hCFVIIQhACEIQAhCEAIQhACEIQGK7X0pqO/paqB24/k/hWm7T/AMU/0t+6zzmXI4rj5PddnH+mE6hcz2lN58qccIupxWGK0HUfso9Ko1lg73UuA6x38VGxGy2kiJ36H88vVNKbz8JVLbDYyh0neZEWsfoo9Wu12rpVS3sxUBJz65pAO4yQYOhv0HFW1LZTQQ4uNxcQAPO+hlNcqWHKRGgFk+HZU5lAFrKPIJ/Pqlb6PUb3UujvJ3X/AECYaRYBO1TAjqtnhLLzTWzx/mZjqTr6r0sLzbD2IXpDDYK/D8o83wUhCFZAIQhACEIQAhCEAIQhACELiAyHaUzVd5N+io3q32++az/OOgCp3Liz/VXbxz/WI9diiipBINt/62U94soFemCLqNtiuiv96mTuH56lOCuCNZ00+ttFTVKJIjMddBNv3TdPE3IcLGQN1hp9k0zHlsO+YGjh6b7/AJ5KLiKv6+nGfzVZ/EY8Q0CxET01n1+q47aLjMTBLeO83Td0ZpOxm0OdtD7X9/Zcw1Q3H82g3EcvL9d6q2UiQWuOW0+5kCPNWmFaNwvx/Pql7hYtqBAEoe6bpimfZOX3x6cN3qt2yQ9QXomBfmpsPFo+i84ovW87PVc1BvKR0P6QujhqHPFkhCF0OYIQhACEIQAhCEAIQmcRiWMEucB5rLZJug3tDGtpML3mwWdxHah5Esa0TpMkxx3WS9u4ptUFou0SPOdVk8ICCQ74gbn83WXkZ9Vly8/bhlrGf27OPhkx3lPKzxLySSTJN5UN6lVSozwui1TGaDbqPWZdPwiq2QsplXicJOigPwNTTXzCvJ3Jym4JNRu2c/w+rO7pyhLbs2tvcYGlgthSa0iUiuQNE3azuZmjsyLkk+an02ABP1io7n3hY1IoJxwXKTY81wlNGO0zdT8Ltl+HIc3xNPxNJieY4EcVAYo+Pd4fUfommVnouWMvtsafbOidRB4SFOw/aOk7WRz1HtovMH4YPFxP57JzA4CrnDW1SBvzDMA380XFz9R1PF/tMpZ943Hp+K/Z69hcUyoJY6Qn1k9hVhRIGjTA9NxP5vWqY4G4Xf0XVzqOPfy4+Xj7MtfBSEIXakElzo1UXHbRp0hLnX4C5Posjtjbj6vhHhZwnXm79FwdZ+IcXTzzd36LcXBlyXx6W20+0QnJRgn5tw8uKoaeJe8y9xJ5mY4xwUOkCDO9SRrIXyfU/iPLzebdfZ6PHw44ekhrlCxtK+dvr9ipoTbjC5+DqcuLOZQ9x2isqSAuIfRy6fCfbkuL6vh5seXGZYoWaugFx4NojXfw/VdCWArsRikPapFViRlS2NKwlbck4irdIdQvw9kplGEbvoeDbhZIY26kPauU2rdAohJcnnNsmiihxMYz4SE+QmqrZt+FZbqboNYRk2jU6K6oUg0R15lM4HC5Bf4vpyUkCV871/W/mXsx9T+1scdFElO7P2y6i8/zNMSOEC5HAqPWdCiOauHh6rk4s+7Gi4Y5TVb7DbTpPaHB4g8TB8iChefALq9uf+guvOLm/wAKfVN2x/Ff5lQGb11C8v8AEP38nTw/oh5iWxCF51Ofbp0SaqELAa/ld5KIEIX0n4P+1f5S5PZ1uqUF1C9lIVNyaCEIoOb0PQhYDVXchi6hDS3blHdp6j6oQsZCeCfwf8Rvr9EIUep/ay/g09ppS2oQvjr7XhmrqmXoQkMQhCFof//Z"
          alt="image"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{ index }}</div>
        </div>
      </div>
    </div>
    <!--Modal-->
    <Modal :showing="exampleModalShowing" @close="exampleModalShowing = false">
      <h2 class="text-xl font-bold text-gray-900">NAME</h2>
      <div class="flex flex-wrap -mx-1">
        <img class="w-1/4 h-full" :src="content.bild" alt="Foto" />
        <ul>
          <li>Geburtstag: {{ content.name }}</li>
          <li>Grösse: {{ content.name }}</li>
          <li>Position: {{ content.name }}</li>
          <li>Trikotnummer: {{ content.name }}</li>
          <li>Motto: {{ content.name }}</li>
        </ul>
        <div class="flex flex-wrap -mx-1">
          <img class="w-1/3 h-full" :src="content.trikot" alt="Auto" />
          <img class="w-1/3 h-full" :src="content.auto" alt="Schuhe" />
          <img class="w-1/3 h-full" :src="content.schuhe" alt="Trikot" />
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from '@/components/Modal.vue'

export default {
  name: 'FashionCorner',
  components: {
    Modal,
  },
  data: function() {
    return {
      exampleModalShowing: false,
      content: {},
    }
  },
  methods: {
    showPlayerDetail: function(index) {
      this.exampleModalShowing = true
      this.content = {
        name: index,
        bild:
          'https://fcbliveradio.ch/wp-content/uploads/2019/01/16-Fasnacht-148x300.png',
        trikot:
          'https://cdn.shopify.com/s/files/1/0033/0812/6308/products/IMG_4626_Trikot_N01-001_front_1000x.jpg?v=1562312948',
        auto:
          'https://www.cstatic-images.com/car-pictures/xl/USC80TSC032A021001.jpg',
        schuhe:
          'https://images-na.ssl-images-amazon.com/images/I/81yBgsPUnhL._UX500_.jpg',
      }
    },
  },
}
</script>

<style scoped lang="scss"></style>
