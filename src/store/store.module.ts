import { Module } from '@nestjs/common';
import { StoreService } from './store.service';
import { StoreController } from './store.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Store, StoreSchema } from './schemas/store.schema';
@Module({
  providers: [StoreService],
  controllers: [StoreController],
  imports: [MongooseModule.forFeature([{ name: Store.name, schema: StoreSchema}])]
})
export class StoreModule {}
