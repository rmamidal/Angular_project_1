// Importing required libraries.
import{ Routes, RouterModule } from '@angular/router'
import { AddMovieComponent } from './Component/add-movie.component'
import { ListMovieComponent } from './Component/list-movie.component'
import { PageNotFoundComponent } from './Component/page-not-found.component'
import { DetailsMovieComponent } from './Component/details-movie.component'

// Defining path and assigning component to it.
export const ApplicationRoutes: Routes = [
    { path:'', redirectTo:'/ListMovie', pathMatch:'full'}, /* Default routes*/
    { path:'AddMovie', component: AddMovieComponent },
    { path:'ListMovie', component: ListMovieComponent },
    { path: 'DetailsMovie/:id', component: DetailsMovieComponent},
    { path:'**', component: PageNotFoundComponent } /* Wild card routes */
]
