declare namespace Express {
    export interface Request {
      userId: number
      token: string
      cacheKey:string
      cache:any
    }
  }