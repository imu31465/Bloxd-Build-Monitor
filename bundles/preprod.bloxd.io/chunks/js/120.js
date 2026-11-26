export const id = 120;
export const ids = [120];
export const modules = {
  5467: (HH, BH) => {
    BH.e = function(HH, BH) {
      if (HH && BH) {
        var LH = Array.isArray(BH) ? BH : BH.split(","),
          AH = HH.name || "",
          rH = (HH.type || "").toLowerCase(),
          SH = rH.replace(/\/.*$/, "");
        return LH.some((function(HH) {
          var BH = HH.trim().toLowerCase();
          return "." === BH.charAt(0) ? AH.toLowerCase().endsWith(BH) : BH.endsWith("/*") ? SH === BH.replace(/\/.*$/, "") : rH === BH
        }))
      }
      return !0
    }
  },
  5446: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => YB
    });
    var AH = LH(45),
      rH = LH(5450),
      SH = LH.n(rH);

    function hH(HH, BH, LH, AH) {
      return new(LH || (LH = Promise))((function(rH, SH) {
        function hH(HH) {
          try {
            zH(AH.next(HH))
          } catch (BH) {
            SH(BH)
          }
        }

        function tH(HH) {
          try {
            zH(AH.throw(HH))
          } catch (BH) {
            SH(BH)
          }
        }

        function zH(HH) {
          var BH;
          HH.done ? rH(HH.value) : (BH = HH.value, BH instanceof LH ? BH : new LH((function(HH) {
            HH(BH)
          }))).then(hH, tH)
        }
        zH((AH = AH.apply(HH, BH || [])).next())
      }))
    }

    function tH(HH, BH) {
      var LH, AH, rH, SH, hH = {
        label: 0,
        sent: function() {
          if (1 & rH[0]) throw rH[1];
          return rH[1]
        },
        trys: [],
        ops: []
      };
      return SH = {
        next: tH(0),
        throw: tH(1),
        return: tH(2)
      }, "function" === typeof Symbol && (SH[Symbol.iterator] = function() {
        return this
      }), SH;

      function tH(tH) {
        return function(zH) {
          return function(tH) {
            if (LH) throw new TypeError("Generator is already executing.");
            for (; SH && (SH = 0, tH[0] && (hH = 0)), hH;) try {
              if (LH = 1, AH && (rH = 2 & tH[0] ? AH.return : tH[0] ? AH.throw || ((rH = AH.return) && rH.call(AH), 0) : AH.next) && !(rH = rH.call(AH, tH[1])).done) return rH;
              switch (AH = 0, rH && (tH = [2 & tH[0], rH.value]), tH[0]) {
                case 0:
                case 1:
                  rH = tH;
                  break;
                case 4:
                  return hH.label++, {
                    value: tH[1],
                    done: !1
                  };
                case 5:
                  hH.label++, AH = tH[1], tH = [0];
                  continue;
                case 7:
                  tH = hH.ops.pop(), hH.trys.pop();
                  continue;
                default:
                  if (!(rH = (rH = hH.trys).length > 0 && rH[rH.length - 1]) && (6 === tH[0] || 2 === tH[0])) {
                    hH = 0;
                    continue
                  }
                  if (3 === tH[0] && (!rH || tH[1] > rH[0] && tH[1] < rH[3])) {
                    hH.label = tH[1];
                    break
                  }
                  if (6 === tH[0] && hH.label < rH[1]) {
                    hH.label = rH[1], rH = tH;
                    break
                  }
                  if (rH && hH.label < rH[2]) {
                    hH.label = rH[2], hH.ops.push(tH);
                    break
                  }
                  rH[2] && hH.ops.pop(), hH.trys.pop();
                  continue
              }
              tH = BH.call(HH, hH)
            } catch (zH) {
              tH = [6, zH], AH = 0
            } finally {
              LH = rH = 0
            }
            if (5 & tH[0]) throw tH[1];
            return {
              value: tH[0] ? tH[1] : void 0,
              done: !0
            }
          }([tH, zH])
        }
      }
    }
    Object.create;

    function zH(HH, BH) {
      var LH = "function" === typeof Symbol && HH[Symbol.iterator];
      if (!LH) return HH;
      var AH, rH, SH = LH.call(HH),
        hH = [];
      try {
        for (;
          (void 0 === BH || BH-- > 0) && !(AH = SH.next()).done;) hH.push(AH.value)
      } catch (tH) {
        rH = {
          error: tH
        }
      } finally {
        try {
          AH && !AH.done && (LH = SH.return) && LH.call(SH)
        } finally {
          if (rH) throw rH.error
        }
      }
      return hH
    }

    function CH(HH, BH, LH) {
      if (LH || 2 === arguments.length)
        for (var AH, rH = 0, SH = BH.length; rH < SH; rH++) !AH && rH in BH || (AH || (AH = Array.prototype.slice.call(BH, 0, rH)), AH[rH] = BH[rH]);
      return HH.concat(AH || Array.prototype.slice.call(BH))
    }
    Object.create;
    "function" === typeof SuppressedError && SuppressedError;
    var EH = new Map([
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
      ["kt", "application/vnd.ms-outlook"]
    ]);

    function XH(HH, BH) {
      var LH = function(HH) {
        var BH = HH.name;
        if (BH && -1 !== BH.lastIndexOf(".") && !HH.type) {
          var LH = BH.split(".").pop().toLowerCase(),
            AH = EH.get(LH);
          AH && Object.defineProperty(HH, "type", {
            value: AH,
            writable: !1,
            configurable: !1,
            enumerable: !0
          })
        }
        return HH
      }(HH);
      if ("string" !== typeof LH.path) {
        var AH = HH.webkitRelativePath;
        Object.defineProperty(LH, "path", {
          value: "string" === typeof BH ? BH : "string" === typeof AH && AH.length > 0 ? AH : HH.name,
          writable: !1,
          configurable: !1,
          enumerable: !0
        })
      }
      return LH
    }
    var GH = [".DS_Store", "Thumbs.db"];

    function YH(HH) {
      return "object" === typeof HH && null !== HH
    }

    function uH(HH) {
      return xH(HH.target.files).map((function(HH) {
        return XH(HH)
      }))
    }

    function QH(HH) {
      return hH(this, void 0, void 0, (function() {
        return tH(this, (function(BH) {
          switch (BH.label) {
            case 0:
              return [4, Promise.all(HH.map((function(HH) {
                return HH.getFile()
              })))];
            case 1:
              return [2, BH.sent().map((function(HH) {
                return XH(HH)
              }))]
          }
        }))
      }))
    }

    function WH(HH, BH) {
      return hH(this, void 0, void 0, (function() {
        var LH;
        return tH(this, (function(AH) {
          switch (AH.label) {
            case 0:
              return HH.items ? (LH = xH(HH.items).filter((function(HH) {
                return "file" === HH.kind
              })), "drop" !== BH ? [2, LH] : [4, Promise.all(LH.map(vH))]) : [3, 2];
            case 1:
              return [2, MH(PH(AH.sent()))];
            case 2:
              return [2, MH(xH(HH.files).map((function(HH) {
                return XH(HH)
              })))]
          }
        }))
      }))
    }

    function MH(HH) {
      return HH.filter((function(HH) {
        return -1 === GH.indexOf(HH.name)
      }))
    }

    function xH(HH) {
      if (null === HH) return [];
      for (var BH = [], LH = 0; LH < HH.length; LH++) {
        var AH = HH[LH];
        BH.push(AH)
      }
      return BH
    }

    function vH(HH) {
      if ("function" !== typeof HH.webkitGetAsEntry) return TH(HH);
      var BH = HH.webkitGetAsEntry();
      return BH && BH.isDirectory ? VH(BH) : TH(HH)
    }

    function PH(HH) {
      return HH.reduce((function(HH, BH) {
        return CH(CH([], zH(HH), !1), zH(Array.isArray(BH) ? PH(BH) : [BH]), !1)
      }), [])
    }

    function TH(HH) {
      var BH = HH.getAsFile();
      if (!BH) return Promise.reject("".concat(HH, " is not a File"));
      var LH = XH(BH);
      return Promise.resolve(LH)
    }

    function UH(HH) {
      return hH(this, void 0, void 0, (function() {
        return tH(this, (function(BH) {
          return [2, HH.isDirectory ? VH(HH) : OH(HH)]
        }))
      }))
    }

    function VH(HH) {
      var BH = HH.createReader();
      return new Promise((function(HH, LH) {
        var AH = [];
        ! function rH() {
          var SH = this;
          BH.readEntries((function(BH) {
            return hH(SH, void 0, void 0, (function() {
              var SH, hH, zH;
              return tH(this, (function(tH) {
                switch (tH.label) {
                  case 0:
                    if (BH.length) return [3, 5];
                    tH.label = 1;
                  case 1:
                    return tH.trys.push([1, 3, , 4]), [4, Promise.all(AH)];
                  case 2:
                    return SH = tH.sent(), HH(SH), [3, 4];
                  case 3:
                    return hH = tH.sent(), LH(hH), [3, 4];
                  case 4:
                    return [3, 6];
                  case 5:
                    zH = Promise.all(BH.map(UH)), AH.push(zH), rH(), tH.label = 6;
                  case 6:
                    return [2]
                }
              }))
            }))
          }), (function(HH) {
            LH(HH)
          }))
        }()
      }))
    }

    function OH(HH) {
      return hH(this, void 0, void 0, (function() {
        return tH(this, (function(BH) {
          return [2, new Promise((function(BH, LH) {
            HH.file((function(LH) {
              var AH = XH(LH, HH.fullPath);
              BH(AH)
            }), (function(HH) {
              LH(HH)
            }))
          }))]
        }))
      }))
    }
    var bH = LH(5467);

    function kH(HH) {
      return function(HH) {
        if (Array.isArray(HH)) return KH(HH)
      }(HH) || function(HH) {
        if ("undefined" !== typeof Symbol && null != HH[Symbol.iterator] || null != HH["@@iterator"]) return Array.from(HH)
      }(HH) || lH(HH) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function mH(HH, BH) {
      var LH = Object.keys(HH);
      if (Object.getOwnPropertySymbols) {
        var AH = Object.getOwnPropertySymbols(HH);
        BH && (AH = AH.filter((function(BH) {
          return Object.getOwnPropertyDescriptor(HH, BH).enumerable
        }))), LH.push.apply(LH, AH)
      }
      return LH
    }

    function oH(HH) {
      for (var BH = 1; BH < arguments.length; BH++) {
        var LH = null != arguments[BH] ? arguments[BH] : {};
        BH % 2 ? mH(Object(LH), !0).forEach((function(BH) {
          IH(HH, BH, LH[BH])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(HH, Object.getOwnPropertyDescriptors(LH)) : mH(Object(LH)).forEach((function(BH) {
          Object.defineProperty(HH, BH, Object.getOwnPropertyDescriptor(LH, BH))
        }))
      }
      return HH
    }

    function IH(HH, BH, LH) {
      return BH in HH ? Object.defineProperty(HH, BH, {
        value: LH,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : HH[BH] = LH, HH
    }

    function fH(HH, BH) {
      return function(HH) {
        if (Array.isArray(HH)) return HH
      }(HH) || function(HH, BH) {
        var LH = null == HH ? null : "undefined" !== typeof Symbol && HH[Symbol.iterator] || HH["@@iterator"];
        if (null == LH) return;
        var AH, rH, SH = [],
          hH = !0,
          tH = !1;
        try {
          for (LH = LH.call(HH); !(hH = (AH = LH.next()).done) && (SH.push(AH.value), !BH || SH.length !== BH); hH = !0);
        } catch (zH) {
          tH = !0, rH = zH
        } finally {
          try {
            hH || null == LH.return || LH.return()
          } finally {
            if (tH) throw rH
          }
        }
        return SH
      }(HH, BH) || lH(HH, BH) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function lH(HH, BH) {
      if (HH) {
        if ("string" === typeof HH) return KH(HH, BH);
        var LH = Object.prototype.toString.call(HH).slice(8, -1);
        return "Object" === LH && HH.constructor && (LH = HH.constructor.name), "Map" === LH || "Set" === LH ? Array.from(HH) : "Arguments" === LH || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(LH) ? KH(HH, BH) : void 0
      }
    }

    function KH(HH, BH) {
      (null == BH || BH > HH.length) && (BH = HH.length);
      for (var LH = 0, AH = new Array(BH); LH < BH; LH++) AH[LH] = HH[LH];
      return AH
    }
    var cH = "file-invalid-type",
      eH = "file-too-large",
      qH = "file-too-small",
      gH = "too-many-files",
      NH = function(HH) {
        HH = Array.isArray(HH) && 1 === HH.length ? HH[0] : HH;
        var BH = Array.isArray(HH) ? "one of ".concat(HH.join(", ")) : HH;
        return {
          code: cH,
          message: "File type must be ".concat(BH)
        }
      },
      RH = function(HH) {
        return {
          code: eH,
          message: "File is larger than ".concat(HH, " ").concat(1 === HH ? "byte" : "bytes")
        }
      },
      jH = function(HH) {
        return {
          code: qH,
          message: "File is smaller than ".concat(HH, " ").concat(1 === HH ? "byte" : "bytes")
        }
      },
      nH = {
        code: gH,
        message: "Too many files"
      };

    function FH(HH, BH) {
      var LH = "application/x-moz-file" === HH.type || (0, bH.e)(HH, BH);
      return [LH, LH ? null : NH(BH)]
    }

    function DH(HH, BH, LH) {
      if (wH(HH.size))
        if (wH(BH) && wH(LH)) {
          if (HH.size > LH) return [!1, RH(LH)];
          if (HH.size < BH) return [!1, jH(BH)]
        } else {
          if (wH(BH) && HH.size < BH) return [!1, jH(BH)];
          if (wH(LH) && HH.size > LH) return [!1, RH(LH)]
        } return [!0, null]
    }

    function wH(HH) {
      return void 0 !== HH && null !== HH
    }

    function ZH(HH) {
      return "function" === typeof HH.isPropagationStopped ? HH.isPropagationStopped() : "undefined" !== typeof HH.cancelBubble && HH.cancelBubble
    }

    function dH(HH) {
      return HH.dataTransfer ? Array.prototype.some.call(HH.dataTransfer.types, (function(HH) {
        return "Files" === HH || "application/x-moz-file" === HH
      })) : !!HH.target && !!HH.target.files
    }

    function aH(HH) {
      HH.preventDefault()
    }

    function sH() {
      for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
      return function(HH) {
        for (var LH = arguments.length, AH = new Array(LH > 1 ? LH - 1 : 0), rH = 1; rH < LH; rH++) AH[rH - 1] = arguments[rH];
        return BH.some((function(BH) {
          return !ZH(HH) && BH && BH.apply(void 0, [HH].concat(AH)), ZH(HH)
        }))
      }
    }

    function JH(HH) {
      return "audio/*" === HH || "video/*" === HH || "image/*" === HH || "text/*" === HH || /\w+\/[-+.\w]+/g.test(HH)
    }

    function iH(HH) {
      return /^.*\.[\w]+$/.test(HH)
    }
    var pH = ["children"],
      yH = ["open"],
      HB = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
      BB = ["refKey", "onChange", "onClick"];

    function LB(HH) {
      return function(HH) {
        if (Array.isArray(HH)) return SB(HH)
      }(HH) || function(HH) {
        if ("undefined" !== typeof Symbol && null != HH[Symbol.iterator] || null != HH["@@iterator"]) return Array.from(HH)
      }(HH) || rB(HH) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function AB(HH, BH) {
      return function(HH) {
        if (Array.isArray(HH)) return HH
      }(HH) || function(HH, BH) {
        var LH = null == HH ? null : "undefined" !== typeof Symbol && HH[Symbol.iterator] || HH["@@iterator"];
        if (null == LH) return;
        var AH, rH, SH = [],
          hH = !0,
          tH = !1;
        try {
          for (LH = LH.call(HH); !(hH = (AH = LH.next()).done) && (SH.push(AH.value), !BH || SH.length !== BH); hH = !0);
        } catch (zH) {
          tH = !0, rH = zH
        } finally {
          try {
            hH || null == LH.return || LH.return()
          } finally {
            if (tH) throw rH
          }
        }
        return SH
      }(HH, BH) || rB(HH, BH) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function rB(HH, BH) {
      if (HH) {
        if ("string" === typeof HH) return SB(HH, BH);
        var LH = Object.prototype.toString.call(HH).slice(8, -1);
        return "Object" === LH && HH.constructor && (LH = HH.constructor.name), "Map" === LH || "Set" === LH ? Array.from(HH) : "Arguments" === LH || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(LH) ? SB(HH, BH) : void 0
      }
    }

    function SB(HH, BH) {
      (null == BH || BH > HH.length) && (BH = HH.length);
      for (var LH = 0, AH = new Array(BH); LH < BH; LH++) AH[LH] = HH[LH];
      return AH
    }

    function hB(HH, BH) {
      var LH = Object.keys(HH);
      if (Object.getOwnPropertySymbols) {
        var AH = Object.getOwnPropertySymbols(HH);
        BH && (AH = AH.filter((function(BH) {
          return Object.getOwnPropertyDescriptor(HH, BH).enumerable
        }))), LH.push.apply(LH, AH)
      }
      return LH
    }

    function tB(HH) {
      for (var BH = 1; BH < arguments.length; BH++) {
        var LH = null != arguments[BH] ? arguments[BH] : {};
        BH % 2 ? hB(Object(LH), !0).forEach((function(BH) {
          zB(HH, BH, LH[BH])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(HH, Object.getOwnPropertyDescriptors(LH)) : hB(Object(LH)).forEach((function(BH) {
          Object.defineProperty(HH, BH, Object.getOwnPropertyDescriptor(LH, BH))
        }))
      }
      return HH
    }

    function zB(HH, BH, LH) {
      return BH in HH ? Object.defineProperty(HH, BH, {
        value: LH,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : HH[BH] = LH, HH
    }

    function CB(HH, BH) {
      if (null == HH) return {};
      var LH, AH, rH = function(HH, BH) {
        if (null == HH) return {};
        var LH, AH, rH = {},
          SH = Object.keys(HH);
        for (AH = 0; AH < SH.length; AH++) LH = SH[AH], BH.indexOf(LH) >= 0 || (rH[LH] = HH[LH]);
        return rH
      }(HH, BH);
      if (Object.getOwnPropertySymbols) {
        var SH = Object.getOwnPropertySymbols(HH);
        for (AH = 0; AH < SH.length; AH++) LH = SH[AH], BH.indexOf(LH) >= 0 || Object.prototype.propertyIsEnumerable.call(HH, LH) && (rH[LH] = HH[LH])
      }
      return rH
    }
    var EB = (0, AH.forwardRef)((function(HH, BH) {
      var LH = HH.children,
        rH = YB(CB(HH, pH)),
        SH = rH.open,
        hH = CB(rH, yH);
      return (0, AH.useImperativeHandle)(BH, (function() {
        return {
          open: SH
        }
      }), [SH]), AH.createElement(AH.Fragment, null, LH(tB(tB({}, hH), {}, {
        open: SH
      })))
    }));
    EB.displayName = "Dropzone";
    var XB = {
      disabled: !1,
      getFilesFromEvent: function(HH) {
        return hH(this, void 0, void 0, (function() {
          return tH(this, (function(BH) {
            return YH(HH) && YH(HH.dataTransfer) ? [2, WH(HH.dataTransfer, HH.type)] : function(HH) {
              return YH(HH) && YH(HH.target)
            }(HH) ? [2, uH(HH)] : Array.isArray(HH) && HH.every((function(HH) {
              return "getFile" in HH && "function" === typeof HH.getFile
            })) ? [2, QH(HH)] : [2, []]
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
    EB.defaultProps = XB, EB.propTypes = {
      children: SH().func,
      accept: SH().objectOf(SH().arrayOf(SH().string)),
      multiple: SH().bool,
      preventDropOnDocument: SH().bool,
      noClick: SH().bool,
      noKeyboard: SH().bool,
      noDrag: SH().bool,
      noDragEventsBubbling: SH().bool,
      minSize: SH().number,
      maxSize: SH().number,
      maxFiles: SH().number,
      disabled: SH().bool,
      getFilesFromEvent: SH().func,
      onFileDialogCancel: SH().func,
      onFileDialogOpen: SH().func,
      useFsAccessApi: SH().bool,
      autoFocus: SH().bool,
      onDragEnter: SH().func,
      onDragLeave: SH().func,
      onDragOver: SH().func,
      onDrop: SH().func,
      onDropAccepted: SH().func,
      onDropRejected: SH().func,
      onError: SH().func,
      validator: SH().func
    };
    var GB = {
      Iq: !1,
      isFileDialogActive: !1,
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1,
      acceptedFiles: [],
      fileRejections: []
    };

    function YB() {
      var HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        BH = tB(tB({}, XB), HH),
        LH = BH.accept,
        rH = BH.disabled,
        SH = BH.getFilesFromEvent,
        hH = BH.maxSize,
        tH = BH.minSize,
        zH = BH.multiple,
        CH = BH.maxFiles,
        EH = BH.onDragEnter,
        XH = BH.onDragLeave,
        GH = BH.onDragOver,
        YH = BH.onDrop,
        uH = BH.onDropAccepted,
        QH = BH.onDropRejected,
        WH = BH.onFileDialogCancel,
        MH = BH.onFileDialogOpen,
        xH = BH.useFsAccessApi,
        vH = BH.autoFocus,
        PH = BH.preventDropOnDocument,
        TH = BH.noClick,
        UH = BH.noKeyboard,
        VH = BH.noDrag,
        OH = BH.noDragEventsBubbling,
        bH = BH.onError,
        mH = BH.validator,
        lH = (0, AH.useMemo)((function() {
          return function(HH) {
            if (wH(HH)) return Object.entries(HH).reduce((function(HH, BH) {
              var LH = fH(BH, 2),
                AH = LH[0],
                rH = LH[1];
              return [].concat(kH(HH), [AH], kH(rH))
            }), []).filter((function(HH) {
              return JH(HH) || iH(HH)
            })).join(",")
          }(LH)
        }), [LH]),
        KH = (0, AH.useMemo)((function() {
          return function(HH) {
            return wH(HH) ? [{
              description: "Files",
              accept: Object.entries(HH).filter((function(HH) {
                var BH = fH(HH, 2),
                  LH = BH[0],
                  AH = BH[1],
                  rH = !0;
                return JH(LH) || (console.warn('Skipped "'.concat(LH, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), rH = !1), Array.isArray(AH) && AH.every(iH) || (console.warn('Skipped "'.concat(LH, '" because an invalid file extension was provided.')), rH = !1), rH
              })).reduce((function(HH, BH) {
                var LH = fH(BH, 2),
                  AH = LH[0],
                  rH = LH[1];
                return oH(oH({}, HH), {}, IH({}, AH, rH))
              }), {})
            }] : HH
          }(LH)
        }), [LH]),
        cH = (0, AH.useMemo)((function() {
          return "function" === typeof MH ? MH : QB
        }), [MH]),
        eH = (0, AH.useMemo)((function() {
          return "function" === typeof WH ? WH : QB
        }), [WH]),
        qH = (0, AH.useRef)(null),
        gH = (0, AH.useRef)(null),
        NH = AB((0, AH.useReducer)(uB, GB), 2),
        RH = NH[0],
        jH = NH[1],
        pH = RH.Iq,
        yH = RH.isFileDialogActive,
        rB = (0, AH.useRef)("undefined" !== typeof window && window.isSecureContext && xH && "showOpenFilePicker" in window),
        SB = function() {
          !rB.current && yH && setTimeout((function() {
            gH.current && (gH.current.files.length || (jH({
              type: "closeDialog"
            }), eH()))
          }), 300)
        };
      (0, AH.useEffect)((function() {
        return window.addEventListener("focus", SB, !1),
          function() {
            window.removeEventListener("focus", SB, !1)
          }
      }), [gH, yH, eH, rB]);
      var hB = (0, AH.useRef)([]),
        EB = function(HH) {
          qH.current && qH.current.contains(HH.target) || (HH.preventDefault(), hB.current = [])
        };
      (0, AH.useEffect)((function() {
        return PH && (document.addEventListener("dragover", aH, !1), document.addEventListener("drop", EB, !1)),
          function() {
            PH && (document.removeEventListener("dragover", aH), document.removeEventListener("drop", EB))
          }
      }), [qH, PH]), (0, AH.useEffect)((function() {
        return !rH && vH && qH.current && qH.current.focus(),
          function() {}
      }), [qH, vH, rH]);
      var YB = (0, AH.useCallback)((function(HH) {
          bH ? bH(HH) : console.error(HH)
        }), [bH]),
        WB = (0, AH.useCallback)((function(HH) {
          HH.preventDefault(), HH.persist(), IB(HH), hB.current = [].concat(LB(hB.current), [HH.target]), dH(HH) && Promise.resolve(SH(HH)).then((function(BH) {
            if (!ZH(HH) || OH) {
              var LH = BH.length,
                AH = LH > 0 && function(HH) {
                  var BH = HH.files,
                    LH = HH.accept,
                    AH = HH.minSize,
                    rH = HH.maxSize,
                    SH = HH.multiple,
                    hH = HH.maxFiles,
                    tH = HH.validator;
                  return !(!SH && BH.length > 1 || SH && hH >= 1 && BH.length > hH) && BH.every((function(HH) {
                    var BH = fH(FH(HH, LH), 1)[0],
                      SH = fH(DH(HH, AH, rH), 1)[0],
                      hH = tH ? tH(HH) : null;
                    return BH && SH && !hH
                  }))
                }({
                  files: BH,
                  accept: lH,
                  minSize: tH,
                  maxSize: hH,
                  multiple: zH,
                  maxFiles: CH,
                  validator: mH
                });
              jH({
                isDragAccept: AH,
                isDragReject: LH > 0 && !AH,
                isDragActive: !0,
                type: "setDraggedFiles"
              }), EH && EH(HH)
            }
          })).catch((function(HH) {
            return YB(HH)
          }))
        }), [SH, EH, YB, OH, lH, tH, hH, zH, CH, mH]),
        MB = (0, AH.useCallback)((function(HH) {
          HH.preventDefault(), HH.persist(), IB(HH);
          var BH = dH(HH);
          if (BH && HH.dataTransfer) try {
            HH.dataTransfer.dropEffect = "copy"
          } catch (LH) {}
          return BH && GH && GH(HH), !1
        }), [GH, OH]),
        xB = (0, AH.useCallback)((function(HH) {
          HH.preventDefault(), HH.persist(), IB(HH);
          var BH = hB.current.filter((function(HH) {
              return qH.current && qH.current.contains(HH)
            })),
            LH = BH.indexOf(HH.target); - 1 !== LH && BH.splice(LH, 1), hB.current = BH, BH.length > 0 || (jH({
            type: "setDraggedFiles",
            isDragActive: !1,
            isDragAccept: !1,
            isDragReject: !1
          }), dH(HH) && XH && XH(HH))
        }), [qH, XH, OH]),
        vB = (0, AH.useCallback)((function(HH, BH) {
          var LH = [],
            AH = [];
          HH.forEach((function(HH) {
            var BH = AB(FH(HH, lH), 2),
              rH = BH[0],
              SH = BH[1],
              zH = AB(DH(HH, tH, hH), 2),
              CH = zH[0],
              EH = zH[1],
              XH = mH ? mH(HH) : null;
            if (rH && CH && !XH) LH.push(HH);
            else {
              var GH = [SH, EH];
              XH && (GH = GH.concat(XH)), AH.push({
                file: HH,
                errors: GH.filter((function(HH) {
                  return HH
                }))
              })
            }
          })), (!zH && LH.length > 1 || zH && CH >= 1 && LH.length > CH) && (LH.forEach((function(HH) {
            AH.push({
              file: HH,
              errors: [nH]
            })
          })), LH.splice(0)), jH({
            acceptedFiles: LH,
            fileRejections: AH,
            type: "setFiles"
          }), YH && YH(LH, AH, BH), AH.length > 0 && QH && QH(AH, BH), LH.length > 0 && uH && uH(LH, BH)
        }), [jH, zH, lH, tH, hH, CH, YH, uH, QH, mH]),
        PB = (0, AH.useCallback)((function(HH) {
          HH.preventDefault(), HH.persist(), IB(HH), hB.current = [], dH(HH) && Promise.resolve(SH(HH)).then((function(BH) {
            ZH(HH) && !OH || vB(BH, HH)
          })).catch((function(HH) {
            return YB(HH)
          })), jH({
            type: "reset"
          })
        }), [SH, vB, YB, OH]),
        TB = (0, AH.useCallback)((function() {
          if (rB.current) {
            jH({
              type: "openDialog"
            }), cH();
            var HH = {
              multiple: zH,
              types: KH
            };
            window.showOpenFilePicker(HH).then((function(HH) {
              return SH(HH)
            })).then((function(HH) {
              vB(HH, null), jH({
                type: "closeDialog"
              })
            })).catch((function(HH) {
              var BH;
              (BH = HH) instanceof DOMException && ("AbortError" === BH.name || BH.code === BH.ABORT_ERR) ? (eH(HH), jH({
                type: "closeDialog"
              })) : ! function(HH) {
                return HH instanceof DOMException && ("SecurityError" === HH.name || HH.code === HH.SECURITY_ERR)
              }(HH) ? YB(HH) : (rB.current = !1, gH.current ? (gH.current.value = null, gH.current.click()) : YB(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))
            }))
          } else gH.current && (jH({
            type: "openDialog"
          }), cH(), gH.current.value = null, gH.current.click())
        }), [jH, cH, eH, xH, vB, YB, KH, zH]),
        UB = (0, AH.useCallback)((function(HH) {
          qH.current && qH.current.isEqualNode(HH.target) && (" " !== HH.key && "Enter" !== HH.key && 32 !== HH.keyCode && 13 !== HH.keyCode || (HH.preventDefault(), TB()))
        }), [qH, TB]),
        VB = (0, AH.useCallback)((function() {
          jH({
            type: "focus"
          })
        }), []),
        OB = (0, AH.useCallback)((function() {
          jH({
            type: "blur"
          })
        }), []),
        bB = (0, AH.useCallback)((function() {
          TH || (! function() {
            var HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
            return function(HH) {
              return -1 !== HH.indexOf("MSIE") || -1 !== HH.indexOf("Trident/")
            }(HH) || function(HH) {
              return -1 !== HH.indexOf("Edge/")
            }(HH)
          }() ? TB() : setTimeout(TB, 0))
        }), [TH, TB]),
        kB = function(HH) {
          return rH ? null : HH
        },
        mB = function(HH) {
          return UH ? null : kB(HH)
        },
        oB = function(HH) {
          return VH ? null : kB(HH)
        },
        IB = function(HH) {
          OH && HH.stopPropagation()
        },
        fB = (0, AH.useMemo)((function() {
          return function() {
            var HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              BH = HH.refKey,
              LH = void 0 === BH ? "ref" : BH,
              AH = HH.role,
              SH = HH.onKeyDown,
              hH = HH.onFocus,
              tH = HH.onBlur,
              zH = HH.onClick,
              CH = HH.onDragEnter,
              EH = HH.onDragOver,
              XH = HH.onDragLeave,
              GH = HH.onDrop,
              YH = CB(HH, HB);
            return tB(tB(zB({
              onKeyDown: mB(sH(SH, UB)),
              onFocus: mB(sH(hH, VB)),
              onBlur: mB(sH(tH, OB)),
              onClick: kB(sH(zH, bB)),
              onDragEnter: oB(sH(CH, WB)),
              onDragOver: oB(sH(EH, MB)),
              onDragLeave: oB(sH(XH, xB)),
              onDrop: oB(sH(GH, PB)),
              role: "string" === typeof AH && "" !== AH ? AH : "presentation"
            }, LH, qH), rH || UH ? {} : {
              tabIndex: 0
            }), YH)
          }
        }), [qH, UB, VB, OB, bB, WB, MB, xB, PB, UH, VH, rH]),
        lB = (0, AH.useCallback)((function(HH) {
          HH.stopPropagation()
        }), []),
        KB = (0, AH.useMemo)((function() {
          return function() {
            var HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              BH = HH.refKey,
              LH = void 0 === BH ? "ref" : BH,
              AH = HH.onChange,
              rH = HH.onClick,
              SH = CB(HH, BB);
            return tB(tB({}, zB({
              accept: lH,
              multiple: zH,
              type: "file",
              style: {
                display: "none"
              },
              onChange: kB(sH(AH, PB)),
              onClick: kB(sH(rH, lB)),
              tabIndex: -1
            }, LH, gH)), SH)
          }
        }), [gH, LH, zH, PB, rH]);
      return tB(tB({}, RH), {}, {
        Iq: pH && !rH,
        getRootProps: fB,
        getInputProps: KB,
        rootRef: qH,
        inputRef: gH,
        open: kB(TB)
      })
    }

    function uB(HH, BH) {
      switch (BH.type) {
        case "focus":
          return tB(tB({}, HH), {}, {
            Iq: !0
          });
        case "blur":
          return tB(tB({}, HH), {}, {
            Iq: !1
          });
        case "openDialog":
          return tB(tB({}, GB), {}, {
            isFileDialogActive: !0
          });
        case "closeDialog":
          return tB(tB({}, HH), {}, {
            isFileDialogActive: !1
          });
        case "setDraggedFiles":
          return tB(tB({}, HH), {}, {
            isDragActive: BH.isDragActive,
            isDragAccept: BH.isDragAccept,
            isDragReject: BH.isDragReject
          });
        case "setFiles":
          return tB(tB({}, HH), {}, {
            acceptedFiles: BH.acceptedFiles,
            fileRejections: BH.fileRejections
          });
        case "reset":
          return tB({}, GB);
        default:
          return HH
      }
    }

    function QB() {}
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);