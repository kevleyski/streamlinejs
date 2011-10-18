/*** Generated by streamline 0.1.44rt2 - DO NOT EDIT ***/
var __rt=require('streamline-runtime')(__filename),__func=__rt.__func,__cb=__rt.__cb,__tryCatch=__rt.__tryCatch,__trap=__rt.__trap,__propagate=__rt.__propagate,__future=__rt.__future,__setEF=__rt.__setEF,__g=__rt.__g;
            (function main(_) {
              var streams, str, result, formatted;
/*    10 */   function google(str, _) {
                var req, resp;
                var __frame = {
                  name: "google",
                  line: 10
                };
                return __func(_, this, arguments, google, 1, __frame, function __$google() {
/*    16 */       req = streams.httpRequest({
/*    17 */         url: ("http://ajax.googleapis.com/ajax/services/search/web?v=1.0&q=" + str),
/*    18 */         proxy: process.env.http_proxy
                  });
/*    25 */       return req.end().response(__cb(_, __frame, 15, 12, function ___(__0, __1) {
                    resp = __1;
/*    27 */         return resp.checkStatus(200).readAll(__cb(_, __frame, 17, 19, function ___(__0, __3) {
/*    27 */           var __2 = JSON.parse(__3);
                      return _(null, __2);
                    }));
                  }));
                });
              };
              var __frame = {
                name: "main",
                line: 1
              };
              return __func(_, this, arguments, main, 0, __frame, function __$main() {
/*     8 */     streams = require("streamline/lib/streams/server/streams");
                return (function ___(__then) {
                  (function ___(_) {
                    __tryCatch(_, function __$main() {
/*    32 */           str = ((process.argv.length > 2) ? process.argv[2] : "node.js");
/*    35 */           return google(str, __cb(_, __frame, 34, 14, function ___(__0, __1) {
                        result = __1;
/*    40 */             formatted = result.responseData.results.map(function(entry) {
/*    39 */               return ((entry.url + "\n	") + entry.titleNoFormatting);
/*    40 */             }).join("\n");
/*    41 */             console.log(formatted);
                        __then();
                      }));
                    });
                  })(function ___(ex, __result) {
                    __tryCatch(_, function __$main() {
                      if (ex) {
/*    44 */             console.error(ex.stack);
                        __then();
                      }
                       else {
                        _(null, __result);
                      }
                    ;
                    });
                  });
                })(function ___() {
                  __tryCatch(_, _);
                });
              });
            }).call(this, __trap);
