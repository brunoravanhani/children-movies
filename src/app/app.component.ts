import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatCardModule, MatButtonModule,  MatIconModule, MatCheckboxModule, FormsModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'children-movies';
  movies = this.getData();

  filters = new FormControl('');

  search: string = "";

  filterMovies: boolean = true;
  filterSeries: boolean = true;
  filterBoy: boolean = true;
  filterGirl: boolean = true;

  searchFilter() {

    let filteredMovies = this.filter();

    if (this.search != '') {
      filteredMovies = filteredMovies.filter(x => x.name.includes(this.search));
    }

    this.movies = filteredMovies;

  }

  toggleFilter() {

    const filteredMovies = this.filter();

    this.movies = filteredMovies;
  }

  filter() {

    let filteredMovies = this.getData();

    if (!this.filterMovies) {
      filteredMovies = filteredMovies.filter(x => x.type != 'filme')
    }

    if (!this.filterSeries) {
      filteredMovies = filteredMovies.filter(x => x.type != 'serie')
    }

    const tags: string[] = [];

    if (this.filterBoy) {
      tags.push('menino');
    }

    if (this.filterGirl) {
      tags.push('menina');
    }

    filteredMovies = filteredMovies.filter(x => x.tags.some((y: string) => tags.includes(y)));

    return filteredMovies;
  }

  getData () {
    var data =
      {
        "data": [
          {
            "id": 1,
            "name": "O Expresso Polar",
            "image": "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/eOoCzH0MqeGr2taUZO4SwG416PF.jpg",
            "description": "",
            "type": "filme",
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
            "id": 2,
            "name": "Pets 2",
            "image": "https://i.ytimg.com/vi_webp/d98nho-OgfI/movieposter.webp",
            "description": "",
            "type": "filme",
            "streams": [
              {
                "name": "Youtube",
                "link": "https://www.youtube.com/watch?v=d98nho-OgfI"
              }
            ],
            "tags": ["menino", "menina"]
          },
          {
            "id": 3,
            "name": "O Bom Dinossauro",
            "image": "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/8RSkxOO80btfKjyiC5ZiTaCHIT8.jpg",
            "description": "",
            "type": "filme",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/the-good-dinosaur/6xKEV7M8fiiu?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkHXkuy6RwHJyY0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=0d01003a-9753-4dff-9500-0de4665e1593&dclid=CjgKEAjw0_WyBhD56bTIpaW86wwSJAAwYeA0chV2lZ7snsg9hIQAkhqWqE0NGZYycIf8Q47ZTaB7UvD_BwE"
              }
            ],
            "tags": ["menino", "menina"]
          },
          {
            "id": 4,
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
            "id": 5,
            "name": "Enrolados (Rapunzel)",
            "image": "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/wZzVkdnc0kw20lSJc13ZmgTPah3.jpg",
            "description": "",
            "type": "filme",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/tangled/3V3ALy4SHStq?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkC0zHSrRwHOQs0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=0b010026-00d7-4393-b800-20e3667ad1f8&dclid=CjgKEAjw1emzBhDBt_XU8IDS7Q0SJADR5XhZkAEBBmP3LT-QzTf2vIFOWADEAy28UhGwGdQCUsPfIPD_BwE"
              }
            ],
            "tags": ["menina"]
          },
          {
            "id": 6,
            "name": "Moana",
            "image": "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/4rxEeTzN1oZPJo1GBoPOnA3NeJv.jpg",
            "description": "",
            "type": "filme",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/moana/70GoJHflgHH9?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkC0zHQ7RwHOQs0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=0701003b-3ddf-4bd9-b800-2275667ad1ce&dclid=CjgKEAjw1emzBhDBt_XU8IDS7Q0SJADR5XhZCLu2TuiJs9vsIUqFGjpIulJOIH-c1yDPWZB3_8EEpvD_BwE"
              }
            ],
            "tags": ["menina"]
          },
          {
            "id": 7,
            "name": "Valente",
            "image": "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/jX9O3eyzfw937QOhRF4wz6nhxBM.jpg",
            "description": "",
            "type": "filme",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/brave/ovUp92sPbaSW?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkC0zHyDRwHOQs0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=08010012-3074-4258-bb00-0dc3667ad176&dclid=CjgKEAjw1emzBhDBt_XU8IDS7Q0SJADR5XhZKveWJITBpQ45yD0GBH85r_ZdHWjWmoj3m_uwog7cAPD_BwE"
              }
            ],
            "tags": ["menina"]
          },
          {
            "id": 8,
            "name": "As Crônicas de Narnia",
            "image": "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/sLw1gxPAvkqhp5XrdO2A50Q5lTW.jpg",
            "description": "",
            "type": "filme",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/chronicles-of-narnia-the-lion-the-witch-and-the-wardrobe/4rcSmuEmfIvs?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkC0zHzTRwHOQs0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=0901003b-ee89-4cf7-ba00-05e4667ad132&dclid=CjgKEAjw1emzBhDBt_XU8IDS7Q0SJADR5XhZ0POJ642wZzuEYKixUGB70MZPTT5pV-h8goTsB9P1ffD_BwE"
              }
            ],
            "tags": ["menino", "menina"]
          },
          {
            "id": 9,
            "name": "Como Treinar o Seu Dragão",
            "image": "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/unDtQ5SwuXJLJW6WB3F9yaSfIbl.jpg",
            "description": "",
            "type": "filme",
            "streams": [],
            "tags": ["menino"]
          },
          {
            "name": "Como Treinar o Seu Dragão 2",
            "image": "https://image.tmdb.org/t/p/w1280/3scupRmZJ3zrDS29XeUQKm8nu3U.jpg",
            "description": "",
            "type": "filme",
            "streams": [{
              "name": "Prime Video",
              "link": "https://www.primevideo.com/detail/0RZDRRAVQ2XV5W4I3T6Z22RAC0/ref=atv_dl_rdr?tag=justbrrsjd-20"
            }],
            "tags": ["menino"]
          },
          {
            "id": 10,
            "name": "Toy Story: Um Mundo de Aventuras",
            "image": "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/6AafgfifXkFS4g2xGJZIwsPQK6P.jpg",
            "description": "",
            "type": "filme",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/toy-story/1Ye1nzUgtF7d?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkC0m43KRwHM3A0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=0a010024-669f-490c-a800-1682667eaf6b&dclid=CNPT6YGp_oYDFe8-uQYd5iMJMA"
              }
            ],
            "tags": ["menino", "menina"]
          },
          {
            "id": 11,
            "name": "Toy Story 2",
            "image": "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/yjzb9ojVSEw9vg5kp22ijPKXyMF.jpg",
            "description": "",
            "type": "filme",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/toy-story-2/6eunXQzaXkGr?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkC0m4yqRwHM3A0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=02010033-d17b-4ee0-8300-1ab6667eaf79&dclid=CIbuooip_oYDFfgHuQYduQoARA"
              }
            ],
            "tags": ["menino", "menina"]
          },
          {
            "id": 12,
            "name": "Toy Story 3",
            "image": "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/AbbXspMOwdvwWZgVN0nabZq03Ec.jpg",
            "description": "",
            "type": "filme",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/toy-story-3/5i3MkHrmohAt?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkC0m9wjRwHM3A0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=0401001e-990a-4bef-b500-25ca667eb044&dclid=CPW4h-mp_oYDFa9M3QId4HIMOA"
              }
            ],
            "tags": ["menino", "menina"]
          },
          {
            "id": 13,
            "name": "Toy Story 4",
            "image": "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/csiyO6q8rR74pfgJDjwINzhoick.jpg",
            "description": "",
            "type": "filme",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/toy-story-4/2CtjW4tKzIHp?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkC0m4UyRwHM3A0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=0401004d-2d57-4f29-8e00-2312667eaf81&dclid=CPHBh4yp_oYDFQgnuQYd9xwN0A"
              }
            ],
            "tags": ["menino", "menina"]
          },
          {
            "id": 14,
            "name": "Raya e o Último Dragão",
            "image": "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/yXrb84zJidCefyhTWHwo4yCDvwz.jpg",
            "description": "",
            "type": "filme",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/raya-and-the-last-dragon/6dyengbx3iYK?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkC0mPVaRwHM3A0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=02010031-fd36-4f16-8700-257f667ea1dd&dclid=CJ7JqYuc_oYDFeZc3QIdofsGWw"
              }
            ],
            "tags": ["menino", "menina"]
          },
          {
            "id": 15,
            "name": "Zootopia",
            "image": "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/wtlvxzM7FUGZTSDX4SBGaJ8gBJZ.jpg",
            "description": "",
            "type": "filme",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/zootropolis/1QOxldhm1sKg?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkC0mP0yRwHM3A0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=00010004-fd4b-4538-b500-0481667ea101&dclid=CKGVkqKb_oYDFUZK3QId9vsI4w"
              }
            ],
            "tags": ["menino", "menina"]
          },
          {
            "id": 16,
            "name": "101 Dálmatas",
            "image": "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/117iq8a3s1umK391ZribC7JqNTt.jpg",
            "description": "",
            "type": "filme",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/101-dalmatians/7NOwGGV7R7kE?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkC0mNSbRwHM3A0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=0a010046-5544-4dff-a400-0db0667ea0fc&dclid=CMfV45-b_oYDFeZc3QIdofsGWw"
              }
            ],
            "tags": ["menino", "menina"]
          },
          {
            "id": 17,
            "name": "Frozen: Uma Aventura Congelante",
            "image": "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/hOZKUJGN0m717LRSQDxhgABqWrf.jpg",
            "description": "",
            "type": "filme",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/frozen/4uKGzAJi3ROz?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkC0mNRiRwHM3A0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=0201004c-066b-441b-8800-1e38667ea095&dclid=CLuzw-6a_oYDFZpU3QId_0oNAA"
              }
            ],
            "tags": ["menina"]
          },
          {
            "id": 18,
            "name": "Frozen 2",
            "image": "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/uVHishB6G4T6BOnUsV4JgdJXdIz.jpg",
            "description": "",
            "type": "filme",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/frozen-2/28vdy71kJrjb?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkC0mNQyRwHM3A0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=0501000e-0d41-4c52-8800-0fa3667ea0c1&dclid=CIvL6YOb_oYDFQZM3QIdrEcNLw"
              }
            ],
            "tags": ["menina"]
          },
          {
            "id": 19,
            "name": "Cinderela",
            "image": "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/4DsfRsCxrhkHQHGLeY9m8oi9q46.jpg",
            "description": "",
            "type": "filme",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/cinderella/5LeF5voLnYgB?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkC0mNzDRwHM3A0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=0e01000c-aff7-4cb0-a200-0eb8667ea036&dclid=CKiCxcGa_oYDFd5V3QIduwgKaw"
              }
            ],
            "tags": ["menina"]
          },
          {
            "id": 20,
            "name": "Cinderela",
            "image": "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/Acj5mmoZQ5lKLNpU2y0XQCt5rNb.jpg",
            "description": "",
            "type": "filme",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/cinderella/VJPw3bEy9iHj?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkC0mNwbRwHM3A0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=01010046-4bc7-47da-ab00-059a667ea04c&dclid=CJvs9cua_oYDFbJU3QIdv7kGFw"
              }
            ],
            "tags": ["menina"]
          },
          {
            "id": 21,
            "name": "A Bela e a Fera",
            "image": "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/is4c02QuP70BCVLp27SSlDeByoe.jpg",
            "description": "",
            "type": "filme",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/beauty-and-the-beast/3oEh78YRc9VN?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkC0mIVaRwHM3A0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=0701003f-88e5-48b2-ae00-06ce667e9fdd&dclid=CPa6iJea_oYDFepI3QIdPwICAg"
              }
            ],
            "tags": ["menina"]
          },
          {
            "id": 22,
            "name": "A Bela e a Fera",
            "image": "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/9V4wl4rnUcLfGuTe4J5NjOFbDil.jpg",
            "description": "",
            "type": "filme",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/beauty-and-the-beast/227lND2lKmLZ?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkC0mITSRwHM3A0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=03010006-7ead-45c7-8f00-05fe667e9fb3&dclid=CNGEh4Oa_oYDFfdM3QIdcKgJ_w"
              }
            ],
            "tags": ["menina"]
          },
          {
            "id": 23,
            "name": "A Bela Adormecida",
            "image": "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/iRYRBWKhwPI5lBT4DPhmNpmBOMU.jpg",
            "description": "",
            "type": "filme",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/sleeping-beauty/1rc2EavpNV7U?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkC0XzwjRwHM3A0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=0a010041-f3a9-4097-9800-1543667d7644&dclid=CPOcp6_--4YDFW1K3QIdHIELAg"
              }
            ],
            "tags": ["menina"]
          },
          {
            "id": 24,
            "name": "Ratatouille",
            "image": "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/lpyqGZXjaPpr2dzkD9XD5DUGMkN.jpg",
            "description": "",
            "type": "filme",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/ratatouille/4zRnUvYGbUZG?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkC0X2X7RwHM3A0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=02010019-b6e6-4499-a700-17fc667d75ee&dclid=CMnZoYb--4YDFblK3QIdE8gGRg"
              }
            ],
            "tags": ["menino", "menina"]
          },
          {
            "id": 25,
            "name": "Procurando Nemo",
            "image": "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/5jrPMq7IMLTqcuPDlK6jfruEbpq.jpg",
            "description": "",
            "type": "filme",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/finding-nemo/5Gpj2XqF7BV2?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkC0X2WKRwHM3A0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=0e010048-573c-439a-a500-1c17667d75ab&dclid=CKKT_uX9-4YDFdtc3QIdrTEJVA"
              }
            ],
            "tags": ["menino", "menina"]
          },
          {
            "id": 26,
            "name": "Procurando Dory",
            "image": "https://media.themoviedb.org/t/p/w188_and_h282_bestv2/5MOyKnmtE2hd778bIybw9v8HkiP.jpg",
            "description": "",
            "type": "filme",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/finding-dory/2L6w30vnqebX?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkC0X2WDRwHM3A0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=0e010000-0ef6-4c90-a000-16b2667d75a7&dclid=CJv1geT9-4YDFR5V3QIdKZEHyA"
              }
            ],
            "tags": ["menino", "menina"]
          },
          {
            "id": 27,
            "name": "Klaus",
            "image": "https://media.themoviedb.org/t/p/original/guyZW9AQdTMp2F4esttjyIMMK1k.jpg",
            "description": "",
            "type": "filme",
            "streams": [
              {
                "name": "Netflix",
                "link": "https://www.netflix.com/br/title/80183187"
              }
            ],
            "tags": ["menino", "menina"]
          },
          {
            "id": 28,
            "name": "Irmão Urso",
            "image": "https://image.tmdb.org/t/p/w1280/pFRQgHiZwHTX7LmHEI0hwocuBC3.jpg",
            "description": "",
            "type": "filme",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/brother-bear/2asiYJlL0GMa?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkCwvF0bRwHJQE0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=0c01004b-4e42-43b6-9500-154866c3900c&dclid=CjkKEQjw2ou2BhC70qD70d6lzaIBEiQAlVkkqhfs1OFfmGY6fQlmzGqw2OQIm4o7lmFwVddNAnMH6C_w_wcB"
              }
            ],
            "tags": ["menino", "menina"]
          },
          {
            "id": 29,
            "name": "Irmão Urso 2",
            "image": "https://image.tmdb.org/t/p/w1280/r4kOIrwYMXInmFH8eaJ6kDoAkUW.jpg",
            "description": "",
            "type": "filme",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/brother-bear-2/3aRi2Elfcl2U?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkCwvF1jRwHJQE0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=0a010010-389b-46a8-9500-13e266c39054&dclid=CjkKEQjw2ou2BhC70qD70d6lzaIBEiQAlVkkqkozgn5FInirLul8Tt9XnUQoSRYxtOa-B5Mu3xpX7Efw_wcB"
              }
            ],
            "tags": ["menino", "menina"]
          },
          {
            "id": 30,
            "name": "Spirit: O Corcel Indomável",
            "image": "https://image.tmdb.org/t/p/w1280/qJ8fF5Uoy9WLrUvCXU26VJrfa5r.jpg",
            "description": "",
            "type": "filme",
            "streams": [
              {
                "name": "Netfix",
                "link": "https://www.netflix.com/br/title/60020810"
              }
            ],
            "tags": ["menino"]
          },
          {
            "id": 31,
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
          //   "id": 32,
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
            "id": 33,
            "name": "O Rei Leão",
            "image": "https://image.tmdb.org/t/p/w1280/8aIvm8OaJISOpVTt7rMIh7X35G5.jpg",
            "description": "",
            "type": "filme",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/the-lion-king/1HqwiEcje6Nj?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkCwvsxyRwHJQE0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=0f010002-2474-4943-b500-120d66c39311&dclid=CjkKEQjw2ou2BhC70qD70d6lzaIBEiQAlVkkqoQuNBJ1exB6aoms7p4HjIprK_dOeYnZ2WurFXPovrvw_wcB"
              }
            ],
            "tags": ["menino", "menina"]
          },
          {
            "id": 34,
            "name": "Rei Leão II: O Reino de Simba",
            "image": "https://image.tmdb.org/t/p/w1280/9GB2FntD6nBGx1EsKKOtR7v4Tza.jpg",
            "description": "",
            "type": "filme",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/the-lion-king-2-simbas-pride/7EMejJ1F00Pn?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkCwvs1qRwHJQE0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=0c01002b-4b48-4855-a500-0fcf66c3935a&dclid=CjkKEQjw2ou2BhC70qD70d6lzaIBEiQAlVkkqsD8neauAjjXwpwaI50qK3BNaM2jB_U5OslNKlqsY4fw_wcB"
              }
            ],
            "tags": ["menino", "menina"]
          },
          {
            "id": 35,
            "name": "O Rei Leão",
            "image": "https://image.tmdb.org/t/p/w1280/wrHr8eEJYDAA7WYybyH162s4oZ4.jpg",
            "description": "",
            "type": "filme",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/the-lion-king/gDBvSe4GpZPD?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkCwvsWTRwHJQE0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=05010011-50e3-4398-b100-015e66c393a2&dclid=CjkKEQjw2ou2BhC70qD70d6lzaIBEiQAlVkkqkAegqiHzQDB6wg8OC-SdpFGZL61oRyzz40_Jrx1SVDw_wcB"
              }
            ],
            "tags": ["menino", "menina"]
          },
          {
            "id": 36,
            "name": "A Origem dos Guardiões",
            "image": "https://image.tmdb.org/t/p/w1280/yK0iCFtWKFnwbbTqMd3nD06cq9g.jpg",
            "description": "",
            "type": "filme",
            "streams": [
            ],
            "tags": ["menino", "menina"]
          },
          {
            "id": 37,
            "name": "Din e o Dragão Genial",
            "image": "https://image.tmdb.org/t/p/w1280/hNhGNWn4Z9S77cOuYn2ZWfC9E7b.jpg",
            "description": "",
            "type": "filme",
            "streams": [
              {
                "name": "Netflix",
                "link": "https://www.netflix.com/br/title/81153694"
              }
            ],
            "tags": ["menino", "menina"]
          },
          {
            "id": 38,
            "name": "Mulan",
            "image": "https://image.tmdb.org/t/p/w1280/nq4taYpb2PjN1Cwni23GOZJbOaR.jpg",
            "description": "",
            "type": "filme",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/mulan/85wmj4hahA0B?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkC3XIzLRwHLWk0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=0f010007-e2ef-4005-a300-105066dd9f3b&dclid=CNb60feys4gDFbpb3QIdNG4GuA"
              }
            ],
            "tags": ["menina"]
          },
          {
            "id": 39,
            "name": "Mulan II",
            "image": "https://image.tmdb.org/t/p/w1280/lWcoRhckk3F1v1HvaMvIyc9faZA.jpg",
            "description": "",
            "type": "filme",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/mulan-ii/1qBBloz67gau?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkC3XIRLRwHLWk0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=01010010-1854-4010-b100-09ea66dd9f9a&dclid=CN2I-6Szs4gDFX1MuAQdm-INxA"
              }
            ],
            "tags": ["menina"]
          },
          {
            "id": 40,
            "name": "Os Sem Floresta",
            "image": "https://image.tmdb.org/t/p/w1280/cNPhs8Gkm1SJ4vuZDnytZnj1EsY.jpg",
            "description": "",
            "type": "filme",
            "streams": [
              {
                "name": "Netflix",
                "link": "https://www.netflix.com/br/title/70044882?s=i&trkid=14184244&vlang=pt"
              }
            ],
            "tags": ["menina", "menino"]
          },
          {
            "id": 41,
            "name": "A Bailarina",
            "image": "https://image.tmdb.org/t/p/w1280/xKPMlQ3v6KJD3u6ik3urzGesh5g.jpg",
            "description": "",
            "type": "filme",
            "streams": [
              {
                "name": "Netflix",
                "link": "https://www.netflix.com/br/title/80166318?s=i&trkid=14184244&vlang=pt"
              }
            ],
            "tags": ["menina"]
          },
          {
            "id": 42,
            "name": "O Natal de Angela",
            "image": "https://image.tmdb.org/t/p/w1280/iUUPFgIkYGb0okY1siub2wDg5Ly.jpg",
            "description": "",
            "type": "filme",
            "streams": [
              {
                "name": "Netflix",
                "link": "https://www.netflix.com/br/title/80230507?s=i&trkid=260839220&vlang=pt"
              }
            ],
            "tags": ["menina"]
          },
          {
            "id": 43,
            "name": "O presente de natal de Angela",
            "image": "https://image.tmdb.org/t/p/w1280/6TFKcVSIfIFDffi91XztloA6X7o.jpg",
            "description": "",
            "type": "filme",
            "streams": [
              {
                "name": "Netflix",
                "link": "https://www.netflix.com/br/title/81151926?s=i&trkid=200117422&vlang=pt"
              }
            ],
            "tags": ["menina"]
          },
          {
            "id": 44,
            "name": "A Estrela de Belém",
            "image": "https://image.tmdb.org/t/p/w1280/fqfmEDJpTa8qjwtNxCX6NYQs9Pr.jpg",
            "description": "",
            "type": "filme",
            "streams": [
              {
                "name": "Netflix",
                "link": "https://www.netflix.com/br/title/80121841?s=i&trkid=14184244&vlang=pt"
              }
            ],
            "tags": ["menina", "menino"]
          },
          {
            "id": 45,
            "name": "Pedro Coelho 2: O Fugitivo",
            "image": "https://image.tmdb.org/t/p/w1280/pxdSJCpqMOp3gakScrzHgGDEvVr.jpg",
            "description": "",
            "type": "filme",
            "streams": [
              {
                "name": "Netflix",
                "link": "https://www.netflix.com/br/title/81165117?s=i&trkid=200117422&vlang=pt"
              }
            ],
            "tags": ["menina", "menino"]
          },
          {
            "id": 46,
            "name": "Baby Looney Tunes",
            "image": "https://image.tmdb.org/t/p/w1280/e1ZxhAH73P3q7kIUr03qNymPW0K.jpg",
            "description": "",
            "type": "serie",
            "streams": [
              {
                "name": "Max",
                "link": "https://play.max.com/?utm_id=1100l5988&utm_source=gowatchit_gp&utm_medium=affiliate&clickref=1101lzF8XCTC"
              }
            ],
            "tags": ["menina", "menino"]
          },
          {
            "id": 47,
            "name": "Carros",
            "image": "https://image.tmdb.org/t/p/w1280/d3a9nafpB6rUWckVptwpTJ0Sy0l.jpg",
            "description": "",
            "type": "filme",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/cars/41KYquQjLwge?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkCySuyaRwHjT00&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=09010046-0413-47c3-9d00-26dc66edd57d&dclid=CjgKEAjwurS3BhCLm92-yaPknWISJACzqbdwTt4FmDSD937u0aHDyaup8BHO3U-1J1h4qQWTGZxJx_D_BwE"
              }
            ],
            "tags": ["menino"]
          },
          {
            "id": 48,
            "name": "Carros 2",
            "image": "https://image.tmdb.org/t/p/w1280/fIKaabvE40T39nOIngcZPcPJeYe.jpg",
            "description": "",
            "type": "filme",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/cars-2/1Evb1neuySt0?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkCySrxjRwHjT00&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=01010046-4d84-4747-9600-1f2766edd614&dclid=CjgKEAjwurS3BhCLm92-yaPknWISJACzqbdwTeaUFe88v_az061L-zO9UuVvrzJOXga8734gdZPnXvD_BwE"
              }
            ],
            "tags": ["menino"]
          },
          {
            "id": 49,
            "name": "Carros 3",
            "image": "https://image.tmdb.org/t/p/w1280/lVPFdORefTKXKFiSktrXbiFDNAK.jpg",
            "description": "",
            "type": "filme",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/cars-3/2uwOWguXyJe4?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkCySr3zRwHjT00&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=0d010027-cf08-4526-b400-071966edd660&dclid=CjgKEAjwurS3BhCLm92-yaPknWISJACzqbdwwDXBZPqgbnBBJAQDHtMPiTedSarxlT3TN2bjM5yYefD_BwE"
              }
            ],
            "tags": ["menino"]
          },
          {
            "id": 50,
            "name": "Os Incríveis",
            "image": "https://image.tmdb.org/t/p/w1280/z8k5EhZZTLsCRF8NWjSe6snWNZg.jpg",
            "description": "",
            "type": "filme",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/the-incredibles/4jfOKErlmVcJ?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkCWuuyzRwHJRQ0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=08010002-aa7a-4281-9000-21c767229570&dclid=CjkKEQjwsoe5BhDZtq7Dr4m69YwBEiQAV-5E7V-8aTxupqmTnahqLlcR_jXuwteCYhT3dWd6b8E1u0_w_wcB"
              }
            ],
            "tags": ["menino"]
          },
          {
            "id": 51,
            "name": "Os Incríveis 2",
            "image": "https://image.tmdb.org/t/p/w1280/y3EEb7o6NxK0pl0WsOswCos663y.jpg",
            "description": "",
            "type": "filme",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/incredibles-2/4Le2C4pyeB3J?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkCWurwjRwHJRQ0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=04010020-af8a-4b45-8700-073667229645&dclid=CjkKEQjwsoe5BhDZtq7Dr4m69YwBEiQAV-5E7RkBSGMDpdISfwbxyn2XFfoe2DGQBMGjtCayXynbNnLw_wcB"
              }
            ],
            "tags": ["menino"]
          },
          {
            "id": 52,
            "name": "A Princesa Encantada",
            "image": "https://image.tmdb.org/t/p/w1280/eK08pDC4ASwgS5OohDmZcUbLrBx.jpg",
            "description": "",
            "type": "filme",
            "streams": [
              {
                "name": "Netflix",
                "link": "https://www.netflix.com/br/title/60034386"
              }
            ],
            "tags": ["menina"]
          },
          {
            "id": 53,
            "name": "Operação Big Hero",
            "image": "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/zGuS48PShYgLwBpoRBCgzJC20uN.jpg",
            "description": "",
            "type": "filme",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/big-hero-6/4AozFbXy3sPw?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkCTQlyaRwHJSk0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=0e010033-d4a1-4dca-9700-12b3672d087d&dclid=CJem37buyokDFbkKuQYdFnI9dw"
              }
            ],
            "tags": ["menino"]
          },
          {
            "id": 54,
            "name": "Kung Fu Panda",
            "image": "https://image.tmdb.org/t/p/w1280/6figomnwyiUa2ErqK8QangIAO6c.jpg",
            "description": "",
            "type": "filme",
            "streams": [
              {
                "name": "Netflix",
                "link": "https://www.netflix.com/br/title/70075480"
              }
            ],
            "tags": ["menino"]
          },
          {
            "id": 55,
            "name": "Kung Fu Panda 3",
            "image": "https://image.tmdb.org/t/p/w1280/pXYJjUNtnLfXVKGmqi1nfGornri.jpg",
            "description": "",
            "type": "filme",
            "streams": [
              {
                "name": "Netflix",
                "link": "https://www.netflix.com/br/title/80071348"
              }
            ],
            "tags": ["menino"]
          },
          {
            "id": 56,
            "name": "As Crônicas de Nárnia: A Viagem do Peregrino da Alvorada",
            "image": "https://image.tmdb.org/t/p/w1280/vcAYeNXMJoywxccPQLrESaBJane.jpg",
            "description": "",
            "type": "filme",
            "streams": [
              {
                "name": "Disney",
                "link": "https://www.disneyplus.com/pt-br/movies/the-chronicles-of-narnia-the-voyage-of-the-dawn-treader/EZQWzqJTK2Wd?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkCVoizbRwHmxM0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=0e01001a-85e9-43d3-8a00-0ef367530a3c&dclid=CIXC87etk4oDFXZc3QId9pQbUw"
              }
            ],
            "tags": ["menino", "menina"]
          }
        ]
      }

    return data.data.sort(this.sortByName);
  }

  sortByName(a: any, b: any) {
    if (a.name < b.name) {
      return -1; // a comes before b
  }
  if (a.name > b.name) {
      return 1; // a comes after b
  }
  return 0; // a and b are equal
  }
}

