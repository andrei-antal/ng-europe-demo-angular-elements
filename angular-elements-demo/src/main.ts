import 'zone.js/dist/zone';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// the new elements module
import { registerAsCustomElements } from '@angular/elements';

import { CustomElementsModule } from './custom-elements.module';
import { MyRatingComponent } from './my-rating.component';

//
registerAsCustomElements([MyRatingComponent], () =>
  platformBrowserDynamic().bootstrapModule(CustomElementsModule),
);
