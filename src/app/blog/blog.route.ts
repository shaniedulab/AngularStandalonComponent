import { Route } from "@angular/router";
// import { HomeComponent } from "./home/home.component";
import { DocsComponent } from "./docs/docs.component";
import { AboutComponent } from "./about/about.component";



export default[
    {path:'home',loadComponent:()=>import('./home/home.component').then((c)=>c.HomeComponent)},
    {path:'docs',component:DocsComponent},
    {path:'about',component:AboutComponent},
    {path:'',redirectTo:'/home',pathMatch:'full'}
] as Route[];

// export const BLOG_ROUTE: Route[]=[
//     {path:'home',component:HomeComponent},
//     {path:'docs',component:DocsComponent},
//     {path:'about',component:AboutComponent},
// ]