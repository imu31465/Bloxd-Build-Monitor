export const id = 107;
export const ids = [107];
export const modules = {
  4931: (mm, Tm) => {
    Tm.e = function(mm, Tm) {
      if (mm && Tm) {
        var fm = Array.isArray(Tm) ? Tm : Tm.split(","),
          hm = mm.name || "",
          Am = (mm.type || "").toLowerCase(),
          am = Am.replace(/\/.*$/, "");
        return fm.some((function(mm) {
          var Tm = mm.trim().toLowerCase();
          return "." === Tm.charAt(0) ? hm.toLowerCase().endsWith(Tm) : Tm.endsWith("/*") ? am === Tm.replace(/\/.*$/, "") : Am === Tm
        }))
      }
      return !0
    }
  },
  4904: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => OT
    });
    var hm = fm(59),
      Am = fm(4909),
      am = fm.n(Am);

    function xm(mm, Tm, fm, hm) {
      return new(fm || (fm = Promise))((function(Am, am) {
        function xm(mm) {
          try {
            Dm(hm.next(mm))
          } catch (Tm) {
            am(Tm)
          }
        }

        function wm(mm) {
          try {
            Dm(hm.throw(mm))
          } catch (Tm) {
            am(Tm)
          }
        }

        function Dm(mm) {
          var Tm;
          mm.done ? Am(mm.value) : (Tm = mm.value, Tm instanceof fm ? Tm : new fm((function(mm) {
            mm(Tm)
          }))).then(xm, wm)
        }
        Dm((hm = hm.apply(mm, Tm || [])).next())
      }))
    }

    function wm(mm, Tm) {
      var fm, hm, Am, am, xm = {
        label: 0,
        sent: function() {
          if (1 & Am[0]) throw Am[1];
          return Am[1]
        },
        trys: [],
        ops: []
      };
      return am = {
        next: wm(0),
        throw: wm(1),
        return: wm(2)
      }, "function" === typeof Symbol && (am[Symbol.iterator] = function() {
        return this
      }), am;

      function wm(wm) {
        return function(Dm) {
          return function(wm) {
            if (fm) throw new TypeError("Generator is already executing.");
            for (; am && (am = 0, wm[0] && (xm = 0)), xm;) try {
              if (fm = 1, hm && (Am = 2 & wm[0] ? hm.return : wm[0] ? hm.throw || ((Am = hm.return) && Am.call(hm), 0) : hm.next) && !(Am = Am.call(hm, wm[1])).done) return Am;
              switch (hm = 0, Am && (wm = [2 & wm[0], Am.value]), wm[0]) {
                case 0:
                case 1:
                  Am = wm;
                  break;
                case 4:
                  return xm.label++, {
                    value: wm[1],
                    done: !1
                  };
                case 5:
                  xm.label++, hm = wm[1], wm = [0];
                  continue;
                case 7:
                  wm = xm.ops.pop(), xm.trys.pop();
                  continue;
                default:
                  if (!(Am = (Am = xm.trys).length > 0 && Am[Am.length - 1]) && (6 === wm[0] || 2 === wm[0])) {
                    xm = 0;
                    continue
                  }
                  if (3 === wm[0] && (!Am || wm[1] > Am[0] && wm[1] < Am[3])) {
                    xm.label = wm[1];
                    break
                  }
                  if (6 === wm[0] && xm.label < Am[1]) {
                    xm.label = Am[1], Am = wm;
                    break
                  }
                  if (Am && xm.label < Am[2]) {
                    xm.label = Am[2], xm.ops.push(wm);
                    break
                  }
                  Am[2] && xm.ops.pop(), xm.trys.pop();
                  continue
              }
              wm = Tm.call(mm, xm)
            } catch (Dm) {
              wm = [6, Dm], hm = 0
            } finally {
              fm = Am = 0
            }
            if (5 & wm[0]) throw wm[1];
            return {
              value: wm[0] ? wm[1] : void 0,
              done: !0
            }
          }([wm, Dm])
        }
      }
    }
    Object.create;

    function Dm(mm, Tm) {
      var fm = "function" === typeof Symbol && mm[Symbol.iterator];
      if (!fm) return mm;
      var hm, Am, am = fm.call(mm),
        xm = [];
      try {
        for (;
          (void 0 === Tm || Tm-- > 0) && !(hm = am.next()).done;) xm.push(hm.value)
      } catch (wm) {
        Am = {
          error: wm
        }
      } finally {
        try {
          hm && !hm.done && (fm = am.return) && fm.call(am)
        } finally {
          if (Am) throw Am.error
        }
      }
      return xm
    }

    function im(mm, Tm, fm) {
      if (fm || 2 === arguments.length)
        for (var hm, Am = 0, am = Tm.length; Am < am; Am++) !hm && Am in Tm || (hm || (hm = Array.prototype.slice.call(Tm, 0, Am)), hm[Am] = Tm[Am]);
      return mm.concat(hm || Array.prototype.slice.call(Tm))
    }
    Object.create;
    "function" === typeof SuppressedError && SuppressedError;
    var Rm = new Map([
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
      ["Hi", "application/vnd.ms-outlook"]
    ]);

    function pm(mm, Tm) {
      var fm = function(mm) {
        var Tm = mm.name;
        if (Tm && -1 !== Tm.lastIndexOf(".") && !mm.type) {
          var fm = Tm.split(".").pop().toLowerCase(),
            hm = Rm.get(fm);
          hm && Object.defineProperty(mm, "type", {
            value: hm,
            writable: !1,
            configurable: !1,
            enumerable: !0
          })
        }
        return mm
      }(mm);
      if ("string" !== typeof fm.path) {
        var hm = mm.webkitRelativePath;
        Object.defineProperty(fm, "path", {
          value: "string" === typeof Tm ? Tm : "string" === typeof hm && hm.length > 0 ? hm : mm.name,
          writable: !1,
          configurable: !1,
          enumerable: !0
        })
      }
      return fm
    }
    var Em = [".DS_Store", "Thumbs.db"];

    function om(mm) {
      return "object" === typeof mm && null !== mm
    }

    function Om(mm) {
      return Vm(mm.target.files).map((function(mm) {
        return pm(mm)
      }))
    }

    function Ym(mm) {
      return xm(this, void 0, void 0, (function() {
        return wm(this, (function(Tm) {
          switch (Tm.label) {
            case 0:
              return [4, Promise.all(mm.map((function(mm) {
                return mm.getFile()
              })))];
            case 1:
              return [2, Tm.sent().map((function(mm) {
                return pm(mm)
              }))]
          }
        }))
      }))
    }

    function qm(mm, Tm) {
      return xm(this, void 0, void 0, (function() {
        var fm;
        return wm(this, (function(hm) {
          switch (hm.label) {
            case 0:
              return mm.items ? (fm = Vm(mm.items).filter((function(mm) {
                return "file" === mm.kind
              })), "drop" !== Tm ? [2, fm] : [4, Promise.all(fm.map(Im))]) : [3, 2];
            case 1:
              return [2, jm(Km(hm.sent()))];
            case 2:
              return [2, jm(Vm(mm.files).map((function(mm) {
                return pm(mm)
              })))]
          }
        }))
      }))
    }

    function jm(mm) {
      return mm.filter((function(mm) {
        return -1 === Em.indexOf(mm.name)
      }))
    }

    function Vm(mm) {
      if (null === mm) return [];
      for (var Tm = [], fm = 0; fm < mm.length; fm++) {
        var hm = mm[fm];
        Tm.push(hm)
      }
      return Tm
    }

    function Im(mm) {
      if ("function" !== typeof mm.webkitGetAsEntry) return Qm(mm);
      var Tm = mm.webkitGetAsEntry();
      return Tm && Tm.isDirectory ? Jm(Tm) : Qm(mm)
    }

    function Km(mm) {
      return mm.reduce((function(mm, Tm) {
        return im(im([], Dm(mm), !1), Dm(Array.isArray(Tm) ? Km(Tm) : [Tm]), !1)
      }), [])
    }

    function Qm(mm) {
      var Tm = mm.getAsFile();
      if (!Tm) return Promise.reject("".concat(mm, " is not a File"));
      var fm = pm(Tm);
      return Promise.resolve(fm)
    }

    function nm(mm) {
      return xm(this, void 0, void 0, (function() {
        return wm(this, (function(Tm) {
          return [2, mm.isDirectory ? Jm(mm) : cm(mm)]
        }))
      }))
    }

    function Jm(mm) {
      var Tm = mm.createReader();
      return new Promise((function(mm, fm) {
        var hm = [];
        ! function Am() {
          var am = this;
          Tm.readEntries((function(Tm) {
            return xm(am, void 0, void 0, (function() {
              var am, xm, Dm;
              return wm(this, (function(wm) {
                switch (wm.label) {
                  case 0:
                    if (Tm.length) return [3, 5];
                    wm.label = 1;
                  case 1:
                    return wm.trys.push([1, 3, , 4]), [4, Promise.all(hm)];
                  case 2:
                    return am = wm.sent(), mm(am), [3, 4];
                  case 3:
                    return xm = wm.sent(), fm(xm), [3, 4];
                  case 4:
                    return [3, 6];
                  case 5:
                    Dm = Promise.all(Tm.map(nm)), hm.push(Dm), Am(), wm.label = 6;
                  case 6:
                    return [2]
                }
              }))
            }))
          }), (function(mm) {
            fm(mm)
          }))
        }()
      }))
    }

    function cm(mm) {
      return xm(this, void 0, void 0, (function() {
        return wm(this, (function(Tm) {
          return [2, new Promise((function(Tm, fm) {
            mm.file((function(fm) {
              var hm = pm(fm, mm.fullPath);
              Tm(hm)
            }), (function(mm) {
              fm(mm)
            }))
          }))]
        }))
      }))
    }
    var zm = fm(4931);

    function Zm(mm) {
      return function(mm) {
        if (Array.isArray(mm)) return Gm(mm)
      }(mm) || function(mm) {
        if ("undefined" !== typeof Symbol && null != mm[Symbol.iterator] || null != mm["@@iterator"]) return Array.from(mm)
      }(mm) || Nm(mm) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function km(mm, Tm) {
      var fm = Object.keys(mm);
      if (Object.getOwnPropertySymbols) {
        var hm = Object.getOwnPropertySymbols(mm);
        Tm && (hm = hm.filter((function(Tm) {
          return Object.getOwnPropertyDescriptor(mm, Tm).enumerable
        }))), fm.push.apply(fm, hm)
      }
      return fm
    }

    function bm(mm) {
      for (var Tm = 1; Tm < arguments.length; Tm++) {
        var fm = null != arguments[Tm] ? arguments[Tm] : {};
        Tm % 2 ? km(Object(fm), !0).forEach((function(Tm) {
          Sm(mm, Tm, fm[Tm])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(mm, Object.getOwnPropertyDescriptors(fm)) : km(Object(fm)).forEach((function(Tm) {
          Object.defineProperty(mm, Tm, Object.getOwnPropertyDescriptor(fm, Tm))
        }))
      }
      return mm
    }

    function Sm(mm, Tm, fm) {
      return Tm in mm ? Object.defineProperty(mm, Tm, {
        value: fm,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : mm[Tm] = fm, mm
    }

    function em(mm, Tm) {
      return function(mm) {
        if (Array.isArray(mm)) return mm
      }(mm) || function(mm, Tm) {
        var fm = null == mm ? null : "undefined" !== typeof Symbol && mm[Symbol.iterator] || mm["@@iterator"];
        if (null == fm) return;
        var hm, Am, am = [],
          xm = !0,
          wm = !1;
        try {
          for (fm = fm.call(mm); !(xm = (hm = fm.next()).done) && (am.push(hm.value), !Tm || am.length !== Tm); xm = !0);
        } catch (Dm) {
          wm = !0, Am = Dm
        } finally {
          try {
            xm || null == fm.return || fm.return()
          } finally {
            if (wm) throw Am
          }
        }
        return am
      }(mm, Tm) || Nm(mm, Tm) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Nm(mm, Tm) {
      if (mm) {
        if ("string" === typeof mm) return Gm(mm, Tm);
        var fm = Object.prototype.toString.call(mm).slice(8, -1);
        return "Object" === fm && mm.constructor && (fm = mm.constructor.name), "Map" === fm || "Set" === fm ? Array.from(mm) : "Arguments" === fm || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(fm) ? Gm(mm, Tm) : void 0
      }
    }

    function Gm(mm, Tm) {
      (null == Tm || Tm > mm.length) && (Tm = mm.length);
      for (var fm = 0, hm = new Array(Tm); fm < Tm; fm++) hm[fm] = mm[fm];
      return hm
    }
    var Xm = "file-invalid-type",
      Pm = "file-too-large",
      Hm = "file-too-small",
      ym = "too-many-files",
      Cm = function(mm) {
        mm = Array.isArray(mm) && 1 === mm.length ? mm[0] : mm;
        var Tm = Array.isArray(mm) ? "one of ".concat(mm.join(", ")) : mm;
        return {
          code: Xm,
          message: "File type must be ".concat(Tm)
        }
      },
      rm = function(mm) {
        return {
          code: Pm,
          message: "File is larger than ".concat(mm, " ").concat(1 === mm ? "byte" : "bytes")
        }
      },
      sm = function(mm) {
        return {
          code: Hm,
          message: "File is smaller than ".concat(mm, " ").concat(1 === mm ? "byte" : "bytes")
        }
      },
      lm = {
        code: ym,
        message: "Too many files"
      };

    function Mm(mm, Tm) {
      var fm = "application/x-moz-file" === mm.type || (0, zm.e)(mm, Tm);
      return [fm, fm ? null : Cm(Tm)]
    }

    function um(mm, Tm, fm) {
      if (Bm(mm.size))
        if (Bm(Tm) && Bm(fm)) {
          if (mm.size > fm) return [!1, rm(fm)];
          if (mm.size < Tm) return [!1, sm(Tm)]
        } else {
          if (Bm(Tm) && mm.size < Tm) return [!1, sm(Tm)];
          if (Bm(fm) && mm.size > fm) return [!1, rm(fm)]
        } return [!0, null]
    }

    function Bm(mm) {
      return void 0 !== mm && null !== mm
    }

    function Lm(mm) {
      return "function" === typeof mm.isPropagationStopped ? mm.isPropagationStopped() : "undefined" !== typeof mm.cancelBubble && mm.cancelBubble
    }

    function tm(mm) {
      return mm.dataTransfer ? Array.prototype.some.call(mm.dataTransfer.types, (function(mm) {
        return "Files" === mm || "application/x-moz-file" === mm
      })) : !!mm.target && !!mm.target.files
    }

    function Um(mm) {
      mm.preventDefault()
    }

    function dm() {
      for (var mm = arguments.length, Tm = new Array(mm), fm = 0; fm < mm; fm++) Tm[fm] = arguments[fm];
      return function(mm) {
        for (var fm = arguments.length, hm = new Array(fm > 1 ? fm - 1 : 0), Am = 1; Am < fm; Am++) hm[Am - 1] = arguments[Am];
        return Tm.some((function(Tm) {
          return !Lm(mm) && Tm && Tm.apply(void 0, [mm].concat(hm)), Lm(mm)
        }))
      }
    }

    function gm(mm) {
      return "audio/*" === mm || "video/*" === mm || "image/*" === mm || "text/*" === mm || /\w+\/[-+.\w]+/g.test(mm)
    }

    function Wm(mm) {
      return /^.*\.[\w]+$/.test(mm)
    }
    var Fm = ["children"],
      mT = ["open"],
      TT = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
      fT = ["refKey", "onChange", "onClick"];

    function hT(mm) {
      return function(mm) {
        if (Array.isArray(mm)) return xT(mm)
      }(mm) || function(mm) {
        if ("undefined" !== typeof Symbol && null != mm[Symbol.iterator] || null != mm["@@iterator"]) return Array.from(mm)
      }(mm) || aT(mm) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function AT(mm, Tm) {
      return function(mm) {
        if (Array.isArray(mm)) return mm
      }(mm) || function(mm, Tm) {
        var fm = null == mm ? null : "undefined" !== typeof Symbol && mm[Symbol.iterator] || mm["@@iterator"];
        if (null == fm) return;
        var hm, Am, am = [],
          xm = !0,
          wm = !1;
        try {
          for (fm = fm.call(mm); !(xm = (hm = fm.next()).done) && (am.push(hm.value), !Tm || am.length !== Tm); xm = !0);
        } catch (Dm) {
          wm = !0, Am = Dm
        } finally {
          try {
            xm || null == fm.return || fm.return()
          } finally {
            if (wm) throw Am
          }
        }
        return am
      }(mm, Tm) || aT(mm, Tm) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function aT(mm, Tm) {
      if (mm) {
        if ("string" === typeof mm) return xT(mm, Tm);
        var fm = Object.prototype.toString.call(mm).slice(8, -1);
        return "Object" === fm && mm.constructor && (fm = mm.constructor.name), "Map" === fm || "Set" === fm ? Array.from(mm) : "Arguments" === fm || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(fm) ? xT(mm, Tm) : void 0
      }
    }

    function xT(mm, Tm) {
      (null == Tm || Tm > mm.length) && (Tm = mm.length);
      for (var fm = 0, hm = new Array(Tm); fm < Tm; fm++) hm[fm] = mm[fm];
      return hm
    }

    function wT(mm, Tm) {
      var fm = Object.keys(mm);
      if (Object.getOwnPropertySymbols) {
        var hm = Object.getOwnPropertySymbols(mm);
        Tm && (hm = hm.filter((function(Tm) {
          return Object.getOwnPropertyDescriptor(mm, Tm).enumerable
        }))), fm.push.apply(fm, hm)
      }
      return fm
    }

    function DT(mm) {
      for (var Tm = 1; Tm < arguments.length; Tm++) {
        var fm = null != arguments[Tm] ? arguments[Tm] : {};
        Tm % 2 ? wT(Object(fm), !0).forEach((function(Tm) {
          iT(mm, Tm, fm[Tm])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(mm, Object.getOwnPropertyDescriptors(fm)) : wT(Object(fm)).forEach((function(Tm) {
          Object.defineProperty(mm, Tm, Object.getOwnPropertyDescriptor(fm, Tm))
        }))
      }
      return mm
    }

    function iT(mm, Tm, fm) {
      return Tm in mm ? Object.defineProperty(mm, Tm, {
        value: fm,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : mm[Tm] = fm, mm
    }

    function RT(mm, Tm) {
      if (null == mm) return {};
      var fm, hm, Am = function(mm, Tm) {
        if (null == mm) return {};
        var fm, hm, Am = {},
          am = Object.keys(mm);
        for (hm = 0; hm < am.length; hm++) fm = am[hm], Tm.indexOf(fm) >= 0 || (Am[fm] = mm[fm]);
        return Am
      }(mm, Tm);
      if (Object.getOwnPropertySymbols) {
        var am = Object.getOwnPropertySymbols(mm);
        for (hm = 0; hm < am.length; hm++) fm = am[hm], Tm.indexOf(fm) >= 0 || Object.prototype.propertyIsEnumerable.call(mm, fm) && (Am[fm] = mm[fm])
      }
      return Am
    }
    var pT = (0, hm.forwardRef)((function(mm, Tm) {
      var fm = mm.children,
        Am = OT(RT(mm, Fm)),
        am = Am.open,
        xm = RT(Am, mT);
      return (0, hm.useImperativeHandle)(Tm, (function() {
        return {
          open: am
        }
      }), [am]), hm.createElement(hm.Fragment, null, fm(DT(DT({}, xm), {}, {
        open: am
      })))
    }));
    pT.displayName = "Dropzone";
    var ET = {
      disabled: !1,
      getFilesFromEvent: function(mm) {
        return xm(this, void 0, void 0, (function() {
          return wm(this, (function(Tm) {
            return om(mm) && om(mm.dataTransfer) ? [2, qm(mm.dataTransfer, mm.type)] : function(mm) {
              return om(mm) && om(mm.target)
            }(mm) ? [2, Om(mm)] : Array.isArray(mm) && mm.every((function(mm) {
              return "getFile" in mm && "function" === typeof mm.getFile
            })) ? [2, Ym(mm)] : [2, []]
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
    pT.defaultProps = ET, pT.propTypes = {
      children: am().func,
      accept: am().objectOf(am().arrayOf(am().string)),
      multiple: am().bool,
      preventDropOnDocument: am().bool,
      noClick: am().bool,
      noKeyboard: am().bool,
      noDrag: am().bool,
      noDragEventsBubbling: am().bool,
      minSize: am().number,
      maxSize: am().number,
      maxFiles: am().number,
      disabled: am().bool,
      getFilesFromEvent: am().func,
      onFileDialogCancel: am().func,
      onFileDialogOpen: am().func,
      useFsAccessApi: am().bool,
      autoFocus: am().bool,
      onDragEnter: am().func,
      onDragLeave: am().func,
      onDragOver: am().func,
      onDrop: am().func,
      onDropAccepted: am().func,
      onDropRejected: am().func,
      onError: am().func,
      validator: am().func
    };
    var oT = {
      kN: !1,
      isFileDialogActive: !1,
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1,
      acceptedFiles: [],
      fileRejections: []
    };

    function OT() {
      var mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        Tm = DT(DT({}, ET), mm),
        fm = Tm.accept,
        Am = Tm.disabled,
        am = Tm.getFilesFromEvent,
        xm = Tm.maxSize,
        wm = Tm.minSize,
        Dm = Tm.multiple,
        im = Tm.maxFiles,
        Rm = Tm.onDragEnter,
        pm = Tm.onDragLeave,
        Em = Tm.onDragOver,
        om = Tm.onDrop,
        Om = Tm.onDropAccepted,
        Ym = Tm.onDropRejected,
        qm = Tm.onFileDialogCancel,
        jm = Tm.onFileDialogOpen,
        Vm = Tm.useFsAccessApi,
        Im = Tm.autoFocus,
        Km = Tm.preventDropOnDocument,
        Qm = Tm.noClick,
        nm = Tm.noKeyboard,
        Jm = Tm.noDrag,
        cm = Tm.noDragEventsBubbling,
        zm = Tm.onError,
        km = Tm.validator,
        Nm = (0, hm.useMemo)((function() {
          return function(mm) {
            if (Bm(mm)) return Object.entries(mm).reduce((function(mm, Tm) {
              var fm = em(Tm, 2),
                hm = fm[0],
                Am = fm[1];
              return [].concat(Zm(mm), [hm], Zm(Am))
            }), []).filter((function(mm) {
              return gm(mm) || Wm(mm)
            })).join(",")
          }(fm)
        }), [fm]),
        Gm = (0, hm.useMemo)((function() {
          return function(mm) {
            return Bm(mm) ? [{
              description: "Files",
              accept: Object.entries(mm).filter((function(mm) {
                var Tm = em(mm, 2),
                  fm = Tm[0],
                  hm = Tm[1],
                  Am = !0;
                return gm(fm) || (console.warn('Skipped "'.concat(fm, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), Am = !1), Array.isArray(hm) && hm.every(Wm) || (console.warn('Skipped "'.concat(fm, '" because an invalid file extension was provided.')), Am = !1), Am
              })).reduce((function(mm, Tm) {
                var fm = em(Tm, 2),
                  hm = fm[0],
                  Am = fm[1];
                return bm(bm({}, mm), {}, Sm({}, hm, Am))
              }), {})
            }] : mm
          }(fm)
        }), [fm]),
        Xm = (0, hm.useMemo)((function() {
          return "function" === typeof jm ? jm : qT
        }), [jm]),
        Pm = (0, hm.useMemo)((function() {
          return "function" === typeof qm ? qm : qT
        }), [qm]),
        Hm = (0, hm.useRef)(null),
        ym = (0, hm.useRef)(null),
        Cm = AT((0, hm.useReducer)(YT, oT), 2),
        rm = Cm[0],
        sm = Cm[1],
        Fm = rm.kN,
        mT = rm.isFileDialogActive,
        aT = (0, hm.useRef)("undefined" !== typeof window && window.isSecureContext && Vm && "showOpenFilePicker" in window),
        xT = function() {
          !aT.current && mT && setTimeout((function() {
            ym.current && (ym.current.files.length || (sm({
              type: "closeDialog"
            }), Pm()))
          }), 300)
        };
      (0, hm.useEffect)((function() {
        return window.addEventListener("focus", xT, !1),
          function() {
            window.removeEventListener("focus", xT, !1)
          }
      }), [ym, mT, Pm, aT]);
      var wT = (0, hm.useRef)([]),
        pT = function(mm) {
          Hm.current && Hm.current.contains(mm.target) || (mm.preventDefault(), wT.current = [])
        };
      (0, hm.useEffect)((function() {
        return Km && (document.addEventListener("dragover", Um, !1), document.addEventListener("drop", pT, !1)),
          function() {
            Km && (document.removeEventListener("dragover", Um), document.removeEventListener("drop", pT))
          }
      }), [Hm, Km]), (0, hm.useEffect)((function() {
        return !Am && Im && Hm.current && Hm.current.focus(),
          function() {}
      }), [Hm, Im, Am]);
      var OT = (0, hm.useCallback)((function(mm) {
          zm ? zm(mm) : console.error(mm)
        }), [zm]),
        jT = (0, hm.useCallback)((function(mm) {
          mm.preventDefault(), mm.persist(), eT(mm), wT.current = [].concat(hT(wT.current), [mm.target]), tm(mm) && Promise.resolve(am(mm)).then((function(Tm) {
            if (!Lm(mm) || cm) {
              var fm = Tm.length,
                hm = fm > 0 && function(mm) {
                  var Tm = mm.files,
                    fm = mm.accept,
                    hm = mm.minSize,
                    Am = mm.maxSize,
                    am = mm.multiple,
                    xm = mm.maxFiles,
                    wm = mm.validator;
                  return !(!am && Tm.length > 1 || am && xm >= 1 && Tm.length > xm) && Tm.every((function(mm) {
                    var Tm = em(Mm(mm, fm), 1)[0],
                      am = em(um(mm, hm, Am), 1)[0],
                      xm = wm ? wm(mm) : null;
                    return Tm && am && !xm
                  }))
                }({
                  files: Tm,
                  accept: Nm,
                  minSize: wm,
                  maxSize: xm,
                  multiple: Dm,
                  maxFiles: im,
                  validator: km
                });
              sm({
                isDragAccept: hm,
                isDragReject: fm > 0 && !hm,
                isDragActive: !0,
                type: "setDraggedFiles"
              }), Rm && Rm(mm)
            }
          })).catch((function(mm) {
            return OT(mm)
          }))
        }), [am, Rm, OT, cm, Nm, wm, xm, Dm, im, km]),
        VT = (0, hm.useCallback)((function(mm) {
          mm.preventDefault(), mm.persist(), eT(mm);
          var Tm = tm(mm);
          if (Tm && mm.dataTransfer) try {
            mm.dataTransfer.dropEffect = "copy"
          } catch (fm) {}
          return Tm && Em && Em(mm), !1
        }), [Em, cm]),
        IT = (0, hm.useCallback)((function(mm) {
          mm.preventDefault(), mm.persist(), eT(mm);
          var Tm = wT.current.filter((function(mm) {
              return Hm.current && Hm.current.contains(mm)
            })),
            fm = Tm.indexOf(mm.target); - 1 !== fm && Tm.splice(fm, 1), wT.current = Tm, Tm.length > 0 || (sm({
            type: "setDraggedFiles",
            isDragActive: !1,
            isDragAccept: !1,
            isDragReject: !1
          }), tm(mm) && pm && pm(mm))
        }), [Hm, pm, cm]),
        KT = (0, hm.useCallback)((function(mm, Tm) {
          var fm = [],
            hm = [];
          mm.forEach((function(mm) {
            var Tm = AT(Mm(mm, Nm), 2),
              Am = Tm[0],
              am = Tm[1],
              Dm = AT(um(mm, wm, xm), 2),
              im = Dm[0],
              Rm = Dm[1],
              pm = km ? km(mm) : null;
            if (Am && im && !pm) fm.push(mm);
            else {
              var Em = [am, Rm];
              pm && (Em = Em.concat(pm)), hm.push({
                file: mm,
                errors: Em.filter((function(mm) {
                  return mm
                }))
              })
            }
          })), (!Dm && fm.length > 1 || Dm && im >= 1 && fm.length > im) && (fm.forEach((function(mm) {
            hm.push({
              file: mm,
              errors: [lm]
            })
          })), fm.splice(0)), sm({
            acceptedFiles: fm,
            fileRejections: hm,
            type: "setFiles"
          }), om && om(fm, hm, Tm), hm.length > 0 && Ym && Ym(hm, Tm), fm.length > 0 && Om && Om(fm, Tm)
        }), [sm, Dm, Nm, wm, xm, im, om, Om, Ym, km]),
        QT = (0, hm.useCallback)((function(mm) {
          mm.preventDefault(), mm.persist(), eT(mm), wT.current = [], tm(mm) && Promise.resolve(am(mm)).then((function(Tm) {
            Lm(mm) && !cm || KT(Tm, mm)
          })).catch((function(mm) {
            return OT(mm)
          })), sm({
            type: "reset"
          })
        }), [am, KT, OT, cm]),
        nT = (0, hm.useCallback)((function() {
          if (aT.current) {
            sm({
              type: "openDialog"
            }), Xm();
            var mm = {
              multiple: Dm,
              types: Gm
            };
            window.showOpenFilePicker(mm).then((function(mm) {
              return am(mm)
            })).then((function(mm) {
              KT(mm, null), sm({
                type: "closeDialog"
              })
            })).catch((function(mm) {
              var Tm;
              (Tm = mm) instanceof DOMException && ("AbortError" === Tm.name || Tm.code === Tm.ABORT_ERR) ? (Pm(mm), sm({
                type: "closeDialog"
              })) : ! function(mm) {
                return mm instanceof DOMException && ("SecurityError" === mm.name || mm.code === mm.SECURITY_ERR)
              }(mm) ? OT(mm) : (aT.current = !1, ym.current ? (ym.current.value = null, ym.current.click()) : OT(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))
            }))
          } else ym.current && (sm({
            type: "openDialog"
          }), Xm(), ym.current.value = null, ym.current.click())
        }), [sm, Xm, Pm, Vm, KT, OT, Gm, Dm]),
        JT = (0, hm.useCallback)((function(mm) {
          Hm.current && Hm.current.isEqualNode(mm.target) && (" " !== mm.key && "Enter" !== mm.key && 32 !== mm.keyCode && 13 !== mm.keyCode || (mm.preventDefault(), nT()))
        }), [Hm, nT]),
        cT = (0, hm.useCallback)((function() {
          sm({
            type: "focus"
          })
        }), []),
        zT = (0, hm.useCallback)((function() {
          sm({
            type: "blur"
          })
        }), []),
        ZT = (0, hm.useCallback)((function() {
          Qm || (! function() {
            var mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
            return function(mm) {
              return -1 !== mm.indexOf("MSIE") || -1 !== mm.indexOf("Trident/")
            }(mm) || function(mm) {
              return -1 !== mm.indexOf("Edge/")
            }(mm)
          }() ? nT() : setTimeout(nT, 0))
        }), [Qm, nT]),
        kT = function(mm) {
          return Am ? null : mm
        },
        bT = function(mm) {
          return nm ? null : kT(mm)
        },
        ST = function(mm) {
          return Jm ? null : kT(mm)
        },
        eT = function(mm) {
          cm && mm.stopPropagation()
        },
        NT = (0, hm.useMemo)((function() {
          return function() {
            var mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              Tm = mm.refKey,
              fm = void 0 === Tm ? "ref" : Tm,
              hm = mm.role,
              am = mm.onKeyDown,
              xm = mm.onFocus,
              wm = mm.onBlur,
              Dm = mm.onClick,
              im = mm.onDragEnter,
              Rm = mm.onDragOver,
              pm = mm.onDragLeave,
              Em = mm.onDrop,
              om = RT(mm, TT);
            return DT(DT(iT({
              onKeyDown: bT(dm(am, JT)),
              onFocus: bT(dm(xm, cT)),
              onBlur: bT(dm(wm, zT)),
              onClick: kT(dm(Dm, ZT)),
              onDragEnter: ST(dm(im, jT)),
              onDragOver: ST(dm(Rm, VT)),
              onDragLeave: ST(dm(pm, IT)),
              onDrop: ST(dm(Em, QT)),
              role: "string" === typeof hm && "" !== hm ? hm : "presentation"
            }, fm, Hm), Am || nm ? {} : {
              tabIndex: 0
            }), om)
          }
        }), [Hm, JT, cT, zT, ZT, jT, VT, IT, QT, nm, Jm, Am]),
        GT = (0, hm.useCallback)((function(mm) {
          mm.stopPropagation()
        }), []),
        XT = (0, hm.useMemo)((function() {
          return function() {
            var mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              Tm = mm.refKey,
              fm = void 0 === Tm ? "ref" : Tm,
              hm = mm.onChange,
              Am = mm.onClick,
              am = RT(mm, fT);
            return DT(DT({}, iT({
              accept: Nm,
              multiple: Dm,
              type: "file",
              style: {
                display: "none"
              },
              onChange: kT(dm(hm, QT)),
              onClick: kT(dm(Am, GT)),
              tabIndex: -1
            }, fm, ym)), am)
          }
        }), [ym, fm, Dm, QT, Am]);
      return DT(DT({}, rm), {}, {
        kN: Fm && !Am,
        getRootProps: NT,
        getInputProps: XT,
        rootRef: Hm,
        inputRef: ym,
        open: kT(nT)
      })
    }

    function YT(mm, Tm) {
      switch (Tm.type) {
        case "focus":
          return DT(DT({}, mm), {}, {
            kN: !0
          });
        case "blur":
          return DT(DT({}, mm), {}, {
            kN: !1
          });
        case "openDialog":
          return DT(DT({}, oT), {}, {
            isFileDialogActive: !0
          });
        case "closeDialog":
          return DT(DT({}, mm), {}, {
            isFileDialogActive: !1
          });
        case "setDraggedFiles":
          return DT(DT({}, mm), {}, {
            isDragActive: Tm.isDragActive,
            isDragAccept: Tm.isDragAccept,
            isDragReject: Tm.isDragReject
          });
        case "setFiles":
          return DT(DT({}, mm), {}, {
            acceptedFiles: Tm.acceptedFiles,
            fileRejections: Tm.fileRejections
          });
        case "reset":
          return DT({}, oT);
        default:
          return mm
      }
    }

    function qT() {}
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);