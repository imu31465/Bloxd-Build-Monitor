export const id = 105;
export const ids = [105];
export const modules = {
  4735: (zz, uz) => {
    uz.c = function(zz, uz) {
      if (zz && uz) {
        var bz = Array.isArray(uz) ? uz : uz.split(","),
          Ez = zz.name || "",
          nz = (zz.type || "").toLowerCase(),
          iz = nz.replace(/\/.*$/, "");
        return bz.some((function(zz) {
          var uz = zz.trim().toLowerCase();
          return "." === uz.charAt(0) ? Ez.toLowerCase().endsWith(uz) : uz.endsWith("/*") ? iz === uz.replace(/\/.*$/, "") : nz === uz
        }))
      }
      return !0
    }
  },
  4706: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Fu
    });
    var Ez = bz(56),
      nz = bz(4714),
      iz = bz.n(nz);

    function lz(zz, uz, bz, Ez) {
      return new(bz || (bz = Promise))((function(nz, iz) {
        function lz(zz) {
          try {
            tz(Ez.next(zz))
          } catch (uz) {
            iz(uz)
          }
        }

        function Mz(zz) {
          try {
            tz(Ez.throw(zz))
          } catch (uz) {
            iz(uz)
          }
        }

        function tz(zz) {
          var uz;
          zz.done ? nz(zz.value) : (uz = zz.value, uz instanceof bz ? uz : new bz((function(zz) {
            zz(uz)
          }))).then(lz, Mz)
        }
        tz((Ez = Ez.apply(zz, uz || [])).next())
      }))
    }

    function Mz(zz, uz) {
      var bz, Ez, nz, iz, lz = {
        label: 0,
        sent: function() {
          if (1 & nz[0]) throw nz[1];
          return nz[1]
        },
        trys: [],
        ops: []
      };
      return iz = {
        next: Mz(0),
        throw: Mz(1),
        return: Mz(2)
      }, "function" === typeof Symbol && (iz[Symbol.iterator] = function() {
        return this
      }), iz;

      function Mz(Mz) {
        return function(tz) {
          return function(Mz) {
            if (bz) throw new TypeError("Generator is already executing.");
            for (; iz && (iz = 0, Mz[0] && (lz = 0)), lz;) try {
              if (bz = 1, Ez && (nz = 2 & Mz[0] ? Ez.return : Mz[0] ? Ez.throw || ((nz = Ez.return) && nz.call(Ez), 0) : Ez.next) && !(nz = nz.call(Ez, Mz[1])).done) return nz;
              switch (Ez = 0, nz && (Mz = [2 & Mz[0], nz.value]), Mz[0]) {
                case 0:
                case 1:
                  nz = Mz;
                  break;
                case 4:
                  return lz.label++, {
                    value: Mz[1],
                    done: !1
                  };
                case 5:
                  lz.label++, Ez = Mz[1], Mz = [0];
                  continue;
                case 7:
                  Mz = lz.ops.pop(), lz.trys.pop();
                  continue;
                default:
                  if (!(nz = (nz = lz.trys).length > 0 && nz[nz.length - 1]) && (6 === Mz[0] || 2 === Mz[0])) {
                    lz = 0;
                    continue
                  }
                  if (3 === Mz[0] && (!nz || Mz[1] > nz[0] && Mz[1] < nz[3])) {
                    lz.label = Mz[1];
                    break
                  }
                  if (6 === Mz[0] && lz.label < nz[1]) {
                    lz.label = nz[1], nz = Mz;
                    break
                  }
                  if (nz && lz.label < nz[2]) {
                    lz.label = nz[2], lz.ops.push(Mz);
                    break
                  }
                  nz[2] && lz.ops.pop(), lz.trys.pop();
                  continue
              }
              Mz = uz.call(zz, lz)
            } catch (tz) {
              Mz = [6, tz], Ez = 0
            } finally {
              bz = nz = 0
            }
            if (5 & Mz[0]) throw Mz[1];
            return {
              value: Mz[0] ? Mz[1] : void 0,
              done: !0
            }
          }([Mz, tz])
        }
      }
    }
    Object.create;

    function tz(zz, uz) {
      var bz = "function" === typeof Symbol && zz[Symbol.iterator];
      if (!bz) return zz;
      var Ez, nz, iz = bz.call(zz),
        lz = [];
      try {
        for (;
          (void 0 === uz || uz-- > 0) && !(Ez = iz.next()).done;) lz.push(Ez.value)
      } catch (Mz) {
        nz = {
          error: Mz
        }
      } finally {
        try {
          Ez && !Ez.done && (bz = iz.return) && bz.call(iz)
        } finally {
          if (nz) throw nz.error
        }
      }
      return lz
    }

    function Hz(zz, uz, bz) {
      if (bz || 2 === arguments.length)
        for (var Ez, nz = 0, iz = uz.length; nz < iz; nz++) !Ez && nz in uz || (Ez || (Ez = Array.prototype.slice.call(uz, 0, nz)), Ez[nz] = uz[nz]);
      return zz.concat(Ez || Array.prototype.slice.call(uz))
    }
    Object.create;
    "function" === typeof SuppressedError && SuppressedError;
    var Oz = new Map([
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
      ["zM", "application/vnd.ms-outlook"]
    ]);

    function pz(zz, uz) {
      var bz = function(zz) {
        var uz = zz.name;
        if (uz && -1 !== uz.lastIndexOf(".") && !zz.type) {
          var bz = uz.split(".").pop().toLowerCase(),
            Ez = Oz.get(bz);
          Ez && Object.defineProperty(zz, "type", {
            value: Ez,
            writable: !1,
            configurable: !1,
            enumerable: !0
          })
        }
        return zz
      }(zz);
      if ("string" !== typeof bz.path) {
        var Ez = zz.webkitRelativePath;
        Object.defineProperty(bz, "path", {
          value: "string" === typeof uz ? uz : "string" === typeof Ez && Ez.length > 0 ? Ez : zz.name,
          writable: !1,
          configurable: !1,
          enumerable: !0
        })
      }
      return bz
    }
    var dz = [".DS_Store", "Thumbs.db"];

    function Fz(zz) {
      return "object" === typeof zz && null !== zz
    }

    function Zz(zz) {
      return Xz(zz.target.files).map((function(zz) {
        return pz(zz)
      }))
    }

    function Rz(zz) {
      return lz(this, void 0, void 0, (function() {
        return Mz(this, (function(uz) {
          switch (uz.label) {
            case 0:
              return [4, Promise.all(zz.map((function(zz) {
                return zz.getFile()
              })))];
            case 1:
              return [2, uz.sent().map((function(zz) {
                return pz(zz)
              }))]
          }
        }))
      }))
    }

    function Kz(zz, uz) {
      return lz(this, void 0, void 0, (function() {
        var bz;
        return Mz(this, (function(Ez) {
          switch (Ez.label) {
            case 0:
              return zz.items ? (bz = Xz(zz.items).filter((function(zz) {
                return "file" === zz.kind
              })), "drop" !== uz ? [2, bz] : [4, Promise.all(bz.map(fz))]) : [3, 2];
            case 1:
              return [2, wz(sz(Ez.sent()))];
            case 2:
              return [2, wz(Xz(zz.files).map((function(zz) {
                return pz(zz)
              })))]
          }
        }))
      }))
    }

    function wz(zz) {
      return zz.filter((function(zz) {
        return -1 === dz.indexOf(zz.name)
      }))
    }

    function Xz(zz) {
      if (null === zz) return [];
      for (var uz = [], bz = 0; bz < zz.length; bz++) {
        var Ez = zz[bz];
        uz.push(Ez)
      }
      return uz
    }

    function fz(zz) {
      if ("function" !== typeof zz.webkitGetAsEntry) return rz(zz);
      var uz = zz.webkitGetAsEntry();
      return uz && uz.isDirectory ? Nz(uz) : rz(zz)
    }

    function sz(zz) {
      return zz.reduce((function(zz, uz) {
        return Hz(Hz([], tz(zz), !1), tz(Array.isArray(uz) ? sz(uz) : [uz]), !1)
      }), [])
    }

    function rz(zz) {
      var uz = zz.getAsFile();
      if (!uz) return Promise.reject("".concat(zz, " is not a File"));
      var bz = pz(uz);
      return Promise.resolve(bz)
    }

    function oz(zz) {
      return lz(this, void 0, void 0, (function() {
        return Mz(this, (function(uz) {
          return [2, zz.isDirectory ? Nz(zz) : vz(zz)]
        }))
      }))
    }

    function Nz(zz) {
      var uz = zz.createReader();
      return new Promise((function(zz, bz) {
        var Ez = [];
        ! function nz() {
          var iz = this;
          uz.readEntries((function(uz) {
            return lz(iz, void 0, void 0, (function() {
              var iz, lz, tz;
              return Mz(this, (function(Mz) {
                switch (Mz.label) {
                  case 0:
                    if (uz.length) return [3, 5];
                    Mz.label = 1;
                  case 1:
                    return Mz.trys.push([1, 3, , 4]), [4, Promise.all(Ez)];
                  case 2:
                    return iz = Mz.sent(), zz(iz), [3, 4];
                  case 3:
                    return lz = Mz.sent(), bz(lz), [3, 4];
                  case 4:
                    return [3, 6];
                  case 5:
                    tz = Promise.all(uz.map(oz)), Ez.push(tz), nz(), Mz.label = 6;
                  case 6:
                    return [2]
                }
              }))
            }))
          }), (function(zz) {
            bz(zz)
          }))
        }()
      }))
    }

    function vz(zz) {
      return lz(this, void 0, void 0, (function() {
        return Mz(this, (function(uz) {
          return [2, new Promise((function(uz, bz) {
            zz.file((function(bz) {
              var Ez = pz(bz, zz.fullPath);
              uz(Ez)
            }), (function(zz) {
              bz(zz)
            }))
          }))]
        }))
      }))
    }
    var xz = bz(4735);

    function Jz(zz) {
      return function(zz) {
        if (Array.isArray(zz)) return az(zz)
      }(zz) || function(zz) {
        if ("undefined" !== typeof Symbol && null != zz[Symbol.iterator] || null != zz["@@iterator"]) return Array.from(zz)
      }(zz) || Gz(zz) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Az(zz, uz) {
      var bz = Object.keys(zz);
      if (Object.getOwnPropertySymbols) {
        var Ez = Object.getOwnPropertySymbols(zz);
        uz && (Ez = Ez.filter((function(uz) {
          return Object.getOwnPropertyDescriptor(zz, uz).enumerable
        }))), bz.push.apply(bz, Ez)
      }
      return bz
    }

    function Tz(zz) {
      for (var uz = 1; uz < arguments.length; uz++) {
        var bz = null != arguments[uz] ? arguments[uz] : {};
        uz % 2 ? Az(Object(bz), !0).forEach((function(uz) {
          Lz(zz, uz, bz[uz])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(zz, Object.getOwnPropertyDescriptors(bz)) : Az(Object(bz)).forEach((function(uz) {
          Object.defineProperty(zz, uz, Object.getOwnPropertyDescriptor(bz, uz))
        }))
      }
      return zz
    }

    function Lz(zz, uz, bz) {
      return uz in zz ? Object.defineProperty(zz, uz, {
        value: bz,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : zz[uz] = bz, zz
    }

    function Pz(zz, uz) {
      return function(zz) {
        if (Array.isArray(zz)) return zz
      }(zz) || function(zz, uz) {
        var bz = null == zz ? null : "undefined" !== typeof Symbol && zz[Symbol.iterator] || zz["@@iterator"];
        if (null == bz) return;
        var Ez, nz, iz = [],
          lz = !0,
          Mz = !1;
        try {
          for (bz = bz.call(zz); !(lz = (Ez = bz.next()).done) && (iz.push(Ez.value), !uz || iz.length !== uz); lz = !0);
        } catch (tz) {
          Mz = !0, nz = tz
        } finally {
          try {
            lz || null == bz.return || bz.return()
          } finally {
            if (Mz) throw nz
          }
        }
        return iz
      }(zz, uz) || Gz(zz, uz) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Gz(zz, uz) {
      if (zz) {
        if ("string" === typeof zz) return az(zz, uz);
        var bz = Object.prototype.toString.call(zz).slice(8, -1);
        return "Object" === bz && zz.constructor && (bz = zz.constructor.name), "Map" === bz || "Set" === bz ? Array.from(zz) : "Arguments" === bz || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(bz) ? az(zz, uz) : void 0
      }
    }

    function az(zz, uz) {
      (null == uz || uz > zz.length) && (uz = zz.length);
      for (var bz = 0, Ez = new Array(uz); bz < uz; bz++) Ez[bz] = zz[bz];
      return Ez
    }
    var Vz = "file-invalid-type",
      mz = "file-too-large",
      qz = "file-too-small",
      hz = "too-many-files",
      Uz = function(zz) {
        zz = Array.isArray(zz) && 1 === zz.length ? zz[0] : zz;
        var uz = Array.isArray(zz) ? "one of ".concat(zz.join(", ")) : zz;
        return {
          code: Vz,
          message: "File type must be ".concat(uz)
        }
      },
      cz = function(zz) {
        return {
          code: mz,
          message: "File is larger than ".concat(zz, " ").concat(1 === zz ? "byte" : "bytes")
        }
      },
      gz = function(zz) {
        return {
          code: qz,
          message: "File is smaller than ".concat(zz, " ").concat(1 === zz ? "byte" : "bytes")
        }
      },
      Sz = {
        code: hz,
        message: "Too many files"
      };

    function yz(zz, uz) {
      var bz = "application/x-moz-file" === zz.type || (0, xz.c)(zz, uz);
      return [bz, bz ? null : Uz(uz)]
    }

    function Dz(zz, uz, bz) {
      if (Qz(zz.size))
        if (Qz(uz) && Qz(bz)) {
          if (zz.size > bz) return [!1, cz(bz)];
          if (zz.size < uz) return [!1, gz(uz)]
        } else {
          if (Qz(uz) && zz.size < uz) return [!1, gz(uz)];
          if (Qz(bz) && zz.size > bz) return [!1, cz(bz)]
        } return [!0, null]
    }

    function Qz(zz) {
      return void 0 !== zz && null !== zz
    }

    function Wz(zz) {
      return "function" === typeof zz.isPropagationStopped ? zz.isPropagationStopped() : "undefined" !== typeof zz.cancelBubble && zz.cancelBubble
    }

    function ez(zz) {
      return zz.dataTransfer ? Array.prototype.some.call(zz.dataTransfer.types, (function(zz) {
        return "Files" === zz || "application/x-moz-file" === zz
      })) : !!zz.target && !!zz.target.files
    }

    function jz(zz) {
      zz.preventDefault()
    }

    function Iz() {
      for (var zz = arguments.length, uz = new Array(zz), bz = 0; bz < zz; bz++) uz[bz] = arguments[bz];
      return function(zz) {
        for (var bz = arguments.length, Ez = new Array(bz > 1 ? bz - 1 : 0), nz = 1; nz < bz; nz++) Ez[nz - 1] = arguments[nz];
        return uz.some((function(uz) {
          return !Wz(zz) && uz && uz.apply(void 0, [zz].concat(Ez)), Wz(zz)
        }))
      }
    }

    function Bz(zz) {
      return "audio/*" === zz || "video/*" === zz || "image/*" === zz || "text/*" === zz || /\w+\/[-+.\w]+/g.test(zz)
    }

    function Cz(zz) {
      return /^.*\.[\w]+$/.test(zz)
    }
    var Yz = ["children"],
      kz = ["open"],
      zu = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
      uu = ["refKey", "onChange", "onClick"];

    function bu(zz) {
      return function(zz) {
        if (Array.isArray(zz)) return iu(zz)
      }(zz) || function(zz) {
        if ("undefined" !== typeof Symbol && null != zz[Symbol.iterator] || null != zz["@@iterator"]) return Array.from(zz)
      }(zz) || nu(zz) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Eu(zz, uz) {
      return function(zz) {
        if (Array.isArray(zz)) return zz
      }(zz) || function(zz, uz) {
        var bz = null == zz ? null : "undefined" !== typeof Symbol && zz[Symbol.iterator] || zz["@@iterator"];
        if (null == bz) return;
        var Ez, nz, iz = [],
          lz = !0,
          Mz = !1;
        try {
          for (bz = bz.call(zz); !(lz = (Ez = bz.next()).done) && (iz.push(Ez.value), !uz || iz.length !== uz); lz = !0);
        } catch (tz) {
          Mz = !0, nz = tz
        } finally {
          try {
            lz || null == bz.return || bz.return()
          } finally {
            if (Mz) throw nz
          }
        }
        return iz
      }(zz, uz) || nu(zz, uz) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function nu(zz, uz) {
      if (zz) {
        if ("string" === typeof zz) return iu(zz, uz);
        var bz = Object.prototype.toString.call(zz).slice(8, -1);
        return "Object" === bz && zz.constructor && (bz = zz.constructor.name), "Map" === bz || "Set" === bz ? Array.from(zz) : "Arguments" === bz || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(bz) ? iu(zz, uz) : void 0
      }
    }

    function iu(zz, uz) {
      (null == uz || uz > zz.length) && (uz = zz.length);
      for (var bz = 0, Ez = new Array(uz); bz < uz; bz++) Ez[bz] = zz[bz];
      return Ez
    }

    function lu(zz, uz) {
      var bz = Object.keys(zz);
      if (Object.getOwnPropertySymbols) {
        var Ez = Object.getOwnPropertySymbols(zz);
        uz && (Ez = Ez.filter((function(uz) {
          return Object.getOwnPropertyDescriptor(zz, uz).enumerable
        }))), bz.push.apply(bz, Ez)
      }
      return bz
    }

    function Mu(zz) {
      for (var uz = 1; uz < arguments.length; uz++) {
        var bz = null != arguments[uz] ? arguments[uz] : {};
        uz % 2 ? lu(Object(bz), !0).forEach((function(uz) {
          tu(zz, uz, bz[uz])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(zz, Object.getOwnPropertyDescriptors(bz)) : lu(Object(bz)).forEach((function(uz) {
          Object.defineProperty(zz, uz, Object.getOwnPropertyDescriptor(bz, uz))
        }))
      }
      return zz
    }

    function tu(zz, uz, bz) {
      return uz in zz ? Object.defineProperty(zz, uz, {
        value: bz,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : zz[uz] = bz, zz
    }

    function Hu(zz, uz) {
      if (null == zz) return {};
      var bz, Ez, nz = function(zz, uz) {
        if (null == zz) return {};
        var bz, Ez, nz = {},
          iz = Object.keys(zz);
        for (Ez = 0; Ez < iz.length; Ez++) bz = iz[Ez], uz.indexOf(bz) >= 0 || (nz[bz] = zz[bz]);
        return nz
      }(zz, uz);
      if (Object.getOwnPropertySymbols) {
        var iz = Object.getOwnPropertySymbols(zz);
        for (Ez = 0; Ez < iz.length; Ez++) bz = iz[Ez], uz.indexOf(bz) >= 0 || Object.prototype.propertyIsEnumerable.call(zz, bz) && (nz[bz] = zz[bz])
      }
      return nz
    }
    var Ou = (0, Ez.forwardRef)((function(zz, uz) {
      var bz = zz.children,
        nz = Fu(Hu(zz, Yz)),
        iz = nz.open,
        lz = Hu(nz, kz);
      return (0, Ez.useImperativeHandle)(uz, (function() {
        return {
          open: iz
        }
      }), [iz]), Ez.createElement(Ez.Fragment, null, bz(Mu(Mu({}, lz), {}, {
        open: iz
      })))
    }));
    Ou.displayName = "Dropzone";
    var pu = {
      disabled: !1,
      getFilesFromEvent: function(zz) {
        return lz(this, void 0, void 0, (function() {
          return Mz(this, (function(uz) {
            return Fz(zz) && Fz(zz.dataTransfer) ? [2, Kz(zz.dataTransfer, zz.type)] : function(zz) {
              return Fz(zz) && Fz(zz.target)
            }(zz) ? [2, Zz(zz)] : Array.isArray(zz) && zz.every((function(zz) {
              return "getFile" in zz && "function" === typeof zz.getFile
            })) ? [2, Rz(zz)] : [2, []]
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
    Ou.defaultProps = pu, Ou.propTypes = {
      children: iz().func,
      accept: iz().objectOf(iz().arrayOf(iz().string)),
      multiple: iz().bool,
      preventDropOnDocument: iz().bool,
      noClick: iz().bool,
      noKeyboard: iz().bool,
      noDrag: iz().bool,
      noDragEventsBubbling: iz().bool,
      minSize: iz().number,
      maxSize: iz().number,
      maxFiles: iz().number,
      disabled: iz().bool,
      getFilesFromEvent: iz().func,
      onFileDialogCancel: iz().func,
      onFileDialogOpen: iz().func,
      useFsAccessApi: iz().bool,
      autoFocus: iz().bool,
      onDragEnter: iz().func,
      onDragLeave: iz().func,
      onDragOver: iz().func,
      onDrop: iz().func,
      onDropAccepted: iz().func,
      onDropRejected: iz().func,
      onError: iz().func,
      validator: iz().func
    };
    var du = {
      yJ: !1,
      isFileDialogActive: !1,
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1,
      acceptedFiles: [],
      fileRejections: []
    };

    function Fu() {
      var zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        uz = Mu(Mu({}, pu), zz),
        bz = uz.accept,
        nz = uz.disabled,
        iz = uz.getFilesFromEvent,
        lz = uz.maxSize,
        Mz = uz.minSize,
        tz = uz.multiple,
        Hz = uz.maxFiles,
        Oz = uz.onDragEnter,
        pz = uz.onDragLeave,
        dz = uz.onDragOver,
        Fz = uz.onDrop,
        Zz = uz.onDropAccepted,
        Rz = uz.onDropRejected,
        Kz = uz.onFileDialogCancel,
        wz = uz.onFileDialogOpen,
        Xz = uz.useFsAccessApi,
        fz = uz.autoFocus,
        sz = uz.preventDropOnDocument,
        rz = uz.noClick,
        oz = uz.noKeyboard,
        Nz = uz.noDrag,
        vz = uz.noDragEventsBubbling,
        xz = uz.onError,
        Az = uz.validator,
        Gz = (0, Ez.useMemo)((function() {
          return function(zz) {
            if (Qz(zz)) return Object.entries(zz).reduce((function(zz, uz) {
              var bz = Pz(uz, 2),
                Ez = bz[0],
                nz = bz[1];
              return [].concat(Jz(zz), [Ez], Jz(nz))
            }), []).filter((function(zz) {
              return Bz(zz) || Cz(zz)
            })).join(",")
          }(bz)
        }), [bz]),
        az = (0, Ez.useMemo)((function() {
          return function(zz) {
            return Qz(zz) ? [{
              description: "Files",
              accept: Object.entries(zz).filter((function(zz) {
                var uz = Pz(zz, 2),
                  bz = uz[0],
                  Ez = uz[1],
                  nz = !0;
                return Bz(bz) || (console.warn('Skipped "'.concat(bz, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), nz = !1), Array.isArray(Ez) && Ez.every(Cz) || (console.warn('Skipped "'.concat(bz, '" because an invalid file extension was provided.')), nz = !1), nz
              })).reduce((function(zz, uz) {
                var bz = Pz(uz, 2),
                  Ez = bz[0],
                  nz = bz[1];
                return Tz(Tz({}, zz), {}, Lz({}, Ez, nz))
              }), {})
            }] : zz
          }(bz)
        }), [bz]),
        Vz = (0, Ez.useMemo)((function() {
          return "function" === typeof wz ? wz : Ru
        }), [wz]),
        mz = (0, Ez.useMemo)((function() {
          return "function" === typeof Kz ? Kz : Ru
        }), [Kz]),
        qz = (0, Ez.useRef)(null),
        hz = (0, Ez.useRef)(null),
        Uz = Eu((0, Ez.useReducer)(Zu, du), 2),
        cz = Uz[0],
        gz = Uz[1],
        Yz = cz.yJ,
        kz = cz.isFileDialogActive,
        nu = (0, Ez.useRef)("undefined" !== typeof window && window.isSecureContext && Xz && "showOpenFilePicker" in window),
        iu = function() {
          !nu.current && kz && setTimeout((function() {
            hz.current && (hz.current.files.length || (gz({
              type: "closeDialog"
            }), mz()))
          }), 300)
        };
      (0, Ez.useEffect)((function() {
        return window.addEventListener("focus", iu, !1),
          function() {
            window.removeEventListener("focus", iu, !1)
          }
      }), [hz, kz, mz, nu]);
      var lu = (0, Ez.useRef)([]),
        Ou = function(zz) {
          qz.current && qz.current.contains(zz.target) || (zz.preventDefault(), lu.current = [])
        };
      (0, Ez.useEffect)((function() {
        return sz && (document.addEventListener("dragover", jz, !1), document.addEventListener("drop", Ou, !1)),
          function() {
            sz && (document.removeEventListener("dragover", jz), document.removeEventListener("drop", Ou))
          }
      }), [qz, sz]), (0, Ez.useEffect)((function() {
        return !nz && fz && qz.current && qz.current.focus(),
          function() {}
      }), [qz, fz, nz]);
      var Fu = (0, Ez.useCallback)((function(zz) {
          xz ? xz(zz) : console.error(zz)
        }), [xz]),
        Ku = (0, Ez.useCallback)((function(zz) {
          zz.preventDefault(), zz.persist(), Lu(zz), lu.current = [].concat(bu(lu.current), [zz.target]), ez(zz) && Promise.resolve(iz(zz)).then((function(uz) {
            if (!Wz(zz) || vz) {
              var bz = uz.length,
                Ez = bz > 0 && function(zz) {
                  var uz = zz.files,
                    bz = zz.accept,
                    Ez = zz.minSize,
                    nz = zz.maxSize,
                    iz = zz.multiple,
                    lz = zz.maxFiles,
                    Mz = zz.validator;
                  return !(!iz && uz.length > 1 || iz && lz >= 1 && uz.length > lz) && uz.every((function(zz) {
                    var uz = Pz(yz(zz, bz), 1)[0],
                      iz = Pz(Dz(zz, Ez, nz), 1)[0],
                      lz = Mz ? Mz(zz) : null;
                    return uz && iz && !lz
                  }))
                }({
                  files: uz,
                  accept: Gz,
                  minSize: Mz,
                  maxSize: lz,
                  multiple: tz,
                  maxFiles: Hz,
                  validator: Az
                });
              gz({
                isDragAccept: Ez,
                isDragReject: bz > 0 && !Ez,
                isDragActive: !0,
                type: "setDraggedFiles"
              }), Oz && Oz(zz)
            }
          })).catch((function(zz) {
            return Fu(zz)
          }))
        }), [iz, Oz, Fu, vz, Gz, Mz, lz, tz, Hz, Az]),
        wu = (0, Ez.useCallback)((function(zz) {
          zz.preventDefault(), zz.persist(), Lu(zz);
          var uz = ez(zz);
          if (uz && zz.dataTransfer) try {
            zz.dataTransfer.dropEffect = "copy"
          } catch (bz) {}
          return uz && dz && dz(zz), !1
        }), [dz, vz]),
        Xu = (0, Ez.useCallback)((function(zz) {
          zz.preventDefault(), zz.persist(), Lu(zz);
          var uz = lu.current.filter((function(zz) {
              return qz.current && qz.current.contains(zz)
            })),
            bz = uz.indexOf(zz.target); - 1 !== bz && uz.splice(bz, 1), lu.current = uz, uz.length > 0 || (gz({
            type: "setDraggedFiles",
            isDragActive: !1,
            isDragAccept: !1,
            isDragReject: !1
          }), ez(zz) && pz && pz(zz))
        }), [qz, pz, vz]),
        fu = (0, Ez.useCallback)((function(zz, uz) {
          var bz = [],
            Ez = [];
          zz.forEach((function(zz) {
            var uz = Eu(yz(zz, Gz), 2),
              nz = uz[0],
              iz = uz[1],
              tz = Eu(Dz(zz, Mz, lz), 2),
              Hz = tz[0],
              Oz = tz[1],
              pz = Az ? Az(zz) : null;
            if (nz && Hz && !pz) bz.push(zz);
            else {
              var dz = [iz, Oz];
              pz && (dz = dz.concat(pz)), Ez.push({
                file: zz,
                errors: dz.filter((function(zz) {
                  return zz
                }))
              })
            }
          })), (!tz && bz.length > 1 || tz && Hz >= 1 && bz.length > Hz) && (bz.forEach((function(zz) {
            Ez.push({
              file: zz,
              errors: [Sz]
            })
          })), bz.splice(0)), gz({
            acceptedFiles: bz,
            fileRejections: Ez,
            type: "setFiles"
          }), Fz && Fz(bz, Ez, uz), Ez.length > 0 && Rz && Rz(Ez, uz), bz.length > 0 && Zz && Zz(bz, uz)
        }), [gz, tz, Gz, Mz, lz, Hz, Fz, Zz, Rz, Az]),
        su = (0, Ez.useCallback)((function(zz) {
          zz.preventDefault(), zz.persist(), Lu(zz), lu.current = [], ez(zz) && Promise.resolve(iz(zz)).then((function(uz) {
            Wz(zz) && !vz || fu(uz, zz)
          })).catch((function(zz) {
            return Fu(zz)
          })), gz({
            type: "reset"
          })
        }), [iz, fu, Fu, vz]),
        ru = (0, Ez.useCallback)((function() {
          if (nu.current) {
            gz({
              type: "openDialog"
            }), Vz();
            var zz = {
              multiple: tz,
              types: az
            };
            window.showOpenFilePicker(zz).then((function(zz) {
              return iz(zz)
            })).then((function(zz) {
              fu(zz, null), gz({
                type: "closeDialog"
              })
            })).catch((function(zz) {
              var uz;
              (uz = zz) instanceof DOMException && ("AbortError" === uz.name || uz.code === uz.ABORT_ERR) ? (mz(zz), gz({
                type: "closeDialog"
              })) : ! function(zz) {
                return zz instanceof DOMException && ("SecurityError" === zz.name || zz.code === zz.SECURITY_ERR)
              }(zz) ? Fu(zz) : (nu.current = !1, hz.current ? (hz.current.value = null, hz.current.click()) : Fu(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))
            }))
          } else hz.current && (gz({
            type: "openDialog"
          }), Vz(), hz.current.value = null, hz.current.click())
        }), [gz, Vz, mz, Xz, fu, Fu, az, tz]),
        ou = (0, Ez.useCallback)((function(zz) {
          qz.current && qz.current.isEqualNode(zz.target) && (" " !== zz.key && "Enter" !== zz.key && 32 !== zz.keyCode && 13 !== zz.keyCode || (zz.preventDefault(), ru()))
        }), [qz, ru]),
        Nu = (0, Ez.useCallback)((function() {
          gz({
            type: "focus"
          })
        }), []),
        vu = (0, Ez.useCallback)((function() {
          gz({
            type: "blur"
          })
        }), []),
        xu = (0, Ez.useCallback)((function() {
          rz || (! function() {
            var zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
            return function(zz) {
              return -1 !== zz.indexOf("MSIE") || -1 !== zz.indexOf("Trident/")
            }(zz) || function(zz) {
              return -1 !== zz.indexOf("Edge/")
            }(zz)
          }() ? ru() : setTimeout(ru, 0))
        }), [rz, ru]),
        Ju = function(zz) {
          return nz ? null : zz
        },
        Au = function(zz) {
          return oz ? null : Ju(zz)
        },
        Tu = function(zz) {
          return Nz ? null : Ju(zz)
        },
        Lu = function(zz) {
          vz && zz.stopPropagation()
        },
        Pu = (0, Ez.useMemo)((function() {
          return function() {
            var zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              uz = zz.refKey,
              bz = void 0 === uz ? "ref" : uz,
              Ez = zz.role,
              iz = zz.onKeyDown,
              lz = zz.onFocus,
              Mz = zz.onBlur,
              tz = zz.onClick,
              Hz = zz.onDragEnter,
              Oz = zz.onDragOver,
              pz = zz.onDragLeave,
              dz = zz.onDrop,
              Fz = Hu(zz, zu);
            return Mu(Mu(tu({
              onKeyDown: Au(Iz(iz, ou)),
              onFocus: Au(Iz(lz, Nu)),
              onBlur: Au(Iz(Mz, vu)),
              onClick: Ju(Iz(tz, xu)),
              onDragEnter: Tu(Iz(Hz, Ku)),
              onDragOver: Tu(Iz(Oz, wu)),
              onDragLeave: Tu(Iz(pz, Xu)),
              onDrop: Tu(Iz(dz, su)),
              role: "string" === typeof Ez && "" !== Ez ? Ez : "presentation"
            }, bz, qz), nz || oz ? {} : {
              tabIndex: 0
            }), Fz)
          }
        }), [qz, ou, Nu, vu, xu, Ku, wu, Xu, su, oz, Nz, nz]),
        Gu = (0, Ez.useCallback)((function(zz) {
          zz.stopPropagation()
        }), []),
        au = (0, Ez.useMemo)((function() {
          return function() {
            var zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              uz = zz.refKey,
              bz = void 0 === uz ? "ref" : uz,
              Ez = zz.onChange,
              nz = zz.onClick,
              iz = Hu(zz, uu);
            return Mu(Mu({}, tu({
              accept: Gz,
              multiple: tz,
              type: "file",
              style: {
                display: "none"
              },
              onChange: Ju(Iz(Ez, su)),
              onClick: Ju(Iz(nz, Gu)),
              tabIndex: -1
            }, bz, hz)), iz)
          }
        }), [hz, bz, tz, su, nz]);
      return Mu(Mu({}, cz), {}, {
        yJ: Yz && !nz,
        getRootProps: Pu,
        getInputProps: au,
        rootRef: qz,
        inputRef: hz,
        open: Ju(ru)
      })
    }

    function Zu(zz, uz) {
      switch (uz.type) {
        case "focus":
          return Mu(Mu({}, zz), {}, {
            yJ: !0
          });
        case "blur":
          return Mu(Mu({}, zz), {}, {
            yJ: !1
          });
        case "openDialog":
          return Mu(Mu({}, du), {}, {
            isFileDialogActive: !0
          });
        case "closeDialog":
          return Mu(Mu({}, zz), {}, {
            isFileDialogActive: !1
          });
        case "setDraggedFiles":
          return Mu(Mu({}, zz), {}, {
            isDragActive: uz.isDragActive,
            isDragAccept: uz.isDragAccept,
            isDragReject: uz.isDragReject
          });
        case "setFiles":
          return Mu(Mu({}, zz), {}, {
            acceptedFiles: uz.acceptedFiles,
            fileRejections: uz.fileRejections
          });
        case "reset":
          return Mu({}, du);
        default:
          return zz
      }
    }

    function Ru() {}
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);