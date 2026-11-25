export const id = 111;
export const ids = [111];
export const modules = {
  5336: (QQ, WQ) => {
    WQ.b = function(QQ, WQ) {
      if (QQ && WQ) {
        var XQ = Array.isArray(WQ) ? WQ : WQ.split(","),
          wQ = QQ.name || "",
          qQ = (QQ.type || "").toLowerCase(),
          TQ = qQ.replace(/\/.*$/, "");
        return XQ.some((function(QQ) {
          var WQ = QQ.trim().toLowerCase();
          return "." === WQ.charAt(0) ? wQ.toLowerCase().endsWith(WQ) : WQ.endsWith("/*") ? TQ === WQ.replace(/\/.*$/, "") : qQ === WQ
        }))
      }
      return !0
    }
  },
  5310: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => IW
    });
    var wQ = XQ(61),
      qQ = XQ(5318),
      TQ = XQ.n(qQ);

    function zQ(QQ, WQ, XQ, wQ) {
      return new(XQ || (XQ = Promise))((function(qQ, TQ) {
        function zQ(QQ) {
          try {
            FQ(wQ.next(QQ))
          } catch (WQ) {
            TQ(WQ)
          }
        }

        function sQ(QQ) {
          try {
            FQ(wQ.throw(QQ))
          } catch (WQ) {
            TQ(WQ)
          }
        }

        function FQ(QQ) {
          var WQ;
          QQ.done ? qQ(QQ.value) : (WQ = QQ.value, WQ instanceof XQ ? WQ : new XQ((function(QQ) {
            QQ(WQ)
          }))).then(zQ, sQ)
        }
        FQ((wQ = wQ.apply(QQ, WQ || [])).next())
      }))
    }

    function sQ(QQ, WQ) {
      var XQ, wQ, qQ, TQ, zQ = {
        label: 0,
        sent: function() {
          if (1 & qQ[0]) throw qQ[1];
          return qQ[1]
        },
        trys: [],
        ops: []
      };
      return TQ = {
        next: sQ(0),
        throw: sQ(1),
        return: sQ(2)
      }, "function" === typeof Symbol && (TQ[Symbol.iterator] = function() {
        return this
      }), TQ;

      function sQ(sQ) {
        return function(FQ) {
          return function(sQ) {
            if (XQ) throw new TypeError("Generator is already executing.");
            for (; TQ && (TQ = 0, sQ[0] && (zQ = 0)), zQ;) try {
              if (XQ = 1, wQ && (qQ = 2 & sQ[0] ? wQ.return : sQ[0] ? wQ.throw || ((qQ = wQ.return) && qQ.call(wQ), 0) : wQ.next) && !(qQ = qQ.call(wQ, sQ[1])).done) return qQ;
              switch (wQ = 0, qQ && (sQ = [2 & sQ[0], qQ.value]), sQ[0]) {
                case 0:
                case 1:
                  qQ = sQ;
                  break;
                case 4:
                  return zQ.label++, {
                    value: sQ[1],
                    done: !1
                  };
                case 5:
                  zQ.label++, wQ = sQ[1], sQ = [0];
                  continue;
                case 7:
                  sQ = zQ.ops.pop(), zQ.trys.pop();
                  continue;
                default:
                  if (!(qQ = (qQ = zQ.trys).length > 0 && qQ[qQ.length - 1]) && (6 === sQ[0] || 2 === sQ[0])) {
                    zQ = 0;
                    continue
                  }
                  if (3 === sQ[0] && (!qQ || sQ[1] > qQ[0] && sQ[1] < qQ[3])) {
                    zQ.label = sQ[1];
                    break
                  }
                  if (6 === sQ[0] && zQ.label < qQ[1]) {
                    zQ.label = qQ[1], qQ = sQ;
                    break
                  }
                  if (qQ && zQ.label < qQ[2]) {
                    zQ.label = qQ[2], zQ.ops.push(sQ);
                    break
                  }
                  qQ[2] && zQ.ops.pop(), zQ.trys.pop();
                  continue
              }
              sQ = WQ.call(QQ, zQ)
            } catch (FQ) {
              sQ = [6, FQ], wQ = 0
            } finally {
              XQ = qQ = 0
            }
            if (5 & sQ[0]) throw sQ[1];
            return {
              value: sQ[0] ? sQ[1] : void 0,
              done: !0
            }
          }([sQ, FQ])
        }
      }
    }
    Object.create;

    function FQ(QQ, WQ) {
      var XQ = "function" === typeof Symbol && QQ[Symbol.iterator];
      if (!XQ) return QQ;
      var wQ, qQ, TQ = XQ.call(QQ),
        zQ = [];
      try {
        for (;
          (void 0 === WQ || WQ-- > 0) && !(wQ = TQ.next()).done;) zQ.push(wQ.value)
      } catch (sQ) {
        qQ = {
          error: sQ
        }
      } finally {
        try {
          wQ && !wQ.done && (XQ = TQ.return) && XQ.call(TQ)
        } finally {
          if (qQ) throw qQ.error
        }
      }
      return zQ
    }

    function PQ(QQ, WQ, XQ) {
      if (XQ || 2 === arguments.length)
        for (var wQ, qQ = 0, TQ = WQ.length; qQ < TQ; qQ++) !wQ && qQ in WQ || (wQ || (wQ = Array.prototype.slice.call(WQ, 0, qQ)), wQ[qQ] = WQ[qQ]);
      return QQ.concat(wQ || Array.prototype.slice.call(WQ))
    }
    Object.create;
    "function" === typeof SuppressedError && SuppressedError;
    var gQ = new Map([
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
      ["cg", "application/vnd.ms-outlook"]
    ]);

    function JQ(QQ, WQ) {
      var XQ = function(QQ) {
        var WQ = QQ.name;
        if (WQ && -1 !== WQ.lastIndexOf(".") && !QQ.type) {
          var XQ = WQ.split(".").pop().toLowerCase(),
            wQ = gQ.get(XQ);
          wQ && Object.defineProperty(QQ, "type", {
            value: wQ,
            writable: !1,
            configurable: !1,
            enumerable: !0
          })
        }
        return QQ
      }(QQ);
      if ("string" !== typeof XQ.path) {
        var wQ = QQ.webkitRelativePath;
        Object.defineProperty(XQ, "path", {
          value: "string" === typeof WQ ? WQ : "string" === typeof wQ && wQ.length > 0 ? wQ : QQ.name,
          writable: !1,
          configurable: !1,
          enumerable: !0
        })
      }
      return XQ
    }
    var rQ = [".DS_Store", "Thumbs.db"];

    function IQ(QQ) {
      return "object" === typeof QQ && null !== QQ
    }

    function jQ(QQ) {
      return DQ(QQ.target.files).map((function(QQ) {
        return JQ(QQ)
      }))
    }

    function BQ(QQ) {
      return zQ(this, void 0, void 0, (function() {
        return sQ(this, (function(WQ) {
          switch (WQ.label) {
            case 0:
              return [4, Promise.all(QQ.map((function(QQ) {
                return QQ.getFile()
              })))];
            case 1:
              return [2, WQ.sent().map((function(QQ) {
                return JQ(QQ)
              }))]
          }
        }))
      }))
    }

    function yQ(QQ, WQ) {
      return zQ(this, void 0, void 0, (function() {
        var XQ;
        return sQ(this, (function(wQ) {
          switch (wQ.label) {
            case 0:
              return QQ.items ? (XQ = DQ(QQ.items).filter((function(QQ) {
                return "file" === QQ.kind
              })), "drop" !== WQ ? [2, XQ] : [4, Promise.all(XQ.map(pQ))]) : [3, 2];
            case 1:
              return [2, VQ(GQ(wQ.sent()))];
            case 2:
              return [2, VQ(DQ(QQ.files).map((function(QQ) {
                return JQ(QQ)
              })))]
          }
        }))
      }))
    }

    function VQ(QQ) {
      return QQ.filter((function(QQ) {
        return -1 === rQ.indexOf(QQ.name)
      }))
    }

    function DQ(QQ) {
      if (null === QQ) return [];
      for (var WQ = [], XQ = 0; XQ < QQ.length; XQ++) {
        var wQ = QQ[XQ];
        WQ.push(wQ)
      }
      return WQ
    }

    function pQ(QQ) {
      if ("function" !== typeof QQ.webkitGetAsEntry) return UQ(QQ);
      var WQ = QQ.webkitGetAsEntry();
      return WQ && WQ.isDirectory ? vQ(WQ) : UQ(QQ)
    }

    function GQ(QQ) {
      return QQ.reduce((function(QQ, WQ) {
        return PQ(PQ([], FQ(QQ), !1), FQ(Array.isArray(WQ) ? GQ(WQ) : [WQ]), !1)
      }), [])
    }

    function UQ(QQ) {
      var WQ = QQ.getAsFile();
      if (!WQ) return Promise.reject("".concat(QQ, " is not a File"));
      var XQ = JQ(WQ);
      return Promise.resolve(XQ)
    }

    function bQ(QQ) {
      return zQ(this, void 0, void 0, (function() {
        return sQ(this, (function(WQ) {
          return [2, QQ.isDirectory ? vQ(QQ) : dQ(QQ)]
        }))
      }))
    }

    function vQ(QQ) {
      var WQ = QQ.createReader();
      return new Promise((function(QQ, XQ) {
        var wQ = [];
        ! function qQ() {
          var TQ = this;
          WQ.readEntries((function(WQ) {
            return zQ(TQ, void 0, void 0, (function() {
              var TQ, zQ, FQ;
              return sQ(this, (function(sQ) {
                switch (sQ.label) {
                  case 0:
                    if (WQ.length) return [3, 5];
                    sQ.label = 1;
                  case 1:
                    return sQ.trys.push([1, 3, , 4]), [4, Promise.all(wQ)];
                  case 2:
                    return TQ = sQ.sent(), QQ(TQ), [3, 4];
                  case 3:
                    return zQ = sQ.sent(), XQ(zQ), [3, 4];
                  case 4:
                    return [3, 6];
                  case 5:
                    FQ = Promise.all(WQ.map(bQ)), wQ.push(FQ), qQ(), sQ.label = 6;
                  case 6:
                    return [2]
                }
              }))
            }))
          }), (function(QQ) {
            XQ(QQ)
          }))
        }()
      }))
    }

    function dQ(QQ) {
      return zQ(this, void 0, void 0, (function() {
        return sQ(this, (function(WQ) {
          return [2, new Promise((function(WQ, XQ) {
            QQ.file((function(XQ) {
              var wQ = JQ(XQ, QQ.fullPath);
              WQ(wQ)
            }), (function(QQ) {
              XQ(QQ)
            }))
          }))]
        }))
      }))
    }
    var HQ = XQ(5336);

    function aQ(QQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return RQ(QQ)
      }(QQ) || function(QQ) {
        if ("undefined" !== typeof Symbol && null != QQ[Symbol.iterator] || null != QQ["@@iterator"]) return Array.from(QQ)
      }(QQ) || AQ(QQ) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function lQ(QQ, WQ) {
      var XQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var wQ = Object.getOwnPropertySymbols(QQ);
        WQ && (wQ = wQ.filter((function(WQ) {
          return Object.getOwnPropertyDescriptor(QQ, WQ).enumerable
        }))), XQ.push.apply(XQ, wQ)
      }
      return XQ
    }

    function hQ(QQ) {
      for (var WQ = 1; WQ < arguments.length; WQ++) {
        var XQ = null != arguments[WQ] ? arguments[WQ] : {};
        WQ % 2 ? lQ(Object(XQ), !0).forEach((function(WQ) {
          iQ(QQ, WQ, XQ[WQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(XQ)) : lQ(Object(XQ)).forEach((function(WQ) {
          Object.defineProperty(QQ, WQ, Object.getOwnPropertyDescriptor(XQ, WQ))
        }))
      }
      return QQ
    }

    function iQ(QQ, WQ, XQ) {
      return WQ in QQ ? Object.defineProperty(QQ, WQ, {
        value: XQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[WQ] = XQ, QQ
    }

    function cQ(QQ, WQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return QQ
      }(QQ) || function(QQ, WQ) {
        var XQ = null == QQ ? null : "undefined" !== typeof Symbol && QQ[Symbol.iterator] || QQ["@@iterator"];
        if (null == XQ) return;
        var wQ, qQ, TQ = [],
          zQ = !0,
          sQ = !1;
        try {
          for (XQ = XQ.call(QQ); !(zQ = (wQ = XQ.next()).done) && (TQ.push(wQ.value), !WQ || TQ.length !== WQ); zQ = !0);
        } catch (FQ) {
          sQ = !0, qQ = FQ
        } finally {
          try {
            zQ || null == XQ.return || XQ.return()
          } finally {
            if (sQ) throw qQ
          }
        }
        return TQ
      }(QQ, WQ) || AQ(QQ, WQ) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function AQ(QQ, WQ) {
      if (QQ) {
        if ("string" === typeof QQ) return RQ(QQ, WQ);
        var XQ = Object.prototype.toString.call(QQ).slice(8, -1);
        return "Object" === XQ && QQ.constructor && (XQ = QQ.constructor.name), "Map" === XQ || "Set" === XQ ? Array.from(QQ) : "Arguments" === XQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(XQ) ? RQ(QQ, WQ) : void 0
      }
    }

    function RQ(QQ, WQ) {
      (null == WQ || WQ > QQ.length) && (WQ = QQ.length);
      for (var XQ = 0, wQ = new Array(WQ); XQ < WQ; XQ++) wQ[XQ] = QQ[XQ];
      return wQ
    }
    var EQ = "file-invalid-type",
      CQ = "file-too-large",
      uQ = "file-too-small",
      LQ = "too-many-files",
      kQ = function(QQ) {
        QQ = Array.isArray(QQ) && 1 === QQ.length ? QQ[0] : QQ;
        var WQ = Array.isArray(QQ) ? "one of ".concat(QQ.join(", ")) : QQ;
        return {
          code: EQ,
          message: "File type must be ".concat(WQ)
        }
      },
      fQ = function(QQ) {
        return {
          code: CQ,
          message: "File is larger than ".concat(QQ, " ").concat(1 === QQ ? "byte" : "bytes")
        }
      },
      SQ = function(QQ) {
        return {
          code: uQ,
          message: "File is smaller than ".concat(QQ, " ").concat(1 === QQ ? "byte" : "bytes")
        }
      },
      tQ = {
        code: LQ,
        message: "Too many files"
      };

    function oQ(QQ, WQ) {
      var XQ = "application/x-moz-file" === QQ.type || (0, HQ.b)(QQ, WQ);
      return [XQ, XQ ? null : kQ(WQ)]
    }

    function eQ(QQ, WQ, XQ) {
      if (nQ(QQ.size))
        if (nQ(WQ) && nQ(XQ)) {
          if (QQ.size > XQ) return [!1, fQ(XQ)];
          if (QQ.size < WQ) return [!1, SQ(WQ)]
        } else {
          if (nQ(WQ) && QQ.size < WQ) return [!1, SQ(WQ)];
          if (nQ(XQ) && QQ.size > XQ) return [!1, fQ(XQ)]
        } return [!0, null]
    }

    function nQ(QQ) {
      return void 0 !== QQ && null !== QQ
    }

    function xQ(QQ) {
      return "function" === typeof QQ.isPropagationStopped ? QQ.isPropagationStopped() : "undefined" !== typeof QQ.cancelBubble && QQ.cancelBubble
    }

    function YQ(QQ) {
      return QQ.dataTransfer ? Array.prototype.some.call(QQ.dataTransfer.types, (function(QQ) {
        return "Files" === QQ || "application/x-moz-file" === QQ
      })) : !!QQ.target && !!QQ.target.files
    }

    function NQ(QQ) {
      QQ.preventDefault()
    }

    function ZQ() {
      for (var QQ = arguments.length, WQ = new Array(QQ), XQ = 0; XQ < QQ; XQ++) WQ[XQ] = arguments[XQ];
      return function(QQ) {
        for (var XQ = arguments.length, wQ = new Array(XQ > 1 ? XQ - 1 : 0), qQ = 1; qQ < XQ; qQ++) wQ[qQ - 1] = arguments[qQ];
        return WQ.some((function(WQ) {
          return !xQ(QQ) && WQ && WQ.apply(void 0, [QQ].concat(wQ)), xQ(QQ)
        }))
      }
    }

    function OQ(QQ) {
      return "audio/*" === QQ || "video/*" === QQ || "image/*" === QQ || "text/*" === QQ || /\w+\/[-+.\w]+/g.test(QQ)
    }

    function KQ(QQ) {
      return /^.*\.[\w]+$/.test(QQ)
    }
    var mQ = ["children"],
      MQ = ["open"],
      QW = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
      WW = ["refKey", "onChange", "onClick"];

    function XW(QQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return TW(QQ)
      }(QQ) || function(QQ) {
        if ("undefined" !== typeof Symbol && null != QQ[Symbol.iterator] || null != QQ["@@iterator"]) return Array.from(QQ)
      }(QQ) || qW(QQ) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function wW(QQ, WQ) {
      return function(QQ) {
        if (Array.isArray(QQ)) return QQ
      }(QQ) || function(QQ, WQ) {
        var XQ = null == QQ ? null : "undefined" !== typeof Symbol && QQ[Symbol.iterator] || QQ["@@iterator"];
        if (null == XQ) return;
        var wQ, qQ, TQ = [],
          zQ = !0,
          sQ = !1;
        try {
          for (XQ = XQ.call(QQ); !(zQ = (wQ = XQ.next()).done) && (TQ.push(wQ.value), !WQ || TQ.length !== WQ); zQ = !0);
        } catch (FQ) {
          sQ = !0, qQ = FQ
        } finally {
          try {
            zQ || null == XQ.return || XQ.return()
          } finally {
            if (sQ) throw qQ
          }
        }
        return TQ
      }(QQ, WQ) || qW(QQ, WQ) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function qW(QQ, WQ) {
      if (QQ) {
        if ("string" === typeof QQ) return TW(QQ, WQ);
        var XQ = Object.prototype.toString.call(QQ).slice(8, -1);
        return "Object" === XQ && QQ.constructor && (XQ = QQ.constructor.name), "Map" === XQ || "Set" === XQ ? Array.from(QQ) : "Arguments" === XQ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(XQ) ? TW(QQ, WQ) : void 0
      }
    }

    function TW(QQ, WQ) {
      (null == WQ || WQ > QQ.length) && (WQ = QQ.length);
      for (var XQ = 0, wQ = new Array(WQ); XQ < WQ; XQ++) wQ[XQ] = QQ[XQ];
      return wQ
    }

    function zW(QQ, WQ) {
      var XQ = Object.keys(QQ);
      if (Object.getOwnPropertySymbols) {
        var wQ = Object.getOwnPropertySymbols(QQ);
        WQ && (wQ = wQ.filter((function(WQ) {
          return Object.getOwnPropertyDescriptor(QQ, WQ).enumerable
        }))), XQ.push.apply(XQ, wQ)
      }
      return XQ
    }

    function sW(QQ) {
      for (var WQ = 1; WQ < arguments.length; WQ++) {
        var XQ = null != arguments[WQ] ? arguments[WQ] : {};
        WQ % 2 ? zW(Object(XQ), !0).forEach((function(WQ) {
          FW(QQ, WQ, XQ[WQ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(QQ, Object.getOwnPropertyDescriptors(XQ)) : zW(Object(XQ)).forEach((function(WQ) {
          Object.defineProperty(QQ, WQ, Object.getOwnPropertyDescriptor(XQ, WQ))
        }))
      }
      return QQ
    }

    function FW(QQ, WQ, XQ) {
      return WQ in QQ ? Object.defineProperty(QQ, WQ, {
        value: XQ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : QQ[WQ] = XQ, QQ
    }

    function PW(QQ, WQ) {
      if (null == QQ) return {};
      var XQ, wQ, qQ = function(QQ, WQ) {
        if (null == QQ) return {};
        var XQ, wQ, qQ = {},
          TQ = Object.keys(QQ);
        for (wQ = 0; wQ < TQ.length; wQ++) XQ = TQ[wQ], WQ.indexOf(XQ) >= 0 || (qQ[XQ] = QQ[XQ]);
        return qQ
      }(QQ, WQ);
      if (Object.getOwnPropertySymbols) {
        var TQ = Object.getOwnPropertySymbols(QQ);
        for (wQ = 0; wQ < TQ.length; wQ++) XQ = TQ[wQ], WQ.indexOf(XQ) >= 0 || Object.prototype.propertyIsEnumerable.call(QQ, XQ) && (qQ[XQ] = QQ[XQ])
      }
      return qQ
    }
    var gW = (0, wQ.forwardRef)((function(QQ, WQ) {
      var XQ = QQ.children,
        qQ = IW(PW(QQ, mQ)),
        TQ = qQ.open,
        zQ = PW(qQ, MQ);
      return (0, wQ.useImperativeHandle)(WQ, (function() {
        return {
          open: TQ
        }
      }), [TQ]), wQ.createElement(wQ.Fragment, null, XQ(sW(sW({}, zQ), {}, {
        open: TQ
      })))
    }));
    gW.displayName = "Dropzone";
    var JW = {
      disabled: !1,
      getFilesFromEvent: function(QQ) {
        return zQ(this, void 0, void 0, (function() {
          return sQ(this, (function(WQ) {
            return IQ(QQ) && IQ(QQ.dataTransfer) ? [2, yQ(QQ.dataTransfer, QQ.type)] : function(QQ) {
              return IQ(QQ) && IQ(QQ.target)
            }(QQ) ? [2, jQ(QQ)] : Array.isArray(QQ) && QQ.every((function(QQ) {
              return "getFile" in QQ && "function" === typeof QQ.getFile
            })) ? [2, BQ(QQ)] : [2, []]
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
    gW.defaultProps = JW, gW.propTypes = {
      children: TQ().func,
      accept: TQ().objectOf(TQ().arrayOf(TQ().string)),
      multiple: TQ().bool,
      preventDropOnDocument: TQ().bool,
      noClick: TQ().bool,
      noKeyboard: TQ().bool,
      noDrag: TQ().bool,
      noDragEventsBubbling: TQ().bool,
      minSize: TQ().number,
      maxSize: TQ().number,
      maxFiles: TQ().number,
      disabled: TQ().bool,
      getFilesFromEvent: TQ().func,
      onFileDialogCancel: TQ().func,
      onFileDialogOpen: TQ().func,
      useFsAccessApi: TQ().bool,
      autoFocus: TQ().bool,
      onDragEnter: TQ().func,
      onDragLeave: TQ().func,
      onDragOver: TQ().func,
      onDrop: TQ().func,
      onDropAccepted: TQ().func,
      onDropRejected: TQ().func,
      onError: TQ().func,
      validator: TQ().func
    };
    var rW = {
      JR: !1,
      isFileDialogActive: !1,
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1,
      acceptedFiles: [],
      fileRejections: []
    };

    function IW() {
      var QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        WQ = sW(sW({}, JW), QQ),
        XQ = WQ.accept,
        qQ = WQ.disabled,
        TQ = WQ.getFilesFromEvent,
        zQ = WQ.maxSize,
        sQ = WQ.minSize,
        FQ = WQ.multiple,
        PQ = WQ.maxFiles,
        gQ = WQ.onDragEnter,
        JQ = WQ.onDragLeave,
        rQ = WQ.onDragOver,
        IQ = WQ.onDrop,
        jQ = WQ.onDropAccepted,
        BQ = WQ.onDropRejected,
        yQ = WQ.onFileDialogCancel,
        VQ = WQ.onFileDialogOpen,
        DQ = WQ.useFsAccessApi,
        pQ = WQ.autoFocus,
        GQ = WQ.preventDropOnDocument,
        UQ = WQ.noClick,
        bQ = WQ.noKeyboard,
        vQ = WQ.noDrag,
        dQ = WQ.noDragEventsBubbling,
        HQ = WQ.onError,
        lQ = WQ.validator,
        AQ = (0, wQ.useMemo)((function() {
          return function(QQ) {
            if (nQ(QQ)) return Object.entries(QQ).reduce((function(QQ, WQ) {
              var XQ = cQ(WQ, 2),
                wQ = XQ[0],
                qQ = XQ[1];
              return [].concat(aQ(QQ), [wQ], aQ(qQ))
            }), []).filter((function(QQ) {
              return OQ(QQ) || KQ(QQ)
            })).join(",")
          }(XQ)
        }), [XQ]),
        RQ = (0, wQ.useMemo)((function() {
          return function(QQ) {
            return nQ(QQ) ? [{
              description: "Files",
              accept: Object.entries(QQ).filter((function(QQ) {
                var WQ = cQ(QQ, 2),
                  XQ = WQ[0],
                  wQ = WQ[1],
                  qQ = !0;
                return OQ(XQ) || (console.warn('Skipped "'.concat(XQ, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), qQ = !1), Array.isArray(wQ) && wQ.every(KQ) || (console.warn('Skipped "'.concat(XQ, '" because an invalid file extension was provided.')), qQ = !1), qQ
              })).reduce((function(QQ, WQ) {
                var XQ = cQ(WQ, 2),
                  wQ = XQ[0],
                  qQ = XQ[1];
                return hQ(hQ({}, QQ), {}, iQ({}, wQ, qQ))
              }), {})
            }] : QQ
          }(XQ)
        }), [XQ]),
        EQ = (0, wQ.useMemo)((function() {
          return "function" === typeof VQ ? VQ : BW
        }), [VQ]),
        CQ = (0, wQ.useMemo)((function() {
          return "function" === typeof yQ ? yQ : BW
        }), [yQ]),
        uQ = (0, wQ.useRef)(null),
        LQ = (0, wQ.useRef)(null),
        kQ = wW((0, wQ.useReducer)(jW, rW), 2),
        fQ = kQ[0],
        SQ = kQ[1],
        mQ = fQ.JR,
        MQ = fQ.isFileDialogActive,
        qW = (0, wQ.useRef)("undefined" !== typeof window && window.isSecureContext && DQ && "showOpenFilePicker" in window),
        TW = function() {
          !qW.current && MQ && setTimeout((function() {
            LQ.current && (LQ.current.files.length || (SQ({
              type: "closeDialog"
            }), CQ()))
          }), 300)
        };
      (0, wQ.useEffect)((function() {
        return window.addEventListener("focus", TW, !1),
          function() {
            window.removeEventListener("focus", TW, !1)
          }
      }), [LQ, MQ, CQ, qW]);
      var zW = (0, wQ.useRef)([]),
        gW = function(QQ) {
          uQ.current && uQ.current.contains(QQ.target) || (QQ.preventDefault(), zW.current = [])
        };
      (0, wQ.useEffect)((function() {
        return GQ && (document.addEventListener("dragover", NQ, !1), document.addEventListener("drop", gW, !1)),
          function() {
            GQ && (document.removeEventListener("dragover", NQ), document.removeEventListener("drop", gW))
          }
      }), [uQ, GQ]), (0, wQ.useEffect)((function() {
        return !qQ && pQ && uQ.current && uQ.current.focus(),
          function() {}
      }), [uQ, pQ, qQ]);
      var IW = (0, wQ.useCallback)((function(QQ) {
          HQ ? HQ(QQ) : console.error(QQ)
        }), [HQ]),
        yW = (0, wQ.useCallback)((function(QQ) {
          QQ.preventDefault(), QQ.persist(), iW(QQ), zW.current = [].concat(XW(zW.current), [QQ.target]), YQ(QQ) && Promise.resolve(TQ(QQ)).then((function(WQ) {
            if (!xQ(QQ) || dQ) {
              var XQ = WQ.length,
                wQ = XQ > 0 && function(QQ) {
                  var WQ = QQ.files,
                    XQ = QQ.accept,
                    wQ = QQ.minSize,
                    qQ = QQ.maxSize,
                    TQ = QQ.multiple,
                    zQ = QQ.maxFiles,
                    sQ = QQ.validator;
                  return !(!TQ && WQ.length > 1 || TQ && zQ >= 1 && WQ.length > zQ) && WQ.every((function(QQ) {
                    var WQ = cQ(oQ(QQ, XQ), 1)[0],
                      TQ = cQ(eQ(QQ, wQ, qQ), 1)[0],
                      zQ = sQ ? sQ(QQ) : null;
                    return WQ && TQ && !zQ
                  }))
                }({
                  files: WQ,
                  accept: AQ,
                  minSize: sQ,
                  maxSize: zQ,
                  multiple: FQ,
                  maxFiles: PQ,
                  validator: lQ
                });
              SQ({
                isDragAccept: wQ,
                isDragReject: XQ > 0 && !wQ,
                isDragActive: !0,
                type: "setDraggedFiles"
              }), gQ && gQ(QQ)
            }
          })).catch((function(QQ) {
            return IW(QQ)
          }))
        }), [TQ, gQ, IW, dQ, AQ, sQ, zQ, FQ, PQ, lQ]),
        VW = (0, wQ.useCallback)((function(QQ) {
          QQ.preventDefault(), QQ.persist(), iW(QQ);
          var WQ = YQ(QQ);
          if (WQ && QQ.dataTransfer) try {
            QQ.dataTransfer.dropEffect = "copy"
          } catch (XQ) {}
          return WQ && rQ && rQ(QQ), !1
        }), [rQ, dQ]),
        DW = (0, wQ.useCallback)((function(QQ) {
          QQ.preventDefault(), QQ.persist(), iW(QQ);
          var WQ = zW.current.filter((function(QQ) {
              return uQ.current && uQ.current.contains(QQ)
            })),
            XQ = WQ.indexOf(QQ.target); - 1 !== XQ && WQ.splice(XQ, 1), zW.current = WQ, WQ.length > 0 || (SQ({
            type: "setDraggedFiles",
            isDragActive: !1,
            isDragAccept: !1,
            isDragReject: !1
          }), YQ(QQ) && JQ && JQ(QQ))
        }), [uQ, JQ, dQ]),
        pW = (0, wQ.useCallback)((function(QQ, WQ) {
          var XQ = [],
            wQ = [];
          QQ.forEach((function(QQ) {
            var WQ = wW(oQ(QQ, AQ), 2),
              qQ = WQ[0],
              TQ = WQ[1],
              FQ = wW(eQ(QQ, sQ, zQ), 2),
              PQ = FQ[0],
              gQ = FQ[1],
              JQ = lQ ? lQ(QQ) : null;
            if (qQ && PQ && !JQ) XQ.push(QQ);
            else {
              var rQ = [TQ, gQ];
              JQ && (rQ = rQ.concat(JQ)), wQ.push({
                file: QQ,
                errors: rQ.filter((function(QQ) {
                  return QQ
                }))
              })
            }
          })), (!FQ && XQ.length > 1 || FQ && PQ >= 1 && XQ.length > PQ) && (XQ.forEach((function(QQ) {
            wQ.push({
              file: QQ,
              errors: [tQ]
            })
          })), XQ.splice(0)), SQ({
            acceptedFiles: XQ,
            fileRejections: wQ,
            type: "setFiles"
          }), IQ && IQ(XQ, wQ, WQ), wQ.length > 0 && BQ && BQ(wQ, WQ), XQ.length > 0 && jQ && jQ(XQ, WQ)
        }), [SQ, FQ, AQ, sQ, zQ, PQ, IQ, jQ, BQ, lQ]),
        GW = (0, wQ.useCallback)((function(QQ) {
          QQ.preventDefault(), QQ.persist(), iW(QQ), zW.current = [], YQ(QQ) && Promise.resolve(TQ(QQ)).then((function(WQ) {
            xQ(QQ) && !dQ || pW(WQ, QQ)
          })).catch((function(QQ) {
            return IW(QQ)
          })), SQ({
            type: "reset"
          })
        }), [TQ, pW, IW, dQ]),
        UW = (0, wQ.useCallback)((function() {
          if (qW.current) {
            SQ({
              type: "openDialog"
            }), EQ();
            var QQ = {
              multiple: FQ,
              types: RQ
            };
            window.showOpenFilePicker(QQ).then((function(QQ) {
              return TQ(QQ)
            })).then((function(QQ) {
              pW(QQ, null), SQ({
                type: "closeDialog"
              })
            })).catch((function(QQ) {
              var WQ;
              (WQ = QQ) instanceof DOMException && ("AbortError" === WQ.name || WQ.code === WQ.ABORT_ERR) ? (CQ(QQ), SQ({
                type: "closeDialog"
              })) : ! function(QQ) {
                return QQ instanceof DOMException && ("SecurityError" === QQ.name || QQ.code === QQ.SECURITY_ERR)
              }(QQ) ? IW(QQ) : (qW.current = !1, LQ.current ? (LQ.current.value = null, LQ.current.click()) : IW(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))
            }))
          } else LQ.current && (SQ({
            type: "openDialog"
          }), EQ(), LQ.current.value = null, LQ.current.click())
        }), [SQ, EQ, CQ, DQ, pW, IW, RQ, FQ]),
        bW = (0, wQ.useCallback)((function(QQ) {
          uQ.current && uQ.current.isEqualNode(QQ.target) && (" " !== QQ.key && "Enter" !== QQ.key && 32 !== QQ.keyCode && 13 !== QQ.keyCode || (QQ.preventDefault(), UW()))
        }), [uQ, UW]),
        vW = (0, wQ.useCallback)((function() {
          SQ({
            type: "focus"
          })
        }), []),
        dW = (0, wQ.useCallback)((function() {
          SQ({
            type: "blur"
          })
        }), []),
        HW = (0, wQ.useCallback)((function() {
          UQ || (! function() {
            var QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
            return function(QQ) {
              return -1 !== QQ.indexOf("MSIE") || -1 !== QQ.indexOf("Trident/")
            }(QQ) || function(QQ) {
              return -1 !== QQ.indexOf("Edge/")
            }(QQ)
          }() ? UW() : setTimeout(UW, 0))
        }), [UQ, UW]),
        aW = function(QQ) {
          return qQ ? null : QQ
        },
        lW = function(QQ) {
          return bQ ? null : aW(QQ)
        },
        hW = function(QQ) {
          return vQ ? null : aW(QQ)
        },
        iW = function(QQ) {
          dQ && QQ.stopPropagation()
        },
        cW = (0, wQ.useMemo)((function() {
          return function() {
            var QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              WQ = QQ.refKey,
              XQ = void 0 === WQ ? "ref" : WQ,
              wQ = QQ.role,
              TQ = QQ.onKeyDown,
              zQ = QQ.onFocus,
              sQ = QQ.onBlur,
              FQ = QQ.onClick,
              PQ = QQ.onDragEnter,
              gQ = QQ.onDragOver,
              JQ = QQ.onDragLeave,
              rQ = QQ.onDrop,
              IQ = PW(QQ, QW);
            return sW(sW(FW({
              onKeyDown: lW(ZQ(TQ, bW)),
              onFocus: lW(ZQ(zQ, vW)),
              onBlur: lW(ZQ(sQ, dW)),
              onClick: aW(ZQ(FQ, HW)),
              onDragEnter: hW(ZQ(PQ, yW)),
              onDragOver: hW(ZQ(gQ, VW)),
              onDragLeave: hW(ZQ(JQ, DW)),
              onDrop: hW(ZQ(rQ, GW)),
              role: "string" === typeof wQ && "" !== wQ ? wQ : "presentation"
            }, XQ, uQ), qQ || bQ ? {} : {
              tabIndex: 0
            }), IQ)
          }
        }), [uQ, bW, vW, dW, HW, yW, VW, DW, GW, bQ, vQ, qQ]),
        AW = (0, wQ.useCallback)((function(QQ) {
          QQ.stopPropagation()
        }), []),
        RW = (0, wQ.useMemo)((function() {
          return function() {
            var QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              WQ = QQ.refKey,
              XQ = void 0 === WQ ? "ref" : WQ,
              wQ = QQ.onChange,
              qQ = QQ.onClick,
              TQ = PW(QQ, WW);
            return sW(sW({}, FW({
              accept: AQ,
              multiple: FQ,
              type: "file",
              style: {
                display: "none"
              },
              onChange: aW(ZQ(wQ, GW)),
              onClick: aW(ZQ(qQ, AW)),
              tabIndex: -1
            }, XQ, LQ)), TQ)
          }
        }), [LQ, XQ, FQ, GW, qQ]);
      return sW(sW({}, fQ), {}, {
        JR: mQ && !qQ,
        getRootProps: cW,
        getInputProps: RW,
        rootRef: uQ,
        inputRef: LQ,
        open: aW(UW)
      })
    }

    function jW(QQ, WQ) {
      switch (WQ.type) {
        case "focus":
          return sW(sW({}, QQ), {}, {
            JR: !0
          });
        case "blur":
          return sW(sW({}, QQ), {}, {
            JR: !1
          });
        case "openDialog":
          return sW(sW({}, rW), {}, {
            isFileDialogActive: !0
          });
        case "closeDialog":
          return sW(sW({}, QQ), {}, {
            isFileDialogActive: !1
          });
        case "setDraggedFiles":
          return sW(sW({}, QQ), {}, {
            isDragActive: WQ.isDragActive,
            isDragAccept: WQ.isDragAccept,
            isDragReject: WQ.isDragReject
          });
        case "setFiles":
          return sW(sW({}, QQ), {}, {
            acceptedFiles: WQ.acceptedFiles,
            fileRejections: WQ.fileRejections
          });
        case "reset":
          return sW({}, rW);
        default:
          return QQ
      }
    }

    function BW() {}
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);