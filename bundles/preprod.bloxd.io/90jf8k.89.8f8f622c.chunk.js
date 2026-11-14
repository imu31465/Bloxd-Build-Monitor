export const id = 89;
export const ids = [89];
export const modules = {
  3981: (FF, WF) => {
    WF.d = function(FF, WF) {
      if (FF && WF) {
        var SF = Array.isArray(WF) ? WF : WF.split(","),
          CF = FF.name || "",
          AF = (FF.type || "").toLowerCase(),
          uF = AF.replace(/\/.*$/, "");
        return SF.some((function(FF) {
          var WF = FF.trim().toLowerCase();
          return "." === WF.charAt(0) ? CF.toLowerCase().endsWith(WF) : WF.endsWith("/*") ? uF === WF.replace(/\/.*$/, "") : AF === WF
        }))
      }
      return !0
    }
  },
  3957: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => EW
    });
    var CF = SF(46),
      AF = SF(3961),
      uF = SF.n(AF);

    function hF(FF, WF, SF, CF) {
      return new(SF || (SF = Promise))((function(AF, uF) {
        function hF(FF) {
          try {
            dF(CF.next(FF))
          } catch (WF) {
            uF(WF)
          }
        }

        function bW(FF) {
          try {
            dF(CF.throw(FF))
          } catch (WF) {
            uF(WF)
          }
        }

        function dF(FF) {
          var WF;
          FF.done ? AF(FF.value) : (WF = FF.value, WF instanceof SF ? WF : new SF((function(FF) {
            FF(WF)
          }))).then(hF, bW)
        }
        dF((CF = CF.apply(FF, WF || [])).next())
      }))
    }

    function bW(FF, WF) {
      var SF, CF, AF, uF, hF = {
        label: 0,
        sent: function() {
          if (1 & AF[0]) throw AF[1];
          return AF[1]
        },
        trys: [],
        ops: []
      };
      return uF = {
        next: bW(0),
        throw: bW(1),
        return: bW(2)
      }, "function" === typeof Symbol && (uF[Symbol.iterator] = function() {
        return this
      }), uF;

      function bW(bW) {
        return function(dF) {
          return function(bW) {
            if (SF) throw new TypeError("Generator is already executing.");
            for (; uF && (uF = 0, bW[0] && (hF = 0)), hF;) try {
              if (SF = 1, CF && (AF = 2 & bW[0] ? CF.return : bW[0] ? CF.throw || ((AF = CF.return) && AF.call(CF), 0) : CF.next) && !(AF = AF.call(CF, bW[1])).done) return AF;
              switch (CF = 0, AF && (bW = [2 & bW[0], AF.value]), bW[0]) {
                case 0:
                case 1:
                  AF = bW;
                  break;
                case 4:
                  return hF.label++, {
                    value: bW[1],
                    done: !1
                  };
                case 5:
                  hF.label++, CF = bW[1], bW = [0];
                  continue;
                case 7:
                  bW = hF.ops.pop(), hF.trys.pop();
                  continue;
                default:
                  if (!(AF = (AF = hF.trys).length > 0 && AF[AF.length - 1]) && (6 === bW[0] || 2 === bW[0])) {
                    hF = 0;
                    continue
                  }
                  if (3 === bW[0] && (!AF || bW[1] > AF[0] && bW[1] < AF[3])) {
                    hF.label = bW[1];
                    break
                  }
                  if (6 === bW[0] && hF.label < AF[1]) {
                    hF.label = AF[1], AF = bW;
                    break
                  }
                  if (AF && hF.label < AF[2]) {
                    hF.label = AF[2], hF.ops.push(bW);
                    break
                  }
                  AF[2] && hF.ops.pop(), hF.trys.pop();
                  continue
              }
              bW = WF.call(FF, hF)
            } catch (dF) {
              bW = [6, dF], CF = 0
            } finally {
              SF = AF = 0
            }
            if (5 & bW[0]) throw bW[1];
            return {
              value: bW[0] ? bW[1] : void 0,
              done: !0
            }
          }([bW, dF])
        }
      }
    }
    Object.create;

    function dF(FF, WF) {
      var SF = "function" === typeof Symbol && FF[Symbol.iterator];
      if (!SF) return FF;
      var CF, AF, uF = SF.call(FF),
        hF = [];
      try {
        for (;
          (void 0 === WF || WF-- > 0) && !(CF = uF.next()).done;) hF.push(CF.value)
      } catch (bW) {
        AF = {
          error: bW
        }
      } finally {
        try {
          CF && !CF.done && (SF = uF.return) && SF.call(uF)
        } finally {
          if (AF) throw AF.error
        }
      }
      return hF
    }

    function PF(FF, WF, SF) {
      if (SF || 2 === arguments.length)
        for (var CF, AF = 0, uF = WF.length; AF < uF; AF++) !CF && AF in WF || (CF || (CF = Array.prototype.slice.call(WF, 0, AF)), CF[AF] = WF[AF]);
      return FF.concat(CF || Array.prototype.slice.call(WF))
    }
    Object.create;
    "function" === typeof SuppressedError && SuppressedError;
    var RF = new Map([
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
      ["rb", "application/vnd.ms-outlook"]
    ]);

    function iW(FF, WF) {
      var SF = function(FF) {
        var WF = FF.name;
        if (WF && -1 !== WF.lastIndexOf(".") && !FF.type) {
          var SF = WF.split(".").pop().toLowerCase(),
            CF = RF.get(SF);
          CF && Object.defineProperty(FF, "type", {
            value: CF,
            writable: !1,
            configurable: !1,
            enumerable: !0
          })
        }
        return FF
      }(FF);
      if ("string" !== typeof SF.path) {
        var CF = FF.webkitRelativePath;
        Object.defineProperty(SF, "path", {
          value: "string" === typeof WF ? WF : "string" === typeof CF && CF.length > 0 ? CF : FF.name,
          writable: !1,
          configurable: !1,
          enumerable: !0
        })
      }
      return SF
    }
    var eF = [".DS_Store", "Thumbs.db"];

    function EF(FF) {
      return "object" === typeof FF && null !== FF
    }

    function QF(FF) {
      return TF(FF.target.files).map((function(FF) {
        return iW(FF)
      }))
    }

    function rW(FF) {
      return hF(this, void 0, void 0, (function() {
        return bW(this, (function(WF) {
          switch (WF.label) {
            case 0:
              return [4, Promise.all(FF.map((function(FF) {
                return FF.getFile()
              })))];
            case 1:
              return [2, WF.sent().map((function(FF) {
                return iW(FF)
              }))]
          }
        }))
      }))
    }

    function gW(FF, WF) {
      return hF(this, void 0, void 0, (function() {
        var SF;
        return bW(this, (function(CF) {
          switch (CF.label) {
            case 0:
              return FF.items ? (SF = TF(FF.items).filter((function(FF) {
                return "file" === FF.kind
              })), "drop" !== WF ? [2, SF] : [4, Promise.all(SF.map(aW))]) : [3, 2];
            case 1:
              return [2, tW(kW(CF.sent()))];
            case 2:
              return [2, tW(TF(FF.files).map((function(FF) {
                return iW(FF)
              })))]
          }
        }))
      }))
    }

    function tW(FF) {
      return FF.filter((function(FF) {
        return -1 === eF.indexOf(FF.name)
      }))
    }

    function TF(FF) {
      if (null === FF) return [];
      for (var WF = [], SF = 0; SF < FF.length; SF++) {
        var CF = FF[SF];
        WF.push(CF)
      }
      return WF
    }

    function aW(FF) {
      if ("function" !== typeof FF.webkitGetAsEntry) return qW(FF);
      var WF = FF.webkitGetAsEntry();
      return WF && WF.isDirectory ? NF(WF) : qW(FF)
    }

    function kW(FF) {
      return FF.reduce((function(FF, WF) {
        return PF(PF([], dF(FF), !1), dF(Array.isArray(WF) ? kW(WF) : [WF]), !1)
      }), [])
    }

    function qW(FF) {
      var WF = FF.getAsFile();
      if (!WF) return Promise.reject("".concat(FF, " is not a File"));
      var SF = iW(WF);
      return Promise.resolve(SF)
    }

    function VF(FF) {
      return hF(this, void 0, void 0, (function() {
        return bW(this, (function(WF) {
          return [2, FF.isDirectory ? NF(FF) : DF(FF)]
        }))
      }))
    }

    function NF(FF) {
      var WF = FF.createReader();
      return new Promise((function(FF, SF) {
        var CF = [];
        ! function AF() {
          var uF = this;
          WF.readEntries((function(WF) {
            return hF(uF, void 0, void 0, (function() {
              var uF, hF, dF;
              return bW(this, (function(bW) {
                switch (bW.label) {
                  case 0:
                    if (WF.length) return [3, 5];
                    bW.label = 1;
                  case 1:
                    return bW.trys.push([1, 3, , 4]), [4, Promise.all(CF)];
                  case 2:
                    return uF = bW.sent(), FF(uF), [3, 4];
                  case 3:
                    return hF = bW.sent(), SF(hF), [3, 4];
                  case 4:
                    return [3, 6];
                  case 5:
                    dF = Promise.all(WF.map(VF)), CF.push(dF), AF(), bW.label = 6;
                  case 6:
                    return [2]
                }
              }))
            }))
          }), (function(FF) {
            SF(FF)
          }))
        }()
      }))
    }

    function DF(FF) {
      return hF(this, void 0, void 0, (function() {
        return bW(this, (function(WF) {
          return [2, new Promise((function(WF, SF) {
            FF.file((function(SF) {
              var CF = iW(SF, FF.fullPath);
              WF(CF)
            }), (function(FF) {
              SF(FF)
            }))
          }))]
        }))
      }))
    }
    var LF = SF(3981);

    function mW(FF) {
      return function(FF) {
        if (Array.isArray(FF)) return MF(FF)
      }(FF) || function(FF) {
        if ("undefined" !== typeof Symbol && null != FF[Symbol.iterator] || null != FF["@@iterator"]) return Array.from(FF)
      }(FF) || YF(FF) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function OF(FF, WF) {
      var SF = Object.keys(FF);
      if (Object.getOwnPropertySymbols) {
        var CF = Object.getOwnPropertySymbols(FF);
        WF && (CF = CF.filter((function(WF) {
          return Object.getOwnPropertyDescriptor(FF, WF).enumerable
        }))), SF.push.apply(SF, CF)
      }
      return SF
    }

    function xW(FF) {
      for (var WF = 1; WF < arguments.length; WF++) {
        var SF = null != arguments[WF] ? arguments[WF] : {};
        WF % 2 ? OF(Object(SF), !0).forEach((function(WF) {
          ZF(FF, WF, SF[WF])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(FF, Object.getOwnPropertyDescriptors(SF)) : OF(Object(SF)).forEach((function(WF) {
          Object.defineProperty(FF, WF, Object.getOwnPropertyDescriptor(SF, WF))
        }))
      }
      return FF
    }

    function ZF(FF, WF, SF) {
      return WF in FF ? Object.defineProperty(FF, WF, {
        value: SF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : FF[WF] = SF, FF
    }

    function oF(FF, WF) {
      return function(FF) {
        if (Array.isArray(FF)) return FF
      }(FF) || function(FF, WF) {
        var SF = null == FF ? null : "undefined" !== typeof Symbol && FF[Symbol.iterator] || FF["@@iterator"];
        if (null == SF) return;
        var CF, AF, uF = [],
          hF = !0,
          bW = !1;
        try {
          for (SF = SF.call(FF); !(hF = (CF = SF.next()).done) && (uF.push(CF.value), !WF || uF.length !== WF); hF = !0);
        } catch (dF) {
          bW = !0, AF = dF
        } finally {
          try {
            hF || null == SF.return || SF.return()
          } finally {
            if (bW) throw AF
          }
        }
        return uF
      }(FF, WF) || YF(FF, WF) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function YF(FF, WF) {
      if (FF) {
        if ("string" === typeof FF) return MF(FF, WF);
        var SF = Object.prototype.toString.call(FF).slice(8, -1);
        return "Object" === SF && FF.constructor && (SF = FF.constructor.name), "Map" === SF || "Set" === SF ? Array.from(FF) : "Arguments" === SF || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(SF) ? MF(FF, WF) : void 0
      }
    }

    function MF(FF, WF) {
      (null == WF || WF > FF.length) && (WF = FF.length);
      for (var SF = 0, CF = new Array(WF); SF < WF; SF++) CF[SF] = FF[SF];
      return CF
    }
    var cW = "file-invalid-type",
      GF = "file-too-large",
      zW = "file-too-small",
      IF = "too-many-files",
      fF = function(FF) {
        FF = Array.isArray(FF) && 1 === FF.length ? FF[0] : FF;
        var WF = Array.isArray(FF) ? "one of ".concat(FF.join(", ")) : FF;
        return {
          code: cW,
          message: "File type must be ".concat(WF)
        }
      },
      yW = function(FF) {
        return {
          code: GF,
          message: "File is larger than ".concat(FF, " ").concat(1 === FF ? "byte" : "bytes")
        }
      },
      sF = function(FF) {
        return {
          code: zW,
          message: "File is smaller than ".concat(FF, " ").concat(1 === FF ? "byte" : "bytes")
        }
      },
      nF = {
        code: IF,
        message: "Too many files"
      };

    function HF(FF, WF) {
      var SF = "application/x-moz-file" === FF.type || (0, LF.d)(FF, WF);
      return [SF, SF ? null : fF(WF)]
    }

    function KF(FF, WF, SF) {
      if (wF(FF.size))
        if (wF(WF) && wF(SF)) {
          if (FF.size > SF) return [!1, yW(SF)];
          if (FF.size < WF) return [!1, sF(WF)]
        } else {
          if (wF(WF) && FF.size < WF) return [!1, sF(WF)];
          if (wF(SF) && FF.size > SF) return [!1, yW(SF)]
        } return [!0, null]
    }

    function wF(FF) {
      return void 0 !== FF && null !== FF
    }

    function XF(FF) {
      return "function" === typeof FF.isPropagationStopped ? FF.isPropagationStopped() : "undefined" !== typeof FF.cancelBubble && FF.cancelBubble
    }

    function UF(FF) {
      return FF.dataTransfer ? Array.prototype.some.call(FF.dataTransfer.types, (function(FF) {
        return "Files" === FF || "application/x-moz-file" === FF
      })) : !!FF.target && !!FF.target.files
    }

    function BF(FF) {
      FF.preventDefault()
    }

    function jW() {
      for (var FF = arguments.length, WF = new Array(FF), SF = 0; SF < FF; SF++) WF[SF] = arguments[SF];
      return function(FF) {
        for (var SF = arguments.length, CF = new Array(SF > 1 ? SF - 1 : 0), AF = 1; AF < SF; AF++) CF[AF - 1] = arguments[AF];
        return WF.some((function(WF) {
          return !XF(FF) && WF && WF.apply(void 0, [FF].concat(CF)), XF(FF)
        }))
      }
    }

    function vW(FF) {
      return "audio/*" === FF || "video/*" === FF || "image/*" === FF || "text/*" === FF || /\w+\/[-+.\w]+/g.test(FF)
    }

    function JF(FF) {
      return /^.*\.[\w]+$/.test(FF)
    }
    var pF = ["children"],
      lF = ["open"],
      FW = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
      WW = ["refKey", "onChange", "onClick"];

    function SW(FF) {
      return function(FF) {
        if (Array.isArray(FF)) return uW(FF)
      }(FF) || function(FF) {
        if ("undefined" !== typeof Symbol && null != FF[Symbol.iterator] || null != FF["@@iterator"]) return Array.from(FF)
      }(FF) || AW(FF) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function CW(FF, WF) {
      return function(FF) {
        if (Array.isArray(FF)) return FF
      }(FF) || function(FF, WF) {
        var SF = null == FF ? null : "undefined" !== typeof Symbol && FF[Symbol.iterator] || FF["@@iterator"];
        if (null == SF) return;
        var CF, AF, uF = [],
          hF = !0,
          bW = !1;
        try {
          for (SF = SF.call(FF); !(hF = (CF = SF.next()).done) && (uF.push(CF.value), !WF || uF.length !== WF); hF = !0);
        } catch (dF) {
          bW = !0, AF = dF
        } finally {
          try {
            hF || null == SF.return || SF.return()
          } finally {
            if (bW) throw AF
          }
        }
        return uF
      }(FF, WF) || AW(FF, WF) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function AW(FF, WF) {
      if (FF) {
        if ("string" === typeof FF) return uW(FF, WF);
        var SF = Object.prototype.toString.call(FF).slice(8, -1);
        return "Object" === SF && FF.constructor && (SF = FF.constructor.name), "Map" === SF || "Set" === SF ? Array.from(FF) : "Arguments" === SF || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(SF) ? uW(FF, WF) : void 0
      }
    }

    function uW(FF, WF) {
      (null == WF || WF > FF.length) && (WF = FF.length);
      for (var SF = 0, CF = new Array(WF); SF < WF; SF++) CF[SF] = FF[SF];
      return CF
    }

    function hW(FF, WF) {
      var SF = Object.keys(FF);
      if (Object.getOwnPropertySymbols) {
        var CF = Object.getOwnPropertySymbols(FF);
        WF && (CF = CF.filter((function(WF) {
          return Object.getOwnPropertyDescriptor(FF, WF).enumerable
        }))), SF.push.apply(SF, CF)
      }
      return SF
    }

    function bS(FF) {
      for (var WF = 1; WF < arguments.length; WF++) {
        var SF = null != arguments[WF] ? arguments[WF] : {};
        WF % 2 ? hW(Object(SF), !0).forEach((function(WF) {
          dW(FF, WF, SF[WF])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(FF, Object.getOwnPropertyDescriptors(SF)) : hW(Object(SF)).forEach((function(WF) {
          Object.defineProperty(FF, WF, Object.getOwnPropertyDescriptor(SF, WF))
        }))
      }
      return FF
    }

    function dW(FF, WF, SF) {
      return WF in FF ? Object.defineProperty(FF, WF, {
        value: SF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : FF[WF] = SF, FF
    }

    function PW(FF, WF) {
      if (null == FF) return {};
      var SF, CF, AF = function(FF, WF) {
        if (null == FF) return {};
        var SF, CF, AF = {},
          uF = Object.keys(FF);
        for (CF = 0; CF < uF.length; CF++) SF = uF[CF], WF.indexOf(SF) >= 0 || (AF[SF] = FF[SF]);
        return AF
      }(FF, WF);
      if (Object.getOwnPropertySymbols) {
        var uF = Object.getOwnPropertySymbols(FF);
        for (CF = 0; CF < uF.length; CF++) SF = uF[CF], WF.indexOf(SF) >= 0 || Object.prototype.propertyIsEnumerable.call(FF, SF) && (AF[SF] = FF[SF])
      }
      return AF
    }
    var RW = (0, CF.forwardRef)((function(FF, WF) {
      var SF = FF.children,
        AF = EW(PW(FF, pF)),
        uF = AF.open,
        hF = PW(AF, lF);
      return (0, CF.useImperativeHandle)(WF, (function() {
        return {
          open: uF
        }
      }), [uF]), CF.createElement(CF.Fragment, null, SF(bS(bS({}, hF), {}, {
        open: uF
      })))
    }));
    RW.displayName = "Dropzone";
    var iS = {
      disabled: !1,
      getFilesFromEvent: function(FF) {
        return hF(this, void 0, void 0, (function() {
          return bW(this, (function(WF) {
            return EF(FF) && EF(FF.dataTransfer) ? [2, gW(FF.dataTransfer, FF.type)] : function(FF) {
              return EF(FF) && EF(FF.target)
            }(FF) ? [2, QF(FF)] : Array.isArray(FF) && FF.every((function(FF) {
              return "getFile" in FF && "function" === typeof FF.getFile
            })) ? [2, rW(FF)] : [2, []]
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
    RW.defaultProps = iS, RW.propTypes = {
      children: uF().func,
      accept: uF().objectOf(uF().arrayOf(uF().string)),
      multiple: uF().bool,
      preventDropOnDocument: uF().bool,
      noClick: uF().bool,
      noKeyboard: uF().bool,
      noDrag: uF().bool,
      noDragEventsBubbling: uF().bool,
      minSize: uF().number,
      maxSize: uF().number,
      maxFiles: uF().number,
      disabled: uF().bool,
      getFilesFromEvent: uF().func,
      onFileDialogCancel: uF().func,
      onFileDialogOpen: uF().func,
      useFsAccessApi: uF().bool,
      autoFocus: uF().bool,
      onDragEnter: uF().func,
      onDragLeave: uF().func,
      onDragOver: uF().func,
      onDrop: uF().func,
      onDropAccepted: uF().func,
      onDropRejected: uF().func,
      onError: uF().func,
      validator: uF().func
    };
    var eW = {
      tSF: !1,
      isFileDialogActive: !1,
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1,
      acceptedFiles: [],
      fileRejections: []
    };

    function EW() {
      var FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        WF = bS(bS({}, iS), FF),
        SF = WF.accept,
        AF = WF.disabled,
        uF = WF.getFilesFromEvent,
        hF = WF.maxSize,
        bW = WF.minSize,
        dF = WF.multiple,
        PF = WF.maxFiles,
        RF = WF.onDragEnter,
        iW = WF.onDragLeave,
        eF = WF.onDragOver,
        EF = WF.onDrop,
        QF = WF.onDropAccepted,
        rW = WF.onDropRejected,
        gW = WF.onFileDialogCancel,
        tW = WF.onFileDialogOpen,
        TF = WF.useFsAccessApi,
        aW = WF.autoFocus,
        kW = WF.preventDropOnDocument,
        qW = WF.noClick,
        VF = WF.noKeyboard,
        NF = WF.noDrag,
        DF = WF.noDragEventsBubbling,
        LF = WF.onError,
        OF = WF.validator,
        YF = (0, CF.useMemo)((function() {
          return function(FF) {
            if (wF(FF)) return Object.entries(FF).reduce((function(FF, WF) {
              var SF = oF(WF, 2),
                CF = SF[0],
                AF = SF[1];
              return [].concat(mW(FF), [CF], mW(AF))
            }), []).filter((function(FF) {
              return vW(FF) || JF(FF)
            })).join(",")
          }(SF)
        }), [SF]),
        MF = (0, CF.useMemo)((function() {
          return function(FF) {
            return wF(FF) ? [{
              description: "Files",
              accept: Object.entries(FF).filter((function(FF) {
                var WF = oF(FF, 2),
                  SF = WF[0],
                  CF = WF[1],
                  AF = !0;
                return vW(SF) || (console.warn('Skipped "'.concat(SF, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), AF = !1), Array.isArray(CF) && CF.every(JF) || (console.warn('Skipped "'.concat(SF, '" because an invalid file extension was provided.')), AF = !1), AF
              })).reduce((function(FF, WF) {
                var SF = oF(WF, 2),
                  CF = SF[0],
                  AF = SF[1];
                return xW(xW({}, FF), {}, ZF({}, CF, AF))
              }), {})
            }] : FF
          }(SF)
        }), [SF]),
        cW = (0, CF.useMemo)((function() {
          return "function" === typeof tW ? tW : rS
        }), [tW]),
        GF = (0, CF.useMemo)((function() {
          return "function" === typeof gW ? gW : rS
        }), [gW]),
        zW = (0, CF.useRef)(null),
        IF = (0, CF.useRef)(null),
        fF = CW((0, CF.useReducer)(QW, eW), 2),
        yW = fF[0],
        sF = fF[1],
        pF = yW.tSF,
        lF = yW.isFileDialogActive,
        AW = (0, CF.useRef)("undefined" !== typeof window && window.isSecureContext && TF && "showOpenFilePicker" in window),
        uW = function() {
          !AW.current && lF && setTimeout((function() {
            IF.current && (IF.current.files.length || (sF({
              type: "closeDialog"
            }), GF()))
          }), 300)
        };
      (0, CF.useEffect)((function() {
        return window.addEventListener("focus", uW, !1),
          function() {
            window.removeEventListener("focus", uW, !1)
          }
      }), [IF, lF, GF, AW]);
      var hW = (0, CF.useRef)([]),
        RW = function(FF) {
          zW.current && zW.current.contains(FF.target) || (FF.preventDefault(), hW.current = [])
        };
      (0, CF.useEffect)((function() {
        return kW && (document.addEventListener("dragover", BF, !1), document.addEventListener("drop", RW, !1)),
          function() {
            kW && (document.removeEventListener("dragover", BF), document.removeEventListener("drop", RW))
          }
      }), [zW, kW]), (0, CF.useEffect)((function() {
        return !AF && aW && zW.current && zW.current.focus(),
          function() {}
      }), [zW, aW, AF]);
      var EW = (0, CF.useCallback)((function(FF) {
          LF ? LF(FF) : console.error(FF)
        }), [LF]),
        gS = (0, CF.useCallback)((function(FF) {
          FF.preventDefault(), FF.persist(), ZW(FF), hW.current = [].concat(SW(hW.current), [FF.target]), UF(FF) && Promise.resolve(uF(FF)).then((function(WF) {
            if (!XF(FF) || DF) {
              var SF = WF.length,
                CF = SF > 0 && function(FF) {
                  var WF = FF.files,
                    SF = FF.accept,
                    CF = FF.minSize,
                    AF = FF.maxSize,
                    uF = FF.multiple,
                    hF = FF.maxFiles,
                    bW = FF.validator;
                  return !(!uF && WF.length > 1 || uF && hF >= 1 && WF.length > hF) && WF.every((function(FF) {
                    var WF = oF(HF(FF, SF), 1)[0],
                      uF = oF(KF(FF, CF, AF), 1)[0],
                      hF = bW ? bW(FF) : null;
                    return WF && uF && !hF
                  }))
                }({
                  files: WF,
                  accept: YF,
                  minSize: bW,
                  maxSize: hF,
                  multiple: dF,
                  maxFiles: PF,
                  validator: OF
                });
              sF({
                isDragAccept: CF,
                isDragReject: SF > 0 && !CF,
                isDragActive: !0,
                type: "setDraggedFiles"
              }), RF && RF(FF)
            }
          })).catch((function(FF) {
            return EW(FF)
          }))
        }), [uF, RF, EW, DF, YF, bW, hF, dF, PF, OF]),
        tS = (0, CF.useCallback)((function(FF) {
          FF.preventDefault(), FF.persist(), ZW(FF);
          var WF = UF(FF);
          if (WF && FF.dataTransfer) try {
            FF.dataTransfer.dropEffect = "copy"
          } catch (SF) {}
          return WF && eF && eF(FF), !1
        }), [eF, DF]),
        TW = (0, CF.useCallback)((function(FF) {
          FF.preventDefault(), FF.persist(), ZW(FF);
          var WF = hW.current.filter((function(FF) {
              return zW.current && zW.current.contains(FF)
            })),
            SF = WF.indexOf(FF.target); - 1 !== SF && WF.splice(SF, 1), hW.current = WF, WF.length > 0 || (sF({
            type: "setDraggedFiles",
            isDragActive: !1,
            isDragAccept: !1,
            isDragReject: !1
          }), UF(FF) && iW && iW(FF))
        }), [zW, iW, DF]),
        aS = (0, CF.useCallback)((function(FF, WF) {
          var SF = [],
            CF = [];
          FF.forEach((function(FF) {
            var WF = CW(HF(FF, YF), 2),
              AF = WF[0],
              uF = WF[1],
              dF = CW(KF(FF, bW, hF), 2),
              PF = dF[0],
              RF = dF[1],
              iW = OF ? OF(FF) : null;
            if (AF && PF && !iW) SF.push(FF);
            else {
              var eF = [uF, RF];
              iW && (eF = eF.concat(iW)), CF.push({
                file: FF,
                errors: eF.filter((function(FF) {
                  return FF
                }))
              })
            }
          })), (!dF && SF.length > 1 || dF && PF >= 1 && SF.length > PF) && (SF.forEach((function(FF) {
            CF.push({
              file: FF,
              errors: [nF]
            })
          })), SF.splice(0)), sF({
            acceptedFiles: SF,
            fileRejections: CF,
            type: "setFiles"
          }), EF && EF(SF, CF, WF), CF.length > 0 && rW && rW(CF, WF), SF.length > 0 && QF && QF(SF, WF)
        }), [sF, dF, YF, bW, hF, PF, EF, QF, rW, OF]),
        kS = (0, CF.useCallback)((function(FF) {
          FF.preventDefault(), FF.persist(), ZW(FF), hW.current = [], UF(FF) && Promise.resolve(uF(FF)).then((function(WF) {
            XF(FF) && !DF || aS(WF, FF)
          })).catch((function(FF) {
            return EW(FF)
          })), sF({
            type: "reset"
          })
        }), [uF, aS, EW, DF]),
        qS = (0, CF.useCallback)((function() {
          if (AW.current) {
            sF({
              type: "openDialog"
            }), cW();
            var FF = {
              multiple: dF,
              types: MF
            };
            window.showOpenFilePicker(FF).then((function(FF) {
              return uF(FF)
            })).then((function(FF) {
              aS(FF, null), sF({
                type: "closeDialog"
              })
            })).catch((function(FF) {
              var WF;
              (WF = FF) instanceof DOMException && ("AbortError" === WF.name || WF.code === WF.ABORT_ERR) ? (GF(FF), sF({
                type: "closeDialog"
              })) : ! function(FF) {
                return FF instanceof DOMException && ("SecurityError" === FF.name || FF.code === FF.SECURITY_ERR)
              }(FF) ? EW(FF) : (AW.current = !1, IF.current ? (IF.current.value = null, IF.current.click()) : EW(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))
            }))
          } else IF.current && (sF({
            type: "openDialog"
          }), cW(), IF.current.value = null, IF.current.click())
        }), [sF, cW, GF, TF, aS, EW, MF, dF]),
        VW = (0, CF.useCallback)((function(FF) {
          zW.current && zW.current.isEqualNode(FF.target) && (" " !== FF.key && "Enter" !== FF.key && 32 !== FF.keyCode && 13 !== FF.keyCode || (FF.preventDefault(), qS()))
        }), [zW, qS]),
        NW = (0, CF.useCallback)((function() {
          sF({
            type: "focus"
          })
        }), []),
        DW = (0, CF.useCallback)((function() {
          sF({
            type: "blur"
          })
        }), []),
        LW = (0, CF.useCallback)((function() {
          qW || (! function() {
            var FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
            return function(FF) {
              return -1 !== FF.indexOf("MSIE") || -1 !== FF.indexOf("Trident/")
            }(FF) || function(FF) {
              return -1 !== FF.indexOf("Edge/")
            }(FF)
          }() ? qS() : setTimeout(qS, 0))
        }), [qW, qS]),
        mS = function(FF) {
          return AF ? null : FF
        },
        OW = function(FF) {
          return VF ? null : mS(FF)
        },
        xS = function(FF) {
          return NF ? null : mS(FF)
        },
        ZW = function(FF) {
          DF && FF.stopPropagation()
        },
        oW = (0, CF.useMemo)((function() {
          return function() {
            var FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              WF = FF.refKey,
              SF = void 0 === WF ? "ref" : WF,
              CF = FF.role,
              uF = FF.onKeyDown,
              hF = FF.onFocus,
              bW = FF.onBlur,
              dF = FF.onClick,
              PF = FF.onDragEnter,
              RF = FF.onDragOver,
              iW = FF.onDragLeave,
              eF = FF.onDrop,
              EF = PW(FF, FW);
            return bS(bS(dW({
              onKeyDown: OW(jW(uF, VW)),
              onFocus: OW(jW(hF, NW)),
              onBlur: OW(jW(bW, DW)),
              onClick: mS(jW(dF, LW)),
              onDragEnter: xS(jW(PF, gS)),
              onDragOver: xS(jW(RF, tS)),
              onDragLeave: xS(jW(iW, TW)),
              onDrop: xS(jW(eF, kS)),
              role: "string" === typeof CF && "" !== CF ? CF : "presentation"
            }, SF, zW), AF || VF ? {} : {
              tabIndex: 0
            }), EF)
          }
        }), [zW, VW, NW, DW, LW, gS, tS, TW, kS, VF, NF, AF]),
        YW = (0, CF.useCallback)((function(FF) {
          FF.stopPropagation()
        }), []),
        MW = (0, CF.useMemo)((function() {
          return function() {
            var FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              WF = FF.refKey,
              SF = void 0 === WF ? "ref" : WF,
              CF = FF.onChange,
              AF = FF.onClick,
              uF = PW(FF, WW);
            return bS(bS({}, dW({
              accept: YF,
              multiple: dF,
              type: "file",
              style: {
                display: "none"
              },
              onChange: mS(jW(CF, kS)),
              onClick: mS(jW(AF, YW)),
              tabIndex: -1
            }, SF, IF)), uF)
          }
        }), [IF, SF, dF, kS, AF]);
      return bS(bS({}, yW), {}, {
        tSF: pF && !AF,
        getRootProps: oW,
        getInputProps: MW,
        rootRef: zW,
        inputRef: IF,
        open: mS(qS)
      })
    }

    function QW(FF, WF) {
      switch (WF.type) {
        case "focus":
          return bS(bS({}, FF), {}, {
            tSF: !0
          });
        case "blur":
          return bS(bS({}, FF), {}, {
            tSF: !1
          });
        case "openDialog":
          return bS(bS({}, eW), {}, {
            isFileDialogActive: !0
          });
        case "closeDialog":
          return bS(bS({}, FF), {}, {
            isFileDialogActive: !1
          });
        case "setDraggedFiles":
          return bS(bS({}, FF), {}, {
            isDragActive: WF.isDragActive,
            isDragAccept: WF.isDragAccept,
            isDragReject: WF.isDragReject
          });
        case "setFiles":
          return bS(bS({}, FF), {}, {
            acceptedFiles: WF.acceptedFiles,
            fileRejections: WF.fileRejections
          });
        case "reset":
          return bS({}, eW);
        default:
          return FF
      }
    }

    function rS() {}
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);