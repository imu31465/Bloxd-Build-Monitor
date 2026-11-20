export const id = 105;
export const ids = [105];
export const modules = {
  4600: (zz, tz) => {
    tz.b = function(zz, tz) {
      if (zz && tz) {
        var sz = Array.isArray(tz) ? tz : tz.split(","),
          Fz = zz.name || "",
          Wz = (zz.type || "").toLowerCase(),
          Xz = Wz.replace(/\/.*$/, "");
        return sz.some((function(zz) {
          var tz = zz.trim().toLowerCase();
          return "." === tz.charAt(0) ? Fz.toLowerCase().endsWith(tz) : tz.endsWith("/*") ? Xz === tz.replace(/\/.*$/, "") : Wz === tz
        }))
      }
      return !0
    }
  },
  4580: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => bt
    });
    var Fz = sz(65),
      Wz = sz(4582),
      Xz = sz.n(Wz);

    function Oz(zz, tz, sz, Fz) {
      return new(sz || (sz = Promise))((function(Wz, Xz) {
        function Oz(zz) {
          try {
            vz(Fz.next(zz))
          } catch (tz) {
            Xz(tz)
          }
        }

        function oz(zz) {
          try {
            vz(Fz.throw(zz))
          } catch (tz) {
            Xz(tz)
          }
        }

        function vz(zz) {
          var tz;
          zz.done ? Wz(zz.value) : (tz = zz.value, tz instanceof sz ? tz : new sz((function(zz) {
            zz(tz)
          }))).then(Oz, oz)
        }
        vz((Fz = Fz.apply(zz, tz || [])).next())
      }))
    }

    function oz(zz, tz) {
      var sz, Fz, Wz, Xz, Oz = {
        label: 0,
        sent: function() {
          if (1 & Wz[0]) throw Wz[1];
          return Wz[1]
        },
        trys: [],
        ops: []
      };
      return Xz = {
        next: oz(0),
        throw: oz(1),
        return: oz(2)
      }, "function" === typeof Symbol && (Xz[Symbol.iterator] = function() {
        return this
      }), Xz;

      function oz(oz) {
        return function(vz) {
          return function(oz) {
            if (sz) throw new TypeError("Generator is already executing.");
            for (; Xz && (Xz = 0, oz[0] && (Oz = 0)), Oz;) try {
              if (sz = 1, Fz && (Wz = 2 & oz[0] ? Fz.return : oz[0] ? Fz.throw || ((Wz = Fz.return) && Wz.call(Fz), 0) : Fz.next) && !(Wz = Wz.call(Fz, oz[1])).done) return Wz;
              switch (Fz = 0, Wz && (oz = [2 & oz[0], Wz.value]), oz[0]) {
                case 0:
                case 1:
                  Wz = oz;
                  break;
                case 4:
                  return Oz.label++, {
                    value: oz[1],
                    done: !1
                  };
                case 5:
                  Oz.label++, Fz = oz[1], oz = [0];
                  continue;
                case 7:
                  oz = Oz.ops.pop(), Oz.trys.pop();
                  continue;
                default:
                  if (!(Wz = (Wz = Oz.trys).length > 0 && Wz[Wz.length - 1]) && (6 === oz[0] || 2 === oz[0])) {
                    Oz = 0;
                    continue
                  }
                  if (3 === oz[0] && (!Wz || oz[1] > Wz[0] && oz[1] < Wz[3])) {
                    Oz.label = oz[1];
                    break
                  }
                  if (6 === oz[0] && Oz.label < Wz[1]) {
                    Oz.label = Wz[1], Wz = oz;
                    break
                  }
                  if (Wz && Oz.label < Wz[2]) {
                    Oz.label = Wz[2], Oz.ops.push(oz);
                    break
                  }
                  Wz[2] && Oz.ops.pop(), Oz.trys.pop();
                  continue
              }
              oz = tz.call(zz, Oz)
            } catch (vz) {
              oz = [6, vz], Fz = 0
            } finally {
              sz = Wz = 0
            }
            if (5 & oz[0]) throw oz[1];
            return {
              value: oz[0] ? oz[1] : void 0,
              done: !0
            }
          }([oz, vz])
        }
      }
    }
    Object.create;

    function vz(zz, tz) {
      var sz = "function" === typeof Symbol && zz[Symbol.iterator];
      if (!sz) return zz;
      var Fz, Wz, Xz = sz.call(zz),
        Oz = [];
      try {
        for (;
          (void 0 === tz || tz-- > 0) && !(Fz = Xz.next()).done;) Oz.push(Fz.value)
      } catch (oz) {
        Wz = {
          error: oz
        }
      } finally {
        try {
          Fz && !Fz.done && (sz = Xz.return) && sz.call(Xz)
        } finally {
          if (Wz) throw Wz.error
        }
      }
      return Oz
    }

    function Uz(zz, tz, sz) {
      if (sz || 2 === arguments.length)
        for (var Fz, Wz = 0, Xz = tz.length; Wz < Xz; Wz++) !Fz && Wz in tz || (Fz || (Fz = Array.prototype.slice.call(tz, 0, Wz)), Fz[Wz] = tz[Wz]);
      return zz.concat(Fz || Array.prototype.slice.call(tz))
    }
    Object.create;
    "function" === typeof SuppressedError && SuppressedError;
    var Kz = new Map([
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
      ["RO", "application/vnd.ms-outlook"]
    ]);

    function uz(zz, tz) {
      var sz = function(zz) {
        var tz = zz.name;
        if (tz && -1 !== tz.lastIndexOf(".") && !zz.type) {
          var sz = tz.split(".").pop().toLowerCase(),
            Fz = Kz.get(sz);
          Fz && Object.defineProperty(zz, "type", {
            value: Fz,
            writable: !1,
            configurable: !1,
            enumerable: !0
          })
        }
        return zz
      }(zz);
      if ("string" !== typeof sz.path) {
        var Fz = zz.webkitRelativePath;
        Object.defineProperty(sz, "path", {
          value: "string" === typeof tz ? tz : "string" === typeof Fz && Fz.length > 0 ? Fz : zz.name,
          writable: !1,
          configurable: !1,
          enumerable: !0
        })
      }
      return sz
    }
    var Nz = [".DS_Store", "Thumbs.db"];

    function bz(zz) {
      return "object" === typeof zz && null !== zz
    }

    function wz(zz) {
      return Bz(zz.target.files).map((function(zz) {
        return uz(zz)
      }))
    }

    function Dz(zz) {
      return Oz(this, void 0, void 0, (function() {
        return oz(this, (function(tz) {
          switch (tz.label) {
            case 0:
              return [4, Promise.all(zz.map((function(zz) {
                return zz.getFile()
              })))];
            case 1:
              return [2, tz.sent().map((function(zz) {
                return uz(zz)
              }))]
          }
        }))
      }))
    }

    function gz(zz, tz) {
      return Oz(this, void 0, void 0, (function() {
        var sz;
        return oz(this, (function(Fz) {
          switch (Fz.label) {
            case 0:
              return zz.items ? (sz = Bz(zz.items).filter((function(zz) {
                return "file" === zz.kind
              })), "drop" !== tz ? [2, sz] : [4, Promise.all(sz.map(Pz))]) : [3, 2];
            case 1:
              return [2, Hz(rz(Fz.sent()))];
            case 2:
              return [2, Hz(Bz(zz.files).map((function(zz) {
                return uz(zz)
              })))]
          }
        }))
      }))
    }

    function Hz(zz) {
      return zz.filter((function(zz) {
        return -1 === Nz.indexOf(zz.name)
      }))
    }

    function Bz(zz) {
      if (null === zz) return [];
      for (var tz = [], sz = 0; sz < zz.length; sz++) {
        var Fz = zz[sz];
        tz.push(Fz)
      }
      return tz
    }

    function Pz(zz) {
      if ("function" !== typeof zz.webkitGetAsEntry) return Yz(zz);
      var tz = zz.webkitGetAsEntry();
      return tz && tz.isDirectory ? mz(tz) : Yz(zz)
    }

    function rz(zz) {
      return zz.reduce((function(zz, tz) {
        return Uz(Uz([], vz(zz), !1), vz(Array.isArray(tz) ? rz(tz) : [tz]), !1)
      }), [])
    }

    function Yz(zz) {
      var tz = zz.getAsFile();
      if (!tz) return Promise.reject("".concat(zz, " is not a File"));
      var sz = uz(tz);
      return Promise.resolve(sz)
    }

    function xz(zz) {
      return Oz(this, void 0, void 0, (function() {
        return oz(this, (function(tz) {
          return [2, zz.isDirectory ? mz(zz) : Jz(zz)]
        }))
      }))
    }

    function mz(zz) {
      var tz = zz.createReader();
      return new Promise((function(zz, sz) {
        var Fz = [];
        ! function Wz() {
          var Xz = this;
          tz.readEntries((function(tz) {
            return Oz(Xz, void 0, void 0, (function() {
              var Xz, Oz, vz;
              return oz(this, (function(oz) {
                switch (oz.label) {
                  case 0:
                    if (tz.length) return [3, 5];
                    oz.label = 1;
                  case 1:
                    return oz.trys.push([1, 3, , 4]), [4, Promise.all(Fz)];
                  case 2:
                    return Xz = oz.sent(), zz(Xz), [3, 4];
                  case 3:
                    return Oz = oz.sent(), sz(Oz), [3, 4];
                  case 4:
                    return [3, 6];
                  case 5:
                    vz = Promise.all(tz.map(xz)), Fz.push(vz), Wz(), oz.label = 6;
                  case 6:
                    return [2]
                }
              }))
            }))
          }), (function(zz) {
            sz(zz)
          }))
        }()
      }))
    }

    function Jz(zz) {
      return Oz(this, void 0, void 0, (function() {
        return oz(this, (function(tz) {
          return [2, new Promise((function(tz, sz) {
            zz.file((function(sz) {
              var Fz = uz(sz, zz.fullPath);
              tz(Fz)
            }), (function(zz) {
              sz(zz)
            }))
          }))]
        }))
      }))
    }
    var Iz = sz(4600);

    function Cz(zz) {
      return function(zz) {
        if (Array.isArray(zz)) return jz(zz)
      }(zz) || function(zz) {
        if ("undefined" !== typeof Symbol && null != zz[Symbol.iterator] || null != zz["@@iterator"]) return Array.from(zz)
      }(zz) || cz(zz) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function ez(zz, tz) {
      var sz = Object.keys(zz);
      if (Object.getOwnPropertySymbols) {
        var Fz = Object.getOwnPropertySymbols(zz);
        tz && (Fz = Fz.filter((function(tz) {
          return Object.getOwnPropertyDescriptor(zz, tz).enumerable
        }))), sz.push.apply(sz, Fz)
      }
      return sz
    }

    function Zz(zz) {
      for (var tz = 1; tz < arguments.length; tz++) {
        var sz = null != arguments[tz] ? arguments[tz] : {};
        tz % 2 ? ez(Object(sz), !0).forEach((function(tz) {
          Gz(zz, tz, sz[tz])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(zz, Object.getOwnPropertyDescriptors(sz)) : ez(Object(sz)).forEach((function(tz) {
          Object.defineProperty(zz, tz, Object.getOwnPropertyDescriptor(sz, tz))
        }))
      }
      return zz
    }

    function Gz(zz, tz, sz) {
      return tz in zz ? Object.defineProperty(zz, tz, {
        value: sz,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : zz[tz] = sz, zz
    }

    function Tz(zz, tz) {
      return function(zz) {
        if (Array.isArray(zz)) return zz
      }(zz) || function(zz, tz) {
        var sz = null == zz ? null : "undefined" !== typeof Symbol && zz[Symbol.iterator] || zz["@@iterator"];
        if (null == sz) return;
        var Fz, Wz, Xz = [],
          Oz = !0,
          oz = !1;
        try {
          for (sz = sz.call(zz); !(Oz = (Fz = sz.next()).done) && (Xz.push(Fz.value), !tz || Xz.length !== tz); Oz = !0);
        } catch (vz) {
          oz = !0, Wz = vz
        } finally {
          try {
            Oz || null == sz.return || sz.return()
          } finally {
            if (oz) throw Wz
          }
        }
        return Xz
      }(zz, tz) || cz(zz, tz) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function cz(zz, tz) {
      if (zz) {
        if ("string" === typeof zz) return jz(zz, tz);
        var sz = Object.prototype.toString.call(zz).slice(8, -1);
        return "Object" === sz && zz.constructor && (sz = zz.constructor.name), "Map" === sz || "Set" === sz ? Array.from(zz) : "Arguments" === sz || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(sz) ? jz(zz, tz) : void 0
      }
    }

    function jz(zz, tz) {
      (null == tz || tz > zz.length) && (tz = zz.length);
      for (var sz = 0, Fz = new Array(tz); sz < tz; sz++) Fz[sz] = zz[sz];
      return Fz
    }
    var Az = "file-invalid-type",
      yz = "file-too-large",
      Mz = "file-too-small",
      dz = "too-many-files",
      hz = function(zz) {
        zz = Array.isArray(zz) && 1 === zz.length ? zz[0] : zz;
        var tz = Array.isArray(zz) ? "one of ".concat(zz.join(", ")) : zz;
        return {
          code: Az,
          message: "File type must be ".concat(tz)
        }
      },
      Qz = function(zz) {
        return {
          code: yz,
          message: "File is larger than ".concat(zz, " ").concat(1 === zz ? "byte" : "bytes")
        }
      },
      kz = function(zz) {
        return {
          code: Mz,
          message: "File is smaller than ".concat(zz, " ").concat(1 === zz ? "byte" : "bytes")
        }
      },
      iz = {
        code: dz,
        message: "Too many files"
      };

    function Lz(zz, tz) {
      var sz = "application/x-moz-file" === zz.type || (0, Iz.b)(zz, tz);
      return [sz, sz ? null : hz(tz)]
    }

    function lz(zz, tz, sz) {
      if (nz(zz.size))
        if (nz(tz) && nz(sz)) {
          if (zz.size > sz) return [!1, Qz(sz)];
          if (zz.size < tz) return [!1, kz(tz)]
        } else {
          if (nz(tz) && zz.size < tz) return [!1, kz(tz)];
          if (nz(sz) && zz.size > sz) return [!1, Qz(sz)]
        } return [!0, null]
    }

    function nz(zz) {
      return void 0 !== zz && null !== zz
    }

    function az(zz) {
      return "function" === typeof zz.isPropagationStopped ? zz.isPropagationStopped() : "undefined" !== typeof zz.cancelBubble && zz.cancelBubble
    }

    function qz(zz) {
      return zz.dataTransfer ? Array.prototype.some.call(zz.dataTransfer.types, (function(zz) {
        return "Files" === zz || "application/x-moz-file" === zz
      })) : !!zz.target && !!zz.target.files
    }

    function Sz(zz) {
      zz.preventDefault()
    }

    function Vz() {
      for (var zz = arguments.length, tz = new Array(zz), sz = 0; sz < zz; sz++) tz[sz] = arguments[sz];
      return function(zz) {
        for (var sz = arguments.length, Fz = new Array(sz > 1 ? sz - 1 : 0), Wz = 1; Wz < sz; Wz++) Fz[Wz - 1] = arguments[Wz];
        return tz.some((function(tz) {
          return !az(zz) && tz && tz.apply(void 0, [zz].concat(Fz)), az(zz)
        }))
      }
    }

    function Rz(zz) {
      return "audio/*" === zz || "video/*" === zz || "image/*" === zz || "text/*" === zz || /\w+\/[-+.\w]+/g.test(zz)
    }

    function pz(zz) {
      return /^.*\.[\w]+$/.test(zz)
    }
    var fz = ["children"],
      Ez = ["open"],
      zt = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
      tt = ["refKey", "onChange", "onClick"];

    function st(zz) {
      return function(zz) {
        if (Array.isArray(zz)) return Xt(zz)
      }(zz) || function(zz) {
        if ("undefined" !== typeof Symbol && null != zz[Symbol.iterator] || null != zz["@@iterator"]) return Array.from(zz)
      }(zz) || Wt(zz) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Ft(zz, tz) {
      return function(zz) {
        if (Array.isArray(zz)) return zz
      }(zz) || function(zz, tz) {
        var sz = null == zz ? null : "undefined" !== typeof Symbol && zz[Symbol.iterator] || zz["@@iterator"];
        if (null == sz) return;
        var Fz, Wz, Xz = [],
          Oz = !0,
          oz = !1;
        try {
          for (sz = sz.call(zz); !(Oz = (Fz = sz.next()).done) && (Xz.push(Fz.value), !tz || Xz.length !== tz); Oz = !0);
        } catch (vz) {
          oz = !0, Wz = vz
        } finally {
          try {
            Oz || null == sz.return || sz.return()
          } finally {
            if (oz) throw Wz
          }
        }
        return Xz
      }(zz, tz) || Wt(zz, tz) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Wt(zz, tz) {
      if (zz) {
        if ("string" === typeof zz) return Xt(zz, tz);
        var sz = Object.prototype.toString.call(zz).slice(8, -1);
        return "Object" === sz && zz.constructor && (sz = zz.constructor.name), "Map" === sz || "Set" === sz ? Array.from(zz) : "Arguments" === sz || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(sz) ? Xt(zz, tz) : void 0
      }
    }

    function Xt(zz, tz) {
      (null == tz || tz > zz.length) && (tz = zz.length);
      for (var sz = 0, Fz = new Array(tz); sz < tz; sz++) Fz[sz] = zz[sz];
      return Fz
    }

    function Ot(zz, tz) {
      var sz = Object.keys(zz);
      if (Object.getOwnPropertySymbols) {
        var Fz = Object.getOwnPropertySymbols(zz);
        tz && (Fz = Fz.filter((function(tz) {
          return Object.getOwnPropertyDescriptor(zz, tz).enumerable
        }))), sz.push.apply(sz, Fz)
      }
      return sz
    }

    function ot(zz) {
      for (var tz = 1; tz < arguments.length; tz++) {
        var sz = null != arguments[tz] ? arguments[tz] : {};
        tz % 2 ? Ot(Object(sz), !0).forEach((function(tz) {
          vt(zz, tz, sz[tz])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(zz, Object.getOwnPropertyDescriptors(sz)) : Ot(Object(sz)).forEach((function(tz) {
          Object.defineProperty(zz, tz, Object.getOwnPropertyDescriptor(sz, tz))
        }))
      }
      return zz
    }

    function vt(zz, tz, sz) {
      return tz in zz ? Object.defineProperty(zz, tz, {
        value: sz,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : zz[tz] = sz, zz
    }

    function Ut(zz, tz) {
      if (null == zz) return {};
      var sz, Fz, Wz = function(zz, tz) {
        if (null == zz) return {};
        var sz, Fz, Wz = {},
          Xz = Object.keys(zz);
        for (Fz = 0; Fz < Xz.length; Fz++) sz = Xz[Fz], tz.indexOf(sz) >= 0 || (Wz[sz] = zz[sz]);
        return Wz
      }(zz, tz);
      if (Object.getOwnPropertySymbols) {
        var Xz = Object.getOwnPropertySymbols(zz);
        for (Fz = 0; Fz < Xz.length; Fz++) sz = Xz[Fz], tz.indexOf(sz) >= 0 || Object.prototype.propertyIsEnumerable.call(zz, sz) && (Wz[sz] = zz[sz])
      }
      return Wz
    }
    var Kt = (0, Fz.forwardRef)((function(zz, tz) {
      var sz = zz.children,
        Wz = bt(Ut(zz, fz)),
        Xz = Wz.open,
        Oz = Ut(Wz, Ez);
      return (0, Fz.useImperativeHandle)(tz, (function() {
        return {
          open: Xz
        }
      }), [Xz]), Fz.createElement(Fz.Fragment, null, sz(ot(ot({}, Oz), {}, {
        open: Xz
      })))
    }));
    Kt.displayName = "Dropzone";
    var ut = {
      disabled: !1,
      getFilesFromEvent: function(zz) {
        return Oz(this, void 0, void 0, (function() {
          return oz(this, (function(tz) {
            return bz(zz) && bz(zz.dataTransfer) ? [2, gz(zz.dataTransfer, zz.type)] : function(zz) {
              return bz(zz) && bz(zz.target)
            }(zz) ? [2, wz(zz)] : Array.isArray(zz) && zz.every((function(zz) {
              return "getFile" in zz && "function" === typeof zz.getFile
            })) ? [2, Dz(zz)] : [2, []]
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
    Kt.defaultProps = ut, Kt.propTypes = {
      children: Xz().func,
      accept: Xz().objectOf(Xz().arrayOf(Xz().string)),
      multiple: Xz().bool,
      preventDropOnDocument: Xz().bool,
      noClick: Xz().bool,
      noKeyboard: Xz().bool,
      noDrag: Xz().bool,
      noDragEventsBubbling: Xz().bool,
      minSize: Xz().number,
      maxSize: Xz().number,
      maxFiles: Xz().number,
      disabled: Xz().bool,
      getFilesFromEvent: Xz().func,
      onFileDialogCancel: Xz().func,
      onFileDialogOpen: Xz().func,
      useFsAccessApi: Xz().bool,
      autoFocus: Xz().bool,
      onDragEnter: Xz().func,
      onDragLeave: Xz().func,
      onDragOver: Xz().func,
      onDrop: Xz().func,
      onDropAccepted: Xz().func,
      onDropRejected: Xz().func,
      onError: Xz().func,
      validator: Xz().func
    };
    var Nt = {
      xJ: !1,
      isFileDialogActive: !1,
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1,
      acceptedFiles: [],
      fileRejections: []
    };

    function bt() {
      var zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        tz = ot(ot({}, ut), zz),
        sz = tz.accept,
        Wz = tz.disabled,
        Xz = tz.getFilesFromEvent,
        Oz = tz.maxSize,
        oz = tz.minSize,
        vz = tz.multiple,
        Uz = tz.maxFiles,
        Kz = tz.onDragEnter,
        uz = tz.onDragLeave,
        Nz = tz.onDragOver,
        bz = tz.onDrop,
        wz = tz.onDropAccepted,
        Dz = tz.onDropRejected,
        gz = tz.onFileDialogCancel,
        Hz = tz.onFileDialogOpen,
        Bz = tz.useFsAccessApi,
        Pz = tz.autoFocus,
        rz = tz.preventDropOnDocument,
        Yz = tz.noClick,
        xz = tz.noKeyboard,
        mz = tz.noDrag,
        Jz = tz.noDragEventsBubbling,
        Iz = tz.onError,
        ez = tz.validator,
        cz = (0, Fz.useMemo)((function() {
          return function(zz) {
            if (nz(zz)) return Object.entries(zz).reduce((function(zz, tz) {
              var sz = Tz(tz, 2),
                Fz = sz[0],
                Wz = sz[1];
              return [].concat(Cz(zz), [Fz], Cz(Wz))
            }), []).filter((function(zz) {
              return Rz(zz) || pz(zz)
            })).join(",")
          }(sz)
        }), [sz]),
        jz = (0, Fz.useMemo)((function() {
          return function(zz) {
            return nz(zz) ? [{
              description: "Files",
              accept: Object.entries(zz).filter((function(zz) {
                var tz = Tz(zz, 2),
                  sz = tz[0],
                  Fz = tz[1],
                  Wz = !0;
                return Rz(sz) || (console.warn('Skipped "'.concat(sz, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), Wz = !1), Array.isArray(Fz) && Fz.every(pz) || (console.warn('Skipped "'.concat(sz, '" because an invalid file extension was provided.')), Wz = !1), Wz
              })).reduce((function(zz, tz) {
                var sz = Tz(tz, 2),
                  Fz = sz[0],
                  Wz = sz[1];
                return Zz(Zz({}, zz), {}, Gz({}, Fz, Wz))
              }), {})
            }] : zz
          }(sz)
        }), [sz]),
        Az = (0, Fz.useMemo)((function() {
          return "function" === typeof Hz ? Hz : Dt
        }), [Hz]),
        yz = (0, Fz.useMemo)((function() {
          return "function" === typeof gz ? gz : Dt
        }), [gz]),
        Mz = (0, Fz.useRef)(null),
        dz = (0, Fz.useRef)(null),
        hz = Ft((0, Fz.useReducer)(wt, Nt), 2),
        Qz = hz[0],
        kz = hz[1],
        fz = Qz.xJ,
        Ez = Qz.isFileDialogActive,
        Wt = (0, Fz.useRef)("undefined" !== typeof window && window.isSecureContext && Bz && "showOpenFilePicker" in window),
        Xt = function() {
          !Wt.current && Ez && setTimeout((function() {
            dz.current && (dz.current.files.length || (kz({
              type: "closeDialog"
            }), yz()))
          }), 300)
        };
      (0, Fz.useEffect)((function() {
        return window.addEventListener("focus", Xt, !1),
          function() {
            window.removeEventListener("focus", Xt, !1)
          }
      }), [dz, Ez, yz, Wt]);
      var Ot = (0, Fz.useRef)([]),
        Kt = function(zz) {
          Mz.current && Mz.current.contains(zz.target) || (zz.preventDefault(), Ot.current = [])
        };
      (0, Fz.useEffect)((function() {
        return rz && (document.addEventListener("dragover", Sz, !1), document.addEventListener("drop", Kt, !1)),
          function() {
            rz && (document.removeEventListener("dragover", Sz), document.removeEventListener("drop", Kt))
          }
      }), [Mz, rz]), (0, Fz.useEffect)((function() {
        return !Wz && Pz && Mz.current && Mz.current.focus(),
          function() {}
      }), [Mz, Pz, Wz]);
      var bt = (0, Fz.useCallback)((function(zz) {
          Iz ? Iz(zz) : console.error(zz)
        }), [Iz]),
        gt = (0, Fz.useCallback)((function(zz) {
          zz.preventDefault(), zz.persist(), Gt(zz), Ot.current = [].concat(st(Ot.current), [zz.target]), qz(zz) && Promise.resolve(Xz(zz)).then((function(tz) {
            if (!az(zz) || Jz) {
              var sz = tz.length,
                Fz = sz > 0 && function(zz) {
                  var tz = zz.files,
                    sz = zz.accept,
                    Fz = zz.minSize,
                    Wz = zz.maxSize,
                    Xz = zz.multiple,
                    Oz = zz.maxFiles,
                    oz = zz.validator;
                  return !(!Xz && tz.length > 1 || Xz && Oz >= 1 && tz.length > Oz) && tz.every((function(zz) {
                    var tz = Tz(Lz(zz, sz), 1)[0],
                      Xz = Tz(lz(zz, Fz, Wz), 1)[0],
                      Oz = oz ? oz(zz) : null;
                    return tz && Xz && !Oz
                  }))
                }({
                  files: tz,
                  accept: cz,
                  minSize: oz,
                  maxSize: Oz,
                  multiple: vz,
                  maxFiles: Uz,
                  validator: ez
                });
              kz({
                isDragAccept: Fz,
                isDragReject: sz > 0 && !Fz,
                isDragActive: !0,
                type: "setDraggedFiles"
              }), Kz && Kz(zz)
            }
          })).catch((function(zz) {
            return bt(zz)
          }))
        }), [Xz, Kz, bt, Jz, cz, oz, Oz, vz, Uz, ez]),
        Ht = (0, Fz.useCallback)((function(zz) {
          zz.preventDefault(), zz.persist(), Gt(zz);
          var tz = qz(zz);
          if (tz && zz.dataTransfer) try {
            zz.dataTransfer.dropEffect = "copy"
          } catch (sz) {}
          return tz && Nz && Nz(zz), !1
        }), [Nz, Jz]),
        Bt = (0, Fz.useCallback)((function(zz) {
          zz.preventDefault(), zz.persist(), Gt(zz);
          var tz = Ot.current.filter((function(zz) {
              return Mz.current && Mz.current.contains(zz)
            })),
            sz = tz.indexOf(zz.target); - 1 !== sz && tz.splice(sz, 1), Ot.current = tz, tz.length > 0 || (kz({
            type: "setDraggedFiles",
            isDragActive: !1,
            isDragAccept: !1,
            isDragReject: !1
          }), qz(zz) && uz && uz(zz))
        }), [Mz, uz, Jz]),
        Pt = (0, Fz.useCallback)((function(zz, tz) {
          var sz = [],
            Fz = [];
          zz.forEach((function(zz) {
            var tz = Ft(Lz(zz, cz), 2),
              Wz = tz[0],
              Xz = tz[1],
              vz = Ft(lz(zz, oz, Oz), 2),
              Uz = vz[0],
              Kz = vz[1],
              uz = ez ? ez(zz) : null;
            if (Wz && Uz && !uz) sz.push(zz);
            else {
              var Nz = [Xz, Kz];
              uz && (Nz = Nz.concat(uz)), Fz.push({
                file: zz,
                errors: Nz.filter((function(zz) {
                  return zz
                }))
              })
            }
          })), (!vz && sz.length > 1 || vz && Uz >= 1 && sz.length > Uz) && (sz.forEach((function(zz) {
            Fz.push({
              file: zz,
              errors: [iz]
            })
          })), sz.splice(0)), kz({
            acceptedFiles: sz,
            fileRejections: Fz,
            type: "setFiles"
          }), bz && bz(sz, Fz, tz), Fz.length > 0 && Dz && Dz(Fz, tz), sz.length > 0 && wz && wz(sz, tz)
        }), [kz, vz, cz, oz, Oz, Uz, bz, wz, Dz, ez]),
        rt = (0, Fz.useCallback)((function(zz) {
          zz.preventDefault(), zz.persist(), Gt(zz), Ot.current = [], qz(zz) && Promise.resolve(Xz(zz)).then((function(tz) {
            az(zz) && !Jz || Pt(tz, zz)
          })).catch((function(zz) {
            return bt(zz)
          })), kz({
            type: "reset"
          })
        }), [Xz, Pt, bt, Jz]),
        Yt = (0, Fz.useCallback)((function() {
          if (Wt.current) {
            kz({
              type: "openDialog"
            }), Az();
            var zz = {
              multiple: vz,
              types: jz
            };
            window.showOpenFilePicker(zz).then((function(zz) {
              return Xz(zz)
            })).then((function(zz) {
              Pt(zz, null), kz({
                type: "closeDialog"
              })
            })).catch((function(zz) {
              var tz;
              (tz = zz) instanceof DOMException && ("AbortError" === tz.name || tz.code === tz.ABORT_ERR) ? (yz(zz), kz({
                type: "closeDialog"
              })) : ! function(zz) {
                return zz instanceof DOMException && ("SecurityError" === zz.name || zz.code === zz.SECURITY_ERR)
              }(zz) ? bt(zz) : (Wt.current = !1, dz.current ? (dz.current.value = null, dz.current.click()) : bt(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))
            }))
          } else dz.current && (kz({
            type: "openDialog"
          }), Az(), dz.current.value = null, dz.current.click())
        }), [kz, Az, yz, Bz, Pt, bt, jz, vz]),
        xt = (0, Fz.useCallback)((function(zz) {
          Mz.current && Mz.current.isEqualNode(zz.target) && (" " !== zz.key && "Enter" !== zz.key && 32 !== zz.keyCode && 13 !== zz.keyCode || (zz.preventDefault(), Yt()))
        }), [Mz, Yt]),
        mt = (0, Fz.useCallback)((function() {
          kz({
            type: "focus"
          })
        }), []),
        Jt = (0, Fz.useCallback)((function() {
          kz({
            type: "blur"
          })
        }), []),
        It = (0, Fz.useCallback)((function() {
          Yz || (! function() {
            var zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
            return function(zz) {
              return -1 !== zz.indexOf("MSIE") || -1 !== zz.indexOf("Trident/")
            }(zz) || function(zz) {
              return -1 !== zz.indexOf("Edge/")
            }(zz)
          }() ? Yt() : setTimeout(Yt, 0))
        }), [Yz, Yt]),
        Ct = function(zz) {
          return Wz ? null : zz
        },
        et = function(zz) {
          return xz ? null : Ct(zz)
        },
        Zt = function(zz) {
          return mz ? null : Ct(zz)
        },
        Gt = function(zz) {
          Jz && zz.stopPropagation()
        },
        Tt = (0, Fz.useMemo)((function() {
          return function() {
            var zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              tz = zz.refKey,
              sz = void 0 === tz ? "ref" : tz,
              Fz = zz.role,
              Xz = zz.onKeyDown,
              Oz = zz.onFocus,
              oz = zz.onBlur,
              vz = zz.onClick,
              Uz = zz.onDragEnter,
              Kz = zz.onDragOver,
              uz = zz.onDragLeave,
              Nz = zz.onDrop,
              bz = Ut(zz, zt);
            return ot(ot(vt({
              onKeyDown: et(Vz(Xz, xt)),
              onFocus: et(Vz(Oz, mt)),
              onBlur: et(Vz(oz, Jt)),
              onClick: Ct(Vz(vz, It)),
              onDragEnter: Zt(Vz(Uz, gt)),
              onDragOver: Zt(Vz(Kz, Ht)),
              onDragLeave: Zt(Vz(uz, Bt)),
              onDrop: Zt(Vz(Nz, rt)),
              role: "string" === typeof Fz && "" !== Fz ? Fz : "presentation"
            }, sz, Mz), Wz || xz ? {} : {
              tabIndex: 0
            }), bz)
          }
        }), [Mz, xt, mt, Jt, It, gt, Ht, Bt, rt, xz, mz, Wz]),
        ct = (0, Fz.useCallback)((function(zz) {
          zz.stopPropagation()
        }), []),
        jt = (0, Fz.useMemo)((function() {
          return function() {
            var zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              tz = zz.refKey,
              sz = void 0 === tz ? "ref" : tz,
              Fz = zz.onChange,
              Wz = zz.onClick,
              Xz = Ut(zz, tt);
            return ot(ot({}, vt({
              accept: cz,
              multiple: vz,
              type: "file",
              style: {
                display: "none"
              },
              onChange: Ct(Vz(Fz, rt)),
              onClick: Ct(Vz(Wz, ct)),
              tabIndex: -1
            }, sz, dz)), Xz)
          }
        }), [dz, sz, vz, rt, Wz]);
      return ot(ot({}, Qz), {}, {
        xJ: fz && !Wz,
        getRootProps: Tt,
        getInputProps: jt,
        rootRef: Mz,
        inputRef: dz,
        open: Ct(Yt)
      })
    }

    function wt(zz, tz) {
      switch (tz.type) {
        case "focus":
          return ot(ot({}, zz), {}, {
            xJ: !0
          });
        case "blur":
          return ot(ot({}, zz), {}, {
            xJ: !1
          });
        case "openDialog":
          return ot(ot({}, Nt), {}, {
            isFileDialogActive: !0
          });
        case "closeDialog":
          return ot(ot({}, zz), {}, {
            isFileDialogActive: !1
          });
        case "setDraggedFiles":
          return ot(ot({}, zz), {}, {
            isDragActive: tz.isDragActive,
            isDragAccept: tz.isDragAccept,
            isDragReject: tz.isDragReject
          });
        case "setFiles":
          return ot(ot({}, zz), {}, {
            acceptedFiles: tz.acceptedFiles,
            fileRejections: tz.fileRejections
          });
        case "reset":
          return ot({}, Nt);
        default:
          return zz
      }
    }

    function Dt() {}
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);