export const id = 107;
export const ids = [107];
export const modules = {
  5005: (DD, zD) => {
    zD.e = function(DD, zD) {
      if (DD && zD) {
        var wD = Array.isArray(zD) ? zD : zD.split(","),
          pD = DD.name || "",
          sD = (DD.type || "").toLowerCase(),
          KD = sD.replace(/\/.*$/, "");
        return wD.some((function(DD) {
          var zD = DD.trim().toLowerCase();
          return "." === zD.charAt(0) ? pD.toLowerCase().endsWith(zD) : zD.endsWith("/*") ? KD === zD.replace(/\/.*$/, "") : sD === zD
        }))
      }
      return !0
    }
  },
  4974: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => fz
    });
    var pD = wD(58),
      sD = wD(4981),
      KD = wD.n(sD);

    function rD(DD, zD, wD, pD) {
      return new(wD || (wD = Promise))((function(sD, KD) {
        function rD(DD) {
          try {
            cD(pD.next(DD))
          } catch (zD) {
            KD(zD)
          }
        }

        function LD(DD) {
          try {
            cD(pD.throw(DD))
          } catch (zD) {
            KD(zD)
          }
        }

        function cD(DD) {
          var zD;
          DD.done ? sD(DD.value) : (zD = DD.value, zD instanceof wD ? zD : new wD((function(DD) {
            DD(zD)
          }))).then(rD, LD)
        }
        cD((pD = pD.apply(DD, zD || [])).next())
      }))
    }

    function LD(DD, zD) {
      var wD, pD, sD, KD, rD = {
        label: 0,
        sent: function() {
          if (1 & sD[0]) throw sD[1];
          return sD[1]
        },
        trys: [],
        ops: []
      };
      return KD = {
        next: LD(0),
        throw: LD(1),
        return: LD(2)
      }, "function" === typeof Symbol && (KD[Symbol.iterator] = function() {
        return this
      }), KD;

      function LD(LD) {
        return function(cD) {
          return function(LD) {
            if (wD) throw new TypeError("Generator is already executing.");
            for (; KD && (KD = 0, LD[0] && (rD = 0)), rD;) try {
              if (wD = 1, pD && (sD = 2 & LD[0] ? pD.return : LD[0] ? pD.throw || ((sD = pD.return) && sD.call(pD), 0) : pD.next) && !(sD = sD.call(pD, LD[1])).done) return sD;
              switch (pD = 0, sD && (LD = [2 & LD[0], sD.value]), LD[0]) {
                case 0:
                case 1:
                  sD = LD;
                  break;
                case 4:
                  return rD.label++, {
                    value: LD[1],
                    done: !1
                  };
                case 5:
                  rD.label++, pD = LD[1], LD = [0];
                  continue;
                case 7:
                  LD = rD.ops.pop(), rD.trys.pop();
                  continue;
                default:
                  if (!(sD = (sD = rD.trys).length > 0 && sD[sD.length - 1]) && (6 === LD[0] || 2 === LD[0])) {
                    rD = 0;
                    continue
                  }
                  if (3 === LD[0] && (!sD || LD[1] > sD[0] && LD[1] < sD[3])) {
                    rD.label = LD[1];
                    break
                  }
                  if (6 === LD[0] && rD.label < sD[1]) {
                    rD.label = sD[1], sD = LD;
                    break
                  }
                  if (sD && rD.label < sD[2]) {
                    rD.label = sD[2], rD.ops.push(LD);
                    break
                  }
                  sD[2] && rD.ops.pop(), rD.trys.pop();
                  continue
              }
              LD = zD.call(DD, rD)
            } catch (cD) {
              LD = [6, cD], pD = 0
            } finally {
              wD = sD = 0
            }
            if (5 & LD[0]) throw LD[1];
            return {
              value: LD[0] ? LD[1] : void 0,
              done: !0
            }
          }([LD, cD])
        }
      }
    }
    Object.create;

    function cD(DD, zD) {
      var wD = "function" === typeof Symbol && DD[Symbol.iterator];
      if (!wD) return DD;
      var pD, sD, KD = wD.call(DD),
        rD = [];
      try {
        for (;
          (void 0 === zD || zD-- > 0) && !(pD = KD.next()).done;) rD.push(pD.value)
      } catch (LD) {
        sD = {
          error: LD
        }
      } finally {
        try {
          pD && !pD.done && (wD = KD.return) && wD.call(KD)
        } finally {
          if (sD) throw sD.error
        }
      }
      return rD
    }

    function gD(DD, zD, wD) {
      if (wD || 2 === arguments.length)
        for (var pD, sD = 0, KD = zD.length; sD < KD; sD++) !pD && sD in zD || (pD || (pD = Array.prototype.slice.call(zD, 0, sD)), pD[sD] = zD[sD]);
      return DD.concat(pD || Array.prototype.slice.call(zD))
    }
    Object.create;
    "function" === typeof SuppressedError && SuppressedError;
    var RD = new Map([
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
      ["lg", "application/vnd.ms-outlook"]
    ]);

    function AD(DD, zD) {
      var wD = function(DD) {
        var zD = DD.name;
        if (zD && -1 !== zD.lastIndexOf(".") && !DD.type) {
          var wD = zD.split(".").pop().toLowerCase(),
            pD = RD.get(wD);
          pD && Object.defineProperty(DD, "type", {
            value: pD,
            writable: !1,
            configurable: !1,
            enumerable: !0
          })
        }
        return DD
      }(DD);
      if ("string" !== typeof wD.path) {
        var pD = DD.webkitRelativePath;
        Object.defineProperty(wD, "path", {
          value: "string" === typeof zD ? zD : "string" === typeof pD && pD.length > 0 ? pD : DD.name,
          writable: !1,
          configurable: !1,
          enumerable: !0
        })
      }
      return wD
    }
    var UD = [".DS_Store", "Thumbs.db"];

    function fD(DD) {
      return "object" === typeof DD && null !== DD
    }

    function ID(DD) {
      return nD(DD.target.files).map((function(DD) {
        return AD(DD)
      }))
    }

    function BD(DD) {
      return rD(this, void 0, void 0, (function() {
        return LD(this, (function(zD) {
          switch (zD.label) {
            case 0:
              return [4, Promise.all(DD.map((function(DD) {
                return DD.getFile()
              })))];
            case 1:
              return [2, zD.sent().map((function(DD) {
                return AD(DD)
              }))]
          }
        }))
      }))
    }

    function GD(DD, zD) {
      return rD(this, void 0, void 0, (function() {
        var wD;
        return LD(this, (function(pD) {
          switch (pD.label) {
            case 0:
              return DD.items ? (wD = nD(DD.items).filter((function(DD) {
                return "file" === DD.kind
              })), "drop" !== zD ? [2, wD] : [4, Promise.all(wD.map(MD))]) : [3, 2];
            case 1:
              return [2, hD(OD(pD.sent()))];
            case 2:
              return [2, hD(nD(DD.files).map((function(DD) {
                return AD(DD)
              })))]
          }
        }))
      }))
    }

    function hD(DD) {
      return DD.filter((function(DD) {
        return -1 === UD.indexOf(DD.name)
      }))
    }

    function nD(DD) {
      if (null === DD) return [];
      for (var zD = [], wD = 0; wD < DD.length; wD++) {
        var pD = DD[wD];
        zD.push(pD)
      }
      return zD
    }

    function MD(DD) {
      if ("function" !== typeof DD.webkitGetAsEntry) return JD(DD);
      var zD = DD.webkitGetAsEntry();
      return zD && zD.isDirectory ? QD(zD) : JD(DD)
    }

    function OD(DD) {
      return DD.reduce((function(DD, zD) {
        return gD(gD([], cD(DD), !1), cD(Array.isArray(zD) ? OD(zD) : [zD]), !1)
      }), [])
    }

    function JD(DD) {
      var zD = DD.getAsFile();
      if (!zD) return Promise.reject("".concat(DD, " is not a File"));
      var wD = AD(zD);
      return Promise.resolve(wD)
    }

    function ED(DD) {
      return rD(this, void 0, void 0, (function() {
        return LD(this, (function(zD) {
          return [2, DD.isDirectory ? QD(DD) : XD(DD)]
        }))
      }))
    }

    function QD(DD) {
      var zD = DD.createReader();
      return new Promise((function(DD, wD) {
        var pD = [];
        ! function sD() {
          var KD = this;
          zD.readEntries((function(zD) {
            return rD(KD, void 0, void 0, (function() {
              var KD, rD, cD;
              return LD(this, (function(LD) {
                switch (LD.label) {
                  case 0:
                    if (zD.length) return [3, 5];
                    LD.label = 1;
                  case 1:
                    return LD.trys.push([1, 3, , 4]), [4, Promise.all(pD)];
                  case 2:
                    return KD = LD.sent(), DD(KD), [3, 4];
                  case 3:
                    return rD = LD.sent(), wD(rD), [3, 4];
                  case 4:
                    return [3, 6];
                  case 5:
                    cD = Promise.all(zD.map(ED)), pD.push(cD), sD(), LD.label = 6;
                  case 6:
                    return [2]
                }
              }))
            }))
          }), (function(DD) {
            wD(DD)
          }))
        }()
      }))
    }

    function XD(DD) {
      return rD(this, void 0, void 0, (function() {
        return LD(this, (function(zD) {
          return [2, new Promise((function(zD, wD) {
            DD.file((function(wD) {
              var pD = AD(wD, DD.fullPath);
              zD(pD)
            }), (function(DD) {
              wD(DD)
            }))
          }))]
        }))
      }))
    }
    var VD = wD(5005);

    function PD(DD) {
      return function(DD) {
        if (Array.isArray(DD)) return dD(DD)
      }(DD) || function(DD) {
        if ("undefined" !== typeof Symbol && null != DD[Symbol.iterator] || null != DD["@@iterator"]) return Array.from(DD)
      }(DD) || jD(DD) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function CD(DD, zD) {
      var wD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var pD = Object.getOwnPropertySymbols(DD);
        zD && (pD = pD.filter((function(zD) {
          return Object.getOwnPropertyDescriptor(DD, zD).enumerable
        }))), wD.push.apply(wD, pD)
      }
      return wD
    }

    function xD(DD) {
      for (var zD = 1; zD < arguments.length; zD++) {
        var wD = null != arguments[zD] ? arguments[zD] : {};
        zD % 2 ? CD(Object(wD), !0).forEach((function(zD) {
          TD(DD, zD, wD[zD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(wD)) : CD(Object(wD)).forEach((function(zD) {
          Object.defineProperty(DD, zD, Object.getOwnPropertyDescriptor(wD, zD))
        }))
      }
      return DD
    }

    function TD(DD, zD, wD) {
      return zD in DD ? Object.defineProperty(DD, zD, {
        value: wD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[zD] = wD, DD
    }

    function bD(DD, zD) {
      return function(DD) {
        if (Array.isArray(DD)) return DD
      }(DD) || function(DD, zD) {
        var wD = null == DD ? null : "undefined" !== typeof Symbol && DD[Symbol.iterator] || DD["@@iterator"];
        if (null == wD) return;
        var pD, sD, KD = [],
          rD = !0,
          LD = !1;
        try {
          for (wD = wD.call(DD); !(rD = (pD = wD.next()).done) && (KD.push(pD.value), !zD || KD.length !== zD); rD = !0);
        } catch (cD) {
          LD = !0, sD = cD
        } finally {
          try {
            rD || null == wD.return || wD.return()
          } finally {
            if (LD) throw sD
          }
        }
        return KD
      }(DD, zD) || jD(DD, zD) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function jD(DD, zD) {
      if (DD) {
        if ("string" === typeof DD) return dD(DD, zD);
        var wD = Object.prototype.toString.call(DD).slice(8, -1);
        return "Object" === wD && DD.constructor && (wD = DD.constructor.name), "Map" === wD || "Set" === wD ? Array.from(DD) : "Arguments" === wD || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(wD) ? dD(DD, zD) : void 0
      }
    }

    function dD(DD, zD) {
      (null == zD || zD > DD.length) && (zD = DD.length);
      for (var wD = 0, pD = new Array(zD); wD < zD; wD++) pD[wD] = DD[wD];
      return pD
    }
    var SD = "file-invalid-type",
      iD = "file-too-large",
      lD = "file-too-small",
      WD = "too-many-files",
      ND = function(DD) {
        DD = Array.isArray(DD) && 1 === DD.length ? DD[0] : DD;
        var zD = Array.isArray(DD) ? "one of ".concat(DD.join(", ")) : DD;
        return {
          code: SD,
          message: "File type must be ".concat(zD)
        }
      },
      ZD = function(DD) {
        return {
          code: iD,
          message: "File is larger than ".concat(DD, " ").concat(1 === DD ? "byte" : "bytes")
        }
      },
      yD = function(DD) {
        return {
          code: lD,
          message: "File is smaller than ".concat(DD, " ").concat(1 === DD ? "byte" : "bytes")
        }
      },
      kD = {
        code: WD,
        message: "Too many files"
      };

    function mD(DD, zD) {
      var wD = "application/x-moz-file" === DD.type || (0, VD.e)(DD, zD);
      return [wD, wD ? null : ND(zD)]
    }

    function eD(DD, zD, wD) {
      if (oD(DD.size))
        if (oD(zD) && oD(wD)) {
          if (DD.size > wD) return [!1, ZD(wD)];
          if (DD.size < zD) return [!1, yD(zD)]
        } else {
          if (oD(zD) && DD.size < zD) return [!1, yD(zD)];
          if (oD(wD) && DD.size > wD) return [!1, ZD(wD)]
        } return [!0, null]
    }

    function oD(DD) {
      return void 0 !== DD && null !== DD
    }

    function aD(DD) {
      return "function" === typeof DD.isPropagationStopped ? DD.isPropagationStopped() : "undefined" !== typeof DD.cancelBubble && DD.cancelBubble
    }

    function uD(DD) {
      return DD.dataTransfer ? Array.prototype.some.call(DD.dataTransfer.types, (function(DD) {
        return "Files" === DD || "application/x-moz-file" === DD
      })) : !!DD.target && !!DD.target.files
    }

    function vD(DD) {
      DD.preventDefault()
    }

    function tD() {
      for (var DD = arguments.length, zD = new Array(DD), wD = 0; wD < DD; wD++) zD[wD] = arguments[wD];
      return function(DD) {
        for (var wD = arguments.length, pD = new Array(wD > 1 ? wD - 1 : 0), sD = 1; sD < wD; sD++) pD[sD - 1] = arguments[sD];
        return zD.some((function(zD) {
          return !aD(DD) && zD && zD.apply(void 0, [DD].concat(pD)), aD(DD)
        }))
      }
    }

    function FD(DD) {
      return "audio/*" === DD || "video/*" === DD || "image/*" === DD || "text/*" === DD || /\w+\/[-+.\w]+/g.test(DD)
    }

    function YD(DD) {
      return /^.*\.[\w]+$/.test(DD)
    }
    var HD = ["children"],
      qD = ["open"],
      Dz = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
      zz = ["refKey", "onChange", "onClick"];

    function wz(DD) {
      return function(DD) {
        if (Array.isArray(DD)) return Kz(DD)
      }(DD) || function(DD) {
        if ("undefined" !== typeof Symbol && null != DD[Symbol.iterator] || null != DD["@@iterator"]) return Array.from(DD)
      }(DD) || sz(DD) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function pz(DD, zD) {
      return function(DD) {
        if (Array.isArray(DD)) return DD
      }(DD) || function(DD, zD) {
        var wD = null == DD ? null : "undefined" !== typeof Symbol && DD[Symbol.iterator] || DD["@@iterator"];
        if (null == wD) return;
        var pD, sD, KD = [],
          rD = !0,
          LD = !1;
        try {
          for (wD = wD.call(DD); !(rD = (pD = wD.next()).done) && (KD.push(pD.value), !zD || KD.length !== zD); rD = !0);
        } catch (cD) {
          LD = !0, sD = cD
        } finally {
          try {
            rD || null == wD.return || wD.return()
          } finally {
            if (LD) throw sD
          }
        }
        return KD
      }(DD, zD) || sz(DD, zD) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function sz(DD, zD) {
      if (DD) {
        if ("string" === typeof DD) return Kz(DD, zD);
        var wD = Object.prototype.toString.call(DD).slice(8, -1);
        return "Object" === wD && DD.constructor && (wD = DD.constructor.name), "Map" === wD || "Set" === wD ? Array.from(DD) : "Arguments" === wD || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(wD) ? Kz(DD, zD) : void 0
      }
    }

    function Kz(DD, zD) {
      (null == zD || zD > DD.length) && (zD = DD.length);
      for (var wD = 0, pD = new Array(zD); wD < zD; wD++) pD[wD] = DD[wD];
      return pD
    }

    function rz(DD, zD) {
      var wD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var pD = Object.getOwnPropertySymbols(DD);
        zD && (pD = pD.filter((function(zD) {
          return Object.getOwnPropertyDescriptor(DD, zD).enumerable
        }))), wD.push.apply(wD, pD)
      }
      return wD
    }

    function Lz(DD) {
      for (var zD = 1; zD < arguments.length; zD++) {
        var wD = null != arguments[zD] ? arguments[zD] : {};
        zD % 2 ? rz(Object(wD), !0).forEach((function(zD) {
          cz(DD, zD, wD[zD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(wD)) : rz(Object(wD)).forEach((function(zD) {
          Object.defineProperty(DD, zD, Object.getOwnPropertyDescriptor(wD, zD))
        }))
      }
      return DD
    }

    function cz(DD, zD, wD) {
      return zD in DD ? Object.defineProperty(DD, zD, {
        value: wD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[zD] = wD, DD
    }

    function gz(DD, zD) {
      if (null == DD) return {};
      var wD, pD, sD = function(DD, zD) {
        if (null == DD) return {};
        var wD, pD, sD = {},
          KD = Object.keys(DD);
        for (pD = 0; pD < KD.length; pD++) wD = KD[pD], zD.indexOf(wD) >= 0 || (sD[wD] = DD[wD]);
        return sD
      }(DD, zD);
      if (Object.getOwnPropertySymbols) {
        var KD = Object.getOwnPropertySymbols(DD);
        for (pD = 0; pD < KD.length; pD++) wD = KD[pD], zD.indexOf(wD) >= 0 || Object.prototype.propertyIsEnumerable.call(DD, wD) && (sD[wD] = DD[wD])
      }
      return sD
    }
    var Rz = (0, pD.forwardRef)((function(DD, zD) {
      var wD = DD.children,
        sD = fz(gz(DD, HD)),
        KD = sD.open,
        rD = gz(sD, qD);
      return (0, pD.useImperativeHandle)(zD, (function() {
        return {
          open: KD
        }
      }), [KD]), pD.createElement(pD.Fragment, null, wD(Lz(Lz({}, rD), {}, {
        open: KD
      })))
    }));
    Rz.displayName = "Dropzone";
    var Az = {
      disabled: !1,
      getFilesFromEvent: function(DD) {
        return rD(this, void 0, void 0, (function() {
          return LD(this, (function(zD) {
            return fD(DD) && fD(DD.dataTransfer) ? [2, GD(DD.dataTransfer, DD.type)] : function(DD) {
              return fD(DD) && fD(DD.target)
            }(DD) ? [2, ID(DD)] : Array.isArray(DD) && DD.every((function(DD) {
              return "getFile" in DD && "function" === typeof DD.getFile
            })) ? [2, BD(DD)] : [2, []]
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
    Rz.defaultProps = Az, Rz.propTypes = {
      children: KD().func,
      accept: KD().objectOf(KD().arrayOf(KD().string)),
      multiple: KD().bool,
      preventDropOnDocument: KD().bool,
      noClick: KD().bool,
      noKeyboard: KD().bool,
      noDrag: KD().bool,
      noDragEventsBubbling: KD().bool,
      minSize: KD().number,
      maxSize: KD().number,
      maxFiles: KD().number,
      disabled: KD().bool,
      getFilesFromEvent: KD().func,
      onFileDialogCancel: KD().func,
      onFileDialogOpen: KD().func,
      useFsAccessApi: KD().bool,
      autoFocus: KD().bool,
      onDragEnter: KD().func,
      onDragLeave: KD().func,
      onDragOver: KD().func,
      onDrop: KD().func,
      onDropAccepted: KD().func,
      onDropRejected: KD().func,
      onError: KD().func,
      validator: KD().func
    };
    var Uz = {
      eT: !1,
      isFileDialogActive: !1,
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1,
      acceptedFiles: [],
      fileRejections: []
    };

    function fz() {
      var DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        zD = Lz(Lz({}, Az), DD),
        wD = zD.accept,
        sD = zD.disabled,
        KD = zD.getFilesFromEvent,
        rD = zD.maxSize,
        LD = zD.minSize,
        cD = zD.multiple,
        gD = zD.maxFiles,
        RD = zD.onDragEnter,
        AD = zD.onDragLeave,
        UD = zD.onDragOver,
        fD = zD.onDrop,
        ID = zD.onDropAccepted,
        BD = zD.onDropRejected,
        GD = zD.onFileDialogCancel,
        hD = zD.onFileDialogOpen,
        nD = zD.useFsAccessApi,
        MD = zD.autoFocus,
        OD = zD.preventDropOnDocument,
        JD = zD.noClick,
        ED = zD.noKeyboard,
        QD = zD.noDrag,
        XD = zD.noDragEventsBubbling,
        VD = zD.onError,
        CD = zD.validator,
        jD = (0, pD.useMemo)((function() {
          return function(DD) {
            if (oD(DD)) return Object.entries(DD).reduce((function(DD, zD) {
              var wD = bD(zD, 2),
                pD = wD[0],
                sD = wD[1];
              return [].concat(PD(DD), [pD], PD(sD))
            }), []).filter((function(DD) {
              return FD(DD) || YD(DD)
            })).join(",")
          }(wD)
        }), [wD]),
        dD = (0, pD.useMemo)((function() {
          return function(DD) {
            return oD(DD) ? [{
              description: "Files",
              accept: Object.entries(DD).filter((function(DD) {
                var zD = bD(DD, 2),
                  wD = zD[0],
                  pD = zD[1],
                  sD = !0;
                return FD(wD) || (console.warn('Skipped "'.concat(wD, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), sD = !1), Array.isArray(pD) && pD.every(YD) || (console.warn('Skipped "'.concat(wD, '" because an invalid file extension was provided.')), sD = !1), sD
              })).reduce((function(DD, zD) {
                var wD = bD(zD, 2),
                  pD = wD[0],
                  sD = wD[1];
                return xD(xD({}, DD), {}, TD({}, pD, sD))
              }), {})
            }] : DD
          }(wD)
        }), [wD]),
        SD = (0, pD.useMemo)((function() {
          return "function" === typeof hD ? hD : Bz
        }), [hD]),
        iD = (0, pD.useMemo)((function() {
          return "function" === typeof GD ? GD : Bz
        }), [GD]),
        lD = (0, pD.useRef)(null),
        WD = (0, pD.useRef)(null),
        ND = pz((0, pD.useReducer)(Iz, Uz), 2),
        ZD = ND[0],
        yD = ND[1],
        HD = ZD.eT,
        qD = ZD.isFileDialogActive,
        sz = (0, pD.useRef)("undefined" !== typeof window && window.isSecureContext && nD && "showOpenFilePicker" in window),
        Kz = function() {
          !sz.current && qD && setTimeout((function() {
            WD.current && (WD.current.files.length || (yD({
              type: "closeDialog"
            }), iD()))
          }), 300)
        };
      (0, pD.useEffect)((function() {
        return window.addEventListener("focus", Kz, !1),
          function() {
            window.removeEventListener("focus", Kz, !1)
          }
      }), [WD, qD, iD, sz]);
      var rz = (0, pD.useRef)([]),
        Rz = function(DD) {
          lD.current && lD.current.contains(DD.target) || (DD.preventDefault(), rz.current = [])
        };
      (0, pD.useEffect)((function() {
        return OD && (document.addEventListener("dragover", vD, !1), document.addEventListener("drop", Rz, !1)),
          function() {
            OD && (document.removeEventListener("dragover", vD), document.removeEventListener("drop", Rz))
          }
      }), [lD, OD]), (0, pD.useEffect)((function() {
        return !sD && MD && lD.current && lD.current.focus(),
          function() {}
      }), [lD, MD, sD]);
      var fz = (0, pD.useCallback)((function(DD) {
          VD ? VD(DD) : console.error(DD)
        }), [VD]),
        Gz = (0, pD.useCallback)((function(DD) {
          DD.preventDefault(), DD.persist(), Tz(DD), rz.current = [].concat(wz(rz.current), [DD.target]), uD(DD) && Promise.resolve(KD(DD)).then((function(zD) {
            if (!aD(DD) || XD) {
              var wD = zD.length,
                pD = wD > 0 && function(DD) {
                  var zD = DD.files,
                    wD = DD.accept,
                    pD = DD.minSize,
                    sD = DD.maxSize,
                    KD = DD.multiple,
                    rD = DD.maxFiles,
                    LD = DD.validator;
                  return !(!KD && zD.length > 1 || KD && rD >= 1 && zD.length > rD) && zD.every((function(DD) {
                    var zD = bD(mD(DD, wD), 1)[0],
                      KD = bD(eD(DD, pD, sD), 1)[0],
                      rD = LD ? LD(DD) : null;
                    return zD && KD && !rD
                  }))
                }({
                  files: zD,
                  accept: jD,
                  minSize: LD,
                  maxSize: rD,
                  multiple: cD,
                  maxFiles: gD,
                  validator: CD
                });
              yD({
                isDragAccept: pD,
                isDragReject: wD > 0 && !pD,
                isDragActive: !0,
                type: "setDraggedFiles"
              }), RD && RD(DD)
            }
          })).catch((function(DD) {
            return fz(DD)
          }))
        }), [KD, RD, fz, XD, jD, LD, rD, cD, gD, CD]),
        hz = (0, pD.useCallback)((function(DD) {
          DD.preventDefault(), DD.persist(), Tz(DD);
          var zD = uD(DD);
          if (zD && DD.dataTransfer) try {
            DD.dataTransfer.dropEffect = "copy"
          } catch (wD) {}
          return zD && UD && UD(DD), !1
        }), [UD, XD]),
        nz = (0, pD.useCallback)((function(DD) {
          DD.preventDefault(), DD.persist(), Tz(DD);
          var zD = rz.current.filter((function(DD) {
              return lD.current && lD.current.contains(DD)
            })),
            wD = zD.indexOf(DD.target); - 1 !== wD && zD.splice(wD, 1), rz.current = zD, zD.length > 0 || (yD({
            type: "setDraggedFiles",
            isDragActive: !1,
            isDragAccept: !1,
            isDragReject: !1
          }), uD(DD) && AD && AD(DD))
        }), [lD, AD, XD]),
        Mz = (0, pD.useCallback)((function(DD, zD) {
          var wD = [],
            pD = [];
          DD.forEach((function(DD) {
            var zD = pz(mD(DD, jD), 2),
              sD = zD[0],
              KD = zD[1],
              cD = pz(eD(DD, LD, rD), 2),
              gD = cD[0],
              RD = cD[1],
              AD = CD ? CD(DD) : null;
            if (sD && gD && !AD) wD.push(DD);
            else {
              var UD = [KD, RD];
              AD && (UD = UD.concat(AD)), pD.push({
                file: DD,
                errors: UD.filter((function(DD) {
                  return DD
                }))
              })
            }
          })), (!cD && wD.length > 1 || cD && gD >= 1 && wD.length > gD) && (wD.forEach((function(DD) {
            pD.push({
              file: DD,
              errors: [kD]
            })
          })), wD.splice(0)), yD({
            acceptedFiles: wD,
            fileRejections: pD,
            type: "setFiles"
          }), fD && fD(wD, pD, zD), pD.length > 0 && BD && BD(pD, zD), wD.length > 0 && ID && ID(wD, zD)
        }), [yD, cD, jD, LD, rD, gD, fD, ID, BD, CD]),
        Oz = (0, pD.useCallback)((function(DD) {
          DD.preventDefault(), DD.persist(), Tz(DD), rz.current = [], uD(DD) && Promise.resolve(KD(DD)).then((function(zD) {
            aD(DD) && !XD || Mz(zD, DD)
          })).catch((function(DD) {
            return fz(DD)
          })), yD({
            type: "reset"
          })
        }), [KD, Mz, fz, XD]),
        Jz = (0, pD.useCallback)((function() {
          if (sz.current) {
            yD({
              type: "openDialog"
            }), SD();
            var DD = {
              multiple: cD,
              types: dD
            };
            window.showOpenFilePicker(DD).then((function(DD) {
              return KD(DD)
            })).then((function(DD) {
              Mz(DD, null), yD({
                type: "closeDialog"
              })
            })).catch((function(DD) {
              var zD;
              (zD = DD) instanceof DOMException && ("AbortError" === zD.name || zD.code === zD.ABORT_ERR) ? (iD(DD), yD({
                type: "closeDialog"
              })) : ! function(DD) {
                return DD instanceof DOMException && ("SecurityError" === DD.name || DD.code === DD.SECURITY_ERR)
              }(DD) ? fz(DD) : (sz.current = !1, WD.current ? (WD.current.value = null, WD.current.click()) : fz(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))
            }))
          } else WD.current && (yD({
            type: "openDialog"
          }), SD(), WD.current.value = null, WD.current.click())
        }), [yD, SD, iD, nD, Mz, fz, dD, cD]),
        Ez = (0, pD.useCallback)((function(DD) {
          lD.current && lD.current.isEqualNode(DD.target) && (" " !== DD.key && "Enter" !== DD.key && 32 !== DD.keyCode && 13 !== DD.keyCode || (DD.preventDefault(), Jz()))
        }), [lD, Jz]),
        Qz = (0, pD.useCallback)((function() {
          yD({
            type: "focus"
          })
        }), []),
        Xz = (0, pD.useCallback)((function() {
          yD({
            type: "blur"
          })
        }), []),
        Vz = (0, pD.useCallback)((function() {
          JD || (! function() {
            var DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
            return function(DD) {
              return -1 !== DD.indexOf("MSIE") || -1 !== DD.indexOf("Trident/")
            }(DD) || function(DD) {
              return -1 !== DD.indexOf("Edge/")
            }(DD)
          }() ? Jz() : setTimeout(Jz, 0))
        }), [JD, Jz]),
        Pz = function(DD) {
          return sD ? null : DD
        },
        Cz = function(DD) {
          return ED ? null : Pz(DD)
        },
        xz = function(DD) {
          return QD ? null : Pz(DD)
        },
        Tz = function(DD) {
          XD && DD.stopPropagation()
        },
        bz = (0, pD.useMemo)((function() {
          return function() {
            var DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              zD = DD.refKey,
              wD = void 0 === zD ? "ref" : zD,
              pD = DD.role,
              KD = DD.onKeyDown,
              rD = DD.onFocus,
              LD = DD.onBlur,
              cD = DD.onClick,
              gD = DD.onDragEnter,
              RD = DD.onDragOver,
              AD = DD.onDragLeave,
              UD = DD.onDrop,
              fD = gz(DD, Dz);
            return Lz(Lz(cz({
              onKeyDown: Cz(tD(KD, Ez)),
              onFocus: Cz(tD(rD, Qz)),
              onBlur: Cz(tD(LD, Xz)),
              onClick: Pz(tD(cD, Vz)),
              onDragEnter: xz(tD(gD, Gz)),
              onDragOver: xz(tD(RD, hz)),
              onDragLeave: xz(tD(AD, nz)),
              onDrop: xz(tD(UD, Oz)),
              role: "string" === typeof pD && "" !== pD ? pD : "presentation"
            }, wD, lD), sD || ED ? {} : {
              tabIndex: 0
            }), fD)
          }
        }), [lD, Ez, Qz, Xz, Vz, Gz, hz, nz, Oz, ED, QD, sD]),
        jz = (0, pD.useCallback)((function(DD) {
          DD.stopPropagation()
        }), []),
        dz = (0, pD.useMemo)((function() {
          return function() {
            var DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              zD = DD.refKey,
              wD = void 0 === zD ? "ref" : zD,
              pD = DD.onChange,
              sD = DD.onClick,
              KD = gz(DD, zz);
            return Lz(Lz({}, cz({
              accept: jD,
              multiple: cD,
              type: "file",
              style: {
                display: "none"
              },
              onChange: Pz(tD(pD, Oz)),
              onClick: Pz(tD(sD, jz)),
              tabIndex: -1
            }, wD, WD)), KD)
          }
        }), [WD, wD, cD, Oz, sD]);
      return Lz(Lz({}, ZD), {}, {
        eT: HD && !sD,
        getRootProps: bz,
        getInputProps: dz,
        rootRef: lD,
        inputRef: WD,
        open: Pz(Jz)
      })
    }

    function Iz(DD, zD) {
      switch (zD.type) {
        case "focus":
          return Lz(Lz({}, DD), {}, {
            eT: !0
          });
        case "blur":
          return Lz(Lz({}, DD), {}, {
            eT: !1
          });
        case "openDialog":
          return Lz(Lz({}, Uz), {}, {
            isFileDialogActive: !0
          });
        case "closeDialog":
          return Lz(Lz({}, DD), {}, {
            isFileDialogActive: !1
          });
        case "setDraggedFiles":
          return Lz(Lz({}, DD), {}, {
            isDragActive: zD.isDragActive,
            isDragAccept: zD.isDragAccept,
            isDragReject: zD.isDragReject
          });
        case "setFiles":
          return Lz(Lz({}, DD), {}, {
            acceptedFiles: zD.acceptedFiles,
            fileRejections: zD.fileRejections
          });
        case "reset":
          return Lz({}, Uz);
        default:
          return DD
      }
    }

    function Bz() {}
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);