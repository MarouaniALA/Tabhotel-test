import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  menus = [

    {

      name: 'link 1',

      submenus: [{name: 'submenu 1'}],

    },
    {

      name: 'link 2',

      submenus: [{

        name: 'submenu 2',

        submenus: [{

          name: 'submenu 3',
          submenus: [{name: 'submenu 4', submenus: [{name: 'submenu 5'}]}],


        }],

      }],

    },
    {

      name: 'link 3',

    },


  ];
}
