export const id = 106;
export const ids = [106];
export const modules = {
  4748: (bb, ub) => {
    ub.b = function(bb, ub) {
      if (bb && ub) {
        var hb = Array.isArray(ub) ? ub : ub.split(","),
          Bb = bb.name || "",
          Ob = (bb.type || "").toLowerCase(),
          Gb = Ob.replace(/\/.*$/, "");
        return hb.some((function(bb) {
          var ub = bb.trim().toLowerCase();
          return "." === ub.charAt(0) ? Bb.toLowerCase().endsWith(ub) : ub.endsWith("/*") ? Gb === ub.replace(/\/.*$/, "") : Ob === ub
        }))
      }
      return !0
    }
  },
  4723: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Zu
    });
    var Bb = hb(49),
      Ob = hb(4729),
      Gb = hb.n(Ob);

    function Ub(bb, ub, hb, Bb) {
      return new(hb || (hb = Promise))((function(Ob, Gb) {
        function Ub(bb) {
          try {
            Yb(Bb.next(bb))
          } catch (ub) {
            Gb(ub)
          }
        }

        function Lb(bb) {
          try {
            Yb(Bb.throw(bb))
          } catch (ub) {
            Gb(ub)
          }
        }

        function Yb(bb) {
          var ub;
          bb.done ? Ob(bb.value) : (ub = bb.value, ub instanceof hb ? ub : new hb((function(bb) {
            bb(ub)
          }))).then(Ub, Lb)
        }
        Yb((Bb = Bb.apply(bb, ub || [])).next())
      }))
    }

    function Lb(bb, ub) {
      var hb, Bb, Ob, Gb, Ub = {
        label: 0,
        sent: function() {
          if (1 & Ob[0]) throw Ob[1];
          return Ob[1]
        },
        trys: [],
        ops: []
      };
      return Gb = {
        next: Lb(0),
        throw: Lb(1),
        return: Lb(2)
      }, "function" === typeof Symbol && (Gb[Symbol.iterator] = function() {
        return this
      }), Gb;

      function Lb(Lb) {
        return function(Yb) {
          return function(Lb) {
            if (hb) throw new TypeError("Generator is already executing.");
            for (; Gb && (Gb = 0, Lb[0] && (Ub = 0)), Ub;) try {
              if (hb = 1, Bb && (Ob = 2 & Lb[0] ? Bb.return : Lb[0] ? Bb.throw || ((Ob = Bb.return) && Ob.call(Bb), 0) : Bb.next) && !(Ob = Ob.call(Bb, Lb[1])).done) return Ob;
              switch (Bb = 0, Ob && (Lb = [2 & Lb[0], Ob.value]), Lb[0]) {
                case 0:
                case 1:
                  Ob = Lb;
                  break;
                case 4:
                  return Ub.label++, {
                    value: Lb[1],
                    done: !1
                  };
                case 5:
                  Ub.label++, Bb = Lb[1], Lb = [0];
                  continue;
                case 7:
                  Lb = Ub.ops.pop(), Ub.trys.pop();
                  continue;
                default:
                  if (!(Ob = (Ob = Ub.trys).length > 0 && Ob[Ob.length - 1]) && (6 === Lb[0] || 2 === Lb[0])) {
                    Ub = 0;
                    continue
                  }
                  if (3 === Lb[0] && (!Ob || Lb[1] > Ob[0] && Lb[1] < Ob[3])) {
                    Ub.label = Lb[1];
                    break
                  }
                  if (6 === Lb[0] && Ub.label < Ob[1]) {
                    Ub.label = Ob[1], Ob = Lb;
                    break
                  }
                  if (Ob && Ub.label < Ob[2]) {
                    Ub.label = Ob[2], Ub.ops.push(Lb);
                    break
                  }
                  Ob[2] && Ub.ops.pop(), Ub.trys.pop();
                  continue
              }
              Lb = ub.call(bb, Ub)
            } catch (Yb) {
              Lb = [6, Yb], Bb = 0
            } finally {
              hb = Ob = 0
            }
            if (5 & Lb[0]) throw Lb[1];
            return {
              value: Lb[0] ? Lb[1] : void 0,
              done: !0
            }
          }([Lb, Yb])
        }
      }
    }
    Object.create;

    function Yb(bb, ub) {
      var hb = "function" === typeof Symbol && bb[Symbol.iterator];
      if (!hb) return bb;
      var Bb, Ob, Gb = hb.call(bb),
        Ub = [];
      try {
        for (;
          (void 0 === ub || ub-- > 0) && !(Bb = Gb.next()).done;) Ub.push(Bb.value)
      } catch (Lb) {
        Ob = {
          error: Lb
        }
      } finally {
        try {
          Bb && !Bb.done && (hb = Gb.return) && hb.call(Gb)
        } finally {
          if (Ob) throw Ob.error
        }
      }
      return Ub
    }

    function Sb(bb, ub, hb) {
      if (hb || 2 === arguments.length)
        for (var Bb, Ob = 0, Gb = ub.length; Ob < Gb; Ob++) !Bb && Ob in ub || (Bb || (Bb = Array.prototype.slice.call(ub, 0, Ob)), Bb[Ob] = ub[Ob]);
      return bb.concat(Bb || Array.prototype.slice.call(ub))
    }
    Object.create;
    "function" === typeof SuppressedError && SuppressedError;
    var ab = new Map([
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
      ["XS", "application/vnd.ms-outlook"]
    ]);

    function Hb(bb, ub) {
      var hb = function(bb) {
        var ub = bb.name;
        if (ub && -1 !== ub.lastIndexOf(".") && !bb.type) {
          var hb = ub.split(".").pop().toLowerCase(),
            Bb = ab.get(hb);
          Bb && Object.defineProperty(bb, "type", {
            value: Bb,
            writable: !1,
            configurable: !1,
            enumerable: !0
          })
        }
        return bb
      }(bb);
      if ("string" !== typeof hb.path) {
        var Bb = bb.webkitRelativePath;
        Object.defineProperty(hb, "path", {
          value: "string" === typeof ub ? ub : "string" === typeof Bb && Bb.length > 0 ? Bb : bb.name,
          writable: !1,
          configurable: !1,
          enumerable: !0
        })
      }
      return hb
    }
    var wb = [".DS_Store", "Thumbs.db"];

    function Zb(bb) {
      return "object" === typeof bb && null !== bb
    }

    function Xb(bb) {
      return lb(bb.target.files).map((function(bb) {
        return Hb(bb)
      }))
    }

    function pb(bb) {
      return Ub(this, void 0, void 0, (function() {
        return Lb(this, (function(ub) {
          switch (ub.label) {
            case 0:
              return [4, Promise.all(bb.map((function(bb) {
                return bb.getFile()
              })))];
            case 1:
              return [2, ub.sent().map((function(bb) {
                return Hb(bb)
              }))]
          }
        }))
      }))
    }

    function ob(bb, ub) {
      return Ub(this, void 0, void 0, (function() {
        var hb;
        return Lb(this, (function(Bb) {
          switch (Bb.label) {
            case 0:
              return bb.items ? (hb = lb(bb.items).filter((function(bb) {
                return "file" === bb.kind
              })), "drop" !== ub ? [2, hb] : [4, Promise.all(hb.map(Kb))]) : [3, 2];
            case 1:
              return [2, Ab(Wb(Bb.sent()))];
            case 2:
              return [2, Ab(lb(bb.files).map((function(bb) {
                return Hb(bb)
              })))]
          }
        }))
      }))
    }

    function Ab(bb) {
      return bb.filter((function(bb) {
        return -1 === wb.indexOf(bb.name)
      }))
    }

    function lb(bb) {
      if (null === bb) return [];
      for (var ub = [], hb = 0; hb < bb.length; hb++) {
        var Bb = bb[hb];
        ub.push(Bb)
      }
      return ub
    }

    function Kb(bb) {
      if ("function" !== typeof bb.webkitGetAsEntry) return Cb(bb);
      var ub = bb.webkitGetAsEntry();
      return ub && ub.isDirectory ? rb(ub) : Cb(bb)
    }

    function Wb(bb) {
      return bb.reduce((function(bb, ub) {
        return Sb(Sb([], Yb(bb), !1), Yb(Array.isArray(ub) ? Wb(ub) : [ub]), !1)
      }), [])
    }

    function Cb(bb) {
      var ub = bb.getAsFile();
      if (!ub) return Promise.reject("".concat(bb, " is not a File"));
      var hb = Hb(ub);
      return Promise.resolve(hb)
    }

    function db(bb) {
      return Ub(this, void 0, void 0, (function() {
        return Lb(this, (function(ub) {
          return [2, bb.isDirectory ? rb(bb) : jb(bb)]
        }))
      }))
    }

    function rb(bb) {
      var ub = bb.createReader();
      return new Promise((function(bb, hb) {
        var Bb = [];
        ! function Ob() {
          var Gb = this;
          ub.readEntries((function(ub) {
            return Ub(Gb, void 0, void 0, (function() {
              var Gb, Ub, Yb;
              return Lb(this, (function(Lb) {
                switch (Lb.label) {
                  case 0:
                    if (ub.length) return [3, 5];
                    Lb.label = 1;
                  case 1:
                    return Lb.trys.push([1, 3, , 4]), [4, Promise.all(Bb)];
                  case 2:
                    return Gb = Lb.sent(), bb(Gb), [3, 4];
                  case 3:
                    return Ub = Lb.sent(), hb(Ub), [3, 4];
                  case 4:
                    return [3, 6];
                  case 5:
                    Yb = Promise.all(ub.map(db)), Bb.push(Yb), Ob(), Lb.label = 6;
                  case 6:
                    return [2]
                }
              }))
            }))
          }), (function(bb) {
            hb(bb)
          }))
        }()
      }))
    }

    function jb(bb) {
      return Ub(this, void 0, void 0, (function() {
        return Lb(this, (function(ub) {
          return [2, new Promise((function(ub, hb) {
            bb.file((function(hb) {
              var Bb = Hb(hb, bb.fullPath);
              ub(Bb)
            }), (function(bb) {
              hb(bb)
            }))
          }))]
        }))
      }))
    }
    var nb = hb(4748);

    function Db(bb) {
      return function(bb) {
        if (Array.isArray(bb)) return tb(bb)
      }(bb) || function(bb) {
        if ("undefined" !== typeof Symbol && null != bb[Symbol.iterator] || null != bb["@@iterator"]) return Array.from(bb)
      }(bb) || vb(bb) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function xb(bb, ub) {
      var hb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Bb = Object.getOwnPropertySymbols(bb);
        ub && (Bb = Bb.filter((function(ub) {
          return Object.getOwnPropertyDescriptor(bb, ub).enumerable
        }))), hb.push.apply(hb, Bb)
      }
      return hb
    }

    function zb(bb) {
      for (var ub = 1; ub < arguments.length; ub++) {
        var hb = null != arguments[ub] ? arguments[ub] : {};
        ub % 2 ? xb(Object(hb), !0).forEach((function(ub) {
          gb(bb, ub, hb[ub])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(hb)) : xb(Object(hb)).forEach((function(ub) {
          Object.defineProperty(bb, ub, Object.getOwnPropertyDescriptor(hb, ub))
        }))
      }
      return bb
    }

    function gb(bb, ub, hb) {
      return ub in bb ? Object.defineProperty(bb, ub, {
        value: hb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ub] = hb, bb
    }

    function ib(bb, ub) {
      return function(bb) {
        if (Array.isArray(bb)) return bb
      }(bb) || function(bb, ub) {
        var hb = null == bb ? null : "undefined" !== typeof Symbol && bb[Symbol.iterator] || bb["@@iterator"];
        if (null == hb) return;
        var Bb, Ob, Gb = [],
          Ub = !0,
          Lb = !1;
        try {
          for (hb = hb.call(bb); !(Ub = (Bb = hb.next()).done) && (Gb.push(Bb.value), !ub || Gb.length !== ub); Ub = !0);
        } catch (Yb) {
          Lb = !0, Ob = Yb
        } finally {
          try {
            Ub || null == hb.return || hb.return()
          } finally {
            if (Lb) throw Ob
          }
        }
        return Gb
      }(bb, ub) || vb(bb, ub) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function vb(bb, ub) {
      if (bb) {
        if ("string" === typeof bb) return tb(bb, ub);
        var hb = Object.prototype.toString.call(bb).slice(8, -1);
        return "Object" === hb && bb.constructor && (hb = bb.constructor.name), "Map" === hb || "Set" === hb ? Array.from(bb) : "Arguments" === hb || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(hb) ? tb(bb, ub) : void 0
      }
    }

    function tb(bb, ub) {
      (null == ub || ub > bb.length) && (ub = bb.length);
      for (var hb = 0, Bb = new Array(ub); hb < ub; hb++) Bb[hb] = bb[hb];
      return Bb
    }
    var Jb = "file-invalid-type",
      eb = "file-too-large",
      Nb = "file-too-small",
      sb = "too-many-files",
      Mb = function(bb) {
        bb = Array.isArray(bb) && 1 === bb.length ? bb[0] : bb;
        var ub = Array.isArray(bb) ? "one of ".concat(bb.join(", ")) : bb;
        return {
          code: Jb,
          message: "File type must be ".concat(ub)
        }
      },
      mb = function(bb) {
        return {
          code: eb,
          message: "File is larger than ".concat(bb, " ").concat(1 === bb ? "byte" : "bytes")
        }
      },
      Ib = function(bb) {
        return {
          code: Nb,
          message: "File is smaller than ".concat(bb, " ").concat(1 === bb ? "byte" : "bytes")
        }
      },
      Pb = {
        code: sb,
        message: "Too many files"
      };

    function qb(bb, ub) {
      var hb = "application/x-moz-file" === bb.type || (0, nb.b)(bb, ub);
      return [hb, hb ? null : Mb(ub)]
    }

    function Eb(bb, ub, hb) {
      if (yb(bb.size))
        if (yb(ub) && yb(hb)) {
          if (bb.size > hb) return [!1, mb(hb)];
          if (bb.size < ub) return [!1, Ib(ub)]
        } else {
          if (yb(ub) && bb.size < ub) return [!1, Ib(ub)];
          if (yb(hb) && bb.size > hb) return [!1, mb(hb)]
        } return [!0, null]
    }

    function yb(bb) {
      return void 0 !== bb && null !== bb
    }

    function Vb(bb) {
      return "function" === typeof bb.isPropagationStopped ? bb.isPropagationStopped() : "undefined" !== typeof bb.cancelBubble && bb.cancelBubble
    }

    function Fb(bb) {
      return bb.dataTransfer ? Array.prototype.some.call(bb.dataTransfer.types, (function(bb) {
        return "Files" === bb || "application/x-moz-file" === bb
      })) : !!bb.target && !!bb.target.files
    }

    function fb(bb) {
      bb.preventDefault()
    }

    function kb() {
      for (var bb = arguments.length, ub = new Array(bb), hb = 0; hb < bb; hb++) ub[hb] = arguments[hb];
      return function(bb) {
        for (var hb = arguments.length, Bb = new Array(hb > 1 ? hb - 1 : 0), Ob = 1; Ob < hb; Ob++) Bb[Ob - 1] = arguments[Ob];
        return ub.some((function(ub) {
          return !Vb(bb) && ub && ub.apply(void 0, [bb].concat(Bb)), Vb(bb)
        }))
      }
    }

    function Tb(bb) {
      return "audio/*" === bb || "video/*" === bb || "image/*" === bb || "text/*" === bb || /\w+\/[-+.\w]+/g.test(bb)
    }

    function cb(bb) {
      return /^.*\.[\w]+$/.test(bb)
    }
    var Qb = ["children"],
      Rb = ["open"],
      bu = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
      uu = ["refKey", "onChange", "onClick"];

    function hu(bb) {
      return function(bb) {
        if (Array.isArray(bb)) return Gu(bb)
      }(bb) || function(bb) {
        if ("undefined" !== typeof Symbol && null != bb[Symbol.iterator] || null != bb["@@iterator"]) return Array.from(bb)
      }(bb) || Ou(bb) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Bu(bb, ub) {
      return function(bb) {
        if (Array.isArray(bb)) return bb
      }(bb) || function(bb, ub) {
        var hb = null == bb ? null : "undefined" !== typeof Symbol && bb[Symbol.iterator] || bb["@@iterator"];
        if (null == hb) return;
        var Bb, Ob, Gb = [],
          Ub = !0,
          Lb = !1;
        try {
          for (hb = hb.call(bb); !(Ub = (Bb = hb.next()).done) && (Gb.push(Bb.value), !ub || Gb.length !== ub); Ub = !0);
        } catch (Yb) {
          Lb = !0, Ob = Yb
        } finally {
          try {
            Ub || null == hb.return || hb.return()
          } finally {
            if (Lb) throw Ob
          }
        }
        return Gb
      }(bb, ub) || Ou(bb, ub) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Ou(bb, ub) {
      if (bb) {
        if ("string" === typeof bb) return Gu(bb, ub);
        var hb = Object.prototype.toString.call(bb).slice(8, -1);
        return "Object" === hb && bb.constructor && (hb = bb.constructor.name), "Map" === hb || "Set" === hb ? Array.from(bb) : "Arguments" === hb || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(hb) ? Gu(bb, ub) : void 0
      }
    }

    function Gu(bb, ub) {
      (null == ub || ub > bb.length) && (ub = bb.length);
      for (var hb = 0, Bb = new Array(ub); hb < ub; hb++) Bb[hb] = bb[hb];
      return Bb
    }

    function Uu(bb, ub) {
      var hb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Bb = Object.getOwnPropertySymbols(bb);
        ub && (Bb = Bb.filter((function(ub) {
          return Object.getOwnPropertyDescriptor(bb, ub).enumerable
        }))), hb.push.apply(hb, Bb)
      }
      return hb
    }

    function Lu(bb) {
      for (var ub = 1; ub < arguments.length; ub++) {
        var hb = null != arguments[ub] ? arguments[ub] : {};
        ub % 2 ? Uu(Object(hb), !0).forEach((function(ub) {
          Yu(bb, ub, hb[ub])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(hb)) : Uu(Object(hb)).forEach((function(ub) {
          Object.defineProperty(bb, ub, Object.getOwnPropertyDescriptor(hb, ub))
        }))
      }
      return bb
    }

    function Yu(bb, ub, hb) {
      return ub in bb ? Object.defineProperty(bb, ub, {
        value: hb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ub] = hb, bb
    }

    function Su(bb, ub) {
      if (null == bb) return {};
      var hb, Bb, Ob = function(bb, ub) {
        if (null == bb) return {};
        var hb, Bb, Ob = {},
          Gb = Object.keys(bb);
        for (Bb = 0; Bb < Gb.length; Bb++) hb = Gb[Bb], ub.indexOf(hb) >= 0 || (Ob[hb] = bb[hb]);
        return Ob
      }(bb, ub);
      if (Object.getOwnPropertySymbols) {
        var Gb = Object.getOwnPropertySymbols(bb);
        for (Bb = 0; Bb < Gb.length; Bb++) hb = Gb[Bb], ub.indexOf(hb) >= 0 || Object.prototype.propertyIsEnumerable.call(bb, hb) && (Ob[hb] = bb[hb])
      }
      return Ob
    }
    var au = (0, Bb.forwardRef)((function(bb, ub) {
      var hb = bb.children,
        Ob = Zu(Su(bb, Qb)),
        Gb = Ob.open,
        Ub = Su(Ob, Rb);
      return (0, Bb.useImperativeHandle)(ub, (function() {
        return {
          open: Gb
        }
      }), [Gb]), Bb.createElement(Bb.Fragment, null, hb(Lu(Lu({}, Ub), {}, {
        open: Gb
      })))
    }));
    au.displayName = "Dropzone";
    var Hu = {
      disabled: !1,
      getFilesFromEvent: function(bb) {
        return Ub(this, void 0, void 0, (function() {
          return Lb(this, (function(ub) {
            return Zb(bb) && Zb(bb.dataTransfer) ? [2, ob(bb.dataTransfer, bb.type)] : function(bb) {
              return Zb(bb) && Zb(bb.target)
            }(bb) ? [2, Xb(bb)] : Array.isArray(bb) && bb.every((function(bb) {
              return "getFile" in bb && "function" === typeof bb.getFile
            })) ? [2, pb(bb)] : [2, []]
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
    au.defaultProps = Hu, au.propTypes = {
      children: Gb().func,
      accept: Gb().objectOf(Gb().arrayOf(Gb().string)),
      multiple: Gb().bool,
      preventDropOnDocument: Gb().bool,
      noClick: Gb().bool,
      noKeyboard: Gb().bool,
      noDrag: Gb().bool,
      noDragEventsBubbling: Gb().bool,
      minSize: Gb().number,
      maxSize: Gb().number,
      maxFiles: Gb().number,
      disabled: Gb().bool,
      getFilesFromEvent: Gb().func,
      onFileDialogCancel: Gb().func,
      onFileDialogOpen: Gb().func,
      useFsAccessApi: Gb().bool,
      autoFocus: Gb().bool,
      onDragEnter: Gb().func,
      onDragLeave: Gb().func,
      onDragOver: Gb().func,
      onDrop: Gb().func,
      onDropAccepted: Gb().func,
      onDropRejected: Gb().func,
      onError: Gb().func,
      validator: Gb().func
    };
    var wu = {
      NJ: !1,
      isFileDialogActive: !1,
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1,
      acceptedFiles: [],
      fileRejections: []
    };

    function Zu() {
      var bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        ub = Lu(Lu({}, Hu), bb),
        hb = ub.accept,
        Ob = ub.disabled,
        Gb = ub.getFilesFromEvent,
        Ub = ub.maxSize,
        Lb = ub.minSize,
        Yb = ub.multiple,
        Sb = ub.maxFiles,
        ab = ub.onDragEnter,
        Hb = ub.onDragLeave,
        wb = ub.onDragOver,
        Zb = ub.onDrop,
        Xb = ub.onDropAccepted,
        pb = ub.onDropRejected,
        ob = ub.onFileDialogCancel,
        Ab = ub.onFileDialogOpen,
        lb = ub.useFsAccessApi,
        Kb = ub.autoFocus,
        Wb = ub.preventDropOnDocument,
        Cb = ub.noClick,
        db = ub.noKeyboard,
        rb = ub.noDrag,
        jb = ub.noDragEventsBubbling,
        nb = ub.onError,
        xb = ub.validator,
        vb = (0, Bb.useMemo)((function() {
          return function(bb) {
            if (yb(bb)) return Object.entries(bb).reduce((function(bb, ub) {
              var hb = ib(ub, 2),
                Bb = hb[0],
                Ob = hb[1];
              return [].concat(Db(bb), [Bb], Db(Ob))
            }), []).filter((function(bb) {
              return Tb(bb) || cb(bb)
            })).join(",")
          }(hb)
        }), [hb]),
        tb = (0, Bb.useMemo)((function() {
          return function(bb) {
            return yb(bb) ? [{
              description: "Files",
              accept: Object.entries(bb).filter((function(bb) {
                var ub = ib(bb, 2),
                  hb = ub[0],
                  Bb = ub[1],
                  Ob = !0;
                return Tb(hb) || (console.warn('Skipped "'.concat(hb, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), Ob = !1), Array.isArray(Bb) && Bb.every(cb) || (console.warn('Skipped "'.concat(hb, '" because an invalid file extension was provided.')), Ob = !1), Ob
              })).reduce((function(bb, ub) {
                var hb = ib(ub, 2),
                  Bb = hb[0],
                  Ob = hb[1];
                return zb(zb({}, bb), {}, gb({}, Bb, Ob))
              }), {})
            }] : bb
          }(hb)
        }), [hb]),
        Jb = (0, Bb.useMemo)((function() {
          return "function" === typeof Ab ? Ab : pu
        }), [Ab]),
        eb = (0, Bb.useMemo)((function() {
          return "function" === typeof ob ? ob : pu
        }), [ob]),
        Nb = (0, Bb.useRef)(null),
        sb = (0, Bb.useRef)(null),
        Mb = Bu((0, Bb.useReducer)(Xu, wu), 2),
        mb = Mb[0],
        Ib = Mb[1],
        Qb = mb.NJ,
        Rb = mb.isFileDialogActive,
        Ou = (0, Bb.useRef)("undefined" !== typeof window && window.isSecureContext && lb && "showOpenFilePicker" in window),
        Gu = function() {
          !Ou.current && Rb && setTimeout((function() {
            sb.current && (sb.current.files.length || (Ib({
              type: "closeDialog"
            }), eb()))
          }), 300)
        };
      (0, Bb.useEffect)((function() {
        return window.addEventListener("focus", Gu, !1),
          function() {
            window.removeEventListener("focus", Gu, !1)
          }
      }), [sb, Rb, eb, Ou]);
      var Uu = (0, Bb.useRef)([]),
        au = function(bb) {
          Nb.current && Nb.current.contains(bb.target) || (bb.preventDefault(), Uu.current = [])
        };
      (0, Bb.useEffect)((function() {
        return Wb && (document.addEventListener("dragover", fb, !1), document.addEventListener("drop", au, !1)),
          function() {
            Wb && (document.removeEventListener("dragover", fb), document.removeEventListener("drop", au))
          }
      }), [Nb, Wb]), (0, Bb.useEffect)((function() {
        return !Ob && Kb && Nb.current && Nb.current.focus(),
          function() {}
      }), [Nb, Kb, Ob]);
      var Zu = (0, Bb.useCallback)((function(bb) {
          nb ? nb(bb) : console.error(bb)
        }), [nb]),
        ou = (0, Bb.useCallback)((function(bb) {
          bb.preventDefault(), bb.persist(), gu(bb), Uu.current = [].concat(hu(Uu.current), [bb.target]), Fb(bb) && Promise.resolve(Gb(bb)).then((function(ub) {
            if (!Vb(bb) || jb) {
              var hb = ub.length,
                Bb = hb > 0 && function(bb) {
                  var ub = bb.files,
                    hb = bb.accept,
                    Bb = bb.minSize,
                    Ob = bb.maxSize,
                    Gb = bb.multiple,
                    Ub = bb.maxFiles,
                    Lb = bb.validator;
                  return !(!Gb && ub.length > 1 || Gb && Ub >= 1 && ub.length > Ub) && ub.every((function(bb) {
                    var ub = ib(qb(bb, hb), 1)[0],
                      Gb = ib(Eb(bb, Bb, Ob), 1)[0],
                      Ub = Lb ? Lb(bb) : null;
                    return ub && Gb && !Ub
                  }))
                }({
                  files: ub,
                  accept: vb,
                  minSize: Lb,
                  maxSize: Ub,
                  multiple: Yb,
                  maxFiles: Sb,
                  validator: xb
                });
              Ib({
                isDragAccept: Bb,
                isDragReject: hb > 0 && !Bb,
                isDragActive: !0,
                type: "setDraggedFiles"
              }), ab && ab(bb)
            }
          })).catch((function(bb) {
            return Zu(bb)
          }))
        }), [Gb, ab, Zu, jb, vb, Lb, Ub, Yb, Sb, xb]),
        Au = (0, Bb.useCallback)((function(bb) {
          bb.preventDefault(), bb.persist(), gu(bb);
          var ub = Fb(bb);
          if (ub && bb.dataTransfer) try {
            bb.dataTransfer.dropEffect = "copy"
          } catch (hb) {}
          return ub && wb && wb(bb), !1
        }), [wb, jb]),
        lu = (0, Bb.useCallback)((function(bb) {
          bb.preventDefault(), bb.persist(), gu(bb);
          var ub = Uu.current.filter((function(bb) {
              return Nb.current && Nb.current.contains(bb)
            })),
            hb = ub.indexOf(bb.target); - 1 !== hb && ub.splice(hb, 1), Uu.current = ub, ub.length > 0 || (Ib({
            type: "setDraggedFiles",
            isDragActive: !1,
            isDragAccept: !1,
            isDragReject: !1
          }), Fb(bb) && Hb && Hb(bb))
        }), [Nb, Hb, jb]),
        Ku = (0, Bb.useCallback)((function(bb, ub) {
          var hb = [],
            Bb = [];
          bb.forEach((function(bb) {
            var ub = Bu(qb(bb, vb), 2),
              Ob = ub[0],
              Gb = ub[1],
              Yb = Bu(Eb(bb, Lb, Ub), 2),
              Sb = Yb[0],
              ab = Yb[1],
              Hb = xb ? xb(bb) : null;
            if (Ob && Sb && !Hb) hb.push(bb);
            else {
              var wb = [Gb, ab];
              Hb && (wb = wb.concat(Hb)), Bb.push({
                file: bb,
                errors: wb.filter((function(bb) {
                  return bb
                }))
              })
            }
          })), (!Yb && hb.length > 1 || Yb && Sb >= 1 && hb.length > Sb) && (hb.forEach((function(bb) {
            Bb.push({
              file: bb,
              errors: [Pb]
            })
          })), hb.splice(0)), Ib({
            acceptedFiles: hb,
            fileRejections: Bb,
            type: "setFiles"
          }), Zb && Zb(hb, Bb, ub), Bb.length > 0 && pb && pb(Bb, ub), hb.length > 0 && Xb && Xb(hb, ub)
        }), [Ib, Yb, vb, Lb, Ub, Sb, Zb, Xb, pb, xb]),
        Wu = (0, Bb.useCallback)((function(bb) {
          bb.preventDefault(), bb.persist(), gu(bb), Uu.current = [], Fb(bb) && Promise.resolve(Gb(bb)).then((function(ub) {
            Vb(bb) && !jb || Ku(ub, bb)
          })).catch((function(bb) {
            return Zu(bb)
          })), Ib({
            type: "reset"
          })
        }), [Gb, Ku, Zu, jb]),
        Cu = (0, Bb.useCallback)((function() {
          if (Ou.current) {
            Ib({
              type: "openDialog"
            }), Jb();
            var bb = {
              multiple: Yb,
              types: tb
            };
            window.showOpenFilePicker(bb).then((function(bb) {
              return Gb(bb)
            })).then((function(bb) {
              Ku(bb, null), Ib({
                type: "closeDialog"
              })
            })).catch((function(bb) {
              var ub;
              (ub = bb) instanceof DOMException && ("AbortError" === ub.name || ub.code === ub.ABORT_ERR) ? (eb(bb), Ib({
                type: "closeDialog"
              })) : ! function(bb) {
                return bb instanceof DOMException && ("SecurityError" === bb.name || bb.code === bb.SECURITY_ERR)
              }(bb) ? Zu(bb) : (Ou.current = !1, sb.current ? (sb.current.value = null, sb.current.click()) : Zu(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))
            }))
          } else sb.current && (Ib({
            type: "openDialog"
          }), Jb(), sb.current.value = null, sb.current.click())
        }), [Ib, Jb, eb, lb, Ku, Zu, tb, Yb]),
        du = (0, Bb.useCallback)((function(bb) {
          Nb.current && Nb.current.isEqualNode(bb.target) && (" " !== bb.key && "Enter" !== bb.key && 32 !== bb.keyCode && 13 !== bb.keyCode || (bb.preventDefault(), Cu()))
        }), [Nb, Cu]),
        ru = (0, Bb.useCallback)((function() {
          Ib({
            type: "focus"
          })
        }), []),
        ju = (0, Bb.useCallback)((function() {
          Ib({
            type: "blur"
          })
        }), []),
        nu = (0, Bb.useCallback)((function() {
          Cb || (! function() {
            var bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
            return function(bb) {
              return -1 !== bb.indexOf("MSIE") || -1 !== bb.indexOf("Trident/")
            }(bb) || function(bb) {
              return -1 !== bb.indexOf("Edge/")
            }(bb)
          }() ? Cu() : setTimeout(Cu, 0))
        }), [Cb, Cu]),
        Du = function(bb) {
          return Ob ? null : bb
        },
        xu = function(bb) {
          return db ? null : Du(bb)
        },
        zu = function(bb) {
          return rb ? null : Du(bb)
        },
        gu = function(bb) {
          jb && bb.stopPropagation()
        },
        iu = (0, Bb.useMemo)((function() {
          return function() {
            var bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              ub = bb.refKey,
              hb = void 0 === ub ? "ref" : ub,
              Bb = bb.role,
              Gb = bb.onKeyDown,
              Ub = bb.onFocus,
              Lb = bb.onBlur,
              Yb = bb.onClick,
              Sb = bb.onDragEnter,
              ab = bb.onDragOver,
              Hb = bb.onDragLeave,
              wb = bb.onDrop,
              Zb = Su(bb, bu);
            return Lu(Lu(Yu({
              onKeyDown: xu(kb(Gb, du)),
              onFocus: xu(kb(Ub, ru)),
              onBlur: xu(kb(Lb, ju)),
              onClick: Du(kb(Yb, nu)),
              onDragEnter: zu(kb(Sb, ou)),
              onDragOver: zu(kb(ab, Au)),
              onDragLeave: zu(kb(Hb, lu)),
              onDrop: zu(kb(wb, Wu)),
              role: "string" === typeof Bb && "" !== Bb ? Bb : "presentation"
            }, hb, Nb), Ob || db ? {} : {
              tabIndex: 0
            }), Zb)
          }
        }), [Nb, du, ru, ju, nu, ou, Au, lu, Wu, db, rb, Ob]),
        vu = (0, Bb.useCallback)((function(bb) {
          bb.stopPropagation()
        }), []),
        tu = (0, Bb.useMemo)((function() {
          return function() {
            var bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              ub = bb.refKey,
              hb = void 0 === ub ? "ref" : ub,
              Bb = bb.onChange,
              Ob = bb.onClick,
              Gb = Su(bb, uu);
            return Lu(Lu({}, Yu({
              accept: vb,
              multiple: Yb,
              type: "file",
              style: {
                display: "none"
              },
              onChange: Du(kb(Bb, Wu)),
              onClick: Du(kb(Ob, vu)),
              tabIndex: -1
            }, hb, sb)), Gb)
          }
        }), [sb, hb, Yb, Wu, Ob]);
      return Lu(Lu({}, mb), {}, {
        NJ: Qb && !Ob,
        getRootProps: iu,
        getInputProps: tu,
        rootRef: Nb,
        inputRef: sb,
        open: Du(Cu)
      })
    }

    function Xu(bb, ub) {
      switch (ub.type) {
        case "focus":
          return Lu(Lu({}, bb), {}, {
            NJ: !0
          });
        case "blur":
          return Lu(Lu({}, bb), {}, {
            NJ: !1
          });
        case "openDialog":
          return Lu(Lu({}, wu), {}, {
            isFileDialogActive: !0
          });
        case "closeDialog":
          return Lu(Lu({}, bb), {}, {
            isFileDialogActive: !1
          });
        case "setDraggedFiles":
          return Lu(Lu({}, bb), {}, {
            isDragActive: ub.isDragActive,
            isDragAccept: ub.isDragAccept,
            isDragReject: ub.isDragReject
          });
        case "setFiles":
          return Lu(Lu({}, bb), {}, {
            acceptedFiles: ub.acceptedFiles,
            fileRejections: ub.fileRejections
          });
        case "reset":
          return Lu({}, wu);
        default:
          return bb
      }
    }

    function pu() {}
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);