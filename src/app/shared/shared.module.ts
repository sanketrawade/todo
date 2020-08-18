import { NgModule } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { LoaderComponent } from '../shared/loader/loader.component';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [
        HeaderComponent,
        LoaderComponent],
    imports: [
        MatCardModule,
        MatTableModule,
        MatExpansionModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatInputModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule
    ],
    exports: [
        HeaderComponent,
        LoaderComponent,
        MatCardModule,
        MatTableModule,
        MatExpansionModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatInputModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule
    ]
})
export class SharedModule {
}