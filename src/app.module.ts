import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// import { AuthModule } from './resources/auth/auth.module';
// import { UsersModule } from './resources/users/users.module';
import { I18nModule } from './i18n/i18n.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    I18nModule,
    // AuthModule,
    // UsersModule,
  ],
})
export class AppModule {}
