export const id = 95;
export const ids = [95];
export const modules = {
  4187: (yb, bb) => {
    bb.c = function(yb, bb) {
      if (yb && bb) {
        var Wy = Array.isArray(bb) ? bb : bb.split(","),
          Uy = yb.name || "",
          hy = (yb.type || "").toLowerCase(),
          fy = hy.replace(/\/.*$/, "");
        return Wy.some((function(yb) {
          var bb = yb.trim().toLowerCase();
          return "." === bb.charAt(0) ? Uy.toLowerCase().endsWith(bb) : bb.endsWith("/*") ? fy === bb.replace(/\/.*$/, "") : hy === bb
        }))
      }
      return !0
    }
  },
  4168: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => qW
    });
    var Uy = Wy(55),
      hy = Wy(4172),
      fy = Wy.n(hy);

    function Zy(yb, bb, Wy, Uy) {
      return new(Wy || (Wy = Promise))((function(hy, fy) {
        function Zy(yb) {
          try {
            Py(Uy.next(yb))
          } catch (bb) {
            fy(bb)
          }
        }

        function cb(yb) {
          try {
            Py(Uy.throw(yb))
          } catch (bb) {
            fy(bb)
          }
        }

        function Py(yb) {
          var bb;
          yb.done ? hy(yb.value) : (bb = yb.value, bb instanceof Wy ? bb : new Wy((function(yb) {
            yb(bb)
          }))).then(Zy, cb)
        }
        Py((Uy = Uy.apply(yb, bb || [])).next())
      }))
    }

    function cb(yb, bb) {
      var Wy, Uy, hy, fy, Zy = {
        label: 0,
        sent: function() {
          if (1 & hy[0]) throw hy[1];
          return hy[1]
        },
        trys: [],
        ops: []
      };
      return fy = {
        next: cb(0),
        throw: cb(1),
        return: cb(2)
      }, "function" === typeof Symbol && (fy[Symbol.iterator] = function() {
        return this
      }), fy;

      function cb(cb) {
        return function(Py) {
          return function(cb) {
            if (Wy) throw new TypeError("Generator is already executing.");
            for (; fy && (fy = 0, cb[0] && (Zy = 0)), Zy;) try {
              if (Wy = 1, Uy && (hy = 2 & cb[0] ? Uy.return : cb[0] ? Uy.throw || ((hy = Uy.return) && hy.call(Uy), 0) : Uy.next) && !(hy = hy.call(Uy, cb[1])).done) return hy;
              switch (Uy = 0, hy && (cb = [2 & cb[0], hy.value]), cb[0]) {
                case 0:
                case 1:
                  hy = cb;
                  break;
                case 4:
                  return Zy.label++, {
                    value: cb[1],
                    done: !1
                  };
                case 5:
                  Zy.label++, Uy = cb[1], cb = [0];
                  continue;
                case 7:
                  cb = Zy.ops.pop(), Zy.trys.pop();
                  continue;
                default:
                  if (!(hy = (hy = Zy.trys).length > 0 && hy[hy.length - 1]) && (6 === cb[0] || 2 === cb[0])) {
                    Zy = 0;
                    continue
                  }
                  if (3 === cb[0] && (!hy || cb[1] > hy[0] && cb[1] < hy[3])) {
                    Zy.label = cb[1];
                    break
                  }
                  if (6 === cb[0] && Zy.label < hy[1]) {
                    Zy.label = hy[1], hy = cb;
                    break
                  }
                  if (hy && Zy.label < hy[2]) {
                    Zy.label = hy[2], Zy.ops.push(cb);
                    break
                  }
                  hy[2] && Zy.ops.pop(), Zy.trys.pop();
                  continue
              }
              cb = bb.call(yb, Zy)
            } catch (Py) {
              cb = [6, Py], Uy = 0
            } finally {
              Wy = hy = 0
            }
            if (5 & cb[0]) throw cb[1];
            return {
              value: cb[0] ? cb[1] : void 0,
              done: !0
            }
          }([cb, Py])
        }
      }
    }
    Object.create;

    function Py(yb, bb) {
      var Wy = "function" === typeof Symbol && yb[Symbol.iterator];
      if (!Wy) return yb;
      var Uy, hy, fy = Wy.call(yb),
        Zy = [];
      try {
        for (;
          (void 0 === bb || bb-- > 0) && !(Uy = fy.next()).done;) Zy.push(Uy.value)
      } catch (cb) {
        hy = {
          error: cb
        }
      } finally {
        try {
          Uy && !Uy.done && (Wy = fy.return) && Wy.call(fy)
        } finally {
          if (hy) throw hy.error
        }
      }
      return Zy
    }

    function oy(yb, bb, Wy) {
      if (Wy || 2 === arguments.length)
        for (var Uy, hy = 0, fy = bb.length; hy < fy; hy++) !Uy && hy in bb || (Uy || (Uy = Array.prototype.slice.call(bb, 0, hy)), Uy[hy] = bb[hy]);
      return yb.concat(Uy || Array.prototype.slice.call(bb))
    }
    Object.create;
    "function" === typeof SuppressedError && SuppressedError;
    var By = new Map([
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
      ["vc", "application/vnd.ms-outlook"]
    ]);

    function Ky(yb, bb) {
      var Wy = function(yb) {
        var bb = yb.name;
        if (bb && -1 !== bb.lastIndexOf(".") && !yb.type) {
          var Wy = bb.split(".").pop().toLowerCase(),
            Uy = By.get(Wy);
          Uy && Object.defineProperty(yb, "type", {
            value: Uy,
            writable: !1,
            configurable: !1,
            enumerable: !0
          })
        }
        return yb
      }(yb);
      if ("string" !== typeof Wy.path) {
        var Uy = yb.webkitRelativePath;
        Object.defineProperty(Wy, "path", {
          value: "string" === typeof bb ? bb : "string" === typeof Uy && Uy.length > 0 ? Uy : yb.name,
          writable: !1,
          configurable: !1,
          enumerable: !0
        })
      }
      return Wy
    }
    var ey = [".DS_Store", "Thumbs.db"];

    function qb(yb) {
      return "object" === typeof yb && null !== yb
    }

    function sy(yb) {
      return mb(yb.target.files).map((function(yb) {
        return Ky(yb)
      }))
    }

    function Sy(yb) {
      return Zy(this, void 0, void 0, (function() {
        return cb(this, (function(bb) {
          switch (bb.label) {
            case 0:
              return [4, Promise.all(yb.map((function(yb) {
                return yb.getFile()
              })))];
            case 1:
              return [2, bb.sent().map((function(yb) {
                return Ky(yb)
              }))]
          }
        }))
      }))
    }

    function Ey(yb, bb) {
      return Zy(this, void 0, void 0, (function() {
        var Wy;
        return cb(this, (function(Uy) {
          switch (Uy.label) {
            case 0:
              return yb.items ? (Wy = mb(yb.items).filter((function(yb) {
                return "file" === yb.kind
              })), "drop" !== bb ? [2, Wy] : [4, Promise.all(Wy.map(Cy))]) : [3, 2];
            case 1:
              return [2, ly(Ty(Uy.sent()))];
            case 2:
              return [2, ly(mb(yb.files).map((function(yb) {
                return Ky(yb)
              })))]
          }
        }))
      }))
    }

    function ly(yb) {
      return yb.filter((function(yb) {
        return -1 === ey.indexOf(yb.name)
      }))
    }

    function mb(yb) {
      if (null === yb) return [];
      for (var bb = [], Wy = 0; Wy < yb.length; Wy++) {
        var Uy = yb[Wy];
        bb.push(Uy)
      }
      return bb
    }

    function Cy(yb) {
      if ("function" !== typeof yb.webkitGetAsEntry) return Vy(yb);
      var bb = yb.webkitGetAsEntry();
      return bb && bb.isDirectory ? gb(bb) : Vy(yb)
    }

    function Ty(yb) {
      return yb.reduce((function(yb, bb) {
        return oy(oy([], Py(yb), !1), Py(Array.isArray(bb) ? Ty(bb) : [bb]), !1)
      }), [])
    }

    function Vy(yb) {
      var bb = yb.getAsFile();
      if (!bb) return Promise.reject("".concat(yb, " is not a File"));
      var Wy = Ky(bb);
      return Promise.resolve(Wy)
    }

    function Jy(yb) {
      return Zy(this, void 0, void 0, (function() {
        return cb(this, (function(bb) {
          return [2, yb.isDirectory ? gb(yb) : Gy(yb)]
        }))
      }))
    }

    function gb(yb) {
      var bb = yb.createReader();
      return new Promise((function(yb, Wy) {
        var Uy = [];
        ! function hy() {
          var fy = this;
          bb.readEntries((function(bb) {
            return Zy(fy, void 0, void 0, (function() {
              var fy, Zy, Py;
              return cb(this, (function(cb) {
                switch (cb.label) {
                  case 0:
                    if (bb.length) return [3, 5];
                    cb.label = 1;
                  case 1:
                    return cb.trys.push([1, 3, , 4]), [4, Promise.all(Uy)];
                  case 2:
                    return fy = cb.sent(), yb(fy), [3, 4];
                  case 3:
                    return Zy = cb.sent(), Wy(Zy), [3, 4];
                  case 4:
                    return [3, 6];
                  case 5:
                    Py = Promise.all(bb.map(Jy)), Uy.push(Py), hy(), cb.label = 6;
                  case 6:
                    return [2]
                }
              }))
            }))
          }), (function(yb) {
            Wy(yb)
          }))
        }()
      }))
    }

    function Gy(yb) {
      return Zy(this, void 0, void 0, (function() {
        return cb(this, (function(bb) {
          return [2, new Promise((function(bb, Wy) {
            yb.file((function(Wy) {
              var Uy = Ky(Wy, yb.fullPath);
              bb(Uy)
            }), (function(yb) {
              Wy(yb)
            }))
          }))]
        }))
      }))
    }
    var Oy = Wy(4187);

    function Ry(yb) {
      return function(yb) {
        if (Array.isArray(yb)) return ny(yb)
      }(yb) || function(yb) {
        if ("undefined" !== typeof Symbol && null != yb[Symbol.iterator] || null != yb["@@iterator"]) return Array.from(yb)
      }(yb) || Xy(yb) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function vb(yb, bb) {
      var Wy = Object.keys(yb);
      if (Object.getOwnPropertySymbols) {
        var Uy = Object.getOwnPropertySymbols(yb);
        bb && (Uy = Uy.filter((function(bb) {
          return Object.getOwnPropertyDescriptor(yb, bb).enumerable
        }))), Wy.push.apply(Wy, Uy)
      }
      return Wy
    }

    function ib(yb) {
      for (var bb = 1; bb < arguments.length; bb++) {
        var Wy = null != arguments[bb] ? arguments[bb] : {};
        bb % 2 ? vb(Object(Wy), !0).forEach((function(bb) {
          My(yb, bb, Wy[bb])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(yb, Object.getOwnPropertyDescriptors(Wy)) : vb(Object(Wy)).forEach((function(bb) {
          Object.defineProperty(yb, bb, Object.getOwnPropertyDescriptor(Wy, bb))
        }))
      }
      return yb
    }

    function My(yb, bb, Wy) {
      return bb in yb ? Object.defineProperty(yb, bb, {
        value: Wy,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : yb[bb] = Wy, yb
    }

    function Yy(yb, bb) {
      return function(yb) {
        if (Array.isArray(yb)) return yb
      }(yb) || function(yb, bb) {
        var Wy = null == yb ? null : "undefined" !== typeof Symbol && yb[Symbol.iterator] || yb["@@iterator"];
        if (null == Wy) return;
        var Uy, hy, fy = [],
          Zy = !0,
          cb = !1;
        try {
          for (Wy = Wy.call(yb); !(Zy = (Uy = Wy.next()).done) && (fy.push(Uy.value), !bb || fy.length !== bb); Zy = !0);
        } catch (Py) {
          cb = !0, hy = Py
        } finally {
          try {
            Zy || null == Wy.return || Wy.return()
          } finally {
            if (cb) throw hy
          }
        }
        return fy
      }(yb, bb) || Xy(yb, bb) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Xy(yb, bb) {
      if (yb) {
        if ("string" === typeof yb) return ny(yb, bb);
        var Wy = Object.prototype.toString.call(yb).slice(8, -1);
        return "Object" === Wy && yb.constructor && (Wy = yb.constructor.name), "Map" === Wy || "Set" === Wy ? Array.from(yb) : "Arguments" === Wy || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Wy) ? ny(yb, bb) : void 0
      }
    }

    function ny(yb, bb) {
      (null == bb || bb > yb.length) && (bb = yb.length);
      for (var Wy = 0, Uy = new Array(bb); Wy < bb; Wy++) Uy[Wy] = yb[Wy];
      return Uy
    }
    var uy = "file-invalid-type",
      rb = "file-too-large",
      Hy = "file-too-small",
      ab = "too-many-files",
      Fy = function(yb) {
        yb = Array.isArray(yb) && 1 === yb.length ? yb[0] : yb;
        var bb = Array.isArray(yb) ? "one of ".concat(yb.join(", ")) : yb;
        return {
          code: uy,
          message: "File type must be ".concat(bb)
        }
      },
      py = function(yb) {
        return {
          code: rb,
          message: "File is larger than ".concat(yb, " ").concat(1 === yb ? "byte" : "bytes")
        }
      },
      Ly = function(yb) {
        return {
          code: Hy,
          message: "File is smaller than ".concat(yb, " ").concat(1 === yb ? "byte" : "bytes")
        }
      },
      Qy = {
        code: ab,
        message: "Too many files"
      };

    function jb(yb, bb) {
      var Wy = "application/x-moz-file" === yb.type || (0, Oy.c)(yb, bb);
      return [Wy, Wy ? null : Fy(bb)]
    }

    function Dy(yb, bb, Wy) {
      if (tb(yb.size))
        if (tb(bb) && tb(Wy)) {
          if (yb.size > Wy) return [!1, py(Wy)];
          if (yb.size < bb) return [!1, Ly(bb)]
        } else {
          if (tb(bb) && yb.size < bb) return [!1, Ly(bb)];
          if (tb(Wy) && yb.size > Wy) return [!1, py(Wy)]
        } return [!0, null]
    }

    function tb(yb) {
      return void 0 !== yb && null !== yb
    }

    function wy(yb) {
      return "function" === typeof yb.isPropagationStopped ? yb.isPropagationStopped() : "undefined" !== typeof yb.cancelBubble && yb.cancelBubble
    }

    function kb(yb) {
      return yb.dataTransfer ? Array.prototype.some.call(yb.dataTransfer.types, (function(yb) {
        return "Files" === yb || "application/x-moz-file" === yb
      })) : !!yb.target && !!yb.target.files
    }

    function Ny(yb) {
      yb.preventDefault()
    }

    function zb() {
      for (var yb = arguments.length, bb = new Array(yb), Wy = 0; Wy < yb; Wy++) bb[Wy] = arguments[Wy];
      return function(yb) {
        for (var Wy = arguments.length, Uy = new Array(Wy > 1 ? Wy - 1 : 0), hy = 1; hy < Wy; hy++) Uy[hy - 1] = arguments[hy];
        return bb.some((function(bb) {
          return !wy(yb) && bb && bb.apply(void 0, [yb].concat(Uy)), wy(yb)
        }))
      }
    }

    function Iy(yb) {
      return "audio/*" === yb || "video/*" === yb || "image/*" === yb || "text/*" === yb || /\w+\/[-+.\w]+/g.test(yb)
    }

    function xb(yb) {
      return /^.*\.[\w]+$/.test(yb)
    }
    var Ay = ["children"],
      dy = ["open"],
      yW = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
      bW = ["refKey", "onChange", "onClick"];

    function Wb(yb) {
      return function(yb) {
        if (Array.isArray(yb)) return fb(yb)
      }(yb) || function(yb) {
        if ("undefined" !== typeof Symbol && null != yb[Symbol.iterator] || null != yb["@@iterator"]) return Array.from(yb)
      }(yb) || hb(yb) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Ub(yb, bb) {
      return function(yb) {
        if (Array.isArray(yb)) return yb
      }(yb) || function(yb, bb) {
        var Wy = null == yb ? null : "undefined" !== typeof Symbol && yb[Symbol.iterator] || yb["@@iterator"];
        if (null == Wy) return;
        var Uy, hy, fy = [],
          Zy = !0,
          cb = !1;
        try {
          for (Wy = Wy.call(yb); !(Zy = (Uy = Wy.next()).done) && (fy.push(Uy.value), !bb || fy.length !== bb); Zy = !0);
        } catch (Py) {
          cb = !0, hy = Py
        } finally {
          try {
            Zy || null == Wy.return || Wy.return()
          } finally {
            if (cb) throw hy
          }
        }
        return fy
      }(yb, bb) || hb(yb, bb) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function hb(yb, bb) {
      if (yb) {
        if ("string" === typeof yb) return fb(yb, bb);
        var Wy = Object.prototype.toString.call(yb).slice(8, -1);
        return "Object" === Wy && yb.constructor && (Wy = yb.constructor.name), "Map" === Wy || "Set" === Wy ? Array.from(yb) : "Arguments" === Wy || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Wy) ? fb(yb, bb) : void 0
      }
    }

    function fb(yb, bb) {
      (null == bb || bb > yb.length) && (bb = yb.length);
      for (var Wy = 0, Uy = new Array(bb); Wy < bb; Wy++) Uy[Wy] = yb[Wy];
      return Uy
    }

    function Zb(yb, bb) {
      var Wy = Object.keys(yb);
      if (Object.getOwnPropertySymbols) {
        var Uy = Object.getOwnPropertySymbols(yb);
        bb && (Uy = Uy.filter((function(bb) {
          return Object.getOwnPropertyDescriptor(yb, bb).enumerable
        }))), Wy.push.apply(Wy, Uy)
      }
      return Wy
    }

    function cW(yb) {
      for (var bb = 1; bb < arguments.length; bb++) {
        var Wy = null != arguments[bb] ? arguments[bb] : {};
        bb % 2 ? Zb(Object(Wy), !0).forEach((function(bb) {
          Pb(yb, bb, Wy[bb])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(yb, Object.getOwnPropertyDescriptors(Wy)) : Zb(Object(Wy)).forEach((function(bb) {
          Object.defineProperty(yb, bb, Object.getOwnPropertyDescriptor(Wy, bb))
        }))
      }
      return yb
    }

    function Pb(yb, bb, Wy) {
      return bb in yb ? Object.defineProperty(yb, bb, {
        value: Wy,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : yb[bb] = Wy, yb
    }

    function ob(yb, bb) {
      if (null == yb) return {};
      var Wy, Uy, hy = function(yb, bb) {
        if (null == yb) return {};
        var Wy, Uy, hy = {},
          fy = Object.keys(yb);
        for (Uy = 0; Uy < fy.length; Uy++) Wy = fy[Uy], bb.indexOf(Wy) >= 0 || (hy[Wy] = yb[Wy]);
        return hy
      }(yb, bb);
      if (Object.getOwnPropertySymbols) {
        var fy = Object.getOwnPropertySymbols(yb);
        for (Uy = 0; Uy < fy.length; Uy++) Wy = fy[Uy], bb.indexOf(Wy) >= 0 || Object.prototype.propertyIsEnumerable.call(yb, Wy) && (hy[Wy] = yb[Wy])
      }
      return hy
    }
    var Bb = (0, Uy.forwardRef)((function(yb, bb) {
      var Wy = yb.children,
        hy = qW(ob(yb, Ay)),
        fy = hy.open,
        Zy = ob(hy, dy);
      return (0, Uy.useImperativeHandle)(bb, (function() {
        return {
          open: fy
        }
      }), [fy]), Uy.createElement(Uy.Fragment, null, Wy(cW(cW({}, Zy), {}, {
        open: fy
      })))
    }));
    Bb.displayName = "Dropzone";
    var Kb = {
      disabled: !1,
      getFilesFromEvent: function(yb) {
        return Zy(this, void 0, void 0, (function() {
          return cb(this, (function(bb) {
            return qb(yb) && qb(yb.dataTransfer) ? [2, Ey(yb.dataTransfer, yb.type)] : function(yb) {
              return qb(yb) && qb(yb.target)
            }(yb) ? [2, sy(yb)] : Array.isArray(yb) && yb.every((function(yb) {
              return "getFile" in yb && "function" === typeof yb.getFile
            })) ? [2, Sy(yb)] : [2, []]
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
    Bb.defaultProps = Kb, Bb.propTypes = {
      children: fy().func,
      accept: fy().objectOf(fy().arrayOf(fy().string)),
      multiple: fy().bool,
      preventDropOnDocument: fy().bool,
      noClick: fy().bool,
      noKeyboard: fy().bool,
      noDrag: fy().bool,
      noDragEventsBubbling: fy().bool,
      minSize: fy().number,
      maxSize: fy().number,
      maxFiles: fy().number,
      disabled: fy().bool,
      getFilesFromEvent: fy().func,
      onFileDialogCancel: fy().func,
      onFileDialogOpen: fy().func,
      useFsAccessApi: fy().bool,
      autoFocus: fy().bool,
      onDragEnter: fy().func,
      onDragLeave: fy().func,
      onDragOver: fy().func,
      onDrop: fy().func,
      onDropAccepted: fy().func,
      onDropRejected: fy().func,
      onError: fy().func,
      validator: fy().func
    };
    var eb = {
      Hby: !1,
      isFileDialogActive: !1,
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1,
      acceptedFiles: [],
      fileRejections: []
    };

    function qW() {
      var yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        bb = cW(cW({}, Kb), yb),
        Wy = bb.accept,
        hy = bb.disabled,
        fy = bb.getFilesFromEvent,
        Zy = bb.maxSize,
        cb = bb.minSize,
        Py = bb.multiple,
        oy = bb.maxFiles,
        By = bb.onDragEnter,
        Ky = bb.onDragLeave,
        ey = bb.onDragOver,
        qb = bb.onDrop,
        sy = bb.onDropAccepted,
        Sy = bb.onDropRejected,
        Ey = bb.onFileDialogCancel,
        ly = bb.onFileDialogOpen,
        mb = bb.useFsAccessApi,
        Cy = bb.autoFocus,
        Ty = bb.preventDropOnDocument,
        Vy = bb.noClick,
        Jy = bb.noKeyboard,
        gb = bb.noDrag,
        Gy = bb.noDragEventsBubbling,
        Oy = bb.onError,
        vb = bb.validator,
        Xy = (0, Uy.useMemo)((function() {
          return function(yb) {
            if (tb(yb)) return Object.entries(yb).reduce((function(yb, bb) {
              var Wy = Yy(bb, 2),
                Uy = Wy[0],
                hy = Wy[1];
              return [].concat(Ry(yb), [Uy], Ry(hy))
            }), []).filter((function(yb) {
              return Iy(yb) || xb(yb)
            })).join(",")
          }(Wy)
        }), [Wy]),
        ny = (0, Uy.useMemo)((function() {
          return function(yb) {
            return tb(yb) ? [{
              description: "Files",
              accept: Object.entries(yb).filter((function(yb) {
                var bb = Yy(yb, 2),
                  Wy = bb[0],
                  Uy = bb[1],
                  hy = !0;
                return Iy(Wy) || (console.warn('Skipped "'.concat(Wy, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), hy = !1), Array.isArray(Uy) && Uy.every(xb) || (console.warn('Skipped "'.concat(Wy, '" because an invalid file extension was provided.')), hy = !1), hy
              })).reduce((function(yb, bb) {
                var Wy = Yy(bb, 2),
                  Uy = Wy[0],
                  hy = Wy[1];
                return ib(ib({}, yb), {}, My({}, Uy, hy))
              }), {})
            }] : yb
          }(Wy)
        }), [Wy]),
        uy = (0, Uy.useMemo)((function() {
          return "function" === typeof ly ? ly : Sb
        }), [ly]),
        rb = (0, Uy.useMemo)((function() {
          return "function" === typeof Ey ? Ey : Sb
        }), [Ey]),
        Hy = (0, Uy.useRef)(null),
        ab = (0, Uy.useRef)(null),
        Fy = Ub((0, Uy.useReducer)(sb, eb), 2),
        py = Fy[0],
        Ly = Fy[1],
        Ay = py.Hby,
        dy = py.isFileDialogActive,
        hb = (0, Uy.useRef)("undefined" !== typeof window && window.isSecureContext && mb && "showOpenFilePicker" in window),
        fb = function() {
          !hb.current && dy && setTimeout((function() {
            ab.current && (ab.current.files.length || (Ly({
              type: "closeDialog"
            }), rb()))
          }), 300)
        };
      (0, Uy.useEffect)((function() {
        return window.addEventListener("focus", fb, !1),
          function() {
            window.removeEventListener("focus", fb, !1)
          }
      }), [ab, dy, rb, hb]);
      var Zb = (0, Uy.useRef)([]),
        Bb = function(yb) {
          Hy.current && Hy.current.contains(yb.target) || (yb.preventDefault(), Zb.current = [])
        };
      (0, Uy.useEffect)((function() {
        return Ty && (document.addEventListener("dragover", Ny, !1), document.addEventListener("drop", Bb, !1)),
          function() {
            Ty && (document.removeEventListener("dragover", Ny), document.removeEventListener("drop", Bb))
          }
      }), [Hy, Ty]), (0, Uy.useEffect)((function() {
        return !hy && Cy && Hy.current && Hy.current.focus(),
          function() {}
      }), [Hy, Cy, hy]);
      var qW = (0, Uy.useCallback)((function(yb) {
          Oy ? Oy(yb) : console.error(yb)
        }), [Oy]),
        Eb = (0, Uy.useCallback)((function(yb) {
          yb.preventDefault(), yb.persist(), Mb(yb), Zb.current = [].concat(Wb(Zb.current), [yb.target]), kb(yb) && Promise.resolve(fy(yb)).then((function(bb) {
            if (!wy(yb) || Gy) {
              var Wy = bb.length,
                Uy = Wy > 0 && function(yb) {
                  var bb = yb.files,
                    Wy = yb.accept,
                    Uy = yb.minSize,
                    hy = yb.maxSize,
                    fy = yb.multiple,
                    Zy = yb.maxFiles,
                    cb = yb.validator;
                  return !(!fy && bb.length > 1 || fy && Zy >= 1 && bb.length > Zy) && bb.every((function(yb) {
                    var bb = Yy(jb(yb, Wy), 1)[0],
                      fy = Yy(Dy(yb, Uy, hy), 1)[0],
                      Zy = cb ? cb(yb) : null;
                    return bb && fy && !Zy
                  }))
                }({
                  files: bb,
                  accept: Xy,
                  minSize: cb,
                  maxSize: Zy,
                  multiple: Py,
                  maxFiles: oy,
                  validator: vb
                });
              Ly({
                isDragAccept: Uy,
                isDragReject: Wy > 0 && !Uy,
                isDragActive: !0,
                type: "setDraggedFiles"
              }), By && By(yb)
            }
          })).catch((function(yb) {
            return qW(yb)
          }))
        }), [fy, By, qW, Gy, Xy, cb, Zy, Py, oy, vb]),
        lb = (0, Uy.useCallback)((function(yb) {
          yb.preventDefault(), yb.persist(), Mb(yb);
          var bb = kb(yb);
          if (bb && yb.dataTransfer) try {
            yb.dataTransfer.dropEffect = "copy"
          } catch (Wy) {}
          return bb && ey && ey(yb), !1
        }), [ey, Gy]),
        mW = (0, Uy.useCallback)((function(yb) {
          yb.preventDefault(), yb.persist(), Mb(yb);
          var bb = Zb.current.filter((function(yb) {
              return Hy.current && Hy.current.contains(yb)
            })),
            Wy = bb.indexOf(yb.target); - 1 !== Wy && bb.splice(Wy, 1), Zb.current = bb, bb.length > 0 || (Ly({
            type: "setDraggedFiles",
            isDragActive: !1,
            isDragAccept: !1,
            isDragReject: !1
          }), kb(yb) && Ky && Ky(yb))
        }), [Hy, Ky, Gy]),
        Cb = (0, Uy.useCallback)((function(yb, bb) {
          var Wy = [],
            Uy = [];
          yb.forEach((function(yb) {
            var bb = Ub(jb(yb, Xy), 2),
              hy = bb[0],
              fy = bb[1],
              Py = Ub(Dy(yb, cb, Zy), 2),
              oy = Py[0],
              By = Py[1],
              Ky = vb ? vb(yb) : null;
            if (hy && oy && !Ky) Wy.push(yb);
            else {
              var ey = [fy, By];
              Ky && (ey = ey.concat(Ky)), Uy.push({
                file: yb,
                errors: ey.filter((function(yb) {
                  return yb
                }))
              })
            }
          })), (!Py && Wy.length > 1 || Py && oy >= 1 && Wy.length > oy) && (Wy.forEach((function(yb) {
            Uy.push({
              file: yb,
              errors: [Qy]
            })
          })), Wy.splice(0)), Ly({
            acceptedFiles: Wy,
            fileRejections: Uy,
            type: "setFiles"
          }), qb && qb(Wy, Uy, bb), Uy.length > 0 && Sy && Sy(Uy, bb), Wy.length > 0 && sy && sy(Wy, bb)
        }), [Ly, Py, Xy, cb, Zy, oy, qb, sy, Sy, vb]),
        Tb = (0, Uy.useCallback)((function(yb) {
          yb.preventDefault(), yb.persist(), Mb(yb), Zb.current = [], kb(yb) && Promise.resolve(fy(yb)).then((function(bb) {
            wy(yb) && !Gy || Cb(bb, yb)
          })).catch((function(yb) {
            return qW(yb)
          })), Ly({
            type: "reset"
          })
        }), [fy, Cb, qW, Gy]),
        Vb = (0, Uy.useCallback)((function() {
          if (hb.current) {
            Ly({
              type: "openDialog"
            }), uy();
            var yb = {
              multiple: Py,
              types: ny
            };
            window.showOpenFilePicker(yb).then((function(yb) {
              return fy(yb)
            })).then((function(yb) {
              Cb(yb, null), Ly({
                type: "closeDialog"
              })
            })).catch((function(yb) {
              var bb;
              (bb = yb) instanceof DOMException && ("AbortError" === bb.name || bb.code === bb.ABORT_ERR) ? (rb(yb), Ly({
                type: "closeDialog"
              })) : ! function(yb) {
                return yb instanceof DOMException && ("SecurityError" === yb.name || yb.code === yb.SECURITY_ERR)
              }(yb) ? qW(yb) : (hb.current = !1, ab.current ? (ab.current.value = null, ab.current.click()) : qW(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))
            }))
          } else ab.current && (Ly({
            type: "openDialog"
          }), uy(), ab.current.value = null, ab.current.click())
        }), [Ly, uy, rb, mb, Cb, qW, ny, Py]),
        Jb = (0, Uy.useCallback)((function(yb) {
          Hy.current && Hy.current.isEqualNode(yb.target) && (" " !== yb.key && "Enter" !== yb.key && 32 !== yb.keyCode && 13 !== yb.keyCode || (yb.preventDefault(), Vb()))
        }), [Hy, Vb]),
        gW = (0, Uy.useCallback)((function() {
          Ly({
            type: "focus"
          })
        }), []),
        Gb = (0, Uy.useCallback)((function() {
          Ly({
            type: "blur"
          })
        }), []),
        Ob = (0, Uy.useCallback)((function() {
          Vy || (! function() {
            var yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
            return function(yb) {
              return -1 !== yb.indexOf("MSIE") || -1 !== yb.indexOf("Trident/")
            }(yb) || function(yb) {
              return -1 !== yb.indexOf("Edge/")
            }(yb)
          }() ? Vb() : setTimeout(Vb, 0))
        }), [Vy, Vb]),
        Rb = function(yb) {
          return hy ? null : yb
        },
        vW = function(yb) {
          return Jy ? null : Rb(yb)
        },
        iW = function(yb) {
          return gb ? null : Rb(yb)
        },
        Mb = function(yb) {
          Gy && yb.stopPropagation()
        },
        Yb = (0, Uy.useMemo)((function() {
          return function() {
            var yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              bb = yb.refKey,
              Wy = void 0 === bb ? "ref" : bb,
              Uy = yb.role,
              fy = yb.onKeyDown,
              Zy = yb.onFocus,
              cb = yb.onBlur,
              Py = yb.onClick,
              oy = yb.onDragEnter,
              By = yb.onDragOver,
              Ky = yb.onDragLeave,
              ey = yb.onDrop,
              qb = ob(yb, yW);
            return cW(cW(Pb({
              onKeyDown: vW(zb(fy, Jb)),
              onFocus: vW(zb(Zy, gW)),
              onBlur: vW(zb(cb, Gb)),
              onClick: Rb(zb(Py, Ob)),
              onDragEnter: iW(zb(oy, Eb)),
              onDragOver: iW(zb(By, lb)),
              onDragLeave: iW(zb(Ky, mW)),
              onDrop: iW(zb(ey, Tb)),
              role: "string" === typeof Uy && "" !== Uy ? Uy : "presentation"
            }, Wy, Hy), hy || Jy ? {} : {
              tabIndex: 0
            }), qb)
          }
        }), [Hy, Jb, gW, Gb, Ob, Eb, lb, mW, Tb, Jy, gb, hy]),
        Xb = (0, Uy.useCallback)((function(yb) {
          yb.stopPropagation()
        }), []),
        nb = (0, Uy.useMemo)((function() {
          return function() {
            var yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              bb = yb.refKey,
              Wy = void 0 === bb ? "ref" : bb,
              Uy = yb.onChange,
              hy = yb.onClick,
              fy = ob(yb, bW);
            return cW(cW({}, Pb({
              accept: Xy,
              multiple: Py,
              type: "file",
              style: {
                display: "none"
              },
              onChange: Rb(zb(Uy, Tb)),
              onClick: Rb(zb(hy, Xb)),
              tabIndex: -1
            }, Wy, ab)), fy)
          }
        }), [ab, Wy, Py, Tb, hy]);
      return cW(cW({}, py), {}, {
        Hby: Ay && !hy,
        getRootProps: Yb,
        getInputProps: nb,
        rootRef: Hy,
        inputRef: ab,
        open: Rb(Vb)
      })
    }

    function sb(yb, bb) {
      switch (bb.type) {
        case "focus":
          return cW(cW({}, yb), {}, {
            Hby: !0
          });
        case "blur":
          return cW(cW({}, yb), {}, {
            Hby: !1
          });
        case "openDialog":
          return cW(cW({}, eb), {}, {
            isFileDialogActive: !0
          });
        case "closeDialog":
          return cW(cW({}, yb), {}, {
            isFileDialogActive: !1
          });
        case "setDraggedFiles":
          return cW(cW({}, yb), {}, {
            isDragActive: bb.isDragActive,
            isDragAccept: bb.isDragAccept,
            isDragReject: bb.isDragReject
          });
        case "setFiles":
          return cW(cW({}, yb), {}, {
            acceptedFiles: bb.acceptedFiles,
            fileRejections: bb.fileRejections
          });
        case "reset":
          return cW({}, eb);
        default:
          return yb
      }
    }

    function Sb() {}
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);