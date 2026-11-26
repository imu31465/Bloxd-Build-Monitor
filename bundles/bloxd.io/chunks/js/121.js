export const id = 121;
export const ids = [121];
export const modules = {
  5478: (VV, eV) => {
    eV.b = function(VV, eV) {
      if (VV && eV) {
        var xV = Array.isArray(eV) ? eV : eV.split(","),
          JV = VV.name || "",
          YV = (VV.type || "").toLowerCase(),
          UV = YV.replace(/\/.*$/, "");
        return xV.some((function(VV) {
          var eV = VV.trim().toLowerCase();
          return "." === eV.charAt(0) ? JV.toLowerCase().endsWith(eV) : eV.endsWith("/*") ? UV === eV.replace(/\/.*$/, "") : YV === eV
        }))
      }
      return !0
    }
  },
  5448: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => re
    });
    var JV = xV(62),
      YV = xV(5453),
      UV = xV.n(YV);

    function yV(VV, eV, xV, JV) {
      return new(xV || (xV = Promise))((function(YV, UV) {
        function yV(VV) {
          try {
            QV(JV.next(VV))
          } catch (eV) {
            UV(eV)
          }
        }

        function pV(VV) {
          try {
            QV(JV.throw(VV))
          } catch (eV) {
            UV(eV)
          }
        }

        function QV(VV) {
          var eV;
          VV.done ? YV(VV.value) : (eV = VV.value, eV instanceof xV ? eV : new xV((function(VV) {
            VV(eV)
          }))).then(yV, pV)
        }
        QV((JV = JV.apply(VV, eV || [])).next())
      }))
    }

    function pV(VV, eV) {
      var xV, JV, YV, UV, yV = {
        label: 0,
        sent: function() {
          if (1 & YV[0]) throw YV[1];
          return YV[1]
        },
        trys: [],
        ops: []
      };
      return UV = {
        next: pV(0),
        throw: pV(1),
        return: pV(2)
      }, "function" === typeof Symbol && (UV[Symbol.iterator] = function() {
        return this
      }), UV;

      function pV(pV) {
        return function(QV) {
          return function(pV) {
            if (xV) throw new TypeError("Generator is already executing.");
            for (; UV && (UV = 0, pV[0] && (yV = 0)), yV;) try {
              if (xV = 1, JV && (YV = 2 & pV[0] ? JV.return : pV[0] ? JV.throw || ((YV = JV.return) && YV.call(JV), 0) : JV.next) && !(YV = YV.call(JV, pV[1])).done) return YV;
              switch (JV = 0, YV && (pV = [2 & pV[0], YV.value]), pV[0]) {
                case 0:
                case 1:
                  YV = pV;
                  break;
                case 4:
                  return yV.label++, {
                    value: pV[1],
                    done: !1
                  };
                case 5:
                  yV.label++, JV = pV[1], pV = [0];
                  continue;
                case 7:
                  pV = yV.ops.pop(), yV.trys.pop();
                  continue;
                default:
                  if (!(YV = (YV = yV.trys).length > 0 && YV[YV.length - 1]) && (6 === pV[0] || 2 === pV[0])) {
                    yV = 0;
                    continue
                  }
                  if (3 === pV[0] && (!YV || pV[1] > YV[0] && pV[1] < YV[3])) {
                    yV.label = pV[1];
                    break
                  }
                  if (6 === pV[0] && yV.label < YV[1]) {
                    yV.label = YV[1], YV = pV;
                    break
                  }
                  if (YV && yV.label < YV[2]) {
                    yV.label = YV[2], yV.ops.push(pV);
                    break
                  }
                  YV[2] && yV.ops.pop(), yV.trys.pop();
                  continue
              }
              pV = eV.call(VV, yV)
            } catch (QV) {
              pV = [6, QV], JV = 0
            } finally {
              xV = YV = 0
            }
            if (5 & pV[0]) throw pV[1];
            return {
              value: pV[0] ? pV[1] : void 0,
              done: !0
            }
          }([pV, QV])
        }
      }
    }
    Object.create;

    function QV(VV, eV) {
      var xV = "function" === typeof Symbol && VV[Symbol.iterator];
      if (!xV) return VV;
      var JV, YV, UV = xV.call(VV),
        yV = [];
      try {
        for (;
          (void 0 === eV || eV-- > 0) && !(JV = UV.next()).done;) yV.push(JV.value)
      } catch (pV) {
        YV = {
          error: pV
        }
      } finally {
        try {
          JV && !JV.done && (xV = UV.return) && xV.call(UV)
        } finally {
          if (YV) throw YV.error
        }
      }
      return yV
    }

    function nV(VV, eV, xV) {
      if (xV || 2 === arguments.length)
        for (var JV, YV = 0, UV = eV.length; YV < UV; YV++) !JV && YV in eV || (JV || (JV = Array.prototype.slice.call(eV, 0, YV)), JV[YV] = eV[YV]);
      return VV.concat(JV || Array.prototype.slice.call(eV))
    }
    Object.create;
    "function" === typeof SuppressedError && SuppressedError;
    var wV = new Map([
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
      ["yZ", "application/vnd.ms-outlook"]
    ]);

    function ZV(VV, eV) {
      var xV = function(VV) {
        var eV = VV.name;
        if (eV && -1 !== eV.lastIndexOf(".") && !VV.type) {
          var xV = eV.split(".").pop().toLowerCase(),
            JV = wV.get(xV);
          JV && Object.defineProperty(VV, "type", {
            value: JV,
            writable: !1,
            configurable: !1,
            enumerable: !0
          })
        }
        return VV
      }(VV);
      if ("string" !== typeof xV.path) {
        var JV = VV.webkitRelativePath;
        Object.defineProperty(xV, "path", {
          value: "string" === typeof eV ? eV : "string" === typeof JV && JV.length > 0 ? JV : VV.name,
          writable: !1,
          configurable: !1,
          enumerable: !0
        })
      }
      return xV
    }
    var vV = [".DS_Store", "Thumbs.db"];

    function rV(VV) {
      return "object" === typeof VV && null !== VV
    }

    function kV(VV) {
      return jV(VV.target.files).map((function(VV) {
        return ZV(VV)
      }))
    }

    function bV(VV) {
      return yV(this, void 0, void 0, (function() {
        return pV(this, (function(eV) {
          switch (eV.label) {
            case 0:
              return [4, Promise.all(VV.map((function(VV) {
                return VV.getFile()
              })))];
            case 1:
              return [2, eV.sent().map((function(VV) {
                return ZV(VV)
              }))]
          }
        }))
      }))
    }

    function EV(VV, eV) {
      return yV(this, void 0, void 0, (function() {
        var xV;
        return pV(this, (function(JV) {
          switch (JV.label) {
            case 0:
              return VV.items ? (xV = jV(VV.items).filter((function(VV) {
                return "file" === VV.kind
              })), "drop" !== eV ? [2, xV] : [4, Promise.all(xV.map(qV))]) : [3, 2];
            case 1:
              return [2, BV(tV(JV.sent()))];
            case 2:
              return [2, BV(jV(VV.files).map((function(VV) {
                return ZV(VV)
              })))]
          }
        }))
      }))
    }

    function BV(VV) {
      return VV.filter((function(VV) {
        return -1 === vV.indexOf(VV.name)
      }))
    }

    function jV(VV) {
      if (null === VV) return [];
      for (var eV = [], xV = 0; xV < VV.length; xV++) {
        var JV = VV[xV];
        eV.push(JV)
      }
      return eV
    }

    function qV(VV) {
      if ("function" !== typeof VV.webkitGetAsEntry) return FV(VV);
      var eV = VV.webkitGetAsEntry();
      return eV && eV.isDirectory ? PV(eV) : FV(VV)
    }

    function tV(VV) {
      return VV.reduce((function(VV, eV) {
        return nV(nV([], QV(VV), !1), QV(Array.isArray(eV) ? tV(eV) : [eV]), !1)
      }), [])
    }

    function FV(VV) {
      var eV = VV.getAsFile();
      if (!eV) return Promise.reject("".concat(VV, " is not a File"));
      var xV = ZV(eV);
      return Promise.resolve(xV)
    }

    function TV(VV) {
      return yV(this, void 0, void 0, (function() {
        return pV(this, (function(eV) {
          return [2, VV.isDirectory ? PV(VV) : AV(VV)]
        }))
      }))
    }

    function PV(VV) {
      var eV = VV.createReader();
      return new Promise((function(VV, xV) {
        var JV = [];
        ! function YV() {
          var UV = this;
          eV.readEntries((function(eV) {
            return yV(UV, void 0, void 0, (function() {
              var UV, yV, QV;
              return pV(this, (function(pV) {
                switch (pV.label) {
                  case 0:
                    if (eV.length) return [3, 5];
                    pV.label = 1;
                  case 1:
                    return pV.trys.push([1, 3, , 4]), [4, Promise.all(JV)];
                  case 2:
                    return UV = pV.sent(), VV(UV), [3, 4];
                  case 3:
                    return yV = pV.sent(), xV(yV), [3, 4];
                  case 4:
                    return [3, 6];
                  case 5:
                    QV = Promise.all(eV.map(TV)), JV.push(QV), YV(), pV.label = 6;
                  case 6:
                    return [2]
                }
              }))
            }))
          }), (function(VV) {
            xV(VV)
          }))
        }()
      }))
    }

    function AV(VV) {
      return yV(this, void 0, void 0, (function() {
        return pV(this, (function(eV) {
          return [2, new Promise((function(eV, xV) {
            VV.file((function(xV) {
              var JV = ZV(xV, VV.fullPath);
              eV(JV)
            }), (function(VV) {
              xV(VV)
            }))
          }))]
        }))
      }))
    }
    var NV = xV(5478);

    function XV(VV) {
      return function(VV) {
        if (Array.isArray(VV)) return gV(VV)
      }(VV) || function(VV) {
        if ("undefined" !== typeof Symbol && null != VV[Symbol.iterator] || null != VV["@@iterator"]) return Array.from(VV)
      }(VV) || RV(VV) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function MV(VV, eV) {
      var xV = Object.keys(VV);
      if (Object.getOwnPropertySymbols) {
        var JV = Object.getOwnPropertySymbols(VV);
        eV && (JV = JV.filter((function(eV) {
          return Object.getOwnPropertyDescriptor(VV, eV).enumerable
        }))), xV.push.apply(xV, JV)
      }
      return xV
    }

    function zV(VV) {
      for (var eV = 1; eV < arguments.length; eV++) {
        var xV = null != arguments[eV] ? arguments[eV] : {};
        eV % 2 ? MV(Object(xV), !0).forEach((function(eV) {
          GV(VV, eV, xV[eV])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(VV, Object.getOwnPropertyDescriptors(xV)) : MV(Object(xV)).forEach((function(eV) {
          Object.defineProperty(VV, eV, Object.getOwnPropertyDescriptor(xV, eV))
        }))
      }
      return VV
    }

    function GV(VV, eV, xV) {
      return eV in VV ? Object.defineProperty(VV, eV, {
        value: xV,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : VV[eV] = xV, VV
    }

    function WV(VV, eV) {
      return function(VV) {
        if (Array.isArray(VV)) return VV
      }(VV) || function(VV, eV) {
        var xV = null == VV ? null : "undefined" !== typeof Symbol && VV[Symbol.iterator] || VV["@@iterator"];
        if (null == xV) return;
        var JV, YV, UV = [],
          yV = !0,
          pV = !1;
        try {
          for (xV = xV.call(VV); !(yV = (JV = xV.next()).done) && (UV.push(JV.value), !eV || UV.length !== eV); yV = !0);
        } catch (QV) {
          pV = !0, YV = QV
        } finally {
          try {
            yV || null == xV.return || xV.return()
          } finally {
            if (pV) throw YV
          }
        }
        return UV
      }(VV, eV) || RV(VV, eV) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function RV(VV, eV) {
      if (VV) {
        if ("string" === typeof VV) return gV(VV, eV);
        var xV = Object.prototype.toString.call(VV).slice(8, -1);
        return "Object" === xV && VV.constructor && (xV = VV.constructor.name), "Map" === xV || "Set" === xV ? Array.from(VV) : "Arguments" === xV || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(xV) ? gV(VV, eV) : void 0
      }
    }

    function gV(VV, eV) {
      (null == eV || eV > VV.length) && (eV = VV.length);
      for (var xV = 0, JV = new Array(eV); xV < eV; xV++) JV[xV] = VV[xV];
      return JV
    }
    var DV = "file-invalid-type",
      iV = "file-too-large",
      CV = "file-too-small",
      aV = "too-many-files",
      oV = function(VV) {
        VV = Array.isArray(VV) && 1 === VV.length ? VV[0] : VV;
        var eV = Array.isArray(VV) ? "one of ".concat(VV.join(", ")) : VV;
        return {
          code: DV,
          message: "File type must be ".concat(eV)
        }
      },
      cV = function(VV) {
        return {
          code: iV,
          message: "File is larger than ".concat(VV, " ").concat(1 === VV ? "byte" : "bytes")
        }
      },
      hV = function(VV) {
        return {
          code: CV,
          message: "File is smaller than ".concat(VV, " ").concat(1 === VV ? "byte" : "bytes")
        }
      },
      lV = {
        code: aV,
        message: "Too many files"
      };

    function LV(VV, eV) {
      var xV = "application/x-moz-file" === VV.type || (0, NV.b)(VV, eV);
      return [xV, xV ? null : oV(eV)]
    }

    function fV(VV, eV, xV) {
      if (mV(VV.size))
        if (mV(eV) && mV(xV)) {
          if (VV.size > xV) return [!1, cV(xV)];
          if (VV.size < eV) return [!1, hV(eV)]
        } else {
          if (mV(eV) && VV.size < eV) return [!1, hV(eV)];
          if (mV(xV) && VV.size > xV) return [!1, cV(xV)]
        } return [!0, null]
    }

    function mV(VV) {
      return void 0 !== VV && null !== VV
    }

    function KV(VV) {
      return "function" === typeof VV.isPropagationStopped ? VV.isPropagationStopped() : "undefined" !== typeof VV.cancelBubble && VV.cancelBubble
    }

    function HV(VV) {
      return VV.dataTransfer ? Array.prototype.some.call(VV.dataTransfer.types, (function(VV) {
        return "Files" === VV || "application/x-moz-file" === VV
      })) : !!VV.target && !!VV.target.files
    }

    function uV(VV) {
      VV.preventDefault()
    }

    function sV() {
      for (var VV = arguments.length, eV = new Array(VV), xV = 0; xV < VV; xV++) eV[xV] = arguments[xV];
      return function(VV) {
        for (var xV = arguments.length, JV = new Array(xV > 1 ? xV - 1 : 0), YV = 1; YV < xV; YV++) JV[YV - 1] = arguments[YV];
        return eV.some((function(eV) {
          return !KV(VV) && eV && eV.apply(void 0, [VV].concat(JV)), KV(VV)
        }))
      }
    }

    function SV(VV) {
      return "audio/*" === VV || "video/*" === VV || "image/*" === VV || "text/*" === VV || /\w+\/[-+.\w]+/g.test(VV)
    }

    function IV(VV) {
      return /^.*\.[\w]+$/.test(VV)
    }
    var dV = ["children"],
      OV = ["open"],
      Ve = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
      ee = ["refKey", "onChange", "onClick"];

    function xe(VV) {
      return function(VV) {
        if (Array.isArray(VV)) return Ue(VV)
      }(VV) || function(VV) {
        if ("undefined" !== typeof Symbol && null != VV[Symbol.iterator] || null != VV["@@iterator"]) return Array.from(VV)
      }(VV) || Ye(VV) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Je(VV, eV) {
      return function(VV) {
        if (Array.isArray(VV)) return VV
      }(VV) || function(VV, eV) {
        var xV = null == VV ? null : "undefined" !== typeof Symbol && VV[Symbol.iterator] || VV["@@iterator"];
        if (null == xV) return;
        var JV, YV, UV = [],
          yV = !0,
          pV = !1;
        try {
          for (xV = xV.call(VV); !(yV = (JV = xV.next()).done) && (UV.push(JV.value), !eV || UV.length !== eV); yV = !0);
        } catch (QV) {
          pV = !0, YV = QV
        } finally {
          try {
            yV || null == xV.return || xV.return()
          } finally {
            if (pV) throw YV
          }
        }
        return UV
      }(VV, eV) || Ye(VV, eV) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Ye(VV, eV) {
      if (VV) {
        if ("string" === typeof VV) return Ue(VV, eV);
        var xV = Object.prototype.toString.call(VV).slice(8, -1);
        return "Object" === xV && VV.constructor && (xV = VV.constructor.name), "Map" === xV || "Set" === xV ? Array.from(VV) : "Arguments" === xV || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(xV) ? Ue(VV, eV) : void 0
      }
    }

    function Ue(VV, eV) {
      (null == eV || eV > VV.length) && (eV = VV.length);
      for (var xV = 0, JV = new Array(eV); xV < eV; xV++) JV[xV] = VV[xV];
      return JV
    }

    function ye(VV, eV) {
      var xV = Object.keys(VV);
      if (Object.getOwnPropertySymbols) {
        var JV = Object.getOwnPropertySymbols(VV);
        eV && (JV = JV.filter((function(eV) {
          return Object.getOwnPropertyDescriptor(VV, eV).enumerable
        }))), xV.push.apply(xV, JV)
      }
      return xV
    }

    function pe(VV) {
      for (var eV = 1; eV < arguments.length; eV++) {
        var xV = null != arguments[eV] ? arguments[eV] : {};
        eV % 2 ? ye(Object(xV), !0).forEach((function(eV) {
          Qe(VV, eV, xV[eV])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(VV, Object.getOwnPropertyDescriptors(xV)) : ye(Object(xV)).forEach((function(eV) {
          Object.defineProperty(VV, eV, Object.getOwnPropertyDescriptor(xV, eV))
        }))
      }
      return VV
    }

    function Qe(VV, eV, xV) {
      return eV in VV ? Object.defineProperty(VV, eV, {
        value: xV,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : VV[eV] = xV, VV
    }

    function ne(VV, eV) {
      if (null == VV) return {};
      var xV, JV, YV = function(VV, eV) {
        if (null == VV) return {};
        var xV, JV, YV = {},
          UV = Object.keys(VV);
        for (JV = 0; JV < UV.length; JV++) xV = UV[JV], eV.indexOf(xV) >= 0 || (YV[xV] = VV[xV]);
        return YV
      }(VV, eV);
      if (Object.getOwnPropertySymbols) {
        var UV = Object.getOwnPropertySymbols(VV);
        for (JV = 0; JV < UV.length; JV++) xV = UV[JV], eV.indexOf(xV) >= 0 || Object.prototype.propertyIsEnumerable.call(VV, xV) && (YV[xV] = VV[xV])
      }
      return YV
    }
    var we = (0, JV.forwardRef)((function(VV, eV) {
      var xV = VV.children,
        YV = re(ne(VV, dV)),
        UV = YV.open,
        yV = ne(YV, OV);
      return (0, JV.useImperativeHandle)(eV, (function() {
        return {
          open: UV
        }
      }), [UV]), JV.createElement(JV.Fragment, null, xV(pe(pe({}, yV), {}, {
        open: UV
      })))
    }));
    we.displayName = "Dropzone";
    var Ze = {
      disabled: !1,
      getFilesFromEvent: function(VV) {
        return yV(this, void 0, void 0, (function() {
          return pV(this, (function(eV) {
            return rV(VV) && rV(VV.dataTransfer) ? [2, EV(VV.dataTransfer, VV.type)] : function(VV) {
              return rV(VV) && rV(VV.target)
            }(VV) ? [2, kV(VV)] : Array.isArray(VV) && VV.every((function(VV) {
              return "getFile" in VV && "function" === typeof VV.getFile
            })) ? [2, bV(VV)] : [2, []]
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
    we.defaultProps = Ze, we.propTypes = {
      children: UV().func,
      accept: UV().objectOf(UV().arrayOf(UV().string)),
      multiple: UV().bool,
      preventDropOnDocument: UV().bool,
      noClick: UV().bool,
      noKeyboard: UV().bool,
      noDrag: UV().bool,
      noDragEventsBubbling: UV().bool,
      minSize: UV().number,
      maxSize: UV().number,
      maxFiles: UV().number,
      disabled: UV().bool,
      getFilesFromEvent: UV().func,
      onFileDialogCancel: UV().func,
      onFileDialogOpen: UV().func,
      useFsAccessApi: UV().bool,
      autoFocus: UV().bool,
      onDragEnter: UV().func,
      onDragLeave: UV().func,
      onDragOver: UV().func,
      onDrop: UV().func,
      onDropAccepted: UV().func,
      onDropRejected: UV().func,
      onError: UV().func,
      validator: UV().func
    };
    var ve = {
      fR: !1,
      isFileDialogActive: !1,
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1,
      acceptedFiles: [],
      fileRejections: []
    };

    function re() {
      var VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        eV = pe(pe({}, Ze), VV),
        xV = eV.accept,
        YV = eV.disabled,
        UV = eV.getFilesFromEvent,
        yV = eV.maxSize,
        pV = eV.minSize,
        QV = eV.multiple,
        nV = eV.maxFiles,
        wV = eV.onDragEnter,
        ZV = eV.onDragLeave,
        vV = eV.onDragOver,
        rV = eV.onDrop,
        kV = eV.onDropAccepted,
        bV = eV.onDropRejected,
        EV = eV.onFileDialogCancel,
        BV = eV.onFileDialogOpen,
        jV = eV.useFsAccessApi,
        qV = eV.autoFocus,
        tV = eV.preventDropOnDocument,
        FV = eV.noClick,
        TV = eV.noKeyboard,
        PV = eV.noDrag,
        AV = eV.noDragEventsBubbling,
        NV = eV.onError,
        MV = eV.validator,
        RV = (0, JV.useMemo)((function() {
          return function(VV) {
            if (mV(VV)) return Object.entries(VV).reduce((function(VV, eV) {
              var xV = WV(eV, 2),
                JV = xV[0],
                YV = xV[1];
              return [].concat(XV(VV), [JV], XV(YV))
            }), []).filter((function(VV) {
              return SV(VV) || IV(VV)
            })).join(",")
          }(xV)
        }), [xV]),
        gV = (0, JV.useMemo)((function() {
          return function(VV) {
            return mV(VV) ? [{
              description: "Files",
              accept: Object.entries(VV).filter((function(VV) {
                var eV = WV(VV, 2),
                  xV = eV[0],
                  JV = eV[1],
                  YV = !0;
                return SV(xV) || (console.warn('Skipped "'.concat(xV, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), YV = !1), Array.isArray(JV) && JV.every(IV) || (console.warn('Skipped "'.concat(xV, '" because an invalid file extension was provided.')), YV = !1), YV
              })).reduce((function(VV, eV) {
                var xV = WV(eV, 2),
                  JV = xV[0],
                  YV = xV[1];
                return zV(zV({}, VV), {}, GV({}, JV, YV))
              }), {})
            }] : VV
          }(xV)
        }), [xV]),
        DV = (0, JV.useMemo)((function() {
          return "function" === typeof BV ? BV : be
        }), [BV]),
        iV = (0, JV.useMemo)((function() {
          return "function" === typeof EV ? EV : be
        }), [EV]),
        CV = (0, JV.useRef)(null),
        aV = (0, JV.useRef)(null),
        oV = Je((0, JV.useReducer)(ke, ve), 2),
        cV = oV[0],
        hV = oV[1],
        dV = cV.fR,
        OV = cV.isFileDialogActive,
        Ye = (0, JV.useRef)("undefined" !== typeof window && window.isSecureContext && jV && "showOpenFilePicker" in window),
        Ue = function() {
          !Ye.current && OV && setTimeout((function() {
            aV.current && (aV.current.files.length || (hV({
              type: "closeDialog"
            }), iV()))
          }), 300)
        };
      (0, JV.useEffect)((function() {
        return window.addEventListener("focus", Ue, !1),
          function() {
            window.removeEventListener("focus", Ue, !1)
          }
      }), [aV, OV, iV, Ye]);
      var ye = (0, JV.useRef)([]),
        we = function(VV) {
          CV.current && CV.current.contains(VV.target) || (VV.preventDefault(), ye.current = [])
        };
      (0, JV.useEffect)((function() {
        return tV && (document.addEventListener("dragover", uV, !1), document.addEventListener("drop", we, !1)),
          function() {
            tV && (document.removeEventListener("dragover", uV), document.removeEventListener("drop", we))
          }
      }), [CV, tV]), (0, JV.useEffect)((function() {
        return !YV && qV && CV.current && CV.current.focus(),
          function() {}
      }), [CV, qV, YV]);
      var re = (0, JV.useCallback)((function(VV) {
          NV ? NV(VV) : console.error(VV)
        }), [NV]),
        Ee = (0, JV.useCallback)((function(VV) {
          VV.preventDefault(), VV.persist(), Ge(VV), ye.current = [].concat(xe(ye.current), [VV.target]), HV(VV) && Promise.resolve(UV(VV)).then((function(eV) {
            if (!KV(VV) || AV) {
              var xV = eV.length,
                JV = xV > 0 && function(VV) {
                  var eV = VV.files,
                    xV = VV.accept,
                    JV = VV.minSize,
                    YV = VV.maxSize,
                    UV = VV.multiple,
                    yV = VV.maxFiles,
                    pV = VV.validator;
                  return !(!UV && eV.length > 1 || UV && yV >= 1 && eV.length > yV) && eV.every((function(VV) {
                    var eV = WV(LV(VV, xV), 1)[0],
                      UV = WV(fV(VV, JV, YV), 1)[0],
                      yV = pV ? pV(VV) : null;
                    return eV && UV && !yV
                  }))
                }({
                  files: eV,
                  accept: RV,
                  minSize: pV,
                  maxSize: yV,
                  multiple: QV,
                  maxFiles: nV,
                  validator: MV
                });
              hV({
                isDragAccept: JV,
                isDragReject: xV > 0 && !JV,
                isDragActive: !0,
                type: "setDraggedFiles"
              }), wV && wV(VV)
            }
          })).catch((function(VV) {
            return re(VV)
          }))
        }), [UV, wV, re, AV, RV, pV, yV, QV, nV, MV]),
        Be = (0, JV.useCallback)((function(VV) {
          VV.preventDefault(), VV.persist(), Ge(VV);
          var eV = HV(VV);
          if (eV && VV.dataTransfer) try {
            VV.dataTransfer.dropEffect = "copy"
          } catch (xV) {}
          return eV && vV && vV(VV), !1
        }), [vV, AV]),
        je = (0, JV.useCallback)((function(VV) {
          VV.preventDefault(), VV.persist(), Ge(VV);
          var eV = ye.current.filter((function(VV) {
              return CV.current && CV.current.contains(VV)
            })),
            xV = eV.indexOf(VV.target); - 1 !== xV && eV.splice(xV, 1), ye.current = eV, eV.length > 0 || (hV({
            type: "setDraggedFiles",
            isDragActive: !1,
            isDragAccept: !1,
            isDragReject: !1
          }), HV(VV) && ZV && ZV(VV))
        }), [CV, ZV, AV]),
        qe = (0, JV.useCallback)((function(VV, eV) {
          var xV = [],
            JV = [];
          VV.forEach((function(VV) {
            var eV = Je(LV(VV, RV), 2),
              YV = eV[0],
              UV = eV[1],
              QV = Je(fV(VV, pV, yV), 2),
              nV = QV[0],
              wV = QV[1],
              ZV = MV ? MV(VV) : null;
            if (YV && nV && !ZV) xV.push(VV);
            else {
              var vV = [UV, wV];
              ZV && (vV = vV.concat(ZV)), JV.push({
                file: VV,
                errors: vV.filter((function(VV) {
                  return VV
                }))
              })
            }
          })), (!QV && xV.length > 1 || QV && nV >= 1 && xV.length > nV) && (xV.forEach((function(VV) {
            JV.push({
              file: VV,
              errors: [lV]
            })
          })), xV.splice(0)), hV({
            acceptedFiles: xV,
            fileRejections: JV,
            type: "setFiles"
          }), rV && rV(xV, JV, eV), JV.length > 0 && bV && bV(JV, eV), xV.length > 0 && kV && kV(xV, eV)
        }), [hV, QV, RV, pV, yV, nV, rV, kV, bV, MV]),
        te = (0, JV.useCallback)((function(VV) {
          VV.preventDefault(), VV.persist(), Ge(VV), ye.current = [], HV(VV) && Promise.resolve(UV(VV)).then((function(eV) {
            KV(VV) && !AV || qe(eV, VV)
          })).catch((function(VV) {
            return re(VV)
          })), hV({
            type: "reset"
          })
        }), [UV, qe, re, AV]),
        Fe = (0, JV.useCallback)((function() {
          if (Ye.current) {
            hV({
              type: "openDialog"
            }), DV();
            var VV = {
              multiple: QV,
              types: gV
            };
            window.showOpenFilePicker(VV).then((function(VV) {
              return UV(VV)
            })).then((function(VV) {
              qe(VV, null), hV({
                type: "closeDialog"
              })
            })).catch((function(VV) {
              var eV;
              (eV = VV) instanceof DOMException && ("AbortError" === eV.name || eV.code === eV.ABORT_ERR) ? (iV(VV), hV({
                type: "closeDialog"
              })) : ! function(VV) {
                return VV instanceof DOMException && ("SecurityError" === VV.name || VV.code === VV.SECURITY_ERR)
              }(VV) ? re(VV) : (Ye.current = !1, aV.current ? (aV.current.value = null, aV.current.click()) : re(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))
            }))
          } else aV.current && (hV({
            type: "openDialog"
          }), DV(), aV.current.value = null, aV.current.click())
        }), [hV, DV, iV, jV, qe, re, gV, QV]),
        Te = (0, JV.useCallback)((function(VV) {
          CV.current && CV.current.isEqualNode(VV.target) && (" " !== VV.key && "Enter" !== VV.key && 32 !== VV.keyCode && 13 !== VV.keyCode || (VV.preventDefault(), Fe()))
        }), [CV, Fe]),
        Pe = (0, JV.useCallback)((function() {
          hV({
            type: "focus"
          })
        }), []),
        Ae = (0, JV.useCallback)((function() {
          hV({
            type: "blur"
          })
        }), []),
        Ne = (0, JV.useCallback)((function() {
          FV || (! function() {
            var VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
            return function(VV) {
              return -1 !== VV.indexOf("MSIE") || -1 !== VV.indexOf("Trident/")
            }(VV) || function(VV) {
              return -1 !== VV.indexOf("Edge/")
            }(VV)
          }() ? Fe() : setTimeout(Fe, 0))
        }), [FV, Fe]),
        Xe = function(VV) {
          return YV ? null : VV
        },
        Me = function(VV) {
          return TV ? null : Xe(VV)
        },
        ze = function(VV) {
          return PV ? null : Xe(VV)
        },
        Ge = function(VV) {
          AV && VV.stopPropagation()
        },
        We = (0, JV.useMemo)((function() {
          return function() {
            var VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              eV = VV.refKey,
              xV = void 0 === eV ? "ref" : eV,
              JV = VV.role,
              UV = VV.onKeyDown,
              yV = VV.onFocus,
              pV = VV.onBlur,
              QV = VV.onClick,
              nV = VV.onDragEnter,
              wV = VV.onDragOver,
              ZV = VV.onDragLeave,
              vV = VV.onDrop,
              rV = ne(VV, Ve);
            return pe(pe(Qe({
              onKeyDown: Me(sV(UV, Te)),
              onFocus: Me(sV(yV, Pe)),
              onBlur: Me(sV(pV, Ae)),
              onClick: Xe(sV(QV, Ne)),
              onDragEnter: ze(sV(nV, Ee)),
              onDragOver: ze(sV(wV, Be)),
              onDragLeave: ze(sV(ZV, je)),
              onDrop: ze(sV(vV, te)),
              role: "string" === typeof JV && "" !== JV ? JV : "presentation"
            }, xV, CV), YV || TV ? {} : {
              tabIndex: 0
            }), rV)
          }
        }), [CV, Te, Pe, Ae, Ne, Ee, Be, je, te, TV, PV, YV]),
        Re = (0, JV.useCallback)((function(VV) {
          VV.stopPropagation()
        }), []),
        ge = (0, JV.useMemo)((function() {
          return function() {
            var VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              eV = VV.refKey,
              xV = void 0 === eV ? "ref" : eV,
              JV = VV.onChange,
              YV = VV.onClick,
              UV = ne(VV, ee);
            return pe(pe({}, Qe({
              accept: RV,
              multiple: QV,
              type: "file",
              style: {
                display: "none"
              },
              onChange: Xe(sV(JV, te)),
              onClick: Xe(sV(YV, Re)),
              tabIndex: -1
            }, xV, aV)), UV)
          }
        }), [aV, xV, QV, te, YV]);
      return pe(pe({}, cV), {}, {
        fR: dV && !YV,
        getRootProps: We,
        getInputProps: ge,
        rootRef: CV,
        inputRef: aV,
        open: Xe(Fe)
      })
    }

    function ke(VV, eV) {
      switch (eV.type) {
        case "focus":
          return pe(pe({}, VV), {}, {
            fR: !0
          });
        case "blur":
          return pe(pe({}, VV), {}, {
            fR: !1
          });
        case "openDialog":
          return pe(pe({}, ve), {}, {
            isFileDialogActive: !0
          });
        case "closeDialog":
          return pe(pe({}, VV), {}, {
            isFileDialogActive: !1
          });
        case "setDraggedFiles":
          return pe(pe({}, VV), {}, {
            isDragActive: eV.isDragActive,
            isDragAccept: eV.isDragAccept,
            isDragReject: eV.isDragReject
          });
        case "setFiles":
          return pe(pe({}, VV), {}, {
            acceptedFiles: eV.acceptedFiles,
            fileRejections: eV.fileRejections
          });
        case "reset":
          return pe({}, ve);
        default:
          return VV
      }
    }

    function be() {}
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);