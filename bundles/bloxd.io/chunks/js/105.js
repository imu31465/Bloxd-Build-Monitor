export const id = 105;
export const ids = [105];
export const modules = {
  4754: (DD, CD) => {
    CD.d = function(DD, CD) {
      if (DD && CD) {
        var cD = Array.isArray(CD) ? CD : CD.split(","),
          ID = DD.name || "",
          pD = (DD.type || "").toLowerCase(),
          iD = pD.replace(/\/.*$/, "");
        return cD.some((function(DD) {
          var CD = DD.trim().toLowerCase();
          return "." === CD.charAt(0) ? ID.toLowerCase().endsWith(CD) : CD.endsWith("/*") ? iD === CD.replace(/\/.*$/, "") : pD === CD
        }))
      }
      return !0
    }
  },
  4734: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => MC
    });
    var ID = cD(53),
      pD = cD(4741),
      iD = cD.n(pD);

    function fD(DD, CD, cD, ID) {
      return new(cD || (cD = Promise))((function(pD, iD) {
        function fD(DD) {
          try {
            QD(ID.next(DD))
          } catch (CD) {
            iD(CD)
          }
        }

        function bD(DD) {
          try {
            QD(ID.throw(DD))
          } catch (CD) {
            iD(CD)
          }
        }

        function QD(DD) {
          var CD;
          DD.done ? pD(DD.value) : (CD = DD.value, CD instanceof cD ? CD : new cD((function(DD) {
            DD(CD)
          }))).then(fD, bD)
        }
        QD((ID = ID.apply(DD, CD || [])).next())
      }))
    }

    function bD(DD, CD) {
      var cD, ID, pD, iD, fD = {
        label: 0,
        sent: function() {
          if (1 & pD[0]) throw pD[1];
          return pD[1]
        },
        trys: [],
        ops: []
      };
      return iD = {
        next: bD(0),
        throw: bD(1),
        return: bD(2)
      }, "function" === typeof Symbol && (iD[Symbol.iterator] = function() {
        return this
      }), iD;

      function bD(bD) {
        return function(QD) {
          return function(bD) {
            if (cD) throw new TypeError("Generator is already executing.");
            for (; iD && (iD = 0, bD[0] && (fD = 0)), fD;) try {
              if (cD = 1, ID && (pD = 2 & bD[0] ? ID.return : bD[0] ? ID.throw || ((pD = ID.return) && pD.call(ID), 0) : ID.next) && !(pD = pD.call(ID, bD[1])).done) return pD;
              switch (ID = 0, pD && (bD = [2 & bD[0], pD.value]), bD[0]) {
                case 0:
                case 1:
                  pD = bD;
                  break;
                case 4:
                  return fD.label++, {
                    value: bD[1],
                    done: !1
                  };
                case 5:
                  fD.label++, ID = bD[1], bD = [0];
                  continue;
                case 7:
                  bD = fD.ops.pop(), fD.trys.pop();
                  continue;
                default:
                  if (!(pD = (pD = fD.trys).length > 0 && pD[pD.length - 1]) && (6 === bD[0] || 2 === bD[0])) {
                    fD = 0;
                    continue
                  }
                  if (3 === bD[0] && (!pD || bD[1] > pD[0] && bD[1] < pD[3])) {
                    fD.label = bD[1];
                    break
                  }
                  if (6 === bD[0] && fD.label < pD[1]) {
                    fD.label = pD[1], pD = bD;
                    break
                  }
                  if (pD && fD.label < pD[2]) {
                    fD.label = pD[2], fD.ops.push(bD);
                    break
                  }
                  pD[2] && fD.ops.pop(), fD.trys.pop();
                  continue
              }
              bD = CD.call(DD, fD)
            } catch (QD) {
              bD = [6, QD], ID = 0
            } finally {
              cD = pD = 0
            }
            if (5 & bD[0]) throw bD[1];
            return {
              value: bD[0] ? bD[1] : void 0,
              done: !0
            }
          }([bD, QD])
        }
      }
    }
    Object.create;

    function QD(DD, CD) {
      var cD = "function" === typeof Symbol && DD[Symbol.iterator];
      if (!cD) return DD;
      var ID, pD, iD = cD.call(DD),
        fD = [];
      try {
        for (;
          (void 0 === CD || CD-- > 0) && !(ID = iD.next()).done;) fD.push(ID.value)
      } catch (bD) {
        pD = {
          error: bD
        }
      } finally {
        try {
          ID && !ID.done && (cD = iD.return) && cD.call(iD)
        } finally {
          if (pD) throw pD.error
        }
      }
      return fD
    }

    function wD(DD, CD, cD) {
      if (cD || 2 === arguments.length)
        for (var ID, pD = 0, iD = CD.length; pD < iD; pD++) !ID && pD in CD || (ID || (ID = Array.prototype.slice.call(CD, 0, pD)), ID[pD] = CD[pD]);
      return DD.concat(ID || Array.prototype.slice.call(CD))
    }
    Object.create;
    "function" === typeof SuppressedError && SuppressedError;
    var SD = new Map([
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
      ["Rf", "application/vnd.ms-outlook"]
    ]);

    function BD(DD, CD) {
      var cD = function(DD) {
        var CD = DD.name;
        if (CD && -1 !== CD.lastIndexOf(".") && !DD.type) {
          var cD = CD.split(".").pop().toLowerCase(),
            ID = SD.get(cD);
          ID && Object.defineProperty(DD, "type", {
            value: ID,
            writable: !1,
            configurable: !1,
            enumerable: !0
          })
        }
        return DD
      }(DD);
      if ("string" !== typeof cD.path) {
        var ID = DD.webkitRelativePath;
        Object.defineProperty(cD, "path", {
          value: "string" === typeof CD ? CD : "string" === typeof ID && ID.length > 0 ? ID : DD.name,
          writable: !1,
          configurable: !1,
          enumerable: !0
        })
      }
      return cD
    }
    var yD = [".DS_Store", "Thumbs.db"];

    function MD(DD) {
      return "object" === typeof DD && null !== DD
    }

    function tD(DD) {
      return ND(DD.target.files).map((function(DD) {
        return BD(DD)
      }))
    }

    function ZD(DD) {
      return fD(this, void 0, void 0, (function() {
        return bD(this, (function(CD) {
          switch (CD.label) {
            case 0:
              return [4, Promise.all(DD.map((function(DD) {
                return DD.getFile()
              })))];
            case 1:
              return [2, CD.sent().map((function(DD) {
                return BD(DD)
              }))]
          }
        }))
      }))
    }

    function oD(DD, CD) {
      return fD(this, void 0, void 0, (function() {
        var cD;
        return bD(this, (function(ID) {
          switch (ID.label) {
            case 0:
              return DD.items ? (cD = ND(DD.items).filter((function(DD) {
                return "file" === DD.kind
              })), "drop" !== CD ? [2, cD] : [4, Promise.all(cD.map(gD))]) : [3, 2];
            case 1:
              return [2, vD(XD(ID.sent()))];
            case 2:
              return [2, vD(ND(DD.files).map((function(DD) {
                return BD(DD)
              })))]
          }
        }))
      }))
    }

    function vD(DD) {
      return DD.filter((function(DD) {
        return -1 === yD.indexOf(DD.name)
      }))
    }

    function ND(DD) {
      if (null === DD) return [];
      for (var CD = [], cD = 0; cD < DD.length; cD++) {
        var ID = DD[cD];
        CD.push(ID)
      }
      return CD
    }

    function gD(DD) {
      if ("function" !== typeof DD.webkitGetAsEntry) return mD(DD);
      var CD = DD.webkitGetAsEntry();
      return CD && CD.isDirectory ? OD(CD) : mD(DD)
    }

    function XD(DD) {
      return DD.reduce((function(DD, CD) {
        return wD(wD([], QD(DD), !1), QD(Array.isArray(CD) ? XD(CD) : [CD]), !1)
      }), [])
    }

    function mD(DD) {
      var CD = DD.getAsFile();
      if (!CD) return Promise.reject("".concat(DD, " is not a File"));
      var cD = BD(CD);
      return Promise.resolve(cD)
    }

    function nD(DD) {
      return fD(this, void 0, void 0, (function() {
        return bD(this, (function(CD) {
          return [2, DD.isDirectory ? OD(DD) : PD(DD)]
        }))
      }))
    }

    function OD(DD) {
      var CD = DD.createReader();
      return new Promise((function(DD, cD) {
        var ID = [];
        ! function pD() {
          var iD = this;
          CD.readEntries((function(CD) {
            return fD(iD, void 0, void 0, (function() {
              var iD, fD, QD;
              return bD(this, (function(bD) {
                switch (bD.label) {
                  case 0:
                    if (CD.length) return [3, 5];
                    bD.label = 1;
                  case 1:
                    return bD.trys.push([1, 3, , 4]), [4, Promise.all(ID)];
                  case 2:
                    return iD = bD.sent(), DD(iD), [3, 4];
                  case 3:
                    return fD = bD.sent(), cD(fD), [3, 4];
                  case 4:
                    return [3, 6];
                  case 5:
                    QD = Promise.all(CD.map(nD)), ID.push(QD), pD(), bD.label = 6;
                  case 6:
                    return [2]
                }
              }))
            }))
          }), (function(DD) {
            cD(DD)
          }))
        }()
      }))
    }

    function PD(DD) {
      return fD(this, void 0, void 0, (function() {
        return bD(this, (function(CD) {
          return [2, new Promise((function(CD, cD) {
            DD.file((function(cD) {
              var ID = BD(cD, DD.fullPath);
              CD(ID)
            }), (function(DD) {
              cD(DD)
            }))
          }))]
        }))
      }))
    }
    var HD = cD(4754);

    function UD(DD) {
      return function(DD) {
        if (Array.isArray(DD)) return VD(DD)
      }(DD) || function(DD) {
        if ("undefined" !== typeof Symbol && null != DD[Symbol.iterator] || null != DD["@@iterator"]) return Array.from(DD)
      }(DD) || aD(DD) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function xD(DD, CD) {
      var cD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var ID = Object.getOwnPropertySymbols(DD);
        CD && (ID = ID.filter((function(CD) {
          return Object.getOwnPropertyDescriptor(DD, CD).enumerable
        }))), cD.push.apply(cD, ID)
      }
      return cD
    }

    function qD(DD) {
      for (var CD = 1; CD < arguments.length; CD++) {
        var cD = null != arguments[CD] ? arguments[CD] : {};
        CD % 2 ? xD(Object(cD), !0).forEach((function(CD) {
          JD(DD, CD, cD[CD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(cD)) : xD(Object(cD)).forEach((function(CD) {
          Object.defineProperty(DD, CD, Object.getOwnPropertyDescriptor(cD, CD))
        }))
      }
      return DD
    }

    function JD(DD, CD, cD) {
      return CD in DD ? Object.defineProperty(DD, CD, {
        value: cD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[CD] = cD, DD
    }

    function KD(DD, CD) {
      return function(DD) {
        if (Array.isArray(DD)) return DD
      }(DD) || function(DD, CD) {
        var cD = null == DD ? null : "undefined" !== typeof Symbol && DD[Symbol.iterator] || DD["@@iterator"];
        if (null == cD) return;
        var ID, pD, iD = [],
          fD = !0,
          bD = !1;
        try {
          for (cD = cD.call(DD); !(fD = (ID = cD.next()).done) && (iD.push(ID.value), !CD || iD.length !== CD); fD = !0);
        } catch (QD) {
          bD = !0, pD = QD
        } finally {
          try {
            fD || null == cD.return || cD.return()
          } finally {
            if (bD) throw pD
          }
        }
        return iD
      }(DD, CD) || aD(DD, CD) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function aD(DD, CD) {
      if (DD) {
        if ("string" === typeof DD) return VD(DD, CD);
        var cD = Object.prototype.toString.call(DD).slice(8, -1);
        return "Object" === cD && DD.constructor && (cD = DD.constructor.name), "Map" === cD || "Set" === cD ? Array.from(DD) : "Arguments" === cD || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cD) ? VD(DD, CD) : void 0
      }
    }

    function VD(DD, CD) {
      (null == CD || CD > DD.length) && (CD = DD.length);
      for (var cD = 0, ID = new Array(CD); cD < CD; cD++) ID[cD] = DD[cD];
      return ID
    }
    var zD = "file-invalid-type",
      jD = "file-too-large",
      lD = "file-too-small",
      LD = "too-many-files",
      TD = function(DD) {
        DD = Array.isArray(DD) && 1 === DD.length ? DD[0] : DD;
        var CD = Array.isArray(DD) ? "one of ".concat(DD.join(", ")) : DD;
        return {
          code: zD,
          message: "File type must be ".concat(CD)
        }
      },
      GD = function(DD) {
        return {
          code: jD,
          message: "File is larger than ".concat(DD, " ").concat(1 === DD ? "byte" : "bytes")
        }
      },
      RD = function(DD) {
        return {
          code: lD,
          message: "File is smaller than ".concat(DD, " ").concat(1 === DD ? "byte" : "bytes")
        }
      },
      kD = {
        code: LD,
        message: "Too many files"
      };

    function dD(DD, CD) {
      var cD = "application/x-moz-file" === DD.type || (0, HD.d)(DD, CD);
      return [cD, cD ? null : TD(CD)]
    }

    function YD(DD, CD, cD) {
      if (WD(DD.size))
        if (WD(CD) && WD(cD)) {
          if (DD.size > cD) return [!1, GD(cD)];
          if (DD.size < CD) return [!1, RD(CD)]
        } else {
          if (WD(CD) && DD.size < CD) return [!1, RD(CD)];
          if (WD(cD) && DD.size > cD) return [!1, GD(cD)]
        } return [!0, null]
    }

    function WD(DD) {
      return void 0 !== DD && null !== DD
    }

    function sD(DD) {
      return "function" === typeof DD.isPropagationStopped ? DD.isPropagationStopped() : "undefined" !== typeof DD.cancelBubble && DD.cancelBubble
    }

    function ED(DD) {
      return DD.dataTransfer ? Array.prototype.some.call(DD.dataTransfer.types, (function(DD) {
        return "Files" === DD || "application/x-moz-file" === DD
      })) : !!DD.target && !!DD.target.files
    }

    function eD(DD) {
      DD.preventDefault()
    }

    function uD() {
      for (var DD = arguments.length, CD = new Array(DD), cD = 0; cD < DD; cD++) CD[cD] = arguments[cD];
      return function(DD) {
        for (var cD = arguments.length, ID = new Array(cD > 1 ? cD - 1 : 0), pD = 1; pD < cD; pD++) ID[pD - 1] = arguments[pD];
        return CD.some((function(CD) {
          return !sD(DD) && CD && CD.apply(void 0, [DD].concat(ID)), sD(DD)
        }))
      }
    }

    function hD(DD) {
      return "audio/*" === DD || "video/*" === DD || "image/*" === DD || "text/*" === DD || /\w+\/[-+.\w]+/g.test(DD)
    }

    function rD(DD) {
      return /^.*\.[\w]+$/.test(DD)
    }
    var AD = ["children"],
      FD = ["open"],
      DC = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
      CC = ["refKey", "onChange", "onClick"];

    function cC(DD) {
      return function(DD) {
        if (Array.isArray(DD)) return iC(DD)
      }(DD) || function(DD) {
        if ("undefined" !== typeof Symbol && null != DD[Symbol.iterator] || null != DD["@@iterator"]) return Array.from(DD)
      }(DD) || pC(DD) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function IC(DD, CD) {
      return function(DD) {
        if (Array.isArray(DD)) return DD
      }(DD) || function(DD, CD) {
        var cD = null == DD ? null : "undefined" !== typeof Symbol && DD[Symbol.iterator] || DD["@@iterator"];
        if (null == cD) return;
        var ID, pD, iD = [],
          fD = !0,
          bD = !1;
        try {
          for (cD = cD.call(DD); !(fD = (ID = cD.next()).done) && (iD.push(ID.value), !CD || iD.length !== CD); fD = !0);
        } catch (QD) {
          bD = !0, pD = QD
        } finally {
          try {
            fD || null == cD.return || cD.return()
          } finally {
            if (bD) throw pD
          }
        }
        return iD
      }(DD, CD) || pC(DD, CD) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function pC(DD, CD) {
      if (DD) {
        if ("string" === typeof DD) return iC(DD, CD);
        var cD = Object.prototype.toString.call(DD).slice(8, -1);
        return "Object" === cD && DD.constructor && (cD = DD.constructor.name), "Map" === cD || "Set" === cD ? Array.from(DD) : "Arguments" === cD || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cD) ? iC(DD, CD) : void 0
      }
    }

    function iC(DD, CD) {
      (null == CD || CD > DD.length) && (CD = DD.length);
      for (var cD = 0, ID = new Array(CD); cD < CD; cD++) ID[cD] = DD[cD];
      return ID
    }

    function fC(DD, CD) {
      var cD = Object.keys(DD);
      if (Object.getOwnPropertySymbols) {
        var ID = Object.getOwnPropertySymbols(DD);
        CD && (ID = ID.filter((function(CD) {
          return Object.getOwnPropertyDescriptor(DD, CD).enumerable
        }))), cD.push.apply(cD, ID)
      }
      return cD
    }

    function bC(DD) {
      for (var CD = 1; CD < arguments.length; CD++) {
        var cD = null != arguments[CD] ? arguments[CD] : {};
        CD % 2 ? fC(Object(cD), !0).forEach((function(CD) {
          QC(DD, CD, cD[CD])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(DD, Object.getOwnPropertyDescriptors(cD)) : fC(Object(cD)).forEach((function(CD) {
          Object.defineProperty(DD, CD, Object.getOwnPropertyDescriptor(cD, CD))
        }))
      }
      return DD
    }

    function QC(DD, CD, cD) {
      return CD in DD ? Object.defineProperty(DD, CD, {
        value: cD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : DD[CD] = cD, DD
    }

    function wC(DD, CD) {
      if (null == DD) return {};
      var cD, ID, pD = function(DD, CD) {
        if (null == DD) return {};
        var cD, ID, pD = {},
          iD = Object.keys(DD);
        for (ID = 0; ID < iD.length; ID++) cD = iD[ID], CD.indexOf(cD) >= 0 || (pD[cD] = DD[cD]);
        return pD
      }(DD, CD);
      if (Object.getOwnPropertySymbols) {
        var iD = Object.getOwnPropertySymbols(DD);
        for (ID = 0; ID < iD.length; ID++) cD = iD[ID], CD.indexOf(cD) >= 0 || Object.prototype.propertyIsEnumerable.call(DD, cD) && (pD[cD] = DD[cD])
      }
      return pD
    }
    var SC = (0, ID.forwardRef)((function(DD, CD) {
      var cD = DD.children,
        pD = MC(wC(DD, AD)),
        iD = pD.open,
        fD = wC(pD, FD);
      return (0, ID.useImperativeHandle)(CD, (function() {
        return {
          open: iD
        }
      }), [iD]), ID.createElement(ID.Fragment, null, cD(bC(bC({}, fD), {}, {
        open: iD
      })))
    }));
    SC.displayName = "Dropzone";
    var BC = {
      disabled: !1,
      getFilesFromEvent: function(DD) {
        return fD(this, void 0, void 0, (function() {
          return bD(this, (function(CD) {
            return MD(DD) && MD(DD.dataTransfer) ? [2, oD(DD.dataTransfer, DD.type)] : function(DD) {
              return MD(DD) && MD(DD.target)
            }(DD) ? [2, tD(DD)] : Array.isArray(DD) && DD.every((function(DD) {
              return "getFile" in DD && "function" === typeof DD.getFile
            })) ? [2, ZD(DD)] : [2, []]
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
    SC.defaultProps = BC, SC.propTypes = {
      children: iD().func,
      accept: iD().objectOf(iD().arrayOf(iD().string)),
      multiple: iD().bool,
      preventDropOnDocument: iD().bool,
      noClick: iD().bool,
      noKeyboard: iD().bool,
      noDrag: iD().bool,
      noDragEventsBubbling: iD().bool,
      minSize: iD().number,
      maxSize: iD().number,
      maxFiles: iD().number,
      disabled: iD().bool,
      getFilesFromEvent: iD().func,
      onFileDialogCancel: iD().func,
      onFileDialogOpen: iD().func,
      useFsAccessApi: iD().bool,
      autoFocus: iD().bool,
      onDragEnter: iD().func,
      onDragLeave: iD().func,
      onDragOver: iD().func,
      onDrop: iD().func,
      onDropAccepted: iD().func,
      onDropRejected: iD().func,
      onError: iD().func,
      validator: iD().func
    };
    var yC = {
      bq: !1,
      isFileDialogActive: !1,
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1,
      acceptedFiles: [],
      fileRejections: []
    };

    function MC() {
      var DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        CD = bC(bC({}, BC), DD),
        cD = CD.accept,
        pD = CD.disabled,
        iD = CD.getFilesFromEvent,
        fD = CD.maxSize,
        bD = CD.minSize,
        QD = CD.multiple,
        wD = CD.maxFiles,
        SD = CD.onDragEnter,
        BD = CD.onDragLeave,
        yD = CD.onDragOver,
        MD = CD.onDrop,
        tD = CD.onDropAccepted,
        ZD = CD.onDropRejected,
        oD = CD.onFileDialogCancel,
        vD = CD.onFileDialogOpen,
        ND = CD.useFsAccessApi,
        gD = CD.autoFocus,
        XD = CD.preventDropOnDocument,
        mD = CD.noClick,
        nD = CD.noKeyboard,
        OD = CD.noDrag,
        PD = CD.noDragEventsBubbling,
        HD = CD.onError,
        xD = CD.validator,
        aD = (0, ID.useMemo)((function() {
          return function(DD) {
            if (WD(DD)) return Object.entries(DD).reduce((function(DD, CD) {
              var cD = KD(CD, 2),
                ID = cD[0],
                pD = cD[1];
              return [].concat(UD(DD), [ID], UD(pD))
            }), []).filter((function(DD) {
              return hD(DD) || rD(DD)
            })).join(",")
          }(cD)
        }), [cD]),
        VD = (0, ID.useMemo)((function() {
          return function(DD) {
            return WD(DD) ? [{
              description: "Files",
              accept: Object.entries(DD).filter((function(DD) {
                var CD = KD(DD, 2),
                  cD = CD[0],
                  ID = CD[1],
                  pD = !0;
                return hD(cD) || (console.warn('Skipped "'.concat(cD, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), pD = !1), Array.isArray(ID) && ID.every(rD) || (console.warn('Skipped "'.concat(cD, '" because an invalid file extension was provided.')), pD = !1), pD
              })).reduce((function(DD, CD) {
                var cD = KD(CD, 2),
                  ID = cD[0],
                  pD = cD[1];
                return qD(qD({}, DD), {}, JD({}, ID, pD))
              }), {})
            }] : DD
          }(cD)
        }), [cD]),
        zD = (0, ID.useMemo)((function() {
          return "function" === typeof vD ? vD : ZC
        }), [vD]),
        jD = (0, ID.useMemo)((function() {
          return "function" === typeof oD ? oD : ZC
        }), [oD]),
        lD = (0, ID.useRef)(null),
        LD = (0, ID.useRef)(null),
        TD = IC((0, ID.useReducer)(tC, yC), 2),
        GD = TD[0],
        RD = TD[1],
        AD = GD.bq,
        FD = GD.isFileDialogActive,
        pC = (0, ID.useRef)("undefined" !== typeof window && window.isSecureContext && ND && "showOpenFilePicker" in window),
        iC = function() {
          !pC.current && FD && setTimeout((function() {
            LD.current && (LD.current.files.length || (RD({
              type: "closeDialog"
            }), jD()))
          }), 300)
        };
      (0, ID.useEffect)((function() {
        return window.addEventListener("focus", iC, !1),
          function() {
            window.removeEventListener("focus", iC, !1)
          }
      }), [LD, FD, jD, pC]);
      var fC = (0, ID.useRef)([]),
        SC = function(DD) {
          lD.current && lD.current.contains(DD.target) || (DD.preventDefault(), fC.current = [])
        };
      (0, ID.useEffect)((function() {
        return XD && (document.addEventListener("dragover", eD, !1), document.addEventListener("drop", SC, !1)),
          function() {
            XD && (document.removeEventListener("dragover", eD), document.removeEventListener("drop", SC))
          }
      }), [lD, XD]), (0, ID.useEffect)((function() {
        return !pD && gD && lD.current && lD.current.focus(),
          function() {}
      }), [lD, gD, pD]);
      var MC = (0, ID.useCallback)((function(DD) {
          HD ? HD(DD) : console.error(DD)
        }), [HD]),
        oC = (0, ID.useCallback)((function(DD) {
          DD.preventDefault(), DD.persist(), JC(DD), fC.current = [].concat(cC(fC.current), [DD.target]), ED(DD) && Promise.resolve(iD(DD)).then((function(CD) {
            if (!sD(DD) || PD) {
              var cD = CD.length,
                ID = cD > 0 && function(DD) {
                  var CD = DD.files,
                    cD = DD.accept,
                    ID = DD.minSize,
                    pD = DD.maxSize,
                    iD = DD.multiple,
                    fD = DD.maxFiles,
                    bD = DD.validator;
                  return !(!iD && CD.length > 1 || iD && fD >= 1 && CD.length > fD) && CD.every((function(DD) {
                    var CD = KD(dD(DD, cD), 1)[0],
                      iD = KD(YD(DD, ID, pD), 1)[0],
                      fD = bD ? bD(DD) : null;
                    return CD && iD && !fD
                  }))
                }({
                  files: CD,
                  accept: aD,
                  minSize: bD,
                  maxSize: fD,
                  multiple: QD,
                  maxFiles: wD,
                  validator: xD
                });
              RD({
                isDragAccept: ID,
                isDragReject: cD > 0 && !ID,
                isDragActive: !0,
                type: "setDraggedFiles"
              }), SD && SD(DD)
            }
          })).catch((function(DD) {
            return MC(DD)
          }))
        }), [iD, SD, MC, PD, aD, bD, fD, QD, wD, xD]),
        vC = (0, ID.useCallback)((function(DD) {
          DD.preventDefault(), DD.persist(), JC(DD);
          var CD = ED(DD);
          if (CD && DD.dataTransfer) try {
            DD.dataTransfer.dropEffect = "copy"
          } catch (cD) {}
          return CD && yD && yD(DD), !1
        }), [yD, PD]),
        NC = (0, ID.useCallback)((function(DD) {
          DD.preventDefault(), DD.persist(), JC(DD);
          var CD = fC.current.filter((function(DD) {
              return lD.current && lD.current.contains(DD)
            })),
            cD = CD.indexOf(DD.target); - 1 !== cD && CD.splice(cD, 1), fC.current = CD, CD.length > 0 || (RD({
            type: "setDraggedFiles",
            isDragActive: !1,
            isDragAccept: !1,
            isDragReject: !1
          }), ED(DD) && BD && BD(DD))
        }), [lD, BD, PD]),
        gC = (0, ID.useCallback)((function(DD, CD) {
          var cD = [],
            ID = [];
          DD.forEach((function(DD) {
            var CD = IC(dD(DD, aD), 2),
              pD = CD[0],
              iD = CD[1],
              QD = IC(YD(DD, bD, fD), 2),
              wD = QD[0],
              SD = QD[1],
              BD = xD ? xD(DD) : null;
            if (pD && wD && !BD) cD.push(DD);
            else {
              var yD = [iD, SD];
              BD && (yD = yD.concat(BD)), ID.push({
                file: DD,
                errors: yD.filter((function(DD) {
                  return DD
                }))
              })
            }
          })), (!QD && cD.length > 1 || QD && wD >= 1 && cD.length > wD) && (cD.forEach((function(DD) {
            ID.push({
              file: DD,
              errors: [kD]
            })
          })), cD.splice(0)), RD({
            acceptedFiles: cD,
            fileRejections: ID,
            type: "setFiles"
          }), MD && MD(cD, ID, CD), ID.length > 0 && ZD && ZD(ID, CD), cD.length > 0 && tD && tD(cD, CD)
        }), [RD, QD, aD, bD, fD, wD, MD, tD, ZD, xD]),
        XC = (0, ID.useCallback)((function(DD) {
          DD.preventDefault(), DD.persist(), JC(DD), fC.current = [], ED(DD) && Promise.resolve(iD(DD)).then((function(CD) {
            sD(DD) && !PD || gC(CD, DD)
          })).catch((function(DD) {
            return MC(DD)
          })), RD({
            type: "reset"
          })
        }), [iD, gC, MC, PD]),
        mC = (0, ID.useCallback)((function() {
          if (pC.current) {
            RD({
              type: "openDialog"
            }), zD();
            var DD = {
              multiple: QD,
              types: VD
            };
            window.showOpenFilePicker(DD).then((function(DD) {
              return iD(DD)
            })).then((function(DD) {
              gC(DD, null), RD({
                type: "closeDialog"
              })
            })).catch((function(DD) {
              var CD;
              (CD = DD) instanceof DOMException && ("AbortError" === CD.name || CD.code === CD.ABORT_ERR) ? (jD(DD), RD({
                type: "closeDialog"
              })) : ! function(DD) {
                return DD instanceof DOMException && ("SecurityError" === DD.name || DD.code === DD.SECURITY_ERR)
              }(DD) ? MC(DD) : (pC.current = !1, LD.current ? (LD.current.value = null, LD.current.click()) : MC(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))
            }))
          } else LD.current && (RD({
            type: "openDialog"
          }), zD(), LD.current.value = null, LD.current.click())
        }), [RD, zD, jD, ND, gC, MC, VD, QD]),
        nC = (0, ID.useCallback)((function(DD) {
          lD.current && lD.current.isEqualNode(DD.target) && (" " !== DD.key && "Enter" !== DD.key && 32 !== DD.keyCode && 13 !== DD.keyCode || (DD.preventDefault(), mC()))
        }), [lD, mC]),
        OC = (0, ID.useCallback)((function() {
          RD({
            type: "focus"
          })
        }), []),
        PC = (0, ID.useCallback)((function() {
          RD({
            type: "blur"
          })
        }), []),
        HC = (0, ID.useCallback)((function() {
          mD || (! function() {
            var DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
            return function(DD) {
              return -1 !== DD.indexOf("MSIE") || -1 !== DD.indexOf("Trident/")
            }(DD) || function(DD) {
              return -1 !== DD.indexOf("Edge/")
            }(DD)
          }() ? mC() : setTimeout(mC, 0))
        }), [mD, mC]),
        UC = function(DD) {
          return pD ? null : DD
        },
        xC = function(DD) {
          return nD ? null : UC(DD)
        },
        qC = function(DD) {
          return OD ? null : UC(DD)
        },
        JC = function(DD) {
          PD && DD.stopPropagation()
        },
        KC = (0, ID.useMemo)((function() {
          return function() {
            var DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              CD = DD.refKey,
              cD = void 0 === CD ? "ref" : CD,
              ID = DD.role,
              iD = DD.onKeyDown,
              fD = DD.onFocus,
              bD = DD.onBlur,
              QD = DD.onClick,
              wD = DD.onDragEnter,
              SD = DD.onDragOver,
              BD = DD.onDragLeave,
              yD = DD.onDrop,
              MD = wC(DD, DC);
            return bC(bC(QC({
              onKeyDown: xC(uD(iD, nC)),
              onFocus: xC(uD(fD, OC)),
              onBlur: xC(uD(bD, PC)),
              onClick: UC(uD(QD, HC)),
              onDragEnter: qC(uD(wD, oC)),
              onDragOver: qC(uD(SD, vC)),
              onDragLeave: qC(uD(BD, NC)),
              onDrop: qC(uD(yD, XC)),
              role: "string" === typeof ID && "" !== ID ? ID : "presentation"
            }, cD, lD), pD || nD ? {} : {
              tabIndex: 0
            }), MD)
          }
        }), [lD, nC, OC, PC, HC, oC, vC, NC, XC, nD, OD, pD]),
        aC = (0, ID.useCallback)((function(DD) {
          DD.stopPropagation()
        }), []),
        VC = (0, ID.useMemo)((function() {
          return function() {
            var DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              CD = DD.refKey,
              cD = void 0 === CD ? "ref" : CD,
              ID = DD.onChange,
              pD = DD.onClick,
              iD = wC(DD, CC);
            return bC(bC({}, QC({
              accept: aD,
              multiple: QD,
              type: "file",
              style: {
                display: "none"
              },
              onChange: UC(uD(ID, XC)),
              onClick: UC(uD(pD, aC)),
              tabIndex: -1
            }, cD, LD)), iD)
          }
        }), [LD, cD, QD, XC, pD]);
      return bC(bC({}, GD), {}, {
        bq: AD && !pD,
        getRootProps: KC,
        getInputProps: VC,
        rootRef: lD,
        inputRef: LD,
        open: UC(mC)
      })
    }

    function tC(DD, CD) {
      switch (CD.type) {
        case "focus":
          return bC(bC({}, DD), {}, {
            bq: !0
          });
        case "blur":
          return bC(bC({}, DD), {}, {
            bq: !1
          });
        case "openDialog":
          return bC(bC({}, yC), {}, {
            isFileDialogActive: !0
          });
        case "closeDialog":
          return bC(bC({}, DD), {}, {
            isFileDialogActive: !1
          });
        case "setDraggedFiles":
          return bC(bC({}, DD), {}, {
            isDragActive: CD.isDragActive,
            isDragAccept: CD.isDragAccept,
            isDragReject: CD.isDragReject
          });
        case "setFiles":
          return bC(bC({}, DD), {}, {
            acceptedFiles: CD.acceptedFiles,
            fileRejections: CD.fileRejections
          });
        case "reset":
          return bC({}, yC);
        default:
          return DD
      }
    }

    function ZC() {}
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);