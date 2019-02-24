import {enableProdMode, Injectable, Injector} from '@angular/core';
import {HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {catchError, mergeMap} from 'rxjs/operators';
import {Observable, of, throwError} from 'rxjs';
import {NzNotificationService} from 'ng-zorro-antd';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private injector: Injector, private notification: NzNotificationService) {}

  private handleData(
    event: HttpResponse<any> | HttpErrorResponse,
  ): Observable<any> {
    if (!environment.production) {
      console.log('收到请求');
      console.log(event);
    }
    // 可能会因为 `throw` 导出无法执行 `_HttpClient` 的 `end()` 操作
    // 业务处理：一些通用操作
    switch (event.status) {
      case 200:
        // 业务层级错误处理，以下是假定restful有一套统一输出格式（指不管成功与否都有相应的数据格式）情况下进行处理
        // 例如响应内容：
        //  错误内容：{ status: 1, msg: '非法参数' }
        //  正确内容：{ status: 0, response: {  } }
        // 则以下代码片断可直接适用
        // if (event instanceof HttpResponse) {
        //     const body: any = event.body;
        //     if (body && body.status !== 0) {
        //         this.msg.error(body.msg);
        //         // 继续抛出错误中断后续所有 Pipe、subscribe 操作，因此：
        //         // this.http.get('/').subscribe() 并不会触发
        //         return ErrorObservable.throw(event);
        //     } else {
        //         // 重新修改 `body` 内容为 `response` 内容，对于绝大多数场景已经无须再关心业务状态码
        //         return of(new HttpResponse(Object.assign(event, { body: body.response })));
        //         // 或者依然保持完整的格式
        //         return of(event);
        //     }
        // }
        break;
      case 400:
        return throwError(event);
      case 401: // 未登录状态码
        console.log('发生401错误，用户未登录', event)
        break;
      case 403:
      case 404:
      case 500:
        // if (event.url.indexOf("/auth/login")>0) {
        //   return throwError(event);
        // }else{
        //   this.message.error('系统出错啦~~~');
        //   // this.goTo(`/${event.status}`);
        // }
        // break;
        return throwError(event);
      // default:
      //   if (event instanceof HttpErrorResponse) {
      //     console.warn(
      //       '未可知错误，大部分是由于后端不支持CORS或无效配置引起',
      //       event,
      //     );
      //     this.msg.error(event.message);
      //   }
      //   break;
    }
    return of(event);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.

    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = req.clone({
      url:  environment.host + req.url,
    });
    if (!environment.production) {
      console.log('发出请求');
      console.log(req);
    }

    // send cloned request with header to the next handler.
    return next.handle(authReq).pipe(
      mergeMap((event: any) => {
        // 允许统一对请求错误处理，这是因为一个请求若是业务上错误的情况下其HTTP请求的状态是200的情况下需要
        if (event instanceof HttpResponse && event.status === 200) {
          return this.handleData(event);
        }
        // 若一切都正常，则后续操作
        return of(event);
      }),
      catchError((err: HttpErrorResponse) => this.handleData(err)),
    );
  }
}
