export const id = 105;
export const ids = [105];
export const modules = {
  4686: (bb, cb) => {
    cb.e = function(bb, cb) {
      if (bb && cb) {
        var sb = Array.isArray(cb) ? cb : cb.split(","),
          kb = bb.name || "",
          Wb = (bb.type || "").toLowerCase(),
          ab = Wb.replace(/\/.*$/, "");
        return sb.some((function(bb) {
          var cb = bb.trim().toLowerCase();
          return "." === cb.charAt(0) ? kb.toLowerCase().endsWith(cb) : cb.endsWith("/*") ? ab === cb.replace(/\/.*$/, "") : Wb === cb
        }))
      }
      return !0
    }
  },
  4665: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => nc
    });
    var kb = sb(64),
      Wb = sb(4669),
      ab = sb.n(Wb);

    function Tb(bb, cb, sb, kb) {
      return new(sb || (sb = Promise))((function(Wb, ab) {
        function Tb(bb) {
          try {
            Ib(kb.next(bb))
          } catch (cb) {
            ab(cb)
          }
        }

        function Ub(bb) {
          try {
            Ib(kb.throw(bb))
          } catch (cb) {
            ab(cb)
          }
        }

        function Ib(bb) {
          var cb;
          bb.done ? Wb(bb.value) : (cb = bb.value, cb instanceof sb ? cb : new sb((function(bb) {
            bb(cb)
          }))).then(Tb, Ub)
        }
        Ib((kb = kb.apply(bb, cb || [])).next())
      }))
    }

    function Ub(bb, cb) {
      var sb, kb, Wb, ab, Tb = {
        label: 0,
        sent: function() {
          if (1 & Wb[0]) throw Wb[1];
          return Wb[1]
        },
        trys: [],
        ops: []
      };
      return ab = {
        next: Ub(0),
        throw: Ub(1),
        return: Ub(2)
      }, "function" === typeof Symbol && (ab[Symbol.iterator] = function() {
        return this
      }), ab;

      function Ub(Ub) {
        return function(Ib) {
          return function(Ub) {
            if (sb) throw new TypeError("Generator is already executing.");
            for (; ab && (ab = 0, Ub[0] && (Tb = 0)), Tb;) try {
              if (sb = 1, kb && (Wb = 2 & Ub[0] ? kb.return : Ub[0] ? kb.throw || ((Wb = kb.return) && Wb.call(kb), 0) : kb.next) && !(Wb = Wb.call(kb, Ub[1])).done) return Wb;
              switch (kb = 0, Wb && (Ub = [2 & Ub[0], Wb.value]), Ub[0]) {
                case 0:
                case 1:
                  Wb = Ub;
                  break;
                case 4:
                  return Tb.label++, {
                    value: Ub[1],
                    done: !1
                  };
                case 5:
                  Tb.label++, kb = Ub[1], Ub = [0];
                  continue;
                case 7:
                  Ub = Tb.ops.pop(), Tb.trys.pop();
                  continue;
                default:
                  if (!(Wb = (Wb = Tb.trys).length > 0 && Wb[Wb.length - 1]) && (6 === Ub[0] || 2 === Ub[0])) {
                    Tb = 0;
                    continue
                  }
                  if (3 === Ub[0] && (!Wb || Ub[1] > Wb[0] && Ub[1] < Wb[3])) {
                    Tb.label = Ub[1];
                    break
                  }
                  if (6 === Ub[0] && Tb.label < Wb[1]) {
                    Tb.label = Wb[1], Wb = Ub;
                    break
                  }
                  if (Wb && Tb.label < Wb[2]) {
                    Tb.label = Wb[2], Tb.ops.push(Ub);
                    break
                  }
                  Wb[2] && Tb.ops.pop(), Tb.trys.pop();
                  continue
              }
              Ub = cb.call(bb, Tb)
            } catch (Ib) {
              Ub = [6, Ib], kb = 0
            } finally {
              sb = Wb = 0
            }
            if (5 & Ub[0]) throw Ub[1];
            return {
              value: Ub[0] ? Ub[1] : void 0,
              done: !0
            }
          }([Ub, Ib])
        }
      }
    }
    Object.create;

    function Ib(bb, cb) {
      var sb = "function" === typeof Symbol && bb[Symbol.iterator];
      if (!sb) return bb;
      var kb, Wb, ab = sb.call(bb),
        Tb = [];
      try {
        for (;
          (void 0 === cb || cb-- > 0) && !(kb = ab.next()).done;) Tb.push(kb.value)
      } catch (Ub) {
        Wb = {
          error: Ub
        }
      } finally {
        try {
          kb && !kb.done && (sb = ab.return) && sb.call(ab)
        } finally {
          if (Wb) throw Wb.error
        }
      }
      return Tb
    }

    function Hb(bb, cb, sb) {
      if (sb || 2 === arguments.length)
        for (var kb, Wb = 0, ab = cb.length; Wb < ab; Wb++) !kb && Wb in cb || (kb || (kb = Array.prototype.slice.call(cb, 0, Wb)), kb[Wb] = cb[Wb]);
      return bb.concat(kb || Array.prototype.slice.call(cb))
    }
    Object.create;
    "function" === typeof SuppressedError && SuppressedError;
    var fb = new Map([
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
      ["jT", "application/vnd.ms-outlook"]
    ]);

    function Mb(bb, cb) {
      var sb = function(bb) {
        var cb = bb.name;
        if (cb && -1 !== cb.lastIndexOf(".") && !bb.type) {
          var sb = cb.split(".").pop().toLowerCase(),
            kb = fb.get(sb);
          kb && Object.defineProperty(bb, "type", {
            value: kb,
            writable: !1,
            configurable: !1,
            enumerable: !0
          })
        }
        return bb
      }(bb);
      if ("string" !== typeof sb.path) {
        var kb = bb.webkitRelativePath;
        Object.defineProperty(sb, "path", {
          value: "string" === typeof cb ? cb : "string" === typeof kb && kb.length > 0 ? kb : bb.name,
          writable: !1,
          configurable: !1,
          enumerable: !0
        })
      }
      return sb
    }
    var Xb = [".DS_Store", "Thumbs.db"];

    function nb(bb) {
      return "object" === typeof bb && null !== bb
    }

    function mb(bb) {
      return Cb(bb.target.files).map((function(bb) {
        return Mb(bb)
      }))
    }

    function lb(bb) {
      return Tb(this, void 0, void 0, (function() {
        return Ub(this, (function(cb) {
          switch (cb.label) {
            case 0:
              return [4, Promise.all(bb.map((function(bb) {
                return bb.getFile()
              })))];
            case 1:
              return [2, cb.sent().map((function(bb) {
                return Mb(bb)
              }))]
          }
        }))
      }))
    }

    function Qb(bb, cb) {
      return Tb(this, void 0, void 0, (function() {
        var sb;
        return Ub(this, (function(kb) {
          switch (kb.label) {
            case 0:
              return bb.items ? (sb = Cb(bb.items).filter((function(bb) {
                return "file" === bb.kind
              })), "drop" !== cb ? [2, sb] : [4, Promise.all(sb.map(Nb))]) : [3, 2];
            case 1:
              return [2, eb(Vb(kb.sent()))];
            case 2:
              return [2, eb(Cb(bb.files).map((function(bb) {
                return Mb(bb)
              })))]
          }
        }))
      }))
    }

    function eb(bb) {
      return bb.filter((function(bb) {
        return -1 === Xb.indexOf(bb.name)
      }))
    }

    function Cb(bb) {
      if (null === bb) return [];
      for (var cb = [], sb = 0; sb < bb.length; sb++) {
        var kb = bb[sb];
        cb.push(kb)
      }
      return cb
    }

    function Nb(bb) {
      if ("function" !== typeof bb.webkitGetAsEntry) return Lb(bb);
      var cb = bb.webkitGetAsEntry();
      return cb && cb.isDirectory ? Yb(cb) : Lb(bb)
    }

    function Vb(bb) {
      return bb.reduce((function(bb, cb) {
        return Hb(Hb([], Ib(bb), !1), Ib(Array.isArray(cb) ? Vb(cb) : [cb]), !1)
      }), [])
    }

    function Lb(bb) {
      var cb = bb.getAsFile();
      if (!cb) return Promise.reject("".concat(bb, " is not a File"));
      var sb = Mb(cb);
      return Promise.resolve(sb)
    }

    function ub(bb) {
      return Tb(this, void 0, void 0, (function() {
        return Ub(this, (function(cb) {
          return [2, bb.isDirectory ? Yb(bb) : hb(bb)]
        }))
      }))
    }

    function Yb(bb) {
      var cb = bb.createReader();
      return new Promise((function(bb, sb) {
        var kb = [];
        ! function Wb() {
          var ab = this;
          cb.readEntries((function(cb) {
            return Tb(ab, void 0, void 0, (function() {
              var ab, Tb, Ib;
              return Ub(this, (function(Ub) {
                switch (Ub.label) {
                  case 0:
                    if (cb.length) return [3, 5];
                    Ub.label = 1;
                  case 1:
                    return Ub.trys.push([1, 3, , 4]), [4, Promise.all(kb)];
                  case 2:
                    return ab = Ub.sent(), bb(ab), [3, 4];
                  case 3:
                    return Tb = Ub.sent(), sb(Tb), [3, 4];
                  case 4:
                    return [3, 6];
                  case 5:
                    Ib = Promise.all(cb.map(ub)), kb.push(Ib), Wb(), Ub.label = 6;
                  case 6:
                    return [2]
                }
              }))
            }))
          }), (function(bb) {
            sb(bb)
          }))
        }()
      }))
    }

    function hb(bb) {
      return Tb(this, void 0, void 0, (function() {
        return Ub(this, (function(cb) {
          return [2, new Promise((function(cb, sb) {
            bb.file((function(sb) {
              var kb = Mb(sb, bb.fullPath);
              cb(kb)
            }), (function(bb) {
              sb(bb)
            }))
          }))]
        }))
      }))
    }
    var Jb = sb(4686);

    function gb(bb) {
      return function(bb) {
        if (Array.isArray(bb)) return Eb(bb)
      }(bb) || function(bb) {
        if ("undefined" !== typeof Symbol && null != bb[Symbol.iterator] || null != bb["@@iterator"]) return Array.from(bb)
      }(bb) || Db(bb) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Bb(bb, cb) {
      var sb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var kb = Object.getOwnPropertySymbols(bb);
        cb && (kb = kb.filter((function(cb) {
          return Object.getOwnPropertyDescriptor(bb, cb).enumerable
        }))), sb.push.apply(sb, kb)
      }
      return sb
    }

    function tb(bb) {
      for (var cb = 1; cb < arguments.length; cb++) {
        var sb = null != arguments[cb] ? arguments[cb] : {};
        cb % 2 ? Bb(Object(sb), !0).forEach((function(cb) {
          yb(bb, cb, sb[cb])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(sb)) : Bb(Object(sb)).forEach((function(cb) {
          Object.defineProperty(bb, cb, Object.getOwnPropertyDescriptor(sb, cb))
        }))
      }
      return bb
    }

    function yb(bb, cb, sb) {
      return cb in bb ? Object.defineProperty(bb, cb, {
        value: sb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[cb] = sb, bb
    }

    function Pb(bb, cb) {
      return function(bb) {
        if (Array.isArray(bb)) return bb
      }(bb) || function(bb, cb) {
        var sb = null == bb ? null : "undefined" !== typeof Symbol && bb[Symbol.iterator] || bb["@@iterator"];
        if (null == sb) return;
        var kb, Wb, ab = [],
          Tb = !0,
          Ub = !1;
        try {
          for (sb = sb.call(bb); !(Tb = (kb = sb.next()).done) && (ab.push(kb.value), !cb || ab.length !== cb); Tb = !0);
        } catch (Ib) {
          Ub = !0, Wb = Ib
        } finally {
          try {
            Tb || null == sb.return || sb.return()
          } finally {
            if (Ub) throw Wb
          }
        }
        return ab
      }(bb, cb) || Db(bb, cb) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Db(bb, cb) {
      if (bb) {
        if ("string" === typeof bb) return Eb(bb, cb);
        var sb = Object.prototype.toString.call(bb).slice(8, -1);
        return "Object" === sb && bb.constructor && (sb = bb.constructor.name), "Map" === sb || "Set" === sb ? Array.from(bb) : "Arguments" === sb || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(sb) ? Eb(bb, cb) : void 0
      }
    }

    function Eb(bb, cb) {
      (null == cb || cb > bb.length) && (cb = bb.length);
      for (var sb = 0, kb = new Array(cb); sb < cb; sb++) kb[sb] = bb[sb];
      return kb
    }
    var ib = "file-invalid-type",
      Ob = "file-too-large",
      Gb = "file-too-small",
      Kb = "too-many-files",
      Zb = function(bb) {
        bb = Array.isArray(bb) && 1 === bb.length ? bb[0] : bb;
        var cb = Array.isArray(bb) ? "one of ".concat(bb.join(", ")) : bb;
        return {
          code: ib,
          message: "File type must be ".concat(cb)
        }
      },
      zb = function(bb) {
        return {
          code: Ob,
          message: "File is larger than ".concat(bb, " ").concat(1 === bb ? "byte" : "bytes")
        }
      },
      qb = function(bb) {
        return {
          code: Gb,
          message: "File is smaller than ".concat(bb, " ").concat(1 === bb ? "byte" : "bytes")
        }
      },
      db = {
        code: Kb,
        message: "Too many files"
      };

    function Ab(bb, cb) {
      var sb = "application/x-moz-file" === bb.type || (0, Jb.e)(bb, cb);
      return [sb, sb ? null : Zb(cb)]
    }

    function wb(bb, cb, sb) {
      if (rb(bb.size))
        if (rb(cb) && rb(sb)) {
          if (bb.size > sb) return [!1, zb(sb)];
          if (bb.size < cb) return [!1, qb(cb)]
        } else {
          if (rb(cb) && bb.size < cb) return [!1, qb(cb)];
          if (rb(sb) && bb.size > sb) return [!1, zb(sb)]
        } return [!0, null]
    }

    function rb(bb) {
      return void 0 !== bb && null !== bb
    }

    function ob(bb) {
      return "function" === typeof bb.isPropagationStopped ? bb.isPropagationStopped() : "undefined" !== typeof bb.cancelBubble && bb.cancelBubble
    }

    function Sb(bb) {
      return bb.dataTransfer ? Array.prototype.some.call(bb.dataTransfer.types, (function(bb) {
        return "Files" === bb || "application/x-moz-file" === bb
      })) : !!bb.target && !!bb.target.files
    }

    function Rb(bb) {
      bb.preventDefault()
    }

    function vb() {
      for (var bb = arguments.length, cb = new Array(bb), sb = 0; sb < bb; sb++) cb[sb] = arguments[sb];
      return function(bb) {
        for (var sb = arguments.length, kb = new Array(sb > 1 ? sb - 1 : 0), Wb = 1; Wb < sb; Wb++) kb[Wb - 1] = arguments[Wb];
        return cb.some((function(cb) {
          return !ob(bb) && cb && cb.apply(void 0, [bb].concat(kb)), ob(bb)
        }))
      }
    }

    function Fb(bb) {
      return "audio/*" === bb || "video/*" === bb || "image/*" === bb || "text/*" === bb || /\w+\/[-+.\w]+/g.test(bb)
    }

    function xb(bb) {
      return /^.*\.[\w]+$/.test(bb)
    }
    var jb = ["children"],
      pb = ["open"],
      bc = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
      cc = ["refKey", "onChange", "onClick"];

    function sc(bb) {
      return function(bb) {
        if (Array.isArray(bb)) return ac(bb)
      }(bb) || function(bb) {
        if ("undefined" !== typeof Symbol && null != bb[Symbol.iterator] || null != bb["@@iterator"]) return Array.from(bb)
      }(bb) || Wc(bb) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function kc(bb, cb) {
      return function(bb) {
        if (Array.isArray(bb)) return bb
      }(bb) || function(bb, cb) {
        var sb = null == bb ? null : "undefined" !== typeof Symbol && bb[Symbol.iterator] || bb["@@iterator"];
        if (null == sb) return;
        var kb, Wb, ab = [],
          Tb = !0,
          Ub = !1;
        try {
          for (sb = sb.call(bb); !(Tb = (kb = sb.next()).done) && (ab.push(kb.value), !cb || ab.length !== cb); Tb = !0);
        } catch (Ib) {
          Ub = !0, Wb = Ib
        } finally {
          try {
            Tb || null == sb.return || sb.return()
          } finally {
            if (Ub) throw Wb
          }
        }
        return ab
      }(bb, cb) || Wc(bb, cb) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Wc(bb, cb) {
      if (bb) {
        if ("string" === typeof bb) return ac(bb, cb);
        var sb = Object.prototype.toString.call(bb).slice(8, -1);
        return "Object" === sb && bb.constructor && (sb = bb.constructor.name), "Map" === sb || "Set" === sb ? Array.from(bb) : "Arguments" === sb || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(sb) ? ac(bb, cb) : void 0
      }
    }

    function ac(bb, cb) {
      (null == cb || cb > bb.length) && (cb = bb.length);
      for (var sb = 0, kb = new Array(cb); sb < cb; sb++) kb[sb] = bb[sb];
      return kb
    }

    function Tc(bb, cb) {
      var sb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var kb = Object.getOwnPropertySymbols(bb);
        cb && (kb = kb.filter((function(cb) {
          return Object.getOwnPropertyDescriptor(bb, cb).enumerable
        }))), sb.push.apply(sb, kb)
      }
      return sb
    }

    function Uc(bb) {
      for (var cb = 1; cb < arguments.length; cb++) {
        var sb = null != arguments[cb] ? arguments[cb] : {};
        cb % 2 ? Tc(Object(sb), !0).forEach((function(cb) {
          Ic(bb, cb, sb[cb])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(sb)) : Tc(Object(sb)).forEach((function(cb) {
          Object.defineProperty(bb, cb, Object.getOwnPropertyDescriptor(sb, cb))
        }))
      }
      return bb
    }

    function Ic(bb, cb, sb) {
      return cb in bb ? Object.defineProperty(bb, cb, {
        value: sb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[cb] = sb, bb
    }

    function Hc(bb, cb) {
      if (null == bb) return {};
      var sb, kb, Wb = function(bb, cb) {
        if (null == bb) return {};
        var sb, kb, Wb = {},
          ab = Object.keys(bb);
        for (kb = 0; kb < ab.length; kb++) sb = ab[kb], cb.indexOf(sb) >= 0 || (Wb[sb] = bb[sb]);
        return Wb
      }(bb, cb);
      if (Object.getOwnPropertySymbols) {
        var ab = Object.getOwnPropertySymbols(bb);
        for (kb = 0; kb < ab.length; kb++) sb = ab[kb], cb.indexOf(sb) >= 0 || Object.prototype.propertyIsEnumerable.call(bb, sb) && (Wb[sb] = bb[sb])
      }
      return Wb
    }
    var fc = (0, kb.forwardRef)((function(bb, cb) {
      var sb = bb.children,
        Wb = nc(Hc(bb, jb)),
        ab = Wb.open,
        Tb = Hc(Wb, pb);
      return (0, kb.useImperativeHandle)(cb, (function() {
        return {
          open: ab
        }
      }), [ab]), kb.createElement(kb.Fragment, null, sb(Uc(Uc({}, Tb), {}, {
        open: ab
      })))
    }));
    fc.displayName = "Dropzone";
    var Mc = {
      disabled: !1,
      getFilesFromEvent: function(bb) {
        return Tb(this, void 0, void 0, (function() {
          return Ub(this, (function(cb) {
            return nb(bb) && nb(bb.dataTransfer) ? [2, Qb(bb.dataTransfer, bb.type)] : function(bb) {
              return nb(bb) && nb(bb.target)
            }(bb) ? [2, mb(bb)] : Array.isArray(bb) && bb.every((function(bb) {
              return "getFile" in bb && "function" === typeof bb.getFile
            })) ? [2, lb(bb)] : [2, []]
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
    fc.defaultProps = Mc, fc.propTypes = {
      children: ab().func,
      accept: ab().objectOf(ab().arrayOf(ab().string)),
      multiple: ab().bool,
      preventDropOnDocument: ab().bool,
      noClick: ab().bool,
      noKeyboard: ab().bool,
      noDrag: ab().bool,
      noDragEventsBubbling: ab().bool,
      minSize: ab().number,
      maxSize: ab().number,
      maxFiles: ab().number,
      disabled: ab().bool,
      getFilesFromEvent: ab().func,
      onFileDialogCancel: ab().func,
      onFileDialogOpen: ab().func,
      useFsAccessApi: ab().bool,
      autoFocus: ab().bool,
      onDragEnter: ab().func,
      onDragLeave: ab().func,
      onDragOver: ab().func,
      onDrop: ab().func,
      onDropAccepted: ab().func,
      onDropRejected: ab().func,
      onError: ab().func,
      validator: ab().func
    };
    var Xc = {
      Yu: !1,
      isFileDialogActive: !1,
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1,
      acceptedFiles: [],
      fileRejections: []
    };

    function nc() {
      var bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        cb = Uc(Uc({}, Mc), bb),
        sb = cb.accept,
        Wb = cb.disabled,
        ab = cb.getFilesFromEvent,
        Tb = cb.maxSize,
        Ub = cb.minSize,
        Ib = cb.multiple,
        Hb = cb.maxFiles,
        fb = cb.onDragEnter,
        Mb = cb.onDragLeave,
        Xb = cb.onDragOver,
        nb = cb.onDrop,
        mb = cb.onDropAccepted,
        lb = cb.onDropRejected,
        Qb = cb.onFileDialogCancel,
        eb = cb.onFileDialogOpen,
        Cb = cb.useFsAccessApi,
        Nb = cb.autoFocus,
        Vb = cb.preventDropOnDocument,
        Lb = cb.noClick,
        ub = cb.noKeyboard,
        Yb = cb.noDrag,
        hb = cb.noDragEventsBubbling,
        Jb = cb.onError,
        Bb = cb.validator,
        Db = (0, kb.useMemo)((function() {
          return function(bb) {
            if (rb(bb)) return Object.entries(bb).reduce((function(bb, cb) {
              var sb = Pb(cb, 2),
                kb = sb[0],
                Wb = sb[1];
              return [].concat(gb(bb), [kb], gb(Wb))
            }), []).filter((function(bb) {
              return Fb(bb) || xb(bb)
            })).join(",")
          }(sb)
        }), [sb]),
        Eb = (0, kb.useMemo)((function() {
          return function(bb) {
            return rb(bb) ? [{
              description: "Files",
              accept: Object.entries(bb).filter((function(bb) {
                var cb = Pb(bb, 2),
                  sb = cb[0],
                  kb = cb[1],
                  Wb = !0;
                return Fb(sb) || (console.warn('Skipped "'.concat(sb, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), Wb = !1), Array.isArray(kb) && kb.every(xb) || (console.warn('Skipped "'.concat(sb, '" because an invalid file extension was provided.')), Wb = !1), Wb
              })).reduce((function(bb, cb) {
                var sb = Pb(cb, 2),
                  kb = sb[0],
                  Wb = sb[1];
                return tb(tb({}, bb), {}, yb({}, kb, Wb))
              }), {})
            }] : bb
          }(sb)
        }), [sb]),
        ib = (0, kb.useMemo)((function() {
          return "function" === typeof eb ? eb : lc
        }), [eb]),
        Ob = (0, kb.useMemo)((function() {
          return "function" === typeof Qb ? Qb : lc
        }), [Qb]),
        Gb = (0, kb.useRef)(null),
        Kb = (0, kb.useRef)(null),
        Zb = kc((0, kb.useReducer)(mc, Xc), 2),
        zb = Zb[0],
        qb = Zb[1],
        jb = zb.Yu,
        pb = zb.isFileDialogActive,
        Wc = (0, kb.useRef)("undefined" !== typeof window && window.isSecureContext && Cb && "showOpenFilePicker" in window),
        ac = function() {
          !Wc.current && pb && setTimeout((function() {
            Kb.current && (Kb.current.files.length || (qb({
              type: "closeDialog"
            }), Ob()))
          }), 300)
        };
      (0, kb.useEffect)((function() {
        return window.addEventListener("focus", ac, !1),
          function() {
            window.removeEventListener("focus", ac, !1)
          }
      }), [Kb, pb, Ob, Wc]);
      var Tc = (0, kb.useRef)([]),
        fc = function(bb) {
          Gb.current && Gb.current.contains(bb.target) || (bb.preventDefault(), Tc.current = [])
        };
      (0, kb.useEffect)((function() {
        return Vb && (document.addEventListener("dragover", Rb, !1), document.addEventListener("drop", fc, !1)),
          function() {
            Vb && (document.removeEventListener("dragover", Rb), document.removeEventListener("drop", fc))
          }
      }), [Gb, Vb]), (0, kb.useEffect)((function() {
        return !Wb && Nb && Gb.current && Gb.current.focus(),
          function() {}
      }), [Gb, Nb, Wb]);
      var nc = (0, kb.useCallback)((function(bb) {
          Jb ? Jb(bb) : console.error(bb)
        }), [Jb]),
        Qc = (0, kb.useCallback)((function(bb) {
          bb.preventDefault(), bb.persist(), yc(bb), Tc.current = [].concat(sc(Tc.current), [bb.target]), Sb(bb) && Promise.resolve(ab(bb)).then((function(cb) {
            if (!ob(bb) || hb) {
              var sb = cb.length,
                kb = sb > 0 && function(bb) {
                  var cb = bb.files,
                    sb = bb.accept,
                    kb = bb.minSize,
                    Wb = bb.maxSize,
                    ab = bb.multiple,
                    Tb = bb.maxFiles,
                    Ub = bb.validator;
                  return !(!ab && cb.length > 1 || ab && Tb >= 1 && cb.length > Tb) && cb.every((function(bb) {
                    var cb = Pb(Ab(bb, sb), 1)[0],
                      ab = Pb(wb(bb, kb, Wb), 1)[0],
                      Tb = Ub ? Ub(bb) : null;
                    return cb && ab && !Tb
                  }))
                }({
                  files: cb,
                  accept: Db,
                  minSize: Ub,
                  maxSize: Tb,
                  multiple: Ib,
                  maxFiles: Hb,
                  validator: Bb
                });
              qb({
                isDragAccept: kb,
                isDragReject: sb > 0 && !kb,
                isDragActive: !0,
                type: "setDraggedFiles"
              }), fb && fb(bb)
            }
          })).catch((function(bb) {
            return nc(bb)
          }))
        }), [ab, fb, nc, hb, Db, Ub, Tb, Ib, Hb, Bb]),
        ec = (0, kb.useCallback)((function(bb) {
          bb.preventDefault(), bb.persist(), yc(bb);
          var cb = Sb(bb);
          if (cb && bb.dataTransfer) try {
            bb.dataTransfer.dropEffect = "copy"
          } catch (sb) {}
          return cb && Xb && Xb(bb), !1
        }), [Xb, hb]),
        Cc = (0, kb.useCallback)((function(bb) {
          bb.preventDefault(), bb.persist(), yc(bb);
          var cb = Tc.current.filter((function(bb) {
              return Gb.current && Gb.current.contains(bb)
            })),
            sb = cb.indexOf(bb.target); - 1 !== sb && cb.splice(sb, 1), Tc.current = cb, cb.length > 0 || (qb({
            type: "setDraggedFiles",
            isDragActive: !1,
            isDragAccept: !1,
            isDragReject: !1
          }), Sb(bb) && Mb && Mb(bb))
        }), [Gb, Mb, hb]),
        Nc = (0, kb.useCallback)((function(bb, cb) {
          var sb = [],
            kb = [];
          bb.forEach((function(bb) {
            var cb = kc(Ab(bb, Db), 2),
              Wb = cb[0],
              ab = cb[1],
              Ib = kc(wb(bb, Ub, Tb), 2),
              Hb = Ib[0],
              fb = Ib[1],
              Mb = Bb ? Bb(bb) : null;
            if (Wb && Hb && !Mb) sb.push(bb);
            else {
              var Xb = [ab, fb];
              Mb && (Xb = Xb.concat(Mb)), kb.push({
                file: bb,
                errors: Xb.filter((function(bb) {
                  return bb
                }))
              })
            }
          })), (!Ib && sb.length > 1 || Ib && Hb >= 1 && sb.length > Hb) && (sb.forEach((function(bb) {
            kb.push({
              file: bb,
              errors: [db]
            })
          })), sb.splice(0)), qb({
            acceptedFiles: sb,
            fileRejections: kb,
            type: "setFiles"
          }), nb && nb(sb, kb, cb), kb.length > 0 && lb && lb(kb, cb), sb.length > 0 && mb && mb(sb, cb)
        }), [qb, Ib, Db, Ub, Tb, Hb, nb, mb, lb, Bb]),
        Vc = (0, kb.useCallback)((function(bb) {
          bb.preventDefault(), bb.persist(), yc(bb), Tc.current = [], Sb(bb) && Promise.resolve(ab(bb)).then((function(cb) {
            ob(bb) && !hb || Nc(cb, bb)
          })).catch((function(bb) {
            return nc(bb)
          })), qb({
            type: "reset"
          })
        }), [ab, Nc, nc, hb]),
        Lc = (0, kb.useCallback)((function() {
          if (Wc.current) {
            qb({
              type: "openDialog"
            }), ib();
            var bb = {
              multiple: Ib,
              types: Eb
            };
            window.showOpenFilePicker(bb).then((function(bb) {
              return ab(bb)
            })).then((function(bb) {
              Nc(bb, null), qb({
                type: "closeDialog"
              })
            })).catch((function(bb) {
              var cb;
              (cb = bb) instanceof DOMException && ("AbortError" === cb.name || cb.code === cb.ABORT_ERR) ? (Ob(bb), qb({
                type: "closeDialog"
              })) : ! function(bb) {
                return bb instanceof DOMException && ("SecurityError" === bb.name || bb.code === bb.SECURITY_ERR)
              }(bb) ? nc(bb) : (Wc.current = !1, Kb.current ? (Kb.current.value = null, Kb.current.click()) : nc(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))
            }))
          } else Kb.current && (qb({
            type: "openDialog"
          }), ib(), Kb.current.value = null, Kb.current.click())
        }), [qb, ib, Ob, Cb, Nc, nc, Eb, Ib]),
        uc = (0, kb.useCallback)((function(bb) {
          Gb.current && Gb.current.isEqualNode(bb.target) && (" " !== bb.key && "Enter" !== bb.key && 32 !== bb.keyCode && 13 !== bb.keyCode || (bb.preventDefault(), Lc()))
        }), [Gb, Lc]),
        Yc = (0, kb.useCallback)((function() {
          qb({
            type: "focus"
          })
        }), []),
        hc = (0, kb.useCallback)((function() {
          qb({
            type: "blur"
          })
        }), []),
        Jc = (0, kb.useCallback)((function() {
          Lb || (! function() {
            var bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
            return function(bb) {
              return -1 !== bb.indexOf("MSIE") || -1 !== bb.indexOf("Trident/")
            }(bb) || function(bb) {
              return -1 !== bb.indexOf("Edge/")
            }(bb)
          }() ? Lc() : setTimeout(Lc, 0))
        }), [Lb, Lc]),
        gc = function(bb) {
          return Wb ? null : bb
        },
        Bc = function(bb) {
          return ub ? null : gc(bb)
        },
        tc = function(bb) {
          return Yb ? null : gc(bb)
        },
        yc = function(bb) {
          hb && bb.stopPropagation()
        },
        Pc = (0, kb.useMemo)((function() {
          return function() {
            var bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              cb = bb.refKey,
              sb = void 0 === cb ? "ref" : cb,
              kb = bb.role,
              ab = bb.onKeyDown,
              Tb = bb.onFocus,
              Ub = bb.onBlur,
              Ib = bb.onClick,
              Hb = bb.onDragEnter,
              fb = bb.onDragOver,
              Mb = bb.onDragLeave,
              Xb = bb.onDrop,
              nb = Hc(bb, bc);
            return Uc(Uc(Ic({
              onKeyDown: Bc(vb(ab, uc)),
              onFocus: Bc(vb(Tb, Yc)),
              onBlur: Bc(vb(Ub, hc)),
              onClick: gc(vb(Ib, Jc)),
              onDragEnter: tc(vb(Hb, Qc)),
              onDragOver: tc(vb(fb, ec)),
              onDragLeave: tc(vb(Mb, Cc)),
              onDrop: tc(vb(Xb, Vc)),
              role: "string" === typeof kb && "" !== kb ? kb : "presentation"
            }, sb, Gb), Wb || ub ? {} : {
              tabIndex: 0
            }), nb)
          }
        }), [Gb, uc, Yc, hc, Jc, Qc, ec, Cc, Vc, ub, Yb, Wb]),
        Dc = (0, kb.useCallback)((function(bb) {
          bb.stopPropagation()
        }), []),
        Ec = (0, kb.useMemo)((function() {
          return function() {
            var bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              cb = bb.refKey,
              sb = void 0 === cb ? "ref" : cb,
              kb = bb.onChange,
              Wb = bb.onClick,
              ab = Hc(bb, cc);
            return Uc(Uc({}, Ic({
              accept: Db,
              multiple: Ib,
              type: "file",
              style: {
                display: "none"
              },
              onChange: gc(vb(kb, Vc)),
              onClick: gc(vb(Wb, Dc)),
              tabIndex: -1
            }, sb, Kb)), ab)
          }
        }), [Kb, sb, Ib, Vc, Wb]);
      return Uc(Uc({}, zb), {}, {
        Yu: jb && !Wb,
        getRootProps: Pc,
        getInputProps: Ec,
        rootRef: Gb,
        inputRef: Kb,
        open: gc(Lc)
      })
    }

    function mc(bb, cb) {
      switch (cb.type) {
        case "focus":
          return Uc(Uc({}, bb), {}, {
            Yu: !0
          });
        case "blur":
          return Uc(Uc({}, bb), {}, {
            Yu: !1
          });
        case "openDialog":
          return Uc(Uc({}, Xc), {}, {
            isFileDialogActive: !0
          });
        case "closeDialog":
          return Uc(Uc({}, bb), {}, {
            isFileDialogActive: !1
          });
        case "setDraggedFiles":
          return Uc(Uc({}, bb), {}, {
            isDragActive: cb.isDragActive,
            isDragAccept: cb.isDragAccept,
            isDragReject: cb.isDragReject
          });
        case "setFiles":
          return Uc(Uc({}, bb), {}, {
            acceptedFiles: cb.acceptedFiles,
            fileRejections: cb.fileRejections
          });
        case "reset":
          return Uc({}, Xc);
        default:
          return bb
      }
    }

    function lc() {}
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);