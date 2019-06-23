import { Module, forwardRef } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/modules/users.module';
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot('mongodb+srv://SVN7V:futebol1996santos@jesusdb-csczi.azure.mongodb.net/test?retryWrites=true&w=majority', {
      useNewUrlParser: true
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})

export class AppModule { }
