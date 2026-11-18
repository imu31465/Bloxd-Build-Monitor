export const id = 99;
export const ids = [99];
export const modules = {
  4396: (BB, TB) => {
    TB.c = function(BB, TB) {
      if (BB && TB) {
        var dB = Array.isArray(TB) ? TB : TB.split(","),
          VB = BB.name || "",
          yB = (BB.type || "").toLowerCase(),
          pB = yB.replace(/\/.*$/, "");
        return dB.some((function(BB) {
          var TB = BB.trim().toLowerCase();
          return "." === TB.charAt(0) ? VB.toLowerCase().endsWith(TB) : TB.endsWith("/*") ? pB === TB.replace(/\/.*$/, "") : yB === TB
        }))
      }
      return !0
    }
  },
  4367: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => OT
    });
    var VB = dB(62),
      yB = dB(4376),
      pB = dB.n(yB);

    function lB(BB, TB, dB, VB) {
      return new(dB || (dB = Promise))((function(yB, pB) {
        function lB(BB) {
          try {
            YB(VB.next(BB))
          } catch (TB) {
            pB(TB)
          }
        }

        function JB(BB) {
          try {
            YB(VB.throw(BB))
          } catch (TB) {
            pB(TB)
          }
        }

        function YB(BB) {
          var TB;
          BB.done ? yB(BB.value) : (TB = BB.value, TB instanceof dB ? TB : new dB((function(BB) {
            BB(TB)
          }))).then(lB, JB)
        }
        YB((VB = VB.apply(BB, TB || [])).next())
      }))
    }

    function JB(BB, TB) {
      var dB, VB, yB, pB, lB = {
        label: 0,
        sent: function() {
          if (1 & yB[0]) throw yB[1];
          return yB[1]
        },
        trys: [],
        ops: []
      };
      return pB = {
        next: JB(0),
        throw: JB(1),
        return: JB(2)
      }, "function" === typeof Symbol && (pB[Symbol.iterator] = function() {
        return this
      }), pB;

      function JB(JB) {
        return function(YB) {
          return function(JB) {
            if (dB) throw new TypeError("Generator is already executing.");
            for (; pB && (pB = 0, JB[0] && (lB = 0)), lB;) try {
              if (dB = 1, VB && (yB = 2 & JB[0] ? VB.return : JB[0] ? VB.throw || ((yB = VB.return) && yB.call(VB), 0) : VB.next) && !(yB = yB.call(VB, JB[1])).done) return yB;
              switch (VB = 0, yB && (JB = [2 & JB[0], yB.value]), JB[0]) {
                case 0:
                case 1:
                  yB = JB;
                  break;
                case 4:
                  return lB.label++, {
                    value: JB[1],
                    done: !1
                  };
                case 5:
                  lB.label++, VB = JB[1], JB = [0];
                  continue;
                case 7:
                  JB = lB.ops.pop(), lB.trys.pop();
                  continue;
                default:
                  if (!(yB = (yB = lB.trys).length > 0 && yB[yB.length - 1]) && (6 === JB[0] || 2 === JB[0])) {
                    lB = 0;
                    continue
                  }
                  if (3 === JB[0] && (!yB || JB[1] > yB[0] && JB[1] < yB[3])) {
                    lB.label = JB[1];
                    break
                  }
                  if (6 === JB[0] && lB.label < yB[1]) {
                    lB.label = yB[1], yB = JB;
                    break
                  }
                  if (yB && lB.label < yB[2]) {
                    lB.label = yB[2], lB.ops.push(JB);
                    break
                  }
                  yB[2] && lB.ops.pop(), lB.trys.pop();
                  continue
              }
              JB = TB.call(BB, lB)
            } catch (YB) {
              JB = [6, YB], VB = 0
            } finally {
              dB = yB = 0
            }
            if (5 & JB[0]) throw JB[1];
            return {
              value: JB[0] ? JB[1] : void 0,
              done: !0
            }
          }([JB, YB])
        }
      }
    }
    Object.create;

    function YB(BB, TB) {
      var dB = "function" === typeof Symbol && BB[Symbol.iterator];
      if (!dB) return BB;
      var VB, yB, pB = dB.call(BB),
        lB = [];
      try {
        for (;
          (void 0 === TB || TB-- > 0) && !(VB = pB.next()).done;) lB.push(VB.value)
      } catch (JB) {
        yB = {
          error: JB
        }
      } finally {
        try {
          VB && !VB.done && (dB = pB.return) && dB.call(pB)
        } finally {
          if (yB) throw yB.error
        }
      }
      return lB
    }

    function gB(BB, TB, dB) {
      if (dB || 2 === arguments.length)
        for (var VB, yB = 0, pB = TB.length; yB < pB; yB++) !VB && yB in TB || (VB || (VB = Array.prototype.slice.call(TB, 0, yB)), VB[yB] = TB[yB]);
      return BB.concat(VB || Array.prototype.slice.call(TB))
    }
    Object.create;
    "function" === typeof SuppressedError && SuppressedError;
    var oB = new Map([
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
      ["Jo", "application/vnd.ms-outlook"]
    ]);

    function kB(BB, TB) {
      var dB = function(BB) {
        var TB = BB.name;
        if (TB && -1 !== TB.lastIndexOf(".") && !BB.type) {
          var dB = TB.split(".").pop().toLowerCase(),
            VB = oB.get(dB);
          VB && Object.defineProperty(BB, "type", {
            value: VB,
            writable: !1,
            configurable: !1,
            enumerable: !0
          })
        }
        return BB
      }(BB);
      if ("string" !== typeof dB.path) {
        var VB = BB.webkitRelativePath;
        Object.defineProperty(dB, "path", {
          value: "string" === typeof TB ? TB : "string" === typeof VB && VB.length > 0 ? VB : BB.name,
          writable: !1,
          configurable: !1,
          enumerable: !0
        })
      }
      return dB
    }
    var LB = [".DS_Store", "Thumbs.db"];

    function OB(BB) {
      return "object" === typeof BB && null !== BB
    }

    function DB(BB) {
      return vB(BB.target.files).map((function(BB) {
        return kB(BB)
      }))
    }

    function uB(BB) {
      return lB(this, void 0, void 0, (function() {
        return JB(this, (function(TB) {
          switch (TB.label) {
            case 0:
              return [4, Promise.all(BB.map((function(BB) {
                return BB.getFile()
              })))];
            case 1:
              return [2, TB.sent().map((function(BB) {
                return kB(BB)
              }))]
          }
        }))
      }))
    }

    function HB(BB, TB) {
      return lB(this, void 0, void 0, (function() {
        var dB;
        return JB(this, (function(VB) {
          switch (VB.label) {
            case 0:
              return BB.items ? (dB = vB(BB.items).filter((function(BB) {
                return "file" === BB.kind
              })), "drop" !== TB ? [2, dB] : [4, Promise.all(dB.map(mB))]) : [3, 2];
            case 1:
              return [2, EB(iB(VB.sent()))];
            case 2:
              return [2, EB(vB(BB.files).map((function(BB) {
                return kB(BB)
              })))]
          }
        }))
      }))
    }

    function EB(BB) {
      return BB.filter((function(BB) {
        return -1 === LB.indexOf(BB.name)
      }))
    }

    function vB(BB) {
      if (null === BB) return [];
      for (var TB = [], dB = 0; dB < BB.length; dB++) {
        var VB = BB[dB];
        TB.push(VB)
      }
      return TB
    }

    function mB(BB) {
      if ("function" !== typeof BB.webkitGetAsEntry) return NB(BB);
      var TB = BB.webkitGetAsEntry();
      return TB && TB.isDirectory ? fB(TB) : NB(BB)
    }

    function iB(BB) {
      return BB.reduce((function(BB, TB) {
        return gB(gB([], YB(BB), !1), YB(Array.isArray(TB) ? iB(TB) : [TB]), !1)
      }), [])
    }

    function NB(BB) {
      var TB = BB.getAsFile();
      if (!TB) return Promise.reject("".concat(BB, " is not a File"));
      var dB = kB(TB);
      return Promise.resolve(dB)
    }

    function tB(BB) {
      return lB(this, void 0, void 0, (function() {
        return JB(this, (function(TB) {
          return [2, BB.isDirectory ? fB(BB) : sB(BB)]
        }))
      }))
    }

    function fB(BB) {
      var TB = BB.createReader();
      return new Promise((function(BB, dB) {
        var VB = [];
        ! function yB() {
          var pB = this;
          TB.readEntries((function(TB) {
            return lB(pB, void 0, void 0, (function() {
              var pB, lB, YB;
              return JB(this, (function(JB) {
                switch (JB.label) {
                  case 0:
                    if (TB.length) return [3, 5];
                    JB.label = 1;
                  case 1:
                    return JB.trys.push([1, 3, , 4]), [4, Promise.all(VB)];
                  case 2:
                    return pB = JB.sent(), BB(pB), [3, 4];
                  case 3:
                    return lB = JB.sent(), dB(lB), [3, 4];
                  case 4:
                    return [3, 6];
                  case 5:
                    YB = Promise.all(TB.map(tB)), VB.push(YB), yB(), JB.label = 6;
                  case 6:
                    return [2]
                }
              }))
            }))
          }), (function(BB) {
            dB(BB)
          }))
        }()
      }))
    }

    function sB(BB) {
      return lB(this, void 0, void 0, (function() {
        return JB(this, (function(TB) {
          return [2, new Promise((function(TB, dB) {
            BB.file((function(dB) {
              var VB = kB(dB, BB.fullPath);
              TB(VB)
            }), (function(BB) {
              dB(BB)
            }))
          }))]
        }))
      }))
    }
    var MB = dB(4396);

    function zB(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return IB(BB)
      }(BB) || function(BB) {
        if ("undefined" !== typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
      }(BB) || rB(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function wB(BB, TB) {
      var dB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var VB = Object.getOwnPropertySymbols(BB);
        TB && (VB = VB.filter((function(TB) {
          return Object.getOwnPropertyDescriptor(BB, TB).enumerable
        }))), dB.push.apply(dB, VB)
      }
      return dB
    }

    function UB(BB) {
      for (var TB = 1; TB < arguments.length; TB++) {
        var dB = null != arguments[TB] ? arguments[TB] : {};
        TB % 2 ? wB(Object(dB), !0).forEach((function(TB) {
          FB(BB, TB, dB[TB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(dB)) : wB(Object(dB)).forEach((function(TB) {
          Object.defineProperty(BB, TB, Object.getOwnPropertyDescriptor(dB, TB))
        }))
      }
      return BB
    }

    function FB(BB, TB, dB) {
      return TB in BB ? Object.defineProperty(BB, TB, {
        value: dB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[TB] = dB, BB
    }

    function KB(BB, TB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, TB) {
        var dB = null == BB ? null : "undefined" !== typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null == dB) return;
        var VB, yB, pB = [],
          lB = !0,
          JB = !1;
        try {
          for (dB = dB.call(BB); !(lB = (VB = dB.next()).done) && (pB.push(VB.value), !TB || pB.length !== TB); lB = !0);
        } catch (YB) {
          JB = !0, yB = YB
        } finally {
          try {
            lB || null == dB.return || dB.return()
          } finally {
            if (JB) throw yB
          }
        }
        return pB
      }(BB, TB) || rB(BB, TB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function rB(BB, TB) {
      if (BB) {
        if ("string" === typeof BB) return IB(BB, TB);
        var dB = Object.prototype.toString.call(BB).slice(8, -1);
        return "Object" === dB && BB.constructor && (dB = BB.constructor.name), "Map" === dB || "Set" === dB ? Array.from(BB) : "Arguments" === dB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(dB) ? IB(BB, TB) : void 0
      }
    }

    function IB(BB, TB) {
      (null == TB || TB > BB.length) && (TB = BB.length);
      for (var dB = 0, VB = new Array(TB); dB < TB; dB++) VB[dB] = BB[dB];
      return VB
    }
    var cB = "file-invalid-type",
      SB = "file-too-large",
      PB = "file-too-small",
      QB = "too-many-files",
      RB = function(BB) {
        BB = Array.isArray(BB) && 1 === BB.length ? BB[0] : BB;
        var TB = Array.isArray(BB) ? "one of ".concat(BB.join(", ")) : BB;
        return {
          code: cB,
          message: "File type must be ".concat(TB)
        }
      },
      aB = function(BB) {
        return {
          code: SB,
          message: "File is larger than ".concat(BB, " ").concat(1 === BB ? "byte" : "bytes")
        }
      },
      ZB = function(BB) {
        return {
          code: PB,
          message: "File is smaller than ".concat(BB, " ").concat(1 === BB ? "byte" : "bytes")
        }
      },
      XB = {
        code: QB,
        message: "Too many files"
      };

    function WB(BB, TB) {
      var dB = "application/x-moz-file" === BB.type || (0, MB.c)(BB, TB);
      return [dB, dB ? null : RB(TB)]
    }

    function hB(BB, TB, dB) {
      if (CB(BB.size))
        if (CB(TB) && CB(dB)) {
          if (BB.size > dB) return [!1, aB(dB)];
          if (BB.size < TB) return [!1, ZB(TB)]
        } else {
          if (CB(TB) && BB.size < TB) return [!1, ZB(TB)];
          if (CB(dB) && BB.size > dB) return [!1, aB(dB)]
        } return [!0, null]
    }

    function CB(BB) {
      return void 0 !== BB && null !== BB
    }

    function GB(BB) {
      return "function" === typeof BB.isPropagationStopped ? BB.isPropagationStopped() : "undefined" !== typeof BB.cancelBubble && BB.cancelBubble
    }

    function qB(BB) {
      return BB.dataTransfer ? Array.prototype.some.call(BB.dataTransfer.types, (function(BB) {
        return "Files" === BB || "application/x-moz-file" === BB
      })) : !!BB.target && !!BB.target.files
    }

    function xB(BB) {
      BB.preventDefault()
    }

    function jB() {
      for (var BB = arguments.length, TB = new Array(BB), dB = 0; dB < BB; dB++) TB[dB] = arguments[dB];
      return function(BB) {
        for (var dB = arguments.length, VB = new Array(dB > 1 ? dB - 1 : 0), yB = 1; yB < dB; yB++) VB[yB - 1] = arguments[yB];
        return TB.some((function(TB) {
          return !GB(BB) && TB && TB.apply(void 0, [BB].concat(VB)), GB(BB)
        }))
      }
    }

    function AB(BB) {
      return "audio/*" === BB || "video/*" === BB || "image/*" === BB || "text/*" === BB || /\w+\/[-+.\w]+/g.test(BB)
    }

    function bB(BB) {
      return /^.*\.[\w]+$/.test(BB)
    }
    var nB = ["children"],
      eB = ["open"],
      BT = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
      TT = ["refKey", "onChange", "onClick"];

    function dT(BB) {
      return function(BB) {
        if (Array.isArray(BB)) return pT(BB)
      }(BB) || function(BB) {
        if ("undefined" !== typeof Symbol && null != BB[Symbol.iterator] || null != BB["@@iterator"]) return Array.from(BB)
      }(BB) || yT(BB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function VT(BB, TB) {
      return function(BB) {
        if (Array.isArray(BB)) return BB
      }(BB) || function(BB, TB) {
        var dB = null == BB ? null : "undefined" !== typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
        if (null == dB) return;
        var VB, yB, pB = [],
          lB = !0,
          JB = !1;
        try {
          for (dB = dB.call(BB); !(lB = (VB = dB.next()).done) && (pB.push(VB.value), !TB || pB.length !== TB); lB = !0);
        } catch (YB) {
          JB = !0, yB = YB
        } finally {
          try {
            lB || null == dB.return || dB.return()
          } finally {
            if (JB) throw yB
          }
        }
        return pB
      }(BB, TB) || yT(BB, TB) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function yT(BB, TB) {
      if (BB) {
        if ("string" === typeof BB) return pT(BB, TB);
        var dB = Object.prototype.toString.call(BB).slice(8, -1);
        return "Object" === dB && BB.constructor && (dB = BB.constructor.name), "Map" === dB || "Set" === dB ? Array.from(BB) : "Arguments" === dB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(dB) ? pT(BB, TB) : void 0
      }
    }

    function pT(BB, TB) {
      (null == TB || TB > BB.length) && (TB = BB.length);
      for (var dB = 0, VB = new Array(TB); dB < TB; dB++) VB[dB] = BB[dB];
      return VB
    }

    function lT(BB, TB) {
      var dB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var VB = Object.getOwnPropertySymbols(BB);
        TB && (VB = VB.filter((function(TB) {
          return Object.getOwnPropertyDescriptor(BB, TB).enumerable
        }))), dB.push.apply(dB, VB)
      }
      return dB
    }

    function JT(BB) {
      for (var TB = 1; TB < arguments.length; TB++) {
        var dB = null != arguments[TB] ? arguments[TB] : {};
        TB % 2 ? lT(Object(dB), !0).forEach((function(TB) {
          YT(BB, TB, dB[TB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(dB)) : lT(Object(dB)).forEach((function(TB) {
          Object.defineProperty(BB, TB, Object.getOwnPropertyDescriptor(dB, TB))
        }))
      }
      return BB
    }

    function YT(BB, TB, dB) {
      return TB in BB ? Object.defineProperty(BB, TB, {
        value: dB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[TB] = dB, BB
    }

    function gT(BB, TB) {
      if (null == BB) return {};
      var dB, VB, yB = function(BB, TB) {
        if (null == BB) return {};
        var dB, VB, yB = {},
          pB = Object.keys(BB);
        for (VB = 0; VB < pB.length; VB++) dB = pB[VB], TB.indexOf(dB) >= 0 || (yB[dB] = BB[dB]);
        return yB
      }(BB, TB);
      if (Object.getOwnPropertySymbols) {
        var pB = Object.getOwnPropertySymbols(BB);
        for (VB = 0; VB < pB.length; VB++) dB = pB[VB], TB.indexOf(dB) >= 0 || Object.prototype.propertyIsEnumerable.call(BB, dB) && (yB[dB] = BB[dB])
      }
      return yB
    }
    var oT = (0, VB.forwardRef)((function(BB, TB) {
      var dB = BB.children,
        yB = OT(gT(BB, nB)),
        pB = yB.open,
        lB = gT(yB, eB);
      return (0, VB.useImperativeHandle)(TB, (function() {
        return {
          open: pB
        }
      }), [pB]), VB.createElement(VB.Fragment, null, dB(JT(JT({}, lB), {}, {
        open: pB
      })))
    }));
    oT.displayName = "Dropzone";
    var kT = {
      disabled: !1,
      getFilesFromEvent: function(BB) {
        return lB(this, void 0, void 0, (function() {
          return JB(this, (function(TB) {
            return OB(BB) && OB(BB.dataTransfer) ? [2, HB(BB.dataTransfer, BB.type)] : function(BB) {
              return OB(BB) && OB(BB.target)
            }(BB) ? [2, DB(BB)] : Array.isArray(BB) && BB.every((function(BB) {
              return "getFile" in BB && "function" === typeof BB.getFile
            })) ? [2, uB(BB)] : [2, []]
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
    oT.defaultProps = kT, oT.propTypes = {
      children: pB().func,
      accept: pB().objectOf(pB().arrayOf(pB().string)),
      multiple: pB().bool,
      preventDropOnDocument: pB().bool,
      noClick: pB().bool,
      noKeyboard: pB().bool,
      noDrag: pB().bool,
      noDragEventsBubbling: pB().bool,
      minSize: pB().number,
      maxSize: pB().number,
      maxFiles: pB().number,
      disabled: pB().bool,
      getFilesFromEvent: pB().func,
      onFileDialogCancel: pB().func,
      onFileDialogOpen: pB().func,
      useFsAccessApi: pB().bool,
      autoFocus: pB().bool,
      onDragEnter: pB().func,
      onDragLeave: pB().func,
      onDragOver: pB().func,
      onDrop: pB().func,
      onDropAccepted: pB().func,
      onDropRejected: pB().func,
      onError: pB().func,
      validator: pB().func
    };
    var LT = {
      dU: !1,
      isFileDialogActive: !1,
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1,
      acceptedFiles: [],
      fileRejections: []
    };

    function OT() {
      var BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        TB = JT(JT({}, kT), BB),
        dB = TB.accept,
        yB = TB.disabled,
        pB = TB.getFilesFromEvent,
        lB = TB.maxSize,
        JB = TB.minSize,
        YB = TB.multiple,
        gB = TB.maxFiles,
        oB = TB.onDragEnter,
        kB = TB.onDragLeave,
        LB = TB.onDragOver,
        OB = TB.onDrop,
        DB = TB.onDropAccepted,
        uB = TB.onDropRejected,
        HB = TB.onFileDialogCancel,
        EB = TB.onFileDialogOpen,
        vB = TB.useFsAccessApi,
        mB = TB.autoFocus,
        iB = TB.preventDropOnDocument,
        NB = TB.noClick,
        tB = TB.noKeyboard,
        fB = TB.noDrag,
        sB = TB.noDragEventsBubbling,
        MB = TB.onError,
        wB = TB.validator,
        rB = (0, VB.useMemo)((function() {
          return function(BB) {
            if (CB(BB)) return Object.entries(BB).reduce((function(BB, TB) {
              var dB = KB(TB, 2),
                VB = dB[0],
                yB = dB[1];
              return [].concat(zB(BB), [VB], zB(yB))
            }), []).filter((function(BB) {
              return AB(BB) || bB(BB)
            })).join(",")
          }(dB)
        }), [dB]),
        IB = (0, VB.useMemo)((function() {
          return function(BB) {
            return CB(BB) ? [{
              description: "Files",
              accept: Object.entries(BB).filter((function(BB) {
                var TB = KB(BB, 2),
                  dB = TB[0],
                  VB = TB[1],
                  yB = !0;
                return AB(dB) || (console.warn('Skipped "'.concat(dB, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), yB = !1), Array.isArray(VB) && VB.every(bB) || (console.warn('Skipped "'.concat(dB, '" because an invalid file extension was provided.')), yB = !1), yB
              })).reduce((function(BB, TB) {
                var dB = KB(TB, 2),
                  VB = dB[0],
                  yB = dB[1];
                return UB(UB({}, BB), {}, FB({}, VB, yB))
              }), {})
            }] : BB
          }(dB)
        }), [dB]),
        cB = (0, VB.useMemo)((function() {
          return "function" === typeof EB ? EB : uT
        }), [EB]),
        SB = (0, VB.useMemo)((function() {
          return "function" === typeof HB ? HB : uT
        }), [HB]),
        PB = (0, VB.useRef)(null),
        QB = (0, VB.useRef)(null),
        RB = VT((0, VB.useReducer)(DT, LT), 2),
        aB = RB[0],
        ZB = RB[1],
        nB = aB.dU,
        eB = aB.isFileDialogActive,
        yT = (0, VB.useRef)("undefined" !== typeof window && window.isSecureContext && vB && "showOpenFilePicker" in window),
        pT = function() {
          !yT.current && eB && setTimeout((function() {
            QB.current && (QB.current.files.length || (ZB({
              type: "closeDialog"
            }), SB()))
          }), 300)
        };
      (0, VB.useEffect)((function() {
        return window.addEventListener("focus", pT, !1),
          function() {
            window.removeEventListener("focus", pT, !1)
          }
      }), [QB, eB, SB, yT]);
      var lT = (0, VB.useRef)([]),
        oT = function(BB) {
          PB.current && PB.current.contains(BB.target) || (BB.preventDefault(), lT.current = [])
        };
      (0, VB.useEffect)((function() {
        return iB && (document.addEventListener("dragover", xB, !1), document.addEventListener("drop", oT, !1)),
          function() {
            iB && (document.removeEventListener("dragover", xB), document.removeEventListener("drop", oT))
          }
      }), [PB, iB]), (0, VB.useEffect)((function() {
        return !yB && mB && PB.current && PB.current.focus(),
          function() {}
      }), [PB, mB, yB]);
      var OT = (0, VB.useCallback)((function(BB) {
          MB ? MB(BB) : console.error(BB)
        }), [MB]),
        HT = (0, VB.useCallback)((function(BB) {
          BB.preventDefault(), BB.persist(), FT(BB), lT.current = [].concat(dT(lT.current), [BB.target]), qB(BB) && Promise.resolve(pB(BB)).then((function(TB) {
            if (!GB(BB) || sB) {
              var dB = TB.length,
                VB = dB > 0 && function(BB) {
                  var TB = BB.files,
                    dB = BB.accept,
                    VB = BB.minSize,
                    yB = BB.maxSize,
                    pB = BB.multiple,
                    lB = BB.maxFiles,
                    JB = BB.validator;
                  return !(!pB && TB.length > 1 || pB && lB >= 1 && TB.length > lB) && TB.every((function(BB) {
                    var TB = KB(WB(BB, dB), 1)[0],
                      pB = KB(hB(BB, VB, yB), 1)[0],
                      lB = JB ? JB(BB) : null;
                    return TB && pB && !lB
                  }))
                }({
                  files: TB,
                  accept: rB,
                  minSize: JB,
                  maxSize: lB,
                  multiple: YB,
                  maxFiles: gB,
                  validator: wB
                });
              ZB({
                isDragAccept: VB,
                isDragReject: dB > 0 && !VB,
                isDragActive: !0,
                type: "setDraggedFiles"
              }), oB && oB(BB)
            }
          })).catch((function(BB) {
            return OT(BB)
          }))
        }), [pB, oB, OT, sB, rB, JB, lB, YB, gB, wB]),
        ET = (0, VB.useCallback)((function(BB) {
          BB.preventDefault(), BB.persist(), FT(BB);
          var TB = qB(BB);
          if (TB && BB.dataTransfer) try {
            BB.dataTransfer.dropEffect = "copy"
          } catch (dB) {}
          return TB && LB && LB(BB), !1
        }), [LB, sB]),
        vT = (0, VB.useCallback)((function(BB) {
          BB.preventDefault(), BB.persist(), FT(BB);
          var TB = lT.current.filter((function(BB) {
              return PB.current && PB.current.contains(BB)
            })),
            dB = TB.indexOf(BB.target); - 1 !== dB && TB.splice(dB, 1), lT.current = TB, TB.length > 0 || (ZB({
            type: "setDraggedFiles",
            isDragActive: !1,
            isDragAccept: !1,
            isDragReject: !1
          }), qB(BB) && kB && kB(BB))
        }), [PB, kB, sB]),
        mT = (0, VB.useCallback)((function(BB, TB) {
          var dB = [],
            VB = [];
          BB.forEach((function(BB) {
            var TB = VT(WB(BB, rB), 2),
              yB = TB[0],
              pB = TB[1],
              YB = VT(hB(BB, JB, lB), 2),
              gB = YB[0],
              oB = YB[1],
              kB = wB ? wB(BB) : null;
            if (yB && gB && !kB) dB.push(BB);
            else {
              var LB = [pB, oB];
              kB && (LB = LB.concat(kB)), VB.push({
                file: BB,
                errors: LB.filter((function(BB) {
                  return BB
                }))
              })
            }
          })), (!YB && dB.length > 1 || YB && gB >= 1 && dB.length > gB) && (dB.forEach((function(BB) {
            VB.push({
              file: BB,
              errors: [XB]
            })
          })), dB.splice(0)), ZB({
            acceptedFiles: dB,
            fileRejections: VB,
            type: "setFiles"
          }), OB && OB(dB, VB, TB), VB.length > 0 && uB && uB(VB, TB), dB.length > 0 && DB && DB(dB, TB)
        }), [ZB, YB, rB, JB, lB, gB, OB, DB, uB, wB]),
        iT = (0, VB.useCallback)((function(BB) {
          BB.preventDefault(), BB.persist(), FT(BB), lT.current = [], qB(BB) && Promise.resolve(pB(BB)).then((function(TB) {
            GB(BB) && !sB || mT(TB, BB)
          })).catch((function(BB) {
            return OT(BB)
          })), ZB({
            type: "reset"
          })
        }), [pB, mT, OT, sB]),
        NT = (0, VB.useCallback)((function() {
          if (yT.current) {
            ZB({
              type: "openDialog"
            }), cB();
            var BB = {
              multiple: YB,
              types: IB
            };
            window.showOpenFilePicker(BB).then((function(BB) {
              return pB(BB)
            })).then((function(BB) {
              mT(BB, null), ZB({
                type: "closeDialog"
              })
            })).catch((function(BB) {
              var TB;
              (TB = BB) instanceof DOMException && ("AbortError" === TB.name || TB.code === TB.ABORT_ERR) ? (SB(BB), ZB({
                type: "closeDialog"
              })) : ! function(BB) {
                return BB instanceof DOMException && ("SecurityError" === BB.name || BB.code === BB.SECURITY_ERR)
              }(BB) ? OT(BB) : (yT.current = !1, QB.current ? (QB.current.value = null, QB.current.click()) : OT(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))
            }))
          } else QB.current && (ZB({
            type: "openDialog"
          }), cB(), QB.current.value = null, QB.current.click())
        }), [ZB, cB, SB, vB, mT, OT, IB, YB]),
        tT = (0, VB.useCallback)((function(BB) {
          PB.current && PB.current.isEqualNode(BB.target) && (" " !== BB.key && "Enter" !== BB.key && 32 !== BB.keyCode && 13 !== BB.keyCode || (BB.preventDefault(), NT()))
        }), [PB, NT]),
        fT = (0, VB.useCallback)((function() {
          ZB({
            type: "focus"
          })
        }), []),
        sT = (0, VB.useCallback)((function() {
          ZB({
            type: "blur"
          })
        }), []),
        MT = (0, VB.useCallback)((function() {
          NB || (! function() {
            var BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
            return function(BB) {
              return -1 !== BB.indexOf("MSIE") || -1 !== BB.indexOf("Trident/")
            }(BB) || function(BB) {
              return -1 !== BB.indexOf("Edge/")
            }(BB)
          }() ? NT() : setTimeout(NT, 0))
        }), [NB, NT]),
        zT = function(BB) {
          return yB ? null : BB
        },
        wT = function(BB) {
          return tB ? null : zT(BB)
        },
        UT = function(BB) {
          return fB ? null : zT(BB)
        },
        FT = function(BB) {
          sB && BB.stopPropagation()
        },
        KT = (0, VB.useMemo)((function() {
          return function() {
            var BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              TB = BB.refKey,
              dB = void 0 === TB ? "ref" : TB,
              VB = BB.role,
              pB = BB.onKeyDown,
              lB = BB.onFocus,
              JB = BB.onBlur,
              YB = BB.onClick,
              gB = BB.onDragEnter,
              oB = BB.onDragOver,
              kB = BB.onDragLeave,
              LB = BB.onDrop,
              OB = gT(BB, BT);
            return JT(JT(YT({
              onKeyDown: wT(jB(pB, tT)),
              onFocus: wT(jB(lB, fT)),
              onBlur: wT(jB(JB, sT)),
              onClick: zT(jB(YB, MT)),
              onDragEnter: UT(jB(gB, HT)),
              onDragOver: UT(jB(oB, ET)),
              onDragLeave: UT(jB(kB, vT)),
              onDrop: UT(jB(LB, iT)),
              role: "string" === typeof VB && "" !== VB ? VB : "presentation"
            }, dB, PB), yB || tB ? {} : {
              tabIndex: 0
            }), OB)
          }
        }), [PB, tT, fT, sT, MT, HT, ET, vT, iT, tB, fB, yB]),
        rT = (0, VB.useCallback)((function(BB) {
          BB.stopPropagation()
        }), []),
        IT = (0, VB.useMemo)((function() {
          return function() {
            var BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              TB = BB.refKey,
              dB = void 0 === TB ? "ref" : TB,
              VB = BB.onChange,
              yB = BB.onClick,
              pB = gT(BB, TT);
            return JT(JT({}, YT({
              accept: rB,
              multiple: YB,
              type: "file",
              style: {
                display: "none"
              },
              onChange: zT(jB(VB, iT)),
              onClick: zT(jB(yB, rT)),
              tabIndex: -1
            }, dB, QB)), pB)
          }
        }), [QB, dB, YB, iT, yB]);
      return JT(JT({}, aB), {}, {
        dU: nB && !yB,
        getRootProps: KT,
        getInputProps: IT,
        rootRef: PB,
        inputRef: QB,
        open: zT(NT)
      })
    }

    function DT(BB, TB) {
      switch (TB.type) {
        case "focus":
          return JT(JT({}, BB), {}, {
            dU: !0
          });
        case "blur":
          return JT(JT({}, BB), {}, {
            dU: !1
          });
        case "openDialog":
          return JT(JT({}, LT), {}, {
            isFileDialogActive: !0
          });
        case "closeDialog":
          return JT(JT({}, BB), {}, {
            isFileDialogActive: !1
          });
        case "setDraggedFiles":
          return JT(JT({}, BB), {}, {
            isDragActive: TB.isDragActive,
            isDragAccept: TB.isDragAccept,
            isDragReject: TB.isDragReject
          });
        case "setFiles":
          return JT(JT({}, BB), {}, {
            acceptedFiles: TB.acceptedFiles,
            fileRejections: TB.fileRejections
          });
        case "reset":
          return JT({}, LT);
        default:
          return BB
      }
    }

    function uT() {}
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);