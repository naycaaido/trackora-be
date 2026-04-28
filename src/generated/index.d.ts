
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Vehicle
 * 
 */
export type Vehicle = $Result.DefaultSelection<Prisma.$VehiclePayload>
/**
 * Model MaintenanceReport
 * 
 */
export type MaintenanceReport = $Result.DefaultSelection<Prisma.$MaintenanceReportPayload>
/**
 * Model Alert
 * 
 */
export type Alert = $Result.DefaultSelection<Prisma.$AlertPayload>
/**
 * Model VehicleRepeatedIssue
 * 
 */
export type VehicleRepeatedIssue = $Result.DefaultSelection<Prisma.$VehicleRepeatedIssuePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const VehicleStatus: {
  healthy: 'healthy',
  warning: 'warning',
  critical: 'critical'
};

export type VehicleStatus = (typeof VehicleStatus)[keyof typeof VehicleStatus]


export const RiskLevel: {
  low: 'low',
  medium: 'medium',
  high: 'high'
};

export type RiskLevel = (typeof RiskLevel)[keyof typeof RiskLevel]


export const SeverityLevel: {
  low: 'low',
  medium: 'medium',
  high: 'high',
  critical: 'critical'
};

export type SeverityLevel = (typeof SeverityLevel)[keyof typeof SeverityLevel]


export const AlertType: {
  critical_risk: 'critical_risk',
  maintenance_due: 'maintenance_due',
  repeated_issue: 'repeated_issue'
};

export type AlertType = (typeof AlertType)[keyof typeof AlertType]

}

export type VehicleStatus = $Enums.VehicleStatus

export const VehicleStatus: typeof $Enums.VehicleStatus

export type RiskLevel = $Enums.RiskLevel

export const RiskLevel: typeof $Enums.RiskLevel

export type SeverityLevel = $Enums.SeverityLevel

export const SeverityLevel: typeof $Enums.SeverityLevel

export type AlertType = $Enums.AlertType

