export const id = 106;
export const ids = [106];
export const modules = {
  4714: (vv, zv) => {
    zv.c = function(vv, zv) {
      if (vv && zv) {
        var Pv = Array.isArray(zv) ? zv : zv.split(","),
          hv = vv.name || "",
          Sv = (vv.type || "").toLowerCase(),
          ev = Sv.replace(/\/.*$/, "");
        return Pv.some((function(vv) {
          var zv = vv.trim().toLowerCase();
          return "." === zv.charAt(0) ? hv.toLowerCase().endsWith(zv) : zv.endsWith("/*") ? ev === zv.replace(/\/.*$/, "") : Sv === zv
        }))
      }
      return !0
    }
  },
  4698: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => wz
    });
    var hv = Pv(52),
      Sv = Pv(4702),
      ev = Pv.n(Sv);

    function gv(vv, zv, Pv, hv) {
      return new(Pv || (Pv = Promise))((function(Sv, ev) {
        function gv(vv) {
          try {
            dv(hv.next(vv))
          } catch (zv) {
            ev(zv)
          }
        }

        function pv(vv) {
          try {
            dv(hv.throw(vv))
          } catch (zv) {
            ev(zv)
          }
        }

        function dv(vv) {
          var zv;
          vv.done ? Sv(vv.value) : (zv = vv.value, zv instanceof Pv ? zv : new Pv((function(vv) {
            vv(zv)
          }))).then(gv, pv)
        }
        dv((hv = hv.apply(vv, zv || [])).next())
      }))
    }

    function pv(vv, zv) {
      var Pv, hv, Sv, ev, gv = {
        label: 0,
        sent: function() {
          if (1 & Sv[0]) throw Sv[1];
          return Sv[1]
        },
        trys: [],
        ops: []
      };
      return ev = {
        next: pv(0),
        throw: pv(1),
        return: pv(2)
      }, "function" === typeof Symbol && (ev[Symbol.iterator] = function() {
        return this
      }), ev;

      function pv(pv) {
        return function(dv) {
          return function(pv) {
            if (Pv) throw new TypeError("Generator is already executing.");
            for (; ev && (ev = 0, pv[0] && (gv = 0)), gv;) try {
              if (Pv = 1, hv && (Sv = 2 & pv[0] ? hv.return : pv[0] ? hv.throw || ((Sv = hv.return) && Sv.call(hv), 0) : hv.next) && !(Sv = Sv.call(hv, pv[1])).done) return Sv;
              switch (hv = 0, Sv && (pv = [2 & pv[0], Sv.value]), pv[0]) {
                case 0:
                case 1:
                  Sv = pv;
                  break;
                case 4:
                  return gv.label++, {
                    value: pv[1],
                    done: !1
                  };
                case 5:
                  gv.label++, hv = pv[1], pv = [0];
                  continue;
                case 7:
                  pv = gv.ops.pop(), gv.trys.pop();
                  continue;
                default:
                  if (!(Sv = (Sv = gv.trys).length > 0 && Sv[Sv.length - 1]) && (6 === pv[0] || 2 === pv[0])) {
                    gv = 0;
                    continue
                  }
                  if (3 === pv[0] && (!Sv || pv[1] > Sv[0] && pv[1] < Sv[3])) {
                    gv.label = pv[1];
                    break
                  }
                  if (6 === pv[0] && gv.label < Sv[1]) {
                    gv.label = Sv[1], Sv = pv;
                    break
                  }
                  if (Sv && gv.label < Sv[2]) {
                    gv.label = Sv[2], gv.ops.push(pv);
                    break
                  }
                  Sv[2] && gv.ops.pop(), gv.trys.pop();
                  continue
              }
              pv = zv.call(vv, gv)
            } catch (dv) {
              pv = [6, dv], hv = 0
            } finally {
              Pv = Sv = 0
            }
            if (5 & pv[0]) throw pv[1];
            return {
              value: pv[0] ? pv[1] : void 0,
              done: !0
            }
          }([pv, dv])
        }
      }
    }
    Object.create;

    function dv(vv, zv) {
      var Pv = "function" === typeof Symbol && vv[Symbol.iterator];
      if (!Pv) return vv;
      var hv, Sv, ev = Pv.call(vv),
        gv = [];
      try {
        for (;
          (void 0 === zv || zv-- > 0) && !(hv = ev.next()).done;) gv.push(hv.value)
      } catch (pv) {
        Sv = {
          error: pv
        }
      } finally {
        try {
          hv && !hv.done && (Pv = ev.return) && Pv.call(ev)
        } finally {
          if (Sv) throw Sv.error
        }
      }
      return gv
    }

    function Nv(vv, zv, Pv) {
      if (Pv || 2 === arguments.length)
        for (var hv, Sv = 0, ev = zv.length; Sv < ev; Sv++) !hv && Sv in zv || (hv || (hv = Array.prototype.slice.call(zv, 0, Sv)), hv[Sv] = zv[Sv]);
      return vv.concat(hv || Array.prototype.slice.call(zv))
    }
    Object.create;
    "function" === typeof SuppressedError && SuppressedError;
    var lv = new Map([
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
      ["al", "application/vnd.ms-outlook"]
    ]);

    function Tv(vv, zv) {
      var Pv = function(vv) {
        var zv = vv.name;
        if (zv && -1 !== zv.lastIndexOf(".") && !vv.type) {
          var Pv = zv.split(".").pop().toLowerCase(),
            hv = lv.get(Pv);
          hv && Object.defineProperty(vv, "type", {
            value: hv,
            writable: !1,
            configurable: !1,
            enumerable: !0
          })
        }
        return vv
      }(vv);
      if ("string" !== typeof Pv.path) {
        var hv = vv.webkitRelativePath;
        Object.defineProperty(Pv, "path", {
          value: "string" === typeof zv ? zv : "string" === typeof hv && hv.length > 0 ? hv : vv.name,
          writable: !1,
          configurable: !1,
          enumerable: !0
        })
      }
      return Pv
    }
    var Wv = [".DS_Store", "Thumbs.db"];

    function wv(vv) {
      return "object" === typeof vv && null !== vv
    }

    function av(vv) {
      return cv(vv.target.files).map((function(vv) {
        return Tv(vv)
      }))
    }

    function sv(vv) {
      return gv(this, void 0, void 0, (function() {
        return pv(this, (function(zv) {
          switch (zv.label) {
            case 0:
              return [4, Promise.all(vv.map((function(vv) {
                return vv.getFile()
              })))];
            case 1:
              return [2, zv.sent().map((function(vv) {
                return Tv(vv)
              }))]
          }
        }))
      }))
    }

    function Cv(vv, zv) {
      return gv(this, void 0, void 0, (function() {
        var Pv;
        return pv(this, (function(hv) {
          switch (hv.label) {
            case 0:
              return vv.items ? (Pv = cv(vv.items).filter((function(vv) {
                return "file" === vv.kind
              })), "drop" !== zv ? [2, Pv] : [4, Promise.all(Pv.map(Gv))]) : [3, 2];
            case 1:
              return [2, iv(mv(hv.sent()))];
            case 2:
              return [2, iv(cv(vv.files).map((function(vv) {
                return Tv(vv)
              })))]
          }
        }))
      }))
    }

    function iv(vv) {
      return vv.filter((function(vv) {
        return -1 === Wv.indexOf(vv.name)
      }))
    }

    function cv(vv) {
      if (null === vv) return [];
      for (var zv = [], Pv = 0; Pv < vv.length; Pv++) {
        var hv = vv[Pv];
        zv.push(hv)
      }
      return zv
    }

    function Gv(vv) {
      if ("function" !== typeof vv.webkitGetAsEntry) return jv(vv);
      var zv = vv.webkitGetAsEntry();
      return zv && zv.isDirectory ? Fv(zv) : jv(vv)
    }

    function mv(vv) {
      return vv.reduce((function(vv, zv) {
        return Nv(Nv([], dv(vv), !1), dv(Array.isArray(zv) ? mv(zv) : [zv]), !1)
      }), [])
    }

    function jv(vv) {
      var zv = vv.getAsFile();
      if (!zv) return Promise.reject("".concat(vv, " is not a File"));
      var Pv = Tv(zv);
      return Promise.resolve(Pv)
    }

    function fv(vv) {
      return gv(this, void 0, void 0, (function() {
        return pv(this, (function(zv) {
          return [2, vv.isDirectory ? Fv(vv) : Yv(vv)]
        }))
      }))
    }

    function Fv(vv) {
      var zv = vv.createReader();
      return new Promise((function(vv, Pv) {
        var hv = [];
        ! function Sv() {
          var ev = this;
          zv.readEntries((function(zv) {
            return gv(ev, void 0, void 0, (function() {
              var ev, gv, dv;
              return pv(this, (function(pv) {
                switch (pv.label) {
                  case 0:
                    if (zv.length) return [3, 5];
                    pv.label = 1;
                  case 1:
                    return pv.trys.push([1, 3, , 4]), [4, Promise.all(hv)];
                  case 2:
                    return ev = pv.sent(), vv(ev), [3, 4];
                  case 3:
                    return gv = pv.sent(), Pv(gv), [3, 4];
                  case 4:
                    return [3, 6];
                  case 5:
                    dv = Promise.all(zv.map(fv)), hv.push(dv), Sv(), pv.label = 6;
                  case 6:
                    return [2]
                }
              }))
            }))
          }), (function(vv) {
            Pv(vv)
          }))
        }()
      }))
    }

    function Yv(vv) {
      return gv(this, void 0, void 0, (function() {
        return pv(this, (function(zv) {
          return [2, new Promise((function(zv, Pv) {
            vv.file((function(Pv) {
              var hv = Tv(Pv, vv.fullPath);
              zv(hv)
            }), (function(vv) {
              Pv(vv)
            }))
          }))]
        }))
      }))
    }
    var nv = Pv(4714);

    function Ov(vv) {
      return function(vv) {
        if (Array.isArray(vv)) return xv(vv)
      }(vv) || function(vv) {
        if ("undefined" !== typeof Symbol && null != vv[Symbol.iterator] || null != vv["@@iterator"]) return Array.from(vv)
      }(vv) || Rv(vv) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Dv(vv, zv) {
      var Pv = Object.keys(vv);
      if (Object.getOwnPropertySymbols) {
        var hv = Object.getOwnPropertySymbols(vv);
        zv && (hv = hv.filter((function(zv) {
          return Object.getOwnPropertyDescriptor(vv, zv).enumerable
        }))), Pv.push.apply(Pv, hv)
      }
      return Pv
    }

    function Kv(vv) {
      for (var zv = 1; zv < arguments.length; zv++) {
        var Pv = null != arguments[zv] ? arguments[zv] : {};
        zv % 2 ? Dv(Object(Pv), !0).forEach((function(zv) {
          Vv(vv, zv, Pv[zv])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(vv, Object.getOwnPropertyDescriptors(Pv)) : Dv(Object(Pv)).forEach((function(zv) {
          Object.defineProperty(vv, zv, Object.getOwnPropertyDescriptor(Pv, zv))
        }))
      }
      return vv
    }

    function Vv(vv, zv, Pv) {
      return zv in vv ? Object.defineProperty(vv, zv, {
        value: Pv,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : vv[zv] = Pv, vv
    }

    function Uv(vv, zv) {
      return function(vv) {
        if (Array.isArray(vv)) return vv
      }(vv) || function(vv, zv) {
        var Pv = null == vv ? null : "undefined" !== typeof Symbol && vv[Symbol.iterator] || vv["@@iterator"];
        if (null == Pv) return;
        var hv, Sv, ev = [],
          gv = !0,
          pv = !1;
        try {
          for (Pv = Pv.call(vv); !(gv = (hv = Pv.next()).done) && (ev.push(hv.value), !zv || ev.length !== zv); gv = !0);
        } catch (dv) {
          pv = !0, Sv = dv
        } finally {
          try {
            gv || null == Pv.return || Pv.return()
          } finally {
            if (pv) throw Sv
          }
        }
        return ev
      }(vv, zv) || Rv(vv, zv) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Rv(vv, zv) {
      if (vv) {
        if ("string" === typeof vv) return xv(vv, zv);
        var Pv = Object.prototype.toString.call(vv).slice(8, -1);
        return "Object" === Pv && vv.constructor && (Pv = vv.constructor.name), "Map" === Pv || "Set" === Pv ? Array.from(vv) : "Arguments" === Pv || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Pv) ? xv(vv, zv) : void 0
      }
    }

    function xv(vv, zv) {
      (null == zv || zv > vv.length) && (zv = vv.length);
      for (var Pv = 0, hv = new Array(zv); Pv < zv; Pv++) hv[Pv] = vv[Pv];
      return hv
    }
    var tv = "file-invalid-type",
      qv = "file-too-large",
      Iv = "file-too-small",
      Qv = "too-many-files",
      Zv = function(vv) {
        vv = Array.isArray(vv) && 1 === vv.length ? vv[0] : vv;
        var zv = Array.isArray(vv) ? "one of ".concat(vv.join(", ")) : vv;
        return {
          code: tv,
          message: "File type must be ".concat(zv)
        }
      },
      Av = function(vv) {
        return {
          code: qv,
          message: "File is larger than ".concat(vv, " ").concat(1 === vv ? "byte" : "bytes")
        }
      },
      Lv = function(vv) {
        return {
          code: Iv,
          message: "File is smaller than ".concat(vv, " ").concat(1 === vv ? "byte" : "bytes")
        }
      },
      Hv = {
        code: Qv,
        message: "Too many files"
      };

    function Mv(vv, zv) {
      var Pv = "application/x-moz-file" === vv.type || (0, nv.c)(vv, zv);
      return [Pv, Pv ? null : Zv(zv)]
    }

    function yv(vv, zv, Pv) {
      if (Bv(vv.size))
        if (Bv(zv) && Bv(Pv)) {
          if (vv.size > Pv) return [!1, Av(Pv)];
          if (vv.size < zv) return [!1, Lv(zv)]
        } else {
          if (Bv(zv) && vv.size < zv) return [!1, Lv(zv)];
          if (Bv(Pv) && vv.size > Pv) return [!1, Av(Pv)]
        } return [!0, null]
    }

    function Bv(vv) {
      return void 0 !== vv && null !== vv
    }

    function Jv(vv) {
      return "function" === typeof vv.isPropagationStopped ? vv.isPropagationStopped() : "undefined" !== typeof vv.cancelBubble && vv.cancelBubble
    }

    function Ev(vv) {
      return vv.dataTransfer ? Array.prototype.some.call(vv.dataTransfer.types, (function(vv) {
        return "Files" === vv || "application/x-moz-file" === vv
      })) : !!vv.target && !!vv.target.files
    }

    function ov(vv) {
      vv.preventDefault()
    }

    function bv() {
      for (var vv = arguments.length, zv = new Array(vv), Pv = 0; Pv < vv; Pv++) zv[Pv] = arguments[Pv];
      return function(vv) {
        for (var Pv = arguments.length, hv = new Array(Pv > 1 ? Pv - 1 : 0), Sv = 1; Sv < Pv; Sv++) hv[Sv - 1] = arguments[Sv];
        return zv.some((function(zv) {
          return !Jv(vv) && zv && zv.apply(void 0, [vv].concat(hv)), Jv(vv)
        }))
      }
    }

    function rv(vv) {
      return "audio/*" === vv || "video/*" === vv || "image/*" === vv || "text/*" === vv || /\w+\/[-+.\w]+/g.test(vv)
    }

    function kv(vv) {
      return /^.*\.[\w]+$/.test(vv)
    }
    var Xv = ["children"],
      uv = ["open"],
      vz = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
      zz = ["refKey", "onChange", "onClick"];

    function Pz(vv) {
      return function(vv) {
        if (Array.isArray(vv)) return ez(vv)
      }(vv) || function(vv) {
        if ("undefined" !== typeof Symbol && null != vv[Symbol.iterator] || null != vv["@@iterator"]) return Array.from(vv)
      }(vv) || Sz(vv) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function hz(vv, zv) {
      return function(vv) {
        if (Array.isArray(vv)) return vv
      }(vv) || function(vv, zv) {
        var Pv = null == vv ? null : "undefined" !== typeof Symbol && vv[Symbol.iterator] || vv["@@iterator"];
        if (null == Pv) return;
        var hv, Sv, ev = [],
          gv = !0,
          pv = !1;
        try {
          for (Pv = Pv.call(vv); !(gv = (hv = Pv.next()).done) && (ev.push(hv.value), !zv || ev.length !== zv); gv = !0);
        } catch (dv) {
          pv = !0, Sv = dv
        } finally {
          try {
            gv || null == Pv.return || Pv.return()
          } finally {
            if (pv) throw Sv
          }
        }
        return ev
      }(vv, zv) || Sz(vv, zv) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Sz(vv, zv) {
      if (vv) {
        if ("string" === typeof vv) return ez(vv, zv);
        var Pv = Object.prototype.toString.call(vv).slice(8, -1);
        return "Object" === Pv && vv.constructor && (Pv = vv.constructor.name), "Map" === Pv || "Set" === Pv ? Array.from(vv) : "Arguments" === Pv || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Pv) ? ez(vv, zv) : void 0
      }
    }

    function ez(vv, zv) {
      (null == zv || zv > vv.length) && (zv = vv.length);
      for (var Pv = 0, hv = new Array(zv); Pv < zv; Pv++) hv[Pv] = vv[Pv];
      return hv
    }

    function gz(vv, zv) {
      var Pv = Object.keys(vv);
      if (Object.getOwnPropertySymbols) {
        var hv = Object.getOwnPropertySymbols(vv);
        zv && (hv = hv.filter((function(zv) {
          return Object.getOwnPropertyDescriptor(vv, zv).enumerable
        }))), Pv.push.apply(Pv, hv)
      }
      return Pv
    }

    function pz(vv) {
      for (var zv = 1; zv < arguments.length; zv++) {
        var Pv = null != arguments[zv] ? arguments[zv] : {};
        zv % 2 ? gz(Object(Pv), !0).forEach((function(zv) {
          dz(vv, zv, Pv[zv])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(vv, Object.getOwnPropertyDescriptors(Pv)) : gz(Object(Pv)).forEach((function(zv) {
          Object.defineProperty(vv, zv, Object.getOwnPropertyDescriptor(Pv, zv))
        }))
      }
      return vv
    }

    function dz(vv, zv, Pv) {
      return zv in vv ? Object.defineProperty(vv, zv, {
        value: Pv,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : vv[zv] = Pv, vv
    }

    function Nz(vv, zv) {
      if (null == vv) return {};
      var Pv, hv, Sv = function(vv, zv) {
        if (null == vv) return {};
        var Pv, hv, Sv = {},
          ev = Object.keys(vv);
        for (hv = 0; hv < ev.length; hv++) Pv = ev[hv], zv.indexOf(Pv) >= 0 || (Sv[Pv] = vv[Pv]);
        return Sv
      }(vv, zv);
      if (Object.getOwnPropertySymbols) {
        var ev = Object.getOwnPropertySymbols(vv);
        for (hv = 0; hv < ev.length; hv++) Pv = ev[hv], zv.indexOf(Pv) >= 0 || Object.prototype.propertyIsEnumerable.call(vv, Pv) && (Sv[Pv] = vv[Pv])
      }
      return Sv
    }
    var lz = (0, hv.forwardRef)((function(vv, zv) {
      var Pv = vv.children,
        Sv = wz(Nz(vv, Xv)),
        ev = Sv.open,
        gv = Nz(Sv, uv);
      return (0, hv.useImperativeHandle)(zv, (function() {
        return {
          open: ev
        }
      }), [ev]), hv.createElement(hv.Fragment, null, Pv(pz(pz({}, gv), {}, {
        open: ev
      })))
    }));
    lz.displayName = "Dropzone";
    var Tz = {
      disabled: !1,
      getFilesFromEvent: function(vv) {
        return gv(this, void 0, void 0, (function() {
          return pv(this, (function(zv) {
            return wv(vv) && wv(vv.dataTransfer) ? [2, Cv(vv.dataTransfer, vv.type)] : function(vv) {
              return wv(vv) && wv(vv.target)
            }(vv) ? [2, av(vv)] : Array.isArray(vv) && vv.every((function(vv) {
              return "getFile" in vv && "function" === typeof vv.getFile
            })) ? [2, sv(vv)] : [2, []]
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
    lz.defaultProps = Tz, lz.propTypes = {
      children: ev().func,
      accept: ev().objectOf(ev().arrayOf(ev().string)),
      multiple: ev().bool,
      preventDropOnDocument: ev().bool,
      noClick: ev().bool,
      noKeyboard: ev().bool,
      noDrag: ev().bool,
      noDragEventsBubbling: ev().bool,
      minSize: ev().number,
      maxSize: ev().number,
      maxFiles: ev().number,
      disabled: ev().bool,
      getFilesFromEvent: ev().func,
      onFileDialogCancel: ev().func,
      onFileDialogOpen: ev().func,
      useFsAccessApi: ev().bool,
      autoFocus: ev().bool,
      onDragEnter: ev().func,
      onDragLeave: ev().func,
      onDragOver: ev().func,
      onDrop: ev().func,
      onDropAccepted: ev().func,
      onDropRejected: ev().func,
      onError: ev().func,
      validator: ev().func
    };
    var Wz = {
      dD: !1,
      isFileDialogActive: !1,
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1,
      acceptedFiles: [],
      fileRejections: []
    };

    function wz() {
      var vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        zv = pz(pz({}, Tz), vv),
        Pv = zv.accept,
        Sv = zv.disabled,
        ev = zv.getFilesFromEvent,
        gv = zv.maxSize,
        pv = zv.minSize,
        dv = zv.multiple,
        Nv = zv.maxFiles,
        lv = zv.onDragEnter,
        Tv = zv.onDragLeave,
        Wv = zv.onDragOver,
        wv = zv.onDrop,
        av = zv.onDropAccepted,
        sv = zv.onDropRejected,
        Cv = zv.onFileDialogCancel,
        iv = zv.onFileDialogOpen,
        cv = zv.useFsAccessApi,
        Gv = zv.autoFocus,
        mv = zv.preventDropOnDocument,
        jv = zv.noClick,
        fv = zv.noKeyboard,
        Fv = zv.noDrag,
        Yv = zv.noDragEventsBubbling,
        nv = zv.onError,
        Dv = zv.validator,
        Rv = (0, hv.useMemo)((function() {
          return function(vv) {
            if (Bv(vv)) return Object.entries(vv).reduce((function(vv, zv) {
              var Pv = Uv(zv, 2),
                hv = Pv[0],
                Sv = Pv[1];
              return [].concat(Ov(vv), [hv], Ov(Sv))
            }), []).filter((function(vv) {
              return rv(vv) || kv(vv)
            })).join(",")
          }(Pv)
        }), [Pv]),
        xv = (0, hv.useMemo)((function() {
          return function(vv) {
            return Bv(vv) ? [{
              description: "Files",
              accept: Object.entries(vv).filter((function(vv) {
                var zv = Uv(vv, 2),
                  Pv = zv[0],
                  hv = zv[1],
                  Sv = !0;
                return rv(Pv) || (console.warn('Skipped "'.concat(Pv, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), Sv = !1), Array.isArray(hv) && hv.every(kv) || (console.warn('Skipped "'.concat(Pv, '" because an invalid file extension was provided.')), Sv = !1), Sv
              })).reduce((function(vv, zv) {
                var Pv = Uv(zv, 2),
                  hv = Pv[0],
                  Sv = Pv[1];
                return Kv(Kv({}, vv), {}, Vv({}, hv, Sv))
              }), {})
            }] : vv
          }(Pv)
        }), [Pv]),
        tv = (0, hv.useMemo)((function() {
          return "function" === typeof iv ? iv : sz
        }), [iv]),
        qv = (0, hv.useMemo)((function() {
          return "function" === typeof Cv ? Cv : sz
        }), [Cv]),
        Iv = (0, hv.useRef)(null),
        Qv = (0, hv.useRef)(null),
        Zv = hz((0, hv.useReducer)(az, Wz), 2),
        Av = Zv[0],
        Lv = Zv[1],
        Xv = Av.dD,
        uv = Av.isFileDialogActive,
        Sz = (0, hv.useRef)("undefined" !== typeof window && window.isSecureContext && cv && "showOpenFilePicker" in window),
        ez = function() {
          !Sz.current && uv && setTimeout((function() {
            Qv.current && (Qv.current.files.length || (Lv({
              type: "closeDialog"
            }), qv()))
          }), 300)
        };
      (0, hv.useEffect)((function() {
        return window.addEventListener("focus", ez, !1),
          function() {
            window.removeEventListener("focus", ez, !1)
          }
      }), [Qv, uv, qv, Sz]);
      var gz = (0, hv.useRef)([]),
        lz = function(vv) {
          Iv.current && Iv.current.contains(vv.target) || (vv.preventDefault(), gz.current = [])
        };
      (0, hv.useEffect)((function() {
        return mv && (document.addEventListener("dragover", ov, !1), document.addEventListener("drop", lz, !1)),
          function() {
            mv && (document.removeEventListener("dragover", ov), document.removeEventListener("drop", lz))
          }
      }), [Iv, mv]), (0, hv.useEffect)((function() {
        return !Sv && Gv && Iv.current && Iv.current.focus(),
          function() {}
      }), [Iv, Gv, Sv]);
      var wz = (0, hv.useCallback)((function(vv) {
          nv ? nv(vv) : console.error(vv)
        }), [nv]),
        Cz = (0, hv.useCallback)((function(vv) {
          vv.preventDefault(), vv.persist(), Vz(vv), gz.current = [].concat(Pz(gz.current), [vv.target]), Ev(vv) && Promise.resolve(ev(vv)).then((function(zv) {
            if (!Jv(vv) || Yv) {
              var Pv = zv.length,
                hv = Pv > 0 && function(vv) {
                  var zv = vv.files,
                    Pv = vv.accept,
                    hv = vv.minSize,
                    Sv = vv.maxSize,
                    ev = vv.multiple,
                    gv = vv.maxFiles,
                    pv = vv.validator;
                  return !(!ev && zv.length > 1 || ev && gv >= 1 && zv.length > gv) && zv.every((function(vv) {
                    var zv = Uv(Mv(vv, Pv), 1)[0],
                      ev = Uv(yv(vv, hv, Sv), 1)[0],
                      gv = pv ? pv(vv) : null;
                    return zv && ev && !gv
                  }))
                }({
                  files: zv,
                  accept: Rv,
                  minSize: pv,
                  maxSize: gv,
                  multiple: dv,
                  maxFiles: Nv,
                  validator: Dv
                });
              Lv({
                isDragAccept: hv,
                isDragReject: Pv > 0 && !hv,
                isDragActive: !0,
                type: "setDraggedFiles"
              }), lv && lv(vv)
            }
          })).catch((function(vv) {
            return wz(vv)
          }))
        }), [ev, lv, wz, Yv, Rv, pv, gv, dv, Nv, Dv]),
        iz = (0, hv.useCallback)((function(vv) {
          vv.preventDefault(), vv.persist(), Vz(vv);
          var zv = Ev(vv);
          if (zv && vv.dataTransfer) try {
            vv.dataTransfer.dropEffect = "copy"
          } catch (Pv) {}
          return zv && Wv && Wv(vv), !1
        }), [Wv, Yv]),
        cz = (0, hv.useCallback)((function(vv) {
          vv.preventDefault(), vv.persist(), Vz(vv);
          var zv = gz.current.filter((function(vv) {
              return Iv.current && Iv.current.contains(vv)
            })),
            Pv = zv.indexOf(vv.target); - 1 !== Pv && zv.splice(Pv, 1), gz.current = zv, zv.length > 0 || (Lv({
            type: "setDraggedFiles",
            isDragActive: !1,
            isDragAccept: !1,
            isDragReject: !1
          }), Ev(vv) && Tv && Tv(vv))
        }), [Iv, Tv, Yv]),
        Gz = (0, hv.useCallback)((function(vv, zv) {
          var Pv = [],
            hv = [];
          vv.forEach((function(vv) {
            var zv = hz(Mv(vv, Rv), 2),
              Sv = zv[0],
              ev = zv[1],
              dv = hz(yv(vv, pv, gv), 2),
              Nv = dv[0],
              lv = dv[1],
              Tv = Dv ? Dv(vv) : null;
            if (Sv && Nv && !Tv) Pv.push(vv);
            else {
              var Wv = [ev, lv];
              Tv && (Wv = Wv.concat(Tv)), hv.push({
                file: vv,
                errors: Wv.filter((function(vv) {
                  return vv
                }))
              })
            }
          })), (!dv && Pv.length > 1 || dv && Nv >= 1 && Pv.length > Nv) && (Pv.forEach((function(vv) {
            hv.push({
              file: vv,
              errors: [Hv]
            })
          })), Pv.splice(0)), Lv({
            acceptedFiles: Pv,
            fileRejections: hv,
            type: "setFiles"
          }), wv && wv(Pv, hv, zv), hv.length > 0 && sv && sv(hv, zv), Pv.length > 0 && av && av(Pv, zv)
        }), [Lv, dv, Rv, pv, gv, Nv, wv, av, sv, Dv]),
        mz = (0, hv.useCallback)((function(vv) {
          vv.preventDefault(), vv.persist(), Vz(vv), gz.current = [], Ev(vv) && Promise.resolve(ev(vv)).then((function(zv) {
            Jv(vv) && !Yv || Gz(zv, vv)
          })).catch((function(vv) {
            return wz(vv)
          })), Lv({
            type: "reset"
          })
        }), [ev, Gz, wz, Yv]),
        jz = (0, hv.useCallback)((function() {
          if (Sz.current) {
            Lv({
              type: "openDialog"
            }), tv();
            var vv = {
              multiple: dv,
              types: xv
            };
            window.showOpenFilePicker(vv).then((function(vv) {
              return ev(vv)
            })).then((function(vv) {
              Gz(vv, null), Lv({
                type: "closeDialog"
              })
            })).catch((function(vv) {
              var zv;
              (zv = vv) instanceof DOMException && ("AbortError" === zv.name || zv.code === zv.ABORT_ERR) ? (qv(vv), Lv({
                type: "closeDialog"
              })) : ! function(vv) {
                return vv instanceof DOMException && ("SecurityError" === vv.name || vv.code === vv.SECURITY_ERR)
              }(vv) ? wz(vv) : (Sz.current = !1, Qv.current ? (Qv.current.value = null, Qv.current.click()) : wz(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))
            }))
          } else Qv.current && (Lv({
            type: "openDialog"
          }), tv(), Qv.current.value = null, Qv.current.click())
        }), [Lv, tv, qv, cv, Gz, wz, xv, dv]),
        fz = (0, hv.useCallback)((function(vv) {
          Iv.current && Iv.current.isEqualNode(vv.target) && (" " !== vv.key && "Enter" !== vv.key && 32 !== vv.keyCode && 13 !== vv.keyCode || (vv.preventDefault(), jz()))
        }), [Iv, jz]),
        Fz = (0, hv.useCallback)((function() {
          Lv({
            type: "focus"
          })
        }), []),
        Yz = (0, hv.useCallback)((function() {
          Lv({
            type: "blur"
          })
        }), []),
        nz = (0, hv.useCallback)((function() {
          jv || (! function() {
            var vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
            return function(vv) {
              return -1 !== vv.indexOf("MSIE") || -1 !== vv.indexOf("Trident/")
            }(vv) || function(vv) {
              return -1 !== vv.indexOf("Edge/")
            }(vv)
          }() ? jz() : setTimeout(jz, 0))
        }), [jv, jz]),
        Oz = function(vv) {
          return Sv ? null : vv
        },
        Dz = function(vv) {
          return fv ? null : Oz(vv)
        },
        Kz = function(vv) {
          return Fv ? null : Oz(vv)
        },
        Vz = function(vv) {
          Yv && vv.stopPropagation()
        },
        Uz = (0, hv.useMemo)((function() {
          return function() {
            var vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              zv = vv.refKey,
              Pv = void 0 === zv ? "ref" : zv,
              hv = vv.role,
              ev = vv.onKeyDown,
              gv = vv.onFocus,
              pv = vv.onBlur,
              dv = vv.onClick,
              Nv = vv.onDragEnter,
              lv = vv.onDragOver,
              Tv = vv.onDragLeave,
              Wv = vv.onDrop,
              wv = Nz(vv, vz);
            return pz(pz(dz({
              onKeyDown: Dz(bv(ev, fz)),
              onFocus: Dz(bv(gv, Fz)),
              onBlur: Dz(bv(pv, Yz)),
              onClick: Oz(bv(dv, nz)),
              onDragEnter: Kz(bv(Nv, Cz)),
              onDragOver: Kz(bv(lv, iz)),
              onDragLeave: Kz(bv(Tv, cz)),
              onDrop: Kz(bv(Wv, mz)),
              role: "string" === typeof hv && "" !== hv ? hv : "presentation"
            }, Pv, Iv), Sv || fv ? {} : {
              tabIndex: 0
            }), wv)
          }
        }), [Iv, fz, Fz, Yz, nz, Cz, iz, cz, mz, fv, Fv, Sv]),
        Rz = (0, hv.useCallback)((function(vv) {
          vv.stopPropagation()
        }), []),
        xz = (0, hv.useMemo)((function() {
          return function() {
            var vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              zv = vv.refKey,
              Pv = void 0 === zv ? "ref" : zv,
              hv = vv.onChange,
              Sv = vv.onClick,
              ev = Nz(vv, zz);
            return pz(pz({}, dz({
              accept: Rv,
              multiple: dv,
              type: "file",
              style: {
                display: "none"
              },
              onChange: Oz(bv(hv, mz)),
              onClick: Oz(bv(Sv, Rz)),
              tabIndex: -1
            }, Pv, Qv)), ev)
          }
        }), [Qv, Pv, dv, mz, Sv]);
      return pz(pz({}, Av), {}, {
        dD: Xv && !Sv,
        getRootProps: Uz,
        getInputProps: xz,
        rootRef: Iv,
        inputRef: Qv,
        open: Oz(jz)
      })
    }

    function az(vv, zv) {
      switch (zv.type) {
        case "focus":
          return pz(pz({}, vv), {}, {
            dD: !0
          });
        case "blur":
          return pz(pz({}, vv), {}, {
            dD: !1
          });
        case "openDialog":
          return pz(pz({}, Wz), {}, {
            isFileDialogActive: !0
          });
        case "closeDialog":
          return pz(pz({}, vv), {}, {
            isFileDialogActive: !1
          });
        case "setDraggedFiles":
          return pz(pz({}, vv), {}, {
            isDragActive: zv.isDragActive,
            isDragAccept: zv.isDragAccept,
            isDragReject: zv.isDragReject
          });
        case "setFiles":
          return pz(pz({}, vv), {}, {
            acceptedFiles: zv.acceptedFiles,
            fileRejections: zv.fileRejections
          });
        case "reset":
          return pz({}, Wz);
        default:
          return vv
      }
    }

    function sz() {}
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);