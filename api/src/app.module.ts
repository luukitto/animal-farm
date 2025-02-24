import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pig } from "./entities/pig.entity";
import { databaseConfig } from "./config/database.config";
import { PigController } from "./controllers/pig.controller";
import { PigService } from "./services/pig.service";
import { Animal} from "./entities/animal.entity";
import { AnimalService} from "./services/animal.service";
import { AnimalController} from "./controllers/animal.controller";
import { MusicController } from "./controllers/music.controller";

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig),
    TypeOrmModule.forFeature([Pig, Animal])
  ],
  controllers: [PigController, AnimalController, MusicController],
  providers: [PigService, AnimalService],
})
export class AppModule {}
