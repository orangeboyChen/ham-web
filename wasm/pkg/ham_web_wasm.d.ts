/* tslint:disable */
/* eslint-disable */
/**
 * The `ReadableStreamType` enum.
 *
 * *This API requires the following crate features to be activated: `ReadableStreamType`*
 */
type ReadableStreamType = "bytes";
export class BasicUserInfo {
  private constructor();
  free(): void;
  nickname: string;
  avatar_url: string;
}
export class CheckQRCodeLoginResponse {
  private constructor();
  free(): void;
  static check_qr_code_login_state_pending(): string;
  static check_qr_code_login_state_scanned(): string;
  static check_qr_code_login_state_login_success(): string;
  static check_qr_code_login_state_expired(): string;
  static check_qr_code_login_state_invalid(): string;
  state: string;
  message: string;
  get scan_user_info(): BasicUserInfo | undefined;
  set scan_user_info(value: BasicUserInfo | null | undefined);
}
export class IntoUnderlyingByteSource {
  private constructor();
  free(): void;
  start(controller: ReadableByteStreamController): void;
  pull(controller: ReadableByteStreamController): Promise<any>;
  cancel(): void;
  readonly type: ReadableStreamType;
  readonly autoAllocateChunkSize: number;
}
export class IntoUnderlyingSink {
  private constructor();
  free(): void;
  write(chunk: any): Promise<any>;
  close(): Promise<any>;
  abort(reason: any): Promise<any>;
}
export class IntoUnderlyingSource {
  private constructor();
  free(): void;
  pull(controller: ReadableStreamDefaultController): Promise<any>;
  cancel(): void;
}
export class JsCourseGradeStatisticNextRequestCursor {
  private constructor();
  free(): void;
}
export class JsCourseGradeStatisticsItemOrder {
  private constructor();
  free(): void;
  static totalDesc(): string;
  static scoreDesc(): string;
}
export class JsCourseScoreItem {
  private constructor();
  free(): void;
  name: string;
  instructor: string;
  average: number;
  total: number;
  range: JsCourseScoreRangeResponseItem[];
  id: string;
}
export class JsCourseScoreItemType {
  private constructor();
  free(): void;
  static courseName(): string;
  static instructor(): string;
}
export class JsCourseScoreRangeResponseItem {
  private constructor();
  free(): void;
  from: number;
  to: number;
  total: number;
  color: string;
}
export class JsCourseService {
  private constructor();
  free(): void;
  /**
   * 搜索课程
   */
  static searchCourse(keyword: string): Promise<JsSearchScoreHitItem[]>;
}
export class JsPasskeyService {
  private constructor();
  free(): void;
  static get_credentials_request_options(): Promise<any>;
}
export class JsScoreService {
  private constructor();
  free(): void;
  /**
   * 获取成绩统计数据
   */
  static getScoreStat(type: string, keyword: string, order: string, page_cursor?: JsCourseGradeStatisticNextRequestCursor | null): Promise<JsCourseScoreItem[]>;
}
export class JsSearchScoreHitItem {
  private constructor();
  free(): void;
  hit: string;
  value: string;
  hit_type: string;
}
export class LoginService {
  private constructor();
  free(): void;
  static getQRCodeLoginTicket(): Promise<string>;
  static checkQRCodeLogin(ticket: string): Promise<CheckQRCodeLoginResponse>;
}
