export const id = 105;
export const ids = [105];
export const modules = {
  4654: (bb, ab) => {
    ab.b = function(bb, ab) {
      if (bb && ab) {
        var Ub = Array.isArray(ab) ? ab : ab.split(","),
          Ab = bb.name || "",
          Mb = (bb.type || "").toLowerCase(),
          Tb = Mb.replace(/\/.*$/, "");
        return Ub.some((function(bb) {
          var ab = bb.trim().toLowerCase();
          return "." === ab.charAt(0) ? Ab.toLowerCase().endsWith(ab) : ab.endsWith("/*") ? Tb === ab.replace(/\/.*$/, "") : Mb === ab
        }))
      }
      return !0
    }
  },
  4638: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Xa
    });
    var Ab = Ub(52),
      Mb = Ub(4642),
      Tb = Ub.n(Mb);

    function Eb(bb, ab, Ub, Ab) {
      return new(Ub || (Ub = Promise))((function(Mb, Tb) {
        function Eb(bb) {
          try {
            Bb(Ab.next(bb))
          } catch (ab) {
            Tb(ab)
          }
        }

        function Yb(bb) {
          try {
            Bb(Ab.throw(bb))
          } catch (ab) {
            Tb(ab)
          }
        }

        function Bb(bb) {
          var ab;
          bb.done ? Mb(bb.value) : (ab = bb.value, ab instanceof Ub ? ab : new Ub((function(bb) {
            bb(ab)
          }))).then(Eb, Yb)
        }
        Bb((Ab = Ab.apply(bb, ab || [])).next())
      }))
    }

    function Yb(bb, ab) {
      var Ub, Ab, Mb, Tb, Eb = {
        label: 0,
        sent: function() {
          if (1 & Mb[0]) throw Mb[1];
          return Mb[1]
        },
        trys: [],
        ops: []
      };
      return Tb = {
        next: Yb(0),
        throw: Yb(1),
        return: Yb(2)
      }, "function" === typeof Symbol && (Tb[Symbol.iterator] = function() {
        return this
      }), Tb;

      function Yb(Yb) {
        return function(Bb) {
          return function(Yb) {
            if (Ub) throw new TypeError("Generator is already executing.");
            for (; Tb && (Tb = 0, Yb[0] && (Eb = 0)), Eb;) try {
              if (Ub = 1, Ab && (Mb = 2 & Yb[0] ? Ab.return : Yb[0] ? Ab.throw || ((Mb = Ab.return) && Mb.call(Ab), 0) : Ab.next) && !(Mb = Mb.call(Ab, Yb[1])).done) return Mb;
              switch (Ab = 0, Mb && (Yb = [2 & Yb[0], Mb.value]), Yb[0]) {
                case 0:
                case 1:
                  Mb = Yb;
                  break;
                case 4:
                  return Eb.label++, {
                    value: Yb[1],
                    done: !1
                  };
                case 5:
                  Eb.label++, Ab = Yb[1], Yb = [0];
                  continue;
                case 7:
                  Yb = Eb.ops.pop(), Eb.trys.pop();
                  continue;
                default:
                  if (!(Mb = (Mb = Eb.trys).length > 0 && Mb[Mb.length - 1]) && (6 === Yb[0] || 2 === Yb[0])) {
                    Eb = 0;
                    continue
                  }
                  if (3 === Yb[0] && (!Mb || Yb[1] > Mb[0] && Yb[1] < Mb[3])) {
                    Eb.label = Yb[1];
                    break
                  }
                  if (6 === Yb[0] && Eb.label < Mb[1]) {
                    Eb.label = Mb[1], Mb = Yb;
                    break
                  }
                  if (Mb && Eb.label < Mb[2]) {
                    Eb.label = Mb[2], Eb.ops.push(Yb);
                    break
                  }
                  Mb[2] && Eb.ops.pop(), Eb.trys.pop();
                  continue
              }
              Yb = ab.call(bb, Eb)
            } catch (Bb) {
              Yb = [6, Bb], Ab = 0
            } finally {
              Ub = Mb = 0
            }
            if (5 & Yb[0]) throw Yb[1];
            return {
              value: Yb[0] ? Yb[1] : void 0,
              done: !0
            }
          }([Yb, Bb])
        }
      }
    }
    Object.create;

    function Bb(bb, ab) {
      var Ub = "function" === typeof Symbol && bb[Symbol.iterator];
      if (!Ub) return bb;
      var Ab, Mb, Tb = Ub.call(bb),
        Eb = [];
      try {
        for (;
          (void 0 === ab || ab-- > 0) && !(Ab = Tb.next()).done;) Eb.push(Ab.value)
      } catch (Yb) {
        Mb = {
          error: Yb
        }
      } finally {
        try {
          Ab && !Ab.done && (Ub = Tb.return) && Ub.call(Tb)
        } finally {
          if (Mb) throw Mb.error
        }
      }
      return Eb
    }

    function eb(bb, ab, Ub) {
      if (Ub || 2 === arguments.length)
        for (var Ab, Mb = 0, Tb = ab.length; Mb < Tb; Mb++) !Ab && Mb in ab || (Ab || (Ab = Array.prototype.slice.call(ab, 0, Mb)), Ab[Mb] = ab[Mb]);
      return bb.concat(Ab || Array.prototype.slice.call(ab))
    }
    Object.create;
    "function" === typeof SuppressedError && SuppressedError;
    var vb = new Map([
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
      ["fE", "application/vnd.ms-outlook"]
    ]);

    function Lb(bb, ab) {
      var Ub = function(bb) {
        var ab = bb.name;
        if (ab && -1 !== ab.lastIndexOf(".") && !bb.type) {
          var Ub = ab.split(".").pop().toLowerCase(),
            Ab = vb.get(Ub);
          Ab && Object.defineProperty(bb, "type", {
            value: Ab,
            writable: !1,
            configurable: !1,
            enumerable: !0
          })
        }
        return bb
      }(bb);
      if ("string" !== typeof Ub.path) {
        var Ab = bb.webkitRelativePath;
        Object.defineProperty(Ub, "path", {
          value: "string" === typeof ab ? ab : "string" === typeof Ab && Ab.length > 0 ? Ab : bb.name,
          writable: !1,
          configurable: !1,
          enumerable: !0
        })
      }
      return Ub
    }
    var Pb = [".DS_Store", "Thumbs.db"];

    function Xb(bb) {
      return "object" === typeof bb && null !== bb
    }

    function jb(bb) {
      return Zb(bb.target.files).map((function(bb) {
        return Lb(bb)
      }))
    }

    function Rb(bb) {
      return Eb(this, void 0, void 0, (function() {
        return Yb(this, (function(ab) {
          switch (ab.label) {
            case 0:
              return [4, Promise.all(bb.map((function(bb) {
                return bb.getFile()
              })))];
            case 1:
              return [2, ab.sent().map((function(bb) {
                return Lb(bb)
              }))]
          }
        }))
      }))
    }

    function kb(bb, ab) {
      return Eb(this, void 0, void 0, (function() {
        var Ub;
        return Yb(this, (function(Ab) {
          switch (Ab.label) {
            case 0:
              return bb.items ? (Ub = Zb(bb.items).filter((function(bb) {
                return "file" === bb.kind
              })), "drop" !== ab ? [2, Ub] : [4, Promise.all(Ub.map(Db))]) : [3, 2];
            case 1:
              return [2, yb(zb(Ab.sent()))];
            case 2:
              return [2, yb(Zb(bb.files).map((function(bb) {
                return Lb(bb)
              })))]
          }
        }))
      }))
    }

    function yb(bb) {
      return bb.filter((function(bb) {
        return -1 === Pb.indexOf(bb.name)
      }))
    }

    function Zb(bb) {
      if (null === bb) return [];
      for (var ab = [], Ub = 0; Ub < bb.length; Ub++) {
        var Ab = bb[Ub];
        ab.push(Ab)
      }
      return ab
    }

    function Db(bb) {
      if ("function" !== typeof bb.webkitGetAsEntry) return xb(bb);
      var ab = bb.webkitGetAsEntry();
      return ab && ab.isDirectory ? fb(ab) : xb(bb)
    }

    function zb(bb) {
      return bb.reduce((function(bb, ab) {
        return eb(eb([], Bb(bb), !1), Bb(Array.isArray(ab) ? zb(ab) : [ab]), !1)
      }), [])
    }

    function xb(bb) {
      var ab = bb.getAsFile();
      if (!ab) return Promise.reject("".concat(bb, " is not a File"));
      var Ub = Lb(ab);
      return Promise.resolve(Ub)
    }

    function ib(bb) {
      return Eb(this, void 0, void 0, (function() {
        return Yb(this, (function(ab) {
          return [2, bb.isDirectory ? fb(bb) : mb(bb)]
        }))
      }))
    }

    function fb(bb) {
      var ab = bb.createReader();
      return new Promise((function(bb, Ub) {
        var Ab = [];
        ! function Mb() {
          var Tb = this;
          ab.readEntries((function(ab) {
            return Eb(Tb, void 0, void 0, (function() {
              var Tb, Eb, Bb;
              return Yb(this, (function(Yb) {
                switch (Yb.label) {
                  case 0:
                    if (ab.length) return [3, 5];
                    Yb.label = 1;
                  case 1:
                    return Yb.trys.push([1, 3, , 4]), [4, Promise.all(Ab)];
                  case 2:
                    return Tb = Yb.sent(), bb(Tb), [3, 4];
                  case 3:
                    return Eb = Yb.sent(), Ub(Eb), [3, 4];
                  case 4:
                    return [3, 6];
                  case 5:
                    Bb = Promise.all(ab.map(ib)), Ab.push(Bb), Mb(), Yb.label = 6;
                  case 6:
                    return [2]
                }
              }))
            }))
          }), (function(bb) {
            Ub(bb)
          }))
        }()
      }))
    }

    function mb(bb) {
      return Eb(this, void 0, void 0, (function() {
        return Yb(this, (function(ab) {
          return [2, new Promise((function(ab, Ub) {
            bb.file((function(Ub) {
              var Ab = Lb(Ub, bb.fullPath);
              ab(Ab)
            }), (function(bb) {
              Ub(bb)
            }))
          }))]
        }))
      }))
    }
    var pb = Ub(4654);

    function Nb(bb) {
      return function(bb) {
        if (Array.isArray(bb)) return hb(bb)
      }(bb) || function(bb) {
        if ("undefined" !== typeof Symbol && null != bb[Symbol.iterator] || null != bb["@@iterator"]) return Array.from(bb)
      }(bb) || Fb(bb) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Wb(bb, ab) {
      var Ub = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Ab = Object.getOwnPropertySymbols(bb);
        ab && (Ab = Ab.filter((function(ab) {
          return Object.getOwnPropertyDescriptor(bb, ab).enumerable
        }))), Ub.push.apply(Ub, Ab)
      }
      return Ub
    }

    function Hb(bb) {
      for (var ab = 1; ab < arguments.length; ab++) {
        var Ub = null != arguments[ab] ? arguments[ab] : {};
        ab % 2 ? Wb(Object(Ub), !0).forEach((function(ab) {
          Ib(bb, ab, Ub[ab])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(Ub)) : Wb(Object(Ub)).forEach((function(ab) {
          Object.defineProperty(bb, ab, Object.getOwnPropertyDescriptor(Ub, ab))
        }))
      }
      return bb
    }

    function Ib(bb, ab, Ub) {
      return ab in bb ? Object.defineProperty(bb, ab, {
        value: Ub,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ab] = Ub, bb
    }

    function db(bb, ab) {
      return function(bb) {
        if (Array.isArray(bb)) return bb
      }(bb) || function(bb, ab) {
        var Ub = null == bb ? null : "undefined" !== typeof Symbol && bb[Symbol.iterator] || bb["@@iterator"];
        if (null == Ub) return;
        var Ab, Mb, Tb = [],
          Eb = !0,
          Yb = !1;
        try {
          for (Ub = Ub.call(bb); !(Eb = (Ab = Ub.next()).done) && (Tb.push(Ab.value), !ab || Tb.length !== ab); Eb = !0);
        } catch (Bb) {
          Yb = !0, Mb = Bb
        } finally {
          try {
            Eb || null == Ub.return || Ub.return()
          } finally {
            if (Yb) throw Mb
          }
        }
        return Tb
      }(bb, ab) || Fb(bb, ab) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Fb(bb, ab) {
      if (bb) {
        if ("string" === typeof bb) return hb(bb, ab);
        var Ub = Object.prototype.toString.call(bb).slice(8, -1);
        return "Object" === Ub && bb.constructor && (Ub = bb.constructor.name), "Map" === Ub || "Set" === Ub ? Array.from(bb) : "Arguments" === Ub || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Ub) ? hb(bb, ab) : void 0
      }
    }

    function hb(bb, ab) {
      (null == ab || ab > bb.length) && (ab = bb.length);
      for (var Ub = 0, Ab = new Array(ab); Ub < ab; Ub++) Ab[Ub] = bb[Ub];
      return Ab
    }
    var Gb = "file-invalid-type",
      Qb = "file-too-large",
      qb = "file-too-small",
      ub = "too-many-files",
      rb = function(bb) {
        bb = Array.isArray(bb) && 1 === bb.length ? bb[0] : bb;
        var ab = Array.isArray(bb) ? "one of ".concat(bb.join(", ")) : bb;
        return {
          code: Gb,
          message: "File type must be ".concat(ab)
        }
      },
      Kb = function(bb) {
        return {
          code: Qb,
          message: "File is larger than ".concat(bb, " ").concat(1 === bb ? "byte" : "bytes")
        }
      },
      ob = function(bb) {
        return {
          code: qb,
          message: "File is smaller than ".concat(bb, " ").concat(1 === bb ? "byte" : "bytes")
        }
      },
      lb = {
        code: ub,
        message: "Too many files"
      };

    function tb(bb, ab) {
      var Ub = "application/x-moz-file" === bb.type || (0, pb.b)(bb, ab);
      return [Ub, Ub ? null : rb(ab)]
    }

    function wb(bb, ab, Ub) {
      if (sb(bb.size))
        if (sb(ab) && sb(Ub)) {
          if (bb.size > Ub) return [!1, Kb(Ub)];
          if (bb.size < ab) return [!1, ob(ab)]
        } else {
          if (sb(ab) && bb.size < ab) return [!1, ob(ab)];
          if (sb(Ub) && bb.size > Ub) return [!1, Kb(Ub)]
        } return [!0, null]
    }

    function sb(bb) {
      return void 0 !== bb && null !== bb
    }

    function gb(bb) {
      return "function" === typeof bb.isPropagationStopped ? bb.isPropagationStopped() : "undefined" !== typeof bb.cancelBubble && bb.cancelBubble
    }

    function Cb(bb) {
      return bb.dataTransfer ? Array.prototype.some.call(bb.dataTransfer.types, (function(bb) {
        return "Files" === bb || "application/x-moz-file" === bb
      })) : !!bb.target && !!bb.target.files
    }

    function Vb(bb) {
      bb.preventDefault()
    }

    function Ob() {
      for (var bb = arguments.length, ab = new Array(bb), Ub = 0; Ub < bb; Ub++) ab[Ub] = arguments[Ub];
      return function(bb) {
        for (var Ub = arguments.length, Ab = new Array(Ub > 1 ? Ub - 1 : 0), Mb = 1; Mb < Ub; Mb++) Ab[Mb - 1] = arguments[Mb];
        return ab.some((function(ab) {
          return !gb(bb) && ab && ab.apply(void 0, [bb].concat(Ab)), gb(bb)
        }))
      }
    }

    function cb(bb) {
      return "audio/*" === bb || "video/*" === bb || "image/*" === bb || "text/*" === bb || /\w+\/[-+.\w]+/g.test(bb)
    }

    function Jb(bb) {
      return /^.*\.[\w]+$/.test(bb)
    }
    var nb = ["children"],
      Sb = ["open"],
      ba = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
      aa = ["refKey", "onChange", "onClick"];

    function Ua(bb) {
      return function(bb) {
        if (Array.isArray(bb)) return Ta(bb)
      }(bb) || function(bb) {
        if ("undefined" !== typeof Symbol && null != bb[Symbol.iterator] || null != bb["@@iterator"]) return Array.from(bb)
      }(bb) || Ma(bb) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Aa(bb, ab) {
      return function(bb) {
        if (Array.isArray(bb)) return bb
      }(bb) || function(bb, ab) {
        var Ub = null == bb ? null : "undefined" !== typeof Symbol && bb[Symbol.iterator] || bb["@@iterator"];
        if (null == Ub) return;
        var Ab, Mb, Tb = [],
          Eb = !0,
          Yb = !1;
        try {
          for (Ub = Ub.call(bb); !(Eb = (Ab = Ub.next()).done) && (Tb.push(Ab.value), !ab || Tb.length !== ab); Eb = !0);
        } catch (Bb) {
          Yb = !0, Mb = Bb
        } finally {
          try {
            Eb || null == Ub.return || Ub.return()
          } finally {
            if (Yb) throw Mb
          }
        }
        return Tb
      }(bb, ab) || Ma(bb, ab) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Ma(bb, ab) {
      if (bb) {
        if ("string" === typeof bb) return Ta(bb, ab);
        var Ub = Object.prototype.toString.call(bb).slice(8, -1);
        return "Object" === Ub && bb.constructor && (Ub = bb.constructor.name), "Map" === Ub || "Set" === Ub ? Array.from(bb) : "Arguments" === Ub || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Ub) ? Ta(bb, ab) : void 0
      }
    }

    function Ta(bb, ab) {
      (null == ab || ab > bb.length) && (ab = bb.length);
      for (var Ub = 0, Ab = new Array(ab); Ub < ab; Ub++) Ab[Ub] = bb[Ub];
      return Ab
    }

    function Ea(bb, ab) {
      var Ub = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var Ab = Object.getOwnPropertySymbols(bb);
        ab && (Ab = Ab.filter((function(ab) {
          return Object.getOwnPropertyDescriptor(bb, ab).enumerable
        }))), Ub.push.apply(Ub, Ab)
      }
      return Ub
    }

    function Ya(bb) {
      for (var ab = 1; ab < arguments.length; ab++) {
        var Ub = null != arguments[ab] ? arguments[ab] : {};
        ab % 2 ? Ea(Object(Ub), !0).forEach((function(ab) {
          Ba(bb, ab, Ub[ab])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(Ub)) : Ea(Object(Ub)).forEach((function(ab) {
          Object.defineProperty(bb, ab, Object.getOwnPropertyDescriptor(Ub, ab))
        }))
      }
      return bb
    }

    function Ba(bb, ab, Ub) {
      return ab in bb ? Object.defineProperty(bb, ab, {
        value: Ub,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[ab] = Ub, bb
    }

    function ea(bb, ab) {
      if (null == bb) return {};
      var Ub, Ab, Mb = function(bb, ab) {
        if (null == bb) return {};
        var Ub, Ab, Mb = {},
          Tb = Object.keys(bb);
        for (Ab = 0; Ab < Tb.length; Ab++) Ub = Tb[Ab], ab.indexOf(Ub) >= 0 || (Mb[Ub] = bb[Ub]);
        return Mb
      }(bb, ab);
      if (Object.getOwnPropertySymbols) {
        var Tb = Object.getOwnPropertySymbols(bb);
        for (Ab = 0; Ab < Tb.length; Ab++) Ub = Tb[Ab], ab.indexOf(Ub) >= 0 || Object.prototype.propertyIsEnumerable.call(bb, Ub) && (Mb[Ub] = bb[Ub])
      }
      return Mb
    }
    var va = (0, Ab.forwardRef)((function(bb, ab) {
      var Ub = bb.children,
        Mb = Xa(ea(bb, nb)),
        Tb = Mb.open,
        Eb = ea(Mb, Sb);
      return (0, Ab.useImperativeHandle)(ab, (function() {
        return {
          open: Tb
        }
      }), [Tb]), Ab.createElement(Ab.Fragment, null, Ub(Ya(Ya({}, Eb), {}, {
        open: Tb
      })))
    }));
    va.displayName = "Dropzone";
    var La = {
      disabled: !1,
      getFilesFromEvent: function(bb) {
        return Eb(this, void 0, void 0, (function() {
          return Yb(this, (function(ab) {
            return Xb(bb) && Xb(bb.dataTransfer) ? [2, kb(bb.dataTransfer, bb.type)] : function(bb) {
              return Xb(bb) && Xb(bb.target)
            }(bb) ? [2, jb(bb)] : Array.isArray(bb) && bb.every((function(bb) {
              return "getFile" in bb && "function" === typeof bb.getFile
            })) ? [2, Rb(bb)] : [2, []]
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
    va.defaultProps = La, va.propTypes = {
      children: Tb().func,
      accept: Tb().objectOf(Tb().arrayOf(Tb().string)),
      multiple: Tb().bool,
      preventDropOnDocument: Tb().bool,
      noClick: Tb().bool,
      noKeyboard: Tb().bool,
      noDrag: Tb().bool,
      noDragEventsBubbling: Tb().bool,
      minSize: Tb().number,
      maxSize: Tb().number,
      maxFiles: Tb().number,
      disabled: Tb().bool,
      getFilesFromEvent: Tb().func,
      onFileDialogCancel: Tb().func,
      onFileDialogOpen: Tb().func,
      useFsAccessApi: Tb().bool,
      autoFocus: Tb().bool,
      onDragEnter: Tb().func,
      onDragLeave: Tb().func,
      onDragOver: Tb().func,
      onDrop: Tb().func,
      onDropAccepted: Tb().func,
      onDropRejected: Tb().func,
      onError: Tb().func,
      validator: Tb().func
    };
    var Pa = {
      vN: !1,
      isFileDialogActive: !1,
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1,
      acceptedFiles: [],
      fileRejections: []
    };

    function Xa() {
      var bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        ab = Ya(Ya({}, La), bb),
        Ub = ab.accept,
        Mb = ab.disabled,
        Tb = ab.getFilesFromEvent,
        Eb = ab.maxSize,
        Yb = ab.minSize,
        Bb = ab.multiple,
        eb = ab.maxFiles,
        vb = ab.onDragEnter,
        Lb = ab.onDragLeave,
        Pb = ab.onDragOver,
        Xb = ab.onDrop,
        jb = ab.onDropAccepted,
        Rb = ab.onDropRejected,
        kb = ab.onFileDialogCancel,
        yb = ab.onFileDialogOpen,
        Zb = ab.useFsAccessApi,
        Db = ab.autoFocus,
        zb = ab.preventDropOnDocument,
        xb = ab.noClick,
        ib = ab.noKeyboard,
        fb = ab.noDrag,
        mb = ab.noDragEventsBubbling,
        pb = ab.onError,
        Wb = ab.validator,
        Fb = (0, Ab.useMemo)((function() {
          return function(bb) {
            if (sb(bb)) return Object.entries(bb).reduce((function(bb, ab) {
              var Ub = db(ab, 2),
                Ab = Ub[0],
                Mb = Ub[1];
              return [].concat(Nb(bb), [Ab], Nb(Mb))
            }), []).filter((function(bb) {
              return cb(bb) || Jb(bb)
            })).join(",")
          }(Ub)
        }), [Ub]),
        hb = (0, Ab.useMemo)((function() {
          return function(bb) {
            return sb(bb) ? [{
              description: "Files",
              accept: Object.entries(bb).filter((function(bb) {
                var ab = db(bb, 2),
                  Ub = ab[0],
                  Ab = ab[1],
                  Mb = !0;
                return cb(Ub) || (console.warn('Skipped "'.concat(Ub, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), Mb = !1), Array.isArray(Ab) && Ab.every(Jb) || (console.warn('Skipped "'.concat(Ub, '" because an invalid file extension was provided.')), Mb = !1), Mb
              })).reduce((function(bb, ab) {
                var Ub = db(ab, 2),
                  Ab = Ub[0],
                  Mb = Ub[1];
                return Hb(Hb({}, bb), {}, Ib({}, Ab, Mb))
              }), {})
            }] : bb
          }(Ub)
        }), [Ub]),
        Gb = (0, Ab.useMemo)((function() {
          return "function" === typeof yb ? yb : Ra
        }), [yb]),
        Qb = (0, Ab.useMemo)((function() {
          return "function" === typeof kb ? kb : Ra
        }), [kb]),
        qb = (0, Ab.useRef)(null),
        ub = (0, Ab.useRef)(null),
        rb = Aa((0, Ab.useReducer)(ja, Pa), 2),
        Kb = rb[0],
        ob = rb[1],
        nb = Kb.vN,
        Sb = Kb.isFileDialogActive,
        Ma = (0, Ab.useRef)("undefined" !== typeof window && window.isSecureContext && Zb && "showOpenFilePicker" in window),
        Ta = function() {
          !Ma.current && Sb && setTimeout((function() {
            ub.current && (ub.current.files.length || (ob({
              type: "closeDialog"
            }), Qb()))
          }), 300)
        };
      (0, Ab.useEffect)((function() {
        return window.addEventListener("focus", Ta, !1),
          function() {
            window.removeEventListener("focus", Ta, !1)
          }
      }), [ub, Sb, Qb, Ma]);
      var Ea = (0, Ab.useRef)([]),
        va = function(bb) {
          qb.current && qb.current.contains(bb.target) || (bb.preventDefault(), Ea.current = [])
        };
      (0, Ab.useEffect)((function() {
        return zb && (document.addEventListener("dragover", Vb, !1), document.addEventListener("drop", va, !1)),
          function() {
            zb && (document.removeEventListener("dragover", Vb), document.removeEventListener("drop", va))
          }
      }), [qb, zb]), (0, Ab.useEffect)((function() {
        return !Mb && Db && qb.current && qb.current.focus(),
          function() {}
      }), [qb, Db, Mb]);
      var Xa = (0, Ab.useCallback)((function(bb) {
          pb ? pb(bb) : console.error(bb)
        }), [pb]),
        ka = (0, Ab.useCallback)((function(bb) {
          bb.preventDefault(), bb.persist(), Ia(bb), Ea.current = [].concat(Ua(Ea.current), [bb.target]), Cb(bb) && Promise.resolve(Tb(bb)).then((function(ab) {
            if (!gb(bb) || mb) {
              var Ub = ab.length,
                Ab = Ub > 0 && function(bb) {
                  var ab = bb.files,
                    Ub = bb.accept,
                    Ab = bb.minSize,
                    Mb = bb.maxSize,
                    Tb = bb.multiple,
                    Eb = bb.maxFiles,
                    Yb = bb.validator;
                  return !(!Tb && ab.length > 1 || Tb && Eb >= 1 && ab.length > Eb) && ab.every((function(bb) {
                    var ab = db(tb(bb, Ub), 1)[0],
                      Tb = db(wb(bb, Ab, Mb), 1)[0],
                      Eb = Yb ? Yb(bb) : null;
                    return ab && Tb && !Eb
                  }))
                }({
                  files: ab,
                  accept: Fb,
                  minSize: Yb,
                  maxSize: Eb,
                  multiple: Bb,
                  maxFiles: eb,
                  validator: Wb
                });
              ob({
                isDragAccept: Ab,
                isDragReject: Ub > 0 && !Ab,
                isDragActive: !0,
                type: "setDraggedFiles"
              }), vb && vb(bb)
            }
          })).catch((function(bb) {
            return Xa(bb)
          }))
        }), [Tb, vb, Xa, mb, Fb, Yb, Eb, Bb, eb, Wb]),
        ya = (0, Ab.useCallback)((function(bb) {
          bb.preventDefault(), bb.persist(), Ia(bb);
          var ab = Cb(bb);
          if (ab && bb.dataTransfer) try {
            bb.dataTransfer.dropEffect = "copy"
          } catch (Ub) {}
          return ab && Pb && Pb(bb), !1
        }), [Pb, mb]),
        Za = (0, Ab.useCallback)((function(bb) {
          bb.preventDefault(), bb.persist(), Ia(bb);
          var ab = Ea.current.filter((function(bb) {
              return qb.current && qb.current.contains(bb)
            })),
            Ub = ab.indexOf(bb.target); - 1 !== Ub && ab.splice(Ub, 1), Ea.current = ab, ab.length > 0 || (ob({
            type: "setDraggedFiles",
            isDragActive: !1,
            isDragAccept: !1,
            isDragReject: !1
          }), Cb(bb) && Lb && Lb(bb))
        }), [qb, Lb, mb]),
        Da = (0, Ab.useCallback)((function(bb, ab) {
          var Ub = [],
            Ab = [];
          bb.forEach((function(bb) {
            var ab = Aa(tb(bb, Fb), 2),
              Mb = ab[0],
              Tb = ab[1],
              Bb = Aa(wb(bb, Yb, Eb), 2),
              eb = Bb[0],
              vb = Bb[1],
              Lb = Wb ? Wb(bb) : null;
            if (Mb && eb && !Lb) Ub.push(bb);
            else {
              var Pb = [Tb, vb];
              Lb && (Pb = Pb.concat(Lb)), Ab.push({
                file: bb,
                errors: Pb.filter((function(bb) {
                  return bb
                }))
              })
            }
          })), (!Bb && Ub.length > 1 || Bb && eb >= 1 && Ub.length > eb) && (Ub.forEach((function(bb) {
            Ab.push({
              file: bb,
              errors: [lb]
            })
          })), Ub.splice(0)), ob({
            acceptedFiles: Ub,
            fileRejections: Ab,
            type: "setFiles"
          }), Xb && Xb(Ub, Ab, ab), Ab.length > 0 && Rb && Rb(Ab, ab), Ub.length > 0 && jb && jb(Ub, ab)
        }), [ob, Bb, Fb, Yb, Eb, eb, Xb, jb, Rb, Wb]),
        za = (0, Ab.useCallback)((function(bb) {
          bb.preventDefault(), bb.persist(), Ia(bb), Ea.current = [], Cb(bb) && Promise.resolve(Tb(bb)).then((function(ab) {
            gb(bb) && !mb || Da(ab, bb)
          })).catch((function(bb) {
            return Xa(bb)
          })), ob({
            type: "reset"
          })
        }), [Tb, Da, Xa, mb]),
        xa = (0, Ab.useCallback)((function() {
          if (Ma.current) {
            ob({
              type: "openDialog"
            }), Gb();
            var bb = {
              multiple: Bb,
              types: hb
            };
            window.showOpenFilePicker(bb).then((function(bb) {
              return Tb(bb)
            })).then((function(bb) {
              Da(bb, null), ob({
                type: "closeDialog"
              })
            })).catch((function(bb) {
              var ab;
              (ab = bb) instanceof DOMException && ("AbortError" === ab.name || ab.code === ab.ABORT_ERR) ? (Qb(bb), ob({
                type: "closeDialog"
              })) : ! function(bb) {
                return bb instanceof DOMException && ("SecurityError" === bb.name || bb.code === bb.SECURITY_ERR)
              }(bb) ? Xa(bb) : (Ma.current = !1, ub.current ? (ub.current.value = null, ub.current.click()) : Xa(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))
            }))
          } else ub.current && (ob({
            type: "openDialog"
          }), Gb(), ub.current.value = null, ub.current.click())
        }), [ob, Gb, Qb, Zb, Da, Xa, hb, Bb]),
        ia = (0, Ab.useCallback)((function(bb) {
          qb.current && qb.current.isEqualNode(bb.target) && (" " !== bb.key && "Enter" !== bb.key && 32 !== bb.keyCode && 13 !== bb.keyCode || (bb.preventDefault(), xa()))
        }), [qb, xa]),
        fa = (0, Ab.useCallback)((function() {
          ob({
            type: "focus"
          })
        }), []),
        ma = (0, Ab.useCallback)((function() {
          ob({
            type: "blur"
          })
        }), []),
        pa = (0, Ab.useCallback)((function() {
          xb || (! function() {
            var bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
            return function(bb) {
              return -1 !== bb.indexOf("MSIE") || -1 !== bb.indexOf("Trident/")
            }(bb) || function(bb) {
              return -1 !== bb.indexOf("Edge/")
            }(bb)
          }() ? xa() : setTimeout(xa, 0))
        }), [xb, xa]),
        Na = function(bb) {
          return Mb ? null : bb
        },
        Wa = function(bb) {
          return ib ? null : Na(bb)
        },
        Ha = function(bb) {
          return fb ? null : Na(bb)
        },
        Ia = function(bb) {
          mb && bb.stopPropagation()
        },
        da = (0, Ab.useMemo)((function() {
          return function() {
            var bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              ab = bb.refKey,
              Ub = void 0 === ab ? "ref" : ab,
              Ab = bb.role,
              Tb = bb.onKeyDown,
              Eb = bb.onFocus,
              Yb = bb.onBlur,
              Bb = bb.onClick,
              eb = bb.onDragEnter,
              vb = bb.onDragOver,
              Lb = bb.onDragLeave,
              Pb = bb.onDrop,
              Xb = ea(bb, ba);
            return Ya(Ya(Ba({
              onKeyDown: Wa(Ob(Tb, ia)),
              onFocus: Wa(Ob(Eb, fa)),
              onBlur: Wa(Ob(Yb, ma)),
              onClick: Na(Ob(Bb, pa)),
              onDragEnter: Ha(Ob(eb, ka)),
              onDragOver: Ha(Ob(vb, ya)),
              onDragLeave: Ha(Ob(Lb, Za)),
              onDrop: Ha(Ob(Pb, za)),
              role: "string" === typeof Ab && "" !== Ab ? Ab : "presentation"
            }, Ub, qb), Mb || ib ? {} : {
              tabIndex: 0
            }), Xb)
          }
        }), [qb, ia, fa, ma, pa, ka, ya, Za, za, ib, fb, Mb]),
        Fa = (0, Ab.useCallback)((function(bb) {
          bb.stopPropagation()
        }), []),
        ha = (0, Ab.useMemo)((function() {
          return function() {
            var bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              ab = bb.refKey,
              Ub = void 0 === ab ? "ref" : ab,
              Ab = bb.onChange,
              Mb = bb.onClick,
              Tb = ea(bb, aa);
            return Ya(Ya({}, Ba({
              accept: Fb,
              multiple: Bb,
              type: "file",
              style: {
                display: "none"
              },
              onChange: Na(Ob(Ab, za)),
              onClick: Na(Ob(Mb, Fa)),
              tabIndex: -1
            }, Ub, ub)), Tb)
          }
        }), [ub, Ub, Bb, za, Mb]);
      return Ya(Ya({}, Kb), {}, {
        vN: nb && !Mb,
        getRootProps: da,
        getInputProps: ha,
        rootRef: qb,
        inputRef: ub,
        open: Na(xa)
      })
    }

    function ja(bb, ab) {
      switch (ab.type) {
        case "focus":
          return Ya(Ya({}, bb), {}, {
            vN: !0
          });
        case "blur":
          return Ya(Ya({}, bb), {}, {
            vN: !1
          });
        case "openDialog":
          return Ya(Ya({}, Pa), {}, {
            isFileDialogActive: !0
          });
        case "closeDialog":
          return Ya(Ya({}, bb), {}, {
            isFileDialogActive: !1
          });
        case "setDraggedFiles":
          return Ya(Ya({}, bb), {}, {
            isDragActive: ab.isDragActive,
            isDragAccept: ab.isDragAccept,
            isDragReject: ab.isDragReject
          });
        case "setFiles":
          return Ya(Ya({}, bb), {}, {
            acceptedFiles: ab.acceptedFiles,
            fileRejections: ab.fileRejections
          });
        case "reset":
          return Ya({}, Pa);
        default:
          return bb
      }
    }

    function Ra() {}
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);