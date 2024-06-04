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
  movies = [
    {
      name: 'O Expresso Polar',
      image: 'https://media.themoviedb.org/t/p/w188_and_h282_bestv2/eOoCzH0MqeGr2taUZO4SwG416PF.jpg',
      description: '',
      type: 'movie',
      streams: [
        {
          name: "Amazon Prime",
          link: 'https://www.primevideo.com/dp/amzn1.dv.gti.71df62ca-d7a1-4626-aa07-27836d37e8d9?autoplay=0&ref_=atv_cf_strg_wb'
        },
        {
          name: "Youtube",
          link: 'https://www.youtube.com/watch?v=eXXTrj7Zpwo'
        }
      ],
      tags: ['menino', 'menina']
    },
    {
      name: 'Pets 2',
      image: 'https://i.ytimg.com/vi_webp/d98nho-OgfI/movieposter.webp',
      description: '',
      type: 'movie',
      streams: [
        {
          name: "Youtube",
          link: 'https://www.youtube.com/watch?v=d98nho-OgfI'
        }
      ],
      tags: ['menino', 'menina']
    },
    {
      name: 'O Bom Dinossauro',
      image: 'https://media.themoviedb.org/t/p/w188_and_h282_bestv2/8RSkxOO80btfKjyiC5ZiTaCHIT8.jpg',
      description: '',
      type: 'movie',
      streams: [
        {
          name: "Disney",
          link: 'https://www.disneyplus.com/pt-br/movies/the-good-dinosaur/6xKEV7M8fiiu?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkHXkuy6RwHJyY0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=0d01003a-9753-4dff-9500-0de4665e1593&dclid=CjgKEAjw0_WyBhD56bTIpaW86wwSJAAwYeA0chV2lZ7snsg9hIQAkhqWqE0NGZYycIf8Q47ZTaB7UvD_BwE'
        }
      ],
      tags: ['menino', 'menina']
    },
    {
      name: 'Carros: na estrada',
      image: 'https://media.themoviedb.org/t/p/w188_and_h282_bestv2/6QXirTPUQecr1BAEfgVSXPD1np0.jpg',
      description: '',
      type: 'movie',
      streams: [
        {
          name: "Disney",
          link: 'https://www.disneyplus.com/pt-br/series/cars-on-the-road/1xLouZmjyMHu?irclickid=2GtT7S2yFxyKRS%3AxiLxHKTcjUkHXkrUrRwHJyY0&irgwc=1&cid=DSS-Affiliate-Impact-Content-JustWatch+GmbH-705874&tgclid=06010003-c96a-4675-ba00-0869665e169c&dclid=CjgKEAjw0_WyBhD56bTIpaW86wwSJAAwYeA0IDMT0BeeQDuvVQGA9MCPXzCUdfJZt88LRdB_XVMMp_D_BwE'
        }
      ],
      tags: ['menino', 'menina']
    }
  ]
}

