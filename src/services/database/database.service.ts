import { createPool, Pool, PoolOptions } from 'mysql2/promise';
import { dbConfig } from 'src/config/database.config';

export class DatabaseService {
  private pool: Pool;

  constructor() {
    const poolOptions: PoolOptions = {
      host: dbConfig.host,
      user: dbConfig.user,
      password: dbConfig.password,
      database: dbConfig.database,
    };

    this.pool = createPool(poolOptions);
  }

  async query(sql: string, params?: any[]): Promise<any> {
    const [rows] = await this.pool.query(sql, params);
    return rows;
  }
}
