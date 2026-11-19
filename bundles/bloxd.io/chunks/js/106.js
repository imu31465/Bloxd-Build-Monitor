export const id = 106;
export const ids = [106];
export const modules = {
  4562: (YY, rY) => {
    rY.c = function(YY, rY) {
      if (YY && rY) {
        var DY = Array.isArray(rY) ? rY : rY.split(","),
          FY = YY.name || "",
          AY = (YY.type || "").toLowerCase(),
          IY = AY.replace(/\/.*$/, "");
        return DY.some((function(YY) {
          var rY = YY.trim().toLowerCase();
          return "." === rY.charAt(0) ? FY.toLowerCase().endsWith(rY) : rY.endsWith("/*") ? IY === rY.replace(/\/.*$/, "") : AY === rY
        }))
      }
      return !0
    }
  },
  4536: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => ir
    });
    var FY = DY(61),
      AY = DY(4543),
      IY = DY.n(AY);

    function RY(YY, rY, DY, FY) {
      return new(DY || (DY = Promise))((function(AY, IY) {
        function RY(YY) {
          try {
            gY(FY.next(YY))
          } catch (rY) {
            IY(rY)
          }
        }

        function OY(YY) {
          try {
            gY(FY.throw(YY))
          } catch (rY) {
            IY(rY)
          }
        }

        function gY(YY) {
          var rY;
          YY.done ? AY(YY.value) : (rY = YY.value, rY instanceof DY ? rY : new DY((function(YY) {
            YY(rY)
          }))).then(RY, OY)
        }
        gY((FY = FY.apply(YY, rY || [])).next())
      }))
    }

    function OY(YY, rY) {
      var DY, FY, AY, IY, RY = {
        label: 0,
        sent: function() {
          if (1 & AY[0]) throw AY[1];
          return AY[1]
        },
        trys: [],
        ops: []
      };
      return IY = {
        next: OY(0),
        throw: OY(1),
        return: OY(2)
      }, "function" === typeof Symbol && (IY[Symbol.iterator] = function() {
        return this
      }), IY;

      function OY(OY) {
        return function(gY) {
          return function(OY) {
            if (DY) throw new TypeError("Generator is already executing.");
            for (; IY && (IY = 0, OY[0] && (RY = 0)), RY;) try {
              if (DY = 1, FY && (AY = 2 & OY[0] ? FY.return : OY[0] ? FY.throw || ((AY = FY.return) && AY.call(FY), 0) : FY.next) && !(AY = AY.call(FY, OY[1])).done) return AY;
              switch (FY = 0, AY && (OY = [2 & OY[0], AY.value]), OY[0]) {
                case 0:
                case 1:
                  AY = OY;
                  break;
                case 4:
                  return RY.label++, {
                    value: OY[1],
                    done: !1
                  };
                case 5:
                  RY.label++, FY = OY[1], OY = [0];
                  continue;
                case 7:
                  OY = RY.ops.pop(), RY.trys.pop();
                  continue;
                default:
                  if (!(AY = (AY = RY.trys).length > 0 && AY[AY.length - 1]) && (6 === OY[0] || 2 === OY[0])) {
                    RY = 0;
                    continue
                  }
                  if (3 === OY[0] && (!AY || OY[1] > AY[0] && OY[1] < AY[3])) {
                    RY.label = OY[1];
                    break
                  }
                  if (6 === OY[0] && RY.label < AY[1]) {
                    RY.label = AY[1], AY = OY;
                    break
                  }
                  if (AY && RY.label < AY[2]) {
                    RY.label = AY[2], RY.ops.push(OY);
                    break
                  }
                  AY[2] && RY.ops.pop(), RY.trys.pop();
                  continue
              }
              OY = rY.call(YY, RY)
            } catch (gY) {
              OY = [6, gY], FY = 0
            } finally {
              DY = AY = 0
            }
            if (5 & OY[0]) throw OY[1];
            return {
              value: OY[0] ? OY[1] : void 0,
              done: !0
            }
          }([OY, gY])
        }
      }
    }
    Object.create;

    function gY(YY, rY) {
      var DY = "function" === typeof Symbol && YY[Symbol.iterator];
      if (!DY) return YY;
      var FY, AY, IY = DY.call(YY),
        RY = [];
      try {
        for (;
          (void 0 === rY || rY-- > 0) && !(FY = IY.next()).done;) RY.push(FY.value)
      } catch (OY) {
        AY = {
          error: OY
        }
      } finally {
        try {
          FY && !FY.done && (DY = IY.return) && DY.call(IY)
        } finally {
          if (AY) throw AY.error
        }
      }
      return RY
    }

    function aY(YY, rY, DY) {
      if (DY || 2 === arguments.length)
        for (var FY, AY = 0, IY = rY.length; AY < IY; AY++) !FY && AY in rY || (FY || (FY = Array.prototype.slice.call(rY, 0, AY)), FY[AY] = rY[AY]);
      return YY.concat(FY || Array.prototype.slice.call(rY))
    }
    Object.create;
    "function" === typeof SuppressedError && SuppressedError;
    var vY = new Map([
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
      ["vv", "application/vnd.ms-outlook"]
    ]);

    function uY(YY, rY) {
      var DY = function(YY) {
        var rY = YY.name;
        if (rY && -1 !== rY.lastIndexOf(".") && !YY.type) {
          var DY = rY.split(".").pop().toLowerCase(),
            FY = vY.get(DY);
          FY && Object.defineProperty(YY, "type", {
            value: FY,
            writable: !1,
            configurable: !1,
            enumerable: !0
          })
        }
        return YY
      }(YY);
      if ("string" !== typeof DY.path) {
        var FY = YY.webkitRelativePath;
        Object.defineProperty(DY, "path", {
          value: "string" === typeof rY ? rY : "string" === typeof FY && FY.length > 0 ? FY : YY.name,
          writable: !1,
          configurable: !1,
          enumerable: !0
        })
      }
      return DY
    }
    var sY = [".DS_Store", "Thumbs.db"];

    function iY(YY) {
      return "object" === typeof YY && null !== YY
    }

    function yY(YY) {
      return EY(YY.target.files).map((function(YY) {
        return uY(YY)
      }))
    }

    function QY(YY) {
      return RY(this, void 0, void 0, (function() {
        return OY(this, (function(rY) {
          switch (rY.label) {
            case 0:
              return [4, Promise.all(YY.map((function(YY) {
                return YY.getFile()
              })))];
            case 1:
              return [2, rY.sent().map((function(YY) {
                return uY(YY)
              }))]
          }
        }))
      }))
    }

    function oY(YY, rY) {
      return RY(this, void 0, void 0, (function() {
        var DY;
        return OY(this, (function(FY) {
          switch (FY.label) {
            case 0:
              return YY.items ? (DY = EY(YY.items).filter((function(YY) {
                return "file" === YY.kind
              })), "drop" !== rY ? [2, DY] : [4, Promise.all(DY.map(mY))]) : [3, 2];
            case 1:
              return [2, WY(VY(FY.sent()))];
            case 2:
              return [2, WY(EY(YY.files).map((function(YY) {
                return uY(YY)
              })))]
          }
        }))
      }))
    }

    function WY(YY) {
      return YY.filter((function(YY) {
        return -1 === sY.indexOf(YY.name)
      }))
    }

    function EY(YY) {
      if (null === YY) return [];
      for (var rY = [], DY = 0; DY < YY.length; DY++) {
        var FY = YY[DY];
        rY.push(FY)
      }
      return rY
    }

    function mY(YY) {
      if ("function" !== typeof YY.webkitGetAsEntry) return SY(YY);
      var rY = YY.webkitGetAsEntry();
      return rY && rY.isDirectory ? TY(rY) : SY(YY)
    }

    function VY(YY) {
      return YY.reduce((function(YY, rY) {
        return aY(aY([], gY(YY), !1), gY(Array.isArray(rY) ? VY(rY) : [rY]), !1)
      }), [])
    }

    function SY(YY) {
      var rY = YY.getAsFile();
      if (!rY) return Promise.reject("".concat(YY, " is not a File"));
      var DY = uY(rY);
      return Promise.resolve(DY)
    }

    function lY(YY) {
      return RY(this, void 0, void 0, (function() {
        return OY(this, (function(rY) {
          return [2, YY.isDirectory ? TY(YY) : eY(YY)]
        }))
      }))
    }

    function TY(YY) {
      var rY = YY.createReader();
      return new Promise((function(YY, DY) {
        var FY = [];
        ! function AY() {
          var IY = this;
          rY.readEntries((function(rY) {
            return RY(IY, void 0, void 0, (function() {
              var IY, RY, gY;
              return OY(this, (function(OY) {
                switch (OY.label) {
                  case 0:
                    if (rY.length) return [3, 5];
                    OY.label = 1;
                  case 1:
                    return OY.trys.push([1, 3, , 4]), [4, Promise.all(FY)];
                  case 2:
                    return IY = OY.sent(), YY(IY), [3, 4];
                  case 3:
                    return RY = OY.sent(), DY(RY), [3, 4];
                  case 4:
                    return [3, 6];
                  case 5:
                    gY = Promise.all(rY.map(lY)), FY.push(gY), AY(), OY.label = 6;
                  case 6:
                    return [2]
                }
              }))
            }))
          }), (function(YY) {
            DY(YY)
          }))
        }()
      }))
    }

    function eY(YY) {
      return RY(this, void 0, void 0, (function() {
        return OY(this, (function(rY) {
          return [2, new Promise((function(rY, DY) {
            YY.file((function(DY) {
              var FY = uY(DY, YY.fullPath);
              rY(FY)
            }), (function(YY) {
              DY(YY)
            }))
          }))]
        }))
      }))
    }
    var NY = DY(4562);

    function BY(YY) {
      return function(YY) {
        if (Array.isArray(YY)) return CY(YY)
      }(YY) || function(YY) {
        if ("undefined" !== typeof Symbol && null != YY[Symbol.iterator] || null != YY["@@iterator"]) return Array.from(YY)
      }(YY) || ZY(YY) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function cY(YY, rY) {
      var DY = Object.keys(YY);
      if (Object.getOwnPropertySymbols) {
        var FY = Object.getOwnPropertySymbols(YY);
        rY && (FY = FY.filter((function(rY) {
          return Object.getOwnPropertyDescriptor(YY, rY).enumerable
        }))), DY.push.apply(DY, FY)
      }
      return DY
    }

    function KY(YY) {
      for (var rY = 1; rY < arguments.length; rY++) {
        var DY = null != arguments[rY] ? arguments[rY] : {};
        rY % 2 ? cY(Object(DY), !0).forEach((function(rY) {
          HY(YY, rY, DY[rY])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(YY, Object.getOwnPropertyDescriptors(DY)) : cY(Object(DY)).forEach((function(rY) {
          Object.defineProperty(YY, rY, Object.getOwnPropertyDescriptor(DY, rY))
        }))
      }
      return YY
    }

    function HY(YY, rY, DY) {
      return rY in YY ? Object.defineProperty(YY, rY, {
        value: DY,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : YY[rY] = DY, YY
    }

    function zY(YY, rY) {
      return function(YY) {
        if (Array.isArray(YY)) return YY
      }(YY) || function(YY, rY) {
        var DY = null == YY ? null : "undefined" !== typeof Symbol && YY[Symbol.iterator] || YY["@@iterator"];
        if (null == DY) return;
        var FY, AY, IY = [],
          RY = !0,
          OY = !1;
        try {
          for (DY = DY.call(YY); !(RY = (FY = DY.next()).done) && (IY.push(FY.value), !rY || IY.length !== rY); RY = !0);
        } catch (gY) {
          OY = !0, AY = gY
        } finally {
          try {
            RY || null == DY.return || DY.return()
          } finally {
            if (OY) throw AY
          }
        }
        return IY
      }(YY, rY) || ZY(YY, rY) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function ZY(YY, rY) {
      if (YY) {
        if ("string" === typeof YY) return CY(YY, rY);
        var DY = Object.prototype.toString.call(YY).slice(8, -1);
        return "Object" === DY && YY.constructor && (DY = YY.constructor.name), "Map" === DY || "Set" === DY ? Array.from(YY) : "Arguments" === DY || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(DY) ? CY(YY, rY) : void 0
      }
    }

    function CY(YY, rY) {
      (null == rY || rY > YY.length) && (rY = YY.length);
      for (var DY = 0, FY = new Array(rY); DY < rY; DY++) FY[DY] = YY[DY];
      return FY
    }
    var fY = "file-invalid-type",
      jY = "file-too-large",
      hY = "file-too-small",
      dY = "too-many-files",
      JY = function(YY) {
        YY = Array.isArray(YY) && 1 === YY.length ? YY[0] : YY;
        var rY = Array.isArray(YY) ? "one of ".concat(YY.join(", ")) : YY;
        return {
          code: fY,
          message: "File type must be ".concat(rY)
        }
      },
      MY = function(YY) {
        return {
          code: jY,
          message: "File is larger than ".concat(YY, " ").concat(1 === YY ? "byte" : "bytes")
        }
      },
      wY = function(YY) {
        return {
          code: hY,
          message: "File is smaller than ".concat(YY, " ").concat(1 === YY ? "byte" : "bytes")
        }
      },
      bY = {
        code: dY,
        message: "Too many files"
      };

    function XY(YY, rY) {
      var DY = "application/x-moz-file" === YY.type || (0, NY.c)(YY, rY);
      return [DY, DY ? null : JY(rY)]
    }

    function qY(YY, rY, DY) {
      if (pY(YY.size))
        if (pY(rY) && pY(DY)) {
          if (YY.size > DY) return [!1, MY(DY)];
          if (YY.size < rY) return [!1, wY(rY)]
        } else {
          if (pY(rY) && YY.size < rY) return [!1, wY(rY)];
          if (pY(DY) && YY.size > DY) return [!1, MY(DY)]
        } return [!0, null]
    }

    function pY(YY) {
      return void 0 !== YY && null !== YY
    }

    function kY(YY) {
      return "function" === typeof YY.isPropagationStopped ? YY.isPropagationStopped() : "undefined" !== typeof YY.cancelBubble && YY.cancelBubble
    }

    function GY(YY) {
      return YY.dataTransfer ? Array.prototype.some.call(YY.dataTransfer.types, (function(YY) {
        return "Files" === YY || "application/x-moz-file" === YY
      })) : !!YY.target && !!YY.target.files
    }

    function xY(YY) {
      YY.preventDefault()
    }

    function nY() {
      for (var YY = arguments.length, rY = new Array(YY), DY = 0; DY < YY; DY++) rY[DY] = arguments[DY];
      return function(YY) {
        for (var DY = arguments.length, FY = new Array(DY > 1 ? DY - 1 : 0), AY = 1; AY < DY; AY++) FY[AY - 1] = arguments[AY];
        return rY.some((function(rY) {
          return !kY(YY) && rY && rY.apply(void 0, [YY].concat(FY)), kY(YY)
        }))
      }
    }

    function PY(YY) {
      return "audio/*" === YY || "video/*" === YY || "image/*" === YY || "text/*" === YY || /\w+\/[-+.\w]+/g.test(YY)
    }

    function UY(YY) {
      return /^.*\.[\w]+$/.test(YY)
    }
    var LY = ["children"],
      tY = ["open"],
      Yr = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
      rr = ["refKey", "onChange", "onClick"];

    function Dr(YY) {
      return function(YY) {
        if (Array.isArray(YY)) return Ir(YY)
      }(YY) || function(YY) {
        if ("undefined" !== typeof Symbol && null != YY[Symbol.iterator] || null != YY["@@iterator"]) return Array.from(YY)
      }(YY) || Ar(YY) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Fr(YY, rY) {
      return function(YY) {
        if (Array.isArray(YY)) return YY
      }(YY) || function(YY, rY) {
        var DY = null == YY ? null : "undefined" !== typeof Symbol && YY[Symbol.iterator] || YY["@@iterator"];
        if (null == DY) return;
        var FY, AY, IY = [],
          RY = !0,
          OY = !1;
        try {
          for (DY = DY.call(YY); !(RY = (FY = DY.next()).done) && (IY.push(FY.value), !rY || IY.length !== rY); RY = !0);
        } catch (gY) {
          OY = !0, AY = gY
        } finally {
          try {
            RY || null == DY.return || DY.return()
          } finally {
            if (OY) throw AY
          }
        }
        return IY
      }(YY, rY) || Ar(YY, rY) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Ar(YY, rY) {
      if (YY) {
        if ("string" === typeof YY) return Ir(YY, rY);
        var DY = Object.prototype.toString.call(YY).slice(8, -1);
        return "Object" === DY && YY.constructor && (DY = YY.constructor.name), "Map" === DY || "Set" === DY ? Array.from(YY) : "Arguments" === DY || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(DY) ? Ir(YY, rY) : void 0
      }
    }

    function Ir(YY, rY) {
      (null == rY || rY > YY.length) && (rY = YY.length);
      for (var DY = 0, FY = new Array(rY); DY < rY; DY++) FY[DY] = YY[DY];
      return FY
    }

    function Rr(YY, rY) {
      var DY = Object.keys(YY);
      if (Object.getOwnPropertySymbols) {
        var FY = Object.getOwnPropertySymbols(YY);
        rY && (FY = FY.filter((function(rY) {
          return Object.getOwnPropertyDescriptor(YY, rY).enumerable
        }))), DY.push.apply(DY, FY)
      }
      return DY
    }

    function Or(YY) {
      for (var rY = 1; rY < arguments.length; rY++) {
        var DY = null != arguments[rY] ? arguments[rY] : {};
        rY % 2 ? Rr(Object(DY), !0).forEach((function(rY) {
          gr(YY, rY, DY[rY])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(YY, Object.getOwnPropertyDescriptors(DY)) : Rr(Object(DY)).forEach((function(rY) {
          Object.defineProperty(YY, rY, Object.getOwnPropertyDescriptor(DY, rY))
        }))
      }
      return YY
    }

    function gr(YY, rY, DY) {
      return rY in YY ? Object.defineProperty(YY, rY, {
        value: DY,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : YY[rY] = DY, YY
    }

    function ar(YY, rY) {
      if (null == YY) return {};
      var DY, FY, AY = function(YY, rY) {
        if (null == YY) return {};
        var DY, FY, AY = {},
          IY = Object.keys(YY);
        for (FY = 0; FY < IY.length; FY++) DY = IY[FY], rY.indexOf(DY) >= 0 || (AY[DY] = YY[DY]);
        return AY
      }(YY, rY);
      if (Object.getOwnPropertySymbols) {
        var IY = Object.getOwnPropertySymbols(YY);
        for (FY = 0; FY < IY.length; FY++) DY = IY[FY], rY.indexOf(DY) >= 0 || Object.prototype.propertyIsEnumerable.call(YY, DY) && (AY[DY] = YY[DY])
      }
      return AY
    }
    var vr = (0, FY.forwardRef)((function(YY, rY) {
      var DY = YY.children,
        AY = ir(ar(YY, LY)),
        IY = AY.open,
        RY = ar(AY, tY);
      return (0, FY.useImperativeHandle)(rY, (function() {
        return {
          open: IY
        }
      }), [IY]), FY.createElement(FY.Fragment, null, DY(Or(Or({}, RY), {}, {
        open: IY
      })))
    }));
    vr.displayName = "Dropzone";
    var ur = {
      disabled: !1,
      getFilesFromEvent: function(YY) {
        return RY(this, void 0, void 0, (function() {
          return OY(this, (function(rY) {
            return iY(YY) && iY(YY.dataTransfer) ? [2, oY(YY.dataTransfer, YY.type)] : function(YY) {
              return iY(YY) && iY(YY.target)
            }(YY) ? [2, yY(YY)] : Array.isArray(YY) && YY.every((function(YY) {
              return "getFile" in YY && "function" === typeof YY.getFile
            })) ? [2, QY(YY)] : [2, []]
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
    vr.defaultProps = ur, vr.propTypes = {
      children: IY().func,
      accept: IY().objectOf(IY().arrayOf(IY().string)),
      multiple: IY().bool,
      preventDropOnDocument: IY().bool,
      noClick: IY().bool,
      noKeyboard: IY().bool,
      noDrag: IY().bool,
      noDragEventsBubbling: IY().bool,
      minSize: IY().number,
      maxSize: IY().number,
      maxFiles: IY().number,
      disabled: IY().bool,
      getFilesFromEvent: IY().func,
      onFileDialogCancel: IY().func,
      onFileDialogOpen: IY().func,
      useFsAccessApi: IY().bool,
      autoFocus: IY().bool,
      onDragEnter: IY().func,
      onDragLeave: IY().func,
      onDragOver: IY().func,
      onDrop: IY().func,
      onDropAccepted: IY().func,
      onDropRejected: IY().func,
      onError: IY().func,
      validator: IY().func
    };
    var sr = {
      Vl: !1,
      isFileDialogActive: !1,
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1,
      acceptedFiles: [],
      fileRejections: []
    };

    function ir() {
      var YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        rY = Or(Or({}, ur), YY),
        DY = rY.accept,
        AY = rY.disabled,
        IY = rY.getFilesFromEvent,
        RY = rY.maxSize,
        OY = rY.minSize,
        gY = rY.multiple,
        aY = rY.maxFiles,
        vY = rY.onDragEnter,
        uY = rY.onDragLeave,
        sY = rY.onDragOver,
        iY = rY.onDrop,
        yY = rY.onDropAccepted,
        QY = rY.onDropRejected,
        oY = rY.onFileDialogCancel,
        WY = rY.onFileDialogOpen,
        EY = rY.useFsAccessApi,
        mY = rY.autoFocus,
        VY = rY.preventDropOnDocument,
        SY = rY.noClick,
        lY = rY.noKeyboard,
        TY = rY.noDrag,
        eY = rY.noDragEventsBubbling,
        NY = rY.onError,
        cY = rY.validator,
        ZY = (0, FY.useMemo)((function() {
          return function(YY) {
            if (pY(YY)) return Object.entries(YY).reduce((function(YY, rY) {
              var DY = zY(rY, 2),
                FY = DY[0],
                AY = DY[1];
              return [].concat(BY(YY), [FY], BY(AY))
            }), []).filter((function(YY) {
              return PY(YY) || UY(YY)
            })).join(",")
          }(DY)
        }), [DY]),
        CY = (0, FY.useMemo)((function() {
          return function(YY) {
            return pY(YY) ? [{
              description: "Files",
              accept: Object.entries(YY).filter((function(YY) {
                var rY = zY(YY, 2),
                  DY = rY[0],
                  FY = rY[1],
                  AY = !0;
                return PY(DY) || (console.warn('Skipped "'.concat(DY, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), AY = !1), Array.isArray(FY) && FY.every(UY) || (console.warn('Skipped "'.concat(DY, '" because an invalid file extension was provided.')), AY = !1), AY
              })).reduce((function(YY, rY) {
                var DY = zY(rY, 2),
                  FY = DY[0],
                  AY = DY[1];
                return KY(KY({}, YY), {}, HY({}, FY, AY))
              }), {})
            }] : YY
          }(DY)
        }), [DY]),
        fY = (0, FY.useMemo)((function() {
          return "function" === typeof WY ? WY : Qr
        }), [WY]),
        jY = (0, FY.useMemo)((function() {
          return "function" === typeof oY ? oY : Qr
        }), [oY]),
        hY = (0, FY.useRef)(null),
        dY = (0, FY.useRef)(null),
        JY = Fr((0, FY.useReducer)(yr, sr), 2),
        MY = JY[0],
        wY = JY[1],
        LY = MY.Vl,
        tY = MY.isFileDialogActive,
        Ar = (0, FY.useRef)("undefined" !== typeof window && window.isSecureContext && EY && "showOpenFilePicker" in window),
        Ir = function() {
          !Ar.current && tY && setTimeout((function() {
            dY.current && (dY.current.files.length || (wY({
              type: "closeDialog"
            }), jY()))
          }), 300)
        };
      (0, FY.useEffect)((function() {
        return window.addEventListener("focus", Ir, !1),
          function() {
            window.removeEventListener("focus", Ir, !1)
          }
      }), [dY, tY, jY, Ar]);
      var Rr = (0, FY.useRef)([]),
        vr = function(YY) {
          hY.current && hY.current.contains(YY.target) || (YY.preventDefault(), Rr.current = [])
        };
      (0, FY.useEffect)((function() {
        return VY && (document.addEventListener("dragover", xY, !1), document.addEventListener("drop", vr, !1)),
          function() {
            VY && (document.removeEventListener("dragover", xY), document.removeEventListener("drop", vr))
          }
      }), [hY, VY]), (0, FY.useEffect)((function() {
        return !AY && mY && hY.current && hY.current.focus(),
          function() {}
      }), [hY, mY, AY]);
      var ir = (0, FY.useCallback)((function(YY) {
          NY ? NY(YY) : console.error(YY)
        }), [NY]),
        or = (0, FY.useCallback)((function(YY) {
          YY.preventDefault(), YY.persist(), Hr(YY), Rr.current = [].concat(Dr(Rr.current), [YY.target]), GY(YY) && Promise.resolve(IY(YY)).then((function(rY) {
            if (!kY(YY) || eY) {
              var DY = rY.length,
                FY = DY > 0 && function(YY) {
                  var rY = YY.files,
                    DY = YY.accept,
                    FY = YY.minSize,
                    AY = YY.maxSize,
                    IY = YY.multiple,
                    RY = YY.maxFiles,
                    OY = YY.validator;
                  return !(!IY && rY.length > 1 || IY && RY >= 1 && rY.length > RY) && rY.every((function(YY) {
                    var rY = zY(XY(YY, DY), 1)[0],
                      IY = zY(qY(YY, FY, AY), 1)[0],
                      RY = OY ? OY(YY) : null;
                    return rY && IY && !RY
                  }))
                }({
                  files: rY,
                  accept: ZY,
                  minSize: OY,
                  maxSize: RY,
                  multiple: gY,
                  maxFiles: aY,
                  validator: cY
                });
              wY({
                isDragAccept: FY,
                isDragReject: DY > 0 && !FY,
                isDragActive: !0,
                type: "setDraggedFiles"
              }), vY && vY(YY)
            }
          })).catch((function(YY) {
            return ir(YY)
          }))
        }), [IY, vY, ir, eY, ZY, OY, RY, gY, aY, cY]),
        Wr = (0, FY.useCallback)((function(YY) {
          YY.preventDefault(), YY.persist(), Hr(YY);
          var rY = GY(YY);
          if (rY && YY.dataTransfer) try {
            YY.dataTransfer.dropEffect = "copy"
          } catch (DY) {}
          return rY && sY && sY(YY), !1
        }), [sY, eY]),
        Er = (0, FY.useCallback)((function(YY) {
          YY.preventDefault(), YY.persist(), Hr(YY);
          var rY = Rr.current.filter((function(YY) {
              return hY.current && hY.current.contains(YY)
            })),
            DY = rY.indexOf(YY.target); - 1 !== DY && rY.splice(DY, 1), Rr.current = rY, rY.length > 0 || (wY({
            type: "setDraggedFiles",
            isDragActive: !1,
            isDragAccept: !1,
            isDragReject: !1
          }), GY(YY) && uY && uY(YY))
        }), [hY, uY, eY]),
        mr = (0, FY.useCallback)((function(YY, rY) {
          var DY = [],
            FY = [];
          YY.forEach((function(YY) {
            var rY = Fr(XY(YY, ZY), 2),
              AY = rY[0],
              IY = rY[1],
              gY = Fr(qY(YY, OY, RY), 2),
              aY = gY[0],
              vY = gY[1],
              uY = cY ? cY(YY) : null;
            if (AY && aY && !uY) DY.push(YY);
            else {
              var sY = [IY, vY];
              uY && (sY = sY.concat(uY)), FY.push({
                file: YY,
                errors: sY.filter((function(YY) {
                  return YY
                }))
              })
            }
          })), (!gY && DY.length > 1 || gY && aY >= 1 && DY.length > aY) && (DY.forEach((function(YY) {
            FY.push({
              file: YY,
              errors: [bY]
            })
          })), DY.splice(0)), wY({
            acceptedFiles: DY,
            fileRejections: FY,
            type: "setFiles"
          }), iY && iY(DY, FY, rY), FY.length > 0 && QY && QY(FY, rY), DY.length > 0 && yY && yY(DY, rY)
        }), [wY, gY, ZY, OY, RY, aY, iY, yY, QY, cY]),
        Vr = (0, FY.useCallback)((function(YY) {
          YY.preventDefault(), YY.persist(), Hr(YY), Rr.current = [], GY(YY) && Promise.resolve(IY(YY)).then((function(rY) {
            kY(YY) && !eY || mr(rY, YY)
          })).catch((function(YY) {
            return ir(YY)
          })), wY({
            type: "reset"
          })
        }), [IY, mr, ir, eY]),
        Sr = (0, FY.useCallback)((function() {
          if (Ar.current) {
            wY({
              type: "openDialog"
            }), fY();
            var YY = {
              multiple: gY,
              types: CY
            };
            window.showOpenFilePicker(YY).then((function(YY) {
              return IY(YY)
            })).then((function(YY) {
              mr(YY, null), wY({
                type: "closeDialog"
              })
            })).catch((function(YY) {
              var rY;
              (rY = YY) instanceof DOMException && ("AbortError" === rY.name || rY.code === rY.ABORT_ERR) ? (jY(YY), wY({
                type: "closeDialog"
              })) : ! function(YY) {
                return YY instanceof DOMException && ("SecurityError" === YY.name || YY.code === YY.SECURITY_ERR)
              }(YY) ? ir(YY) : (Ar.current = !1, dY.current ? (dY.current.value = null, dY.current.click()) : ir(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))
            }))
          } else dY.current && (wY({
            type: "openDialog"
          }), fY(), dY.current.value = null, dY.current.click())
        }), [wY, fY, jY, EY, mr, ir, CY, gY]),
        lr = (0, FY.useCallback)((function(YY) {
          hY.current && hY.current.isEqualNode(YY.target) && (" " !== YY.key && "Enter" !== YY.key && 32 !== YY.keyCode && 13 !== YY.keyCode || (YY.preventDefault(), Sr()))
        }), [hY, Sr]),
        Tr = (0, FY.useCallback)((function() {
          wY({
            type: "focus"
          })
        }), []),
        er = (0, FY.useCallback)((function() {
          wY({
            type: "blur"
          })
        }), []),
        Nr = (0, FY.useCallback)((function() {
          SY || (! function() {
            var YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
            return function(YY) {
              return -1 !== YY.indexOf("MSIE") || -1 !== YY.indexOf("Trident/")
            }(YY) || function(YY) {
              return -1 !== YY.indexOf("Edge/")
            }(YY)
          }() ? Sr() : setTimeout(Sr, 0))
        }), [SY, Sr]),
        Br = function(YY) {
          return AY ? null : YY
        },
        cr = function(YY) {
          return lY ? null : Br(YY)
        },
        Kr = function(YY) {
          return TY ? null : Br(YY)
        },
        Hr = function(YY) {
          eY && YY.stopPropagation()
        },
        zr = (0, FY.useMemo)((function() {
          return function() {
            var YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              rY = YY.refKey,
              DY = void 0 === rY ? "ref" : rY,
              FY = YY.role,
              IY = YY.onKeyDown,
              RY = YY.onFocus,
              OY = YY.onBlur,
              gY = YY.onClick,
              aY = YY.onDragEnter,
              vY = YY.onDragOver,
              uY = YY.onDragLeave,
              sY = YY.onDrop,
              iY = ar(YY, Yr);
            return Or(Or(gr({
              onKeyDown: cr(nY(IY, lr)),
              onFocus: cr(nY(RY, Tr)),
              onBlur: cr(nY(OY, er)),
              onClick: Br(nY(gY, Nr)),
              onDragEnter: Kr(nY(aY, or)),
              onDragOver: Kr(nY(vY, Wr)),
              onDragLeave: Kr(nY(uY, Er)),
              onDrop: Kr(nY(sY, Vr)),
              role: "string" === typeof FY && "" !== FY ? FY : "presentation"
            }, DY, hY), AY || lY ? {} : {
              tabIndex: 0
            }), iY)
          }
        }), [hY, lr, Tr, er, Nr, or, Wr, Er, Vr, lY, TY, AY]),
        Zr = (0, FY.useCallback)((function(YY) {
          YY.stopPropagation()
        }), []),
        Cr = (0, FY.useMemo)((function() {
          return function() {
            var YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              rY = YY.refKey,
              DY = void 0 === rY ? "ref" : rY,
              FY = YY.onChange,
              AY = YY.onClick,
              IY = ar(YY, rr);
            return Or(Or({}, gr({
              accept: ZY,
              multiple: gY,
              type: "file",
              style: {
                display: "none"
              },
              onChange: Br(nY(FY, Vr)),
              onClick: Br(nY(AY, Zr)),
              tabIndex: -1
            }, DY, dY)), IY)
          }
        }), [dY, DY, gY, Vr, AY]);
      return Or(Or({}, MY), {}, {
        Vl: LY && !AY,
        getRootProps: zr,
        getInputProps: Cr,
        rootRef: hY,
        inputRef: dY,
        open: Br(Sr)
      })
    }

    function yr(YY, rY) {
      switch (rY.type) {
        case "focus":
          return Or(Or({}, YY), {}, {
            Vl: !0
          });
        case "blur":
          return Or(Or({}, YY), {}, {
            Vl: !1
          });
        case "openDialog":
          return Or(Or({}, sr), {}, {
            isFileDialogActive: !0
          });
        case "closeDialog":
          return Or(Or({}, YY), {}, {
            isFileDialogActive: !1
          });
        case "setDraggedFiles":
          return Or(Or({}, YY), {}, {
            isDragActive: rY.isDragActive,
            isDragAccept: rY.isDragAccept,
            isDragReject: rY.isDragReject
          });
        case "setFiles":
          return Or(Or({}, YY), {}, {
            acceptedFiles: rY.acceptedFiles,
            fileRejections: rY.fileRejections
          });
        case "reset":
          return Or({}, sr);
        default:
          return YY
      }
    }

    function Qr() {}
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);