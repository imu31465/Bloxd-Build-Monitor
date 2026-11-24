export const id = 107;
export const ids = [107];
export const modules = {
  5129: (SS, HS) => {
    HS.b = function(SS, HS) {
      if (SS && HS) {
        var gS = Array.isArray(HS) ? HS : HS.split(","),
          tS = SS.name || "",
          bS = (SS.type || "").toLowerCase(),
          XS = bS.replace(/\/.*$/, "");
        return gS.some((function(SS) {
          var HS = SS.trim().toLowerCase();
          return "." === HS.charAt(0) ? tS.toLowerCase().endsWith(HS) : HS.endsWith("/*") ? XS === HS.replace(/\/.*$/, "") : bS === HS
        }))
      }
      return !0
    }
  },
  5114: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => aH
    });
    var tS = gS(64),
      bS = gS(5116),
      XS = gS.n(bS);

    function xS(SS, HS, gS, tS) {
      return new(gS || (gS = Promise))((function(bS, XS) {
        function xS(SS) {
          try {
            qS(tS.next(SS))
          } catch (HS) {
            XS(HS)
          }
        }

        function NS(SS) {
          try {
            qS(tS.throw(SS))
          } catch (HS) {
            XS(HS)
          }
        }

        function qS(SS) {
          var HS;
          SS.done ? bS(SS.value) : (HS = SS.value, HS instanceof gS ? HS : new gS((function(SS) {
            SS(HS)
          }))).then(xS, NS)
        }
        qS((tS = tS.apply(SS, HS || [])).next())
      }))
    }

    function NS(SS, HS) {
      var gS, tS, bS, XS, xS = {
        label: 0,
        sent: function() {
          if (1 & bS[0]) throw bS[1];
          return bS[1]
        },
        trys: [],
        ops: []
      };
      return XS = {
        next: NS(0),
        throw: NS(1),
        return: NS(2)
      }, "function" === typeof Symbol && (XS[Symbol.iterator] = function() {
        return this
      }), XS;

      function NS(NS) {
        return function(qS) {
          return function(NS) {
            if (gS) throw new TypeError("Generator is already executing.");
            for (; XS && (XS = 0, NS[0] && (xS = 0)), xS;) try {
              if (gS = 1, tS && (bS = 2 & NS[0] ? tS.return : NS[0] ? tS.throw || ((bS = tS.return) && bS.call(tS), 0) : tS.next) && !(bS = bS.call(tS, NS[1])).done) return bS;
              switch (tS = 0, bS && (NS = [2 & NS[0], bS.value]), NS[0]) {
                case 0:
                case 1:
                  bS = NS;
                  break;
                case 4:
                  return xS.label++, {
                    value: NS[1],
                    done: !1
                  };
                case 5:
                  xS.label++, tS = NS[1], NS = [0];
                  continue;
                case 7:
                  NS = xS.ops.pop(), xS.trys.pop();
                  continue;
                default:
                  if (!(bS = (bS = xS.trys).length > 0 && bS[bS.length - 1]) && (6 === NS[0] || 2 === NS[0])) {
                    xS = 0;
                    continue
                  }
                  if (3 === NS[0] && (!bS || NS[1] > bS[0] && NS[1] < bS[3])) {
                    xS.label = NS[1];
                    break
                  }
                  if (6 === NS[0] && xS.label < bS[1]) {
                    xS.label = bS[1], bS = NS;
                    break
                  }
                  if (bS && xS.label < bS[2]) {
                    xS.label = bS[2], xS.ops.push(NS);
                    break
                  }
                  bS[2] && xS.ops.pop(), xS.trys.pop();
                  continue
              }
              NS = HS.call(SS, xS)
            } catch (qS) {
              NS = [6, qS], tS = 0
            } finally {
              gS = bS = 0
            }
            if (5 & NS[0]) throw NS[1];
            return {
              value: NS[0] ? NS[1] : void 0,
              done: !0
            }
          }([NS, qS])
        }
      }
    }
    Object.create;

    function qS(SS, HS) {
      var gS = "function" === typeof Symbol && SS[Symbol.iterator];
      if (!gS) return SS;
      var tS, bS, XS = gS.call(SS),
        xS = [];
      try {
        for (;
          (void 0 === HS || HS-- > 0) && !(tS = XS.next()).done;) xS.push(tS.value)
      } catch (NS) {
        bS = {
          error: NS
        }
      } finally {
        try {
          tS && !tS.done && (gS = XS.return) && gS.call(XS)
        } finally {
          if (bS) throw bS.error
        }
      }
      return xS
    }

    function uS(SS, HS, gS) {
      if (gS || 2 === arguments.length)
        for (var tS, bS = 0, XS = HS.length; bS < XS; bS++) !tS && bS in HS || (tS || (tS = Array.prototype.slice.call(HS, 0, bS)), tS[bS] = HS[bS]);
      return SS.concat(tS || Array.prototype.slice.call(HS))
    }
    Object.create;
    "function" === typeof SuppressedError && SuppressedError;
    var IS = new Map([
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
      ["Ju", "application/vnd.ms-outlook"]
    ]);

    function fS(SS, HS) {
      var gS = function(SS) {
        var HS = SS.name;
        if (HS && -1 !== HS.lastIndexOf(".") && !SS.type) {
          var gS = HS.split(".").pop().toLowerCase(),
            tS = IS.get(gS);
          tS && Object.defineProperty(SS, "type", {
            value: tS,
            writable: !1,
            configurable: !1,
            enumerable: !0
          })
        }
        return SS
      }(SS);
      if ("string" !== typeof gS.path) {
        var tS = SS.webkitRelativePath;
        Object.defineProperty(gS, "path", {
          value: "string" === typeof HS ? HS : "string" === typeof tS && tS.length > 0 ? tS : SS.name,
          writable: !1,
          configurable: !1,
          enumerable: !0
        })
      }
      return gS
    }
    var kS = [".DS_Store", "Thumbs.db"];

    function aS(SS) {
      return "object" === typeof SS && null !== SS
    }

    function KS(SS) {
      return nS(SS.target.files).map((function(SS) {
        return fS(SS)
      }))
    }

    function jS(SS) {
      return xS(this, void 0, void 0, (function() {
        return NS(this, (function(HS) {
          switch (HS.label) {
            case 0:
              return [4, Promise.all(SS.map((function(SS) {
                return SS.getFile()
              })))];
            case 1:
              return [2, HS.sent().map((function(SS) {
                return fS(SS)
              }))]
          }
        }))
      }))
    }

    function GS(SS, HS) {
      return xS(this, void 0, void 0, (function() {
        var gS;
        return NS(this, (function(tS) {
          switch (tS.label) {
            case 0:
              return SS.items ? (gS = nS(SS.items).filter((function(SS) {
                return "file" === SS.kind
              })), "drop" !== HS ? [2, gS] : [4, Promise.all(gS.map(PS))]) : [3, 2];
            case 1:
              return [2, CS(QS(tS.sent()))];
            case 2:
              return [2, CS(nS(SS.files).map((function(SS) {
                return fS(SS)
              })))]
          }
        }))
      }))
    }

    function CS(SS) {
      return SS.filter((function(SS) {
        return -1 === kS.indexOf(SS.name)
      }))
    }

    function nS(SS) {
      if (null === SS) return [];
      for (var HS = [], gS = 0; gS < SS.length; gS++) {
        var tS = SS[gS];
        HS.push(tS)
      }
      return HS
    }

    function PS(SS) {
      if ("function" !== typeof SS.webkitGetAsEntry) return DS(SS);
      var HS = SS.webkitGetAsEntry();
      return HS && HS.isDirectory ? hS(HS) : DS(SS)
    }

    function QS(SS) {
      return SS.reduce((function(SS, HS) {
        return uS(uS([], qS(SS), !1), qS(Array.isArray(HS) ? QS(HS) : [HS]), !1)
      }), [])
    }

    function DS(SS) {
      var HS = SS.getAsFile();
      if (!HS) return Promise.reject("".concat(SS, " is not a File"));
      var gS = fS(HS);
      return Promise.resolve(gS)
    }

    function wS(SS) {
      return xS(this, void 0, void 0, (function() {
        return NS(this, (function(HS) {
          return [2, SS.isDirectory ? hS(SS) : ZS(SS)]
        }))
      }))
    }

    function hS(SS) {
      var HS = SS.createReader();
      return new Promise((function(SS, gS) {
        var tS = [];
        ! function bS() {
          var XS = this;
          HS.readEntries((function(HS) {
            return xS(XS, void 0, void 0, (function() {
              var XS, xS, qS;
              return NS(this, (function(NS) {
                switch (NS.label) {
                  case 0:
                    if (HS.length) return [3, 5];
                    NS.label = 1;
                  case 1:
                    return NS.trys.push([1, 3, , 4]), [4, Promise.all(tS)];
                  case 2:
                    return XS = NS.sent(), SS(XS), [3, 4];
                  case 3:
                    return xS = NS.sent(), gS(xS), [3, 4];
                  case 4:
                    return [3, 6];
                  case 5:
                    qS = Promise.all(HS.map(wS)), tS.push(qS), bS(), NS.label = 6;
                  case 6:
                    return [2]
                }
              }))
            }))
          }), (function(SS) {
            gS(SS)
          }))
        }()
      }))
    }

    function ZS(SS) {
      return xS(this, void 0, void 0, (function() {
        return NS(this, (function(HS) {
          return [2, new Promise((function(HS, gS) {
            SS.file((function(gS) {
              var tS = fS(gS, SS.fullPath);
              HS(tS)
            }), (function(SS) {
              gS(SS)
            }))
          }))]
        }))
      }))
    }
    var JS = gS(5129);

    function OS(SS) {
      return function(SS) {
        if (Array.isArray(SS)) return YS(SS)
      }(SS) || function(SS) {
        if ("undefined" !== typeof Symbol && null != SS[Symbol.iterator] || null != SS["@@iterator"]) return Array.from(SS)
      }(SS) || LS(SS) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function dS(SS, HS) {
      var gS = Object.keys(SS);
      if (Object.getOwnPropertySymbols) {
        var tS = Object.getOwnPropertySymbols(SS);
        HS && (tS = tS.filter((function(HS) {
          return Object.getOwnPropertyDescriptor(SS, HS).enumerable
        }))), gS.push.apply(gS, tS)
      }
      return gS
    }

    function cS(SS) {
      for (var HS = 1; HS < arguments.length; HS++) {
        var gS = null != arguments[HS] ? arguments[HS] : {};
        HS % 2 ? dS(Object(gS), !0).forEach((function(HS) {
          vS(SS, HS, gS[HS])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(SS, Object.getOwnPropertyDescriptors(gS)) : dS(Object(gS)).forEach((function(HS) {
          Object.defineProperty(SS, HS, Object.getOwnPropertyDescriptor(gS, HS))
        }))
      }
      return SS
    }

    function vS(SS, HS, gS) {
      return HS in SS ? Object.defineProperty(SS, HS, {
        value: gS,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : SS[HS] = gS, SS
    }

    function ES(SS, HS) {
      return function(SS) {
        if (Array.isArray(SS)) return SS
      }(SS) || function(SS, HS) {
        var gS = null == SS ? null : "undefined" !== typeof Symbol && SS[Symbol.iterator] || SS["@@iterator"];
        if (null == gS) return;
        var tS, bS, XS = [],
          xS = !0,
          NS = !1;
        try {
          for (gS = gS.call(SS); !(xS = (tS = gS.next()).done) && (XS.push(tS.value), !HS || XS.length !== HS); xS = !0);
        } catch (qS) {
          NS = !0, bS = qS
        } finally {
          try {
            xS || null == gS.return || gS.return()
          } finally {
            if (NS) throw bS
          }
        }
        return XS
      }(SS, HS) || LS(SS, HS) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function LS(SS, HS) {
      if (SS) {
        if ("string" === typeof SS) return YS(SS, HS);
        var gS = Object.prototype.toString.call(SS).slice(8, -1);
        return "Object" === gS && SS.constructor && (gS = SS.constructor.name), "Map" === gS || "Set" === gS ? Array.from(SS) : "Arguments" === gS || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gS) ? YS(SS, HS) : void 0
      }
    }

    function YS(SS, HS) {
      (null == HS || HS > SS.length) && (HS = SS.length);
      for (var gS = 0, tS = new Array(HS); gS < HS; gS++) tS[gS] = SS[gS];
      return tS
    }
    var AS = "file-invalid-type",
      yS = "file-too-large",
      VS = "file-too-small",
      iS = "too-many-files",
      WS = function(SS) {
        SS = Array.isArray(SS) && 1 === SS.length ? SS[0] : SS;
        var HS = Array.isArray(SS) ? "one of ".concat(SS.join(", ")) : SS;
        return {
          code: AS,
          message: "File type must be ".concat(HS)
        }
      },
      zS = function(SS) {
        return {
          code: yS,
          message: "File is larger than ".concat(SS, " ").concat(1 === SS ? "byte" : "bytes")
        }
      },
      US = function(SS) {
        return {
          code: VS,
          message: "File is smaller than ".concat(SS, " ").concat(1 === SS ? "byte" : "bytes")
        }
      },
      pS = {
        code: iS,
        message: "Too many files"
      };

    function sS(SS, HS) {
      var gS = "application/x-moz-file" === SS.type || (0, JS.b)(SS, HS);
      return [gS, gS ? null : WS(HS)]
    }

    function BS(SS, HS, gS) {
      if (MS(SS.size))
        if (MS(HS) && MS(gS)) {
          if (SS.size > gS) return [!1, zS(gS)];
          if (SS.size < HS) return [!1, US(HS)]
        } else {
          if (MS(HS) && SS.size < HS) return [!1, US(HS)];
          if (MS(gS) && SS.size > gS) return [!1, zS(gS)]
        } return [!0, null]
    }

    function MS(SS) {
      return void 0 !== SS && null !== SS
    }

    function FS(SS) {
      return "function" === typeof SS.isPropagationStopped ? SS.isPropagationStopped() : "undefined" !== typeof SS.cancelBubble && SS.cancelBubble
    }

    function RS(SS) {
      return SS.dataTransfer ? Array.prototype.some.call(SS.dataTransfer.types, (function(SS) {
        return "Files" === SS || "application/x-moz-file" === SS
      })) : !!SS.target && !!SS.target.files
    }

    function TS(SS) {
      SS.preventDefault()
    }

    function oS() {
      for (var SS = arguments.length, HS = new Array(SS), gS = 0; gS < SS; gS++) HS[gS] = arguments[gS];
      return function(SS) {
        for (var gS = arguments.length, tS = new Array(gS > 1 ? gS - 1 : 0), bS = 1; bS < gS; bS++) tS[bS - 1] = arguments[bS];
        return HS.some((function(HS) {
          return !FS(SS) && HS && HS.apply(void 0, [SS].concat(tS)), FS(SS)
        }))
      }
    }

    function lS(SS) {
      return "audio/*" === SS || "video/*" === SS || "image/*" === SS || "text/*" === SS || /\w+\/[-+.\w]+/g.test(SS)
    }

    function mS(SS) {
      return /^.*\.[\w]+$/.test(SS)
    }
    var eS = ["children"],
      rS = ["open"],
      SH = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
      HH = ["refKey", "onChange", "onClick"];

    function gH(SS) {
      return function(SS) {
        if (Array.isArray(SS)) return XH(SS)
      }(SS) || function(SS) {
        if ("undefined" !== typeof Symbol && null != SS[Symbol.iterator] || null != SS["@@iterator"]) return Array.from(SS)
      }(SS) || bH(SS) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function tH(SS, HS) {
      return function(SS) {
        if (Array.isArray(SS)) return SS
      }(SS) || function(SS, HS) {
        var gS = null == SS ? null : "undefined" !== typeof Symbol && SS[Symbol.iterator] || SS["@@iterator"];
        if (null == gS) return;
        var tS, bS, XS = [],
          xS = !0,
          NS = !1;
        try {
          for (gS = gS.call(SS); !(xS = (tS = gS.next()).done) && (XS.push(tS.value), !HS || XS.length !== HS); xS = !0);
        } catch (qS) {
          NS = !0, bS = qS
        } finally {
          try {
            xS || null == gS.return || gS.return()
          } finally {
            if (NS) throw bS
          }
        }
        return XS
      }(SS, HS) || bH(SS, HS) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function bH(SS, HS) {
      if (SS) {
        if ("string" === typeof SS) return XH(SS, HS);
        var gS = Object.prototype.toString.call(SS).slice(8, -1);
        return "Object" === gS && SS.constructor && (gS = SS.constructor.name), "Map" === gS || "Set" === gS ? Array.from(SS) : "Arguments" === gS || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gS) ? XH(SS, HS) : void 0
      }
    }

    function XH(SS, HS) {
      (null == HS || HS > SS.length) && (HS = SS.length);
      for (var gS = 0, tS = new Array(HS); gS < HS; gS++) tS[gS] = SS[gS];
      return tS
    }

    function xH(SS, HS) {
      var gS = Object.keys(SS);
      if (Object.getOwnPropertySymbols) {
        var tS = Object.getOwnPropertySymbols(SS);
        HS && (tS = tS.filter((function(HS) {
          return Object.getOwnPropertyDescriptor(SS, HS).enumerable
        }))), gS.push.apply(gS, tS)
      }
      return gS
    }

    function NH(SS) {
      for (var HS = 1; HS < arguments.length; HS++) {
        var gS = null != arguments[HS] ? arguments[HS] : {};
        HS % 2 ? xH(Object(gS), !0).forEach((function(HS) {
          qH(SS, HS, gS[HS])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(SS, Object.getOwnPropertyDescriptors(gS)) : xH(Object(gS)).forEach((function(HS) {
          Object.defineProperty(SS, HS, Object.getOwnPropertyDescriptor(gS, HS))
        }))
      }
      return SS
    }

    function qH(SS, HS, gS) {
      return HS in SS ? Object.defineProperty(SS, HS, {
        value: gS,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : SS[HS] = gS, SS
    }

    function uH(SS, HS) {
      if (null == SS) return {};
      var gS, tS, bS = function(SS, HS) {
        if (null == SS) return {};
        var gS, tS, bS = {},
          XS = Object.keys(SS);
        for (tS = 0; tS < XS.length; tS++) gS = XS[tS], HS.indexOf(gS) >= 0 || (bS[gS] = SS[gS]);
        return bS
      }(SS, HS);
      if (Object.getOwnPropertySymbols) {
        var XS = Object.getOwnPropertySymbols(SS);
        for (tS = 0; tS < XS.length; tS++) gS = XS[tS], HS.indexOf(gS) >= 0 || Object.prototype.propertyIsEnumerable.call(SS, gS) && (bS[gS] = SS[gS])
      }
      return bS
    }
    var IH = (0, tS.forwardRef)((function(SS, HS) {
      var gS = SS.children,
        bS = aH(uH(SS, eS)),
        XS = bS.open,
        xS = uH(bS, rS);
      return (0, tS.useImperativeHandle)(HS, (function() {
        return {
          open: XS
        }
      }), [XS]), tS.createElement(tS.Fragment, null, gS(NH(NH({}, xS), {}, {
        open: XS
      })))
    }));
    IH.displayName = "Dropzone";
    var fH = {
      disabled: !1,
      getFilesFromEvent: function(SS) {
        return xS(this, void 0, void 0, (function() {
          return NS(this, (function(HS) {
            return aS(SS) && aS(SS.dataTransfer) ? [2, GS(SS.dataTransfer, SS.type)] : function(SS) {
              return aS(SS) && aS(SS.target)
            }(SS) ? [2, KS(SS)] : Array.isArray(SS) && SS.every((function(SS) {
              return "getFile" in SS && "function" === typeof SS.getFile
            })) ? [2, jS(SS)] : [2, []]
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
    IH.defaultProps = fH, IH.propTypes = {
      children: XS().func,
      accept: XS().objectOf(XS().arrayOf(XS().string)),
      multiple: XS().bool,
      preventDropOnDocument: XS().bool,
      noClick: XS().bool,
      noKeyboard: XS().bool,
      noDrag: XS().bool,
      noDragEventsBubbling: XS().bool,
      minSize: XS().number,
      maxSize: XS().number,
      maxFiles: XS().number,
      disabled: XS().bool,
      getFilesFromEvent: XS().func,
      onFileDialogCancel: XS().func,
      onFileDialogOpen: XS().func,
      useFsAccessApi: XS().bool,
      autoFocus: XS().bool,
      onDragEnter: XS().func,
      onDragLeave: XS().func,
      onDragOver: XS().func,
      onDrop: XS().func,
      onDropAccepted: XS().func,
      onDropRejected: XS().func,
      onError: XS().func,
      validator: XS().func
    };
    var kH = {
      gL: !1,
      isFileDialogActive: !1,
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1,
      acceptedFiles: [],
      fileRejections: []
    };

    function aH() {
      var SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        HS = NH(NH({}, fH), SS),
        gS = HS.accept,
        bS = HS.disabled,
        XS = HS.getFilesFromEvent,
        xS = HS.maxSize,
        NS = HS.minSize,
        qS = HS.multiple,
        uS = HS.maxFiles,
        IS = HS.onDragEnter,
        fS = HS.onDragLeave,
        kS = HS.onDragOver,
        aS = HS.onDrop,
        KS = HS.onDropAccepted,
        jS = HS.onDropRejected,
        GS = HS.onFileDialogCancel,
        CS = HS.onFileDialogOpen,
        nS = HS.useFsAccessApi,
        PS = HS.autoFocus,
        QS = HS.preventDropOnDocument,
        DS = HS.noClick,
        wS = HS.noKeyboard,
        hS = HS.noDrag,
        ZS = HS.noDragEventsBubbling,
        JS = HS.onError,
        dS = HS.validator,
        LS = (0, tS.useMemo)((function() {
          return function(SS) {
            if (MS(SS)) return Object.entries(SS).reduce((function(SS, HS) {
              var gS = ES(HS, 2),
                tS = gS[0],
                bS = gS[1];
              return [].concat(OS(SS), [tS], OS(bS))
            }), []).filter((function(SS) {
              return lS(SS) || mS(SS)
            })).join(",")
          }(gS)
        }), [gS]),
        YS = (0, tS.useMemo)((function() {
          return function(SS) {
            return MS(SS) ? [{
              description: "Files",
              accept: Object.entries(SS).filter((function(SS) {
                var HS = ES(SS, 2),
                  gS = HS[0],
                  tS = HS[1],
                  bS = !0;
                return lS(gS) || (console.warn('Skipped "'.concat(gS, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), bS = !1), Array.isArray(tS) && tS.every(mS) || (console.warn('Skipped "'.concat(gS, '" because an invalid file extension was provided.')), bS = !1), bS
              })).reduce((function(SS, HS) {
                var gS = ES(HS, 2),
                  tS = gS[0],
                  bS = gS[1];
                return cS(cS({}, SS), {}, vS({}, tS, bS))
              }), {})
            }] : SS
          }(gS)
        }), [gS]),
        AS = (0, tS.useMemo)((function() {
          return "function" === typeof CS ? CS : jH
        }), [CS]),
        yS = (0, tS.useMemo)((function() {
          return "function" === typeof GS ? GS : jH
        }), [GS]),
        VS = (0, tS.useRef)(null),
        iS = (0, tS.useRef)(null),
        WS = tH((0, tS.useReducer)(KH, kH), 2),
        zS = WS[0],
        US = WS[1],
        eS = zS.gL,
        rS = zS.isFileDialogActive,
        bH = (0, tS.useRef)("undefined" !== typeof window && window.isSecureContext && nS && "showOpenFilePicker" in window),
        XH = function() {
          !bH.current && rS && setTimeout((function() {
            iS.current && (iS.current.files.length || (US({
              type: "closeDialog"
            }), yS()))
          }), 300)
        };
      (0, tS.useEffect)((function() {
        return window.addEventListener("focus", XH, !1),
          function() {
            window.removeEventListener("focus", XH, !1)
          }
      }), [iS, rS, yS, bH]);
      var xH = (0, tS.useRef)([]),
        IH = function(SS) {
          VS.current && VS.current.contains(SS.target) || (SS.preventDefault(), xH.current = [])
        };
      (0, tS.useEffect)((function() {
        return QS && (document.addEventListener("dragover", TS, !1), document.addEventListener("drop", IH, !1)),
          function() {
            QS && (document.removeEventListener("dragover", TS), document.removeEventListener("drop", IH))
          }
      }), [VS, QS]), (0, tS.useEffect)((function() {
        return !bS && PS && VS.current && VS.current.focus(),
          function() {}
      }), [VS, PS, bS]);
      var aH = (0, tS.useCallback)((function(SS) {
          JS ? JS(SS) : console.error(SS)
        }), [JS]),
        GH = (0, tS.useCallback)((function(SS) {
          SS.preventDefault(), SS.persist(), vH(SS), xH.current = [].concat(gH(xH.current), [SS.target]), RS(SS) && Promise.resolve(XS(SS)).then((function(HS) {
            if (!FS(SS) || ZS) {
              var gS = HS.length,
                tS = gS > 0 && function(SS) {
                  var HS = SS.files,
                    gS = SS.accept,
                    tS = SS.minSize,
                    bS = SS.maxSize,
                    XS = SS.multiple,
                    xS = SS.maxFiles,
                    NS = SS.validator;
                  return !(!XS && HS.length > 1 || XS && xS >= 1 && HS.length > xS) && HS.every((function(SS) {
                    var HS = ES(sS(SS, gS), 1)[0],
                      XS = ES(BS(SS, tS, bS), 1)[0],
                      xS = NS ? NS(SS) : null;
                    return HS && XS && !xS
                  }))
                }({
                  files: HS,
                  accept: LS,
                  minSize: NS,
                  maxSize: xS,
                  multiple: qS,
                  maxFiles: uS,
                  validator: dS
                });
              US({
                isDragAccept: tS,
                isDragReject: gS > 0 && !tS,
                isDragActive: !0,
                type: "setDraggedFiles"
              }), IS && IS(SS)
            }
          })).catch((function(SS) {
            return aH(SS)
          }))
        }), [XS, IS, aH, ZS, LS, NS, xS, qS, uS, dS]),
        CH = (0, tS.useCallback)((function(SS) {
          SS.preventDefault(), SS.persist(), vH(SS);
          var HS = RS(SS);
          if (HS && SS.dataTransfer) try {
            SS.dataTransfer.dropEffect = "copy"
          } catch (gS) {}
          return HS && kS && kS(SS), !1
        }), [kS, ZS]),
        nH = (0, tS.useCallback)((function(SS) {
          SS.preventDefault(), SS.persist(), vH(SS);
          var HS = xH.current.filter((function(SS) {
              return VS.current && VS.current.contains(SS)
            })),
            gS = HS.indexOf(SS.target); - 1 !== gS && HS.splice(gS, 1), xH.current = HS, HS.length > 0 || (US({
            type: "setDraggedFiles",
            isDragActive: !1,
            isDragAccept: !1,
            isDragReject: !1
          }), RS(SS) && fS && fS(SS))
        }), [VS, fS, ZS]),
        PH = (0, tS.useCallback)((function(SS, HS) {
          var gS = [],
            tS = [];
          SS.forEach((function(SS) {
            var HS = tH(sS(SS, LS), 2),
              bS = HS[0],
              XS = HS[1],
              qS = tH(BS(SS, NS, xS), 2),
              uS = qS[0],
              IS = qS[1],
              fS = dS ? dS(SS) : null;
            if (bS && uS && !fS) gS.push(SS);
            else {
              var kS = [XS, IS];
              fS && (kS = kS.concat(fS)), tS.push({
                file: SS,
                errors: kS.filter((function(SS) {
                  return SS
                }))
              })
            }
          })), (!qS && gS.length > 1 || qS && uS >= 1 && gS.length > uS) && (gS.forEach((function(SS) {
            tS.push({
              file: SS,
              errors: [pS]
            })
          })), gS.splice(0)), US({
            acceptedFiles: gS,
            fileRejections: tS,
            type: "setFiles"
          }), aS && aS(gS, tS, HS), tS.length > 0 && jS && jS(tS, HS), gS.length > 0 && KS && KS(gS, HS)
        }), [US, qS, LS, NS, xS, uS, aS, KS, jS, dS]),
        QH = (0, tS.useCallback)((function(SS) {
          SS.preventDefault(), SS.persist(), vH(SS), xH.current = [], RS(SS) && Promise.resolve(XS(SS)).then((function(HS) {
            FS(SS) && !ZS || PH(HS, SS)
          })).catch((function(SS) {
            return aH(SS)
          })), US({
            type: "reset"
          })
        }), [XS, PH, aH, ZS]),
        DH = (0, tS.useCallback)((function() {
          if (bH.current) {
            US({
              type: "openDialog"
            }), AS();
            var SS = {
              multiple: qS,
              types: YS
            };
            window.showOpenFilePicker(SS).then((function(SS) {
              return XS(SS)
            })).then((function(SS) {
              PH(SS, null), US({
                type: "closeDialog"
              })
            })).catch((function(SS) {
              var HS;
              (HS = SS) instanceof DOMException && ("AbortError" === HS.name || HS.code === HS.ABORT_ERR) ? (yS(SS), US({
                type: "closeDialog"
              })) : ! function(SS) {
                return SS instanceof DOMException && ("SecurityError" === SS.name || SS.code === SS.SECURITY_ERR)
              }(SS) ? aH(SS) : (bH.current = !1, iS.current ? (iS.current.value = null, iS.current.click()) : aH(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))
            }))
          } else iS.current && (US({
            type: "openDialog"
          }), AS(), iS.current.value = null, iS.current.click())
        }), [US, AS, yS, nS, PH, aH, YS, qS]),
        wH = (0, tS.useCallback)((function(SS) {
          VS.current && VS.current.isEqualNode(SS.target) && (" " !== SS.key && "Enter" !== SS.key && 32 !== SS.keyCode && 13 !== SS.keyCode || (SS.preventDefault(), DH()))
        }), [VS, DH]),
        hH = (0, tS.useCallback)((function() {
          US({
            type: "focus"
          })
        }), []),
        ZH = (0, tS.useCallback)((function() {
          US({
            type: "blur"
          })
        }), []),
        JH = (0, tS.useCallback)((function() {
          DS || (! function() {
            var SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
            return function(SS) {
              return -1 !== SS.indexOf("MSIE") || -1 !== SS.indexOf("Trident/")
            }(SS) || function(SS) {
              return -1 !== SS.indexOf("Edge/")
            }(SS)
          }() ? DH() : setTimeout(DH, 0))
        }), [DS, DH]),
        OH = function(SS) {
          return bS ? null : SS
        },
        dH = function(SS) {
          return wS ? null : OH(SS)
        },
        cH = function(SS) {
          return hS ? null : OH(SS)
        },
        vH = function(SS) {
          ZS && SS.stopPropagation()
        },
        EH = (0, tS.useMemo)((function() {
          return function() {
            var SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              HS = SS.refKey,
              gS = void 0 === HS ? "ref" : HS,
              tS = SS.role,
              XS = SS.onKeyDown,
              xS = SS.onFocus,
              NS = SS.onBlur,
              qS = SS.onClick,
              uS = SS.onDragEnter,
              IS = SS.onDragOver,
              fS = SS.onDragLeave,
              kS = SS.onDrop,
              aS = uH(SS, SH);
            return NH(NH(qH({
              onKeyDown: dH(oS(XS, wH)),
              onFocus: dH(oS(xS, hH)),
              onBlur: dH(oS(NS, ZH)),
              onClick: OH(oS(qS, JH)),
              onDragEnter: cH(oS(uS, GH)),
              onDragOver: cH(oS(IS, CH)),
              onDragLeave: cH(oS(fS, nH)),
              onDrop: cH(oS(kS, QH)),
              role: "string" === typeof tS && "" !== tS ? tS : "presentation"
            }, gS, VS), bS || wS ? {} : {
              tabIndex: 0
            }), aS)
          }
        }), [VS, wH, hH, ZH, JH, GH, CH, nH, QH, wS, hS, bS]),
        LH = (0, tS.useCallback)((function(SS) {
          SS.stopPropagation()
        }), []),
        YH = (0, tS.useMemo)((function() {
          return function() {
            var SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              HS = SS.refKey,
              gS = void 0 === HS ? "ref" : HS,
              tS = SS.onChange,
              bS = SS.onClick,
              XS = uH(SS, HH);
            return NH(NH({}, qH({
              accept: LS,
              multiple: qS,
              type: "file",
              style: {
                display: "none"
              },
              onChange: OH(oS(tS, QH)),
              onClick: OH(oS(bS, LH)),
              tabIndex: -1
            }, gS, iS)), XS)
          }
        }), [iS, gS, qS, QH, bS]);
      return NH(NH({}, zS), {}, {
        gL: eS && !bS,
        getRootProps: EH,
        getInputProps: YH,
        rootRef: VS,
        inputRef: iS,
        open: OH(DH)
      })
    }

    function KH(SS, HS) {
      switch (HS.type) {
        case "focus":
          return NH(NH({}, SS), {}, {
            gL: !0
          });
        case "blur":
          return NH(NH({}, SS), {}, {
            gL: !1
          });
        case "openDialog":
          return NH(NH({}, kH), {}, {
            isFileDialogActive: !0
          });
        case "closeDialog":
          return NH(NH({}, SS), {}, {
            isFileDialogActive: !1
          });
        case "setDraggedFiles":
          return NH(NH({}, SS), {}, {
            isDragActive: HS.isDragActive,
            isDragAccept: HS.isDragAccept,
            isDragReject: HS.isDragReject
          });
        case "setFiles":
          return NH(NH({}, SS), {}, {
            acceptedFiles: HS.acceptedFiles,
            fileRejections: HS.fileRejections
          });
        case "reset":
          return NH({}, kH);
        default:
          return SS
      }
    }

    function jH() {}
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);