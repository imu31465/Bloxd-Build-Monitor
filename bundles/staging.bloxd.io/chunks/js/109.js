export const id = 109;
export const ids = [109];
export const modules = {
  5143: (tt, et) => {
    et.b = function(tt, et) {
      if (tt && et) {
        var Vt = Array.isArray(et) ? et : et.split(","),
          Ot = tt.name || "",
          qt = (tt.type || "").toLowerCase(),
          Dt = qt.replace(/\/.*$/, "");
        return Vt.some((function(tt) {
          var et = tt.trim().toLowerCase();
          return "." === et.charAt(0) ? Ot.toLowerCase().endsWith(et) : et.endsWith("/*") ? Dt === et.replace(/\/.*$/, "") : qt === et
        }))
      }
      return !0
    }
  },
  5124: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => fe
    });
    var Ot = Vt(63),
      qt = Vt(5127),
      Dt = Vt.n(qt);

    function mt(tt, et, Vt, Ot) {
      return new(Vt || (Vt = Promise))((function(qt, Dt) {
        function mt(tt) {
          try {
            jt(Ot.next(tt))
          } catch (et) {
            Dt(et)
          }
        }

        function dt(tt) {
          try {
            jt(Ot.throw(tt))
          } catch (et) {
            Dt(et)
          }
        }

        function jt(tt) {
          var et;
          tt.done ? qt(tt.value) : (et = tt.value, et instanceof Vt ? et : new Vt((function(tt) {
            tt(et)
          }))).then(mt, dt)
        }
        jt((Ot = Ot.apply(tt, et || [])).next())
      }))
    }

    function dt(tt, et) {
      var Vt, Ot, qt, Dt, mt = {
        label: 0,
        sent: function() {
          if (1 & qt[0]) throw qt[1];
          return qt[1]
        },
        trys: [],
        ops: []
      };
      return Dt = {
        next: dt(0),
        throw: dt(1),
        return: dt(2)
      }, "function" === typeof Symbol && (Dt[Symbol.iterator] = function() {
        return this
      }), Dt;

      function dt(dt) {
        return function(jt) {
          return function(dt) {
            if (Vt) throw new TypeError("Generator is already executing.");
            for (; Dt && (Dt = 0, dt[0] && (mt = 0)), mt;) try {
              if (Vt = 1, Ot && (qt = 2 & dt[0] ? Ot.return : dt[0] ? Ot.throw || ((qt = Ot.return) && qt.call(Ot), 0) : Ot.next) && !(qt = qt.call(Ot, dt[1])).done) return qt;
              switch (Ot = 0, qt && (dt = [2 & dt[0], qt.value]), dt[0]) {
                case 0:
                case 1:
                  qt = dt;
                  break;
                case 4:
                  return mt.label++, {
                    value: dt[1],
                    done: !1
                  };
                case 5:
                  mt.label++, Ot = dt[1], dt = [0];
                  continue;
                case 7:
                  dt = mt.ops.pop(), mt.trys.pop();
                  continue;
                default:
                  if (!(qt = (qt = mt.trys).length > 0 && qt[qt.length - 1]) && (6 === dt[0] || 2 === dt[0])) {
                    mt = 0;
                    continue
                  }
                  if (3 === dt[0] && (!qt || dt[1] > qt[0] && dt[1] < qt[3])) {
                    mt.label = dt[1];
                    break
                  }
                  if (6 === dt[0] && mt.label < qt[1]) {
                    mt.label = qt[1], qt = dt;
                    break
                  }
                  if (qt && mt.label < qt[2]) {
                    mt.label = qt[2], mt.ops.push(dt);
                    break
                  }
                  qt[2] && mt.ops.pop(), mt.trys.pop();
                  continue
              }
              dt = et.call(tt, mt)
            } catch (jt) {
              dt = [6, jt], Ot = 0
            } finally {
              Vt = qt = 0
            }
            if (5 & dt[0]) throw dt[1];
            return {
              value: dt[0] ? dt[1] : void 0,
              done: !0
            }
          }([dt, jt])
        }
      }
    }
    Object.create;

    function jt(tt, et) {
      var Vt = "function" === typeof Symbol && tt[Symbol.iterator];
      if (!Vt) return tt;
      var Ot, qt, Dt = Vt.call(tt),
        mt = [];
      try {
        for (;
          (void 0 === et || et-- > 0) && !(Ot = Dt.next()).done;) mt.push(Ot.value)
      } catch (dt) {
        qt = {
          error: dt
        }
      } finally {
        try {
          Ot && !Ot.done && (Vt = Dt.return) && Vt.call(Dt)
        } finally {
          if (qt) throw qt.error
        }
      }
      return mt
    }

    function Ht(tt, et, Vt) {
      if (Vt || 2 === arguments.length)
        for (var Ot, qt = 0, Dt = et.length; qt < Dt; qt++) !Ot && qt in et || (Ot || (Ot = Array.prototype.slice.call(et, 0, qt)), Ot[qt] = et[qt]);
      return tt.concat(Ot || Array.prototype.slice.call(et))
    }
    Object.create;
    "function" === typeof SuppressedError && SuppressedError;
    var Xt = new Map([
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
      ["kX", "application/vnd.ms-outlook"]
    ]);

    function Qt(tt, et) {
      var Vt = function(tt) {
        var et = tt.name;
        if (et && -1 !== et.lastIndexOf(".") && !tt.type) {
          var Vt = et.split(".").pop().toLowerCase(),
            Ot = Xt.get(Vt);
          Ot && Object.defineProperty(tt, "type", {
            value: Ot,
            writable: !1,
            configurable: !1,
            enumerable: !0
          })
        }
        return tt
      }(tt);
      if ("string" !== typeof Vt.path) {
        var Ot = tt.webkitRelativePath;
        Object.defineProperty(Vt, "path", {
          value: "string" === typeof et ? et : "string" === typeof Ot && Ot.length > 0 ? Ot : tt.name,
          writable: !1,
          configurable: !1,
          enumerable: !0
        })
      }
      return Vt
    }
    var lt = [".DS_Store", "Thumbs.db"];

    function Et(tt) {
      return "object" === typeof tt && null !== tt
    }

    function ft(tt) {
      return Mt(tt.target.files).map((function(tt) {
        return Qt(tt)
      }))
    }

    function wt(tt) {
      return mt(this, void 0, void 0, (function() {
        return dt(this, (function(et) {
          switch (et.label) {
            case 0:
              return [4, Promise.all(tt.map((function(tt) {
                return tt.getFile()
              })))];
            case 1:
              return [2, et.sent().map((function(tt) {
                return Qt(tt)
              }))]
          }
        }))
      }))
    }

    function yt(tt, et) {
      return mt(this, void 0, void 0, (function() {
        var Vt;
        return dt(this, (function(Ot) {
          switch (Ot.label) {
            case 0:
              return tt.items ? (Vt = Mt(tt.items).filter((function(tt) {
                return "file" === tt.kind
              })), "drop" !== et ? [2, Vt] : [4, Promise.all(Vt.map(bt))]) : [3, 2];
            case 1:
              return [2, Nt(Jt(Ot.sent()))];
            case 2:
              return [2, Nt(Mt(tt.files).map((function(tt) {
                return Qt(tt)
              })))]
          }
        }))
      }))
    }

    function Nt(tt) {
      return tt.filter((function(tt) {
        return -1 === lt.indexOf(tt.name)
      }))
    }

    function Mt(tt) {
      if (null === tt) return [];
      for (var et = [], Vt = 0; Vt < tt.length; Vt++) {
        var Ot = tt[Vt];
        et.push(Ot)
      }
      return et
    }

    function bt(tt) {
      if ("function" !== typeof tt.webkitGetAsEntry) return Ct(tt);
      var et = tt.webkitGetAsEntry();
      return et && et.isDirectory ? Kt(et) : Ct(tt)
    }

    function Jt(tt) {
      return tt.reduce((function(tt, et) {
        return Ht(Ht([], jt(tt), !1), jt(Array.isArray(et) ? Jt(et) : [et]), !1)
      }), [])
    }

    function Ct(tt) {
      var et = tt.getAsFile();
      if (!et) return Promise.reject("".concat(tt, " is not a File"));
      var Vt = Qt(et);
      return Promise.resolve(Vt)
    }

    function ut(tt) {
      return mt(this, void 0, void 0, (function() {
        return dt(this, (function(et) {
          return [2, tt.isDirectory ? Kt(tt) : ht(tt)]
        }))
      }))
    }

    function Kt(tt) {
      var et = tt.createReader();
      return new Promise((function(tt, Vt) {
        var Ot = [];
        ! function qt() {
          var Dt = this;
          et.readEntries((function(et) {
            return mt(Dt, void 0, void 0, (function() {
              var Dt, mt, jt;
              return dt(this, (function(dt) {
                switch (dt.label) {
                  case 0:
                    if (et.length) return [3, 5];
                    dt.label = 1;
                  case 1:
                    return dt.trys.push([1, 3, , 4]), [4, Promise.all(Ot)];
                  case 2:
                    return Dt = dt.sent(), tt(Dt), [3, 4];
                  case 3:
                    return mt = dt.sent(), Vt(mt), [3, 4];
                  case 4:
                    return [3, 6];
                  case 5:
                    jt = Promise.all(et.map(ut)), Ot.push(jt), qt(), dt.label = 6;
                  case 6:
                    return [2]
                }
              }))
            }))
          }), (function(tt) {
            Vt(tt)
          }))
        }()
      }))
    }

    function ht(tt) {
      return mt(this, void 0, void 0, (function() {
        return dt(this, (function(et) {
          return [2, new Promise((function(et, Vt) {
            tt.file((function(Vt) {
              var Ot = Qt(Vt, tt.fullPath);
              et(Ot)
            }), (function(tt) {
              Vt(tt)
            }))
          }))]
        }))
      }))
    }
    var vt = Vt(5143);

    function Wt(tt) {
      return function(tt) {
        if (Array.isArray(tt)) return Zt(tt)
      }(tt) || function(tt) {
        if ("undefined" !== typeof Symbol && null != tt[Symbol.iterator] || null != tt["@@iterator"]) return Array.from(tt)
      }(tt) || Pt(tt) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function St(tt, et) {
      var Vt = Object.keys(tt);
      if (Object.getOwnPropertySymbols) {
        var Ot = Object.getOwnPropertySymbols(tt);
        et && (Ot = Ot.filter((function(et) {
          return Object.getOwnPropertyDescriptor(tt, et).enumerable
        }))), Vt.push.apply(Vt, Ot)
      }
      return Vt
    }

    function ct(tt) {
      for (var et = 1; et < arguments.length; et++) {
        var Vt = null != arguments[et] ? arguments[et] : {};
        et % 2 ? St(Object(Vt), !0).forEach((function(et) {
          Rt(tt, et, Vt[et])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(tt, Object.getOwnPropertyDescriptors(Vt)) : St(Object(Vt)).forEach((function(et) {
          Object.defineProperty(tt, et, Object.getOwnPropertyDescriptor(Vt, et))
        }))
      }
      return tt
    }

    function Rt(tt, et, Vt) {
      return et in tt ? Object.defineProperty(tt, et, {
        value: Vt,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : tt[et] = Vt, tt
    }

    function It(tt, et) {
      return function(tt) {
        if (Array.isArray(tt)) return tt
      }(tt) || function(tt, et) {
        var Vt = null == tt ? null : "undefined" !== typeof Symbol && tt[Symbol.iterator] || tt["@@iterator"];
        if (null == Vt) return;
        var Ot, qt, Dt = [],
          mt = !0,
          dt = !1;
        try {
          for (Vt = Vt.call(tt); !(mt = (Ot = Vt.next()).done) && (Dt.push(Ot.value), !et || Dt.length !== et); mt = !0);
        } catch (jt) {
          dt = !0, qt = jt
        } finally {
          try {
            mt || null == Vt.return || Vt.return()
          } finally {
            if (dt) throw qt
          }
        }
        return Dt
      }(tt, et) || Pt(tt, et) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Pt(tt, et) {
      if (tt) {
        if ("string" === typeof tt) return Zt(tt, et);
        var Vt = Object.prototype.toString.call(tt).slice(8, -1);
        return "Object" === Vt && tt.constructor && (Vt = tt.constructor.name), "Map" === Vt || "Set" === Vt ? Array.from(tt) : "Arguments" === Vt || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Vt) ? Zt(tt, et) : void 0
      }
    }

    function Zt(tt, et) {
      (null == et || et > tt.length) && (et = tt.length);
      for (var Vt = 0, Ot = new Array(et); Vt < et; Vt++) Ot[Vt] = tt[Vt];
      return Ot
    }
    var Lt = "file-invalid-type",
      Ft = "file-too-large",
      kt = "file-too-small",
      Gt = "too-many-files",
      zt = function(tt) {
        tt = Array.isArray(tt) && 1 === tt.length ? tt[0] : tt;
        var et = Array.isArray(tt) ? "one of ".concat(tt.join(", ")) : tt;
        return {
          code: Lt,
          message: "File type must be ".concat(et)
        }
      },
      ot = function(tt) {
        return {
          code: Ft,
          message: "File is larger than ".concat(tt, " ").concat(1 === tt ? "byte" : "bytes")
        }
      },
      rt = function(tt) {
        return {
          code: kt,
          message: "File is smaller than ".concat(tt, " ").concat(1 === tt ? "byte" : "bytes")
        }
      },
      Ut = {
        code: Gt,
        message: "Too many files"
      };

    function At(tt, et) {
      var Vt = "application/x-moz-file" === tt.type || (0, vt.b)(tt, et);
      return [Vt, Vt ? null : zt(et)]
    }

    function it(tt, et, Vt) {
      if (Yt(tt.size))
        if (Yt(et) && Yt(Vt)) {
          if (tt.size > Vt) return [!1, ot(Vt)];
          if (tt.size < et) return [!1, rt(et)]
        } else {
          if (Yt(et) && tt.size < et) return [!1, rt(et)];
          if (Yt(Vt) && tt.size > Vt) return [!1, ot(Vt)]
        } return [!0, null]
    }

    function Yt(tt) {
      return void 0 !== tt && null !== tt
    }

    function Bt(tt) {
      return "function" === typeof tt.isPropagationStopped ? tt.isPropagationStopped() : "undefined" !== typeof tt.cancelBubble && tt.cancelBubble
    }

    function pt(tt) {
      return tt.dataTransfer ? Array.prototype.some.call(tt.dataTransfer.types, (function(tt) {
        return "Files" === tt || "application/x-moz-file" === tt
      })) : !!tt.target && !!tt.target.files
    }

    function xt(tt) {
      tt.preventDefault()
    }

    function Tt() {
      for (var tt = arguments.length, et = new Array(tt), Vt = 0; Vt < tt; Vt++) et[Vt] = arguments[Vt];
      return function(tt) {
        for (var Vt = arguments.length, Ot = new Array(Vt > 1 ? Vt - 1 : 0), qt = 1; qt < Vt; qt++) Ot[qt - 1] = arguments[qt];
        return et.some((function(et) {
          return !Bt(tt) && et && et.apply(void 0, [tt].concat(Ot)), Bt(tt)
        }))
      }
    }

    function gt(tt) {
      return "audio/*" === tt || "video/*" === tt || "image/*" === tt || "text/*" === tt || /\w+\/[-+.\w]+/g.test(tt)
    }

    function st(tt) {
      return /^.*\.[\w]+$/.test(tt)
    }
    var nt = ["children"],
      te = ["open"],
      ee = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
      Ve = ["refKey", "onChange", "onClick"];

    function Oe(tt) {
      return function(tt) {
        if (Array.isArray(tt)) return me(tt)
      }(tt) || function(tt) {
        if ("undefined" !== typeof Symbol && null != tt[Symbol.iterator] || null != tt["@@iterator"]) return Array.from(tt)
      }(tt) || De(tt) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function qe(tt, et) {
      return function(tt) {
        if (Array.isArray(tt)) return tt
      }(tt) || function(tt, et) {
        var Vt = null == tt ? null : "undefined" !== typeof Symbol && tt[Symbol.iterator] || tt["@@iterator"];
        if (null == Vt) return;
        var Ot, qt, Dt = [],
          mt = !0,
          dt = !1;
        try {
          for (Vt = Vt.call(tt); !(mt = (Ot = Vt.next()).done) && (Dt.push(Ot.value), !et || Dt.length !== et); mt = !0);
        } catch (jt) {
          dt = !0, qt = jt
        } finally {
          try {
            mt || null == Vt.return || Vt.return()
          } finally {
            if (dt) throw qt
          }
        }
        return Dt
      }(tt, et) || De(tt, et) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function De(tt, et) {
      if (tt) {
        if ("string" === typeof tt) return me(tt, et);
        var Vt = Object.prototype.toString.call(tt).slice(8, -1);
        return "Object" === Vt && tt.constructor && (Vt = tt.constructor.name), "Map" === Vt || "Set" === Vt ? Array.from(tt) : "Arguments" === Vt || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Vt) ? me(tt, et) : void 0
      }
    }

    function me(tt, et) {
      (null == et || et > tt.length) && (et = tt.length);
      for (var Vt = 0, Ot = new Array(et); Vt < et; Vt++) Ot[Vt] = tt[Vt];
      return Ot
    }

    function de(tt, et) {
      var Vt = Object.keys(tt);
      if (Object.getOwnPropertySymbols) {
        var Ot = Object.getOwnPropertySymbols(tt);
        et && (Ot = Ot.filter((function(et) {
          return Object.getOwnPropertyDescriptor(tt, et).enumerable
        }))), Vt.push.apply(Vt, Ot)
      }
      return Vt
    }

    function je(tt) {
      for (var et = 1; et < arguments.length; et++) {
        var Vt = null != arguments[et] ? arguments[et] : {};
        et % 2 ? de(Object(Vt), !0).forEach((function(et) {
          He(tt, et, Vt[et])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(tt, Object.getOwnPropertyDescriptors(Vt)) : de(Object(Vt)).forEach((function(et) {
          Object.defineProperty(tt, et, Object.getOwnPropertyDescriptor(Vt, et))
        }))
      }
      return tt
    }

    function He(tt, et, Vt) {
      return et in tt ? Object.defineProperty(tt, et, {
        value: Vt,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : tt[et] = Vt, tt
    }

    function Xe(tt, et) {
      if (null == tt) return {};
      var Vt, Ot, qt = function(tt, et) {
        if (null == tt) return {};
        var Vt, Ot, qt = {},
          Dt = Object.keys(tt);
        for (Ot = 0; Ot < Dt.length; Ot++) Vt = Dt[Ot], et.indexOf(Vt) >= 0 || (qt[Vt] = tt[Vt]);
        return qt
      }(tt, et);
      if (Object.getOwnPropertySymbols) {
        var Dt = Object.getOwnPropertySymbols(tt);
        for (Ot = 0; Ot < Dt.length; Ot++) Vt = Dt[Ot], et.indexOf(Vt) >= 0 || Object.prototype.propertyIsEnumerable.call(tt, Vt) && (qt[Vt] = tt[Vt])
      }
      return qt
    }
    var Qe = (0, Ot.forwardRef)((function(tt, et) {
      var Vt = tt.children,
        qt = fe(Xe(tt, nt)),
        Dt = qt.open,
        mt = Xe(qt, te);
      return (0, Ot.useImperativeHandle)(et, (function() {
        return {
          open: Dt
        }
      }), [Dt]), Ot.createElement(Ot.Fragment, null, Vt(je(je({}, mt), {}, {
        open: Dt
      })))
    }));
    Qe.displayName = "Dropzone";
    var le = {
      disabled: !1,
      getFilesFromEvent: function(tt) {
        return mt(this, void 0, void 0, (function() {
          return dt(this, (function(et) {
            return Et(tt) && Et(tt.dataTransfer) ? [2, yt(tt.dataTransfer, tt.type)] : function(tt) {
              return Et(tt) && Et(tt.target)
            }(tt) ? [2, ft(tt)] : Array.isArray(tt) && tt.every((function(tt) {
              return "getFile" in tt && "function" === typeof tt.getFile
            })) ? [2, wt(tt)] : [2, []]
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
    Qe.defaultProps = le, Qe.propTypes = {
      children: Dt().func,
      accept: Dt().objectOf(Dt().arrayOf(Dt().string)),
      multiple: Dt().bool,
      preventDropOnDocument: Dt().bool,
      noClick: Dt().bool,
      noKeyboard: Dt().bool,
      noDrag: Dt().bool,
      noDragEventsBubbling: Dt().bool,
      minSize: Dt().number,
      maxSize: Dt().number,
      maxFiles: Dt().number,
      disabled: Dt().bool,
      getFilesFromEvent: Dt().func,
      onFileDialogCancel: Dt().func,
      onFileDialogOpen: Dt().func,
      useFsAccessApi: Dt().bool,
      autoFocus: Dt().bool,
      onDragEnter: Dt().func,
      onDragLeave: Dt().func,
      onDragOver: Dt().func,
      onDrop: Dt().func,
      onDropAccepted: Dt().func,
      onDropRejected: Dt().func,
      onError: Dt().func,
      validator: Dt().func
    };
    var Ee = {
      bR: !1,
      isFileDialogActive: !1,
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1,
      acceptedFiles: [],
      fileRejections: []
    };

    function fe() {
      var tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        et = je(je({}, le), tt),
        Vt = et.accept,
        qt = et.disabled,
        Dt = et.getFilesFromEvent,
        mt = et.maxSize,
        dt = et.minSize,
        jt = et.multiple,
        Ht = et.maxFiles,
        Xt = et.onDragEnter,
        Qt = et.onDragLeave,
        lt = et.onDragOver,
        Et = et.onDrop,
        ft = et.onDropAccepted,
        wt = et.onDropRejected,
        yt = et.onFileDialogCancel,
        Nt = et.onFileDialogOpen,
        Mt = et.useFsAccessApi,
        bt = et.autoFocus,
        Jt = et.preventDropOnDocument,
        Ct = et.noClick,
        ut = et.noKeyboard,
        Kt = et.noDrag,
        ht = et.noDragEventsBubbling,
        vt = et.onError,
        St = et.validator,
        Pt = (0, Ot.useMemo)((function() {
          return function(tt) {
            if (Yt(tt)) return Object.entries(tt).reduce((function(tt, et) {
              var Vt = It(et, 2),
                Ot = Vt[0],
                qt = Vt[1];
              return [].concat(Wt(tt), [Ot], Wt(qt))
            }), []).filter((function(tt) {
              return gt(tt) || st(tt)
            })).join(",")
          }(Vt)
        }), [Vt]),
        Zt = (0, Ot.useMemo)((function() {
          return function(tt) {
            return Yt(tt) ? [{
              description: "Files",
              accept: Object.entries(tt).filter((function(tt) {
                var et = It(tt, 2),
                  Vt = et[0],
                  Ot = et[1],
                  qt = !0;
                return gt(Vt) || (console.warn('Skipped "'.concat(Vt, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), qt = !1), Array.isArray(Ot) && Ot.every(st) || (console.warn('Skipped "'.concat(Vt, '" because an invalid file extension was provided.')), qt = !1), qt
              })).reduce((function(tt, et) {
                var Vt = It(et, 2),
                  Ot = Vt[0],
                  qt = Vt[1];
                return ct(ct({}, tt), {}, Rt({}, Ot, qt))
              }), {})
            }] : tt
          }(Vt)
        }), [Vt]),
        Lt = (0, Ot.useMemo)((function() {
          return "function" === typeof Nt ? Nt : ye
        }), [Nt]),
        Ft = (0, Ot.useMemo)((function() {
          return "function" === typeof yt ? yt : ye
        }), [yt]),
        kt = (0, Ot.useRef)(null),
        Gt = (0, Ot.useRef)(null),
        zt = qe((0, Ot.useReducer)(we, Ee), 2),
        ot = zt[0],
        rt = zt[1],
        nt = ot.bR,
        te = ot.isFileDialogActive,
        De = (0, Ot.useRef)("undefined" !== typeof window && window.isSecureContext && Mt && "showOpenFilePicker" in window),
        me = function() {
          !De.current && te && setTimeout((function() {
            Gt.current && (Gt.current.files.length || (rt({
              type: "closeDialog"
            }), Ft()))
          }), 300)
        };
      (0, Ot.useEffect)((function() {
        return window.addEventListener("focus", me, !1),
          function() {
            window.removeEventListener("focus", me, !1)
          }
      }), [Gt, te, Ft, De]);
      var de = (0, Ot.useRef)([]),
        Qe = function(tt) {
          kt.current && kt.current.contains(tt.target) || (tt.preventDefault(), de.current = [])
        };
      (0, Ot.useEffect)((function() {
        return Jt && (document.addEventListener("dragover", xt, !1), document.addEventListener("drop", Qe, !1)),
          function() {
            Jt && (document.removeEventListener("dragover", xt), document.removeEventListener("drop", Qe))
          }
      }), [kt, Jt]), (0, Ot.useEffect)((function() {
        return !qt && bt && kt.current && kt.current.focus(),
          function() {}
      }), [kt, bt, qt]);
      var fe = (0, Ot.useCallback)((function(tt) {
          vt ? vt(tt) : console.error(tt)
        }), [vt]),
        Ne = (0, Ot.useCallback)((function(tt) {
          tt.preventDefault(), tt.persist(), Re(tt), de.current = [].concat(Oe(de.current), [tt.target]), pt(tt) && Promise.resolve(Dt(tt)).then((function(et) {
            if (!Bt(tt) || ht) {
              var Vt = et.length,
                Ot = Vt > 0 && function(tt) {
                  var et = tt.files,
                    Vt = tt.accept,
                    Ot = tt.minSize,
                    qt = tt.maxSize,
                    Dt = tt.multiple,
                    mt = tt.maxFiles,
                    dt = tt.validator;
                  return !(!Dt && et.length > 1 || Dt && mt >= 1 && et.length > mt) && et.every((function(tt) {
                    var et = It(At(tt, Vt), 1)[0],
                      Dt = It(it(tt, Ot, qt), 1)[0],
                      mt = dt ? dt(tt) : null;
                    return et && Dt && !mt
                  }))
                }({
                  files: et,
                  accept: Pt,
                  minSize: dt,
                  maxSize: mt,
                  multiple: jt,
                  maxFiles: Ht,
                  validator: St
                });
              rt({
                isDragAccept: Ot,
                isDragReject: Vt > 0 && !Ot,
                isDragActive: !0,
                type: "setDraggedFiles"
              }), Xt && Xt(tt)
            }
          })).catch((function(tt) {
            return fe(tt)
          }))
        }), [Dt, Xt, fe, ht, Pt, dt, mt, jt, Ht, St]),
        ae = (0, Ot.useCallback)((function(tt) {
          tt.preventDefault(), tt.persist(), Re(tt);
          var et = pt(tt);
          if (et && tt.dataTransfer) try {
            tt.dataTransfer.dropEffect = "copy"
          } catch (Vt) {}
          return et && lt && lt(tt), !1
        }), [lt, ht]),
        Me = (0, Ot.useCallback)((function(tt) {
          tt.preventDefault(), tt.persist(), Re(tt);
          var et = de.current.filter((function(tt) {
              return kt.current && kt.current.contains(tt)
            })),
            Vt = et.indexOf(tt.target); - 1 !== Vt && et.splice(Vt, 1), de.current = et, et.length > 0 || (rt({
            type: "setDraggedFiles",
            isDragActive: !1,
            isDragAccept: !1,
            isDragReject: !1
          }), pt(tt) && Qt && Qt(tt))
        }), [kt, Qt, ht]),
        be = (0, Ot.useCallback)((function(tt, et) {
          var Vt = [],
            Ot = [];
          tt.forEach((function(tt) {
            var et = qe(At(tt, Pt), 2),
              qt = et[0],
              Dt = et[1],
              jt = qe(it(tt, dt, mt), 2),
              Ht = jt[0],
              Xt = jt[1],
              Qt = St ? St(tt) : null;
            if (qt && Ht && !Qt) Vt.push(tt);
            else {
              var lt = [Dt, Xt];
              Qt && (lt = lt.concat(Qt)), Ot.push({
                file: tt,
                errors: lt.filter((function(tt) {
                  return tt
                }))
              })
            }
          })), (!jt && Vt.length > 1 || jt && Ht >= 1 && Vt.length > Ht) && (Vt.forEach((function(tt) {
            Ot.push({
              file: tt,
              errors: [Ut]
            })
          })), Vt.splice(0)), rt({
            acceptedFiles: Vt,
            fileRejections: Ot,
            type: "setFiles"
          }), Et && Et(Vt, Ot, et), Ot.length > 0 && wt && wt(Ot, et), Vt.length > 0 && ft && ft(Vt, et)
        }), [rt, jt, Pt, dt, mt, Ht, Et, ft, wt, St]),
        Je = (0, Ot.useCallback)((function(tt) {
          tt.preventDefault(), tt.persist(), Re(tt), de.current = [], pt(tt) && Promise.resolve(Dt(tt)).then((function(et) {
            Bt(tt) && !ht || be(et, tt)
          })).catch((function(tt) {
            return fe(tt)
          })), rt({
            type: "reset"
          })
        }), [Dt, be, fe, ht]),
        Ce = (0, Ot.useCallback)((function() {
          if (De.current) {
            rt({
              type: "openDialog"
            }), Lt();
            var tt = {
              multiple: jt,
              types: Zt
            };
            window.showOpenFilePicker(tt).then((function(tt) {
              return Dt(tt)
            })).then((function(tt) {
              be(tt, null), rt({
                type: "closeDialog"
              })
            })).catch((function(tt) {
              var et;
              (et = tt) instanceof DOMException && ("AbortError" === et.name || et.code === et.ABORT_ERR) ? (Ft(tt), rt({
                type: "closeDialog"
              })) : ! function(tt) {
                return tt instanceof DOMException && ("SecurityError" === tt.name || tt.code === tt.SECURITY_ERR)
              }(tt) ? fe(tt) : (De.current = !1, Gt.current ? (Gt.current.value = null, Gt.current.click()) : fe(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))
            }))
          } else Gt.current && (rt({
            type: "openDialog"
          }), Lt(), Gt.current.value = null, Gt.current.click())
        }), [rt, Lt, Ft, Mt, be, fe, Zt, jt]),
        ue = (0, Ot.useCallback)((function(tt) {
          kt.current && kt.current.isEqualNode(tt.target) && (" " !== tt.key && "Enter" !== tt.key && 32 !== tt.keyCode && 13 !== tt.keyCode || (tt.preventDefault(), Ce()))
        }), [kt, Ce]),
        Ke = (0, Ot.useCallback)((function() {
          rt({
            type: "focus"
          })
        }), []),
        he = (0, Ot.useCallback)((function() {
          rt({
            type: "blur"
          })
        }), []),
        ve = (0, Ot.useCallback)((function() {
          Ct || (! function() {
            var tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
            return function(tt) {
              return -1 !== tt.indexOf("MSIE") || -1 !== tt.indexOf("Trident/")
            }(tt) || function(tt) {
              return -1 !== tt.indexOf("Edge/")
            }(tt)
          }() ? Ce() : setTimeout(Ce, 0))
        }), [Ct, Ce]),
        We = function(tt) {
          return qt ? null : tt
        },
        Se = function(tt) {
          return ut ? null : We(tt)
        },
        ce = function(tt) {
          return Kt ? null : We(tt)
        },
        Re = function(tt) {
          ht && tt.stopPropagation()
        },
        Ie = (0, Ot.useMemo)((function() {
          return function() {
            var tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              et = tt.refKey,
              Vt = void 0 === et ? "ref" : et,
              Ot = tt.role,
              Dt = tt.onKeyDown,
              mt = tt.onFocus,
              dt = tt.onBlur,
              jt = tt.onClick,
              Ht = tt.onDragEnter,
              Xt = tt.onDragOver,
              Qt = tt.onDragLeave,
              lt = tt.onDrop,
              Et = Xe(tt, ee);
            return je(je(He({
              onKeyDown: Se(Tt(Dt, ue)),
              onFocus: Se(Tt(mt, Ke)),
              onBlur: Se(Tt(dt, he)),
              onClick: We(Tt(jt, ve)),
              onDragEnter: ce(Tt(Ht, Ne)),
              onDragOver: ce(Tt(Xt, ae)),
              onDragLeave: ce(Tt(Qt, Me)),
              onDrop: ce(Tt(lt, Je)),
              role: "string" === typeof Ot && "" !== Ot ? Ot : "presentation"
            }, Vt, kt), qt || ut ? {} : {
              tabIndex: 0
            }), Et)
          }
        }), [kt, ue, Ke, he, ve, Ne, ae, Me, Je, ut, Kt, qt]),
        Pe = (0, Ot.useCallback)((function(tt) {
          tt.stopPropagation()
        }), []),
        Ze = (0, Ot.useMemo)((function() {
          return function() {
            var tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              et = tt.refKey,
              Vt = void 0 === et ? "ref" : et,
              Ot = tt.onChange,
              qt = tt.onClick,
              Dt = Xe(tt, Ve);
            return je(je({}, He({
              accept: Pt,
              multiple: jt,
              type: "file",
              style: {
                display: "none"
              },
              onChange: We(Tt(Ot, Je)),
              onClick: We(Tt(qt, Pe)),
              tabIndex: -1
            }, Vt, Gt)), Dt)
          }
        }), [Gt, Vt, jt, Je, qt]);
      return je(je({}, ot), {}, {
        bR: nt && !qt,
        getRootProps: Ie,
        getInputProps: Ze,
        rootRef: kt,
        inputRef: Gt,
        open: We(Ce)
      })
    }

    function we(tt, et) {
      switch (et.type) {
        case "focus":
          return je(je({}, tt), {}, {
            bR: !0
          });
        case "blur":
          return je(je({}, tt), {}, {
            bR: !1
          });
        case "openDialog":
          return je(je({}, Ee), {}, {
            isFileDialogActive: !0
          });
        case "closeDialog":
          return je(je({}, tt), {}, {
            isFileDialogActive: !1
          });
        case "setDraggedFiles":
          return je(je({}, tt), {}, {
            isDragActive: et.isDragActive,
            isDragAccept: et.isDragAccept,
            isDragReject: et.isDragReject
          });
        case "setFiles":
          return je(je({}, tt), {}, {
            acceptedFiles: et.acceptedFiles,
            fileRejections: et.fileRejections
          });
        case "reset":
          return je({}, Ee);
        default:
          return tt
      }
    }

    function ye() {}
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);