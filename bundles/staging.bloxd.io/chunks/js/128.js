export const id = 128;
export const ids = [128];
export const modules = {
  5882: (dd, Od) => {
    Od.d = function(dd, Od) {
      if (dd && Od) {
        var md = Array.isArray(Od) ? Od : Od.split(","),
          Wd = dd.name || "",
          Fd = (dd.type || "").toLowerCase(),
          Rd = Fd.replace(/\/.*$/, "");
        return md.some((function(dd) {
          var Od = dd.trim().toLowerCase();
          return "." === Od.charAt(0) ? Wd.toLowerCase().endsWith(Od) : Od.endsWith("/*") ? Rd === Od.replace(/\/.*$/, "") : Fd === Od
        }))
      }
      return !0
    }
  },
  5861: (dd, Od, md) => {
    md.d(Od, {
      b: () => HO
    });
    var Wd = md(66),
      Fd = md(5864),
      Rd = md.n(Fd);

    function Xd(dd, Od, md, Wd) {
      return new(md || (md = Promise))((function(Fd, Rd) {
        function Xd(dd) {
          try {
            hd(Wd.next(dd))
          } catch (Od) {
            Rd(Od)
          }
        }

        function Kd(dd) {
          try {
            hd(Wd.throw(dd))
          } catch (Od) {
            Rd(Od)
          }
        }

        function hd(dd) {
          var Od;
          dd.done ? Fd(dd.value) : (Od = dd.value, Od instanceof md ? Od : new md((function(dd) {
            dd(Od)
          }))).then(Xd, Kd)
        }
        hd((Wd = Wd.apply(dd, Od || [])).next())
      }))
    }

    function Kd(dd, Od) {
      var md, Wd, Fd, Rd, Xd = {
        label: 0,
        sent: function() {
          if (1 & Fd[0]) throw Fd[1];
          return Fd[1]
        },
        trys: [],
        ops: []
      };
      return Rd = {
        next: Kd(0),
        throw: Kd(1),
        return: Kd(2)
      }, "function" === typeof Symbol && (Rd[Symbol.iterator] = function() {
        return this
      }), Rd;

      function Kd(Kd) {
        return function(hd) {
          return function(Kd) {
            if (md) throw new TypeError("Generator is already executing.");
            for (; Rd && (Rd = 0, Kd[0] && (Xd = 0)), Xd;) try {
              if (md = 1, Wd && (Fd = 2 & Kd[0] ? Wd.return : Kd[0] ? Wd.throw || ((Fd = Wd.return) && Fd.call(Wd), 0) : Wd.next) && !(Fd = Fd.call(Wd, Kd[1])).done) return Fd;
              switch (Wd = 0, Fd && (Kd = [2 & Kd[0], Fd.value]), Kd[0]) {
                case 0:
                case 1:
                  Fd = Kd;
                  break;
                case 4:
                  return Xd.label++, {
                    value: Kd[1],
                    done: !1
                  };
                case 5:
                  Xd.label++, Wd = Kd[1], Kd = [0];
                  continue;
                case 7:
                  Kd = Xd.ops.pop(), Xd.trys.pop();
                  continue;
                default:
                  if (!(Fd = (Fd = Xd.trys).length > 0 && Fd[Fd.length - 1]) && (6 === Kd[0] || 2 === Kd[0])) {
                    Xd = 0;
                    continue
                  }
                  if (3 === Kd[0] && (!Fd || Kd[1] > Fd[0] && Kd[1] < Fd[3])) {
                    Xd.label = Kd[1];
                    break
                  }
                  if (6 === Kd[0] && Xd.label < Fd[1]) {
                    Xd.label = Fd[1], Fd = Kd;
                    break
                  }
                  if (Fd && Xd.label < Fd[2]) {
                    Xd.label = Fd[2], Xd.ops.push(Kd);
                    break
                  }
                  Fd[2] && Xd.ops.pop(), Xd.trys.pop();
                  continue
              }
              Kd = Od.call(dd, Xd)
            } catch (hd) {
              Kd = [6, hd], Wd = 0
            } finally {
              md = Fd = 0
            }
            if (5 & Kd[0]) throw Kd[1];
            return {
              value: Kd[0] ? Kd[1] : void 0,
              done: !0
            }
          }([Kd, hd])
        }
      }
    }
    Object.create;

    function hd(dd, Od) {
      var md = "function" === typeof Symbol && dd[Symbol.iterator];
      if (!md) return dd;
      var Wd, Fd, Rd = md.call(dd),
        Xd = [];
      try {
        for (;
          (void 0 === Od || Od-- > 0) && !(Wd = Rd.next()).done;) Xd.push(Wd.value)
      } catch (Kd) {
        Fd = {
          error: Kd
        }
      } finally {
        try {
          Wd && !Wd.done && (md = Rd.return) && md.call(Rd)
        } finally {
          if (Fd) throw Fd.error
        }
      }
      return Xd
    }

    function vd(dd, Od, md) {
      if (md || 2 === arguments.length)
        for (var Wd, Fd = 0, Rd = Od.length; Fd < Rd; Fd++) !Wd && Fd in Od || (Wd || (Wd = Array.prototype.slice.call(Od, 0, Fd)), Wd[Fd] = Od[Fd]);
      return dd.concat(Wd || Array.prototype.slice.call(Od))
    }
    Object.create;
    "function" === typeof SuppressedError && SuppressedError;
    var Qd = new Map([
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
      ["tX", "application/vnd.ms-outlook"]
    ]);

    function td(dd, Od) {
      var md = function(dd) {
        var Od = dd.name;
        if (Od && -1 !== Od.lastIndexOf(".") && !dd.type) {
          var md = Od.split(".").pop().toLowerCase(),
            Wd = Qd.get(md);
          Wd && Object.defineProperty(dd, "type", {
            value: Wd,
            writable: !1,
            configurable: !1,
            enumerable: !0
          })
        }
        return dd
      }(dd);
      if ("string" !== typeof md.path) {
        var Wd = dd.webkitRelativePath;
        Object.defineProperty(md, "path", {
          value: "string" === typeof Od ? Od : "string" === typeof Wd && Wd.length > 0 ? Wd : dd.name,
          writable: !1,
          configurable: !1,
          enumerable: !0
        })
      }
      return md
    }
    var od = [".DS_Store", "Thumbs.db"];

    function Nd(dd) {
      return "object" === typeof dd && null !== dd
    }

    function qd(dd) {
      return Td(dd.target.files).map((function(dd) {
        return td(dd)
      }))
    }

    function Hd(dd) {
      return Xd(this, void 0, void 0, (function() {
        return Kd(this, (function(Od) {
          switch (Od.label) {
            case 0:
              return [4, Promise.all(dd.map((function(dd) {
                return dd.getFile()
              })))];
            case 1:
              return [2, Od.sent().map((function(dd) {
                return td(dd)
              }))]
          }
        }))
      }))
    }

    function yd(dd, Od) {
      return Xd(this, void 0, void 0, (function() {
        var md;
        return Kd(this, (function(Wd) {
          switch (Wd.label) {
            case 0:
              return dd.items ? (md = Td(dd.items).filter((function(dd) {
                return "file" === dd.kind
              })), "drop" !== Od ? [2, md] : [4, Promise.all(md.map(pd))]) : [3, 2];
            case 1:
              return [2, bd(Yd(Wd.sent()))];
            case 2:
              return [2, bd(Td(dd.files).map((function(dd) {
                return td(dd)
              })))]
          }
        }))
      }))
    }

    function bd(dd) {
      return dd.filter((function(dd) {
        return -1 === od.indexOf(dd.name)
      }))
    }

    function Td(dd) {
      if (null === dd) return [];
      for (var Od = [], md = 0; md < dd.length; md++) {
        var Wd = dd[md];
        Od.push(Wd)
      }
      return Od
    }

    function pd(dd) {
      if ("function" !== typeof dd.webkitGetAsEntry) return gd(dd);
      var Od = dd.webkitGetAsEntry();
      return Od && Od.isDirectory ? Ed(Od) : gd(dd)
    }

    function Yd(dd) {
      return dd.reduce((function(dd, Od) {
        return vd(vd([], hd(dd), !1), hd(Array.isArray(Od) ? Yd(Od) : [Od]), !1)
      }), [])
    }

    function gd(dd) {
      var Od = dd.getAsFile();
      if (!Od) return Promise.reject("".concat(dd, " is not a File"));
      var md = td(Od);
      return Promise.resolve(md)
    }

    function wd(dd) {
      return Xd(this, void 0, void 0, (function() {
        return Kd(this, (function(Od) {
          return [2, dd.isDirectory ? Ed(dd) : Jd(dd)]
        }))
      }))
    }

    function Ed(dd) {
      var Od = dd.createReader();
      return new Promise((function(dd, md) {
        var Wd = [];
        ! function Fd() {
          var Rd = this;
          Od.readEntries((function(Od) {
            return Xd(Rd, void 0, void 0, (function() {
              var Rd, Xd, hd;
              return Kd(this, (function(Kd) {
                switch (Kd.label) {
                  case 0:
                    if (Od.length) return [3, 5];
                    Kd.label = 1;
                  case 1:
                    return Kd.trys.push([1, 3, , 4]), [4, Promise.all(Wd)];
                  case 2:
                    return Rd = Kd.sent(), dd(Rd), [3, 4];
                  case 3:
                    return Xd = Kd.sent(), md(Xd), [3, 4];
                  case 4:
                    return [3, 6];
                  case 5:
                    hd = Promise.all(Od.map(wd)), Wd.push(hd), Fd(), Kd.label = 6;
                  case 6:
                    return [2]
                }
              }))
            }))
          }), (function(dd) {
            md(dd)
          }))
        }()
      }))
    }

    function Jd(dd) {
      return Xd(this, void 0, void 0, (function() {
        return Kd(this, (function(Od) {
          return [2, new Promise((function(Od, md) {
            dd.file((function(md) {
              var Wd = td(md, dd.fullPath);
              Od(Wd)
            }), (function(dd) {
              md(dd)
            }))
          }))]
        }))
      }))
    }
    var Ud = md(5882);

    function xd(dd) {
      return function(dd) {
        if (Array.isArray(dd)) return Ad(dd)
      }(dd) || function(dd) {
        if ("undefined" !== typeof Symbol && null != dd[Symbol.iterator] || null != dd["@@iterator"]) return Array.from(dd)
      }(dd) || Vd(dd) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Bd(dd, Od) {
      var md = Object.keys(dd);
      if (Object.getOwnPropertySymbols) {
        var Wd = Object.getOwnPropertySymbols(dd);
        Od && (Wd = Wd.filter((function(Od) {
          return Object.getOwnPropertyDescriptor(dd, Od).enumerable
        }))), md.push.apply(md, Wd)
      }
      return md
    }

    function Sd(dd) {
      for (var Od = 1; Od < arguments.length; Od++) {
        var md = null != arguments[Od] ? arguments[Od] : {};
        Od % 2 ? Bd(Object(md), !0).forEach((function(Od) {
          sd(dd, Od, md[Od])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(dd, Object.getOwnPropertyDescriptors(md)) : Bd(Object(md)).forEach((function(Od) {
          Object.defineProperty(dd, Od, Object.getOwnPropertyDescriptor(md, Od))
        }))
      }
      return dd
    }

    function sd(dd, Od, md) {
      return Od in dd ? Object.defineProperty(dd, Od, {
        value: md,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Od] = md, dd
    }

    function ud(dd, Od) {
      return function(dd) {
        if (Array.isArray(dd)) return dd
      }(dd) || function(dd, Od) {
        var md = null == dd ? null : "undefined" !== typeof Symbol && dd[Symbol.iterator] || dd["@@iterator"];
        if (null == md) return;
        var Wd, Fd, Rd = [],
          Xd = !0,
          Kd = !1;
        try {
          for (md = md.call(dd); !(Xd = (Wd = md.next()).done) && (Rd.push(Wd.value), !Od || Rd.length !== Od); Xd = !0);
        } catch (hd) {
          Kd = !0, Fd = hd
        } finally {
          try {
            Xd || null == md.return || md.return()
          } finally {
            if (Kd) throw Fd
          }
        }
        return Rd
      }(dd, Od) || Vd(dd, Od) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Vd(dd, Od) {
      if (dd) {
        if ("string" === typeof dd) return Ad(dd, Od);
        var md = Object.prototype.toString.call(dd).slice(8, -1);
        return "Object" === md && dd.constructor && (md = dd.constructor.name), "Map" === md || "Set" === md ? Array.from(dd) : "Arguments" === md || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(md) ? Ad(dd, Od) : void 0
      }
    }

    function Ad(dd, Od) {
      (null == Od || Od > dd.length) && (Od = dd.length);
      for (var md = 0, Wd = new Array(Od); md < Od; md++) Wd[md] = dd[md];
      return Wd
    }
    var rd = "file-invalid-type",
      Gd = "file-too-large",
      nd = "file-too-small",
      Ld = "too-many-files",
      Pd = function(dd) {
        dd = Array.isArray(dd) && 1 === dd.length ? dd[0] : dd;
        var Od = Array.isArray(dd) ? "one of ".concat(dd.join(", ")) : dd;
        return {
          code: rd,
          message: "File type must be ".concat(Od)
        }
      },
      zd = function(dd) {
        return {
          code: Gd,
          message: "File is larger than ".concat(dd, " ").concat(1 === dd ? "byte" : "bytes")
        }
      },
      cd = function(dd) {
        return {
          code: nd,
          message: "File is smaller than ".concat(dd, " ").concat(1 === dd ? "byte" : "bytes")
        }
      },
      jd = {
        code: Ld,
        message: "Too many files"
      };

    function Dd(dd, Od) {
      var md = "application/x-moz-file" === dd.type || (0, Ud.d)(dd, Od);
      return [md, md ? null : Pd(Od)]
    }

    function ed(dd, Od, md) {
      if (Id(dd.size))
        if (Id(Od) && Id(md)) {
          if (dd.size > md) return [!1, zd(md)];
          if (dd.size < Od) return [!1, cd(Od)]
        } else {
          if (Id(Od) && dd.size < Od) return [!1, cd(Od)];
          if (Id(md) && dd.size > md) return [!1, zd(md)]
        } return [!0, null]
    }

    function Id(dd) {
      return void 0 !== dd && null !== dd
    }

    function ld(dd) {
      return "function" === typeof dd.isPropagationStopped ? dd.isPropagationStopped() : "undefined" !== typeof dd.cancelBubble && dd.cancelBubble
    }

    function Cd(dd) {
      return dd.dataTransfer ? Array.prototype.some.call(dd.dataTransfer.types, (function(dd) {
        return "Files" === dd || "application/x-moz-file" === dd
      })) : !!dd.target && !!dd.target.files
    }

    function Zd(dd) {
      dd.preventDefault()
    }

    function kd() {
      for (var dd = arguments.length, Od = new Array(dd), md = 0; md < dd; md++) Od[md] = arguments[md];
      return function(dd) {
        for (var md = arguments.length, Wd = new Array(md > 1 ? md - 1 : 0), Fd = 1; Fd < md; Fd++) Wd[Fd - 1] = arguments[Fd];
        return Od.some((function(Od) {
          return !ld(dd) && Od && Od.apply(void 0, [dd].concat(Wd)), ld(dd)
        }))
      }
    }

    function fd(dd) {
      return "audio/*" === dd || "video/*" === dd || "image/*" === dd || "text/*" === dd || /\w+\/[-+.\w]+/g.test(dd)
    }

    function Md(dd) {
      return /^.*\.[\w]+$/.test(dd)
    }
    var dO = ["children"],
      OO = ["open"],
      mO = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
      WO = ["refKey", "onChange", "onClick"];

    function FO(dd) {
      return function(dd) {
        if (Array.isArray(dd)) return KO(dd)
      }(dd) || function(dd) {
        if ("undefined" !== typeof Symbol && null != dd[Symbol.iterator] || null != dd["@@iterator"]) return Array.from(dd)
      }(dd) || XO(dd) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function RO(dd, Od) {
      return function(dd) {
        if (Array.isArray(dd)) return dd
      }(dd) || function(dd, Od) {
        var md = null == dd ? null : "undefined" !== typeof Symbol && dd[Symbol.iterator] || dd["@@iterator"];
        if (null == md) return;
        var Wd, Fd, Rd = [],
          Xd = !0,
          Kd = !1;
        try {
          for (md = md.call(dd); !(Xd = (Wd = md.next()).done) && (Rd.push(Wd.value), !Od || Rd.length !== Od); Xd = !0);
        } catch (hd) {
          Kd = !0, Fd = hd
        } finally {
          try {
            Xd || null == md.return || md.return()
          } finally {
            if (Kd) throw Fd
          }
        }
        return Rd
      }(dd, Od) || XO(dd, Od) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function XO(dd, Od) {
      if (dd) {
        if ("string" === typeof dd) return KO(dd, Od);
        var md = Object.prototype.toString.call(dd).slice(8, -1);
        return "Object" === md && dd.constructor && (md = dd.constructor.name), "Map" === md || "Set" === md ? Array.from(dd) : "Arguments" === md || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(md) ? KO(dd, Od) : void 0
      }
    }

    function KO(dd, Od) {
      (null == Od || Od > dd.length) && (Od = dd.length);
      for (var md = 0, Wd = new Array(Od); md < Od; md++) Wd[md] = dd[md];
      return Wd
    }

    function hO(dd, Od) {
      var md = Object.keys(dd);
      if (Object.getOwnPropertySymbols) {
        var Wd = Object.getOwnPropertySymbols(dd);
        Od && (Wd = Wd.filter((function(Od) {
          return Object.getOwnPropertyDescriptor(dd, Od).enumerable
        }))), md.push.apply(md, Wd)
      }
      return md
    }

    function vO(dd) {
      for (var Od = 1; Od < arguments.length; Od++) {
        var md = null != arguments[Od] ? arguments[Od] : {};
        Od % 2 ? hO(Object(md), !0).forEach((function(Od) {
          QO(dd, Od, md[Od])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(dd, Object.getOwnPropertyDescriptors(md)) : hO(Object(md)).forEach((function(Od) {
          Object.defineProperty(dd, Od, Object.getOwnPropertyDescriptor(md, Od))
        }))
      }
      return dd
    }

    function QO(dd, Od, md) {
      return Od in dd ? Object.defineProperty(dd, Od, {
        value: md,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Od] = md, dd
    }

    function tO(dd, Od) {
      if (null == dd) return {};
      var md, Wd, Fd = function(dd, Od) {
        if (null == dd) return {};
        var md, Wd, Fd = {},
          Rd = Object.keys(dd);
        for (Wd = 0; Wd < Rd.length; Wd++) md = Rd[Wd], Od.indexOf(md) >= 0 || (Fd[md] = dd[md]);
        return Fd
      }(dd, Od);
      if (Object.getOwnPropertySymbols) {
        var Rd = Object.getOwnPropertySymbols(dd);
        for (Wd = 0; Wd < Rd.length; Wd++) md = Rd[Wd], Od.indexOf(md) >= 0 || Object.prototype.propertyIsEnumerable.call(dd, md) && (Fd[md] = dd[md])
      }
      return Fd
    }
    var oO = (0, Wd.forwardRef)((function(dd, Od) {
      var md = dd.children,
        Fd = HO(tO(dd, dO)),
        Rd = Fd.open,
        Xd = tO(Fd, OO);
      return (0, Wd.useImperativeHandle)(Od, (function() {
        return {
          open: Rd
        }
      }), [Rd]), Wd.createElement(Wd.Fragment, null, md(vO(vO({}, Xd), {}, {
        open: Rd
      })))
    }));
    oO.displayName = "Dropzone";
    var NO = {
      disabled: !1,
      getFilesFromEvent: function(dd) {
        return Xd(this, void 0, void 0, (function() {
          return Kd(this, (function(Od) {
            return Nd(dd) && Nd(dd.dataTransfer) ? [2, yd(dd.dataTransfer, dd.type)] : function(dd) {
              return Nd(dd) && Nd(dd.target)
            }(dd) ? [2, qd(dd)] : Array.isArray(dd) && dd.every((function(dd) {
              return "getFile" in dd && "function" === typeof dd.getFile
            })) ? [2, Hd(dd)] : [2, []]
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
    oO.defaultProps = NO, oO.propTypes = {
      children: Rd().func,
      accept: Rd().objectOf(Rd().arrayOf(Rd().string)),
      multiple: Rd().bool,
      preventDropOnDocument: Rd().bool,
      noClick: Rd().bool,
      noKeyboard: Rd().bool,
      noDrag: Rd().bool,
      noDragEventsBubbling: Rd().bool,
      minSize: Rd().number,
      maxSize: Rd().number,
      maxFiles: Rd().number,
      disabled: Rd().bool,
      getFilesFromEvent: Rd().func,
      onFileDialogCancel: Rd().func,
      onFileDialogOpen: Rd().func,
      useFsAccessApi: Rd().bool,
      autoFocus: Rd().bool,
      onDragEnter: Rd().func,
      onDragLeave: Rd().func,
      onDragOver: Rd().func,
      onDrop: Rd().func,
      onDropAccepted: Rd().func,
      onDropRejected: Rd().func,
      onError: Rd().func,
      validator: Rd().func
    };
    var qO = {
      kS: !1,
      isFileDialogActive: !1,
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1,
      acceptedFiles: [],
      fileRejections: []
    };

    function HO() {
      var dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        Od = vO(vO({}, NO), dd),
        md = Od.accept,
        Fd = Od.disabled,
        Rd = Od.getFilesFromEvent,
        Xd = Od.maxSize,
        Kd = Od.minSize,
        hd = Od.multiple,
        vd = Od.maxFiles,
        Qd = Od.onDragEnter,
        td = Od.onDragLeave,
        od = Od.onDragOver,
        Nd = Od.onDrop,
        qd = Od.onDropAccepted,
        Hd = Od.onDropRejected,
        yd = Od.onFileDialogCancel,
        bd = Od.onFileDialogOpen,
        Td = Od.useFsAccessApi,
        pd = Od.autoFocus,
        Yd = Od.preventDropOnDocument,
        gd = Od.noClick,
        wd = Od.noKeyboard,
        Ed = Od.noDrag,
        Jd = Od.noDragEventsBubbling,
        Ud = Od.onError,
        Bd = Od.validator,
        Vd = (0, Wd.useMemo)((function() {
          return function(dd) {
            if (Id(dd)) return Object.entries(dd).reduce((function(dd, Od) {
              var md = ud(Od, 2),
                Wd = md[0],
                Fd = md[1];
              return [].concat(xd(dd), [Wd], xd(Fd))
            }), []).filter((function(dd) {
              return fd(dd) || Md(dd)
            })).join(",")
          }(md)
        }), [md]),
        Ad = (0, Wd.useMemo)((function() {
          return function(dd) {
            return Id(dd) ? [{
              description: "Files",
              accept: Object.entries(dd).filter((function(dd) {
                var Od = ud(dd, 2),
                  md = Od[0],
                  Wd = Od[1],
                  Fd = !0;
                return fd(md) || (console.warn('Skipped "'.concat(md, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), Fd = !1), Array.isArray(Wd) && Wd.every(Md) || (console.warn('Skipped "'.concat(md, '" because an invalid file extension was provided.')), Fd = !1), Fd
              })).reduce((function(dd, Od) {
                var md = ud(Od, 2),
                  Wd = md[0],
                  Fd = md[1];
                return Sd(Sd({}, dd), {}, sd({}, Wd, Fd))
              }), {})
            }] : dd
          }(md)
        }), [md]),
        rd = (0, Wd.useMemo)((function() {
          return "function" === typeof bd ? bd : bO
        }), [bd]),
        Gd = (0, Wd.useMemo)((function() {
          return "function" === typeof yd ? yd : bO
        }), [yd]),
        nd = (0, Wd.useRef)(null),
        Ld = (0, Wd.useRef)(null),
        Pd = RO((0, Wd.useReducer)(yO, qO), 2),
        zd = Pd[0],
        cd = Pd[1],
        dO = zd.kS,
        OO = zd.isFileDialogActive,
        XO = (0, Wd.useRef)("undefined" !== typeof window && window.isSecureContext && Td && "showOpenFilePicker" in window),
        KO = function() {
          !XO.current && OO && setTimeout((function() {
            Ld.current && (Ld.current.files.length || (cd({
              type: "closeDialog"
            }), Gd()))
          }), 300)
        };
      (0, Wd.useEffect)((function() {
        return window.addEventListener("focus", KO, !1),
          function() {
            window.removeEventListener("focus", KO, !1)
          }
      }), [Ld, OO, Gd, XO]);
      var hO = (0, Wd.useRef)([]),
        oO = function(dd) {
          nd.current && nd.current.contains(dd.target) || (dd.preventDefault(), hO.current = [])
        };
      (0, Wd.useEffect)((function() {
        return Yd && (document.addEventListener("dragover", Zd, !1), document.addEventListener("drop", oO, !1)),
          function() {
            Yd && (document.removeEventListener("dragover", Zd), document.removeEventListener("drop", oO))
          }
      }), [nd, Yd]), (0, Wd.useEffect)((function() {
        return !Fd && pd && nd.current && nd.current.focus(),
          function() {}
      }), [nd, pd, Fd]);
      var HO = (0, Wd.useCallback)((function(dd) {
          Ud ? Ud(dd) : console.error(dd)
        }), [Ud]),
        TO = (0, Wd.useCallback)((function(dd) {
          dd.preventDefault(), dd.persist(), uO(dd), hO.current = [].concat(FO(hO.current), [dd.target]), Cd(dd) && Promise.resolve(Rd(dd)).then((function(Od) {
            if (!ld(dd) || Jd) {
              var md = Od.length,
                Wd = md > 0 && function(dd) {
                  var Od = dd.files,
                    md = dd.accept,
                    Wd = dd.minSize,
                    Fd = dd.maxSize,
                    Rd = dd.multiple,
                    Xd = dd.maxFiles,
                    Kd = dd.validator;
                  return !(!Rd && Od.length > 1 || Rd && Xd >= 1 && Od.length > Xd) && Od.every((function(dd) {
                    var Od = ud(Dd(dd, md), 1)[0],
                      Rd = ud(ed(dd, Wd, Fd), 1)[0],
                      Xd = Kd ? Kd(dd) : null;
                    return Od && Rd && !Xd
                  }))
                }({
                  files: Od,
                  accept: Vd,
                  minSize: Kd,
                  maxSize: Xd,
                  multiple: hd,
                  maxFiles: vd,
                  validator: Bd
                });
              cd({
                isDragAccept: Wd,
                isDragReject: md > 0 && !Wd,
                isDragActive: !0,
                type: "setDraggedFiles"
              }), Qd && Qd(dd)
            }
          })).catch((function(dd) {
            return HO(dd)
          }))
        }), [Rd, Qd, HO, Jd, Vd, Kd, Xd, hd, vd, Bd]),
        pO = (0, Wd.useCallback)((function(dd) {
          dd.preventDefault(), dd.persist(), uO(dd);
          var Od = Cd(dd);
          if (Od && dd.dataTransfer) try {
            dd.dataTransfer.dropEffect = "copy"
          } catch (md) {}
          return Od && od && od(dd), !1
        }), [od, Jd]),
        YO = (0, Wd.useCallback)((function(dd) {
          dd.preventDefault(), dd.persist(), uO(dd);
          var Od = hO.current.filter((function(dd) {
              return nd.current && nd.current.contains(dd)
            })),
            md = Od.indexOf(dd.target); - 1 !== md && Od.splice(md, 1), hO.current = Od, Od.length > 0 || (cd({
            type: "setDraggedFiles",
            isDragActive: !1,
            isDragAccept: !1,
            isDragReject: !1
          }), Cd(dd) && td && td(dd))
        }), [nd, td, Jd]),
        gO = (0, Wd.useCallback)((function(dd, Od) {
          var md = [],
            Wd = [];
          dd.forEach((function(dd) {
            var Od = RO(Dd(dd, Vd), 2),
              Fd = Od[0],
              Rd = Od[1],
              hd = RO(ed(dd, Kd, Xd), 2),
              vd = hd[0],
              Qd = hd[1],
              td = Bd ? Bd(dd) : null;
            if (Fd && vd && !td) md.push(dd);
            else {
              var od = [Rd, Qd];
              td && (od = od.concat(td)), Wd.push({
                file: dd,
                errors: od.filter((function(dd) {
                  return dd
                }))
              })
            }
          })), (!hd && md.length > 1 || hd && vd >= 1 && md.length > vd) && (md.forEach((function(dd) {
            Wd.push({
              file: dd,
              errors: [jd]
            })
          })), md.splice(0)), cd({
            acceptedFiles: md,
            fileRejections: Wd,
            type: "setFiles"
          }), Nd && Nd(md, Wd, Od), Wd.length > 0 && Hd && Hd(Wd, Od), md.length > 0 && qd && qd(md, Od)
        }), [cd, hd, Vd, Kd, Xd, vd, Nd, qd, Hd, Bd]),
        wO = (0, Wd.useCallback)((function(dd) {
          dd.preventDefault(), dd.persist(), uO(dd), hO.current = [], Cd(dd) && Promise.resolve(Rd(dd)).then((function(Od) {
            ld(dd) && !Jd || gO(Od, dd)
          })).catch((function(dd) {
            return HO(dd)
          })), cd({
            type: "reset"
          })
        }), [Rd, gO, HO, Jd]),
        aO = (0, Wd.useCallback)((function() {
          if (XO.current) {
            cd({
              type: "openDialog"
            }), rd();
            var dd = {
              multiple: hd,
              types: Ad
            };
            window.showOpenFilePicker(dd).then((function(dd) {
              return Rd(dd)
            })).then((function(dd) {
              gO(dd, null), cd({
                type: "closeDialog"
              })
            })).catch((function(dd) {
              var Od;
              (Od = dd) instanceof DOMException && ("AbortError" === Od.name || Od.code === Od.ABORT_ERR) ? (Gd(dd), cd({
                type: "closeDialog"
              })) : ! function(dd) {
                return dd instanceof DOMException && ("SecurityError" === dd.name || dd.code === dd.SECURITY_ERR)
              }(dd) ? HO(dd) : (XO.current = !1, Ld.current ? (Ld.current.value = null, Ld.current.click()) : HO(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))
            }))
          } else Ld.current && (cd({
            type: "openDialog"
          }), rd(), Ld.current.value = null, Ld.current.click())
        }), [cd, rd, Gd, Td, gO, HO, Ad, hd]),
        EO = (0, Wd.useCallback)((function(dd) {
          nd.current && nd.current.isEqualNode(dd.target) && (" " !== dd.key && "Enter" !== dd.key && 32 !== dd.keyCode && 13 !== dd.keyCode || (dd.preventDefault(), aO()))
        }), [nd, aO]),
        JO = (0, Wd.useCallback)((function() {
          cd({
            type: "focus"
          })
        }), []),
        UO = (0, Wd.useCallback)((function() {
          cd({
            type: "blur"
          })
        }), []),
        xO = (0, Wd.useCallback)((function() {
          gd || (! function() {
            var dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
            return function(dd) {
              return -1 !== dd.indexOf("MSIE") || -1 !== dd.indexOf("Trident/")
            }(dd) || function(dd) {
              return -1 !== dd.indexOf("Edge/")
            }(dd)
          }() ? aO() : setTimeout(aO, 0))
        }), [gd, aO]),
        BO = function(dd) {
          return Fd ? null : dd
        },
        SO = function(dd) {
          return wd ? null : BO(dd)
        },
        sO = function(dd) {
          return Ed ? null : BO(dd)
        },
        uO = function(dd) {
          Jd && dd.stopPropagation()
        },
        VO = (0, Wd.useMemo)((function() {
          return function() {
            var dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              Od = dd.refKey,
              md = void 0 === Od ? "ref" : Od,
              Wd = dd.role,
              Rd = dd.onKeyDown,
              Xd = dd.onFocus,
              Kd = dd.onBlur,
              hd = dd.onClick,
              vd = dd.onDragEnter,
              Qd = dd.onDragOver,
              td = dd.onDragLeave,
              od = dd.onDrop,
              Nd = tO(dd, mO);
            return vO(vO(QO({
              onKeyDown: SO(kd(Rd, EO)),
              onFocus: SO(kd(Xd, JO)),
              onBlur: SO(kd(Kd, UO)),
              onClick: BO(kd(hd, xO)),
              onDragEnter: sO(kd(vd, TO)),
              onDragOver: sO(kd(Qd, pO)),
              onDragLeave: sO(kd(td, YO)),
              onDrop: sO(kd(od, wO)),
              role: "string" === typeof Wd && "" !== Wd ? Wd : "presentation"
            }, md, nd), Fd || wd ? {} : {
              tabIndex: 0
            }), Nd)
          }
        }), [nd, EO, JO, UO, xO, TO, pO, YO, wO, wd, Ed, Fd]),
        iO = (0, Wd.useCallback)((function(dd) {
          dd.stopPropagation()
        }), []),
        AO = (0, Wd.useMemo)((function() {
          return function() {
            var dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              Od = dd.refKey,
              md = void 0 === Od ? "ref" : Od,
              Wd = dd.onChange,
              Fd = dd.onClick,
              Rd = tO(dd, WO);
            return vO(vO({}, QO({
              accept: Vd,
              multiple: hd,
              type: "file",
              style: {
                display: "none"
              },
              onChange: BO(kd(Wd, wO)),
              onClick: BO(kd(Fd, iO)),
              tabIndex: -1
            }, md, Ld)), Rd)
          }
        }), [Ld, md, hd, wO, Fd]);
      return vO(vO({}, zd), {}, {
        kS: dO && !Fd,
        getRootProps: VO,
        getInputProps: AO,
        rootRef: nd,
        inputRef: Ld,
        open: BO(aO)
      })
    }

    function yO(dd, Od) {
      switch (Od.type) {
        case "focus":
          return vO(vO({}, dd), {}, {
            kS: !0
          });
        case "blur":
          return vO(vO({}, dd), {}, {
            kS: !1
          });
        case "openDialog":
          return vO(vO({}, qO), {}, {
            isFileDialogActive: !0
          });
        case "closeDialog":
          return vO(vO({}, dd), {}, {
            isFileDialogActive: !1
          });
        case "setDraggedFiles":
          return vO(vO({}, dd), {}, {
            isDragActive: Od.isDragActive,
            isDragAccept: Od.isDragAccept,
            isDragReject: Od.isDragReject
          });
        case "setFiles":
          return vO(vO({}, dd), {}, {
            acceptedFiles: Od.acceptedFiles,
            fileRejections: Od.fileRejections
          });
        case "reset":
          return vO({}, qO);
        default:
          return dd
      }
    }

    function bO() {}
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);