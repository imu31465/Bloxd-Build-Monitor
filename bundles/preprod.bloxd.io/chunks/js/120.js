export const id = 120;
export const ids = [120];
export const modules = {
  5520: (UU, XU) => {
    XU.b = function(UU, XU) {
      if (UU && XU) {
        var zU = Array.isArray(XU) ? XU : XU.split(","),
          cU = UU.name || "",
          yU = (UU.type || "").toLowerCase(),
          QU = yU.replace(/\/.*$/, "");
        return zU.some((function(UU) {
          var XU = UU.trim().toLowerCase();
          return "." === XU.charAt(0) ? cU.toLowerCase().endsWith(XU) : XU.endsWith("/*") ? QU === XU.replace(/\/.*$/, "") : yU === XU
        }))
      }
      return !0
    }
  },
  5490: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => IX
    });
    var cU = zU(61),
      yU = zU(5499),
      QU = zU.n(yU);

    function AU(UU, XU, zU, cU) {
      return new(zU || (zU = Promise))((function(yU, QU) {
        function AU(UU) {
          try {
            oU(cU.next(UU))
          } catch (XU) {
            QU(XU)
          }
        }

        function FU(UU) {
          try {
            oU(cU.throw(UU))
          } catch (XU) {
            QU(XU)
          }
        }

        function oU(UU) {
          var XU;
          UU.done ? yU(UU.value) : (XU = UU.value, XU instanceof zU ? XU : new zU((function(UU) {
            UU(XU)
          }))).then(AU, FU)
        }
        oU((cU = cU.apply(UU, XU || [])).next())
      }))
    }

    function FU(UU, XU) {
      var zU, cU, yU, QU, AU = {
        label: 0,
        sent: function() {
          if (1 & yU[0]) throw yU[1];
          return yU[1]
        },
        trys: [],
        ops: []
      };
      return QU = {
        next: FU(0),
        throw: FU(1),
        return: FU(2)
      }, "function" === typeof Symbol && (QU[Symbol.iterator] = function() {
        return this
      }), QU;

      function FU(FU) {
        return function(oU) {
          return function(FU) {
            if (zU) throw new TypeError("Generator is already executing.");
            for (; QU && (QU = 0, FU[0] && (AU = 0)), AU;) try {
              if (zU = 1, cU && (yU = 2 & FU[0] ? cU.return : FU[0] ? cU.throw || ((yU = cU.return) && yU.call(cU), 0) : cU.next) && !(yU = yU.call(cU, FU[1])).done) return yU;
              switch (cU = 0, yU && (FU = [2 & FU[0], yU.value]), FU[0]) {
                case 0:
                case 1:
                  yU = FU;
                  break;
                case 4:
                  return AU.label++, {
                    value: FU[1],
                    done: !1
                  };
                case 5:
                  AU.label++, cU = FU[1], FU = [0];
                  continue;
                case 7:
                  FU = AU.ops.pop(), AU.trys.pop();
                  continue;
                default:
                  if (!(yU = (yU = AU.trys).length > 0 && yU[yU.length - 1]) && (6 === FU[0] || 2 === FU[0])) {
                    AU = 0;
                    continue
                  }
                  if (3 === FU[0] && (!yU || FU[1] > yU[0] && FU[1] < yU[3])) {
                    AU.label = FU[1];
                    break
                  }
                  if (6 === FU[0] && AU.label < yU[1]) {
                    AU.label = yU[1], yU = FU;
                    break
                  }
                  if (yU && AU.label < yU[2]) {
                    AU.label = yU[2], AU.ops.push(FU);
                    break
                  }
                  yU[2] && AU.ops.pop(), AU.trys.pop();
                  continue
              }
              FU = XU.call(UU, AU)
            } catch (oU) {
              FU = [6, oU], cU = 0
            } finally {
              zU = yU = 0
            }
            if (5 & FU[0]) throw FU[1];
            return {
              value: FU[0] ? FU[1] : void 0,
              done: !0
            }
          }([FU, oU])
        }
      }
    }
    Object.create;

    function oU(UU, XU) {
      var zU = "function" === typeof Symbol && UU[Symbol.iterator];
      if (!zU) return UU;
      var cU, yU, QU = zU.call(UU),
        AU = [];
      try {
        for (;
          (void 0 === XU || XU-- > 0) && !(cU = QU.next()).done;) AU.push(cU.value)
      } catch (FU) {
        yU = {
          error: FU
        }
      } finally {
        try {
          cU && !cU.done && (zU = QU.return) && zU.call(QU)
        } finally {
          if (yU) throw yU.error
        }
      }
      return AU
    }

    function DU(UU, XU, zU) {
      if (zU || 2 === arguments.length)
        for (var cU, yU = 0, QU = XU.length; yU < QU; yU++) !cU && yU in XU || (cU || (cU = Array.prototype.slice.call(XU, 0, yU)), cU[yU] = XU[yU]);
      return UU.concat(cU || Array.prototype.slice.call(XU))
    }
    Object.create;
    "function" === typeof SuppressedError && SuppressedError;
    var EU = new Map([
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
      ["TE", "application/vnd.ms-outlook"]
    ]);

    function YU(UU, XU) {
      var zU = function(UU) {
        var XU = UU.name;
        if (XU && -1 !== XU.lastIndexOf(".") && !UU.type) {
          var zU = XU.split(".").pop().toLowerCase(),
            cU = EU.get(zU);
          cU && Object.defineProperty(UU, "type", {
            value: cU,
            writable: !1,
            configurable: !1,
            enumerable: !0
          })
        }
        return UU
      }(UU);
      if ("string" !== typeof zU.path) {
        var cU = UU.webkitRelativePath;
        Object.defineProperty(zU, "path", {
          value: "string" === typeof XU ? XU : "string" === typeof cU && cU.length > 0 ? cU : UU.name,
          writable: !1,
          configurable: !1,
          enumerable: !0
        })
      }
      return zU
    }
    var NU = [".DS_Store", "Thumbs.db"];

    function IU(UU) {
      return "object" === typeof UU && null !== UU
    }

    function pU(UU) {
      return kU(UU.target.files).map((function(UU) {
        return YU(UU)
      }))
    }

    function aU(UU) {
      return AU(this, void 0, void 0, (function() {
        return FU(this, (function(XU) {
          switch (XU.label) {
            case 0:
              return [4, Promise.all(UU.map((function(UU) {
                return UU.getFile()
              })))];
            case 1:
              return [2, XU.sent().map((function(UU) {
                return YU(UU)
              }))]
          }
        }))
      }))
    }

    function tU(UU, XU) {
      return AU(this, void 0, void 0, (function() {
        var zU;
        return FU(this, (function(cU) {
          switch (cU.label) {
            case 0:
              return UU.items ? (zU = kU(UU.items).filter((function(UU) {
                return "file" === UU.kind
              })), "drop" !== XU ? [2, zU] : [4, Promise.all(zU.map(GU))]) : [3, 2];
            case 1:
              return [2, gU(BU(cU.sent()))];
            case 2:
              return [2, gU(kU(UU.files).map((function(UU) {
                return YU(UU)
              })))]
          }
        }))
      }))
    }

    function gU(UU) {
      return UU.filter((function(UU) {
        return -1 === NU.indexOf(UU.name)
      }))
    }

    function kU(UU) {
      if (null === UU) return [];
      for (var XU = [], zU = 0; zU < UU.length; zU++) {
        var cU = UU[zU];
        XU.push(cU)
      }
      return XU
    }

    function GU(UU) {
      if ("function" !== typeof UU.webkitGetAsEntry) return ZU(UU);
      var XU = UU.webkitGetAsEntry();
      return XU && XU.isDirectory ? PU(XU) : ZU(UU)
    }

    function BU(UU) {
      return UU.reduce((function(UU, XU) {
        return DU(DU([], oU(UU), !1), oU(Array.isArray(XU) ? BU(XU) : [XU]), !1)
      }), [])
    }

    function ZU(UU) {
      var XU = UU.getAsFile();
      if (!XU) return Promise.reject("".concat(UU, " is not a File"));
      var zU = YU(XU);
      return Promise.resolve(zU)
    }

    function RU(UU) {
      return AU(this, void 0, void 0, (function() {
        return FU(this, (function(XU) {
          return [2, UU.isDirectory ? PU(UU) : WU(UU)]
        }))
      }))
    }

    function PU(UU) {
      var XU = UU.createReader();
      return new Promise((function(UU, zU) {
        var cU = [];
        ! function yU() {
          var QU = this;
          XU.readEntries((function(XU) {
            return AU(QU, void 0, void 0, (function() {
              var QU, AU, oU;
              return FU(this, (function(FU) {
                switch (FU.label) {
                  case 0:
                    if (XU.length) return [3, 5];
                    FU.label = 1;
                  case 1:
                    return FU.trys.push([1, 3, , 4]), [4, Promise.all(cU)];
                  case 2:
                    return QU = FU.sent(), UU(QU), [3, 4];
                  case 3:
                    return AU = FU.sent(), zU(AU), [3, 4];
                  case 4:
                    return [3, 6];
                  case 5:
                    oU = Promise.all(XU.map(RU)), cU.push(oU), yU(), FU.label = 6;
                  case 6:
                    return [2]
                }
              }))
            }))
          }), (function(UU) {
            zU(UU)
          }))
        }()
      }))
    }

    function WU(UU) {
      return AU(this, void 0, void 0, (function() {
        return FU(this, (function(XU) {
          return [2, new Promise((function(XU, zU) {
            UU.file((function(zU) {
              var cU = YU(zU, UU.fullPath);
              XU(cU)
            }), (function(UU) {
              zU(UU)
            }))
          }))]
        }))
      }))
    }
    var dU = zU(5520);

    function LU(UU) {
      return function(UU) {
        if (Array.isArray(UU)) return SU(UU)
      }(UU) || function(UU) {
        if ("undefined" !== typeof Symbol && null != UU[Symbol.iterator] || null != UU["@@iterator"]) return Array.from(UU)
      }(UU) || OU(UU) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function eU(UU, XU) {
      var zU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var cU = Object.getOwnPropertySymbols(UU);
        XU && (cU = cU.filter((function(XU) {
          return Object.getOwnPropertyDescriptor(UU, XU).enumerable
        }))), zU.push.apply(zU, cU)
      }
      return zU
    }

    function CU(UU) {
      for (var XU = 1; XU < arguments.length; XU++) {
        var zU = null != arguments[XU] ? arguments[XU] : {};
        XU % 2 ? eU(Object(zU), !0).forEach((function(XU) {
          wU(UU, XU, zU[XU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(zU)) : eU(Object(zU)).forEach((function(XU) {
          Object.defineProperty(UU, XU, Object.getOwnPropertyDescriptor(zU, XU))
        }))
      }
      return UU
    }

    function wU(UU, XU, zU) {
      return XU in UU ? Object.defineProperty(UU, XU, {
        value: zU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[XU] = zU, UU
    }

    function qU(UU, XU) {
      return function(UU) {
        if (Array.isArray(UU)) return UU
      }(UU) || function(UU, XU) {
        var zU = null == UU ? null : "undefined" !== typeof Symbol && UU[Symbol.iterator] || UU["@@iterator"];
        if (null == zU) return;
        var cU, yU, QU = [],
          AU = !0,
          FU = !1;
        try {
          for (zU = zU.call(UU); !(AU = (cU = zU.next()).done) && (QU.push(cU.value), !XU || QU.length !== XU); AU = !0);
        } catch (oU) {
          FU = !0, yU = oU
        } finally {
          try {
            AU || null == zU.return || zU.return()
          } finally {
            if (FU) throw yU
          }
        }
        return QU
      }(UU, XU) || OU(UU, XU) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function OU(UU, XU) {
      if (UU) {
        if ("string" === typeof UU) return SU(UU, XU);
        var zU = Object.prototype.toString.call(UU).slice(8, -1);
        return "Object" === zU && UU.constructor && (zU = UU.constructor.name), "Map" === zU || "Set" === zU ? Array.from(UU) : "Arguments" === zU || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(zU) ? SU(UU, XU) : void 0
      }
    }

    function SU(UU, XU) {
      (null == XU || XU > UU.length) && (XU = UU.length);
      for (var zU = 0, cU = new Array(XU); zU < XU; zU++) cU[zU] = UU[zU];
      return cU
    }
    var rU = "file-invalid-type",
      uU = "file-too-large",
      fU = "file-too-small",
      iU = "too-many-files",
      HU = function(UU) {
        UU = Array.isArray(UU) && 1 === UU.length ? UU[0] : UU;
        var XU = Array.isArray(UU) ? "one of ".concat(UU.join(", ")) : UU;
        return {
          code: rU,
          message: "File type must be ".concat(XU)
        }
      },
      MU = function(UU) {
        return {
          code: uU,
          message: "File is larger than ".concat(UU, " ").concat(1 === UU ? "byte" : "bytes")
        }
      },
      vU = function(UU) {
        return {
          code: fU,
          message: "File is smaller than ".concat(UU, " ").concat(1 === UU ? "byte" : "bytes")
        }
      },
      VU = {
        code: iU,
        message: "Too many files"
      };

    function sU(UU, XU) {
      var zU = "application/x-moz-file" === UU.type || (0, dU.b)(UU, XU);
      return [zU, zU ? null : HU(XU)]
    }

    function nU(UU, XU, zU) {
      if (mU(UU.size))
        if (mU(XU) && mU(zU)) {
          if (UU.size > zU) return [!1, MU(zU)];
          if (UU.size < XU) return [!1, vU(XU)]
        } else {
          if (mU(XU) && UU.size < XU) return [!1, vU(XU)];
          if (mU(zU) && UU.size > zU) return [!1, MU(zU)]
        } return [!0, null]
    }

    function mU(UU) {
      return void 0 !== UU && null !== UU
    }

    function lU(UU) {
      return "function" === typeof UU.isPropagationStopped ? UU.isPropagationStopped() : "undefined" !== typeof UU.cancelBubble && UU.cancelBubble
    }

    function xU(UU) {
      return UU.dataTransfer ? Array.prototype.some.call(UU.dataTransfer.types, (function(UU) {
        return "Files" === UU || "application/x-moz-file" === UU
      })) : !!UU.target && !!UU.target.files
    }

    function JU(UU) {
      UU.preventDefault()
    }

    function jU() {
      for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
      return function(UU) {
        for (var zU = arguments.length, cU = new Array(zU > 1 ? zU - 1 : 0), yU = 1; yU < zU; yU++) cU[yU - 1] = arguments[yU];
        return XU.some((function(XU) {
          return !lU(UU) && XU && XU.apply(void 0, [UU].concat(cU)), lU(UU)
        }))
      }
    }

    function KU(UU) {
      return "audio/*" === UU || "video/*" === UU || "image/*" === UU || "text/*" === UU || /\w+\/[-+.\w]+/g.test(UU)
    }

    function bU(UU) {
      return /^.*\.[\w]+$/.test(UU)
    }
    var TU = ["children"],
      hU = ["open"],
      UX = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
      XX = ["refKey", "onChange", "onClick"];

    function zX(UU) {
      return function(UU) {
        if (Array.isArray(UU)) return QX(UU)
      }(UU) || function(UU) {
        if ("undefined" !== typeof Symbol && null != UU[Symbol.iterator] || null != UU["@@iterator"]) return Array.from(UU)
      }(UU) || yX(UU) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function cX(UU, XU) {
      return function(UU) {
        if (Array.isArray(UU)) return UU
      }(UU) || function(UU, XU) {
        var zU = null == UU ? null : "undefined" !== typeof Symbol && UU[Symbol.iterator] || UU["@@iterator"];
        if (null == zU) return;
        var cU, yU, QU = [],
          AU = !0,
          FU = !1;
        try {
          for (zU = zU.call(UU); !(AU = (cU = zU.next()).done) && (QU.push(cU.value), !XU || QU.length !== XU); AU = !0);
        } catch (oU) {
          FU = !0, yU = oU
        } finally {
          try {
            AU || null == zU.return || zU.return()
          } finally {
            if (FU) throw yU
          }
        }
        return QU
      }(UU, XU) || yX(UU, XU) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function yX(UU, XU) {
      if (UU) {
        if ("string" === typeof UU) return QX(UU, XU);
        var zU = Object.prototype.toString.call(UU).slice(8, -1);
        return "Object" === zU && UU.constructor && (zU = UU.constructor.name), "Map" === zU || "Set" === zU ? Array.from(UU) : "Arguments" === zU || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(zU) ? QX(UU, XU) : void 0
      }
    }

    function QX(UU, XU) {
      (null == XU || XU > UU.length) && (XU = UU.length);
      for (var zU = 0, cU = new Array(XU); zU < XU; zU++) cU[zU] = UU[zU];
      return cU
    }

    function AX(UU, XU) {
      var zU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var cU = Object.getOwnPropertySymbols(UU);
        XU && (cU = cU.filter((function(XU) {
          return Object.getOwnPropertyDescriptor(UU, XU).enumerable
        }))), zU.push.apply(zU, cU)
      }
      return zU
    }

    function FX(UU) {
      for (var XU = 1; XU < arguments.length; XU++) {
        var zU = null != arguments[XU] ? arguments[XU] : {};
        XU % 2 ? AX(Object(zU), !0).forEach((function(XU) {
          oX(UU, XU, zU[XU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(zU)) : AX(Object(zU)).forEach((function(XU) {
          Object.defineProperty(UU, XU, Object.getOwnPropertyDescriptor(zU, XU))
        }))
      }
      return UU
    }

    function oX(UU, XU, zU) {
      return XU in UU ? Object.defineProperty(UU, XU, {
        value: zU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[XU] = zU, UU
    }

    function DX(UU, XU) {
      if (null == UU) return {};
      var zU, cU, yU = function(UU, XU) {
        if (null == UU) return {};
        var zU, cU, yU = {},
          QU = Object.keys(UU);
        for (cU = 0; cU < QU.length; cU++) zU = QU[cU], XU.indexOf(zU) >= 0 || (yU[zU] = UU[zU]);
        return yU
      }(UU, XU);
      if (Object.getOwnPropertySymbols) {
        var QU = Object.getOwnPropertySymbols(UU);
        for (cU = 0; cU < QU.length; cU++) zU = QU[cU], XU.indexOf(zU) >= 0 || Object.prototype.propertyIsEnumerable.call(UU, zU) && (yU[zU] = UU[zU])
      }
      return yU
    }
    var EX = (0, cU.forwardRef)((function(UU, XU) {
      var zU = UU.children,
        yU = IX(DX(UU, TU)),
        QU = yU.open,
        AU = DX(yU, hU);
      return (0, cU.useImperativeHandle)(XU, (function() {
        return {
          open: QU
        }
      }), [QU]), cU.createElement(cU.Fragment, null, zU(FX(FX({}, AU), {}, {
        open: QU
      })))
    }));
    EX.displayName = "Dropzone";
    var YX = {
      disabled: !1,
      getFilesFromEvent: function(UU) {
        return AU(this, void 0, void 0, (function() {
          return FU(this, (function(XU) {
            return IU(UU) && IU(UU.dataTransfer) ? [2, tU(UU.dataTransfer, UU.type)] : function(UU) {
              return IU(UU) && IU(UU.target)
            }(UU) ? [2, pU(UU)] : Array.isArray(UU) && UU.every((function(UU) {
              return "getFile" in UU && "function" === typeof UU.getFile
            })) ? [2, aU(UU)] : [2, []]
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
    EX.defaultProps = YX, EX.propTypes = {
      children: QU().func,
      accept: QU().objectOf(QU().arrayOf(QU().string)),
      multiple: QU().bool,
      preventDropOnDocument: QU().bool,
      noClick: QU().bool,
      noKeyboard: QU().bool,
      noDrag: QU().bool,
      noDragEventsBubbling: QU().bool,
      minSize: QU().number,
      maxSize: QU().number,
      maxFiles: QU().number,
      disabled: QU().bool,
      getFilesFromEvent: QU().func,
      onFileDialogCancel: QU().func,
      onFileDialogOpen: QU().func,
      useFsAccessApi: QU().bool,
      autoFocus: QU().bool,
      onDragEnter: QU().func,
      onDragLeave: QU().func,
      onDragOver: QU().func,
      onDrop: QU().func,
      onDropAccepted: QU().func,
      onDropRejected: QU().func,
      onError: QU().func,
      validator: QU().func
    };
    var NX = {
      Kw: !1,
      isFileDialogActive: !1,
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1,
      acceptedFiles: [],
      fileRejections: []
    };

    function IX() {
      var UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        XU = FX(FX({}, YX), UU),
        zU = XU.accept,
        yU = XU.disabled,
        QU = XU.getFilesFromEvent,
        AU = XU.maxSize,
        FU = XU.minSize,
        oU = XU.multiple,
        DU = XU.maxFiles,
        EU = XU.onDragEnter,
        YU = XU.onDragLeave,
        NU = XU.onDragOver,
        IU = XU.onDrop,
        pU = XU.onDropAccepted,
        aU = XU.onDropRejected,
        tU = XU.onFileDialogCancel,
        gU = XU.onFileDialogOpen,
        kU = XU.useFsAccessApi,
        GU = XU.autoFocus,
        BU = XU.preventDropOnDocument,
        ZU = XU.noClick,
        RU = XU.noKeyboard,
        PU = XU.noDrag,
        WU = XU.noDragEventsBubbling,
        dU = XU.onError,
        eU = XU.validator,
        OU = (0, cU.useMemo)((function() {
          return function(UU) {
            if (mU(UU)) return Object.entries(UU).reduce((function(UU, XU) {
              var zU = qU(XU, 2),
                cU = zU[0],
                yU = zU[1];
              return [].concat(LU(UU), [cU], LU(yU))
            }), []).filter((function(UU) {
              return KU(UU) || bU(UU)
            })).join(",")
          }(zU)
        }), [zU]),
        SU = (0, cU.useMemo)((function() {
          return function(UU) {
            return mU(UU) ? [{
              description: "Files",
              accept: Object.entries(UU).filter((function(UU) {
                var XU = qU(UU, 2),
                  zU = XU[0],
                  cU = XU[1],
                  yU = !0;
                return KU(zU) || (console.warn('Skipped "'.concat(zU, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), yU = !1), Array.isArray(cU) && cU.every(bU) || (console.warn('Skipped "'.concat(zU, '" because an invalid file extension was provided.')), yU = !1), yU
              })).reduce((function(UU, XU) {
                var zU = qU(XU, 2),
                  cU = zU[0],
                  yU = zU[1];
                return CU(CU({}, UU), {}, wU({}, cU, yU))
              }), {})
            }] : UU
          }(zU)
        }), [zU]),
        rU = (0, cU.useMemo)((function() {
          return "function" === typeof gU ? gU : aX
        }), [gU]),
        uU = (0, cU.useMemo)((function() {
          return "function" === typeof tU ? tU : aX
        }), [tU]),
        fU = (0, cU.useRef)(null),
        iU = (0, cU.useRef)(null),
        HU = cX((0, cU.useReducer)(pX, NX), 2),
        MU = HU[0],
        vU = HU[1],
        TU = MU.Kw,
        hU = MU.isFileDialogActive,
        yX = (0, cU.useRef)("undefined" !== typeof window && window.isSecureContext && kU && "showOpenFilePicker" in window),
        QX = function() {
          !yX.current && hU && setTimeout((function() {
            iU.current && (iU.current.files.length || (vU({
              type: "closeDialog"
            }), uU()))
          }), 300)
        };
      (0, cU.useEffect)((function() {
        return window.addEventListener("focus", QX, !1),
          function() {
            window.removeEventListener("focus", QX, !1)
          }
      }), [iU, hU, uU, yX]);
      var AX = (0, cU.useRef)([]),
        EX = function(UU) {
          fU.current && fU.current.contains(UU.target) || (UU.preventDefault(), AX.current = [])
        };
      (0, cU.useEffect)((function() {
        return BU && (document.addEventListener("dragover", JU, !1), document.addEventListener("drop", EX, !1)),
          function() {
            BU && (document.removeEventListener("dragover", JU), document.removeEventListener("drop", EX))
          }
      }), [fU, BU]), (0, cU.useEffect)((function() {
        return !yU && GU && fU.current && fU.current.focus(),
          function() {}
      }), [fU, GU, yU]);
      var IX = (0, cU.useCallback)((function(UU) {
          dU ? dU(UU) : console.error(UU)
        }), [dU]),
        tX = (0, cU.useCallback)((function(UU) {
          UU.preventDefault(), UU.persist(), wX(UU), AX.current = [].concat(zX(AX.current), [UU.target]), xU(UU) && Promise.resolve(QU(UU)).then((function(XU) {
            if (!lU(UU) || WU) {
              var zU = XU.length,
                cU = zU > 0 && function(UU) {
                  var XU = UU.files,
                    zU = UU.accept,
                    cU = UU.minSize,
                    yU = UU.maxSize,
                    QU = UU.multiple,
                    AU = UU.maxFiles,
                    FU = UU.validator;
                  return !(!QU && XU.length > 1 || QU && AU >= 1 && XU.length > AU) && XU.every((function(UU) {
                    var XU = qU(sU(UU, zU), 1)[0],
                      QU = qU(nU(UU, cU, yU), 1)[0],
                      AU = FU ? FU(UU) : null;
                    return XU && QU && !AU
                  }))
                }({
                  files: XU,
                  accept: OU,
                  minSize: FU,
                  maxSize: AU,
                  multiple: oU,
                  maxFiles: DU,
                  validator: eU
                });
              vU({
                isDragAccept: cU,
                isDragReject: zU > 0 && !cU,
                isDragActive: !0,
                type: "setDraggedFiles"
              }), EU && EU(UU)
            }
          })).catch((function(UU) {
            return IX(UU)
          }))
        }), [QU, EU, IX, WU, OU, FU, AU, oU, DU, eU]),
        gX = (0, cU.useCallback)((function(UU) {
          UU.preventDefault(), UU.persist(), wX(UU);
          var XU = xU(UU);
          if (XU && UU.dataTransfer) try {
            UU.dataTransfer.dropEffect = "copy"
          } catch (zU) {}
          return XU && NU && NU(UU), !1
        }), [NU, WU]),
        kX = (0, cU.useCallback)((function(UU) {
          UU.preventDefault(), UU.persist(), wX(UU);
          var XU = AX.current.filter((function(UU) {
              return fU.current && fU.current.contains(UU)
            })),
            zU = XU.indexOf(UU.target); - 1 !== zU && XU.splice(zU, 1), AX.current = XU, XU.length > 0 || (vU({
            type: "setDraggedFiles",
            isDragActive: !1,
            isDragAccept: !1,
            isDragReject: !1
          }), xU(UU) && YU && YU(UU))
        }), [fU, YU, WU]),
        GX = (0, cU.useCallback)((function(UU, XU) {
          var zU = [],
            cU = [];
          UU.forEach((function(UU) {
            var XU = cX(sU(UU, OU), 2),
              yU = XU[0],
              QU = XU[1],
              oU = cX(nU(UU, FU, AU), 2),
              DU = oU[0],
              EU = oU[1],
              YU = eU ? eU(UU) : null;
            if (yU && DU && !YU) zU.push(UU);
            else {
              var NU = [QU, EU];
              YU && (NU = NU.concat(YU)), cU.push({
                file: UU,
                errors: NU.filter((function(UU) {
                  return UU
                }))
              })
            }
          })), (!oU && zU.length > 1 || oU && DU >= 1 && zU.length > DU) && (zU.forEach((function(UU) {
            cU.push({
              file: UU,
              errors: [VU]
            })
          })), zU.splice(0)), vU({
            acceptedFiles: zU,
            fileRejections: cU,
            type: "setFiles"
          }), IU && IU(zU, cU, XU), cU.length > 0 && aU && aU(cU, XU), zU.length > 0 && pU && pU(zU, XU)
        }), [vU, oU, OU, FU, AU, DU, IU, pU, aU, eU]),
        BX = (0, cU.useCallback)((function(UU) {
          UU.preventDefault(), UU.persist(), wX(UU), AX.current = [], xU(UU) && Promise.resolve(QU(UU)).then((function(XU) {
            lU(UU) && !WU || GX(XU, UU)
          })).catch((function(UU) {
            return IX(UU)
          })), vU({
            type: "reset"
          })
        }), [QU, GX, IX, WU]),
        ZX = (0, cU.useCallback)((function() {
          if (yX.current) {
            vU({
              type: "openDialog"
            }), rU();
            var UU = {
              multiple: oU,
              types: SU
            };
            window.showOpenFilePicker(UU).then((function(UU) {
              return QU(UU)
            })).then((function(UU) {
              GX(UU, null), vU({
                type: "closeDialog"
              })
            })).catch((function(UU) {
              var XU;
              (XU = UU) instanceof DOMException && ("AbortError" === XU.name || XU.code === XU.ABORT_ERR) ? (uU(UU), vU({
                type: "closeDialog"
              })) : ! function(UU) {
                return UU instanceof DOMException && ("SecurityError" === UU.name || UU.code === UU.SECURITY_ERR)
              }(UU) ? IX(UU) : (yX.current = !1, iU.current ? (iU.current.value = null, iU.current.click()) : IX(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))
            }))
          } else iU.current && (vU({
            type: "openDialog"
          }), rU(), iU.current.value = null, iU.current.click())
        }), [vU, rU, uU, kU, GX, IX, SU, oU]),
        RX = (0, cU.useCallback)((function(UU) {
          fU.current && fU.current.isEqualNode(UU.target) && (" " !== UU.key && "Enter" !== UU.key && 32 !== UU.keyCode && 13 !== UU.keyCode || (UU.preventDefault(), ZX()))
        }), [fU, ZX]),
        PX = (0, cU.useCallback)((function() {
          vU({
            type: "focus"
          })
        }), []),
        WX = (0, cU.useCallback)((function() {
          vU({
            type: "blur"
          })
        }), []),
        dX = (0, cU.useCallback)((function() {
          ZU || (! function() {
            var UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
            return function(UU) {
              return -1 !== UU.indexOf("MSIE") || -1 !== UU.indexOf("Trident/")
            }(UU) || function(UU) {
              return -1 !== UU.indexOf("Edge/")
            }(UU)
          }() ? ZX() : setTimeout(ZX, 0))
        }), [ZU, ZX]),
        LX = function(UU) {
          return yU ? null : UU
        },
        eX = function(UU) {
          return RU ? null : LX(UU)
        },
        CX = function(UU) {
          return PU ? null : LX(UU)
        },
        wX = function(UU) {
          WU && UU.stopPropagation()
        },
        qX = (0, cU.useMemo)((function() {
          return function() {
            var UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              XU = UU.refKey,
              zU = void 0 === XU ? "ref" : XU,
              cU = UU.role,
              QU = UU.onKeyDown,
              AU = UU.onFocus,
              FU = UU.onBlur,
              oU = UU.onClick,
              DU = UU.onDragEnter,
              EU = UU.onDragOver,
              YU = UU.onDragLeave,
              NU = UU.onDrop,
              IU = DX(UU, UX);
            return FX(FX(oX({
              onKeyDown: eX(jU(QU, RX)),
              onFocus: eX(jU(AU, PX)),
              onBlur: eX(jU(FU, WX)),
              onClick: LX(jU(oU, dX)),
              onDragEnter: CX(jU(DU, tX)),
              onDragOver: CX(jU(EU, gX)),
              onDragLeave: CX(jU(YU, kX)),
              onDrop: CX(jU(NU, BX)),
              role: "string" === typeof cU && "" !== cU ? cU : "presentation"
            }, zU, fU), yU || RU ? {} : {
              tabIndex: 0
            }), IU)
          }
        }), [fU, RX, PX, WX, dX, tX, gX, kX, BX, RU, PU, yU]),
        OX = (0, cU.useCallback)((function(UU) {
          UU.stopPropagation()
        }), []),
        SX = (0, cU.useMemo)((function() {
          return function() {
            var UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              XU = UU.refKey,
              zU = void 0 === XU ? "ref" : XU,
              cU = UU.onChange,
              yU = UU.onClick,
              QU = DX(UU, XX);
            return FX(FX({}, oX({
              accept: OU,
              multiple: oU,
              type: "file",
              style: {
                display: "none"
              },
              onChange: LX(jU(cU, BX)),
              onClick: LX(jU(yU, OX)),
              tabIndex: -1
            }, zU, iU)), QU)
          }
        }), [iU, zU, oU, BX, yU]);
      return FX(FX({}, MU), {}, {
        Kw: TU && !yU,
        getRootProps: qX,
        getInputProps: SX,
        rootRef: fU,
        inputRef: iU,
        open: LX(ZX)
      })
    }

    function pX(UU, XU) {
      switch (XU.type) {
        case "focus":
          return FX(FX({}, UU), {}, {
            Kw: !0
          });
        case "blur":
          return FX(FX({}, UU), {}, {
            Kw: !1
          });
        case "openDialog":
          return FX(FX({}, NX), {}, {
            isFileDialogActive: !0
          });
        case "closeDialog":
          return FX(FX({}, UU), {}, {
            isFileDialogActive: !1
          });
        case "setDraggedFiles":
          return FX(FX({}, UU), {}, {
            isDragActive: XU.isDragActive,
            isDragAccept: XU.isDragAccept,
            isDragReject: XU.isDragReject
          });
        case "setFiles":
          return FX(FX({}, UU), {}, {
            acceptedFiles: XU.acceptedFiles,
            fileRejections: XU.fileRejections
          });
        case "reset":
          return FX({}, NX);
        default:
          return UU
      }
    }

    function aX() {}
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);