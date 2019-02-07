import { NgModule } from '@angular/core';

import { StarterProjectSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [StarterProjectSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [StarterProjectSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class StarterProjectSharedCommonModule {}
