export const id = 109;
export const ids = [109];
export const modules = {
  5097: (pp, ip) => {
    ip.e = function(pp, ip) {
      if (pp && ip) {
        var cp = Array.isArray(ip) ? ip : ip.split(","),
          Op = pp.name || "",
          op = (pp.type || "").toLowerCase(),
          Ip = op.replace(/\/.*$/, "");
        return cp.some((function(pp) {
          var ip = pp.trim().toLowerCase();
          return "." === ip.charAt(0) ? Op.toLowerCase().endsWith(ip) : ip.endsWith("/*") ? Ip === ip.replace(/\/.*$/, "") : op === ip
        }))
      }
      return !0
    }
  },
  5076: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Ui
    });
    var Op = cp(62),
      op = cp(5081),
      Ip = cp.n(op);

    function Sp(pp, ip, cp, Op) {
      return new(cp || (cp = Promise))((function(op, Ip) {
        function Sp(pp) {
          try {
            Lp(Op.next(pp))
          } catch (ip) {
            Ip(ip)
          }
        }

        function xp(pp) {
          try {
            Lp(Op.throw(pp))
          } catch (ip) {
            Ip(ip)
          }
        }

        function Lp(pp) {
          var ip;
          pp.done ? op(pp.value) : (ip = pp.value, ip instanceof cp ? ip : new cp((function(pp) {
            pp(ip)
          }))).then(Sp, xp)
        }
        Lp((Op = Op.apply(pp, ip || [])).next())
      }))
    }

    function xp(pp, ip) {
      var cp, Op, op, Ip, Sp = {
        label: 0,
        sent: function() {
          if (1 & op[0]) throw op[1];
          return op[1]
        },
        trys: [],
        ops: []
      };
      return Ip = {
        next: xp(0),
        throw: xp(1),
        return: xp(2)
      }, "function" === typeof Symbol && (Ip[Symbol.iterator] = function() {
        return this
      }), Ip;

      function xp(xp) {
        return function(Lp) {
          return function(xp) {
            if (cp) throw new TypeError("Generator is already executing.");
            for (; Ip && (Ip = 0, xp[0] && (Sp = 0)), Sp;) try {
              if (cp = 1, Op && (op = 2 & xp[0] ? Op.return : xp[0] ? Op.throw || ((op = Op.return) && op.call(Op), 0) : Op.next) && !(op = op.call(Op, xp[1])).done) return op;
              switch (Op = 0, op && (xp = [2 & xp[0], op.value]), xp[0]) {
                case 0:
                case 1:
                  op = xp;
                  break;
                case 4:
                  return Sp.label++, {
                    value: xp[1],
                    done: !1
                  };
                case 5:
                  Sp.label++, Op = xp[1], xp = [0];
                  continue;
                case 7:
                  xp = Sp.ops.pop(), Sp.trys.pop();
                  continue;
                default:
                  if (!(op = (op = Sp.trys).length > 0 && op[op.length - 1]) && (6 === xp[0] || 2 === xp[0])) {
                    Sp = 0;
                    continue
                  }
                  if (3 === xp[0] && (!op || xp[1] > op[0] && xp[1] < op[3])) {
                    Sp.label = xp[1];
                    break
                  }
                  if (6 === xp[0] && Sp.label < op[1]) {
                    Sp.label = op[1], op = xp;
                    break
                  }
                  if (op && Sp.label < op[2]) {
                    Sp.label = op[2], Sp.ops.push(xp);
                    break
                  }
                  op[2] && Sp.ops.pop(), Sp.trys.pop();
                  continue
              }
              xp = ip.call(pp, Sp)
            } catch (Lp) {
              xp = [6, Lp], Op = 0
            } finally {
              cp = op = 0
            }
            if (5 & xp[0]) throw xp[1];
            return {
              value: xp[0] ? xp[1] : void 0,
              done: !0
            }
          }([xp, Lp])
        }
      }
    }
    Object.create;

    function Lp(pp, ip) {
      var cp = "function" === typeof Symbol && pp[Symbol.iterator];
      if (!cp) return pp;
      var Op, op, Ip = cp.call(pp),
        Sp = [];
      try {
        for (;
          (void 0 === ip || ip-- > 0) && !(Op = Ip.next()).done;) Sp.push(Op.value)
      } catch (xp) {
        op = {
          error: xp
        }
      } finally {
        try {
          Op && !Op.done && (cp = Ip.return) && cp.call(Ip)
        } finally {
          if (op) throw op.error
        }
      }
      return Sp
    }

    function Yp(pp, ip, cp) {
      if (cp || 2 === arguments.length)
        for (var Op, op = 0, Ip = ip.length; op < Ip; op++) !Op && op in ip || (Op || (Op = Array.prototype.slice.call(ip, 0, op)), Op[op] = ip[op]);
      return pp.concat(Op || Array.prototype.slice.call(ip))
    }
    Object.create;
    "function" === typeof SuppressedError && SuppressedError;
    var Dp = new Map([
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
      ["VD", "application/vnd.ms-outlook"]
    ]);

    function Ap(pp, ip) {
      var cp = function(pp) {
        var ip = pp.name;
        if (ip && -1 !== ip.lastIndexOf(".") && !pp.type) {
          var cp = ip.split(".").pop().toLowerCase(),
            Op = Dp.get(cp);
          Op && Object.defineProperty(pp, "type", {
            value: Op,
            writable: !1,
            configurable: !1,
            enumerable: !0
          })
        }
        return pp
      }(pp);
      if ("string" !== typeof cp.path) {
        var Op = pp.webkitRelativePath;
        Object.defineProperty(cp, "path", {
          value: "string" === typeof ip ? ip : "string" === typeof Op && Op.length > 0 ? Op : pp.name,
          writable: !1,
          configurable: !1,
          enumerable: !0
        })
      }
      return cp
    }
    var Pp = [".DS_Store", "Thumbs.db"];

    function Wp(pp) {
      return "object" === typeof pp && null !== pp
    }

    function yp(pp) {
      return tp(pp.target.files).map((function(pp) {
        return Ap(pp)
      }))
    }

    function Up(pp) {
      return Sp(this, void 0, void 0, (function() {
        return xp(this, (function(ip) {
          switch (ip.label) {
            case 0:
              return [4, Promise.all(pp.map((function(pp) {
                return pp.getFile()
              })))];
            case 1:
              return [2, ip.sent().map((function(pp) {
                return Ap(pp)
              }))]
          }
        }))
      }))
    }

    function wp(pp, ip) {
      return Sp(this, void 0, void 0, (function() {
        var cp;
        return xp(this, (function(Op) {
          switch (Op.label) {
            case 0:
              return pp.items ? (cp = tp(pp.items).filter((function(pp) {
                return "file" === pp.kind
              })), "drop" !== ip ? [2, cp] : [4, Promise.all(cp.map(Hp))]) : [3, 2];
            case 1:
              return [2, vp(dp(Op.sent()))];
            case 2:
              return [2, vp(tp(pp.files).map((function(pp) {
                return Ap(pp)
              })))]
          }
        }))
      }))
    }

    function vp(pp) {
      return pp.filter((function(pp) {
        return -1 === Pp.indexOf(pp.name)
      }))
    }

    function tp(pp) {
      if (null === pp) return [];
      for (var ip = [], cp = 0; cp < pp.length; cp++) {
        var Op = pp[cp];
        ip.push(Op)
      }
      return ip
    }

    function Hp(pp) {
      if ("function" !== typeof pp.webkitGetAsEntry) return ep(pp);
      var ip = pp.webkitGetAsEntry();
      return ip && ip.isDirectory ? kp(ip) : ep(pp)
    }

    function dp(pp) {
      return pp.reduce((function(pp, ip) {
        return Yp(Yp([], Lp(pp), !1), Lp(Array.isArray(ip) ? dp(ip) : [ip]), !1)
      }), [])
    }

    function ep(pp) {
      var ip = pp.getAsFile();
      if (!ip) return Promise.reject("".concat(pp, " is not a File"));
      var cp = Ap(ip);
      return Promise.resolve(cp)
    }

    function jp(pp) {
      return Sp(this, void 0, void 0, (function() {
        return xp(this, (function(ip) {
          return [2, pp.isDirectory ? kp(pp) : mp(pp)]
        }))
      }))
    }

    function kp(pp) {
      var ip = pp.createReader();
      return new Promise((function(pp, cp) {
        var Op = [];
        ! function op() {
          var Ip = this;
          ip.readEntries((function(ip) {
            return Sp(Ip, void 0, void 0, (function() {
              var Ip, Sp, Lp;
              return xp(this, (function(xp) {
                switch (xp.label) {
                  case 0:
                    if (ip.length) return [3, 5];
                    xp.label = 1;
                  case 1:
                    return xp.trys.push([1, 3, , 4]), [4, Promise.all(Op)];
                  case 2:
                    return Ip = xp.sent(), pp(Ip), [3, 4];
                  case 3:
                    return Sp = xp.sent(), cp(Sp), [3, 4];
                  case 4:
                    return [3, 6];
                  case 5:
                    Lp = Promise.all(ip.map(jp)), Op.push(Lp), op(), xp.label = 6;
                  case 6:
                    return [2]
                }
              }))
            }))
          }), (function(pp) {
            cp(pp)
          }))
        }()
      }))
    }

    function mp(pp) {
      return Sp(this, void 0, void 0, (function() {
        return xp(this, (function(ip) {
          return [2, new Promise((function(ip, cp) {
            pp.file((function(cp) {
              var Op = Ap(cp, pp.fullPath);
              ip(Op)
            }), (function(pp) {
              cp(pp)
            }))
          }))]
        }))
      }))
    }
    var Rp = cp(5097);

    function qp(pp) {
      return function(pp) {
        if (Array.isArray(pp)) return Qp(pp)
      }(pp) || function(pp) {
        if ("undefined" !== typeof Symbol && null != pp[Symbol.iterator] || null != pp["@@iterator"]) return Array.from(pp)
      }(pp) || lp(pp) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Mp(pp, ip) {
      var cp = Object.keys(pp);
      if (Object.getOwnPropertySymbols) {
        var Op = Object.getOwnPropertySymbols(pp);
        ip && (Op = Op.filter((function(ip) {
          return Object.getOwnPropertyDescriptor(pp, ip).enumerable
        }))), cp.push.apply(cp, Op)
      }
      return cp
    }

    function Cp(pp) {
      for (var ip = 1; ip < arguments.length; ip++) {
        var cp = null != arguments[ip] ? arguments[ip] : {};
        ip % 2 ? Mp(Object(cp), !0).forEach((function(ip) {
          Ep(pp, ip, cp[ip])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : Mp(Object(cp)).forEach((function(ip) {
          Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
        }))
      }
      return pp
    }

    function Ep(pp, ip, cp) {
      return ip in pp ? Object.defineProperty(pp, ip, {
        value: cp,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : pp[ip] = cp, pp
    }

    function Xp(pp, ip) {
      return function(pp) {
        if (Array.isArray(pp)) return pp
      }(pp) || function(pp, ip) {
        var cp = null == pp ? null : "undefined" !== typeof Symbol && pp[Symbol.iterator] || pp["@@iterator"];
        if (null == cp) return;
        var Op, op, Ip = [],
          Sp = !0,
          xp = !1;
        try {
          for (cp = cp.call(pp); !(Sp = (Op = cp.next()).done) && (Ip.push(Op.value), !ip || Ip.length !== ip); Sp = !0);
        } catch (Lp) {
          xp = !0, op = Lp
        } finally {
          try {
            Sp || null == cp.return || cp.return()
          } finally {
            if (xp) throw op
          }
        }
        return Ip
      }(pp, ip) || lp(pp, ip) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function lp(pp, ip) {
      if (pp) {
        if ("string" === typeof pp) return Qp(pp, ip);
        var cp = Object.prototype.toString.call(pp).slice(8, -1);
        return "Object" === cp && pp.constructor && (cp = pp.constructor.name), "Map" === cp || "Set" === cp ? Array.from(pp) : "Arguments" === cp || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cp) ? Qp(pp, ip) : void 0
      }
    }

    function Qp(pp, ip) {
      (null == ip || ip > pp.length) && (ip = pp.length);
      for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
      return Op
    }
    var Jp = "file-invalid-type",
      Bp = "file-too-large",
      Np = "file-too-small",
      Tp = "too-many-files",
      fp = function(pp) {
        pp = Array.isArray(pp) && 1 === pp.length ? pp[0] : pp;
        var ip = Array.isArray(pp) ? "one of ".concat(pp.join(", ")) : pp;
        return {
          code: Jp,
          message: "File type must be ".concat(ip)
        }
      },
      bp = function(pp) {
        return {
          code: Bp,
          message: "File is larger than ".concat(pp, " ").concat(1 === pp ? "byte" : "bytes")
        }
      },
      hp = function(pp) {
        return {
          code: Np,
          message: "File is smaller than ".concat(pp, " ").concat(1 === pp ? "byte" : "bytes")
        }
      },
      ap = {
        code: Tp,
        message: "Too many files"
      };

    function np(pp, ip) {
      var cp = "application/x-moz-file" === pp.type || (0, Rp.e)(pp, ip);
      return [cp, cp ? null : fp(ip)]
    }

    function Fp(pp, ip, cp) {
      if (gp(pp.size))
        if (gp(ip) && gp(cp)) {
          if (pp.size > cp) return [!1, bp(cp)];
          if (pp.size < ip) return [!1, hp(ip)]
        } else {
          if (gp(ip) && pp.size < ip) return [!1, hp(ip)];
          if (gp(cp) && pp.size > cp) return [!1, bp(cp)]
        } return [!0, null]
    }

    function gp(pp) {
      return void 0 !== pp && null !== pp
    }

    function Gp(pp) {
      return "function" === typeof pp.isPropagationStopped ? pp.isPropagationStopped() : "undefined" !== typeof pp.cancelBubble && pp.cancelBubble
    }

    function rp(pp) {
      return pp.dataTransfer ? Array.prototype.some.call(pp.dataTransfer.types, (function(pp) {
        return "Files" === pp || "application/x-moz-file" === pp
      })) : !!pp.target && !!pp.target.files
    }

    function Zp(pp) {
      pp.preventDefault()
    }

    function zp() {
      for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
      return function(pp) {
        for (var cp = arguments.length, Op = new Array(cp > 1 ? cp - 1 : 0), op = 1; op < cp; op++) Op[op - 1] = arguments[op];
        return ip.some((function(ip) {
          return !Gp(pp) && ip && ip.apply(void 0, [pp].concat(Op)), Gp(pp)
        }))
      }
    }

    function sp(pp) {
      return "audio/*" === pp || "video/*" === pp || "image/*" === pp || "text/*" === pp || /\w+\/[-+.\w]+/g.test(pp)
    }

    function Kp(pp) {
      return /^.*\.[\w]+$/.test(pp)
    }
    var Vp = ["children"],
      ii = ["open"],
      ci = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
      Oi = ["refKey", "onChange", "onClick"];

    function oi(pp) {
      return function(pp) {
        if (Array.isArray(pp)) return xi(pp)
      }(pp) || function(pp) {
        if ("undefined" !== typeof Symbol && null != pp[Symbol.iterator] || null != pp["@@iterator"]) return Array.from(pp)
      }(pp) || Si(pp) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Ii(pp, ip) {
      return function(pp) {
        if (Array.isArray(pp)) return pp
      }(pp) || function(pp, ip) {
        var cp = null == pp ? null : "undefined" !== typeof Symbol && pp[Symbol.iterator] || pp["@@iterator"];
        if (null == cp) return;
        var Op, op, Ip = [],
          Sp = !0,
          xp = !1;
        try {
          for (cp = cp.call(pp); !(Sp = (Op = cp.next()).done) && (Ip.push(Op.value), !ip || Ip.length !== ip); Sp = !0);
        } catch (Lp) {
          xp = !0, op = Lp
        } finally {
          try {
            Sp || null == cp.return || cp.return()
          } finally {
            if (xp) throw op
          }
        }
        return Ip
      }(pp, ip) || Si(pp, ip) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Si(pp, ip) {
      if (pp) {
        if ("string" === typeof pp) return xi(pp, ip);
        var cp = Object.prototype.toString.call(pp).slice(8, -1);
        return "Object" === cp && pp.constructor && (cp = pp.constructor.name), "Map" === cp || "Set" === cp ? Array.from(pp) : "Arguments" === cp || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(cp) ? xi(pp, ip) : void 0
      }
    }

    function xi(pp, ip) {
      (null == ip || ip > pp.length) && (ip = pp.length);
      for (var cp = 0, Op = new Array(ip); cp < ip; cp++) Op[cp] = pp[cp];
      return Op
    }

    function Li(pp, ip) {
      var cp = Object.keys(pp);
      if (Object.getOwnPropertySymbols) {
        var Op = Object.getOwnPropertySymbols(pp);
        ip && (Op = Op.filter((function(ip) {
          return Object.getOwnPropertyDescriptor(pp, ip).enumerable
        }))), cp.push.apply(cp, Op)
      }
      return cp
    }

    function Yi(pp) {
      for (var ip = 1; ip < arguments.length; ip++) {
        var cp = null != arguments[ip] ? arguments[ip] : {};
        ip % 2 ? Li(Object(cp), !0).forEach((function(ip) {
          Di(pp, ip, cp[ip])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(pp, Object.getOwnPropertyDescriptors(cp)) : Li(Object(cp)).forEach((function(ip) {
          Object.defineProperty(pp, ip, Object.getOwnPropertyDescriptor(cp, ip))
        }))
      }
      return pp
    }

    function Di(pp, ip, cp) {
      return ip in pp ? Object.defineProperty(pp, ip, {
        value: cp,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : pp[ip] = cp, pp
    }

    function Ai(pp, ip) {
      if (null == pp) return {};
      var cp, Op, op = function(pp, ip) {
        if (null == pp) return {};
        var cp, Op, op = {},
          Ip = Object.keys(pp);
        for (Op = 0; Op < Ip.length; Op++) cp = Ip[Op], ip.indexOf(cp) >= 0 || (op[cp] = pp[cp]);
        return op
      }(pp, ip);
      if (Object.getOwnPropertySymbols) {
        var Ip = Object.getOwnPropertySymbols(pp);
        for (Op = 0; Op < Ip.length; Op++) cp = Ip[Op], ip.indexOf(cp) >= 0 || Object.prototype.propertyIsEnumerable.call(pp, cp) && (op[cp] = pp[cp])
      }
      return op
    }
    var Pi = (0, Op.forwardRef)((function(pp, ip) {
      var cp = pp.children,
        op = Ui(Ai(pp, Vp)),
        Ip = op.open,
        Sp = Ai(op, ii);
      return (0, Op.useImperativeHandle)(ip, (function() {
        return {
          open: Ip
        }
      }), [Ip]), Op.createElement(Op.Fragment, null, cp(Yi(Yi({}, Sp), {}, {
        open: Ip
      })))
    }));
    Pi.displayName = "Dropzone";
    var Wi = {
      disabled: !1,
      getFilesFromEvent: function(pp) {
        return Sp(this, void 0, void 0, (function() {
          return xp(this, (function(ip) {
            return Wp(pp) && Wp(pp.dataTransfer) ? [2, wp(pp.dataTransfer, pp.type)] : function(pp) {
              return Wp(pp) && Wp(pp.target)
            }(pp) ? [2, yp(pp)] : Array.isArray(pp) && pp.every((function(pp) {
              return "getFile" in pp && "function" === typeof pp.getFile
            })) ? [2, Up(pp)] : [2, []]
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
    Pi.defaultProps = Wi, Pi.propTypes = {
      children: Ip().func,
      accept: Ip().objectOf(Ip().arrayOf(Ip().string)),
      multiple: Ip().bool,
      preventDropOnDocument: Ip().bool,
      noClick: Ip().bool,
      noKeyboard: Ip().bool,
      noDrag: Ip().bool,
      noDragEventsBubbling: Ip().bool,
      minSize: Ip().number,
      maxSize: Ip().number,
      maxFiles: Ip().number,
      disabled: Ip().bool,
      getFilesFromEvent: Ip().func,
      onFileDialogCancel: Ip().func,
      onFileDialogOpen: Ip().func,
      useFsAccessApi: Ip().bool,
      autoFocus: Ip().bool,
      onDragEnter: Ip().func,
      onDragLeave: Ip().func,
      onDragOver: Ip().func,
      onDrop: Ip().func,
      onDropAccepted: Ip().func,
      onDropRejected: Ip().func,
      onError: Ip().func,
      validator: Ip().func
    };
    var yi = {
      lE: !1,
      isFileDialogActive: !1,
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1,
      acceptedFiles: [],
      fileRejections: []
    };

    function Ui() {
      var pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        ip = Yi(Yi({}, Wi), pp),
        cp = ip.accept,
        op = ip.disabled,
        Ip = ip.getFilesFromEvent,
        Sp = ip.maxSize,
        xp = ip.minSize,
        Lp = ip.multiple,
        Yp = ip.maxFiles,
        Dp = ip.onDragEnter,
        Ap = ip.onDragLeave,
        Pp = ip.onDragOver,
        Wp = ip.onDrop,
        yp = ip.onDropAccepted,
        Up = ip.onDropRejected,
        wp = ip.onFileDialogCancel,
        vp = ip.onFileDialogOpen,
        tp = ip.useFsAccessApi,
        Hp = ip.autoFocus,
        dp = ip.preventDropOnDocument,
        ep = ip.noClick,
        jp = ip.noKeyboard,
        kp = ip.noDrag,
        mp = ip.noDragEventsBubbling,
        Rp = ip.onError,
        Mp = ip.validator,
        lp = (0, Op.useMemo)((function() {
          return function(pp) {
            if (gp(pp)) return Object.entries(pp).reduce((function(pp, ip) {
              var cp = Xp(ip, 2),
                Op = cp[0],
                op = cp[1];
              return [].concat(qp(pp), [Op], qp(op))
            }), []).filter((function(pp) {
              return sp(pp) || Kp(pp)
            })).join(",")
          }(cp)
        }), [cp]),
        Qp = (0, Op.useMemo)((function() {
          return function(pp) {
            return gp(pp) ? [{
              description: "Files",
              accept: Object.entries(pp).filter((function(pp) {
                var ip = Xp(pp, 2),
                  cp = ip[0],
                  Op = ip[1],
                  op = !0;
                return sp(cp) || (console.warn('Skipped "'.concat(cp, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), op = !1), Array.isArray(Op) && Op.every(Kp) || (console.warn('Skipped "'.concat(cp, '" because an invalid file extension was provided.')), op = !1), op
              })).reduce((function(pp, ip) {
                var cp = Xp(ip, 2),
                  Op = cp[0],
                  op = cp[1];
                return Cp(Cp({}, pp), {}, Ep({}, Op, op))
              }), {})
            }] : pp
          }(cp)
        }), [cp]),
        Jp = (0, Op.useMemo)((function() {
          return "function" === typeof vp ? vp : vi
        }), [vp]),
        Bp = (0, Op.useMemo)((function() {
          return "function" === typeof wp ? wp : vi
        }), [wp]),
        Np = (0, Op.useRef)(null),
        Tp = (0, Op.useRef)(null),
        fp = Ii((0, Op.useReducer)(wi, yi), 2),
        bp = fp[0],
        hp = fp[1],
        Vp = bp.lE,
        ii = bp.isFileDialogActive,
        Si = (0, Op.useRef)("undefined" !== typeof window && window.isSecureContext && tp && "showOpenFilePicker" in window),
        xi = function() {
          !Si.current && ii && setTimeout((function() {
            Tp.current && (Tp.current.files.length || (hp({
              type: "closeDialog"
            }), Bp()))
          }), 300)
        };
      (0, Op.useEffect)((function() {
        return window.addEventListener("focus", xi, !1),
          function() {
            window.removeEventListener("focus", xi, !1)
          }
      }), [Tp, ii, Bp, Si]);
      var Li = (0, Op.useRef)([]),
        Pi = function(pp) {
          Np.current && Np.current.contains(pp.target) || (pp.preventDefault(), Li.current = [])
        };
      (0, Op.useEffect)((function() {
        return dp && (document.addEventListener("dragover", Zp, !1), document.addEventListener("drop", Pi, !1)),
          function() {
            dp && (document.removeEventListener("dragover", Zp), document.removeEventListener("drop", Pi))
          }
      }), [Np, dp]), (0, Op.useEffect)((function() {
        return !op && Hp && Np.current && Np.current.focus(),
          function() {}
      }), [Np, Hp, op]);
      var Ui = (0, Op.useCallback)((function(pp) {
          Rp ? Rp(pp) : console.error(pp)
        }), [Rp]),
        ti = (0, Op.useCallback)((function(pp) {
          pp.preventDefault(), pp.persist(), Xi(pp), Li.current = [].concat(oi(Li.current), [pp.target]), rp(pp) && Promise.resolve(Ip(pp)).then((function(ip) {
            if (!Gp(pp) || mp) {
              var cp = ip.length,
                Op = cp > 0 && function(pp) {
                  var ip = pp.files,
                    cp = pp.accept,
                    Op = pp.minSize,
                    op = pp.maxSize,
                    Ip = pp.multiple,
                    Sp = pp.maxFiles,
                    xp = pp.validator;
                  return !(!Ip && ip.length > 1 || Ip && Sp >= 1 && ip.length > Sp) && ip.every((function(pp) {
                    var ip = Xp(np(pp, cp), 1)[0],
                      Ip = Xp(Fp(pp, Op, op), 1)[0],
                      Sp = xp ? xp(pp) : null;
                    return ip && Ip && !Sp
                  }))
                }({
                  files: ip,
                  accept: lp,
                  minSize: xp,
                  maxSize: Sp,
                  multiple: Lp,
                  maxFiles: Yp,
                  validator: Mp
                });
              hp({
                isDragAccept: Op,
                isDragReject: cp > 0 && !Op,
                isDragActive: !0,
                type: "setDraggedFiles"
              }), Dp && Dp(pp)
            }
          })).catch((function(pp) {
            return Ui(pp)
          }))
        }), [Ip, Dp, Ui, mp, lp, xp, Sp, Lp, Yp, Mp]),
        Hi = (0, Op.useCallback)((function(pp) {
          pp.preventDefault(), pp.persist(), Xi(pp);
          var ip = rp(pp);
          if (ip && pp.dataTransfer) try {
            pp.dataTransfer.dropEffect = "copy"
          } catch (cp) {}
          return ip && Pp && Pp(pp), !1
        }), [Pp, mp]),
        di = (0, Op.useCallback)((function(pp) {
          pp.preventDefault(), pp.persist(), Xi(pp);
          var ip = Li.current.filter((function(pp) {
              return Np.current && Np.current.contains(pp)
            })),
            cp = ip.indexOf(pp.target); - 1 !== cp && ip.splice(cp, 1), Li.current = ip, ip.length > 0 || (hp({
            type: "setDraggedFiles",
            isDragActive: !1,
            isDragAccept: !1,
            isDragReject: !1
          }), rp(pp) && Ap && Ap(pp))
        }), [Np, Ap, mp]),
        ei = (0, Op.useCallback)((function(pp, ip) {
          var cp = [],
            Op = [];
          pp.forEach((function(pp) {
            var ip = Ii(np(pp, lp), 2),
              op = ip[0],
              Ip = ip[1],
              Lp = Ii(Fp(pp, xp, Sp), 2),
              Yp = Lp[0],
              Dp = Lp[1],
              Ap = Mp ? Mp(pp) : null;
            if (op && Yp && !Ap) cp.push(pp);
            else {
              var Pp = [Ip, Dp];
              Ap && (Pp = Pp.concat(Ap)), Op.push({
                file: pp,
                errors: Pp.filter((function(pp) {
                  return pp
                }))
              })
            }
          })), (!Lp && cp.length > 1 || Lp && Yp >= 1 && cp.length > Yp) && (cp.forEach((function(pp) {
            Op.push({
              file: pp,
              errors: [ap]
            })
          })), cp.splice(0)), hp({
            acceptedFiles: cp,
            fileRejections: Op,
            type: "setFiles"
          }), Wp && Wp(cp, Op, ip), Op.length > 0 && Up && Up(Op, ip), cp.length > 0 && yp && yp(cp, ip)
        }), [hp, Lp, lp, xp, Sp, Yp, Wp, yp, Up, Mp]),
        ui = (0, Op.useCallback)((function(pp) {
          pp.preventDefault(), pp.persist(), Xi(pp), Li.current = [], rp(pp) && Promise.resolve(Ip(pp)).then((function(ip) {
            Gp(pp) && !mp || ei(ip, pp)
          })).catch((function(pp) {
            return Ui(pp)
          })), hp({
            type: "reset"
          })
        }), [Ip, ei, Ui, mp]),
        ji = (0, Op.useCallback)((function() {
          if (Si.current) {
            hp({
              type: "openDialog"
            }), Jp();
            var pp = {
              multiple: Lp,
              types: Qp
            };
            window.showOpenFilePicker(pp).then((function(pp) {
              return Ip(pp)
            })).then((function(pp) {
              ei(pp, null), hp({
                type: "closeDialog"
              })
            })).catch((function(pp) {
              var ip;
              (ip = pp) instanceof DOMException && ("AbortError" === ip.name || ip.code === ip.ABORT_ERR) ? (Bp(pp), hp({
                type: "closeDialog"
              })) : ! function(pp) {
                return pp instanceof DOMException && ("SecurityError" === pp.name || pp.code === pp.SECURITY_ERR)
              }(pp) ? Ui(pp) : (Si.current = !1, Tp.current ? (Tp.current.value = null, Tp.current.click()) : Ui(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))
            }))
          } else Tp.current && (hp({
            type: "openDialog"
          }), Jp(), Tp.current.value = null, Tp.current.click())
        }), [hp, Jp, Bp, tp, ei, Ui, Qp, Lp]),
        ki = (0, Op.useCallback)((function(pp) {
          Np.current && Np.current.isEqualNode(pp.target) && (" " !== pp.key && "Enter" !== pp.key && 32 !== pp.keyCode && 13 !== pp.keyCode || (pp.preventDefault(), ji()))
        }), [Np, ji]),
        mi = (0, Op.useCallback)((function() {
          hp({
            type: "focus"
          })
        }), []),
        Ri = (0, Op.useCallback)((function() {
          hp({
            type: "blur"
          })
        }), []),
        qi = (0, Op.useCallback)((function() {
          ep || (! function() {
            var pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
            return function(pp) {
              return -1 !== pp.indexOf("MSIE") || -1 !== pp.indexOf("Trident/")
            }(pp) || function(pp) {
              return -1 !== pp.indexOf("Edge/")
            }(pp)
          }() ? ji() : setTimeout(ji, 0))
        }), [ep, ji]),
        Mi = function(pp) {
          return op ? null : pp
        },
        Ci = function(pp) {
          return jp ? null : Mi(pp)
        },
        Ei = function(pp) {
          return kp ? null : Mi(pp)
        },
        Xi = function(pp) {
          mp && pp.stopPropagation()
        },
        li = (0, Op.useMemo)((function() {
          return function() {
            var pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              ip = pp.refKey,
              cp = void 0 === ip ? "ref" : ip,
              Op = pp.role,
              Ip = pp.onKeyDown,
              Sp = pp.onFocus,
              xp = pp.onBlur,
              Lp = pp.onClick,
              Yp = pp.onDragEnter,
              Dp = pp.onDragOver,
              Ap = pp.onDragLeave,
              Pp = pp.onDrop,
              Wp = Ai(pp, ci);
            return Yi(Yi(Di({
              onKeyDown: Ci(zp(Ip, ki)),
              onFocus: Ci(zp(Sp, mi)),
              onBlur: Ci(zp(xp, Ri)),
              onClick: Mi(zp(Lp, qi)),
              onDragEnter: Ei(zp(Yp, ti)),
              onDragOver: Ei(zp(Dp, Hi)),
              onDragLeave: Ei(zp(Ap, di)),
              onDrop: Ei(zp(Pp, ui)),
              role: "string" === typeof Op && "" !== Op ? Op : "presentation"
            }, cp, Np), op || jp ? {} : {
              tabIndex: 0
            }), Wp)
          }
        }), [Np, ki, mi, Ri, qi, ti, Hi, di, ui, jp, kp, op]),
        Qi = (0, Op.useCallback)((function(pp) {
          pp.stopPropagation()
        }), []),
        Ji = (0, Op.useMemo)((function() {
          return function() {
            var pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              ip = pp.refKey,
              cp = void 0 === ip ? "ref" : ip,
              Op = pp.onChange,
              op = pp.onClick,
              Ip = Ai(pp, Oi);
            return Yi(Yi({}, Di({
              accept: lp,
              multiple: Lp,
              type: "file",
              style: {
                display: "none"
              },
              onChange: Mi(zp(Op, ui)),
              onClick: Mi(zp(op, Qi)),
              tabIndex: -1
            }, cp, Tp)), Ip)
          }
        }), [Tp, cp, Lp, ui, op]);
      return Yi(Yi({}, bp), {}, {
        lE: Vp && !op,
        getRootProps: li,
        getInputProps: Ji,
        rootRef: Np,
        inputRef: Tp,
        open: Mi(ji)
      })
    }

    function wi(pp, ip) {
      switch (ip.type) {
        case "focus":
          return Yi(Yi({}, pp), {}, {
            lE: !0
          });
        case "blur":
          return Yi(Yi({}, pp), {}, {
            lE: !1
          });
        case "openDialog":
          return Yi(Yi({}, yi), {}, {
            isFileDialogActive: !0
          });
        case "closeDialog":
          return Yi(Yi({}, pp), {}, {
            isFileDialogActive: !1
          });
        case "setDraggedFiles":
          return Yi(Yi({}, pp), {}, {
            isDragActive: ip.isDragActive,
            isDragAccept: ip.isDragAccept,
            isDragReject: ip.isDragReject
          });
        case "setFiles":
          return Yi(Yi({}, pp), {}, {
            acceptedFiles: ip.acceptedFiles,
            fileRejections: ip.fileRejections
          });
        case "reset":
          return Yi({}, yi);
        default:
          return pp
      }
    }

    function vi() {}
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);