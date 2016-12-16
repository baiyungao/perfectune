import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AudioModule } from './audio.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AudioModule);
