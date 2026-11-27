export const id = 128;
export const ids = [128];
export const modules = {
  5939: (rr, Sr) => {
    Sr.d = function(rr, Sr) {
      if (rr && Sr) {
        var Qr = Array.isArray(Sr) ? Sr : Sr.split(","),
          Zr = rr.name || "",
          Wr = (rr.type || "").toLowerCase(),
          ar = Wr.replace(/\/.*$/, "");
        return Qr.some((function(rr) {
          var Sr = rr.trim().toLowerCase();
          return "." === Sr.charAt(0) ? Zr.toLowerCase().endsWith(Sr) : Sr.endsWith("/*") ? ar === Sr.replace(/\/.*$/, "") : Wr === Sr
        }))
      }
      return !0
    }
  },
  5919: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => NS
    });
    var Zr = Qr(72),
      Wr = Qr(5927),
      ar = Qr.n(Wr);

    function jr(rr, Sr, Qr, Zr) {
      return new(Qr || (Qr = Promise))((function(Wr, ar) {
        function jr(rr) {
          try {
            fr(Zr.next(rr))
          } catch (Sr) {
            ar(Sr)
          }
        }

        function Ir(rr) {
          try {
            fr(Zr.throw(rr))
          } catch (Sr) {
            ar(Sr)
          }
        }

        function fr(rr) {
          var Sr;
          rr.done ? Wr(rr.value) : (Sr = rr.value, Sr instanceof Qr ? Sr : new Qr((function(rr) {
            rr(Sr)
          }))).then(jr, Ir)
        }
        fr((Zr = Zr.apply(rr, Sr || [])).next())
      }))
    }

    function Ir(rr, Sr) {
      var Qr, Zr, Wr, ar, jr = {
        label: 0,
        sent: function() {
          if (1 & Wr[0]) throw Wr[1];
          return Wr[1]
        },
        trys: [],
        ops: []
      };
      return ar = {
        next: Ir(0),
        throw: Ir(1),
        return: Ir(2)
      }, "function" === typeof Symbol && (ar[Symbol.iterator] = function() {
        return this
      }), ar;

      function Ir(Ir) {
        return function(fr) {
          return function(Ir) {
            if (Qr) throw new TypeError("Generator is already executing.");
            for (; ar && (ar = 0, Ir[0] && (jr = 0)), jr;) try {
              if (Qr = 1, Zr && (Wr = 2 & Ir[0] ? Zr.return : Ir[0] ? Zr.throw || ((Wr = Zr.return) && Wr.call(Zr), 0) : Zr.next) && !(Wr = Wr.call(Zr, Ir[1])).done) return Wr;
              switch (Zr = 0, Wr && (Ir = [2 & Ir[0], Wr.value]), Ir[0]) {
                case 0:
                case 1:
                  Wr = Ir;
                  break;
                case 4:
                  return jr.label++, {
                    value: Ir[1],
                    done: !1
                  };
                case 5:
                  jr.label++, Zr = Ir[1], Ir = [0];
                  continue;
                case 7:
                  Ir = jr.ops.pop(), jr.trys.pop();
                  continue;
                default:
                  if (!(Wr = (Wr = jr.trys).length > 0 && Wr[Wr.length - 1]) && (6 === Ir[0] || 2 === Ir[0])) {
                    jr = 0;
                    continue
                  }
                  if (3 === Ir[0] && (!Wr || Ir[1] > Wr[0] && Ir[1] < Wr[3])) {
                    jr.label = Ir[1];
                    break
                  }
                  if (6 === Ir[0] && jr.label < Wr[1]) {
                    jr.label = Wr[1], Wr = Ir;
                    break
                  }
                  if (Wr && jr.label < Wr[2]) {
                    jr.label = Wr[2], jr.ops.push(Ir);
                    break
                  }
                  Wr[2] && jr.ops.pop(), jr.trys.pop();
                  continue
              }
              Ir = Sr.call(rr, jr)
            } catch (fr) {
              Ir = [6, fr], Zr = 0
            } finally {
              Qr = Wr = 0
            }
            if (5 & Ir[0]) throw Ir[1];
            return {
              value: Ir[0] ? Ir[1] : void 0,
              done: !0
            }
          }([Ir, fr])
        }
      }
    }
    Object.create;

    function fr(rr, Sr) {
      var Qr = "function" === typeof Symbol && rr[Symbol.iterator];
      if (!Qr) return rr;
      var Zr, Wr, ar = Qr.call(rr),
        jr = [];
      try {
        for (;
          (void 0 === Sr || Sr-- > 0) && !(Zr = ar.next()).done;) jr.push(Zr.value)
      } catch (Ir) {
        Wr = {
          error: Ir
        }
      } finally {
        try {
          Zr && !Zr.done && (Qr = ar.return) && Qr.call(ar)
        } finally {
          if (Wr) throw Wr.error
        }
      }
      return jr
    }

    function Er(rr, Sr, Qr) {
      if (Qr || 2 === arguments.length)
        for (var Zr, Wr = 0, ar = Sr.length; Wr < ar; Wr++) !Zr && Wr in Sr || (Zr || (Zr = Array.prototype.slice.call(Sr, 0, Wr)), Zr[Wr] = Sr[Wr]);
      return rr.concat(Zr || Array.prototype.slice.call(Sr))
    }
    Object.create;
    "function" === typeof SuppressedError && SuppressedError;
    var pr = new Map([
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
      ["xj", "application/vnd.ms-outlook"]
    ]);

    function xr(rr, Sr) {
      var Qr = function(rr) {
        var Sr = rr.name;
        if (Sr && -1 !== Sr.lastIndexOf(".") && !rr.type) {
          var Qr = Sr.split(".").pop().toLowerCase(),
            Zr = pr.get(Qr);
          Zr && Object.defineProperty(rr, "type", {
            value: Zr,
            writable: !1,
            configurable: !1,
            enumerable: !0
          })
        }
        return rr
      }(rr);
      if ("string" !== typeof Qr.path) {
        var Zr = rr.webkitRelativePath;
        Object.defineProperty(Qr, "path", {
          value: "string" === typeof Sr ? Sr : "string" === typeof Zr && Zr.length > 0 ? Zr : rr.name,
          writable: !1,
          configurable: !1,
          enumerable: !0
        })
      }
      return Qr
    }
    var mr = [".DS_Store", "Thumbs.db"];

    function Nr(rr) {
      return "object" === typeof rr && null !== rr
    }

    function Ur(rr) {
      return Yr(rr.target.files).map((function(rr) {
        return xr(rr)
      }))
    }

    function tr(rr) {
      return jr(this, void 0, void 0, (function() {
        return Ir(this, (function(Sr) {
          switch (Sr.label) {
            case 0:
              return [4, Promise.all(rr.map((function(rr) {
                return rr.getFile()
              })))];
            case 1:
              return [2, Sr.sent().map((function(rr) {
                return xr(rr)
              }))]
          }
        }))
      }))
    }

    function hr(rr, Sr) {
      return jr(this, void 0, void 0, (function() {
        var Qr;
        return Ir(this, (function(Zr) {
          switch (Zr.label) {
            case 0:
              return rr.items ? (Qr = Yr(rr.items).filter((function(rr) {
                return "file" === rr.kind
              })), "drop" !== Sr ? [2, Qr] : [4, Promise.all(Qr.map(nr))]) : [3, 2];
            case 1:
              return [2, zr(er(Zr.sent()))];
            case 2:
              return [2, zr(Yr(rr.files).map((function(rr) {
                return xr(rr)
              })))]
          }
        }))
      }))
    }

    function zr(rr) {
      return rr.filter((function(rr) {
        return -1 === mr.indexOf(rr.name)
      }))
    }

    function Yr(rr) {
      if (null === rr) return [];
      for (var Sr = [], Qr = 0; Qr < rr.length; Qr++) {
        var Zr = rr[Qr];
        Sr.push(Zr)
      }
      return Sr
    }

    function nr(rr) {
      if ("function" !== typeof rr.webkitGetAsEntry) return Kr(rr);
      var Sr = rr.webkitGetAsEntry();
      return Sr && Sr.isDirectory ? Br(Sr) : Kr(rr)
    }

    function er(rr) {
      return rr.reduce((function(rr, Sr) {
        return Er(Er([], fr(rr), !1), fr(Array.isArray(Sr) ? er(Sr) : [Sr]), !1)
      }), [])
    }

    function Kr(rr) {
      var Sr = rr.getAsFile();
      if (!Sr) return Promise.reject("".concat(rr, " is not a File"));
      var Qr = xr(Sr);
      return Promise.resolve(Qr)
    }

    function yr(rr) {
      return jr(this, void 0, void 0, (function() {
        return Ir(this, (function(Sr) {
          return [2, rr.isDirectory ? Br(rr) : Tr(rr)]
        }))
      }))
    }

    function Br(rr) {
      var Sr = rr.createReader();
      return new Promise((function(rr, Qr) {
        var Zr = [];
        ! function Wr() {
          var ar = this;
          Sr.readEntries((function(Sr) {
            return jr(ar, void 0, void 0, (function() {
              var ar, jr, fr;
              return Ir(this, (function(Ir) {
                switch (Ir.label) {
                  case 0:
                    if (Sr.length) return [3, 5];
                    Ir.label = 1;
                  case 1:
                    return Ir.trys.push([1, 3, , 4]), [4, Promise.all(Zr)];
                  case 2:
                    return ar = Ir.sent(), rr(ar), [3, 4];
                  case 3:
                    return jr = Ir.sent(), Qr(jr), [3, 4];
                  case 4:
                    return [3, 6];
                  case 5:
                    fr = Promise.all(Sr.map(yr)), Zr.push(fr), Wr(), Ir.label = 6;
                  case 6:
                    return [2]
                }
              }))
            }))
          }), (function(rr) {
            Qr(rr)
          }))
        }()
      }))
    }

    function Tr(rr) {
      return jr(this, void 0, void 0, (function() {
        return Ir(this, (function(Sr) {
          return [2, new Promise((function(Sr, Qr) {
            rr.file((function(Qr) {
              var Zr = xr(Qr, rr.fullPath);
              Sr(Zr)
            }), (function(rr) {
              Qr(rr)
            }))
          }))]
        }))
      }))
    }
    var vr = Qr(5939);

    function Or(rr) {
      return function(rr) {
        if (Array.isArray(rr)) return qr(rr)
      }(rr) || function(rr) {
        if ("undefined" !== typeof Symbol && null != rr[Symbol.iterator] || null != rr["@@iterator"]) return Array.from(rr)
      }(rr) || Hr(rr) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Lr(rr, Sr) {
      var Qr = Object.keys(rr);
      if (Object.getOwnPropertySymbols) {
        var Zr = Object.getOwnPropertySymbols(rr);
        Sr && (Zr = Zr.filter((function(Sr) {
          return Object.getOwnPropertyDescriptor(rr, Sr).enumerable
        }))), Qr.push.apply(Qr, Zr)
      }
      return Qr
    }

    function lr(rr) {
      for (var Sr = 1; Sr < arguments.length; Sr++) {
        var Qr = null != arguments[Sr] ? arguments[Sr] : {};
        Sr % 2 ? Lr(Object(Qr), !0).forEach((function(Sr) {
          Xr(rr, Sr, Qr[Sr])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(rr, Object.getOwnPropertyDescriptors(Qr)) : Lr(Object(Qr)).forEach((function(Sr) {
          Object.defineProperty(rr, Sr, Object.getOwnPropertyDescriptor(Qr, Sr))
        }))
      }
      return rr
    }

    function Xr(rr, Sr, Qr) {
      return Sr in rr ? Object.defineProperty(rr, Sr, {
        value: Qr,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : rr[Sr] = Qr, rr
    }

    function Pr(rr, Sr) {
      return function(rr) {
        if (Array.isArray(rr)) return rr
      }(rr) || function(rr, Sr) {
        var Qr = null == rr ? null : "undefined" !== typeof Symbol && rr[Symbol.iterator] || rr["@@iterator"];
        if (null == Qr) return;
        var Zr, Wr, ar = [],
          jr = !0,
          Ir = !1;
        try {
          for (Qr = Qr.call(rr); !(jr = (Zr = Qr.next()).done) && (ar.push(Zr.value), !Sr || ar.length !== Sr); jr = !0);
        } catch (fr) {
          Ir = !0, Wr = fr
        } finally {
          try {
            jr || null == Qr.return || Qr.return()
          } finally {
            if (Ir) throw Wr
          }
        }
        return ar
      }(rr, Sr) || Hr(rr, Sr) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Hr(rr, Sr) {
      if (rr) {
        if ("string" === typeof rr) return qr(rr, Sr);
        var Qr = Object.prototype.toString.call(rr).slice(8, -1);
        return "Object" === Qr && rr.constructor && (Qr = rr.constructor.name), "Map" === Qr || "Set" === Qr ? Array.from(rr) : "Arguments" === Qr || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Qr) ? qr(rr, Sr) : void 0
      }
    }

    function qr(rr, Sr) {
      (null == Sr || Sr > rr.length) && (Sr = rr.length);
      for (var Qr = 0, Zr = new Array(Sr); Qr < Sr; Qr++) Zr[Qr] = rr[Qr];
      return Zr
    }
    var Rr = "file-invalid-type",
      gr = "file-too-large",
      Cr = "file-too-small",
      Mr = "too-many-files",
      Gr = function(rr) {
        rr = Array.isArray(rr) && 1 === rr.length ? rr[0] : rr;
        var Sr = Array.isArray(rr) ? "one of ".concat(rr.join(", ")) : rr;
        return {
          code: Rr,
          message: "File type must be ".concat(Sr)
        }
      },
      kr = function(rr) {
        return {
          code: gr,
          message: "File is larger than ".concat(rr, " ").concat(1 === rr ? "byte" : "bytes")
        }
      },
      Ar = function(rr) {
        return {
          code: Cr,
          message: "File is smaller than ".concat(rr, " ").concat(1 === rr ? "byte" : "bytes")
        }
      },
      Vr = {
        code: Mr,
        message: "Too many files"
      };

    function ir(rr, Sr) {
      var Qr = "application/x-moz-file" === rr.type || (0, vr.d)(rr, Sr);
      return [Qr, Qr ? null : Gr(Sr)]
    }

    function wr(rr, Sr, Qr) {
      if (cr(rr.size))
        if (cr(Sr) && cr(Qr)) {
          if (rr.size > Qr) return [!1, kr(Qr)];
          if (rr.size < Sr) return [!1, Ar(Sr)]
        } else {
          if (cr(Sr) && rr.size < Sr) return [!1, Ar(Sr)];
          if (cr(Qr) && rr.size > Qr) return [!1, kr(Qr)]
        } return [!0, null]
    }

    function cr(rr) {
      return void 0 !== rr && null !== rr
    }

    function Fr(rr) {
      return "function" === typeof rr.isPropagationStopped ? rr.isPropagationStopped() : "undefined" !== typeof rr.cancelBubble && rr.cancelBubble
    }

    function or(rr) {
      return rr.dataTransfer ? Array.prototype.some.call(rr.dataTransfer.types, (function(rr) {
        return "Files" === rr || "application/x-moz-file" === rr
      })) : !!rr.target && !!rr.target.files
    }

    function br(rr) {
      rr.preventDefault()
    }

    function Jr() {
      for (var rr = arguments.length, Sr = new Array(rr), Qr = 0; Qr < rr; Qr++) Sr[Qr] = arguments[Qr];
      return function(rr) {
        for (var Qr = arguments.length, Zr = new Array(Qr > 1 ? Qr - 1 : 0), Wr = 1; Wr < Qr; Wr++) Zr[Wr - 1] = arguments[Wr];
        return Sr.some((function(Sr) {
          return !Fr(rr) && Sr && Sr.apply(void 0, [rr].concat(Zr)), Fr(rr)
        }))
      }
    }

    function Dr(rr) {
      return "audio/*" === rr || "video/*" === rr || "image/*" === rr || "text/*" === rr || /\w+\/[-+.\w]+/g.test(rr)
    }

    function dr(rr) {
      return /^.*\.[\w]+$/.test(rr)
    }
    var sr = ["children"],
      ur = ["open"],
      rS = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
      SS = ["refKey", "onChange", "onClick"];

    function QS(rr) {
      return function(rr) {
        if (Array.isArray(rr)) return aS(rr)
      }(rr) || function(rr) {
        if ("undefined" !== typeof Symbol && null != rr[Symbol.iterator] || null != rr["@@iterator"]) return Array.from(rr)
      }(rr) || WS(rr) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function ZS(rr, Sr) {
      return function(rr) {
        if (Array.isArray(rr)) return rr
      }(rr) || function(rr, Sr) {
        var Qr = null == rr ? null : "undefined" !== typeof Symbol && rr[Symbol.iterator] || rr["@@iterator"];
        if (null == Qr) return;
        var Zr, Wr, ar = [],
          jr = !0,
          Ir = !1;
        try {
          for (Qr = Qr.call(rr); !(jr = (Zr = Qr.next()).done) && (ar.push(Zr.value), !Sr || ar.length !== Sr); jr = !0);
        } catch (fr) {
          Ir = !0, Wr = fr
        } finally {
          try {
            jr || null == Qr.return || Qr.return()
          } finally {
            if (Ir) throw Wr
          }
        }
        return ar
      }(rr, Sr) || WS(rr, Sr) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function WS(rr, Sr) {
      if (rr) {
        if ("string" === typeof rr) return aS(rr, Sr);
        var Qr = Object.prototype.toString.call(rr).slice(8, -1);
        return "Object" === Qr && rr.constructor && (Qr = rr.constructor.name), "Map" === Qr || "Set" === Qr ? Array.from(rr) : "Arguments" === Qr || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Qr) ? aS(rr, Sr) : void 0
      }
    }

    function aS(rr, Sr) {
      (null == Sr || Sr > rr.length) && (Sr = rr.length);
      for (var Qr = 0, Zr = new Array(Sr); Qr < Sr; Qr++) Zr[Qr] = rr[Qr];
      return Zr
    }

    function jS(rr, Sr) {
      var Qr = Object.keys(rr);
      if (Object.getOwnPropertySymbols) {
        var Zr = Object.getOwnPropertySymbols(rr);
        Sr && (Zr = Zr.filter((function(Sr) {
          return Object.getOwnPropertyDescriptor(rr, Sr).enumerable
        }))), Qr.push.apply(Qr, Zr)
      }
      return Qr
    }

    function IS(rr) {
      for (var Sr = 1; Sr < arguments.length; Sr++) {
        var Qr = null != arguments[Sr] ? arguments[Sr] : {};
        Sr % 2 ? jS(Object(Qr), !0).forEach((function(Sr) {
          fS(rr, Sr, Qr[Sr])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(rr, Object.getOwnPropertyDescriptors(Qr)) : jS(Object(Qr)).forEach((function(Sr) {
          Object.defineProperty(rr, Sr, Object.getOwnPropertyDescriptor(Qr, Sr))
        }))
      }
      return rr
    }

    function fS(rr, Sr, Qr) {
      return Sr in rr ? Object.defineProperty(rr, Sr, {
        value: Qr,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : rr[Sr] = Qr, rr
    }

    function ES(rr, Sr) {
      if (null == rr) return {};
      var Qr, Zr, Wr = function(rr, Sr) {
        if (null == rr) return {};
        var Qr, Zr, Wr = {},
          ar = Object.keys(rr);
        for (Zr = 0; Zr < ar.length; Zr++) Qr = ar[Zr], Sr.indexOf(Qr) >= 0 || (Wr[Qr] = rr[Qr]);
        return Wr
      }(rr, Sr);
      if (Object.getOwnPropertySymbols) {
        var ar = Object.getOwnPropertySymbols(rr);
        for (Zr = 0; Zr < ar.length; Zr++) Qr = ar[Zr], Sr.indexOf(Qr) >= 0 || Object.prototype.propertyIsEnumerable.call(rr, Qr) && (Wr[Qr] = rr[Qr])
      }
      return Wr
    }
    var pS = (0, Zr.forwardRef)((function(rr, Sr) {
      var Qr = rr.children,
        Wr = NS(ES(rr, sr)),
        ar = Wr.open,
        jr = ES(Wr, ur);
      return (0, Zr.useImperativeHandle)(Sr, (function() {
        return {
          open: ar
        }
      }), [ar]), Zr.createElement(Zr.Fragment, null, Qr(IS(IS({}, jr), {}, {
        open: ar
      })))
    }));
    pS.displayName = "Dropzone";
    var xS = {
      disabled: !1,
      getFilesFromEvent: function(rr) {
        return jr(this, void 0, void 0, (function() {
          return Ir(this, (function(Sr) {
            return Nr(rr) && Nr(rr.dataTransfer) ? [2, hr(rr.dataTransfer, rr.type)] : function(rr) {
              return Nr(rr) && Nr(rr.target)
            }(rr) ? [2, Ur(rr)] : Array.isArray(rr) && rr.every((function(rr) {
              return "getFile" in rr && "function" === typeof rr.getFile
            })) ? [2, tr(rr)] : [2, []]
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
    pS.defaultProps = xS, pS.propTypes = {
      children: ar().func,
      accept: ar().objectOf(ar().arrayOf(ar().string)),
      multiple: ar().bool,
      preventDropOnDocument: ar().bool,
      noClick: ar().bool,
      noKeyboard: ar().bool,
      noDrag: ar().bool,
      noDragEventsBubbling: ar().bool,
      minSize: ar().number,
      maxSize: ar().number,
      maxFiles: ar().number,
      disabled: ar().bool,
      getFilesFromEvent: ar().func,
      onFileDialogCancel: ar().func,
      onFileDialogOpen: ar().func,
      useFsAccessApi: ar().bool,
      autoFocus: ar().bool,
      onDragEnter: ar().func,
      onDragLeave: ar().func,
      onDragOver: ar().func,
      onDrop: ar().func,
      onDropAccepted: ar().func,
      onDropRejected: ar().func,
      onError: ar().func,
      validator: ar().func
    };
    var mS = {
      pR: !1,
      isFileDialogActive: !1,
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1,
      acceptedFiles: [],
      fileRejections: []
    };

    function NS() {
      var rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        Sr = IS(IS({}, xS), rr),
        Qr = Sr.accept,
        Wr = Sr.disabled,
        ar = Sr.getFilesFromEvent,
        jr = Sr.maxSize,
        Ir = Sr.minSize,
        fr = Sr.multiple,
        Er = Sr.maxFiles,
        pr = Sr.onDragEnter,
        xr = Sr.onDragLeave,
        mr = Sr.onDragOver,
        Nr = Sr.onDrop,
        Ur = Sr.onDropAccepted,
        tr = Sr.onDropRejected,
        hr = Sr.onFileDialogCancel,
        zr = Sr.onFileDialogOpen,
        Yr = Sr.useFsAccessApi,
        nr = Sr.autoFocus,
        er = Sr.preventDropOnDocument,
        Kr = Sr.noClick,
        yr = Sr.noKeyboard,
        Br = Sr.noDrag,
        Tr = Sr.noDragEventsBubbling,
        vr = Sr.onError,
        Lr = Sr.validator,
        Hr = (0, Zr.useMemo)((function() {
          return function(rr) {
            if (cr(rr)) return Object.entries(rr).reduce((function(rr, Sr) {
              var Qr = Pr(Sr, 2),
                Zr = Qr[0],
                Wr = Qr[1];
              return [].concat(Or(rr), [Zr], Or(Wr))
            }), []).filter((function(rr) {
              return Dr(rr) || dr(rr)
            })).join(",")
          }(Qr)
        }), [Qr]),
        qr = (0, Zr.useMemo)((function() {
          return function(rr) {
            return cr(rr) ? [{
              description: "Files",
              accept: Object.entries(rr).filter((function(rr) {
                var Sr = Pr(rr, 2),
                  Qr = Sr[0],
                  Zr = Sr[1],
                  Wr = !0;
                return Dr(Qr) || (console.warn('Skipped "'.concat(Qr, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), Wr = !1), Array.isArray(Zr) && Zr.every(dr) || (console.warn('Skipped "'.concat(Qr, '" because an invalid file extension was provided.')), Wr = !1), Wr
              })).reduce((function(rr, Sr) {
                var Qr = Pr(Sr, 2),
                  Zr = Qr[0],
                  Wr = Qr[1];
                return lr(lr({}, rr), {}, Xr({}, Zr, Wr))
              }), {})
            }] : rr
          }(Qr)
        }), [Qr]),
        Rr = (0, Zr.useMemo)((function() {
          return "function" === typeof zr ? zr : tS
        }), [zr]),
        gr = (0, Zr.useMemo)((function() {
          return "function" === typeof hr ? hr : tS
        }), [hr]),
        Cr = (0, Zr.useRef)(null),
        Mr = (0, Zr.useRef)(null),
        Gr = ZS((0, Zr.useReducer)(US, mS), 2),
        kr = Gr[0],
        Ar = Gr[1],
        sr = kr.pR,
        ur = kr.isFileDialogActive,
        WS = (0, Zr.useRef)("undefined" !== typeof window && window.isSecureContext && Yr && "showOpenFilePicker" in window),
        aS = function() {
          !WS.current && ur && setTimeout((function() {
            Mr.current && (Mr.current.files.length || (Ar({
              type: "closeDialog"
            }), gr()))
          }), 300)
        };
      (0, Zr.useEffect)((function() {
        return window.addEventListener("focus", aS, !1),
          function() {
            window.removeEventListener("focus", aS, !1)
          }
      }), [Mr, ur, gr, WS]);
      var jS = (0, Zr.useRef)([]),
        pS = function(rr) {
          Cr.current && Cr.current.contains(rr.target) || (rr.preventDefault(), jS.current = [])
        };
      (0, Zr.useEffect)((function() {
        return er && (document.addEventListener("dragover", br, !1), document.addEventListener("drop", pS, !1)),
          function() {
            er && (document.removeEventListener("dragover", br), document.removeEventListener("drop", pS))
          }
      }), [Cr, er]), (0, Zr.useEffect)((function() {
        return !Wr && nr && Cr.current && Cr.current.focus(),
          function() {}
      }), [Cr, nr, Wr]);
      var NS = (0, Zr.useCallback)((function(rr) {
          vr ? vr(rr) : console.error(rr)
        }), [vr]),
        hS = (0, Zr.useCallback)((function(rr) {
          rr.preventDefault(), rr.persist(), XS(rr), jS.current = [].concat(QS(jS.current), [rr.target]), or(rr) && Promise.resolve(ar(rr)).then((function(Sr) {
            if (!Fr(rr) || Tr) {
              var Qr = Sr.length,
                Zr = Qr > 0 && function(rr) {
                  var Sr = rr.files,
                    Qr = rr.accept,
                    Zr = rr.minSize,
                    Wr = rr.maxSize,
                    ar = rr.multiple,
                    jr = rr.maxFiles,
                    Ir = rr.validator;
                  return !(!ar && Sr.length > 1 || ar && jr >= 1 && Sr.length > jr) && Sr.every((function(rr) {
                    var Sr = Pr(ir(rr, Qr), 1)[0],
                      ar = Pr(wr(rr, Zr, Wr), 1)[0],
                      jr = Ir ? Ir(rr) : null;
                    return Sr && ar && !jr
                  }))
                }({
                  files: Sr,
                  accept: Hr,
                  minSize: Ir,
                  maxSize: jr,
                  multiple: fr,
                  maxFiles: Er,
                  validator: Lr
                });
              Ar({
                isDragAccept: Zr,
                isDragReject: Qr > 0 && !Zr,
                isDragActive: !0,
                type: "setDraggedFiles"
              }), pr && pr(rr)
            }
          })).catch((function(rr) {
            return NS(rr)
          }))
        }), [ar, pr, NS, Tr, Hr, Ir, jr, fr, Er, Lr]),
        zS = (0, Zr.useCallback)((function(rr) {
          rr.preventDefault(), rr.persist(), XS(rr);
          var Sr = or(rr);
          if (Sr && rr.dataTransfer) try {
            rr.dataTransfer.dropEffect = "copy"
          } catch (Qr) {}
          return Sr && mr && mr(rr), !1
        }), [mr, Tr]),
        YS = (0, Zr.useCallback)((function(rr) {
          rr.preventDefault(), rr.persist(), XS(rr);
          var Sr = jS.current.filter((function(rr) {
              return Cr.current && Cr.current.contains(rr)
            })),
            Qr = Sr.indexOf(rr.target); - 1 !== Qr && Sr.splice(Qr, 1), jS.current = Sr, Sr.length > 0 || (Ar({
            type: "setDraggedFiles",
            isDragActive: !1,
            isDragAccept: !1,
            isDragReject: !1
          }), or(rr) && xr && xr(rr))
        }), [Cr, xr, Tr]),
        nS = (0, Zr.useCallback)((function(rr, Sr) {
          var Qr = [],
            Zr = [];
          rr.forEach((function(rr) {
            var Sr = ZS(ir(rr, Hr), 2),
              Wr = Sr[0],
              ar = Sr[1],
              fr = ZS(wr(rr, Ir, jr), 2),
              Er = fr[0],
              pr = fr[1],
              xr = Lr ? Lr(rr) : null;
            if (Wr && Er && !xr) Qr.push(rr);
            else {
              var mr = [ar, pr];
              xr && (mr = mr.concat(xr)), Zr.push({
                file: rr,
                errors: mr.filter((function(rr) {
                  return rr
                }))
              })
            }
          })), (!fr && Qr.length > 1 || fr && Er >= 1 && Qr.length > Er) && (Qr.forEach((function(rr) {
            Zr.push({
              file: rr,
              errors: [Vr]
            })
          })), Qr.splice(0)), Ar({
            acceptedFiles: Qr,
            fileRejections: Zr,
            type: "setFiles"
          }), Nr && Nr(Qr, Zr, Sr), Zr.length > 0 && tr && tr(Zr, Sr), Qr.length > 0 && Ur && Ur(Qr, Sr)
        }), [Ar, fr, Hr, Ir, jr, Er, Nr, Ur, tr, Lr]),
        eS = (0, Zr.useCallback)((function(rr) {
          rr.preventDefault(), rr.persist(), XS(rr), jS.current = [], or(rr) && Promise.resolve(ar(rr)).then((function(Sr) {
            Fr(rr) && !Tr || nS(Sr, rr)
          })).catch((function(rr) {
            return NS(rr)
          })), Ar({
            type: "reset"
          })
        }), [ar, nS, NS, Tr]),
        KS = (0, Zr.useCallback)((function() {
          if (WS.current) {
            Ar({
              type: "openDialog"
            }), Rr();
            var rr = {
              multiple: fr,
              types: qr
            };
            window.showOpenFilePicker(rr).then((function(rr) {
              return ar(rr)
            })).then((function(rr) {
              nS(rr, null), Ar({
                type: "closeDialog"
              })
            })).catch((function(rr) {
              var Sr;
              (Sr = rr) instanceof DOMException && ("AbortError" === Sr.name || Sr.code === Sr.ABORT_ERR) ? (gr(rr), Ar({
                type: "closeDialog"
              })) : ! function(rr) {
                return rr instanceof DOMException && ("SecurityError" === rr.name || rr.code === rr.SECURITY_ERR)
              }(rr) ? NS(rr) : (WS.current = !1, Mr.current ? (Mr.current.value = null, Mr.current.click()) : NS(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))
            }))
          } else Mr.current && (Ar({
            type: "openDialog"
          }), Rr(), Mr.current.value = null, Mr.current.click())
        }), [Ar, Rr, gr, Yr, nS, NS, qr, fr]),
        yS = (0, Zr.useCallback)((function(rr) {
          Cr.current && Cr.current.isEqualNode(rr.target) && (" " !== rr.key && "Enter" !== rr.key && 32 !== rr.keyCode && 13 !== rr.keyCode || (rr.preventDefault(), KS()))
        }), [Cr, KS]),
        BS = (0, Zr.useCallback)((function() {
          Ar({
            type: "focus"
          })
        }), []),
        TS = (0, Zr.useCallback)((function() {
          Ar({
            type: "blur"
          })
        }), []),
        vS = (0, Zr.useCallback)((function() {
          Kr || (! function() {
            var rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
            return function(rr) {
              return -1 !== rr.indexOf("MSIE") || -1 !== rr.indexOf("Trident/")
            }(rr) || function(rr) {
              return -1 !== rr.indexOf("Edge/")
            }(rr)
          }() ? KS() : setTimeout(KS, 0))
        }), [Kr, KS]),
        OS = function(rr) {
          return Wr ? null : rr
        },
        LS = function(rr) {
          return yr ? null : OS(rr)
        },
        lS = function(rr) {
          return Br ? null : OS(rr)
        },
        XS = function(rr) {
          Tr && rr.stopPropagation()
        },
        PS = (0, Zr.useMemo)((function() {
          return function() {
            var rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              Sr = rr.refKey,
              Qr = void 0 === Sr ? "ref" : Sr,
              Zr = rr.role,
              ar = rr.onKeyDown,
              jr = rr.onFocus,
              Ir = rr.onBlur,
              fr = rr.onClick,
              Er = rr.onDragEnter,
              pr = rr.onDragOver,
              xr = rr.onDragLeave,
              mr = rr.onDrop,
              Nr = ES(rr, rS);
            return IS(IS(fS({
              onKeyDown: LS(Jr(ar, yS)),
              onFocus: LS(Jr(jr, BS)),
              onBlur: LS(Jr(Ir, TS)),
              onClick: OS(Jr(fr, vS)),
              onDragEnter: lS(Jr(Er, hS)),
              onDragOver: lS(Jr(pr, zS)),
              onDragLeave: lS(Jr(xr, YS)),
              onDrop: lS(Jr(mr, eS)),
              role: "string" === typeof Zr && "" !== Zr ? Zr : "presentation"
            }, Qr, Cr), Wr || yr ? {} : {
              tabIndex: 0
            }), Nr)
          }
        }), [Cr, yS, BS, TS, vS, hS, zS, YS, eS, yr, Br, Wr]),
        HS = (0, Zr.useCallback)((function(rr) {
          rr.stopPropagation()
        }), []),
        qS = (0, Zr.useMemo)((function() {
          return function() {
            var rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              Sr = rr.refKey,
              Qr = void 0 === Sr ? "ref" : Sr,
              Zr = rr.onChange,
              Wr = rr.onClick,
              ar = ES(rr, SS);
            return IS(IS({}, fS({
              accept: Hr,
              multiple: fr,
              type: "file",
              style: {
                display: "none"
              },
              onChange: OS(Jr(Zr, eS)),
              onClick: OS(Jr(Wr, HS)),
              tabIndex: -1
            }, Qr, Mr)), ar)
          }
        }), [Mr, Qr, fr, eS, Wr]);
      return IS(IS({}, kr), {}, {
        pR: sr && !Wr,
        getRootProps: PS,
        getInputProps: qS,
        rootRef: Cr,
        inputRef: Mr,
        open: OS(KS)
      })
    }

    function US(rr, Sr) {
      switch (Sr.type) {
        case "focus":
          return IS(IS({}, rr), {}, {
            pR: !0
          });
        case "blur":
          return IS(IS({}, rr), {}, {
            pR: !1
          });
        case "openDialog":
          return IS(IS({}, mS), {}, {
            isFileDialogActive: !0
          });
        case "closeDialog":
          return IS(IS({}, rr), {}, {
            isFileDialogActive: !1
          });
        case "setDraggedFiles":
          return IS(IS({}, rr), {}, {
            isDragActive: Sr.isDragActive,
            isDragAccept: Sr.isDragAccept,
            isDragReject: Sr.isDragReject
          });
        case "setFiles":
          return IS(IS({}, rr), {}, {
            acceptedFiles: Sr.acceptedFiles,
            fileRejections: Sr.fileRejections
          });
        case "reset":
          return IS({}, mS);
        default:
          return rr
      }
    }

    function tS() {}
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);