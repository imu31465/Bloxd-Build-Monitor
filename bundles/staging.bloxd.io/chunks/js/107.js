export const id = 107;
export const ids = [107];
export const modules = {
  4922: (CC, zC) => {
    zC.b = function(CC, zC) {
      if (CC && zC) {
        var ZC = Array.isArray(zC) ? zC : zC.split(","),
          QC = CC.name || "",
          wC = (CC.type || "").toLowerCase(),
          bC = wC.replace(/\/.*$/, "");
        return ZC.some((function(CC) {
          var zC = CC.trim().toLowerCase();
          return "." === zC.charAt(0) ? QC.toLowerCase().endsWith(zC) : zC.endsWith("/*") ? bC === zC.replace(/\/.*$/, "") : wC === zC
        }))
      }
      return !0
    }
  },
  4895: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => Mz
    });
    var QC = ZC(48),
      wC = ZC(4903),
      bC = ZC.n(wC);

    function nC(CC, zC, ZC, QC) {
      return new(ZC || (ZC = Promise))((function(wC, bC) {
        function nC(CC) {
          try {
            oC(QC.next(CC))
          } catch (zC) {
            bC(zC)
          }
        }

        function fC(CC) {
          try {
            oC(QC.throw(CC))
          } catch (zC) {
            bC(zC)
          }
        }

        function oC(CC) {
          var zC;
          CC.done ? wC(CC.value) : (zC = CC.value, zC instanceof ZC ? zC : new ZC((function(CC) {
            CC(zC)
          }))).then(nC, fC)
        }
        oC((QC = QC.apply(CC, zC || [])).next())
      }))
    }

    function fC(CC, zC) {
      var ZC, QC, wC, bC, nC = {
        label: 0,
        sent: function() {
          if (1 & wC[0]) throw wC[1];
          return wC[1]
        },
        trys: [],
        ops: []
      };
      return bC = {
        next: fC(0),
        throw: fC(1),
        return: fC(2)
      }, "function" === typeof Symbol && (bC[Symbol.iterator] = function() {
        return this
      }), bC;

      function fC(fC) {
        return function(oC) {
          return function(fC) {
            if (ZC) throw new TypeError("Generator is already executing.");
            for (; bC && (bC = 0, fC[0] && (nC = 0)), nC;) try {
              if (ZC = 1, QC && (wC = 2 & fC[0] ? QC.return : fC[0] ? QC.throw || ((wC = QC.return) && wC.call(QC), 0) : QC.next) && !(wC = wC.call(QC, fC[1])).done) return wC;
              switch (QC = 0, wC && (fC = [2 & fC[0], wC.value]), fC[0]) {
                case 0:
                case 1:
                  wC = fC;
                  break;
                case 4:
                  return nC.label++, {
                    value: fC[1],
                    done: !1
                  };
                case 5:
                  nC.label++, QC = fC[1], fC = [0];
                  continue;
                case 7:
                  fC = nC.ops.pop(), nC.trys.pop();
                  continue;
                default:
                  if (!(wC = (wC = nC.trys).length > 0 && wC[wC.length - 1]) && (6 === fC[0] || 2 === fC[0])) {
                    nC = 0;
                    continue
                  }
                  if (3 === fC[0] && (!wC || fC[1] > wC[0] && fC[1] < wC[3])) {
                    nC.label = fC[1];
                    break
                  }
                  if (6 === fC[0] && nC.label < wC[1]) {
                    nC.label = wC[1], wC = fC;
                    break
                  }
                  if (wC && nC.label < wC[2]) {
                    nC.label = wC[2], nC.ops.push(fC);
                    break
                  }
                  wC[2] && nC.ops.pop(), nC.trys.pop();
                  continue
              }
              fC = zC.call(CC, nC)
            } catch (oC) {
              fC = [6, oC], QC = 0
            } finally {
              ZC = wC = 0
            }
            if (5 & fC[0]) throw fC[1];
            return {
              value: fC[0] ? fC[1] : void 0,
              done: !0
            }
          }([fC, oC])
        }
      }
    }
    Object.create;

    function oC(CC, zC) {
      var ZC = "function" === typeof Symbol && CC[Symbol.iterator];
      if (!ZC) return CC;
      var QC, wC, bC = ZC.call(CC),
        nC = [];
      try {
        for (;
          (void 0 === zC || zC-- > 0) && !(QC = bC.next()).done;) nC.push(QC.value)
      } catch (fC) {
        wC = {
          error: fC
        }
      } finally {
        try {
          QC && !QC.done && (ZC = bC.return) && ZC.call(bC)
        } finally {
          if (wC) throw wC.error
        }
      }
      return nC
    }

    function qC(CC, zC, ZC) {
      if (ZC || 2 === arguments.length)
        for (var QC, wC = 0, bC = zC.length; wC < bC; wC++) !QC && wC in zC || (QC || (QC = Array.prototype.slice.call(zC, 0, wC)), QC[wC] = zC[wC]);
      return CC.concat(QC || Array.prototype.slice.call(zC))
    }
    Object.create;
    "function" === typeof SuppressedError && SuppressedError;
    var FC = new Map([
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
      ["cq", "application/vnd.ms-outlook"]
    ]);

    function WC(CC, zC) {
      var ZC = function(CC) {
        var zC = CC.name;
        if (zC && -1 !== zC.lastIndexOf(".") && !CC.type) {
          var ZC = zC.split(".").pop().toLowerCase(),
            QC = FC.get(ZC);
          QC && Object.defineProperty(CC, "type", {
            value: QC,
            writable: !1,
            configurable: !1,
            enumerable: !0
          })
        }
        return CC
      }(CC);
      if ("string" !== typeof ZC.path) {
        var QC = CC.webkitRelativePath;
        Object.defineProperty(ZC, "path", {
          value: "string" === typeof zC ? zC : "string" === typeof QC && QC.length > 0 ? QC : CC.name,
          writable: !1,
          configurable: !1,
          enumerable: !0
        })
      }
      return ZC
    }
    var NC = [".DS_Store", "Thumbs.db"];

    function MC(CC) {
      return "object" === typeof CC && null !== CC
    }

    function gC(CC) {
      return GC(CC.target.files).map((function(CC) {
        return WC(CC)
      }))
    }

    function SC(CC) {
      return nC(this, void 0, void 0, (function() {
        return fC(this, (function(zC) {
          switch (zC.label) {
            case 0:
              return [4, Promise.all(CC.map((function(CC) {
                return CC.getFile()
              })))];
            case 1:
              return [2, zC.sent().map((function(CC) {
                return WC(CC)
              }))]
          }
        }))
      }))
    }

    function pC(CC, zC) {
      return nC(this, void 0, void 0, (function() {
        var ZC;
        return fC(this, (function(QC) {
          switch (QC.label) {
            case 0:
              return CC.items ? (ZC = GC(CC.items).filter((function(CC) {
                return "file" === CC.kind
              })), "drop" !== zC ? [2, ZC] : [4, Promise.all(ZC.map(RC))]) : [3, 2];
            case 1:
              return [2, PC(AC(QC.sent()))];
            case 2:
              return [2, PC(GC(CC.files).map((function(CC) {
                return WC(CC)
              })))]
          }
        }))
      }))
    }

    function PC(CC) {
      return CC.filter((function(CC) {
        return -1 === NC.indexOf(CC.name)
      }))
    }

    function GC(CC) {
      if (null === CC) return [];
      for (var zC = [], ZC = 0; ZC < CC.length; ZC++) {
        var QC = CC[ZC];
        zC.push(QC)
      }
      return zC
    }

    function RC(CC) {
      if ("function" !== typeof CC.webkitGetAsEntry) return xC(CC);
      var zC = CC.webkitGetAsEntry();
      return zC && zC.isDirectory ? IC(zC) : xC(CC)
    }

    function AC(CC) {
      return CC.reduce((function(CC, zC) {
        return qC(qC([], oC(CC), !1), oC(Array.isArray(zC) ? AC(zC) : [zC]), !1)
      }), [])
    }

    function xC(CC) {
      var zC = CC.getAsFile();
      if (!zC) return Promise.reject("".concat(CC, " is not a File"));
      var ZC = WC(zC);
      return Promise.resolve(ZC)
    }

    function JC(CC) {
      return nC(this, void 0, void 0, (function() {
        return fC(this, (function(zC) {
          return [2, CC.isDirectory ? IC(CC) : iC(CC)]
        }))
      }))
    }

    function IC(CC) {
      var zC = CC.createReader();
      return new Promise((function(CC, ZC) {
        var QC = [];
        ! function wC() {
          var bC = this;
          zC.readEntries((function(zC) {
            return nC(bC, void 0, void 0, (function() {
              var bC, nC, oC;
              return fC(this, (function(fC) {
                switch (fC.label) {
                  case 0:
                    if (zC.length) return [3, 5];
                    fC.label = 1;
                  case 1:
                    return fC.trys.push([1, 3, , 4]), [4, Promise.all(QC)];
                  case 2:
                    return bC = fC.sent(), CC(bC), [3, 4];
                  case 3:
                    return nC = fC.sent(), ZC(nC), [3, 4];
                  case 4:
                    return [3, 6];
                  case 5:
                    oC = Promise.all(zC.map(JC)), QC.push(oC), wC(), fC.label = 6;
                  case 6:
                    return [2]
                }
              }))
            }))
          }), (function(CC) {
            ZC(CC)
          }))
        }()
      }))
    }

    function iC(CC) {
      return nC(this, void 0, void 0, (function() {
        return fC(this, (function(zC) {
          return [2, new Promise((function(zC, ZC) {
            CC.file((function(ZC) {
              var QC = WC(ZC, CC.fullPath);
              zC(QC)
            }), (function(CC) {
              ZC(CC)
            }))
          }))]
        }))
      }))
    }
    var vC = ZC(4922);

    function eC(CC) {
      return function(CC) {
        if (Array.isArray(CC)) return HC(CC)
      }(CC) || function(CC) {
        if ("undefined" !== typeof Symbol && null != CC[Symbol.iterator] || null != CC["@@iterator"]) return Array.from(CC)
      }(CC) || mC(CC) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function hC(CC, zC) {
      var ZC = Object.keys(CC);
      if (Object.getOwnPropertySymbols) {
        var QC = Object.getOwnPropertySymbols(CC);
        zC && (QC = QC.filter((function(zC) {
          return Object.getOwnPropertyDescriptor(CC, zC).enumerable
        }))), ZC.push.apply(ZC, QC)
      }
      return ZC
    }

    function KC(CC) {
      for (var zC = 1; zC < arguments.length; zC++) {
        var ZC = null != arguments[zC] ? arguments[zC] : {};
        zC % 2 ? hC(Object(ZC), !0).forEach((function(zC) {
          YC(CC, zC, ZC[zC])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(CC, Object.getOwnPropertyDescriptors(ZC)) : hC(Object(ZC)).forEach((function(zC) {
          Object.defineProperty(CC, zC, Object.getOwnPropertyDescriptor(ZC, zC))
        }))
      }
      return CC
    }

    function YC(CC, zC, ZC) {
      return zC in CC ? Object.defineProperty(CC, zC, {
        value: ZC,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : CC[zC] = ZC, CC
    }

    function dC(CC, zC) {
      return function(CC) {
        if (Array.isArray(CC)) return CC
      }(CC) || function(CC, zC) {
        var ZC = null == CC ? null : "undefined" !== typeof Symbol && CC[Symbol.iterator] || CC["@@iterator"];
        if (null == ZC) return;
        var QC, wC, bC = [],
          nC = !0,
          fC = !1;
        try {
          for (ZC = ZC.call(CC); !(nC = (QC = ZC.next()).done) && (bC.push(QC.value), !zC || bC.length !== zC); nC = !0);
        } catch (oC) {
          fC = !0, wC = oC
        } finally {
          try {
            nC || null == ZC.return || ZC.return()
          } finally {
            if (fC) throw wC
          }
        }
        return bC
      }(CC, zC) || mC(CC, zC) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function mC(CC, zC) {
      if (CC) {
        if ("string" === typeof CC) return HC(CC, zC);
        var ZC = Object.prototype.toString.call(CC).slice(8, -1);
        return "Object" === ZC && CC.constructor && (ZC = CC.constructor.name), "Map" === ZC || "Set" === ZC ? Array.from(CC) : "Arguments" === ZC || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZC) ? HC(CC, zC) : void 0
      }
    }

    function HC(CC, zC) {
      (null == zC || zC > CC.length) && (zC = CC.length);
      for (var ZC = 0, QC = new Array(zC); ZC < zC; ZC++) QC[ZC] = CC[ZC];
      return QC
    }
    var EC = "file-invalid-type",
      lC = "file-too-large",
      XC = "file-too-small",
      cC = "too-many-files",
      uC = function(CC) {
        CC = Array.isArray(CC) && 1 === CC.length ? CC[0] : CC;
        var zC = Array.isArray(CC) ? "one of ".concat(CC.join(", ")) : CC;
        return {
          code: EC,
          message: "File type must be ".concat(zC)
        }
      },
      rC = function(CC) {
        return {
          code: lC,
          message: "File is larger than ".concat(CC, " ").concat(1 === CC ? "byte" : "bytes")
        }
      },
      sC = function(CC) {
        return {
          code: XC,
          message: "File is smaller than ".concat(CC, " ").concat(1 === CC ? "byte" : "bytes")
        }
      },
      TC = {
        code: cC,
        message: "Too many files"
      };

    function aC(CC, zC) {
      var ZC = "application/x-moz-file" === CC.type || (0, vC.b)(CC, zC);
      return [ZC, ZC ? null : uC(zC)]
    }

    function tC(CC, zC, ZC) {
      if (DC(CC.size))
        if (DC(zC) && DC(ZC)) {
          if (CC.size > ZC) return [!1, rC(ZC)];
          if (CC.size < zC) return [!1, sC(zC)]
        } else {
          if (DC(zC) && CC.size < zC) return [!1, sC(zC)];
          if (DC(ZC) && CC.size > ZC) return [!1, rC(ZC)]
        } return [!0, null]
    }

    function DC(CC) {
      return void 0 !== CC && null !== CC
    }

    function jC(CC) {
      return "function" === typeof CC.isPropagationStopped ? CC.isPropagationStopped() : "undefined" !== typeof CC.cancelBubble && CC.cancelBubble
    }

    function yC(CC) {
      return CC.dataTransfer ? Array.prototype.some.call(CC.dataTransfer.types, (function(CC) {
        return "Files" === CC || "application/x-moz-file" === CC
      })) : !!CC.target && !!CC.target.files
    }

    function LC(CC) {
      CC.preventDefault()
    }

    function UC() {
      for (var CC = arguments.length, zC = new Array(CC), ZC = 0; ZC < CC; ZC++) zC[ZC] = arguments[ZC];
      return function(CC) {
        for (var ZC = arguments.length, QC = new Array(ZC > 1 ? ZC - 1 : 0), wC = 1; wC < ZC; wC++) QC[wC - 1] = arguments[wC];
        return zC.some((function(zC) {
          return !jC(CC) && zC && zC.apply(void 0, [CC].concat(QC)), jC(CC)
        }))
      }
    }

    function BC(CC) {
      return "audio/*" === CC || "video/*" === CC || "image/*" === CC || "text/*" === CC || /\w+\/[-+.\w]+/g.test(CC)
    }

    function OC(CC) {
      return /^.*\.[\w]+$/.test(CC)
    }
    var kC = ["children"],
      VC = ["open"],
      Cz = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
      zz = ["refKey", "onChange", "onClick"];

    function Zz(CC) {
      return function(CC) {
        if (Array.isArray(CC)) return bz(CC)
      }(CC) || function(CC) {
        if ("undefined" !== typeof Symbol && null != CC[Symbol.iterator] || null != CC["@@iterator"]) return Array.from(CC)
      }(CC) || wz(CC) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Qz(CC, zC) {
      return function(CC) {
        if (Array.isArray(CC)) return CC
      }(CC) || function(CC, zC) {
        var ZC = null == CC ? null : "undefined" !== typeof Symbol && CC[Symbol.iterator] || CC["@@iterator"];
        if (null == ZC) return;
        var QC, wC, bC = [],
          nC = !0,
          fC = !1;
        try {
          for (ZC = ZC.call(CC); !(nC = (QC = ZC.next()).done) && (bC.push(QC.value), !zC || bC.length !== zC); nC = !0);
        } catch (oC) {
          fC = !0, wC = oC
        } finally {
          try {
            nC || null == ZC.return || ZC.return()
          } finally {
            if (fC) throw wC
          }
        }
        return bC
      }(CC, zC) || wz(CC, zC) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function wz(CC, zC) {
      if (CC) {
        if ("string" === typeof CC) return bz(CC, zC);
        var ZC = Object.prototype.toString.call(CC).slice(8, -1);
        return "Object" === ZC && CC.constructor && (ZC = CC.constructor.name), "Map" === ZC || "Set" === ZC ? Array.from(CC) : "Arguments" === ZC || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZC) ? bz(CC, zC) : void 0
      }
    }

    function bz(CC, zC) {
      (null == zC || zC > CC.length) && (zC = CC.length);
      for (var ZC = 0, QC = new Array(zC); ZC < zC; ZC++) QC[ZC] = CC[ZC];
      return QC
    }

    function nz(CC, zC) {
      var ZC = Object.keys(CC);
      if (Object.getOwnPropertySymbols) {
        var QC = Object.getOwnPropertySymbols(CC);
        zC && (QC = QC.filter((function(zC) {
          return Object.getOwnPropertyDescriptor(CC, zC).enumerable
        }))), ZC.push.apply(ZC, QC)
      }
      return ZC
    }

    function fz(CC) {
      for (var zC = 1; zC < arguments.length; zC++) {
        var ZC = null != arguments[zC] ? arguments[zC] : {};
        zC % 2 ? nz(Object(ZC), !0).forEach((function(zC) {
          oz(CC, zC, ZC[zC])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(CC, Object.getOwnPropertyDescriptors(ZC)) : nz(Object(ZC)).forEach((function(zC) {
          Object.defineProperty(CC, zC, Object.getOwnPropertyDescriptor(ZC, zC))
        }))
      }
      return CC
    }

    function oz(CC, zC, ZC) {
      return zC in CC ? Object.defineProperty(CC, zC, {
        value: ZC,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : CC[zC] = ZC, CC
    }

    function qz(CC, zC) {
      if (null == CC) return {};
      var ZC, QC, wC = function(CC, zC) {
        if (null == CC) return {};
        var ZC, QC, wC = {},
          bC = Object.keys(CC);
        for (QC = 0; QC < bC.length; QC++) ZC = bC[QC], zC.indexOf(ZC) >= 0 || (wC[ZC] = CC[ZC]);
        return wC
      }(CC, zC);
      if (Object.getOwnPropertySymbols) {
        var bC = Object.getOwnPropertySymbols(CC);
        for (QC = 0; QC < bC.length; QC++) ZC = bC[QC], zC.indexOf(ZC) >= 0 || Object.prototype.propertyIsEnumerable.call(CC, ZC) && (wC[ZC] = CC[ZC])
      }
      return wC
    }
    var Fz = (0, QC.forwardRef)((function(CC, zC) {
      var ZC = CC.children,
        wC = Mz(qz(CC, kC)),
        bC = wC.open,
        nC = qz(wC, VC);
      return (0, QC.useImperativeHandle)(zC, (function() {
        return {
          open: bC
        }
      }), [bC]), QC.createElement(QC.Fragment, null, ZC(fz(fz({}, nC), {}, {
        open: bC
      })))
    }));
    Fz.displayName = "Dropzone";
    var Wz = {
      disabled: !1,
      getFilesFromEvent: function(CC) {
        return nC(this, void 0, void 0, (function() {
          return fC(this, (function(zC) {
            return MC(CC) && MC(CC.dataTransfer) ? [2, pC(CC.dataTransfer, CC.type)] : function(CC) {
              return MC(CC) && MC(CC.target)
            }(CC) ? [2, gC(CC)] : Array.isArray(CC) && CC.every((function(CC) {
              return "getFile" in CC && "function" === typeof CC.getFile
            })) ? [2, SC(CC)] : [2, []]
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
    Fz.defaultProps = Wz, Fz.propTypes = {
      children: bC().func,
      accept: bC().objectOf(bC().arrayOf(bC().string)),
      multiple: bC().bool,
      preventDropOnDocument: bC().bool,
      noClick: bC().bool,
      noKeyboard: bC().bool,
      noDrag: bC().bool,
      noDragEventsBubbling: bC().bool,
      minSize: bC().number,
      maxSize: bC().number,
      maxFiles: bC().number,
      disabled: bC().bool,
      getFilesFromEvent: bC().func,
      onFileDialogCancel: bC().func,
      onFileDialogOpen: bC().func,
      useFsAccessApi: bC().bool,
      autoFocus: bC().bool,
      onDragEnter: bC().func,
      onDragLeave: bC().func,
      onDragOver: bC().func,
      onDrop: bC().func,
      onDropAccepted: bC().func,
      onDropRejected: bC().func,
      onError: bC().func,
      validator: bC().func
    };
    var Nz = {
      kY: !1,
      isFileDialogActive: !1,
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1,
      acceptedFiles: [],
      fileRejections: []
    };

    function Mz() {
      var CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        zC = fz(fz({}, Wz), CC),
        ZC = zC.accept,
        wC = zC.disabled,
        bC = zC.getFilesFromEvent,
        nC = zC.maxSize,
        fC = zC.minSize,
        oC = zC.multiple,
        qC = zC.maxFiles,
        FC = zC.onDragEnter,
        WC = zC.onDragLeave,
        NC = zC.onDragOver,
        MC = zC.onDrop,
        gC = zC.onDropAccepted,
        SC = zC.onDropRejected,
        pC = zC.onFileDialogCancel,
        PC = zC.onFileDialogOpen,
        GC = zC.useFsAccessApi,
        RC = zC.autoFocus,
        AC = zC.preventDropOnDocument,
        xC = zC.noClick,
        JC = zC.noKeyboard,
        IC = zC.noDrag,
        iC = zC.noDragEventsBubbling,
        vC = zC.onError,
        hC = zC.validator,
        mC = (0, QC.useMemo)((function() {
          return function(CC) {
            if (DC(CC)) return Object.entries(CC).reduce((function(CC, zC) {
              var ZC = dC(zC, 2),
                QC = ZC[0],
                wC = ZC[1];
              return [].concat(eC(CC), [QC], eC(wC))
            }), []).filter((function(CC) {
              return BC(CC) || OC(CC)
            })).join(",")
          }(ZC)
        }), [ZC]),
        HC = (0, QC.useMemo)((function() {
          return function(CC) {
            return DC(CC) ? [{
              description: "Files",
              accept: Object.entries(CC).filter((function(CC) {
                var zC = dC(CC, 2),
                  ZC = zC[0],
                  QC = zC[1],
                  wC = !0;
                return BC(ZC) || (console.warn('Skipped "'.concat(ZC, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), wC = !1), Array.isArray(QC) && QC.every(OC) || (console.warn('Skipped "'.concat(ZC, '" because an invalid file extension was provided.')), wC = !1), wC
              })).reduce((function(CC, zC) {
                var ZC = dC(zC, 2),
                  QC = ZC[0],
                  wC = ZC[1];
                return KC(KC({}, CC), {}, YC({}, QC, wC))
              }), {})
            }] : CC
          }(ZC)
        }), [ZC]),
        EC = (0, QC.useMemo)((function() {
          return "function" === typeof PC ? PC : Sz
        }), [PC]),
        lC = (0, QC.useMemo)((function() {
          return "function" === typeof pC ? pC : Sz
        }), [pC]),
        XC = (0, QC.useRef)(null),
        cC = (0, QC.useRef)(null),
        uC = Qz((0, QC.useReducer)(gz, Nz), 2),
        rC = uC[0],
        sC = uC[1],
        kC = rC.kY,
        VC = rC.isFileDialogActive,
        wz = (0, QC.useRef)("undefined" !== typeof window && window.isSecureContext && GC && "showOpenFilePicker" in window),
        bz = function() {
          !wz.current && VC && setTimeout((function() {
            cC.current && (cC.current.files.length || (sC({
              type: "closeDialog"
            }), lC()))
          }), 300)
        };
      (0, QC.useEffect)((function() {
        return window.addEventListener("focus", bz, !1),
          function() {
            window.removeEventListener("focus", bz, !1)
          }
      }), [cC, VC, lC, wz]);
      var nz = (0, QC.useRef)([]),
        Fz = function(CC) {
          XC.current && XC.current.contains(CC.target) || (CC.preventDefault(), nz.current = [])
        };
      (0, QC.useEffect)((function() {
        return AC && (document.addEventListener("dragover", LC, !1), document.addEventListener("drop", Fz, !1)),
          function() {
            AC && (document.removeEventListener("dragover", LC), document.removeEventListener("drop", Fz))
          }
      }), [XC, AC]), (0, QC.useEffect)((function() {
        return !wC && RC && XC.current && XC.current.focus(),
          function() {}
      }), [XC, RC, wC]);
      var Mz = (0, QC.useCallback)((function(CC) {
          vC ? vC(CC) : console.error(CC)
        }), [vC]),
        pz = (0, QC.useCallback)((function(CC) {
          CC.preventDefault(), CC.persist(), Yz(CC), nz.current = [].concat(Zz(nz.current), [CC.target]), yC(CC) && Promise.resolve(bC(CC)).then((function(zC) {
            if (!jC(CC) || iC) {
              var ZC = zC.length,
                QC = ZC > 0 && function(CC) {
                  var zC = CC.files,
                    ZC = CC.accept,
                    QC = CC.minSize,
                    wC = CC.maxSize,
                    bC = CC.multiple,
                    nC = CC.maxFiles,
                    fC = CC.validator;
                  return !(!bC && zC.length > 1 || bC && nC >= 1 && zC.length > nC) && zC.every((function(CC) {
                    var zC = dC(aC(CC, ZC), 1)[0],
                      bC = dC(tC(CC, QC, wC), 1)[0],
                      nC = fC ? fC(CC) : null;
                    return zC && bC && !nC
                  }))
                }({
                  files: zC,
                  accept: mC,
                  minSize: fC,
                  maxSize: nC,
                  multiple: oC,
                  maxFiles: qC,
                  validator: hC
                });
              sC({
                isDragAccept: QC,
                isDragReject: ZC > 0 && !QC,
                isDragActive: !0,
                type: "setDraggedFiles"
              }), FC && FC(CC)
            }
          })).catch((function(CC) {
            return Mz(CC)
          }))
        }), [bC, FC, Mz, iC, mC, fC, nC, oC, qC, hC]),
        Pz = (0, QC.useCallback)((function(CC) {
          CC.preventDefault(), CC.persist(), Yz(CC);
          var zC = yC(CC);
          if (zC && CC.dataTransfer) try {
            CC.dataTransfer.dropEffect = "copy"
          } catch (ZC) {}
          return zC && NC && NC(CC), !1
        }), [NC, iC]),
        Gz = (0, QC.useCallback)((function(CC) {
          CC.preventDefault(), CC.persist(), Yz(CC);
          var zC = nz.current.filter((function(CC) {
              return XC.current && XC.current.contains(CC)
            })),
            ZC = zC.indexOf(CC.target); - 1 !== ZC && zC.splice(ZC, 1), nz.current = zC, zC.length > 0 || (sC({
            type: "setDraggedFiles",
            isDragActive: !1,
            isDragAccept: !1,
            isDragReject: !1
          }), yC(CC) && WC && WC(CC))
        }), [XC, WC, iC]),
        Rz = (0, QC.useCallback)((function(CC, zC) {
          var ZC = [],
            QC = [];
          CC.forEach((function(CC) {
            var zC = Qz(aC(CC, mC), 2),
              wC = zC[0],
              bC = zC[1],
              oC = Qz(tC(CC, fC, nC), 2),
              qC = oC[0],
              FC = oC[1],
              WC = hC ? hC(CC) : null;
            if (wC && qC && !WC) ZC.push(CC);
            else {
              var NC = [bC, FC];
              WC && (NC = NC.concat(WC)), QC.push({
                file: CC,
                errors: NC.filter((function(CC) {
                  return CC
                }))
              })
            }
          })), (!oC && ZC.length > 1 || oC && qC >= 1 && ZC.length > qC) && (ZC.forEach((function(CC) {
            QC.push({
              file: CC,
              errors: [TC]
            })
          })), ZC.splice(0)), sC({
            acceptedFiles: ZC,
            fileRejections: QC,
            type: "setFiles"
          }), MC && MC(ZC, QC, zC), QC.length > 0 && SC && SC(QC, zC), ZC.length > 0 && gC && gC(ZC, zC)
        }), [sC, oC, mC, fC, nC, qC, MC, gC, SC, hC]),
        Az = (0, QC.useCallback)((function(CC) {
          CC.preventDefault(), CC.persist(), Yz(CC), nz.current = [], yC(CC) && Promise.resolve(bC(CC)).then((function(zC) {
            jC(CC) && !iC || Rz(zC, CC)
          })).catch((function(CC) {
            return Mz(CC)
          })), sC({
            type: "reset"
          })
        }), [bC, Rz, Mz, iC]),
        xz = (0, QC.useCallback)((function() {
          if (wz.current) {
            sC({
              type: "openDialog"
            }), EC();
            var CC = {
              multiple: oC,
              types: HC
            };
            window.showOpenFilePicker(CC).then((function(CC) {
              return bC(CC)
            })).then((function(CC) {
              Rz(CC, null), sC({
                type: "closeDialog"
              })
            })).catch((function(CC) {
              var zC;
              (zC = CC) instanceof DOMException && ("AbortError" === zC.name || zC.code === zC.ABORT_ERR) ? (lC(CC), sC({
                type: "closeDialog"
              })) : ! function(CC) {
                return CC instanceof DOMException && ("SecurityError" === CC.name || CC.code === CC.SECURITY_ERR)
              }(CC) ? Mz(CC) : (wz.current = !1, cC.current ? (cC.current.value = null, cC.current.click()) : Mz(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))
            }))
          } else cC.current && (sC({
            type: "openDialog"
          }), EC(), cC.current.value = null, cC.current.click())
        }), [sC, EC, lC, GC, Rz, Mz, HC, oC]),
        Jz = (0, QC.useCallback)((function(CC) {
          XC.current && XC.current.isEqualNode(CC.target) && (" " !== CC.key && "Enter" !== CC.key && 32 !== CC.keyCode && 13 !== CC.keyCode || (CC.preventDefault(), xz()))
        }), [XC, xz]),
        Iz = (0, QC.useCallback)((function() {
          sC({
            type: "focus"
          })
        }), []),
        iz = (0, QC.useCallback)((function() {
          sC({
            type: "blur"
          })
        }), []),
        vz = (0, QC.useCallback)((function() {
          xC || (! function() {
            var CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
            return function(CC) {
              return -1 !== CC.indexOf("MSIE") || -1 !== CC.indexOf("Trident/")
            }(CC) || function(CC) {
              return -1 !== CC.indexOf("Edge/")
            }(CC)
          }() ? xz() : setTimeout(xz, 0))
        }), [xC, xz]),
        ez = function(CC) {
          return wC ? null : CC
        },
        hz = function(CC) {
          return JC ? null : ez(CC)
        },
        Kz = function(CC) {
          return IC ? null : ez(CC)
        },
        Yz = function(CC) {
          iC && CC.stopPropagation()
        },
        dz = (0, QC.useMemo)((function() {
          return function() {
            var CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              zC = CC.refKey,
              ZC = void 0 === zC ? "ref" : zC,
              QC = CC.role,
              bC = CC.onKeyDown,
              nC = CC.onFocus,
              fC = CC.onBlur,
              oC = CC.onClick,
              qC = CC.onDragEnter,
              FC = CC.onDragOver,
              WC = CC.onDragLeave,
              NC = CC.onDrop,
              MC = qz(CC, Cz);
            return fz(fz(oz({
              onKeyDown: hz(UC(bC, Jz)),
              onFocus: hz(UC(nC, Iz)),
              onBlur: hz(UC(fC, iz)),
              onClick: ez(UC(oC, vz)),
              onDragEnter: Kz(UC(qC, pz)),
              onDragOver: Kz(UC(FC, Pz)),
              onDragLeave: Kz(UC(WC, Gz)),
              onDrop: Kz(UC(NC, Az)),
              role: "string" === typeof QC && "" !== QC ? QC : "presentation"
            }, ZC, XC), wC || JC ? {} : {
              tabIndex: 0
            }), MC)
          }
        }), [XC, Jz, Iz, iz, vz, pz, Pz, Gz, Az, JC, IC, wC]),
        mz = (0, QC.useCallback)((function(CC) {
          CC.stopPropagation()
        }), []),
        Hz = (0, QC.useMemo)((function() {
          return function() {
            var CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              zC = CC.refKey,
              ZC = void 0 === zC ? "ref" : zC,
              QC = CC.onChange,
              wC = CC.onClick,
              bC = qz(CC, zz);
            return fz(fz({}, oz({
              accept: mC,
              multiple: oC,
              type: "file",
              style: {
                display: "none"
              },
              onChange: ez(UC(QC, Az)),
              onClick: ez(UC(wC, mz)),
              tabIndex: -1
            }, ZC, cC)), bC)
          }
        }), [cC, ZC, oC, Az, wC]);
      return fz(fz({}, rC), {}, {
        kY: kC && !wC,
        getRootProps: dz,
        getInputProps: Hz,
        rootRef: XC,
        inputRef: cC,
        open: ez(xz)
      })
    }

    function gz(CC, zC) {
      switch (zC.type) {
        case "focus":
          return fz(fz({}, CC), {}, {
            kY: !0
          });
        case "blur":
          return fz(fz({}, CC), {}, {
            kY: !1
          });
        case "openDialog":
          return fz(fz({}, Nz), {}, {
            isFileDialogActive: !0
          });
        case "closeDialog":
          return fz(fz({}, CC), {}, {
            isFileDialogActive: !1
          });
        case "setDraggedFiles":
          return fz(fz({}, CC), {}, {
            isDragActive: zC.isDragActive,
            isDragAccept: zC.isDragAccept,
            isDragReject: zC.isDragReject
          });
        case "setFiles":
          return fz(fz({}, CC), {}, {
            acceptedFiles: zC.acceptedFiles,
            fileRejections: zC.fileRejections
          });
        case "reset":
          return fz({}, Nz);
        default:
          return CC
      }
    }

    function Sz() {}
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);