<template>
  <div>
    <div id="map" class="map"></div>
  </div>
</template>
<script>
export default {
  data: () => ({
    latitude: '',
    longitude: '',
  }),
  async mounted() {
    await this.location();
    await window.kakao && window.kakao.maps ? this.initMap() : this.addKakaoMapScript();
  },
  methods: {
    async location() {
      await navigator.geolocation.getCurrentPosition( (position) => {
        // console.log(position.coords.latitude)
        // console.log(position.coords.longitude)
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      });
    },
    async addKakaoMapScript() {
      const script = document.createElement('script');
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=f6b25d8f52dfd44c17d352b033337361';
      document.head.appendChild(script);
    },
    async initMap() {
      const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
      const options = {
        //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(this.latitude, this.longitude), //지도의 중심좌표.
        level: 3, //지도의 레벨(확대, 축소 정도)
      };

      const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

      const positions = [
        {
          title: '현위치', 
          latlng: new kakao.maps.LatLng(this.latitude, this.longitude)
        },
      ];

      // 마커 이미지의 이미지 주소입니다
      var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
          
      for (var i = 0; i < positions.length; i ++) {
          
          // 마커 이미지의 이미지 크기 입니다
          var imageSize = new kakao.maps.Size(24, 35); 
          
          // 마커 이미지를 생성합니다    
          var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
          
          // 마커를 생성합니다
          var marker = new kakao.maps.Marker({
              map: map, // 마커를 표시할 지도
              position: positions[i].latlng, // 마커를 표시할 위치
              title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
              image : markerImage // 마커 이미지 
          });
      }
    },
  },
};
</script>

<style>
.map {
  width: 50%;
  height: 400px;
}
</style>