export const id = 99;
export const ids = [99];
export const modules = {
  4388: (JJ, cJ) => {
    cJ.b = function(JJ, cJ) {
      if (JJ && cJ) {
        var ZJ = Array.isArray(cJ) ? cJ : cJ.split(","),
          FJ = JJ.name || "",
          UJ = (JJ.type || "").toLowerCase(),
          eJ = UJ.replace(/\/.*$/, "");
        return ZJ.some((function(JJ) {
          var cJ = JJ.trim().toLowerCase();
          return "." === cJ.charAt(0) ? FJ.toLowerCase().endsWith(cJ) : cJ.endsWith("/*") ? eJ === cJ.replace(/\/.*$/, "") : UJ === cJ
        }))
      }
      return !0
    }
  },
  4365: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => sc
    });
    var FJ = ZJ(47),
      UJ = ZJ(4367),
      eJ = ZJ.n(UJ);

    function XJ(JJ, cJ, ZJ, FJ) {
      return new(ZJ || (ZJ = Promise))((function(UJ, eJ) {
        function XJ(JJ) {
          try {
            qJ(FJ.next(JJ))
          } catch (cJ) {
            eJ(cJ)
          }
        }

        function AJ(JJ) {
          try {
            qJ(FJ.throw(JJ))
          } catch (cJ) {
            eJ(cJ)
          }
        }

        function qJ(JJ) {
          var cJ;
          JJ.done ? UJ(JJ.value) : (cJ = JJ.value, cJ instanceof ZJ ? cJ : new ZJ((function(JJ) {
            JJ(cJ)
          }))).then(XJ, AJ)
        }
        qJ((FJ = FJ.apply(JJ, cJ || [])).next())
      }))
    }

    function AJ(JJ, cJ) {
      var ZJ, FJ, UJ, eJ, XJ = {
        label: 0,
        sent: function() {
          if (1 & UJ[0]) throw UJ[1];
          return UJ[1]
        },
        trys: [],
        ops: []
      };
      return eJ = {
        next: AJ(0),
        throw: AJ(1),
        return: AJ(2)
      }, "function" === typeof Symbol && (eJ[Symbol.iterator] = function() {
        return this
      }), eJ;

      function AJ(AJ) {
        return function(qJ) {
          return function(AJ) {
            if (ZJ) throw new TypeError("Generator is already executing.");
            for (; eJ && (eJ = 0, AJ[0] && (XJ = 0)), XJ;) try {
              if (ZJ = 1, FJ && (UJ = 2 & AJ[0] ? FJ.return : AJ[0] ? FJ.throw || ((UJ = FJ.return) && UJ.call(FJ), 0) : FJ.next) && !(UJ = UJ.call(FJ, AJ[1])).done) return UJ;
              switch (FJ = 0, UJ && (AJ = [2 & AJ[0], UJ.value]), AJ[0]) {
                case 0:
                case 1:
                  UJ = AJ;
                  break;
                case 4:
                  return XJ.label++, {
                    value: AJ[1],
                    done: !1
                  };
                case 5:
                  XJ.label++, FJ = AJ[1], AJ = [0];
                  continue;
                case 7:
                  AJ = XJ.ops.pop(), XJ.trys.pop();
                  continue;
                default:
                  if (!(UJ = (UJ = XJ.trys).length > 0 && UJ[UJ.length - 1]) && (6 === AJ[0] || 2 === AJ[0])) {
                    XJ = 0;
                    continue
                  }
                  if (3 === AJ[0] && (!UJ || AJ[1] > UJ[0] && AJ[1] < UJ[3])) {
                    XJ.label = AJ[1];
                    break
                  }
                  if (6 === AJ[0] && XJ.label < UJ[1]) {
                    XJ.label = UJ[1], UJ = AJ;
                    break
                  }
                  if (UJ && XJ.label < UJ[2]) {
                    XJ.label = UJ[2], XJ.ops.push(AJ);
                    break
                  }
                  UJ[2] && XJ.ops.pop(), XJ.trys.pop();
                  continue
              }
              AJ = cJ.call(JJ, XJ)
            } catch (qJ) {
              AJ = [6, qJ], FJ = 0
            } finally {
              ZJ = UJ = 0
            }
            if (5 & AJ[0]) throw AJ[1];
            return {
              value: AJ[0] ? AJ[1] : void 0,
              done: !0
            }
          }([AJ, qJ])
        }
      }
    }
    Object.create;

    function qJ(JJ, cJ) {
      var ZJ = "function" === typeof Symbol && JJ[Symbol.iterator];
      if (!ZJ) return JJ;
      var FJ, UJ, eJ = ZJ.call(JJ),
        XJ = [];
      try {
        for (;
          (void 0 === cJ || cJ-- > 0) && !(FJ = eJ.next()).done;) XJ.push(FJ.value)
      } catch (AJ) {
        UJ = {
          error: AJ
        }
      } finally {
        try {
          FJ && !FJ.done && (ZJ = eJ.return) && ZJ.call(eJ)
        } finally {
          if (UJ) throw UJ.error
        }
      }
      return XJ
    }

    function jJ(JJ, cJ, ZJ) {
      if (ZJ || 2 === arguments.length)
        for (var FJ, UJ = 0, eJ = cJ.length; UJ < eJ; UJ++) !FJ && UJ in cJ || (FJ || (FJ = Array.prototype.slice.call(cJ, 0, UJ)), FJ[UJ] = cJ[UJ]);
      return JJ.concat(FJ || Array.prototype.slice.call(cJ))
    }
    Object.create;
    "function" === typeof SuppressedError && SuppressedError;
    var YJ = new Map([
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
      ["JY", "application/vnd.ms-outlook"]
    ]);

    function hJ(JJ, cJ) {
      var ZJ = function(JJ) {
        var cJ = JJ.name;
        if (cJ && -1 !== cJ.lastIndexOf(".") && !JJ.type) {
          var ZJ = cJ.split(".").pop().toLowerCase(),
            FJ = YJ.get(ZJ);
          FJ && Object.defineProperty(JJ, "type", {
            value: FJ,
            writable: !1,
            configurable: !1,
            enumerable: !0
          })
        }
        return JJ
      }(JJ);
      if ("string" !== typeof ZJ.path) {
        var FJ = JJ.webkitRelativePath;
        Object.defineProperty(ZJ, "path", {
          value: "string" === typeof cJ ? cJ : "string" === typeof FJ && FJ.length > 0 ? FJ : JJ.name,
          writable: !1,
          configurable: !1,
          enumerable: !0
        })
      }
      return ZJ
    }
    var DJ = [".DS_Store", "Thumbs.db"];

    function sJ(JJ) {
      return "object" === typeof JJ && null !== JJ
    }

    function nJ(JJ) {
      return rJ(JJ.target.files).map((function(JJ) {
        return hJ(JJ)
      }))
    }

    function GJ(JJ) {
      return XJ(this, void 0, void 0, (function() {
        return AJ(this, (function(cJ) {
          switch (cJ.label) {
            case 0:
              return [4, Promise.all(JJ.map((function(JJ) {
                return JJ.getFile()
              })))];
            case 1:
              return [2, cJ.sent().map((function(JJ) {
                return hJ(JJ)
              }))]
          }
        }))
      }))
    }

    function fJ(JJ, cJ) {
      return XJ(this, void 0, void 0, (function() {
        var ZJ;
        return AJ(this, (function(FJ) {
          switch (FJ.label) {
            case 0:
              return JJ.items ? (ZJ = rJ(JJ.items).filter((function(JJ) {
                return "file" === JJ.kind
              })), "drop" !== cJ ? [2, ZJ] : [4, Promise.all(ZJ.map(vJ))]) : [3, 2];
            case 1:
              return [2, xJ(mJ(FJ.sent()))];
            case 2:
              return [2, xJ(rJ(JJ.files).map((function(JJ) {
                return hJ(JJ)
              })))]
          }
        }))
      }))
    }

    function xJ(JJ) {
      return JJ.filter((function(JJ) {
        return -1 === DJ.indexOf(JJ.name)
      }))
    }

    function rJ(JJ) {
      if (null === JJ) return [];
      for (var cJ = [], ZJ = 0; ZJ < JJ.length; ZJ++) {
        var FJ = JJ[ZJ];
        cJ.push(FJ)
      }
      return cJ
    }

    function vJ(JJ) {
      if ("function" !== typeof JJ.webkitGetAsEntry) return QJ(JJ);
      var cJ = JJ.webkitGetAsEntry();
      return cJ && cJ.isDirectory ? VJ(cJ) : QJ(JJ)
    }

    function mJ(JJ) {
      return JJ.reduce((function(JJ, cJ) {
        return jJ(jJ([], qJ(JJ), !1), qJ(Array.isArray(cJ) ? mJ(cJ) : [cJ]), !1)
      }), [])
    }

    function QJ(JJ) {
      var cJ = JJ.getAsFile();
      if (!cJ) return Promise.reject("".concat(JJ, " is not a File"));
      var ZJ = hJ(cJ);
      return Promise.resolve(ZJ)
    }

    function EJ(JJ) {
      return XJ(this, void 0, void 0, (function() {
        return AJ(this, (function(cJ) {
          return [2, JJ.isDirectory ? VJ(JJ) : KJ(JJ)]
        }))
      }))
    }

    function VJ(JJ) {
      var cJ = JJ.createReader();
      return new Promise((function(JJ, ZJ) {
        var FJ = [];
        ! function UJ() {
          var eJ = this;
          cJ.readEntries((function(cJ) {
            return XJ(eJ, void 0, void 0, (function() {
              var eJ, XJ, qJ;
              return AJ(this, (function(AJ) {
                switch (AJ.label) {
                  case 0:
                    if (cJ.length) return [3, 5];
                    AJ.label = 1;
                  case 1:
                    return AJ.trys.push([1, 3, , 4]), [4, Promise.all(FJ)];
                  case 2:
                    return eJ = AJ.sent(), JJ(eJ), [3, 4];
                  case 3:
                    return XJ = AJ.sent(), ZJ(XJ), [3, 4];
                  case 4:
                    return [3, 6];
                  case 5:
                    qJ = Promise.all(cJ.map(EJ)), FJ.push(qJ), UJ(), AJ.label = 6;
                  case 6:
                    return [2]
                }
              }))
            }))
          }), (function(JJ) {
            ZJ(JJ)
          }))
        }()
      }))
    }

    function KJ(JJ) {
      return XJ(this, void 0, void 0, (function() {
        return AJ(this, (function(cJ) {
          return [2, new Promise((function(cJ, ZJ) {
            JJ.file((function(ZJ) {
              var FJ = hJ(ZJ, JJ.fullPath);
              cJ(FJ)
            }), (function(JJ) {
              ZJ(JJ)
            }))
          }))]
        }))
      }))
    }
    var yJ = ZJ(4388);

    function SJ(JJ) {
      return function(JJ) {
        if (Array.isArray(JJ)) return gJ(JJ)
      }(JJ) || function(JJ) {
        if ("undefined" !== typeof Symbol && null != JJ[Symbol.iterator] || null != JJ["@@iterator"]) return Array.from(JJ)
      }(JJ) || WJ(JJ) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function IJ(JJ, cJ) {
      var ZJ = Object.keys(JJ);
      if (Object.getOwnPropertySymbols) {
        var FJ = Object.getOwnPropertySymbols(JJ);
        cJ && (FJ = FJ.filter((function(cJ) {
          return Object.getOwnPropertyDescriptor(JJ, cJ).enumerable
        }))), ZJ.push.apply(ZJ, FJ)
      }
      return ZJ
    }

    function MJ(JJ) {
      for (var cJ = 1; cJ < arguments.length; cJ++) {
        var ZJ = null != arguments[cJ] ? arguments[cJ] : {};
        cJ % 2 ? IJ(Object(ZJ), !0).forEach((function(cJ) {
          bJ(JJ, cJ, ZJ[cJ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(JJ, Object.getOwnPropertyDescriptors(ZJ)) : IJ(Object(ZJ)).forEach((function(cJ) {
          Object.defineProperty(JJ, cJ, Object.getOwnPropertyDescriptor(ZJ, cJ))
        }))
      }
      return JJ
    }

    function bJ(JJ, cJ, ZJ) {
      return cJ in JJ ? Object.defineProperty(JJ, cJ, {
        value: ZJ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : JJ[cJ] = ZJ, JJ
    }

    function wJ(JJ, cJ) {
      return function(JJ) {
        if (Array.isArray(JJ)) return JJ
      }(JJ) || function(JJ, cJ) {
        var ZJ = null == JJ ? null : "undefined" !== typeof Symbol && JJ[Symbol.iterator] || JJ["@@iterator"];
        if (null == ZJ) return;
        var FJ, UJ, eJ = [],
          XJ = !0,
          AJ = !1;
        try {
          for (ZJ = ZJ.call(JJ); !(XJ = (FJ = ZJ.next()).done) && (eJ.push(FJ.value), !cJ || eJ.length !== cJ); XJ = !0);
        } catch (qJ) {
          AJ = !0, UJ = qJ
        } finally {
          try {
            XJ || null == ZJ.return || ZJ.return()
          } finally {
            if (AJ) throw UJ
          }
        }
        return eJ
      }(JJ, cJ) || WJ(JJ, cJ) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function WJ(JJ, cJ) {
      if (JJ) {
        if ("string" === typeof JJ) return gJ(JJ, cJ);
        var ZJ = Object.prototype.toString.call(JJ).slice(8, -1);
        return "Object" === ZJ && JJ.constructor && (ZJ = JJ.constructor.name), "Map" === ZJ || "Set" === ZJ ? Array.from(JJ) : "Arguments" === ZJ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZJ) ? gJ(JJ, cJ) : void 0
      }
    }

    function gJ(JJ, cJ) {
      (null == cJ || cJ > JJ.length) && (cJ = JJ.length);
      for (var ZJ = 0, FJ = new Array(cJ); ZJ < cJ; ZJ++) FJ[ZJ] = JJ[ZJ];
      return FJ
    }
    var HJ = "file-invalid-type",
      PJ = "file-too-large",
      kJ = "file-too-small",
      pJ = "too-many-files",
      dJ = function(JJ) {
        JJ = Array.isArray(JJ) && 1 === JJ.length ? JJ[0] : JJ;
        var cJ = Array.isArray(JJ) ? "one of ".concat(JJ.join(", ")) : JJ;
        return {
          code: HJ,
          message: "File type must be ".concat(cJ)
        }
      },
      zJ = function(JJ) {
        return {
          code: PJ,
          message: "File is larger than ".concat(JJ, " ").concat(1 === JJ ? "byte" : "bytes")
        }
      },
      NJ = function(JJ) {
        return {
          code: kJ,
          message: "File is smaller than ".concat(JJ, " ").concat(1 === JJ ? "byte" : "bytes")
        }
      },
      OJ = {
        code: pJ,
        message: "Too many files"
      };

    function TJ(JJ, cJ) {
      var ZJ = "application/x-moz-file" === JJ.type || (0, yJ.b)(JJ, cJ);
      return [ZJ, ZJ ? null : dJ(cJ)]
    }

    function CJ(JJ, cJ, ZJ) {
      if (uJ(JJ.size))
        if (uJ(cJ) && uJ(ZJ)) {
          if (JJ.size > ZJ) return [!1, zJ(ZJ)];
          if (JJ.size < cJ) return [!1, NJ(cJ)]
        } else {
          if (uJ(cJ) && JJ.size < cJ) return [!1, NJ(cJ)];
          if (uJ(ZJ) && JJ.size > ZJ) return [!1, zJ(ZJ)]
        } return [!0, null]
    }

    function uJ(JJ) {
      return void 0 !== JJ && null !== JJ
    }

    function iJ(JJ) {
      return "function" === typeof JJ.isPropagationStopped ? JJ.isPropagationStopped() : "undefined" !== typeof JJ.cancelBubble && JJ.cancelBubble
    }

    function RJ(JJ) {
      return JJ.dataTransfer ? Array.prototype.some.call(JJ.dataTransfer.types, (function(JJ) {
        return "Files" === JJ || "application/x-moz-file" === JJ
      })) : !!JJ.target && !!JJ.target.files
    }

    function LJ(JJ) {
      JJ.preventDefault()
    }

    function aJ() {
      for (var JJ = arguments.length, cJ = new Array(JJ), ZJ = 0; ZJ < JJ; ZJ++) cJ[ZJ] = arguments[ZJ];
      return function(JJ) {
        for (var ZJ = arguments.length, FJ = new Array(ZJ > 1 ? ZJ - 1 : 0), UJ = 1; UJ < ZJ; UJ++) FJ[UJ - 1] = arguments[UJ];
        return cJ.some((function(cJ) {
          return !iJ(JJ) && cJ && cJ.apply(void 0, [JJ].concat(FJ)), iJ(JJ)
        }))
      }
    }

    function BJ(JJ) {
      return "audio/*" === JJ || "video/*" === JJ || "image/*" === JJ || "text/*" === JJ || /\w+\/[-+.\w]+/g.test(JJ)
    }

    function tJ(JJ) {
      return /^.*\.[\w]+$/.test(JJ)
    }
    var oJ = ["children"],
      lJ = ["open"],
      Jc = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
      cc = ["refKey", "onChange", "onClick"];

    function Zc(JJ) {
      return function(JJ) {
        if (Array.isArray(JJ)) return ec(JJ)
      }(JJ) || function(JJ) {
        if ("undefined" !== typeof Symbol && null != JJ[Symbol.iterator] || null != JJ["@@iterator"]) return Array.from(JJ)
      }(JJ) || Uc(JJ) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Fc(JJ, cJ) {
      return function(JJ) {
        if (Array.isArray(JJ)) return JJ
      }(JJ) || function(JJ, cJ) {
        var ZJ = null == JJ ? null : "undefined" !== typeof Symbol && JJ[Symbol.iterator] || JJ["@@iterator"];
        if (null == ZJ) return;
        var FJ, UJ, eJ = [],
          XJ = !0,
          AJ = !1;
        try {
          for (ZJ = ZJ.call(JJ); !(XJ = (FJ = ZJ.next()).done) && (eJ.push(FJ.value), !cJ || eJ.length !== cJ); XJ = !0);
        } catch (qJ) {
          AJ = !0, UJ = qJ
        } finally {
          try {
            XJ || null == ZJ.return || ZJ.return()
          } finally {
            if (AJ) throw UJ
          }
        }
        return eJ
      }(JJ, cJ) || Uc(JJ, cJ) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Uc(JJ, cJ) {
      if (JJ) {
        if ("string" === typeof JJ) return ec(JJ, cJ);
        var ZJ = Object.prototype.toString.call(JJ).slice(8, -1);
        return "Object" === ZJ && JJ.constructor && (ZJ = JJ.constructor.name), "Map" === ZJ || "Set" === ZJ ? Array.from(JJ) : "Arguments" === ZJ || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZJ) ? ec(JJ, cJ) : void 0
      }
    }

    function ec(JJ, cJ) {
      (null == cJ || cJ > JJ.length) && (cJ = JJ.length);
      for (var ZJ = 0, FJ = new Array(cJ); ZJ < cJ; ZJ++) FJ[ZJ] = JJ[ZJ];
      return FJ
    }

    function Xc(JJ, cJ) {
      var ZJ = Object.keys(JJ);
      if (Object.getOwnPropertySymbols) {
        var FJ = Object.getOwnPropertySymbols(JJ);
        cJ && (FJ = FJ.filter((function(cJ) {
          return Object.getOwnPropertyDescriptor(JJ, cJ).enumerable
        }))), ZJ.push.apply(ZJ, FJ)
      }
      return ZJ
    }

    function Ac(JJ) {
      for (var cJ = 1; cJ < arguments.length; cJ++) {
        var ZJ = null != arguments[cJ] ? arguments[cJ] : {};
        cJ % 2 ? Xc(Object(ZJ), !0).forEach((function(cJ) {
          qc(JJ, cJ, ZJ[cJ])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(JJ, Object.getOwnPropertyDescriptors(ZJ)) : Xc(Object(ZJ)).forEach((function(cJ) {
          Object.defineProperty(JJ, cJ, Object.getOwnPropertyDescriptor(ZJ, cJ))
        }))
      }
      return JJ
    }

    function qc(JJ, cJ, ZJ) {
      return cJ in JJ ? Object.defineProperty(JJ, cJ, {
        value: ZJ,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : JJ[cJ] = ZJ, JJ
    }

    function jc(JJ, cJ) {
      if (null == JJ) return {};
      var ZJ, FJ, UJ = function(JJ, cJ) {
        if (null == JJ) return {};
        var ZJ, FJ, UJ = {},
          eJ = Object.keys(JJ);
        for (FJ = 0; FJ < eJ.length; FJ++) ZJ = eJ[FJ], cJ.indexOf(ZJ) >= 0 || (UJ[ZJ] = JJ[ZJ]);
        return UJ
      }(JJ, cJ);
      if (Object.getOwnPropertySymbols) {
        var eJ = Object.getOwnPropertySymbols(JJ);
        for (FJ = 0; FJ < eJ.length; FJ++) ZJ = eJ[FJ], cJ.indexOf(ZJ) >= 0 || Object.prototype.propertyIsEnumerable.call(JJ, ZJ) && (UJ[ZJ] = JJ[ZJ])
      }
      return UJ
    }
    var Yc = (0, FJ.forwardRef)((function(JJ, cJ) {
      var ZJ = JJ.children,
        UJ = sc(jc(JJ, oJ)),
        eJ = UJ.open,
        XJ = jc(UJ, lJ);
      return (0, FJ.useImperativeHandle)(cJ, (function() {
        return {
          open: eJ
        }
      }), [eJ]), FJ.createElement(FJ.Fragment, null, ZJ(Ac(Ac({}, XJ), {}, {
        open: eJ
      })))
    }));
    Yc.displayName = "Dropzone";
    var hc = {
      disabled: !1,
      getFilesFromEvent: function(JJ) {
        return XJ(this, void 0, void 0, (function() {
          return AJ(this, (function(cJ) {
            return sJ(JJ) && sJ(JJ.dataTransfer) ? [2, fJ(JJ.dataTransfer, JJ.type)] : function(JJ) {
              return sJ(JJ) && sJ(JJ.target)
            }(JJ) ? [2, nJ(JJ)] : Array.isArray(JJ) && JJ.every((function(JJ) {
              return "getFile" in JJ && "function" === typeof JJ.getFile
            })) ? [2, GJ(JJ)] : [2, []]
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
    Yc.defaultProps = hc, Yc.propTypes = {
      children: eJ().func,
      accept: eJ().objectOf(eJ().arrayOf(eJ().string)),
      multiple: eJ().bool,
      preventDropOnDocument: eJ().bool,
      noClick: eJ().bool,
      noKeyboard: eJ().bool,
      noDrag: eJ().bool,
      noDragEventsBubbling: eJ().bool,
      minSize: eJ().number,
      maxSize: eJ().number,
      maxFiles: eJ().number,
      disabled: eJ().bool,
      getFilesFromEvent: eJ().func,
      onFileDialogCancel: eJ().func,
      onFileDialogOpen: eJ().func,
      useFsAccessApi: eJ().bool,
      autoFocus: eJ().bool,
      onDragEnter: eJ().func,
      onDragLeave: eJ().func,
      onDragOver: eJ().func,
      onDrop: eJ().func,
      onDropAccepted: eJ().func,
      onDropRejected: eJ().func,
      onError: eJ().func,
      validator: eJ().func
    };
    var Dc = {
      IK: !1,
      isFileDialogActive: !1,
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1,
      acceptedFiles: [],
      fileRejections: []
    };

    function sc() {
      var JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        cJ = Ac(Ac({}, hc), JJ),
        ZJ = cJ.accept,
        UJ = cJ.disabled,
        eJ = cJ.getFilesFromEvent,
        XJ = cJ.maxSize,
        AJ = cJ.minSize,
        qJ = cJ.multiple,
        jJ = cJ.maxFiles,
        YJ = cJ.onDragEnter,
        hJ = cJ.onDragLeave,
        DJ = cJ.onDragOver,
        sJ = cJ.onDrop,
        nJ = cJ.onDropAccepted,
        GJ = cJ.onDropRejected,
        fJ = cJ.onFileDialogCancel,
        xJ = cJ.onFileDialogOpen,
        rJ = cJ.useFsAccessApi,
        vJ = cJ.autoFocus,
        mJ = cJ.preventDropOnDocument,
        QJ = cJ.noClick,
        EJ = cJ.noKeyboard,
        VJ = cJ.noDrag,
        KJ = cJ.noDragEventsBubbling,
        yJ = cJ.onError,
        IJ = cJ.validator,
        WJ = (0, FJ.useMemo)((function() {
          return function(JJ) {
            if (uJ(JJ)) return Object.entries(JJ).reduce((function(JJ, cJ) {
              var ZJ = wJ(cJ, 2),
                FJ = ZJ[0],
                UJ = ZJ[1];
              return [].concat(SJ(JJ), [FJ], SJ(UJ))
            }), []).filter((function(JJ) {
              return BJ(JJ) || tJ(JJ)
            })).join(",")
          }(ZJ)
        }), [ZJ]),
        gJ = (0, FJ.useMemo)((function() {
          return function(JJ) {
            return uJ(JJ) ? [{
              description: "Files",
              accept: Object.entries(JJ).filter((function(JJ) {
                var cJ = wJ(JJ, 2),
                  ZJ = cJ[0],
                  FJ = cJ[1],
                  UJ = !0;
                return BJ(ZJ) || (console.warn('Skipped "'.concat(ZJ, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), UJ = !1), Array.isArray(FJ) && FJ.every(tJ) || (console.warn('Skipped "'.concat(ZJ, '" because an invalid file extension was provided.')), UJ = !1), UJ
              })).reduce((function(JJ, cJ) {
                var ZJ = wJ(cJ, 2),
                  FJ = ZJ[0],
                  UJ = ZJ[1];
                return MJ(MJ({}, JJ), {}, bJ({}, FJ, UJ))
              }), {})
            }] : JJ
          }(ZJ)
        }), [ZJ]),
        HJ = (0, FJ.useMemo)((function() {
          return "function" === typeof xJ ? xJ : Gc
        }), [xJ]),
        PJ = (0, FJ.useMemo)((function() {
          return "function" === typeof fJ ? fJ : Gc
        }), [fJ]),
        kJ = (0, FJ.useRef)(null),
        pJ = (0, FJ.useRef)(null),
        dJ = Fc((0, FJ.useReducer)(nc, Dc), 2),
        zJ = dJ[0],
        NJ = dJ[1],
        oJ = zJ.IK,
        lJ = zJ.isFileDialogActive,
        Uc = (0, FJ.useRef)("undefined" !== typeof window && window.isSecureContext && rJ && "showOpenFilePicker" in window),
        ec = function() {
          !Uc.current && lJ && setTimeout((function() {
            pJ.current && (pJ.current.files.length || (NJ({
              type: "closeDialog"
            }), PJ()))
          }), 300)
        };
      (0, FJ.useEffect)((function() {
        return window.addEventListener("focus", ec, !1),
          function() {
            window.removeEventListener("focus", ec, !1)
          }
      }), [pJ, lJ, PJ, Uc]);
      var Xc = (0, FJ.useRef)([]),
        Yc = function(JJ) {
          kJ.current && kJ.current.contains(JJ.target) || (JJ.preventDefault(), Xc.current = [])
        };
      (0, FJ.useEffect)((function() {
        return mJ && (document.addEventListener("dragover", LJ, !1), document.addEventListener("drop", Yc, !1)),
          function() {
            mJ && (document.removeEventListener("dragover", LJ), document.removeEventListener("drop", Yc))
          }
      }), [kJ, mJ]), (0, FJ.useEffect)((function() {
        return !UJ && vJ && kJ.current && kJ.current.focus(),
          function() {}
      }), [kJ, vJ, UJ]);
      var sc = (0, FJ.useCallback)((function(JJ) {
          yJ ? yJ(JJ) : console.error(JJ)
        }), [yJ]),
        fc = (0, FJ.useCallback)((function(JJ) {
          JJ.preventDefault(), JJ.persist(), bc(JJ), Xc.current = [].concat(Zc(Xc.current), [JJ.target]), RJ(JJ) && Promise.resolve(eJ(JJ)).then((function(cJ) {
            if (!iJ(JJ) || KJ) {
              var ZJ = cJ.length,
                FJ = ZJ > 0 && function(JJ) {
                  var cJ = JJ.files,
                    ZJ = JJ.accept,
                    FJ = JJ.minSize,
                    UJ = JJ.maxSize,
                    eJ = JJ.multiple,
                    XJ = JJ.maxFiles,
                    AJ = JJ.validator;
                  return !(!eJ && cJ.length > 1 || eJ && XJ >= 1 && cJ.length > XJ) && cJ.every((function(JJ) {
                    var cJ = wJ(TJ(JJ, ZJ), 1)[0],
                      eJ = wJ(CJ(JJ, FJ, UJ), 1)[0],
                      XJ = AJ ? AJ(JJ) : null;
                    return cJ && eJ && !XJ
                  }))
                }({
                  files: cJ,
                  accept: WJ,
                  minSize: AJ,
                  maxSize: XJ,
                  multiple: qJ,
                  maxFiles: jJ,
                  validator: IJ
                });
              NJ({
                isDragAccept: FJ,
                isDragReject: ZJ > 0 && !FJ,
                isDragActive: !0,
                type: "setDraggedFiles"
              }), YJ && YJ(JJ)
            }
          })).catch((function(JJ) {
            return sc(JJ)
          }))
        }), [eJ, YJ, sc, KJ, WJ, AJ, XJ, qJ, jJ, IJ]),
        xc = (0, FJ.useCallback)((function(JJ) {
          JJ.preventDefault(), JJ.persist(), bc(JJ);
          var cJ = RJ(JJ);
          if (cJ && JJ.dataTransfer) try {
            JJ.dataTransfer.dropEffect = "copy"
          } catch (ZJ) {}
          return cJ && DJ && DJ(JJ), !1
        }), [DJ, KJ]),
        rc = (0, FJ.useCallback)((function(JJ) {
          JJ.preventDefault(), JJ.persist(), bc(JJ);
          var cJ = Xc.current.filter((function(JJ) {
              return kJ.current && kJ.current.contains(JJ)
            })),
            ZJ = cJ.indexOf(JJ.target); - 1 !== ZJ && cJ.splice(ZJ, 1), Xc.current = cJ, cJ.length > 0 || (NJ({
            type: "setDraggedFiles",
            isDragActive: !1,
            isDragAccept: !1,
            isDragReject: !1
          }), RJ(JJ) && hJ && hJ(JJ))
        }), [kJ, hJ, KJ]),
        vc = (0, FJ.useCallback)((function(JJ, cJ) {
          var ZJ = [],
            FJ = [];
          JJ.forEach((function(JJ) {
            var cJ = Fc(TJ(JJ, WJ), 2),
              UJ = cJ[0],
              eJ = cJ[1],
              qJ = Fc(CJ(JJ, AJ, XJ), 2),
              jJ = qJ[0],
              YJ = qJ[1],
              hJ = IJ ? IJ(JJ) : null;
            if (UJ && jJ && !hJ) ZJ.push(JJ);
            else {
              var DJ = [eJ, YJ];
              hJ && (DJ = DJ.concat(hJ)), FJ.push({
                file: JJ,
                errors: DJ.filter((function(JJ) {
                  return JJ
                }))
              })
            }
          })), (!qJ && ZJ.length > 1 || qJ && jJ >= 1 && ZJ.length > jJ) && (ZJ.forEach((function(JJ) {
            FJ.push({
              file: JJ,
              errors: [OJ]
            })
          })), ZJ.splice(0)), NJ({
            acceptedFiles: ZJ,
            fileRejections: FJ,
            type: "setFiles"
          }), sJ && sJ(ZJ, FJ, cJ), FJ.length > 0 && GJ && GJ(FJ, cJ), ZJ.length > 0 && nJ && nJ(ZJ, cJ)
        }), [NJ, qJ, WJ, AJ, XJ, jJ, sJ, nJ, GJ, IJ]),
        mc = (0, FJ.useCallback)((function(JJ) {
          JJ.preventDefault(), JJ.persist(), bc(JJ), Xc.current = [], RJ(JJ) && Promise.resolve(eJ(JJ)).then((function(cJ) {
            iJ(JJ) && !KJ || vc(cJ, JJ)
          })).catch((function(JJ) {
            return sc(JJ)
          })), NJ({
            type: "reset"
          })
        }), [eJ, vc, sc, KJ]),
        Qc = (0, FJ.useCallback)((function() {
          if (Uc.current) {
            NJ({
              type: "openDialog"
            }), HJ();
            var JJ = {
              multiple: qJ,
              types: gJ
            };
            window.showOpenFilePicker(JJ).then((function(JJ) {
              return eJ(JJ)
            })).then((function(JJ) {
              vc(JJ, null), NJ({
                type: "closeDialog"
              })
            })).catch((function(JJ) {
              var cJ;
              (cJ = JJ) instanceof DOMException && ("AbortError" === cJ.name || cJ.code === cJ.ABORT_ERR) ? (PJ(JJ), NJ({
                type: "closeDialog"
              })) : ! function(JJ) {
                return JJ instanceof DOMException && ("SecurityError" === JJ.name || JJ.code === JJ.SECURITY_ERR)
              }(JJ) ? sc(JJ) : (Uc.current = !1, pJ.current ? (pJ.current.value = null, pJ.current.click()) : sc(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))
            }))
          } else pJ.current && (NJ({
            type: "openDialog"
          }), HJ(), pJ.current.value = null, pJ.current.click())
        }), [NJ, HJ, PJ, rJ, vc, sc, gJ, qJ]),
        Ec = (0, FJ.useCallback)((function(JJ) {
          kJ.current && kJ.current.isEqualNode(JJ.target) && (" " !== JJ.key && "Enter" !== JJ.key && 32 !== JJ.keyCode && 13 !== JJ.keyCode || (JJ.preventDefault(), Qc()))
        }), [kJ, Qc]),
        Vc = (0, FJ.useCallback)((function() {
          NJ({
            type: "focus"
          })
        }), []),
        Kc = (0, FJ.useCallback)((function() {
          NJ({
            type: "blur"
          })
        }), []),
        yc = (0, FJ.useCallback)((function() {
          QJ || (! function() {
            var JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
            return function(JJ) {
              return -1 !== JJ.indexOf("MSIE") || -1 !== JJ.indexOf("Trident/")
            }(JJ) || function(JJ) {
              return -1 !== JJ.indexOf("Edge/")
            }(JJ)
          }() ? Qc() : setTimeout(Qc, 0))
        }), [QJ, Qc]),
        Sc = function(JJ) {
          return UJ ? null : JJ
        },
        Ic = function(JJ) {
          return EJ ? null : Sc(JJ)
        },
        Mc = function(JJ) {
          return VJ ? null : Sc(JJ)
        },
        bc = function(JJ) {
          KJ && JJ.stopPropagation()
        },
        wc = (0, FJ.useMemo)((function() {
          return function() {
            var JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              cJ = JJ.refKey,
              ZJ = void 0 === cJ ? "ref" : cJ,
              FJ = JJ.role,
              eJ = JJ.onKeyDown,
              XJ = JJ.onFocus,
              AJ = JJ.onBlur,
              qJ = JJ.onClick,
              jJ = JJ.onDragEnter,
              YJ = JJ.onDragOver,
              hJ = JJ.onDragLeave,
              DJ = JJ.onDrop,
              sJ = jc(JJ, Jc);
            return Ac(Ac(qc({
              onKeyDown: Ic(aJ(eJ, Ec)),
              onFocus: Ic(aJ(XJ, Vc)),
              onBlur: Ic(aJ(AJ, Kc)),
              onClick: Sc(aJ(qJ, yc)),
              onDragEnter: Mc(aJ(jJ, fc)),
              onDragOver: Mc(aJ(YJ, xc)),
              onDragLeave: Mc(aJ(hJ, rc)),
              onDrop: Mc(aJ(DJ, mc)),
              role: "string" === typeof FJ && "" !== FJ ? FJ : "presentation"
            }, ZJ, kJ), UJ || EJ ? {} : {
              tabIndex: 0
            }), sJ)
          }
        }), [kJ, Ec, Vc, Kc, yc, fc, xc, rc, mc, EJ, VJ, UJ]),
        Wc = (0, FJ.useCallback)((function(JJ) {
          JJ.stopPropagation()
        }), []),
        gc = (0, FJ.useMemo)((function() {
          return function() {
            var JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              cJ = JJ.refKey,
              ZJ = void 0 === cJ ? "ref" : cJ,
              FJ = JJ.onChange,
              UJ = JJ.onClick,
              eJ = jc(JJ, cc);
            return Ac(Ac({}, qc({
              accept: WJ,
              multiple: qJ,
              type: "file",
              style: {
                display: "none"
              },
              onChange: Sc(aJ(FJ, mc)),
              onClick: Sc(aJ(UJ, Wc)),
              tabIndex: -1
            }, ZJ, pJ)), eJ)
          }
        }), [pJ, ZJ, qJ, mc, UJ]);
      return Ac(Ac({}, zJ), {}, {
        IK: oJ && !UJ,
        getRootProps: wc,
        getInputProps: gc,
        rootRef: kJ,
        inputRef: pJ,
        open: Sc(Qc)
      })
    }

    function nc(JJ, cJ) {
      switch (cJ.type) {
        case "focus":
          return Ac(Ac({}, JJ), {}, {
            IK: !0
          });
        case "blur":
          return Ac(Ac({}, JJ), {}, {
            IK: !1
          });
        case "openDialog":
          return Ac(Ac({}, Dc), {}, {
            isFileDialogActive: !0
          });
        case "closeDialog":
          return Ac(Ac({}, JJ), {}, {
            isFileDialogActive: !1
          });
        case "setDraggedFiles":
          return Ac(Ac({}, JJ), {}, {
            isDragActive: cJ.isDragActive,
            isDragAccept: cJ.isDragAccept,
            isDragReject: cJ.isDragReject
          });
        case "setFiles":
          return Ac(Ac({}, JJ), {}, {
            acceptedFiles: cJ.acceptedFiles,
            fileRejections: cJ.fileRejections
          });
        case "reset":
          return Ac({}, Dc);
        default:
          return JJ
      }
    }

    function Gc() {}
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);