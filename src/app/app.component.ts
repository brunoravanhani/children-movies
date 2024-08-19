import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatCardModule, MatButtonModule,  MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'children-movies';
  movies = this.getData();

  getData () {
    var data =
      {
        "data": [
          {
            "name": "O Expresso Polar",
            "image": "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/eOoCzH0MqeGr2taUZO4SwG416PF.jpg",
            "description": "",
            "type": "movie",
            "streams": [
              {
                "name": "Amazon Prime",
                "link": "https://www.primevideo.com/dp/amzn1.dv.gti.71df62ca-d7a1-4626-aa07-27836d37e8d9?autoplay=0&ref_=atv_cf_strg_wb"
              },
              {
                "name": "Youtube",
                "link": "https://www.youtube.com/watch?v=eXXTrj7Zpwo"
              }
            ],
            "tags": ["menino", "menina"]
          },
          {
            "name": "Pets 2",
            "image": "https://i.ytimg.com/vi_webp/d98nho-OgfI/movieposter.webp",
            "description": "",
            "type": "movie",
            "streams": [
              {
                "name": "Youtube",
                "link": "https://www.youtube.com/watch?v=d98nho-OgfI"
              }
            ],
            "tags": ["menino", "menina"]
          },
          {
            "name": "O Bom Dinossauro",
            "image": "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/8RSkxOO80btfKjyiC5ZiTaCHIT8.jpg",
            "description": "",
            "type": "movie",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/the-good-dinosaur/6xKEV7M8fiiu?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkHXkuy6RwHJyY0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=0d01003a-9753-4dff-9500-0de4665e1593&dclid=CjgKEAjw0_WyBhD56bTIpaW86wwSJAAwYeA0chV2lZ7snsg9hIQAkhqWqE0NGZYycIf8Q47ZTaB7UvD_BwE"
              }
            ],
            "tags": ["menino", "menina"]
          },
          {
            "name": "Carros: na estrada",
            "image": "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/6QXirTPUQecr1BAEfgVSXPD1np0.jpg",
            "description": "",
            "type": "serie",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/series/cars-on-the-road/1xLouZmjyMHu?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkHXkrUrRwHJyY0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=06010003-c96a-4675-ba00-0869665e169c&dclid=CjgKEAjw0_WyBhD56bTIpaW86wwSJAAwYeA0IDMT0BeeQDuvVQGA9MCPXzCUdfJZt88LRdB_XVMMp_D_BwE"
              }
            ],
            "tags": ["menino", "menina"]
          },
          {
            "name": "Enrolados (Rapunzel)",
            "image": "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/wZzVkdnc0kw20lSJc13ZmgTPah3.jpg",
            "description": "",
            "type": "movie",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/tangled/3V3ALy4SHStq?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkC0zHSrRwHOQs0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=0b010026-00d7-4393-b800-20e3667ad1f8&dclid=CjgKEAjw1emzBhDBt_XU8IDS7Q0SJADR5XhZkAEBBmP3LT-QzTf2vIFOWADEAy28UhGwGdQCUsPfIPD_BwE"
              }
            ],
            "tags": ["menina"]
          },
          {
            "name": "Moana",
            "image": "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/4rxEeTzN1oZPJo1GBoPOnA3NeJv.jpg",
            "description": "",
            "type": "movie",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/moana/70GoJHflgHH9?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkC0zHQ7RwHOQs0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=0701003b-3ddf-4bd9-b800-2275667ad1ce&dclid=CjgKEAjw1emzBhDBt_XU8IDS7Q0SJADR5XhZCLu2TuiJs9vsIUqFGjpIulJOIH-c1yDPWZB3_8EEpvD_BwE"
              }
            ],
            "tags": ["menina"]
          },
          {
            "name": "Valente",
            "image": "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/jX9O3eyzfw937QOhRF4wz6nhxBM.jpg",
            "description": "",
            "type": "movie",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/brave/ovUp92sPbaSW?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkC0zHyDRwHOQs0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=08010012-3074-4258-bb00-0dc3667ad176&dclid=CjgKEAjw1emzBhDBt_XU8IDS7Q0SJADR5XhZKveWJITBpQ45yD0GBH85r_ZdHWjWmoj3m_uwog7cAPD_BwE"
              }
            ],
            "tags": ["menina"]
          },
          {
            "name": "As Crônicas de Narnia",
            "image": "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/sLw1gxPAvkqhp5XrdO2A50Q5lTW.jpg",
            "description": "",
            "type": "movie",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/chronicles-of-narnia-the-lion-the-witch-and-the-wardrobe/4rcSmuEmfIvs?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkC0zHzTRwHOQs0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=0901003b-ee89-4cf7-ba00-05e4667ad132&dclid=CjgKEAjw1emzBhDBt_XU8IDS7Q0SJADR5XhZ0POJ642wZzuEYKixUGB70MZPTT5pV-h8goTsB9P1ffD_BwE"
              }
            ],
            "tags": ["menino", "menina"]
          },
          {
            "name": "Como Treinar o Seu Dragão",
            "image": "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/unDtQ5SwuXJLJW6WB3F9yaSfIbl.jpg",
            "description": "",
            "type": "movie",
            "streams": [],
            "tags": ["menino"]
          },
          {
            "name": "Como Treinar o Seu Dragão 2",
            "image": "https://image.tmdb.org/t/p/w1280/3scupRmZJ3zrDS29XeUQKm8nu3U.jpg",
            "description": "",
            "type": "movie",
            "streams": [{
              "name": "Prime Video",
              "link": "https://www.primevideo.com/detail/0RZDRRAVQ2XV5W4I3T6Z22RAC0/ref=atv_dl_rdr?tag=justbrrsjd-20"
            }],
            "tags": ["menino"]
          },
          {
            "name": "Toy Story: Um Mundo de Aventuras",
            "image": "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/6AafgfifXkFS4g2xGJZIwsPQK6P.jpg",
            "description": "",
            "type": "movie",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/toy-story/1Ye1nzUgtF7d?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkC0m43KRwHM3A0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=0a010024-669f-490c-a800-1682667eaf6b&dclid=CNPT6YGp_oYDFe8-uQYd5iMJMA"
              }
            ],
            "tags": ["menino", "menina"]
          },
          {
            "name": "Toy Story 2",
            "image": "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/yjzb9ojVSEw9vg5kp22ijPKXyMF.jpg",
            "description": "",
            "type": "movie",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/toy-story-2/6eunXQzaXkGr?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkC0m4yqRwHM3A0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=02010033-d17b-4ee0-8300-1ab6667eaf79&dclid=CIbuooip_oYDFfgHuQYduQoARA"
              }
            ],
            "tags": ["menino", "menina"]
          },
          {
            "name": "Toy Story 3",
            "image": "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/AbbXspMOwdvwWZgVN0nabZq03Ec.jpg",
            "description": "",
            "type": "movie",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/toy-story-3/5i3MkHrmohAt?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkC0m9wjRwHM3A0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=0401001e-990a-4bef-b500-25ca667eb044&dclid=CPW4h-mp_oYDFa9M3QId4HIMOA"
              }
            ],
            "tags": ["menino", "menina"]
          },
          {
            "name": "Toy Story 4",
            "image": "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/csiyO6q8rR74pfgJDjwINzhoick.jpg",
            "description": "",
            "type": "movie",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/toy-story-4/2CtjW4tKzIHp?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkC0m4UyRwHM3A0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=0401004d-2d57-4f29-8e00-2312667eaf81&dclid=CPHBh4yp_oYDFQgnuQYd9xwN0A"
              }
            ],
            "tags": ["menino", "menina"]
          },
          {
            "name": "Raya e o Último Dragão",
            "image": "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/yXrb84zJidCefyhTWHwo4yCDvwz.jpg",
            "description": "",
            "type": "movie",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/raya-and-the-last-dragon/6dyengbx3iYK?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkC0mPVaRwHM3A0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=02010031-fd36-4f16-8700-257f667ea1dd&dclid=CJ7JqYuc_oYDFeZc3QIdofsGWw"
              }
            ],
            "tags": ["menino", "menina"]
          },
          {
            "name": "Zootopia",
            "image": "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/wtlvxzM7FUGZTSDX4SBGaJ8gBJZ.jpg",
            "description": "",
            "type": "movie",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/zootropolis/1QOxldhm1sKg?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkC0mP0yRwHM3A0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=00010004-fd4b-4538-b500-0481667ea101&dclid=CKGVkqKb_oYDFUZK3QId9vsI4w"
              }
            ],
            "tags": ["menino", "menina"]
          },
          {
            "name": "101 Dálmatas",
            "image": "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/117iq8a3s1umK391ZribC7JqNTt.jpg",
            "description": "",
            "type": "movie",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/101-dalmatians/7NOwGGV7R7kE?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkC0mNSbRwHM3A0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=0a010046-5544-4dff-a400-0db0667ea0fc&dclid=CMfV45-b_oYDFeZc3QIdofsGWw"
              }
            ],
            "tags": ["menino", "menina"]
          },
          {
            "name": "Frozen: Uma Aventura Congelante",
            "image": "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/hOZKUJGN0m717LRSQDxhgABqWrf.jpg",
            "description": "",
            "type": "movie",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/frozen/4uKGzAJi3ROz?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkC0mNRiRwHM3A0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=0201004c-066b-441b-8800-1e38667ea095&dclid=CLuzw-6a_oYDFZpU3QId_0oNAA"
              }
            ],
            "tags": ["menina"]
          },
          {
            "name": "Frozen 2",
            "image": "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/uVHishB6G4T6BOnUsV4JgdJXdIz.jpg",
            "description": "",
            "type": "movie",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/frozen-2/28vdy71kJrjb?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkC0mNQyRwHM3A0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=0501000e-0d41-4c52-8800-0fa3667ea0c1&dclid=CIvL6YOb_oYDFQZM3QIdrEcNLw"
              }
            ],
            "tags": ["menina"]
          },
          {
            "name": "Cinderela",
            "image": "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/4DsfRsCxrhkHQHGLeY9m8oi9q46.jpg",
            "description": "",
            "type": "movie",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/cinderella/5LeF5voLnYgB?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkC0mNzDRwHM3A0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=0e01000c-aff7-4cb0-a200-0eb8667ea036&dclid=CKiCxcGa_oYDFd5V3QIduwgKaw"
              }
            ],
            "tags": ["menina"]
          },
          {
            "name": "Cinderela",
            "image": "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/Acj5mmoZQ5lKLNpU2y0XQCt5rNb.jpg",
            "description": "",
            "type": "movie",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/cinderella/VJPw3bEy9iHj?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkC0mNwbRwHM3A0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=01010046-4bc7-47da-ab00-059a667ea04c&dclid=CJvs9cua_oYDFbJU3QIdv7kGFw"
              }
            ],
            "tags": ["menina"]
          },
          {
            "name": "A Bela e a Fera",
            "image": "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/is4c02QuP70BCVLp27SSlDeByoe.jpg",
            "description": "",
            "type": "movie",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/beauty-and-the-beast/3oEh78YRc9VN?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkC0mIVaRwHM3A0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=0701003f-88e5-48b2-ae00-06ce667e9fdd&dclid=CPa6iJea_oYDFepI3QIdPwICAg"
              }
            ],
            "tags": ["menina"]
          },
          {
            "name": "A Bela e a Fera",
            "image": "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/9V4wl4rnUcLfGuTe4J5NjOFbDil.jpg",
            "description": "",
            "type": "movie",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/beauty-and-the-beast/227lND2lKmLZ?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkC0mITSRwHM3A0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=03010006-7ead-45c7-8f00-05fe667e9fb3&dclid=CNGEh4Oa_oYDFfdM3QIdcKgJ_w"
              }
            ],
            "tags": ["menina"]
          },
          {
            "name": "A Bela Adormecida",
            "image": "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/iRYRBWKhwPI5lBT4DPhmNpmBOMU.jpg",
            "description": "",
            "type": "movie",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/sleeping-beauty/1rc2EavpNV7U?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkC0XzwjRwHM3A0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=0a010041-f3a9-4097-9800-1543667d7644&dclid=CPOcp6_--4YDFW1K3QIdHIELAg"
              }
            ],
            "tags": ["menina"]
          },
          {
            "name": "Ratatouille",
            "image": "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/lpyqGZXjaPpr2dzkD9XD5DUGMkN.jpg",
            "description": "",
            "type": "movie",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/ratatouille/4zRnUvYGbUZG?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkC0X2X7RwHM3A0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=02010019-b6e6-4499-a700-17fc667d75ee&dclid=CMnZoYb--4YDFblK3QIdE8gGRg"
              }
            ],
            "tags": ["menino", "menina"]
          },
          {
            "name": "Procurando Nemo",
            "image": "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/5jrPMq7IMLTqcuPDlK6jfruEbpq.jpg",
            "description": "",
            "type": "movie",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/finding-nemo/5Gpj2XqF7BV2?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkC0X2WKRwHM3A0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=0e010048-573c-439a-a500-1c17667d75ab&dclid=CKKT_uX9-4YDFdtc3QIdrTEJVA"
              }
            ],
            "tags": ["menino", "menina"]
          },
          {
            "name": "Procurando Dory",
            "image": "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/5MOyKnmtE2hd778bIybw9v8HkiP.jpg",
            "description": "",
            "type": "movie",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/finding-dory/2L6w30vnqebX?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkC0X2WDRwHM3A0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=0e010000-0ef6-4c90-a000-16b2667d75a7&dclid=CJv1geT9-4YDFR5V3QIdKZEHyA"
              }
            ],
            "tags": ["menino", "menina"]
          },
          {
            "name": "Klaus",
            "image": "https://media.themoviedb.org/t/p/original/guyZW9AQdTMp2F4esttjyIMMK1k.jpg",
            "description": "",
            "type": "movie",
            "streams": [
              {
                "name": "Netflix",
                "link": "https://www.netflix.com/br/title/80183187"
              }
            ],
            "tags": ["menino", "menina"]
          },
          {
            "name": "Irmão Urso",
            "image": "https://image.tmdb.org/t/p/w1280/pFRQgHiZwHTX7LmHEI0hwocuBC3.jpg",
            "description": "",
            "type": "movie",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/brother-bear/2asiYJlL0GMa?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkCwvF0bRwHJQE0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=0c01004b-4e42-43b6-9500-154866c3900c&dclid=CjkKEQjw2ou2BhC70qD70d6lzaIBEiQAlVkkqhfs1OFfmGY6fQlmzGqw2OQIm4o7lmFwVddNAnMH6C_w_wcB"
              }
            ],
            "tags": ["menino", "menina"]
          },
          {
            "name": "Irmão Urso 2",
            "image": "https://image.tmdb.org/t/p/w1280/r4kOIrwYMXInmFH8eaJ6kDoAkUW.jpg",
            "description": "",
            "type": "movie",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/brother-bear-2/3aRi2Elfcl2U?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkCwvF1jRwHJQE0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=0a010010-389b-46a8-9500-13e266c39054&dclid=CjkKEQjw2ou2BhC70qD70d6lzaIBEiQAlVkkqkozgn5FInirLul8Tt9XnUQoSRYxtOa-B5Mu3xpX7Efw_wcB"
              }
            ],
            "tags": ["menino", "menina"]
          },
          {
            "name": "Spirit: O Corcel Indomável",
            "image": "https://image.tmdb.org/t/p/w1280/qJ8fF5Uoy9WLrUvCXU26VJrfa5r.jpg",
            "description": "",
            "type": "movie",
            "streams": [
              {
                "name": "Netfix",
                "link": "https://www.netflix.com/br/title/60020810"
              }
            ],
            "tags": ["menino"]
          },
          {
            "name": "A Guarda do Leão",
            "image": "https://image.tmdb.org/t/p/w1280/7hab4OnSLtgULjai9pHMQoo6Yap.jpg",
            "description": "",
            "type": "serie",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/series/the-lion-guard/3sJT6PU2gT88?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkCwvHz7RwHJQE0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=0601002a-8ba5-411a-a200-0cea66c3913e&dclid=CjkKEQjw2ou2BhC70qD70d6lzaIBEiQAlVkkqi2b8TjAlPOTo5mP-ph6a1muy2t9YTE5T04hnPg53_rw_wcB"
              }
            ],
            "tags": ["menino", "menina"]
          },
          // {
          //   "name": "Pokémon",
          //   "image": "https://image.tmdb.org/t/p/w1280/ck1nfqYxMkiGvBVztIuM6b7fHoC.jpg",
          //   "description": "Assitir antes para ver se é a serie clássica",
          //   "type": "serie",
          //   "streams": [
          //     {
          //       "name": "Netflix",
          //       "link": "https://www.netflix.com/br/title/81706101"
          //     }
          //   ],
          //   "tags": ["menino",]
          // },
          {
            "name": "O Rei Leão",
            "image": "https://image.tmdb.org/t/p/w1280/8aIvm8OaJISOpVTt7rMIh7X35G5.jpg",
            "description": "",
            "type": "movie",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/the-lion-king/1HqwiEcje6Nj?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkCwvsxyRwHJQE0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=0f010002-2474-4943-b500-120d66c39311&dclid=CjkKEQjw2ou2BhC70qD70d6lzaIBEiQAlVkkqoQuNBJ1exB6aoms7p4HjIprK_dOeYnZ2WurFXPovrvw_wcB"
              }
            ],
            "tags": ["menino", "menina"]
          },
          {
            "name": "Rei Leão II: O Reino de Simba",
            "image": "https://image.tmdb.org/t/p/w1280/9GB2FntD6nBGx1EsKKOtR7v4Tza.jpg",
            "description": "",
            "type": "movie",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/the-lion-king-2-simbas-pride/7EMejJ1F00Pn?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkCwvs1qRwHJQE0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=0c01002b-4b48-4855-a500-0fcf66c3935a&dclid=CjkKEQjw2ou2BhC70qD70d6lzaIBEiQAlVkkqsD8neauAjjXwpwaI50qK3BNaM2jB_U5OslNKlqsY4fw_wcB"
              }
            ],
            "tags": ["menino", "menina"]
          },
          {
            "name": "O Rei Leão",
            "image": "https://image.tmdb.org/t/p/w1280/wrHr8eEJYDAA7WYybyH162s4oZ4.jpg",
            "description": "",
            "type": "movie",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/the-lion-king/gDBvSe4GpZPD?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkCwvsWTRwHJQE0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=05010011-50e3-4398-b100-015e66c393a2&dclid=CjkKEQjw2ou2BhC70qD70d6lzaIBEiQAlVkkqkAegqiHzQDB6wg8OC-SdpFGZL61oRyzz40_Jrx1SVDw_wcB"
              }
            ],
            "tags": ["menino", "menina"]
          }
        ]
      }

    return data.data;
  }
}

