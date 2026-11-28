export const id = 128;
export const ids = [128];
export const modules = {
  6032: (bb, wb) => {
    wb.e = function(bb, wb) {
      if (bb && wb) {
        var Mb = Array.isArray(wb) ? wb : wb.split(","),
          eb = bb.name || "",
          Hb = (bb.type || "").toLowerCase(),
          pb = Hb.replace(/\/.*$/, "");
        return Mb.some((function(bb) {
          var wb = bb.trim().toLowerCase();
          return "." === wb.charAt(0) ? eb.toLowerCase().endsWith(wb) : wb.endsWith("/*") ? pb === wb.replace(/\/.*$/, "") : Hb === wb
        }))
      }
      return !0
    }
  },
  6014: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => tw
    });
    var eb = Mb(64),
      Hb = Mb(6022),
      pb = Mb.n(Hb);

    function Vb(bb, wb, Mb, eb) {
      return new(Mb || (Mb = Promise))((function(Hb, pb) {
        function Vb(bb) {
          try {
            lb(eb.next(bb))
          } catch (wb) {
            pb(wb)
          }
        }

        function gb(bb) {
          try {
            lb(eb.throw(bb))
          } catch (wb) {
            pb(wb)
          }
        }

        function lb(bb) {
          var wb;
          bb.done ? Hb(bb.value) : (wb = bb.value, wb instanceof Mb ? wb : new Mb((function(bb) {
            bb(wb)
          }))).then(Vb, gb)
        }
        lb((eb = eb.apply(bb, wb || [])).next())
      }))
    }

    function gb(bb, wb) {
      var Mb, eb, Hb, pb, Vb = {
        label: 0,
        sent: function() {
          if (1 & Hb[0]) throw Hb[1];
          return Hb[1]
        },
        trys: [],
        ops: []
      };
      return pb = {
        next: gb(0),
        throw: gb(1),
        return: gb(2)
      }, "function" === typeof Symbol && (pb[Symbol.iterator] = function() {
        return this
      }), pb;

      function gb(gb) {
        return function(lb) {
          return function(gb) {
            if (Mb) throw new TypeError("Generator is already executing.");
            for (; pb && (pb = 0, gb[0] && (Vb = 0)), Vb;) try {
              if (Mb = 1, eb && (Hb = 2 & gb[0] ? eb.return : gb[0] ? eb.throw || ((Hb = eb.return) && Hb.call(eb), 0) : eb.next) && !(Hb = Hb.call(eb, gb[1])).done) return Hb;
              switch (eb = 0, Hb && (gb = [2 & gb[0], Hb.value]), gb[0]) {
                case 0:
                case 1:
                  Hb = gb;
                  break;
                case 4:
                  return Vb.label++, {
                    value: gb[1],
                    done: !1
                  };
                case 5:
                  Vb.label++, eb = gb[1], gb = [0];
                  continue;
                case 7:
                  gb = Vb.ops.pop(), Vb.trys.pop();
                  continue;
                default:
                  if (!(Hb = (Hb = Vb.trys).length > 0 && Hb[Hb.length - 1]) && (6 === gb[0] || 2 === gb[0])) {
                    Vb = 0;
                    continue
                  }
                  if (3 === gb[0] && (!Hb || gb[1] > Hb[0] && gb[1] < Hb[3])) {
                    Vb.label = gb[1];
                    break
                  }
                  if (6 === gb[0] && Vb.label < Hb[1]) {
                    Vb.label = Hb[1], Hb = gb;
                    break
                  }
                  if (Hb && Vb.label < Hb[2]) {
                    Vb.label = Hb[2], Vb.ops.push(gb);
                    break
                  }
                  Hb[2] && Vb.ops.pop(), Vb.trys.pop();
                  continue
              }
              gb = wb.call(bb, Vb)
            } catch (lb) {
              gb = [6, lb], eb = 0
            } finally {
              Mb = Hb = 0
            }
            if (5 & gb[0]) throw gb[1];
            return {
              value: gb[0] ? gb[1] : void 0,
              done: !0
            }
          }([gb, lb])
        }
      }
    }
    Object.create;

    function lb(bb, wb) {
      var Mb = "function" === typeof Symbol && bb[Symbol.iterator];
      if (!Mb) return bb;
      var eb, Hb, pb = Mb.call(bb),
        Vb = [];
      try {
        for (;
          (void 0 === wb || wb-- > 0) && !(eb = pb.next()).done;) Vb.push(eb.value)
      } catch (gb) {
        Hb = {
          error: gb
        }
      } finally {
        try {
          eb && !eb.done && (Mb = pb.return) && Mb.call(pb)
        } finally {
          if (Hb) throw Hb.error
        }
      }
      return Vb
    }

    function Lb(bb, wb, Mb) {
      if (Mb || 2 === arguments.length)
        for (var eb, Hb = 0, pb = wb.length; Hb < pb; Hb++) !eb && Hb in wb || (eb || (eb = Array.prototype.slice.call(wb, 0, Hb)), eb[Hb] = wb[Hb]);
      return bb.concat(eb || Array.prototype.slice.call(wb))
    }
    Object.create;
    "function" === typeof SuppressedError && SuppressedError;
    var Ib = new Map([
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
      ["tV", "application/vnd.ms-outlook"]
    ]);

    function Ob(bb, wb) {
      var Mb = function(bb) {
        var wb = bb.name;
        if (wb && -1 !== wb.lastIndexOf(".") && !bb.type) {
          var Mb = wb.split(".").pop().toLowerCase(),
            eb = Ib.get(Mb);
          eb && Object.defineProperty(bb, "type", {
            value: eb,
            writable: !1,
            configurable: !1,
            enumerable: !0
          })
        }
        return bb
      }(bb);
      if ("string" !== typeof Mb.path) {
        var eb = bb.webkitRelativePath;
        Object.defineProperty(Mb, "path", {
          value: "string" === typeof wb ? wb : "string" === typeof eb && eb.length > 0 ? eb : bb.name,
          writable: !1,
          configurable: !1,
          enumerable: !0
        })
      }
      return Mb
    }
    var Ub = [".DS_Store", "Thumbs.db"];

    function tb(bb) {
      return "object" === typeof bb && null !== bb
    }

    function Cb(bb) {
      return sb(bb.target.files).map((function(bb) {
        return Ob(bb)
      }))
    }

    function Eb(bb) {
      return Vb(this, void 0, void 0, (function() {
        return gb(this, (function(wb) {
          switch (wb.label) {
            case 0:
              return [4, Promise.all(bb.map((function(bb) {
                return bb.getFile()
              })))];
            case 1:
              return [2, wb.sent().map((function(bb) {
                return Ob(bb)
              }))]
          }
        }))
      }))
    }

    function Fb(bb, wb) {
      return Vb(this, void 0, void 0, (function() {
        var Mb;
        return gb(this, (function(eb) {
          switch (eb.label) {
            case 0:
              return bb.items ? (Mb = sb(bb.items).filter((function(bb) {
                return "file" === bb.kind
              })), "drop" !== wb ? [2, Mb] : [4, Promise.all(Mb.map(mb))]) : [3, 2];
            case 1:
              return [2, Bb(hb(eb.sent()))];
            case 2:
              return [2, Bb(sb(bb.files).map((function(bb) {
                return Ob(bb)
              })))]
          }
        }))
      }))
    }

    function Bb(bb) {
      return bb.filter((function(bb) {
        return -1 === Ub.indexOf(bb.name)
      }))
    }

    function sb(bb) {
      if (null === bb) return [];
      for (var wb = [], Mb = 0; Mb < bb.length; Mb++) {
        var eb = bb[Mb];
        wb.push(eb)
      }
      return wb
    }

    function mb(bb) {
      if ("function" !== typeof bb.webkitGetAsEntry) return zb(bb);
      var wb = bb.webkitGetAsEntry();
      return wb && wb.isDirectory ? xb(wb) : zb(bb)
    }

    function hb(bb) {
      return bb.reduce((function(bb, wb) {
        return Lb(Lb([], lb(bb), !1), lb(Array.isArray(wb) ? hb(wb) : [wb]), !1)
      }), [])
    }

    function zb(bb) {
      var wb = bb.getAsFile();
      if (!wb) return Promise.reject("".concat(bb, " is not a File"));
      var Mb = Ob(wb);
      return Promise.resolve(Mb)
    }

    function Xb(bb) {
      return Vb(this, void 0, void 0, (function() {
        return gb(this, (function(wb) {
          return [2, bb.isDirectory ? xb(bb) : jb(bb)]
        }))
      }))
    }

    function xb(bb) {
      var wb = bb.createReader();
      return new Promise((function(bb, Mb) {
        var eb = [];
        ! function Hb() {
          var pb = this;
          wb.readEntries((function(wb) {
            return Vb(pb, void 0, void 0, (function() {
              var pb, Vb, lb;
              return gb(this, (function(gb) {
                switch (gb.label) {
                  case 0:
                    if (wb.length) return [3, 5];
                    gb.label = 1;
                  case 1:
                    return gb.trys.push([1, 3, , 4]), [4, Promise.all(eb)];
                  case 2:
                    return pb = gb.sent(), bb(pb), [3, 4];
                  case 3:
                    return Vb = gb.sent(), Mb(Vb), [3, 4];
                  case 4:
                    return [3, 6];
                  case 5:
                    lb = Promise.all(wb.map(Xb)), eb.push(lb), Hb(), gb.label = 6;
                  case 6:
                    return [2]
                }
              }))
            }))
          }), (function(bb) {
            Mb(bb)
          }))
        }()
      }))
    }

    function jb(bb) {
      return Vb(this, void 0, void 0, (function() {
        return gb(this, (function(wb) {
          return [2, new Promise((function(wb, Mb) {
            bb.file((function(Mb) {
              var eb = Ob(Mb, bb.fullPath);
              wb(eb)
            }), (function(bb) {
              Mb(bb)
            }))
          }))]
        }))
      }))
    }
    var Kb = Mb(6032);

    function rb(bb) {
      return function(bb) {
        if (Array.isArray(bb)) return fb(bb)
      }(bb) || function(bb) {
        if ("undefined" !== typeof Symbol && null != bb[Symbol.iterator] || null != bb["@@iterator"]) return Array.from(bb)
      }(bb) || Zb(bb) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Rb(bb, wb) {
      var Mb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var eb = Object.getOwnPropertySymbols(bb);
        wb && (eb = eb.filter((function(wb) {
          return Object.getOwnPropertyDescriptor(bb, wb).enumerable
        }))), Mb.push.apply(Mb, eb)
      }
      return Mb
    }

    function Db(bb) {
      for (var wb = 1; wb < arguments.length; wb++) {
        var Mb = null != arguments[wb] ? arguments[wb] : {};
        wb % 2 ? Rb(Object(Mb), !0).forEach((function(wb) {
          cb(bb, wb, Mb[wb])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(Mb)) : Rb(Object(Mb)).forEach((function(wb) {
          Object.defineProperty(bb, wb, Object.getOwnPropertyDescriptor(Mb, wb))
        }))
      }
      return bb
    }

    function cb(bb, wb, Mb) {
      return wb in bb ? Object.defineProperty(bb, wb, {
        value: Mb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[wb] = Mb, bb
    }

    function Yb(bb, wb) {
      return function(bb) {
        if (Array.isArray(bb)) return bb
      }(bb) || function(bb, wb) {
        var Mb = null == bb ? null : "undefined" !== typeof Symbol && bb[Symbol.iterator] || bb["@@iterator"];
        if (null == Mb) return;
        var eb, Hb, pb = [],
          Vb = !0,
          gb = !1;
        try {
          for (Mb = Mb.call(bb); !(Vb = (eb = Mb.next()).done) && (pb.push(eb.value), !wb || pb.length !== wb); Vb = !0);
        } catch (lb) {
          gb = !0, Hb = lb
        } finally {
          try {
            Vb || null == Mb.return || Mb.return()
          } finally {
            if (gb) throw Hb
          }
        }
        return pb
      }(bb, wb) || Zb(bb, wb) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Zb(bb, wb) {
      if (bb) {
        if ("string" === typeof bb) return fb(bb, wb);
        var Mb = Object.prototype.toString.call(bb).slice(8, -1);
        return "Object" === Mb && bb.constructor && (Mb = bb.constructor.name), "Map" === Mb || "Set" === Mb ? Array.from(bb) : "Arguments" === Mb || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Mb) ? fb(bb, wb) : void 0
      }
    }

    function fb(bb, wb) {
      (null == wb || wb > bb.length) && (wb = bb.length);
      for (var Mb = 0, eb = new Array(wb); Mb < wb; Mb++) eb[Mb] = bb[Mb];
      return eb
    }
    var Ab = "file-invalid-type",
      Wb = "file-too-large",
      Jb = "file-too-small",
      Sb = "too-many-files",
      Nb = function(bb) {
        bb = Array.isArray(bb) && 1 === bb.length ? bb[0] : bb;
        var wb = Array.isArray(bb) ? "one of ".concat(bb.join(", ")) : bb;
        return {
          code: Ab,
          message: "File type must be ".concat(wb)
        }
      },
      vb = function(bb) {
        return {
          code: Wb,
          message: "File is larger than ".concat(bb, " ").concat(1 === bb ? "byte" : "bytes")
        }
      },
      Qb = function(bb) {
        return {
          code: Jb,
          message: "File is smaller than ".concat(bb, " ").concat(1 === bb ? "byte" : "bytes")
        }
      },
      Gb = {
        code: Sb,
        message: "Too many files"
      };

    function qb(bb, wb) {
      var Mb = "application/x-moz-file" === bb.type || (0, Kb.e)(bb, wb);
      return [Mb, Mb ? null : Nb(wb)]
    }

    function ab(bb, wb, Mb) {
      if (ib(bb.size))
        if (ib(wb) && ib(Mb)) {
          if (bb.size > Mb) return [!1, vb(Mb)];
          if (bb.size < wb) return [!1, Qb(wb)]
        } else {
          if (ib(wb) && bb.size < wb) return [!1, Qb(wb)];
          if (ib(Mb) && bb.size > Mb) return [!1, vb(Mb)]
        } return [!0, null]
    }

    function ib(bb) {
      return void 0 !== bb && null !== bb
    }

    function ub(bb) {
      return "function" === typeof bb.isPropagationStopped ? bb.isPropagationStopped() : "undefined" !== typeof bb.cancelBubble && bb.cancelBubble
    }

    function db(bb) {
      return bb.dataTransfer ? Array.prototype.some.call(bb.dataTransfer.types, (function(bb) {
        return "Files" === bb || "application/x-moz-file" === bb
      })) : !!bb.target && !!bb.target.files
    }

    function Pb(bb) {
      bb.preventDefault()
    }

    function nb() {
      for (var bb = arguments.length, wb = new Array(bb), Mb = 0; Mb < bb; Mb++) wb[Mb] = arguments[Mb];
      return function(bb) {
        for (var Mb = arguments.length, eb = new Array(Mb > 1 ? Mb - 1 : 0), Hb = 1; Hb < Mb; Hb++) eb[Hb - 1] = arguments[Hb];
        return wb.some((function(wb) {
          return !ub(bb) && wb && wb.apply(void 0, [bb].concat(eb)), ub(bb)
        }))
      }
    }

    function yb(bb) {
      return "audio/*" === bb || "video/*" === bb || "image/*" === bb || "text/*" === bb || /\w+\/[-+.\w]+/g.test(bb)
    }

    function ob(bb) {
      return /^.*\.[\w]+$/.test(bb)
    }
    var Tb = ["children"],
      kb = ["open"],
      bw = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
      ww = ["refKey", "onChange", "onClick"];

    function Mw(bb) {
      return function(bb) {
        if (Array.isArray(bb)) return pw(bb)
      }(bb) || function(bb) {
        if ("undefined" !== typeof Symbol && null != bb[Symbol.iterator] || null != bb["@@iterator"]) return Array.from(bb)
      }(bb) || Hw(bb) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function ew(bb, wb) {
      return function(bb) {
        if (Array.isArray(bb)) return bb
      }(bb) || function(bb, wb) {
        var Mb = null == bb ? null : "undefined" !== typeof Symbol && bb[Symbol.iterator] || bb["@@iterator"];
        if (null == Mb) return;
        var eb, Hb, pb = [],
          Vb = !0,
          gb = !1;
        try {
          for (Mb = Mb.call(bb); !(Vb = (eb = Mb.next()).done) && (pb.push(eb.value), !wb || pb.length !== wb); Vb = !0);
        } catch (lb) {
          gb = !0, Hb = lb
        } finally {
          try {
            Vb || null == Mb.return || Mb.return()
          } finally {
            if (gb) throw Hb
          }
        }
        return pb
      }(bb, wb) || Hw(bb, wb) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Hw(bb, wb) {
      if (bb) {
        if ("string" === typeof bb) return pw(bb, wb);
        var Mb = Object.prototype.toString.call(bb).slice(8, -1);
        return "Object" === Mb && bb.constructor && (Mb = bb.constructor.name), "Map" === Mb || "Set" === Mb ? Array.from(bb) : "Arguments" === Mb || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Mb) ? pw(bb, wb) : void 0
      }
    }

    function pw(bb, wb) {
      (null == wb || wb > bb.length) && (wb = bb.length);
      for (var Mb = 0, eb = new Array(wb); Mb < wb; Mb++) eb[Mb] = bb[Mb];
      return eb
    }

    function Vw(bb, wb) {
      var Mb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var eb = Object.getOwnPropertySymbols(bb);
        wb && (eb = eb.filter((function(wb) {
          return Object.getOwnPropertyDescriptor(bb, wb).enumerable
        }))), Mb.push.apply(Mb, eb)
      }
      return Mb
    }

    function gw(bb) {
      for (var wb = 1; wb < arguments.length; wb++) {
        var Mb = null != arguments[wb] ? arguments[wb] : {};
        wb % 2 ? Vw(Object(Mb), !0).forEach((function(wb) {
          lw(bb, wb, Mb[wb])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(Mb)) : Vw(Object(Mb)).forEach((function(wb) {
          Object.defineProperty(bb, wb, Object.getOwnPropertyDescriptor(Mb, wb))
        }))
      }
      return bb
    }

    function lw(bb, wb, Mb) {
      return wb in bb ? Object.defineProperty(bb, wb, {
        value: Mb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[wb] = Mb, bb
    }

    function Lw(bb, wb) {
      if (null == bb) return {};
      var Mb, eb, Hb = function(bb, wb) {
        if (null == bb) return {};
        var Mb, eb, Hb = {},
          pb = Object.keys(bb);
        for (eb = 0; eb < pb.length; eb++) Mb = pb[eb], wb.indexOf(Mb) >= 0 || (Hb[Mb] = bb[Mb]);
        return Hb
      }(bb, wb);
      if (Object.getOwnPropertySymbols) {
        var pb = Object.getOwnPropertySymbols(bb);
        for (eb = 0; eb < pb.length; eb++) Mb = pb[eb], wb.indexOf(Mb) >= 0 || Object.prototype.propertyIsEnumerable.call(bb, Mb) && (Hb[Mb] = bb[Mb])
      }
      return Hb
    }
    var Iw = (0, eb.forwardRef)((function(bb, wb) {
      var Mb = bb.children,
        Hb = tw(Lw(bb, Tb)),
        pb = Hb.open,
        Vb = Lw(Hb, kb);
      return (0, eb.useImperativeHandle)(wb, (function() {
        return {
          open: pb
        }
      }), [pb]), eb.createElement(eb.Fragment, null, Mb(gw(gw({}, Vb), {}, {
        open: pb
      })))
    }));
    Iw.displayName = "Dropzone";
    var Ow = {
      disabled: !1,
      getFilesFromEvent: function(bb) {
        return Vb(this, void 0, void 0, (function() {
          return gb(this, (function(wb) {
            return tb(bb) && tb(bb.dataTransfer) ? [2, Fb(bb.dataTransfer, bb.type)] : function(bb) {
              return tb(bb) && tb(bb.target)
            }(bb) ? [2, Cb(bb)] : Array.isArray(bb) && bb.every((function(bb) {
              return "getFile" in bb && "function" === typeof bb.getFile
            })) ? [2, Eb(bb)] : [2, []]
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
    Iw.defaultProps = Ow, Iw.propTypes = {
      children: pb().func,
      accept: pb().objectOf(pb().arrayOf(pb().string)),
      multiple: pb().bool,
      preventDropOnDocument: pb().bool,
      noClick: pb().bool,
      noKeyboard: pb().bool,
      noDrag: pb().bool,
      noDragEventsBubbling: pb().bool,
      minSize: pb().number,
      maxSize: pb().number,
      maxFiles: pb().number,
      disabled: pb().bool,
      getFilesFromEvent: pb().func,
      onFileDialogCancel: pb().func,
      onFileDialogOpen: pb().func,
      useFsAccessApi: pb().bool,
      autoFocus: pb().bool,
      onDragEnter: pb().func,
      onDragLeave: pb().func,
      onDragOver: pb().func,
      onDrop: pb().func,
      onDropAccepted: pb().func,
      onDropRejected: pb().func,
      onError: pb().func,
      validator: pb().func
    };
    var Uw = {
      rW: !1,
      isFileDialogActive: !1,
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1,
      acceptedFiles: [],
      fileRejections: []
    };

    function tw() {
      var bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        wb = gw(gw({}, Ow), bb),
        Mb = wb.accept,
        Hb = wb.disabled,
        pb = wb.getFilesFromEvent,
        Vb = wb.maxSize,
        gb = wb.minSize,
        lb = wb.multiple,
        Lb = wb.maxFiles,
        Ib = wb.onDragEnter,
        Ob = wb.onDragLeave,
        Ub = wb.onDragOver,
        tb = wb.onDrop,
        Cb = wb.onDropAccepted,
        Eb = wb.onDropRejected,
        Fb = wb.onFileDialogCancel,
        Bb = wb.onFileDialogOpen,
        sb = wb.useFsAccessApi,
        mb = wb.autoFocus,
        hb = wb.preventDropOnDocument,
        zb = wb.noClick,
        Xb = wb.noKeyboard,
        xb = wb.noDrag,
        jb = wb.noDragEventsBubbling,
        Kb = wb.onError,
        Rb = wb.validator,
        Zb = (0, eb.useMemo)((function() {
          return function(bb) {
            if (ib(bb)) return Object.entries(bb).reduce((function(bb, wb) {
              var Mb = Yb(wb, 2),
                eb = Mb[0],
                Hb = Mb[1];
              return [].concat(rb(bb), [eb], rb(Hb))
            }), []).filter((function(bb) {
              return yb(bb) || ob(bb)
            })).join(",")
          }(Mb)
        }), [Mb]),
        fb = (0, eb.useMemo)((function() {
          return function(bb) {
            return ib(bb) ? [{
              description: "Files",
              accept: Object.entries(bb).filter((function(bb) {
                var wb = Yb(bb, 2),
                  Mb = wb[0],
                  eb = wb[1],
                  Hb = !0;
                return yb(Mb) || (console.warn('Skipped "'.concat(Mb, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), Hb = !1), Array.isArray(eb) && eb.every(ob) || (console.warn('Skipped "'.concat(Mb, '" because an invalid file extension was provided.')), Hb = !1), Hb
              })).reduce((function(bb, wb) {
                var Mb = Yb(wb, 2),
                  eb = Mb[0],
                  Hb = Mb[1];
                return Db(Db({}, bb), {}, cb({}, eb, Hb))
              }), {})
            }] : bb
          }(Mb)
        }), [Mb]),
        Ab = (0, eb.useMemo)((function() {
          return "function" === typeof Bb ? Bb : Ew
        }), [Bb]),
        Wb = (0, eb.useMemo)((function() {
          return "function" === typeof Fb ? Fb : Ew
        }), [Fb]),
        Jb = (0, eb.useRef)(null),
        Sb = (0, eb.useRef)(null),
        Nb = ew((0, eb.useReducer)(Cw, Uw), 2),
        vb = Nb[0],
        Qb = Nb[1],
        Tb = vb.rW,
        kb = vb.isFileDialogActive,
        Hw = (0, eb.useRef)("undefined" !== typeof window && window.isSecureContext && sb && "showOpenFilePicker" in window),
        pw = function() {
          !Hw.current && kb && setTimeout((function() {
            Sb.current && (Sb.current.files.length || (Qb({
              type: "closeDialog"
            }), Wb()))
          }), 300)
        };
      (0, eb.useEffect)((function() {
        return window.addEventListener("focus", pw, !1),
          function() {
            window.removeEventListener("focus", pw, !1)
          }
      }), [Sb, kb, Wb, Hw]);
      var Vw = (0, eb.useRef)([]),
        Iw = function(bb) {
          Jb.current && Jb.current.contains(bb.target) || (bb.preventDefault(), Vw.current = [])
        };
      (0, eb.useEffect)((function() {
        return hb && (document.addEventListener("dragover", Pb, !1), document.addEventListener("drop", Iw, !1)),
          function() {
            hb && (document.removeEventListener("dragover", Pb), document.removeEventListener("drop", Iw))
          }
      }), [Jb, hb]), (0, eb.useEffect)((function() {
        return !Hb && mb && Jb.current && Jb.current.focus(),
          function() {}
      }), [Jb, mb, Hb]);
      var tw = (0, eb.useCallback)((function(bb) {
          Kb ? Kb(bb) : console.error(bb)
        }), [Kb]),
        Fw = (0, eb.useCallback)((function(bb) {
          bb.preventDefault(), bb.persist(), Yw(bb), Vw.current = [].concat(Mw(Vw.current), [bb.target]), db(bb) && Promise.resolve(pb(bb)).then((function(wb) {
            if (!ub(bb) || jb) {
              var Mb = wb.length,
                eb = Mb > 0 && function(bb) {
                  var wb = bb.files,
                    Mb = bb.accept,
                    eb = bb.minSize,
                    Hb = bb.maxSize,
                    pb = bb.multiple,
                    Vb = bb.maxFiles,
                    gb = bb.validator;
                  return !(!pb && wb.length > 1 || pb && Vb >= 1 && wb.length > Vb) && wb.every((function(bb) {
                    var wb = Yb(qb(bb, Mb), 1)[0],
                      pb = Yb(ab(bb, eb, Hb), 1)[0],
                      Vb = gb ? gb(bb) : null;
                    return wb && pb && !Vb
                  }))
                }({
                  files: wb,
                  accept: Zb,
                  minSize: gb,
                  maxSize: Vb,
                  multiple: lb,
                  maxFiles: Lb,
                  validator: Rb
                });
              Qb({
                isDragAccept: eb,
                isDragReject: Mb > 0 && !eb,
                isDragActive: !0,
                type: "setDraggedFiles"
              }), Ib && Ib(bb)
            }
          })).catch((function(bb) {
            return tw(bb)
          }))
        }), [pb, Ib, tw, jb, Zb, gb, Vb, lb, Lb, Rb]),
        Bw = (0, eb.useCallback)((function(bb) {
          bb.preventDefault(), bb.persist(), Yw(bb);
          var wb = db(bb);
          if (wb && bb.dataTransfer) try {
            bb.dataTransfer.dropEffect = "copy"
          } catch (Mb) {}
          return wb && Ub && Ub(bb), !1
        }), [Ub, jb]),
        sw = (0, eb.useCallback)((function(bb) {
          bb.preventDefault(), bb.persist(), Yw(bb);
          var wb = Vw.current.filter((function(bb) {
              return Jb.current && Jb.current.contains(bb)
            })),
            Mb = wb.indexOf(bb.target); - 1 !== Mb && wb.splice(Mb, 1), Vw.current = wb, wb.length > 0 || (Qb({
            type: "setDraggedFiles",
            isDragActive: !1,
            isDragAccept: !1,
            isDragReject: !1
          }), db(bb) && Ob && Ob(bb))
        }), [Jb, Ob, jb]),
        mw = (0, eb.useCallback)((function(bb, wb) {
          var Mb = [],
            eb = [];
          bb.forEach((function(bb) {
            var wb = ew(qb(bb, Zb), 2),
              Hb = wb[0],
              pb = wb[1],
              lb = ew(ab(bb, gb, Vb), 2),
              Lb = lb[0],
              Ib = lb[1],
              Ob = Rb ? Rb(bb) : null;
            if (Hb && Lb && !Ob) Mb.push(bb);
            else {
              var Ub = [pb, Ib];
              Ob && (Ub = Ub.concat(Ob)), eb.push({
                file: bb,
                errors: Ub.filter((function(bb) {
                  return bb
                }))
              })
            }
          })), (!lb && Mb.length > 1 || lb && Lb >= 1 && Mb.length > Lb) && (Mb.forEach((function(bb) {
            eb.push({
              file: bb,
              errors: [Gb]
            })
          })), Mb.splice(0)), Qb({
            acceptedFiles: Mb,
            fileRejections: eb,
            type: "setFiles"
          }), tb && tb(Mb, eb, wb), eb.length > 0 && Eb && Eb(eb, wb), Mb.length > 0 && Cb && Cb(Mb, wb)
        }), [Qb, lb, Zb, gb, Vb, Lb, tb, Cb, Eb, Rb]),
        hw = (0, eb.useCallback)((function(bb) {
          bb.preventDefault(), bb.persist(), Yw(bb), Vw.current = [], db(bb) && Promise.resolve(pb(bb)).then((function(wb) {
            ub(bb) && !jb || mw(wb, bb)
          })).catch((function(bb) {
            return tw(bb)
          })), Qb({
            type: "reset"
          })
        }), [pb, mw, tw, jb]),
        zw = (0, eb.useCallback)((function() {
          if (Hw.current) {
            Qb({
              type: "openDialog"
            }), Ab();
            var bb = {
              multiple: lb,
              types: fb
            };
            window.showOpenFilePicker(bb).then((function(bb) {
              return pb(bb)
            })).then((function(bb) {
              mw(bb, null), Qb({
                type: "closeDialog"
              })
            })).catch((function(bb) {
              var wb;
              (wb = bb) instanceof DOMException && ("AbortError" === wb.name || wb.code === wb.ABORT_ERR) ? (Wb(bb), Qb({
                type: "closeDialog"
              })) : ! function(bb) {
                return bb instanceof DOMException && ("SecurityError" === bb.name || bb.code === bb.SECURITY_ERR)
              }(bb) ? tw(bb) : (Hw.current = !1, Sb.current ? (Sb.current.value = null, Sb.current.click()) : tw(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))
            }))
          } else Sb.current && (Qb({
            type: "openDialog"
          }), Ab(), Sb.current.value = null, Sb.current.click())
        }), [Qb, Ab, Wb, sb, mw, tw, fb, lb]),
        Xw = (0, eb.useCallback)((function(bb) {
          Jb.current && Jb.current.isEqualNode(bb.target) && (" " !== bb.key && "Enter" !== bb.key && 32 !== bb.keyCode && 13 !== bb.keyCode || (bb.preventDefault(), zw()))
        }), [Jb, zw]),
        xw = (0, eb.useCallback)((function() {
          Qb({
            type: "focus"
          })
        }), []),
        jw = (0, eb.useCallback)((function() {
          Qb({
            type: "blur"
          })
        }), []),
        Kw = (0, eb.useCallback)((function() {
          zb || (! function() {
            var bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
            return function(bb) {
              return -1 !== bb.indexOf("MSIE") || -1 !== bb.indexOf("Trident/")
            }(bb) || function(bb) {
              return -1 !== bb.indexOf("Edge/")
            }(bb)
          }() ? zw() : setTimeout(zw, 0))
        }), [zb, zw]),
        rw = function(bb) {
          return Hb ? null : bb
        },
        Rw = function(bb) {
          return Xb ? null : rw(bb)
        },
        Dw = function(bb) {
          return xb ? null : rw(bb)
        },
        Yw = function(bb) {
          jb && bb.stopPropagation()
        },
        Zw = (0, eb.useMemo)((function() {
          return function() {
            var bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              wb = bb.refKey,
              Mb = void 0 === wb ? "ref" : wb,
              eb = bb.role,
              pb = bb.onKeyDown,
              Vb = bb.onFocus,
              gb = bb.onBlur,
              lb = bb.onClick,
              Lb = bb.onDragEnter,
              Ib = bb.onDragOver,
              Ob = bb.onDragLeave,
              Ub = bb.onDrop,
              tb = Lw(bb, bw);
            return gw(gw(lw({
              onKeyDown: Rw(nb(pb, Xw)),
              onFocus: Rw(nb(Vb, xw)),
              onBlur: Rw(nb(gb, jw)),
              onClick: rw(nb(lb, Kw)),
              onDragEnter: Dw(nb(Lb, Fw)),
              onDragOver: Dw(nb(Ib, Bw)),
              onDragLeave: Dw(nb(Ob, sw)),
              onDrop: Dw(nb(Ub, hw)),
              role: "string" === typeof eb && "" !== eb ? eb : "presentation"
            }, Mb, Jb), Hb || Xb ? {} : {
              tabIndex: 0
            }), tb)
          }
        }), [Jb, Xw, xw, jw, Kw, Fw, Bw, sw, hw, Xb, xb, Hb]),
        fw = (0, eb.useCallback)((function(bb) {
          bb.stopPropagation()
        }), []),
        Aw = (0, eb.useMemo)((function() {
          return function() {
            var bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              wb = bb.refKey,
              Mb = void 0 === wb ? "ref" : wb,
              eb = bb.onChange,
              Hb = bb.onClick,
              pb = Lw(bb, ww);
            return gw(gw({}, lw({
              accept: Zb,
              multiple: lb,
              type: "file",
              style: {
                display: "none"
              },
              onChange: rw(nb(eb, hw)),
              onClick: rw(nb(Hb, fw)),
              tabIndex: -1
            }, Mb, Sb)), pb)
          }
        }), [Sb, Mb, lb, hw, Hb]);
      return gw(gw({}, vb), {}, {
        rW: Tb && !Hb,
        getRootProps: Zw,
        getInputProps: Aw,
        rootRef: Jb,
        inputRef: Sb,
        open: rw(zw)
      })
    }

    function Cw(bb, wb) {
      switch (wb.type) {
        case "focus":
          return gw(gw({}, bb), {}, {
            rW: !0
          });
        case "blur":
          return gw(gw({}, bb), {}, {
            rW: !1
          });
        case "openDialog":
          return gw(gw({}, Uw), {}, {
            isFileDialogActive: !0
          });
        case "closeDialog":
          return gw(gw({}, bb), {}, {
            isFileDialogActive: !1
          });
        case "setDraggedFiles":
          return gw(gw({}, bb), {}, {
            isDragActive: wb.isDragActive,
            isDragAccept: wb.isDragAccept,
            isDragReject: wb.isDragReject
          });
        case "setFiles":
          return gw(gw({}, bb), {}, {
            acceptedFiles: wb.acceptedFiles,
            fileRejections: wb.fileRejections
          });
        case "reset":
          return gw({}, Uw);
        default:
          return bb
      }
    }

    function Ew() {}
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);