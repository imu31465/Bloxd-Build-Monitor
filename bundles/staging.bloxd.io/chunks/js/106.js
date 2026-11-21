export const id = 106;
export const ids = [106];
export const modules = {
  4863: (dd, Jd) => {
    Jd.b = function(dd, Jd) {
      if (dd && Jd) {
        var kd = Array.isArray(Jd) ? Jd : Jd.split(","),
          pd = dd.name || "",
          Nd = (dd.type || "").toLowerCase(),
          Wd = Nd.replace(/\/.*$/, "");
        return kd.some((function(dd) {
          var Jd = dd.trim().toLowerCase();
          return "." === Jd.charAt(0) ? pd.toLowerCase().endsWith(Jd) : Jd.endsWith("/*") ? Wd === Jd.replace(/\/.*$/, "") : Nd === Jd
        }))
      }
      return !0
    }
  },
  4841: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => LJ
    });
    var pd = kd(56),
      Nd = kd(4845),
      Wd = kd.n(Nd);

    function Pd(dd, Jd, kd, pd) {
      return new(kd || (kd = Promise))((function(Nd, Wd) {
        function Pd(dd) {
          try {
            gd(pd.next(dd))
          } catch (Jd) {
            Wd(Jd)
          }
        }

        function Zd(dd) {
          try {
            gd(pd.throw(dd))
          } catch (Jd) {
            Wd(Jd)
          }
        }

        function gd(dd) {
          var Jd;
          dd.done ? Nd(dd.value) : (Jd = dd.value, Jd instanceof kd ? Jd : new kd((function(dd) {
            dd(Jd)
          }))).then(Pd, Zd)
        }
        gd((pd = pd.apply(dd, Jd || [])).next())
      }))
    }

    function Zd(dd, Jd) {
      var kd, pd, Nd, Wd, Pd = {
        label: 0,
        sent: function() {
          if (1 & Nd[0]) throw Nd[1];
          return Nd[1]
        },
        trys: [],
        ops: []
      };
      return Wd = {
        next: Zd(0),
        throw: Zd(1),
        return: Zd(2)
      }, "function" === typeof Symbol && (Wd[Symbol.iterator] = function() {
        return this
      }), Wd;

      function Zd(Zd) {
        return function(gd) {
          return function(Zd) {
            if (kd) throw new TypeError("Generator is already executing.");
            for (; Wd && (Wd = 0, Zd[0] && (Pd = 0)), Pd;) try {
              if (kd = 1, pd && (Nd = 2 & Zd[0] ? pd.return : Zd[0] ? pd.throw || ((Nd = pd.return) && Nd.call(pd), 0) : pd.next) && !(Nd = Nd.call(pd, Zd[1])).done) return Nd;
              switch (pd = 0, Nd && (Zd = [2 & Zd[0], Nd.value]), Zd[0]) {
                case 0:
                case 1:
                  Nd = Zd;
                  break;
                case 4:
                  return Pd.label++, {
                    value: Zd[1],
                    done: !1
                  };
                case 5:
                  Pd.label++, pd = Zd[1], Zd = [0];
                  continue;
                case 7:
                  Zd = Pd.ops.pop(), Pd.trys.pop();
                  continue;
                default:
                  if (!(Nd = (Nd = Pd.trys).length > 0 && Nd[Nd.length - 1]) && (6 === Zd[0] || 2 === Zd[0])) {
                    Pd = 0;
                    continue
                  }
                  if (3 === Zd[0] && (!Nd || Zd[1] > Nd[0] && Zd[1] < Nd[3])) {
                    Pd.label = Zd[1];
                    break
                  }
                  if (6 === Zd[0] && Pd.label < Nd[1]) {
                    Pd.label = Nd[1], Nd = Zd;
                    break
                  }
                  if (Nd && Pd.label < Nd[2]) {
                    Pd.label = Nd[2], Pd.ops.push(Zd);
                    break
                  }
                  Nd[2] && Pd.ops.pop(), Pd.trys.pop();
                  continue
              }
              Zd = Jd.call(dd, Pd)
            } catch (gd) {
              Zd = [6, gd], pd = 0
            } finally {
              kd = Nd = 0
            }
            if (5 & Zd[0]) throw Zd[1];
            return {
              value: Zd[0] ? Zd[1] : void 0,
              done: !0
            }
          }([Zd, gd])
        }
      }
    }
    Object.create;

    function gd(dd, Jd) {
      var kd = "function" === typeof Symbol && dd[Symbol.iterator];
      if (!kd) return dd;
      var pd, Nd, Wd = kd.call(dd),
        Pd = [];
      try {
        for (;
          (void 0 === Jd || Jd-- > 0) && !(pd = Wd.next()).done;) Pd.push(pd.value)
      } catch (Zd) {
        Nd = {
          error: Zd
        }
      } finally {
        try {
          pd && !pd.done && (kd = Wd.return) && kd.call(Wd)
        } finally {
          if (Nd) throw Nd.error
        }
      }
      return Pd
    }

    function Cd(dd, Jd, kd) {
      if (kd || 2 === arguments.length)
        for (var pd, Nd = 0, Wd = Jd.length; Nd < Wd; Nd++) !pd && Nd in Jd || (pd || (pd = Array.prototype.slice.call(Jd, 0, Nd)), pd[Nd] = Jd[Nd]);
      return dd.concat(pd || Array.prototype.slice.call(Jd))
    }
    Object.create;
    "function" === typeof SuppressedError && SuppressedError;
    var Kd = new Map([
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
      ["IC", "application/vnd.ms-outlook"]
    ]);

    function od(dd, Jd) {
      var kd = function(dd) {
        var Jd = dd.name;
        if (Jd && -1 !== Jd.lastIndexOf(".") && !dd.type) {
          var kd = Jd.split(".").pop().toLowerCase(),
            pd = Kd.get(kd);
          pd && Object.defineProperty(dd, "type", {
            value: pd,
            writable: !1,
            configurable: !1,
            enumerable: !0
          })
        }
        return dd
      }(dd);
      if ("string" !== typeof kd.path) {
        var pd = dd.webkitRelativePath;
        Object.defineProperty(kd, "path", {
          value: "string" === typeof Jd ? Jd : "string" === typeof pd && pd.length > 0 ? pd : dd.name,
          writable: !1,
          configurable: !1,
          enumerable: !0
        })
      }
      return kd
    }
    var ld = [".DS_Store", "Thumbs.db"];

    function Qd(dd) {
      return "object" === typeof dd && null !== dd
    }

    function Ld(dd) {
      return Id(dd.target.files).map((function(dd) {
        return od(dd)
      }))
    }

    function Od(dd) {
      return Pd(this, void 0, void 0, (function() {
        return Zd(this, (function(Jd) {
          switch (Jd.label) {
            case 0:
              return [4, Promise.all(dd.map((function(dd) {
                return dd.getFile()
              })))];
            case 1:
              return [2, Jd.sent().map((function(dd) {
                return od(dd)
              }))]
          }
        }))
      }))
    }

    function ed(dd, Jd) {
      return Pd(this, void 0, void 0, (function() {
        var kd;
        return Zd(this, (function(pd) {
          switch (pd.label) {
            case 0:
              return dd.items ? (kd = Id(dd.items).filter((function(dd) {
                return "file" === dd.kind
              })), "drop" !== Jd ? [2, kd] : [4, Promise.all(kd.map(Gd))]) : [3, 2];
            case 1:
              return [2, Rd(vd(pd.sent()))];
            case 2:
              return [2, Rd(Id(dd.files).map((function(dd) {
                return od(dd)
              })))]
          }
        }))
      }))
    }

    function Rd(dd) {
      return dd.filter((function(dd) {
        return -1 === ld.indexOf(dd.name)
      }))
    }

    function Id(dd) {
      if (null === dd) return [];
      for (var Jd = [], kd = 0; kd < dd.length; kd++) {
        var pd = dd[kd];
        Jd.push(pd)
      }
      return Jd
    }

    function Gd(dd) {
      if ("function" !== typeof dd.webkitGetAsEntry) return xd(dd);
      var Jd = dd.webkitGetAsEntry();
      return Jd && Jd.isDirectory ? Bd(Jd) : xd(dd)
    }

    function vd(dd) {
      return dd.reduce((function(dd, Jd) {
        return Cd(Cd([], gd(dd), !1), gd(Array.isArray(Jd) ? vd(Jd) : [Jd]), !1)
      }), [])
    }

    function xd(dd) {
      var Jd = dd.getAsFile();
      if (!Jd) return Promise.reject("".concat(dd, " is not a File"));
      var kd = od(Jd);
      return Promise.resolve(kd)
    }

    function qd(dd) {
      return Pd(this, void 0, void 0, (function() {
        return Zd(this, (function(Jd) {
          return [2, dd.isDirectory ? Bd(dd) : sd(dd)]
        }))
      }))
    }

    function Bd(dd) {
      var Jd = dd.createReader();
      return new Promise((function(dd, kd) {
        var pd = [];
        ! function Nd() {
          var Wd = this;
          Jd.readEntries((function(Jd) {
            return Pd(Wd, void 0, void 0, (function() {
              var Wd, Pd, gd;
              return Zd(this, (function(Zd) {
                switch (Zd.label) {
                  case 0:
                    if (Jd.length) return [3, 5];
                    Zd.label = 1;
                  case 1:
                    return Zd.trys.push([1, 3, , 4]), [4, Promise.all(pd)];
                  case 2:
                    return Wd = Zd.sent(), dd(Wd), [3, 4];
                  case 3:
                    return Pd = Zd.sent(), kd(Pd), [3, 4];
                  case 4:
                    return [3, 6];
                  case 5:
                    gd = Promise.all(Jd.map(qd)), pd.push(gd), Nd(), Zd.label = 6;
                  case 6:
                    return [2]
                }
              }))
            }))
          }), (function(dd) {
            kd(dd)
          }))
        }()
      }))
    }

    function sd(dd) {
      return Pd(this, void 0, void 0, (function() {
        return Zd(this, (function(Jd) {
          return [2, new Promise((function(Jd, kd) {
            dd.file((function(kd) {
              var pd = od(kd, dd.fullPath);
              Jd(pd)
            }), (function(dd) {
              kd(dd)
            }))
          }))]
        }))
      }))
    }
    var ad = kd(4863);

    function Md(dd) {
      return function(dd) {
        if (Array.isArray(dd)) return jd(dd)
      }(dd) || function(dd) {
        if ("undefined" !== typeof Symbol && null != dd[Symbol.iterator] || null != dd["@@iterator"]) return Array.from(dd)
      }(dd) || Sd(dd) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Fd(dd, Jd) {
      var kd = Object.keys(dd);
      if (Object.getOwnPropertySymbols) {
        var pd = Object.getOwnPropertySymbols(dd);
        Jd && (pd = pd.filter((function(Jd) {
          return Object.getOwnPropertyDescriptor(dd, Jd).enumerable
        }))), kd.push.apply(kd, pd)
      }
      return kd
    }

    function Yd(dd) {
      for (var Jd = 1; Jd < arguments.length; Jd++) {
        var kd = null != arguments[Jd] ? arguments[Jd] : {};
        Jd % 2 ? Fd(Object(kd), !0).forEach((function(Jd) {
          md(dd, Jd, kd[Jd])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(dd, Object.getOwnPropertyDescriptors(kd)) : Fd(Object(kd)).forEach((function(Jd) {
          Object.defineProperty(dd, Jd, Object.getOwnPropertyDescriptor(kd, Jd))
        }))
      }
      return dd
    }

    function md(dd, Jd, kd) {
      return Jd in dd ? Object.defineProperty(dd, Jd, {
        value: kd,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Jd] = kd, dd
    }

    function bd(dd, Jd) {
      return function(dd) {
        if (Array.isArray(dd)) return dd
      }(dd) || function(dd, Jd) {
        var kd = null == dd ? null : "undefined" !== typeof Symbol && dd[Symbol.iterator] || dd["@@iterator"];
        if (null == kd) return;
        var pd, Nd, Wd = [],
          Pd = !0,
          Zd = !1;
        try {
          for (kd = kd.call(dd); !(Pd = (pd = kd.next()).done) && (Wd.push(pd.value), !Jd || Wd.length !== Jd); Pd = !0);
        } catch (gd) {
          Zd = !0, Nd = gd
        } finally {
          try {
            Pd || null == kd.return || kd.return()
          } finally {
            if (Zd) throw Nd
          }
        }
        return Wd
      }(dd, Jd) || Sd(dd, Jd) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Sd(dd, Jd) {
      if (dd) {
        if ("string" === typeof dd) return jd(dd, Jd);
        var kd = Object.prototype.toString.call(dd).slice(8, -1);
        return "Object" === kd && dd.constructor && (kd = dd.constructor.name), "Map" === kd || "Set" === kd ? Array.from(dd) : "Arguments" === kd || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(kd) ? jd(dd, Jd) : void 0
      }
    }

    function jd(dd, Jd) {
      (null == Jd || Jd > dd.length) && (Jd = dd.length);
      for (var kd = 0, pd = new Array(Jd); kd < Jd; kd++) pd[kd] = dd[kd];
      return pd
    }
    var Xd = "file-invalid-type",
      fd = "file-too-large",
      nd = "file-too-small",
      Ud = "too-many-files",
      yd = function(dd) {
        dd = Array.isArray(dd) && 1 === dd.length ? dd[0] : dd;
        var Jd = Array.isArray(dd) ? "one of ".concat(dd.join(", ")) : dd;
        return {
          code: Xd,
          message: "File type must be ".concat(Jd)
        }
      },
      Dd = function(dd) {
        return {
          code: fd,
          message: "File is larger than ".concat(dd, " ").concat(1 === dd ? "byte" : "bytes")
        }
      },
      Td = function(dd) {
        return {
          code: nd,
          message: "File is smaller than ".concat(dd, " ").concat(1 === dd ? "byte" : "bytes")
        }
      },
      Ed = {
        code: Ud,
        message: "Too many files"
      };

    function cd(dd, Jd) {
      var kd = "application/x-moz-file" === dd.type || (0, ad.b)(dd, Jd);
      return [kd, kd ? null : yd(Jd)]
    }

    function hd(dd, Jd, kd) {
      if (rd(dd.size))
        if (rd(Jd) && rd(kd)) {
          if (dd.size > kd) return [!1, Dd(kd)];
          if (dd.size < Jd) return [!1, Td(Jd)]
        } else {
          if (rd(Jd) && dd.size < Jd) return [!1, Td(Jd)];
          if (rd(kd) && dd.size > kd) return [!1, Dd(kd)]
        } return [!0, null]
    }

    function rd(dd) {
      return void 0 !== dd && null !== dd
    }

    function ud(dd) {
      return "function" === typeof dd.isPropagationStopped ? dd.isPropagationStopped() : "undefined" !== typeof dd.cancelBubble && dd.cancelBubble
    }

    function td(dd) {
      return dd.dataTransfer ? Array.prototype.some.call(dd.dataTransfer.types, (function(dd) {
        return "Files" === dd || "application/x-moz-file" === dd
      })) : !!dd.target && !!dd.target.files
    }

    function Vd(dd) {
      dd.preventDefault()
    }

    function zd() {
      for (var dd = arguments.length, Jd = new Array(dd), kd = 0; kd < dd; kd++) Jd[kd] = arguments[kd];
      return function(dd) {
        for (var kd = arguments.length, pd = new Array(kd > 1 ? kd - 1 : 0), Nd = 1; Nd < kd; Nd++) pd[Nd - 1] = arguments[Nd];
        return Jd.some((function(Jd) {
          return !ud(dd) && Jd && Jd.apply(void 0, [dd].concat(pd)), ud(dd)
        }))
      }
    }

    function Hd(dd) {
      return "audio/*" === dd || "video/*" === dd || "image/*" === dd || "text/*" === dd || /\w+\/[-+.\w]+/g.test(dd)
    }

    function wd(dd) {
      return /^.*\.[\w]+$/.test(dd)
    }
    var Ad = ["children"],
      dJ = ["open"],
      JJ = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
      kJ = ["refKey", "onChange", "onClick"];

    function pJ(dd) {
      return function(dd) {
        if (Array.isArray(dd)) return PJ(dd)
      }(dd) || function(dd) {
        if ("undefined" !== typeof Symbol && null != dd[Symbol.iterator] || null != dd["@@iterator"]) return Array.from(dd)
      }(dd) || WJ(dd) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function NJ(dd, Jd) {
      return function(dd) {
        if (Array.isArray(dd)) return dd
      }(dd) || function(dd, Jd) {
        var kd = null == dd ? null : "undefined" !== typeof Symbol && dd[Symbol.iterator] || dd["@@iterator"];
        if (null == kd) return;
        var pd, Nd, Wd = [],
          Pd = !0,
          Zd = !1;
        try {
          for (kd = kd.call(dd); !(Pd = (pd = kd.next()).done) && (Wd.push(pd.value), !Jd || Wd.length !== Jd); Pd = !0);
        } catch (gd) {
          Zd = !0, Nd = gd
        } finally {
          try {
            Pd || null == kd.return || kd.return()
          } finally {
            if (Zd) throw Nd
          }
        }
        return Wd
      }(dd, Jd) || WJ(dd, Jd) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function WJ(dd, Jd) {
      if (dd) {
        if ("string" === typeof dd) return PJ(dd, Jd);
        var kd = Object.prototype.toString.call(dd).slice(8, -1);
        return "Object" === kd && dd.constructor && (kd = dd.constructor.name), "Map" === kd || "Set" === kd ? Array.from(dd) : "Arguments" === kd || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(kd) ? PJ(dd, Jd) : void 0
      }
    }

    function PJ(dd, Jd) {
      (null == Jd || Jd > dd.length) && (Jd = dd.length);
      for (var kd = 0, pd = new Array(Jd); kd < Jd; kd++) pd[kd] = dd[kd];
      return pd
    }

    function ZJ(dd, Jd) {
      var kd = Object.keys(dd);
      if (Object.getOwnPropertySymbols) {
        var pd = Object.getOwnPropertySymbols(dd);
        Jd && (pd = pd.filter((function(Jd) {
          return Object.getOwnPropertyDescriptor(dd, Jd).enumerable
        }))), kd.push.apply(kd, pd)
      }
      return kd
    }

    function gJ(dd) {
      for (var Jd = 1; Jd < arguments.length; Jd++) {
        var kd = null != arguments[Jd] ? arguments[Jd] : {};
        Jd % 2 ? ZJ(Object(kd), !0).forEach((function(Jd) {
          CJ(dd, Jd, kd[Jd])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(dd, Object.getOwnPropertyDescriptors(kd)) : ZJ(Object(kd)).forEach((function(Jd) {
          Object.defineProperty(dd, Jd, Object.getOwnPropertyDescriptor(kd, Jd))
        }))
      }
      return dd
    }

    function CJ(dd, Jd, kd) {
      return Jd in dd ? Object.defineProperty(dd, Jd, {
        value: kd,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Jd] = kd, dd
    }

    function KJ(dd, Jd) {
      if (null == dd) return {};
      var kd, pd, Nd = function(dd, Jd) {
        if (null == dd) return {};
        var kd, pd, Nd = {},
          Wd = Object.keys(dd);
        for (pd = 0; pd < Wd.length; pd++) kd = Wd[pd], Jd.indexOf(kd) >= 0 || (Nd[kd] = dd[kd]);
        return Nd
      }(dd, Jd);
      if (Object.getOwnPropertySymbols) {
        var Wd = Object.getOwnPropertySymbols(dd);
        for (pd = 0; pd < Wd.length; pd++) kd = Wd[pd], Jd.indexOf(kd) >= 0 || Object.prototype.propertyIsEnumerable.call(dd, kd) && (Nd[kd] = dd[kd])
      }
      return Nd
    }
    var oJ = (0, pd.forwardRef)((function(dd, Jd) {
      var kd = dd.children,
        Nd = LJ(KJ(dd, Ad)),
        Wd = Nd.open,
        Pd = KJ(Nd, dJ);
      return (0, pd.useImperativeHandle)(Jd, (function() {
        return {
          open: Wd
        }
      }), [Wd]), pd.createElement(pd.Fragment, null, kd(gJ(gJ({}, Pd), {}, {
        open: Wd
      })))
    }));
    oJ.displayName = "Dropzone";
    var lJ = {
      disabled: !1,
      getFilesFromEvent: function(dd) {
        return Pd(this, void 0, void 0, (function() {
          return Zd(this, (function(Jd) {
            return Qd(dd) && Qd(dd.dataTransfer) ? [2, ed(dd.dataTransfer, dd.type)] : function(dd) {
              return Qd(dd) && Qd(dd.target)
            }(dd) ? [2, Ld(dd)] : Array.isArray(dd) && dd.every((function(dd) {
              return "getFile" in dd && "function" === typeof dd.getFile
            })) ? [2, Od(dd)] : [2, []]
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
    oJ.defaultProps = lJ, oJ.propTypes = {
      children: Wd().func,
      accept: Wd().objectOf(Wd().arrayOf(Wd().string)),
      multiple: Wd().bool,
      preventDropOnDocument: Wd().bool,
      noClick: Wd().bool,
      noKeyboard: Wd().bool,
      noDrag: Wd().bool,
      noDragEventsBubbling: Wd().bool,
      minSize: Wd().number,
      maxSize: Wd().number,
      maxFiles: Wd().number,
      disabled: Wd().bool,
      getFilesFromEvent: Wd().func,
      onFileDialogCancel: Wd().func,
      onFileDialogOpen: Wd().func,
      useFsAccessApi: Wd().bool,
      autoFocus: Wd().bool,
      onDragEnter: Wd().func,
      onDragLeave: Wd().func,
      onDragOver: Wd().func,
      onDrop: Wd().func,
      onDropAccepted: Wd().func,
      onDropRejected: Wd().func,
      onError: Wd().func,
      validator: Wd().func
    };
    var QJ = {
      mY: !1,
      isFileDialogActive: !1,
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1,
      acceptedFiles: [],
      fileRejections: []
    };

    function LJ() {
      var dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        Jd = gJ(gJ({}, lJ), dd),
        kd = Jd.accept,
        Nd = Jd.disabled,
        Wd = Jd.getFilesFromEvent,
        Pd = Jd.maxSize,
        Zd = Jd.minSize,
        gd = Jd.multiple,
        Cd = Jd.maxFiles,
        Kd = Jd.onDragEnter,
        od = Jd.onDragLeave,
        ld = Jd.onDragOver,
        Qd = Jd.onDrop,
        Ld = Jd.onDropAccepted,
        Od = Jd.onDropRejected,
        ed = Jd.onFileDialogCancel,
        Rd = Jd.onFileDialogOpen,
        Id = Jd.useFsAccessApi,
        Gd = Jd.autoFocus,
        vd = Jd.preventDropOnDocument,
        xd = Jd.noClick,
        qd = Jd.noKeyboard,
        Bd = Jd.noDrag,
        sd = Jd.noDragEventsBubbling,
        ad = Jd.onError,
        Fd = Jd.validator,
        Sd = (0, pd.useMemo)((function() {
          return function(dd) {
            if (rd(dd)) return Object.entries(dd).reduce((function(dd, Jd) {
              var kd = bd(Jd, 2),
                pd = kd[0],
                Nd = kd[1];
              return [].concat(Md(dd), [pd], Md(Nd))
            }), []).filter((function(dd) {
              return Hd(dd) || wd(dd)
            })).join(",")
          }(kd)
        }), [kd]),
        jd = (0, pd.useMemo)((function() {
          return function(dd) {
            return rd(dd) ? [{
              description: "Files",
              accept: Object.entries(dd).filter((function(dd) {
                var Jd = bd(dd, 2),
                  kd = Jd[0],
                  pd = Jd[1],
                  Nd = !0;
                return Hd(kd) || (console.warn('Skipped "'.concat(kd, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), Nd = !1), Array.isArray(pd) && pd.every(wd) || (console.warn('Skipped "'.concat(kd, '" because an invalid file extension was provided.')), Nd = !1), Nd
              })).reduce((function(dd, Jd) {
                var kd = bd(Jd, 2),
                  pd = kd[0],
                  Nd = kd[1];
                return Yd(Yd({}, dd), {}, md({}, pd, Nd))
              }), {})
            }] : dd
          }(kd)
        }), [kd]),
        Xd = (0, pd.useMemo)((function() {
          return "function" === typeof Rd ? Rd : eJ
        }), [Rd]),
        fd = (0, pd.useMemo)((function() {
          return "function" === typeof ed ? ed : eJ
        }), [ed]),
        nd = (0, pd.useRef)(null),
        Ud = (0, pd.useRef)(null),
        yd = NJ((0, pd.useReducer)(OJ, QJ), 2),
        Dd = yd[0],
        Td = yd[1],
        Ad = Dd.mY,
        dJ = Dd.isFileDialogActive,
        WJ = (0, pd.useRef)("undefined" !== typeof window && window.isSecureContext && Id && "showOpenFilePicker" in window),
        PJ = function() {
          !WJ.current && dJ && setTimeout((function() {
            Ud.current && (Ud.current.files.length || (Td({
              type: "closeDialog"
            }), fd()))
          }), 300)
        };
      (0, pd.useEffect)((function() {
        return window.addEventListener("focus", PJ, !1),
          function() {
            window.removeEventListener("focus", PJ, !1)
          }
      }), [Ud, dJ, fd, WJ]);
      var ZJ = (0, pd.useRef)([]),
        oJ = function(dd) {
          nd.current && nd.current.contains(dd.target) || (dd.preventDefault(), ZJ.current = [])
        };
      (0, pd.useEffect)((function() {
        return vd && (document.addEventListener("dragover", Vd, !1), document.addEventListener("drop", oJ, !1)),
          function() {
            vd && (document.removeEventListener("dragover", Vd), document.removeEventListener("drop", oJ))
          }
      }), [nd, vd]), (0, pd.useEffect)((function() {
        return !Nd && Gd && nd.current && nd.current.focus(),
          function() {}
      }), [nd, Gd, Nd]);
      var LJ = (0, pd.useCallback)((function(dd) {
          ad ? ad(dd) : console.error(dd)
        }), [ad]),
        RJ = (0, pd.useCallback)((function(dd) {
          dd.preventDefault(), dd.persist(), mJ(dd), ZJ.current = [].concat(pJ(ZJ.current), [dd.target]), td(dd) && Promise.resolve(Wd(dd)).then((function(Jd) {
            if (!ud(dd) || sd) {
              var kd = Jd.length,
                pd = kd > 0 && function(dd) {
                  var Jd = dd.files,
                    kd = dd.accept,
                    pd = dd.minSize,
                    Nd = dd.maxSize,
                    Wd = dd.multiple,
                    Pd = dd.maxFiles,
                    Zd = dd.validator;
                  return !(!Wd && Jd.length > 1 || Wd && Pd >= 1 && Jd.length > Pd) && Jd.every((function(dd) {
                    var Jd = bd(cd(dd, kd), 1)[0],
                      Wd = bd(hd(dd, pd, Nd), 1)[0],
                      Pd = Zd ? Zd(dd) : null;
                    return Jd && Wd && !Pd
                  }))
                }({
                  files: Jd,
                  accept: Sd,
                  minSize: Zd,
                  maxSize: Pd,
                  multiple: gd,
                  maxFiles: Cd,
                  validator: Fd
                });
              Td({
                isDragAccept: pd,
                isDragReject: kd > 0 && !pd,
                isDragActive: !0,
                type: "setDraggedFiles"
              }), Kd && Kd(dd)
            }
          })).catch((function(dd) {
            return LJ(dd)
          }))
        }), [Wd, Kd, LJ, sd, Sd, Zd, Pd, gd, Cd, Fd]),
        IJ = (0, pd.useCallback)((function(dd) {
          dd.preventDefault(), dd.persist(), mJ(dd);
          var Jd = td(dd);
          if (Jd && dd.dataTransfer) try {
            dd.dataTransfer.dropEffect = "copy"
          } catch (kd) {}
          return Jd && ld && ld(dd), !1
        }), [ld, sd]),
        GJ = (0, pd.useCallback)((function(dd) {
          dd.preventDefault(), dd.persist(), mJ(dd);
          var Jd = ZJ.current.filter((function(dd) {
              return nd.current && nd.current.contains(dd)
            })),
            kd = Jd.indexOf(dd.target); - 1 !== kd && Jd.splice(kd, 1), ZJ.current = Jd, Jd.length > 0 || (Td({
            type: "setDraggedFiles",
            isDragActive: !1,
            isDragAccept: !1,
            isDragReject: !1
          }), td(dd) && od && od(dd))
        }), [nd, od, sd]),
        vJ = (0, pd.useCallback)((function(dd, Jd) {
          var kd = [],
            pd = [];
          dd.forEach((function(dd) {
            var Jd = NJ(cd(dd, Sd), 2),
              Nd = Jd[0],
              Wd = Jd[1],
              gd = NJ(hd(dd, Zd, Pd), 2),
              Cd = gd[0],
              Kd = gd[1],
              od = Fd ? Fd(dd) : null;
            if (Nd && Cd && !od) kd.push(dd);
            else {
              var ld = [Wd, Kd];
              od && (ld = ld.concat(od)), pd.push({
                file: dd,
                errors: ld.filter((function(dd) {
                  return dd
                }))
              })
            }
          })), (!gd && kd.length > 1 || gd && Cd >= 1 && kd.length > Cd) && (kd.forEach((function(dd) {
            pd.push({
              file: dd,
              errors: [Ed]
            })
          })), kd.splice(0)), Td({
            acceptedFiles: kd,
            fileRejections: pd,
            type: "setFiles"
          }), Qd && Qd(kd, pd, Jd), pd.length > 0 && Od && Od(pd, Jd), kd.length > 0 && Ld && Ld(kd, Jd)
        }), [Td, gd, Sd, Zd, Pd, Cd, Qd, Ld, Od, Fd]),
        xJ = (0, pd.useCallback)((function(dd) {
          dd.preventDefault(), dd.persist(), mJ(dd), ZJ.current = [], td(dd) && Promise.resolve(Wd(dd)).then((function(Jd) {
            ud(dd) && !sd || vJ(Jd, dd)
          })).catch((function(dd) {
            return LJ(dd)
          })), Td({
            type: "reset"
          })
        }), [Wd, vJ, LJ, sd]),
        qJ = (0, pd.useCallback)((function() {
          if (WJ.current) {
            Td({
              type: "openDialog"
            }), Xd();
            var dd = {
              multiple: gd,
              types: jd
            };
            window.showOpenFilePicker(dd).then((function(dd) {
              return Wd(dd)
            })).then((function(dd) {
              vJ(dd, null), Td({
                type: "closeDialog"
              })
            })).catch((function(dd) {
              var Jd;
              (Jd = dd) instanceof DOMException && ("AbortError" === Jd.name || Jd.code === Jd.ABORT_ERR) ? (fd(dd), Td({
                type: "closeDialog"
              })) : ! function(dd) {
                return dd instanceof DOMException && ("SecurityError" === dd.name || dd.code === dd.SECURITY_ERR)
              }(dd) ? LJ(dd) : (WJ.current = !1, Ud.current ? (Ud.current.value = null, Ud.current.click()) : LJ(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))
            }))
          } else Ud.current && (Td({
            type: "openDialog"
          }), Xd(), Ud.current.value = null, Ud.current.click())
        }), [Td, Xd, fd, Id, vJ, LJ, jd, gd]),
        BJ = (0, pd.useCallback)((function(dd) {
          nd.current && nd.current.isEqualNode(dd.target) && (" " !== dd.key && "Enter" !== dd.key && 32 !== dd.keyCode && 13 !== dd.keyCode || (dd.preventDefault(), qJ()))
        }), [nd, qJ]),
        sJ = (0, pd.useCallback)((function() {
          Td({
            type: "focus"
          })
        }), []),
        iJ = (0, pd.useCallback)((function() {
          Td({
            type: "blur"
          })
        }), []),
        aJ = (0, pd.useCallback)((function() {
          xd || (! function() {
            var dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
            return function(dd) {
              return -1 !== dd.indexOf("MSIE") || -1 !== dd.indexOf("Trident/")
            }(dd) || function(dd) {
              return -1 !== dd.indexOf("Edge/")
            }(dd)
          }() ? qJ() : setTimeout(qJ, 0))
        }), [xd, qJ]),
        MJ = function(dd) {
          return Nd ? null : dd
        },
        FJ = function(dd) {
          return qd ? null : MJ(dd)
        },
        YJ = function(dd) {
          return Bd ? null : MJ(dd)
        },
        mJ = function(dd) {
          sd && dd.stopPropagation()
        },
        bJ = (0, pd.useMemo)((function() {
          return function() {
            var dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              Jd = dd.refKey,
              kd = void 0 === Jd ? "ref" : Jd,
              pd = dd.role,
              Wd = dd.onKeyDown,
              Pd = dd.onFocus,
              Zd = dd.onBlur,
              gd = dd.onClick,
              Cd = dd.onDragEnter,
              Kd = dd.onDragOver,
              od = dd.onDragLeave,
              ld = dd.onDrop,
              Qd = KJ(dd, JJ);
            return gJ(gJ(CJ({
              onKeyDown: FJ(zd(Wd, BJ)),
              onFocus: FJ(zd(Pd, sJ)),
              onBlur: FJ(zd(Zd, iJ)),
              onClick: MJ(zd(gd, aJ)),
              onDragEnter: YJ(zd(Cd, RJ)),
              onDragOver: YJ(zd(Kd, IJ)),
              onDragLeave: YJ(zd(od, GJ)),
              onDrop: YJ(zd(ld, xJ)),
              role: "string" === typeof pd && "" !== pd ? pd : "presentation"
            }, kd, nd), Nd || qd ? {} : {
              tabIndex: 0
            }), Qd)
          }
        }), [nd, BJ, sJ, iJ, aJ, RJ, IJ, GJ, xJ, qd, Bd, Nd]),
        SJ = (0, pd.useCallback)((function(dd) {
          dd.stopPropagation()
        }), []),
        jJ = (0, pd.useMemo)((function() {
          return function() {
            var dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              Jd = dd.refKey,
              kd = void 0 === Jd ? "ref" : Jd,
              pd = dd.onChange,
              Nd = dd.onClick,
              Wd = KJ(dd, kJ);
            return gJ(gJ({}, CJ({
              accept: Sd,
              multiple: gd,
              type: "file",
              style: {
                display: "none"
              },
              onChange: MJ(zd(pd, xJ)),
              onClick: MJ(zd(Nd, SJ)),
              tabIndex: -1
            }, kd, Ud)), Wd)
          }
        }), [Ud, kd, gd, xJ, Nd]);
      return gJ(gJ({}, Dd), {}, {
        mY: Ad && !Nd,
        getRootProps: bJ,
        getInputProps: jJ,
        rootRef: nd,
        inputRef: Ud,
        open: MJ(qJ)
      })
    }

    function OJ(dd, Jd) {
      switch (Jd.type) {
        case "focus":
          return gJ(gJ({}, dd), {}, {
            mY: !0
          });
        case "blur":
          return gJ(gJ({}, dd), {}, {
            mY: !1
          });
        case "openDialog":
          return gJ(gJ({}, QJ), {}, {
            isFileDialogActive: !0
          });
        case "closeDialog":
          return gJ(gJ({}, dd), {}, {
            isFileDialogActive: !1
          });
        case "setDraggedFiles":
          return gJ(gJ({}, dd), {}, {
            isDragActive: Jd.isDragActive,
            isDragAccept: Jd.isDragAccept,
            isDragReject: Jd.isDragReject
          });
        case "setFiles":
          return gJ(gJ({}, dd), {}, {
            acceptedFiles: Jd.acceptedFiles,
            fileRejections: Jd.fileRejections
          });
        case "reset":
          return gJ({}, QJ);
        default:
          return dd
      }
    }

    function eJ() {}
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);