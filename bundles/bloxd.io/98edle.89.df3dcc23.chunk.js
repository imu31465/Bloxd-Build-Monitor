export const id = 89;
export const ids = [89];
export const modules = {
  3948: (WW, RW) => {
    RW.b = function(WW, RW) {
      if (WW && RW) {
        var MW = Array.isArray(RW) ? RW : RW.split(","),
          wW = WW.name || "",
          CW = (WW.type || "").toLowerCase(),
          zR = CW.replace(/\/.*$/, "");
        return MW.some((function(WW) {
          var RW = WW.trim().toLowerCase();
          return "." === RW.charAt(0) ? wW.toLowerCase().endsWith(RW) : RW.endsWith("/*") ? zR === RW.replace(/\/.*$/, "") : CW === RW
        }))
      }
      return !0
    }
  },
  3933: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => TR
    });
    var wW = MW(75),
      CW = MW(3940),
      zR = MW.n(CW);

    function AW(WW, RW, MW, wW) {
      return new(MW || (MW = Promise))((function(CW, zR) {
        function AW(WW) {
          try {
            yR(wW.next(WW))
          } catch (RW) {
            zR(RW)
          }
        }

        function bR(WW) {
          try {
            yR(wW.throw(WW))
          } catch (RW) {
            zR(RW)
          }
        }

        function yR(WW) {
          var RW;
          WW.done ? CW(WW.value) : (RW = WW.value, RW instanceof MW ? RW : new MW((function(WW) {
            WW(RW)
          }))).then(AW, bR)
        }
        yR((wW = wW.apply(WW, RW || [])).next())
      }))
    }

    function bR(WW, RW) {
      var MW, wW, CW, zR, AW = {
        label: 0,
        sent: function() {
          if (1 & CW[0]) throw CW[1];
          return CW[1]
        },
        trys: [],
        ops: []
      };
      return zR = {
        next: bR(0),
        throw: bR(1),
        return: bR(2)
      }, "function" === typeof Symbol && (zR[Symbol.iterator] = function() {
        return this
      }), zR;

      function bR(bR) {
        return function(yR) {
          return function(bR) {
            if (MW) throw new TypeError("Generator is already executing.");
            for (; zR && (zR = 0, bR[0] && (AW = 0)), AW;) try {
              if (MW = 1, wW && (CW = 2 & bR[0] ? wW.return : bR[0] ? wW.throw || ((CW = wW.return) && CW.call(wW), 0) : wW.next) && !(CW = CW.call(wW, bR[1])).done) return CW;
              switch (wW = 0, CW && (bR = [2 & bR[0], CW.value]), bR[0]) {
                case 0:
                case 1:
                  CW = bR;
                  break;
                case 4:
                  return AW.label++, {
                    value: bR[1],
                    done: !1
                  };
                case 5:
                  AW.label++, wW = bR[1], bR = [0];
                  continue;
                case 7:
                  bR = AW.ops.pop(), AW.trys.pop();
                  continue;
                default:
                  if (!(CW = (CW = AW.trys).length > 0 && CW[CW.length - 1]) && (6 === bR[0] || 2 === bR[0])) {
                    AW = 0;
                    continue
                  }
                  if (3 === bR[0] && (!CW || bR[1] > CW[0] && bR[1] < CW[3])) {
                    AW.label = bR[1];
                    break
                  }
                  if (6 === bR[0] && AW.label < CW[1]) {
                    AW.label = CW[1], CW = bR;
                    break
                  }
                  if (CW && AW.label < CW[2]) {
                    AW.label = CW[2], AW.ops.push(bR);
                    break
                  }
                  CW[2] && AW.ops.pop(), AW.trys.pop();
                  continue
              }
              bR = RW.call(WW, AW)
            } catch (yR) {
              bR = [6, yR], wW = 0
            } finally {
              MW = CW = 0
            }
            if (5 & bR[0]) throw bR[1];
            return {
              value: bR[0] ? bR[1] : void 0,
              done: !0
            }
          }([bR, yR])
        }
      }
    }
    Object.create;

    function yR(WW, RW) {
      var MW = "function" === typeof Symbol && WW[Symbol.iterator];
      if (!MW) return WW;
      var wW, CW, zR = MW.call(WW),
        AW = [];
      try {
        for (;
          (void 0 === RW || RW-- > 0) && !(wW = zR.next()).done;) AW.push(wW.value)
      } catch (bR) {
        CW = {
          error: bR
        }
      } finally {
        try {
          wW && !wW.done && (MW = zR.return) && MW.call(zR)
        } finally {
          if (CW) throw CW.error
        }
      }
      return AW
    }

    function NW(WW, RW, MW) {
      if (MW || 2 === arguments.length)
        for (var wW, CW = 0, zR = RW.length; CW < zR; CW++) !wW && CW in RW || (wW || (wW = Array.prototype.slice.call(RW, 0, CW)), wW[CW] = RW[CW]);
      return WW.concat(wW || Array.prototype.slice.call(RW))
    }
    Object.create;
    "function" === typeof SuppressedError && SuppressedError;
    var eW = new Map([
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
      ["PA", "application/vnd.ms-outlook"]
    ]);

    function BW(WW, RW) {
      var MW = function(WW) {
        var RW = WW.name;
        if (RW && -1 !== RW.lastIndexOf(".") && !WW.type) {
          var MW = RW.split(".").pop().toLowerCase(),
            wW = eW.get(MW);
          wW && Object.defineProperty(WW, "type", {
            value: wW,
            writable: !1,
            configurable: !1,
            enumerable: !0
          })
        }
        return WW
      }(WW);
      if ("string" !== typeof MW.path) {
        var wW = WW.webkitRelativePath;
        Object.defineProperty(MW, "path", {
          value: "string" === typeof RW ? RW : "string" === typeof wW && wW.length > 0 ? wW : WW.name,
          writable: !1,
          configurable: !1,
          enumerable: !0
        })
      }
      return MW
    }
    var tR = [".DS_Store", "Thumbs.db"];

    function TW(WW) {
      return "object" === typeof WW && null !== WW
    }

    function gR(WW) {
      return PW(WW.target.files).map((function(WW) {
        return BW(WW)
      }))
    }

    function iR(WW) {
      return AW(this, void 0, void 0, (function() {
        return bR(this, (function(RW) {
          switch (RW.label) {
            case 0:
              return [4, Promise.all(WW.map((function(WW) {
                return WW.getFile()
              })))];
            case 1:
              return [2, RW.sent().map((function(WW) {
                return BW(WW)
              }))]
          }
        }))
      }))
    }

    function YW(WW, RW) {
      return AW(this, void 0, void 0, (function() {
        var MW;
        return bR(this, (function(wW) {
          switch (wW.label) {
            case 0:
              return WW.items ? (MW = PW(WW.items).filter((function(WW) {
                return "file" === WW.kind
              })), "drop" !== RW ? [2, MW] : [4, Promise.all(MW.map(IW))]) : [3, 2];
            case 1:
              return [2, JW(oW(wW.sent()))];
            case 2:
              return [2, JW(PW(WW.files).map((function(WW) {
                return BW(WW)
              })))]
          }
        }))
      }))
    }

    function JW(WW) {
      return WW.filter((function(WW) {
        return -1 === tR.indexOf(WW.name)
      }))
    }

    function PW(WW) {
      if (null === WW) return [];
      for (var RW = [], MW = 0; MW < WW.length; MW++) {
        var wW = WW[MW];
        RW.push(wW)
      }
      return RW
    }

    function IW(WW) {
      if ("function" !== typeof WW.webkitGetAsEntry) return lW(WW);
      var RW = WW.webkitGetAsEntry();
      return RW && RW.isDirectory ? fW(RW) : lW(WW)
    }

    function oW(WW) {
      return WW.reduce((function(WW, RW) {
        return NW(NW([], yR(WW), !1), yR(Array.isArray(RW) ? oW(RW) : [RW]), !1)
      }), [])
    }

    function lW(WW) {
      var RW = WW.getAsFile();
      if (!RW) return Promise.reject("".concat(WW, " is not a File"));
      var MW = BW(RW);
      return Promise.resolve(MW)
    }

    function FW(WW) {
      return AW(this, void 0, void 0, (function() {
        return bR(this, (function(RW) {
          return [2, WW.isDirectory ? fW(WW) : QW(WW)]
        }))
      }))
    }

    function fW(WW) {
      var RW = WW.createReader();
      return new Promise((function(WW, MW) {
        var wW = [];
        ! function CW() {
          var zR = this;
          RW.readEntries((function(RW) {
            return AW(zR, void 0, void 0, (function() {
              var zR, AW, yR;
              return bR(this, (function(bR) {
                switch (bR.label) {
                  case 0:
                    if (RW.length) return [3, 5];
                    bR.label = 1;
                  case 1:
                    return bR.trys.push([1, 3, , 4]), [4, Promise.all(wW)];
                  case 2:
                    return zR = bR.sent(), WW(zR), [3, 4];
                  case 3:
                    return AW = bR.sent(), MW(AW), [3, 4];
                  case 4:
                    return [3, 6];
                  case 5:
                    yR = Promise.all(RW.map(FW)), wW.push(yR), CW(), bR.label = 6;
                  case 6:
                    return [2]
                }
              }))
            }))
          }), (function(WW) {
            MW(WW)
          }))
        }()
      }))
    }

    function QW(WW) {
      return AW(this, void 0, void 0, (function() {
        return bR(this, (function(RW) {
          return [2, new Promise((function(RW, MW) {
            WW.file((function(MW) {
              var wW = BW(MW, WW.fullPath);
              RW(wW)
            }), (function(WW) {
              MW(WW)
            }))
          }))]
        }))
      }))
    }
    var rR = MW(3948);

    function cR(WW) {
      return function(WW) {
        if (Array.isArray(WW)) return dW(WW)
      }(WW) || function(WW) {
        if ("undefined" !== typeof Symbol && null != WW[Symbol.iterator] || null != WW["@@iterator"]) return Array.from(WW)
      }(WW) || sW(WW) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function XW(WW, RW) {
      var MW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var wW = Object.getOwnPropertySymbols(WW);
        RW && (wW = wW.filter((function(RW) {
          return Object.getOwnPropertyDescriptor(WW, RW).enumerable
        }))), MW.push.apply(MW, wW)
      }
      return MW
    }

    function jR(WW) {
      for (var RW = 1; RW < arguments.length; RW++) {
        var MW = null != arguments[RW] ? arguments[RW] : {};
        RW % 2 ? XW(Object(MW), !0).forEach((function(RW) {
          kR(WW, RW, MW[RW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(MW)) : XW(Object(MW)).forEach((function(RW) {
          Object.defineProperty(WW, RW, Object.getOwnPropertyDescriptor(MW, RW))
        }))
      }
      return WW
    }

    function kR(WW, RW, MW) {
      return RW in WW ? Object.defineProperty(WW, RW, {
        value: MW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[RW] = MW, WW
    }

    function aR(WW, RW) {
      return function(WW) {
        if (Array.isArray(WW)) return WW
      }(WW) || function(WW, RW) {
        var MW = null == WW ? null : "undefined" !== typeof Symbol && WW[Symbol.iterator] || WW["@@iterator"];
        if (null == MW) return;
        var wW, CW, zR = [],
          AW = !0,
          bR = !1;
        try {
          for (MW = MW.call(WW); !(AW = (wW = MW.next()).done) && (zR.push(wW.value), !RW || zR.length !== RW); AW = !0);
        } catch (yR) {
          bR = !0, CW = yR
        } finally {
          try {
            AW || null == MW.return || MW.return()
          } finally {
            if (bR) throw CW
          }
        }
        return zR
      }(WW, RW) || sW(WW, RW) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function sW(WW, RW) {
      if (WW) {
        if ("string" === typeof WW) return dW(WW, RW);
        var MW = Object.prototype.toString.call(WW).slice(8, -1);
        return "Object" === MW && WW.constructor && (MW = WW.constructor.name), "Map" === MW || "Set" === MW ? Array.from(WW) : "Arguments" === MW || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(MW) ? dW(WW, RW) : void 0
      }
    }

    function dW(WW, RW) {
      (null == RW || RW > WW.length) && (RW = WW.length);
      for (var MW = 0, wW = new Array(RW); MW < RW; MW++) wW[MW] = WW[MW];
      return wW
    }
    var pW = "file-invalid-type",
      hW = "file-too-large",
      UW = "file-too-small",
      EW = "too-many-files",
      VW = function(WW) {
        WW = Array.isArray(WW) && 1 === WW.length ? WW[0] : WW;
        var RW = Array.isArray(WW) ? "one of ".concat(WW.join(", ")) : WW;
        return {
          code: pW,
          message: "File type must be ".concat(RW)
        }
      },
      mR = function(WW) {
        return {
          code: hW,
          message: "File is larger than ".concat(WW, " ").concat(1 === WW ? "byte" : "bytes")
        }
      },
      xR = function(WW) {
        return {
          code: UW,
          message: "File is smaller than ".concat(WW, " ").concat(1 === WW ? "byte" : "bytes")
        }
      },
      vR = {
        code: EW,
        message: "Too many files"
      };

    function KW(WW, RW) {
      var MW = "application/x-moz-file" === WW.type || (0, rR.b)(WW, RW);
      return [MW, MW ? null : VW(RW)]
    }

    function uW(WW, RW, MW) {
      if (OW(WW.size))
        if (OW(RW) && OW(MW)) {
          if (WW.size > MW) return [!1, mR(MW)];
          if (WW.size < RW) return [!1, xR(RW)]
        } else {
          if (OW(RW) && WW.size < RW) return [!1, xR(RW)];
          if (OW(MW) && WW.size > MW) return [!1, mR(MW)]
        } return [!0, null]
    }

    function OW(WW) {
      return void 0 !== WW && null !== WW
    }

    function nW(WW) {
      return "function" === typeof WW.isPropagationStopped ? WW.isPropagationStopped() : "undefined" !== typeof WW.cancelBubble && WW.cancelBubble
    }

    function GW(WW) {
      return WW.dataTransfer ? Array.prototype.some.call(WW.dataTransfer.types, (function(WW) {
        return "Files" === WW || "application/x-moz-file" === WW
      })) : !!WW.target && !!WW.target.files
    }

    function LW(WW) {
      WW.preventDefault()
    }

    function HW() {
      for (var WW = arguments.length, RW = new Array(WW), MW = 0; MW < WW; MW++) RW[MW] = arguments[MW];
      return function(WW) {
        for (var MW = arguments.length, wW = new Array(MW > 1 ? MW - 1 : 0), CW = 1; CW < MW; CW++) wW[CW - 1] = arguments[CW];
        return RW.some((function(RW) {
          return !nW(WW) && RW && RW.apply(void 0, [WW].concat(wW)), nW(WW)
        }))
      }
    }

    function DW(WW) {
      return "audio/*" === WW || "video/*" === WW || "image/*" === WW || "text/*" === WW || /\w+\/[-+.\w]+/g.test(WW)
    }

    function qR(WW) {
      return /^.*\.[\w]+$/.test(WW)
    }
    var ZW = ["children"],
      SW = ["open"],
      WR = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
      RR = ["refKey", "onChange", "onClick"];

    function MR(WW) {
      return function(WW) {
        if (Array.isArray(WW)) return zM(WW)
      }(WW) || function(WW) {
        if ("undefined" !== typeof Symbol && null != WW[Symbol.iterator] || null != WW["@@iterator"]) return Array.from(WW)
      }(WW) || CR(WW) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function wR(WW, RW) {
      return function(WW) {
        if (Array.isArray(WW)) return WW
      }(WW) || function(WW, RW) {
        var MW = null == WW ? null : "undefined" !== typeof Symbol && WW[Symbol.iterator] || WW["@@iterator"];
        if (null == MW) return;
        var wW, CW, zR = [],
          AW = !0,
          bR = !1;
        try {
          for (MW = MW.call(WW); !(AW = (wW = MW.next()).done) && (zR.push(wW.value), !RW || zR.length !== RW); AW = !0);
        } catch (yR) {
          bR = !0, CW = yR
        } finally {
          try {
            AW || null == MW.return || MW.return()
          } finally {
            if (bR) throw CW
          }
        }
        return zR
      }(WW, RW) || CR(WW, RW) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function CR(WW, RW) {
      if (WW) {
        if ("string" === typeof WW) return zM(WW, RW);
        var MW = Object.prototype.toString.call(WW).slice(8, -1);
        return "Object" === MW && WW.constructor && (MW = WW.constructor.name), "Map" === MW || "Set" === MW ? Array.from(WW) : "Arguments" === MW || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(MW) ? zM(WW, RW) : void 0
      }
    }

    function zM(WW, RW) {
      (null == RW || RW > WW.length) && (RW = WW.length);
      for (var MW = 0, wW = new Array(RW); MW < RW; MW++) wW[MW] = WW[MW];
      return wW
    }

    function AR(WW, RW) {
      var MW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var wW = Object.getOwnPropertySymbols(WW);
        RW && (wW = wW.filter((function(RW) {
          return Object.getOwnPropertyDescriptor(WW, RW).enumerable
        }))), MW.push.apply(MW, wW)
      }
      return MW
    }

    function bM(WW) {
      for (var RW = 1; RW < arguments.length; RW++) {
        var MW = null != arguments[RW] ? arguments[RW] : {};
        RW % 2 ? AR(Object(MW), !0).forEach((function(RW) {
          yM(WW, RW, MW[RW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(MW)) : AR(Object(MW)).forEach((function(RW) {
          Object.defineProperty(WW, RW, Object.getOwnPropertyDescriptor(MW, RW))
        }))
      }
      return WW
    }

    function yM(WW, RW, MW) {
      return RW in WW ? Object.defineProperty(WW, RW, {
        value: MW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[RW] = MW, WW
    }

    function NR(WW, RW) {
      if (null == WW) return {};
      var MW, wW, CW = function(WW, RW) {
        if (null == WW) return {};
        var MW, wW, CW = {},
          zR = Object.keys(WW);
        for (wW = 0; wW < zR.length; wW++) MW = zR[wW], RW.indexOf(MW) >= 0 || (CW[MW] = WW[MW]);
        return CW
      }(WW, RW);
      if (Object.getOwnPropertySymbols) {
        var zR = Object.getOwnPropertySymbols(WW);
        for (wW = 0; wW < zR.length; wW++) MW = zR[wW], RW.indexOf(MW) >= 0 || Object.prototype.propertyIsEnumerable.call(WW, MW) && (CW[MW] = WW[MW])
      }
      return CW
    }
    var eR = (0, wW.forwardRef)((function(WW, RW) {
      var MW = WW.children,
        CW = TR(NR(WW, ZW)),
        zR = CW.open,
        AW = NR(CW, SW);
      return (0, wW.useImperativeHandle)(RW, (function() {
        return {
          open: zR
        }
      }), [zR]), wW.createElement(wW.Fragment, null, MW(bM(bM({}, AW), {}, {
        open: zR
      })))
    }));
    eR.displayName = "Dropzone";
    var BR = {
      disabled: !1,
      getFilesFromEvent: function(WW) {
        return AW(this, void 0, void 0, (function() {
          return bR(this, (function(RW) {
            return TW(WW) && TW(WW.dataTransfer) ? [2, YW(WW.dataTransfer, WW.type)] : function(WW) {
              return TW(WW) && TW(WW.target)
            }(WW) ? [2, gR(WW)] : Array.isArray(WW) && WW.every((function(WW) {
              return "getFile" in WW && "function" === typeof WW.getFile
            })) ? [2, iR(WW)] : [2, []]
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
    eR.defaultProps = BR, eR.propTypes = {
      children: zR().func,
      accept: zR().objectOf(zR().arrayOf(zR().string)),
      multiple: zR().bool,
      preventDropOnDocument: zR().bool,
      noClick: zR().bool,
      noKeyboard: zR().bool,
      noDrag: zR().bool,
      noDragEventsBubbling: zR().bool,
      minSize: zR().number,
      maxSize: zR().number,
      maxFiles: zR().number,
      disabled: zR().bool,
      getFilesFromEvent: zR().func,
      onFileDialogCancel: zR().func,
      onFileDialogOpen: zR().func,
      useFsAccessApi: zR().bool,
      autoFocus: zR().bool,
      onDragEnter: zR().func,
      onDragLeave: zR().func,
      onDragOver: zR().func,
      onDrop: zR().func,
      onDropAccepted: zR().func,
      onDropRejected: zR().func,
      onError: zR().func,
      validator: zR().func
    };
    var tM = {
      gMW: !1,
      isFileDialogActive: !1,
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1,
      acceptedFiles: [],
      fileRejections: []
    };

    function TR() {
      var WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        RW = bM(bM({}, BR), WW),
        MW = RW.accept,
        CW = RW.disabled,
        zR = RW.getFilesFromEvent,
        AW = RW.maxSize,
        bR = RW.minSize,
        yR = RW.multiple,
        NW = RW.maxFiles,
        eW = RW.onDragEnter,
        BW = RW.onDragLeave,
        tR = RW.onDragOver,
        TW = RW.onDrop,
        gR = RW.onDropAccepted,
        iR = RW.onDropRejected,
        YW = RW.onFileDialogCancel,
        JW = RW.onFileDialogOpen,
        PW = RW.useFsAccessApi,
        IW = RW.autoFocus,
        oW = RW.preventDropOnDocument,
        lW = RW.noClick,
        FW = RW.noKeyboard,
        fW = RW.noDrag,
        QW = RW.noDragEventsBubbling,
        rR = RW.onError,
        XW = RW.validator,
        sW = (0, wW.useMemo)((function() {
          return function(WW) {
            if (OW(WW)) return Object.entries(WW).reduce((function(WW, RW) {
              var MW = aR(RW, 2),
                wW = MW[0],
                CW = MW[1];
              return [].concat(cR(WW), [wW], cR(CW))
            }), []).filter((function(WW) {
              return DW(WW) || qR(WW)
            })).join(",")
          }(MW)
        }), [MW]),
        dW = (0, wW.useMemo)((function() {
          return function(WW) {
            return OW(WW) ? [{
              description: "Files",
              accept: Object.entries(WW).filter((function(WW) {
                var RW = aR(WW, 2),
                  MW = RW[0],
                  wW = RW[1],
                  CW = !0;
                return DW(MW) || (console.warn('Skipped "'.concat(MW, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), CW = !1), Array.isArray(wW) && wW.every(qR) || (console.warn('Skipped "'.concat(MW, '" because an invalid file extension was provided.')), CW = !1), CW
              })).reduce((function(WW, RW) {
                var MW = aR(RW, 2),
                  wW = MW[0],
                  CW = MW[1];
                return jR(jR({}, WW), {}, kR({}, wW, CW))
              }), {})
            }] : WW
          }(MW)
        }), [MW]),
        pW = (0, wW.useMemo)((function() {
          return "function" === typeof JW ? JW : iM
        }), [JW]),
        hW = (0, wW.useMemo)((function() {
          return "function" === typeof YW ? YW : iM
        }), [YW]),
        UW = (0, wW.useRef)(null),
        EW = (0, wW.useRef)(null),
        VW = wR((0, wW.useReducer)(gM, tM), 2),
        mR = VW[0],
        xR = VW[1],
        ZW = mR.gMW,
        SW = mR.isFileDialogActive,
        CR = (0, wW.useRef)("undefined" !== typeof window && window.isSecureContext && PW && "showOpenFilePicker" in window),
        zM = function() {
          !CR.current && SW && setTimeout((function() {
            EW.current && (EW.current.files.length || (xR({
              type: "closeDialog"
            }), hW()))
          }), 300)
        };
      (0, wW.useEffect)((function() {
        return window.addEventListener("focus", zM, !1),
          function() {
            window.removeEventListener("focus", zM, !1)
          }
      }), [EW, SW, hW, CR]);
      var AR = (0, wW.useRef)([]),
        eR = function(WW) {
          UW.current && UW.current.contains(WW.target) || (WW.preventDefault(), AR.current = [])
        };
      (0, wW.useEffect)((function() {
        return oW && (document.addEventListener("dragover", LW, !1), document.addEventListener("drop", eR, !1)),
          function() {
            oW && (document.removeEventListener("dragover", LW), document.removeEventListener("drop", eR))
          }
      }), [UW, oW]), (0, wW.useEffect)((function() {
        return !CW && IW && UW.current && UW.current.focus(),
          function() {}
      }), [UW, IW, CW]);
      var TR = (0, wW.useCallback)((function(WW) {
          rR ? rR(WW) : console.error(WW)
        }), [rR]),
        YR = (0, wW.useCallback)((function(WW) {
          WW.preventDefault(), WW.persist(), kM(WW), AR.current = [].concat(MR(AR.current), [WW.target]), GW(WW) && Promise.resolve(zR(WW)).then((function(RW) {
            if (!nW(WW) || QW) {
              var MW = RW.length,
                wW = MW > 0 && function(WW) {
                  var RW = WW.files,
                    MW = WW.accept,
                    wW = WW.minSize,
                    CW = WW.maxSize,
                    zR = WW.multiple,
                    AW = WW.maxFiles,
                    bR = WW.validator;
                  return !(!zR && RW.length > 1 || zR && AW >= 1 && RW.length > AW) && RW.every((function(WW) {
                    var RW = aR(KW(WW, MW), 1)[0],
                      zR = aR(uW(WW, wW, CW), 1)[0],
                      AW = bR ? bR(WW) : null;
                    return RW && zR && !AW
                  }))
                }({
                  files: RW,
                  accept: sW,
                  minSize: bR,
                  maxSize: AW,
                  multiple: yR,
                  maxFiles: NW,
                  validator: XW
                });
              xR({
                isDragAccept: wW,
                isDragReject: MW > 0 && !wW,
                isDragActive: !0,
                type: "setDraggedFiles"
              }), eW && eW(WW)
            }
          })).catch((function(WW) {
            return TR(WW)
          }))
        }), [zR, eW, TR, QW, sW, bR, AW, yR, NW, XW]),
        JR = (0, wW.useCallback)((function(WW) {
          WW.preventDefault(), WW.persist(), kM(WW);
          var RW = GW(WW);
          if (RW && WW.dataTransfer) try {
            WW.dataTransfer.dropEffect = "copy"
          } catch (MW) {}
          return RW && tR && tR(WW), !1
        }), [tR, QW]),
        PR = (0, wW.useCallback)((function(WW) {
          WW.preventDefault(), WW.persist(), kM(WW);
          var RW = AR.current.filter((function(WW) {
              return UW.current && UW.current.contains(WW)
            })),
            MW = RW.indexOf(WW.target); - 1 !== MW && RW.splice(MW, 1), AR.current = RW, RW.length > 0 || (xR({
            type: "setDraggedFiles",
            isDragActive: !1,
            isDragAccept: !1,
            isDragReject: !1
          }), GW(WW) && BW && BW(WW))
        }), [UW, BW, QW]),
        IR = (0, wW.useCallback)((function(WW, RW) {
          var MW = [],
            wW = [];
          WW.forEach((function(WW) {
            var RW = wR(KW(WW, sW), 2),
              CW = RW[0],
              zR = RW[1],
              yR = wR(uW(WW, bR, AW), 2),
              NW = yR[0],
              eW = yR[1],
              BW = XW ? XW(WW) : null;
            if (CW && NW && !BW) MW.push(WW);
            else {
              var tR = [zR, eW];
              BW && (tR = tR.concat(BW)), wW.push({
                file: WW,
                errors: tR.filter((function(WW) {
                  return WW
                }))
              })
            }
          })), (!yR && MW.length > 1 || yR && NW >= 1 && MW.length > NW) && (MW.forEach((function(WW) {
            wW.push({
              file: WW,
              errors: [vR]
            })
          })), MW.splice(0)), xR({
            acceptedFiles: MW,
            fileRejections: wW,
            type: "setFiles"
          }), TW && TW(MW, wW, RW), wW.length > 0 && iR && iR(wW, RW), MW.length > 0 && gR && gR(MW, RW)
        }), [xR, yR, sW, bR, AW, NW, TW, gR, iR, XW]),
        oR = (0, wW.useCallback)((function(WW) {
          WW.preventDefault(), WW.persist(), kM(WW), AR.current = [], GW(WW) && Promise.resolve(zR(WW)).then((function(RW) {
            nW(WW) && !QW || IR(RW, WW)
          })).catch((function(WW) {
            return TR(WW)
          })), xR({
            type: "reset"
          })
        }), [zR, IR, TR, QW]),
        lR = (0, wW.useCallback)((function() {
          if (CR.current) {
            xR({
              type: "openDialog"
            }), pW();
            var WW = {
              multiple: yR,
              types: dW
            };
            window.showOpenFilePicker(WW).then((function(WW) {
              return zR(WW)
            })).then((function(WW) {
              IR(WW, null), xR({
                type: "closeDialog"
              })
            })).catch((function(WW) {
              var RW;
              (RW = WW) instanceof DOMException && ("AbortError" === RW.name || RW.code === RW.ABORT_ERR) ? (hW(WW), xR({
                type: "closeDialog"
              })) : ! function(WW) {
                return WW instanceof DOMException && ("SecurityError" === WW.name || WW.code === WW.SECURITY_ERR)
              }(WW) ? TR(WW) : (CR.current = !1, EW.current ? (EW.current.value = null, EW.current.click()) : TR(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))
            }))
          } else EW.current && (xR({
            type: "openDialog"
          }), pW(), EW.current.value = null, EW.current.click())
        }), [xR, pW, hW, PW, IR, TR, dW, yR]),
        FR = (0, wW.useCallback)((function(WW) {
          UW.current && UW.current.isEqualNode(WW.target) && (" " !== WW.key && "Enter" !== WW.key && 32 !== WW.keyCode && 13 !== WW.keyCode || (WW.preventDefault(), lR()))
        }), [UW, lR]),
        fR = (0, wW.useCallback)((function() {
          xR({
            type: "focus"
          })
        }), []),
        QR = (0, wW.useCallback)((function() {
          xR({
            type: "blur"
          })
        }), []),
        rM = (0, wW.useCallback)((function() {
          lW || (! function() {
            var WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
            return function(WW) {
              return -1 !== WW.indexOf("MSIE") || -1 !== WW.indexOf("Trident/")
            }(WW) || function(WW) {
              return -1 !== WW.indexOf("Edge/")
            }(WW)
          }() ? lR() : setTimeout(lR, 0))
        }), [lW, lR]),
        cM = function(WW) {
          return CW ? null : WW
        },
        XR = function(WW) {
          return FW ? null : cM(WW)
        },
        jM = function(WW) {
          return fW ? null : cM(WW)
        },
        kM = function(WW) {
          QW && WW.stopPropagation()
        },
        aM = (0, wW.useMemo)((function() {
          return function() {
            var WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              RW = WW.refKey,
              MW = void 0 === RW ? "ref" : RW,
              wW = WW.role,
              zR = WW.onKeyDown,
              AW = WW.onFocus,
              bR = WW.onBlur,
              yR = WW.onClick,
              NW = WW.onDragEnter,
              eW = WW.onDragOver,
              BW = WW.onDragLeave,
              tR = WW.onDrop,
              TW = NR(WW, WR);
            return bM(bM(yM({
              onKeyDown: XR(HW(zR, FR)),
              onFocus: XR(HW(AW, fR)),
              onBlur: XR(HW(bR, QR)),
              onClick: cM(HW(yR, rM)),
              onDragEnter: jM(HW(NW, YR)),
              onDragOver: jM(HW(eW, JR)),
              onDragLeave: jM(HW(BW, PR)),
              onDrop: jM(HW(tR, oR)),
              role: "string" === typeof wW && "" !== wW ? wW : "presentation"
            }, MW, UW), CW || FW ? {} : {
              tabIndex: 0
            }), TW)
          }
        }), [UW, FR, fR, QR, rM, YR, JR, PR, oR, FW, fW, CW]),
        sR = (0, wW.useCallback)((function(WW) {
          WW.stopPropagation()
        }), []),
        dR = (0, wW.useMemo)((function() {
          return function() {
            var WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              RW = WW.refKey,
              MW = void 0 === RW ? "ref" : RW,
              wW = WW.onChange,
              CW = WW.onClick,
              zR = NR(WW, RR);
            return bM(bM({}, yM({
              accept: sW,
              multiple: yR,
              type: "file",
              style: {
                display: "none"
              },
              onChange: cM(HW(wW, oR)),
              onClick: cM(HW(CW, sR)),
              tabIndex: -1
            }, MW, EW)), zR)
          }
        }), [EW, MW, yR, oR, CW]);
      return bM(bM({}, mR), {}, {
        gMW: ZW && !CW,
        getRootProps: aM,
        getInputProps: dR,
        rootRef: UW,
        inputRef: EW,
        open: cM(lR)
      })
    }

    function gM(WW, RW) {
      switch (RW.type) {
        case "focus":
          return bM(bM({}, WW), {}, {
            gMW: !0
          });
        case "blur":
          return bM(bM({}, WW), {}, {
            gMW: !1
          });
        case "openDialog":
          return bM(bM({}, tM), {}, {
            isFileDialogActive: !0
          });
        case "closeDialog":
          return bM(bM({}, WW), {}, {
            isFileDialogActive: !1
          });
        case "setDraggedFiles":
          return bM(bM({}, WW), {}, {
            isDragActive: RW.isDragActive,
            isDragAccept: RW.isDragAccept,
            isDragReject: RW.isDragReject
          });
        case "setFiles":
          return bM(bM({}, WW), {}, {
            acceptedFiles: RW.acceptedFiles,
            fileRejections: RW.fileRejections
          });
        case "reset":
          return bM({}, tM);
        default:
          return WW
      }
    }

    function iM() {}
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);