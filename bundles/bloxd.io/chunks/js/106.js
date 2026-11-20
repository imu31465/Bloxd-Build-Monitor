export const id = 106;
export const ids = [106];
export const modules = {
  4930: (TT, kT) => {
    kT.d = function(TT, kT) {
      if (TT && kT) {
        var cT = Array.isArray(kT) ? kT : kT.split(","),
          lT = TT.name || "",
          MT = (TT.type || "").toLowerCase(),
          KT = MT.replace(/\/.*$/, "");
        return cT.some((function(TT) {
          var kT = TT.trim().toLowerCase();
          return "." === kT.charAt(0) ? lT.toLowerCase().endsWith(kT) : kT.endsWith("/*") ? KT === kT.replace(/\/.*$/, "") : MT === kT
        }))
      }
      return !0
    }
  },
  4909: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => jk
    });
    var lT = cT(71),
      MT = cT(4917),
      KT = cT.n(MT);

    function OT(TT, kT, cT, lT) {
      return new(cT || (cT = Promise))((function(MT, KT) {
        function OT(TT) {
          try {
            fT(lT.next(TT))
          } catch (kT) {
            KT(kT)
          }
        }

        function yT(TT) {
          try {
            fT(lT.throw(TT))
          } catch (kT) {
            KT(kT)
          }
        }

        function fT(TT) {
          var kT;
          TT.done ? MT(TT.value) : (kT = TT.value, kT instanceof cT ? kT : new cT((function(TT) {
            TT(kT)
          }))).then(OT, yT)
        }
        fT((lT = lT.apply(TT, kT || [])).next())
      }))
    }

    function yT(TT, kT) {
      var cT, lT, MT, KT, OT = {
        label: 0,
        sent: function() {
          if (1 & MT[0]) throw MT[1];
          return MT[1]
        },
        trys: [],
        ops: []
      };
      return KT = {
        next: yT(0),
        throw: yT(1),
        return: yT(2)
      }, "function" === typeof Symbol && (KT[Symbol.iterator] = function() {
        return this
      }), KT;

      function yT(yT) {
        return function(fT) {
          return function(yT) {
            if (cT) throw new TypeError("Generator is already executing.");
            for (; KT && (KT = 0, yT[0] && (OT = 0)), OT;) try {
              if (cT = 1, lT && (MT = 2 & yT[0] ? lT.return : yT[0] ? lT.throw || ((MT = lT.return) && MT.call(lT), 0) : lT.next) && !(MT = MT.call(lT, yT[1])).done) return MT;
              switch (lT = 0, MT && (yT = [2 & yT[0], MT.value]), yT[0]) {
                case 0:
                case 1:
                  MT = yT;
                  break;
                case 4:
                  return OT.label++, {
                    value: yT[1],
                    done: !1
                  };
                case 5:
                  OT.label++, lT = yT[1], yT = [0];
                  continue;
                case 7:
                  yT = OT.ops.pop(), OT.trys.pop();
                  continue;
                default:
                  if (!(MT = (MT = OT.trys).length > 0 && MT[MT.length - 1]) && (6 === yT[0] || 2 === yT[0])) {
                    OT = 0;
                    continue
                  }
                  if (3 === yT[0] && (!MT || yT[1] > MT[0] && yT[1] < MT[3])) {
                    OT.label = yT[1];
                    break
                  }
                  if (6 === yT[0] && OT.label < MT[1]) {
                    OT.label = MT[1], MT = yT;
                    break
                  }
                  if (MT && OT.label < MT[2]) {
                    OT.label = MT[2], OT.ops.push(yT);
                    break
                  }
                  MT[2] && OT.ops.pop(), OT.trys.pop();
                  continue
              }
              yT = kT.call(TT, OT)
            } catch (fT) {
              yT = [6, fT], lT = 0
            } finally {
              cT = MT = 0
            }
            if (5 & yT[0]) throw yT[1];
            return {
              value: yT[0] ? yT[1] : void 0,
              done: !0
            }
          }([yT, fT])
        }
      }
    }
    Object.create;

    function fT(TT, kT) {
      var cT = "function" === typeof Symbol && TT[Symbol.iterator];
      if (!cT) return TT;
      var lT, MT, KT = cT.call(TT),
        OT = [];
      try {
        for (;
          (void 0 === kT || kT-- > 0) && !(lT = KT.next()).done;) OT.push(lT.value)
      } catch (yT) {
        MT = {
          error: yT
        }
      } finally {
        try {
          lT && !lT.done && (cT = KT.return) && cT.call(KT)
        } finally {
          if (MT) throw MT.error
        }
      }
      return OT
    }

    function xT(TT, kT, cT) {
      if (cT || 2 === arguments.length)
        for (var lT, MT = 0, KT = kT.length; MT < KT; MT++) !lT && MT in kT || (lT || (lT = Array.prototype.slice.call(kT, 0, MT)), lT[MT] = kT[MT]);
      return TT.concat(lT || Array.prototype.slice.call(kT))
    }
    Object.create;
    "function" === typeof SuppressedError && SuppressedError;
    var IT = new Map([
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
      ["vI", "application/vnd.ms-outlook"]
    ]);

    function AT(TT, kT) {
      var cT = function(TT) {
        var kT = TT.name;
        if (kT && -1 !== kT.lastIndexOf(".") && !TT.type) {
          var cT = kT.split(".").pop().toLowerCase(),
            lT = IT.get(cT);
          lT && Object.defineProperty(TT, "type", {
            value: lT,
            writable: !1,
            configurable: !1,
            enumerable: !0
          })
        }
        return TT
      }(TT);
      if ("string" !== typeof cT.path) {
        var lT = TT.webkitRelativePath;
        Object.defineProperty(cT, "path", {
          value: "string" === typeof kT ? kT : "string" === typeof lT && lT.length > 0 ? lT : TT.name,
          writable: !1,
          configurable: !1,
          enumerable: !0
        })
      }
      return cT
    }
    var CT = [".DS_Store", "Thumbs.db"];

    function jT(TT) {
      return "object" === typeof TT && null !== TT
    }

    function vT(TT) {
      return QT(TT.target.files).map((function(TT) {
        return AT(TT)
      }))
    }

    function tT(TT) {
      return OT(this, void 0, void 0, (function() {
        return yT(this, (function(kT) {
          switch (kT.label) {
            case 0:
              return [4, Promise.all(TT.map((function(TT) {
                return TT.getFile()
              })))];
            case 1:
              return [2, kT.sent().map((function(TT) {
                return AT(TT)
              }))]
          }
        }))
      }))
    }

    function hT(TT, kT) {
      return OT(this, void 0, void 0, (function() {
        var cT;
        return yT(this, (function(lT) {
          switch (lT.label) {
            case 0:
              return TT.items ? (cT = QT(TT.items).filter((function(TT) {
                return "file" === TT.kind
              })), "drop" !== kT ? [2, cT] : [4, Promise.all(cT.map(ST))]) : [3, 2];
            case 1:
              return [2, NT(DT(lT.sent()))];
            case 2:
              return [2, NT(QT(TT.files).map((function(TT) {
                return AT(TT)
              })))]
          }
        }))
      }))
    }

    function NT(TT) {
      return TT.filter((function(TT) {
        return -1 === CT.indexOf(TT.name)
      }))
    }

    function QT(TT) {
      if (null === TT) return [];
      for (var kT = [], cT = 0; cT < TT.length; cT++) {
        var lT = TT[cT];
        kT.push(lT)
      }
      return kT
    }

    function ST(TT) {
      if ("function" !== typeof TT.webkitGetAsEntry) return aT(TT);
      var kT = TT.webkitGetAsEntry();
      return kT && kT.isDirectory ? rT(kT) : aT(TT)
    }

    function DT(TT) {
      return TT.reduce((function(TT, kT) {
        return xT(xT([], fT(TT), !1), fT(Array.isArray(kT) ? DT(kT) : [kT]), !1)
      }), [])
    }

    function aT(TT) {
      var kT = TT.getAsFile();
      if (!kT) return Promise.reject("".concat(TT, " is not a File"));
      var cT = AT(kT);
      return Promise.resolve(cT)
    }

    function FT(TT) {
      return OT(this, void 0, void 0, (function() {
        return yT(this, (function(kT) {
          return [2, TT.isDirectory ? rT(TT) : PT(TT)]
        }))
      }))
    }

    function rT(TT) {
      var kT = TT.createReader();
      return new Promise((function(TT, cT) {
        var lT = [];
        ! function MT() {
          var KT = this;
          kT.readEntries((function(kT) {
            return OT(KT, void 0, void 0, (function() {
              var KT, OT, fT;
              return yT(this, (function(yT) {
                switch (yT.label) {
                  case 0:
                    if (kT.length) return [3, 5];
                    yT.label = 1;
                  case 1:
                    return yT.trys.push([1, 3, , 4]), [4, Promise.all(lT)];
                  case 2:
                    return KT = yT.sent(), TT(KT), [3, 4];
                  case 3:
                    return OT = yT.sent(), cT(OT), [3, 4];
                  case 4:
                    return [3, 6];
                  case 5:
                    fT = Promise.all(kT.map(FT)), lT.push(fT), MT(), yT.label = 6;
                  case 6:
                    return [2]
                }
              }))
            }))
          }), (function(TT) {
            cT(TT)
          }))
        }()
      }))
    }

    function PT(TT) {
      return OT(this, void 0, void 0, (function() {
        return yT(this, (function(kT) {
          return [2, new Promise((function(kT, cT) {
            TT.file((function(cT) {
              var lT = AT(cT, TT.fullPath);
              kT(lT)
            }), (function(TT) {
              cT(TT)
            }))
          }))]
        }))
      }))
    }
    var wT = cT(4930);

    function mT(TT) {
      return function(TT) {
        if (Array.isArray(TT)) return eT(TT)
      }(TT) || function(TT) {
        if ("undefined" !== typeof Symbol && null != TT[Symbol.iterator] || null != TT["@@iterator"]) return Array.from(TT)
      }(TT) || HT(TT) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function bT(TT, kT) {
      var cT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var lT = Object.getOwnPropertySymbols(TT);
        kT && (lT = lT.filter((function(kT) {
          return Object.getOwnPropertyDescriptor(TT, kT).enumerable
        }))), cT.push.apply(cT, lT)
      }
      return cT
    }

    function zT(TT) {
      for (var kT = 1; kT < arguments.length; kT++) {
        var cT = null != arguments[kT] ? arguments[kT] : {};
        kT % 2 ? bT(Object(cT), !0).forEach((function(kT) {
          JT(TT, kT, cT[kT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(cT)) : bT(Object(cT)).forEach((function(kT) {
          Object.defineProperty(TT, kT, Object.getOwnPropertyDescriptor(cT, kT))
        }))
      }
      return TT
    }

    function JT(TT, kT, cT) {
      return kT in TT ? Object.defineProperty(TT, kT, {
        value: cT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[kT] = cT, TT
    }

    function oT(TT, kT) {
      return function(TT) {
        if (Array.isArray(TT)) return TT
      }(TT) || function(TT, kT) {
        var cT = null == TT ? null : "undefined" !== typeof Symbol && TT[Symbol.iterator] || TT["@@iterator"];
        if (null == cT) return;
        var lT, MT, KT = [],
          OT = !0,
          yT = !1;
        try {
          for (cT = cT.call(TT); !(OT = (lT = cT.next()).done) && (KT.push(lT.value), !kT || KT.length !== kT); OT = !0);
        } catch (fT) {
          yT = !0, MT = fT
        } finally {
          try {
            OT || null == cT.return || cT.return()
          } finally {
            if (yT) throw MT
          }
        }
        return KT
      }(TT, kT) || HT(TT, kT) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function HT(TT, kT) {
      if (TT) {
        if ("string" === typeof TT) return eT(TT, kT);
        var cT = Object.prototype.toString.call(TT).slice(8, -1);
        return "Object" === cT && TT.constructor && (cT = TT.constructor.name), "Map" === cT || "Set" === cT ? Array.from(TT) : "Arguments" === cT || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cT) ? eT(TT, kT) : void 0
      }
    }

    function eT(TT, kT) {
      (null == kT || kT > TT.length) && (kT = TT.length);
      for (var cT = 0, lT = new Array(kT); cT < kT; cT++) lT[cT] = TT[cT];
      return lT
    }
    var GT = "file-invalid-type",
      VT = "file-too-large",
      ET = "file-too-small",
      ZT = "too-many-files",
      uT = function(TT) {
        TT = Array.isArray(TT) && 1 === TT.length ? TT[0] : TT;
        var kT = Array.isArray(TT) ? "one of ".concat(TT.join(", ")) : TT;
        return {
          code: GT,
          message: "File type must be ".concat(kT)
        }
      },
      XT = function(TT) {
        return {
          code: VT,
          message: "File is larger than ".concat(TT, " ").concat(1 === TT ? "byte" : "bytes")
        }
      },
      dT = function(TT) {
        return {
          code: ET,
          message: "File is smaller than ".concat(TT, " ").concat(1 === TT ? "byte" : "bytes")
        }
      },
      LT = {
        code: ZT,
        message: "Too many files"
      };

    function RT(TT, kT) {
      var cT = "application/x-moz-file" === TT.type || (0, wT.d)(TT, kT);
      return [cT, cT ? null : uT(kT)]
    }

    function gT(TT, kT, cT) {
      if (UT(TT.size))
        if (UT(kT) && UT(cT)) {
          if (TT.size > cT) return [!1, XT(cT)];
          if (TT.size < kT) return [!1, dT(kT)]
        } else {
          if (UT(kT) && TT.size < kT) return [!1, dT(kT)];
          if (UT(cT) && TT.size > cT) return [!1, XT(cT)]
        } return [!0, null]
    }

    function UT(TT) {
      return void 0 !== TT && null !== TT
    }

    function YT(TT) {
      return "function" === typeof TT.isPropagationStopped ? TT.isPropagationStopped() : "undefined" !== typeof TT.cancelBubble && TT.cancelBubble
    }

    function BT(TT) {
      return TT.dataTransfer ? Array.prototype.some.call(TT.dataTransfer.types, (function(TT) {
        return "Files" === TT || "application/x-moz-file" === TT
      })) : !!TT.target && !!TT.target.files
    }

    function WT(TT) {
      TT.preventDefault()
    }

    function nT() {
      for (var TT = arguments.length, kT = new Array(TT), cT = 0; cT < TT; cT++) kT[cT] = arguments[cT];
      return function(TT) {
        for (var cT = arguments.length, lT = new Array(cT > 1 ? cT - 1 : 0), MT = 1; MT < cT; MT++) lT[MT - 1] = arguments[MT];
        return kT.some((function(kT) {
          return !YT(TT) && kT && kT.apply(void 0, [TT].concat(lT)), YT(TT)
        }))
      }
    }

    function pT(TT) {
      return "audio/*" === TT || "video/*" === TT || "image/*" === TT || "text/*" === TT || /\w+\/[-+.\w]+/g.test(TT)
    }

    function iT(TT) {
      return /^.*\.[\w]+$/.test(TT)
    }
    var qT = ["children"],
      sT = ["open"],
      Tk = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
      kk = ["refKey", "onChange", "onClick"];

    function ck(TT) {
      return function(TT) {
        if (Array.isArray(TT)) return Kk(TT)
      }(TT) || function(TT) {
        if ("undefined" !== typeof Symbol && null != TT[Symbol.iterator] || null != TT["@@iterator"]) return Array.from(TT)
      }(TT) || Mk(TT) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function lk(TT, kT) {
      return function(TT) {
        if (Array.isArray(TT)) return TT
      }(TT) || function(TT, kT) {
        var cT = null == TT ? null : "undefined" !== typeof Symbol && TT[Symbol.iterator] || TT["@@iterator"];
        if (null == cT) return;
        var lT, MT, KT = [],
          OT = !0,
          yT = !1;
        try {
          for (cT = cT.call(TT); !(OT = (lT = cT.next()).done) && (KT.push(lT.value), !kT || KT.length !== kT); OT = !0);
        } catch (fT) {
          yT = !0, MT = fT
        } finally {
          try {
            OT || null == cT.return || cT.return()
          } finally {
            if (yT) throw MT
          }
        }
        return KT
      }(TT, kT) || Mk(TT, kT) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Mk(TT, kT) {
      if (TT) {
        if ("string" === typeof TT) return Kk(TT, kT);
        var cT = Object.prototype.toString.call(TT).slice(8, -1);
        return "Object" === cT && TT.constructor && (cT = TT.constructor.name), "Map" === cT || "Set" === cT ? Array.from(TT) : "Arguments" === cT || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cT) ? Kk(TT, kT) : void 0
      }
    }

    function Kk(TT, kT) {
      (null == kT || kT > TT.length) && (kT = TT.length);
      for (var cT = 0, lT = new Array(kT); cT < kT; cT++) lT[cT] = TT[cT];
      return lT
    }

    function Ok(TT, kT) {
      var cT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var lT = Object.getOwnPropertySymbols(TT);
        kT && (lT = lT.filter((function(kT) {
          return Object.getOwnPropertyDescriptor(TT, kT).enumerable
        }))), cT.push.apply(cT, lT)
      }
      return cT
    }

    function yk(TT) {
      for (var kT = 1; kT < arguments.length; kT++) {
        var cT = null != arguments[kT] ? arguments[kT] : {};
        kT % 2 ? Ok(Object(cT), !0).forEach((function(kT) {
          fk(TT, kT, cT[kT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(cT)) : Ok(Object(cT)).forEach((function(kT) {
          Object.defineProperty(TT, kT, Object.getOwnPropertyDescriptor(cT, kT))
        }))
      }
      return TT
    }

    function fk(TT, kT, cT) {
      return kT in TT ? Object.defineProperty(TT, kT, {
        value: cT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[kT] = cT, TT
    }

    function xk(TT, kT) {
      if (null == TT) return {};
      var cT, lT, MT = function(TT, kT) {
        if (null == TT) return {};
        var cT, lT, MT = {},
          KT = Object.keys(TT);
        for (lT = 0; lT < KT.length; lT++) cT = KT[lT], kT.indexOf(cT) >= 0 || (MT[cT] = TT[cT]);
        return MT
      }(TT, kT);
      if (Object.getOwnPropertySymbols) {
        var KT = Object.getOwnPropertySymbols(TT);
        for (lT = 0; lT < KT.length; lT++) cT = KT[lT], kT.indexOf(cT) >= 0 || Object.prototype.propertyIsEnumerable.call(TT, cT) && (MT[cT] = TT[cT])
      }
      return MT
    }
    var Ik = (0, lT.forwardRef)((function(TT, kT) {
      var cT = TT.children,
        MT = jk(xk(TT, qT)),
        KT = MT.open,
        OT = xk(MT, sT);
      return (0, lT.useImperativeHandle)(kT, (function() {
        return {
          open: KT
        }
      }), [KT]), lT.createElement(lT.Fragment, null, cT(yk(yk({}, OT), {}, {
        open: KT
      })))
    }));
    Ik.displayName = "Dropzone";
    var Ak = {
      disabled: !1,
      getFilesFromEvent: function(TT) {
        return OT(this, void 0, void 0, (function() {
          return yT(this, (function(kT) {
            return jT(TT) && jT(TT.dataTransfer) ? [2, hT(TT.dataTransfer, TT.type)] : function(TT) {
              return jT(TT) && jT(TT.target)
            }(TT) ? [2, vT(TT)] : Array.isArray(TT) && TT.every((function(TT) {
              return "getFile" in TT && "function" === typeof TT.getFile
            })) ? [2, tT(TT)] : [2, []]
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
    Ik.defaultProps = Ak, Ik.propTypes = {
      children: KT().func,
      accept: KT().objectOf(KT().arrayOf(KT().string)),
      multiple: KT().bool,
      preventDropOnDocument: KT().bool,
      noClick: KT().bool,
      noKeyboard: KT().bool,
      noDrag: KT().bool,
      noDragEventsBubbling: KT().bool,
      minSize: KT().number,
      maxSize: KT().number,
      maxFiles: KT().number,
      disabled: KT().bool,
      getFilesFromEvent: KT().func,
      onFileDialogCancel: KT().func,
      onFileDialogOpen: KT().func,
      useFsAccessApi: KT().bool,
      autoFocus: KT().bool,
      onDragEnter: KT().func,
      onDragLeave: KT().func,
      onDragOver: KT().func,
      onDrop: KT().func,
      onDropAccepted: KT().func,
      onDropRejected: KT().func,
      onError: KT().func,
      validator: KT().func
    };
    var Ck = {
      Zm: !1,
      isFileDialogActive: !1,
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1,
      acceptedFiles: [],
      fileRejections: []
    };

    function jk() {
      var TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        kT = yk(yk({}, Ak), TT),
        cT = kT.accept,
        MT = kT.disabled,
        KT = kT.getFilesFromEvent,
        OT = kT.maxSize,
        yT = kT.minSize,
        fT = kT.multiple,
        xT = kT.maxFiles,
        IT = kT.onDragEnter,
        AT = kT.onDragLeave,
        CT = kT.onDragOver,
        jT = kT.onDrop,
        vT = kT.onDropAccepted,
        tT = kT.onDropRejected,
        hT = kT.onFileDialogCancel,
        NT = kT.onFileDialogOpen,
        QT = kT.useFsAccessApi,
        ST = kT.autoFocus,
        DT = kT.preventDropOnDocument,
        aT = kT.noClick,
        FT = kT.noKeyboard,
        rT = kT.noDrag,
        PT = kT.noDragEventsBubbling,
        wT = kT.onError,
        bT = kT.validator,
        HT = (0, lT.useMemo)((function() {
          return function(TT) {
            if (UT(TT)) return Object.entries(TT).reduce((function(TT, kT) {
              var cT = oT(kT, 2),
                lT = cT[0],
                MT = cT[1];
              return [].concat(mT(TT), [lT], mT(MT))
            }), []).filter((function(TT) {
              return pT(TT) || iT(TT)
            })).join(",")
          }(cT)
        }), [cT]),
        eT = (0, lT.useMemo)((function() {
          return function(TT) {
            return UT(TT) ? [{
              description: "Files",
              accept: Object.entries(TT).filter((function(TT) {
                var kT = oT(TT, 2),
                  cT = kT[0],
                  lT = kT[1],
                  MT = !0;
                return pT(cT) || (console.warn('Skipped "'.concat(cT, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), MT = !1), Array.isArray(lT) && lT.every(iT) || (console.warn('Skipped "'.concat(cT, '" because an invalid file extension was provided.')), MT = !1), MT
              })).reduce((function(TT, kT) {
                var cT = oT(kT, 2),
                  lT = cT[0],
                  MT = cT[1];
                return zT(zT({}, TT), {}, JT({}, lT, MT))
              }), {})
            }] : TT
          }(cT)
        }), [cT]),
        GT = (0, lT.useMemo)((function() {
          return "function" === typeof NT ? NT : tk
        }), [NT]),
        VT = (0, lT.useMemo)((function() {
          return "function" === typeof hT ? hT : tk
        }), [hT]),
        ET = (0, lT.useRef)(null),
        ZT = (0, lT.useRef)(null),
        uT = lk((0, lT.useReducer)(vk, Ck), 2),
        XT = uT[0],
        dT = uT[1],
        qT = XT.Zm,
        sT = XT.isFileDialogActive,
        Mk = (0, lT.useRef)("undefined" !== typeof window && window.isSecureContext && QT && "showOpenFilePicker" in window),
        Kk = function() {
          !Mk.current && sT && setTimeout((function() {
            ZT.current && (ZT.current.files.length || (dT({
              type: "closeDialog"
            }), VT()))
          }), 300)
        };
      (0, lT.useEffect)((function() {
        return window.addEventListener("focus", Kk, !1),
          function() {
            window.removeEventListener("focus", Kk, !1)
          }
      }), [ZT, sT, VT, Mk]);
      var Ok = (0, lT.useRef)([]),
        Ik = function(TT) {
          ET.current && ET.current.contains(TT.target) || (TT.preventDefault(), Ok.current = [])
        };
      (0, lT.useEffect)((function() {
        return DT && (document.addEventListener("dragover", WT, !1), document.addEventListener("drop", Ik, !1)),
          function() {
            DT && (document.removeEventListener("dragover", WT), document.removeEventListener("drop", Ik))
          }
      }), [ET, DT]), (0, lT.useEffect)((function() {
        return !MT && ST && ET.current && ET.current.focus(),
          function() {}
      }), [ET, ST, MT]);
      var jk = (0, lT.useCallback)((function(TT) {
          wT ? wT(TT) : console.error(TT)
        }), [wT]),
        hk = (0, lT.useCallback)((function(TT) {
          TT.preventDefault(), TT.persist(), Jk(TT), Ok.current = [].concat(ck(Ok.current), [TT.target]), BT(TT) && Promise.resolve(KT(TT)).then((function(kT) {
            if (!YT(TT) || PT) {
              var cT = kT.length,
                lT = cT > 0 && function(TT) {
                  var kT = TT.files,
                    cT = TT.accept,
                    lT = TT.minSize,
                    MT = TT.maxSize,
                    KT = TT.multiple,
                    OT = TT.maxFiles,
                    yT = TT.validator;
                  return !(!KT && kT.length > 1 || KT && OT >= 1 && kT.length > OT) && kT.every((function(TT) {
                    var kT = oT(RT(TT, cT), 1)[0],
                      KT = oT(gT(TT, lT, MT), 1)[0],
                      OT = yT ? yT(TT) : null;
                    return kT && KT && !OT
                  }))
                }({
                  files: kT,
                  accept: HT,
                  minSize: yT,
                  maxSize: OT,
                  multiple: fT,
                  maxFiles: xT,
                  validator: bT
                });
              dT({
                isDragAccept: lT,
                isDragReject: cT > 0 && !lT,
                isDragActive: !0,
                type: "setDraggedFiles"
              }), IT && IT(TT)
            }
          })).catch((function(TT) {
            return jk(TT)
          }))
        }), [KT, IT, jk, PT, HT, yT, OT, fT, xT, bT]),
        Nk = (0, lT.useCallback)((function(TT) {
          TT.preventDefault(), TT.persist(), Jk(TT);
          var kT = BT(TT);
          if (kT && TT.dataTransfer) try {
            TT.dataTransfer.dropEffect = "copy"
          } catch (cT) {}
          return kT && CT && CT(TT), !1
        }), [CT, PT]),
        Qk = (0, lT.useCallback)((function(TT) {
          TT.preventDefault(), TT.persist(), Jk(TT);
          var kT = Ok.current.filter((function(TT) {
              return ET.current && ET.current.contains(TT)
            })),
            cT = kT.indexOf(TT.target); - 1 !== cT && kT.splice(cT, 1), Ok.current = kT, kT.length > 0 || (dT({
            type: "setDraggedFiles",
            isDragActive: !1,
            isDragAccept: !1,
            isDragReject: !1
          }), BT(TT) && AT && AT(TT))
        }), [ET, AT, PT]),
        Sk = (0, lT.useCallback)((function(TT, kT) {
          var cT = [],
            lT = [];
          TT.forEach((function(TT) {
            var kT = lk(RT(TT, HT), 2),
              MT = kT[0],
              KT = kT[1],
              fT = lk(gT(TT, yT, OT), 2),
              xT = fT[0],
              IT = fT[1],
              AT = bT ? bT(TT) : null;
            if (MT && xT && !AT) cT.push(TT);
            else {
              var CT = [KT, IT];
              AT && (CT = CT.concat(AT)), lT.push({
                file: TT,
                errors: CT.filter((function(TT) {
                  return TT
                }))
              })
            }
          })), (!fT && cT.length > 1 || fT && xT >= 1 && cT.length > xT) && (cT.forEach((function(TT) {
            lT.push({
              file: TT,
              errors: [LT]
            })
          })), cT.splice(0)), dT({
            acceptedFiles: cT,
            fileRejections: lT,
            type: "setFiles"
          }), jT && jT(cT, lT, kT), lT.length > 0 && tT && tT(lT, kT), cT.length > 0 && vT && vT(cT, kT)
        }), [dT, fT, HT, yT, OT, xT, jT, vT, tT, bT]),
        Dk = (0, lT.useCallback)((function(TT) {
          TT.preventDefault(), TT.persist(), Jk(TT), Ok.current = [], BT(TT) && Promise.resolve(KT(TT)).then((function(kT) {
            YT(TT) && !PT || Sk(kT, TT)
          })).catch((function(TT) {
            return jk(TT)
          })), dT({
            type: "reset"
          })
        }), [KT, Sk, jk, PT]),
        ak = (0, lT.useCallback)((function() {
          if (Mk.current) {
            dT({
              type: "openDialog"
            }), GT();
            var TT = {
              multiple: fT,
              types: eT
            };
            window.showOpenFilePicker(TT).then((function(TT) {
              return KT(TT)
            })).then((function(TT) {
              Sk(TT, null), dT({
                type: "closeDialog"
              })
            })).catch((function(TT) {
              var kT;
              (kT = TT) instanceof DOMException && ("AbortError" === kT.name || kT.code === kT.ABORT_ERR) ? (VT(TT), dT({
                type: "closeDialog"
              })) : ! function(TT) {
                return TT instanceof DOMException && ("SecurityError" === TT.name || TT.code === TT.SECURITY_ERR)
              }(TT) ? jk(TT) : (Mk.current = !1, ZT.current ? (ZT.current.value = null, ZT.current.click()) : jk(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))
            }))
          } else ZT.current && (dT({
            type: "openDialog"
          }), GT(), ZT.current.value = null, ZT.current.click())
        }), [dT, GT, VT, QT, Sk, jk, eT, fT]),
        Fk = (0, lT.useCallback)((function(TT) {
          ET.current && ET.current.isEqualNode(TT.target) && (" " !== TT.key && "Enter" !== TT.key && 32 !== TT.keyCode && 13 !== TT.keyCode || (TT.preventDefault(), ak()))
        }), [ET, ak]),
        rk = (0, lT.useCallback)((function() {
          dT({
            type: "focus"
          })
        }), []),
        Pk = (0, lT.useCallback)((function() {
          dT({
            type: "blur"
          })
        }), []),
        wk = (0, lT.useCallback)((function() {
          aT || (! function() {
            var TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
            return function(TT) {
              return -1 !== TT.indexOf("MSIE") || -1 !== TT.indexOf("Trident/")
            }(TT) || function(TT) {
              return -1 !== TT.indexOf("Edge/")
            }(TT)
          }() ? ak() : setTimeout(ak, 0))
        }), [aT, ak]),
        mk = function(TT) {
          return MT ? null : TT
        },
        bk = function(TT) {
          return FT ? null : mk(TT)
        },
        zk = function(TT) {
          return rT ? null : mk(TT)
        },
        Jk = function(TT) {
          PT && TT.stopPropagation()
        },
        Hk = (0, lT.useMemo)((function() {
          return function() {
            var TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              kT = TT.refKey,
              cT = void 0 === kT ? "ref" : kT,
              lT = TT.role,
              KT = TT.onKeyDown,
              OT = TT.onFocus,
              yT = TT.onBlur,
              fT = TT.onClick,
              xT = TT.onDragEnter,
              IT = TT.onDragOver,
              AT = TT.onDragLeave,
              CT = TT.onDrop,
              jT = xk(TT, Tk);
            return yk(yk(fk({
              onKeyDown: bk(nT(KT, Fk)),
              onFocus: bk(nT(OT, rk)),
              onBlur: bk(nT(yT, Pk)),
              onClick: mk(nT(fT, wk)),
              onDragEnter: zk(nT(xT, hk)),
              onDragOver: zk(nT(IT, Nk)),
              onDragLeave: zk(nT(AT, Qk)),
              onDrop: zk(nT(CT, Dk)),
              role: "string" === typeof lT && "" !== lT ? lT : "presentation"
            }, cT, ET), MT || FT ? {} : {
              tabIndex: 0
            }), jT)
          }
        }), [ET, Fk, rk, Pk, wk, hk, Nk, Qk, Dk, FT, rT, MT]),
        ek = (0, lT.useCallback)((function(TT) {
          TT.stopPropagation()
        }), []),
        Gk = (0, lT.useMemo)((function() {
          return function() {
            var TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              kT = TT.refKey,
              cT = void 0 === kT ? "ref" : kT,
              lT = TT.onChange,
              MT = TT.onClick,
              KT = xk(TT, kk);
            return yk(yk({}, fk({
              accept: HT,
              multiple: fT,
              type: "file",
              style: {
                display: "none"
              },
              onChange: mk(nT(lT, Dk)),
              onClick: mk(nT(MT, ek)),
              tabIndex: -1
            }, cT, ZT)), KT)
          }
        }), [ZT, cT, fT, Dk, MT]);
      return yk(yk({}, XT), {}, {
        Zm: qT && !MT,
        getRootProps: Hk,
        getInputProps: Gk,
        rootRef: ET,
        inputRef: ZT,
        open: mk(ak)
      })
    }

    function vk(TT, kT) {
      switch (kT.type) {
        case "focus":
          return yk(yk({}, TT), {}, {
            Zm: !0
          });
        case "blur":
          return yk(yk({}, TT), {}, {
            Zm: !1
          });
        case "openDialog":
          return yk(yk({}, Ck), {}, {
            isFileDialogActive: !0
          });
        case "closeDialog":
          return yk(yk({}, TT), {}, {
            isFileDialogActive: !1
          });
        case "setDraggedFiles":
          return yk(yk({}, TT), {}, {
            isDragActive: kT.isDragActive,
            isDragAccept: kT.isDragAccept,
            isDragReject: kT.isDragReject
          });
        case "setFiles":
          return yk(yk({}, TT), {}, {
            acceptedFiles: kT.acceptedFiles,
            fileRejections: kT.fileRejections
          });
        case "reset":
          return yk({}, Ck);
        default:
          return TT
      }
    }

    function tk() {}
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);