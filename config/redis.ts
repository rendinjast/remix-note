import Redis from 'ioredis';

const redis = new Redis(process.env.REDIS_SERVER);

export default redis;
