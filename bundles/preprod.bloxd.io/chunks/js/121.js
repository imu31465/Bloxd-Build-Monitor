export const id = 121;
export const ids = [121];
export const modules = {
  5384: (MM, rM) => {
    rM.d = function(MM, rM) {
      if (MM && rM) {
        var iM = Array.isArray(rM) ? rM : rM.split(","),
          OM = MM.name || "",
          SM = (MM.type || "").toLowerCase(),
          jM = SM.replace(/\/.*$/, "");
        return iM.some((function(MM) {
          var rM = MM.trim().toLowerCase();
          return "." === rM.charAt(0) ? OM.toLowerCase().endsWith(rM) : rM.endsWith("/*") ? jM === rM.replace(/\/.*$/, "") : SM === rM
        }))
      }
      return !0
    }
  },
  5364: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => Hr
    });
    var OM = iM(44),
      SM = iM(5368),
      jM = iM.n(SM);

    function aM(MM, rM, iM, OM) {
      return new(iM || (iM = Promise))((function(SM, jM) {
        function aM(MM) {
          try {
            nM(OM.next(MM))
          } catch (rM) {
            jM(rM)
          }
        }

        function PM(MM) {
          try {
            nM(OM.throw(MM))
          } catch (rM) {
            jM(rM)
          }
        }

        function nM(MM) {
          var rM;
          MM.done ? SM(MM.value) : (rM = MM.value, rM instanceof iM ? rM : new iM((function(MM) {
            MM(rM)
          }))).then(aM, PM)
        }
        nM((OM = OM.apply(MM, rM || [])).next())
      }))
    }

    function PM(MM, rM) {
      var iM, OM, SM, jM, aM = {
        label: 0,
        sent: function() {
          if (1 & SM[0]) throw SM[1];
          return SM[1]
        },
        trys: [],
        ops: []
      };
      return jM = {
        next: PM(0),
        throw: PM(1),
        return: PM(2)
      }, "function" === typeof Symbol && (jM[Symbol.iterator] = function() {
        return this
      }), jM;

      function PM(PM) {
        return function(nM) {
          return function(PM) {
            if (iM) throw new TypeError("Generator is already executing.");
            for (; jM && (jM = 0, PM[0] && (aM = 0)), aM;) try {
              if (iM = 1, OM && (SM = 2 & PM[0] ? OM.return : PM[0] ? OM.throw || ((SM = OM.return) && SM.call(OM), 0) : OM.next) && !(SM = SM.call(OM, PM[1])).done) return SM;
              switch (OM = 0, SM && (PM = [2 & PM[0], SM.value]), PM[0]) {
                case 0:
                case 1:
                  SM = PM;
                  break;
                case 4:
                  return aM.label++, {
                    value: PM[1],
                    done: !1
                  };
                case 5:
                  aM.label++, OM = PM[1], PM = [0];
                  continue;
                case 7:
                  PM = aM.ops.pop(), aM.trys.pop();
                  continue;
                default:
                  if (!(SM = (SM = aM.trys).length > 0 && SM[SM.length - 1]) && (6 === PM[0] || 2 === PM[0])) {
                    aM = 0;
                    continue
                  }
                  if (3 === PM[0] && (!SM || PM[1] > SM[0] && PM[1] < SM[3])) {
                    aM.label = PM[1];
                    break
                  }
                  if (6 === PM[0] && aM.label < SM[1]) {
                    aM.label = SM[1], SM = PM;
                    break
                  }
                  if (SM && aM.label < SM[2]) {
                    aM.label = SM[2], aM.ops.push(PM);
                    break
                  }
                  SM[2] && aM.ops.pop(), aM.trys.pop();
                  continue
              }
              PM = rM.call(MM, aM)
            } catch (nM) {
              PM = [6, nM], OM = 0
            } finally {
              iM = SM = 0
            }
            if (5 & PM[0]) throw PM[1];
            return {
              value: PM[0] ? PM[1] : void 0,
              done: !0
            }
          }([PM, nM])
        }
      }
    }
    Object.create;

    function nM(MM, rM) {
      var iM = "function" === typeof Symbol && MM[Symbol.iterator];
      if (!iM) return MM;
      var OM, SM, jM = iM.call(MM),
        aM = [];
      try {
        for (;
          (void 0 === rM || rM-- > 0) && !(OM = jM.next()).done;) aM.push(OM.value)
      } catch (PM) {
        SM = {
          error: PM
        }
      } finally {
        try {
          OM && !OM.done && (iM = jM.return) && iM.call(jM)
        } finally {
          if (SM) throw SM.error
        }
      }
      return aM
    }

    function QM(MM, rM, iM) {
      if (iM || 2 === arguments.length)
        for (var OM, SM = 0, jM = rM.length; SM < jM; SM++) !OM && SM in rM || (OM || (OM = Array.prototype.slice.call(rM, 0, SM)), OM[SM] = rM[SM]);
      return MM.concat(OM || Array.prototype.slice.call(rM))
    }
    Object.create;
    "function" === typeof SuppressedError && SuppressedError;
    var zM = new Map([
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
      ["Kz", "application/vnd.ms-outlook"]
    ]);

    function LM(MM, rM) {
      var iM = function(MM) {
        var rM = MM.name;
        if (rM && -1 !== rM.lastIndexOf(".") && !MM.type) {
          var iM = rM.split(".").pop().toLowerCase(),
            OM = zM.get(iM);
          OM && Object.defineProperty(MM, "type", {
            value: OM,
            writable: !1,
            configurable: !1,
            enumerable: !0
          })
        }
        return MM
      }(MM);
      if ("string" !== typeof iM.path) {
        var OM = MM.webkitRelativePath;
        Object.defineProperty(iM, "path", {
          value: "string" === typeof rM ? rM : "string" === typeof OM && OM.length > 0 ? OM : MM.name,
          writable: !1,
          configurable: !1,
          enumerable: !0
        })
      }
      return iM
    }
    var mM = [".DS_Store", "Thumbs.db"];

    function HM(MM) {
      return "object" === typeof MM && null !== MM
    }

    function hM(MM) {
      return lM(MM.target.files).map((function(MM) {
        return LM(MM)
      }))
    }

    function JM(MM) {
      return aM(this, void 0, void 0, (function() {
        return PM(this, (function(rM) {
          switch (rM.label) {
            case 0:
              return [4, Promise.all(MM.map((function(MM) {
                return MM.getFile()
              })))];
            case 1:
              return [2, rM.sent().map((function(MM) {
                return LM(MM)
              }))]
          }
        }))
      }))
    }

    function dM(MM, rM) {
      return aM(this, void 0, void 0, (function() {
        var iM;
        return PM(this, (function(OM) {
          switch (OM.label) {
            case 0:
              return MM.items ? (iM = lM(MM.items).filter((function(MM) {
                return "file" === MM.kind
              })), "drop" !== rM ? [2, iM] : [4, Promise.all(iM.map(EM))]) : [3, 2];
            case 1:
              return [2, yM(UM(OM.sent()))];
            case 2:
              return [2, yM(lM(MM.files).map((function(MM) {
                return LM(MM)
              })))]
          }
        }))
      }))
    }

    function yM(MM) {
      return MM.filter((function(MM) {
        return -1 === mM.indexOf(MM.name)
      }))
    }

    function lM(MM) {
      if (null === MM) return [];
      for (var rM = [], iM = 0; iM < MM.length; iM++) {
        var OM = MM[iM];
        rM.push(OM)
      }
      return rM
    }

    function EM(MM) {
      if ("function" !== typeof MM.webkitGetAsEntry) return GM(MM);
      var rM = MM.webkitGetAsEntry();
      return rM && rM.isDirectory ? eM(rM) : GM(MM)
    }

    function UM(MM) {
      return MM.reduce((function(MM, rM) {
        return QM(QM([], nM(MM), !1), nM(Array.isArray(rM) ? UM(rM) : [rM]), !1)
      }), [])
    }

    function GM(MM) {
      var rM = MM.getAsFile();
      if (!rM) return Promise.reject("".concat(MM, " is not a File"));
      var iM = LM(rM);
      return Promise.resolve(iM)
    }

    function CM(MM) {
      return aM(this, void 0, void 0, (function() {
        return PM(this, (function(rM) {
          return [2, MM.isDirectory ? eM(MM) : bM(MM)]
        }))
      }))
    }

    function eM(MM) {
      var rM = MM.createReader();
      return new Promise((function(MM, iM) {
        var OM = [];
        ! function SM() {
          var jM = this;
          rM.readEntries((function(rM) {
            return aM(jM, void 0, void 0, (function() {
              var jM, aM, nM;
              return PM(this, (function(PM) {
                switch (PM.label) {
                  case 0:
                    if (rM.length) return [3, 5];
                    PM.label = 1;
                  case 1:
                    return PM.trys.push([1, 3, , 4]), [4, Promise.all(OM)];
                  case 2:
                    return jM = PM.sent(), MM(jM), [3, 4];
                  case 3:
                    return aM = PM.sent(), iM(aM), [3, 4];
                  case 4:
                    return [3, 6];
                  case 5:
                    nM = Promise.all(rM.map(CM)), OM.push(nM), SM(), PM.label = 6;
                  case 6:
                    return [2]
                }
              }))
            }))
          }), (function(MM) {
            iM(MM)
          }))
        }()
      }))
    }

    function bM(MM) {
      return aM(this, void 0, void 0, (function() {
        return PM(this, (function(rM) {
          return [2, new Promise((function(rM, iM) {
            MM.file((function(iM) {
              var OM = LM(iM, MM.fullPath);
              rM(OM)
            }), (function(MM) {
              iM(MM)
            }))
          }))]
        }))
      }))
    }
    var wM = iM(5384);

    function tM(MM) {
      return function(MM) {
        if (Array.isArray(MM)) return sM(MM)
      }(MM) || function(MM) {
        if ("undefined" !== typeof Symbol && null != MM[Symbol.iterator] || null != MM["@@iterator"]) return Array.from(MM)
      }(MM) || WM(MM) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function gM(MM, rM) {
      var iM = Object.keys(MM);
      if (Object.getOwnPropertySymbols) {
        var OM = Object.getOwnPropertySymbols(MM);
        rM && (OM = OM.filter((function(rM) {
          return Object.getOwnPropertyDescriptor(MM, rM).enumerable
        }))), iM.push.apply(iM, OM)
      }
      return iM
    }

    function uM(MM) {
      for (var rM = 1; rM < arguments.length; rM++) {
        var iM = null != arguments[rM] ? arguments[rM] : {};
        rM % 2 ? gM(Object(iM), !0).forEach((function(rM) {
          RM(MM, rM, iM[rM])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : gM(Object(iM)).forEach((function(rM) {
          Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
        }))
      }
      return MM
    }

    function RM(MM, rM, iM) {
      return rM in MM ? Object.defineProperty(MM, rM, {
        value: iM,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : MM[rM] = iM, MM
    }

    function pM(MM, rM) {
      return function(MM) {
        if (Array.isArray(MM)) return MM
      }(MM) || function(MM, rM) {
        var iM = null == MM ? null : "undefined" !== typeof Symbol && MM[Symbol.iterator] || MM["@@iterator"];
        if (null == iM) return;
        var OM, SM, jM = [],
          aM = !0,
          PM = !1;
        try {
          for (iM = iM.call(MM); !(aM = (OM = iM.next()).done) && (jM.push(OM.value), !rM || jM.length !== rM); aM = !0);
        } catch (nM) {
          PM = !0, SM = nM
        } finally {
          try {
            aM || null == iM.return || iM.return()
          } finally {
            if (PM) throw SM
          }
        }
        return jM
      }(MM, rM) || WM(MM, rM) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function WM(MM, rM) {
      if (MM) {
        if ("string" === typeof MM) return sM(MM, rM);
        var iM = Object.prototype.toString.call(MM).slice(8, -1);
        return "Object" === iM && MM.constructor && (iM = MM.constructor.name), "Map" === iM || "Set" === iM ? Array.from(MM) : "Arguments" === iM || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(iM) ? sM(MM, rM) : void 0
      }
    }

    function sM(MM, rM) {
      (null == rM || rM > MM.length) && (rM = MM.length);
      for (var iM = 0, OM = new Array(rM); iM < rM; iM++) OM[iM] = MM[iM];
      return OM
    }
    var DM = "file-invalid-type",
      kM = "file-too-large",
      ZM = "file-too-small",
      oM = "too-many-files",
      fM = function(MM) {
        MM = Array.isArray(MM) && 1 === MM.length ? MM[0] : MM;
        var rM = Array.isArray(MM) ? "one of ".concat(MM.join(", ")) : MM;
        return {
          code: DM,
          message: "File type must be ".concat(rM)
        }
      },
      YM = function(MM) {
        return {
          code: kM,
          message: "File is larger than ".concat(MM, " ").concat(1 === MM ? "byte" : "bytes")
        }
      },
      NM = function(MM) {
        return {
          code: ZM,
          message: "File is smaller than ".concat(MM, " ").concat(1 === MM ? "byte" : "bytes")
        }
      },
      AM = {
        code: oM,
        message: "Too many files"
      };

    function xM(MM, rM) {
      var iM = "application/x-moz-file" === MM.type || (0, wM.d)(MM, rM);
      return [iM, iM ? null : fM(rM)]
    }

    function vM(MM, rM, iM) {
      if (FM(MM.size))
        if (FM(rM) && FM(iM)) {
          if (MM.size > iM) return [!1, YM(iM)];
          if (MM.size < rM) return [!1, NM(rM)]
        } else {
          if (FM(rM) && MM.size < rM) return [!1, NM(rM)];
          if (FM(iM) && MM.size > iM) return [!1, YM(iM)]
        } return [!0, null]
    }

    function FM(MM) {
      return void 0 !== MM && null !== MM
    }

    function BM(MM) {
      return "function" === typeof MM.isPropagationStopped ? MM.isPropagationStopped() : "undefined" !== typeof MM.cancelBubble && MM.cancelBubble
    }

    function XM(MM) {
      return MM.dataTransfer ? Array.prototype.some.call(MM.dataTransfer.types, (function(MM) {
        return "Files" === MM || "application/x-moz-file" === MM
      })) : !!MM.target && !!MM.target.files
    }

    function IM(MM) {
      MM.preventDefault()
    }

    function KM() {
      for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
      return function(MM) {
        for (var iM = arguments.length, OM = new Array(iM > 1 ? iM - 1 : 0), SM = 1; SM < iM; SM++) OM[SM - 1] = arguments[SM];
        return rM.some((function(rM) {
          return !BM(MM) && rM && rM.apply(void 0, [MM].concat(OM)), BM(MM)
        }))
      }
    }

    function qM(MM) {
      return "audio/*" === MM || "video/*" === MM || "image/*" === MM || "text/*" === MM || /\w+\/[-+.\w]+/g.test(MM)
    }

    function TM(MM) {
      return /^.*\.[\w]+$/.test(MM)
    }
    var VM = ["children"],
      cM = ["open"],
      Mr = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
      rr = ["refKey", "onChange", "onClick"];

    function ir(MM) {
      return function(MM) {
        if (Array.isArray(MM)) return jr(MM)
      }(MM) || function(MM) {
        if ("undefined" !== typeof Symbol && null != MM[Symbol.iterator] || null != MM["@@iterator"]) return Array.from(MM)
      }(MM) || Sr(MM) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Or(MM, rM) {
      return function(MM) {
        if (Array.isArray(MM)) return MM
      }(MM) || function(MM, rM) {
        var iM = null == MM ? null : "undefined" !== typeof Symbol && MM[Symbol.iterator] || MM["@@iterator"];
        if (null == iM) return;
        var OM, SM, jM = [],
          aM = !0,
          PM = !1;
        try {
          for (iM = iM.call(MM); !(aM = (OM = iM.next()).done) && (jM.push(OM.value), !rM || jM.length !== rM); aM = !0);
        } catch (nM) {
          PM = !0, SM = nM
        } finally {
          try {
            aM || null == iM.return || iM.return()
          } finally {
            if (PM) throw SM
          }
        }
        return jM
      }(MM, rM) || Sr(MM, rM) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Sr(MM, rM) {
      if (MM) {
        if ("string" === typeof MM) return jr(MM, rM);
        var iM = Object.prototype.toString.call(MM).slice(8, -1);
        return "Object" === iM && MM.constructor && (iM = MM.constructor.name), "Map" === iM || "Set" === iM ? Array.from(MM) : "Arguments" === iM || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(iM) ? jr(MM, rM) : void 0
      }
    }

    function jr(MM, rM) {
      (null == rM || rM > MM.length) && (rM = MM.length);
      for (var iM = 0, OM = new Array(rM); iM < rM; iM++) OM[iM] = MM[iM];
      return OM
    }

    function ar(MM, rM) {
      var iM = Object.keys(MM);
      if (Object.getOwnPropertySymbols) {
        var OM = Object.getOwnPropertySymbols(MM);
        rM && (OM = OM.filter((function(rM) {
          return Object.getOwnPropertyDescriptor(MM, rM).enumerable
        }))), iM.push.apply(iM, OM)
      }
      return iM
    }

    function Pr(MM) {
      for (var rM = 1; rM < arguments.length; rM++) {
        var iM = null != arguments[rM] ? arguments[rM] : {};
        rM % 2 ? ar(Object(iM), !0).forEach((function(rM) {
          nr(MM, rM, iM[rM])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : ar(Object(iM)).forEach((function(rM) {
          Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
        }))
      }
      return MM
    }

    function nr(MM, rM, iM) {
      return rM in MM ? Object.defineProperty(MM, rM, {
        value: iM,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : MM[rM] = iM, MM
    }

    function Qr(MM, rM) {
      if (null == MM) return {};
      var iM, OM, SM = function(MM, rM) {
        if (null == MM) return {};
        var iM, OM, SM = {},
          jM = Object.keys(MM);
        for (OM = 0; OM < jM.length; OM++) iM = jM[OM], rM.indexOf(iM) >= 0 || (SM[iM] = MM[iM]);
        return SM
      }(MM, rM);
      if (Object.getOwnPropertySymbols) {
        var jM = Object.getOwnPropertySymbols(MM);
        for (OM = 0; OM < jM.length; OM++) iM = jM[OM], rM.indexOf(iM) >= 0 || Object.prototype.propertyIsEnumerable.call(MM, iM) && (SM[iM] = MM[iM])
      }
      return SM
    }
    var zr = (0, OM.forwardRef)((function(MM, rM) {
      var iM = MM.children,
        SM = Hr(Qr(MM, VM)),
        jM = SM.open,
        aM = Qr(SM, cM);
      return (0, OM.useImperativeHandle)(rM, (function() {
        return {
          open: jM
        }
      }), [jM]), OM.createElement(OM.Fragment, null, iM(Pr(Pr({}, aM), {}, {
        open: jM
      })))
    }));
    zr.displayName = "Dropzone";
    var Lr = {
      disabled: !1,
      getFilesFromEvent: function(MM) {
        return aM(this, void 0, void 0, (function() {
          return PM(this, (function(rM) {
            return HM(MM) && HM(MM.dataTransfer) ? [2, dM(MM.dataTransfer, MM.type)] : function(MM) {
              return HM(MM) && HM(MM.target)
            }(MM) ? [2, hM(MM)] : Array.isArray(MM) && MM.every((function(MM) {
              return "getFile" in MM && "function" === typeof MM.getFile
            })) ? [2, JM(MM)] : [2, []]
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
    zr.defaultProps = Lr, zr.propTypes = {
      children: jM().func,
      accept: jM().objectOf(jM().arrayOf(jM().string)),
      multiple: jM().bool,
      preventDropOnDocument: jM().bool,
      noClick: jM().bool,
      noKeyboard: jM().bool,
      noDrag: jM().bool,
      noDragEventsBubbling: jM().bool,
      minSize: jM().number,
      maxSize: jM().number,
      maxFiles: jM().number,
      disabled: jM().bool,
      getFilesFromEvent: jM().func,
      onFileDialogCancel: jM().func,
      onFileDialogOpen: jM().func,
      useFsAccessApi: jM().bool,
      autoFocus: jM().bool,
      onDragEnter: jM().func,
      onDragLeave: jM().func,
      onDragOver: jM().func,
      onDrop: jM().func,
      onDropAccepted: jM().func,
      onDropRejected: jM().func,
      onError: jM().func,
      validator: jM().func
    };
    var mr = {
      jD: !1,
      isFileDialogActive: !1,
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1,
      acceptedFiles: [],
      fileRejections: []
    };

    function Hr() {
      var MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        rM = Pr(Pr({}, Lr), MM),
        iM = rM.accept,
        SM = rM.disabled,
        jM = rM.getFilesFromEvent,
        aM = rM.maxSize,
        PM = rM.minSize,
        nM = rM.multiple,
        QM = rM.maxFiles,
        zM = rM.onDragEnter,
        LM = rM.onDragLeave,
        mM = rM.onDragOver,
        HM = rM.onDrop,
        hM = rM.onDropAccepted,
        JM = rM.onDropRejected,
        dM = rM.onFileDialogCancel,
        yM = rM.onFileDialogOpen,
        lM = rM.useFsAccessApi,
        EM = rM.autoFocus,
        UM = rM.preventDropOnDocument,
        GM = rM.noClick,
        CM = rM.noKeyboard,
        eM = rM.noDrag,
        bM = rM.noDragEventsBubbling,
        wM = rM.onError,
        gM = rM.validator,
        WM = (0, OM.useMemo)((function() {
          return function(MM) {
            if (FM(MM)) return Object.entries(MM).reduce((function(MM, rM) {
              var iM = pM(rM, 2),
                OM = iM[0],
                SM = iM[1];
              return [].concat(tM(MM), [OM], tM(SM))
            }), []).filter((function(MM) {
              return qM(MM) || TM(MM)
            })).join(",")
          }(iM)
        }), [iM]),
        sM = (0, OM.useMemo)((function() {
          return function(MM) {
            return FM(MM) ? [{
              description: "Files",
              accept: Object.entries(MM).filter((function(MM) {
                var rM = pM(MM, 2),
                  iM = rM[0],
                  OM = rM[1],
                  SM = !0;
                return qM(iM) || (console.warn('Skipped "'.concat(iM, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), SM = !1), Array.isArray(OM) && OM.every(TM) || (console.warn('Skipped "'.concat(iM, '" because an invalid file extension was provided.')), SM = !1), SM
              })).reduce((function(MM, rM) {
                var iM = pM(rM, 2),
                  OM = iM[0],
                  SM = iM[1];
                return uM(uM({}, MM), {}, RM({}, OM, SM))
              }), {})
            }] : MM
          }(iM)
        }), [iM]),
        DM = (0, OM.useMemo)((function() {
          return "function" === typeof yM ? yM : Jr
        }), [yM]),
        kM = (0, OM.useMemo)((function() {
          return "function" === typeof dM ? dM : Jr
        }), [dM]),
        ZM = (0, OM.useRef)(null),
        oM = (0, OM.useRef)(null),
        fM = Or((0, OM.useReducer)(hr, mr), 2),
        YM = fM[0],
        NM = fM[1],
        VM = YM.jD,
        cM = YM.isFileDialogActive,
        Sr = (0, OM.useRef)("undefined" !== typeof window && window.isSecureContext && lM && "showOpenFilePicker" in window),
        jr = function() {
          !Sr.current && cM && setTimeout((function() {
            oM.current && (oM.current.files.length || (NM({
              type: "closeDialog"
            }), kM()))
          }), 300)
        };
      (0, OM.useEffect)((function() {
        return window.addEventListener("focus", jr, !1),
          function() {
            window.removeEventListener("focus", jr, !1)
          }
      }), [oM, cM, kM, Sr]);
      var ar = (0, OM.useRef)([]),
        zr = function(MM) {
          ZM.current && ZM.current.contains(MM.target) || (MM.preventDefault(), ar.current = [])
        };
      (0, OM.useEffect)((function() {
        return UM && (document.addEventListener("dragover", IM, !1), document.addEventListener("drop", zr, !1)),
          function() {
            UM && (document.removeEventListener("dragover", IM), document.removeEventListener("drop", zr))
          }
      }), [ZM, UM]), (0, OM.useEffect)((function() {
        return !SM && EM && ZM.current && ZM.current.focus(),
          function() {}
      }), [ZM, EM, SM]);
      var Hr = (0, OM.useCallback)((function(MM) {
          wM ? wM(MM) : console.error(MM)
        }), [wM]),
        dr = (0, OM.useCallback)((function(MM) {
          MM.preventDefault(), MM.persist(), Rr(MM), ar.current = [].concat(ir(ar.current), [MM.target]), XM(MM) && Promise.resolve(jM(MM)).then((function(rM) {
            if (!BM(MM) || bM) {
              var iM = rM.length,
                OM = iM > 0 && function(MM) {
                  var rM = MM.files,
                    iM = MM.accept,
                    OM = MM.minSize,
                    SM = MM.maxSize,
                    jM = MM.multiple,
                    aM = MM.maxFiles,
                    PM = MM.validator;
                  return !(!jM && rM.length > 1 || jM && aM >= 1 && rM.length > aM) && rM.every((function(MM) {
                    var rM = pM(xM(MM, iM), 1)[0],
                      jM = pM(vM(MM, OM, SM), 1)[0],
                      aM = PM ? PM(MM) : null;
                    return rM && jM && !aM
                  }))
                }({
                  files: rM,
                  accept: WM,
                  minSize: PM,
                  maxSize: aM,
                  multiple: nM,
                  maxFiles: QM,
                  validator: gM
                });
              NM({
                isDragAccept: OM,
                isDragReject: iM > 0 && !OM,
                isDragActive: !0,
                type: "setDraggedFiles"
              }), zM && zM(MM)
            }
          })).catch((function(MM) {
            return Hr(MM)
          }))
        }), [jM, zM, Hr, bM, WM, PM, aM, nM, QM, gM]),
        yr = (0, OM.useCallback)((function(MM) {
          MM.preventDefault(), MM.persist(), Rr(MM);
          var rM = XM(MM);
          if (rM && MM.dataTransfer) try {
            MM.dataTransfer.dropEffect = "copy"
          } catch (iM) {}
          return rM && mM && mM(MM), !1
        }), [mM, bM]),
        lr = (0, OM.useCallback)((function(MM) {
          MM.preventDefault(), MM.persist(), Rr(MM);
          var rM = ar.current.filter((function(MM) {
              return ZM.current && ZM.current.contains(MM)
            })),
            iM = rM.indexOf(MM.target); - 1 !== iM && rM.splice(iM, 1), ar.current = rM, rM.length > 0 || (NM({
            type: "setDraggedFiles",
            isDragActive: !1,
            isDragAccept: !1,
            isDragReject: !1
          }), XM(MM) && LM && LM(MM))
        }), [ZM, LM, bM]),
        Er = (0, OM.useCallback)((function(MM, rM) {
          var iM = [],
            OM = [];
          MM.forEach((function(MM) {
            var rM = Or(xM(MM, WM), 2),
              SM = rM[0],
              jM = rM[1],
              nM = Or(vM(MM, PM, aM), 2),
              QM = nM[0],
              zM = nM[1],
              LM = gM ? gM(MM) : null;
            if (SM && QM && !LM) iM.push(MM);
            else {
              var mM = [jM, zM];
              LM && (mM = mM.concat(LM)), OM.push({
                file: MM,
                errors: mM.filter((function(MM) {
                  return MM
                }))
              })
            }
          })), (!nM && iM.length > 1 || nM && QM >= 1 && iM.length > QM) && (iM.forEach((function(MM) {
            OM.push({
              file: MM,
              errors: [AM]
            })
          })), iM.splice(0)), NM({
            acceptedFiles: iM,
            fileRejections: OM,
            type: "setFiles"
          }), HM && HM(iM, OM, rM), OM.length > 0 && JM && JM(OM, rM), iM.length > 0 && hM && hM(iM, rM)
        }), [NM, nM, WM, PM, aM, QM, HM, hM, JM, gM]),
        Ur = (0, OM.useCallback)((function(MM) {
          MM.preventDefault(), MM.persist(), Rr(MM), ar.current = [], XM(MM) && Promise.resolve(jM(MM)).then((function(rM) {
            BM(MM) && !bM || Er(rM, MM)
          })).catch((function(MM) {
            return Hr(MM)
          })), NM({
            type: "reset"
          })
        }), [jM, Er, Hr, bM]),
        Gr = (0, OM.useCallback)((function() {
          if (Sr.current) {
            NM({
              type: "openDialog"
            }), DM();
            var MM = {
              multiple: nM,
              types: sM
            };
            window.showOpenFilePicker(MM).then((function(MM) {
              return jM(MM)
            })).then((function(MM) {
              Er(MM, null), NM({
                type: "closeDialog"
              })
            })).catch((function(MM) {
              var rM;
              (rM = MM) instanceof DOMException && ("AbortError" === rM.name || rM.code === rM.ABORT_ERR) ? (kM(MM), NM({
                type: "closeDialog"
              })) : ! function(MM) {
                return MM instanceof DOMException && ("SecurityError" === MM.name || MM.code === MM.SECURITY_ERR)
              }(MM) ? Hr(MM) : (Sr.current = !1, oM.current ? (oM.current.value = null, oM.current.click()) : Hr(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))
            }))
          } else oM.current && (NM({
            type: "openDialog"
          }), DM(), oM.current.value = null, oM.current.click())
        }), [NM, DM, kM, lM, Er, Hr, sM, nM]),
        Cr = (0, OM.useCallback)((function(MM) {
          ZM.current && ZM.current.isEqualNode(MM.target) && (" " !== MM.key && "Enter" !== MM.key && 32 !== MM.keyCode && 13 !== MM.keyCode || (MM.preventDefault(), Gr()))
        }), [ZM, Gr]),
        er = (0, OM.useCallback)((function() {
          NM({
            type: "focus"
          })
        }), []),
        br = (0, OM.useCallback)((function() {
          NM({
            type: "blur"
          })
        }), []),
        wr = (0, OM.useCallback)((function() {
          GM || (! function() {
            var MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
            return function(MM) {
              return -1 !== MM.indexOf("MSIE") || -1 !== MM.indexOf("Trident/")
            }(MM) || function(MM) {
              return -1 !== MM.indexOf("Edge/")
            }(MM)
          }() ? Gr() : setTimeout(Gr, 0))
        }), [GM, Gr]),
        tr = function(MM) {
          return SM ? null : MM
        },
        gr = function(MM) {
          return CM ? null : tr(MM)
        },
        ur = function(MM) {
          return eM ? null : tr(MM)
        },
        Rr = function(MM) {
          bM && MM.stopPropagation()
        },
        pr = (0, OM.useMemo)((function() {
          return function() {
            var MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              rM = MM.refKey,
              iM = void 0 === rM ? "ref" : rM,
              OM = MM.role,
              jM = MM.onKeyDown,
              aM = MM.onFocus,
              PM = MM.onBlur,
              nM = MM.onClick,
              QM = MM.onDragEnter,
              zM = MM.onDragOver,
              LM = MM.onDragLeave,
              mM = MM.onDrop,
              HM = Qr(MM, Mr);
            return Pr(Pr(nr({
              onKeyDown: gr(KM(jM, Cr)),
              onFocus: gr(KM(aM, er)),
              onBlur: gr(KM(PM, br)),
              onClick: tr(KM(nM, wr)),
              onDragEnter: ur(KM(QM, dr)),
              onDragOver: ur(KM(zM, yr)),
              onDragLeave: ur(KM(LM, lr)),
              onDrop: ur(KM(mM, Ur)),
              role: "string" === typeof OM && "" !== OM ? OM : "presentation"
            }, iM, ZM), SM || CM ? {} : {
              tabIndex: 0
            }), HM)
          }
        }), [ZM, Cr, er, br, wr, dr, yr, lr, Ur, CM, eM, SM]),
        Wr = (0, OM.useCallback)((function(MM) {
          MM.stopPropagation()
        }), []),
        sr = (0, OM.useMemo)((function() {
          return function() {
            var MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              rM = MM.refKey,
              iM = void 0 === rM ? "ref" : rM,
              OM = MM.onChange,
              SM = MM.onClick,
              jM = Qr(MM, rr);
            return Pr(Pr({}, nr({
              accept: WM,
              multiple: nM,
              type: "file",
              style: {
                display: "none"
              },
              onChange: tr(KM(OM, Ur)),
              onClick: tr(KM(SM, Wr)),
              tabIndex: -1
            }, iM, oM)), jM)
          }
        }), [oM, iM, nM, Ur, SM]);
      return Pr(Pr({}, YM), {}, {
        jD: VM && !SM,
        getRootProps: pr,
        getInputProps: sr,
        rootRef: ZM,
        inputRef: oM,
        open: tr(Gr)
      })
    }

    function hr(MM, rM) {
      switch (rM.type) {
        case "focus":
          return Pr(Pr({}, MM), {}, {
            jD: !0
          });
        case "blur":
          return Pr(Pr({}, MM), {}, {
            jD: !1
          });
        case "openDialog":
          return Pr(Pr({}, mr), {}, {
            isFileDialogActive: !0
          });
        case "closeDialog":
          return Pr(Pr({}, MM), {}, {
            isFileDialogActive: !1
          });
        case "setDraggedFiles":
          return Pr(Pr({}, MM), {}, {
            isDragActive: rM.isDragActive,
            isDragAccept: rM.isDragAccept,
            isDragReject: rM.isDragReject
          });
        case "setFiles":
          return Pr(Pr({}, MM), {}, {
            acceptedFiles: rM.acceptedFiles,
            fileRejections: rM.fileRejections
          });
        case "reset":
          return Pr({}, mr);
        default:
          return MM
      }
    }

    function Jr() {}
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);