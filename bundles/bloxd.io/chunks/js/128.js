export const id = 128;
export const ids = [128];
export const modules = {
  6025: (RR, JR) => {
    JR.d = function(RR, JR) {
      if (RR && JR) {
        var GR = Array.isArray(JR) ? JR : JR.split(","),
          yR = RR.name || "",
          tR = (RR.type || "").toLowerCase(),
          uR = tR.replace(/\/.*$/, "");
        return GR.some((function(RR) {
          var JR = RR.trim().toLowerCase();
          return "." === JR.charAt(0) ? yR.toLowerCase().endsWith(JR) : JR.endsWith("/*") ? uR === JR.replace(/\/.*$/, "") : tR === JR
        }))
      }
      return !0
    }
  },
  6003: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => rJ
    });
    var yR = GR(66),
      tR = GR(6008),
      uR = GR.n(tR);

    function ZR(RR, JR, GR, yR) {
      return new(GR || (GR = Promise))((function(tR, uR) {
        function ZR(RR) {
          try {
            iR(yR.next(RR))
          } catch (JR) {
            uR(JR)
          }
        }

        function qR(RR) {
          try {
            iR(yR.throw(RR))
          } catch (JR) {
            uR(JR)
          }
        }

        function iR(RR) {
          var JR;
          RR.done ? tR(RR.value) : (JR = RR.value, JR instanceof GR ? JR : new GR((function(RR) {
            RR(JR)
          }))).then(ZR, qR)
        }
        iR((yR = yR.apply(RR, JR || [])).next())
      }))
    }

    function qR(RR, JR) {
      var GR, yR, tR, uR, ZR = {
        label: 0,
        sent: function() {
          if (1 & tR[0]) throw tR[1];
          return tR[1]
        },
        trys: [],
        ops: []
      };
      return uR = {
        next: qR(0),
        throw: qR(1),
        return: qR(2)
      }, "function" === typeof Symbol && (uR[Symbol.iterator] = function() {
        return this
      }), uR;

      function qR(qR) {
        return function(iR) {
          return function(qR) {
            if (GR) throw new TypeError("Generator is already executing.");
            for (; uR && (uR = 0, qR[0] && (ZR = 0)), ZR;) try {
              if (GR = 1, yR && (tR = 2 & qR[0] ? yR.return : qR[0] ? yR.throw || ((tR = yR.return) && tR.call(yR), 0) : yR.next) && !(tR = tR.call(yR, qR[1])).done) return tR;
              switch (yR = 0, tR && (qR = [2 & qR[0], tR.value]), qR[0]) {
                case 0:
                case 1:
                  tR = qR;
                  break;
                case 4:
                  return ZR.label++, {
                    value: qR[1],
                    done: !1
                  };
                case 5:
                  ZR.label++, yR = qR[1], qR = [0];
                  continue;
                case 7:
                  qR = ZR.ops.pop(), ZR.trys.pop();
                  continue;
                default:
                  if (!(tR = (tR = ZR.trys).length > 0 && tR[tR.length - 1]) && (6 === qR[0] || 2 === qR[0])) {
                    ZR = 0;
                    continue
                  }
                  if (3 === qR[0] && (!tR || qR[1] > tR[0] && qR[1] < tR[3])) {
                    ZR.label = qR[1];
                    break
                  }
                  if (6 === qR[0] && ZR.label < tR[1]) {
                    ZR.label = tR[1], tR = qR;
                    break
                  }
                  if (tR && ZR.label < tR[2]) {
                    ZR.label = tR[2], ZR.ops.push(qR);
                    break
                  }
                  tR[2] && ZR.ops.pop(), ZR.trys.pop();
                  continue
              }
              qR = JR.call(RR, ZR)
            } catch (iR) {
              qR = [6, iR], yR = 0
            } finally {
              GR = tR = 0
            }
            if (5 & qR[0]) throw qR[1];
            return {
              value: qR[0] ? qR[1] : void 0,
              done: !0
            }
          }([qR, iR])
        }
      }
    }
    Object.create;

    function iR(RR, JR) {
      var GR = "function" === typeof Symbol && RR[Symbol.iterator];
      if (!GR) return RR;
      var yR, tR, uR = GR.call(RR),
        ZR = [];
      try {
        for (;
          (void 0 === JR || JR-- > 0) && !(yR = uR.next()).done;) ZR.push(yR.value)
      } catch (qR) {
        tR = {
          error: qR
        }
      } finally {
        try {
          yR && !yR.done && (GR = uR.return) && GR.call(uR)
        } finally {
          if (tR) throw tR.error
        }
      }
      return ZR
    }

    function fR(RR, JR, GR) {
      if (GR || 2 === arguments.length)
        for (var yR, tR = 0, uR = JR.length; tR < uR; tR++) !yR && tR in JR || (yR || (yR = Array.prototype.slice.call(JR, 0, tR)), yR[tR] = JR[tR]);
      return RR.concat(yR || Array.prototype.slice.call(JR))
    }
    Object.create;
    "function" === typeof SuppressedError && SuppressedError;
    var VR = new Map([
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
      ["LZ", "application/vnd.ms-outlook"]
    ]);

    function KR(RR, JR) {
      var GR = function(RR) {
        var JR = RR.name;
        if (JR && -1 !== JR.lastIndexOf(".") && !RR.type) {
          var GR = JR.split(".").pop().toLowerCase(),
            yR = VR.get(GR);
          yR && Object.defineProperty(RR, "type", {
            value: yR,
            writable: !1,
            configurable: !1,
            enumerable: !0
          })
        }
        return RR
      }(RR);
      if ("string" !== typeof GR.path) {
        var yR = RR.webkitRelativePath;
        Object.defineProperty(GR, "path", {
          value: "string" === typeof JR ? JR : "string" === typeof yR && yR.length > 0 ? yR : RR.name,
          writable: !1,
          configurable: !1,
          enumerable: !0
        })
      }
      return GR
    }
    var wR = [".DS_Store", "Thumbs.db"];

    function rR(RR) {
      return "object" === typeof RR && null !== RR
    }

    function eR(RR) {
      return UR(RR.target.files).map((function(RR) {
        return KR(RR)
      }))
    }

    function aR(RR) {
      return ZR(this, void 0, void 0, (function() {
        return qR(this, (function(JR) {
          switch (JR.label) {
            case 0:
              return [4, Promise.all(RR.map((function(RR) {
                return RR.getFile()
              })))];
            case 1:
              return [2, JR.sent().map((function(RR) {
                return KR(RR)
              }))]
          }
        }))
      }))
    }

    function LR(RR, JR) {
      return ZR(this, void 0, void 0, (function() {
        var GR;
        return qR(this, (function(yR) {
          switch (yR.label) {
            case 0:
              return RR.items ? (GR = UR(RR.items).filter((function(RR) {
                return "file" === RR.kind
              })), "drop" !== JR ? [2, GR] : [4, Promise.all(GR.map(WR))]) : [3, 2];
            case 1:
              return [2, nR(AR(yR.sent()))];
            case 2:
              return [2, nR(UR(RR.files).map((function(RR) {
                return KR(RR)
              })))]
          }
        }))
      }))
    }

    function nR(RR) {
      return RR.filter((function(RR) {
        return -1 === wR.indexOf(RR.name)
      }))
    }

    function UR(RR) {
      if (null === RR) return [];
      for (var JR = [], GR = 0; GR < RR.length; GR++) {
        var yR = RR[GR];
        JR.push(yR)
      }
      return JR
    }

    function WR(RR) {
      if ("function" !== typeof RR.webkitGetAsEntry) return CR(RR);
      var JR = RR.webkitGetAsEntry();
      return JR && JR.isDirectory ? MR(JR) : CR(RR)
    }

    function AR(RR) {
      return RR.reduce((function(RR, JR) {
        return fR(fR([], iR(RR), !1), iR(Array.isArray(JR) ? AR(JR) : [JR]), !1)
      }), [])
    }

    function CR(RR) {
      var JR = RR.getAsFile();
      if (!JR) return Promise.reject("".concat(RR, " is not a File"));
      var GR = KR(JR);
      return Promise.resolve(GR)
    }

    function XR(RR) {
      return ZR(this, void 0, void 0, (function() {
        return qR(this, (function(JR) {
          return [2, RR.isDirectory ? MR(RR) : BR(RR)]
        }))
      }))
    }

    function MR(RR) {
      var JR = RR.createReader();
      return new Promise((function(RR, GR) {
        var yR = [];
        ! function tR() {
          var uR = this;
          JR.readEntries((function(JR) {
            return ZR(uR, void 0, void 0, (function() {
              var uR, ZR, iR;
              return qR(this, (function(qR) {
                switch (qR.label) {
                  case 0:
                    if (JR.length) return [3, 5];
                    qR.label = 1;
                  case 1:
                    return qR.trys.push([1, 3, , 4]), [4, Promise.all(yR)];
                  case 2:
                    return uR = qR.sent(), RR(uR), [3, 4];
                  case 3:
                    return ZR = qR.sent(), GR(ZR), [3, 4];
                  case 4:
                    return [3, 6];
                  case 5:
                    iR = Promise.all(JR.map(XR)), yR.push(iR), tR(), qR.label = 6;
                  case 6:
                    return [2]
                }
              }))
            }))
          }), (function(RR) {
            GR(RR)
          }))
        }()
      }))
    }

    function BR(RR) {
      return ZR(this, void 0, void 0, (function() {
        return qR(this, (function(JR) {
          return [2, new Promise((function(JR, GR) {
            RR.file((function(GR) {
              var yR = KR(GR, RR.fullPath);
              JR(yR)
            }), (function(RR) {
              GR(RR)
            }))
          }))]
        }))
      }))
    }
    var lR = GR(6025);

    function pR(RR) {
      return function(RR) {
        if (Array.isArray(RR)) return NR(RR)
      }(RR) || function(RR) {
        if ("undefined" !== typeof Symbol && null != RR[Symbol.iterator] || null != RR["@@iterator"]) return Array.from(RR)
      }(RR) || xR(RR) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function gR(RR, JR) {
      var GR = Object.keys(RR);
      if (Object.getOwnPropertySymbols) {
        var yR = Object.getOwnPropertySymbols(RR);
        JR && (yR = yR.filter((function(JR) {
          return Object.getOwnPropertyDescriptor(RR, JR).enumerable
        }))), GR.push.apply(GR, yR)
      }
      return GR
    }

    function bR(RR) {
      for (var JR = 1; JR < arguments.length; JR++) {
        var GR = null != arguments[JR] ? arguments[JR] : {};
        JR % 2 ? gR(Object(GR), !0).forEach((function(JR) {
          vR(RR, JR, GR[JR])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(RR, Object.getOwnPropertyDescriptors(GR)) : gR(Object(GR)).forEach((function(JR) {
          Object.defineProperty(RR, JR, Object.getOwnPropertyDescriptor(GR, JR))
        }))
      }
      return RR
    }

    function vR(RR, JR, GR) {
      return JR in RR ? Object.defineProperty(RR, JR, {
        value: GR,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : RR[JR] = GR, RR
    }

    function OR(RR, JR) {
      return function(RR) {
        if (Array.isArray(RR)) return RR
      }(RR) || function(RR, JR) {
        var GR = null == RR ? null : "undefined" !== typeof Symbol && RR[Symbol.iterator] || RR["@@iterator"];
        if (null == GR) return;
        var yR, tR, uR = [],
          ZR = !0,
          qR = !1;
        try {
          for (GR = GR.call(RR); !(ZR = (yR = GR.next()).done) && (uR.push(yR.value), !JR || uR.length !== JR); ZR = !0);
        } catch (iR) {
          qR = !0, tR = iR
        } finally {
          try {
            ZR || null == GR.return || GR.return()
          } finally {
            if (qR) throw tR
          }
        }
        return uR
      }(RR, JR) || xR(RR, JR) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function xR(RR, JR) {
      if (RR) {
        if ("string" === typeof RR) return NR(RR, JR);
        var GR = Object.prototype.toString.call(RR).slice(8, -1);
        return "Object" === GR && RR.constructor && (GR = RR.constructor.name), "Map" === GR || "Set" === GR ? Array.from(RR) : "Arguments" === GR || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(GR) ? NR(RR, JR) : void 0
      }
    }

    function NR(RR, JR) {
      (null == JR || JR > RR.length) && (JR = RR.length);
      for (var GR = 0, yR = new Array(JR); GR < JR; GR++) yR[GR] = RR[GR];
      return yR
    }
    var DR = "file-invalid-type",
      HR = "file-too-large",
      oR = "file-too-small",
      cR = "too-many-files",
      PR = function(RR) {
        RR = Array.isArray(RR) && 1 === RR.length ? RR[0] : RR;
        var JR = Array.isArray(RR) ? "one of ".concat(RR.join(", ")) : RR;
        return {
          code: DR,
          message: "File type must be ".concat(JR)
        }
      },
      IR = function(RR) {
        return {
          code: HR,
          message: "File is larger than ".concat(RR, " ").concat(1 === RR ? "byte" : "bytes")
        }
      },
      mR = function(RR) {
        return {
          code: oR,
          message: "File is smaller than ".concat(RR, " ").concat(1 === RR ? "byte" : "bytes")
        }
      },
      zR = {
        code: cR,
        message: "Too many files"
      };

    function SR(RR, JR) {
      var GR = "application/x-moz-file" === RR.type || (0, lR.d)(RR, JR);
      return [GR, GR ? null : PR(JR)]
    }

    function jR(RR, JR, GR) {
      if (dR(RR.size))
        if (dR(JR) && dR(GR)) {
          if (RR.size > GR) return [!1, IR(GR)];
          if (RR.size < JR) return [!1, mR(JR)]
        } else {
          if (dR(JR) && RR.size < JR) return [!1, mR(JR)];
          if (dR(GR) && RR.size > GR) return [!1, IR(GR)]
        } return [!0, null]
    }

    function dR(RR) {
      return void 0 !== RR && null !== RR
    }

    function ER(RR) {
      return "function" === typeof RR.isPropagationStopped ? RR.isPropagationStopped() : "undefined" !== typeof RR.cancelBubble && RR.cancelBubble
    }

    function YR(RR) {
      return RR.dataTransfer ? Array.prototype.some.call(RR.dataTransfer.types, (function(RR) {
        return "Files" === RR || "application/x-moz-file" === RR
      })) : !!RR.target && !!RR.target.files
    }

    function kR(RR) {
      RR.preventDefault()
    }

    function QR() {
      for (var RR = arguments.length, JR = new Array(RR), GR = 0; GR < RR; GR++) JR[GR] = arguments[GR];
      return function(RR) {
        for (var GR = arguments.length, yR = new Array(GR > 1 ? GR - 1 : 0), tR = 1; tR < GR; tR++) yR[tR - 1] = arguments[tR];
        return JR.some((function(JR) {
          return !ER(RR) && JR && JR.apply(void 0, [RR].concat(yR)), ER(RR)
        }))
      }
    }

    function FR(RR) {
      return "audio/*" === RR || "video/*" === RR || "image/*" === RR || "text/*" === RR || /\w+\/[-+.\w]+/g.test(RR)
    }

    function TR(RR) {
      return /^.*\.[\w]+$/.test(RR)
    }
    var sR = ["children"],
      hR = ["open"],
      RJ = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
      JJ = ["refKey", "onChange", "onClick"];

    function GJ(RR) {
      return function(RR) {
        if (Array.isArray(RR)) return uJ(RR)
      }(RR) || function(RR) {
        if ("undefined" !== typeof Symbol && null != RR[Symbol.iterator] || null != RR["@@iterator"]) return Array.from(RR)
      }(RR) || tJ(RR) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function yJ(RR, JR) {
      return function(RR) {
        if (Array.isArray(RR)) return RR
      }(RR) || function(RR, JR) {
        var GR = null == RR ? null : "undefined" !== typeof Symbol && RR[Symbol.iterator] || RR["@@iterator"];
        if (null == GR) return;
        var yR, tR, uR = [],
          ZR = !0,
          qR = !1;
        try {
          for (GR = GR.call(RR); !(ZR = (yR = GR.next()).done) && (uR.push(yR.value), !JR || uR.length !== JR); ZR = !0);
        } catch (iR) {
          qR = !0, tR = iR
        } finally {
          try {
            ZR || null == GR.return || GR.return()
          } finally {
            if (qR) throw tR
          }
        }
        return uR
      }(RR, JR) || tJ(RR, JR) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function tJ(RR, JR) {
      if (RR) {
        if ("string" === typeof RR) return uJ(RR, JR);
        var GR = Object.prototype.toString.call(RR).slice(8, -1);
        return "Object" === GR && RR.constructor && (GR = RR.constructor.name), "Map" === GR || "Set" === GR ? Array.from(RR) : "Arguments" === GR || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(GR) ? uJ(RR, JR) : void 0
      }
    }

    function uJ(RR, JR) {
      (null == JR || JR > RR.length) && (JR = RR.length);
      for (var GR = 0, yR = new Array(JR); GR < JR; GR++) yR[GR] = RR[GR];
      return yR
    }

    function ZJ(RR, JR) {
      var GR = Object.keys(RR);
      if (Object.getOwnPropertySymbols) {
        var yR = Object.getOwnPropertySymbols(RR);
        JR && (yR = yR.filter((function(JR) {
          return Object.getOwnPropertyDescriptor(RR, JR).enumerable
        }))), GR.push.apply(GR, yR)
      }
      return GR
    }

    function qJ(RR) {
      for (var JR = 1; JR < arguments.length; JR++) {
        var GR = null != arguments[JR] ? arguments[JR] : {};
        JR % 2 ? ZJ(Object(GR), !0).forEach((function(JR) {
          iJ(RR, JR, GR[JR])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(RR, Object.getOwnPropertyDescriptors(GR)) : ZJ(Object(GR)).forEach((function(JR) {
          Object.defineProperty(RR, JR, Object.getOwnPropertyDescriptor(GR, JR))
        }))
      }
      return RR
    }

    function iJ(RR, JR, GR) {
      return JR in RR ? Object.defineProperty(RR, JR, {
        value: GR,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : RR[JR] = GR, RR
    }

    function fJ(RR, JR) {
      if (null == RR) return {};
      var GR, yR, tR = function(RR, JR) {
        if (null == RR) return {};
        var GR, yR, tR = {},
          uR = Object.keys(RR);
        for (yR = 0; yR < uR.length; yR++) GR = uR[yR], JR.indexOf(GR) >= 0 || (tR[GR] = RR[GR]);
        return tR
      }(RR, JR);
      if (Object.getOwnPropertySymbols) {
        var uR = Object.getOwnPropertySymbols(RR);
        for (yR = 0; yR < uR.length; yR++) GR = uR[yR], JR.indexOf(GR) >= 0 || Object.prototype.propertyIsEnumerable.call(RR, GR) && (tR[GR] = RR[GR])
      }
      return tR
    }
    var VJ = (0, yR.forwardRef)((function(RR, JR) {
      var GR = RR.children,
        tR = rJ(fJ(RR, sR)),
        uR = tR.open,
        ZR = fJ(tR, hR);
      return (0, yR.useImperativeHandle)(JR, (function() {
        return {
          open: uR
        }
      }), [uR]), yR.createElement(yR.Fragment, null, GR(qJ(qJ({}, ZR), {}, {
        open: uR
      })))
    }));
    VJ.displayName = "Dropzone";
    var KJ = {
      disabled: !1,
      getFilesFromEvent: function(RR) {
        return ZR(this, void 0, void 0, (function() {
          return qR(this, (function(JR) {
            return rR(RR) && rR(RR.dataTransfer) ? [2, LR(RR.dataTransfer, RR.type)] : function(RR) {
              return rR(RR) && rR(RR.target)
            }(RR) ? [2, eR(RR)] : Array.isArray(RR) && RR.every((function(RR) {
              return "getFile" in RR && "function" === typeof RR.getFile
            })) ? [2, aR(RR)] : [2, []]
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
    VJ.defaultProps = KJ, VJ.propTypes = {
      children: uR().func,
      accept: uR().objectOf(uR().arrayOf(uR().string)),
      multiple: uR().bool,
      preventDropOnDocument: uR().bool,
      noClick: uR().bool,
      noKeyboard: uR().bool,
      noDrag: uR().bool,
      noDragEventsBubbling: uR().bool,
      minSize: uR().number,
      maxSize: uR().number,
      maxFiles: uR().number,
      disabled: uR().bool,
      getFilesFromEvent: uR().func,
      onFileDialogCancel: uR().func,
      onFileDialogOpen: uR().func,
      useFsAccessApi: uR().bool,
      autoFocus: uR().bool,
      onDragEnter: uR().func,
      onDragLeave: uR().func,
      onDragOver: uR().func,
      onDrop: uR().func,
      onDropAccepted: uR().func,
      onDropRejected: uR().func,
      onError: uR().func,
      validator: uR().func
    };
    var wJ = {
      pD: !1,
      isFileDialogActive: !1,
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1,
      acceptedFiles: [],
      fileRejections: []
    };

    function rJ() {
      var RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        JR = qJ(qJ({}, KJ), RR),
        GR = JR.accept,
        tR = JR.disabled,
        uR = JR.getFilesFromEvent,
        ZR = JR.maxSize,
        qR = JR.minSize,
        iR = JR.multiple,
        fR = JR.maxFiles,
        VR = JR.onDragEnter,
        KR = JR.onDragLeave,
        wR = JR.onDragOver,
        rR = JR.onDrop,
        eR = JR.onDropAccepted,
        aR = JR.onDropRejected,
        LR = JR.onFileDialogCancel,
        nR = JR.onFileDialogOpen,
        UR = JR.useFsAccessApi,
        WR = JR.autoFocus,
        AR = JR.preventDropOnDocument,
        CR = JR.noClick,
        XR = JR.noKeyboard,
        MR = JR.noDrag,
        BR = JR.noDragEventsBubbling,
        lR = JR.onError,
        gR = JR.validator,
        xR = (0, yR.useMemo)((function() {
          return function(RR) {
            if (dR(RR)) return Object.entries(RR).reduce((function(RR, JR) {
              var GR = OR(JR, 2),
                yR = GR[0],
                tR = GR[1];
              return [].concat(pR(RR), [yR], pR(tR))
            }), []).filter((function(RR) {
              return FR(RR) || TR(RR)
            })).join(",")
          }(GR)
        }), [GR]),
        NR = (0, yR.useMemo)((function() {
          return function(RR) {
            return dR(RR) ? [{
              description: "Files",
              accept: Object.entries(RR).filter((function(RR) {
                var JR = OR(RR, 2),
                  GR = JR[0],
                  yR = JR[1],
                  tR = !0;
                return FR(GR) || (console.warn('Skipped "'.concat(GR, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), tR = !1), Array.isArray(yR) && yR.every(TR) || (console.warn('Skipped "'.concat(GR, '" because an invalid file extension was provided.')), tR = !1), tR
              })).reduce((function(RR, JR) {
                var GR = OR(JR, 2),
                  yR = GR[0],
                  tR = GR[1];
                return bR(bR({}, RR), {}, vR({}, yR, tR))
              }), {})
            }] : RR
          }(GR)
        }), [GR]),
        DR = (0, yR.useMemo)((function() {
          return "function" === typeof nR ? nR : aJ
        }), [nR]),
        HR = (0, yR.useMemo)((function() {
          return "function" === typeof LR ? LR : aJ
        }), [LR]),
        oR = (0, yR.useRef)(null),
        cR = (0, yR.useRef)(null),
        PR = yJ((0, yR.useReducer)(eJ, wJ), 2),
        IR = PR[0],
        mR = PR[1],
        sR = IR.pD,
        hR = IR.isFileDialogActive,
        tJ = (0, yR.useRef)("undefined" !== typeof window && window.isSecureContext && UR && "showOpenFilePicker" in window),
        uJ = function() {
          !tJ.current && hR && setTimeout((function() {
            cR.current && (cR.current.files.length || (mR({
              type: "closeDialog"
            }), HR()))
          }), 300)
        };
      (0, yR.useEffect)((function() {
        return window.addEventListener("focus", uJ, !1),
          function() {
            window.removeEventListener("focus", uJ, !1)
          }
      }), [cR, hR, HR, tJ]);
      var ZJ = (0, yR.useRef)([]),
        VJ = function(RR) {
          oR.current && oR.current.contains(RR.target) || (RR.preventDefault(), ZJ.current = [])
        };
      (0, yR.useEffect)((function() {
        return AR && (document.addEventListener("dragover", kR, !1), document.addEventListener("drop", VJ, !1)),
          function() {
            AR && (document.removeEventListener("dragover", kR), document.removeEventListener("drop", VJ))
          }
      }), [oR, AR]), (0, yR.useEffect)((function() {
        return !tR && WR && oR.current && oR.current.focus(),
          function() {}
      }), [oR, WR, tR]);
      var rJ = (0, yR.useCallback)((function(RR) {
          lR ? lR(RR) : console.error(RR)
        }), [lR]),
        LJ = (0, yR.useCallback)((function(RR) {
          RR.preventDefault(), RR.persist(), vJ(RR), ZJ.current = [].concat(GJ(ZJ.current), [RR.target]), YR(RR) && Promise.resolve(uR(RR)).then((function(JR) {
            if (!ER(RR) || BR) {
              var GR = JR.length,
                yR = GR > 0 && function(RR) {
                  var JR = RR.files,
                    GR = RR.accept,
                    yR = RR.minSize,
                    tR = RR.maxSize,
                    uR = RR.multiple,
                    ZR = RR.maxFiles,
                    qR = RR.validator;
                  return !(!uR && JR.length > 1 || uR && ZR >= 1 && JR.length > ZR) && JR.every((function(RR) {
                    var JR = OR(SR(RR, GR), 1)[0],
                      uR = OR(jR(RR, yR, tR), 1)[0],
                      ZR = qR ? qR(RR) : null;
                    return JR && uR && !ZR
                  }))
                }({
                  files: JR,
                  accept: xR,
                  minSize: qR,
                  maxSize: ZR,
                  multiple: iR,
                  maxFiles: fR,
                  validator: gR
                });
              mR({
                isDragAccept: yR,
                isDragReject: GR > 0 && !yR,
                isDragActive: !0,
                type: "setDraggedFiles"
              }), VR && VR(RR)
            }
          })).catch((function(RR) {
            return rJ(RR)
          }))
        }), [uR, VR, rJ, BR, xR, qR, ZR, iR, fR, gR]),
        nJ = (0, yR.useCallback)((function(RR) {
          RR.preventDefault(), RR.persist(), vJ(RR);
          var JR = YR(RR);
          if (JR && RR.dataTransfer) try {
            RR.dataTransfer.dropEffect = "copy"
          } catch (GR) {}
          return JR && wR && wR(RR), !1
        }), [wR, BR]),
        UJ = (0, yR.useCallback)((function(RR) {
          RR.preventDefault(), RR.persist(), vJ(RR);
          var JR = ZJ.current.filter((function(RR) {
              return oR.current && oR.current.contains(RR)
            })),
            GR = JR.indexOf(RR.target); - 1 !== GR && JR.splice(GR, 1), ZJ.current = JR, JR.length > 0 || (mR({
            type: "setDraggedFiles",
            isDragActive: !1,
            isDragAccept: !1,
            isDragReject: !1
          }), YR(RR) && KR && KR(RR))
        }), [oR, KR, BR]),
        WJ = (0, yR.useCallback)((function(RR, JR) {
          var GR = [],
            yR = [];
          RR.forEach((function(RR) {
            var JR = yJ(SR(RR, xR), 2),
              tR = JR[0],
              uR = JR[1],
              iR = yJ(jR(RR, qR, ZR), 2),
              fR = iR[0],
              VR = iR[1],
              KR = gR ? gR(RR) : null;
            if (tR && fR && !KR) GR.push(RR);
            else {
              var wR = [uR, VR];
              KR && (wR = wR.concat(KR)), yR.push({
                file: RR,
                errors: wR.filter((function(RR) {
                  return RR
                }))
              })
            }
          })), (!iR && GR.length > 1 || iR && fR >= 1 && GR.length > fR) && (GR.forEach((function(RR) {
            yR.push({
              file: RR,
              errors: [zR]
            })
          })), GR.splice(0)), mR({
            acceptedFiles: GR,
            fileRejections: yR,
            type: "setFiles"
          }), rR && rR(GR, yR, JR), yR.length > 0 && aR && aR(yR, JR), GR.length > 0 && eR && eR(GR, JR)
        }), [mR, iR, xR, qR, ZR, fR, rR, eR, aR, gR]),
        AJ = (0, yR.useCallback)((function(RR) {
          RR.preventDefault(), RR.persist(), vJ(RR), ZJ.current = [], YR(RR) && Promise.resolve(uR(RR)).then((function(JR) {
            ER(RR) && !BR || WJ(JR, RR)
          })).catch((function(RR) {
            return rJ(RR)
          })), mR({
            type: "reset"
          })
        }), [uR, WJ, rJ, BR]),
        CJ = (0, yR.useCallback)((function() {
          if (tJ.current) {
            mR({
              type: "openDialog"
            }), DR();
            var RR = {
              multiple: iR,
              types: NR
            };
            window.showOpenFilePicker(RR).then((function(RR) {
              return uR(RR)
            })).then((function(RR) {
              WJ(RR, null), mR({
                type: "closeDialog"
              })
            })).catch((function(RR) {
              var JR;
              (JR = RR) instanceof DOMException && ("AbortError" === JR.name || JR.code === JR.ABORT_ERR) ? (HR(RR), mR({
                type: "closeDialog"
              })) : ! function(RR) {
                return RR instanceof DOMException && ("SecurityError" === RR.name || RR.code === RR.SECURITY_ERR)
              }(RR) ? rJ(RR) : (tJ.current = !1, cR.current ? (cR.current.value = null, cR.current.click()) : rJ(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))
            }))
          } else cR.current && (mR({
            type: "openDialog"
          }), DR(), cR.current.value = null, cR.current.click())
        }), [mR, DR, HR, UR, WJ, rJ, NR, iR]),
        XJ = (0, yR.useCallback)((function(RR) {
          oR.current && oR.current.isEqualNode(RR.target) && (" " !== RR.key && "Enter" !== RR.key && 32 !== RR.keyCode && 13 !== RR.keyCode || (RR.preventDefault(), CJ()))
        }), [oR, CJ]),
        MJ = (0, yR.useCallback)((function() {
          mR({
            type: "focus"
          })
        }), []),
        BJ = (0, yR.useCallback)((function() {
          mR({
            type: "blur"
          })
        }), []),
        lJ = (0, yR.useCallback)((function() {
          CR || (! function() {
            var RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
            return function(RR) {
              return -1 !== RR.indexOf("MSIE") || -1 !== RR.indexOf("Trident/")
            }(RR) || function(RR) {
              return -1 !== RR.indexOf("Edge/")
            }(RR)
          }() ? CJ() : setTimeout(CJ, 0))
        }), [CR, CJ]),
        pJ = function(RR) {
          return tR ? null : RR
        },
        gJ = function(RR) {
          return XR ? null : pJ(RR)
        },
        bJ = function(RR) {
          return MR ? null : pJ(RR)
        },
        vJ = function(RR) {
          BR && RR.stopPropagation()
        },
        OJ = (0, yR.useMemo)((function() {
          return function() {
            var RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              JR = RR.refKey,
              GR = void 0 === JR ? "ref" : JR,
              yR = RR.role,
              uR = RR.onKeyDown,
              ZR = RR.onFocus,
              qR = RR.onBlur,
              iR = RR.onClick,
              fR = RR.onDragEnter,
              VR = RR.onDragOver,
              KR = RR.onDragLeave,
              wR = RR.onDrop,
              rR = fJ(RR, RJ);
            return qJ(qJ(iJ({
              onKeyDown: gJ(QR(uR, XJ)),
              onFocus: gJ(QR(ZR, MJ)),
              onBlur: gJ(QR(qR, BJ)),
              onClick: pJ(QR(iR, lJ)),
              onDragEnter: bJ(QR(fR, LJ)),
              onDragOver: bJ(QR(VR, nJ)),
              onDragLeave: bJ(QR(KR, UJ)),
              onDrop: bJ(QR(wR, AJ)),
              role: "string" === typeof yR && "" !== yR ? yR : "presentation"
            }, GR, oR), tR || XR ? {} : {
              tabIndex: 0
            }), rR)
          }
        }), [oR, XJ, MJ, BJ, lJ, LJ, nJ, UJ, AJ, XR, MR, tR]),
        xJ = (0, yR.useCallback)((function(RR) {
          RR.stopPropagation()
        }), []),
        NJ = (0, yR.useMemo)((function() {
          return function() {
            var RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              JR = RR.refKey,
              GR = void 0 === JR ? "ref" : JR,
              yR = RR.onChange,
              tR = RR.onClick,
              uR = fJ(RR, JJ);
            return qJ(qJ({}, iJ({
              accept: xR,
              multiple: iR,
              type: "file",
              style: {
                display: "none"
              },
              onChange: pJ(QR(yR, AJ)),
              onClick: pJ(QR(tR, xJ)),
              tabIndex: -1
            }, GR, cR)), uR)
          }
        }), [cR, GR, iR, AJ, tR]);
      return qJ(qJ({}, IR), {}, {
        pD: sR && !tR,
        getRootProps: OJ,
        getInputProps: NJ,
        rootRef: oR,
        inputRef: cR,
        open: pJ(CJ)
      })
    }

    function eJ(RR, JR) {
      switch (JR.type) {
        case "focus":
          return qJ(qJ({}, RR), {}, {
            pD: !0
          });
        case "blur":
          return qJ(qJ({}, RR), {}, {
            pD: !1
          });
        case "openDialog":
          return qJ(qJ({}, wJ), {}, {
            isFileDialogActive: !0
          });
        case "closeDialog":
          return qJ(qJ({}, RR), {}, {
            isFileDialogActive: !1
          });
        case "setDraggedFiles":
          return qJ(qJ({}, RR), {}, {
            isDragActive: JR.isDragActive,
            isDragAccept: JR.isDragAccept,
            isDragReject: JR.isDragReject
          });
        case "setFiles":
          return qJ(qJ({}, RR), {}, {
            acceptedFiles: JR.acceptedFiles,
            fileRejections: JR.fileRejections
          });
        case "reset":
          return qJ({}, wJ);
        default:
          return RR
      }
    }

    function aJ() {}
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);