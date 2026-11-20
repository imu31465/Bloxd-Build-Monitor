export const id = 105;
export const ids = [105];
export const modules = {
  4649: (UU, RU) => {
    RU.e = function(UU, RU) {
      if (UU && RU) {
        var gU = Array.isArray(RU) ? RU : RU.split(","),
          tU = UU.name || "",
          pU = (UU.type || "").toLowerCase(),
          EU = pU.replace(/\/.*$/, "");
        return gU.some((function(UU) {
          var RU = UU.trim().toLowerCase();
          return "." === RU.charAt(0) ? tU.toLowerCase().endsWith(RU) : RU.endsWith("/*") ? EU === RU.replace(/\/.*$/, "") : pU === RU
        }))
      }
      return !0
    }
  },
  4623: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => uR
    });
    var tU = gU(56),
      pU = gU(4626),
      EU = gU.n(pU);

    function PU(UU, RU, gU, tU) {
      return new(gU || (gU = Promise))((function(pU, EU) {
        function PU(UU) {
          try {
            qU(tU.next(UU))
          } catch (RU) {
            EU(RU)
          }
        }

        function TU(UU) {
          try {
            qU(tU.throw(UU))
          } catch (RU) {
            EU(RU)
          }
        }

        function qU(UU) {
          var RU;
          UU.done ? pU(UU.value) : (RU = UU.value, RU instanceof gU ? RU : new gU((function(UU) {
            UU(RU)
          }))).then(PU, TU)
        }
        qU((tU = tU.apply(UU, RU || [])).next())
      }))
    }

    function TU(UU, RU) {
      var gU, tU, pU, EU, PU = {
        label: 0,
        sent: function() {
          if (1 & pU[0]) throw pU[1];
          return pU[1]
        },
        trys: [],
        ops: []
      };
      return EU = {
        next: TU(0),
        throw: TU(1),
        return: TU(2)
      }, "function" === typeof Symbol && (EU[Symbol.iterator] = function() {
        return this
      }), EU;

      function TU(TU) {
        return function(qU) {
          return function(TU) {
            if (gU) throw new TypeError("Generator is already executing.");
            for (; EU && (EU = 0, TU[0] && (PU = 0)), PU;) try {
              if (gU = 1, tU && (pU = 2 & TU[0] ? tU.return : TU[0] ? tU.throw || ((pU = tU.return) && pU.call(tU), 0) : tU.next) && !(pU = pU.call(tU, TU[1])).done) return pU;
              switch (tU = 0, pU && (TU = [2 & TU[0], pU.value]), TU[0]) {
                case 0:
                case 1:
                  pU = TU;
                  break;
                case 4:
                  return PU.label++, {
                    value: TU[1],
                    done: !1
                  };
                case 5:
                  PU.label++, tU = TU[1], TU = [0];
                  continue;
                case 7:
                  TU = PU.ops.pop(), PU.trys.pop();
                  continue;
                default:
                  if (!(pU = (pU = PU.trys).length > 0 && pU[pU.length - 1]) && (6 === TU[0] || 2 === TU[0])) {
                    PU = 0;
                    continue
                  }
                  if (3 === TU[0] && (!pU || TU[1] > pU[0] && TU[1] < pU[3])) {
                    PU.label = TU[1];
                    break
                  }
                  if (6 === TU[0] && PU.label < pU[1]) {
                    PU.label = pU[1], pU = TU;
                    break
                  }
                  if (pU && PU.label < pU[2]) {
                    PU.label = pU[2], PU.ops.push(TU);
                    break
                  }
                  pU[2] && PU.ops.pop(), PU.trys.pop();
                  continue
              }
              TU = RU.call(UU, PU)
            } catch (qU) {
              TU = [6, qU], tU = 0
            } finally {
              gU = pU = 0
            }
            if (5 & TU[0]) throw TU[1];
            return {
              value: TU[0] ? TU[1] : void 0,
              done: !0
            }
          }([TU, qU])
        }
      }
    }
    Object.create;

    function qU(UU, RU) {
      var gU = "function" === typeof Symbol && UU[Symbol.iterator];
      if (!gU) return UU;
      var tU, pU, EU = gU.call(UU),
        PU = [];
      try {
        for (;
          (void 0 === RU || RU-- > 0) && !(tU = EU.next()).done;) PU.push(tU.value)
      } catch (TU) {
        pU = {
          error: TU
        }
      } finally {
        try {
          tU && !tU.done && (gU = EU.return) && gU.call(EU)
        } finally {
          if (pU) throw pU.error
        }
      }
      return PU
    }

    function KU(UU, RU, gU) {
      if (gU || 2 === arguments.length)
        for (var tU, pU = 0, EU = RU.length; pU < EU; pU++) !tU && pU in RU || (tU || (tU = Array.prototype.slice.call(RU, 0, pU)), tU[pU] = RU[pU]);
      return UU.concat(tU || Array.prototype.slice.call(RU))
    }
    Object.create;
    "function" === typeof SuppressedError && SuppressedError;
    var cU = new Map([
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
      ["aP", "application/vnd.ms-outlook"]
    ]);

    function GU(UU, RU) {
      var gU = function(UU) {
        var RU = UU.name;
        if (RU && -1 !== RU.lastIndexOf(".") && !UU.type) {
          var gU = RU.split(".").pop().toLowerCase(),
            tU = cU.get(gU);
          tU && Object.defineProperty(UU, "type", {
            value: tU,
            writable: !1,
            configurable: !1,
            enumerable: !0
          })
        }
        return UU
      }(UU);
      if ("string" !== typeof gU.path) {
        var tU = UU.webkitRelativePath;
        Object.defineProperty(gU, "path", {
          value: "string" === typeof RU ? RU : "string" === typeof tU && tU.length > 0 ? tU : UU.name,
          writable: !1,
          configurable: !1,
          enumerable: !0
        })
      }
      return gU
    }
    var jU = [".DS_Store", "Thumbs.db"];

    function uU(UU) {
      return "object" === typeof UU && null !== UU
    }

    function CU(UU) {
      return WU(UU.target.files).map((function(UU) {
        return GU(UU)
      }))
    }

    function hU(UU) {
      return PU(this, void 0, void 0, (function() {
        return TU(this, (function(RU) {
          switch (RU.label) {
            case 0:
              return [4, Promise.all(UU.map((function(UU) {
                return UU.getFile()
              })))];
            case 1:
              return [2, RU.sent().map((function(UU) {
                return GU(UU)
              }))]
          }
        }))
      }))
    }

    function QU(UU, RU) {
      return PU(this, void 0, void 0, (function() {
        var gU;
        return TU(this, (function(tU) {
          switch (tU.label) {
            case 0:
              return UU.items ? (gU = WU(UU.items).filter((function(UU) {
                return "file" === UU.kind
              })), "drop" !== RU ? [2, gU] : [4, Promise.all(gU.map(fU))]) : [3, 2];
            case 1:
              return [2, eU(xU(tU.sent()))];
            case 2:
              return [2, eU(WU(UU.files).map((function(UU) {
                return GU(UU)
              })))]
          }
        }))
      }))
    }

    function eU(UU) {
      return UU.filter((function(UU) {
        return -1 === jU.indexOf(UU.name)
      }))
    }

    function WU(UU) {
      if (null === UU) return [];
      for (var RU = [], gU = 0; gU < UU.length; gU++) {
        var tU = UU[gU];
        RU.push(tU)
      }
      return RU
    }

    function fU(UU) {
      if ("function" !== typeof UU.webkitGetAsEntry) return mU(UU);
      var RU = UU.webkitGetAsEntry();
      return RU && RU.isDirectory ? JU(RU) : mU(UU)
    }

    function xU(UU) {
      return UU.reduce((function(UU, RU) {
        return KU(KU([], qU(UU), !1), qU(Array.isArray(RU) ? xU(RU) : [RU]), !1)
      }), [])
    }

    function mU(UU) {
      var RU = UU.getAsFile();
      if (!RU) return Promise.reject("".concat(UU, " is not a File"));
      var gU = GU(RU);
      return Promise.resolve(gU)
    }

    function IU(UU) {
      return PU(this, void 0, void 0, (function() {
        return TU(this, (function(RU) {
          return [2, UU.isDirectory ? JU(UU) : wU(UU)]
        }))
      }))
    }

    function JU(UU) {
      var RU = UU.createReader();
      return new Promise((function(UU, gU) {
        var tU = [];
        ! function pU() {
          var EU = this;
          RU.readEntries((function(RU) {
            return PU(EU, void 0, void 0, (function() {
              var EU, PU, qU;
              return TU(this, (function(TU) {
                switch (TU.label) {
                  case 0:
                    if (RU.length) return [3, 5];
                    TU.label = 1;
                  case 1:
                    return TU.trys.push([1, 3, , 4]), [4, Promise.all(tU)];
                  case 2:
                    return EU = TU.sent(), UU(EU), [3, 4];
                  case 3:
                    return PU = TU.sent(), gU(PU), [3, 4];
                  case 4:
                    return [3, 6];
                  case 5:
                    qU = Promise.all(RU.map(IU)), tU.push(qU), pU(), TU.label = 6;
                  case 6:
                    return [2]
                }
              }))
            }))
          }), (function(UU) {
            gU(UU)
          }))
        }()
      }))
    }

    function wU(UU) {
      return PU(this, void 0, void 0, (function() {
        return TU(this, (function(RU) {
          return [2, new Promise((function(RU, gU) {
            UU.file((function(gU) {
              var tU = GU(gU, UU.fullPath);
              RU(tU)
            }), (function(UU) {
              gU(UU)
            }))
          }))]
        }))
      }))
    }
    var nU = gU(4649);

    function bU(UU) {
      return function(UU) {
        if (Array.isArray(UU)) return VU(UU)
      }(UU) || function(UU) {
        if ("undefined" !== typeof Symbol && null != UU[Symbol.iterator] || null != UU["@@iterator"]) return Array.from(UU)
      }(UU) || BU(UU) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function oU(UU, RU) {
      var gU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var tU = Object.getOwnPropertySymbols(UU);
        RU && (tU = tU.filter((function(RU) {
          return Object.getOwnPropertyDescriptor(UU, RU).enumerable
        }))), gU.push.apply(gU, tU)
      }
      return gU
    }

    function ZU(UU) {
      for (var RU = 1; RU < arguments.length; RU++) {
        var gU = null != arguments[RU] ? arguments[RU] : {};
        RU % 2 ? oU(Object(gU), !0).forEach((function(RU) {
          aU(UU, RU, gU[RU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(gU)) : oU(Object(gU)).forEach((function(RU) {
          Object.defineProperty(UU, RU, Object.getOwnPropertyDescriptor(gU, RU))
        }))
      }
      return UU
    }

    function aU(UU, RU, gU) {
      return RU in UU ? Object.defineProperty(UU, RU, {
        value: gU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[RU] = gU, UU
    }

    function YU(UU, RU) {
      return function(UU) {
        if (Array.isArray(UU)) return UU
      }(UU) || function(UU, RU) {
        var gU = null == UU ? null : "undefined" !== typeof Symbol && UU[Symbol.iterator] || UU["@@iterator"];
        if (null == gU) return;
        var tU, pU, EU = [],
          PU = !0,
          TU = !1;
        try {
          for (gU = gU.call(UU); !(PU = (tU = gU.next()).done) && (EU.push(tU.value), !RU || EU.length !== RU); PU = !0);
        } catch (qU) {
          TU = !0, pU = qU
        } finally {
          try {
            PU || null == gU.return || gU.return()
          } finally {
            if (TU) throw pU
          }
        }
        return EU
      }(UU, RU) || BU(UU, RU) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function BU(UU, RU) {
      if (UU) {
        if ("string" === typeof UU) return VU(UU, RU);
        var gU = Object.prototype.toString.call(UU).slice(8, -1);
        return "Object" === gU && UU.constructor && (gU = UU.constructor.name), "Map" === gU || "Set" === gU ? Array.from(UU) : "Arguments" === gU || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gU) ? VU(UU, RU) : void 0
      }
    }

    function VU(UU, RU) {
      (null == RU || RU > UU.length) && (RU = UU.length);
      for (var gU = 0, tU = new Array(RU); gU < RU; gU++) tU[gU] = UU[gU];
      return tU
    }
    var rU = "file-invalid-type",
      XU = "file-too-large",
      vU = "file-too-small",
      dU = "too-many-files",
      HU = function(UU) {
        UU = Array.isArray(UU) && 1 === UU.length ? UU[0] : UU;
        var RU = Array.isArray(UU) ? "one of ".concat(UU.join(", ")) : UU;
        return {
          code: rU,
          message: "File type must be ".concat(RU)
        }
      },
      SU = function(UU) {
        return {
          code: XU,
          message: "File is larger than ".concat(UU, " ").concat(1 === UU ? "byte" : "bytes")
        }
      },
      sU = function(UU) {
        return {
          code: vU,
          message: "File is smaller than ".concat(UU, " ").concat(1 === UU ? "byte" : "bytes")
        }
      },
      yU = {
        code: dU,
        message: "Too many files"
      };

    function kU(UU, RU) {
      var gU = "application/x-moz-file" === UU.type || (0, nU.e)(UU, RU);
      return [gU, gU ? null : HU(RU)]
    }

    function FU(UU, RU, gU) {
      if (iU(UU.size))
        if (iU(RU) && iU(gU)) {
          if (UU.size > gU) return [!1, SU(gU)];
          if (UU.size < RU) return [!1, sU(RU)]
        } else {
          if (iU(RU) && UU.size < RU) return [!1, sU(RU)];
          if (iU(gU) && UU.size > gU) return [!1, SU(gU)]
        } return [!0, null]
    }

    function iU(UU) {
      return void 0 !== UU && null !== UU
    }

    function AU(UU) {
      return "function" === typeof UU.isPropagationStopped ? UU.isPropagationStopped() : "undefined" !== typeof UU.cancelBubble && UU.cancelBubble
    }

    function zU(UU) {
      return UU.dataTransfer ? Array.prototype.some.call(UU.dataTransfer.types, (function(UU) {
        return "Files" === UU || "application/x-moz-file" === UU
      })) : !!UU.target && !!UU.target.files
    }

    function MU(UU) {
      UU.preventDefault()
    }

    function DU() {
      for (var UU = arguments.length, RU = new Array(UU), gU = 0; gU < UU; gU++) RU[gU] = arguments[gU];
      return function(UU) {
        for (var gU = arguments.length, tU = new Array(gU > 1 ? gU - 1 : 0), pU = 1; pU < gU; pU++) tU[pU - 1] = arguments[pU];
        return RU.some((function(RU) {
          return !AU(UU) && RU && RU.apply(void 0, [UU].concat(tU)), AU(UU)
        }))
      }
    }

    function LU(UU) {
      return "audio/*" === UU || "video/*" === UU || "image/*" === UU || "text/*" === UU || /\w+\/[-+.\w]+/g.test(UU)
    }

    function NU(UU) {
      return /^.*\.[\w]+$/.test(UU)
    }
    var lU = ["children"],
      OU = ["open"],
      UR = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
      RR = ["refKey", "onChange", "onClick"];

    function gR(UU) {
      return function(UU) {
        if (Array.isArray(UU)) return ER(UU)
      }(UU) || function(UU) {
        if ("undefined" !== typeof Symbol && null != UU[Symbol.iterator] || null != UU["@@iterator"]) return Array.from(UU)
      }(UU) || pR(UU) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function tR(UU, RU) {
      return function(UU) {
        if (Array.isArray(UU)) return UU
      }(UU) || function(UU, RU) {
        var gU = null == UU ? null : "undefined" !== typeof Symbol && UU[Symbol.iterator] || UU["@@iterator"];
        if (null == gU) return;
        var tU, pU, EU = [],
          PU = !0,
          TU = !1;
        try {
          for (gU = gU.call(UU); !(PU = (tU = gU.next()).done) && (EU.push(tU.value), !RU || EU.length !== RU); PU = !0);
        } catch (qU) {
          TU = !0, pU = qU
        } finally {
          try {
            PU || null == gU.return || gU.return()
          } finally {
            if (TU) throw pU
          }
        }
        return EU
      }(UU, RU) || pR(UU, RU) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function pR(UU, RU) {
      if (UU) {
        if ("string" === typeof UU) return ER(UU, RU);
        var gU = Object.prototype.toString.call(UU).slice(8, -1);
        return "Object" === gU && UU.constructor && (gU = UU.constructor.name), "Map" === gU || "Set" === gU ? Array.from(UU) : "Arguments" === gU || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gU) ? ER(UU, RU) : void 0
      }
    }

    function ER(UU, RU) {
      (null == RU || RU > UU.length) && (RU = UU.length);
      for (var gU = 0, tU = new Array(RU); gU < RU; gU++) tU[gU] = UU[gU];
      return tU
    }

    function PR(UU, RU) {
      var gU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var tU = Object.getOwnPropertySymbols(UU);
        RU && (tU = tU.filter((function(RU) {
          return Object.getOwnPropertyDescriptor(UU, RU).enumerable
        }))), gU.push.apply(gU, tU)
      }
      return gU
    }

    function TR(UU) {
      for (var RU = 1; RU < arguments.length; RU++) {
        var gU = null != arguments[RU] ? arguments[RU] : {};
        RU % 2 ? PR(Object(gU), !0).forEach((function(RU) {
          qR(UU, RU, gU[RU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(gU)) : PR(Object(gU)).forEach((function(RU) {
          Object.defineProperty(UU, RU, Object.getOwnPropertyDescriptor(gU, RU))
        }))
      }
      return UU
    }

    function qR(UU, RU, gU) {
      return RU in UU ? Object.defineProperty(UU, RU, {
        value: gU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[RU] = gU, UU
    }

    function KR(UU, RU) {
      if (null == UU) return {};
      var gU, tU, pU = function(UU, RU) {
        if (null == UU) return {};
        var gU, tU, pU = {},
          EU = Object.keys(UU);
        for (tU = 0; tU < EU.length; tU++) gU = EU[tU], RU.indexOf(gU) >= 0 || (pU[gU] = UU[gU]);
        return pU
      }(UU, RU);
      if (Object.getOwnPropertySymbols) {
        var EU = Object.getOwnPropertySymbols(UU);
        for (tU = 0; tU < EU.length; tU++) gU = EU[tU], RU.indexOf(gU) >= 0 || Object.prototype.propertyIsEnumerable.call(UU, gU) && (pU[gU] = UU[gU])
      }
      return pU
    }
    var cR = (0, tU.forwardRef)((function(UU, RU) {
      var gU = UU.children,
        pU = uR(KR(UU, lU)),
        EU = pU.open,
        PU = KR(pU, OU);
      return (0, tU.useImperativeHandle)(RU, (function() {
        return {
          open: EU
        }
      }), [EU]), tU.createElement(tU.Fragment, null, gU(TR(TR({}, PU), {}, {
        open: EU
      })))
    }));
    cR.displayName = "Dropzone";
    var GR = {
      disabled: !1,
      getFilesFromEvent: function(UU) {
        return PU(this, void 0, void 0, (function() {
          return TU(this, (function(RU) {
            return uU(UU) && uU(UU.dataTransfer) ? [2, QU(UU.dataTransfer, UU.type)] : function(UU) {
              return uU(UU) && uU(UU.target)
            }(UU) ? [2, CU(UU)] : Array.isArray(UU) && UU.every((function(UU) {
              return "getFile" in UU && "function" === typeof UU.getFile
            })) ? [2, hU(UU)] : [2, []]
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
    cR.defaultProps = GR, cR.propTypes = {
      children: EU().func,
      accept: EU().objectOf(EU().arrayOf(EU().string)),
      multiple: EU().bool,
      preventDropOnDocument: EU().bool,
      noClick: EU().bool,
      noKeyboard: EU().bool,
      noDrag: EU().bool,
      noDragEventsBubbling: EU().bool,
      minSize: EU().number,
      maxSize: EU().number,
      maxFiles: EU().number,
      disabled: EU().bool,
      getFilesFromEvent: EU().func,
      onFileDialogCancel: EU().func,
      onFileDialogOpen: EU().func,
      useFsAccessApi: EU().bool,
      autoFocus: EU().bool,
      onDragEnter: EU().func,
      onDragLeave: EU().func,
      onDragOver: EU().func,
      onDrop: EU().func,
      onDropAccepted: EU().func,
      onDropRejected: EU().func,
      onError: EU().func,
      validator: EU().func
    };
    var jR = {
      Jw: !1,
      isFileDialogActive: !1,
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1,
      acceptedFiles: [],
      fileRejections: []
    };

    function uR() {
      var UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        RU = TR(TR({}, GR), UU),
        gU = RU.accept,
        pU = RU.disabled,
        EU = RU.getFilesFromEvent,
        PU = RU.maxSize,
        TU = RU.minSize,
        qU = RU.multiple,
        KU = RU.maxFiles,
        cU = RU.onDragEnter,
        GU = RU.onDragLeave,
        jU = RU.onDragOver,
        uU = RU.onDrop,
        CU = RU.onDropAccepted,
        hU = RU.onDropRejected,
        QU = RU.onFileDialogCancel,
        eU = RU.onFileDialogOpen,
        WU = RU.useFsAccessApi,
        fU = RU.autoFocus,
        xU = RU.preventDropOnDocument,
        mU = RU.noClick,
        IU = RU.noKeyboard,
        JU = RU.noDrag,
        wU = RU.noDragEventsBubbling,
        nU = RU.onError,
        oU = RU.validator,
        BU = (0, tU.useMemo)((function() {
          return function(UU) {
            if (iU(UU)) return Object.entries(UU).reduce((function(UU, RU) {
              var gU = YU(RU, 2),
                tU = gU[0],
                pU = gU[1];
              return [].concat(bU(UU), [tU], bU(pU))
            }), []).filter((function(UU) {
              return LU(UU) || NU(UU)
            })).join(",")
          }(gU)
        }), [gU]),
        VU = (0, tU.useMemo)((function() {
          return function(UU) {
            return iU(UU) ? [{
              description: "Files",
              accept: Object.entries(UU).filter((function(UU) {
                var RU = YU(UU, 2),
                  gU = RU[0],
                  tU = RU[1],
                  pU = !0;
                return LU(gU) || (console.warn('Skipped "'.concat(gU, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), pU = !1), Array.isArray(tU) && tU.every(NU) || (console.warn('Skipped "'.concat(gU, '" because an invalid file extension was provided.')), pU = !1), pU
              })).reduce((function(UU, RU) {
                var gU = YU(RU, 2),
                  tU = gU[0],
                  pU = gU[1];
                return ZU(ZU({}, UU), {}, aU({}, tU, pU))
              }), {})
            }] : UU
          }(gU)
        }), [gU]),
        rU = (0, tU.useMemo)((function() {
          return "function" === typeof eU ? eU : hR
        }), [eU]),
        XU = (0, tU.useMemo)((function() {
          return "function" === typeof QU ? QU : hR
        }), [QU]),
        vU = (0, tU.useRef)(null),
        dU = (0, tU.useRef)(null),
        HU = tR((0, tU.useReducer)(CR, jR), 2),
        SU = HU[0],
        sU = HU[1],
        lU = SU.Jw,
        OU = SU.isFileDialogActive,
        pR = (0, tU.useRef)("undefined" !== typeof window && window.isSecureContext && WU && "showOpenFilePicker" in window),
        ER = function() {
          !pR.current && OU && setTimeout((function() {
            dU.current && (dU.current.files.length || (sU({
              type: "closeDialog"
            }), XU()))
          }), 300)
        };
      (0, tU.useEffect)((function() {
        return window.addEventListener("focus", ER, !1),
          function() {
            window.removeEventListener("focus", ER, !1)
          }
      }), [dU, OU, XU, pR]);
      var PR = (0, tU.useRef)([]),
        cR = function(UU) {
          vU.current && vU.current.contains(UU.target) || (UU.preventDefault(), PR.current = [])
        };
      (0, tU.useEffect)((function() {
        return xU && (document.addEventListener("dragover", MU, !1), document.addEventListener("drop", cR, !1)),
          function() {
            xU && (document.removeEventListener("dragover", MU), document.removeEventListener("drop", cR))
          }
      }), [vU, xU]), (0, tU.useEffect)((function() {
        return !pU && fU && vU.current && vU.current.focus(),
          function() {}
      }), [vU, fU, pU]);
      var uR = (0, tU.useCallback)((function(UU) {
          nU ? nU(UU) : console.error(UU)
        }), [nU]),
        QR = (0, tU.useCallback)((function(UU) {
          UU.preventDefault(), UU.persist(), aR(UU), PR.current = [].concat(gR(PR.current), [UU.target]), zU(UU) && Promise.resolve(EU(UU)).then((function(RU) {
            if (!AU(UU) || wU) {
              var gU = RU.length,
                tU = gU > 0 && function(UU) {
                  var RU = UU.files,
                    gU = UU.accept,
                    tU = UU.minSize,
                    pU = UU.maxSize,
                    EU = UU.multiple,
                    PU = UU.maxFiles,
                    TU = UU.validator;
                  return !(!EU && RU.length > 1 || EU && PU >= 1 && RU.length > PU) && RU.every((function(UU) {
                    var RU = YU(kU(UU, gU), 1)[0],
                      EU = YU(FU(UU, tU, pU), 1)[0],
                      PU = TU ? TU(UU) : null;
                    return RU && EU && !PU
                  }))
                }({
                  files: RU,
                  accept: BU,
                  minSize: TU,
                  maxSize: PU,
                  multiple: qU,
                  maxFiles: KU,
                  validator: oU
                });
              sU({
                isDragAccept: tU,
                isDragReject: gU > 0 && !tU,
                isDragActive: !0,
                type: "setDraggedFiles"
              }), cU && cU(UU)
            }
          })).catch((function(UU) {
            return uR(UU)
          }))
        }), [EU, cU, uR, wU, BU, TU, PU, qU, KU, oU]),
        eR = (0, tU.useCallback)((function(UU) {
          UU.preventDefault(), UU.persist(), aR(UU);
          var RU = zU(UU);
          if (RU && UU.dataTransfer) try {
            UU.dataTransfer.dropEffect = "copy"
          } catch (gU) {}
          return RU && jU && jU(UU), !1
        }), [jU, wU]),
        WR = (0, tU.useCallback)((function(UU) {
          UU.preventDefault(), UU.persist(), aR(UU);
          var RU = PR.current.filter((function(UU) {
              return vU.current && vU.current.contains(UU)
            })),
            gU = RU.indexOf(UU.target); - 1 !== gU && RU.splice(gU, 1), PR.current = RU, RU.length > 0 || (sU({
            type: "setDraggedFiles",
            isDragActive: !1,
            isDragAccept: !1,
            isDragReject: !1
          }), zU(UU) && GU && GU(UU))
        }), [vU, GU, wU]),
        fR = (0, tU.useCallback)((function(UU, RU) {
          var gU = [],
            tU = [];
          UU.forEach((function(UU) {
            var RU = tR(kU(UU, BU), 2),
              pU = RU[0],
              EU = RU[1],
              qU = tR(FU(UU, TU, PU), 2),
              KU = qU[0],
              cU = qU[1],
              GU = oU ? oU(UU) : null;
            if (pU && KU && !GU) gU.push(UU);
            else {
              var jU = [EU, cU];
              GU && (jU = jU.concat(GU)), tU.push({
                file: UU,
                errors: jU.filter((function(UU) {
                  return UU
                }))
              })
            }
          })), (!qU && gU.length > 1 || qU && KU >= 1 && gU.length > KU) && (gU.forEach((function(UU) {
            tU.push({
              file: UU,
              errors: [yU]
            })
          })), gU.splice(0)), sU({
            acceptedFiles: gU,
            fileRejections: tU,
            type: "setFiles"
          }), uU && uU(gU, tU, RU), tU.length > 0 && hU && hU(tU, RU), gU.length > 0 && CU && CU(gU, RU)
        }), [sU, qU, BU, TU, PU, KU, uU, CU, hU, oU]),
        xR = (0, tU.useCallback)((function(UU) {
          UU.preventDefault(), UU.persist(), aR(UU), PR.current = [], zU(UU) && Promise.resolve(EU(UU)).then((function(RU) {
            AU(UU) && !wU || fR(RU, UU)
          })).catch((function(UU) {
            return uR(UU)
          })), sU({
            type: "reset"
          })
        }), [EU, fR, uR, wU]),
        mR = (0, tU.useCallback)((function() {
          if (pR.current) {
            sU({
              type: "openDialog"
            }), rU();
            var UU = {
              multiple: qU,
              types: VU
            };
            window.showOpenFilePicker(UU).then((function(UU) {
              return EU(UU)
            })).then((function(UU) {
              fR(UU, null), sU({
                type: "closeDialog"
              })
            })).catch((function(UU) {
              var RU;
              (RU = UU) instanceof DOMException && ("AbortError" === RU.name || RU.code === RU.ABORT_ERR) ? (XU(UU), sU({
                type: "closeDialog"
              })) : ! function(UU) {
                return UU instanceof DOMException && ("SecurityError" === UU.name || UU.code === UU.SECURITY_ERR)
              }(UU) ? uR(UU) : (pR.current = !1, dU.current ? (dU.current.value = null, dU.current.click()) : uR(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))
            }))
          } else dU.current && (sU({
            type: "openDialog"
          }), rU(), dU.current.value = null, dU.current.click())
        }), [sU, rU, XU, WU, fR, uR, VU, qU]),
        IR = (0, tU.useCallback)((function(UU) {
          vU.current && vU.current.isEqualNode(UU.target) && (" " !== UU.key && "Enter" !== UU.key && 32 !== UU.keyCode && 13 !== UU.keyCode || (UU.preventDefault(), mR()))
        }), [vU, mR]),
        JR = (0, tU.useCallback)((function() {
          sU({
            type: "focus"
          })
        }), []),
        wR = (0, tU.useCallback)((function() {
          sU({
            type: "blur"
          })
        }), []),
        nR = (0, tU.useCallback)((function() {
          mU || (! function() {
            var UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
            return function(UU) {
              return -1 !== UU.indexOf("MSIE") || -1 !== UU.indexOf("Trident/")
            }(UU) || function(UU) {
              return -1 !== UU.indexOf("Edge/")
            }(UU)
          }() ? mR() : setTimeout(mR, 0))
        }), [mU, mR]),
        bR = function(UU) {
          return pU ? null : UU
        },
        oR = function(UU) {
          return IU ? null : bR(UU)
        },
        ZR = function(UU) {
          return JU ? null : bR(UU)
        },
        aR = function(UU) {
          wU && UU.stopPropagation()
        },
        YR = (0, tU.useMemo)((function() {
          return function() {
            var UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              RU = UU.refKey,
              gU = void 0 === RU ? "ref" : RU,
              tU = UU.role,
              EU = UU.onKeyDown,
              PU = UU.onFocus,
              TU = UU.onBlur,
              qU = UU.onClick,
              KU = UU.onDragEnter,
              cU = UU.onDragOver,
              GU = UU.onDragLeave,
              jU = UU.onDrop,
              uU = KR(UU, UR);
            return TR(TR(qR({
              onKeyDown: oR(DU(EU, IR)),
              onFocus: oR(DU(PU, JR)),
              onBlur: oR(DU(TU, wR)),
              onClick: bR(DU(qU, nR)),
              onDragEnter: ZR(DU(KU, QR)),
              onDragOver: ZR(DU(cU, eR)),
              onDragLeave: ZR(DU(GU, WR)),
              onDrop: ZR(DU(jU, xR)),
              role: "string" === typeof tU && "" !== tU ? tU : "presentation"
            }, gU, vU), pU || IU ? {} : {
              tabIndex: 0
            }), uU)
          }
        }), [vU, IR, JR, wR, nR, QR, eR, WR, xR, IU, JU, pU]),
        BR = (0, tU.useCallback)((function(UU) {
          UU.stopPropagation()
        }), []),
        VR = (0, tU.useMemo)((function() {
          return function() {
            var UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              RU = UU.refKey,
              gU = void 0 === RU ? "ref" : RU,
              tU = UU.onChange,
              pU = UU.onClick,
              EU = KR(UU, RR);
            return TR(TR({}, qR({
              accept: BU,
              multiple: qU,
              type: "file",
              style: {
                display: "none"
              },
              onChange: bR(DU(tU, xR)),
              onClick: bR(DU(pU, BR)),
              tabIndex: -1
            }, gU, dU)), EU)
          }
        }), [dU, gU, qU, xR, pU]);
      return TR(TR({}, SU), {}, {
        Jw: lU && !pU,
        getRootProps: YR,
        getInputProps: VR,
        rootRef: vU,
        inputRef: dU,
        open: bR(mR)
      })
    }

    function CR(UU, RU) {
      switch (RU.type) {
        case "focus":
          return TR(TR({}, UU), {}, {
            Jw: !0
          });
        case "blur":
          return TR(TR({}, UU), {}, {
            Jw: !1
          });
        case "openDialog":
          return TR(TR({}, jR), {}, {
            isFileDialogActive: !0
          });
        case "closeDialog":
          return TR(TR({}, UU), {}, {
            isFileDialogActive: !1
          });
        case "setDraggedFiles":
          return TR(TR({}, UU), {}, {
            isDragActive: RU.isDragActive,
            isDragAccept: RU.isDragAccept,
            isDragReject: RU.isDragReject
          });
        case "setFiles":
          return TR(TR({}, UU), {}, {
            acceptedFiles: RU.acceptedFiles,
            fileRejections: RU.fileRejections
          });
        case "reset":
          return TR({}, jR);
        default:
          return UU
      }
    }

    function hR() {}
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);