export const AlertType: typeof $Enums.AlertType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Vehicles
 * const vehicles = await prisma.vehicle.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Vehicles
   * const vehicles = await prisma.vehicle.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.vehicle`: Exposes CRUD operations for the **Vehicle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicles
    * const vehicles = await prisma.vehicle.findMany()
    * ```
    */
  get vehicle(): Prisma.VehicleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.maintenanceReport`: Exposes CRUD operations for the **MaintenanceReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MaintenanceReports
    * const maintenanceReports = await prisma.maintenanceReport.findMany()
    * ```
    */
  get maintenanceReport(): Prisma.MaintenanceReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alert`: Exposes CRUD operations for the **Alert** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alerts
    * const alerts = await prisma.alert.findMany()
    * ```
    */
  get alert(): Prisma.AlertDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicleRepeatedIssue`: Exposes CRUD operations for the **VehicleRepeatedIssue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VehicleRepeatedIssues
    * const vehicleRepeatedIssues = await prisma.vehicleRepeatedIssue.findMany()
    * ```
    */
  get vehicleRepeatedIssue(): Prisma.VehicleRepeatedIssueDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Vehicle: 'Vehicle',
    MaintenanceReport: 'MaintenanceReport',
    Alert: 'Alert',
    VehicleRepeatedIssue: 'VehicleRepeatedIssue'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "vehicle" | "maintenanceReport" | "alert" | "vehicleRepeatedIssue"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Vehicle: {
        payload: Prisma.$VehiclePayload<ExtArgs>
        fields: Prisma.VehicleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findFirst: {
            args: Prisma.VehicleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findMany: {
            args: Prisma.VehicleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          create: {
            args: Prisma.VehicleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          createMany: {
            args: Prisma.VehicleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VehicleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          delete: {
            args: Prisma.VehicleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          update: {
            args: Prisma.VehicleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          deleteMany: {
            args: Prisma.VehicleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VehicleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          upsert: {
            args: Prisma.VehicleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          aggregate: {
            args: Prisma.VehicleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicle>
          }
          groupBy: {
            args: Prisma.VehicleGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehicleCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleCountAggregateOutputType> | number
          }
        }
      }
      MaintenanceReport: {
        payload: Prisma.$MaintenanceReportPayload<ExtArgs>
        fields: Prisma.MaintenanceReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaintenanceReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaintenanceReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceReportPayload>
          }
          findFirst: {
            args: Prisma.MaintenanceReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaintenanceReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceReportPayload>
          }
          findMany: {
            args: Prisma.MaintenanceReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceReportPayload>[]
          }
          create: {
            args: Prisma.MaintenanceReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceReportPayload>
          }
          createMany: {
            args: Prisma.MaintenanceReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaintenanceReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceReportPayload>[]
          }
          delete: {
            args: Prisma.MaintenanceReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceReportPayload>
          }
          update: {
            args: Prisma.MaintenanceReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceReportPayload>
          }
          deleteMany: {
            args: Prisma.MaintenanceReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaintenanceReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MaintenanceReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceReportPayload>[]
          }
          upsert: {
            args: Prisma.MaintenanceReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceReportPayload>
          }
          aggregate: {
            args: Prisma.MaintenanceReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaintenanceReport>
          }
          groupBy: {
            args: Prisma.MaintenanceReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaintenanceReportCountArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceReportCountAggregateOutputType> | number
          }
        }
      }
      Alert: {
        payload: Prisma.$AlertPayload<ExtArgs>
        fields: Prisma.AlertFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlertFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlertFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          findFirst: {
            args: Prisma.AlertFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlertFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          findMany: {
            args: Prisma.AlertFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>[]
          }
          create: {
            args: Prisma.AlertCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          createMany: {
            args: Prisma.AlertCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlertCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>[]
          }
          delete: {
            args: Prisma.AlertDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          update: {
            args: Prisma.AlertUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          deleteMany: {
            args: Prisma.AlertDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlertUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlertUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>[]
          }
          upsert: {
            args: Prisma.AlertUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          aggregate: {
            args: Prisma.AlertAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlert>
          }
          groupBy: {
            args: Prisma.AlertGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlertGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlertCountArgs<ExtArgs>
            result: $Utils.Optional<AlertCountAggregateOutputType> | number
          }
        }
      }
      VehicleRepeatedIssue: {
        payload: Prisma.$VehicleRepeatedIssuePayload<ExtArgs>
        fields: Prisma.VehicleRepeatedIssueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleRepeatedIssueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleRepeatedIssuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleRepeatedIssueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleRepeatedIssuePayload>
          }
          findFirst: {
            args: Prisma.VehicleRepeatedIssueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleRepeatedIssuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleRepeatedIssueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleRepeatedIssuePayload>
          }
          findMany: {
            args: Prisma.VehicleRepeatedIssueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleRepeatedIssuePayload>[]
          }
          create: {
            args: Prisma.VehicleRepeatedIssueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleRepeatedIssuePayload>
          }
          createMany: {
            args: Prisma.VehicleRepeatedIssueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VehicleRepeatedIssueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleRepeatedIssuePayload>[]
          }
          delete: {
            args: Prisma.VehicleRepeatedIssueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleRepeatedIssuePayload>
          }
          update: {
            args: Prisma.VehicleRepeatedIssueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleRepeatedIssuePayload>
          }
          deleteMany: {
            args: Prisma.VehicleRepeatedIssueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleRepeatedIssueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VehicleRepeatedIssueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleRepeatedIssuePayload>[]
          }
          upsert: {
            args: Prisma.VehicleRepeatedIssueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleRepeatedIssuePayload>
          }
          aggregate: {
            args: Prisma.VehicleRepeatedIssueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicleRepeatedIssue>
          }
          groupBy: {
            args: Prisma.VehicleRepeatedIssueGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleRepeatedIssueGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehicleRepeatedIssueCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleRepeatedIssueCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    vehicle?: VehicleOmit
    maintenanceReport?: MaintenanceReportOmit
    alert?: AlertOmit
    vehicleRepeatedIssue?: VehicleRepeatedIssueOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type VehicleCountOutputType
   */

  export type VehicleCountOutputType = {
    maintenanceReports: number
    alerts: number
    repeatedIssues: number
  }

  export type VehicleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    maintenanceReports?: boolean | VehicleCountOutputTypeCountMaintenanceReportsArgs
    alerts?: boolean | VehicleCountOutputTypeCountAlertsArgs
    repeatedIssues?: boolean | VehicleCountOutputTypeCountRepeatedIssuesArgs
  }

  // Custom InputTypes
  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCountOutputType
     */
    select?: VehicleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountMaintenanceReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceReportWhereInput
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertWhereInput
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountRepeatedIssuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleRepeatedIssueWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Vehicle
   */

  export type AggregateVehicle = {
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  export type VehicleAvgAggregateOutputType = {
    healthScore: number | null
    mileage: number | null
    operatingHours: number | null
    issueCount: number | null
  }

  export type VehicleSumAggregateOutputType = {
    healthScore: number | null
    mileage: number | null
    operatingHours: number | null
    issueCount: number | null
  }

  export type VehicleMinAggregateOutputType = {
    id: string | null
    vehicleCode: string | null
    name: string | null
    type: string | null
    location: string | null
    status: $Enums.VehicleStatus | null
    healthScore: number | null
    downtimeRisk: $Enums.RiskLevel | null
    lastMaintenanceDate: Date | null
    nextMaintenanceDate: Date | null
    mileage: number | null
    operatingHours: number | null
    issueCount: number | null
    recommendation: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VehicleMaxAggregateOutputType = {
    id: string | null
    vehicleCode: string | null
    name: string | null
    type: string | null
    location: string | null
    status: $Enums.VehicleStatus | null
    healthScore: number | null
    downtimeRisk: $Enums.RiskLevel | null
    lastMaintenanceDate: Date | null
    nextMaintenanceDate: Date | null
    mileage: number | null
    operatingHours: number | null
    issueCount: number | null
    recommendation: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VehicleCountAggregateOutputType = {
    id: number
    vehicleCode: number
    name: number
    type: number
    location: number
    status: number
    healthScore: number
    downtimeRisk: number
    lastMaintenanceDate: number
    nextMaintenanceDate: number
    mileage: number
    operatingHours: number
    issueCount: number
    recommendation: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VehicleAvgAggregateInputType = {
    healthScore?: true
    mileage?: true
    operatingHours?: true
    issueCount?: true
  }

  export type VehicleSumAggregateInputType = {
    healthScore?: true
    mileage?: true
    operatingHours?: true
    issueCount?: true
  }

  export type VehicleMinAggregateInputType = {
    id?: true
    vehicleCode?: true
    name?: true
    type?: true
    location?: true
    status?: true
    healthScore?: true
    downtimeRisk?: true
    lastMaintenanceDate?: true
    nextMaintenanceDate?: true
    mileage?: true
    operatingHours?: true
    issueCount?: true
    recommendation?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VehicleMaxAggregateInputType = {
    id?: true
    vehicleCode?: true
    name?: true
    type?: true
    location?: true
    status?: true
    healthScore?: true
    downtimeRisk?: true
    lastMaintenanceDate?: true
    nextMaintenanceDate?: true
    mileage?: true
    operatingHours?: true
    issueCount?: true
    recommendation?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VehicleCountAggregateInputType = {
    id?: true
    vehicleCode?: true
    name?: true
    type?: true
    location?: true
    status?: true
    healthScore?: true
    downtimeRisk?: true
    lastMaintenanceDate?: true
    nextMaintenanceDate?: true
    mileage?: true
    operatingHours?: true
    issueCount?: true
    recommendation?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VehicleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicle to aggregate.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehicles
    **/
    _count?: true | VehicleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehicleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehicleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleMaxAggregateInputType
  }

  export type GetVehicleAggregateType<T extends VehicleAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle[P]>
      : GetScalarType<T[P], AggregateVehicle[P]>
  }




  export type VehicleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithAggregationInput | VehicleOrderByWithAggregationInput[]
    by: VehicleScalarFieldEnum[] | VehicleScalarFieldEnum
    having?: VehicleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleCountAggregateInputType | true
    _avg?: VehicleAvgAggregateInputType
    _sum?: VehicleSumAggregateInputType
    _min?: VehicleMinAggregateInputType
    _max?: VehicleMaxAggregateInputType
  }

  export type VehicleGroupByOutputType = {
    id: string
    vehicleCode: string
    name: string
    type: string
    location: string
    status: $Enums.VehicleStatus
    healthScore: number
    downtimeRisk: $Enums.RiskLevel
    lastMaintenanceDate: Date | null
    nextMaintenanceDate: Date | null
    mileage: number
    operatingHours: number
    issueCount: number
    recommendation: string | null
    createdAt: Date
    updatedAt: Date
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  type GetVehicleGroupByPayload<T extends VehicleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleGroupByOutputType[P]>
        }
      >
    >


  export type VehicleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleCode?: boolean
    name?: boolean
    type?: boolean
    location?: boolean
    status?: boolean
    healthScore?: boolean
    downtimeRisk?: boolean
    lastMaintenanceDate?: boolean
    nextMaintenanceDate?: boolean
    mileage?: boolean
    operatingHours?: boolean
    issueCount?: boolean
    recommendation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    maintenanceReports?: boolean | Vehicle$maintenanceReportsArgs<ExtArgs>
    alerts?: boolean | Vehicle$alertsArgs<ExtArgs>
    repeatedIssues?: boolean | Vehicle$repeatedIssuesArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleCode?: boolean
    name?: boolean
    type?: boolean
    location?: boolean
    status?: boolean
    healthScore?: boolean
    downtimeRisk?: boolean
    lastMaintenanceDate?: boolean
    nextMaintenanceDate?: boolean
    mileage?: boolean
    operatingHours?: boolean
    issueCount?: boolean
    recommendation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleCode?: boolean
    name?: boolean
    type?: boolean
    location?: boolean
    status?: boolean
    healthScore?: boolean
    downtimeRisk?: boolean
    lastMaintenanceDate?: boolean
    nextMaintenanceDate?: boolean
    mileage?: boolean
    operatingHours?: boolean
    issueCount?: boolean
    recommendation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectScalar = {
    id?: boolean
    vehicleCode?: boolean
    name?: boolean
    type?: boolean
    location?: boolean
    status?: boolean
    healthScore?: boolean
    downtimeRisk?: boolean
    lastMaintenanceDate?: boolean
    nextMaintenanceDate?: boolean
    mileage?: boolean
    operatingHours?: boolean
    issueCount?: boolean
    recommendation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VehicleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vehicleCode" | "name" | "type" | "location" | "status" | "healthScore" | "downtimeRisk" | "lastMaintenanceDate" | "nextMaintenanceDate" | "mileage" | "operatingHours" | "issueCount" | "recommendation" | "createdAt" | "updatedAt", ExtArgs["result"]["vehicle"]>
  export type VehicleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    maintenanceReports?: boolean | Vehicle$maintenanceReportsArgs<ExtArgs>
    alerts?: boolean | Vehicle$alertsArgs<ExtArgs>
    repeatedIssues?: boolean | Vehicle$repeatedIssuesArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VehicleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VehicleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VehiclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehicle"
    objects: {
      maintenanceReports: Prisma.$MaintenanceReportPayload<ExtArgs>[]
      alerts: Prisma.$AlertPayload<ExtArgs>[]
      repeatedIssues: Prisma.$VehicleRepeatedIssuePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vehicleCode: string
      name: string
      type: string
      location: string
      status: $Enums.VehicleStatus
      healthScore: number
      downtimeRisk: $Enums.RiskLevel
      lastMaintenanceDate: Date | null
      nextMaintenanceDate: Date | null
      mileage: number
      operatingHours: number
      issueCount: number
      recommendation: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vehicle"]>
    composites: {}
  }

  type VehicleGetPayload<S extends boolean | null | undefined | VehicleDefaultArgs> = $Result.GetResult<Prisma.$VehiclePayload, S>

  type VehicleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehicleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehicleCountAggregateInputType | true
    }

  export interface VehicleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehicle'], meta: { name: 'Vehicle' } }
    /**
     * Find zero or one Vehicle that matches the filter.
     * @param {VehicleFindUniqueArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleFindUniqueArgs>(args: SelectSubset<T, VehicleFindUniqueArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vehicle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehicleFindUniqueOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleFindFirstArgs>(args?: SelectSubset<T, VehicleFindFirstArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicles
     * const vehicles = await prisma.vehicle.findMany()
     * 
     * // Get first 10 Vehicles
     * const vehicles = await prisma.vehicle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehicleFindManyArgs>(args?: SelectSubset<T, VehicleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vehicle.
     * @param {VehicleCreateArgs} args - Arguments to create a Vehicle.
     * @example
     * // Create one Vehicle
     * const Vehicle = await prisma.vehicle.create({
     *   data: {
     *     // ... data to create a Vehicle
     *   }
     * })
     * 
     */
    create<T extends VehicleCreateArgs>(args: SelectSubset<T, VehicleCreateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vehicles.
     * @param {VehicleCreateManyArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleCreateManyArgs>(args?: SelectSubset<T, VehicleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vehicles and returns the data saved in the database.
     * @param {VehicleCreateManyAndReturnArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vehicles and only return the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VehicleCreateManyAndReturnArgs>(args?: SelectSubset<T, VehicleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vehicle.
     * @param {VehicleDeleteArgs} args - Arguments to delete one Vehicle.
     * @example
     * // Delete one Vehicle
     * const Vehicle = await prisma.vehicle.delete({
     *   where: {
     *     // ... filter to delete one Vehicle
     *   }
     * })
     * 
     */
    delete<T extends VehicleDeleteArgs>(args: SelectSubset<T, VehicleDeleteArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vehicle.
     * @param {VehicleUpdateArgs} args - Arguments to update one Vehicle.
     * @example
     * // Update one Vehicle
     * const vehicle = await prisma.vehicle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleUpdateArgs>(args: SelectSubset<T, VehicleUpdateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vehicles.
     * @param {VehicleDeleteManyArgs} args - Arguments to filter Vehicles to delete.
     * @example
     * // Delete a few Vehicles
     * const { count } = await prisma.vehicle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleDeleteManyArgs>(args?: SelectSubset<T, VehicleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleUpdateManyArgs>(args: SelectSubset<T, VehicleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles and returns the data updated in the database.
     * @param {VehicleUpdateManyAndReturnArgs} args - Arguments to update many Vehicles.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vehicles and only return the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VehicleUpdateManyAndReturnArgs>(args: SelectSubset<T, VehicleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vehicle.
     * @param {VehicleUpsertArgs} args - Arguments to update or create a Vehicle.
     * @example
     * // Update or create a Vehicle
     * const vehicle = await prisma.vehicle.upsert({
     *   create: {
     *     // ... data to create a Vehicle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle we want to update
     *   }
     * })
     */
    upsert<T extends VehicleUpsertArgs>(args: SelectSubset<T, VehicleUpsertArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleCountArgs} args - Arguments to filter Vehicles to count.
     * @example
     * // Count the number of Vehicles
     * const count = await prisma.vehicle.count({
     *   where: {
     *     // ... the filter for the Vehicles we want to count
     *   }
     * })
    **/
    count<T extends VehicleCountArgs>(
      args?: Subset<T, VehicleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VehicleAggregateArgs>(args: Subset<T, VehicleAggregateArgs>): Prisma.PrismaPromise<GetVehicleAggregateType<T>>

    /**
     * Group by Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VehicleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleGroupByArgs['orderBy'] }
        : { orderBy?: VehicleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VehicleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehicle model
   */
  readonly fields: VehicleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehicle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    maintenanceReports<T extends Vehicle$maintenanceReportsArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$maintenanceReportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    alerts<T extends Vehicle$alertsArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$alertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    repeatedIssues<T extends Vehicle$repeatedIssuesArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$repeatedIssuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleRepeatedIssuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vehicle model
   */
  interface VehicleFieldRefs {
    readonly id: FieldRef<"Vehicle", 'String'>
    readonly vehicleCode: FieldRef<"Vehicle", 'String'>
    readonly name: FieldRef<"Vehicle", 'String'>
    readonly type: FieldRef<"Vehicle", 'String'>
    readonly location: FieldRef<"Vehicle", 'String'>
    readonly status: FieldRef<"Vehicle", 'VehicleStatus'>
    readonly healthScore: FieldRef<"Vehicle", 'Int'>
    readonly downtimeRisk: FieldRef<"Vehicle", 'RiskLevel'>
    readonly lastMaintenanceDate: FieldRef<"Vehicle", 'DateTime'>
    readonly nextMaintenanceDate: FieldRef<"Vehicle", 'DateTime'>
    readonly mileage: FieldRef<"Vehicle", 'Int'>
    readonly operatingHours: FieldRef<"Vehicle", 'Int'>
    readonly issueCount: FieldRef<"Vehicle", 'Int'>
    readonly recommendation: FieldRef<"Vehicle", 'String'>
    readonly createdAt: FieldRef<"Vehicle", 'DateTime'>
    readonly updatedAt: FieldRef<"Vehicle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vehicle findUnique
   */
  export type VehicleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findUniqueOrThrow
   */
  export type VehicleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findFirst
   */
  export type VehicleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findFirstOrThrow
   */
  export type VehicleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findMany
   */
  export type VehicleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicles to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle create
   */
  export type VehicleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehicle.
     */
    data: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
  }

  /**
   * Vehicle createMany
   */
  export type VehicleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicle createManyAndReturn
   */
  export type VehicleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicle update
   */
  export type VehicleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehicle.
     */
    data: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
    /**
     * Choose, which Vehicle to update.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle updateMany
   */
  export type VehicleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
  }

  /**
   * Vehicle updateManyAndReturn
   */
  export type VehicleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
  }

  /**
   * Vehicle upsert
   */
  export type VehicleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehicle to update in case it exists.
     */
    where: VehicleWhereUniqueInput
    /**
     * In case the Vehicle found by the `where` argument doesn't exist, create a new Vehicle with this data.
     */
    create: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
    /**
     * In case the Vehicle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
  }

  /**
   * Vehicle delete
   */
  export type VehicleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter which Vehicle to delete.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle deleteMany
   */
  export type VehicleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicles to delete
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to delete.
     */
    limit?: number
  }

  /**
   * Vehicle.maintenanceReports
   */
  export type Vehicle$maintenanceReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceReport
     */
    select?: MaintenanceReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceReport
     */
    omit?: MaintenanceReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceReportInclude<ExtArgs> | null
    where?: MaintenanceReportWhereInput
    orderBy?: MaintenanceReportOrderByWithRelationInput | MaintenanceReportOrderByWithRelationInput[]
    cursor?: MaintenanceReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaintenanceReportScalarFieldEnum | MaintenanceReportScalarFieldEnum[]
  }

  /**
   * Vehicle.alerts
   */
  export type Vehicle$alertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    where?: AlertWhereInput
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    cursor?: AlertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Vehicle.repeatedIssues
   */
  export type Vehicle$repeatedIssuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleRepeatedIssue
     */
    select?: VehicleRepeatedIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleRepeatedIssue
     */
    omit?: VehicleRepeatedIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleRepeatedIssueInclude<ExtArgs> | null
    where?: VehicleRepeatedIssueWhereInput
    orderBy?: VehicleRepeatedIssueOrderByWithRelationInput | VehicleRepeatedIssueOrderByWithRelationInput[]
    cursor?: VehicleRepeatedIssueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehicleRepeatedIssueScalarFieldEnum | VehicleRepeatedIssueScalarFieldEnum[]
  }

  /**
   * Vehicle without action
   */
  export type VehicleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
  }


  /**
   * Model MaintenanceReport
   */

  export type AggregateMaintenanceReport = {
    _count: MaintenanceReportCountAggregateOutputType | null
    _min: MaintenanceReportMinAggregateOutputType | null
    _max: MaintenanceReportMaxAggregateOutputType | null
  }

  export type MaintenanceReportMinAggregateOutputType = {
    id: string | null
    vehicleId: string | null
    date: Date | null
    component: string | null
    issue: string | null
    severity: $Enums.SeverityLevel | null
    technician: string | null
    note: string | null
    actionTaken: string | null
    createdAt: Date | null
  }

  export type MaintenanceReportMaxAggregateOutputType = {
    id: string | null
    vehicleId: string | null
    date: Date | null
    component: string | null
    issue: string | null
    severity: $Enums.SeverityLevel | null
    technician: string | null
    note: string | null
    actionTaken: string | null
    createdAt: Date | null
  }

  export type MaintenanceReportCountAggregateOutputType = {
    id: number
    vehicleId: number
    date: number
    component: number
    issue: number
    severity: number
    technician: number
    note: number
    actionTaken: number
    createdAt: number
    _all: number
  }


  export type MaintenanceReportMinAggregateInputType = {
    id?: true
    vehicleId?: true
    date?: true
    component?: true
    issue?: true
    severity?: true
    technician?: true
    note?: true
    actionTaken?: true
    createdAt?: true
  }

  export type MaintenanceReportMaxAggregateInputType = {
    id?: true
    vehicleId?: true
    date?: true
    component?: true
    issue?: true
    severity?: true
    technician?: true
    note?: true
    actionTaken?: true
    createdAt?: true
  }

  export type MaintenanceReportCountAggregateInputType = {
    id?: true
    vehicleId?: true
    date?: true
    component?: true
    issue?: true
    severity?: true
    technician?: true
    note?: true
    actionTaken?: true
    createdAt?: true
    _all?: true
  }

  export type MaintenanceReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaintenanceReport to aggregate.
     */
    where?: MaintenanceReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceReports to fetch.
     */
    orderBy?: MaintenanceReportOrderByWithRelationInput | MaintenanceReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaintenanceReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MaintenanceReports
    **/
    _count?: true | MaintenanceReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaintenanceReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaintenanceReportMaxAggregateInputType
  }

  export type GetMaintenanceReportAggregateType<T extends MaintenanceReportAggregateArgs> = {
        [P in keyof T & keyof AggregateMaintenanceReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaintenanceReport[P]>
      : GetScalarType<T[P], AggregateMaintenanceReport[P]>
  }




  export type MaintenanceReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceReportWhereInput
    orderBy?: MaintenanceReportOrderByWithAggregationInput | MaintenanceReportOrderByWithAggregationInput[]
    by: MaintenanceReportScalarFieldEnum[] | MaintenanceReportScalarFieldEnum
    having?: MaintenanceReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaintenanceReportCountAggregateInputType | true
    _min?: MaintenanceReportMinAggregateInputType
    _max?: MaintenanceReportMaxAggregateInputType
  }

  export type MaintenanceReportGroupByOutputType = {
    id: string
    vehicleId: string
    date: Date
    component: string
    issue: string
    severity: $Enums.SeverityLevel
    technician: string
    note: string | null
    actionTaken: string | null
    createdAt: Date
    _count: MaintenanceReportCountAggregateOutputType | null
    _min: MaintenanceReportMinAggregateOutputType | null
    _max: MaintenanceReportMaxAggregateOutputType | null
  }

  type GetMaintenanceReportGroupByPayload<T extends MaintenanceReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaintenanceReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaintenanceReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaintenanceReportGroupByOutputType[P]>
            : GetScalarType<T[P], MaintenanceReportGroupByOutputType[P]>
        }
      >
    >


  export type MaintenanceReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    date?: boolean
    component?: boolean
    issue?: boolean
    severity?: boolean
    technician?: boolean
    note?: boolean
    actionTaken?: boolean
    createdAt?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maintenanceReport"]>

  export type MaintenanceReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    date?: boolean
    component?: boolean
    issue?: boolean
    severity?: boolean
    technician?: boolean
    note?: boolean
    actionTaken?: boolean
    createdAt?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maintenanceReport"]>

  export type MaintenanceReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    date?: boolean
    component?: boolean
    issue?: boolean
    severity?: boolean
    technician?: boolean
    note?: boolean
    actionTaken?: boolean
    createdAt?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maintenanceReport"]>

  export type MaintenanceReportSelectScalar = {
    id?: boolean
    vehicleId?: boolean
    date?: boolean
    component?: boolean
    issue?: boolean
    severity?: boolean
    technician?: boolean
    note?: boolean
    actionTaken?: boolean
    createdAt?: boolean
  }

  export type MaintenanceReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vehicleId" | "date" | "component" | "issue" | "severity" | "technician" | "note" | "actionTaken" | "createdAt", ExtArgs["result"]["maintenanceReport"]>
  export type MaintenanceReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }
  export type MaintenanceReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }
  export type MaintenanceReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }

  export type $MaintenanceReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MaintenanceReport"
    objects: {
      vehicle: Prisma.$VehiclePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vehicleId: string
      date: Date
      component: string
      issue: string
      severity: $Enums.SeverityLevel
      technician: string
      note: string | null
      actionTaken: string | null
      createdAt: Date
    }, ExtArgs["result"]["maintenanceReport"]>
    composites: {}
  }

  type MaintenanceReportGetPayload<S extends boolean | null | undefined | MaintenanceReportDefaultArgs> = $Result.GetResult<Prisma.$MaintenanceReportPayload, S>

  type MaintenanceReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaintenanceReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaintenanceReportCountAggregateInputType | true
    }

  export interface MaintenanceReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MaintenanceReport'], meta: { name: 'MaintenanceReport' } }
    /**
     * Find zero or one MaintenanceReport that matches the filter.
     * @param {MaintenanceReportFindUniqueArgs} args - Arguments to find a MaintenanceReport
     * @example
     * // Get one MaintenanceReport
     * const maintenanceReport = await prisma.maintenanceReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaintenanceReportFindUniqueArgs>(args: SelectSubset<T, MaintenanceReportFindUniqueArgs<ExtArgs>>): Prisma__MaintenanceReportClient<$Result.GetResult<Prisma.$MaintenanceReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MaintenanceReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaintenanceReportFindUniqueOrThrowArgs} args - Arguments to find a MaintenanceReport
     * @example
     * // Get one MaintenanceReport
     * const maintenanceReport = await prisma.maintenanceReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaintenanceReportFindUniqueOrThrowArgs>(args: SelectSubset<T, MaintenanceReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaintenanceReportClient<$Result.GetResult<Prisma.$MaintenanceReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaintenanceReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceReportFindFirstArgs} args - Arguments to find a MaintenanceReport
     * @example
     * // Get one MaintenanceReport
     * const maintenanceReport = await prisma.maintenanceReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaintenanceReportFindFirstArgs>(args?: SelectSubset<T, MaintenanceReportFindFirstArgs<ExtArgs>>): Prisma__MaintenanceReportClient<$Result.GetResult<Prisma.$MaintenanceReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaintenanceReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceReportFindFirstOrThrowArgs} args - Arguments to find a MaintenanceReport
     * @example
     * // Get one MaintenanceReport
     * const maintenanceReport = await prisma.maintenanceReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaintenanceReportFindFirstOrThrowArgs>(args?: SelectSubset<T, MaintenanceReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaintenanceReportClient<$Result.GetResult<Prisma.$MaintenanceReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MaintenanceReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MaintenanceReports
     * const maintenanceReports = await prisma.maintenanceReport.findMany()
     * 
     * // Get first 10 MaintenanceReports
     * const maintenanceReports = await prisma.maintenanceReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const maintenanceReportWithIdOnly = await prisma.maintenanceReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaintenanceReportFindManyArgs>(args?: SelectSubset<T, MaintenanceReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MaintenanceReport.
     * @param {MaintenanceReportCreateArgs} args - Arguments to create a MaintenanceReport.
     * @example
     * // Create one MaintenanceReport
     * const MaintenanceReport = await prisma.maintenanceReport.create({
     *   data: {
     *     // ... data to create a MaintenanceReport
     *   }
     * })
     * 
     */
    create<T extends MaintenanceReportCreateArgs>(args: SelectSubset<T, MaintenanceReportCreateArgs<ExtArgs>>): Prisma__MaintenanceReportClient<$Result.GetResult<Prisma.$MaintenanceReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MaintenanceReports.
     * @param {MaintenanceReportCreateManyArgs} args - Arguments to create many MaintenanceReports.
     * @example
     * // Create many MaintenanceReports
     * const maintenanceReport = await prisma.maintenanceReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaintenanceReportCreateManyArgs>(args?: SelectSubset<T, MaintenanceReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MaintenanceReports and returns the data saved in the database.
     * @param {MaintenanceReportCreateManyAndReturnArgs} args - Arguments to create many MaintenanceReports.
     * @example
     * // Create many MaintenanceReports
     * const maintenanceReport = await prisma.maintenanceReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MaintenanceReports and only return the `id`
     * const maintenanceReportWithIdOnly = await prisma.maintenanceReport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MaintenanceReportCreateManyAndReturnArgs>(args?: SelectSubset<T, MaintenanceReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MaintenanceReport.
     * @param {MaintenanceReportDeleteArgs} args - Arguments to delete one MaintenanceReport.
     * @example
     * // Delete one MaintenanceReport
     * const MaintenanceReport = await prisma.maintenanceReport.delete({
     *   where: {
     *     // ... filter to delete one MaintenanceReport
     *   }
     * })
     * 
     */
    delete<T extends MaintenanceReportDeleteArgs>(args: SelectSubset<T, MaintenanceReportDeleteArgs<ExtArgs>>): Prisma__MaintenanceReportClient<$Result.GetResult<Prisma.$MaintenanceReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MaintenanceReport.
     * @param {MaintenanceReportUpdateArgs} args - Arguments to update one MaintenanceReport.
     * @example
     * // Update one MaintenanceReport
     * const maintenanceReport = await prisma.maintenanceReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaintenanceReportUpdateArgs>(args: SelectSubset<T, MaintenanceReportUpdateArgs<ExtArgs>>): Prisma__MaintenanceReportClient<$Result.GetResult<Prisma.$MaintenanceReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MaintenanceReports.
     * @param {MaintenanceReportDeleteManyArgs} args - Arguments to filter MaintenanceReports to delete.
     * @example
     * // Delete a few MaintenanceReports
     * const { count } = await prisma.maintenanceReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaintenanceReportDeleteManyArgs>(args?: SelectSubset<T, MaintenanceReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaintenanceReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MaintenanceReports
     * const maintenanceReport = await prisma.maintenanceReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaintenanceReportUpdateManyArgs>(args: SelectSubset<T, MaintenanceReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaintenanceReports and returns the data updated in the database.
     * @param {MaintenanceReportUpdateManyAndReturnArgs} args - Arguments to update many MaintenanceReports.
     * @example
     * // Update many MaintenanceReports
     * const maintenanceReport = await prisma.maintenanceReport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MaintenanceReports and only return the `id`
     * const maintenanceReportWithIdOnly = await prisma.maintenanceReport.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MaintenanceReportUpdateManyAndReturnArgs>(args: SelectSubset<T, MaintenanceReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MaintenanceReport.
     * @param {MaintenanceReportUpsertArgs} args - Arguments to update or create a MaintenanceReport.
     * @example
     * // Update or create a MaintenanceReport
     * const maintenanceReport = await prisma.maintenanceReport.upsert({
     *   create: {
     *     // ... data to create a MaintenanceReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MaintenanceReport we want to update
     *   }
     * })
     */
    upsert<T extends MaintenanceReportUpsertArgs>(args: SelectSubset<T, MaintenanceReportUpsertArgs<ExtArgs>>): Prisma__MaintenanceReportClient<$Result.GetResult<Prisma.$MaintenanceReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MaintenanceReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceReportCountArgs} args - Arguments to filter MaintenanceReports to count.
     * @example
     * // Count the number of MaintenanceReports
     * const count = await prisma.maintenanceReport.count({
     *   where: {
     *     // ... the filter for the MaintenanceReports we want to count
     *   }
     * })
    **/
    count<T extends MaintenanceReportCountArgs>(
      args?: Subset<T, MaintenanceReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaintenanceReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MaintenanceReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MaintenanceReportAggregateArgs>(args: Subset<T, MaintenanceReportAggregateArgs>): Prisma.PrismaPromise<GetMaintenanceReportAggregateType<T>>

    /**
     * Group by MaintenanceReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceReportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MaintenanceReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaintenanceReportGroupByArgs['orderBy'] }
        : { orderBy?: MaintenanceReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MaintenanceReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaintenanceReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MaintenanceReport model
   */
  readonly fields: MaintenanceReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MaintenanceReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaintenanceReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MaintenanceReport model
   */
  interface MaintenanceReportFieldRefs {
    readonly id: FieldRef<"MaintenanceReport", 'String'>
    readonly vehicleId: FieldRef<"MaintenanceReport", 'String'>
    readonly date: FieldRef<"MaintenanceReport", 'DateTime'>
    readonly component: FieldRef<"MaintenanceReport", 'String'>
    readonly issue: FieldRef<"MaintenanceReport", 'String'>
    readonly severity: FieldRef<"MaintenanceReport", 'SeverityLevel'>
    readonly technician: FieldRef<"MaintenanceReport", 'String'>
    readonly note: FieldRef<"MaintenanceReport", 'String'>
    readonly actionTaken: FieldRef<"MaintenanceReport", 'String'>
    readonly createdAt: FieldRef<"MaintenanceReport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MaintenanceReport findUnique
   */
  export type MaintenanceReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceReport
     */
    select?: MaintenanceReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceReport
     */
    omit?: MaintenanceReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceReportInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceReport to fetch.
     */
    where: MaintenanceReportWhereUniqueInput
  }

  /**
   * MaintenanceReport findUniqueOrThrow
   */
  export type MaintenanceReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceReport
     */
    select?: MaintenanceReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceReport
     */
    omit?: MaintenanceReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceReportInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceReport to fetch.
     */
    where: MaintenanceReportWhereUniqueInput
  }

  /**
   * MaintenanceReport findFirst
   */
  export type MaintenanceReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceReport
     */
    select?: MaintenanceReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceReport
     */
    omit?: MaintenanceReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceReportInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceReport to fetch.
     */
    where?: MaintenanceReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceReports to fetch.
     */
    orderBy?: MaintenanceReportOrderByWithRelationInput | MaintenanceReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaintenanceReports.
     */
    cursor?: MaintenanceReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaintenanceReports.
     */
    distinct?: MaintenanceReportScalarFieldEnum | MaintenanceReportScalarFieldEnum[]
  }

  /**
   * MaintenanceReport findFirstOrThrow
   */
  export type MaintenanceReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceReport
     */
    select?: MaintenanceReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceReport
     */
    omit?: MaintenanceReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceReportInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceReport to fetch.
     */
    where?: MaintenanceReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceReports to fetch.
     */
    orderBy?: MaintenanceReportOrderByWithRelationInput | MaintenanceReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaintenanceReports.
     */
    cursor?: MaintenanceReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaintenanceReports.
     */
    distinct?: MaintenanceReportScalarFieldEnum | MaintenanceReportScalarFieldEnum[]
  }

  /**
   * MaintenanceReport findMany
   */
  export type MaintenanceReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceReport
     */
    select?: MaintenanceReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceReport
     */
    omit?: MaintenanceReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceReportInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceReports to fetch.
     */
    where?: MaintenanceReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceReports to fetch.
     */
    orderBy?: MaintenanceReportOrderByWithRelationInput | MaintenanceReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MaintenanceReports.
     */
    cursor?: MaintenanceReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaintenanceReports.
     */
    distinct?: MaintenanceReportScalarFieldEnum | MaintenanceReportScalarFieldEnum[]
  }

  /**
   * MaintenanceReport create
   */
  export type MaintenanceReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceReport
     */
    select?: MaintenanceReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceReport
     */
    omit?: MaintenanceReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceReportInclude<ExtArgs> | null
    /**
     * The data needed to create a MaintenanceReport.
     */
    data: XOR<MaintenanceReportCreateInput, MaintenanceReportUncheckedCreateInput>
  }

  /**
   * MaintenanceReport createMany
   */
  export type MaintenanceReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MaintenanceReports.
     */
    data: MaintenanceReportCreateManyInput | MaintenanceReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MaintenanceReport createManyAndReturn
   */
  export type MaintenanceReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceReport
     */
    select?: MaintenanceReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceReport
     */
    omit?: MaintenanceReportOmit<ExtArgs> | null
    /**
     * The data used to create many MaintenanceReports.
     */
    data: MaintenanceReportCreateManyInput | MaintenanceReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MaintenanceReport update
   */
  export type MaintenanceReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceReport
     */
    select?: MaintenanceReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceReport
     */
    omit?: MaintenanceReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceReportInclude<ExtArgs> | null
    /**
     * The data needed to update a MaintenanceReport.
     */
    data: XOR<MaintenanceReportUpdateInput, MaintenanceReportUncheckedUpdateInput>
    /**
     * Choose, which MaintenanceReport to update.
     */
    where: MaintenanceReportWhereUniqueInput
  }

  /**
   * MaintenanceReport updateMany
   */
  export type MaintenanceReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MaintenanceReports.
     */
    data: XOR<MaintenanceReportUpdateManyMutationInput, MaintenanceReportUncheckedUpdateManyInput>
    /**
     * Filter which MaintenanceReports to update
     */
    where?: MaintenanceReportWhereInput
    /**
     * Limit how many MaintenanceReports to update.
     */
    limit?: number
  }

  /**
   * MaintenanceReport updateManyAndReturn
   */
  export type MaintenanceReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceReport
     */
    select?: MaintenanceReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceReport
     */
    omit?: MaintenanceReportOmit<ExtArgs> | null
    /**
     * The data used to update MaintenanceReports.
     */
    data: XOR<MaintenanceReportUpdateManyMutationInput, MaintenanceReportUncheckedUpdateManyInput>
    /**
     * Filter which MaintenanceReports to update
     */
    where?: MaintenanceReportWhereInput
    /**
     * Limit how many MaintenanceReports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MaintenanceReport upsert
   */
  export type MaintenanceReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceReport
     */
    select?: MaintenanceReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceReport
     */
    omit?: MaintenanceReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceReportInclude<ExtArgs> | null
    /**
     * The filter to search for the MaintenanceReport to update in case it exists.
     */
    where: MaintenanceReportWhereUniqueInput
    /**
     * In case the MaintenanceReport found by the `where` argument doesn't exist, create a new MaintenanceReport with this data.
     */
    create: XOR<MaintenanceReportCreateInput, MaintenanceReportUncheckedCreateInput>
    /**
     * In case the MaintenanceReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaintenanceReportUpdateInput, MaintenanceReportUncheckedUpdateInput>
  }

  /**
   * MaintenanceReport delete
   */
  export type MaintenanceReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceReport
     */
    select?: MaintenanceReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceReport
     */
    omit?: MaintenanceReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceReportInclude<ExtArgs> | null
    /**
     * Filter which MaintenanceReport to delete.
     */
    where: MaintenanceReportWhereUniqueInput
  }

  /**
   * MaintenanceReport deleteMany
   */
  export type MaintenanceReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaintenanceReports to delete
     */
    where?: MaintenanceReportWhereInput
    /**
     * Limit how many MaintenanceReports to delete.
     */
    limit?: number
  }

  /**
   * MaintenanceReport without action
   */
  export type MaintenanceReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceReport
     */
    select?: MaintenanceReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceReport
     */
    omit?: MaintenanceReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceReportInclude<ExtArgs> | null
  }


  /**
   * Model Alert
   */

  export type AggregateAlert = {
    _count: AlertCountAggregateOutputType | null
    _avg: AlertAvgAggregateOutputType | null
    _sum: AlertSumAggregateOutputType | null
    _min: AlertMinAggregateOutputType | null
    _max: AlertMaxAggregateOutputType | null
  }

  export type AlertAvgAggregateOutputType = {
    daysUntilMaintenance: number | null
  }

  export type AlertSumAggregateOutputType = {
    daysUntilMaintenance: number | null
  }

  export type AlertMinAggregateOutputType = {
    id: string | null
    vehicleId: string | null
    type: $Enums.AlertType | null
    riskLevel: $Enums.RiskLevel | null
    message: string | null
    predictedNextMaintenance: Date | null
    recommendation: string | null
    daysUntilMaintenance: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlertMaxAggregateOutputType = {
    id: string | null
    vehicleId: string | null
    type: $Enums.AlertType | null
    riskLevel: $Enums.RiskLevel | null
    message: string | null
    predictedNextMaintenance: Date | null
    recommendation: string | null
    daysUntilMaintenance: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlertCountAggregateOutputType = {
    id: number
    vehicleId: number
    type: number
    riskLevel: number
    message: number
    predictedNextMaintenance: number
    recommendation: number
    daysUntilMaintenance: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AlertAvgAggregateInputType = {
    daysUntilMaintenance?: true
  }

  export type AlertSumAggregateInputType = {
    daysUntilMaintenance?: true
  }

  export type AlertMinAggregateInputType = {
    id?: true
    vehicleId?: true
    type?: true
    riskLevel?: true
    message?: true
    predictedNextMaintenance?: true
    recommendation?: true
    daysUntilMaintenance?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlertMaxAggregateInputType = {
    id?: true
    vehicleId?: true
    type?: true
    riskLevel?: true
    message?: true
    predictedNextMaintenance?: true
    recommendation?: true
    daysUntilMaintenance?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlertCountAggregateInputType = {
    id?: true
    vehicleId?: true
    type?: true
    riskLevel?: true
    message?: true
    predictedNextMaintenance?: true
    recommendation?: true
    daysUntilMaintenance?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AlertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alert to aggregate.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alerts
    **/
    _count?: true | AlertCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlertAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlertSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlertMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlertMaxAggregateInputType
  }

  export type GetAlertAggregateType<T extends AlertAggregateArgs> = {
        [P in keyof T & keyof AggregateAlert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlert[P]>
      : GetScalarType<T[P], AggregateAlert[P]>
  }




  export type AlertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertWhereInput
    orderBy?: AlertOrderByWithAggregationInput | AlertOrderByWithAggregationInput[]
    by: AlertScalarFieldEnum[] | AlertScalarFieldEnum
    having?: AlertScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlertCountAggregateInputType | true
    _avg?: AlertAvgAggregateInputType
    _sum?: AlertSumAggregateInputType
    _min?: AlertMinAggregateInputType
    _max?: AlertMaxAggregateInputType
  }

  export type AlertGroupByOutputType = {
    id: string
    vehicleId: string
    type: $Enums.AlertType
    riskLevel: $Enums.RiskLevel
    message: string
    predictedNextMaintenance: Date | null
    recommendation: string | null
    daysUntilMaintenance: number | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: AlertCountAggregateOutputType | null
    _avg: AlertAvgAggregateOutputType | null
    _sum: AlertSumAggregateOutputType | null
    _min: AlertMinAggregateOutputType | null
    _max: AlertMaxAggregateOutputType | null
  }

  type GetAlertGroupByPayload<T extends AlertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlertGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlertGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlertGroupByOutputType[P]>
            : GetScalarType<T[P], AlertGroupByOutputType[P]>
        }
      >
    >


  export type AlertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    type?: boolean
    riskLevel?: boolean
    message?: boolean
    predictedNextMaintenance?: boolean
    recommendation?: boolean
    daysUntilMaintenance?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alert"]>

  export type AlertSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    type?: boolean
    riskLevel?: boolean
    message?: boolean
    predictedNextMaintenance?: boolean
    recommendation?: boolean
    daysUntilMaintenance?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alert"]>

  export type AlertSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    type?: boolean
    riskLevel?: boolean
    message?: boolean
    predictedNextMaintenance?: boolean
    recommendation?: boolean
    daysUntilMaintenance?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alert"]>

  export type AlertSelectScalar = {
    id?: boolean
    vehicleId?: boolean
    type?: boolean
    riskLevel?: boolean
    message?: boolean
    predictedNextMaintenance?: boolean
    recommendation?: boolean
    daysUntilMaintenance?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AlertOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vehicleId" | "type" | "riskLevel" | "message" | "predictedNextMaintenance" | "recommendation" | "daysUntilMaintenance" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["alert"]>
  export type AlertInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }
  export type AlertIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }
  export type AlertIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }

  export type $AlertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alert"
    objects: {
      vehicle: Prisma.$VehiclePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vehicleId: string
      type: $Enums.AlertType
      riskLevel: $Enums.RiskLevel
      message: string
      predictedNextMaintenance: Date | null
      recommendation: string | null
      daysUntilMaintenance: number | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["alert"]>
    composites: {}
  }

  type AlertGetPayload<S extends boolean | null | undefined | AlertDefaultArgs> = $Result.GetResult<Prisma.$AlertPayload, S>

  type AlertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlertFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlertCountAggregateInputType | true
    }

  export interface AlertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Alert'], meta: { name: 'Alert' } }
    /**
     * Find zero or one Alert that matches the filter.
     * @param {AlertFindUniqueArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlertFindUniqueArgs>(args: SelectSubset<T, AlertFindUniqueArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alert that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlertFindUniqueOrThrowArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlertFindUniqueOrThrowArgs>(args: SelectSubset<T, AlertFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindFirstArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlertFindFirstArgs>(args?: SelectSubset<T, AlertFindFirstArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindFirstOrThrowArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlertFindFirstOrThrowArgs>(args?: SelectSubset<T, AlertFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alerts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alerts
     * const alerts = await prisma.alert.findMany()
     * 
     * // Get first 10 Alerts
     * const alerts = await prisma.alert.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alertWithIdOnly = await prisma.alert.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlertFindManyArgs>(args?: SelectSubset<T, AlertFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alert.
     * @param {AlertCreateArgs} args - Arguments to create a Alert.
     * @example
     * // Create one Alert
     * const Alert = await prisma.alert.create({
     *   data: {
     *     // ... data to create a Alert
     *   }
     * })
     * 
     */
    create<T extends AlertCreateArgs>(args: SelectSubset<T, AlertCreateArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alerts.
     * @param {AlertCreateManyArgs} args - Arguments to create many Alerts.
     * @example
     * // Create many Alerts
     * const alert = await prisma.alert.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlertCreateManyArgs>(args?: SelectSubset<T, AlertCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Alerts and returns the data saved in the database.
     * @param {AlertCreateManyAndReturnArgs} args - Arguments to create many Alerts.
     * @example
     * // Create many Alerts
     * const alert = await prisma.alert.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Alerts and only return the `id`
     * const alertWithIdOnly = await prisma.alert.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlertCreateManyAndReturnArgs>(args?: SelectSubset<T, AlertCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Alert.
     * @param {AlertDeleteArgs} args - Arguments to delete one Alert.
     * @example
     * // Delete one Alert
     * const Alert = await prisma.alert.delete({
     *   where: {
     *     // ... filter to delete one Alert
     *   }
     * })
     * 
     */
    delete<T extends AlertDeleteArgs>(args: SelectSubset<T, AlertDeleteArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alert.
     * @param {AlertUpdateArgs} args - Arguments to update one Alert.
     * @example
     * // Update one Alert
     * const alert = await prisma.alert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlertUpdateArgs>(args: SelectSubset<T, AlertUpdateArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alerts.
     * @param {AlertDeleteManyArgs} args - Arguments to filter Alerts to delete.
     * @example
     * // Delete a few Alerts
     * const { count } = await prisma.alert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlertDeleteManyArgs>(args?: SelectSubset<T, AlertDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alerts
     * const alert = await prisma.alert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlertUpdateManyArgs>(args: SelectSubset<T, AlertUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alerts and returns the data updated in the database.
     * @param {AlertUpdateManyAndReturnArgs} args - Arguments to update many Alerts.
     * @example
     * // Update many Alerts
     * const alert = await prisma.alert.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Alerts and only return the `id`
     * const alertWithIdOnly = await prisma.alert.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AlertUpdateManyAndReturnArgs>(args: SelectSubset<T, AlertUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Alert.
     * @param {AlertUpsertArgs} args - Arguments to update or create a Alert.
     * @example
     * // Update or create a Alert
     * const alert = await prisma.alert.upsert({
     *   create: {
     *     // ... data to create a Alert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alert we want to update
     *   }
     * })
     */
    upsert<T extends AlertUpsertArgs>(args: SelectSubset<T, AlertUpsertArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertCountArgs} args - Arguments to filter Alerts to count.
     * @example
     * // Count the number of Alerts
     * const count = await prisma.alert.count({
     *   where: {
     *     // ... the filter for the Alerts we want to count
     *   }
     * })
    **/
    count<T extends AlertCountArgs>(
      args?: Subset<T, AlertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlertCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlertAggregateArgs>(args: Subset<T, AlertAggregateArgs>): Prisma.PrismaPromise<GetAlertAggregateType<T>>

    /**
     * Group by Alert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AlertGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlertGroupByArgs['orderBy'] }
        : { orderBy?: AlertGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Alert model
   */
  readonly fields: AlertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Alert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlertClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Alert model
   */
  interface AlertFieldRefs {
    readonly id: FieldRef<"Alert", 'String'>
    readonly vehicleId: FieldRef<"Alert", 'String'>
    readonly type: FieldRef<"Alert", 'AlertType'>
    readonly riskLevel: FieldRef<"Alert", 'RiskLevel'>
    readonly message: FieldRef<"Alert", 'String'>
    readonly predictedNextMaintenance: FieldRef<"Alert", 'DateTime'>
    readonly recommendation: FieldRef<"Alert", 'String'>
    readonly daysUntilMaintenance: FieldRef<"Alert", 'Int'>
    readonly isActive: FieldRef<"Alert", 'Boolean'>
    readonly createdAt: FieldRef<"Alert", 'DateTime'>
    readonly updatedAt: FieldRef<"Alert", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Alert findUnique
   */
  export type AlertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert findUniqueOrThrow
   */
  export type AlertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert findFirst
   */
  export type AlertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alerts.
     */
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert findFirstOrThrow
   */
  export type AlertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alerts.
     */
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert findMany
   */
  export type AlertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alerts to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alerts.
     */
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert create
   */
  export type AlertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The data needed to create a Alert.
     */
    data: XOR<AlertCreateInput, AlertUncheckedCreateInput>
  }

  /**
   * Alert createMany
   */
  export type AlertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alerts.
     */
    data: AlertCreateManyInput | AlertCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Alert createManyAndReturn
   */
  export type AlertCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * The data used to create many Alerts.
     */
    data: AlertCreateManyInput | AlertCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alert update
   */
  export type AlertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The data needed to update a Alert.
     */
    data: XOR<AlertUpdateInput, AlertUncheckedUpdateInput>
    /**
     * Choose, which Alert to update.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert updateMany
   */
  export type AlertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alerts.
     */
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyInput>
    /**
     * Filter which Alerts to update
     */
    where?: AlertWhereInput
    /**
     * Limit how many Alerts to update.
     */
    limit?: number
  }

  /**
   * Alert updateManyAndReturn
   */
  export type AlertUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * The data used to update Alerts.
     */
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyInput>
    /**
     * Filter which Alerts to update
     */
    where?: AlertWhereInput
    /**
     * Limit how many Alerts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alert upsert
   */
  export type AlertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The filter to search for the Alert to update in case it exists.
     */
    where: AlertWhereUniqueInput
    /**
     * In case the Alert found by the `where` argument doesn't exist, create a new Alert with this data.
     */
    create: XOR<AlertCreateInput, AlertUncheckedCreateInput>
    /**
     * In case the Alert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlertUpdateInput, AlertUncheckedUpdateInput>
  }

  /**
   * Alert delete
   */
  export type AlertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter which Alert to delete.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert deleteMany
   */
  export type AlertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alerts to delete
     */
    where?: AlertWhereInput
    /**
     * Limit how many Alerts to delete.
     */
    limit?: number
  }

  /**
   * Alert without action
   */
  export type AlertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
  }


  /**
   * Model VehicleRepeatedIssue
   */

  export type AggregateVehicleRepeatedIssue = {
    _count: VehicleRepeatedIssueCountAggregateOutputType | null
    _avg: VehicleRepeatedIssueAvgAggregateOutputType | null
    _sum: VehicleRepeatedIssueSumAggregateOutputType | null
    _min: VehicleRepeatedIssueMinAggregateOutputType | null
    _max: VehicleRepeatedIssueMaxAggregateOutputType | null
  }

  export type VehicleRepeatedIssueAvgAggregateOutputType = {
    frequency: number | null
  }

  export type VehicleRepeatedIssueSumAggregateOutputType = {
    frequency: number | null
  }

  export type VehicleRepeatedIssueMinAggregateOutputType = {
    vehicleId: string | null
    issue: string | null
    frequency: number | null
  }

  export type VehicleRepeatedIssueMaxAggregateOutputType = {
    vehicleId: string | null
    issue: string | null
    frequency: number | null
  }

  export type VehicleRepeatedIssueCountAggregateOutputType = {
    vehicleId: number
    issue: number
    frequency: number
    _all: number
  }


  export type VehicleRepeatedIssueAvgAggregateInputType = {
    frequency?: true
  }

  export type VehicleRepeatedIssueSumAggregateInputType = {
    frequency?: true
  }

  export type VehicleRepeatedIssueMinAggregateInputType = {
    vehicleId?: true
    issue?: true
    frequency?: true
  }

  export type VehicleRepeatedIssueMaxAggregateInputType = {
    vehicleId?: true
    issue?: true
    frequency?: true
  }

  export type VehicleRepeatedIssueCountAggregateInputType = {
    vehicleId?: true
    issue?: true
    frequency?: true
    _all?: true
  }

  export type VehicleRepeatedIssueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VehicleRepeatedIssue to aggregate.
     */
    where?: VehicleRepeatedIssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleRepeatedIssues to fetch.
     */
    orderBy?: VehicleRepeatedIssueOrderByWithRelationInput | VehicleRepeatedIssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleRepeatedIssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleRepeatedIssues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleRepeatedIssues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VehicleRepeatedIssues
    **/
    _count?: true | VehicleRepeatedIssueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehicleRepeatedIssueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehicleRepeatedIssueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleRepeatedIssueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleRepeatedIssueMaxAggregateInputType
  }

  export type GetVehicleRepeatedIssueAggregateType<T extends VehicleRepeatedIssueAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicleRepeatedIssue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicleRepeatedIssue[P]>
      : GetScalarType<T[P], AggregateVehicleRepeatedIssue[P]>
  }




  export type VehicleRepeatedIssueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleRepeatedIssueWhereInput
    orderBy?: VehicleRepeatedIssueOrderByWithAggregationInput | VehicleRepeatedIssueOrderByWithAggregationInput[]
    by: VehicleRepeatedIssueScalarFieldEnum[] | VehicleRepeatedIssueScalarFieldEnum
    having?: VehicleRepeatedIssueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleRepeatedIssueCountAggregateInputType | true
    _avg?: VehicleRepeatedIssueAvgAggregateInputType
    _sum?: VehicleRepeatedIssueSumAggregateInputType
    _min?: VehicleRepeatedIssueMinAggregateInputType
    _max?: VehicleRepeatedIssueMaxAggregateInputType
  }

  export type VehicleRepeatedIssueGroupByOutputType = {
    vehicleId: string
    issue: string
    frequency: number
    _count: VehicleRepeatedIssueCountAggregateOutputType | null
    _avg: VehicleRepeatedIssueAvgAggregateOutputType | null
    _sum: VehicleRepeatedIssueSumAggregateOutputType | null
    _min: VehicleRepeatedIssueMinAggregateOutputType | null
    _max: VehicleRepeatedIssueMaxAggregateOutputType | null
  }

  type GetVehicleRepeatedIssueGroupByPayload<T extends VehicleRepeatedIssueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleRepeatedIssueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleRepeatedIssueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleRepeatedIssueGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleRepeatedIssueGroupByOutputType[P]>
        }
      >
    >


  export type VehicleRepeatedIssueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    vehicleId?: boolean
    issue?: boolean
    frequency?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicleRepeatedIssue"]>

  export type VehicleRepeatedIssueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    vehicleId?: boolean
    issue?: boolean
    frequency?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicleRepeatedIssue"]>

  export type VehicleRepeatedIssueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    vehicleId?: boolean
    issue?: boolean
    frequency?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicleRepeatedIssue"]>

  export type VehicleRepeatedIssueSelectScalar = {
    vehicleId?: boolean
    issue?: boolean
    frequency?: boolean
  }

  export type VehicleRepeatedIssueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"vehicleId" | "issue" | "frequency", ExtArgs["result"]["vehicleRepeatedIssue"]>
  export type VehicleRepeatedIssueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }
  export type VehicleRepeatedIssueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }
  export type VehicleRepeatedIssueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }

  export type $VehicleRepeatedIssuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VehicleRepeatedIssue"
    objects: {
      vehicle: Prisma.$VehiclePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      vehicleId: string
      issue: string
      frequency: number
    }, ExtArgs["result"]["vehicleRepeatedIssue"]>
    composites: {}
  }

  type VehicleRepeatedIssueGetPayload<S extends boolean | null | undefined | VehicleRepeatedIssueDefaultArgs> = $Result.GetResult<Prisma.$VehicleRepeatedIssuePayload, S>

  type VehicleRepeatedIssueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehicleRepeatedIssueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehicleRepeatedIssueCountAggregateInputType | true
    }

  export interface VehicleRepeatedIssueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VehicleRepeatedIssue'], meta: { name: 'VehicleRepeatedIssue' } }
    /**
     * Find zero or one VehicleRepeatedIssue that matches the filter.
     * @param {VehicleRepeatedIssueFindUniqueArgs} args - Arguments to find a VehicleRepeatedIssue
     * @example
     * // Get one VehicleRepeatedIssue
     * const vehicleRepeatedIssue = await prisma.vehicleRepeatedIssue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleRepeatedIssueFindUniqueArgs>(args: SelectSubset<T, VehicleRepeatedIssueFindUniqueArgs<ExtArgs>>): Prisma__VehicleRepeatedIssueClient<$Result.GetResult<Prisma.$VehicleRepeatedIssuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VehicleRepeatedIssue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehicleRepeatedIssueFindUniqueOrThrowArgs} args - Arguments to find a VehicleRepeatedIssue
     * @example
     * // Get one VehicleRepeatedIssue
     * const vehicleRepeatedIssue = await prisma.vehicleRepeatedIssue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleRepeatedIssueFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleRepeatedIssueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleRepeatedIssueClient<$Result.GetResult<Prisma.$VehicleRepeatedIssuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VehicleRepeatedIssue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleRepeatedIssueFindFirstArgs} args - Arguments to find a VehicleRepeatedIssue
     * @example
     * // Get one VehicleRepeatedIssue
     * const vehicleRepeatedIssue = await prisma.vehicleRepeatedIssue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleRepeatedIssueFindFirstArgs>(args?: SelectSubset<T, VehicleRepeatedIssueFindFirstArgs<ExtArgs>>): Prisma__VehicleRepeatedIssueClient<$Result.GetResult<Prisma.$VehicleRepeatedIssuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VehicleRepeatedIssue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleRepeatedIssueFindFirstOrThrowArgs} args - Arguments to find a VehicleRepeatedIssue
     * @example
     * // Get one VehicleRepeatedIssue
     * const vehicleRepeatedIssue = await prisma.vehicleRepeatedIssue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleRepeatedIssueFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleRepeatedIssueFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleRepeatedIssueClient<$Result.GetResult<Prisma.$VehicleRepeatedIssuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VehicleRepeatedIssues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleRepeatedIssueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VehicleRepeatedIssues
     * const vehicleRepeatedIssues = await prisma.vehicleRepeatedIssue.findMany()
     * 
     * // Get first 10 VehicleRepeatedIssues
     * const vehicleRepeatedIssues = await prisma.vehicleRepeatedIssue.findMany({ take: 10 })
     * 
     * // Only select the `vehicleId`
     * const vehicleRepeatedIssueWithVehicleIdOnly = await prisma.vehicleRepeatedIssue.findMany({ select: { vehicleId: true } })
     * 
     */
    findMany<T extends VehicleRepeatedIssueFindManyArgs>(args?: SelectSubset<T, VehicleRepeatedIssueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleRepeatedIssuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VehicleRepeatedIssue.
     * @param {VehicleRepeatedIssueCreateArgs} args - Arguments to create a VehicleRepeatedIssue.
     * @example
     * // Create one VehicleRepeatedIssue
     * const VehicleRepeatedIssue = await prisma.vehicleRepeatedIssue.create({
     *   data: {
     *     // ... data to create a VehicleRepeatedIssue
     *   }
     * })
     * 
     */
    create<T extends VehicleRepeatedIssueCreateArgs>(args: SelectSubset<T, VehicleRepeatedIssueCreateArgs<ExtArgs>>): Prisma__VehicleRepeatedIssueClient<$Result.GetResult<Prisma.$VehicleRepeatedIssuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VehicleRepeatedIssues.
     * @param {VehicleRepeatedIssueCreateManyArgs} args - Arguments to create many VehicleRepeatedIssues.
     * @example
     * // Create many VehicleRepeatedIssues
     * const vehicleRepeatedIssue = await prisma.vehicleRepeatedIssue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleRepeatedIssueCreateManyArgs>(args?: SelectSubset<T, VehicleRepeatedIssueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VehicleRepeatedIssues and returns the data saved in the database.
     * @param {VehicleRepeatedIssueCreateManyAndReturnArgs} args - Arguments to create many VehicleRepeatedIssues.
     * @example
     * // Create many VehicleRepeatedIssues
     * const vehicleRepeatedIssue = await prisma.vehicleRepeatedIssue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VehicleRepeatedIssues and only return the `vehicleId`
     * const vehicleRepeatedIssueWithVehicleIdOnly = await prisma.vehicleRepeatedIssue.createManyAndReturn({
     *   select: { vehicleId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VehicleRepeatedIssueCreateManyAndReturnArgs>(args?: SelectSubset<T, VehicleRepeatedIssueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleRepeatedIssuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VehicleRepeatedIssue.
     * @param {VehicleRepeatedIssueDeleteArgs} args - Arguments to delete one VehicleRepeatedIssue.
     * @example
     * // Delete one VehicleRepeatedIssue
     * const VehicleRepeatedIssue = await prisma.vehicleRepeatedIssue.delete({
     *   where: {
     *     // ... filter to delete one VehicleRepeatedIssue
     *   }
     * })
     * 
     */
    delete<T extends VehicleRepeatedIssueDeleteArgs>(args: SelectSubset<T, VehicleRepeatedIssueDeleteArgs<ExtArgs>>): Prisma__VehicleRepeatedIssueClient<$Result.GetResult<Prisma.$VehicleRepeatedIssuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VehicleRepeatedIssue.
     * @param {VehicleRepeatedIssueUpdateArgs} args - Arguments to update one VehicleRepeatedIssue.
     * @example
     * // Update one VehicleRepeatedIssue
     * const vehicleRepeatedIssue = await prisma.vehicleRepeatedIssue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleRepeatedIssueUpdateArgs>(args: SelectSubset<T, VehicleRepeatedIssueUpdateArgs<ExtArgs>>): Prisma__VehicleRepeatedIssueClient<$Result.GetResult<Prisma.$VehicleRepeatedIssuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VehicleRepeatedIssues.
     * @param {VehicleRepeatedIssueDeleteManyArgs} args - Arguments to filter VehicleRepeatedIssues to delete.
     * @example
     * // Delete a few VehicleRepeatedIssues
     * const { count } = await prisma.vehicleRepeatedIssue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleRepeatedIssueDeleteManyArgs>(args?: SelectSubset<T, VehicleRepeatedIssueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VehicleRepeatedIssues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleRepeatedIssueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VehicleRepeatedIssues
     * const vehicleRepeatedIssue = await prisma.vehicleRepeatedIssue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleRepeatedIssueUpdateManyArgs>(args: SelectSubset<T, VehicleRepeatedIssueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VehicleRepeatedIssues and returns the data updated in the database.
     * @param {VehicleRepeatedIssueUpdateManyAndReturnArgs} args - Arguments to update many VehicleRepeatedIssues.
     * @example
     * // Update many VehicleRepeatedIssues
     * const vehicleRepeatedIssue = await prisma.vehicleRepeatedIssue.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VehicleRepeatedIssues and only return the `vehicleId`
     * const vehicleRepeatedIssueWithVehicleIdOnly = await prisma.vehicleRepeatedIssue.updateManyAndReturn({
     *   select: { vehicleId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VehicleRepeatedIssueUpdateManyAndReturnArgs>(args: SelectSubset<T, VehicleRepeatedIssueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleRepeatedIssuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VehicleRepeatedIssue.
     * @param {VehicleRepeatedIssueUpsertArgs} args - Arguments to update or create a VehicleRepeatedIssue.
     * @example
     * // Update or create a VehicleRepeatedIssue
     * const vehicleRepeatedIssue = await prisma.vehicleRepeatedIssue.upsert({
     *   create: {
     *     // ... data to create a VehicleRepeatedIssue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VehicleRepeatedIssue we want to update
     *   }
     * })
     */
    upsert<T extends VehicleRepeatedIssueUpsertArgs>(args: SelectSubset<T, VehicleRepeatedIssueUpsertArgs<ExtArgs>>): Prisma__VehicleRepeatedIssueClient<$Result.GetResult<Prisma.$VehicleRepeatedIssuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VehicleRepeatedIssues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleRepeatedIssueCountArgs} args - Arguments to filter VehicleRepeatedIssues to count.
     * @example
     * // Count the number of VehicleRepeatedIssues
     * const count = await prisma.vehicleRepeatedIssue.count({
     *   where: {
     *     // ... the filter for the VehicleRepeatedIssues we want to count
     *   }
     * })
    **/
    count<T extends VehicleRepeatedIssueCountArgs>(
      args?: Subset<T, VehicleRepeatedIssueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleRepeatedIssueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VehicleRepeatedIssue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleRepeatedIssueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VehicleRepeatedIssueAggregateArgs>(args: Subset<T, VehicleRepeatedIssueAggregateArgs>): Prisma.PrismaPromise<GetVehicleRepeatedIssueAggregateType<T>>

    /**
     * Group by VehicleRepeatedIssue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleRepeatedIssueGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VehicleRepeatedIssueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleRepeatedIssueGroupByArgs['orderBy'] }
        : { orderBy?: VehicleRepeatedIssueGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VehicleRepeatedIssueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleRepeatedIssueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VehicleRepeatedIssue model
   */
  readonly fields: VehicleRepeatedIssueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VehicleRepeatedIssue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleRepeatedIssueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VehicleRepeatedIssue model
   */
  interface VehicleRepeatedIssueFieldRefs {
    readonly vehicleId: FieldRef<"VehicleRepeatedIssue", 'String'>
    readonly issue: FieldRef<"VehicleRepeatedIssue", 'String'>
    readonly frequency: FieldRef<"VehicleRepeatedIssue", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * VehicleRepeatedIssue findUnique
   */
  export type VehicleRepeatedIssueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleRepeatedIssue
     */
    select?: VehicleRepeatedIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleRepeatedIssue
     */
    omit?: VehicleRepeatedIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleRepeatedIssueInclude<ExtArgs> | null
    /**
     * Filter, which VehicleRepeatedIssue to fetch.
     */
    where: VehicleRepeatedIssueWhereUniqueInput
  }

  /**
   * VehicleRepeatedIssue findUniqueOrThrow
   */
  export type VehicleRepeatedIssueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleRepeatedIssue
     */
    select?: VehicleRepeatedIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleRepeatedIssue
     */
    omit?: VehicleRepeatedIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleRepeatedIssueInclude<ExtArgs> | null
    /**
     * Filter, which VehicleRepeatedIssue to fetch.
     */
    where: VehicleRepeatedIssueWhereUniqueInput
  }

  /**
   * VehicleRepeatedIssue findFirst
   */
  export type VehicleRepeatedIssueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleRepeatedIssue
     */
    select?: VehicleRepeatedIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleRepeatedIssue
     */
    omit?: VehicleRepeatedIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleRepeatedIssueInclude<ExtArgs> | null
    /**
     * Filter, which VehicleRepeatedIssue to fetch.
     */
    where?: VehicleRepeatedIssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleRepeatedIssues to fetch.
     */
    orderBy?: VehicleRepeatedIssueOrderByWithRelationInput | VehicleRepeatedIssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VehicleRepeatedIssues.
     */
    cursor?: VehicleRepeatedIssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleRepeatedIssues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleRepeatedIssues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleRepeatedIssues.
     */
    distinct?: VehicleRepeatedIssueScalarFieldEnum | VehicleRepeatedIssueScalarFieldEnum[]
  }

  /**
   * VehicleRepeatedIssue findFirstOrThrow
   */
  export type VehicleRepeatedIssueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleRepeatedIssue
     */
    select?: VehicleRepeatedIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleRepeatedIssue
     */
    omit?: VehicleRepeatedIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleRepeatedIssueInclude<ExtArgs> | null
    /**
     * Filter, which VehicleRepeatedIssue to fetch.
     */
    where?: VehicleRepeatedIssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleRepeatedIssues to fetch.
     */
    orderBy?: VehicleRepeatedIssueOrderByWithRelationInput | VehicleRepeatedIssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VehicleRepeatedIssues.
     */
    cursor?: VehicleRepeatedIssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleRepeatedIssues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleRepeatedIssues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleRepeatedIssues.
     */
    distinct?: VehicleRepeatedIssueScalarFieldEnum | VehicleRepeatedIssueScalarFieldEnum[]
  }

  /**
   * VehicleRepeatedIssue findMany
   */
  export type VehicleRepeatedIssueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleRepeatedIssue
     */
    select?: VehicleRepeatedIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleRepeatedIssue
     */
    omit?: VehicleRepeatedIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleRepeatedIssueInclude<ExtArgs> | null
    /**
     * Filter, which VehicleRepeatedIssues to fetch.
     */
    where?: VehicleRepeatedIssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleRepeatedIssues to fetch.
     */
    orderBy?: VehicleRepeatedIssueOrderByWithRelationInput | VehicleRepeatedIssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VehicleRepeatedIssues.
     */
    cursor?: VehicleRepeatedIssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleRepeatedIssues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleRepeatedIssues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleRepeatedIssues.
     */
    distinct?: VehicleRepeatedIssueScalarFieldEnum | VehicleRepeatedIssueScalarFieldEnum[]
  }

  /**
   * VehicleRepeatedIssue create
   */
  export type VehicleRepeatedIssueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleRepeatedIssue
     */
    select?: VehicleRepeatedIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleRepeatedIssue
     */
    omit?: VehicleRepeatedIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleRepeatedIssueInclude<ExtArgs> | null
    /**
     * The data needed to create a VehicleRepeatedIssue.
     */
    data: XOR<VehicleRepeatedIssueCreateInput, VehicleRepeatedIssueUncheckedCreateInput>
  }

  /**
   * VehicleRepeatedIssue createMany
   */
  export type VehicleRepeatedIssueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VehicleRepeatedIssues.
     */
    data: VehicleRepeatedIssueCreateManyInput | VehicleRepeatedIssueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VehicleRepeatedIssue createManyAndReturn
   */
  export type VehicleRepeatedIssueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleRepeatedIssue
     */
    select?: VehicleRepeatedIssueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleRepeatedIssue
     */
    omit?: VehicleRepeatedIssueOmit<ExtArgs> | null
    /**
     * The data used to create many VehicleRepeatedIssues.
     */
    data: VehicleRepeatedIssueCreateManyInput | VehicleRepeatedIssueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleRepeatedIssueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VehicleRepeatedIssue update
   */
  export type VehicleRepeatedIssueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleRepeatedIssue
     */
    select?: VehicleRepeatedIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleRepeatedIssue
     */
    omit?: VehicleRepeatedIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleRepeatedIssueInclude<ExtArgs> | null
    /**
     * The data needed to update a VehicleRepeatedIssue.
     */
    data: XOR<VehicleRepeatedIssueUpdateInput, VehicleRepeatedIssueUncheckedUpdateInput>
    /**
     * Choose, which VehicleRepeatedIssue to update.
     */
    where: VehicleRepeatedIssueWhereUniqueInput
  }

  /**
   * VehicleRepeatedIssue updateMany
   */
  export type VehicleRepeatedIssueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VehicleRepeatedIssues.
     */
    data: XOR<VehicleRepeatedIssueUpdateManyMutationInput, VehicleRepeatedIssueUncheckedUpdateManyInput>
    /**
     * Filter which VehicleRepeatedIssues to update
     */
    where?: VehicleRepeatedIssueWhereInput
    /**
     * Limit how many VehicleRepeatedIssues to update.
     */
    limit?: number
  }

  /**
   * VehicleRepeatedIssue updateManyAndReturn
   */
  export type VehicleRepeatedIssueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleRepeatedIssue
     */
    select?: VehicleRepeatedIssueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleRepeatedIssue
     */
    omit?: VehicleRepeatedIssueOmit<ExtArgs> | null
    /**
     * The data used to update VehicleRepeatedIssues.
     */
    data: XOR<VehicleRepeatedIssueUpdateManyMutationInput, VehicleRepeatedIssueUncheckedUpdateManyInput>
    /**
     * Filter which VehicleRepeatedIssues to update
     */
    where?: VehicleRepeatedIssueWhereInput
    /**
     * Limit how many VehicleRepeatedIssues to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleRepeatedIssueIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VehicleRepeatedIssue upsert
   */
  export type VehicleRepeatedIssueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleRepeatedIssue
     */
    select?: VehicleRepeatedIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleRepeatedIssue
     */
    omit?: VehicleRepeatedIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleRepeatedIssueInclude<ExtArgs> | null
    /**
     * The filter to search for the VehicleRepeatedIssue to update in case it exists.
     */
    where: VehicleRepeatedIssueWhereUniqueInput
    /**
     * In case the VehicleRepeatedIssue found by the `where` argument doesn't exist, create a new VehicleRepeatedIssue with this data.
     */
    create: XOR<VehicleRepeatedIssueCreateInput, VehicleRepeatedIssueUncheckedCreateInput>
    /**
     * In case the VehicleRepeatedIssue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleRepeatedIssueUpdateInput, VehicleRepeatedIssueUncheckedUpdateInput>
  }

  /**
   * VehicleRepeatedIssue delete
   */
  export type VehicleRepeatedIssueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleRepeatedIssue
     */
    select?: VehicleRepeatedIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleRepeatedIssue
     */
    omit?: VehicleRepeatedIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleRepeatedIssueInclude<ExtArgs> | null
    /**
     * Filter which VehicleRepeatedIssue to delete.
     */
    where: VehicleRepeatedIssueWhereUniqueInput
  }

  /**
   * VehicleRepeatedIssue deleteMany
   */
  export type VehicleRepeatedIssueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VehicleRepeatedIssues to delete
     */
    where?: VehicleRepeatedIssueWhereInput
    /**
     * Limit how many VehicleRepeatedIssues to delete.
     */
    limit?: number
  }

  /**
   * VehicleRepeatedIssue without action
   */
  export type VehicleRepeatedIssueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleRepeatedIssue
     */
    select?: VehicleRepeatedIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleRepeatedIssue
     */
    omit?: VehicleRepeatedIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleRepeatedIssueInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const VehicleScalarFieldEnum: {
    id: 'id',
    vehicleCode: 'vehicleCode',
    name: 'name',
    type: 'type',
    location: 'location',
    status: 'status',
    healthScore: 'healthScore',
    downtimeRisk: 'downtimeRisk',
    lastMaintenanceDate: 'lastMaintenanceDate',
    nextMaintenanceDate: 'nextMaintenanceDate',
    mileage: 'mileage',
    operatingHours: 'operatingHours',
    issueCount: 'issueCount',
    recommendation: 'recommendation',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VehicleScalarFieldEnum = (typeof VehicleScalarFieldEnum)[keyof typeof VehicleScalarFieldEnum]


  export const MaintenanceReportScalarFieldEnum: {
    id: 'id',
    vehicleId: 'vehicleId',
    date: 'date',
    component: 'component',
    issue: 'issue',
    severity: 'severity',
    technician: 'technician',
    note: 'note',
    actionTaken: 'actionTaken',
    createdAt: 'createdAt'
  };

  export type MaintenanceReportScalarFieldEnum = (typeof MaintenanceReportScalarFieldEnum)[keyof typeof MaintenanceReportScalarFieldEnum]


  export const AlertScalarFieldEnum: {
    id: 'id',
    vehicleId: 'vehicleId',
    type: 'type',
    riskLevel: 'riskLevel',
    message: 'message',
    predictedNextMaintenance: 'predictedNextMaintenance',
    recommendation: 'recommendation',
    daysUntilMaintenance: 'daysUntilMaintenance',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AlertScalarFieldEnum = (typeof AlertScalarFieldEnum)[keyof typeof AlertScalarFieldEnum]


  export const VehicleRepeatedIssueScalarFieldEnum: {
    vehicleId: 'vehicleId',
    issue: 'issue',
    frequency: 'frequency'
  };

  export type VehicleRepeatedIssueScalarFieldEnum = (typeof VehicleRepeatedIssueScalarFieldEnum)[keyof typeof VehicleRepeatedIssueScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'VehicleStatus'
   */
  export type EnumVehicleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehicleStatus'>
    


  /**
   * Reference to a field of type 'VehicleStatus[]'
   */
  export type ListEnumVehicleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehicleStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'RiskLevel'
   */
  export type EnumRiskLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RiskLevel'>
    


  /**
   * Reference to a field of type 'RiskLevel[]'
   */
  export type ListEnumRiskLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RiskLevel[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'SeverityLevel'
   */
  export type EnumSeverityLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SeverityLevel'>
    


  /**
   * Reference to a field of type 'SeverityLevel[]'
   */
  export type ListEnumSeverityLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SeverityLevel[]'>
    


  /**
   * Reference to a field of type 'AlertType'
   */
  export type EnumAlertTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AlertType'>
    


  /**
   * Reference to a field of type 'AlertType[]'
   */
  export type ListEnumAlertTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AlertType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type VehicleWhereInput = {
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    id?: StringFilter<"Vehicle"> | string
    vehicleCode?: StringFilter<"Vehicle"> | string
    name?: StringFilter<"Vehicle"> | string
    type?: StringFilter<"Vehicle"> | string
    location?: StringFilter<"Vehicle"> | string
    status?: EnumVehicleStatusFilter<"Vehicle"> | $Enums.VehicleStatus
    healthScore?: IntFilter<"Vehicle"> | number
    downtimeRisk?: EnumRiskLevelFilter<"Vehicle"> | $Enums.RiskLevel
    lastMaintenanceDate?: DateTimeNullableFilter<"Vehicle"> | Date | string | null
    nextMaintenanceDate?: DateTimeNullableFilter<"Vehicle"> | Date | string | null
    mileage?: IntFilter<"Vehicle"> | number
    operatingHours?: IntFilter<"Vehicle"> | number
    issueCount?: IntFilter<"Vehicle"> | number
    recommendation?: StringNullableFilter<"Vehicle"> | string | null
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle"> | Date | string
    maintenanceReports?: MaintenanceReportListRelationFilter
    alerts?: AlertListRelationFilter
    repeatedIssues?: VehicleRepeatedIssueListRelationFilter
  }

  export type VehicleOrderByWithRelationInput = {
    id?: SortOrder
    vehicleCode?: SortOrder
    name?: SortOrder
    type?: SortOrder
    location?: SortOrder
    status?: SortOrder
    healthScore?: SortOrder
    downtimeRisk?: SortOrder
    lastMaintenanceDate?: SortOrderInput | SortOrder
    nextMaintenanceDate?: SortOrderInput | SortOrder
    mileage?: SortOrder
    operatingHours?: SortOrder
    issueCount?: SortOrder
    recommendation?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    maintenanceReports?: MaintenanceReportOrderByRelationAggregateInput
    alerts?: AlertOrderByRelationAggregateInput
    repeatedIssues?: VehicleRepeatedIssueOrderByRelationAggregateInput
  }

  export type VehicleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    vehicleCode?: string
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    name?: StringFilter<"Vehicle"> | string
    type?: StringFilter<"Vehicle"> | string
    location?: StringFilter<"Vehicle"> | string
    status?: EnumVehicleStatusFilter<"Vehicle"> | $Enums.VehicleStatus
    healthScore?: IntFilter<"Vehicle"> | number
    downtimeRisk?: EnumRiskLevelFilter<"Vehicle"> | $Enums.RiskLevel
    lastMaintenanceDate?: DateTimeNullableFilter<"Vehicle"> | Date | string | null
    nextMaintenanceDate?: DateTimeNullableFilter<"Vehicle"> | Date | string | null
    mileage?: IntFilter<"Vehicle"> | number
    operatingHours?: IntFilter<"Vehicle"> | number
    issueCount?: IntFilter<"Vehicle"> | number
    recommendation?: StringNullableFilter<"Vehicle"> | string | null
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle"> | Date | string
    maintenanceReports?: MaintenanceReportListRelationFilter
    alerts?: AlertListRelationFilter
    repeatedIssues?: VehicleRepeatedIssueListRelationFilter
  }, "id" | "vehicleCode">

  export type VehicleOrderByWithAggregationInput = {
    id?: SortOrder
    vehicleCode?: SortOrder
    name?: SortOrder
    type?: SortOrder
    location?: SortOrder
    status?: SortOrder
    healthScore?: SortOrder
    downtimeRisk?: SortOrder
    lastMaintenanceDate?: SortOrderInput | SortOrder
    nextMaintenanceDate?: SortOrderInput | SortOrder
    mileage?: SortOrder
    operatingHours?: SortOrder
    issueCount?: SortOrder
    recommendation?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VehicleCountOrderByAggregateInput
    _avg?: VehicleAvgOrderByAggregateInput
    _max?: VehicleMaxOrderByAggregateInput
    _min?: VehicleMinOrderByAggregateInput
    _sum?: VehicleSumOrderByAggregateInput
  }

  export type VehicleScalarWhereWithAggregatesInput = {
    AND?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    OR?: VehicleScalarWhereWithAggregatesInput[]
    NOT?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vehicle"> | string
    vehicleCode?: StringWithAggregatesFilter<"Vehicle"> | string
    name?: StringWithAggregatesFilter<"Vehicle"> | string
    type?: StringWithAggregatesFilter<"Vehicle"> | string
    location?: StringWithAggregatesFilter<"Vehicle"> | string
    status?: EnumVehicleStatusWithAggregatesFilter<"Vehicle"> | $Enums.VehicleStatus
    healthScore?: IntWithAggregatesFilter<"Vehicle"> | number
    downtimeRisk?: EnumRiskLevelWithAggregatesFilter<"Vehicle"> | $Enums.RiskLevel
    lastMaintenanceDate?: DateTimeNullableWithAggregatesFilter<"Vehicle"> | Date | string | null
    nextMaintenanceDate?: DateTimeNullableWithAggregatesFilter<"Vehicle"> | Date | string | null
    mileage?: IntWithAggregatesFilter<"Vehicle"> | number
    operatingHours?: IntWithAggregatesFilter<"Vehicle"> | number
    issueCount?: IntWithAggregatesFilter<"Vehicle"> | number
    recommendation?: StringNullableWithAggregatesFilter<"Vehicle"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vehicle"> | Date | string
  }

  export type MaintenanceReportWhereInput = {
    AND?: MaintenanceReportWhereInput | MaintenanceReportWhereInput[]
    OR?: MaintenanceReportWhereInput[]
    NOT?: MaintenanceReportWhereInput | MaintenanceReportWhereInput[]
    id?: StringFilter<"MaintenanceReport"> | string
    vehicleId?: StringFilter<"MaintenanceReport"> | string
    date?: DateTimeFilter<"MaintenanceReport"> | Date | string
    component?: StringFilter<"MaintenanceReport"> | string
    issue?: StringFilter<"MaintenanceReport"> | string
    severity?: EnumSeverityLevelFilter<"MaintenanceReport"> | $Enums.SeverityLevel
    technician?: StringFilter<"MaintenanceReport"> | string
    note?: StringNullableFilter<"MaintenanceReport"> | string | null
    actionTaken?: StringNullableFilter<"MaintenanceReport"> | string | null
    createdAt?: DateTimeFilter<"MaintenanceReport"> | Date | string
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
  }

  export type MaintenanceReportOrderByWithRelationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    date?: SortOrder
    component?: SortOrder
    issue?: SortOrder
    severity?: SortOrder
    technician?: SortOrder
    note?: SortOrderInput | SortOrder
    actionTaken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    vehicle?: VehicleOrderByWithRelationInput
  }

  export type MaintenanceReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MaintenanceReportWhereInput | MaintenanceReportWhereInput[]
    OR?: MaintenanceReportWhereInput[]
    NOT?: MaintenanceReportWhereInput | MaintenanceReportWhereInput[]
    vehicleId?: StringFilter<"MaintenanceReport"> | string
    date?: DateTimeFilter<"MaintenanceReport"> | Date | string
    component?: StringFilter<"MaintenanceReport"> | string
    issue?: StringFilter<"MaintenanceReport"> | string
    severity?: EnumSeverityLevelFilter<"MaintenanceReport"> | $Enums.SeverityLevel
    technician?: StringFilter<"MaintenanceReport"> | string
    note?: StringNullableFilter<"MaintenanceReport"> | string | null
    actionTaken?: StringNullableFilter<"MaintenanceReport"> | string | null
    createdAt?: DateTimeFilter<"MaintenanceReport"> | Date | string
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
  }, "id">

  export type MaintenanceReportOrderByWithAggregationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    date?: SortOrder
    component?: SortOrder
    issue?: SortOrder
    severity?: SortOrder
    technician?: SortOrder
    note?: SortOrderInput | SortOrder
    actionTaken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MaintenanceReportCountOrderByAggregateInput
    _max?: MaintenanceReportMaxOrderByAggregateInput
    _min?: MaintenanceReportMinOrderByAggregateInput
  }

  export type MaintenanceReportScalarWhereWithAggregatesInput = {
    AND?: MaintenanceReportScalarWhereWithAggregatesInput | MaintenanceReportScalarWhereWithAggregatesInput[]
    OR?: MaintenanceReportScalarWhereWithAggregatesInput[]
    NOT?: MaintenanceReportScalarWhereWithAggregatesInput | MaintenanceReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MaintenanceReport"> | string
    vehicleId?: StringWithAggregatesFilter<"MaintenanceReport"> | string
    date?: DateTimeWithAggregatesFilter<"MaintenanceReport"> | Date | string
    component?: StringWithAggregatesFilter<"MaintenanceReport"> | string
    issue?: StringWithAggregatesFilter<"MaintenanceReport"> | string
    severity?: EnumSeverityLevelWithAggregatesFilter<"MaintenanceReport"> | $Enums.SeverityLevel
    technician?: StringWithAggregatesFilter<"MaintenanceReport"> | string
    note?: StringNullableWithAggregatesFilter<"MaintenanceReport"> | string | null
    actionTaken?: StringNullableWithAggregatesFilter<"MaintenanceReport"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MaintenanceReport"> | Date | string
  }

  export type AlertWhereInput = {
    AND?: AlertWhereInput | AlertWhereInput[]
    OR?: AlertWhereInput[]
    NOT?: AlertWhereInput | AlertWhereInput[]
    id?: StringFilter<"Alert"> | string
    vehicleId?: StringFilter<"Alert"> | string
    type?: EnumAlertTypeFilter<"Alert"> | $Enums.AlertType
    riskLevel?: EnumRiskLevelFilter<"Alert"> | $Enums.RiskLevel
    message?: StringFilter<"Alert"> | string
    predictedNextMaintenance?: DateTimeNullableFilter<"Alert"> | Date | string | null
    recommendation?: StringNullableFilter<"Alert"> | string | null
    daysUntilMaintenance?: IntNullableFilter<"Alert"> | number | null
    isActive?: BoolFilter<"Alert"> | boolean
    createdAt?: DateTimeFilter<"Alert"> | Date | string
    updatedAt?: DateTimeFilter<"Alert"> | Date | string
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
  }

  export type AlertOrderByWithRelationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    type?: SortOrder
    riskLevel?: SortOrder
    message?: SortOrder
    predictedNextMaintenance?: SortOrderInput | SortOrder
    recommendation?: SortOrderInput | SortOrder
    daysUntilMaintenance?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vehicle?: VehicleOrderByWithRelationInput
  }

  export type AlertWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AlertWhereInput | AlertWhereInput[]
    OR?: AlertWhereInput[]
    NOT?: AlertWhereInput | AlertWhereInput[]
    vehicleId?: StringFilter<"Alert"> | string
    type?: EnumAlertTypeFilter<"Alert"> | $Enums.AlertType
    riskLevel?: EnumRiskLevelFilter<"Alert"> | $Enums.RiskLevel
    message?: StringFilter<"Alert"> | string
    predictedNextMaintenance?: DateTimeNullableFilter<"Alert"> | Date | string | null
    recommendation?: StringNullableFilter<"Alert"> | string | null
    daysUntilMaintenance?: IntNullableFilter<"Alert"> | number | null
    isActive?: BoolFilter<"Alert"> | boolean
    createdAt?: DateTimeFilter<"Alert"> | Date | string
    updatedAt?: DateTimeFilter<"Alert"> | Date | string
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
  }, "id">

  export type AlertOrderByWithAggregationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    type?: SortOrder
    riskLevel?: SortOrder
    message?: SortOrder
    predictedNextMaintenance?: SortOrderInput | SortOrder
    recommendation?: SortOrderInput | SortOrder
    daysUntilMaintenance?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AlertCountOrderByAggregateInput
    _avg?: AlertAvgOrderByAggregateInput
    _max?: AlertMaxOrderByAggregateInput
    _min?: AlertMinOrderByAggregateInput
    _sum?: AlertSumOrderByAggregateInput
  }

  export type AlertScalarWhereWithAggregatesInput = {
    AND?: AlertScalarWhereWithAggregatesInput | AlertScalarWhereWithAggregatesInput[]
    OR?: AlertScalarWhereWithAggregatesInput[]
    NOT?: AlertScalarWhereWithAggregatesInput | AlertScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Alert"> | string
    vehicleId?: StringWithAggregatesFilter<"Alert"> | string
    type?: EnumAlertTypeWithAggregatesFilter<"Alert"> | $Enums.AlertType
    riskLevel?: EnumRiskLevelWithAggregatesFilter<"Alert"> | $Enums.RiskLevel
    message?: StringWithAggregatesFilter<"Alert"> | string
    predictedNextMaintenance?: DateTimeNullableWithAggregatesFilter<"Alert"> | Date | string | null
    recommendation?: StringNullableWithAggregatesFilter<"Alert"> | string | null
    daysUntilMaintenance?: IntNullableWithAggregatesFilter<"Alert"> | number | null
    isActive?: BoolWithAggregatesFilter<"Alert"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Alert"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Alert"> | Date | string
  }

  export type VehicleRepeatedIssueWhereInput = {
    AND?: VehicleRepeatedIssueWhereInput | VehicleRepeatedIssueWhereInput[]
    OR?: VehicleRepeatedIssueWhereInput[]
    NOT?: VehicleRepeatedIssueWhereInput | VehicleRepeatedIssueWhereInput[]
    vehicleId?: StringFilter<"VehicleRepeatedIssue"> | string
    issue?: StringFilter<"VehicleRepeatedIssue"> | string
    frequency?: IntFilter<"VehicleRepeatedIssue"> | number
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
  }

  export type VehicleRepeatedIssueOrderByWithRelationInput = {
    vehicleId?: SortOrder
    issue?: SortOrder
    frequency?: SortOrder
    vehicle?: VehicleOrderByWithRelationInput
  }

  export type VehicleRepeatedIssueWhereUniqueInput = Prisma.AtLeast<{
    vehicleId_issue?: VehicleRepeatedIssueVehicleIdIssueCompoundUniqueInput
    AND?: VehicleRepeatedIssueWhereInput | VehicleRepeatedIssueWhereInput[]
    OR?: VehicleRepeatedIssueWhereInput[]
    NOT?: VehicleRepeatedIssueWhereInput | VehicleRepeatedIssueWhereInput[]
    vehicleId?: StringFilter<"VehicleRepeatedIssue"> | string
    issue?: StringFilter<"VehicleRepeatedIssue"> | string
    frequency?: IntFilter<"VehicleRepeatedIssue"> | number
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
  }, "vehicleId_issue">

  export type VehicleRepeatedIssueOrderByWithAggregationInput = {
    vehicleId?: SortOrder
    issue?: SortOrder
    frequency?: SortOrder
    _count?: VehicleRepeatedIssueCountOrderByAggregateInput
    _avg?: VehicleRepeatedIssueAvgOrderByAggregateInput
    _max?: VehicleRepeatedIssueMaxOrderByAggregateInput
    _min?: VehicleRepeatedIssueMinOrderByAggregateInput
    _sum?: VehicleRepeatedIssueSumOrderByAggregateInput
  }

  export type VehicleRepeatedIssueScalarWhereWithAggregatesInput = {
    AND?: VehicleRepeatedIssueScalarWhereWithAggregatesInput | VehicleRepeatedIssueScalarWhereWithAggregatesInput[]
    OR?: VehicleRepeatedIssueScalarWhereWithAggregatesInput[]
    NOT?: VehicleRepeatedIssueScalarWhereWithAggregatesInput | VehicleRepeatedIssueScalarWhereWithAggregatesInput[]
    vehicleId?: StringWithAggregatesFilter<"VehicleRepeatedIssue"> | string
    issue?: StringWithAggregatesFilter<"VehicleRepeatedIssue"> | string
    frequency?: IntWithAggregatesFilter<"VehicleRepeatedIssue"> | number
  }

  export type VehicleCreateInput = {
    id: string
    vehicleCode: string
    name: string
    type: string
    location: string
    status?: $Enums.VehicleStatus
    healthScore?: number
    downtimeRisk?: $Enums.RiskLevel
    lastMaintenanceDate?: Date | string | null
    nextMaintenanceDate?: Date | string | null
    mileage?: number
    operatingHours?: number
    issueCount?: number
    recommendation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenanceReports?: MaintenanceReportCreateNestedManyWithoutVehicleInput
    alerts?: AlertCreateNestedManyWithoutVehicleInput
    repeatedIssues?: VehicleRepeatedIssueCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateInput = {
    id: string
    vehicleCode: string
    name: string
    type: string
    location: string
    status?: $Enums.VehicleStatus
    healthScore?: number
    downtimeRisk?: $Enums.RiskLevel
    lastMaintenanceDate?: Date | string | null
    nextMaintenanceDate?: Date | string | null
    mileage?: number
    operatingHours?: number
    issueCount?: number
    recommendation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenanceReports?: MaintenanceReportUncheckedCreateNestedManyWithoutVehicleInput
    alerts?: AlertUncheckedCreateNestedManyWithoutVehicleInput
    repeatedIssues?: VehicleRepeatedIssueUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    healthScore?: IntFieldUpdateOperationsInput | number
    downtimeRisk?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    lastMaintenanceDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextMaintenanceDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mileage?: IntFieldUpdateOperationsInput | number
    operatingHours?: IntFieldUpdateOperationsInput | number
    issueCount?: IntFieldUpdateOperationsInput | number
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceReports?: MaintenanceReportUpdateManyWithoutVehicleNestedInput
    alerts?: AlertUpdateManyWithoutVehicleNestedInput
    repeatedIssues?: VehicleRepeatedIssueUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    healthScore?: IntFieldUpdateOperationsInput | number
    downtimeRisk?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    lastMaintenanceDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextMaintenanceDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mileage?: IntFieldUpdateOperationsInput | number
    operatingHours?: IntFieldUpdateOperationsInput | number
    issueCount?: IntFieldUpdateOperationsInput | number
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceReports?: MaintenanceReportUncheckedUpdateManyWithoutVehicleNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutVehicleNestedInput
    repeatedIssues?: VehicleRepeatedIssueUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleCreateManyInput = {
    id: string
    vehicleCode: string
    name: string
    type: string
    location: string
    status?: $Enums.VehicleStatus
    healthScore?: number
    downtimeRisk?: $Enums.RiskLevel
    lastMaintenanceDate?: Date | string | null
    nextMaintenanceDate?: Date | string | null
    mileage?: number
    operatingHours?: number
    issueCount?: number
    recommendation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehicleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    healthScore?: IntFieldUpdateOperationsInput | number
    downtimeRisk?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    lastMaintenanceDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextMaintenanceDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mileage?: IntFieldUpdateOperationsInput | number
    operatingHours?: IntFieldUpdateOperationsInput | number
    issueCount?: IntFieldUpdateOperationsInput | number
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    healthScore?: IntFieldUpdateOperationsInput | number
    downtimeRisk?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    lastMaintenanceDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextMaintenanceDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mileage?: IntFieldUpdateOperationsInput | number
    operatingHours?: IntFieldUpdateOperationsInput | number
    issueCount?: IntFieldUpdateOperationsInput | number
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceReportCreateInput = {
    id: string
    date: Date | string
    component: string
    issue: string
    severity: $Enums.SeverityLevel
    technician: string
    note?: string | null
    actionTaken?: string | null
    createdAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutMaintenanceReportsInput
  }

  export type MaintenanceReportUncheckedCreateInput = {
    id: string
    vehicleId: string
    date: Date | string
    component: string
    issue: string
    severity: $Enums.SeverityLevel
    technician: string
    note?: string | null
    actionTaken?: string | null
    createdAt?: Date | string
  }

  export type MaintenanceReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    component?: StringFieldUpdateOperationsInput | string
    issue?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityLevelFieldUpdateOperationsInput | $Enums.SeverityLevel
    technician?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    actionTaken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutMaintenanceReportsNestedInput
  }

  export type MaintenanceReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    component?: StringFieldUpdateOperationsInput | string
    issue?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityLevelFieldUpdateOperationsInput | $Enums.SeverityLevel
    technician?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    actionTaken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceReportCreateManyInput = {
    id: string
    vehicleId: string
    date: Date | string
    component: string
    issue: string
    severity: $Enums.SeverityLevel
    technician: string
    note?: string | null
    actionTaken?: string | null
    createdAt?: Date | string
  }

  export type MaintenanceReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    component?: StringFieldUpdateOperationsInput | string
    issue?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityLevelFieldUpdateOperationsInput | $Enums.SeverityLevel
    technician?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    actionTaken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    component?: StringFieldUpdateOperationsInput | string
    issue?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityLevelFieldUpdateOperationsInput | $Enums.SeverityLevel
    technician?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    actionTaken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertCreateInput = {
    id: string
    type: $Enums.AlertType
    riskLevel: $Enums.RiskLevel
    message: string
    predictedNextMaintenance?: Date | string | null
    recommendation?: string | null
    daysUntilMaintenance?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutAlertsInput
  }

  export type AlertUncheckedCreateInput = {
    id: string
    vehicleId: string
    type: $Enums.AlertType
    riskLevel: $Enums.RiskLevel
    message: string
    predictedNextMaintenance?: Date | string | null
    recommendation?: string | null
    daysUntilMaintenance?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlertUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    message?: StringFieldUpdateOperationsInput | string
    predictedNextMaintenance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    daysUntilMaintenance?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutAlertsNestedInput
  }

  export type AlertUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    message?: StringFieldUpdateOperationsInput | string
    predictedNextMaintenance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    daysUntilMaintenance?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertCreateManyInput = {
    id: string
    vehicleId: string
    type: $Enums.AlertType
    riskLevel: $Enums.RiskLevel
    message: string
    predictedNextMaintenance?: Date | string | null
    recommendation?: string | null
    daysUntilMaintenance?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlertUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    message?: StringFieldUpdateOperationsInput | string
    predictedNextMaintenance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    daysUntilMaintenance?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    message?: StringFieldUpdateOperationsInput | string
    predictedNextMaintenance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    daysUntilMaintenance?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleRepeatedIssueCreateInput = {
    issue: string
    frequency?: number
    vehicle: VehicleCreateNestedOneWithoutRepeatedIssuesInput
  }

  export type VehicleRepeatedIssueUncheckedCreateInput = {
    vehicleId: string
    issue: string
    frequency?: number
  }

  export type VehicleRepeatedIssueUpdateInput = {
    issue?: StringFieldUpdateOperationsInput | string
    frequency?: IntFieldUpdateOperationsInput | number
    vehicle?: VehicleUpdateOneRequiredWithoutRepeatedIssuesNestedInput
  }

  export type VehicleRepeatedIssueUncheckedUpdateInput = {
    vehicleId?: StringFieldUpdateOperationsInput | string
    issue?: StringFieldUpdateOperationsInput | string
    frequency?: IntFieldUpdateOperationsInput | number
  }

  export type VehicleRepeatedIssueCreateManyInput = {
    vehicleId: string
    issue: string
    frequency?: number
  }

  export type VehicleRepeatedIssueUpdateManyMutationInput = {
    issue?: StringFieldUpdateOperationsInput | string
    frequency?: IntFieldUpdateOperationsInput | number
  }

  export type VehicleRepeatedIssueUncheckedUpdateManyInput = {
    vehicleId?: StringFieldUpdateOperationsInput | string
    issue?: StringFieldUpdateOperationsInput | string
    frequency?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumVehicleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleStatus | EnumVehicleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleStatusFilter<$PrismaModel> | $Enums.VehicleStatus
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumRiskLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLevel | EnumRiskLevelFieldRefInput<$PrismaModel>
    in?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumRiskLevelFilter<$PrismaModel> | $Enums.RiskLevel
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MaintenanceReportListRelationFilter = {
    every?: MaintenanceReportWhereInput
    some?: MaintenanceReportWhereInput
    none?: MaintenanceReportWhereInput
  }

  export type AlertListRelationFilter = {
    every?: AlertWhereInput
    some?: AlertWhereInput
    none?: AlertWhereInput
  }

  export type VehicleRepeatedIssueListRelationFilter = {
    every?: VehicleRepeatedIssueWhereInput
    some?: VehicleRepeatedIssueWhereInput
    none?: VehicleRepeatedIssueWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MaintenanceReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlertOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VehicleRepeatedIssueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VehicleCountOrderByAggregateInput = {
    id?: SortOrder
    vehicleCode?: SortOrder
    name?: SortOrder
    type?: SortOrder
    location?: SortOrder
    status?: SortOrder
    healthScore?: SortOrder
    downtimeRisk?: SortOrder
    lastMaintenanceDate?: SortOrder
    nextMaintenanceDate?: SortOrder
    mileage?: SortOrder
    operatingHours?: SortOrder
    issueCount?: SortOrder
    recommendation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleAvgOrderByAggregateInput = {
    healthScore?: SortOrder
    mileage?: SortOrder
    operatingHours?: SortOrder
    issueCount?: SortOrder
  }

  export type VehicleMaxOrderByAggregateInput = {
    id?: SortOrder
    vehicleCode?: SortOrder
    name?: SortOrder
    type?: SortOrder
    location?: SortOrder
    status?: SortOrder
    healthScore?: SortOrder
    downtimeRisk?: SortOrder
    lastMaintenanceDate?: SortOrder
    nextMaintenanceDate?: SortOrder
    mileage?: SortOrder
    operatingHours?: SortOrder
    issueCount?: SortOrder
    recommendation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleMinOrderByAggregateInput = {
    id?: SortOrder
    vehicleCode?: SortOrder
    name?: SortOrder
    type?: SortOrder
    location?: SortOrder
    status?: SortOrder
    healthScore?: SortOrder
    downtimeRisk?: SortOrder
    lastMaintenanceDate?: SortOrder
    nextMaintenanceDate?: SortOrder
    mileage?: SortOrder
    operatingHours?: SortOrder
    issueCount?: SortOrder
    recommendation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleSumOrderByAggregateInput = {
    healthScore?: SortOrder
    mileage?: SortOrder
    operatingHours?: SortOrder
    issueCount?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumVehicleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleStatus | EnumVehicleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleStatusWithAggregatesFilter<$PrismaModel> | $Enums.VehicleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVehicleStatusFilter<$PrismaModel>
    _max?: NestedEnumVehicleStatusFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumRiskLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLevel | EnumRiskLevelFieldRefInput<$PrismaModel>
    in?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumRiskLevelWithAggregatesFilter<$PrismaModel> | $Enums.RiskLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRiskLevelFilter<$PrismaModel>
    _max?: NestedEnumRiskLevelFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumSeverityLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.SeverityLevel | EnumSeverityLevelFieldRefInput<$PrismaModel>
    in?: $Enums.SeverityLevel[] | ListEnumSeverityLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.SeverityLevel[] | ListEnumSeverityLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityLevelFilter<$PrismaModel> | $Enums.SeverityLevel
  }

  export type VehicleScalarRelationFilter = {
    is?: VehicleWhereInput
    isNot?: VehicleWhereInput
  }

  export type MaintenanceReportCountOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    date?: SortOrder
    component?: SortOrder
    issue?: SortOrder
    severity?: SortOrder
    technician?: SortOrder
    note?: SortOrder
    actionTaken?: SortOrder
    createdAt?: SortOrder
  }

  export type MaintenanceReportMaxOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    date?: SortOrder
    component?: SortOrder
    issue?: SortOrder
    severity?: SortOrder
    technician?: SortOrder
    note?: SortOrder
    actionTaken?: SortOrder
    createdAt?: SortOrder
  }

  export type MaintenanceReportMinOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    date?: SortOrder
    component?: SortOrder
    issue?: SortOrder
    severity?: SortOrder
    technician?: SortOrder
    note?: SortOrder
    actionTaken?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumSeverityLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SeverityLevel | EnumSeverityLevelFieldRefInput<$PrismaModel>
    in?: $Enums.SeverityLevel[] | ListEnumSeverityLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.SeverityLevel[] | ListEnumSeverityLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityLevelWithAggregatesFilter<$PrismaModel> | $Enums.SeverityLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSeverityLevelFilter<$PrismaModel>
    _max?: NestedEnumSeverityLevelFilter<$PrismaModel>
  }

  export type EnumAlertTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertType | EnumAlertTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertTypeFilter<$PrismaModel> | $Enums.AlertType
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AlertCountOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    type?: SortOrder
    riskLevel?: SortOrder
    message?: SortOrder
    predictedNextMaintenance?: SortOrder
    recommendation?: SortOrder
    daysUntilMaintenance?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlertAvgOrderByAggregateInput = {
    daysUntilMaintenance?: SortOrder
  }

  export type AlertMaxOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    type?: SortOrder
    riskLevel?: SortOrder
    message?: SortOrder
    predictedNextMaintenance?: SortOrder
    recommendation?: SortOrder
    daysUntilMaintenance?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlertMinOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    type?: SortOrder
    riskLevel?: SortOrder
    message?: SortOrder
    predictedNextMaintenance?: SortOrder
    recommendation?: SortOrder
    daysUntilMaintenance?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlertSumOrderByAggregateInput = {
    daysUntilMaintenance?: SortOrder
  }

  export type EnumAlertTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertType | EnumAlertTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertTypeWithAggregatesFilter<$PrismaModel> | $Enums.AlertType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAlertTypeFilter<$PrismaModel>
    _max?: NestedEnumAlertTypeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type VehicleRepeatedIssueVehicleIdIssueCompoundUniqueInput = {
    vehicleId: string
    issue: string
  }

  export type VehicleRepeatedIssueCountOrderByAggregateInput = {
    vehicleId?: SortOrder
    issue?: SortOrder
    frequency?: SortOrder
  }

  export type VehicleRepeatedIssueAvgOrderByAggregateInput = {
    frequency?: SortOrder
  }

  export type VehicleRepeatedIssueMaxOrderByAggregateInput = {
    vehicleId?: SortOrder
    issue?: SortOrder
    frequency?: SortOrder
  }

  export type VehicleRepeatedIssueMinOrderByAggregateInput = {
    vehicleId?: SortOrder
    issue?: SortOrder
    frequency?: SortOrder
  }

  export type VehicleRepeatedIssueSumOrderByAggregateInput = {
    frequency?: SortOrder
  }

  export type MaintenanceReportCreateNestedManyWithoutVehicleInput = {
    create?: XOR<MaintenanceReportCreateWithoutVehicleInput, MaintenanceReportUncheckedCreateWithoutVehicleInput> | MaintenanceReportCreateWithoutVehicleInput[] | MaintenanceReportUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: MaintenanceReportCreateOrConnectWithoutVehicleInput | MaintenanceReportCreateOrConnectWithoutVehicleInput[]
    createMany?: MaintenanceReportCreateManyVehicleInputEnvelope
    connect?: MaintenanceReportWhereUniqueInput | MaintenanceReportWhereUniqueInput[]
  }

  export type AlertCreateNestedManyWithoutVehicleInput = {
    create?: XOR<AlertCreateWithoutVehicleInput, AlertUncheckedCreateWithoutVehicleInput> | AlertCreateWithoutVehicleInput[] | AlertUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutVehicleInput | AlertCreateOrConnectWithoutVehicleInput[]
    createMany?: AlertCreateManyVehicleInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type VehicleRepeatedIssueCreateNestedManyWithoutVehicleInput = {
    create?: XOR<VehicleRepeatedIssueCreateWithoutVehicleInput, VehicleRepeatedIssueUncheckedCreateWithoutVehicleInput> | VehicleRepeatedIssueCreateWithoutVehicleInput[] | VehicleRepeatedIssueUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: VehicleRepeatedIssueCreateOrConnectWithoutVehicleInput | VehicleRepeatedIssueCreateOrConnectWithoutVehicleInput[]
    createMany?: VehicleRepeatedIssueCreateManyVehicleInputEnvelope
    connect?: VehicleRepeatedIssueWhereUniqueInput | VehicleRepeatedIssueWhereUniqueInput[]
  }

  export type MaintenanceReportUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<MaintenanceReportCreateWithoutVehicleInput, MaintenanceReportUncheckedCreateWithoutVehicleInput> | MaintenanceReportCreateWithoutVehicleInput[] | MaintenanceReportUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: MaintenanceReportCreateOrConnectWithoutVehicleInput | MaintenanceReportCreateOrConnectWithoutVehicleInput[]
    createMany?: MaintenanceReportCreateManyVehicleInputEnvelope
    connect?: MaintenanceReportWhereUniqueInput | MaintenanceReportWhereUniqueInput[]
  }

  export type AlertUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<AlertCreateWithoutVehicleInput, AlertUncheckedCreateWithoutVehicleInput> | AlertCreateWithoutVehicleInput[] | AlertUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutVehicleInput | AlertCreateOrConnectWithoutVehicleInput[]
    createMany?: AlertCreateManyVehicleInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type VehicleRepeatedIssueUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<VehicleRepeatedIssueCreateWithoutVehicleInput, VehicleRepeatedIssueUncheckedCreateWithoutVehicleInput> | VehicleRepeatedIssueCreateWithoutVehicleInput[] | VehicleRepeatedIssueUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: VehicleRepeatedIssueCreateOrConnectWithoutVehicleInput | VehicleRepeatedIssueCreateOrConnectWithoutVehicleInput[]
    createMany?: VehicleRepeatedIssueCreateManyVehicleInputEnvelope
    connect?: VehicleRepeatedIssueWhereUniqueInput | VehicleRepeatedIssueWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumVehicleStatusFieldUpdateOperationsInput = {
    set?: $Enums.VehicleStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumRiskLevelFieldUpdateOperationsInput = {
    set?: $Enums.RiskLevel
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MaintenanceReportUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<MaintenanceReportCreateWithoutVehicleInput, MaintenanceReportUncheckedCreateWithoutVehicleInput> | MaintenanceReportCreateWithoutVehicleInput[] | MaintenanceReportUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: MaintenanceReportCreateOrConnectWithoutVehicleInput | MaintenanceReportCreateOrConnectWithoutVehicleInput[]
    upsert?: MaintenanceReportUpsertWithWhereUniqueWithoutVehicleInput | MaintenanceReportUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: MaintenanceReportCreateManyVehicleInputEnvelope
    set?: MaintenanceReportWhereUniqueInput | MaintenanceReportWhereUniqueInput[]
    disconnect?: MaintenanceReportWhereUniqueInput | MaintenanceReportWhereUniqueInput[]
    delete?: MaintenanceReportWhereUniqueInput | MaintenanceReportWhereUniqueInput[]
    connect?: MaintenanceReportWhereUniqueInput | MaintenanceReportWhereUniqueInput[]
    update?: MaintenanceReportUpdateWithWhereUniqueWithoutVehicleInput | MaintenanceReportUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: MaintenanceReportUpdateManyWithWhereWithoutVehicleInput | MaintenanceReportUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: MaintenanceReportScalarWhereInput | MaintenanceReportScalarWhereInput[]
  }

  export type AlertUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<AlertCreateWithoutVehicleInput, AlertUncheckedCreateWithoutVehicleInput> | AlertCreateWithoutVehicleInput[] | AlertUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutVehicleInput | AlertCreateOrConnectWithoutVehicleInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutVehicleInput | AlertUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: AlertCreateManyVehicleInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutVehicleInput | AlertUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutVehicleInput | AlertUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type VehicleRepeatedIssueUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<VehicleRepeatedIssueCreateWithoutVehicleInput, VehicleRepeatedIssueUncheckedCreateWithoutVehicleInput> | VehicleRepeatedIssueCreateWithoutVehicleInput[] | VehicleRepeatedIssueUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: VehicleRepeatedIssueCreateOrConnectWithoutVehicleInput | VehicleRepeatedIssueCreateOrConnectWithoutVehicleInput[]
    upsert?: VehicleRepeatedIssueUpsertWithWhereUniqueWithoutVehicleInput | VehicleRepeatedIssueUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: VehicleRepeatedIssueCreateManyVehicleInputEnvelope
    set?: VehicleRepeatedIssueWhereUniqueInput | VehicleRepeatedIssueWhereUniqueInput[]
    disconnect?: VehicleRepeatedIssueWhereUniqueInput | VehicleRepeatedIssueWhereUniqueInput[]
    delete?: VehicleRepeatedIssueWhereUniqueInput | VehicleRepeatedIssueWhereUniqueInput[]
    connect?: VehicleRepeatedIssueWhereUniqueInput | VehicleRepeatedIssueWhereUniqueInput[]
    update?: VehicleRepeatedIssueUpdateWithWhereUniqueWithoutVehicleInput | VehicleRepeatedIssueUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: VehicleRepeatedIssueUpdateManyWithWhereWithoutVehicleInput | VehicleRepeatedIssueUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: VehicleRepeatedIssueScalarWhereInput | VehicleRepeatedIssueScalarWhereInput[]
  }

  export type MaintenanceReportUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<MaintenanceReportCreateWithoutVehicleInput, MaintenanceReportUncheckedCreateWithoutVehicleInput> | MaintenanceReportCreateWithoutVehicleInput[] | MaintenanceReportUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: MaintenanceReportCreateOrConnectWithoutVehicleInput | MaintenanceReportCreateOrConnectWithoutVehicleInput[]
    upsert?: MaintenanceReportUpsertWithWhereUniqueWithoutVehicleInput | MaintenanceReportUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: MaintenanceReportCreateManyVehicleInputEnvelope
    set?: MaintenanceReportWhereUniqueInput | MaintenanceReportWhereUniqueInput[]
    disconnect?: MaintenanceReportWhereUniqueInput | MaintenanceReportWhereUniqueInput[]
    delete?: MaintenanceReportWhereUniqueInput | MaintenanceReportWhereUniqueInput[]
    connect?: MaintenanceReportWhereUniqueInput | MaintenanceReportWhereUniqueInput[]
    update?: MaintenanceReportUpdateWithWhereUniqueWithoutVehicleInput | MaintenanceReportUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: MaintenanceReportUpdateManyWithWhereWithoutVehicleInput | MaintenanceReportUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: MaintenanceReportScalarWhereInput | MaintenanceReportScalarWhereInput[]
  }

  export type AlertUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<AlertCreateWithoutVehicleInput, AlertUncheckedCreateWithoutVehicleInput> | AlertCreateWithoutVehicleInput[] | AlertUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutVehicleInput | AlertCreateOrConnectWithoutVehicleInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutVehicleInput | AlertUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: AlertCreateManyVehicleInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutVehicleInput | AlertUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutVehicleInput | AlertUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type VehicleRepeatedIssueUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<VehicleRepeatedIssueCreateWithoutVehicleInput, VehicleRepeatedIssueUncheckedCreateWithoutVehicleInput> | VehicleRepeatedIssueCreateWithoutVehicleInput[] | VehicleRepeatedIssueUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: VehicleRepeatedIssueCreateOrConnectWithoutVehicleInput | VehicleRepeatedIssueCreateOrConnectWithoutVehicleInput[]
    upsert?: VehicleRepeatedIssueUpsertWithWhereUniqueWithoutVehicleInput | VehicleRepeatedIssueUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: VehicleRepeatedIssueCreateManyVehicleInputEnvelope
    set?: VehicleRepeatedIssueWhereUniqueInput | VehicleRepeatedIssueWhereUniqueInput[]
    disconnect?: VehicleRepeatedIssueWhereUniqueInput | VehicleRepeatedIssueWhereUniqueInput[]
    delete?: VehicleRepeatedIssueWhereUniqueInput | VehicleRepeatedIssueWhereUniqueInput[]
    connect?: VehicleRepeatedIssueWhereUniqueInput | VehicleRepeatedIssueWhereUniqueInput[]
    update?: VehicleRepeatedIssueUpdateWithWhereUniqueWithoutVehicleInput | VehicleRepeatedIssueUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: VehicleRepeatedIssueUpdateManyWithWhereWithoutVehicleInput | VehicleRepeatedIssueUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: VehicleRepeatedIssueScalarWhereInput | VehicleRepeatedIssueScalarWhereInput[]
  }

  export type VehicleCreateNestedOneWithoutMaintenanceReportsInput = {
    create?: XOR<VehicleCreateWithoutMaintenanceReportsInput, VehicleUncheckedCreateWithoutMaintenanceReportsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutMaintenanceReportsInput
    connect?: VehicleWhereUniqueInput
  }

  export type EnumSeverityLevelFieldUpdateOperationsInput = {
    set?: $Enums.SeverityLevel
  }

  export type VehicleUpdateOneRequiredWithoutMaintenanceReportsNestedInput = {
    create?: XOR<VehicleCreateWithoutMaintenanceReportsInput, VehicleUncheckedCreateWithoutMaintenanceReportsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutMaintenanceReportsInput
    upsert?: VehicleUpsertWithoutMaintenanceReportsInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutMaintenanceReportsInput, VehicleUpdateWithoutMaintenanceReportsInput>, VehicleUncheckedUpdateWithoutMaintenanceReportsInput>
  }

  export type VehicleCreateNestedOneWithoutAlertsInput = {
    create?: XOR<VehicleCreateWithoutAlertsInput, VehicleUncheckedCreateWithoutAlertsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutAlertsInput
    connect?: VehicleWhereUniqueInput
  }

  export type EnumAlertTypeFieldUpdateOperationsInput = {
    set?: $Enums.AlertType
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type VehicleUpdateOneRequiredWithoutAlertsNestedInput = {
    create?: XOR<VehicleCreateWithoutAlertsInput, VehicleUncheckedCreateWithoutAlertsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutAlertsInput
    upsert?: VehicleUpsertWithoutAlertsInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutAlertsInput, VehicleUpdateWithoutAlertsInput>, VehicleUncheckedUpdateWithoutAlertsInput>
  }

  export type VehicleCreateNestedOneWithoutRepeatedIssuesInput = {
    create?: XOR<VehicleCreateWithoutRepeatedIssuesInput, VehicleUncheckedCreateWithoutRepeatedIssuesInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutRepeatedIssuesInput
    connect?: VehicleWhereUniqueInput
  }

  export type VehicleUpdateOneRequiredWithoutRepeatedIssuesNestedInput = {
    create?: XOR<VehicleCreateWithoutRepeatedIssuesInput, VehicleUncheckedCreateWithoutRepeatedIssuesInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutRepeatedIssuesInput
    upsert?: VehicleUpsertWithoutRepeatedIssuesInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutRepeatedIssuesInput, VehicleUpdateWithoutRepeatedIssuesInput>, VehicleUncheckedUpdateWithoutRepeatedIssuesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumVehicleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleStatus | EnumVehicleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleStatusFilter<$PrismaModel> | $Enums.VehicleStatus
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRiskLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLevel | EnumRiskLevelFieldRefInput<$PrismaModel>
    in?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumRiskLevelFilter<$PrismaModel> | $Enums.RiskLevel
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumVehicleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleStatus | EnumVehicleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleStatusWithAggregatesFilter<$PrismaModel> | $Enums.VehicleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVehicleStatusFilter<$PrismaModel>
    _max?: NestedEnumVehicleStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumRiskLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskLevel | EnumRiskLevelFieldRefInput<$PrismaModel>
    in?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.RiskLevel[] | ListEnumRiskLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumRiskLevelWithAggregatesFilter<$PrismaModel> | $Enums.RiskLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRiskLevelFilter<$PrismaModel>
    _max?: NestedEnumRiskLevelFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumSeverityLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.SeverityLevel | EnumSeverityLevelFieldRefInput<$PrismaModel>
    in?: $Enums.SeverityLevel[] | ListEnumSeverityLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.SeverityLevel[] | ListEnumSeverityLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityLevelFilter<$PrismaModel> | $Enums.SeverityLevel
  }

  export type NestedEnumSeverityLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SeverityLevel | EnumSeverityLevelFieldRefInput<$PrismaModel>
    in?: $Enums.SeverityLevel[] | ListEnumSeverityLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.SeverityLevel[] | ListEnumSeverityLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumSeverityLevelWithAggregatesFilter<$PrismaModel> | $Enums.SeverityLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSeverityLevelFilter<$PrismaModel>
    _max?: NestedEnumSeverityLevelFilter<$PrismaModel>
  }

  export type NestedEnumAlertTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertType | EnumAlertTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertTypeFilter<$PrismaModel> | $Enums.AlertType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumAlertTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertType | EnumAlertTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertTypeWithAggregatesFilter<$PrismaModel> | $Enums.AlertType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAlertTypeFilter<$PrismaModel>
    _max?: NestedEnumAlertTypeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type MaintenanceReportCreateWithoutVehicleInput = {
    id: string
    date: Date | string
    component: string
    issue: string
    severity: $Enums.SeverityLevel
    technician: string
    note?: string | null
    actionTaken?: string | null
    createdAt?: Date | string
  }

  export type MaintenanceReportUncheckedCreateWithoutVehicleInput = {
    id: string
    date: Date | string
    component: string
    issue: string
    severity: $Enums.SeverityLevel
    technician: string
    note?: string | null
    actionTaken?: string | null
    createdAt?: Date | string
  }

  export type MaintenanceReportCreateOrConnectWithoutVehicleInput = {
    where: MaintenanceReportWhereUniqueInput
    create: XOR<MaintenanceReportCreateWithoutVehicleInput, MaintenanceReportUncheckedCreateWithoutVehicleInput>
  }

  export type MaintenanceReportCreateManyVehicleInputEnvelope = {
    data: MaintenanceReportCreateManyVehicleInput | MaintenanceReportCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type AlertCreateWithoutVehicleInput = {
    id: string
    type: $Enums.AlertType
    riskLevel: $Enums.RiskLevel
    message: string
    predictedNextMaintenance?: Date | string | null
    recommendation?: string | null
    daysUntilMaintenance?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlertUncheckedCreateWithoutVehicleInput = {
    id: string
    type: $Enums.AlertType
    riskLevel: $Enums.RiskLevel
    message: string
    predictedNextMaintenance?: Date | string | null
    recommendation?: string | null
    daysUntilMaintenance?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlertCreateOrConnectWithoutVehicleInput = {
    where: AlertWhereUniqueInput
    create: XOR<AlertCreateWithoutVehicleInput, AlertUncheckedCreateWithoutVehicleInput>
  }

  export type AlertCreateManyVehicleInputEnvelope = {
    data: AlertCreateManyVehicleInput | AlertCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type VehicleRepeatedIssueCreateWithoutVehicleInput = {
    issue: string
    frequency?: number
  }

  export type VehicleRepeatedIssueUncheckedCreateWithoutVehicleInput = {
    issue: string
    frequency?: number
  }

  export type VehicleRepeatedIssueCreateOrConnectWithoutVehicleInput = {
    where: VehicleRepeatedIssueWhereUniqueInput
    create: XOR<VehicleRepeatedIssueCreateWithoutVehicleInput, VehicleRepeatedIssueUncheckedCreateWithoutVehicleInput>
  }

  export type VehicleRepeatedIssueCreateManyVehicleInputEnvelope = {
    data: VehicleRepeatedIssueCreateManyVehicleInput | VehicleRepeatedIssueCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type MaintenanceReportUpsertWithWhereUniqueWithoutVehicleInput = {
    where: MaintenanceReportWhereUniqueInput
    update: XOR<MaintenanceReportUpdateWithoutVehicleInput, MaintenanceReportUncheckedUpdateWithoutVehicleInput>
    create: XOR<MaintenanceReportCreateWithoutVehicleInput, MaintenanceReportUncheckedCreateWithoutVehicleInput>
  }

  export type MaintenanceReportUpdateWithWhereUniqueWithoutVehicleInput = {
    where: MaintenanceReportWhereUniqueInput
    data: XOR<MaintenanceReportUpdateWithoutVehicleInput, MaintenanceReportUncheckedUpdateWithoutVehicleInput>
  }

  export type MaintenanceReportUpdateManyWithWhereWithoutVehicleInput = {
    where: MaintenanceReportScalarWhereInput
    data: XOR<MaintenanceReportUpdateManyMutationInput, MaintenanceReportUncheckedUpdateManyWithoutVehicleInput>
  }

  export type MaintenanceReportScalarWhereInput = {
    AND?: MaintenanceReportScalarWhereInput | MaintenanceReportScalarWhereInput[]
    OR?: MaintenanceReportScalarWhereInput[]
    NOT?: MaintenanceReportScalarWhereInput | MaintenanceReportScalarWhereInput[]
    id?: StringFilter<"MaintenanceReport"> | string
    vehicleId?: StringFilter<"MaintenanceReport"> | string
    date?: DateTimeFilter<"MaintenanceReport"> | Date | string
    component?: StringFilter<"MaintenanceReport"> | string
    issue?: StringFilter<"MaintenanceReport"> | string
    severity?: EnumSeverityLevelFilter<"MaintenanceReport"> | $Enums.SeverityLevel
    technician?: StringFilter<"MaintenanceReport"> | string
    note?: StringNullableFilter<"MaintenanceReport"> | string | null
    actionTaken?: StringNullableFilter<"MaintenanceReport"> | string | null
    createdAt?: DateTimeFilter<"MaintenanceReport"> | Date | string
  }

  export type AlertUpsertWithWhereUniqueWithoutVehicleInput = {
    where: AlertWhereUniqueInput
    update: XOR<AlertUpdateWithoutVehicleInput, AlertUncheckedUpdateWithoutVehicleInput>
    create: XOR<AlertCreateWithoutVehicleInput, AlertUncheckedCreateWithoutVehicleInput>
  }

  export type AlertUpdateWithWhereUniqueWithoutVehicleInput = {
    where: AlertWhereUniqueInput
    data: XOR<AlertUpdateWithoutVehicleInput, AlertUncheckedUpdateWithoutVehicleInput>
  }

  export type AlertUpdateManyWithWhereWithoutVehicleInput = {
    where: AlertScalarWhereInput
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyWithoutVehicleInput>
  }

  export type AlertScalarWhereInput = {
    AND?: AlertScalarWhereInput | AlertScalarWhereInput[]
    OR?: AlertScalarWhereInput[]
    NOT?: AlertScalarWhereInput | AlertScalarWhereInput[]
    id?: StringFilter<"Alert"> | string
    vehicleId?: StringFilter<"Alert"> | string
    type?: EnumAlertTypeFilter<"Alert"> | $Enums.AlertType
    riskLevel?: EnumRiskLevelFilter<"Alert"> | $Enums.RiskLevel
    message?: StringFilter<"Alert"> | string
    predictedNextMaintenance?: DateTimeNullableFilter<"Alert"> | Date | string | null
    recommendation?: StringNullableFilter<"Alert"> | string | null
    daysUntilMaintenance?: IntNullableFilter<"Alert"> | number | null
    isActive?: BoolFilter<"Alert"> | boolean
    createdAt?: DateTimeFilter<"Alert"> | Date | string
    updatedAt?: DateTimeFilter<"Alert"> | Date | string
  }

  export type VehicleRepeatedIssueUpsertWithWhereUniqueWithoutVehicleInput = {
    where: VehicleRepeatedIssueWhereUniqueInput
    update: XOR<VehicleRepeatedIssueUpdateWithoutVehicleInput, VehicleRepeatedIssueUncheckedUpdateWithoutVehicleInput>
    create: XOR<VehicleRepeatedIssueCreateWithoutVehicleInput, VehicleRepeatedIssueUncheckedCreateWithoutVehicleInput>
  }

  export type VehicleRepeatedIssueUpdateWithWhereUniqueWithoutVehicleInput = {
    where: VehicleRepeatedIssueWhereUniqueInput
    data: XOR<VehicleRepeatedIssueUpdateWithoutVehicleInput, VehicleRepeatedIssueUncheckedUpdateWithoutVehicleInput>
  }

  export type VehicleRepeatedIssueUpdateManyWithWhereWithoutVehicleInput = {
    where: VehicleRepeatedIssueScalarWhereInput
    data: XOR<VehicleRepeatedIssueUpdateManyMutationInput, VehicleRepeatedIssueUncheckedUpdateManyWithoutVehicleInput>
  }

  export type VehicleRepeatedIssueScalarWhereInput = {
    AND?: VehicleRepeatedIssueScalarWhereInput | VehicleRepeatedIssueScalarWhereInput[]
    OR?: VehicleRepeatedIssueScalarWhereInput[]
    NOT?: VehicleRepeatedIssueScalarWhereInput | VehicleRepeatedIssueScalarWhereInput[]
    vehicleId?: StringFilter<"VehicleRepeatedIssue"> | string
    issue?: StringFilter<"VehicleRepeatedIssue"> | string
    frequency?: IntFilter<"VehicleRepeatedIssue"> | number
  }

  export type VehicleCreateWithoutMaintenanceReportsInput = {
    id: string
    vehicleCode: string
    name: string
    type: string
    location: string
    status?: $Enums.VehicleStatus
    healthScore?: number
    downtimeRisk?: $Enums.RiskLevel
    lastMaintenanceDate?: Date | string | null
    nextMaintenanceDate?: Date | string | null
    mileage?: number
    operatingHours?: number
    issueCount?: number
    recommendation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    alerts?: AlertCreateNestedManyWithoutVehicleInput
    repeatedIssues?: VehicleRepeatedIssueCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutMaintenanceReportsInput = {
    id: string
    vehicleCode: string
    name: string
    type: string
    location: string
    status?: $Enums.VehicleStatus
    healthScore?: number
    downtimeRisk?: $Enums.RiskLevel
    lastMaintenanceDate?: Date | string | null
    nextMaintenanceDate?: Date | string | null
    mileage?: number
    operatingHours?: number
    issueCount?: number
    recommendation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    alerts?: AlertUncheckedCreateNestedManyWithoutVehicleInput
    repeatedIssues?: VehicleRepeatedIssueUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutMaintenanceReportsInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutMaintenanceReportsInput, VehicleUncheckedCreateWithoutMaintenanceReportsInput>
  }

  export type VehicleUpsertWithoutMaintenanceReportsInput = {
    update: XOR<VehicleUpdateWithoutMaintenanceReportsInput, VehicleUncheckedUpdateWithoutMaintenanceReportsInput>
    create: XOR<VehicleCreateWithoutMaintenanceReportsInput, VehicleUncheckedCreateWithoutMaintenanceReportsInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutMaintenanceReportsInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutMaintenanceReportsInput, VehicleUncheckedUpdateWithoutMaintenanceReportsInput>
  }

  export type VehicleUpdateWithoutMaintenanceReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    healthScore?: IntFieldUpdateOperationsInput | number
    downtimeRisk?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    lastMaintenanceDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextMaintenanceDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mileage?: IntFieldUpdateOperationsInput | number
    operatingHours?: IntFieldUpdateOperationsInput | number
    issueCount?: IntFieldUpdateOperationsInput | number
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alerts?: AlertUpdateManyWithoutVehicleNestedInput
    repeatedIssues?: VehicleRepeatedIssueUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutMaintenanceReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    healthScore?: IntFieldUpdateOperationsInput | number
    downtimeRisk?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    lastMaintenanceDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextMaintenanceDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mileage?: IntFieldUpdateOperationsInput | number
    operatingHours?: IntFieldUpdateOperationsInput | number
    issueCount?: IntFieldUpdateOperationsInput | number
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alerts?: AlertUncheckedUpdateManyWithoutVehicleNestedInput
    repeatedIssues?: VehicleRepeatedIssueUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleCreateWithoutAlertsInput = {
    id: string
    vehicleCode: string
    name: string
    type: string
    location: string
    status?: $Enums.VehicleStatus
    healthScore?: number
    downtimeRisk?: $Enums.RiskLevel
    lastMaintenanceDate?: Date | string | null
    nextMaintenanceDate?: Date | string | null
    mileage?: number
    operatingHours?: number
    issueCount?: number
    recommendation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenanceReports?: MaintenanceReportCreateNestedManyWithoutVehicleInput
    repeatedIssues?: VehicleRepeatedIssueCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutAlertsInput = {
    id: string
    vehicleCode: string
    name: string
    type: string
    location: string
    status?: $Enums.VehicleStatus
    healthScore?: number
    downtimeRisk?: $Enums.RiskLevel
    lastMaintenanceDate?: Date | string | null
    nextMaintenanceDate?: Date | string | null
    mileage?: number
    operatingHours?: number
    issueCount?: number
    recommendation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenanceReports?: MaintenanceReportUncheckedCreateNestedManyWithoutVehicleInput
    repeatedIssues?: VehicleRepeatedIssueUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutAlertsInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutAlertsInput, VehicleUncheckedCreateWithoutAlertsInput>
  }

  export type VehicleUpsertWithoutAlertsInput = {
    update: XOR<VehicleUpdateWithoutAlertsInput, VehicleUncheckedUpdateWithoutAlertsInput>
    create: XOR<VehicleCreateWithoutAlertsInput, VehicleUncheckedCreateWithoutAlertsInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutAlertsInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutAlertsInput, VehicleUncheckedUpdateWithoutAlertsInput>
  }

  export type VehicleUpdateWithoutAlertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    healthScore?: IntFieldUpdateOperationsInput | number
    downtimeRisk?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    lastMaintenanceDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextMaintenanceDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mileage?: IntFieldUpdateOperationsInput | number
    operatingHours?: IntFieldUpdateOperationsInput | number
    issueCount?: IntFieldUpdateOperationsInput | number
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceReports?: MaintenanceReportUpdateManyWithoutVehicleNestedInput
    repeatedIssues?: VehicleRepeatedIssueUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutAlertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    healthScore?: IntFieldUpdateOperationsInput | number
    downtimeRisk?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    lastMaintenanceDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextMaintenanceDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mileage?: IntFieldUpdateOperationsInput | number
    operatingHours?: IntFieldUpdateOperationsInput | number
    issueCount?: IntFieldUpdateOperationsInput | number
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceReports?: MaintenanceReportUncheckedUpdateManyWithoutVehicleNestedInput
    repeatedIssues?: VehicleRepeatedIssueUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleCreateWithoutRepeatedIssuesInput = {
    id: string
    vehicleCode: string
    name: string
    type: string
    location: string
    status?: $Enums.VehicleStatus
    healthScore?: number
    downtimeRisk?: $Enums.RiskLevel
    lastMaintenanceDate?: Date | string | null
    nextMaintenanceDate?: Date | string | null
    mileage?: number
    operatingHours?: number
    issueCount?: number
    recommendation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenanceReports?: MaintenanceReportCreateNestedManyWithoutVehicleInput
    alerts?: AlertCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutRepeatedIssuesInput = {
    id: string
    vehicleCode: string
    name: string
    type: string
    location: string
    status?: $Enums.VehicleStatus
    healthScore?: number
    downtimeRisk?: $Enums.RiskLevel
    lastMaintenanceDate?: Date | string | null
    nextMaintenanceDate?: Date | string | null
    mileage?: number
    operatingHours?: number
    issueCount?: number
    recommendation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenanceReports?: MaintenanceReportUncheckedCreateNestedManyWithoutVehicleInput
    alerts?: AlertUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutRepeatedIssuesInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutRepeatedIssuesInput, VehicleUncheckedCreateWithoutRepeatedIssuesInput>
  }

  export type VehicleUpsertWithoutRepeatedIssuesInput = {
    update: XOR<VehicleUpdateWithoutRepeatedIssuesInput, VehicleUncheckedUpdateWithoutRepeatedIssuesInput>
    create: XOR<VehicleCreateWithoutRepeatedIssuesInput, VehicleUncheckedCreateWithoutRepeatedIssuesInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutRepeatedIssuesInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutRepeatedIssuesInput, VehicleUncheckedUpdateWithoutRepeatedIssuesInput>
  }

  export type VehicleUpdateWithoutRepeatedIssuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    healthScore?: IntFieldUpdateOperationsInput | number
    downtimeRisk?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    lastMaintenanceDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextMaintenanceDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mileage?: IntFieldUpdateOperationsInput | number
    operatingHours?: IntFieldUpdateOperationsInput | number
    issueCount?: IntFieldUpdateOperationsInput | number
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceReports?: MaintenanceReportUpdateManyWithoutVehicleNestedInput
    alerts?: AlertUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutRepeatedIssuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    healthScore?: IntFieldUpdateOperationsInput | number
    downtimeRisk?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    lastMaintenanceDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextMaintenanceDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mileage?: IntFieldUpdateOperationsInput | number
    operatingHours?: IntFieldUpdateOperationsInput | number
    issueCount?: IntFieldUpdateOperationsInput | number
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceReports?: MaintenanceReportUncheckedUpdateManyWithoutVehicleNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type MaintenanceReportCreateManyVehicleInput = {
    id: string
    date: Date | string
    component: string
    issue: string
    severity: $Enums.SeverityLevel
    technician: string
    note?: string | null
    actionTaken?: string | null
    createdAt?: Date | string
  }

  export type AlertCreateManyVehicleInput = {
    id: string
    type: $Enums.AlertType
    riskLevel: $Enums.RiskLevel
    message: string
    predictedNextMaintenance?: Date | string | null
    recommendation?: string | null
    daysUntilMaintenance?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehicleRepeatedIssueCreateManyVehicleInput = {
    issue: string
    frequency?: number
  }

  export type MaintenanceReportUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    component?: StringFieldUpdateOperationsInput | string
    issue?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityLevelFieldUpdateOperationsInput | $Enums.SeverityLevel
    technician?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    actionTaken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceReportUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    component?: StringFieldUpdateOperationsInput | string
    issue?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityLevelFieldUpdateOperationsInput | $Enums.SeverityLevel
    technician?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    actionTaken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceReportUncheckedUpdateManyWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    component?: StringFieldUpdateOperationsInput | string
    issue?: StringFieldUpdateOperationsInput | string
    severity?: EnumSeverityLevelFieldUpdateOperationsInput | $Enums.SeverityLevel
    technician?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    actionTaken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    message?: StringFieldUpdateOperationsInput | string
    predictedNextMaintenance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    daysUntilMaintenance?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    message?: StringFieldUpdateOperationsInput | string
    predictedNextMaintenance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    daysUntilMaintenance?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertUncheckedUpdateManyWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    riskLevel?: EnumRiskLevelFieldUpdateOperationsInput | $Enums.RiskLevel
    message?: StringFieldUpdateOperationsInput | string
    predictedNextMaintenance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recommendation?: NullableStringFieldUpdateOperationsInput | string | null
    daysUntilMaintenance?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleRepeatedIssueUpdateWithoutVehicleInput = {
    issue?: StringFieldUpdateOperationsInput | string
    frequency?: IntFieldUpdateOperationsInput | number
  }

  export type VehicleRepeatedIssueUncheckedUpdateWithoutVehicleInput = {
    issue?: StringFieldUpdateOperationsInput | string
    frequency?: IntFieldUpdateOperationsInput | number
  }

  export type VehicleRepeatedIssueUncheckedUpdateManyWithoutVehicleInput = {
    issue?: StringFieldUpdateOperationsInput | string
    frequency?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}