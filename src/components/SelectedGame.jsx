import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import "./SelectedGame.css";

export default function SelectedGame({ game }) {
  console.log(game);
  return (
    <article id="selected-game-container">
      <img
        id="selected-game-image"
        src={game.header_image}
        alt={game.name + " thumbnail"}
      />
      <h2 id="random-game-title">{game.name}</h2>
      <p>{game.short_description}</p>

      <hr />
      {Boolean(game.screenshots.length) && (
        <Swiper
          effect={"coverflow"}
          slidesPerView={3}
          spaceBetween={10}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
          }}
          centeredSlides={true}
          pagination={{
            clickable: true
          }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
        >
          {game.screenshots.map((ss, i) => (
            <SwiperSlide key={i}>
              <img
                onClick={() => window.open(ss.path_full, "_blank")}
                src={ss.path_thumbnail}
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <hr />
      <h4>Spec requirements</h4>
      <div dangerouslySetInnerHTML={{ __html: game.pc_requirements.minimum }} />
      <br />
      <div
        dangerouslySetInnerHTML={{ __html: game.pc_requirements.recommended }}
      />
    </article>
  );
}

// {

//     "short_description": "Escape an astonishing disaster in Ring of Elysium, a battle royale shooter developed by Aurora Studio.",
//     "header_image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/755790/header.jpg?t=1693573300",
//     "pc_requirements": {
//         "minimum": "",
//         "recommended": "",
//     },
//
//
//
//     "screenshots": [
//         {
//             "id": 0,
//             "path_thumbnail": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/755790/ss_7363ea3027d5c1273d1d4d34a254a8867cab0883.600x338.jpg?t=1693573300",
//             "path_full": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/755790/ss_7363ea3027d5c1273d1d4d34a254a8867cab0883.1920x1080.jpg?t=1693573300"
//         },
//         {
//             "id": 1,
//             "path_thumbnail": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/755790/ss_d525e26f1eceb9ff8ef15821664e488f5caa1fc3.600x338.jpg?t=1693573300",
//             "path_full": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/755790/ss_d525e26f1eceb9ff8ef15821664e488f5caa1fc3.1920x1080.jpg?t=1693573300"
//         },
//         {
//             "id": 2,
//             "path_thumbnail": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/755790/ss_30646b7e26a3249d9bccff73e14571227df9f7f5.600x338.jpg?t=1693573300",
//             "path_full": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/755790/ss_30646b7e26a3249d9bccff73e14571227df9f7f5.1920x1080.jpg?t=1693573300"
//         },
//         {
//             "id": 3,
//             "path_thumbnail": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/755790/ss_929ea03ead5e5db6ceab722b3e727d7ed6ad481f.600x338.jpg?t=1693573300",
//             "path_full": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/755790/ss_929ea03ead5e5db6ceab722b3e727d7ed6ad481f.1920x1080.jpg?t=1693573300"
//         },
//         {
//             "id": 4,
//             "path_thumbnail": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/755790/ss_099712d3f039a60539de4c9bfd4d3ac6207b4db2.600x338.jpg?t=1693573300",
//             "path_full": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/755790/ss_099712d3f039a60539de4c9bfd4d3ac6207b4db2.1920x1080.jpg?t=1693573300"
//         },
//         {
//             "id": 5,
//             "path_thumbnail": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/755790/ss_97ce6f9b407b3caa158116829fc5a11605a4d5a8.600x338.jpg?t=1693573300",
//             "path_full": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/755790/ss_97ce6f9b407b3caa158116829fc5a11605a4d5a8.1920x1080.jpg?t=1693573300"
//         },
//         {
//             "id": 6,
//             "path_thumbnail": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/755790/ss_7d0c68fd88446a0280c76c6818efa8ec48e7c3cf.600x338.jpg?t=1693573300",
//             "path_full": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/755790/ss_7d0c68fd88446a0280c76c6818efa8ec48e7c3cf.1920x1080.jpg?t=1693573300"
//         },
//         {
//             "id": 7,
//             "path_thumbnail": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/755790/ss_0051158cced2eeb6acd9356f7aacb16e9c68be01.600x338.jpg?t=1693573300",
//             "path_full": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/755790/ss_0051158cced2eeb6acd9356f7aacb16e9c68be01.1920x1080.jpg?t=1693573300"
//         },
//         {
//             "id": 8,
//             "path_thumbnail": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/755790/ss_8a11dc773cd001d3a1999ea1d59aae978d448357.600x338.jpg?t=1693573300",
//             "path_full": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/755790/ss_8a11dc773cd001d3a1999ea1d59aae978d448357.1920x1080.jpg?t=1693573300"
//         },
//         {
//             "id": 9,
//             "path_thumbnail": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/755790/ss_223da96fd274c501443ac141dba0c01157915e95.600x338.jpg?t=1693573300",
//             "path_full": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/755790/ss_223da96fd274c501443ac141dba0c01157915e95.1920x1080.jpg?t=1693573300"
//         }
//     ],
//     "movies": [
//         {
//             "id": 256846366,
//             "name": "S15",
//             "thumbnail": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/256846366/movie.293x165.jpg?t=1642904137",
//             "webm": {
//                 "480": "http://video.akamai.steamstatic.com/store_trailers/256846366/movie480_vp9.webm?t=1642904137",
//                 "max": "http://video.akamai.steamstatic.com/store_trailers/256846366/movie_max_vp9.webm?t=1642904137"
//             },
//             "mp4": {
//                 "480": "http://video.akamai.steamstatic.com/store_trailers/256846366/movie480.mp4?t=1642904137",
//                 "max": "http://video.akamai.steamstatic.com/store_trailers/256846366/movie_max.mp4?t=1642904137"
//             },
//             "highlight": true
//         }
//     ],
//
//     "background": "https://store.akamai.steamstatic.com/images/storepagebackground/app/755790?t=1693573300",
//     "background_raw": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/755790/page_bg_raw.jpg?t=1693573300",
//     },
//     }
// }
