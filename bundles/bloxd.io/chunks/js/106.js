export const id = 106;
export const ids = [106];
export const modules = {
  4823: (QQ, FQ) => {
    FQ.c = function(QQ, FQ) {
      if (QQ && FQ) {
        var wQ = Array.isArray(FQ) ? FQ : FQ.split(","),
          LQ = QQ.name || "",
          qQ = (QQ.type || "").toLowerCase(),
          oQ = qQ.replace(/\/.*$/, "");
        return wQ.some((function(QQ) {
          var FQ = QQ.trim().toLowerCase();
          return "." === FQ.charAt(0) ? LQ.toLowerCase().endsWith(FQ) : FQ.endsWith("/*") ? oQ === FQ.replace(/\/.*$/, "") : qQ === FQ
        }))
      }
      return !0
    }
  },
  4794: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => YF
    });
    var LQ = wQ(53),
      qQ = wQ(4799),
      oQ = wQ.n(qQ);

    function DQ(QQ, FQ, wQ, LQ) {
      return new(wQ || (wQ = Promise))((function(qQ, oQ) {
        function DQ(QQ) {
          try {
            vQ(LQ.next(QQ))
          } catch (FQ) {
            oQ(FQ)
          }
        }

        function kQ(QQ) {
          try {
            vQ(LQ.throw(QQ))
          } catch (FQ) {
            oQ(FQ)
          }
        }

        function vQ(QQ) {
          var FQ;
          QQ.done ? qQ(QQ.value) : (FQ = QQ.value, FQ instanceof wQ ? FQ : new wQ((function(QQ) {
            QQ(FQ)
          }))).then(DQ, kQ)
        }
        vQ((LQ = LQ.apply(QQ, FQ || [])).next())
      }))
    }

    function kQ(QQ, FQ) {
      var wQ, LQ, qQ, oQ, DQ = {
        label: 0,
        sent: function() {
          if (1 & qQ[0]) throw qQ[1];
          return qQ[1]
        },
        trys: [],
        ops: []
      };
      return oQ = {
        next: kQ(0),
        throw: kQ(1),
        return: kQ(2)
      }, "function" === typeof Symbol && (oQ[Symbol.iterator] = function() {
        return this
      }), oQ;

      function kQ(kQ) {
        return function(vQ) {
          return function(kQ) {
            if (wQ) throw new TypeError("Generator is already executing.");
            for (; oQ && (oQ = 0, kQ[0] && (DQ = 0)), DQ;) try {
              if (wQ = 1, LQ && (qQ = 2 & kQ[0] ? LQ.return : kQ[0] ? LQ.throw || ((qQ = LQ.return) && qQ.call(LQ), 0) : LQ.next) && !(qQ = qQ.call(LQ, kQ[1])).done) return qQ;
              switch (LQ = 0, qQ && (kQ = [2 & kQ[0], qQ.value]), kQ[0]) {
                case 0:
                case 1:
                  qQ = kQ;
                  break;
                case 4:
                  return DQ.label++, {
                    value: kQ[1],
                    done: !1
                  };
                case 5:
                  DQ.label++, LQ = kQ[1], kQ = [0];
                  continue;
                case 7:
                  kQ = DQ.ops.pop(), DQ.trys.pop();
                  continue;
                default:
                  if (!(qQ = (qQ = DQ.trys).length > 0 && qQ[qQ.length - 1]) && (6 === kQ[0] || 2 === kQ[0])) {
                    DQ = 0;
                    continue
                  }
                  if (3 === kQ[0] && (!qQ || kQ[1] > qQ[0] && kQ[1] < qQ[3])) {
                    DQ.label = kQ[1];
                    break
                  }
                  if (6 === kQ[0] && DQ.label < qQ[1]) {
                    DQ.label = qQ[1], qQ = kQ;
                    break
                  }
                  if (qQ && DQ.label < qQ[2]) {
                    DQ.label = qQ[2], DQ.ops.push(kQ);
                    break
                  }
                  qQ[2] && DQ.ops.pop(), DQ.trys.pop();
                  continue
              }
              kQ = FQ.call(QQ, DQ)
            } catch (vQ) {
              kQ = [6, vQ], LQ = 0
            } finally {
              wQ = qQ = 0
            }
            if (5 & kQ[0]) throw kQ[1];
            return {
              value: kQ[0] ? kQ[1] : void 0,
              done: !0
            }
          }([kQ, vQ])
        }
      }
    }
    Object.create;

    function vQ(QQ, FQ) {
      var wQ = "function" === typeof Symbol && QQ[Symbol.iterator];
      if (!wQ) return QQ;
      var LQ, qQ, oQ = wQ.call(QQ),
        DQ = [];
      try {
        for (;
          (void 0 === FQ || FQ-- > 0) && !(LQ = oQ.next()).done;) DQ.push(LQ.value)
      } catch (kQ) {
        qQ = {
          error: kQ
        }
      } finally {
        try {
          LQ && !LQ.done && (wQ = oQ.return) && wQ.call(oQ)
        } finally {
          if (qQ) throw qQ.error
        }
      }
      return DQ
    }

    function mQ(QQ, FQ, wQ) {
      if (wQ || 2 === arguments.length)
        for (var LQ, qQ = 0, oQ = FQ.length; qQ < oQ; qQ++) !LQ && qQ in FQ || (LQ || (LQ = Array.prototype.slice.call(FQ, 0, qQ)), LQ[qQ] = FQ[qQ]);
      return QQ.concat(LQ || Array.prototype.slice.call(FQ))
    }
    Object.create;
    "function" === typeof SuppressedError && SuppressedError;
    var uQ = new Map([
      ["aac", "audio/aac"],
      ["abw", "application/x-abiword"],
      ["arc", "application/x-freearc"],
      ["avif", "image/avif"],
      ["avi", "video/x-msvideo"],
      ["azw", "application/vnd.amazon.ebook"],
      ["bin", "application/octet-stream"],
      ["bmp", "image/bmp"],
      ["bz", "application/x-bzip"],
      ["bz2", "application/x-bzip2"],
      ["cda", "application/x-cdf"],
      ["csh", "application/x-csh"],
      ["css", "text/css"],
      ["csv", "text/csv"],
      ["doc", "application/msword"],
      ["docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
      ["eot", "application/vnd.ms-fontobject"],
      ["epub", "application/epub+zip"],
      ["gz", "application/gzip"],
      ["gif", "image/gif"],
      ["heic", "image/heic"],
      ["heif", "image/heif"],
      ["htm", "text/html"],
      ["html", "text/html"],
      ["ico", "image/vnd.microsoft.icon"],
      ["ics", "text/calendar"],
      ["jar", "application/java-archive"],
      ["jpeg", "image/jpeg"],
      ["jpg", "image/jpeg"],
      ["js", "text/javascript"],
      ["json", "application/json"],
      ["jsonld", "application/ld+json"],
      ["mid", "audio/midi"],
      ["midi", "audio/midi"],
      ["mjs", "text/javascript"],
      ["mp3", "audio/mpeg"],
      ["mp4", "video/mp4"],
      ["mpeg", "video/mpeg"],
      ["mpkg", "application/vnd.apple.installer+xml"],
      ["odp", "application/vnd.oasis.opendocument.presentation"],
      ["ods", "application/vnd.oasis.opendocument.spreadsheet"],
      ["odt", "application/vnd.oasis.opendocument.text"],
      ["oga", "audio/ogg"],
      ["ogv", "video/ogg"],
      ["ogx", "application/ogg"],
      ["opus", "audio/opus"],
      ["otf", "font/otf"],
      ["png", "image/png"],
      ["pdf", "application/pdf"],
      ["php", "application/x-httpd-php"],
      ["ppt", "application/vnd.ms-powerpoint"],
      ["pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"],
      ["rar", "application/vnd.rar"],
      ["rtf", "application/rtf"],
      ["sh", "application/x-sh"],
      ["svg", "image/svg+xml"],
      ["swf", "application/x-shockwave-flash"],
      ["tar", "application/x-tar"],
      ["tif", "image/tiff"],
      ["tiff", "image/tiff"],
      ["ts", "video/mp2t"],
      ["ttf", "font/ttf"],
      ["txt", "text/plain"],
      ["vsd", "application/vnd.visio"],
      ["wav", "audio/wav"],
      ["weba", "audio/webm"],
      ["webm", "video/webm"],
      ["webp", "image/webp"],
      ["woff", "font/woff"],
      ["woff2", "font/woff2"],
      ["xhtml", "application/xhtml+xml"],
      ["xls", "application/vnd.ms-excel"],
      ["xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
      ["xml", "application/xml"],
      ["xul", "application/vnd.mozilla.xul+xml"],
      ["zip", "application/zip"],
      ["7z", "application/x-7z-compressed"],
      ["mkv", "video/x-matroska"],
      ["mov", "video/quicktime"],
      ["Om", "application/vnd.ms-outlook"]
    ]);

    function HQ(QQ, FQ) {
      var wQ = function(QQ) {
        var FQ = QQ.name;
        if (FQ && -1 !== FQ.lastIndexOf(".") && !QQ.type) {
          var wQ = FQ.split(".").pop().toLowerCase(),
            LQ = uQ.get(wQ);
          LQ && Object.defineProperty(QQ, "type", {
            value: LQ,
            writable: !1,
            configurable: !1,
            enumerable: !0
          })
        }
        return QQ
      }(QQ);
      if ("string" !== typeof wQ.path) {
        var LQ = QQ.webkitRelativePath;
        Object.defineProperty(wQ, "path", {
          value: "string" === typeof FQ ? FQ : "string" === typeof LQ && LQ.length > 0 ? LQ : QQ.name,
          writable: !1,
          configurable: !1,
          enumerable: !0
        })
      }
      return wQ
    }
    var bQ = [".DS_Store", "Thumbs.db"];

    function YQ(QQ) {
      return "object" === typeof QQ && null !== QQ
    }

    function xQ(QQ) {
      return MQ(QQ.target.files).map((function(QQ) {
        return HQ(QQ)
      }))
    }

    function AQ(QQ) {
      return DQ(this, void 0, void 0, (function() {
        return kQ(this, (function(FQ) {
          switch (FQ.label) {
            case 0:
              return [4, Promise.all(QQ.map((function(QQ) {
                return QQ.getFile()
              })))];
            case 1:
              return [2, FQ.sent().map((function(QQ) {
                return HQ(QQ)
              }))]
          }
        }))
      }))
    }

    function tQ(QQ, FQ) {
      return DQ(this, void 0, void 0, (function() {
        var wQ;
        return kQ(this, (function(LQ) {
          switch (LQ.label) {
            case 0:
              return QQ.items ? (wQ = MQ(QQ.items).filter((function(QQ) {
                return "file" === QQ.kind
              })), "drop" !== FQ ? [2, wQ] : [4, Promise.all(wQ.map(GQ))]) : [3, 2];
            case 1:
              return [2, eQ(pQ(LQ.sent()))];
            case 2:
              return [2, eQ(MQ(QQ.files).map((function(QQ) {
                return HQ(QQ)
              })))]
          }
        }))
      }))
    }

    function eQ(QQ) {
      return QQ.filter((function(QQ) {
        return -1 === bQ.indexOf(QQ.name)
      }))
    }

    function MQ(QQ) {
      if (null === QQ) return [];
      for (var FQ = [], wQ = 0; wQ < QQ.length; wQ++) {
        var LQ = QQ[wQ];
        FQ.push(LQ)
      }
      return FQ
    }

    function GQ(QQ) {
      if ("function" !== typeof QQ.webkitGetAsEntry) return cQ(QQ);
      var FQ = QQ.webkitGetAsEntry();
      return FQ && FQ.isDirectory ? SQ(FQ) : cQ(QQ)
    }

    function pQ(QQ) {
      return QQ.reduce((function(QQ, FQ) {
        return mQ(mQ([], vQ(QQ), !1), vQ(Array.isArray(FQ) ? pQ(FQ) : [FQ]), !1)
      }), [])
    }

    function cQ(QQ) {
      var FQ = QQ.getAsFile();
      if (!FQ) return Promise.reject("".concat(QQ, " is not a File"));
      var wQ = HQ(FQ);
      return Promise.resolve(wQ)
    }

    function CQ(QQ) {
      return DQ(this, void 0, void 0, (function() {
        return kQ(this, (function(FQ) {
          return [2, QQ.isDirectory ? SQ(QQ) : iQ(QQ)]
        }))
      }))
    }

    function SQ(QQ) {
      var FQ = QQ.createReader();
      return new Promise((function(QQ, wQ) {
        var LQ = [];
        ! function qQ() {
          var oQ = this;
          FQ.readEntries((function(FQ) {
            return DQ(oQ, void 0, void 0, (function() {
              var oQ, DQ, vQ;
              return kQ(this, (function(kQ) {
                switch (kQ.label) {
                  case 0:
                    if (FQ.length) return [3, 5];
                    kQ.label = 1;
                  case 1:
                    return kQ.trys.push([1, 3, , 4]), [4, Promise.all(LQ)];
                  case 2:
                    return oQ = kQ.sent(), QQ(oQ), [3, 4];
                  case 3:
                    return DQ = kQ.sent(), wQ(DQ), [3, 4];
                  case 4:
                    return [3, 6];
                  case 5:
                    vQ = Promise.all(FQ.map(CQ)), LQ.push(vQ), qQ(), kQ.label = 6;
                  case 6:
                    return [2]
                }
              }))
            }))
          }), (function(QQ) {
            wQ(QQ)
          }))
        }()
      }))
    }

    function iQ(QQ) {
      return DQ(this, void 0, void 0, (function() {
        return kQ(this, (function(FQ) {
          return [2, new Promise((function(FQ, wQ) {
            QQ.file((function(wQ) {
              var LQ = HQ(wQ, QQ.fullPath);
              FQ(LQ)
            }), (function(QQ) {
              wQ(QQ)
            }))
          }))]
        }))
      }))
    }
    var WQ = wQ(4823);

    function RQ(QQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return NQ(QQ)
      }(QQ) || function(QQ) {
        if ("undefined" !== typeof Symbol && null != QQ[Symbol.iterator] || null != QQ["@@iterator"]) return Array.from(QQ)
      }(QQ) || UQ(QQ) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function OQ(QQ, FQ) {
      var wQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var LQ = Object.getOwnPropertySymbols(QQ);
        FQ && (LQ = LQ.filter((function(FQ) {
          return Object.getOwnPropertyDescriptor(QQ, FQ).enumerable
        }))), wQ.push.apply(wQ, LQ)
      }
      return wQ
    }

    function sQ(QQ) {
      for (var FQ = 1; FQ < arguments.length; FQ++) {
        var wQ = null != arguments[FQ] ? arguments[FQ] : {};
        FQ % 2 ? OQ(Object(wQ), !0).forEach((function(FQ) {
          rQ(QQ, FQ, wQ[FQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(wQ)) : OQ(Object(wQ)).forEach((function(FQ) {
          Object.defineProperty(QQ, FQ, Object.getOwnPropertyDescriptor(wQ, FQ))
        }))
      }
      return QQ
    }

    function rQ(QQ, FQ, wQ) {
      return FQ in QQ ? Object.defineProperty(QQ, FQ, {
        value: wQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[FQ] = wQ, QQ
    }

    function IQ(QQ, FQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return QQ
      }(QQ) || function(QQ, FQ) {
        var wQ = null == QQ ? null : "undefined" !== typeof Symbol && QQ[Symbol.iterator] || QQ["@@iterator"];
        if (null == wQ) return;
        var LQ, qQ, oQ = [],
          DQ = !0,
          kQ = !1;
        try {
          for (wQ = wQ.call(QQ); !(DQ = (LQ = wQ.next()).done) && (oQ.push(LQ.value), !FQ || oQ.length !== FQ); DQ = !0);
        } catch (vQ) {
          kQ = !0, qQ = vQ
        } finally {
          try {
            DQ || null == wQ.return || wQ.return()
          } finally {
            if (kQ) throw qQ
          }
        }
        return oQ
      }(QQ, FQ) || UQ(QQ, FQ) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function UQ(QQ, FQ) {
      if (QQ) {
        if ("string" === typeof QQ) return NQ(QQ, FQ);
        var wQ = Object.prototype.toString.call(QQ).slice(8, -1);
        return "Object" === wQ && QQ.constructor && (wQ = QQ.constructor.name), "Map" === wQ || "Set" === wQ ? Array.from(QQ) : "Arguments" === wQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(wQ) ? NQ(QQ, FQ) : void 0
      }
    }

    function NQ(QQ, FQ) {
      (null == FQ || FQ > QQ.length) && (FQ = QQ.length);
      for (var wQ = 0, LQ = new Array(FQ); wQ < FQ; wQ++) LQ[wQ] = QQ[wQ];
      return LQ
    }
    var TQ = "file-invalid-type",
      KQ = "file-too-large",
      zQ = "file-too-small",
      lQ = "too-many-files",
      jQ = function(QQ) {
        QQ = Array.isArray(QQ) && 1 === QQ.length ? QQ[0] : QQ;
        var FQ = Array.isArray(QQ) ? "one of ".concat(QQ.join(", ")) : QQ;
        return {
          code: TQ,
          message: "File type must be ".concat(FQ)
        }
      },
      aQ = function(QQ) {
        return {
          code: KQ,
          message: "File is larger than ".concat(QQ, " ").concat(1 === QQ ? "byte" : "bytes")
        }
      },
      XQ = function(QQ) {
        return {
          code: zQ,
          message: "File is smaller than ".concat(QQ, " ").concat(1 === QQ ? "byte" : "bytes")
        }
      },
      fQ = {
        code: lQ,
        message: "Too many files"
      };

    function VQ(QQ, FQ) {
      var wQ = "application/x-moz-file" === QQ.type || (0, WQ.c)(QQ, FQ);
      return [wQ, wQ ? null : jQ(FQ)]
    }

    function hQ(QQ, FQ, wQ) {
      if (JQ(QQ.size))
        if (JQ(FQ) && JQ(wQ)) {
          if (QQ.size > wQ) return [!1, aQ(wQ)];
          if (QQ.size < FQ) return [!1, XQ(FQ)]
        } else {
          if (JQ(FQ) && QQ.size < FQ) return [!1, XQ(FQ)];
          if (JQ(wQ) && QQ.size > wQ) return [!1, aQ(wQ)]
        } return [!0, null]
    }

    function JQ(QQ) {
      return void 0 !== QQ && null !== QQ
    }

    function EQ(QQ) {
      return "function" === typeof QQ.isPropagationStopped ? QQ.isPropagationStopped() : "undefined" !== typeof QQ.cancelBubble && QQ.cancelBubble
    }

    function nQ(QQ) {
      return QQ.dataTransfer ? Array.prototype.some.call(QQ.dataTransfer.types, (function(QQ) {
        return "Files" === QQ || "application/x-moz-file" === QQ
      })) : !!QQ.target && !!QQ.target.files
    }

    function gQ(QQ) {
      QQ.preventDefault()
    }

    function PQ() {
      for (var QQ = arguments.length, FQ = new Array(QQ), wQ = 0; wQ < QQ; wQ++) FQ[wQ] = arguments[wQ];
      return function(QQ) {
        for (var wQ = arguments.length, LQ = new Array(wQ > 1 ? wQ - 1 : 0), qQ = 1; qQ < wQ; qQ++) LQ[qQ - 1] = arguments[qQ];
        return FQ.some((function(FQ) {
          return !EQ(QQ) && FQ && FQ.apply(void 0, [QQ].concat(LQ)), EQ(QQ)
        }))
      }
    }

    function ZQ(QQ) {
      return "audio/*" === QQ || "video/*" === QQ || "image/*" === QQ || "text/*" === QQ || /\w+\/[-+.\w]+/g.test(QQ)
    }

    function yQ(QQ) {
      return /^.*\.[\w]+$/.test(QQ)
    }
    var BQ = ["children"],
      dQ = ["open"],
      QF = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
      FF = ["refKey", "onChange", "onClick"];

    function wF(QQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return oF(QQ)
      }(QQ) || function(QQ) {
        if ("undefined" !== typeof Symbol && null != QQ[Symbol.iterator] || null != QQ["@@iterator"]) return Array.from(QQ)
      }(QQ) || qF(QQ) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function LF(QQ, FQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return QQ
      }(QQ) || function(QQ, FQ) {
        var wQ = null == QQ ? null : "undefined" !== typeof Symbol && QQ[Symbol.iterator] || QQ["@@iterator"];
        if (null == wQ) return;
        var LQ, qQ, oQ = [],
          DQ = !0,
          kQ = !1;
        try {
          for (wQ = wQ.call(QQ); !(DQ = (LQ = wQ.next()).done) && (oQ.push(LQ.value), !FQ || oQ.length !== FQ); DQ = !0);
        } catch (vQ) {
          kQ = !0, qQ = vQ
        } finally {
          try {
            DQ || null == wQ.return || wQ.return()
          } finally {
            if (kQ) throw qQ
          }
        }
        return oQ
      }(QQ, FQ) || qF(QQ, FQ) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function qF(QQ, FQ) {
      if (QQ) {
        if ("string" === typeof QQ) return oF(QQ, FQ);
        var wQ = Object.prototype.toString.call(QQ).slice(8, -1);
        return "Object" === wQ && QQ.constructor && (wQ = QQ.constructor.name), "Map" === wQ || "Set" === wQ ? Array.from(QQ) : "Arguments" === wQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(wQ) ? oF(QQ, FQ) : void 0
      }
    }

    function oF(QQ, FQ) {
      (null == FQ || FQ > QQ.length) && (FQ = QQ.length);
      for (var wQ = 0, LQ = new Array(FQ); wQ < FQ; wQ++) LQ[wQ] = QQ[wQ];
      return LQ
    }

    function DF(QQ, FQ) {
      var wQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var LQ = Object.getOwnPropertySymbols(QQ);
        FQ && (LQ = LQ.filter((function(FQ) {
          return Object.getOwnPropertyDescriptor(QQ, FQ).enumerable
        }))), wQ.push.apply(wQ, LQ)
      }
      return wQ
    }

    function kF(QQ) {
      for (var FQ = 1; FQ < arguments.length; FQ++) {
        var wQ = null != arguments[FQ] ? arguments[FQ] : {};
        FQ % 2 ? DF(Object(wQ), !0).forEach((function(FQ) {
          vF(QQ, FQ, wQ[FQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(wQ)) : DF(Object(wQ)).forEach((function(FQ) {
          Object.defineProperty(QQ, FQ, Object.getOwnPropertyDescriptor(wQ, FQ))
        }))
      }
      return QQ
    }

    function vF(QQ, FQ, wQ) {
      return FQ in QQ ? Object.defineProperty(QQ, FQ, {
        value: wQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[FQ] = wQ, QQ
    }

    function mF(QQ, FQ) {
      if (null == QQ) return {};
      var wQ, LQ, qQ = function(QQ, FQ) {
        if (null == QQ) return {};
        var wQ, LQ, qQ = {},
          oQ = Object.keys(QQ);
        for (LQ = 0; LQ < oQ.length; LQ++) wQ = oQ[LQ], FQ.indexOf(wQ) >= 0 || (qQ[wQ] = QQ[wQ]);
        return qQ
      }(QQ, FQ);
      if (Object.getOwnPropertySymbols) {
        var oQ = Object.getOwnPropertySymbols(QQ);
        for (LQ = 0; LQ < oQ.length; LQ++) wQ = oQ[LQ], FQ.indexOf(wQ) >= 0 || Object.prototype.propertyIsEnumerable.call(QQ, wQ) && (qQ[wQ] = QQ[wQ])
      }
      return qQ
    }
    var uF = (0, LQ.forwardRef)((function(QQ, FQ) {
      var wQ = QQ.children,
        qQ = YF(mF(QQ, BQ)),
        oQ = qQ.open,
        DQ = mF(qQ, dQ);
      return (0, LQ.useImperativeHandle)(FQ, (function() {
        return {
          open: oQ
        }
      }), [oQ]), LQ.createElement(LQ.Fragment, null, wQ(kF(kF({}, DQ), {}, {
        open: oQ
      })))
    }));
    uF.displayName = "Dropzone";
    var HF = {
      disabled: !1,
      getFilesFromEvent: function(QQ) {
        return DQ(this, void 0, void 0, (function() {
          return kQ(this, (function(FQ) {
            return YQ(QQ) && YQ(QQ.dataTransfer) ? [2, tQ(QQ.dataTransfer, QQ.type)] : function(QQ) {
              return YQ(QQ) && YQ(QQ.target)
            }(QQ) ? [2, xQ(QQ)] : Array.isArray(QQ) && QQ.every((function(QQ) {
              return "getFile" in QQ && "function" === typeof QQ.getFile
            })) ? [2, AQ(QQ)] : [2, []]
          }))
        }))
      },
      maxSize: 1 / 0,
      minSize: 0,
      multiple: !0,
      maxFiles: 0,
      preventDropOnDocument: !0,
      noClick: !1,
      noKeyboard: !1,
      noDrag: !1,
      noDragEventsBubbling: !1,
      validator: null,
      useFsAccessApi: !0,
      autoFocus: !1
    };
    uF.defaultProps = HF, uF.propTypes = {
      children: oQ().func,
      accept: oQ().objectOf(oQ().arrayOf(oQ().string)),
      multiple: oQ().bool,
      preventDropOnDocument: oQ().bool,
      noClick: oQ().bool,
      noKeyboard: oQ().bool,
      noDrag: oQ().bool,
      noDragEventsBubbling: oQ().bool,
      minSize: oQ().number,
      maxSize: oQ().number,
      maxFiles: oQ().number,
      disabled: oQ().bool,
      getFilesFromEvent: oQ().func,
      onFileDialogCancel: oQ().func,
      onFileDialogOpen: oQ().func,
      useFsAccessApi: oQ().bool,
      autoFocus: oQ().bool,
      onDragEnter: oQ().func,
      onDragLeave: oQ().func,
      onDragOver: oQ().func,
      onDrop: oQ().func,
      onDropAccepted: oQ().func,
      onDropRejected: oQ().func,
      onError: oQ().func,
      validator: oQ().func
    };
    var bF = {
      hU: !1,
      isFileDialogActive: !1,
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1,
      acceptedFiles: [],
      fileRejections: []
    };

    function YF() {
      var QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        FQ = kF(kF({}, HF), QQ),
        wQ = FQ.accept,
        qQ = FQ.disabled,
        oQ = FQ.getFilesFromEvent,
        DQ = FQ.maxSize,
        kQ = FQ.minSize,
        vQ = FQ.multiple,
        mQ = FQ.maxFiles,
        uQ = FQ.onDragEnter,
        HQ = FQ.onDragLeave,
        bQ = FQ.onDragOver,
        YQ = FQ.onDrop,
        xQ = FQ.onDropAccepted,
        AQ = FQ.onDropRejected,
        tQ = FQ.onFileDialogCancel,
        eQ = FQ.onFileDialogOpen,
        MQ = FQ.useFsAccessApi,
        GQ = FQ.autoFocus,
        pQ = FQ.preventDropOnDocument,
        cQ = FQ.noClick,
        CQ = FQ.noKeyboard,
        SQ = FQ.noDrag,
        iQ = FQ.noDragEventsBubbling,
        WQ = FQ.onError,
        OQ = FQ.validator,
        UQ = (0, LQ.useMemo)((function() {
          return function(QQ) {
            if (JQ(QQ)) return Object.entries(QQ).reduce((function(QQ, FQ) {
              var wQ = IQ(FQ, 2),
                LQ = wQ[0],
                qQ = wQ[1];
              return [].concat(RQ(QQ), [LQ], RQ(qQ))
            }), []).filter((function(QQ) {
              return ZQ(QQ) || yQ(QQ)
            })).join(",")
          }(wQ)
        }), [wQ]),
        NQ = (0, LQ.useMemo)((function() {
          return function(QQ) {
            return JQ(QQ) ? [{
              description: "Files",
              accept: Object.entries(QQ).filter((function(QQ) {
                var FQ = IQ(QQ, 2),
                  wQ = FQ[0],
                  LQ = FQ[1],
                  qQ = !0;
                return ZQ(wQ) || (console.warn('Skipped "'.concat(wQ, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), qQ = !1), Array.isArray(LQ) && LQ.every(yQ) || (console.warn('Skipped "'.concat(wQ, '" because an invalid file extension was provided.')), qQ = !1), qQ
              })).reduce((function(QQ, FQ) {
                var wQ = IQ(FQ, 2),
                  LQ = wQ[0],
                  qQ = wQ[1];
                return sQ(sQ({}, QQ), {}, rQ({}, LQ, qQ))
              }), {})
            }] : QQ
          }(wQ)
        }), [wQ]),
        TQ = (0, LQ.useMemo)((function() {
          return "function" === typeof eQ ? eQ : AF
        }), [eQ]),
        KQ = (0, LQ.useMemo)((function() {
          return "function" === typeof tQ ? tQ : AF
        }), [tQ]),
        zQ = (0, LQ.useRef)(null),
        lQ = (0, LQ.useRef)(null),
        jQ = LF((0, LQ.useReducer)(xF, bF), 2),
        aQ = jQ[0],
        XQ = jQ[1],
        BQ = aQ.hU,
        dQ = aQ.isFileDialogActive,
        qF = (0, LQ.useRef)("undefined" !== typeof window && window.isSecureContext && MQ && "showOpenFilePicker" in window),
        oF = function() {
          !qF.current && dQ && setTimeout((function() {
            lQ.current && (lQ.current.files.length || (XQ({
              type: "closeDialog"
            }), KQ()))
          }), 300)
        };
      (0, LQ.useEffect)((function() {
        return window.addEventListener("focus", oF, !1),
          function() {
            window.removeEventListener("focus", oF, !1)
          }
      }), [lQ, dQ, KQ, qF]);
      var DF = (0, LQ.useRef)([]),
        uF = function(QQ) {
          zQ.current && zQ.current.contains(QQ.target) || (QQ.preventDefault(), DF.current = [])
        };
      (0, LQ.useEffect)((function() {
        return pQ && (document.addEventListener("dragover", gQ, !1), document.addEventListener("drop", uF, !1)),
          function() {
            pQ && (document.removeEventListener("dragover", gQ), document.removeEventListener("drop", uF))
          }
      }), [zQ, pQ]), (0, LQ.useEffect)((function() {
        return !qQ && GQ && zQ.current && zQ.current.focus(),
          function() {}
      }), [zQ, GQ, qQ]);
      var YF = (0, LQ.useCallback)((function(QQ) {
          WQ ? WQ(QQ) : console.error(QQ)
        }), [WQ]),
        tF = (0, LQ.useCallback)((function(QQ) {
          QQ.preventDefault(), QQ.persist(), rF(QQ), DF.current = [].concat(wF(DF.current), [QQ.target]), nQ(QQ) && Promise.resolve(oQ(QQ)).then((function(FQ) {
            if (!EQ(QQ) || iQ) {
              var wQ = FQ.length,
                LQ = wQ > 0 && function(QQ) {
                  var FQ = QQ.files,
                    wQ = QQ.accept,
                    LQ = QQ.minSize,
                    qQ = QQ.maxSize,
                    oQ = QQ.multiple,
                    DQ = QQ.maxFiles,
                    kQ = QQ.validator;
                  return !(!oQ && FQ.length > 1 || oQ && DQ >= 1 && FQ.length > DQ) && FQ.every((function(QQ) {
                    var FQ = IQ(VQ(QQ, wQ), 1)[0],
                      oQ = IQ(hQ(QQ, LQ, qQ), 1)[0],
                      DQ = kQ ? kQ(QQ) : null;
                    return FQ && oQ && !DQ
                  }))
                }({
                  files: FQ,
                  accept: UQ,
                  minSize: kQ,
                  maxSize: DQ,
                  multiple: vQ,
                  maxFiles: mQ,
                  validator: OQ
                });
              XQ({
                isDragAccept: LQ,
                isDragReject: wQ > 0 && !LQ,
                isDragActive: !0,
                type: "setDraggedFiles"
              }), uQ && uQ(QQ)
            }
          })).catch((function(QQ) {
            return YF(QQ)
          }))
        }), [oQ, uQ, YF, iQ, UQ, kQ, DQ, vQ, mQ, OQ]),
        eF = (0, LQ.useCallback)((function(QQ) {
          QQ.preventDefault(), QQ.persist(), rF(QQ);
          var FQ = nQ(QQ);
          if (FQ && QQ.dataTransfer) try {
            QQ.dataTransfer.dropEffect = "copy"
          } catch (wQ) {}
          return FQ && bQ && bQ(QQ), !1
        }), [bQ, iQ]),
        MF = (0, LQ.useCallback)((function(QQ) {
          QQ.preventDefault(), QQ.persist(), rF(QQ);
          var FQ = DF.current.filter((function(QQ) {
              return zQ.current && zQ.current.contains(QQ)
            })),
            wQ = FQ.indexOf(QQ.target); - 1 !== wQ && FQ.splice(wQ, 1), DF.current = FQ, FQ.length > 0 || (XQ({
            type: "setDraggedFiles",
            isDragActive: !1,
            isDragAccept: !1,
            isDragReject: !1
          }), nQ(QQ) && HQ && HQ(QQ))
        }), [zQ, HQ, iQ]),
        GF = (0, LQ.useCallback)((function(QQ, FQ) {
          var wQ = [],
            LQ = [];
          QQ.forEach((function(QQ) {
            var FQ = LF(VQ(QQ, UQ), 2),
              qQ = FQ[0],
              oQ = FQ[1],
              vQ = LF(hQ(QQ, kQ, DQ), 2),
              mQ = vQ[0],
              uQ = vQ[1],
              HQ = OQ ? OQ(QQ) : null;
            if (qQ && mQ && !HQ) wQ.push(QQ);
            else {
              var bQ = [oQ, uQ];
              HQ && (bQ = bQ.concat(HQ)), LQ.push({
                file: QQ,
                errors: bQ.filter((function(QQ) {
                  return QQ
                }))
              })
            }
          })), (!vQ && wQ.length > 1 || vQ && mQ >= 1 && wQ.length > mQ) && (wQ.forEach((function(QQ) {
            LQ.push({
              file: QQ,
              errors: [fQ]
            })
          })), wQ.splice(0)), XQ({
            acceptedFiles: wQ,
            fileRejections: LQ,
            type: "setFiles"
          }), YQ && YQ(wQ, LQ, FQ), LQ.length > 0 && AQ && AQ(LQ, FQ), wQ.length > 0 && xQ && xQ(wQ, FQ)
        }), [XQ, vQ, UQ, kQ, DQ, mQ, YQ, xQ, AQ, OQ]),
        pF = (0, LQ.useCallback)((function(QQ) {
          QQ.preventDefault(), QQ.persist(), rF(QQ), DF.current = [], nQ(QQ) && Promise.resolve(oQ(QQ)).then((function(FQ) {
            EQ(QQ) && !iQ || GF(FQ, QQ)
          })).catch((function(QQ) {
            return YF(QQ)
          })), XQ({
            type: "reset"
          })
        }), [oQ, GF, YF, iQ]),
        cF = (0, LQ.useCallback)((function() {
          if (qF.current) {
            XQ({
              type: "openDialog"
            }), TQ();
            var QQ = {
              multiple: vQ,
              types: NQ
            };
            window.showOpenFilePicker(QQ).then((function(QQ) {
              return oQ(QQ)
            })).then((function(QQ) {
              GF(QQ, null), XQ({
                type: "closeDialog"
              })
            })).catch((function(QQ) {
              var FQ;
              (FQ = QQ) instanceof DOMException && ("AbortError" === FQ.name || FQ.code === FQ.ABORT_ERR) ? (KQ(QQ), XQ({
                type: "closeDialog"
              })) : ! function(QQ) {
                return QQ instanceof DOMException && ("SecurityError" === QQ.name || QQ.code === QQ.SECURITY_ERR)
              }(QQ) ? YF(QQ) : (qF.current = !1, lQ.current ? (lQ.current.value = null, lQ.current.click()) : YF(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))
            }))
          } else lQ.current && (XQ({
            type: "openDialog"
          }), TQ(), lQ.current.value = null, lQ.current.click())
        }), [XQ, TQ, KQ, MQ, GF, YF, NQ, vQ]),
        CF = (0, LQ.useCallback)((function(QQ) {
          zQ.current && zQ.current.isEqualNode(QQ.target) && (" " !== QQ.key && "Enter" !== QQ.key && 32 !== QQ.keyCode && 13 !== QQ.keyCode || (QQ.preventDefault(), cF()))
        }), [zQ, cF]),
        SF = (0, LQ.useCallback)((function() {
          XQ({
            type: "focus"
          })
        }), []),
        iF = (0, LQ.useCallback)((function() {
          XQ({
            type: "blur"
          })
        }), []),
        WF = (0, LQ.useCallback)((function() {
          cQ || (! function() {
            var QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
            return function(QQ) {
              return -1 !== QQ.indexOf("MSIE") || -1 !== QQ.indexOf("Trident/")
            }(QQ) || function(QQ) {
              return -1 !== QQ.indexOf("Edge/")
            }(QQ)
          }() ? cF() : setTimeout(cF, 0))
        }), [cQ, cF]),
        RF = function(QQ) {
          return qQ ? null : QQ
        },
        OF = function(QQ) {
          return CQ ? null : RF(QQ)
        },
        sF = function(QQ) {
          return SQ ? null : RF(QQ)
        },
        rF = function(QQ) {
          iQ && QQ.stopPropagation()
        },
        IF = (0, LQ.useMemo)((function() {
          return function() {
            var QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              FQ = QQ.refKey,
              wQ = void 0 === FQ ? "ref" : FQ,
              LQ = QQ.role,
              oQ = QQ.onKeyDown,
              DQ = QQ.onFocus,
              kQ = QQ.onBlur,
              vQ = QQ.onClick,
              mQ = QQ.onDragEnter,
              uQ = QQ.onDragOver,
              HQ = QQ.onDragLeave,
              bQ = QQ.onDrop,
              YQ = mF(QQ, QF);
            return kF(kF(vF({
              onKeyDown: OF(PQ(oQ, CF)),
              onFocus: OF(PQ(DQ, SF)),
              onBlur: OF(PQ(kQ, iF)),
              onClick: RF(PQ(vQ, WF)),
              onDragEnter: sF(PQ(mQ, tF)),
              onDragOver: sF(PQ(uQ, eF)),
              onDragLeave: sF(PQ(HQ, MF)),
              onDrop: sF(PQ(bQ, pF)),
              role: "string" === typeof LQ && "" !== LQ ? LQ : "presentation"
            }, wQ, zQ), qQ || CQ ? {} : {
              tabIndex: 0
            }), YQ)
          }
        }), [zQ, CF, SF, iF, WF, tF, eF, MF, pF, CQ, SQ, qQ]),
        UF = (0, LQ.useCallback)((function(QQ) {
          QQ.stopPropagation()
        }), []),
        NF = (0, LQ.useMemo)((function() {
          return function() {
            var QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              FQ = QQ.refKey,
              wQ = void 0 === FQ ? "ref" : FQ,
              LQ = QQ.onChange,
              qQ = QQ.onClick,
              oQ = mF(QQ, FF);
            return kF(kF({}, vF({
              accept: UQ,
              multiple: vQ,
              type: "file",
              style: {
                display: "none"
              },
              onChange: RF(PQ(LQ, pF)),
              onClick: RF(PQ(qQ, UF)),
              tabIndex: -1
            }, wQ, lQ)), oQ)
          }
        }), [lQ, wQ, vQ, pF, qQ]);
      return kF(kF({}, aQ), {}, {
        hU: BQ && !qQ,
        getRootProps: IF,
        getInputProps: NF,
        rootRef: zQ,
        inputRef: lQ,
        open: RF(cF)
      })
    }

    function xF(QQ, FQ) {
      switch (FQ.type) {
        case "focus":
          return kF(kF({}, QQ), {}, {
            hU: !0
          });
        case "blur":
          return kF(kF({}, QQ), {}, {
            hU: !1
          });
        case "openDialog":
          return kF(kF({}, bF), {}, {
            isFileDialogActive: !0
          });
        case "closeDialog":
          return kF(kF({}, QQ), {}, {
            isFileDialogActive: !1
          });
        case "setDraggedFiles":
          return kF(kF({}, QQ), {}, {
            isDragActive: FQ.isDragActive,
            isDragAccept: FQ.isDragAccept,
            isDragReject: FQ.isDragReject
          });
        case "setFiles":
          return kF(kF({}, QQ), {}, {
            acceptedFiles: FQ.acceptedFiles,
            fileRejections: FQ.fileRejections
          });
        case "reset":
          return kF({}, bF);
        default:
          return QQ
      }
    }

    function AF() {}
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);