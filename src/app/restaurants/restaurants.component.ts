import { Component, OnInit } from '@angular/core';
import { EatGoApiServiceService} from '../eat-go-api-service.service'
@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  restaurants;
  constructor(private restaurantApi: EatGoApiServiceService) { }

  ngOnInit() {
    this.restaurantApi.getRestaurant().subscribe((data)=> {
      console.log(data);
      this.restaurants = data['results'];
    })
  }

}
