export const id = 92;
export const ids = [92];
export const modules = {
  4027: (cB, Bc) => {
    Bc.c = function(cB, Bc) {
      if (cB && Bc) {
        var nc = Array.isArray(Bc) ? Bc : Bc.split(","),
          Vc = cB.name || "",
          Ic = (cB.type || "").toLowerCase(),
          rB = Ic.replace(/\/.*$/, "");
        return nc.some((function(cB) {
          var Bc = cB.trim().toLowerCase();
          return "." === Bc.charAt(0) ? Vc.toLowerCase().endsWith(Bc) : Bc.endsWith("/*") ? rB === Bc.replace(/\/.*$/, "") : Ic === Bc
        }))
      }
      return !0
    }
  },
  4006: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => fB
    });
    var Vc = nc(73),
      Ic = nc(4013),
      rB = nc.n(Ic);

    function uc(cB, Bc, nc, Vc) {
      return new(nc || (nc = Promise))((function(Ic, rB) {
        function uc(cB) {
          try {
            Mc(Vc.next(cB))
          } catch (Bc) {
            rB(Bc)
          }
        }

        function sc(cB) {
          try {
            Mc(Vc.throw(cB))
          } catch (Bc) {
            rB(Bc)
          }
        }

        function Mc(cB) {
          var Bc;
          cB.done ? Ic(cB.value) : (Bc = cB.value, Bc instanceof nc ? Bc : new nc((function(cB) {
            cB(Bc)
          }))).then(uc, sc)
        }
        Mc((Vc = Vc.apply(cB, Bc || [])).next())
      }))
    }

    function sc(cB, Bc) {
      var nc, Vc, Ic, rB, uc = {
        label: 0,
        sent: function() {
          if (1 & Ic[0]) throw Ic[1];
          return Ic[1]
        },
        trys: [],
        ops: []
      };
      return rB = {
        next: sc(0),
        throw: sc(1),
        return: sc(2)
      }, "function" === typeof Symbol && (rB[Symbol.iterator] = function() {
        return this
      }), rB;

      function sc(sc) {
        return function(Mc) {
          return function(sc) {
            if (nc) throw new TypeError("Generator is already executing.");
            for (; rB && (rB = 0, sc[0] && (uc = 0)), uc;) try {
              if (nc = 1, Vc && (Ic = 2 & sc[0] ? Vc.return : sc[0] ? Vc.throw || ((Ic = Vc.return) && Ic.call(Vc), 0) : Vc.next) && !(Ic = Ic.call(Vc, sc[1])).done) return Ic;
              switch (Vc = 0, Ic && (sc = [2 & sc[0], Ic.value]), sc[0]) {
                case 0:
                case 1:
                  Ic = sc;
                  break;
                case 4:
                  return uc.label++, {
                    value: sc[1],
                    done: !1
                  };
                case 5:
                  uc.label++, Vc = sc[1], sc = [0];
                  continue;
                case 7:
                  sc = uc.ops.pop(), uc.trys.pop();
                  continue;
                default:
                  if (!(Ic = (Ic = uc.trys).length > 0 && Ic[Ic.length - 1]) && (6 === sc[0] || 2 === sc[0])) {
                    uc = 0;
                    continue
                  }
                  if (3 === sc[0] && (!Ic || sc[1] > Ic[0] && sc[1] < Ic[3])) {
                    uc.label = sc[1];
                    break
                  }
                  if (6 === sc[0] && uc.label < Ic[1]) {
                    uc.label = Ic[1], Ic = sc;
                    break
                  }
                  if (Ic && uc.label < Ic[2]) {
                    uc.label = Ic[2], uc.ops.push(sc);
                    break
                  }
                  Ic[2] && uc.ops.pop(), uc.trys.pop();
                  continue
              }
              sc = Bc.call(cB, uc)
            } catch (Mc) {
              sc = [6, Mc], Vc = 0
            } finally {
              nc = Ic = 0
            }
            if (5 & sc[0]) throw sc[1];
            return {
              value: sc[0] ? sc[1] : void 0,
              done: !0
            }
          }([sc, Mc])
        }
      }
    }
    Object.create;

    function Mc(cB, Bc) {
      var nc = "function" === typeof Symbol && cB[Symbol.iterator];
      if (!nc) return cB;
      var Vc, Ic, rB = nc.call(cB),
        uc = [];
      try {
        for (;
          (void 0 === Bc || Bc-- > 0) && !(Vc = rB.next()).done;) uc.push(Vc.value)
      } catch (sc) {
        Ic = {
          error: sc
        }
      } finally {
        try {
          Vc && !Vc.done && (nc = rB.return) && nc.call(rB)
        } finally {
          if (Ic) throw Ic.error
        }
      }
      return uc
    }

    function Pc(cB, Bc, nc) {
      if (nc || 2 === arguments.length)
        for (var Vc, Ic = 0, rB = Bc.length; Ic < rB; Ic++) !Vc && Ic in Bc || (Vc || (Vc = Array.prototype.slice.call(Bc, 0, Ic)), Vc[Ic] = Bc[Ic]);
      return cB.concat(Vc || Array.prototype.slice.call(Bc))
    }
    Object.create;
    "function" === typeof SuppressedError && SuppressedError;
    var qB = new Map([
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
      ["Uu", "application/vnd.ms-outlook"]
    ]);

    function Oc(cB, Bc) {
      var nc = function(cB) {
        var Bc = cB.name;
        if (Bc && -1 !== Bc.lastIndexOf(".") && !cB.type) {
          var nc = Bc.split(".").pop().toLowerCase(),
            Vc = qB.get(nc);
          Vc && Object.defineProperty(cB, "type", {
            value: Vc,
            writable: !1,
            configurable: !1,
            enumerable: !0
          })
        }
        return cB
      }(cB);
      if ("string" !== typeof nc.path) {
        var Vc = cB.webkitRelativePath;
        Object.defineProperty(nc, "path", {
          value: "string" === typeof Bc ? Bc : "string" === typeof Vc && Vc.length > 0 ? Vc : cB.name,
          writable: !1,
          configurable: !1,
          enumerable: !0
        })
      }
      return nc
    }
    var Tc = [".DS_Store", "Thumbs.db"];

    function fc(cB) {
      return "object" === typeof cB && null !== cB
    }

    function mB(cB) {
      return yB(cB.target.files).map((function(cB) {
        return Oc(cB)
      }))
    }

    function ec(cB) {
      return uc(this, void 0, void 0, (function() {
        return sc(this, (function(Bc) {
          switch (Bc.label) {
            case 0:
              return [4, Promise.all(cB.map((function(cB) {
                return cB.getFile()
              })))];
            case 1:
              return [2, Bc.sent().map((function(cB) {
                return Oc(cB)
              }))]
          }
        }))
      }))
    }

    function tB(cB, Bc) {
      return uc(this, void 0, void 0, (function() {
        var nc;
        return sc(this, (function(Vc) {
          switch (Vc.label) {
            case 0:
              return cB.items ? (nc = yB(cB.items).filter((function(cB) {
                return "file" === cB.kind
              })), "drop" !== Bc ? [2, nc] : [4, Promise.all(nc.map(zB))]) : [3, 2];
            case 1:
              return [2, Sc(pc(Vc.sent()))];
            case 2:
              return [2, Sc(yB(cB.files).map((function(cB) {
                return Oc(cB)
              })))]
          }
        }))
      }))
    }

    function Sc(cB) {
      return cB.filter((function(cB) {
        return -1 === Tc.indexOf(cB.name)
      }))
    }

    function yB(cB) {
      if (null === cB) return [];
      for (var Bc = [], nc = 0; nc < cB.length; nc++) {
        var Vc = cB[nc];
        Bc.push(Vc)
      }
      return Bc
    }

    function zB(cB) {
      if ("function" !== typeof cB.webkitGetAsEntry) return hc(cB);
      var Bc = cB.webkitGetAsEntry();
      return Bc && Bc.isDirectory ? lc(Bc) : hc(cB)
    }

    function pc(cB) {
      return cB.reduce((function(cB, Bc) {
        return Pc(Pc([], Mc(cB), !1), Mc(Array.isArray(Bc) ? pc(Bc) : [Bc]), !1)
      }), [])
    }

    function hc(cB) {
      var Bc = cB.getAsFile();
      if (!Bc) return Promise.reject("".concat(cB, " is not a File"));
      var nc = Oc(Bc);
      return Promise.resolve(nc)
    }

    function aB(cB) {
      return uc(this, void 0, void 0, (function() {
        return sc(this, (function(Bc) {
          return [2, cB.isDirectory ? lc(cB) : Yc(cB)]
        }))
      }))
    }

    function lc(cB) {
      var Bc = cB.createReader();
      return new Promise((function(cB, nc) {
        var Vc = [];
        ! function Ic() {
          var rB = this;
          Bc.readEntries((function(Bc) {
            return uc(rB, void 0, void 0, (function() {
              var rB, uc, Mc;
              return sc(this, (function(sc) {
                switch (sc.label) {
                  case 0:
                    if (Bc.length) return [3, 5];
                    sc.label = 1;
                  case 1:
                    return sc.trys.push([1, 3, , 4]), [4, Promise.all(Vc)];
                  case 2:
                    return rB = sc.sent(), cB(rB), [3, 4];
                  case 3:
                    return uc = sc.sent(), nc(uc), [3, 4];
                  case 4:
                    return [3, 6];
                  case 5:
                    Mc = Promise.all(Bc.map(aB)), Vc.push(Mc), Ic(), sc.label = 6;
                  case 6:
                    return [2]
                }
              }))
            }))
          }), (function(cB) {
            nc(cB)
          }))
        }()
      }))
    }

    function Yc(cB) {
      return uc(this, void 0, void 0, (function() {
        return sc(this, (function(Bc) {
          return [2, new Promise((function(Bc, nc) {
            cB.file((function(nc) {
              var Vc = Oc(nc, cB.fullPath);
              Bc(Vc)
            }), (function(cB) {
              nc(cB)
            }))
          }))]
        }))
      }))
    }
    var Lc = nc(4027);

    function gB(cB) {
      return function(cB) {
        if (Array.isArray(cB)) return vB(cB)
      }(cB) || function(cB) {
        if ("undefined" !== typeof Symbol && null != cB[Symbol.iterator] || null != cB["@@iterator"]) return Array.from(cB)
      }(cB) || Cc(cB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Uc(cB, Bc) {
      var nc = Object.keys(cB);
      if (Object.getOwnPropertySymbols) {
        var Vc = Object.getOwnPropertySymbols(cB);
        Bc && (Vc = Vc.filter((function(Bc) {
          return Object.getOwnPropertyDescriptor(cB, Bc).enumerable
        }))), nc.push.apply(nc, Vc)
      }
      return nc
    }

    function bB(cB) {
      for (var Bc = 1; Bc < arguments.length; Bc++) {
        var nc = null != arguments[Bc] ? arguments[Bc] : {};
        Bc % 2 ? Uc(Object(nc), !0).forEach((function(Bc) {
          Zc(cB, Bc, nc[Bc])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(cB, Object.getOwnPropertyDescriptors(nc)) : Uc(Object(nc)).forEach((function(Bc) {
          Object.defineProperty(cB, Bc, Object.getOwnPropertyDescriptor(nc, Bc))
        }))
      }
      return cB
    }

    function Zc(cB, Bc, nc) {
      return Bc in cB ? Object.defineProperty(cB, Bc, {
        value: nc,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : cB[Bc] = nc, cB
    }

    function Qc(cB, Bc) {
      return function(cB) {
        if (Array.isArray(cB)) return cB
      }(cB) || function(cB, Bc) {
        var nc = null == cB ? null : "undefined" !== typeof Symbol && cB[Symbol.iterator] || cB["@@iterator"];
        if (null == nc) return;
        var Vc, Ic, rB = [],
          uc = !0,
          sc = !1;
        try {
          for (nc = nc.call(cB); !(uc = (Vc = nc.next()).done) && (rB.push(Vc.value), !Bc || rB.length !== Bc); uc = !0);
        } catch (Mc) {
          sc = !0, Ic = Mc
        } finally {
          try {
            uc || null == nc.return || nc.return()
          } finally {
            if (sc) throw Ic
          }
        }
        return rB
      }(cB, Bc) || Cc(cB, Bc) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Cc(cB, Bc) {
      if (cB) {
        if ("string" === typeof cB) return vB(cB, Bc);
        var nc = Object.prototype.toString.call(cB).slice(8, -1);
        return "Object" === nc && cB.constructor && (nc = cB.constructor.name), "Map" === nc || "Set" === nc ? Array.from(cB) : "Arguments" === nc || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(nc) ? vB(cB, Bc) : void 0
      }
    }

    function vB(cB, Bc) {
      (null == Bc || Bc > cB.length) && (Bc = cB.length);
      for (var nc = 0, Vc = new Array(Bc); nc < Bc; nc++) Vc[nc] = cB[nc];
      return Vc
    }
    var Dc = "file-invalid-type",
      Nc = "file-too-large",
      Ec = "file-too-small",
      oc = "too-many-files",
      Wc = function(cB) {
        cB = Array.isArray(cB) && 1 === cB.length ? cB[0] : cB;
        var Bc = Array.isArray(cB) ? "one of ".concat(cB.join(", ")) : cB;
        return {
          code: Dc,
          message: "File type must be ".concat(Bc)
        }
      },
      wc = function(cB) {
        return {
          code: Nc,
          message: "File is larger than ".concat(cB, " ").concat(1 === cB ? "byte" : "bytes")
        }
      },
      kB = function(cB) {
        return {
          code: Ec,
          message: "File is smaller than ".concat(cB, " ").concat(1 === cB ? "byte" : "bytes")
        }
      },
      Xc = {
        code: oc,
        message: "Too many files"
      };

    function Hc(cB, Bc) {
      var nc = "application/x-moz-file" === cB.type || (0, Lc.c)(cB, Bc);
      return [nc, nc ? null : Wc(Bc)]
    }

    function Fc(cB, Bc, nc) {
      if (Jc(cB.size))
        if (Jc(Bc) && Jc(nc)) {
          if (cB.size > nc) return [!1, wc(nc)];
          if (cB.size < Bc) return [!1, kB(Bc)]
        } else {
          if (Jc(Bc) && cB.size < Bc) return [!1, kB(Bc)];
          if (Jc(nc) && cB.size > nc) return [!1, wc(nc)]
        } return [!0, null]
    }

    function Jc(cB) {
      return void 0 !== cB && null !== cB
    }

    function jB(cB) {
      return "function" === typeof cB.isPropagationStopped ? cB.isPropagationStopped() : "undefined" !== typeof cB.cancelBubble && cB.cancelBubble
    }

    function Rc(cB) {
      return cB.dataTransfer ? Array.prototype.some.call(cB.dataTransfer.types, (function(cB) {
        return "Files" === cB || "application/x-moz-file" === cB
      })) : !!cB.target && !!cB.target.files
    }

    function iB(cB) {
      cB.preventDefault()
    }

    function Kc() {
      for (var cB = arguments.length, Bc = new Array(cB), nc = 0; nc < cB; nc++) Bc[nc] = arguments[nc];
      return function(cB) {
        for (var nc = arguments.length, Vc = new Array(nc > 1 ? nc - 1 : 0), Ic = 1; Ic < nc; Ic++) Vc[Ic - 1] = arguments[Ic];
        return Bc.some((function(Bc) {
          return !jB(cB) && Bc && Bc.apply(void 0, [cB].concat(Vc)), jB(cB)
        }))
      }
    }

    function xB(cB) {
      return "audio/*" === cB || "video/*" === cB || "image/*" === cB || "text/*" === cB || /\w+\/[-+.\w]+/g.test(cB)
    }

    function dc(cB) {
      return /^.*\.[\w]+$/.test(cB)
    }
    var Ac = ["children"],
      Gc = ["open"],
      cn = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
      BB = ["refKey", "onChange", "onClick"];

    function nB(cB) {
      return function(cB) {
        if (Array.isArray(cB)) return rn(cB)
      }(cB) || function(cB) {
        if ("undefined" !== typeof Symbol && null != cB[Symbol.iterator] || null != cB["@@iterator"]) return Array.from(cB)
      }(cB) || IB(cB) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function VB(cB, Bc) {
      return function(cB) {
        if (Array.isArray(cB)) return cB
      }(cB) || function(cB, Bc) {
        var nc = null == cB ? null : "undefined" !== typeof Symbol && cB[Symbol.iterator] || cB["@@iterator"];
        if (null == nc) return;
        var Vc, Ic, rB = [],
          uc = !0,
          sc = !1;
        try {
          for (nc = nc.call(cB); !(uc = (Vc = nc.next()).done) && (rB.push(Vc.value), !Bc || rB.length !== Bc); uc = !0);
        } catch (Mc) {
          sc = !0, Ic = Mc
        } finally {
          try {
            uc || null == nc.return || nc.return()
          } finally {
            if (sc) throw Ic
          }
        }
        return rB
      }(cB, Bc) || IB(cB, Bc) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function IB(cB, Bc) {
      if (cB) {
        if ("string" === typeof cB) return rn(cB, Bc);
        var nc = Object.prototype.toString.call(cB).slice(8, -1);
        return "Object" === nc && cB.constructor && (nc = cB.constructor.name), "Map" === nc || "Set" === nc ? Array.from(cB) : "Arguments" === nc || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(nc) ? rn(cB, Bc) : void 0
      }
    }

    function rn(cB, Bc) {
      (null == Bc || Bc > cB.length) && (Bc = cB.length);
      for (var nc = 0, Vc = new Array(Bc); nc < Bc; nc++) Vc[nc] = cB[nc];
      return Vc
    }

    function uB(cB, Bc) {
      var nc = Object.keys(cB);
      if (Object.getOwnPropertySymbols) {
        var Vc = Object.getOwnPropertySymbols(cB);
        Bc && (Vc = Vc.filter((function(Bc) {
          return Object.getOwnPropertyDescriptor(cB, Bc).enumerable
        }))), nc.push.apply(nc, Vc)
      }
      return nc
    }

    function sB(cB) {
      for (var Bc = 1; Bc < arguments.length; Bc++) {
        var nc = null != arguments[Bc] ? arguments[Bc] : {};
        Bc % 2 ? uB(Object(nc), !0).forEach((function(Bc) {
          MB(cB, Bc, nc[Bc])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(cB, Object.getOwnPropertyDescriptors(nc)) : uB(Object(nc)).forEach((function(Bc) {
          Object.defineProperty(cB, Bc, Object.getOwnPropertyDescriptor(nc, Bc))
        }))
      }
      return cB
    }

    function MB(cB, Bc, nc) {
      return Bc in cB ? Object.defineProperty(cB, Bc, {
        value: nc,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : cB[Bc] = nc, cB
    }

    function PB(cB, Bc) {
      if (null == cB) return {};
      var nc, Vc, Ic = function(cB, Bc) {
        if (null == cB) return {};
        var nc, Vc, Ic = {},
          rB = Object.keys(cB);
        for (Vc = 0; Vc < rB.length; Vc++) nc = rB[Vc], Bc.indexOf(nc) >= 0 || (Ic[nc] = cB[nc]);
        return Ic
      }(cB, Bc);
      if (Object.getOwnPropertySymbols) {
        var rB = Object.getOwnPropertySymbols(cB);
        for (Vc = 0; Vc < rB.length; Vc++) nc = rB[Vc], Bc.indexOf(nc) >= 0 || Object.prototype.propertyIsEnumerable.call(cB, nc) && (Ic[nc] = cB[nc])
      }
      return Ic
    }
    var qn = (0, Vc.forwardRef)((function(cB, Bc) {
      var nc = cB.children,
        Ic = fB(PB(cB, Ac)),
        rB = Ic.open,
        uc = PB(Ic, Gc);
      return (0, Vc.useImperativeHandle)(Bc, (function() {
        return {
          open: rB
        }
      }), [rB]), Vc.createElement(Vc.Fragment, null, nc(sB(sB({}, uc), {}, {
        open: rB
      })))
    }));
    qn.displayName = "Dropzone";
    var OB = {
      disabled: !1,
      getFilesFromEvent: function(cB) {
        return uc(this, void 0, void 0, (function() {
          return sc(this, (function(Bc) {
            return fc(cB) && fc(cB.dataTransfer) ? [2, tB(cB.dataTransfer, cB.type)] : function(cB) {
              return fc(cB) && fc(cB.target)
            }(cB) ? [2, mB(cB)] : Array.isArray(cB) && cB.every((function(cB) {
              return "getFile" in cB && "function" === typeof cB.getFile
            })) ? [2, ec(cB)] : [2, []]
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
    qn.defaultProps = OB, qn.propTypes = {
      children: rB().func,
      accept: rB().objectOf(rB().arrayOf(rB().string)),
      multiple: rB().bool,
      preventDropOnDocument: rB().bool,
      noClick: rB().bool,
      noKeyboard: rB().bool,
      noDrag: rB().bool,
      noDragEventsBubbling: rB().bool,
      minSize: rB().number,
      maxSize: rB().number,
      maxFiles: rB().number,
      disabled: rB().bool,
      getFilesFromEvent: rB().func,
      onFileDialogCancel: rB().func,
      onFileDialogOpen: rB().func,
      useFsAccessApi: rB().bool,
      autoFocus: rB().bool,
      onDragEnter: rB().func,
      onDragLeave: rB().func,
      onDragOver: rB().func,
      onDrop: rB().func,
      onDropAccepted: rB().func,
      onDropRejected: rB().func,
      onError: rB().func,
      validator: rB().func
    };
    var TB = {
      ZBc: !1,
      isFileDialogActive: !1,
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1,
      acceptedFiles: [],
      fileRejections: []
    };

    function fB() {
      var cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        Bc = sB(sB({}, OB), cB),
        nc = Bc.accept,
        Ic = Bc.disabled,
        rB = Bc.getFilesFromEvent,
        uc = Bc.maxSize,
        sc = Bc.minSize,
        Mc = Bc.multiple,
        Pc = Bc.maxFiles,
        qB = Bc.onDragEnter,
        Oc = Bc.onDragLeave,
        Tc = Bc.onDragOver,
        fc = Bc.onDrop,
        mB = Bc.onDropAccepted,
        ec = Bc.onDropRejected,
        tB = Bc.onFileDialogCancel,
        Sc = Bc.onFileDialogOpen,
        yB = Bc.useFsAccessApi,
        zB = Bc.autoFocus,
        pc = Bc.preventDropOnDocument,
        hc = Bc.noClick,
        aB = Bc.noKeyboard,
        lc = Bc.noDrag,
        Yc = Bc.noDragEventsBubbling,
        Lc = Bc.onError,
        Uc = Bc.validator,
        Cc = (0, Vc.useMemo)((function() {
          return function(cB) {
            if (Jc(cB)) return Object.entries(cB).reduce((function(cB, Bc) {
              var nc = Qc(Bc, 2),
                Vc = nc[0],
                Ic = nc[1];
              return [].concat(gB(cB), [Vc], gB(Ic))
            }), []).filter((function(cB) {
              return xB(cB) || dc(cB)
            })).join(",")
          }(nc)
        }), [nc]),
        vB = (0, Vc.useMemo)((function() {
          return function(cB) {
            return Jc(cB) ? [{
              description: "Files",
              accept: Object.entries(cB).filter((function(cB) {
                var Bc = Qc(cB, 2),
                  nc = Bc[0],
                  Vc = Bc[1],
                  Ic = !0;
                return xB(nc) || (console.warn('Skipped "'.concat(nc, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), Ic = !1), Array.isArray(Vc) && Vc.every(dc) || (console.warn('Skipped "'.concat(nc, '" because an invalid file extension was provided.')), Ic = !1), Ic
              })).reduce((function(cB, Bc) {
                var nc = Qc(Bc, 2),
                  Vc = nc[0],
                  Ic = nc[1];
                return bB(bB({}, cB), {}, Zc({}, Vc, Ic))
              }), {})
            }] : cB
          }(nc)
        }), [nc]),
        Dc = (0, Vc.useMemo)((function() {
          return "function" === typeof Sc ? Sc : eB
        }), [Sc]),
        Nc = (0, Vc.useMemo)((function() {
          return "function" === typeof tB ? tB : eB
        }), [tB]),
        Ec = (0, Vc.useRef)(null),
        oc = (0, Vc.useRef)(null),
        Wc = VB((0, Vc.useReducer)(mn, TB), 2),
        wc = Wc[0],
        kB = Wc[1],
        Ac = wc.ZBc,
        Gc = wc.isFileDialogActive,
        IB = (0, Vc.useRef)("undefined" !== typeof window && window.isSecureContext && yB && "showOpenFilePicker" in window),
        rn = function() {
          !IB.current && Gc && setTimeout((function() {
            oc.current && (oc.current.files.length || (kB({
              type: "closeDialog"
            }), Nc()))
          }), 300)
        };
      (0, Vc.useEffect)((function() {
        return window.addEventListener("focus", rn, !1),
          function() {
            window.removeEventListener("focus", rn, !1)
          }
      }), [oc, Gc, Nc, IB]);
      var uB = (0, Vc.useRef)([]),
        qn = function(cB) {
          Ec.current && Ec.current.contains(cB.target) || (cB.preventDefault(), uB.current = [])
        };
      (0, Vc.useEffect)((function() {
        return pc && (document.addEventListener("dragover", iB, !1), document.addEventListener("drop", qn, !1)),
          function() {
            pc && (document.removeEventListener("dragover", iB), document.removeEventListener("drop", qn))
          }
      }), [Ec, pc]), (0, Vc.useEffect)((function() {
        return !Ic && zB && Ec.current && Ec.current.focus(),
          function() {}
      }), [Ec, zB, Ic]);
      var fB = (0, Vc.useCallback)((function(cB) {
          Lc ? Lc(cB) : console.error(cB)
        }), [Lc]),
        tn = (0, Vc.useCallback)((function(cB) {
          cB.preventDefault(), cB.persist(), ZB(cB), uB.current = [].concat(nB(uB.current), [cB.target]), Rc(cB) && Promise.resolve(rB(cB)).then((function(Bc) {
            if (!jB(cB) || Yc) {
              var nc = Bc.length,
                Vc = nc > 0 && function(cB) {
                  var Bc = cB.files,
                    nc = cB.accept,
                    Vc = cB.minSize,
                    Ic = cB.maxSize,
                    rB = cB.multiple,
                    uc = cB.maxFiles,
                    sc = cB.validator;
                  return !(!rB && Bc.length > 1 || rB && uc >= 1 && Bc.length > uc) && Bc.every((function(cB) {
                    var Bc = Qc(Hc(cB, nc), 1)[0],
                      rB = Qc(Fc(cB, Vc, Ic), 1)[0],
                      uc = sc ? sc(cB) : null;
                    return Bc && rB && !uc
                  }))
                }({
                  files: Bc,
                  accept: Cc,
                  minSize: sc,
                  maxSize: uc,
                  multiple: Mc,
                  maxFiles: Pc,
                  validator: Uc
                });
              kB({
                isDragAccept: Vc,
                isDragReject: nc > 0 && !Vc,
                isDragActive: !0,
                type: "setDraggedFiles"
              }), qB && qB(cB)
            }
          })).catch((function(cB) {
            return fB(cB)
          }))
        }), [rB, qB, fB, Yc, Cc, sc, uc, Mc, Pc, Uc]),
        SB = (0, Vc.useCallback)((function(cB) {
          cB.preventDefault(), cB.persist(), ZB(cB);
          var Bc = Rc(cB);
          if (Bc && cB.dataTransfer) try {
            cB.dataTransfer.dropEffect = "copy"
          } catch (nc) {}
          return Bc && Tc && Tc(cB), !1
        }), [Tc, Yc]),
        yn = (0, Vc.useCallback)((function(cB) {
          cB.preventDefault(), cB.persist(), ZB(cB);
          var Bc = uB.current.filter((function(cB) {
              return Ec.current && Ec.current.contains(cB)
            })),
            nc = Bc.indexOf(cB.target); - 1 !== nc && Bc.splice(nc, 1), uB.current = Bc, Bc.length > 0 || (kB({
            type: "setDraggedFiles",
            isDragActive: !1,
            isDragAccept: !1,
            isDragReject: !1
          }), Rc(cB) && Oc && Oc(cB))
        }), [Ec, Oc, Yc]),
        zn = (0, Vc.useCallback)((function(cB, Bc) {
          var nc = [],
            Vc = [];
          cB.forEach((function(cB) {
            var Bc = VB(Hc(cB, Cc), 2),
              Ic = Bc[0],
              rB = Bc[1],
              Mc = VB(Fc(cB, sc, uc), 2),
              Pc = Mc[0],
              qB = Mc[1],
              Oc = Uc ? Uc(cB) : null;
            if (Ic && Pc && !Oc) nc.push(cB);
            else {
              var Tc = [rB, qB];
              Oc && (Tc = Tc.concat(Oc)), Vc.push({
                file: cB,
                errors: Tc.filter((function(cB) {
                  return cB
                }))
              })
            }
          })), (!Mc && nc.length > 1 || Mc && Pc >= 1 && nc.length > Pc) && (nc.forEach((function(cB) {
            Vc.push({
              file: cB,
              errors: [Xc]
            })
          })), nc.splice(0)), kB({
            acceptedFiles: nc,
            fileRejections: Vc,
            type: "setFiles"
          }), fc && fc(nc, Vc, Bc), Vc.length > 0 && ec && ec(Vc, Bc), nc.length > 0 && mB && mB(nc, Bc)
        }), [kB, Mc, Cc, sc, uc, Pc, fc, mB, ec, Uc]),
        pB = (0, Vc.useCallback)((function(cB) {
          cB.preventDefault(), cB.persist(), ZB(cB), uB.current = [], Rc(cB) && Promise.resolve(rB(cB)).then((function(Bc) {
            jB(cB) && !Yc || zn(Bc, cB)
          })).catch((function(cB) {
            return fB(cB)
          })), kB({
            type: "reset"
          })
        }), [rB, zn, fB, Yc]),
        hB = (0, Vc.useCallback)((function() {
          if (IB.current) {
            kB({
              type: "openDialog"
            }), Dc();
            var cB = {
              multiple: Mc,
              types: vB
            };
            window.showOpenFilePicker(cB).then((function(cB) {
              return rB(cB)
            })).then((function(cB) {
              zn(cB, null), kB({
                type: "closeDialog"
              })
            })).catch((function(cB) {
              var Bc;
              (Bc = cB) instanceof DOMException && ("AbortError" === Bc.name || Bc.code === Bc.ABORT_ERR) ? (Nc(cB), kB({
                type: "closeDialog"
              })) : ! function(cB) {
                return cB instanceof DOMException && ("SecurityError" === cB.name || cB.code === cB.SECURITY_ERR)
              }(cB) ? fB(cB) : (IB.current = !1, oc.current ? (oc.current.value = null, oc.current.click()) : fB(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))
            }))
          } else oc.current && (kB({
            type: "openDialog"
          }), Dc(), oc.current.value = null, oc.current.click())
        }), [kB, Dc, Nc, yB, zn, fB, vB, Mc]),
        an = (0, Vc.useCallback)((function(cB) {
          Ec.current && Ec.current.isEqualNode(cB.target) && (" " !== cB.key && "Enter" !== cB.key && 32 !== cB.keyCode && 13 !== cB.keyCode || (cB.preventDefault(), hB()))
        }), [Ec, hB]),
        lB = (0, Vc.useCallback)((function() {
          kB({
            type: "focus"
          })
        }), []),
        YB = (0, Vc.useCallback)((function() {
          kB({
            type: "blur"
          })
        }), []),
        LB = (0, Vc.useCallback)((function() {
          hc || (! function() {
            var cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
            return function(cB) {
              return -1 !== cB.indexOf("MSIE") || -1 !== cB.indexOf("Trident/")
            }(cB) || function(cB) {
              return -1 !== cB.indexOf("Edge/")
            }(cB)
          }() ? hB() : setTimeout(hB, 0))
        }), [hc, hB]),
        gn = function(cB) {
          return Ic ? null : cB
        },
        UB = function(cB) {
          return aB ? null : gn(cB)
        },
        bn = function(cB) {
          return lc ? null : gn(cB)
        },
        ZB = function(cB) {
          Yc && cB.stopPropagation()
        },
        QB = (0, Vc.useMemo)((function() {
          return function() {
            var cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              Bc = cB.refKey,
              nc = void 0 === Bc ? "ref" : Bc,
              Vc = cB.role,
              rB = cB.onKeyDown,
              uc = cB.onFocus,
              sc = cB.onBlur,
              Mc = cB.onClick,
              Pc = cB.onDragEnter,
              qB = cB.onDragOver,
              Oc = cB.onDragLeave,
              Tc = cB.onDrop,
              fc = PB(cB, cn);
            return sB(sB(MB({
              onKeyDown: UB(Kc(rB, an)),
              onFocus: UB(Kc(uc, lB)),
              onBlur: UB(Kc(sc, YB)),
              onClick: gn(Kc(Mc, LB)),
              onDragEnter: bn(Kc(Pc, tn)),
              onDragOver: bn(Kc(qB, SB)),
              onDragLeave: bn(Kc(Oc, yn)),
              onDrop: bn(Kc(Tc, pB)),
              role: "string" === typeof Vc && "" !== Vc ? Vc : "presentation"
            }, nc, Ec), Ic || aB ? {} : {
              tabIndex: 0
            }), fc)
          }
        }), [Ec, an, lB, YB, LB, tn, SB, yn, pB, aB, lc, Ic]),
        CB = (0, Vc.useCallback)((function(cB) {
          cB.stopPropagation()
        }), []),
        vn = (0, Vc.useMemo)((function() {
          return function() {
            var cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              Bc = cB.refKey,
              nc = void 0 === Bc ? "ref" : Bc,
              Vc = cB.onChange,
              Ic = cB.onClick,
              rB = PB(cB, BB);
            return sB(sB({}, MB({
              accept: Cc,
              multiple: Mc,
              type: "file",
              style: {
                display: "none"
              },
              onChange: gn(Kc(Vc, pB)),
              onClick: gn(Kc(Ic, CB)),
              tabIndex: -1
            }, nc, oc)), rB)
          }
        }), [oc, nc, Mc, pB, Ic]);
      return sB(sB({}, wc), {}, {
        ZBc: Ac && !Ic,
        getRootProps: QB,
        getInputProps: vn,
        rootRef: Ec,
        inputRef: oc,
        open: gn(hB)
      })
    }

    function mn(cB, Bc) {
      switch (Bc.type) {
        case "focus":
          return sB(sB({}, cB), {}, {
            ZBc: !0
          });
        case "blur":
          return sB(sB({}, cB), {}, {
            ZBc: !1
          });
        case "openDialog":
          return sB(sB({}, TB), {}, {
            isFileDialogActive: !0
          });
        case "closeDialog":
          return sB(sB({}, cB), {}, {
            isFileDialogActive: !1
          });
        case "setDraggedFiles":
          return sB(sB({}, cB), {}, {
            isDragActive: Bc.isDragActive,
            isDragAccept: Bc.isDragAccept,
            isDragReject: Bc.isDragReject
          });
        case "setFiles":
          return sB(sB({}, cB), {}, {
            acceptedFiles: Bc.acceptedFiles,
            fileRejections: Bc.fileRejections
          });
        case "reset":
          return sB({}, TB);
        default:
          return cB
      }
    }

    function eB() {}
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);