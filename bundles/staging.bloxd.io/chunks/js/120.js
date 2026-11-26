export const id = 120;
export const ids = [120];
export const modules = {
  5470: (BB, OB) => {
    OB.d = function(BB, OB) {
      if (BB && OB) {
        var GB = Array.isArray(OB) ? OB : OB.split(","),
          YB = BB.name || "",
          DB = (BB.type || "").toLowerCase(),
          QB = DB.replace(/\/.*$/, "");
        return GB.some((function(BB) {
          var OB = BB.trim().toLowerCase();
          return "." === OB.charAt(0) ? YB.toLowerCase().endsWith(OB) : OB.endsWith("/*") ? QB === OB.replace(/\/.*$/, "") : DB === OB
        }))
      }
      return !0
    }
  },
  5452: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => lO
    });
    var YB = GB(56),
      DB = GB(5456),
      QB = GB.n(DB);

    function oB(BB, OB, GB, YB) {
      return new(GB || (GB = Promise))((function(DB, QB) {
        function oB(BB) {
          try {
            yB(YB.next(BB))
          } catch (OB) {
            QB(OB)
          }
        }

        function jB(BB) {
          try {
            yB(YB.throw(BB))
          } catch (OB) {
            QB(OB)
          }
        }

        function yB(BB) {
          var OB;
          BB.done ? DB(BB.value) : (OB = BB.value, OB instanceof GB ? OB : new GB((function(BB) {
            BB(OB)
          }))).then(oB, jB)
        }
        yB((YB = YB.apply(BB, OB || [])).next())
      }))
    }

    function jB(BB, OB) {
      var GB, YB, DB, QB, oB = {
        label: 0,
        sent: function() {
          if (1 & DB[0]) throw DB[1];
          return DB[1]
        },
        trys: [],
        ops: []
      };
      return QB = {
        next: jB(0),
        throw: jB(1),
        return: jB(2)
      }, "function" === typeof Symbol && (QB[Symbol.iterator] = function() {
        return this
      }), QB;

      function jB(jB) {
        return function(yB) {
          return function(jB) {
            if (GB) throw new TypeError("Generator is already executing.");
            for (; QB && (QB = 0, jB[0] && (oB = 0)), oB;) try {
              if (GB = 1, YB && (DB = 2 & jB[0] ? YB.return : jB[0] ? YB.throw || ((DB = YB.return) && DB.call(YB), 0) : YB.next) && !(DB = DB.call(YB, jB[1])).done) return DB;
              switch (YB = 0, DB && (jB = [2 & jB[0], DB.value]), jB[0]) {
                case 0:
                case 1:
                  DB = jB;
                  break;
                case 4:
                  return oB.label++, {
                    value: jB[1],
                    done: !1
                  };
                case 5:
                  oB.label++, YB = jB[1], jB = [0];
                  continue;
                case 7:
                  jB = oB.ops.pop(), oB.trys.pop();
                  continue;
                default:
                  if (!(DB = (DB = oB.trys).length > 0 && DB[DB.length - 1]) && (6 === jB[0] || 2 === jB[0])) {
                    oB = 0;
                    continue
                  }
                  if (3 === jB[0] && (!DB || jB[1] > DB[0] && jB[1] < DB[3])) {
                    oB.label = jB[1];
                    break
                  }
                  if (6 === jB[0] && oB.label < DB[1]) {
                    oB.label = DB[1], DB = jB;
                    break
                  }
                  if (DB && oB.label < DB[2]) {
                    oB.label = DB[2], oB.ops.push(jB);
                    break
                  }
                  DB[2] && oB.ops.pop(), oB.trys.pop();
                  continue
              }
              jB = OB.call(BB, oB)
            } catch (yB) {
              jB = [6, yB], YB = 0
            } finally {
              GB = DB = 0
            }
            if (5 & jB[0]) throw jB[1];
            return {
              value: jB[0] ? jB[1] : void 0,
              done: !0
            }
          }([jB, yB])
        }
      }
    }
    Object.create;

    function yB(BB, OB) {
      var GB = "function" === typeof Symbol && BB[Symbol.iterator];
      if (!GB) return BB;
      var YB, DB, QB = GB.call(BB),
        oB = [];
      try {
        for (;
          (void 0 === OB || OB-- > 0) && !(YB = QB.next()).done;) oB.push(YB.value)
      } catch (jB) {
        DB = {
          error: jB
        }
      } finally {
        try {
          YB && !YB.done && (GB = QB.return) && GB.call(QB)
        } finally {
          if (DB) throw DB.error
        }
      }
      return oB
    }

    function JB(BB, OB, GB) {
      if (GB || 2 === arguments.length)
        for (var YB, DB = 0, QB = OB.length; DB < QB; DB++) !YB && DB in OB || (YB || (YB = Array.prototype.slice.call(OB, 0, DB)), YB[DB] = OB[DB]);
      return BB.concat(YB || Array.prototype.slice.call(OB))
    }
    Object.create;
    "function" === typeof SuppressedError && SuppressedError;
    var MB = new Map([
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
      ["ty", "application/vnd.ms-outlook"]
    ]);

    function PB(BB, OB) {
      var GB = function(BB) {
        var OB = BB.name;
        if (OB && -1 !== OB.lastIndexOf(".") && !BB.type) {
          var GB = OB.split(".").pop().toLowerCase(),
            YB = MB.get(GB);
          YB && Object.defineProperty(BB, "type", {
            value: YB,
            writable: !1,
            configurable: !1,
            enumerable: !0
          })
        }
        return BB
      }(BB);
      if ("string" !== typeof GB.path) {
        var YB = BB.webkitRelativePath;
        Object.defineProperty(GB, "path", {
          value: "string" === typeof OB ? OB : "string" === typeof YB && YB.length > 0 ? YB : BB.name,
          writable: !1,
          configurable: !1,
          enumerable: !0
        })
      }
      return GB
    }
    var zB = [".DS_Store", "Thumbs.db"];

    function lB(BB) {
      return "object" === typeof BB && null !== BB
    }

    function pB(BB) {
      return RB(BB.target.files).map((function(BB) {
        return PB(BB)
      }))
    }

    function qB(BB) {
      return oB(this, void 0, void 0, (function() {
        return jB(this, (function(OB) {
          switch (OB.label) {
            case 0:
              return [4, Promise.all(BB.map((function(BB) {
                return BB.getFile()
              })))];
            case 1:
              return [2, OB.sent().map((function(BB) {
                return PB(BB)
              }))]
          }
        }))
      }))
    }

    function ZB(BB, OB) {
      return oB(this, void 0, void 0, (function() {
        var GB;
        return jB(this, (function(YB) {
          switch (YB.label) {
            case 0:
              return BB.items ? (GB = RB(BB.items).filter((function(BB) {
                return "file" === BB.kind
              })), "drop" !== OB ? [2, GB] : [4, Promise.all(GB.map(WB))]) : [3, 2];
            case 1:
              return [2, NB(AB(YB.sent()))];
            case 2:
              return [2, NB(RB(BB.files).map((function(BB) {
                return PB(BB)
              })))]
          }
        }))
      }))
    }

    function NB(BB) {
      return BB.filter((function(BB) {
        return -1 === zB.indexOf(BB.name)
      }))
    }

    function RB(BB) {
      if (null === BB) return [];
      for (var OB = [], GB = 0; GB < BB.length; GB++) {
        var YB = BB[GB];
        OB.push(YB)
      }
      return OB
    }

    function WB(BB) {
      if ("function" !== typeof BB.webkitGetAsEntry) return VB(BB);
      var OB = BB.webkitGetAsEntry();
      return OB && OB.isDirectory ? nB(OB) : VB(BB)
    }

    function AB(BB) {
      return BB.reduce((function(BB, OB) {
        return JB(JB([], yB(BB), !1), yB(Array.isArray(OB) ? AB(OB) : [OB]), !1)
      }), [])
    }

    function VB(BB) {
      var OB = BB.getAsFile();
      if (!OB) return Promise.reject("".concat(BB, " is not a File"));
      var GB = PB(OB);
      return Promise.resolve(GB)
    }

    function SB(BB) {
      return oB(this, void 0, void 0, (function() {
        return jB(this, (function(OB) {
          return [2, BB.isDirectory ? nB(BB) : UB(BB)]
        }))
      }))
    }

    function nB(BB) {
      var OB = BB.createReader();
      return new Promise((function(BB, GB) {
        var YB = [];
        ! function DB() {
          var QB = this;
          OB.readEntries((function(OB) {
            return oB(QB, void 0, void 0, (function() {
              var QB, oB, yB;
              return jB(this, (function(jB) {
                switch (jB.label) {
                  case 0:
                    if (OB.length) return [3, 5];
                    jB.label = 1;
                  case 1:
                    return jB.trys.push([1, 3, , 4]), [4, Promise.all(YB)];
                  case 2:
                    return QB = jB.sent(), BB(QB), [3, 4];
                  case 3:
                    return oB = jB.sent(), GB(oB), [3, 4];
                  case 4:
                    return [3, 6];
                  case 5:
                    yB = Promise.all(OB.map(SB)), YB.push(yB), DB(), jB.label = 6;
                  case 6:
                    return [2]
                }
              }))
            }))
          }), (function(BB) {
            GB(BB)
          }))
        }()
      }))
    }

    function UB(BB) {
      return oB(this, void 0, void 0, (function() {
        return jB(this, (function(OB) {
          return [2, new Promise((function(OB, GB) {
            BB.file((function(GB) {
              var YB = PB(GB, BB.fullPath);
              OB(YB)
            }), (function(BB) {
              GB(BB)
            }))
          }))]
        }))
      }))
    }
    var fB = GB(5470);

    function kB(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return FB(BB)
      }(BB) || function(BB) {
        if ("undefined" !== typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
      }(BB) || IB(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function dB(BB, OB) {
      var GB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var YB = Object.getOwnPropertySymbols(BB);
        OB && (YB = YB.filter((function(OB) {
          return Object.getOwnPropertyDescriptor(BB, OB).enumerable
        }))), GB.push.apply(GB, YB)
      }
      return GB
    }

    function KB(BB) {
      for (var OB = 1; OB < arguments.length; OB++) {
        var GB = null != arguments[OB] ? arguments[OB] : {};
        OB % 2 ? dB(Object(GB), !0).forEach((function(OB) {
          uB(BB, OB, GB[OB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(GB)) : dB(Object(GB)).forEach((function(OB) {
          Object.defineProperty(BB, OB, Object.getOwnPropertyDescriptor(GB, OB))
        }))
      }
      return BB
    }

    function uB(BB, OB, GB) {
      return OB in BB ? Object.defineProperty(BB, OB, {
        value: GB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[OB] = GB, BB
    }

    function mB(BB, OB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, OB) {
        var GB = null == BB ? null : "undefined" !== typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null == GB) return;
        var YB, DB, QB = [],
          oB = !0,
          jB = !1;
        try {
          for (GB = GB.call(BB); !(oB = (YB = GB.next()).done) && (QB.push(YB.value), !OB || QB.length !== OB); oB = !0);
        } catch (yB) {
          jB = !0, DB = yB
        } finally {
          try {
            oB || null == GB.return || GB.return()
          } finally {
            if (jB) throw DB
          }
        }
        return QB
      }(BB, OB) || IB(BB, OB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function IB(BB, OB) {
      if (BB) {
        if ("string" === typeof BB) return FB(BB, OB);
        var GB = Object.prototype.toString.call(BB).slice(8, -1);
        return "Object" === GB && BB.constructor && (GB = BB.constructor.name), "Map" === GB || "Set" === GB ? Array.from(BB) : "Arguments" === GB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(GB) ? FB(BB, OB) : void 0
      }
    }

    function FB(BB, OB) {
      (null == OB || OB > BB.length) && (OB = BB.length);
      for (var GB = 0, YB = new Array(OB); GB < OB; GB++) YB[GB] = BB[GB];
      return YB
    }
    var iB = "file-invalid-type",
      LB = "file-too-large",
      gB = "file-too-small",
      rB = "too-many-files",
      XB = function(BB) {
        BB = Array.isArray(BB) && 1 === BB.length ? BB[0] : BB;
        var OB = Array.isArray(BB) ? "one of ".concat(BB.join(", ")) : BB;
        return {
          code: iB,
          message: "File type must be ".concat(OB)
        }
      },
      wB = function(BB) {
        return {
          code: LB,
          message: "File is larger than ".concat(BB, " ").concat(1 === BB ? "byte" : "bytes")
        }
      },
      EB = function(BB) {
        return {
          code: gB,
          message: "File is smaller than ".concat(BB, " ").concat(1 === BB ? "byte" : "bytes")
        }
      },
      cB = {
        code: rB,
        message: "Too many files"
      };

    function hB(BB, OB) {
      var GB = "application/x-moz-file" === BB.type || (0, fB.d)(BB, OB);
      return [GB, GB ? null : XB(OB)]
    }

    function aB(BB, OB, GB) {
      if (eB(BB.size))
        if (eB(OB) && eB(GB)) {
          if (BB.size > GB) return [!1, wB(GB)];
          if (BB.size < OB) return [!1, EB(OB)]
        } else {
          if (eB(OB) && BB.size < OB) return [!1, EB(OB)];
          if (eB(GB) && BB.size > GB) return [!1, wB(GB)]
        } return [!0, null]
    }

    function eB(BB) {
      return void 0 !== BB && null !== BB
    }

    function TB(BB) {
      return "function" === typeof BB.isPropagationStopped ? BB.isPropagationStopped() : "undefined" !== typeof BB.cancelBubble && BB.cancelBubble
    }

    function bB(BB) {
      return BB.dataTransfer ? Array.prototype.some.call(BB.dataTransfer.types, (function(BB) {
        return "Files" === BB || "application/x-moz-file" === BB
      })) : !!BB.target && !!BB.target.files
    }

    function CB(BB) {
      BB.preventDefault()
    }

    function HB() {
      for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
      return function(BB) {
        for (var GB = arguments.length, YB = new Array(GB > 1 ? GB - 1 : 0), DB = 1; DB < GB; DB++) YB[DB - 1] = arguments[DB];
        return OB.some((function(OB) {
          return !TB(BB) && OB && OB.apply(void 0, [BB].concat(YB)), TB(BB)
        }))
      }
    }

    function vB(BB) {
      return "audio/*" === BB || "video/*" === BB || "image/*" === BB || "text/*" === BB || /\w+\/[-+.\w]+/g.test(BB)
    }

    function sB(BB) {
      return /^.*\.[\w]+$/.test(BB)
    }
    var xB = ["children"],
      tB = ["open"],
      BO = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
      OO = ["refKey", "onChange", "onClick"];

    function GO(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return QO(BB)
      }(BB) || function(BB) {
        if ("undefined" !== typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
      }(BB) || DO(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function YO(BB, OB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, OB) {
        var GB = null == BB ? null : "undefined" !== typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null == GB) return;
        var YB, DB, QB = [],
          oB = !0,
          jB = !1;
        try {
          for (GB = GB.call(BB); !(oB = (YB = GB.next()).done) && (QB.push(YB.value), !OB || QB.length !== OB); oB = !0);
        } catch (yB) {
          jB = !0, DB = yB
        } finally {
          try {
            oB || null == GB.return || GB.return()
          } finally {
            if (jB) throw DB
          }
        }
        return QB
      }(BB, OB) || DO(BB, OB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function DO(BB, OB) {
      if (BB) {
        if ("string" === typeof BB) return QO(BB, OB);
        var GB = Object.prototype.toString.call(BB).slice(8, -1);
        return "Object" === GB && BB.constructor && (GB = BB.constructor.name), "Map" === GB || "Set" === GB ? Array.from(BB) : "Arguments" === GB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(GB) ? QO(BB, OB) : void 0
      }
    }

    function QO(BB, OB) {
      (null == OB || OB > BB.length) && (OB = BB.length);
      for (var GB = 0, YB = new Array(OB); GB < OB; GB++) YB[GB] = BB[GB];
      return YB
    }

    function oO(BB, OB) {
      var GB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var YB = Object.getOwnPropertySymbols(BB);
        OB && (YB = YB.filter((function(OB) {
          return Object.getOwnPropertyDescriptor(BB, OB).enumerable
        }))), GB.push.apply(GB, YB)
      }
      return GB
    }

    function jO(BB) {
      for (var OB = 1; OB < arguments.length; OB++) {
        var GB = null != arguments[OB] ? arguments[OB] : {};
        OB % 2 ? oO(Object(GB), !0).forEach((function(OB) {
          yO(BB, OB, GB[OB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(GB)) : oO(Object(GB)).forEach((function(OB) {
          Object.defineProperty(BB, OB, Object.getOwnPropertyDescriptor(GB, OB))
        }))
      }
      return BB
    }

    function yO(BB, OB, GB) {
      return OB in BB ? Object.defineProperty(BB, OB, {
        value: GB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[OB] = GB, BB
    }

    function JO(BB, OB) {
      if (null == BB) return {};
      var GB, YB, DB = function(BB, OB) {
        if (null == BB) return {};
        var GB, YB, DB = {},
          QB = Object.keys(BB);
        for (YB = 0; YB < QB.length; YB++) GB = QB[YB], OB.indexOf(GB) >= 0 || (DB[GB] = BB[GB]);
        return DB
      }(BB, OB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        for (YB = 0; YB < QB.length; YB++) GB = QB[YB], OB.indexOf(GB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, GB) && (DB[GB] = BB[GB])
      }
      return DB
    }
    var MO = (0, YB.forwardRef)((function(BB, OB) {
      var GB = BB.children,
        DB = lO(JO(BB, xB)),
        QB = DB.open,
        oB = JO(DB, tB);
      return (0, YB.useImperativeHandle)(OB, (function() {
        return {
          open: QB
        }
      }), [QB]), YB.createElement(YB.Fragment, null, GB(jO(jO({}, oB), {}, {
        open: QB
      })))
    }));
    MO.displayName = "Dropzone";
    var PO = {
      disabled: !1,
      getFilesFromEvent: function(BB) {
        return oB(this, void 0, void 0, (function() {
          return jB(this, (function(OB) {
            return lB(BB) && lB(BB.dataTransfer) ? [2, ZB(BB.dataTransfer, BB.type)] : function(BB) {
              return lB(BB) && lB(BB.target)
            }(BB) ? [2, pB(BB)] : Array.isArray(BB) && BB.every((function(BB) {
              return "getFile" in BB && "function" === typeof BB.getFile
            })) ? [2, qB(BB)] : [2, []]
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
    MO.defaultProps = PO, MO.propTypes = {
      children: QB().func,
      accept: QB().objectOf(QB().arrayOf(QB().string)),
      multiple: QB().bool,
      preventDropOnDocument: QB().bool,
      noClick: QB().bool,
      noKeyboard: QB().bool,
      noDrag: QB().bool,
      noDragEventsBubbling: QB().bool,
      minSize: QB().number,
      maxSize: QB().number,
      maxFiles: QB().number,
      disabled: QB().bool,
      getFilesFromEvent: QB().func,
      onFileDialogCancel: QB().func,
      onFileDialogOpen: QB().func,
      useFsAccessApi: QB().bool,
      autoFocus: QB().bool,
      onDragEnter: QB().func,
      onDragLeave: QB().func,
      onDragOver: QB().func,
      onDrop: QB().func,
      onDropAccepted: QB().func,
      onDropRejected: QB().func,
      onError: QB().func,
      validator: QB().func
    };
    var zO = {
      Zm: !1,
      isFileDialogActive: !1,
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1,
      acceptedFiles: [],
      fileRejections: []
    };

    function lO() {
      var BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        OB = jO(jO({}, PO), BB),
        GB = OB.accept,
        DB = OB.disabled,
        QB = OB.getFilesFromEvent,
        oB = OB.maxSize,
        jB = OB.minSize,
        yB = OB.multiple,
        JB = OB.maxFiles,
        MB = OB.onDragEnter,
        PB = OB.onDragLeave,
        zB = OB.onDragOver,
        lB = OB.onDrop,
        pB = OB.onDropAccepted,
        qB = OB.onDropRejected,
        ZB = OB.onFileDialogCancel,
        NB = OB.onFileDialogOpen,
        RB = OB.useFsAccessApi,
        WB = OB.autoFocus,
        AB = OB.preventDropOnDocument,
        VB = OB.noClick,
        SB = OB.noKeyboard,
        nB = OB.noDrag,
        UB = OB.noDragEventsBubbling,
        fB = OB.onError,
        dB = OB.validator,
        IB = (0, YB.useMemo)((function() {
          return function(BB) {
            if (eB(BB)) return Object.entries(BB).reduce((function(BB, OB) {
              var GB = mB(OB, 2),
                YB = GB[0],
                DB = GB[1];
              return [].concat(kB(BB), [YB], kB(DB))
            }), []).filter((function(BB) {
              return vB(BB) || sB(BB)
            })).join(",")
          }(GB)
        }), [GB]),
        FB = (0, YB.useMemo)((function() {
          return function(BB) {
            return eB(BB) ? [{
              description: "Files",
              accept: Object.entries(BB).filter((function(BB) {
                var OB = mB(BB, 2),
                  GB = OB[0],
                  YB = OB[1],
                  DB = !0;
                return vB(GB) || (console.warn('Skipped "'.concat(GB, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), DB = !1), Array.isArray(YB) && YB.every(sB) || (console.warn('Skipped "'.concat(GB, '" because an invalid file extension was provided.')), DB = !1), DB
              })).reduce((function(BB, OB) {
                var GB = mB(OB, 2),
                  YB = GB[0],
                  DB = GB[1];
                return KB(KB({}, BB), {}, uB({}, YB, DB))
              }), {})
            }] : BB
          }(GB)
        }), [GB]),
        iB = (0, YB.useMemo)((function() {
          return "function" === typeof NB ? NB : qO
        }), [NB]),
        LB = (0, YB.useMemo)((function() {
          return "function" === typeof ZB ? ZB : qO
        }), [ZB]),
        gB = (0, YB.useRef)(null),
        rB = (0, YB.useRef)(null),
        XB = YO((0, YB.useReducer)(pO, zO), 2),
        wB = XB[0],
        EB = XB[1],
        xB = wB.Zm,
        tB = wB.isFileDialogActive,
        DO = (0, YB.useRef)("undefined" !== typeof window && window.isSecureContext && RB && "showOpenFilePicker" in window),
        QO = function() {
          !DO.current && tB && setTimeout((function() {
            rB.current && (rB.current.files.length || (EB({
              type: "closeDialog"
            }), LB()))
          }), 300)
        };
      (0, YB.useEffect)((function() {
        return window.addEventListener("focus", QO, !1),
          function() {
            window.removeEventListener("focus", QO, !1)
          }
      }), [rB, tB, LB, DO]);
      var oO = (0, YB.useRef)([]),
        MO = function(BB) {
          gB.current && gB.current.contains(BB.target) || (BB.preventDefault(), oO.current = [])
        };
      (0, YB.useEffect)((function() {
        return AB && (document.addEventListener("dragover", CB, !1), document.addEventListener("drop", MO, !1)),
          function() {
            AB && (document.removeEventListener("dragover", CB), document.removeEventListener("drop", MO))
          }
      }), [gB, AB]), (0, YB.useEffect)((function() {
        return !DB && WB && gB.current && gB.current.focus(),
          function() {}
      }), [gB, WB, DB]);
      var lO = (0, YB.useCallback)((function(BB) {
          fB ? fB(BB) : console.error(BB)
        }), [fB]),
        ZO = (0, YB.useCallback)((function(BB) {
          BB.preventDefault(), BB.persist(), uO(BB), oO.current = [].concat(GO(oO.current), [BB.target]), bB(BB) && Promise.resolve(QB(BB)).then((function(OB) {
            if (!TB(BB) || UB) {
              var GB = OB.length,
                YB = GB > 0 && function(BB) {
                  var OB = BB.files,
                    GB = BB.accept,
                    YB = BB.minSize,
                    DB = BB.maxSize,
                    QB = BB.multiple,
                    oB = BB.maxFiles,
                    jB = BB.validator;
                  return !(!QB && OB.length > 1 || QB && oB >= 1 && OB.length > oB) && OB.every((function(BB) {
                    var OB = mB(hB(BB, GB), 1)[0],
                      QB = mB(aB(BB, YB, DB), 1)[0],
                      oB = jB ? jB(BB) : null;
                    return OB && QB && !oB
                  }))
                }({
                  files: OB,
                  accept: IB,
                  minSize: jB,
                  maxSize: oB,
                  multiple: yB,
                  maxFiles: JB,
                  validator: dB
                });
              EB({
                isDragAccept: YB,
                isDragReject: GB > 0 && !YB,
                isDragActive: !0,
                type: "setDraggedFiles"
              }), MB && MB(BB)
            }
          })).catch((function(BB) {
            return lO(BB)
          }))
        }), [QB, MB, lO, UB, IB, jB, oB, yB, JB, dB]),
        NO = (0, YB.useCallback)((function(BB) {
          BB.preventDefault(), BB.persist(), uO(BB);
          var OB = bB(BB);
          if (OB && BB.dataTransfer) try {
            BB.dataTransfer.dropEffect = "copy"
          } catch (GB) {}
          return OB && zB && zB(BB), !1
        }), [zB, UB]),
        RO = (0, YB.useCallback)((function(BB) {
          BB.preventDefault(), BB.persist(), uO(BB);
          var OB = oO.current.filter((function(BB) {
              return gB.current && gB.current.contains(BB)
            })),
            GB = OB.indexOf(BB.target); - 1 !== GB && OB.splice(GB, 1), oO.current = OB, OB.length > 0 || (EB({
            type: "setDraggedFiles",
            isDragActive: !1,
            isDragAccept: !1,
            isDragReject: !1
          }), bB(BB) && PB && PB(BB))
        }), [gB, PB, UB]),
        WO = (0, YB.useCallback)((function(BB, OB) {
          var GB = [],
            YB = [];
          BB.forEach((function(BB) {
            var OB = YO(hB(BB, IB), 2),
              DB = OB[0],
              QB = OB[1],
              yB = YO(aB(BB, jB, oB), 2),
              JB = yB[0],
              MB = yB[1],
              PB = dB ? dB(BB) : null;
            if (DB && JB && !PB) GB.push(BB);
            else {
              var zB = [QB, MB];
              PB && (zB = zB.concat(PB)), YB.push({
                file: BB,
                errors: zB.filter((function(BB) {
                  return BB
                }))
              })
            }
          })), (!yB && GB.length > 1 || yB && JB >= 1 && GB.length > JB) && (GB.forEach((function(BB) {
            YB.push({
              file: BB,
              errors: [cB]
            })
          })), GB.splice(0)), EB({
            acceptedFiles: GB,
            fileRejections: YB,
            type: "setFiles"
          }), lB && lB(GB, YB, OB), YB.length > 0 && qB && qB(YB, OB), GB.length > 0 && pB && pB(GB, OB)
        }), [EB, yB, IB, jB, oB, JB, lB, pB, qB, dB]),
        AO = (0, YB.useCallback)((function(BB) {
          BB.preventDefault(), BB.persist(), uO(BB), oO.current = [], bB(BB) && Promise.resolve(QB(BB)).then((function(OB) {
            TB(BB) && !UB || WO(OB, BB)
          })).catch((function(BB) {
            return lO(BB)
          })), EB({
            type: "reset"
          })
        }), [QB, WO, lO, UB]),
        VO = (0, YB.useCallback)((function() {
          if (DO.current) {
            EB({
              type: "openDialog"
            }), iB();
            var BB = {
              multiple: yB,
              types: FB
            };
            window.showOpenFilePicker(BB).then((function(BB) {
              return QB(BB)
            })).then((function(BB) {
              WO(BB, null), EB({
                type: "closeDialog"
              })
            })).catch((function(BB) {
              var OB;
              (OB = BB) instanceof DOMException && ("AbortError" === OB.name || OB.code === OB.ABORT_ERR) ? (LB(BB), EB({
                type: "closeDialog"
              })) : ! function(BB) {
                return BB instanceof DOMException && ("SecurityError" === BB.name || BB.code === BB.SECURITY_ERR)
              }(BB) ? lO(BB) : (DO.current = !1, rB.current ? (rB.current.value = null, rB.current.click()) : lO(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))
            }))
          } else rB.current && (EB({
            type: "openDialog"
          }), iB(), rB.current.value = null, rB.current.click())
        }), [EB, iB, LB, RB, WO, lO, FB, yB]),
        SO = (0, YB.useCallback)((function(BB) {
          gB.current && gB.current.isEqualNode(BB.target) && (" " !== BB.key && "Enter" !== BB.key && 32 !== BB.keyCode && 13 !== BB.keyCode || (BB.preventDefault(), VO()))
        }), [gB, VO]),
        nO = (0, YB.useCallback)((function() {
          EB({
            type: "focus"
          })
        }), []),
        UO = (0, YB.useCallback)((function() {
          EB({
            type: "blur"
          })
        }), []),
        fO = (0, YB.useCallback)((function() {
          VB || (! function() {
            var BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
            return function(BB) {
              return -1 !== BB.indexOf("MSIE") || -1 !== BB.indexOf("Trident/")
            }(BB) || function(BB) {
              return -1 !== BB.indexOf("Edge/")
            }(BB)
          }() ? VO() : setTimeout(VO, 0))
        }), [VB, VO]),
        kO = function(BB) {
          return DB ? null : BB
        },
        dO = function(BB) {
          return SB ? null : kO(BB)
        },
        KO = function(BB) {
          return nB ? null : kO(BB)
        },
        uO = function(BB) {
          UB && BB.stopPropagation()
        },
        mO = (0, YB.useMemo)((function() {
          return function() {
            var BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              OB = BB.refKey,
              GB = void 0 === OB ? "ref" : OB,
              YB = BB.role,
              QB = BB.onKeyDown,
              oB = BB.onFocus,
              jB = BB.onBlur,
              yB = BB.onClick,
              JB = BB.onDragEnter,
              MB = BB.onDragOver,
              PB = BB.onDragLeave,
              zB = BB.onDrop,
              lB = JO(BB, BO);
            return jO(jO(yO({
              onKeyDown: dO(HB(QB, SO)),
              onFocus: dO(HB(oB, nO)),
              onBlur: dO(HB(jB, UO)),
              onClick: kO(HB(yB, fO)),
              onDragEnter: KO(HB(JB, ZO)),
              onDragOver: KO(HB(MB, NO)),
              onDragLeave: KO(HB(PB, RO)),
              onDrop: KO(HB(zB, AO)),
              role: "string" === typeof YB && "" !== YB ? YB : "presentation"
            }, GB, gB), DB || SB ? {} : {
              tabIndex: 0
            }), lB)
          }
        }), [gB, SO, nO, UO, fO, ZO, NO, RO, AO, SB, nB, DB]),
        IO = (0, YB.useCallback)((function(BB) {
          BB.stopPropagation()
        }), []),
        FO = (0, YB.useMemo)((function() {
          return function() {
            var BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              OB = BB.refKey,
              GB = void 0 === OB ? "ref" : OB,
              YB = BB.onChange,
              DB = BB.onClick,
              QB = JO(BB, OO);
            return jO(jO({}, yO({
              accept: IB,
              multiple: yB,
              type: "file",
              style: {
                display: "none"
              },
              onChange: kO(HB(YB, AO)),
              onClick: kO(HB(DB, IO)),
              tabIndex: -1
            }, GB, rB)), QB)
          }
        }), [rB, GB, yB, AO, DB]);
      return jO(jO({}, wB), {}, {
        Zm: xB && !DB,
        getRootProps: mO,
        getInputProps: FO,
        rootRef: gB,
        inputRef: rB,
        open: kO(VO)
      })
    }

    function pO(BB, OB) {
      switch (OB.type) {
        case "focus":
          return jO(jO({}, BB), {}, {
            Zm: !0
          });
        case "blur":
          return jO(jO({}, BB), {}, {
            Zm: !1
          });
        case "openDialog":
          return jO(jO({}, zO), {}, {
            isFileDialogActive: !0
          });
        case "closeDialog":
          return jO(jO({}, BB), {}, {
            isFileDialogActive: !1
          });
        case "setDraggedFiles":
          return jO(jO({}, BB), {}, {
            isDragActive: OB.isDragActive,
            isDragAccept: OB.isDragAccept,
            isDragReject: OB.isDragReject
          });
        case "setFiles":
          return jO(jO({}, BB), {}, {
            acceptedFiles: OB.acceptedFiles,
            fileRejections: OB.fileRejections
          });
        case "reset":
          return jO({}, zO);
        default:
          return BB
      }
    }

    function qO() {}
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);