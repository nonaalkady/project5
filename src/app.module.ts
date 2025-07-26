import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ProductsModule
        // TypeOrmModule.forRoot(Options),
        // ConfigModule.forRoot({
        //     isGlobal: true,
        //     envFilePath: process.env.NODE_ENV !== 'production' ? `.env.${process.env.NODE_ENV}` : ".env"
        // }),
      ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}




/* LOCAL DATABASE */
// {
//     inject: [ConfigService],
//     useFactory: (config: ConfigService) => {
//         return {
//             type: 'postgres',
//             database: config.get<string>("DB_DATABASE"),
//             username: config.get<string>("DB_USERNAME"),
//             password: config.get<string>("DB_PASSWORD"),
//             port: config.get<number>("DB_PORT"),
//             host: 'localhost',
//             synchronize: process.env.NODE_ENV !== 'production',
//             entities: [Product, User, Review]
//         }
//     }
// }