export const id = 109;
export const ids = [109];
export const modules = {
  5063: (BB, jB) => {
    jB.c = function(BB, jB) {
      if (BB && jB) {
        var zB = Array.isArray(jB) ? jB : jB.split(","),
          QB = BB.name || "",
          nB = (BB.type || "").toLowerCase(),
          dB = nB.replace(/\/.*$/, "");
        return zB.some((function(BB) {
          var jB = BB.trim().toLowerCase();
          return "." === jB.charAt(0) ? QB.toLowerCase().endsWith(jB) : jB.endsWith("/*") ? dB === jB.replace(/\/.*$/, "") : nB === jB
        }))
      }
      return !0
    }
  },
  5041: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => sj
    });
    var QB = zB(62),
      nB = zB(5045),
      dB = zB.n(nB);

    function IB(BB, jB, zB, QB) {
      return new(zB || (zB = Promise))((function(nB, dB) {
        function IB(BB) {
          try {
            uB(QB.next(BB))
          } catch (jB) {
            dB(jB)
          }
        }

        function NB(BB) {
          try {
            uB(QB.throw(BB))
          } catch (jB) {
            dB(jB)
          }
        }

        function uB(BB) {
          var jB;
          BB.done ? nB(BB.value) : (jB = BB.value, jB instanceof zB ? jB : new zB((function(BB) {
            BB(jB)
          }))).then(IB, NB)
        }
        uB((QB = QB.apply(BB, jB || [])).next())
      }))
    }

    function NB(BB, jB) {
      var zB, QB, nB, dB, IB = {
        label: 0,
        sent: function() {
          if (1 & nB[0]) throw nB[1];
          return nB[1]
        },
        trys: [],
        ops: []
      };
      return dB = {
        next: NB(0),
        throw: NB(1),
        return: NB(2)
      }, "function" === typeof Symbol && (dB[Symbol.iterator] = function() {
        return this
      }), dB;

      function NB(NB) {
        return function(uB) {
          return function(NB) {
            if (zB) throw new TypeError("Generator is already executing.");
            for (; dB && (dB = 0, NB[0] && (IB = 0)), IB;) try {
              if (zB = 1, QB && (nB = 2 & NB[0] ? QB.return : NB[0] ? QB.throw || ((nB = QB.return) && nB.call(QB), 0) : QB.next) && !(nB = nB.call(QB, NB[1])).done) return nB;
              switch (QB = 0, nB && (NB = [2 & NB[0], nB.value]), NB[0]) {
                case 0:
                case 1:
                  nB = NB;
                  break;
                case 4:
                  return IB.label++, {
                    value: NB[1],
                    done: !1
                  };
                case 5:
                  IB.label++, QB = NB[1], NB = [0];
                  continue;
                case 7:
                  NB = IB.ops.pop(), IB.trys.pop();
                  continue;
                default:
                  if (!(nB = (nB = IB.trys).length > 0 && nB[nB.length - 1]) && (6 === NB[0] || 2 === NB[0])) {
                    IB = 0;
                    continue
                  }
                  if (3 === NB[0] && (!nB || NB[1] > nB[0] && NB[1] < nB[3])) {
                    IB.label = NB[1];
                    break
                  }
                  if (6 === NB[0] && IB.label < nB[1]) {
                    IB.label = nB[1], nB = NB;
                    break
                  }
                  if (nB && IB.label < nB[2]) {
                    IB.label = nB[2], IB.ops.push(NB);
                    break
                  }
                  nB[2] && IB.ops.pop(), IB.trys.pop();
                  continue
              }
              NB = jB.call(BB, IB)
            } catch (uB) {
              NB = [6, uB], QB = 0
            } finally {
              zB = nB = 0
            }
            if (5 & NB[0]) throw NB[1];
            return {
              value: NB[0] ? NB[1] : void 0,
              done: !0
            }
          }([NB, uB])
        }
      }
    }
    Object.create;

    function uB(BB, jB) {
      var zB = "function" === typeof Symbol && BB[Symbol.iterator];
      if (!zB) return BB;
      var QB, nB, dB = zB.call(BB),
        IB = [];
      try {
        for (;
          (void 0 === jB || jB-- > 0) && !(QB = dB.next()).done;) IB.push(QB.value)
      } catch (NB) {
        nB = {
          error: NB
        }
      } finally {
        try {
          QB && !QB.done && (zB = dB.return) && zB.call(dB)
        } finally {
          if (nB) throw nB.error
        }
      }
      return IB
    }

    function UB(BB, jB, zB) {
      if (zB || 2 === arguments.length)
        for (var QB, nB = 0, dB = jB.length; nB < dB; nB++) !QB && nB in jB || (QB || (QB = Array.prototype.slice.call(jB, 0, nB)), QB[nB] = jB[nB]);
      return BB.concat(QB || Array.prototype.slice.call(jB))
    }
    Object.create;
    "function" === typeof SuppressedError && SuppressedError;
    var aB = new Map([
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
      ["ha", "application/vnd.ms-outlook"]
    ]);

    function pB(BB, jB) {
      var zB = function(BB) {
        var jB = BB.name;
        if (jB && -1 !== jB.lastIndexOf(".") && !BB.type) {
          var zB = jB.split(".").pop().toLowerCase(),
            QB = aB.get(zB);
          QB && Object.defineProperty(BB, "type", {
            value: QB,
            writable: !1,
            configurable: !1,
            enumerable: !0
          })
        }
        return BB
      }(BB);
      if ("string" !== typeof zB.path) {
        var QB = BB.webkitRelativePath;
        Object.defineProperty(zB, "path", {
          value: "string" === typeof jB ? jB : "string" === typeof QB && QB.length > 0 ? QB : BB.name,
          writable: !1,
          configurable: !1,
          enumerable: !0
        })
      }
      return zB
    }
    var rB = [".DS_Store", "Thumbs.db"];

    function sB(BB) {
      return "object" === typeof BB && null !== BB
    }

    function JB(BB) {
      return GB(BB.target.files).map((function(BB) {
        return pB(BB)
      }))
    }

    function mB(BB) {
      return IB(this, void 0, void 0, (function() {
        return NB(this, (function(jB) {
          switch (jB.label) {
            case 0:
              return [4, Promise.all(BB.map((function(BB) {
                return BB.getFile()
              })))];
            case 1:
              return [2, jB.sent().map((function(BB) {
                return pB(BB)
              }))]
          }
        }))
      }))
    }

    function yB(BB, jB) {
      return IB(this, void 0, void 0, (function() {
        var zB;
        return NB(this, (function(QB) {
          switch (QB.label) {
            case 0:
              return BB.items ? (zB = GB(BB.items).filter((function(BB) {
                return "file" === BB.kind
              })), "drop" !== jB ? [2, zB] : [4, Promise.all(zB.map(LB))]) : [3, 2];
            case 1:
              return [2, kB(gB(QB.sent()))];
            case 2:
              return [2, kB(GB(BB.files).map((function(BB) {
                return pB(BB)
              })))]
          }
        }))
      }))
    }

    function kB(BB) {
      return BB.filter((function(BB) {
        return -1 === rB.indexOf(BB.name)
      }))
    }

    function GB(BB) {
      if (null === BB) return [];
      for (var jB = [], zB = 0; zB < BB.length; zB++) {
        var QB = BB[zB];
        jB.push(QB)
      }
      return jB
    }

    function LB(BB) {
      if ("function" !== typeof BB.webkitGetAsEntry) return tB(BB);
      var jB = BB.webkitGetAsEntry();
      return jB && jB.isDirectory ? MB(jB) : tB(BB)
    }

    function gB(BB) {
      return BB.reduce((function(BB, jB) {
        return UB(UB([], uB(BB), !1), uB(Array.isArray(jB) ? gB(jB) : [jB]), !1)
      }), [])
    }

    function tB(BB) {
      var jB = BB.getAsFile();
      if (!jB) return Promise.reject("".concat(BB, " is not a File"));
      var zB = pB(jB);
      return Promise.resolve(zB)
    }

    function SB(BB) {
      return IB(this, void 0, void 0, (function() {
        return NB(this, (function(jB) {
          return [2, BB.isDirectory ? MB(BB) : EB(BB)]
        }))
      }))
    }

    function MB(BB) {
      var jB = BB.createReader();
      return new Promise((function(BB, zB) {
        var QB = [];
        ! function nB() {
          var dB = this;
          jB.readEntries((function(jB) {
            return IB(dB, void 0, void 0, (function() {
              var dB, IB, uB;
              return NB(this, (function(NB) {
                switch (NB.label) {
                  case 0:
                    if (jB.length) return [3, 5];
                    NB.label = 1;
                  case 1:
                    return NB.trys.push([1, 3, , 4]), [4, Promise.all(QB)];
                  case 2:
                    return dB = NB.sent(), BB(dB), [3, 4];
                  case 3:
                    return IB = NB.sent(), zB(IB), [3, 4];
                  case 4:
                    return [3, 6];
                  case 5:
                    uB = Promise.all(jB.map(SB)), QB.push(uB), nB(), NB.label = 6;
                  case 6:
                    return [2]
                }
              }))
            }))
          }), (function(BB) {
            zB(BB)
          }))
        }()
      }))
    }

    function EB(BB) {
      return IB(this, void 0, void 0, (function() {
        return NB(this, (function(jB) {
          return [2, new Promise((function(jB, zB) {
            BB.file((function(zB) {
              var QB = pB(zB, BB.fullPath);
              jB(QB)
            }), (function(BB) {
              zB(BB)
            }))
          }))]
        }))
      }))
    }
    var iB = zB(5063);

    function qB(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return YB(BB)
      }(BB) || function(BB) {
        if ("undefined" !== typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
      }(BB) || FB(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function fB(BB, jB) {
      var zB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        jB && (QB = QB.filter((function(jB) {
          return Object.getOwnPropertyDescriptor(BB, jB).enumerable
        }))), zB.push.apply(zB, QB)
      }
      return zB
    }

    function oB(BB) {
      for (var jB = 1; jB < arguments.length; jB++) {
        var zB = null != arguments[jB] ? arguments[jB] : {};
        jB % 2 ? fB(Object(zB), !0).forEach((function(jB) {
          HB(BB, jB, zB[jB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(zB)) : fB(Object(zB)).forEach((function(jB) {
          Object.defineProperty(BB, jB, Object.getOwnPropertyDescriptor(zB, jB))
        }))
      }
      return BB
    }

    function HB(BB, jB, zB) {
      return jB in BB ? Object.defineProperty(BB, jB, {
        value: zB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[jB] = zB, BB
    }

    function DB(BB, jB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, jB) {
        var zB = null == BB ? null : "undefined" !== typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null == zB) return;
        var QB, nB, dB = [],
          IB = !0,
          NB = !1;
        try {
          for (zB = zB.call(BB); !(IB = (QB = zB.next()).done) && (dB.push(QB.value), !jB || dB.length !== jB); IB = !0);
        } catch (uB) {
          NB = !0, nB = uB
        } finally {
          try {
            IB || null == zB.return || zB.return()
          } finally {
            if (NB) throw nB
          }
        }
        return dB
      }(BB, jB) || FB(BB, jB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function FB(BB, jB) {
      if (BB) {
        if ("string" === typeof BB) return YB(BB, jB);
        var zB = Object.prototype.toString.call(BB).slice(8, -1);
        return "Object" === zB && BB.constructor && (zB = BB.constructor.name), "Map" === zB || "Set" === zB ? Array.from(BB) : "Arguments" === zB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(zB) ? YB(BB, jB) : void 0
      }
    }

    function YB(BB, jB) {
      (null == jB || jB > BB.length) && (jB = BB.length);
      for (var zB = 0, QB = new Array(jB); zB < jB; zB++) QB[zB] = BB[zB];
      return QB
    }
    var VB = "file-invalid-type",
      hB = "file-too-large",
      XB = "file-too-small",
      ZB = "too-many-files",
      AB = function(BB) {
        BB = Array.isArray(BB) && 1 === BB.length ? BB[0] : BB;
        var jB = Array.isArray(BB) ? "one of ".concat(BB.join(", ")) : BB;
        return {
          code: VB,
          message: "File type must be ".concat(jB)
        }
      },
      TB = function(BB) {
        return {
          code: hB,
          message: "File is larger than ".concat(BB, " ").concat(1 === BB ? "byte" : "bytes")
        }
      },
      PB = function(BB) {
        return {
          code: XB,
          message: "File is smaller than ".concat(BB, " ").concat(1 === BB ? "byte" : "bytes")
        }
      },
      WB = {
        code: ZB,
        message: "Too many files"
      };

    function eB(BB, jB) {
      var zB = "application/x-moz-file" === BB.type || (0, iB.c)(BB, jB);
      return [zB, zB ? null : AB(jB)]
    }

    function lB(BB, jB, zB) {
      if (wB(BB.size))
        if (wB(jB) && wB(zB)) {
          if (BB.size > zB) return [!1, TB(zB)];
          if (BB.size < jB) return [!1, PB(jB)]
        } else {
          if (wB(jB) && BB.size < jB) return [!1, PB(jB)];
          if (wB(zB) && BB.size > zB) return [!1, TB(zB)]
        } return [!0, null]
    }

    function wB(BB) {
      return void 0 !== BB && null !== BB
    }

    function xB(BB) {
      return "function" === typeof BB.isPropagationStopped ? BB.isPropagationStopped() : "undefined" !== typeof BB.cancelBubble && BB.cancelBubble
    }

    function KB(BB) {
      return BB.dataTransfer ? Array.prototype.some.call(BB.dataTransfer.types, (function(BB) {
        return "Files" === BB || "application/x-moz-file" === BB
      })) : !!BB.target && !!BB.target.files
    }

    function CB(BB) {
      BB.preventDefault()
    }

    function cB() {
      for (var BB = arguments.length, jB = new Array(BB), zB = 0; zB < BB; zB++) jB[zB] = arguments[zB];
      return function(BB) {
        for (var zB = arguments.length, QB = new Array(zB > 1 ? zB - 1 : 0), nB = 1; nB < zB; nB++) QB[nB - 1] = arguments[nB];
        return jB.some((function(jB) {
          return !xB(BB) && jB && jB.apply(void 0, [BB].concat(QB)), xB(BB)
        }))
      }
    }

    function bB(BB) {
      return "audio/*" === BB || "video/*" === BB || "image/*" === BB || "text/*" === BB || /\w+\/[-+.\w]+/g.test(BB)
    }

    function vB(BB) {
      return /^.*\.[\w]+$/.test(BB)
    }
    var RB = ["children"],
      OB = ["open"],
      Bj = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
      jj = ["refKey", "onChange", "onClick"];

    function zj(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return dj(BB)
      }(BB) || function(BB) {
        if ("undefined" !== typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
      }(BB) || nj(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Qj(BB, jB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, jB) {
        var zB = null == BB ? null : "undefined" !== typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null == zB) return;
        var QB, nB, dB = [],
          IB = !0,
          NB = !1;
        try {
          for (zB = zB.call(BB); !(IB = (QB = zB.next()).done) && (dB.push(QB.value), !jB || dB.length !== jB); IB = !0);
        } catch (uB) {
          NB = !0, nB = uB
        } finally {
          try {
            IB || null == zB.return || zB.return()
          } finally {
            if (NB) throw nB
          }
        }
        return dB
      }(BB, jB) || nj(BB, jB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function nj(BB, jB) {
      if (BB) {
        if ("string" === typeof BB) return dj(BB, jB);
        var zB = Object.prototype.toString.call(BB).slice(8, -1);
        return "Object" === zB && BB.constructor && (zB = BB.constructor.name), "Map" === zB || "Set" === zB ? Array.from(BB) : "Arguments" === zB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(zB) ? dj(BB, jB) : void 0
      }
    }

    function dj(BB, jB) {
      (null == jB || jB > BB.length) && (jB = BB.length);
      for (var zB = 0, QB = new Array(jB); zB < jB; zB++) QB[zB] = BB[zB];
      return QB
    }

    function Ij(BB, jB) {
      var zB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        jB && (QB = QB.filter((function(jB) {
          return Object.getOwnPropertyDescriptor(BB, jB).enumerable
        }))), zB.push.apply(zB, QB)
      }
      return zB
    }

    function Nj(BB) {
      for (var jB = 1; jB < arguments.length; jB++) {
        var zB = null != arguments[jB] ? arguments[jB] : {};
        jB % 2 ? Ij(Object(zB), !0).forEach((function(jB) {
          uj(BB, jB, zB[jB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(zB)) : Ij(Object(zB)).forEach((function(jB) {
          Object.defineProperty(BB, jB, Object.getOwnPropertyDescriptor(zB, jB))
        }))
      }
      return BB
    }

    function uj(BB, jB, zB) {
      return jB in BB ? Object.defineProperty(BB, jB, {
        value: zB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[jB] = zB, BB
    }

    function Uj(BB, jB) {
      if (null == BB) return {};
      var zB, QB, nB = function(BB, jB) {
        if (null == BB) return {};
        var zB, QB, nB = {},
          dB = Object.keys(BB);
        for (QB = 0; QB < dB.length; QB++) zB = dB[QB], jB.indexOf(zB) >= 0 || (nB[zB] = BB[zB]);
        return nB
      }(BB, jB);
      if (Object.getOwnPropertySymbols) {
        var dB = Object.getOwnPropertySymbols(BB);
        for (QB = 0; QB < dB.length; QB++) zB = dB[QB], jB.indexOf(zB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, zB) && (nB[zB] = BB[zB])
      }
      return nB
    }
    var aj = (0, QB.forwardRef)((function(BB, jB) {
      var zB = BB.children,
        nB = sj(Uj(BB, RB)),
        dB = nB.open,
        IB = Uj(nB, OB);
      return (0, QB.useImperativeHandle)(jB, (function() {
        return {
          open: dB
        }
      }), [dB]), QB.createElement(QB.Fragment, null, zB(Nj(Nj({}, IB), {}, {
        open: dB
      })))
    }));
    aj.displayName = "Dropzone";
    var pj = {
      disabled: !1,
      getFilesFromEvent: function(BB) {
        return IB(this, void 0, void 0, (function() {
          return NB(this, (function(jB) {
            return sB(BB) && sB(BB.dataTransfer) ? [2, yB(BB.dataTransfer, BB.type)] : function(BB) {
              return sB(BB) && sB(BB.target)
            }(BB) ? [2, JB(BB)] : Array.isArray(BB) && BB.every((function(BB) {
              return "getFile" in BB && "function" === typeof BB.getFile
            })) ? [2, mB(BB)] : [2, []]
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
    aj.defaultProps = pj, aj.propTypes = {
      children: dB().func,
      accept: dB().objectOf(dB().arrayOf(dB().string)),
      multiple: dB().bool,
      preventDropOnDocument: dB().bool,
      noClick: dB().bool,
      noKeyboard: dB().bool,
      noDrag: dB().bool,
      noDragEventsBubbling: dB().bool,
      minSize: dB().number,
      maxSize: dB().number,
      maxFiles: dB().number,
      disabled: dB().bool,
      getFilesFromEvent: dB().func,
      onFileDialogCancel: dB().func,
      onFileDialogOpen: dB().func,
      useFsAccessApi: dB().bool,
      autoFocus: dB().bool,
      onDragEnter: dB().func,
      onDragLeave: dB().func,
      onDragOver: dB().func,
      onDrop: dB().func,
      onDropAccepted: dB().func,
      onDropRejected: dB().func,
      onError: dB().func,
      validator: dB().func
    };
    var rj = {
      KD: !1,
      isFileDialogActive: !1,
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1,
      acceptedFiles: [],
      fileRejections: []
    };

    function sj() {
      var BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        jB = Nj(Nj({}, pj), BB),
        zB = jB.accept,
        nB = jB.disabled,
        dB = jB.getFilesFromEvent,
        IB = jB.maxSize,
        NB = jB.minSize,
        uB = jB.multiple,
        UB = jB.maxFiles,
        aB = jB.onDragEnter,
        pB = jB.onDragLeave,
        rB = jB.onDragOver,
        sB = jB.onDrop,
        JB = jB.onDropAccepted,
        mB = jB.onDropRejected,
        yB = jB.onFileDialogCancel,
        kB = jB.onFileDialogOpen,
        GB = jB.useFsAccessApi,
        LB = jB.autoFocus,
        gB = jB.preventDropOnDocument,
        tB = jB.noClick,
        SB = jB.noKeyboard,
        MB = jB.noDrag,
        EB = jB.noDragEventsBubbling,
        iB = jB.onError,
        fB = jB.validator,
        FB = (0, QB.useMemo)((function() {
          return function(BB) {
            if (wB(BB)) return Object.entries(BB).reduce((function(BB, jB) {
              var zB = DB(jB, 2),
                QB = zB[0],
                nB = zB[1];
              return [].concat(qB(BB), [QB], qB(nB))
            }), []).filter((function(BB) {
              return bB(BB) || vB(BB)
            })).join(",")
          }(zB)
        }), [zB]),
        YB = (0, QB.useMemo)((function() {
          return function(BB) {
            return wB(BB) ? [{
              description: "Files",
              accept: Object.entries(BB).filter((function(BB) {
                var jB = DB(BB, 2),
                  zB = jB[0],
                  QB = jB[1],
                  nB = !0;
                return bB(zB) || (console.warn('Skipped "'.concat(zB, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), nB = !1), Array.isArray(QB) && QB.every(vB) || (console.warn('Skipped "'.concat(zB, '" because an invalid file extension was provided.')), nB = !1), nB
              })).reduce((function(BB, jB) {
                var zB = DB(jB, 2),
                  QB = zB[0],
                  nB = zB[1];
                return oB(oB({}, BB), {}, HB({}, QB, nB))
              }), {})
            }] : BB
          }(zB)
        }), [zB]),
        VB = (0, QB.useMemo)((function() {
          return "function" === typeof kB ? kB : mj
        }), [kB]),
        hB = (0, QB.useMemo)((function() {
          return "function" === typeof yB ? yB : mj
        }), [yB]),
        XB = (0, QB.useRef)(null),
        ZB = (0, QB.useRef)(null),
        AB = Qj((0, QB.useReducer)(Jj, rj), 2),
        TB = AB[0],
        PB = AB[1],
        RB = TB.KD,
        OB = TB.isFileDialogActive,
        nj = (0, QB.useRef)("undefined" !== typeof window && window.isSecureContext && GB && "showOpenFilePicker" in window),
        dj = function() {
          !nj.current && OB && setTimeout((function() {
            ZB.current && (ZB.current.files.length || (PB({
              type: "closeDialog"
            }), hB()))
          }), 300)
        };
      (0, QB.useEffect)((function() {
        return window.addEventListener("focus", dj, !1),
          function() {
            window.removeEventListener("focus", dj, !1)
          }
      }), [ZB, OB, hB, nj]);
      var Ij = (0, QB.useRef)([]),
        aj = function(BB) {
          XB.current && XB.current.contains(BB.target) || (BB.preventDefault(), Ij.current = [])
        };
      (0, QB.useEffect)((function() {
        return gB && (document.addEventListener("dragover", CB, !1), document.addEventListener("drop", aj, !1)),
          function() {
            gB && (document.removeEventListener("dragover", CB), document.removeEventListener("drop", aj))
          }
      }), [XB, gB]), (0, QB.useEffect)((function() {
        return !nB && LB && XB.current && XB.current.focus(),
          function() {}
      }), [XB, LB, nB]);
      var sj = (0, QB.useCallback)((function(BB) {
          iB ? iB(BB) : console.error(BB)
        }), [iB]),
        yj = (0, QB.useCallback)((function(BB) {
          BB.preventDefault(), BB.persist(), Hj(BB), Ij.current = [].concat(zj(Ij.current), [BB.target]), KB(BB) && Promise.resolve(dB(BB)).then((function(jB) {
            if (!xB(BB) || EB) {
              var zB = jB.length,
                QB = zB > 0 && function(BB) {
                  var jB = BB.files,
                    zB = BB.accept,
                    QB = BB.minSize,
                    nB = BB.maxSize,
                    dB = BB.multiple,
                    IB = BB.maxFiles,
                    NB = BB.validator;
                  return !(!dB && jB.length > 1 || dB && IB >= 1 && jB.length > IB) && jB.every((function(BB) {
                    var jB = DB(eB(BB, zB), 1)[0],
                      dB = DB(lB(BB, QB, nB), 1)[0],
                      IB = NB ? NB(BB) : null;
                    return jB && dB && !IB
                  }))
                }({
                  files: jB,
                  accept: FB,
                  minSize: NB,
                  maxSize: IB,
                  multiple: uB,
                  maxFiles: UB,
                  validator: fB
                });
              PB({
                isDragAccept: QB,
                isDragReject: zB > 0 && !QB,
                isDragActive: !0,
                type: "setDraggedFiles"
              }), aB && aB(BB)
            }
          })).catch((function(BB) {
            return sj(BB)
          }))
        }), [dB, aB, sj, EB, FB, NB, IB, uB, UB, fB]),
        kj = (0, QB.useCallback)((function(BB) {
          BB.preventDefault(), BB.persist(), Hj(BB);
          var jB = KB(BB);
          if (jB && BB.dataTransfer) try {
            BB.dataTransfer.dropEffect = "copy"
          } catch (zB) {}
          return jB && rB && rB(BB), !1
        }), [rB, EB]),
        Gj = (0, QB.useCallback)((function(BB) {
          BB.preventDefault(), BB.persist(), Hj(BB);
          var jB = Ij.current.filter((function(BB) {
              return XB.current && XB.current.contains(BB)
            })),
            zB = jB.indexOf(BB.target); - 1 !== zB && jB.splice(zB, 1), Ij.current = jB, jB.length > 0 || (PB({
            type: "setDraggedFiles",
            isDragActive: !1,
            isDragAccept: !1,
            isDragReject: !1
          }), KB(BB) && pB && pB(BB))
        }), [XB, pB, EB]),
        Lj = (0, QB.useCallback)((function(BB, jB) {
          var zB = [],
            QB = [];
          BB.forEach((function(BB) {
            var jB = Qj(eB(BB, FB), 2),
              nB = jB[0],
              dB = jB[1],
              uB = Qj(lB(BB, NB, IB), 2),
              UB = uB[0],
              aB = uB[1],
              pB = fB ? fB(BB) : null;
            if (nB && UB && !pB) zB.push(BB);
            else {
              var rB = [dB, aB];
              pB && (rB = rB.concat(pB)), QB.push({
                file: BB,
                errors: rB.filter((function(BB) {
                  return BB
                }))
              })
            }
          })), (!uB && zB.length > 1 || uB && UB >= 1 && zB.length > UB) && (zB.forEach((function(BB) {
            QB.push({
              file: BB,
              errors: [WB]
            })
          })), zB.splice(0)), PB({
            acceptedFiles: zB,
            fileRejections: QB,
            type: "setFiles"
          }), sB && sB(zB, QB, jB), QB.length > 0 && mB && mB(QB, jB), zB.length > 0 && JB && JB(zB, jB)
        }), [PB, uB, FB, NB, IB, UB, sB, JB, mB, fB]),
        gj = (0, QB.useCallback)((function(BB) {
          BB.preventDefault(), BB.persist(), Hj(BB), Ij.current = [], KB(BB) && Promise.resolve(dB(BB)).then((function(jB) {
            xB(BB) && !EB || Lj(jB, BB)
          })).catch((function(BB) {
            return sj(BB)
          })), PB({
            type: "reset"
          })
        }), [dB, Lj, sj, EB]),
        tj = (0, QB.useCallback)((function() {
          if (nj.current) {
            PB({
              type: "openDialog"
            }), VB();
            var BB = {
              multiple: uB,
              types: YB
            };
            window.showOpenFilePicker(BB).then((function(BB) {
              return dB(BB)
            })).then((function(BB) {
              Lj(BB, null), PB({
                type: "closeDialog"
              })
            })).catch((function(BB) {
              var jB;
              (jB = BB) instanceof DOMException && ("AbortError" === jB.name || jB.code === jB.ABORT_ERR) ? (hB(BB), PB({
                type: "closeDialog"
              })) : ! function(BB) {
                return BB instanceof DOMException && ("SecurityError" === BB.name || BB.code === BB.SECURITY_ERR)
              }(BB) ? sj(BB) : (nj.current = !1, ZB.current ? (ZB.current.value = null, ZB.current.click()) : sj(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))
            }))
          } else ZB.current && (PB({
            type: "openDialog"
          }), VB(), ZB.current.value = null, ZB.current.click())
        }), [PB, VB, hB, GB, Lj, sj, YB, uB]),
        Sj = (0, QB.useCallback)((function(BB) {
          XB.current && XB.current.isEqualNode(BB.target) && (" " !== BB.key && "Enter" !== BB.key && 32 !== BB.keyCode && 13 !== BB.keyCode || (BB.preventDefault(), tj()))
        }), [XB, tj]),
        Mj = (0, QB.useCallback)((function() {
          PB({
            type: "focus"
          })
        }), []),
        Ej = (0, QB.useCallback)((function() {
          PB({
            type: "blur"
          })
        }), []),
        ij = (0, QB.useCallback)((function() {
          tB || (! function() {
            var BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
            return function(BB) {
              return -1 !== BB.indexOf("MSIE") || -1 !== BB.indexOf("Trident/")
            }(BB) || function(BB) {
              return -1 !== BB.indexOf("Edge/")
            }(BB)
          }() ? tj() : setTimeout(tj, 0))
        }), [tB, tj]),
        qj = function(BB) {
          return nB ? null : BB
        },
        fj = function(BB) {
          return SB ? null : qj(BB)
        },
        oj = function(BB) {
          return MB ? null : qj(BB)
        },
        Hj = function(BB) {
          EB && BB.stopPropagation()
        },
        Dj = (0, QB.useMemo)((function() {
          return function() {
            var BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              jB = BB.refKey,
              zB = void 0 === jB ? "ref" : jB,
              QB = BB.role,
              dB = BB.onKeyDown,
              IB = BB.onFocus,
              NB = BB.onBlur,
              uB = BB.onClick,
              UB = BB.onDragEnter,
              aB = BB.onDragOver,
              pB = BB.onDragLeave,
              rB = BB.onDrop,
              sB = Uj(BB, Bj);
            return Nj(Nj(uj({
              onKeyDown: fj(cB(dB, Sj)),
              onFocus: fj(cB(IB, Mj)),
              onBlur: fj(cB(NB, Ej)),
              onClick: qj(cB(uB, ij)),
              onDragEnter: oj(cB(UB, yj)),
              onDragOver: oj(cB(aB, kj)),
              onDragLeave: oj(cB(pB, Gj)),
              onDrop: oj(cB(rB, gj)),
              role: "string" === typeof QB && "" !== QB ? QB : "presentation"
            }, zB, XB), nB || SB ? {} : {
              tabIndex: 0
            }), sB)
          }
        }), [XB, Sj, Mj, Ej, ij, yj, kj, Gj, gj, SB, MB, nB]),
        Fj = (0, QB.useCallback)((function(BB) {
          BB.stopPropagation()
        }), []),
        Yj = (0, QB.useMemo)((function() {
          return function() {
            var BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              jB = BB.refKey,
              zB = void 0 === jB ? "ref" : jB,
              QB = BB.onChange,
              nB = BB.onClick,
              dB = Uj(BB, jj);
            return Nj(Nj({}, uj({
              accept: FB,
              multiple: uB,
              type: "file",
              style: {
                display: "none"
              },
              onChange: qj(cB(QB, gj)),
              onClick: qj(cB(nB, Fj)),
              tabIndex: -1
            }, zB, ZB)), dB)
          }
        }), [ZB, zB, uB, gj, nB]);
      return Nj(Nj({}, TB), {}, {
        KD: RB && !nB,
        getRootProps: Dj,
        getInputProps: Yj,
        rootRef: XB,
        inputRef: ZB,
        open: qj(tj)
      })
    }

    function Jj(BB, jB) {
      switch (jB.type) {
        case "focus":
          return Nj(Nj({}, BB), {}, {
            KD: !0
          });
        case "blur":
          return Nj(Nj({}, BB), {}, {
            KD: !1
          });
        case "openDialog":
          return Nj(Nj({}, rj), {}, {
            isFileDialogActive: !0
          });
        case "closeDialog":
          return Nj(Nj({}, BB), {}, {
            isFileDialogActive: !1
          });
        case "setDraggedFiles":
          return Nj(Nj({}, BB), {}, {
            isDragActive: jB.isDragActive,
            isDragAccept: jB.isDragAccept,
            isDragReject: jB.isDragReject
          });
        case "setFiles":
          return Nj(Nj({}, BB), {}, {
            acceptedFiles: jB.acceptedFiles,
            fileRejections: jB.fileRejections
          });
        case "reset":
          return Nj({}, rj);
        default:
          return BB
      }
    }

    function mj() {}
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);