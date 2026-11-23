export const id = 107;
export const ids = [107];
export const modules = {
  4968: (kk, Fk) => {
    Fk.d = function(kk, Fk) {
      if (kk && Fk) {
        var Ik = Array.isArray(Fk) ? Fk : Fk.split(","),
          Xk = kk.name || "",
          Tk = (kk.type || "").toLowerCase(),
          ik = Tk.replace(/\/.*$/, "");
        return Ik.some((function(kk) {
          var Fk = kk.trim().toLowerCase();
          return "." === Fk.charAt(0) ? Xk.toLowerCase().endsWith(Fk) : Fk.endsWith("/*") ? ik === Fk.replace(/\/.*$/, "") : Tk === Fk
        }))
      }
      return !0
    }
  },
  4944: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => eF
    });
    var Xk = Ik(58),
      Tk = Ik(4946),
      ik = Ik.n(Tk);

    function yk(kk, Fk, Ik, Xk) {
      return new(Ik || (Ik = Promise))((function(Tk, ik) {
        function yk(kk) {
          try {
            ak(Xk.next(kk))
          } catch (Fk) {
            ik(Fk)
          }
        }

        function lk(kk) {
          try {
            ak(Xk.throw(kk))
          } catch (Fk) {
            ik(Fk)
          }
        }

        function ak(kk) {
          var Fk;
          kk.done ? Tk(kk.value) : (Fk = kk.value, Fk instanceof Ik ? Fk : new Ik((function(kk) {
            kk(Fk)
          }))).then(yk, lk)
        }
        ak((Xk = Xk.apply(kk, Fk || [])).next())
      }))
    }

    function lk(kk, Fk) {
      var Ik, Xk, Tk, ik, yk = {
        label: 0,
        sent: function() {
          if (1 & Tk[0]) throw Tk[1];
          return Tk[1]
        },
        trys: [],
        ops: []
      };
      return ik = {
        next: lk(0),
        throw: lk(1),
        return: lk(2)
      }, "function" === typeof Symbol && (ik[Symbol.iterator] = function() {
        return this
      }), ik;

      function lk(lk) {
        return function(ak) {
          return function(lk) {
            if (Ik) throw new TypeError("Generator is already executing.");
            for (; ik && (ik = 0, lk[0] && (yk = 0)), yk;) try {
              if (Ik = 1, Xk && (Tk = 2 & lk[0] ? Xk.return : lk[0] ? Xk.throw || ((Tk = Xk.return) && Tk.call(Xk), 0) : Xk.next) && !(Tk = Tk.call(Xk, lk[1])).done) return Tk;
              switch (Xk = 0, Tk && (lk = [2 & lk[0], Tk.value]), lk[0]) {
                case 0:
                case 1:
                  Tk = lk;
                  break;
                case 4:
                  return yk.label++, {
                    value: lk[1],
                    done: !1
                  };
                case 5:
                  yk.label++, Xk = lk[1], lk = [0];
                  continue;
                case 7:
                  lk = yk.ops.pop(), yk.trys.pop();
                  continue;
                default:
                  if (!(Tk = (Tk = yk.trys).length > 0 && Tk[Tk.length - 1]) && (6 === lk[0] || 2 === lk[0])) {
                    yk = 0;
                    continue
                  }
                  if (3 === lk[0] && (!Tk || lk[1] > Tk[0] && lk[1] < Tk[3])) {
                    yk.label = lk[1];
                    break
                  }
                  if (6 === lk[0] && yk.label < Tk[1]) {
                    yk.label = Tk[1], Tk = lk;
                    break
                  }
                  if (Tk && yk.label < Tk[2]) {
                    yk.label = Tk[2], yk.ops.push(lk);
                    break
                  }
                  Tk[2] && yk.ops.pop(), yk.trys.pop();
                  continue
              }
              lk = Fk.call(kk, yk)
            } catch (ak) {
              lk = [6, ak], Xk = 0
            } finally {
              Ik = Tk = 0
            }
            if (5 & lk[0]) throw lk[1];
            return {
              value: lk[0] ? lk[1] : void 0,
              done: !0
            }
          }([lk, ak])
        }
      }
    }
    Object.create;

    function ak(kk, Fk) {
      var Ik = "function" === typeof Symbol && kk[Symbol.iterator];
      if (!Ik) return kk;
      var Xk, Tk, ik = Ik.call(kk),
        yk = [];
      try {
        for (;
          (void 0 === Fk || Fk-- > 0) && !(Xk = ik.next()).done;) yk.push(Xk.value)
      } catch (lk) {
        Tk = {
          error: lk
        }
      } finally {
        try {
          Xk && !Xk.done && (Ik = ik.return) && Ik.call(ik)
        } finally {
          if (Tk) throw Tk.error
        }
      }
      return yk
    }

    function qk(kk, Fk, Ik) {
      if (Ik || 2 === arguments.length)
        for (var Xk, Tk = 0, ik = Fk.length; Tk < ik; Tk++) !Xk && Tk in Fk || (Xk || (Xk = Array.prototype.slice.call(Fk, 0, Tk)), Xk[Tk] = Fk[Tk]);
      return kk.concat(Xk || Array.prototype.slice.call(Fk))
    }
    Object.create;
    "function" === typeof SuppressedError && SuppressedError;
    var Lk = new Map([
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
      ["oq", "application/vnd.ms-outlook"]
    ]);

    function tk(kk, Fk) {
      var Ik = function(kk) {
        var Fk = kk.name;
        if (Fk && -1 !== Fk.lastIndexOf(".") && !kk.type) {
          var Ik = Fk.split(".").pop().toLowerCase(),
            Xk = Lk.get(Ik);
          Xk && Object.defineProperty(kk, "type", {
            value: Xk,
            writable: !1,
            configurable: !1,
            enumerable: !0
          })
        }
        return kk
      }(kk);
      if ("string" !== typeof Ik.path) {
        var Xk = kk.webkitRelativePath;
        Object.defineProperty(Ik, "path", {
          value: "string" === typeof Fk ? Fk : "string" === typeof Xk && Xk.length > 0 ? Xk : kk.name,
          writable: !1,
          configurable: !1,
          enumerable: !0
        })
      }
      return Ik
    }
    var Zk = [".DS_Store", "Thumbs.db"];

    function jk(kk) {
      return "object" === typeof kk && null !== kk
    }

    function ek(kk) {
      return xk(kk.target.files).map((function(kk) {
        return tk(kk)
      }))
    }

    function wk(kk) {
      return yk(this, void 0, void 0, (function() {
        return lk(this, (function(Fk) {
          switch (Fk.label) {
            case 0:
              return [4, Promise.all(kk.map((function(kk) {
                return kk.getFile()
              })))];
            case 1:
              return [2, Fk.sent().map((function(kk) {
                return tk(kk)
              }))]
          }
        }))
      }))
    }

    function Hk(kk, Fk) {
      return yk(this, void 0, void 0, (function() {
        var Ik;
        return lk(this, (function(Xk) {
          switch (Xk.label) {
            case 0:
              return kk.items ? (Ik = xk(kk.items).filter((function(kk) {
                return "file" === kk.kind
              })), "drop" !== Fk ? [2, Ik] : [4, Promise.all(Ik.map(Pk))]) : [3, 2];
            case 1:
              return [2, Jk(Kk(Xk.sent()))];
            case 2:
              return [2, Jk(xk(kk.files).map((function(kk) {
                return tk(kk)
              })))]
          }
        }))
      }))
    }

    function Jk(kk) {
      return kk.filter((function(kk) {
        return -1 === Zk.indexOf(kk.name)
      }))
    }

    function xk(kk) {
      if (null === kk) return [];
      for (var Fk = [], Ik = 0; Ik < kk.length; Ik++) {
        var Xk = kk[Ik];
        Fk.push(Xk)
      }
      return Fk
    }

    function Pk(kk) {
      if ("function" !== typeof kk.webkitGetAsEntry) return Qk(kk);
      var Fk = kk.webkitGetAsEntry();
      return Fk && Fk.isDirectory ? Vk(Fk) : Qk(kk)
    }

    function Kk(kk) {
      return kk.reduce((function(kk, Fk) {
        return qk(qk([], ak(kk), !1), ak(Array.isArray(Fk) ? Kk(Fk) : [Fk]), !1)
      }), [])
    }

    function Qk(kk) {
      var Fk = kk.getAsFile();
      if (!Fk) return Promise.reject("".concat(kk, " is not a File"));
      var Ik = tk(Fk);
      return Promise.resolve(Ik)
    }

    function sk(kk) {
      return yk(this, void 0, void 0, (function() {
        return lk(this, (function(Fk) {
          return [2, kk.isDirectory ? Vk(kk) : zk(kk)]
        }))
      }))
    }

    function Vk(kk) {
      var Fk = kk.createReader();
      return new Promise((function(kk, Ik) {
        var Xk = [];
        ! function Tk() {
          var ik = this;
          Fk.readEntries((function(Fk) {
            return yk(ik, void 0, void 0, (function() {
              var ik, yk, ak;
              return lk(this, (function(lk) {
                switch (lk.label) {
                  case 0:
                    if (Fk.length) return [3, 5];
                    lk.label = 1;
                  case 1:
                    return lk.trys.push([1, 3, , 4]), [4, Promise.all(Xk)];
                  case 2:
                    return ik = lk.sent(), kk(ik), [3, 4];
                  case 3:
                    return yk = lk.sent(), Ik(yk), [3, 4];
                  case 4:
                    return [3, 6];
                  case 5:
                    ak = Promise.all(Fk.map(sk)), Xk.push(ak), Tk(), lk.label = 6;
                  case 6:
                    return [2]
                }
              }))
            }))
          }), (function(kk) {
            Ik(kk)
          }))
        }()
      }))
    }

    function zk(kk) {
      return yk(this, void 0, void 0, (function() {
        return lk(this, (function(Fk) {
          return [2, new Promise((function(Fk, Ik) {
            kk.file((function(Ik) {
              var Xk = tk(Ik, kk.fullPath);
              Fk(Xk)
            }), (function(kk) {
              Ik(kk)
            }))
          }))]
        }))
      }))
    }
    var Sk = Ik(4968);

    function vk(kk) {
      return function(kk) {
        if (Array.isArray(kk)) return uk(kk)
      }(kk) || function(kk) {
        if ("undefined" !== typeof Symbol && null != kk[Symbol.iterator] || null != kk["@@iterator"]) return Array.from(kk)
      }(kk) || pk(kk) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Ek(kk, Fk) {
      var Ik = Object.keys(kk);
      if (Object.getOwnPropertySymbols) {
        var Xk = Object.getOwnPropertySymbols(kk);
        Fk && (Xk = Xk.filter((function(Fk) {
          return Object.getOwnPropertyDescriptor(kk, Fk).enumerable
        }))), Ik.push.apply(Ik, Xk)
      }
      return Ik
    }

    function Ok(kk) {
      for (var Fk = 1; Fk < arguments.length; Fk++) {
        var Ik = null != arguments[Fk] ? arguments[Fk] : {};
        Fk % 2 ? Ek(Object(Ik), !0).forEach((function(Fk) {
          nk(kk, Fk, Ik[Fk])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(Ik)) : Ek(Object(Ik)).forEach((function(Fk) {
          Object.defineProperty(kk, Fk, Object.getOwnPropertyDescriptor(Ik, Fk))
        }))
      }
      return kk
    }

    function nk(kk, Fk, Ik) {
      return Fk in kk ? Object.defineProperty(kk, Fk, {
        value: Ik,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Ik, kk
    }

    function Gk(kk, Fk) {
      return function(kk) {
        if (Array.isArray(kk)) return kk
      }(kk) || function(kk, Fk) {
        var Ik = null == kk ? null : "undefined" !== typeof Symbol && kk[Symbol.iterator] || kk["@@iterator"];
        if (null == Ik) return;
        var Xk, Tk, ik = [],
          yk = !0,
          lk = !1;
        try {
          for (Ik = Ik.call(kk); !(yk = (Xk = Ik.next()).done) && (ik.push(Xk.value), !Fk || ik.length !== Fk); yk = !0);
        } catch (ak) {
          lk = !0, Tk = ak
        } finally {
          try {
            yk || null == Ik.return || Ik.return()
          } finally {
            if (lk) throw Tk
          }
        }
        return ik
      }(kk, Fk) || pk(kk, Fk) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function pk(kk, Fk) {
      if (kk) {
        if ("string" === typeof kk) return uk(kk, Fk);
        var Ik = Object.prototype.toString.call(kk).slice(8, -1);
        return "Object" === Ik && kk.constructor && (Ik = kk.constructor.name), "Map" === Ik || "Set" === Ik ? Array.from(kk) : "Arguments" === Ik || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Ik) ? uk(kk, Fk) : void 0
      }
    }

    function uk(kk, Fk) {
      (null == Fk || Fk > kk.length) && (Fk = kk.length);
      for (var Ik = 0, Xk = new Array(Fk); Ik < Fk; Ik++) Xk[Ik] = kk[Ik];
      return Xk
    }
    var bk = "file-invalid-type",
      Rk = "file-too-large",
      Uk = "file-too-small",
      Ck = "too-many-files",
      Nk = function(kk) {
        kk = Array.isArray(kk) && 1 === kk.length ? kk[0] : kk;
        var Fk = Array.isArray(kk) ? "one of ".concat(kk.join(", ")) : kk;
        return {
          code: bk,
          message: "File type must be ".concat(Fk)
        }
      },
      ck = function(kk) {
        return {
          code: Rk,
          message: "File is larger than ".concat(kk, " ").concat(1 === kk ? "byte" : "bytes")
        }
      },
      Wk = function(kk) {
        return {
          code: Uk,
          message: "File is smaller than ".concat(kk, " ").concat(1 === kk ? "byte" : "bytes")
        }
      },
      fk = {
        code: Ck,
        message: "Too many files"
      };

    function Bk(kk, Fk) {
      var Ik = "application/x-moz-file" === kk.type || (0, Sk.d)(kk, Fk);
      return [Ik, Ik ? null : Nk(Fk)]
    }

    function dk(kk, Fk, Ik) {
      if (Yk(kk.size))
        if (Yk(Fk) && Yk(Ik)) {
          if (kk.size > Ik) return [!1, ck(Ik)];
          if (kk.size < Fk) return [!1, Wk(Fk)]
        } else {
          if (Yk(Fk) && kk.size < Fk) return [!1, Wk(Fk)];
          if (Yk(Ik) && kk.size > Ik) return [!1, ck(Ik)]
        } return [!0, null]
    }

    function Yk(kk) {
      return void 0 !== kk && null !== kk
    }

    function Ak(kk) {
      return "function" === typeof kk.isPropagationStopped ? kk.isPropagationStopped() : "undefined" !== typeof kk.cancelBubble && kk.cancelBubble
    }

    function gk(kk) {
      return kk.dataTransfer ? Array.prototype.some.call(kk.dataTransfer.types, (function(kk) {
        return "Files" === kk || "application/x-moz-file" === kk
      })) : !!kk.target && !!kk.target.files
    }

    function mk(kk) {
      kk.preventDefault()
    }

    function hk() {
      for (var kk = arguments.length, Fk = new Array(kk), Ik = 0; Ik < kk; Ik++) Fk[Ik] = arguments[Ik];
      return function(kk) {
        for (var Ik = arguments.length, Xk = new Array(Ik > 1 ? Ik - 1 : 0), Tk = 1; Tk < Ik; Tk++) Xk[Tk - 1] = arguments[Tk];
        return Fk.some((function(Fk) {
          return !Ak(kk) && Fk && Fk.apply(void 0, [kk].concat(Xk)), Ak(kk)
        }))
      }
    }

    function rk(kk) {
      return "audio/*" === kk || "video/*" === kk || "image/*" === kk || "text/*" === kk || /\w+\/[-+.\w]+/g.test(kk)
    }

    function Dk(kk) {
      return /^.*\.[\w]+$/.test(kk)
    }
    var Mk = ["children"],
      kF = ["open"],
      FF = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
      IF = ["refKey", "onChange", "onClick"];

    function XF(kk) {
      return function(kk) {
        if (Array.isArray(kk)) return yF(kk)
      }(kk) || function(kk) {
        if ("undefined" !== typeof Symbol && null != kk[Symbol.iterator] || null != kk["@@iterator"]) return Array.from(kk)
      }(kk) || iF(kk) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function TF(kk, Fk) {
      return function(kk) {
        if (Array.isArray(kk)) return kk
      }(kk) || function(kk, Fk) {
        var Ik = null == kk ? null : "undefined" !== typeof Symbol && kk[Symbol.iterator] || kk["@@iterator"];
        if (null == Ik) return;
        var Xk, Tk, ik = [],
          yk = !0,
          lk = !1;
        try {
          for (Ik = Ik.call(kk); !(yk = (Xk = Ik.next()).done) && (ik.push(Xk.value), !Fk || ik.length !== Fk); yk = !0);
        } catch (ak) {
          lk = !0, Tk = ak
        } finally {
          try {
            yk || null == Ik.return || Ik.return()
          } finally {
            if (lk) throw Tk
          }
        }
        return ik
      }(kk, Fk) || iF(kk, Fk) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function iF(kk, Fk) {
      if (kk) {
        if ("string" === typeof kk) return yF(kk, Fk);
        var Ik = Object.prototype.toString.call(kk).slice(8, -1);
        return "Object" === Ik && kk.constructor && (Ik = kk.constructor.name), "Map" === Ik || "Set" === Ik ? Array.from(kk) : "Arguments" === Ik || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Ik) ? yF(kk, Fk) : void 0
      }
    }

    function yF(kk, Fk) {
      (null == Fk || Fk > kk.length) && (Fk = kk.length);
      for (var Ik = 0, Xk = new Array(Fk); Ik < Fk; Ik++) Xk[Ik] = kk[Ik];
      return Xk
    }

    function lF(kk, Fk) {
      var Ik = Object.keys(kk);
      if (Object.getOwnPropertySymbols) {
        var Xk = Object.getOwnPropertySymbols(kk);
        Fk && (Xk = Xk.filter((function(Fk) {
          return Object.getOwnPropertyDescriptor(kk, Fk).enumerable
        }))), Ik.push.apply(Ik, Xk)
      }
      return Ik
    }

    function aF(kk) {
      for (var Fk = 1; Fk < arguments.length; Fk++) {
        var Ik = null != arguments[Fk] ? arguments[Fk] : {};
        Fk % 2 ? lF(Object(Ik), !0).forEach((function(Fk) {
          qF(kk, Fk, Ik[Fk])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(Ik)) : lF(Object(Ik)).forEach((function(Fk) {
          Object.defineProperty(kk, Fk, Object.getOwnPropertyDescriptor(Ik, Fk))
        }))
      }
      return kk
    }

    function qF(kk, Fk, Ik) {
      return Fk in kk ? Object.defineProperty(kk, Fk, {
        value: Ik,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Ik, kk
    }

    function LF(kk, Fk) {
      if (null == kk) return {};
      var Ik, Xk, Tk = function(kk, Fk) {
        if (null == kk) return {};
        var Ik, Xk, Tk = {},
          ik = Object.keys(kk);
        for (Xk = 0; Xk < ik.length; Xk++) Ik = ik[Xk], Fk.indexOf(Ik) >= 0 || (Tk[Ik] = kk[Ik]);
        return Tk
      }(kk, Fk);
      if (Object.getOwnPropertySymbols) {
        var ik = Object.getOwnPropertySymbols(kk);
        for (Xk = 0; Xk < ik.length; Xk++) Ik = ik[Xk], Fk.indexOf(Ik) >= 0 || Object.prototype.propertyIsEnumerable.call(kk, Ik) && (Tk[Ik] = kk[Ik])
      }
      return Tk
    }
    var tF = (0, Xk.forwardRef)((function(kk, Fk) {
      var Ik = kk.children,
        Tk = eF(LF(kk, Mk)),
        ik = Tk.open,
        yk = LF(Tk, kF);
      return (0, Xk.useImperativeHandle)(Fk, (function() {
        return {
          open: ik
        }
      }), [ik]), Xk.createElement(Xk.Fragment, null, Ik(aF(aF({}, yk), {}, {
        open: ik
      })))
    }));
    tF.displayName = "Dropzone";
    var ZF = {
      disabled: !1,
      getFilesFromEvent: function(kk) {
        return yk(this, void 0, void 0, (function() {
          return lk(this, (function(Fk) {
            return jk(kk) && jk(kk.dataTransfer) ? [2, Hk(kk.dataTransfer, kk.type)] : function(kk) {
              return jk(kk) && jk(kk.target)
            }(kk) ? [2, ek(kk)] : Array.isArray(kk) && kk.every((function(kk) {
              return "getFile" in kk && "function" === typeof kk.getFile
            })) ? [2, wk(kk)] : [2, []]
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
    tF.defaultProps = ZF, tF.propTypes = {
      children: ik().func,
      accept: ik().objectOf(ik().arrayOf(ik().string)),
      multiple: ik().bool,
      preventDropOnDocument: ik().bool,
      noClick: ik().bool,
      noKeyboard: ik().bool,
      noDrag: ik().bool,
      noDragEventsBubbling: ik().bool,
      minSize: ik().number,
      maxSize: ik().number,
      maxFiles: ik().number,
      disabled: ik().bool,
      getFilesFromEvent: ik().func,
      onFileDialogCancel: ik().func,
      onFileDialogOpen: ik().func,
      useFsAccessApi: ik().bool,
      autoFocus: ik().bool,
      onDragEnter: ik().func,
      onDragLeave: ik().func,
      onDragOver: ik().func,
      onDrop: ik().func,
      onDropAccepted: ik().func,
      onDropRejected: ik().func,
      onError: ik().func,
      validator: ik().func
    };
    var jF = {
      wG: !1,
      isFileDialogActive: !1,
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1,
      acceptedFiles: [],
      fileRejections: []
    };

    function eF() {
      var kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        Fk = aF(aF({}, ZF), kk),
        Ik = Fk.accept,
        Tk = Fk.disabled,
        ik = Fk.getFilesFromEvent,
        yk = Fk.maxSize,
        lk = Fk.minSize,
        ak = Fk.multiple,
        qk = Fk.maxFiles,
        Lk = Fk.onDragEnter,
        tk = Fk.onDragLeave,
        Zk = Fk.onDragOver,
        jk = Fk.onDrop,
        ek = Fk.onDropAccepted,
        wk = Fk.onDropRejected,
        Hk = Fk.onFileDialogCancel,
        Jk = Fk.onFileDialogOpen,
        xk = Fk.useFsAccessApi,
        Pk = Fk.autoFocus,
        Kk = Fk.preventDropOnDocument,
        Qk = Fk.noClick,
        sk = Fk.noKeyboard,
        Vk = Fk.noDrag,
        zk = Fk.noDragEventsBubbling,
        Sk = Fk.onError,
        Ek = Fk.validator,
        pk = (0, Xk.useMemo)((function() {
          return function(kk) {
            if (Yk(kk)) return Object.entries(kk).reduce((function(kk, Fk) {
              var Ik = Gk(Fk, 2),
                Xk = Ik[0],
                Tk = Ik[1];
              return [].concat(vk(kk), [Xk], vk(Tk))
            }), []).filter((function(kk) {
              return rk(kk) || Dk(kk)
            })).join(",")
          }(Ik)
        }), [Ik]),
        uk = (0, Xk.useMemo)((function() {
          return function(kk) {
            return Yk(kk) ? [{
              description: "Files",
              accept: Object.entries(kk).filter((function(kk) {
                var Fk = Gk(kk, 2),
                  Ik = Fk[0],
                  Xk = Fk[1],
                  Tk = !0;
                return rk(Ik) || (console.warn('Skipped "'.concat(Ik, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), Tk = !1), Array.isArray(Xk) && Xk.every(Dk) || (console.warn('Skipped "'.concat(Ik, '" because an invalid file extension was provided.')), Tk = !1), Tk
              })).reduce((function(kk, Fk) {
                var Ik = Gk(Fk, 2),
                  Xk = Ik[0],
                  Tk = Ik[1];
                return Ok(Ok({}, kk), {}, nk({}, Xk, Tk))
              }), {})
            }] : kk
          }(Ik)
        }), [Ik]),
        bk = (0, Xk.useMemo)((function() {
          return "function" === typeof Jk ? Jk : HF
        }), [Jk]),
        Rk = (0, Xk.useMemo)((function() {
          return "function" === typeof Hk ? Hk : HF
        }), [Hk]),
        Uk = (0, Xk.useRef)(null),
        Ck = (0, Xk.useRef)(null),
        Nk = TF((0, Xk.useReducer)(wF, jF), 2),
        ck = Nk[0],
        Wk = Nk[1],
        Mk = ck.wG,
        kF = ck.isFileDialogActive,
        iF = (0, Xk.useRef)("undefined" !== typeof window && window.isSecureContext && xk && "showOpenFilePicker" in window),
        yF = function() {
          !iF.current && kF && setTimeout((function() {
            Ck.current && (Ck.current.files.length || (Wk({
              type: "closeDialog"
            }), Rk()))
          }), 300)
        };
      (0, Xk.useEffect)((function() {
        return window.addEventListener("focus", yF, !1),
          function() {
            window.removeEventListener("focus", yF, !1)
          }
      }), [Ck, kF, Rk, iF]);
      var lF = (0, Xk.useRef)([]),
        tF = function(kk) {
          Uk.current && Uk.current.contains(kk.target) || (kk.preventDefault(), lF.current = [])
        };
      (0, Xk.useEffect)((function() {
        return Kk && (document.addEventListener("dragover", mk, !1), document.addEventListener("drop", tF, !1)),
          function() {
            Kk && (document.removeEventListener("dragover", mk), document.removeEventListener("drop", tF))
          }
      }), [Uk, Kk]), (0, Xk.useEffect)((function() {
        return !Tk && Pk && Uk.current && Uk.current.focus(),
          function() {}
      }), [Uk, Pk, Tk]);
      var eF = (0, Xk.useCallback)((function(kk) {
          Sk ? Sk(kk) : console.error(kk)
        }), [Sk]),
        JF = (0, Xk.useCallback)((function(kk) {
          kk.preventDefault(), kk.persist(), nF(kk), lF.current = [].concat(XF(lF.current), [kk.target]), gk(kk) && Promise.resolve(ik(kk)).then((function(Fk) {
            if (!Ak(kk) || zk) {
              var Ik = Fk.length,
                Xk = Ik > 0 && function(kk) {
                  var Fk = kk.files,
                    Ik = kk.accept,
                    Xk = kk.minSize,
                    Tk = kk.maxSize,
                    ik = kk.multiple,
                    yk = kk.maxFiles,
                    lk = kk.validator;
                  return !(!ik && Fk.length > 1 || ik && yk >= 1 && Fk.length > yk) && Fk.every((function(kk) {
                    var Fk = Gk(Bk(kk, Ik), 1)[0],
                      ik = Gk(dk(kk, Xk, Tk), 1)[0],
                      yk = lk ? lk(kk) : null;
                    return Fk && ik && !yk
                  }))
                }({
                  files: Fk,
                  accept: pk,
                  minSize: lk,
                  maxSize: yk,
                  multiple: ak,
                  maxFiles: qk,
                  validator: Ek
                });
              Wk({
                isDragAccept: Xk,
                isDragReject: Ik > 0 && !Xk,
                isDragActive: !0,
                type: "setDraggedFiles"
              }), Lk && Lk(kk)
            }
          })).catch((function(kk) {
            return eF(kk)
          }))
        }), [ik, Lk, eF, zk, pk, lk, yk, ak, qk, Ek]),
        xF = (0, Xk.useCallback)((function(kk) {
          kk.preventDefault(), kk.persist(), nF(kk);
          var Fk = gk(kk);
          if (Fk && kk.dataTransfer) try {
            kk.dataTransfer.dropEffect = "copy"
          } catch (Ik) {}
          return Fk && Zk && Zk(kk), !1
        }), [Zk, zk]),
        PF = (0, Xk.useCallback)((function(kk) {
          kk.preventDefault(), kk.persist(), nF(kk);
          var Fk = lF.current.filter((function(kk) {
              return Uk.current && Uk.current.contains(kk)
            })),
            Ik = Fk.indexOf(kk.target); - 1 !== Ik && Fk.splice(Ik, 1), lF.current = Fk, Fk.length > 0 || (Wk({
            type: "setDraggedFiles",
            isDragActive: !1,
            isDragAccept: !1,
            isDragReject: !1
          }), gk(kk) && tk && tk(kk))
        }), [Uk, tk, zk]),
        KF = (0, Xk.useCallback)((function(kk, Fk) {
          var Ik = [],
            Xk = [];
          kk.forEach((function(kk) {
            var Fk = TF(Bk(kk, pk), 2),
              Tk = Fk[0],
              ik = Fk[1],
              ak = TF(dk(kk, lk, yk), 2),
              qk = ak[0],
              Lk = ak[1],
              tk = Ek ? Ek(kk) : null;
            if (Tk && qk && !tk) Ik.push(kk);
            else {
              var Zk = [ik, Lk];
              tk && (Zk = Zk.concat(tk)), Xk.push({
                file: kk,
                errors: Zk.filter((function(kk) {
                  return kk
                }))
              })
            }
          })), (!ak && Ik.length > 1 || ak && qk >= 1 && Ik.length > qk) && (Ik.forEach((function(kk) {
            Xk.push({
              file: kk,
              errors: [fk]
            })
          })), Ik.splice(0)), Wk({
            acceptedFiles: Ik,
            fileRejections: Xk,
            type: "setFiles"
          }), jk && jk(Ik, Xk, Fk), Xk.length > 0 && wk && wk(Xk, Fk), Ik.length > 0 && ek && ek(Ik, Fk)
        }), [Wk, ak, pk, lk, yk, qk, jk, ek, wk, Ek]),
        QF = (0, Xk.useCallback)((function(kk) {
          kk.preventDefault(), kk.persist(), nF(kk), lF.current = [], gk(kk) && Promise.resolve(ik(kk)).then((function(Fk) {
            Ak(kk) && !zk || KF(Fk, kk)
          })).catch((function(kk) {
            return eF(kk)
          })), Wk({
            type: "reset"
          })
        }), [ik, KF, eF, zk]),
        sF = (0, Xk.useCallback)((function() {
          if (iF.current) {
            Wk({
              type: "openDialog"
            }), bk();
            var kk = {
              multiple: ak,
              types: uk
            };
            window.showOpenFilePicker(kk).then((function(kk) {
              return ik(kk)
            })).then((function(kk) {
              KF(kk, null), Wk({
                type: "closeDialog"
              })
            })).catch((function(kk) {
              var Fk;
              (Fk = kk) instanceof DOMException && ("AbortError" === Fk.name || Fk.code === Fk.ABORT_ERR) ? (Rk(kk), Wk({
                type: "closeDialog"
              })) : ! function(kk) {
                return kk instanceof DOMException && ("SecurityError" === kk.name || kk.code === kk.SECURITY_ERR)
              }(kk) ? eF(kk) : (iF.current = !1, Ck.current ? (Ck.current.value = null, Ck.current.click()) : eF(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))
            }))
          } else Ck.current && (Wk({
            type: "openDialog"
          }), bk(), Ck.current.value = null, Ck.current.click())
        }), [Wk, bk, Rk, xk, KF, eF, uk, ak]),
        VF = (0, Xk.useCallback)((function(kk) {
          Uk.current && Uk.current.isEqualNode(kk.target) && (" " !== kk.key && "Enter" !== kk.key && 32 !== kk.keyCode && 13 !== kk.keyCode || (kk.preventDefault(), sF()))
        }), [Uk, sF]),
        zF = (0, Xk.useCallback)((function() {
          Wk({
            type: "focus"
          })
        }), []),
        SF = (0, Xk.useCallback)((function() {
          Wk({
            type: "blur"
          })
        }), []),
        oF = (0, Xk.useCallback)((function() {
          Qk || (! function() {
            var kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
            return function(kk) {
              return -1 !== kk.indexOf("MSIE") || -1 !== kk.indexOf("Trident/")
            }(kk) || function(kk) {
              return -1 !== kk.indexOf("Edge/")
            }(kk)
          }() ? sF() : setTimeout(sF, 0))
        }), [Qk, sF]),
        vF = function(kk) {
          return Tk ? null : kk
        },
        EF = function(kk) {
          return sk ? null : vF(kk)
        },
        OF = function(kk) {
          return Vk ? null : vF(kk)
        },
        nF = function(kk) {
          zk && kk.stopPropagation()
        },
        GF = (0, Xk.useMemo)((function() {
          return function() {
            var kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              Fk = kk.refKey,
              Ik = void 0 === Fk ? "ref" : Fk,
              Xk = kk.role,
              ik = kk.onKeyDown,
              yk = kk.onFocus,
              lk = kk.onBlur,
              ak = kk.onClick,
              qk = kk.onDragEnter,
              Lk = kk.onDragOver,
              tk = kk.onDragLeave,
              Zk = kk.onDrop,
              jk = LF(kk, FF);
            return aF(aF(qF({
              onKeyDown: EF(hk(ik, VF)),
              onFocus: EF(hk(yk, zF)),
              onBlur: EF(hk(lk, SF)),
              onClick: vF(hk(ak, oF)),
              onDragEnter: OF(hk(qk, JF)),
              onDragOver: OF(hk(Lk, xF)),
              onDragLeave: OF(hk(tk, PF)),
              onDrop: OF(hk(Zk, QF)),
              role: "string" === typeof Xk && "" !== Xk ? Xk : "presentation"
            }, Ik, Uk), Tk || sk ? {} : {
              tabIndex: 0
            }), jk)
          }
        }), [Uk, VF, zF, SF, oF, JF, xF, PF, QF, sk, Vk, Tk]),
        pF = (0, Xk.useCallback)((function(kk) {
          kk.stopPropagation()
        }), []),
        uF = (0, Xk.useMemo)((function() {
          return function() {
            var kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              Fk = kk.refKey,
              Ik = void 0 === Fk ? "ref" : Fk,
              Xk = kk.onChange,
              Tk = kk.onClick,
              ik = LF(kk, IF);
            return aF(aF({}, qF({
              accept: pk,
              multiple: ak,
              type: "file",
              style: {
                display: "none"
              },
              onChange: vF(hk(Xk, QF)),
              onClick: vF(hk(Tk, pF)),
              tabIndex: -1
            }, Ik, Ck)), ik)
          }
        }), [Ck, Ik, ak, QF, Tk]);
      return aF(aF({}, ck), {}, {
        wG: Mk && !Tk,
        getRootProps: GF,
        getInputProps: uF,
        rootRef: Uk,
        inputRef: Ck,
        open: vF(sF)
      })
    }

    function wF(kk, Fk) {
      switch (Fk.type) {
        case "focus":
          return aF(aF({}, kk), {}, {
            wG: !0
          });
        case "blur":
          return aF(aF({}, kk), {}, {
            wG: !1
          });
        case "openDialog":
          return aF(aF({}, jF), {}, {
            isFileDialogActive: !0
          });
        case "closeDialog":
          return aF(aF({}, kk), {}, {
            isFileDialogActive: !1
          });
        case "setDraggedFiles":
          return aF(aF({}, kk), {}, {
            isDragActive: Fk.isDragActive,
            isDragAccept: Fk.isDragAccept,
            isDragReject: Fk.isDragReject
          });
        case "setFiles":
          return aF(aF({}, kk), {}, {
            acceptedFiles: Fk.acceptedFiles,
            fileRejections: Fk.fileRejections
          });
        case "reset":
          return aF({}, jF);
        default:
          return kk
      }
    }

    function HF() {}
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);