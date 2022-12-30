/** 应用配置 */
export interface AppConfig {
  key: string
  secret: string
}

/** 获取应用配置 */
export function getAppConfig(): AppConfig {
  return {
    key: 'xxxxxxxxxxxx',
    secret: 'xxxxxxxxxxxx',
  }
}
