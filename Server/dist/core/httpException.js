"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotFound = exports.Faild = exports.Success = exports.AuthFaild = exports.ForBiden = exports.ParameterException = exports.HttpException = void 0;

/*
 * @Author: 席坤 
 * @Date: 2020-08-31 10:26:42 
 * @Last Modified by: xikun
 * @Last Modified time: 2020-08-31 10:43:28
 */
class HttpException extends Error {
  constructor(msg = '服务器异常', errorCode = 500, code = 400) {
    super();
    /**
     * 错误信息
     */

    this.msg = msg;
    /**
     * Http 状态码
     */

    this.code = code;
    /**
     * 自定义的异常状态码
     */

    this.errorCode = errorCode;
  }

}

exports.HttpException = HttpException;

class ParameterException extends HttpException {
  constructor(msg, errorCode) {
    super();
    this.code = 400;
    this.msg = msg || '参数错误';
    this.errorCode = errorCode || 400;
  }

}

exports.ParameterException = ParameterException;

class AuthFaild extends HttpException {
  constructor(msg) {
    super();
    this.code = 401;
    this.msg = msg || '认证失败';
    this.errorCode = 401;
  }

}

exports.AuthFaild = AuthFaild;

class ForBiden extends HttpException {
  constructor(msg, errorCode) {
    super();
    this.code = 403;
    this.msg = msg || '禁止访问';
    this.errorCode = errorCode || 1006;
  }

}

exports.ForBiden = ForBiden;

class Success extends HttpException {
  constructor(data, msg) {
    super();
    this.code = 200;
    this.data = data;
    this.msg = msg || '成功';
    this.errorCode = 200;
  }

}

exports.Success = Success;

class Faild extends HttpException {
  constructor(msg, errorCode) {
    super();
    this.code = 400;
    this.msg = msg || '操作失败';
    this.errorCode = errorCode || -200;
  }

}

exports.Faild = Faild;

class NotFound extends HttpException {
  constructor(msg, errorCode) {
    super();
    this.code = 404;
    this.msg = msg || '资源未找到';
    this.errorCode = errorCode || 10000;
  }

}

exports.NotFound = NotFound;