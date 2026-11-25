export const id = 109;
export const ids = [109];
export const modules = {
  5002: (GG, bG) => {
    bG.d = function(GG, bG) {
      if (GG && bG) {
        var ZG = Array.isArray(bG) ? bG : bG.split(","),
          wG = GG.name || "",
          SG = (GG.type || "").toLowerCase(),
          LG = SG.replace(/\/.*$/, "");
        return ZG.some((function(GG) {
          var bG = GG.trim().toLowerCase();
          return "." === bG.charAt(0) ? wG.toLowerCase().endsWith(bG) : bG.endsWith("/*") ? LG === bG.replace(/\/.*$/, "") : SG === bG
        }))
      }
      return !0
    }
  },
  4977: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => Qb
    });
    var wG = ZG(51),
      SG = ZG(4985),
      LG = ZG.n(SG);

    function yG(GG, bG, ZG, wG) {
      return new(ZG || (ZG = Promise))((function(SG, LG) {
        function yG(GG) {
          try {
            UG(wG.next(GG))
          } catch (bG) {
            LG(bG)
          }
        }

        function kG(GG) {
          try {
            UG(wG.throw(GG))
          } catch (bG) {
            LG(bG)
          }
        }

        function UG(GG) {
          var bG;
          GG.done ? SG(GG.value) : (bG = GG.value, bG instanceof ZG ? bG : new ZG((function(GG) {
            GG(bG)
          }))).then(yG, kG)
        }
        UG((wG = wG.apply(GG, bG || [])).next())
      }))
    }

    function kG(GG, bG) {
      var ZG, wG, SG, LG, yG = {
        label: 0,
        sent: function() {
          if (1 & SG[0]) throw SG[1];
          return SG[1]
        },
        trys: [],
        ops: []
      };
      return LG = {
        next: kG(0),
        throw: kG(1),
        return: kG(2)
      }, "function" === typeof Symbol && (LG[Symbol.iterator] = function() {
        return this
      }), LG;

      function kG(kG) {
        return function(UG) {
          return function(kG) {
            if (ZG) throw new TypeError("Generator is already executing.");
            for (; LG && (LG = 0, kG[0] && (yG = 0)), yG;) try {
              if (ZG = 1, wG && (SG = 2 & kG[0] ? wG.return : kG[0] ? wG.throw || ((SG = wG.return) && SG.call(wG), 0) : wG.next) && !(SG = SG.call(wG, kG[1])).done) return SG;
              switch (wG = 0, SG && (kG = [2 & kG[0], SG.value]), kG[0]) {
                case 0:
                case 1:
                  SG = kG;
                  break;
                case 4:
                  return yG.label++, {
                    value: kG[1],
                    done: !1
                  };
                case 5:
                  yG.label++, wG = kG[1], kG = [0];
                  continue;
                case 7:
                  kG = yG.ops.pop(), yG.trys.pop();
                  continue;
                default:
                  if (!(SG = (SG = yG.trys).length > 0 && SG[SG.length - 1]) && (6 === kG[0] || 2 === kG[0])) {
                    yG = 0;
                    continue
                  }
                  if (3 === kG[0] && (!SG || kG[1] > SG[0] && kG[1] < SG[3])) {
                    yG.label = kG[1];
                    break
                  }
                  if (6 === kG[0] && yG.label < SG[1]) {
                    yG.label = SG[1], SG = kG;
                    break
                  }
                  if (SG && yG.label < SG[2]) {
                    yG.label = SG[2], yG.ops.push(kG);
                    break
                  }
                  SG[2] && yG.ops.pop(), yG.trys.pop();
                  continue
              }
              kG = bG.call(GG, yG)
            } catch (UG) {
              kG = [6, UG], wG = 0
            } finally {
              ZG = SG = 0
            }
            if (5 & kG[0]) throw kG[1];
            return {
              value: kG[0] ? kG[1] : void 0,
              done: !0
            }
          }([kG, UG])
        }
      }
    }
    Object.create;

    function UG(GG, bG) {
      var ZG = "function" === typeof Symbol && GG[Symbol.iterator];
      if (!ZG) return GG;
      var wG, SG, LG = ZG.call(GG),
        yG = [];
      try {
        for (;
          (void 0 === bG || bG-- > 0) && !(wG = LG.next()).done;) yG.push(wG.value)
      } catch (kG) {
        SG = {
          error: kG
        }
      } finally {
        try {
          wG && !wG.done && (ZG = LG.return) && ZG.call(LG)
        } finally {
          if (SG) throw SG.error
        }
      }
      return yG
    }

    function YG(GG, bG, ZG) {
      if (ZG || 2 === arguments.length)
        for (var wG, SG = 0, LG = bG.length; SG < LG; SG++) !wG && SG in bG || (wG || (wG = Array.prototype.slice.call(bG, 0, SG)), wG[SG] = bG[SG]);
      return GG.concat(wG || Array.prototype.slice.call(bG))
    }
    Object.create;
    "function" === typeof SuppressedError && SuppressedError;
    var VG = new Map([
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
      ["vV", "application/vnd.ms-outlook"]
    ]);

    function pG(GG, bG) {
      var ZG = function(GG) {
        var bG = GG.name;
        if (bG && -1 !== bG.lastIndexOf(".") && !GG.type) {
          var ZG = bG.split(".").pop().toLowerCase(),
            wG = VG.get(ZG);
          wG && Object.defineProperty(GG, "type", {
            value: wG,
            writable: !1,
            configurable: !1,
            enumerable: !0
          })
        }
        return GG
      }(GG);
      if ("string" !== typeof ZG.path) {
        var wG = GG.webkitRelativePath;
        Object.defineProperty(ZG, "path", {
          value: "string" === typeof bG ? bG : "string" === typeof wG && wG.length > 0 ? wG : GG.name,
          writable: !1,
          configurable: !1,
          enumerable: !0
        })
      }
      return ZG
    }
    var fG = [".DS_Store", "Thumbs.db"];

    function QG(GG) {
      return "object" === typeof GG && null !== GG
    }

    function KG(GG) {
      return rG(GG.target.files).map((function(GG) {
        return pG(GG)
      }))
    }

    function hG(GG) {
      return yG(this, void 0, void 0, (function() {
        return kG(this, (function(bG) {
          switch (bG.label) {
            case 0:
              return [4, Promise.all(GG.map((function(GG) {
                return GG.getFile()
              })))];
            case 1:
              return [2, bG.sent().map((function(GG) {
                return pG(GG)
              }))]
          }
        }))
      }))
    }

    function dG(GG, bG) {
      return yG(this, void 0, void 0, (function() {
        var ZG;
        return kG(this, (function(wG) {
          switch (wG.label) {
            case 0:
              return GG.items ? (ZG = rG(GG.items).filter((function(GG) {
                return "file" === GG.kind
              })), "drop" !== bG ? [2, ZG] : [4, Promise.all(ZG.map(zG))]) : [3, 2];
            case 1:
              return [2, JG(EG(wG.sent()))];
            case 2:
              return [2, JG(rG(GG.files).map((function(GG) {
                return pG(GG)
              })))]
          }
        }))
      }))
    }

    function JG(GG) {
      return GG.filter((function(GG) {
        return -1 === fG.indexOf(GG.name)
      }))
    }

    function rG(GG) {
      if (null === GG) return [];
      for (var bG = [], ZG = 0; ZG < GG.length; ZG++) {
        var wG = GG[ZG];
        bG.push(wG)
      }
      return bG
    }

    function zG(GG) {
      if ("function" !== typeof GG.webkitGetAsEntry) return oG(GG);
      var bG = GG.webkitGetAsEntry();
      return bG && bG.isDirectory ? uG(bG) : oG(GG)
    }

    function EG(GG) {
      return GG.reduce((function(GG, bG) {
        return YG(YG([], UG(GG), !1), UG(Array.isArray(bG) ? EG(bG) : [bG]), !1)
      }), [])
    }

    function oG(GG) {
      var bG = GG.getAsFile();
      if (!bG) return Promise.reject("".concat(GG, " is not a File"));
      var ZG = pG(bG);
      return Promise.resolve(ZG)
    }

    function XG(GG) {
      return yG(this, void 0, void 0, (function() {
        return kG(this, (function(bG) {
          return [2, GG.isDirectory ? uG(GG) : iG(GG)]
        }))
      }))
    }

    function uG(GG) {
      var bG = GG.createReader();
      return new Promise((function(GG, ZG) {
        var wG = [];
        ! function SG() {
          var LG = this;
          bG.readEntries((function(bG) {
            return yG(LG, void 0, void 0, (function() {
              var LG, yG, UG;
              return kG(this, (function(kG) {
                switch (kG.label) {
                  case 0:
                    if (bG.length) return [3, 5];
                    kG.label = 1;
                  case 1:
                    return kG.trys.push([1, 3, , 4]), [4, Promise.all(wG)];
                  case 2:
                    return LG = kG.sent(), GG(LG), [3, 4];
                  case 3:
                    return yG = kG.sent(), ZG(yG), [3, 4];
                  case 4:
                    return [3, 6];
                  case 5:
                    UG = Promise.all(bG.map(XG)), wG.push(UG), SG(), kG.label = 6;
                  case 6:
                    return [2]
                }
              }))
            }))
          }), (function(GG) {
            ZG(GG)
          }))
        }()
      }))
    }

    function iG(GG) {
      return yG(this, void 0, void 0, (function() {
        return kG(this, (function(bG) {
          return [2, new Promise((function(bG, ZG) {
            GG.file((function(ZG) {
              var wG = pG(ZG, GG.fullPath);
              bG(wG)
            }), (function(GG) {
              ZG(GG)
            }))
          }))]
        }))
      }))
    }
    var CG = ZG(5002);

    function WG(GG) {
      return function(GG) {
        if (Array.isArray(GG)) return cG(GG)
      }(GG) || function(GG) {
        if ("undefined" !== typeof Symbol && null != GG[Symbol.iterator] || null != GG["@@iterator"]) return Array.from(GG)
      }(GG) || aG(GG) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function mG(GG, bG) {
      var ZG = Object.keys(GG);
      if (Object.getOwnPropertySymbols) {
        var wG = Object.getOwnPropertySymbols(GG);
        bG && (wG = wG.filter((function(bG) {
          return Object.getOwnPropertyDescriptor(GG, bG).enumerable
        }))), ZG.push.apply(ZG, wG)
      }
      return ZG
    }

    function IG(GG) {
      for (var bG = 1; bG < arguments.length; bG++) {
        var ZG = null != arguments[bG] ? arguments[bG] : {};
        bG % 2 ? mG(Object(ZG), !0).forEach((function(bG) {
          FG(GG, bG, ZG[bG])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(GG, Object.getOwnPropertyDescriptors(ZG)) : mG(Object(ZG)).forEach((function(bG) {
          Object.defineProperty(GG, bG, Object.getOwnPropertyDescriptor(ZG, bG))
        }))
      }
      return GG
    }

    function FG(GG, bG, ZG) {
      return bG in GG ? Object.defineProperty(GG, bG, {
        value: ZG,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : GG[bG] = ZG, GG
    }

    function vG(GG, bG) {
      return function(GG) {
        if (Array.isArray(GG)) return GG
      }(GG) || function(GG, bG) {
        var ZG = null == GG ? null : "undefined" !== typeof Symbol && GG[Symbol.iterator] || GG["@@iterator"];
        if (null == ZG) return;
        var wG, SG, LG = [],
          yG = !0,
          kG = !1;
        try {
          for (ZG = ZG.call(GG); !(yG = (wG = ZG.next()).done) && (LG.push(wG.value), !bG || LG.length !== bG); yG = !0);
        } catch (UG) {
          kG = !0, SG = UG
        } finally {
          try {
            yG || null == ZG.return || ZG.return()
          } finally {
            if (kG) throw SG
          }
        }
        return LG
      }(GG, bG) || aG(GG, bG) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function aG(GG, bG) {
      if (GG) {
        if ("string" === typeof GG) return cG(GG, bG);
        var ZG = Object.prototype.toString.call(GG).slice(8, -1);
        return "Object" === ZG && GG.constructor && (ZG = GG.constructor.name), "Map" === ZG || "Set" === ZG ? Array.from(GG) : "Arguments" === ZG || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZG) ? cG(GG, bG) : void 0
      }
    }

    function cG(GG, bG) {
      (null == bG || bG > GG.length) && (bG = GG.length);
      for (var ZG = 0, wG = new Array(bG); ZG < bG; ZG++) wG[ZG] = GG[ZG];
      return wG
    }
    var lG = "file-invalid-type",
      jG = "file-too-large",
      PG = "file-too-small",
      MG = "too-many-files",
      AG = function(GG) {
        GG = Array.isArray(GG) && 1 === GG.length ? GG[0] : GG;
        var bG = Array.isArray(GG) ? "one of ".concat(GG.join(", ")) : GG;
        return {
          code: lG,
          message: "File type must be ".concat(bG)
        }
      },
      sG = function(GG) {
        return {
          code: jG,
          message: "File is larger than ".concat(GG, " ").concat(1 === GG ? "byte" : "bytes")
        }
      },
      qG = function(GG) {
        return {
          code: PG,
          message: "File is smaller than ".concat(GG, " ").concat(1 === GG ? "byte" : "bytes")
        }
      },
      nG = {
        code: MG,
        message: "Too many files"
      };

    function gG(GG, bG) {
      var ZG = "application/x-moz-file" === GG.type || (0, CG.d)(GG, bG);
      return [ZG, ZG ? null : AG(bG)]
    }

    function eG(GG, bG, ZG) {
      if (RG(GG.size))
        if (RG(bG) && RG(ZG)) {
          if (GG.size > ZG) return [!1, sG(ZG)];
          if (GG.size < bG) return [!1, qG(bG)]
        } else {
          if (RG(bG) && GG.size < bG) return [!1, qG(bG)];
          if (RG(ZG) && GG.size > ZG) return [!1, sG(ZG)]
        } return [!0, null]
    }

    function RG(GG) {
      return void 0 !== GG && null !== GG
    }

    function TG(GG) {
      return "function" === typeof GG.isPropagationStopped ? GG.isPropagationStopped() : "undefined" !== typeof GG.cancelBubble && GG.cancelBubble
    }

    function HG(GG) {
      return GG.dataTransfer ? Array.prototype.some.call(GG.dataTransfer.types, (function(GG) {
        return "Files" === GG || "application/x-moz-file" === GG
      })) : !!GG.target && !!GG.target.files
    }

    function tG(GG) {
      GG.preventDefault()
    }

    function DG() {
      for (var GG = arguments.length, bG = new Array(GG), ZG = 0; ZG < GG; ZG++) bG[ZG] = arguments[ZG];
      return function(GG) {
        for (var ZG = arguments.length, wG = new Array(ZG > 1 ? ZG - 1 : 0), SG = 1; SG < ZG; SG++) wG[SG - 1] = arguments[SG];
        return bG.some((function(bG) {
          return !TG(GG) && bG && bG.apply(void 0, [GG].concat(wG)), TG(GG)
        }))
      }
    }

    function NG(GG) {
      return "audio/*" === GG || "video/*" === GG || "image/*" === GG || "text/*" === GG || /\w+\/[-+.\w]+/g.test(GG)
    }

    function OG(GG) {
      return /^.*\.[\w]+$/.test(GG)
    }
    var xG = ["children"],
      BG = ["open"],
      Gb = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
      bb = ["refKey", "onChange", "onClick"];

    function Zb(GG) {
      return function(GG) {
        if (Array.isArray(GG)) return Lb(GG)
      }(GG) || function(GG) {
        if ("undefined" !== typeof Symbol && null != GG[Symbol.iterator] || null != GG["@@iterator"]) return Array.from(GG)
      }(GG) || Sb(GG) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function wb(GG, bG) {
      return function(GG) {
        if (Array.isArray(GG)) return GG
      }(GG) || function(GG, bG) {
        var ZG = null == GG ? null : "undefined" !== typeof Symbol && GG[Symbol.iterator] || GG["@@iterator"];
        if (null == ZG) return;
        var wG, SG, LG = [],
          yG = !0,
          kG = !1;
        try {
          for (ZG = ZG.call(GG); !(yG = (wG = ZG.next()).done) && (LG.push(wG.value), !bG || LG.length !== bG); yG = !0);
        } catch (UG) {
          kG = !0, SG = UG
        } finally {
          try {
            yG || null == ZG.return || ZG.return()
          } finally {
            if (kG) throw SG
          }
        }
        return LG
      }(GG, bG) || Sb(GG, bG) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Sb(GG, bG) {
      if (GG) {
        if ("string" === typeof GG) return Lb(GG, bG);
        var ZG = Object.prototype.toString.call(GG).slice(8, -1);
        return "Object" === ZG && GG.constructor && (ZG = GG.constructor.name), "Map" === ZG || "Set" === ZG ? Array.from(GG) : "Arguments" === ZG || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZG) ? Lb(GG, bG) : void 0
      }
    }

    function Lb(GG, bG) {
      (null == bG || bG > GG.length) && (bG = GG.length);
      for (var ZG = 0, wG = new Array(bG); ZG < bG; ZG++) wG[ZG] = GG[ZG];
      return wG
    }

    function yb(GG, bG) {
      var ZG = Object.keys(GG);
      if (Object.getOwnPropertySymbols) {
        var wG = Object.getOwnPropertySymbols(GG);
        bG && (wG = wG.filter((function(bG) {
          return Object.getOwnPropertyDescriptor(GG, bG).enumerable
        }))), ZG.push.apply(ZG, wG)
      }
      return ZG
    }

    function kb(GG) {
      for (var bG = 1; bG < arguments.length; bG++) {
        var ZG = null != arguments[bG] ? arguments[bG] : {};
        bG % 2 ? yb(Object(ZG), !0).forEach((function(bG) {
          Ub(GG, bG, ZG[bG])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(GG, Object.getOwnPropertyDescriptors(ZG)) : yb(Object(ZG)).forEach((function(bG) {
          Object.defineProperty(GG, bG, Object.getOwnPropertyDescriptor(ZG, bG))
        }))
      }
      return GG
    }

    function Ub(GG, bG, ZG) {
      return bG in GG ? Object.defineProperty(GG, bG, {
        value: ZG,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : GG[bG] = ZG, GG
    }

    function Yb(GG, bG) {
      if (null == GG) return {};
      var ZG, wG, SG = function(GG, bG) {
        if (null == GG) return {};
        var ZG, wG, SG = {},
          LG = Object.keys(GG);
        for (wG = 0; wG < LG.length; wG++) ZG = LG[wG], bG.indexOf(ZG) >= 0 || (SG[ZG] = GG[ZG]);
        return SG
      }(GG, bG);
      if (Object.getOwnPropertySymbols) {
        var LG = Object.getOwnPropertySymbols(GG);
        for (wG = 0; wG < LG.length; wG++) ZG = LG[wG], bG.indexOf(ZG) >= 0 || Object.prototype.propertyIsEnumerable.call(GG, ZG) && (SG[ZG] = GG[ZG])
      }
      return SG
    }
    var Vb = (0, wG.forwardRef)((function(GG, bG) {
      var ZG = GG.children,
        SG = Qb(Yb(GG, xG)),
        LG = SG.open,
        yG = Yb(SG, BG);
      return (0, wG.useImperativeHandle)(bG, (function() {
        return {
          open: LG
        }
      }), [LG]), wG.createElement(wG.Fragment, null, ZG(kb(kb({}, yG), {}, {
        open: LG
      })))
    }));
    Vb.displayName = "Dropzone";
    var pb = {
      disabled: !1,
      getFilesFromEvent: function(GG) {
        return yG(this, void 0, void 0, (function() {
          return kG(this, (function(bG) {
            return QG(GG) && QG(GG.dataTransfer) ? [2, dG(GG.dataTransfer, GG.type)] : function(GG) {
              return QG(GG) && QG(GG.target)
            }(GG) ? [2, KG(GG)] : Array.isArray(GG) && GG.every((function(GG) {
              return "getFile" in GG && "function" === typeof GG.getFile
            })) ? [2, hG(GG)] : [2, []]
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
    Vb.defaultProps = pb, Vb.propTypes = {
      children: LG().func,
      accept: LG().objectOf(LG().arrayOf(LG().string)),
      multiple: LG().bool,
      preventDropOnDocument: LG().bool,
      noClick: LG().bool,
      noKeyboard: LG().bool,
      noDrag: LG().bool,
      noDragEventsBubbling: LG().bool,
      minSize: LG().number,
      maxSize: LG().number,
      maxFiles: LG().number,
      disabled: LG().bool,
      getFilesFromEvent: LG().func,
      onFileDialogCancel: LG().func,
      onFileDialogOpen: LG().func,
      useFsAccessApi: LG().bool,
      autoFocus: LG().bool,
      onDragEnter: LG().func,
      onDragLeave: LG().func,
      onDragOver: LG().func,
      onDrop: LG().func,
      onDropAccepted: LG().func,
      onDropRejected: LG().func,
      onError: LG().func,
      validator: LG().func
    };
    var fb = {
      ZF: !1,
      isFileDialogActive: !1,
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1,
      acceptedFiles: [],
      fileRejections: []
    };

    function Qb() {
      var GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        bG = kb(kb({}, pb), GG),
        ZG = bG.accept,
        SG = bG.disabled,
        LG = bG.getFilesFromEvent,
        yG = bG.maxSize,
        kG = bG.minSize,
        UG = bG.multiple,
        YG = bG.maxFiles,
        VG = bG.onDragEnter,
        pG = bG.onDragLeave,
        fG = bG.onDragOver,
        QG = bG.onDrop,
        KG = bG.onDropAccepted,
        hG = bG.onDropRejected,
        dG = bG.onFileDialogCancel,
        JG = bG.onFileDialogOpen,
        rG = bG.useFsAccessApi,
        zG = bG.autoFocus,
        EG = bG.preventDropOnDocument,
        oG = bG.noClick,
        XG = bG.noKeyboard,
        uG = bG.noDrag,
        iG = bG.noDragEventsBubbling,
        CG = bG.onError,
        mG = bG.validator,
        aG = (0, wG.useMemo)((function() {
          return function(GG) {
            if (RG(GG)) return Object.entries(GG).reduce((function(GG, bG) {
              var ZG = vG(bG, 2),
                wG = ZG[0],
                SG = ZG[1];
              return [].concat(WG(GG), [wG], WG(SG))
            }), []).filter((function(GG) {
              return NG(GG) || OG(GG)
            })).join(",")
          }(ZG)
        }), [ZG]),
        cG = (0, wG.useMemo)((function() {
          return function(GG) {
            return RG(GG) ? [{
              description: "Files",
              accept: Object.entries(GG).filter((function(GG) {
                var bG = vG(GG, 2),
                  ZG = bG[0],
                  wG = bG[1],
                  SG = !0;
                return NG(ZG) || (console.warn('Skipped "'.concat(ZG, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), SG = !1), Array.isArray(wG) && wG.every(OG) || (console.warn('Skipped "'.concat(ZG, '" because an invalid file extension was provided.')), SG = !1), SG
              })).reduce((function(GG, bG) {
                var ZG = vG(bG, 2),
                  wG = ZG[0],
                  SG = ZG[1];
                return IG(IG({}, GG), {}, FG({}, wG, SG))
              }), {})
            }] : GG
          }(ZG)
        }), [ZG]),
        lG = (0, wG.useMemo)((function() {
          return "function" === typeof JG ? JG : hb
        }), [JG]),
        jG = (0, wG.useMemo)((function() {
          return "function" === typeof dG ? dG : hb
        }), [dG]),
        PG = (0, wG.useRef)(null),
        MG = (0, wG.useRef)(null),
        AG = wb((0, wG.useReducer)(Kb, fb), 2),
        sG = AG[0],
        qG = AG[1],
        xG = sG.ZF,
        BG = sG.isFileDialogActive,
        Sb = (0, wG.useRef)("undefined" !== typeof window && window.isSecureContext && rG && "showOpenFilePicker" in window),
        Lb = function() {
          !Sb.current && BG && setTimeout((function() {
            MG.current && (MG.current.files.length || (qG({
              type: "closeDialog"
            }), jG()))
          }), 300)
        };
      (0, wG.useEffect)((function() {
        return window.addEventListener("focus", Lb, !1),
          function() {
            window.removeEventListener("focus", Lb, !1)
          }
      }), [MG, BG, jG, Sb]);
      var yb = (0, wG.useRef)([]),
        Vb = function(GG) {
          PG.current && PG.current.contains(GG.target) || (GG.preventDefault(), yb.current = [])
        };
      (0, wG.useEffect)((function() {
        return EG && (document.addEventListener("dragover", tG, !1), document.addEventListener("drop", Vb, !1)),
          function() {
            EG && (document.removeEventListener("dragover", tG), document.removeEventListener("drop", Vb))
          }
      }), [PG, EG]), (0, wG.useEffect)((function() {
        return !SG && zG && PG.current && PG.current.focus(),
          function() {}
      }), [PG, zG, SG]);
      var Qb = (0, wG.useCallback)((function(GG) {
          CG ? CG(GG) : console.error(GG)
        }), [CG]),
        db = (0, wG.useCallback)((function(GG) {
          GG.preventDefault(), GG.persist(), Fb(GG), yb.current = [].concat(Zb(yb.current), [GG.target]), HG(GG) && Promise.resolve(LG(GG)).then((function(bG) {
            if (!TG(GG) || iG) {
              var ZG = bG.length,
                wG = ZG > 0 && function(GG) {
                  var bG = GG.files,
                    ZG = GG.accept,
                    wG = GG.minSize,
                    SG = GG.maxSize,
                    LG = GG.multiple,
                    yG = GG.maxFiles,
                    kG = GG.validator;
                  return !(!LG && bG.length > 1 || LG && yG >= 1 && bG.length > yG) && bG.every((function(GG) {
                    var bG = vG(gG(GG, ZG), 1)[0],
                      LG = vG(eG(GG, wG, SG), 1)[0],
                      yG = kG ? kG(GG) : null;
                    return bG && LG && !yG
                  }))
                }({
                  files: bG,
                  accept: aG,
                  minSize: kG,
                  maxSize: yG,
                  multiple: UG,
                  maxFiles: YG,
                  validator: mG
                });
              qG({
                isDragAccept: wG,
                isDragReject: ZG > 0 && !wG,
                isDragActive: !0,
                type: "setDraggedFiles"
              }), VG && VG(GG)
            }
          })).catch((function(GG) {
            return Qb(GG)
          }))
        }), [LG, VG, Qb, iG, aG, kG, yG, UG, YG, mG]),
        Jb = (0, wG.useCallback)((function(GG) {
          GG.preventDefault(), GG.persist(), Fb(GG);
          var bG = HG(GG);
          if (bG && GG.dataTransfer) try {
            GG.dataTransfer.dropEffect = "copy"
          } catch (ZG) {}
          return bG && fG && fG(GG), !1
        }), [fG, iG]),
        rb = (0, wG.useCallback)((function(GG) {
          GG.preventDefault(), GG.persist(), Fb(GG);
          var bG = yb.current.filter((function(GG) {
              return PG.current && PG.current.contains(GG)
            })),
            ZG = bG.indexOf(GG.target); - 1 !== ZG && bG.splice(ZG, 1), yb.current = bG, bG.length > 0 || (qG({
            type: "setDraggedFiles",
            isDragActive: !1,
            isDragAccept: !1,
            isDragReject: !1
          }), HG(GG) && pG && pG(GG))
        }), [PG, pG, iG]),
        zb = (0, wG.useCallback)((function(GG, bG) {
          var ZG = [],
            wG = [];
          GG.forEach((function(GG) {
            var bG = wb(gG(GG, aG), 2),
              SG = bG[0],
              LG = bG[1],
              UG = wb(eG(GG, kG, yG), 2),
              YG = UG[0],
              VG = UG[1],
              pG = mG ? mG(GG) : null;
            if (SG && YG && !pG) ZG.push(GG);
            else {
              var fG = [LG, VG];
              pG && (fG = fG.concat(pG)), wG.push({
                file: GG,
                errors: fG.filter((function(GG) {
                  return GG
                }))
              })
            }
          })), (!UG && ZG.length > 1 || UG && YG >= 1 && ZG.length > YG) && (ZG.forEach((function(GG) {
            wG.push({
              file: GG,
              errors: [nG]
            })
          })), ZG.splice(0)), qG({
            acceptedFiles: ZG,
            fileRejections: wG,
            type: "setFiles"
          }), QG && QG(ZG, wG, bG), wG.length > 0 && hG && hG(wG, bG), ZG.length > 0 && KG && KG(ZG, bG)
        }), [qG, UG, aG, kG, yG, YG, QG, KG, hG, mG]),
        Eb = (0, wG.useCallback)((function(GG) {
          GG.preventDefault(), GG.persist(), Fb(GG), yb.current = [], HG(GG) && Promise.resolve(LG(GG)).then((function(bG) {
            TG(GG) && !iG || zb(bG, GG)
          })).catch((function(GG) {
            return Qb(GG)
          })), qG({
            type: "reset"
          })
        }), [LG, zb, Qb, iG]),
        ob = (0, wG.useCallback)((function() {
          if (Sb.current) {
            qG({
              type: "openDialog"
            }), lG();
            var GG = {
              multiple: UG,
              types: cG
            };
            window.showOpenFilePicker(GG).then((function(GG) {
              return LG(GG)
            })).then((function(GG) {
              zb(GG, null), qG({
                type: "closeDialog"
              })
            })).catch((function(GG) {
              var bG;
              (bG = GG) instanceof DOMException && ("AbortError" === bG.name || bG.code === bG.ABORT_ERR) ? (jG(GG), qG({
                type: "closeDialog"
              })) : ! function(GG) {
                return GG instanceof DOMException && ("SecurityError" === GG.name || GG.code === GG.SECURITY_ERR)
              }(GG) ? Qb(GG) : (Sb.current = !1, MG.current ? (MG.current.value = null, MG.current.click()) : Qb(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))
            }))
          } else MG.current && (qG({
            type: "openDialog"
          }), lG(), MG.current.value = null, MG.current.click())
        }), [qG, lG, jG, rG, zb, Qb, cG, UG]),
        Xb = (0, wG.useCallback)((function(GG) {
          PG.current && PG.current.isEqualNode(GG.target) && (" " !== GG.key && "Enter" !== GG.key && 32 !== GG.keyCode && 13 !== GG.keyCode || (GG.preventDefault(), ob()))
        }), [PG, ob]),
        ub = (0, wG.useCallback)((function() {
          qG({
            type: "focus"
          })
        }), []),
        ib = (0, wG.useCallback)((function() {
          qG({
            type: "blur"
          })
        }), []),
        Cb = (0, wG.useCallback)((function() {
          oG || (! function() {
            var GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
            return function(GG) {
              return -1 !== GG.indexOf("MSIE") || -1 !== GG.indexOf("Trident/")
            }(GG) || function(GG) {
              return -1 !== GG.indexOf("Edge/")
            }(GG)
          }() ? ob() : setTimeout(ob, 0))
        }), [oG, ob]),
        Wb = function(GG) {
          return SG ? null : GG
        },
        mb = function(GG) {
          return XG ? null : Wb(GG)
        },
        Ib = function(GG) {
          return uG ? null : Wb(GG)
        },
        Fb = function(GG) {
          iG && GG.stopPropagation()
        },
        vb = (0, wG.useMemo)((function() {
          return function() {
            var GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              bG = GG.refKey,
              ZG = void 0 === bG ? "ref" : bG,
              wG = GG.role,
              LG = GG.onKeyDown,
              yG = GG.onFocus,
              kG = GG.onBlur,
              UG = GG.onClick,
              YG = GG.onDragEnter,
              VG = GG.onDragOver,
              pG = GG.onDragLeave,
              fG = GG.onDrop,
              QG = Yb(GG, Gb);
            return kb(kb(Ub({
              onKeyDown: mb(DG(LG, Xb)),
              onFocus: mb(DG(yG, ub)),
              onBlur: mb(DG(kG, ib)),
              onClick: Wb(DG(UG, Cb)),
              onDragEnter: Ib(DG(YG, db)),
              onDragOver: Ib(DG(VG, Jb)),
              onDragLeave: Ib(DG(pG, rb)),
              onDrop: Ib(DG(fG, Eb)),
              role: "string" === typeof wG && "" !== wG ? wG : "presentation"
            }, ZG, PG), SG || XG ? {} : {
              tabIndex: 0
            }), QG)
          }
        }), [PG, Xb, ub, ib, Cb, db, Jb, rb, Eb, XG, uG, SG]),
        ab = (0, wG.useCallback)((function(GG) {
          GG.stopPropagation()
        }), []),
        cb = (0, wG.useMemo)((function() {
          return function() {
            var GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              bG = GG.refKey,
              ZG = void 0 === bG ? "ref" : bG,
              wG = GG.onChange,
              SG = GG.onClick,
              LG = Yb(GG, bb);
            return kb(kb({}, Ub({
              accept: aG,
              multiple: UG,
              type: "file",
              style: {
                display: "none"
              },
              onChange: Wb(DG(wG, Eb)),
              onClick: Wb(DG(SG, ab)),
              tabIndex: -1
            }, ZG, MG)), LG)
          }
        }), [MG, ZG, UG, Eb, SG]);
      return kb(kb({}, sG), {}, {
        ZF: xG && !SG,
        getRootProps: vb,
        getInputProps: cb,
        rootRef: PG,
        inputRef: MG,
        open: Wb(ob)
      })
    }

    function Kb(GG, bG) {
      switch (bG.type) {
        case "focus":
          return kb(kb({}, GG), {}, {
            ZF: !0
          });
        case "blur":
          return kb(kb({}, GG), {}, {
            ZF: !1
          });
        case "openDialog":
          return kb(kb({}, fb), {}, {
            isFileDialogActive: !0
          });
        case "closeDialog":
          return kb(kb({}, GG), {}, {
            isFileDialogActive: !1
          });
        case "setDraggedFiles":
          return kb(kb({}, GG), {}, {
            isDragActive: bG.isDragActive,
            isDragAccept: bG.isDragAccept,
            isDragReject: bG.isDragReject
          });
        case "setFiles":
          return kb(kb({}, GG), {}, {
            acceptedFiles: bG.acceptedFiles,
            fileRejections: bG.fileRejections
          });
        case "reset":
          return kb({}, fb);
        default:
          return GG
      }
    }

    function hb() {}
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);