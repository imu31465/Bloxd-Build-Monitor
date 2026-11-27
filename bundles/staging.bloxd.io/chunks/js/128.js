export const id = 128;
export const ids = [128];
export const modules = {
  5890: (WW, iW) => {
    iW.b = function(WW, iW) {
      if (WW && iW) {
        var OW = Array.isArray(iW) ? iW : iW.split(","),
          mW = WW.name || "",
          EW = (WW.type || "").toLowerCase(),
          NW = EW.replace(/\/.*$/, "");
        return OW.some((function(WW) {
          var iW = WW.trim().toLowerCase();
          return "." === iW.charAt(0) ? mW.toLowerCase().endsWith(iW) : iW.endsWith("/*") ? NW === iW.replace(/\/.*$/, "") : EW === iW
        }))
      }
      return !0
    }
  },
  5864: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => li
    });
    var mW = OW(62),
      EW = OW(5868),
      NW = OW.n(EW);

    function PW(WW, iW, OW, mW) {
      return new(OW || (OW = Promise))((function(EW, NW) {
        function PW(WW) {
          try {
            cW(mW.next(WW))
          } catch (iW) {
            NW(iW)
          }
        }

        function LW(WW) {
          try {
            cW(mW.throw(WW))
          } catch (iW) {
            NW(iW)
          }
        }

        function cW(WW) {
          var iW;
          WW.done ? EW(WW.value) : (iW = WW.value, iW instanceof OW ? iW : new OW((function(WW) {
            WW(iW)
          }))).then(PW, LW)
        }
        cW((mW = mW.apply(WW, iW || [])).next())
      }))
    }

    function LW(WW, iW) {
      var OW, mW, EW, NW, PW = {
        label: 0,
        sent: function() {
          if (1 & EW[0]) throw EW[1];
          return EW[1]
        },
        trys: [],
        ops: []
      };
      return NW = {
        next: LW(0),
        throw: LW(1),
        return: LW(2)
      }, "function" === typeof Symbol && (NW[Symbol.iterator] = function() {
        return this
      }), NW;

      function LW(LW) {
        return function(cW) {
          return function(LW) {
            if (OW) throw new TypeError("Generator is already executing.");
            for (; NW && (NW = 0, LW[0] && (PW = 0)), PW;) try {
              if (OW = 1, mW && (EW = 2 & LW[0] ? mW.return : LW[0] ? mW.throw || ((EW = mW.return) && EW.call(mW), 0) : mW.next) && !(EW = EW.call(mW, LW[1])).done) return EW;
              switch (mW = 0, EW && (LW = [2 & LW[0], EW.value]), LW[0]) {
                case 0:
                case 1:
                  EW = LW;
                  break;
                case 4:
                  return PW.label++, {
                    value: LW[1],
                    done: !1
                  };
                case 5:
                  PW.label++, mW = LW[1], LW = [0];
                  continue;
                case 7:
                  LW = PW.ops.pop(), PW.trys.pop();
                  continue;
                default:
                  if (!(EW = (EW = PW.trys).length > 0 && EW[EW.length - 1]) && (6 === LW[0] || 2 === LW[0])) {
                    PW = 0;
                    continue
                  }
                  if (3 === LW[0] && (!EW || LW[1] > EW[0] && LW[1] < EW[3])) {
                    PW.label = LW[1];
                    break
                  }
                  if (6 === LW[0] && PW.label < EW[1]) {
                    PW.label = EW[1], EW = LW;
                    break
                  }
                  if (EW && PW.label < EW[2]) {
                    PW.label = EW[2], PW.ops.push(LW);
                    break
                  }
                  EW[2] && PW.ops.pop(), PW.trys.pop();
                  continue
              }
              LW = iW.call(WW, PW)
            } catch (cW) {
              LW = [6, cW], mW = 0
            } finally {
              OW = EW = 0
            }
            if (5 & LW[0]) throw LW[1];
            return {
              value: LW[0] ? LW[1] : void 0,
              done: !0
            }
          }([LW, cW])
        }
      }
    }
    Object.create;

    function cW(WW, iW) {
      var OW = "function" === typeof Symbol && WW[Symbol.iterator];
      if (!OW) return WW;
      var mW, EW, NW = OW.call(WW),
        PW = [];
      try {
        for (;
          (void 0 === iW || iW-- > 0) && !(mW = NW.next()).done;) PW.push(mW.value)
      } catch (LW) {
        EW = {
          error: LW
        }
      } finally {
        try {
          mW && !mW.done && (OW = NW.return) && OW.call(NW)
        } finally {
          if (EW) throw EW.error
        }
      }
      return PW
    }

    function wW(WW, iW, OW) {
      if (OW || 2 === arguments.length)
        for (var mW, EW = 0, NW = iW.length; EW < NW; EW++) !mW && EW in iW || (mW || (mW = Array.prototype.slice.call(iW, 0, EW)), mW[EW] = iW[EW]);
      return WW.concat(mW || Array.prototype.slice.call(iW))
    }
    Object.create;
    "function" === typeof SuppressedError && SuppressedError;
    var tW = new Map([
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
      ["tP", "application/vnd.ms-outlook"]
    ]);

    function ZW(WW, iW) {
      var OW = function(WW) {
        var iW = WW.name;
        if (iW && -1 !== iW.lastIndexOf(".") && !WW.type) {
          var OW = iW.split(".").pop().toLowerCase(),
            mW = tW.get(OW);
          mW && Object.defineProperty(WW, "type", {
            value: mW,
            writable: !1,
            configurable: !1,
            enumerable: !0
          })
        }
        return WW
      }(WW);
      if ("string" !== typeof OW.path) {
        var mW = WW.webkitRelativePath;
        Object.defineProperty(OW, "path", {
          value: "string" === typeof iW ? iW : "string" === typeof mW && mW.length > 0 ? mW : WW.name,
          writable: !1,
          configurable: !1,
          enumerable: !0
        })
      }
      return OW
    }
    var xW = [".DS_Store", "Thumbs.db"];

    function lW(WW) {
      return "object" === typeof WW && null !== WW
    }

    function AW(WW) {
      return kW(WW.target.files).map((function(WW) {
        return ZW(WW)
      }))
    }

    function bW(WW) {
      return PW(this, void 0, void 0, (function() {
        return LW(this, (function(iW) {
          switch (iW.label) {
            case 0:
              return [4, Promise.all(WW.map((function(WW) {
                return WW.getFile()
              })))];
            case 1:
              return [2, iW.sent().map((function(WW) {
                return ZW(WW)
              }))]
          }
        }))
      }))
    }

    function jW(WW, iW) {
      return PW(this, void 0, void 0, (function() {
        var OW;
        return LW(this, (function(mW) {
          switch (mW.label) {
            case 0:
              return WW.items ? (OW = kW(WW.items).filter((function(WW) {
                return "file" === WW.kind
              })), "drop" !== iW ? [2, OW] : [4, Promise.all(OW.map(sW))]) : [3, 2];
            case 1:
              return [2, UW(MW(mW.sent()))];
            case 2:
              return [2, UW(kW(WW.files).map((function(WW) {
                return ZW(WW)
              })))]
          }
        }))
      }))
    }

    function UW(WW) {
      return WW.filter((function(WW) {
        return -1 === xW.indexOf(WW.name)
      }))
    }

    function kW(WW) {
      if (null === WW) return [];
      for (var iW = [], OW = 0; OW < WW.length; OW++) {
        var mW = WW[OW];
        iW.push(mW)
      }
      return iW
    }

    function sW(WW) {
      if ("function" !== typeof WW.webkitGetAsEntry) return KW(WW);
      var iW = WW.webkitGetAsEntry();
      return iW && iW.isDirectory ? YW(iW) : KW(WW)
    }

    function MW(WW) {
      return WW.reduce((function(WW, iW) {
        return wW(wW([], cW(WW), !1), cW(Array.isArray(iW) ? MW(iW) : [iW]), !1)
      }), [])
    }

    function KW(WW) {
      var iW = WW.getAsFile();
      if (!iW) return Promise.reject("".concat(WW, " is not a File"));
      var OW = ZW(iW);
      return Promise.resolve(OW)
    }

    function SW(WW) {
      return PW(this, void 0, void 0, (function() {
        return LW(this, (function(iW) {
          return [2, WW.isDirectory ? YW(WW) : yW(WW)]
        }))
      }))
    }

    function YW(WW) {
      var iW = WW.createReader();
      return new Promise((function(WW, OW) {
        var mW = [];
        ! function EW() {
          var NW = this;
          iW.readEntries((function(iW) {
            return PW(NW, void 0, void 0, (function() {
              var NW, PW, cW;
              return LW(this, (function(LW) {
                switch (LW.label) {
                  case 0:
                    if (iW.length) return [3, 5];
                    LW.label = 1;
                  case 1:
                    return LW.trys.push([1, 3, , 4]), [4, Promise.all(mW)];
                  case 2:
                    return NW = LW.sent(), WW(NW), [3, 4];
                  case 3:
                    return PW = LW.sent(), OW(PW), [3, 4];
                  case 4:
                    return [3, 6];
                  case 5:
                    cW = Promise.all(iW.map(SW)), mW.push(cW), EW(), LW.label = 6;
                  case 6:
                    return [2]
                }
              }))
            }))
          }), (function(WW) {
            OW(WW)
          }))
        }()
      }))
    }

    function yW(WW) {
      return PW(this, void 0, void 0, (function() {
        return LW(this, (function(iW) {
          return [2, new Promise((function(iW, OW) {
            WW.file((function(OW) {
              var mW = ZW(OW, WW.fullPath);
              iW(mW)
            }), (function(WW) {
              OW(WW)
            }))
          }))]
        }))
      }))
    }
    var TW = OW(5890);

    function JW(WW) {
      return function(WW) {
        if (Array.isArray(WW)) return dW(WW)
      }(WW) || function(WW) {
        if ("undefined" !== typeof Symbol && null != WW[Symbol.iterator] || null != WW["@@iterator"]) return Array.from(WW)
      }(WW) || oW(WW) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function hW(WW, iW) {
      var OW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var mW = Object.getOwnPropertySymbols(WW);
        iW && (mW = mW.filter((function(iW) {
          return Object.getOwnPropertyDescriptor(WW, iW).enumerable
        }))), OW.push.apply(OW, mW)
      }
      return OW
    }

    function HW(WW) {
      for (var iW = 1; iW < arguments.length; iW++) {
        var OW = null != arguments[iW] ? arguments[iW] : {};
        iW % 2 ? hW(Object(OW), !0).forEach((function(iW) {
          nW(WW, iW, OW[iW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(OW)) : hW(Object(OW)).forEach((function(iW) {
          Object.defineProperty(WW, iW, Object.getOwnPropertyDescriptor(OW, iW))
        }))
      }
      return WW
    }

    function nW(WW, iW, OW) {
      return iW in WW ? Object.defineProperty(WW, iW, {
        value: OW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[iW] = OW, WW
    }

    function uW(WW, iW) {
      return function(WW) {
        if (Array.isArray(WW)) return WW
      }(WW) || function(WW, iW) {
        var OW = null == WW ? null : "undefined" !== typeof Symbol && WW[Symbol.iterator] || WW["@@iterator"];
        if (null == OW) return;
        var mW, EW, NW = [],
          PW = !0,
          LW = !1;
        try {
          for (OW = OW.call(WW); !(PW = (mW = OW.next()).done) && (NW.push(mW.value), !iW || NW.length !== iW); PW = !0);
        } catch (cW) {
          LW = !0, EW = cW
        } finally {
          try {
            PW || null == OW.return || OW.return()
          } finally {
            if (LW) throw EW
          }
        }
        return NW
      }(WW, iW) || oW(WW, iW) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function oW(WW, iW) {
      if (WW) {
        if ("string" === typeof WW) return dW(WW, iW);
        var OW = Object.prototype.toString.call(WW).slice(8, -1);
        return "Object" === OW && WW.constructor && (OW = WW.constructor.name), "Map" === OW || "Set" === OW ? Array.from(WW) : "Arguments" === OW || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(OW) ? dW(WW, iW) : void 0
      }
    }

    function dW(WW, iW) {
      (null == iW || iW > WW.length) && (iW = WW.length);
      for (var OW = 0, mW = new Array(iW); OW < iW; OW++) mW[OW] = WW[OW];
      return mW
    }
    var eW = "file-invalid-type",
      vW = "file-too-large",
      gW = "file-too-small",
      DW = "too-many-files",
      VW = function(WW) {
        WW = Array.isArray(WW) && 1 === WW.length ? WW[0] : WW;
        var iW = Array.isArray(WW) ? "one of ".concat(WW.join(", ")) : WW;
        return {
          code: eW,
          message: "File type must be ".concat(iW)
        }
      },
      pW = function(WW) {
        return {
          code: vW,
          message: "File is larger than ".concat(WW, " ").concat(1 === WW ? "byte" : "bytes")
        }
      },
      fW = function(WW) {
        return {
          code: gW,
          message: "File is smaller than ".concat(WW, " ").concat(1 === WW ? "byte" : "bytes")
        }
      },
      CW = {
        code: DW,
        message: "Too many files"
      };

    function XW(WW, iW) {
      var OW = "application/x-moz-file" === WW.type || (0, TW.b)(WW, iW);
      return [OW, OW ? null : VW(iW)]
    }

    function BW(WW, iW, OW) {
      if (qW(WW.size))
        if (qW(iW) && qW(OW)) {
          if (WW.size > OW) return [!1, pW(OW)];
          if (WW.size < iW) return [!1, fW(iW)]
        } else {
          if (qW(iW) && WW.size < iW) return [!1, fW(iW)];
          if (qW(OW) && WW.size > OW) return [!1, pW(OW)]
        } return [!0, null]
    }

    function qW(WW) {
      return void 0 !== WW && null !== WW
    }

    function RW(WW) {
      return "function" === typeof WW.isPropagationStopped ? WW.isPropagationStopped() : "undefined" !== typeof WW.cancelBubble && WW.cancelBubble
    }

    function GW(WW) {
      return WW.dataTransfer ? Array.prototype.some.call(WW.dataTransfer.types, (function(WW) {
        return "Files" === WW || "application/x-moz-file" === WW
      })) : !!WW.target && !!WW.target.files
    }

    function IW(WW) {
      WW.preventDefault()
    }

    function aW() {
      for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
      return function(WW) {
        for (var OW = arguments.length, mW = new Array(OW > 1 ? OW - 1 : 0), EW = 1; EW < OW; EW++) mW[EW - 1] = arguments[EW];
        return iW.some((function(iW) {
          return !RW(WW) && iW && iW.apply(void 0, [WW].concat(mW)), RW(WW)
        }))
      }
    }

    function rW(WW) {
      return "audio/*" === WW || "video/*" === WW || "image/*" === WW || "text/*" === WW || /\w+\/[-+.\w]+/g.test(WW)
    }

    function zW(WW) {
      return /^.*\.[\w]+$/.test(WW)
    }
    var FW = ["children"],
      QW = ["open"],
      Wi = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
      ii = ["refKey", "onChange", "onClick"];

    function Oi(WW) {
      return function(WW) {
        if (Array.isArray(WW)) return Ni(WW)
      }(WW) || function(WW) {
        if ("undefined" !== typeof Symbol && null != WW[Symbol.iterator] || null != WW["@@iterator"]) return Array.from(WW)
      }(WW) || Ei(WW) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function mi(WW, iW) {
      return function(WW) {
        if (Array.isArray(WW)) return WW
      }(WW) || function(WW, iW) {
        var OW = null == WW ? null : "undefined" !== typeof Symbol && WW[Symbol.iterator] || WW["@@iterator"];
        if (null == OW) return;
        var mW, EW, NW = [],
          PW = !0,
          LW = !1;
        try {
          for (OW = OW.call(WW); !(PW = (mW = OW.next()).done) && (NW.push(mW.value), !iW || NW.length !== iW); PW = !0);
        } catch (cW) {
          LW = !0, EW = cW
        } finally {
          try {
            PW || null == OW.return || OW.return()
          } finally {
            if (LW) throw EW
          }
        }
        return NW
      }(WW, iW) || Ei(WW, iW) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Ei(WW, iW) {
      if (WW) {
        if ("string" === typeof WW) return Ni(WW, iW);
        var OW = Object.prototype.toString.call(WW).slice(8, -1);
        return "Object" === OW && WW.constructor && (OW = WW.constructor.name), "Map" === OW || "Set" === OW ? Array.from(WW) : "Arguments" === OW || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(OW) ? Ni(WW, iW) : void 0
      }
    }

    function Ni(WW, iW) {
      (null == iW || iW > WW.length) && (iW = WW.length);
      for (var OW = 0, mW = new Array(iW); OW < iW; OW++) mW[OW] = WW[OW];
      return mW
    }

    function Pi(WW, iW) {
      var OW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var mW = Object.getOwnPropertySymbols(WW);
        iW && (mW = mW.filter((function(iW) {
          return Object.getOwnPropertyDescriptor(WW, iW).enumerable
        }))), OW.push.apply(OW, mW)
      }
      return OW
    }

    function Li(WW) {
      for (var iW = 1; iW < arguments.length; iW++) {
        var OW = null != arguments[iW] ? arguments[iW] : {};
        iW % 2 ? Pi(Object(OW), !0).forEach((function(iW) {
          ci(WW, iW, OW[iW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(OW)) : Pi(Object(OW)).forEach((function(iW) {
          Object.defineProperty(WW, iW, Object.getOwnPropertyDescriptor(OW, iW))
        }))
      }
      return WW
    }

    function ci(WW, iW, OW) {
      return iW in WW ? Object.defineProperty(WW, iW, {
        value: OW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[iW] = OW, WW
    }

    function wi(WW, iW) {
      if (null == WW) return {};
      var OW, mW, EW = function(WW, iW) {
        if (null == WW) return {};
        var OW, mW, EW = {},
          NW = Object.keys(WW);
        for (mW = 0; mW < NW.length; mW++) OW = NW[mW], iW.indexOf(OW) >= 0 || (EW[OW] = WW[OW]);
        return EW
      }(WW, iW);
      if (Object.getOwnPropertySymbols) {
        var NW = Object.getOwnPropertySymbols(WW);
        for (mW = 0; mW < NW.length; mW++) OW = NW[mW], iW.indexOf(OW) >= 0 || Object.prototype.propertyIsEnumerable.call(WW, OW) && (EW[OW] = WW[OW])
      }
      return EW
    }
    var ti = (0, mW.forwardRef)((function(WW, iW) {
      var OW = WW.children,
        EW = li(wi(WW, FW)),
        NW = EW.open,
        PW = wi(EW, QW);
      return (0, mW.useImperativeHandle)(iW, (function() {
        return {
          open: NW
        }
      }), [NW]), mW.createElement(mW.Fragment, null, OW(Li(Li({}, PW), {}, {
        open: NW
      })))
    }));
    ti.displayName = "Dropzone";
    var Zi = {
      disabled: !1,
      getFilesFromEvent: function(WW) {
        return PW(this, void 0, void 0, (function() {
          return LW(this, (function(iW) {
            return lW(WW) && lW(WW.dataTransfer) ? [2, jW(WW.dataTransfer, WW.type)] : function(WW) {
              return lW(WW) && lW(WW.target)
            }(WW) ? [2, AW(WW)] : Array.isArray(WW) && WW.every((function(WW) {
              return "getFile" in WW && "function" === typeof WW.getFile
            })) ? [2, bW(WW)] : [2, []]
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
    ti.defaultProps = Zi, ti.propTypes = {
      children: NW().func,
      accept: NW().objectOf(NW().arrayOf(NW().string)),
      multiple: NW().bool,
      preventDropOnDocument: NW().bool,
      noClick: NW().bool,
      noKeyboard: NW().bool,
      noDrag: NW().bool,
      noDragEventsBubbling: NW().bool,
      minSize: NW().number,
      maxSize: NW().number,
      maxFiles: NW().number,
      disabled: NW().bool,
      getFilesFromEvent: NW().func,
      onFileDialogCancel: NW().func,
      onFileDialogOpen: NW().func,
      useFsAccessApi: NW().bool,
      autoFocus: NW().bool,
      onDragEnter: NW().func,
      onDragLeave: NW().func,
      onDragOver: NW().func,
      onDrop: NW().func,
      onDropAccepted: NW().func,
      onDropRejected: NW().func,
      onError: NW().func,
      validator: NW().func
    };
    var xi = {
      lH: !1,
      isFileDialogActive: !1,
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1,
      acceptedFiles: [],
      fileRejections: []
    };

    function li() {
      var WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        iW = Li(Li({}, Zi), WW),
        OW = iW.accept,
        EW = iW.disabled,
        NW = iW.getFilesFromEvent,
        PW = iW.maxSize,
        LW = iW.minSize,
        cW = iW.multiple,
        wW = iW.maxFiles,
        tW = iW.onDragEnter,
        ZW = iW.onDragLeave,
        xW = iW.onDragOver,
        lW = iW.onDrop,
        AW = iW.onDropAccepted,
        bW = iW.onDropRejected,
        jW = iW.onFileDialogCancel,
        UW = iW.onFileDialogOpen,
        kW = iW.useFsAccessApi,
        sW = iW.autoFocus,
        MW = iW.preventDropOnDocument,
        KW = iW.noClick,
        SW = iW.noKeyboard,
        YW = iW.noDrag,
        yW = iW.noDragEventsBubbling,
        TW = iW.onError,
        hW = iW.validator,
        oW = (0, mW.useMemo)((function() {
          return function(WW) {
            if (qW(WW)) return Object.entries(WW).reduce((function(WW, iW) {
              var OW = uW(iW, 2),
                mW = OW[0],
                EW = OW[1];
              return [].concat(JW(WW), [mW], JW(EW))
            }), []).filter((function(WW) {
              return rW(WW) || zW(WW)
            })).join(",")
          }(OW)
        }), [OW]),
        dW = (0, mW.useMemo)((function() {
          return function(WW) {
            return qW(WW) ? [{
              description: "Files",
              accept: Object.entries(WW).filter((function(WW) {
                var iW = uW(WW, 2),
                  OW = iW[0],
                  mW = iW[1],
                  EW = !0;
                return rW(OW) || (console.warn('Skipped "'.concat(OW, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), EW = !1), Array.isArray(mW) && mW.every(zW) || (console.warn('Skipped "'.concat(OW, '" because an invalid file extension was provided.')), EW = !1), EW
              })).reduce((function(WW, iW) {
                var OW = uW(iW, 2),
                  mW = OW[0],
                  EW = OW[1];
                return HW(HW({}, WW), {}, nW({}, mW, EW))
              }), {})
            }] : WW
          }(OW)
        }), [OW]),
        eW = (0, mW.useMemo)((function() {
          return "function" === typeof UW ? UW : bi
        }), [UW]),
        vW = (0, mW.useMemo)((function() {
          return "function" === typeof jW ? jW : bi
        }), [jW]),
        gW = (0, mW.useRef)(null),
        DW = (0, mW.useRef)(null),
        VW = mi((0, mW.useReducer)(Ai, xi), 2),
        pW = VW[0],
        fW = VW[1],
        FW = pW.lH,
        QW = pW.isFileDialogActive,
        Ei = (0, mW.useRef)("undefined" !== typeof window && window.isSecureContext && kW && "showOpenFilePicker" in window),
        Ni = function() {
          !Ei.current && QW && setTimeout((function() {
            DW.current && (DW.current.files.length || (fW({
              type: "closeDialog"
            }), vW()))
          }), 300)
        };
      (0, mW.useEffect)((function() {
        return window.addEventListener("focus", Ni, !1),
          function() {
            window.removeEventListener("focus", Ni, !1)
          }
      }), [DW, QW, vW, Ei]);
      var Pi = (0, mW.useRef)([]),
        ti = function(WW) {
          gW.current && gW.current.contains(WW.target) || (WW.preventDefault(), Pi.current = [])
        };
      (0, mW.useEffect)((function() {
        return MW && (document.addEventListener("dragover", IW, !1), document.addEventListener("drop", ti, !1)),
          function() {
            MW && (document.removeEventListener("dragover", IW), document.removeEventListener("drop", ti))
          }
      }), [gW, MW]), (0, mW.useEffect)((function() {
        return !EW && sW && gW.current && gW.current.focus(),
          function() {}
      }), [gW, sW, EW]);
      var li = (0, mW.useCallback)((function(WW) {
          TW ? TW(WW) : console.error(WW)
        }), [TW]),
        ji = (0, mW.useCallback)((function(WW) {
          WW.preventDefault(), WW.persist(), ui(WW), Pi.current = [].concat(Oi(Pi.current), [WW.target]), GW(WW) && Promise.resolve(NW(WW)).then((function(iW) {
            if (!RW(WW) || yW) {
              var OW = iW.length,
                mW = OW > 0 && function(WW) {
                  var iW = WW.files,
                    OW = WW.accept,
                    mW = WW.minSize,
                    EW = WW.maxSize,
                    NW = WW.multiple,
                    PW = WW.maxFiles,
                    LW = WW.validator;
                  return !(!NW && iW.length > 1 || NW && PW >= 1 && iW.length > PW) && iW.every((function(WW) {
                    var iW = uW(XW(WW, OW), 1)[0],
                      NW = uW(BW(WW, mW, EW), 1)[0],
                      PW = LW ? LW(WW) : null;
                    return iW && NW && !PW
                  }))
                }({
                  files: iW,
                  accept: oW,
                  minSize: LW,
                  maxSize: PW,
                  multiple: cW,
                  maxFiles: wW,
                  validator: hW
                });
              fW({
                isDragAccept: mW,
                isDragReject: OW > 0 && !mW,
                isDragActive: !0,
                type: "setDraggedFiles"
              }), tW && tW(WW)
            }
          })).catch((function(WW) {
            return li(WW)
          }))
        }), [NW, tW, li, yW, oW, LW, PW, cW, wW, hW]),
        Ui = (0, mW.useCallback)((function(WW) {
          WW.preventDefault(), WW.persist(), ui(WW);
          var iW = GW(WW);
          if (iW && WW.dataTransfer) try {
            WW.dataTransfer.dropEffect = "copy"
          } catch (OW) {}
          return iW && xW && xW(WW), !1
        }), [xW, yW]),
        ki = (0, mW.useCallback)((function(WW) {
          WW.preventDefault(), WW.persist(), ui(WW);
          var iW = Pi.current.filter((function(WW) {
              return gW.current && gW.current.contains(WW)
            })),
            OW = iW.indexOf(WW.target); - 1 !== OW && iW.splice(OW, 1), Pi.current = iW, iW.length > 0 || (fW({
            type: "setDraggedFiles",
            isDragActive: !1,
            isDragAccept: !1,
            isDragReject: !1
          }), GW(WW) && ZW && ZW(WW))
        }), [gW, ZW, yW]),
        si = (0, mW.useCallback)((function(WW, iW) {
          var OW = [],
            mW = [];
          WW.forEach((function(WW) {
            var iW = mi(XW(WW, oW), 2),
              EW = iW[0],
              NW = iW[1],
              cW = mi(BW(WW, LW, PW), 2),
              wW = cW[0],
              tW = cW[1],
              ZW = hW ? hW(WW) : null;
            if (EW && wW && !ZW) OW.push(WW);
            else {
              var xW = [NW, tW];
              ZW && (xW = xW.concat(ZW)), mW.push({
                file: WW,
                errors: xW.filter((function(WW) {
                  return WW
                }))
              })
            }
          })), (!cW && OW.length > 1 || cW && wW >= 1 && OW.length > wW) && (OW.forEach((function(WW) {
            mW.push({
              file: WW,
              errors: [CW]
            })
          })), OW.splice(0)), fW({
            acceptedFiles: OW,
            fileRejections: mW,
            type: "setFiles"
          }), lW && lW(OW, mW, iW), mW.length > 0 && bW && bW(mW, iW), OW.length > 0 && AW && AW(OW, iW)
        }), [fW, cW, oW, LW, PW, wW, lW, AW, bW, hW]),
        Mi = (0, mW.useCallback)((function(WW) {
          WW.preventDefault(), WW.persist(), ui(WW), Pi.current = [], GW(WW) && Promise.resolve(NW(WW)).then((function(iW) {
            RW(WW) && !yW || si(iW, WW)
          })).catch((function(WW) {
            return li(WW)
          })), fW({
            type: "reset"
          })
        }), [NW, si, li, yW]),
        Ki = (0, mW.useCallback)((function() {
          if (Ei.current) {
            fW({
              type: "openDialog"
            }), eW();
            var WW = {
              multiple: cW,
              types: dW
            };
            window.showOpenFilePicker(WW).then((function(WW) {
              return NW(WW)
            })).then((function(WW) {
              si(WW, null), fW({
                type: "closeDialog"
              })
            })).catch((function(WW) {
              var iW;
              (iW = WW) instanceof DOMException && ("AbortError" === iW.name || iW.code === iW.ABORT_ERR) ? (vW(WW), fW({
                type: "closeDialog"
              })) : ! function(WW) {
                return WW instanceof DOMException && ("SecurityError" === WW.name || WW.code === WW.SECURITY_ERR)
              }(WW) ? li(WW) : (Ei.current = !1, DW.current ? (DW.current.value = null, DW.current.click()) : li(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))
            }))
          } else DW.current && (fW({
            type: "openDialog"
          }), eW(), DW.current.value = null, DW.current.click())
        }), [fW, eW, vW, kW, si, li, dW, cW]),
        Si = (0, mW.useCallback)((function(WW) {
          gW.current && gW.current.isEqualNode(WW.target) && (" " !== WW.key && "Enter" !== WW.key && 32 !== WW.keyCode && 13 !== WW.keyCode || (WW.preventDefault(), Ki()))
        }), [gW, Ki]),
        Yi = (0, mW.useCallback)((function() {
          fW({
            type: "focus"
          })
        }), []),
        yi = (0, mW.useCallback)((function() {
          fW({
            type: "blur"
          })
        }), []),
        Ti = (0, mW.useCallback)((function() {
          KW || (! function() {
            var WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
            return function(WW) {
              return -1 !== WW.indexOf("MSIE") || -1 !== WW.indexOf("Trident/")
            }(WW) || function(WW) {
              return -1 !== WW.indexOf("Edge/")
            }(WW)
          }() ? Ki() : setTimeout(Ki, 0))
        }), [KW, Ki]),
        Ji = function(WW) {
          return EW ? null : WW
        },
        Hi = function(WW) {
          return SW ? null : Ji(WW)
        },
        ni = function(WW) {
          return YW ? null : Ji(WW)
        },
        ui = function(WW) {
          yW && WW.stopPropagation()
        },
        oi = (0, mW.useMemo)((function() {
          return function() {
            var WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              iW = WW.refKey,
              OW = void 0 === iW ? "ref" : iW,
              mW = WW.role,
              NW = WW.onKeyDown,
              PW = WW.onFocus,
              LW = WW.onBlur,
              cW = WW.onClick,
              wW = WW.onDragEnter,
              tW = WW.onDragOver,
              ZW = WW.onDragLeave,
              xW = WW.onDrop,
              lW = wi(WW, Wi);
            return Li(Li(ci({
              onKeyDown: Hi(aW(NW, Si)),
              onFocus: Hi(aW(PW, Yi)),
              onBlur: Hi(aW(LW, yi)),
              onClick: Ji(aW(cW, Ti)),
              onDragEnter: ni(aW(wW, ji)),
              onDragOver: ni(aW(tW, Ui)),
              onDragLeave: ni(aW(ZW, ki)),
              onDrop: ni(aW(xW, Mi)),
              role: "string" === typeof mW && "" !== mW ? mW : "presentation"
            }, OW, gW), EW || SW ? {} : {
              tabIndex: 0
            }), lW)
          }
        }), [gW, Si, Yi, yi, Ti, ji, Ui, ki, Mi, SW, YW, EW]),
        di = (0, mW.useCallback)((function(WW) {
          WW.stopPropagation()
        }), []),
        ei = (0, mW.useMemo)((function() {
          return function() {
            var WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              iW = WW.refKey,
              OW = void 0 === iW ? "ref" : iW,
              mW = WW.onChange,
              EW = WW.onClick,
              NW = wi(WW, ii);
            return Li(Li({}, ci({
              accept: oW,
              multiple: cW,
              type: "file",
              style: {
                display: "none"
              },
              onChange: Ji(aW(mW, Mi)),
              onClick: Ji(aW(EW, di)),
              tabIndex: -1
            }, OW, DW)), NW)
          }
        }), [DW, OW, cW, Mi, EW]);
      return Li(Li({}, pW), {}, {
        lH: FW && !EW,
        getRootProps: oi,
        getInputProps: ei,
        rootRef: gW,
        inputRef: DW,
        open: Ji(Ki)
      })
    }

    function Ai(WW, iW) {
      switch (iW.type) {
        case "focus":
          return Li(Li({}, WW), {}, {
            lH: !0
          });
        case "blur":
          return Li(Li({}, WW), {}, {
            lH: !1
          });
        case "openDialog":
          return Li(Li({}, xi), {}, {
            isFileDialogActive: !0
          });
        case "closeDialog":
          return Li(Li({}, WW), {}, {
            isFileDialogActive: !1
          });
        case "setDraggedFiles":
          return Li(Li({}, WW), {}, {
            isDragActive: iW.isDragActive,
            isDragAccept: iW.isDragAccept,
            isDragReject: iW.isDragReject
          });
        case "setFiles":
          return Li(Li({}, WW), {}, {
            acceptedFiles: iW.acceptedFiles,
            fileRejections: iW.fileRejections
          });
        case "reset":
          return Li({}, xi);
        default:
          return WW
      }
    }

    function bi() {}
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);