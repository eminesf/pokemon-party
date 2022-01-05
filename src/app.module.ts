import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PartyModule } from './party/party.module';
import { PokemonsService } from './pokemons/pokemons.service';
import { PokemonsController } from './pokemons/pokemons.controller';
import { PokemonsModule } from './pokemons/pokemons.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWD}@cluster0.owsov.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    ),
    PartyModule,
    PokemonsModule,
    HttpModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
