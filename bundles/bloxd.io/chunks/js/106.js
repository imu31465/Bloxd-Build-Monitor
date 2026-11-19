export const id = 106;
export const ids = [106];
export const modules = {
  4458: (TT, oT) => {
    oT.c = function(TT, oT) {
      if (TT && oT) {
        var IT = Array.isArray(oT) ? oT : oT.split(","),
          iT = TT.name || "",
          zT = (TT.type || "").toLowerCase(),
          kT = zT.replace(/\/.*$/, "");
        return IT.some((function(TT) {
          var oT = TT.trim().toLowerCase();
          return "." === oT.charAt(0) ? iT.toLowerCase().endsWith(oT) : oT.endsWith("/*") ? kT === oT.replace(/\/.*$/, "") : zT === oT
        }))
      }
      return !0
    }
  },
  4439: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => xo
    });
    var iT = IT(46),
      zT = IT(4442),
      kT = IT.n(zT);

    function WT(TT, oT, IT, iT) {
      return new(IT || (IT = Promise))((function(zT, kT) {
        function WT(TT) {
          try {
            BT(iT.next(TT))
          } catch (oT) {
            kT(oT)
          }
        }

        function XT(TT) {
          try {
            BT(iT.throw(TT))
          } catch (oT) {
            kT(oT)
          }
        }

        function BT(TT) {
          var oT;
          TT.done ? zT(TT.value) : (oT = TT.value, oT instanceof IT ? oT : new IT((function(TT) {
            TT(oT)
          }))).then(WT, XT)
        }
        BT((iT = iT.apply(TT, oT || [])).next())
      }))
    }

    function XT(TT, oT) {
      var IT, iT, zT, kT, WT = {
        label: 0,
        sent: function() {
          if (1 & zT[0]) throw zT[1];
          return zT[1]
        },
        trys: [],
        ops: []
      };
      return kT = {
        next: XT(0),
        throw: XT(1),
        return: XT(2)
      }, "function" === typeof Symbol && (kT[Symbol.iterator] = function() {
        return this
      }), kT;

      function XT(XT) {
        return function(BT) {
          return function(XT) {
            if (IT) throw new TypeError("Generator is already executing.");
            for (; kT && (kT = 0, XT[0] && (WT = 0)), WT;) try {
              if (IT = 1, iT && (zT = 2 & XT[0] ? iT.return : XT[0] ? iT.throw || ((zT = iT.return) && zT.call(iT), 0) : iT.next) && !(zT = zT.call(iT, XT[1])).done) return zT;
              switch (iT = 0, zT && (XT = [2 & XT[0], zT.value]), XT[0]) {
                case 0:
                case 1:
                  zT = XT;
                  break;
                case 4:
                  return WT.label++, {
                    value: XT[1],
                    done: !1
                  };
                case 5:
                  WT.label++, iT = XT[1], XT = [0];
                  continue;
                case 7:
                  XT = WT.ops.pop(), WT.trys.pop();
                  continue;
                default:
                  if (!(zT = (zT = WT.trys).length > 0 && zT[zT.length - 1]) && (6 === XT[0] || 2 === XT[0])) {
                    WT = 0;
                    continue
                  }
                  if (3 === XT[0] && (!zT || XT[1] > zT[0] && XT[1] < zT[3])) {
                    WT.label = XT[1];
                    break
                  }
                  if (6 === XT[0] && WT.label < zT[1]) {
                    WT.label = zT[1], zT = XT;
                    break
                  }
                  if (zT && WT.label < zT[2]) {
                    WT.label = zT[2], WT.ops.push(XT);
                    break
                  }
                  zT[2] && WT.ops.pop(), WT.trys.pop();
                  continue
              }
              XT = oT.call(TT, WT)
            } catch (BT) {
              XT = [6, BT], iT = 0
            } finally {
              IT = zT = 0
            }
            if (5 & XT[0]) throw XT[1];
            return {
              value: XT[0] ? XT[1] : void 0,
              done: !0
            }
          }([XT, BT])
        }
      }
    }
    Object.create;

    function BT(TT, oT) {
      var IT = "function" === typeof Symbol && TT[Symbol.iterator];
      if (!IT) return TT;
      var iT, zT, kT = IT.call(TT),
        WT = [];
      try {
        for (;
          (void 0 === oT || oT-- > 0) && !(iT = kT.next()).done;) WT.push(iT.value)
      } catch (XT) {
        zT = {
          error: XT
        }
      } finally {
        try {
          iT && !iT.done && (IT = kT.return) && IT.call(kT)
        } finally {
          if (zT) throw zT.error
        }
      }
      return WT
    }

    function FT(TT, oT, IT) {
      if (IT || 2 === arguments.length)
        for (var iT, zT = 0, kT = oT.length; zT < kT; zT++) !iT && zT in oT || (iT || (iT = Array.prototype.slice.call(oT, 0, zT)), iT[zT] = oT[zT]);
      return TT.concat(iT || Array.prototype.slice.call(oT))
    }
    Object.create;
    "function" === typeof SuppressedError && SuppressedError;
    var ST = new Map([
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
      ["US", "application/vnd.ms-outlook"]
    ]);

    function DT(TT, oT) {
      var IT = function(TT) {
        var oT = TT.name;
        if (oT && -1 !== oT.lastIndexOf(".") && !TT.type) {
          var IT = oT.split(".").pop().toLowerCase(),
            iT = ST.get(IT);
          iT && Object.defineProperty(TT, "type", {
            value: iT,
            writable: !1,
            configurable: !1,
            enumerable: !0
          })
        }
        return TT
      }(TT);
      if ("string" !== typeof IT.path) {
        var iT = TT.webkitRelativePath;
        Object.defineProperty(IT, "path", {
          value: "string" === typeof oT ? oT : "string" === typeof iT && iT.length > 0 ? iT : TT.name,
          writable: !1,
          configurable: !1,
          enumerable: !0
        })
      }
      return IT
    }
    var LT = [".DS_Store", "Thumbs.db"];

    function xT(TT) {
      return "object" === typeof TT && null !== TT
    }

    function cT(TT) {
      return AT(TT.target.files).map((function(TT) {
        return DT(TT)
      }))
    }

    function KT(TT) {
      return WT(this, void 0, void 0, (function() {
        return XT(this, (function(oT) {
          switch (oT.label) {
            case 0:
              return [4, Promise.all(TT.map((function(TT) {
                return TT.getFile()
              })))];
            case 1:
              return [2, oT.sent().map((function(TT) {
                return DT(TT)
              }))]
          }
        }))
      }))
    }

    function MT(TT, oT) {
      return WT(this, void 0, void 0, (function() {
        var IT;
        return XT(this, (function(iT) {
          switch (iT.label) {
            case 0:
              return TT.items ? (IT = AT(TT.items).filter((function(TT) {
                return "file" === TT.kind
              })), "drop" !== oT ? [2, IT] : [4, Promise.all(IT.map(gT))]) : [3, 2];
            case 1:
              return [2, rT(hT(iT.sent()))];
            case 2:
              return [2, rT(AT(TT.files).map((function(TT) {
                return DT(TT)
              })))]
          }
        }))
      }))
    }

    function rT(TT) {
      return TT.filter((function(TT) {
        return -1 === LT.indexOf(TT.name)
      }))
    }

    function AT(TT) {
      if (null === TT) return [];
      for (var oT = [], IT = 0; IT < TT.length; IT++) {
        var iT = TT[IT];
        oT.push(iT)
      }
      return oT
    }

    function gT(TT) {
      if ("function" !== typeof TT.webkitGetAsEntry) return wT(TT);
      var oT = TT.webkitGetAsEntry();
      return oT && oT.isDirectory ? eT(oT) : wT(TT)
    }

    function hT(TT) {
      return TT.reduce((function(TT, oT) {
        return FT(FT([], BT(TT), !1), BT(Array.isArray(oT) ? hT(oT) : [oT]), !1)
      }), [])
    }

    function wT(TT) {
      var oT = TT.getAsFile();
      if (!oT) return Promise.reject("".concat(TT, " is not a File"));
      var IT = DT(oT);
      return Promise.resolve(IT)
    }

    function mT(TT) {
      return WT(this, void 0, void 0, (function() {
        return XT(this, (function(oT) {
          return [2, TT.isDirectory ? eT(TT) : RT(TT)]
        }))
      }))
    }

    function eT(TT) {
      var oT = TT.createReader();
      return new Promise((function(TT, IT) {
        var iT = [];
        ! function zT() {
          var kT = this;
          oT.readEntries((function(oT) {
            return WT(kT, void 0, void 0, (function() {
              var kT, WT, BT;
              return XT(this, (function(XT) {
                switch (XT.label) {
                  case 0:
                    if (oT.length) return [3, 5];
                    XT.label = 1;
                  case 1:
                    return XT.trys.push([1, 3, , 4]), [4, Promise.all(iT)];
                  case 2:
                    return kT = XT.sent(), TT(kT), [3, 4];
                  case 3:
                    return WT = XT.sent(), IT(WT), [3, 4];
                  case 4:
                    return [3, 6];
                  case 5:
                    BT = Promise.all(oT.map(mT)), iT.push(BT), zT(), XT.label = 6;
                  case 6:
                    return [2]
                }
              }))
            }))
          }), (function(TT) {
            IT(TT)
          }))
        }()
      }))
    }

    function RT(TT) {
      return WT(this, void 0, void 0, (function() {
        return XT(this, (function(oT) {
          return [2, new Promise((function(oT, IT) {
            TT.file((function(IT) {
              var iT = DT(IT, TT.fullPath);
              oT(iT)
            }), (function(TT) {
              IT(TT)
            }))
          }))]
        }))
      }))
    }
    var uT = IT(4458);

    function vT(TT) {
      return function(TT) {
        if (Array.isArray(TT)) return UT(TT)
      }(TT) || function(TT) {
        if ("undefined" !== typeof Symbol && null != TT[Symbol.iterator] || null != TT["@@iterator"]) return Array.from(TT)
      }(TT) || JT(TT) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function ET(TT, oT) {
      var IT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var iT = Object.getOwnPropertySymbols(TT);
        oT && (iT = iT.filter((function(oT) {
          return Object.getOwnPropertyDescriptor(TT, oT).enumerable
        }))), IT.push.apply(IT, iT)
      }
      return IT
    }

    function fT(TT) {
      for (var oT = 1; oT < arguments.length; oT++) {
        var IT = null != arguments[oT] ? arguments[oT] : {};
        oT % 2 ? ET(Object(IT), !0).forEach((function(oT) {
          CT(TT, oT, IT[oT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(IT)) : ET(Object(IT)).forEach((function(oT) {
          Object.defineProperty(TT, oT, Object.getOwnPropertyDescriptor(IT, oT))
        }))
      }
      return TT
    }

    function CT(TT, oT, IT) {
      return oT in TT ? Object.defineProperty(TT, oT, {
        value: IT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[oT] = IT, TT
    }

    function jT(TT, oT) {
      return function(TT) {
        if (Array.isArray(TT)) return TT
      }(TT) || function(TT, oT) {
        var IT = null == TT ? null : "undefined" !== typeof Symbol && TT[Symbol.iterator] || TT["@@iterator"];
        if (null == IT) return;
        var iT, zT, kT = [],
          WT = !0,
          XT = !1;
        try {
          for (IT = IT.call(TT); !(WT = (iT = IT.next()).done) && (kT.push(iT.value), !oT || kT.length !== oT); WT = !0);
        } catch (BT) {
          XT = !0, zT = BT
        } finally {
          try {
            WT || null == IT.return || IT.return()
          } finally {
            if (XT) throw zT
          }
        }
        return kT
      }(TT, oT) || JT(TT, oT) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function JT(TT, oT) {
      if (TT) {
        if ("string" === typeof TT) return UT(TT, oT);
        var IT = Object.prototype.toString.call(TT).slice(8, -1);
        return "Object" === IT && TT.constructor && (IT = TT.constructor.name), "Map" === IT || "Set" === IT ? Array.from(TT) : "Arguments" === IT || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(IT) ? UT(TT, oT) : void 0
      }
    }

    function UT(TT, oT) {
      (null == oT || oT > TT.length) && (oT = TT.length);
      for (var IT = 0, iT = new Array(oT); IT < oT; IT++) iT[IT] = TT[IT];
      return iT
    }
    var aT = "file-invalid-type",
      YT = "file-too-large",
      QT = "file-too-small",
      OT = "too-many-files",
      HT = function(TT) {
        TT = Array.isArray(TT) && 1 === TT.length ? TT[0] : TT;
        var oT = Array.isArray(TT) ? "one of ".concat(TT.join(", ")) : TT;
        return {
          code: aT,
          message: "File type must be ".concat(oT)
        }
      },
      nT = function(TT) {
        return {
          code: YT,
          message: "File is larger than ".concat(TT, " ").concat(1 === TT ? "byte" : "bytes")
        }
      },
      qT = function(TT) {
        return {
          code: QT,
          message: "File is smaller than ".concat(TT, " ").concat(1 === TT ? "byte" : "bytes")
        }
      },
      ZT = {
        code: OT,
        message: "Too many files"
      };

    function lT(TT, oT) {
      var IT = "application/x-moz-file" === TT.type || (0, uT.c)(TT, oT);
      return [IT, IT ? null : HT(oT)]
    }

    function sT(TT, oT, IT) {
      if (tT(TT.size))
        if (tT(oT) && tT(IT)) {
          if (TT.size > IT) return [!1, nT(IT)];
          if (TT.size < oT) return [!1, qT(oT)]
        } else {
          if (tT(oT) && TT.size < oT) return [!1, qT(oT)];
          if (tT(IT) && TT.size > IT) return [!1, nT(IT)]
        } return [!0, null]
    }

    function tT(TT) {
      return void 0 !== TT && null !== TT
    }

    function GT(TT) {
      return "function" === typeof TT.isPropagationStopped ? TT.isPropagationStopped() : "undefined" !== typeof TT.cancelBubble && TT.cancelBubble
    }

    function pT(TT) {
      return TT.dataTransfer ? Array.prototype.some.call(TT.dataTransfer.types, (function(TT) {
        return "Files" === TT || "application/x-moz-file" === TT
      })) : !!TT.target && !!TT.target.files
    }

    function bT(TT) {
      TT.preventDefault()
    }

    function yT() {
      for (var TT = arguments.length, oT = new Array(TT), IT = 0; IT < TT; IT++) oT[IT] = arguments[IT];
      return function(TT) {
        for (var IT = arguments.length, iT = new Array(IT > 1 ? IT - 1 : 0), zT = 1; zT < IT; zT++) iT[zT - 1] = arguments[zT];
        return oT.some((function(oT) {
          return !GT(TT) && oT && oT.apply(void 0, [TT].concat(iT)), GT(TT)
        }))
      }
    }

    function NT(TT) {
      return "audio/*" === TT || "video/*" === TT || "image/*" === TT || "text/*" === TT || /\w+\/[-+.\w]+/g.test(TT)
    }

    function PT(TT) {
      return /^.*\.[\w]+$/.test(TT)
    }
    var dT = ["children"],
      VT = ["open"],
      To = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
      oo = ["refKey", "onChange", "onClick"];

    function Io(TT) {
      return function(TT) {
        if (Array.isArray(TT)) return ko(TT)
      }(TT) || function(TT) {
        if ("undefined" !== typeof Symbol && null != TT[Symbol.iterator] || null != TT["@@iterator"]) return Array.from(TT)
      }(TT) || zo(TT) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function io(TT, oT) {
      return function(TT) {
        if (Array.isArray(TT)) return TT
      }(TT) || function(TT, oT) {
        var IT = null == TT ? null : "undefined" !== typeof Symbol && TT[Symbol.iterator] || TT["@@iterator"];
        if (null == IT) return;
        var iT, zT, kT = [],
          WT = !0,
          XT = !1;
        try {
          for (IT = IT.call(TT); !(WT = (iT = IT.next()).done) && (kT.push(iT.value), !oT || kT.length !== oT); WT = !0);
        } catch (BT) {
          XT = !0, zT = BT
        } finally {
          try {
            WT || null == IT.return || IT.return()
          } finally {
            if (XT) throw zT
          }
        }
        return kT
      }(TT, oT) || zo(TT, oT) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function zo(TT, oT) {
      if (TT) {
        if ("string" === typeof TT) return ko(TT, oT);
        var IT = Object.prototype.toString.call(TT).slice(8, -1);
        return "Object" === IT && TT.constructor && (IT = TT.constructor.name), "Map" === IT || "Set" === IT ? Array.from(TT) : "Arguments" === IT || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(IT) ? ko(TT, oT) : void 0
      }
    }

    function ko(TT, oT) {
      (null == oT || oT > TT.length) && (oT = TT.length);
      for (var IT = 0, iT = new Array(oT); IT < oT; IT++) iT[IT] = TT[IT];
      return iT
    }

    function Wo(TT, oT) {
      var IT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var iT = Object.getOwnPropertySymbols(TT);
        oT && (iT = iT.filter((function(oT) {
          return Object.getOwnPropertyDescriptor(TT, oT).enumerable
        }))), IT.push.apply(IT, iT)
      }
      return IT
    }

    function Xo(TT) {
      for (var oT = 1; oT < arguments.length; oT++) {
        var IT = null != arguments[oT] ? arguments[oT] : {};
        oT % 2 ? Wo(Object(IT), !0).forEach((function(oT) {
          Bo(TT, oT, IT[oT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(IT)) : Wo(Object(IT)).forEach((function(oT) {
          Object.defineProperty(TT, oT, Object.getOwnPropertyDescriptor(IT, oT))
        }))
      }
      return TT
    }

    function Bo(TT, oT, IT) {
      return oT in TT ? Object.defineProperty(TT, oT, {
        value: IT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[oT] = IT, TT
    }

    function Fo(TT, oT) {
      if (null == TT) return {};
      var IT, iT, zT = function(TT, oT) {
        if (null == TT) return {};
        var IT, iT, zT = {},
          kT = Object.keys(TT);
        for (iT = 0; iT < kT.length; iT++) IT = kT[iT], oT.indexOf(IT) >= 0 || (zT[IT] = TT[IT]);
        return zT
      }(TT, oT);
      if (Object.getOwnPropertySymbols) {
        var kT = Object.getOwnPropertySymbols(TT);
        for (iT = 0; iT < kT.length; iT++) IT = kT[iT], oT.indexOf(IT) >= 0 || Object.prototype.propertyIsEnumerable.call(TT, IT) && (zT[IT] = TT[IT])
      }
      return zT
    }
    var So = (0, iT.forwardRef)((function(TT, oT) {
      var IT = TT.children,
        zT = xo(Fo(TT, dT)),
        kT = zT.open,
        WT = Fo(zT, VT);
      return (0, iT.useImperativeHandle)(oT, (function() {
        return {
          open: kT
        }
      }), [kT]), iT.createElement(iT.Fragment, null, IT(Xo(Xo({}, WT), {}, {
        open: kT
      })))
    }));
    So.displayName = "Dropzone";
    var Do = {
      disabled: !1,
      getFilesFromEvent: function(TT) {
        return WT(this, void 0, void 0, (function() {
          return XT(this, (function(oT) {
            return xT(TT) && xT(TT.dataTransfer) ? [2, MT(TT.dataTransfer, TT.type)] : function(TT) {
              return xT(TT) && xT(TT.target)
            }(TT) ? [2, cT(TT)] : Array.isArray(TT) && TT.every((function(TT) {
              return "getFile" in TT && "function" === typeof TT.getFile
            })) ? [2, KT(TT)] : [2, []]
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
    So.defaultProps = Do, So.propTypes = {
      children: kT().func,
      accept: kT().objectOf(kT().arrayOf(kT().string)),
      multiple: kT().bool,
      preventDropOnDocument: kT().bool,
      noClick: kT().bool,
      noKeyboard: kT().bool,
      noDrag: kT().bool,
      noDragEventsBubbling: kT().bool,
      minSize: kT().number,
      maxSize: kT().number,
      maxFiles: kT().number,
      disabled: kT().bool,
      getFilesFromEvent: kT().func,
      onFileDialogCancel: kT().func,
      onFileDialogOpen: kT().func,
      useFsAccessApi: kT().bool,
      autoFocus: kT().bool,
      onDragEnter: kT().func,
      onDragLeave: kT().func,
      onDragOver: kT().func,
      onDrop: kT().func,
      onDropAccepted: kT().func,
      onDropRejected: kT().func,
      onError: kT().func,
      validator: kT().func
    };
    var Lo = {
      eC: !1,
      isFileDialogActive: !1,
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1,
      acceptedFiles: [],
      fileRejections: []
    };

    function xo() {
      var TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        oT = Xo(Xo({}, Do), TT),
        IT = oT.accept,
        zT = oT.disabled,
        kT = oT.getFilesFromEvent,
        WT = oT.maxSize,
        XT = oT.minSize,
        BT = oT.multiple,
        FT = oT.maxFiles,
        ST = oT.onDragEnter,
        DT = oT.onDragLeave,
        LT = oT.onDragOver,
        xT = oT.onDrop,
        cT = oT.onDropAccepted,
        KT = oT.onDropRejected,
        MT = oT.onFileDialogCancel,
        rT = oT.onFileDialogOpen,
        AT = oT.useFsAccessApi,
        gT = oT.autoFocus,
        hT = oT.preventDropOnDocument,
        wT = oT.noClick,
        mT = oT.noKeyboard,
        eT = oT.noDrag,
        RT = oT.noDragEventsBubbling,
        uT = oT.onError,
        ET = oT.validator,
        JT = (0, iT.useMemo)((function() {
          return function(TT) {
            if (tT(TT)) return Object.entries(TT).reduce((function(TT, oT) {
              var IT = jT(oT, 2),
                iT = IT[0],
                zT = IT[1];
              return [].concat(vT(TT), [iT], vT(zT))
            }), []).filter((function(TT) {
              return NT(TT) || PT(TT)
            })).join(",")
          }(IT)
        }), [IT]),
        UT = (0, iT.useMemo)((function() {
          return function(TT) {
            return tT(TT) ? [{
              description: "Files",
              accept: Object.entries(TT).filter((function(TT) {
                var oT = jT(TT, 2),
                  IT = oT[0],
                  iT = oT[1],
                  zT = !0;
                return NT(IT) || (console.warn('Skipped "'.concat(IT, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), zT = !1), Array.isArray(iT) && iT.every(PT) || (console.warn('Skipped "'.concat(IT, '" because an invalid file extension was provided.')), zT = !1), zT
              })).reduce((function(TT, oT) {
                var IT = jT(oT, 2),
                  iT = IT[0],
                  zT = IT[1];
                return fT(fT({}, TT), {}, CT({}, iT, zT))
              }), {})
            }] : TT
          }(IT)
        }), [IT]),
        aT = (0, iT.useMemo)((function() {
          return "function" === typeof rT ? rT : Ko
        }), [rT]),
        YT = (0, iT.useMemo)((function() {
          return "function" === typeof MT ? MT : Ko
        }), [MT]),
        QT = (0, iT.useRef)(null),
        OT = (0, iT.useRef)(null),
        HT = io((0, iT.useReducer)(co, Lo), 2),
        nT = HT[0],
        qT = HT[1],
        dT = nT.eC,
        VT = nT.isFileDialogActive,
        zo = (0, iT.useRef)("undefined" !== typeof window && window.isSecureContext && AT && "showOpenFilePicker" in window),
        ko = function() {
          !zo.current && VT && setTimeout((function() {
            OT.current && (OT.current.files.length || (qT({
              type: "closeDialog"
            }), YT()))
          }), 300)
        };
      (0, iT.useEffect)((function() {
        return window.addEventListener("focus", ko, !1),
          function() {
            window.removeEventListener("focus", ko, !1)
          }
      }), [OT, VT, YT, zo]);
      var Wo = (0, iT.useRef)([]),
        So = function(TT) {
          QT.current && QT.current.contains(TT.target) || (TT.preventDefault(), Wo.current = [])
        };
      (0, iT.useEffect)((function() {
        return hT && (document.addEventListener("dragover", bT, !1), document.addEventListener("drop", So, !1)),
          function() {
            hT && (document.removeEventListener("dragover", bT), document.removeEventListener("drop", So))
          }
      }), [QT, hT]), (0, iT.useEffect)((function() {
        return !zT && gT && QT.current && QT.current.focus(),
          function() {}
      }), [QT, gT, zT]);
      var xo = (0, iT.useCallback)((function(TT) {
          uT ? uT(TT) : console.error(TT)
        }), [uT]),
        Mo = (0, iT.useCallback)((function(TT) {
          TT.preventDefault(), TT.persist(), Co(TT), Wo.current = [].concat(Io(Wo.current), [TT.target]), pT(TT) && Promise.resolve(kT(TT)).then((function(oT) {
            if (!GT(TT) || RT) {
              var IT = oT.length,
                iT = IT > 0 && function(TT) {
                  var oT = TT.files,
                    IT = TT.accept,
                    iT = TT.minSize,
                    zT = TT.maxSize,
                    kT = TT.multiple,
                    WT = TT.maxFiles,
                    XT = TT.validator;
                  return !(!kT && oT.length > 1 || kT && WT >= 1 && oT.length > WT) && oT.every((function(TT) {
                    var oT = jT(lT(TT, IT), 1)[0],
                      kT = jT(sT(TT, iT, zT), 1)[0],
                      WT = XT ? XT(TT) : null;
                    return oT && kT && !WT
                  }))
                }({
                  files: oT,
                  accept: JT,
                  minSize: XT,
                  maxSize: WT,
                  multiple: BT,
                  maxFiles: FT,
                  validator: ET
                });
              qT({
                isDragAccept: iT,
                isDragReject: IT > 0 && !iT,
                isDragActive: !0,
                type: "setDraggedFiles"
              }), ST && ST(TT)
            }
          })).catch((function(TT) {
            return xo(TT)
          }))
        }), [kT, ST, xo, RT, JT, XT, WT, BT, FT, ET]),
        ro = (0, iT.useCallback)((function(TT) {
          TT.preventDefault(), TT.persist(), Co(TT);
          var oT = pT(TT);
          if (oT && TT.dataTransfer) try {
            TT.dataTransfer.dropEffect = "copy"
          } catch (IT) {}
          return oT && LT && LT(TT), !1
        }), [LT, RT]),
        Ao = (0, iT.useCallback)((function(TT) {
          TT.preventDefault(), TT.persist(), Co(TT);
          var oT = Wo.current.filter((function(TT) {
              return QT.current && QT.current.contains(TT)
            })),
            IT = oT.indexOf(TT.target); - 1 !== IT && oT.splice(IT, 1), Wo.current = oT, oT.length > 0 || (qT({
            type: "setDraggedFiles",
            isDragActive: !1,
            isDragAccept: !1,
            isDragReject: !1
          }), pT(TT) && DT && DT(TT))
        }), [QT, DT, RT]),
        go = (0, iT.useCallback)((function(TT, oT) {
          var IT = [],
            iT = [];
          TT.forEach((function(TT) {
            var oT = io(lT(TT, JT), 2),
              zT = oT[0],
              kT = oT[1],
              BT = io(sT(TT, XT, WT), 2),
              FT = BT[0],
              ST = BT[1],
              DT = ET ? ET(TT) : null;
            if (zT && FT && !DT) IT.push(TT);
            else {
              var LT = [kT, ST];
              DT && (LT = LT.concat(DT)), iT.push({
                file: TT,
                errors: LT.filter((function(TT) {
                  return TT
                }))
              })
            }
          })), (!BT && IT.length > 1 || BT && FT >= 1 && IT.length > FT) && (IT.forEach((function(TT) {
            iT.push({
              file: TT,
              errors: [ZT]
            })
          })), IT.splice(0)), qT({
            acceptedFiles: IT,
            fileRejections: iT,
            type: "setFiles"
          }), xT && xT(IT, iT, oT), iT.length > 0 && KT && KT(iT, oT), IT.length > 0 && cT && cT(IT, oT)
        }), [qT, BT, JT, XT, WT, FT, xT, cT, KT, ET]),
        ho = (0, iT.useCallback)((function(TT) {
          TT.preventDefault(), TT.persist(), Co(TT), Wo.current = [], pT(TT) && Promise.resolve(kT(TT)).then((function(oT) {
            GT(TT) && !RT || go(oT, TT)
          })).catch((function(TT) {
            return xo(TT)
          })), qT({
            type: "reset"
          })
        }), [kT, go, xo, RT]),
        wo = (0, iT.useCallback)((function() {
          if (zo.current) {
            qT({
              type: "openDialog"
            }), aT();
            var TT = {
              multiple: BT,
              types: UT
            };
            window.showOpenFilePicker(TT).then((function(TT) {
              return kT(TT)
            })).then((function(TT) {
              go(TT, null), qT({
                type: "closeDialog"
              })
            })).catch((function(TT) {
              var oT;
              (oT = TT) instanceof DOMException && ("AbortError" === oT.name || oT.code === oT.ABORT_ERR) ? (YT(TT), qT({
                type: "closeDialog"
              })) : ! function(TT) {
                return TT instanceof DOMException && ("SecurityError" === TT.name || TT.code === TT.SECURITY_ERR)
              }(TT) ? xo(TT) : (zo.current = !1, OT.current ? (OT.current.value = null, OT.current.click()) : xo(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))
            }))
          } else OT.current && (qT({
            type: "openDialog"
          }), aT(), OT.current.value = null, OT.current.click())
        }), [qT, aT, YT, AT, go, xo, UT, BT]),
        mo = (0, iT.useCallback)((function(TT) {
          QT.current && QT.current.isEqualNode(TT.target) && (" " !== TT.key && "Enter" !== TT.key && 32 !== TT.keyCode && 13 !== TT.keyCode || (TT.preventDefault(), wo()))
        }), [QT, wo]),
        eo = (0, iT.useCallback)((function() {
          qT({
            type: "focus"
          })
        }), []),
        Ro = (0, iT.useCallback)((function() {
          qT({
            type: "blur"
          })
        }), []),
        uo = (0, iT.useCallback)((function() {
          wT || (! function() {
            var TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
            return function(TT) {
              return -1 !== TT.indexOf("MSIE") || -1 !== TT.indexOf("Trident/")
            }(TT) || function(TT) {
              return -1 !== TT.indexOf("Edge/")
            }(TT)
          }() ? wo() : setTimeout(wo, 0))
        }), [wT, wo]),
        vo = function(TT) {
          return zT ? null : TT
        },
        Eo = function(TT) {
          return mT ? null : vo(TT)
        },
        fo = function(TT) {
          return eT ? null : vo(TT)
        },
        Co = function(TT) {
          RT && TT.stopPropagation()
        },
        jo = (0, iT.useMemo)((function() {
          return function() {
            var TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              oT = TT.refKey,
              IT = void 0 === oT ? "ref" : oT,
              iT = TT.role,
              kT = TT.onKeyDown,
              WT = TT.onFocus,
              XT = TT.onBlur,
              BT = TT.onClick,
              FT = TT.onDragEnter,
              ST = TT.onDragOver,
              DT = TT.onDragLeave,
              LT = TT.onDrop,
              xT = Fo(TT, To);
            return Xo(Xo(Bo({
              onKeyDown: Eo(yT(kT, mo)),
              onFocus: Eo(yT(WT, eo)),
              onBlur: Eo(yT(XT, Ro)),
              onClick: vo(yT(BT, uo)),
              onDragEnter: fo(yT(FT, Mo)),
              onDragOver: fo(yT(ST, ro)),
              onDragLeave: fo(yT(DT, Ao)),
              onDrop: fo(yT(LT, ho)),
              role: "string" === typeof iT && "" !== iT ? iT : "presentation"
            }, IT, QT), zT || mT ? {} : {
              tabIndex: 0
            }), xT)
          }
        }), [QT, mo, eo, Ro, uo, Mo, ro, Ao, ho, mT, eT, zT]),
        Jo = (0, iT.useCallback)((function(TT) {
          TT.stopPropagation()
        }), []),
        Uo = (0, iT.useMemo)((function() {
          return function() {
            var TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              oT = TT.refKey,
              IT = void 0 === oT ? "ref" : oT,
              iT = TT.onChange,
              zT = TT.onClick,
              kT = Fo(TT, oo);
            return Xo(Xo({}, Bo({
              accept: JT,
              multiple: BT,
              type: "file",
              style: {
                display: "none"
              },
              onChange: vo(yT(iT, ho)),
              onClick: vo(yT(zT, Jo)),
              tabIndex: -1
            }, IT, OT)), kT)
          }
        }), [OT, IT, BT, ho, zT]);
      return Xo(Xo({}, nT), {}, {
        eC: dT && !zT,
        getRootProps: jo,
        getInputProps: Uo,
        rootRef: QT,
        inputRef: OT,
        open: vo(wo)
      })
    }

    function co(TT, oT) {
      switch (oT.type) {
        case "focus":
          return Xo(Xo({}, TT), {}, {
            eC: !0
          });
        case "blur":
          return Xo(Xo({}, TT), {}, {
            eC: !1
          });
        case "openDialog":
          return Xo(Xo({}, Lo), {}, {
            isFileDialogActive: !0
          });
        case "closeDialog":
          return Xo(Xo({}, TT), {}, {
            isFileDialogActive: !1
          });
        case "setDraggedFiles":
          return Xo(Xo({}, TT), {}, {
            isDragActive: oT.isDragActive,
            isDragAccept: oT.isDragAccept,
            isDragReject: oT.isDragReject
          });
        case "setFiles":
          return Xo(Xo({}, TT), {}, {
            acceptedFiles: oT.acceptedFiles,
            fileRejections: oT.fileRejections
          });
        case "reset":
          return Xo({}, Lo);
        default:
          return TT
      }
    }

    function Ko() {}
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);