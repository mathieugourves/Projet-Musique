import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AccueilComponent } from './accueil/accueil.component';

import { JwtHelper } from 'angular2-jwt';
import { MusiqueService } from './services/musique/musique.service';
import { ArtisteService } from './services/artiste/artiste.service';
import { AlbumService } from './services/album/album.service';
import { AuthService } from './services/auth/auth.service';
import { AuthGuardService } from './services/auth/auth-guard.service';

import { ProfileArtisteComponent } from './artiste/profile-artiste/profile-artiste.component';
import { ListArtisteComponent } from './artiste/list-artiste/list-artiste.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ListAlbumComponent } from './album/list-album/list-album.component';
import { DetailAlbumComponent } from './album/detail-album/detail-album.component';
import { CreateAlbumComponent } from './album/create-album/create-album.component';
import { CreateMusicComponent } from './musique/create-music/create-music.component';
import { CreateArtistComponent } from './artiste/create-artist/create-artist.component';
import { ListMusicComponent } from './musique/list-music/list-music.component';

const appRoutes: Routes = [
    { path: 'accueil', component: AccueilComponent },
    { path: 'connexion', component: ConnexionComponent },
    { path: 'inscription', component: InscriptionComponent },
    { path: 'navigation', component: NavigationComponent },
    //Album
    { path: 'listAlbum', component: ListAlbumComponent, canActivate: [AuthGuardService] },
    { path: 'detailAlbum', component: DetailAlbumComponent },
    { path: 'createAlbum', component: CreateAlbumComponent },
    //Musique
    { path: 'listMusique', component: ListMusicComponent },
    { path: 'createMusique', component: CreateMusicComponent },
    //Artist Route
    { path: 'listArtiste', component: ListArtisteComponent },
    { path: 'profilArtiste', component: ProfileArtisteComponent },
    { path: 'createArtiste', component: CreateArtistComponent },
    //A laisser en dernier car chemin par défaut
    { path: '**', component: AccueilComponent }
];
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    declarations: [
        AppComponent,
        ConnexionComponent,
        NavigationComponent,
        AccueilComponent,
        ProfileArtisteComponent,
        ListArtisteComponent,
        InscriptionComponent,
        ListAlbumComponent,
        DetailAlbumComponent,
        CreateAlbumComponent,
        CreateMusicComponent,
        CreateArtistComponent,
        ListMusicComponent
    ],

    providers: [
        JwtHelper,
        MusiqueService,
        ArtisteService,
        AlbumService,
        AuthService,
        AuthGuardService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
