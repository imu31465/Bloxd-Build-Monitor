export const id = 109;
export const ids = [109];
export const modules = {
  5132: (BB, IB) => {
    IB.e = function(BB, IB) {
      if (BB && IB) {
        var ZB = Array.isArray(IB) ? IB : IB.split(","),
          TB = BB.name || "",
          JB = (BB.type || "").toLowerCase(),
          oB = JB.replace(/\/.*$/, "");
        return ZB.some((function(BB) {
          var IB = BB.trim().toLowerCase();
          return "." === IB.charAt(0) ? TB.toLowerCase().endsWith(IB) : IB.endsWith("/*") ? oB === IB.replace(/\/.*$/, "") : JB === IB
        }))
      }
      return !0
    }
  },
  5112: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => FI
    });
    var TB = ZB(63),
      JB = ZB(5115),
      oB = ZB.n(JB);

    function GB(BB, IB, ZB, TB) {
      return new(ZB || (ZB = Promise))((function(JB, oB) {
        function GB(BB) {
          try {
            kB(TB.next(BB))
          } catch (IB) {
            oB(IB)
          }
        }

        function vB(BB) {
          try {
            kB(TB.throw(BB))
          } catch (IB) {
            oB(IB)
          }
        }

        function kB(BB) {
          var IB;
          BB.done ? JB(BB.value) : (IB = BB.value, IB instanceof ZB ? IB : new ZB((function(BB) {
            BB(IB)
          }))).then(GB, vB)
        }
        kB((TB = TB.apply(BB, IB || [])).next())
      }))
    }

    function vB(BB, IB) {
      var ZB, TB, JB, oB, GB = {
        label: 0,
        sent: function() {
          if (1 & JB[0]) throw JB[1];
          return JB[1]
        },
        trys: [],
        ops: []
      };
      return oB = {
        next: vB(0),
        throw: vB(1),
        return: vB(2)
      }, "function" === typeof Symbol && (oB[Symbol.iterator] = function() {
        return this
      }), oB;

      function vB(vB) {
        return function(kB) {
          return function(vB) {
            if (ZB) throw new TypeError("Generator is already executing.");
            for (; oB && (oB = 0, vB[0] && (GB = 0)), GB;) try {
              if (ZB = 1, TB && (JB = 2 & vB[0] ? TB.return : vB[0] ? TB.throw || ((JB = TB.return) && JB.call(TB), 0) : TB.next) && !(JB = JB.call(TB, vB[1])).done) return JB;
              switch (TB = 0, JB && (vB = [2 & vB[0], JB.value]), vB[0]) {
                case 0:
                case 1:
                  JB = vB;
                  break;
                case 4:
                  return GB.label++, {
                    value: vB[1],
                    done: !1
                  };
                case 5:
                  GB.label++, TB = vB[1], vB = [0];
                  continue;
                case 7:
                  vB = GB.ops.pop(), GB.trys.pop();
                  continue;
                default:
                  if (!(JB = (JB = GB.trys).length > 0 && JB[JB.length - 1]) && (6 === vB[0] || 2 === vB[0])) {
                    GB = 0;
                    continue
                  }
                  if (3 === vB[0] && (!JB || vB[1] > JB[0] && vB[1] < JB[3])) {
                    GB.label = vB[1];
                    break
                  }
                  if (6 === vB[0] && GB.label < JB[1]) {
                    GB.label = JB[1], JB = vB;
                    break
                  }
                  if (JB && GB.label < JB[2]) {
                    GB.label = JB[2], GB.ops.push(vB);
                    break
                  }
                  JB[2] && GB.ops.pop(), GB.trys.pop();
                  continue
              }
              vB = IB.call(BB, GB)
            } catch (kB) {
              vB = [6, kB], TB = 0
            } finally {
              ZB = JB = 0
            }
            if (5 & vB[0]) throw vB[1];
            return {
              value: vB[0] ? vB[1] : void 0,
              done: !0
            }
          }([vB, kB])
        }
      }
    }
    Object.create;

    function kB(BB, IB) {
      var ZB = "function" === typeof Symbol && BB[Symbol.iterator];
      if (!ZB) return BB;
      var TB, JB, oB = ZB.call(BB),
        GB = [];
      try {
        for (;
          (void 0 === IB || IB-- > 0) && !(TB = oB.next()).done;) GB.push(TB.value)
      } catch (vB) {
        JB = {
          error: vB
        }
      } finally {
        try {
          TB && !TB.done && (ZB = oB.return) && ZB.call(oB)
        } finally {
          if (JB) throw JB.error
        }
      }
      return GB
    }

    function cB(BB, IB, ZB) {
      if (ZB || 2 === arguments.length)
        for (var TB, JB = 0, oB = IB.length; JB < oB; JB++) !TB && JB in IB || (TB || (TB = Array.prototype.slice.call(IB, 0, JB)), TB[JB] = IB[JB]);
      return BB.concat(TB || Array.prototype.slice.call(IB))
    }
    Object.create;
    "function" === typeof SuppressedError && SuppressedError;
    var nB = new Map([
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
      ["Xn", "application/vnd.ms-outlook"]
    ]);

    function hB(BB, IB) {
      var ZB = function(BB) {
        var IB = BB.name;
        if (IB && -1 !== IB.lastIndexOf(".") && !BB.type) {
          var ZB = IB.split(".").pop().toLowerCase(),
            TB = nB.get(ZB);
          TB && Object.defineProperty(BB, "type", {
            value: TB,
            writable: !1,
            configurable: !1,
            enumerable: !0
          })
        }
        return BB
      }(BB);
      if ("string" !== typeof ZB.path) {
        var TB = BB.webkitRelativePath;
        Object.defineProperty(ZB, "path", {
          value: "string" === typeof IB ? IB : "string" === typeof TB && TB.length > 0 ? TB : BB.name,
          writable: !1,
          configurable: !1,
          enumerable: !0
        })
      }
      return ZB
    }
    var zB = [".DS_Store", "Thumbs.db"];

    function FB(BB) {
      return "object" === typeof BB && null !== BB
    }

    function NB(BB) {
      return UB(BB.target.files).map((function(BB) {
        return hB(BB)
      }))
    }

    function gB(BB) {
      return GB(this, void 0, void 0, (function() {
        return vB(this, (function(IB) {
          switch (IB.label) {
            case 0:
              return [4, Promise.all(BB.map((function(BB) {
                return BB.getFile()
              })))];
            case 1:
              return [2, IB.sent().map((function(BB) {
                return hB(BB)
              }))]
          }
        }))
      }))
    }

    function qB(BB, IB) {
      return GB(this, void 0, void 0, (function() {
        var ZB;
        return vB(this, (function(TB) {
          switch (TB.label) {
            case 0:
              return BB.items ? (ZB = UB(BB.items).filter((function(BB) {
                return "file" === BB.kind
              })), "drop" !== IB ? [2, ZB] : [4, Promise.all(ZB.map(WB))]) : [3, 2];
            case 1:
              return [2, yB(dB(TB.sent()))];
            case 2:
              return [2, yB(UB(BB.files).map((function(BB) {
                return hB(BB)
              })))]
          }
        }))
      }))
    }

    function yB(BB) {
      return BB.filter((function(BB) {
        return -1 === zB.indexOf(BB.name)
      }))
    }

    function UB(BB) {
      if (null === BB) return [];
      for (var IB = [], ZB = 0; ZB < BB.length; ZB++) {
        var TB = BB[ZB];
        IB.push(TB)
      }
      return IB
    }

    function WB(BB) {
      if ("function" !== typeof BB.webkitGetAsEntry) return CB(BB);
      var IB = BB.webkitGetAsEntry();
      return IB && IB.isDirectory ? sB(IB) : CB(BB)
    }

    function dB(BB) {
      return BB.reduce((function(BB, IB) {
        return cB(cB([], kB(BB), !1), kB(Array.isArray(IB) ? dB(IB) : [IB]), !1)
      }), [])
    }

    function CB(BB) {
      var IB = BB.getAsFile();
      if (!IB) return Promise.reject("".concat(BB, " is not a File"));
      var ZB = hB(IB);
      return Promise.resolve(ZB)
    }

    function QB(BB) {
      return GB(this, void 0, void 0, (function() {
        return vB(this, (function(IB) {
          return [2, BB.isDirectory ? sB(BB) : wB(BB)]
        }))
      }))
    }

    function sB(BB) {
      var IB = BB.createReader();
      return new Promise((function(BB, ZB) {
        var TB = [];
        ! function JB() {
          var oB = this;
          IB.readEntries((function(IB) {
            return GB(oB, void 0, void 0, (function() {
              var oB, GB, kB;
              return vB(this, (function(vB) {
                switch (vB.label) {
                  case 0:
                    if (IB.length) return [3, 5];
                    vB.label = 1;
                  case 1:
                    return vB.trys.push([1, 3, , 4]), [4, Promise.all(TB)];
                  case 2:
                    return oB = vB.sent(), BB(oB), [3, 4];
                  case 3:
                    return GB = vB.sent(), ZB(GB), [3, 4];
                  case 4:
                    return [3, 6];
                  case 5:
                    kB = Promise.all(IB.map(QB)), TB.push(kB), JB(), vB.label = 6;
                  case 6:
                    return [2]
                }
              }))
            }))
          }), (function(BB) {
            ZB(BB)
          }))
        }()
      }))
    }

    function wB(BB) {
      return GB(this, void 0, void 0, (function() {
        return vB(this, (function(IB) {
          return [2, new Promise((function(IB, ZB) {
            BB.file((function(ZB) {
              var TB = hB(ZB, BB.fullPath);
              IB(TB)
            }), (function(BB) {
              ZB(BB)
            }))
          }))]
        }))
      }))
    }
    var OB = ZB(5132);

    function YB(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return jB(BB)
      }(BB) || function(BB) {
        if ("undefined" !== typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
      }(BB) || MB(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function iB(BB, IB) {
      var ZB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var TB = Object.getOwnPropertySymbols(BB);
        IB && (TB = TB.filter((function(IB) {
          return Object.getOwnPropertyDescriptor(BB, IB).enumerable
        }))), ZB.push.apply(ZB, TB)
      }
      return ZB
    }

    function pB(BB) {
      for (var IB = 1; IB < arguments.length; IB++) {
        var ZB = null != arguments[IB] ? arguments[IB] : {};
        IB % 2 ? iB(Object(ZB), !0).forEach((function(IB) {
          aB(BB, IB, ZB[IB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(ZB)) : iB(Object(ZB)).forEach((function(IB) {
          Object.defineProperty(BB, IB, Object.getOwnPropertyDescriptor(ZB, IB))
        }))
      }
      return BB
    }

    function aB(BB, IB, ZB) {
      return IB in BB ? Object.defineProperty(BB, IB, {
        value: ZB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[IB] = ZB, BB
    }

    function HB(BB, IB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, IB) {
        var ZB = null == BB ? null : "undefined" !== typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null == ZB) return;
        var TB, JB, oB = [],
          GB = !0,
          vB = !1;
        try {
          for (ZB = ZB.call(BB); !(GB = (TB = ZB.next()).done) && (oB.push(TB.value), !IB || oB.length !== IB); GB = !0);
        } catch (kB) {
          vB = !0, JB = kB
        } finally {
          try {
            GB || null == ZB.return || ZB.return()
          } finally {
            if (vB) throw JB
          }
        }
        return oB
      }(BB, IB) || MB(BB, IB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function MB(BB, IB) {
      if (BB) {
        if ("string" === typeof BB) return jB(BB, IB);
        var ZB = Object.prototype.toString.call(BB).slice(8, -1);
        return "Object" === ZB && BB.constructor && (ZB = BB.constructor.name), "Map" === ZB || "Set" === ZB ? Array.from(BB) : "Arguments" === ZB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZB) ? jB(BB, IB) : void 0
      }
    }

    function jB(BB, IB) {
      (null == IB || IB > BB.length) && (IB = BB.length);
      for (var ZB = 0, TB = new Array(IB); ZB < IB; ZB++) TB[ZB] = BB[ZB];
      return TB
    }
    var PB = "file-invalid-type",
      RB = "file-too-large",
      rB = "file-too-small",
      mB = "too-many-files",
      XB = function(BB) {
        BB = Array.isArray(BB) && 1 === BB.length ? BB[0] : BB;
        var IB = Array.isArray(BB) ? "one of ".concat(BB.join(", ")) : BB;
        return {
          code: PB,
          message: "File type must be ".concat(IB)
        }
      },
      LB = function(BB) {
        return {
          code: RB,
          message: "File is larger than ".concat(BB, " ").concat(1 === BB ? "byte" : "bytes")
        }
      },
      eB = function(BB) {
        return {
          code: rB,
          message: "File is smaller than ".concat(BB, " ").concat(1 === BB ? "byte" : "bytes")
        }
      },
      uB = {
        code: mB,
        message: "Too many files"
      };

    function fB(BB, IB) {
      var ZB = "application/x-moz-file" === BB.type || (0, OB.e)(BB, IB);
      return [ZB, ZB ? null : XB(IB)]
    }

    function lB(BB, IB, ZB) {
      if (AB(BB.size))
        if (AB(IB) && AB(ZB)) {
          if (BB.size > ZB) return [!1, LB(ZB)];
          if (BB.size < IB) return [!1, eB(IB)]
        } else {
          if (AB(IB) && BB.size < IB) return [!1, eB(IB)];
          if (AB(ZB) && BB.size > ZB) return [!1, LB(ZB)]
        } return [!0, null]
    }

    function AB(BB) {
      return void 0 !== BB && null !== BB
    }

    function tB(BB) {
      return "function" === typeof BB.isPropagationStopped ? BB.isPropagationStopped() : "undefined" !== typeof BB.cancelBubble && BB.cancelBubble
    }

    function bB(BB) {
      return BB.dataTransfer ? Array.prototype.some.call(BB.dataTransfer.types, (function(BB) {
        return "Files" === BB || "application/x-moz-file" === BB
      })) : !!BB.target && !!BB.target.files
    }

    function xB(BB) {
      BB.preventDefault()
    }

    function EB() {
      for (var BB = arguments.length, IB = new Array(BB), ZB = 0; ZB < BB; ZB++) IB[ZB] = arguments[ZB];
      return function(BB) {
        for (var ZB = arguments.length, TB = new Array(ZB > 1 ? ZB - 1 : 0), JB = 1; JB < ZB; JB++) TB[JB - 1] = arguments[JB];
        return IB.some((function(IB) {
          return !tB(BB) && IB && IB.apply(void 0, [BB].concat(TB)), tB(BB)
        }))
      }
    }

    function DB(BB) {
      return "audio/*" === BB || "video/*" === BB || "image/*" === BB || "text/*" === BB || /\w+\/[-+.\w]+/g.test(BB)
    }

    function KB(BB) {
      return /^.*\.[\w]+$/.test(BB)
    }
    var VB = ["children"],
      SB = ["open"],
      BI = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
      II = ["refKey", "onChange", "onClick"];

    function ZI(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return oI(BB)
      }(BB) || function(BB) {
        if ("undefined" !== typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
      }(BB) || JI(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function TI(BB, IB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, IB) {
        var ZB = null == BB ? null : "undefined" !== typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null == ZB) return;
        var TB, JB, oB = [],
          GB = !0,
          vB = !1;
        try {
          for (ZB = ZB.call(BB); !(GB = (TB = ZB.next()).done) && (oB.push(TB.value), !IB || oB.length !== IB); GB = !0);
        } catch (kB) {
          vB = !0, JB = kB
        } finally {
          try {
            GB || null == ZB.return || ZB.return()
          } finally {
            if (vB) throw JB
          }
        }
        return oB
      }(BB, IB) || JI(BB, IB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function JI(BB, IB) {
      if (BB) {
        if ("string" === typeof BB) return oI(BB, IB);
        var ZB = Object.prototype.toString.call(BB).slice(8, -1);
        return "Object" === ZB && BB.constructor && (ZB = BB.constructor.name), "Map" === ZB || "Set" === ZB ? Array.from(BB) : "Arguments" === ZB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZB) ? oI(BB, IB) : void 0
      }
    }

    function oI(BB, IB) {
      (null == IB || IB > BB.length) && (IB = BB.length);
      for (var ZB = 0, TB = new Array(IB); ZB < IB; ZB++) TB[ZB] = BB[ZB];
      return TB
    }

    function GI(BB, IB) {
      var ZB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var TB = Object.getOwnPropertySymbols(BB);
        IB && (TB = TB.filter((function(IB) {
          return Object.getOwnPropertyDescriptor(BB, IB).enumerable
        }))), ZB.push.apply(ZB, TB)
      }
      return ZB
    }

    function vI(BB) {
      for (var IB = 1; IB < arguments.length; IB++) {
        var ZB = null != arguments[IB] ? arguments[IB] : {};
        IB % 2 ? GI(Object(ZB), !0).forEach((function(IB) {
          kI(BB, IB, ZB[IB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(ZB)) : GI(Object(ZB)).forEach((function(IB) {
          Object.defineProperty(BB, IB, Object.getOwnPropertyDescriptor(ZB, IB))
        }))
      }
      return BB
    }

    function kI(BB, IB, ZB) {
      return IB in BB ? Object.defineProperty(BB, IB, {
        value: ZB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[IB] = ZB, BB
    }

    function cI(BB, IB) {
      if (null == BB) return {};
      var ZB, TB, JB = function(BB, IB) {
        if (null == BB) return {};
        var ZB, TB, JB = {},
          oB = Object.keys(BB);
        for (TB = 0; TB < oB.length; TB++) ZB = oB[TB], IB.indexOf(ZB) >= 0 || (JB[ZB] = BB[ZB]);
        return JB
      }(BB, IB);
      if (Object.getOwnPropertySymbols) {
        var oB = Object.getOwnPropertySymbols(BB);
        for (TB = 0; TB < oB.length; TB++) ZB = oB[TB], IB.indexOf(ZB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, ZB) && (JB[ZB] = BB[ZB])
      }
      return JB
    }
    var nI = (0, TB.forwardRef)((function(BB, IB) {
      var ZB = BB.children,
        JB = FI(cI(BB, VB)),
        oB = JB.open,
        GB = cI(JB, SB);
      return (0, TB.useImperativeHandle)(IB, (function() {
        return {
          open: oB
        }
      }), [oB]), TB.createElement(TB.Fragment, null, ZB(vI(vI({}, GB), {}, {
        open: oB
      })))
    }));
    nI.displayName = "Dropzone";
    var hI = {
      disabled: !1,
      getFilesFromEvent: function(BB) {
        return GB(this, void 0, void 0, (function() {
          return vB(this, (function(IB) {
            return FB(BB) && FB(BB.dataTransfer) ? [2, qB(BB.dataTransfer, BB.type)] : function(BB) {
              return FB(BB) && FB(BB.target)
            }(BB) ? [2, NB(BB)] : Array.isArray(BB) && BB.every((function(BB) {
              return "getFile" in BB && "function" === typeof BB.getFile
            })) ? [2, gB(BB)] : [2, []]
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
    nI.defaultProps = hI, nI.propTypes = {
      children: oB().func,
      accept: oB().objectOf(oB().arrayOf(oB().string)),
      multiple: oB().bool,
      preventDropOnDocument: oB().bool,
      noClick: oB().bool,
      noKeyboard: oB().bool,
      noDrag: oB().bool,
      noDragEventsBubbling: oB().bool,
      minSize: oB().number,
      maxSize: oB().number,
      maxFiles: oB().number,
      disabled: oB().bool,
      getFilesFromEvent: oB().func,
      onFileDialogCancel: oB().func,
      onFileDialogOpen: oB().func,
      useFsAccessApi: oB().bool,
      autoFocus: oB().bool,
      onDragEnter: oB().func,
      onDragLeave: oB().func,
      onDragOver: oB().func,
      onDrop: oB().func,
      onDropAccepted: oB().func,
      onDropRejected: oB().func,
      onError: oB().func,
      validator: oB().func
    };
    var zI = {
      sH: !1,
      isFileDialogActive: !1,
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1,
      acceptedFiles: [],
      fileRejections: []
    };

    function FI() {
      var BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        IB = vI(vI({}, hI), BB),
        ZB = IB.accept,
        JB = IB.disabled,
        oB = IB.getFilesFromEvent,
        GB = IB.maxSize,
        vB = IB.minSize,
        kB = IB.multiple,
        cB = IB.maxFiles,
        nB = IB.onDragEnter,
        hB = IB.onDragLeave,
        zB = IB.onDragOver,
        FB = IB.onDrop,
        NB = IB.onDropAccepted,
        gB = IB.onDropRejected,
        qB = IB.onFileDialogCancel,
        yB = IB.onFileDialogOpen,
        UB = IB.useFsAccessApi,
        WB = IB.autoFocus,
        dB = IB.preventDropOnDocument,
        CB = IB.noClick,
        QB = IB.noKeyboard,
        sB = IB.noDrag,
        wB = IB.noDragEventsBubbling,
        OB = IB.onError,
        iB = IB.validator,
        MB = (0, TB.useMemo)((function() {
          return function(BB) {
            if (AB(BB)) return Object.entries(BB).reduce((function(BB, IB) {
              var ZB = HB(IB, 2),
                TB = ZB[0],
                JB = ZB[1];
              return [].concat(YB(BB), [TB], YB(JB))
            }), []).filter((function(BB) {
              return DB(BB) || KB(BB)
            })).join(",")
          }(ZB)
        }), [ZB]),
        jB = (0, TB.useMemo)((function() {
          return function(BB) {
            return AB(BB) ? [{
              description: "Files",
              accept: Object.entries(BB).filter((function(BB) {
                var IB = HB(BB, 2),
                  ZB = IB[0],
                  TB = IB[1],
                  JB = !0;
                return DB(ZB) || (console.warn('Skipped "'.concat(ZB, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), JB = !1), Array.isArray(TB) && TB.every(KB) || (console.warn('Skipped "'.concat(ZB, '" because an invalid file extension was provided.')), JB = !1), JB
              })).reduce((function(BB, IB) {
                var ZB = HB(IB, 2),
                  TB = ZB[0],
                  JB = ZB[1];
                return pB(pB({}, BB), {}, aB({}, TB, JB))
              }), {})
            }] : BB
          }(ZB)
        }), [ZB]),
        PB = (0, TB.useMemo)((function() {
          return "function" === typeof yB ? yB : gI
        }), [yB]),
        RB = (0, TB.useMemo)((function() {
          return "function" === typeof qB ? qB : gI
        }), [qB]),
        rB = (0, TB.useRef)(null),
        mB = (0, TB.useRef)(null),
        XB = TI((0, TB.useReducer)(NI, zI), 2),
        LB = XB[0],
        eB = XB[1],
        VB = LB.sH,
        SB = LB.isFileDialogActive,
        JI = (0, TB.useRef)("undefined" !== typeof window && window.isSecureContext && UB && "showOpenFilePicker" in window),
        oI = function() {
          !JI.current && SB && setTimeout((function() {
            mB.current && (mB.current.files.length || (eB({
              type: "closeDialog"
            }), RB()))
          }), 300)
        };
      (0, TB.useEffect)((function() {
        return window.addEventListener("focus", oI, !1),
          function() {
            window.removeEventListener("focus", oI, !1)
          }
      }), [mB, SB, RB, JI]);
      var GI = (0, TB.useRef)([]),
        nI = function(BB) {
          rB.current && rB.current.contains(BB.target) || (BB.preventDefault(), GI.current = [])
        };
      (0, TB.useEffect)((function() {
        return dB && (document.addEventListener("dragover", xB, !1), document.addEventListener("drop", nI, !1)),
          function() {
            dB && (document.removeEventListener("dragover", xB), document.removeEventListener("drop", nI))
          }
      }), [rB, dB]), (0, TB.useEffect)((function() {
        return !JB && WB && rB.current && rB.current.focus(),
          function() {}
      }), [rB, WB, JB]);
      var FI = (0, TB.useCallback)((function(BB) {
          OB ? OB(BB) : console.error(BB)
        }), [OB]),
        qI = (0, TB.useCallback)((function(BB) {
          BB.preventDefault(), BB.persist(), aI(BB), GI.current = [].concat(ZI(GI.current), [BB.target]), bB(BB) && Promise.resolve(oB(BB)).then((function(IB) {
            if (!tB(BB) || wB) {
              var ZB = IB.length,
                TB = ZB > 0 && function(BB) {
                  var IB = BB.files,
                    ZB = BB.accept,
                    TB = BB.minSize,
                    JB = BB.maxSize,
                    oB = BB.multiple,
                    GB = BB.maxFiles,
                    vB = BB.validator;
                  return !(!oB && IB.length > 1 || oB && GB >= 1 && IB.length > GB) && IB.every((function(BB) {
                    var IB = HB(fB(BB, ZB), 1)[0],
                      oB = HB(lB(BB, TB, JB), 1)[0],
                      GB = vB ? vB(BB) : null;
                    return IB && oB && !GB
                  }))
                }({
                  files: IB,
                  accept: MB,
                  minSize: vB,
                  maxSize: GB,
                  multiple: kB,
                  maxFiles: cB,
                  validator: iB
                });
              eB({
                isDragAccept: TB,
                isDragReject: ZB > 0 && !TB,
                isDragActive: !0,
                type: "setDraggedFiles"
              }), nB && nB(BB)
            }
          })).catch((function(BB) {
            return FI(BB)
          }))
        }), [oB, nB, FI, wB, MB, vB, GB, kB, cB, iB]),
        yI = (0, TB.useCallback)((function(BB) {
          BB.preventDefault(), BB.persist(), aI(BB);
          var IB = bB(BB);
          if (IB && BB.dataTransfer) try {
            BB.dataTransfer.dropEffect = "copy"
          } catch (ZB) {}
          return IB && zB && zB(BB), !1
        }), [zB, wB]),
        UI = (0, TB.useCallback)((function(BB) {
          BB.preventDefault(), BB.persist(), aI(BB);
          var IB = GI.current.filter((function(BB) {
              return rB.current && rB.current.contains(BB)
            })),
            ZB = IB.indexOf(BB.target); - 1 !== ZB && IB.splice(ZB, 1), GI.current = IB, IB.length > 0 || (eB({
            type: "setDraggedFiles",
            isDragActive: !1,
            isDragAccept: !1,
            isDragReject: !1
          }), bB(BB) && hB && hB(BB))
        }), [rB, hB, wB]),
        WI = (0, TB.useCallback)((function(BB, IB) {
          var ZB = [],
            TB = [];
          BB.forEach((function(BB) {
            var IB = TI(fB(BB, MB), 2),
              JB = IB[0],
              oB = IB[1],
              kB = TI(lB(BB, vB, GB), 2),
              cB = kB[0],
              nB = kB[1],
              hB = iB ? iB(BB) : null;
            if (JB && cB && !hB) ZB.push(BB);
            else {
              var zB = [oB, nB];
              hB && (zB = zB.concat(hB)), TB.push({
                file: BB,
                errors: zB.filter((function(BB) {
                  return BB
                }))
              })
            }
          })), (!kB && ZB.length > 1 || kB && cB >= 1 && ZB.length > cB) && (ZB.forEach((function(BB) {
            TB.push({
              file: BB,
              errors: [uB]
            })
          })), ZB.splice(0)), eB({
            acceptedFiles: ZB,
            fileRejections: TB,
            type: "setFiles"
          }), FB && FB(ZB, TB, IB), TB.length > 0 && gB && gB(TB, IB), ZB.length > 0 && NB && NB(ZB, IB)
        }), [eB, kB, MB, vB, GB, cB, FB, NB, gB, iB]),
        dI = (0, TB.useCallback)((function(BB) {
          BB.preventDefault(), BB.persist(), aI(BB), GI.current = [], bB(BB) && Promise.resolve(oB(BB)).then((function(IB) {
            tB(BB) && !wB || WI(IB, BB)
          })).catch((function(BB) {
            return FI(BB)
          })), eB({
            type: "reset"
          })
        }), [oB, WI, FI, wB]),
        CI = (0, TB.useCallback)((function() {
          if (JI.current) {
            eB({
              type: "openDialog"
            }), PB();
            var BB = {
              multiple: kB,
              types: jB
            };
            window.showOpenFilePicker(BB).then((function(BB) {
              return oB(BB)
            })).then((function(BB) {
              WI(BB, null), eB({
                type: "closeDialog"
              })
            })).catch((function(BB) {
              var IB;
              (IB = BB) instanceof DOMException && ("AbortError" === IB.name || IB.code === IB.ABORT_ERR) ? (RB(BB), eB({
                type: "closeDialog"
              })) : ! function(BB) {
                return BB instanceof DOMException && ("SecurityError" === BB.name || BB.code === BB.SECURITY_ERR)
              }(BB) ? FI(BB) : (JI.current = !1, mB.current ? (mB.current.value = null, mB.current.click()) : FI(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))
            }))
          } else mB.current && (eB({
            type: "openDialog"
          }), PB(), mB.current.value = null, mB.current.click())
        }), [eB, PB, RB, UB, WI, FI, jB, kB]),
        QI = (0, TB.useCallback)((function(BB) {
          rB.current && rB.current.isEqualNode(BB.target) && (" " !== BB.key && "Enter" !== BB.key && 32 !== BB.keyCode && 13 !== BB.keyCode || (BB.preventDefault(), CI()))
        }), [rB, CI]),
        sI = (0, TB.useCallback)((function() {
          eB({
            type: "focus"
          })
        }), []),
        wI = (0, TB.useCallback)((function() {
          eB({
            type: "blur"
          })
        }), []),
        OI = (0, TB.useCallback)((function() {
          CB || (! function() {
            var BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
            return function(BB) {
              return -1 !== BB.indexOf("MSIE") || -1 !== BB.indexOf("Trident/")
            }(BB) || function(BB) {
              return -1 !== BB.indexOf("Edge/")
            }(BB)
          }() ? CI() : setTimeout(CI, 0))
        }), [CB, CI]),
        YI = function(BB) {
          return JB ? null : BB
        },
        iI = function(BB) {
          return QB ? null : YI(BB)
        },
        pI = function(BB) {
          return sB ? null : YI(BB)
        },
        aI = function(BB) {
          wB && BB.stopPropagation()
        },
        HI = (0, TB.useMemo)((function() {
          return function() {
            var BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              IB = BB.refKey,
              ZB = void 0 === IB ? "ref" : IB,
              TB = BB.role,
              oB = BB.onKeyDown,
              GB = BB.onFocus,
              vB = BB.onBlur,
              kB = BB.onClick,
              cB = BB.onDragEnter,
              nB = BB.onDragOver,
              hB = BB.onDragLeave,
              zB = BB.onDrop,
              FB = cI(BB, BI);
            return vI(vI(kI({
              onKeyDown: iI(EB(oB, QI)),
              onFocus: iI(EB(GB, sI)),
              onBlur: iI(EB(vB, wI)),
              onClick: YI(EB(kB, OI)),
              onDragEnter: pI(EB(cB, qI)),
              onDragOver: pI(EB(nB, yI)),
              onDragLeave: pI(EB(hB, UI)),
              onDrop: pI(EB(zB, dI)),
              role: "string" === typeof TB && "" !== TB ? TB : "presentation"
            }, ZB, rB), JB || QB ? {} : {
              tabIndex: 0
            }), FB)
          }
        }), [rB, QI, sI, wI, OI, qI, yI, UI, dI, QB, sB, JB]),
        MI = (0, TB.useCallback)((function(BB) {
          BB.stopPropagation()
        }), []),
        jI = (0, TB.useMemo)((function() {
          return function() {
            var BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              IB = BB.refKey,
              ZB = void 0 === IB ? "ref" : IB,
              TB = BB.onChange,
              JB = BB.onClick,
              oB = cI(BB, II);
            return vI(vI({}, kI({
              accept: MB,
              multiple: kB,
              type: "file",
              style: {
                display: "none"
              },
              onChange: YI(EB(TB, dI)),
              onClick: YI(EB(JB, MI)),
              tabIndex: -1
            }, ZB, mB)), oB)
          }
        }), [mB, ZB, kB, dI, JB]);
      return vI(vI({}, LB), {}, {
        sH: VB && !JB,
        getRootProps: HI,
        getInputProps: jI,
        rootRef: rB,
        inputRef: mB,
        open: YI(CI)
      })
    }

    function NI(BB, IB) {
      switch (IB.type) {
        case "focus":
          return vI(vI({}, BB), {}, {
            sH: !0
          });
        case "blur":
          return vI(vI({}, BB), {}, {
            sH: !1
          });
        case "openDialog":
          return vI(vI({}, zI), {}, {
            isFileDialogActive: !0
          });
        case "closeDialog":
          return vI(vI({}, BB), {}, {
            isFileDialogActive: !1
          });
        case "setDraggedFiles":
          return vI(vI({}, BB), {}, {
            isDragActive: IB.isDragActive,
            isDragAccept: IB.isDragAccept,
            isDragReject: IB.isDragReject
          });
        case "setFiles":
          return vI(vI({}, BB), {}, {
            acceptedFiles: IB.acceptedFiles,
            fileRejections: IB.fileRejections
          });
        case "reset":
          return vI({}, zI);
        default:
          return BB
      }
    }

    function gI() {}
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);