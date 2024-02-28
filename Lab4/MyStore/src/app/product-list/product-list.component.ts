import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
<<<<<<< HEAD
  styleUrls: ['./product-list.component.css'],
=======
  styleUrls: ['./product-list.component.css']
>>>>>>> d221a398710ac1fa068f3381d0777e558bd967c4
})
export class ProductListComponent {
  products = [...products];

  share(link: string) {
    const shareMessage = `Product:  ${link}`;
<<<<<<< HEAD
    const telegramLink = `https://t.me/share/url?url=${encodeURIComponent(
      shareMessage
    )}`;
    window.location.href = telegramLink;
  }
}
=======
    const telegramLink = `https://t.me/share/url?url=${encodeURIComponent(shareMessage)}`;
    window.location.href = telegramLink;
  }
}
>>>>>>> d221a398710ac1fa068f3381d0777e558bd967c4
