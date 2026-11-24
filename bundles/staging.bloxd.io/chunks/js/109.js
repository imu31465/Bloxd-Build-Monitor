export const id = 109;
export const ids = [109];
export const modules = {
  5075: (TT, UT) => {
    UT.d = function(TT, UT) {
      if (TT && UT) {
        var mT = Array.isArray(UT) ? UT : UT.split(","),
          WT = TT.name || "",
          zT = (TT.type || "").toLowerCase(),
          MT = zT.replace(/\/.*$/, "");
        return mT.some((function(TT) {
          var UT = TT.trim().toLowerCase();
          return "." === UT.charAt(0) ? WT.toLowerCase().endsWith(UT) : UT.endsWith("/*") ? MT === UT.replace(/\/.*$/, "") : zT === UT
        }))
      }
      return !0
    }
  },
  5057: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => pU
    });
    var WT = mT(63),
      zT = mT(5066),
      MT = mT.n(zT);

    function gT(TT, UT, mT, WT) {
      return new(mT || (mT = Promise))((function(zT, MT) {
        function gT(TT) {
          try {
            HT(WT.next(TT))
          } catch (UT) {
            MT(UT)
          }
        }

        function nT(TT) {
          try {
            HT(WT.throw(TT))
          } catch (UT) {
            MT(UT)
          }
        }

        function HT(TT) {
          var UT;
          TT.done ? zT(TT.value) : (UT = TT.value, UT instanceof mT ? UT : new mT((function(TT) {
            TT(UT)
          }))).then(gT, nT)
        }
        HT((WT = WT.apply(TT, UT || [])).next())
      }))
    }

    function nT(TT, UT) {
      var mT, WT, zT, MT, gT = {
        label: 0,
        sent: function() {
          if (1 & zT[0]) throw zT[1];
          return zT[1]
        },
        trys: [],
        ops: []
      };
      return MT = {
        next: nT(0),
        throw: nT(1),
        return: nT(2)
      }, "function" === typeof Symbol && (MT[Symbol.iterator] = function() {
        return this
      }), MT;

      function nT(nT) {
        return function(HT) {
          return function(nT) {
            if (mT) throw new TypeError("Generator is already executing.");
            for (; MT && (MT = 0, nT[0] && (gT = 0)), gT;) try {
              if (mT = 1, WT && (zT = 2 & nT[0] ? WT.return : nT[0] ? WT.throw || ((zT = WT.return) && zT.call(WT), 0) : WT.next) && !(zT = zT.call(WT, nT[1])).done) return zT;
              switch (WT = 0, zT && (nT = [2 & nT[0], zT.value]), nT[0]) {
                case 0:
                case 1:
                  zT = nT;
                  break;
                case 4:
                  return gT.label++, {
                    value: nT[1],
                    done: !1
                  };
                case 5:
                  gT.label++, WT = nT[1], nT = [0];
                  continue;
                case 7:
                  nT = gT.ops.pop(), gT.trys.pop();
                  continue;
                default:
                  if (!(zT = (zT = gT.trys).length > 0 && zT[zT.length - 1]) && (6 === nT[0] || 2 === nT[0])) {
                    gT = 0;
                    continue
                  }
                  if (3 === nT[0] && (!zT || nT[1] > zT[0] && nT[1] < zT[3])) {
                    gT.label = nT[1];
                    break
                  }
                  if (6 === nT[0] && gT.label < zT[1]) {
                    gT.label = zT[1], zT = nT;
                    break
                  }
                  if (zT && gT.label < zT[2]) {
                    gT.label = zT[2], gT.ops.push(nT);
                    break
                  }
                  zT[2] && gT.ops.pop(), gT.trys.pop();
                  continue
              }
              nT = UT.call(TT, gT)
            } catch (HT) {
              nT = [6, HT], WT = 0
            } finally {
              mT = zT = 0
            }
            if (5 & nT[0]) throw nT[1];
            return {
              value: nT[0] ? nT[1] : void 0,
              done: !0
            }
          }([nT, HT])
        }
      }
    }
    Object.create;

    function HT(TT, UT) {
      var mT = "function" === typeof Symbol && TT[Symbol.iterator];
      if (!mT) return TT;
      var WT, zT, MT = mT.call(TT),
        gT = [];
      try {
        for (;
          (void 0 === UT || UT-- > 0) && !(WT = MT.next()).done;) gT.push(WT.value)
      } catch (nT) {
        zT = {
          error: nT
        }
      } finally {
        try {
          WT && !WT.done && (mT = MT.return) && mT.call(MT)
        } finally {
          if (zT) throw zT.error
        }
      }
      return gT
    }

    function kT(TT, UT, mT) {
      if (mT || 2 === arguments.length)
        for (var WT, zT = 0, MT = UT.length; zT < MT; zT++) !WT && zT in UT || (WT || (WT = Array.prototype.slice.call(UT, 0, zT)), WT[zT] = UT[zT]);
      return TT.concat(WT || Array.prototype.slice.call(UT))
    }
    Object.create;
    "function" === typeof SuppressedError && SuppressedError;
    var jT = new Map([
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
      ["Xj", "application/vnd.ms-outlook"]
    ]);

    function lT(TT, UT) {
      var mT = function(TT) {
        var UT = TT.name;
        if (UT && -1 !== UT.lastIndexOf(".") && !TT.type) {
          var mT = UT.split(".").pop().toLowerCase(),
            WT = jT.get(mT);
          WT && Object.defineProperty(TT, "type", {
            value: WT,
            writable: !1,
            configurable: !1,
            enumerable: !0
          })
        }
        return TT
      }(TT);
      if ("string" !== typeof mT.path) {
        var WT = TT.webkitRelativePath;
        Object.defineProperty(mT, "path", {
          value: "string" === typeof UT ? UT : "string" === typeof WT && WT.length > 0 ? WT : TT.name,
          writable: !1,
          configurable: !1,
          enumerable: !0
        })
      }
      return mT
    }
    var LT = [".DS_Store", "Thumbs.db"];

    function pT(TT) {
      return "object" === typeof TT && null !== TT
    }

    function BT(TT) {
      return fT(TT.target.files).map((function(TT) {
        return lT(TT)
      }))
    }

    function ZT(TT) {
      return gT(this, void 0, void 0, (function() {
        return nT(this, (function(UT) {
          switch (UT.label) {
            case 0:
              return [4, Promise.all(TT.map((function(TT) {
                return TT.getFile()
              })))];
            case 1:
              return [2, UT.sent().map((function(TT) {
                return lT(TT)
              }))]
          }
        }))
      }))
    }

    function cT(TT, UT) {
      return gT(this, void 0, void 0, (function() {
        var mT;
        return nT(this, (function(WT) {
          switch (WT.label) {
            case 0:
              return TT.items ? (mT = fT(TT.items).filter((function(TT) {
                return "file" === TT.kind
              })), "drop" !== UT ? [2, mT] : [4, Promise.all(mT.map(qT))]) : [3, 2];
            case 1:
              return [2, vT(iT(WT.sent()))];
            case 2:
              return [2, vT(fT(TT.files).map((function(TT) {
                return lT(TT)
              })))]
          }
        }))
      }))
    }

    function vT(TT) {
      return TT.filter((function(TT) {
        return -1 === LT.indexOf(TT.name)
      }))
    }

    function fT(TT) {
      if (null === TT) return [];
      for (var UT = [], mT = 0; mT < TT.length; mT++) {
        var WT = TT[mT];
        UT.push(WT)
      }
      return UT
    }

    function qT(TT) {
      if ("function" !== typeof TT.webkitGetAsEntry) return bT(TT);
      var UT = TT.webkitGetAsEntry();
      return UT && UT.isDirectory ? eT(UT) : bT(TT)
    }

    function iT(TT) {
      return TT.reduce((function(TT, UT) {
        return kT(kT([], HT(TT), !1), HT(Array.isArray(UT) ? iT(UT) : [UT]), !1)
      }), [])
    }

    function bT(TT) {
      var UT = TT.getAsFile();
      if (!UT) return Promise.reject("".concat(TT, " is not a File"));
      var mT = lT(UT);
      return Promise.resolve(mT)
    }

    function OT(TT) {
      return gT(this, void 0, void 0, (function() {
        return nT(this, (function(UT) {
          return [2, TT.isDirectory ? eT(TT) : YT(TT)]
        }))
      }))
    }

    function eT(TT) {
      var UT = TT.createReader();
      return new Promise((function(TT, mT) {
        var WT = [];
        ! function zT() {
          var MT = this;
          UT.readEntries((function(UT) {
            return gT(MT, void 0, void 0, (function() {
              var MT, gT, HT;
              return nT(this, (function(nT) {
                switch (nT.label) {
                  case 0:
                    if (UT.length) return [3, 5];
                    nT.label = 1;
                  case 1:
                    return nT.trys.push([1, 3, , 4]), [4, Promise.all(WT)];
                  case 2:
                    return MT = nT.sent(), TT(MT), [3, 4];
                  case 3:
                    return gT = nT.sent(), mT(gT), [3, 4];
                  case 4:
                    return [3, 6];
                  case 5:
                    HT = Promise.all(UT.map(OT)), WT.push(HT), zT(), nT.label = 6;
                  case 6:
                    return [2]
                }
              }))
            }))
          }), (function(TT) {
            mT(TT)
          }))
        }()
      }))
    }

    function YT(TT) {
      return gT(this, void 0, void 0, (function() {
        return nT(this, (function(UT) {
          return [2, new Promise((function(UT, mT) {
            TT.file((function(mT) {
              var WT = lT(mT, TT.fullPath);
              UT(WT)
            }), (function(TT) {
              mT(TT)
            }))
          }))]
        }))
      }))
    }
    var JT = mT(5075);

    function xT(TT) {
      return function(TT) {
        if (Array.isArray(TT)) return XT(TT)
      }(TT) || function(TT) {
        if ("undefined" !== typeof Symbol && null != TT[Symbol.iterator] || null != TT["@@iterator"]) return Array.from(TT)
      }(TT) || yT(TT) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function dT(TT, UT) {
      var mT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var WT = Object.getOwnPropertySymbols(TT);
        UT && (WT = WT.filter((function(UT) {
          return Object.getOwnPropertyDescriptor(TT, UT).enumerable
        }))), mT.push.apply(mT, WT)
      }
      return mT
    }

    function wT(TT) {
      for (var UT = 1; UT < arguments.length; UT++) {
        var mT = null != arguments[UT] ? arguments[UT] : {};
        UT % 2 ? dT(Object(mT), !0).forEach((function(UT) {
          tT(TT, UT, mT[UT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(mT)) : dT(Object(mT)).forEach((function(UT) {
          Object.defineProperty(TT, UT, Object.getOwnPropertyDescriptor(mT, UT))
        }))
      }
      return TT
    }

    function tT(TT, UT, mT) {
      return UT in TT ? Object.defineProperty(TT, UT, {
        value: mT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[UT] = mT, TT
    }

    function aT(TT, UT) {
      return function(TT) {
        if (Array.isArray(TT)) return TT
      }(TT) || function(TT, UT) {
        var mT = null == TT ? null : "undefined" !== typeof Symbol && TT[Symbol.iterator] || TT["@@iterator"];
        if (null == mT) return;
        var WT, zT, MT = [],
          gT = !0,
          nT = !1;
        try {
          for (mT = mT.call(TT); !(gT = (WT = mT.next()).done) && (MT.push(WT.value), !UT || MT.length !== UT); gT = !0);
        } catch (HT) {
          nT = !0, zT = HT
        } finally {
          try {
            gT || null == mT.return || mT.return()
          } finally {
            if (nT) throw zT
          }
        }
        return MT
      }(TT, UT) || yT(TT, UT) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function yT(TT, UT) {
      if (TT) {
        if ("string" === typeof TT) return XT(TT, UT);
        var mT = Object.prototype.toString.call(TT).slice(8, -1);
        return "Object" === mT && TT.constructor && (mT = TT.constructor.name), "Map" === mT || "Set" === mT ? Array.from(TT) : "Arguments" === mT || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(mT) ? XT(TT, UT) : void 0
      }
    }

    function XT(TT, UT) {
      (null == UT || UT > TT.length) && (UT = TT.length);
      for (var mT = 0, WT = new Array(UT); mT < UT; mT++) WT[mT] = TT[mT];
      return WT
    }
    var IT = "file-invalid-type",
      QT = "file-too-large",
      sT = "file-too-small",
      FT = "too-many-files",
      PT = function(TT) {
        TT = Array.isArray(TT) && 1 === TT.length ? TT[0] : TT;
        var UT = Array.isArray(TT) ? "one of ".concat(TT.join(", ")) : TT;
        return {
          code: IT,
          message: "File type must be ".concat(UT)
        }
      },
      VT = function(TT) {
        return {
          code: QT,
          message: "File is larger than ".concat(TT, " ").concat(1 === TT ? "byte" : "bytes")
        }
      },
      uT = function(TT) {
        return {
          code: sT,
          message: "File is smaller than ".concat(TT, " ").concat(1 === TT ? "byte" : "bytes")
        }
      },
      CT = {
        code: FT,
        message: "Too many files"
      };

    function rT(TT, UT) {
      var mT = "application/x-moz-file" === TT.type || (0, JT.d)(TT, UT);
      return [mT, mT ? null : PT(UT)]
    }

    function KT(TT, UT, mT) {
      if (ST(TT.size))
        if (ST(UT) && ST(mT)) {
          if (TT.size > mT) return [!1, VT(mT)];
          if (TT.size < UT) return [!1, uT(UT)]
        } else {
          if (ST(UT) && TT.size < UT) return [!1, uT(UT)];
          if (ST(mT) && TT.size > mT) return [!1, VT(mT)]
        } return [!0, null]
    }

    function ST(TT) {
      return void 0 !== TT && null !== TT
    }

    function GT(TT) {
      return "function" === typeof TT.isPropagationStopped ? TT.isPropagationStopped() : "undefined" !== typeof TT.cancelBubble && TT.cancelBubble
    }

    function NT(TT) {
      return TT.dataTransfer ? Array.prototype.some.call(TT.dataTransfer.types, (function(TT) {
        return "Files" === TT || "application/x-moz-file" === TT
      })) : !!TT.target && !!TT.target.files
    }

    function ET(TT) {
      TT.preventDefault()
    }

    function hT() {
      for (var TT = arguments.length, UT = new Array(TT), mT = 0; mT < TT; mT++) UT[mT] = arguments[mT];
      return function(TT) {
        for (var mT = arguments.length, WT = new Array(mT > 1 ? mT - 1 : 0), zT = 1; zT < mT; zT++) WT[zT - 1] = arguments[zT];
        return UT.some((function(UT) {
          return !GT(TT) && UT && UT.apply(void 0, [TT].concat(WT)), GT(TT)
        }))
      }
    }

    function DT(TT) {
      return "audio/*" === TT || "video/*" === TT || "image/*" === TT || "text/*" === TT || /\w+\/[-+.\w]+/g.test(TT)
    }

    function oT(TT) {
      return /^.*\.[\w]+$/.test(TT)
    }
    var AT = ["children"],
      RT = ["open"],
      TU = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
      UU = ["refKey", "onChange", "onClick"];

    function mU(TT) {
      return function(TT) {
        if (Array.isArray(TT)) return MU(TT)
      }(TT) || function(TT) {
        if ("undefined" !== typeof Symbol && null != TT[Symbol.iterator] || null != TT["@@iterator"]) return Array.from(TT)
      }(TT) || zU(TT) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function WU(TT, UT) {
      return function(TT) {
        if (Array.isArray(TT)) return TT
      }(TT) || function(TT, UT) {
        var mT = null == TT ? null : "undefined" !== typeof Symbol && TT[Symbol.iterator] || TT["@@iterator"];
        if (null == mT) return;
        var WT, zT, MT = [],
          gT = !0,
          nT = !1;
        try {
          for (mT = mT.call(TT); !(gT = (WT = mT.next()).done) && (MT.push(WT.value), !UT || MT.length !== UT); gT = !0);
        } catch (HT) {
          nT = !0, zT = HT
        } finally {
          try {
            gT || null == mT.return || mT.return()
          } finally {
            if (nT) throw zT
          }
        }
        return MT
      }(TT, UT) || zU(TT, UT) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function zU(TT, UT) {
      if (TT) {
        if ("string" === typeof TT) return MU(TT, UT);
        var mT = Object.prototype.toString.call(TT).slice(8, -1);
        return "Object" === mT && TT.constructor && (mT = TT.constructor.name), "Map" === mT || "Set" === mT ? Array.from(TT) : "Arguments" === mT || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(mT) ? MU(TT, UT) : void 0
      }
    }

    function MU(TT, UT) {
      (null == UT || UT > TT.length) && (UT = TT.length);
      for (var mT = 0, WT = new Array(UT); mT < UT; mT++) WT[mT] = TT[mT];
      return WT
    }

    function gU(TT, UT) {
      var mT = Object.keys(TT);
      if (Object.getOwnPropertySymbols) {
        var WT = Object.getOwnPropertySymbols(TT);
        UT && (WT = WT.filter((function(UT) {
          return Object.getOwnPropertyDescriptor(TT, UT).enumerable
        }))), mT.push.apply(mT, WT)
      }
      return mT
    }

    function nU(TT) {
      for (var UT = 1; UT < arguments.length; UT++) {
        var mT = null != arguments[UT] ? arguments[UT] : {};
        UT % 2 ? gU(Object(mT), !0).forEach((function(UT) {
          HU(TT, UT, mT[UT])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(TT, Object.getOwnPropertyDescriptors(mT)) : gU(Object(mT)).forEach((function(UT) {
          Object.defineProperty(TT, UT, Object.getOwnPropertyDescriptor(mT, UT))
        }))
      }
      return TT
    }

    function HU(TT, UT, mT) {
      return UT in TT ? Object.defineProperty(TT, UT, {
        value: mT,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : TT[UT] = mT, TT
    }

    function kU(TT, UT) {
      if (null == TT) return {};
      var mT, WT, zT = function(TT, UT) {
        if (null == TT) return {};
        var mT, WT, zT = {},
          MT = Object.keys(TT);
        for (WT = 0; WT < MT.length; WT++) mT = MT[WT], UT.indexOf(mT) >= 0 || (zT[mT] = TT[mT]);
        return zT
      }(TT, UT);
      if (Object.getOwnPropertySymbols) {
        var MT = Object.getOwnPropertySymbols(TT);
        for (WT = 0; WT < MT.length; WT++) mT = MT[WT], UT.indexOf(mT) >= 0 || Object.prototype.propertyIsEnumerable.call(TT, mT) && (zT[mT] = TT[mT])
      }
      return zT
    }
    var jU = (0, WT.forwardRef)((function(TT, UT) {
      var mT = TT.children,
        zT = pU(kU(TT, AT)),
        MT = zT.open,
        gT = kU(zT, RT);
      return (0, WT.useImperativeHandle)(UT, (function() {
        return {
          open: MT
        }
      }), [MT]), WT.createElement(WT.Fragment, null, mT(nU(nU({}, gT), {}, {
        open: MT
      })))
    }));
    jU.displayName = "Dropzone";
    var lU = {
      disabled: !1,
      getFilesFromEvent: function(TT) {
        return gT(this, void 0, void 0, (function() {
          return nT(this, (function(UT) {
            return pT(TT) && pT(TT.dataTransfer) ? [2, cT(TT.dataTransfer, TT.type)] : function(TT) {
              return pT(TT) && pT(TT.target)
            }(TT) ? [2, BT(TT)] : Array.isArray(TT) && TT.every((function(TT) {
              return "getFile" in TT && "function" === typeof TT.getFile
            })) ? [2, ZT(TT)] : [2, []]
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
    jU.defaultProps = lU, jU.propTypes = {
      children: MT().func,
      accept: MT().objectOf(MT().arrayOf(MT().string)),
      multiple: MT().bool,
      preventDropOnDocument: MT().bool,
      noClick: MT().bool,
      noKeyboard: MT().bool,
      noDrag: MT().bool,
      noDragEventsBubbling: MT().bool,
      minSize: MT().number,
      maxSize: MT().number,
      maxFiles: MT().number,
      disabled: MT().bool,
      getFilesFromEvent: MT().func,
      onFileDialogCancel: MT().func,
      onFileDialogOpen: MT().func,
      useFsAccessApi: MT().bool,
      autoFocus: MT().bool,
      onDragEnter: MT().func,
      onDragLeave: MT().func,
      onDragOver: MT().func,
      onDrop: MT().func,
      onDropAccepted: MT().func,
      onDropRejected: MT().func,
      onError: MT().func,
      validator: MT().func
    };
    var LU = {
      Hs: !1,
      isFileDialogActive: !1,
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1,
      acceptedFiles: [],
      fileRejections: []
    };

    function pU() {
      var TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        UT = nU(nU({}, lU), TT),
        mT = UT.accept,
        zT = UT.disabled,
        MT = UT.getFilesFromEvent,
        gT = UT.maxSize,
        nT = UT.minSize,
        HT = UT.multiple,
        kT = UT.maxFiles,
        jT = UT.onDragEnter,
        lT = UT.onDragLeave,
        LT = UT.onDragOver,
        pT = UT.onDrop,
        BT = UT.onDropAccepted,
        ZT = UT.onDropRejected,
        cT = UT.onFileDialogCancel,
        vT = UT.onFileDialogOpen,
        fT = UT.useFsAccessApi,
        qT = UT.autoFocus,
        iT = UT.preventDropOnDocument,
        bT = UT.noClick,
        OT = UT.noKeyboard,
        eT = UT.noDrag,
        YT = UT.noDragEventsBubbling,
        JT = UT.onError,
        dT = UT.validator,
        yT = (0, WT.useMemo)((function() {
          return function(TT) {
            if (ST(TT)) return Object.entries(TT).reduce((function(TT, UT) {
              var mT = aT(UT, 2),
                WT = mT[0],
                zT = mT[1];
              return [].concat(xT(TT), [WT], xT(zT))
            }), []).filter((function(TT) {
              return DT(TT) || oT(TT)
            })).join(",")
          }(mT)
        }), [mT]),
        XT = (0, WT.useMemo)((function() {
          return function(TT) {
            return ST(TT) ? [{
              description: "Files",
              accept: Object.entries(TT).filter((function(TT) {
                var UT = aT(TT, 2),
                  mT = UT[0],
                  WT = UT[1],
                  zT = !0;
                return DT(mT) || (console.warn('Skipped "'.concat(mT, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), zT = !1), Array.isArray(WT) && WT.every(oT) || (console.warn('Skipped "'.concat(mT, '" because an invalid file extension was provided.')), zT = !1), zT
              })).reduce((function(TT, UT) {
                var mT = aT(UT, 2),
                  WT = mT[0],
                  zT = mT[1];
                return wT(wT({}, TT), {}, tT({}, WT, zT))
              }), {})
            }] : TT
          }(mT)
        }), [mT]),
        IT = (0, WT.useMemo)((function() {
          return "function" === typeof vT ? vT : ZU
        }), [vT]),
        QT = (0, WT.useMemo)((function() {
          return "function" === typeof cT ? cT : ZU
        }), [cT]),
        sT = (0, WT.useRef)(null),
        FT = (0, WT.useRef)(null),
        PT = WU((0, WT.useReducer)(BU, LU), 2),
        VT = PT[0],
        uT = PT[1],
        AT = VT.Hs,
        RT = VT.isFileDialogActive,
        zU = (0, WT.useRef)("undefined" !== typeof window && window.isSecureContext && fT && "showOpenFilePicker" in window),
        MU = function() {
          !zU.current && RT && setTimeout((function() {
            FT.current && (FT.current.files.length || (uT({
              type: "closeDialog"
            }), QT()))
          }), 300)
        };
      (0, WT.useEffect)((function() {
        return window.addEventListener("focus", MU, !1),
          function() {
            window.removeEventListener("focus", MU, !1)
          }
      }), [FT, RT, QT, zU]);
      var gU = (0, WT.useRef)([]),
        jU = function(TT) {
          sT.current && sT.current.contains(TT.target) || (TT.preventDefault(), gU.current = [])
        };
      (0, WT.useEffect)((function() {
        return iT && (document.addEventListener("dragover", ET, !1), document.addEventListener("drop", jU, !1)),
          function() {
            iT && (document.removeEventListener("dragover", ET), document.removeEventListener("drop", jU))
          }
      }), [sT, iT]), (0, WT.useEffect)((function() {
        return !zT && qT && sT.current && sT.current.focus(),
          function() {}
      }), [sT, qT, zT]);
      var pU = (0, WT.useCallback)((function(TT) {
          JT ? JT(TT) : console.error(TT)
        }), [JT]),
        cU = (0, WT.useCallback)((function(TT) {
          TT.preventDefault(), TT.persist(), tU(TT), gU.current = [].concat(mU(gU.current), [TT.target]), NT(TT) && Promise.resolve(MT(TT)).then((function(UT) {
            if (!GT(TT) || YT) {
              var mT = UT.length,
                WT = mT > 0 && function(TT) {
                  var UT = TT.files,
                    mT = TT.accept,
                    WT = TT.minSize,
                    zT = TT.maxSize,
                    MT = TT.multiple,
                    gT = TT.maxFiles,
                    nT = TT.validator;
                  return !(!MT && UT.length > 1 || MT && gT >= 1 && UT.length > gT) && UT.every((function(TT) {
                    var UT = aT(rT(TT, mT), 1)[0],
                      MT = aT(KT(TT, WT, zT), 1)[0],
                      gT = nT ? nT(TT) : null;
                    return UT && MT && !gT
                  }))
                }({
                  files: UT,
                  accept: yT,
                  minSize: nT,
                  maxSize: gT,
                  multiple: HT,
                  maxFiles: kT,
                  validator: dT
                });
              uT({
                isDragAccept: WT,
                isDragReject: mT > 0 && !WT,
                isDragActive: !0,
                type: "setDraggedFiles"
              }), jT && jT(TT)
            }
          })).catch((function(TT) {
            return pU(TT)
          }))
        }), [MT, jT, pU, YT, yT, nT, gT, HT, kT, dT]),
        vU = (0, WT.useCallback)((function(TT) {
          TT.preventDefault(), TT.persist(), tU(TT);
          var UT = NT(TT);
          if (UT && TT.dataTransfer) try {
            TT.dataTransfer.dropEffect = "copy"
          } catch (mT) {}
          return UT && LT && LT(TT), !1
        }), [LT, YT]),
        fU = (0, WT.useCallback)((function(TT) {
          TT.preventDefault(), TT.persist(), tU(TT);
          var UT = gU.current.filter((function(TT) {
              return sT.current && sT.current.contains(TT)
            })),
            mT = UT.indexOf(TT.target); - 1 !== mT && UT.splice(mT, 1), gU.current = UT, UT.length > 0 || (uT({
            type: "setDraggedFiles",
            isDragActive: !1,
            isDragAccept: !1,
            isDragReject: !1
          }), NT(TT) && lT && lT(TT))
        }), [sT, lT, YT]),
        qU = (0, WT.useCallback)((function(TT, UT) {
          var mT = [],
            WT = [];
          TT.forEach((function(TT) {
            var UT = WU(rT(TT, yT), 2),
              zT = UT[0],
              MT = UT[1],
              HT = WU(KT(TT, nT, gT), 2),
              kT = HT[0],
              jT = HT[1],
              lT = dT ? dT(TT) : null;
            if (zT && kT && !lT) mT.push(TT);
            else {
              var LT = [MT, jT];
              lT && (LT = LT.concat(lT)), WT.push({
                file: TT,
                errors: LT.filter((function(TT) {
                  return TT
                }))
              })
            }
          })), (!HT && mT.length > 1 || HT && kT >= 1 && mT.length > kT) && (mT.forEach((function(TT) {
            WT.push({
              file: TT,
              errors: [CT]
            })
          })), mT.splice(0)), uT({
            acceptedFiles: mT,
            fileRejections: WT,
            type: "setFiles"
          }), pT && pT(mT, WT, UT), WT.length > 0 && ZT && ZT(WT, UT), mT.length > 0 && BT && BT(mT, UT)
        }), [uT, HT, yT, nT, gT, kT, pT, BT, ZT, dT]),
        iU = (0, WT.useCallback)((function(TT) {
          TT.preventDefault(), TT.persist(), tU(TT), gU.current = [], NT(TT) && Promise.resolve(MT(TT)).then((function(UT) {
            GT(TT) && !YT || qU(UT, TT)
          })).catch((function(TT) {
            return pU(TT)
          })), uT({
            type: "reset"
          })
        }), [MT, qU, pU, YT]),
        bU = (0, WT.useCallback)((function() {
          if (zU.current) {
            uT({
              type: "openDialog"
            }), IT();
            var TT = {
              multiple: HT,
              types: XT
            };
            window.showOpenFilePicker(TT).then((function(TT) {
              return MT(TT)
            })).then((function(TT) {
              qU(TT, null), uT({
                type: "closeDialog"
              })
            })).catch((function(TT) {
              var UT;
              (UT = TT) instanceof DOMException && ("AbortError" === UT.name || UT.code === UT.ABORT_ERR) ? (QT(TT), uT({
                type: "closeDialog"
              })) : ! function(TT) {
                return TT instanceof DOMException && ("SecurityError" === TT.name || TT.code === TT.SECURITY_ERR)
              }(TT) ? pU(TT) : (zU.current = !1, FT.current ? (FT.current.value = null, FT.current.click()) : pU(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))
            }))
          } else FT.current && (uT({
            type: "openDialog"
          }), IT(), FT.current.value = null, FT.current.click())
        }), [uT, IT, QT, fT, qU, pU, XT, HT]),
        OU = (0, WT.useCallback)((function(TT) {
          sT.current && sT.current.isEqualNode(TT.target) && (" " !== TT.key && "Enter" !== TT.key && 32 !== TT.keyCode && 13 !== TT.keyCode || (TT.preventDefault(), bU()))
        }), [sT, bU]),
        eU = (0, WT.useCallback)((function() {
          uT({
            type: "focus"
          })
        }), []),
        YU = (0, WT.useCallback)((function() {
          uT({
            type: "blur"
          })
        }), []),
        JU = (0, WT.useCallback)((function() {
          bT || (! function() {
            var TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
            return function(TT) {
              return -1 !== TT.indexOf("MSIE") || -1 !== TT.indexOf("Trident/")
            }(TT) || function(TT) {
              return -1 !== TT.indexOf("Edge/")
            }(TT)
          }() ? bU() : setTimeout(bU, 0))
        }), [bT, bU]),
        xU = function(TT) {
          return zT ? null : TT
        },
        dU = function(TT) {
          return OT ? null : xU(TT)
        },
        wU = function(TT) {
          return eT ? null : xU(TT)
        },
        tU = function(TT) {
          YT && TT.stopPropagation()
        },
        aU = (0, WT.useMemo)((function() {
          return function() {
            var TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              UT = TT.refKey,
              mT = void 0 === UT ? "ref" : UT,
              WT = TT.role,
              MT = TT.onKeyDown,
              gT = TT.onFocus,
              nT = TT.onBlur,
              HT = TT.onClick,
              kT = TT.onDragEnter,
              jT = TT.onDragOver,
              lT = TT.onDragLeave,
              LT = TT.onDrop,
              pT = kU(TT, TU);
            return nU(nU(HU({
              onKeyDown: dU(hT(MT, OU)),
              onFocus: dU(hT(gT, eU)),
              onBlur: dU(hT(nT, YU)),
              onClick: xU(hT(HT, JU)),
              onDragEnter: wU(hT(kT, cU)),
              onDragOver: wU(hT(jT, vU)),
              onDragLeave: wU(hT(lT, fU)),
              onDrop: wU(hT(LT, iU)),
              role: "string" === typeof WT && "" !== WT ? WT : "presentation"
            }, mT, sT), zT || OT ? {} : {
              tabIndex: 0
            }), pT)
          }
        }), [sT, OU, eU, YU, JU, cU, vU, fU, iU, OT, eT, zT]),
        yU = (0, WT.useCallback)((function(TT) {
          TT.stopPropagation()
        }), []),
        XU = (0, WT.useMemo)((function() {
          return function() {
            var TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              UT = TT.refKey,
              mT = void 0 === UT ? "ref" : UT,
              WT = TT.onChange,
              zT = TT.onClick,
              MT = kU(TT, UU);
            return nU(nU({}, HU({
              accept: yT,
              multiple: HT,
              type: "file",
              style: {
                display: "none"
              },
              onChange: xU(hT(WT, iU)),
              onClick: xU(hT(zT, yU)),
              tabIndex: -1
            }, mT, FT)), MT)
          }
        }), [FT, mT, HT, iU, zT]);
      return nU(nU({}, VT), {}, {
        Hs: AT && !zT,
        getRootProps: aU,
        getInputProps: XU,
        rootRef: sT,
        inputRef: FT,
        open: xU(bU)
      })
    }

    function BU(TT, UT) {
      switch (UT.type) {
        case "focus":
          return nU(nU({}, TT), {}, {
            Hs: !0
          });
        case "blur":
          return nU(nU({}, TT), {}, {
            Hs: !1
          });
        case "openDialog":
          return nU(nU({}, LU), {}, {
            isFileDialogActive: !0
          });
        case "closeDialog":
          return nU(nU({}, TT), {}, {
            isFileDialogActive: !1
          });
        case "setDraggedFiles":
          return nU(nU({}, TT), {}, {
            isDragActive: UT.isDragActive,
            isDragAccept: UT.isDragAccept,
            isDragReject: UT.isDragReject
          });
        case "setFiles":
          return nU(nU({}, TT), {}, {
            acceptedFiles: UT.acceptedFiles,
            fileRejections: UT.fileRejections
          });
        case "reset":
          return nU({}, LU);
        default:
          return TT
      }
    }

    function ZU() {}
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);