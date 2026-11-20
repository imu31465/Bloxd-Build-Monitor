export const id = 105;
export const ids = [105];
export const modules = {
  4676: (kk, Fk) => {
    Fk.b = function(kk, Fk) {
      if (kk && Fk) {
        var Bk = Array.isArray(Fk) ? Fk : Fk.split(","),
          Rk = kk.name || "",
          tk = (kk.type || "").toLowerCase(),
          ak = tk.replace(/\/.*$/, "");
        return Bk.some((function(kk) {
          var Fk = kk.trim().toLowerCase();
          return "." === Fk.charAt(0) ? Rk.toLowerCase().endsWith(Fk) : Fk.endsWith("/*") ? ak === Fk.replace(/\/.*$/, "") : tk === Fk
        }))
      }
      return !0
    }
  },
  4664: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => eF
    });
    var Rk = Bk(61),
      tk = Bk(4667),
      ak = Bk.n(tk);

    function Xk(kk, Fk, Bk, Rk) {
      return new(Bk || (Bk = Promise))((function(tk, ak) {
        function Xk(kk) {
          try {
            wk(Rk.next(kk))
          } catch (Fk) {
            ak(Fk)
          }
        }

        function bk(kk) {
          try {
            wk(Rk.throw(kk))
          } catch (Fk) {
            ak(Fk)
          }
        }

        function wk(kk) {
          var Fk;
          kk.done ? tk(kk.value) : (Fk = kk.value, Fk instanceof Bk ? Fk : new Bk((function(kk) {
            kk(Fk)
          }))).then(Xk, bk)
        }
        wk((Rk = Rk.apply(kk, Fk || [])).next())
      }))
    }

    function bk(kk, Fk) {
      var Bk, Rk, tk, ak, Xk = {
        label: 0,
        sent: function() {
          if (1 & tk[0]) throw tk[1];
          return tk[1]
        },
        trys: [],
        ops: []
      };
      return ak = {
        next: bk(0),
        throw: bk(1),
        return: bk(2)
      }, "function" === typeof Symbol && (ak[Symbol.iterator] = function() {
        return this
      }), ak;

      function bk(bk) {
        return function(wk) {
          return function(bk) {
            if (Bk) throw new TypeError("Generator is already executing.");
            for (; ak && (ak = 0, bk[0] && (Xk = 0)), Xk;) try {
              if (Bk = 1, Rk && (tk = 2 & bk[0] ? Rk.return : bk[0] ? Rk.throw || ((tk = Rk.return) && tk.call(Rk), 0) : Rk.next) && !(tk = tk.call(Rk, bk[1])).done) return tk;
              switch (Rk = 0, tk && (bk = [2 & bk[0], tk.value]), bk[0]) {
                case 0:
                case 1:
                  tk = bk;
                  break;
                case 4:
                  return Xk.label++, {
                    value: bk[1],
                    done: !1
                  };
                case 5:
                  Xk.label++, Rk = bk[1], bk = [0];
                  continue;
                case 7:
                  bk = Xk.ops.pop(), Xk.trys.pop();
                  continue;
                default:
                  if (!(tk = (tk = Xk.trys).length > 0 && tk[tk.length - 1]) && (6 === bk[0] || 2 === bk[0])) {
                    Xk = 0;
                    continue
                  }
                  if (3 === bk[0] && (!tk || bk[1] > tk[0] && bk[1] < tk[3])) {
                    Xk.label = bk[1];
                    break
                  }
                  if (6 === bk[0] && Xk.label < tk[1]) {
                    Xk.label = tk[1], tk = bk;
                    break
                  }
                  if (tk && Xk.label < tk[2]) {
                    Xk.label = tk[2], Xk.ops.push(bk);
                    break
                  }
                  tk[2] && Xk.ops.pop(), Xk.trys.pop();
                  continue
              }
              bk = Fk.call(kk, Xk)
            } catch (wk) {
              bk = [6, wk], Rk = 0
            } finally {
              Bk = tk = 0
            }
            if (5 & bk[0]) throw bk[1];
            return {
              value: bk[0] ? bk[1] : void 0,
              done: !0
            }
          }([bk, wk])
        }
      }
    }
    Object.create;

    function wk(kk, Fk) {
      var Bk = "function" === typeof Symbol && kk[Symbol.iterator];
      if (!Bk) return kk;
      var Rk, tk, ak = Bk.call(kk),
        Xk = [];
      try {
        for (;
          (void 0 === Fk || Fk-- > 0) && !(Rk = ak.next()).done;) Xk.push(Rk.value)
      } catch (bk) {
        tk = {
          error: bk
        }
      } finally {
        try {
          Rk && !Rk.done && (Bk = ak.return) && Bk.call(ak)
        } finally {
          if (tk) throw tk.error
        }
      }
      return Xk
    }

    function dk(kk, Fk, Bk) {
      if (Bk || 2 === arguments.length)
        for (var Rk, tk = 0, ak = Fk.length; tk < ak; tk++) !Rk && tk in Fk || (Rk || (Rk = Array.prototype.slice.call(Fk, 0, tk)), Rk[tk] = Fk[tk]);
      return kk.concat(Rk || Array.prototype.slice.call(Fk))
    }
    Object.create;
    "function" === typeof SuppressedError && SuppressedError;
    var sk = new Map([
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
      ["UX", "application/vnd.ms-outlook"]
    ]);

    function Vk(kk, Fk) {
      var Bk = function(kk) {
        var Fk = kk.name;
        if (Fk && -1 !== Fk.lastIndexOf(".") && !kk.type) {
          var Bk = Fk.split(".").pop().toLowerCase(),
            Rk = sk.get(Bk);
          Rk && Object.defineProperty(kk, "type", {
            value: Rk,
            writable: !1,
            configurable: !1,
            enumerable: !0
          })
        }
        return kk
      }(kk);
      if ("string" !== typeof Bk.path) {
        var Rk = kk.webkitRelativePath;
        Object.defineProperty(Bk, "path", {
          value: "string" === typeof Fk ? Fk : "string" === typeof Rk && Rk.length > 0 ? Rk : kk.name,
          writable: !1,
          configurable: !1,
          enumerable: !0
        })
      }
      return Bk
    }
    var Jk = [".DS_Store", "Thumbs.db"];

    function Ak(kk) {
      return "object" === typeof kk && null !== kk
    }

    function ek(kk) {
      return Wk(kk.target.files).map((function(kk) {
        return Vk(kk)
      }))
    }

    function yk(kk) {
      return Xk(this, void 0, void 0, (function() {
        return bk(this, (function(Fk) {
          switch (Fk.label) {
            case 0:
              return [4, Promise.all(kk.map((function(kk) {
                return kk.getFile()
              })))];
            case 1:
              return [2, Fk.sent().map((function(kk) {
                return Vk(kk)
              }))]
          }
        }))
      }))
    }

    function fk(kk, Fk) {
      return Xk(this, void 0, void 0, (function() {
        var Bk;
        return bk(this, (function(Rk) {
          switch (Rk.label) {
            case 0:
              return kk.items ? (Bk = Wk(kk.items).filter((function(kk) {
                return "file" === kk.kind
              })), "drop" !== Fk ? [2, Bk] : [4, Promise.all(Bk.map(vk))]) : [3, 2];
            case 1:
              return [2, mk(ik(Rk.sent()))];
            case 2:
              return [2, mk(Wk(kk.files).map((function(kk) {
                return Vk(kk)
              })))]
          }
        }))
      }))
    }

    function mk(kk) {
      return kk.filter((function(kk) {
        return -1 === Jk.indexOf(kk.name)
      }))
    }

    function Wk(kk) {
      if (null === kk) return [];
      for (var Fk = [], Bk = 0; Bk < kk.length; Bk++) {
        var Rk = kk[Bk];
        Fk.push(Rk)
      }
      return Fk
    }

    function vk(kk) {
      if ("function" !== typeof kk.webkitGetAsEntry) return Yk(kk);
      var Fk = kk.webkitGetAsEntry();
      return Fk && Fk.isDirectory ? Ok(Fk) : Yk(kk)
    }

    function ik(kk) {
      return kk.reduce((function(kk, Fk) {
        return dk(dk([], wk(kk), !1), wk(Array.isArray(Fk) ? ik(Fk) : [Fk]), !1)
      }), [])
    }

    function Yk(kk) {
      var Fk = kk.getAsFile();
      if (!Fk) return Promise.reject("".concat(kk, " is not a File"));
      var Bk = Vk(Fk);
      return Promise.resolve(Bk)
    }

    function Lk(kk) {
      return Xk(this, void 0, void 0, (function() {
        return bk(this, (function(Fk) {
          return [2, kk.isDirectory ? Ok(kk) : Ek(kk)]
        }))
      }))
    }

    function Ok(kk) {
      var Fk = kk.createReader();
      return new Promise((function(kk, Bk) {
        var Rk = [];
        ! function tk() {
          var ak = this;
          Fk.readEntries((function(Fk) {
            return Xk(ak, void 0, void 0, (function() {
              var ak, Xk, wk;
              return bk(this, (function(bk) {
                switch (bk.label) {
                  case 0:
                    if (Fk.length) return [3, 5];
                    bk.label = 1;
                  case 1:
                    return bk.trys.push([1, 3, , 4]), [4, Promise.all(Rk)];
                  case 2:
                    return ak = bk.sent(), kk(ak), [3, 4];
                  case 3:
                    return Xk = bk.sent(), Bk(Xk), [3, 4];
                  case 4:
                    return [3, 6];
                  case 5:
                    wk = Promise.all(Fk.map(Lk)), Rk.push(wk), tk(), bk.label = 6;
                  case 6:
                    return [2]
                }
              }))
            }))
          }), (function(kk) {
            Bk(kk)
          }))
        }()
      }))
    }

    function Ek(kk) {
      return Xk(this, void 0, void 0, (function() {
        return bk(this, (function(Fk) {
          return [2, new Promise((function(Fk, Bk) {
            kk.file((function(Bk) {
              var Rk = Vk(Bk, kk.fullPath);
              Fk(Rk)
            }), (function(kk) {
              Bk(kk)
            }))
          }))]
        }))
      }))
    }
    var Sk = Bk(4676);

    function Nk(kk) {
      return function(kk) {
        if (Array.isArray(kk)) return ck(kk)
      }(kk) || function(kk) {
        if ("undefined" !== typeof Symbol && null != kk[Symbol.iterator] || null != kk["@@iterator"]) return Array.from(kk)
      }(kk) || Uk(kk) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Hk(kk, Fk) {
      var Bk = Object.keys(kk);
      if (Object.getOwnPropertySymbols) {
        var Rk = Object.getOwnPropertySymbols(kk);
        Fk && (Rk = Rk.filter((function(Fk) {
          return Object.getOwnPropertyDescriptor(kk, Fk).enumerable
        }))), Bk.push.apply(Bk, Rk)
      }
      return Bk
    }

    function uk(kk) {
      for (var Fk = 1; Fk < arguments.length; Fk++) {
        var Bk = null != arguments[Fk] ? arguments[Fk] : {};
        Fk % 2 ? Hk(Object(Bk), !0).forEach((function(Fk) {
          Mk(kk, Fk, Bk[Fk])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(Bk)) : Hk(Object(Bk)).forEach((function(Fk) {
          Object.defineProperty(kk, Fk, Object.getOwnPropertyDescriptor(Bk, Fk))
        }))
      }
      return kk
    }

    function Mk(kk, Fk, Bk) {
      return Fk in kk ? Object.defineProperty(kk, Fk, {
        value: Bk,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Bk, kk
    }

    function gk(kk, Fk) {
      return function(kk) {
        if (Array.isArray(kk)) return kk
      }(kk) || function(kk, Fk) {
        var Bk = null == kk ? null : "undefined" !== typeof Symbol && kk[Symbol.iterator] || kk["@@iterator"];
        if (null == Bk) return;
        var Rk, tk, ak = [],
          Xk = !0,
          bk = !1;
        try {
          for (Bk = Bk.call(kk); !(Xk = (Rk = Bk.next()).done) && (ak.push(Rk.value), !Fk || ak.length !== Fk); Xk = !0);
        } catch (wk) {
          bk = !0, tk = wk
        } finally {
          try {
            Xk || null == Bk.return || Bk.return()
          } finally {
            if (bk) throw tk
          }
        }
        return ak
      }(kk, Fk) || Uk(kk, Fk) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Uk(kk, Fk) {
      if (kk) {
        if ("string" === typeof kk) return ck(kk, Fk);
        var Bk = Object.prototype.toString.call(kk).slice(8, -1);
        return "Object" === Bk && kk.constructor && (Bk = kk.constructor.name), "Map" === Bk || "Set" === Bk ? Array.from(kk) : "Arguments" === Bk || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Bk) ? ck(kk, Fk) : void 0
      }
    }

    function ck(kk, Fk) {
      (null == Fk || Fk > kk.length) && (Fk = kk.length);
      for (var Bk = 0, Rk = new Array(Fk); Bk < Fk; Bk++) Rk[Bk] = kk[Bk];
      return Rk
    }
    var Gk = "file-invalid-type",
      Tk = "file-too-large",
      rk = "file-too-small",
      Dk = "too-many-files",
      zk = function(kk) {
        kk = Array.isArray(kk) && 1 === kk.length ? kk[0] : kk;
        var Fk = Array.isArray(kk) ? "one of ".concat(kk.join(", ")) : kk;
        return {
          code: Gk,
          message: "File type must be ".concat(Fk)
        }
      },
      Pk = function(kk) {
        return {
          code: Tk,
          message: "File is larger than ".concat(kk, " ").concat(1 === kk ? "byte" : "bytes")
        }
      },
      hk = function(kk) {
        return {
          code: rk,
          message: "File is smaller than ".concat(kk, " ").concat(1 === kk ? "byte" : "bytes")
        }
      },
      qk = {
        code: Dk,
        message: "Too many files"
      };

    function Ck(kk, Fk) {
      var Bk = "application/x-moz-file" === kk.type || (0, Sk.b)(kk, Fk);
      return [Bk, Bk ? null : zk(Fk)]
    }

    function Zk(kk, Fk, Bk) {
      if (pk(kk.size))
        if (pk(Fk) && pk(Bk)) {
          if (kk.size > Bk) return [!1, Pk(Bk)];
          if (kk.size < Fk) return [!1, hk(Fk)]
        } else {
          if (pk(Fk) && kk.size < Fk) return [!1, hk(Fk)];
          if (pk(Bk) && kk.size > Bk) return [!1, Pk(Bk)]
        } return [!0, null]
    }

    function pk(kk) {
      return void 0 !== kk && null !== kk
    }

    function Kk(kk) {
      return "function" === typeof kk.isPropagationStopped ? kk.isPropagationStopped() : "undefined" !== typeof kk.cancelBubble && kk.cancelBubble
    }

    function xk(kk) {
      return kk.dataTransfer ? Array.prototype.some.call(kk.dataTransfer.types, (function(kk) {
        return "Files" === kk || "application/x-moz-file" === kk
      })) : !!kk.target && !!kk.target.files
    }

    function jk(kk) {
      kk.preventDefault()
    }

    function lk() {
      for (var kk = arguments.length, Fk = new Array(kk), Bk = 0; Bk < kk; Bk++) Fk[Bk] = arguments[Bk];
      return function(kk) {
        for (var Bk = arguments.length, Rk = new Array(Bk > 1 ? Bk - 1 : 0), tk = 1; tk < Bk; tk++) Rk[tk - 1] = arguments[tk];
        return Fk.some((function(Fk) {
          return !Kk(kk) && Fk && Fk.apply(void 0, [kk].concat(Rk)), Kk(kk)
        }))
      }
    }

    function nk(kk) {
      return "audio/*" === kk || "video/*" === kk || "image/*" === kk || "text/*" === kk || /\w+\/[-+.\w]+/g.test(kk)
    }

    function Ik(kk) {
      return /^.*\.[\w]+$/.test(kk)
    }
    var Qk = ["children"],
      kF = ["open"],
      FF = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
      BF = ["refKey", "onChange", "onClick"];

    function RF(kk) {
      return function(kk) {
        if (Array.isArray(kk)) return XF(kk)
      }(kk) || function(kk) {
        if ("undefined" !== typeof Symbol && null != kk[Symbol.iterator] || null != kk["@@iterator"]) return Array.from(kk)
      }(kk) || aF(kk) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function tF(kk, Fk) {
      return function(kk) {
        if (Array.isArray(kk)) return kk
      }(kk) || function(kk, Fk) {
        var Bk = null == kk ? null : "undefined" !== typeof Symbol && kk[Symbol.iterator] || kk["@@iterator"];
        if (null == Bk) return;
        var Rk, tk, ak = [],
          Xk = !0,
          bk = !1;
        try {
          for (Bk = Bk.call(kk); !(Xk = (Rk = Bk.next()).done) && (ak.push(Rk.value), !Fk || ak.length !== Fk); Xk = !0);
        } catch (wk) {
          bk = !0, tk = wk
        } finally {
          try {
            Xk || null == Bk.return || Bk.return()
          } finally {
            if (bk) throw tk
          }
        }
        return ak
      }(kk, Fk) || aF(kk, Fk) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function aF(kk, Fk) {
      if (kk) {
        if ("string" === typeof kk) return XF(kk, Fk);
        var Bk = Object.prototype.toString.call(kk).slice(8, -1);
        return "Object" === Bk && kk.constructor && (Bk = kk.constructor.name), "Map" === Bk || "Set" === Bk ? Array.from(kk) : "Arguments" === Bk || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Bk) ? XF(kk, Fk) : void 0
      }
    }

    function XF(kk, Fk) {
      (null == Fk || Fk > kk.length) && (Fk = kk.length);
      for (var Bk = 0, Rk = new Array(Fk); Bk < Fk; Bk++) Rk[Bk] = kk[Bk];
      return Rk
    }

    function bF(kk, Fk) {
      var Bk = Object.keys(kk);
      if (Object.getOwnPropertySymbols) {
        var Rk = Object.getOwnPropertySymbols(kk);
        Fk && (Rk = Rk.filter((function(Fk) {
          return Object.getOwnPropertyDescriptor(kk, Fk).enumerable
        }))), Bk.push.apply(Bk, Rk)
      }
      return Bk
    }

    function wF(kk) {
      for (var Fk = 1; Fk < arguments.length; Fk++) {
        var Bk = null != arguments[Fk] ? arguments[Fk] : {};
        Fk % 2 ? bF(Object(Bk), !0).forEach((function(Fk) {
          dF(kk, Fk, Bk[Fk])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(Bk)) : bF(Object(Bk)).forEach((function(Fk) {
          Object.defineProperty(kk, Fk, Object.getOwnPropertyDescriptor(Bk, Fk))
        }))
      }
      return kk
    }

    function dF(kk, Fk, Bk) {
      return Fk in kk ? Object.defineProperty(kk, Fk, {
        value: Bk,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[Fk] = Bk, kk
    }

    function sF(kk, Fk) {
      if (null == kk) return {};
      var Bk, Rk, tk = function(kk, Fk) {
        if (null == kk) return {};
        var Bk, Rk, tk = {},
          ak = Object.keys(kk);
        for (Rk = 0; Rk < ak.length; Rk++) Bk = ak[Rk], Fk.indexOf(Bk) >= 0 || (tk[Bk] = kk[Bk]);
        return tk
      }(kk, Fk);
      if (Object.getOwnPropertySymbols) {
        var ak = Object.getOwnPropertySymbols(kk);
        for (Rk = 0; Rk < ak.length; Rk++) Bk = ak[Rk], Fk.indexOf(Bk) >= 0 || Object.prototype.propertyIsEnumerable.call(kk, Bk) && (tk[Bk] = kk[Bk])
      }
      return tk
    }
    var VF = (0, Rk.forwardRef)((function(kk, Fk) {
      var Bk = kk.children,
        tk = eF(sF(kk, Qk)),
        ak = tk.open,
        Xk = sF(tk, kF);
      return (0, Rk.useImperativeHandle)(Fk, (function() {
        return {
          open: ak
        }
      }), [ak]), Rk.createElement(Rk.Fragment, null, Bk(wF(wF({}, Xk), {}, {
        open: ak
      })))
    }));
    VF.displayName = "Dropzone";
    var JF = {
      disabled: !1,
      getFilesFromEvent: function(kk) {
        return Xk(this, void 0, void 0, (function() {
          return bk(this, (function(Fk) {
            return Ak(kk) && Ak(kk.dataTransfer) ? [2, fk(kk.dataTransfer, kk.type)] : function(kk) {
              return Ak(kk) && Ak(kk.target)
            }(kk) ? [2, ek(kk)] : Array.isArray(kk) && kk.every((function(kk) {
              return "getFile" in kk && "function" === typeof kk.getFile
            })) ? [2, yk(kk)] : [2, []]
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
    VF.defaultProps = JF, VF.propTypes = {
      children: ak().func,
      accept: ak().objectOf(ak().arrayOf(ak().string)),
      multiple: ak().bool,
      preventDropOnDocument: ak().bool,
      noClick: ak().bool,
      noKeyboard: ak().bool,
      noDrag: ak().bool,
      noDragEventsBubbling: ak().bool,
      minSize: ak().number,
      maxSize: ak().number,
      maxFiles: ak().number,
      disabled: ak().bool,
      getFilesFromEvent: ak().func,
      onFileDialogCancel: ak().func,
      onFileDialogOpen: ak().func,
      useFsAccessApi: ak().bool,
      autoFocus: ak().bool,
      onDragEnter: ak().func,
      onDragLeave: ak().func,
      onDragOver: ak().func,
      onDrop: ak().func,
      onDropAccepted: ak().func,
      onDropRejected: ak().func,
      onError: ak().func,
      validator: ak().func
    };
    var AF = {
      qE: !1,
      isFileDialogActive: !1,
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1,
      acceptedFiles: [],
      fileRejections: []
    };

    function eF() {
      var kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        Fk = wF(wF({}, JF), kk),
        Bk = Fk.accept,
        tk = Fk.disabled,
        ak = Fk.getFilesFromEvent,
        Xk = Fk.maxSize,
        bk = Fk.minSize,
        wk = Fk.multiple,
        dk = Fk.maxFiles,
        sk = Fk.onDragEnter,
        Vk = Fk.onDragLeave,
        Jk = Fk.onDragOver,
        Ak = Fk.onDrop,
        ek = Fk.onDropAccepted,
        yk = Fk.onDropRejected,
        fk = Fk.onFileDialogCancel,
        mk = Fk.onFileDialogOpen,
        Wk = Fk.useFsAccessApi,
        vk = Fk.autoFocus,
        ik = Fk.preventDropOnDocument,
        Yk = Fk.noClick,
        Lk = Fk.noKeyboard,
        Ok = Fk.noDrag,
        Ek = Fk.noDragEventsBubbling,
        Sk = Fk.onError,
        Hk = Fk.validator,
        Uk = (0, Rk.useMemo)((function() {
          return function(kk) {
            if (pk(kk)) return Object.entries(kk).reduce((function(kk, Fk) {
              var Bk = gk(Fk, 2),
                Rk = Bk[0],
                tk = Bk[1];
              return [].concat(Nk(kk), [Rk], Nk(tk))
            }), []).filter((function(kk) {
              return nk(kk) || Ik(kk)
            })).join(",")
          }(Bk)
        }), [Bk]),
        ck = (0, Rk.useMemo)((function() {
          return function(kk) {
            return pk(kk) ? [{
              description: "Files",
              accept: Object.entries(kk).filter((function(kk) {
                var Fk = gk(kk, 2),
                  Bk = Fk[0],
                  Rk = Fk[1],
                  tk = !0;
                return nk(Bk) || (console.warn('Skipped "'.concat(Bk, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), tk = !1), Array.isArray(Rk) && Rk.every(Ik) || (console.warn('Skipped "'.concat(Bk, '" because an invalid file extension was provided.')), tk = !1), tk
              })).reduce((function(kk, Fk) {
                var Bk = gk(Fk, 2),
                  Rk = Bk[0],
                  tk = Bk[1];
                return uk(uk({}, kk), {}, Mk({}, Rk, tk))
              }), {})
            }] : kk
          }(Bk)
        }), [Bk]),
        Gk = (0, Rk.useMemo)((function() {
          return "function" === typeof mk ? mk : fF
        }), [mk]),
        Tk = (0, Rk.useMemo)((function() {
          return "function" === typeof fk ? fk : fF
        }), [fk]),
        rk = (0, Rk.useRef)(null),
        Dk = (0, Rk.useRef)(null),
        zk = tF((0, Rk.useReducer)(yF, AF), 2),
        Pk = zk[0],
        hk = zk[1],
        Qk = Pk.qE,
        kF = Pk.isFileDialogActive,
        aF = (0, Rk.useRef)("undefined" !== typeof window && window.isSecureContext && Wk && "showOpenFilePicker" in window),
        XF = function() {
          !aF.current && kF && setTimeout((function() {
            Dk.current && (Dk.current.files.length || (hk({
              type: "closeDialog"
            }), Tk()))
          }), 300)
        };
      (0, Rk.useEffect)((function() {
        return window.addEventListener("focus", XF, !1),
          function() {
            window.removeEventListener("focus", XF, !1)
          }
      }), [Dk, kF, Tk, aF]);
      var bF = (0, Rk.useRef)([]),
        VF = function(kk) {
          rk.current && rk.current.contains(kk.target) || (kk.preventDefault(), bF.current = [])
        };
      (0, Rk.useEffect)((function() {
        return ik && (document.addEventListener("dragover", jk, !1), document.addEventListener("drop", VF, !1)),
          function() {
            ik && (document.removeEventListener("dragover", jk), document.removeEventListener("drop", VF))
          }
      }), [rk, ik]), (0, Rk.useEffect)((function() {
        return !tk && vk && rk.current && rk.current.focus(),
          function() {}
      }), [rk, vk, tk]);
      var eF = (0, Rk.useCallback)((function(kk) {
          Sk ? Sk(kk) : console.error(kk)
        }), [Sk]),
        mF = (0, Rk.useCallback)((function(kk) {
          kk.preventDefault(), kk.persist(), MF(kk), bF.current = [].concat(RF(bF.current), [kk.target]), xk(kk) && Promise.resolve(ak(kk)).then((function(Fk) {
            if (!Kk(kk) || Ek) {
              var Bk = Fk.length,
                Rk = Bk > 0 && function(kk) {
                  var Fk = kk.files,
                    Bk = kk.accept,
                    Rk = kk.minSize,
                    tk = kk.maxSize,
                    ak = kk.multiple,
                    Xk = kk.maxFiles,
                    bk = kk.validator;
                  return !(!ak && Fk.length > 1 || ak && Xk >= 1 && Fk.length > Xk) && Fk.every((function(kk) {
                    var Fk = gk(Ck(kk, Bk), 1)[0],
                      ak = gk(Zk(kk, Rk, tk), 1)[0],
                      Xk = bk ? bk(kk) : null;
                    return Fk && ak && !Xk
                  }))
                }({
                  files: Fk,
                  accept: Uk,
                  minSize: bk,
                  maxSize: Xk,
                  multiple: wk,
                  maxFiles: dk,
                  validator: Hk
                });
              hk({
                isDragAccept: Rk,
                isDragReject: Bk > 0 && !Rk,
                isDragActive: !0,
                type: "setDraggedFiles"
              }), sk && sk(kk)
            }
          })).catch((function(kk) {
            return eF(kk)
          }))
        }), [ak, sk, eF, Ek, Uk, bk, Xk, wk, dk, Hk]),
        WF = (0, Rk.useCallback)((function(kk) {
          kk.preventDefault(), kk.persist(), MF(kk);
          var Fk = xk(kk);
          if (Fk && kk.dataTransfer) try {
            kk.dataTransfer.dropEffect = "copy"
          } catch (Bk) {}
          return Fk && Jk && Jk(kk), !1
        }), [Jk, Ek]),
        vF = (0, Rk.useCallback)((function(kk) {
          kk.preventDefault(), kk.persist(), MF(kk);
          var Fk = bF.current.filter((function(kk) {
              return rk.current && rk.current.contains(kk)
            })),
            Bk = Fk.indexOf(kk.target); - 1 !== Bk && Fk.splice(Bk, 1), bF.current = Fk, Fk.length > 0 || (hk({
            type: "setDraggedFiles",
            isDragActive: !1,
            isDragAccept: !1,
            isDragReject: !1
          }), xk(kk) && Vk && Vk(kk))
        }), [rk, Vk, Ek]),
        iF = (0, Rk.useCallback)((function(kk, Fk) {
          var Bk = [],
            Rk = [];
          kk.forEach((function(kk) {
            var Fk = tF(Ck(kk, Uk), 2),
              tk = Fk[0],
              ak = Fk[1],
              wk = tF(Zk(kk, bk, Xk), 2),
              dk = wk[0],
              sk = wk[1],
              Vk = Hk ? Hk(kk) : null;
            if (tk && dk && !Vk) Bk.push(kk);
            else {
              var Jk = [ak, sk];
              Vk && (Jk = Jk.concat(Vk)), Rk.push({
                file: kk,
                errors: Jk.filter((function(kk) {
                  return kk
                }))
              })
            }
          })), (!wk && Bk.length > 1 || wk && dk >= 1 && Bk.length > dk) && (Bk.forEach((function(kk) {
            Rk.push({
              file: kk,
              errors: [qk]
            })
          })), Bk.splice(0)), hk({
            acceptedFiles: Bk,
            fileRejections: Rk,
            type: "setFiles"
          }), Ak && Ak(Bk, Rk, Fk), Rk.length > 0 && yk && yk(Rk, Fk), Bk.length > 0 && ek && ek(Bk, Fk)
        }), [hk, wk, Uk, bk, Xk, dk, Ak, ek, yk, Hk]),
        YF = (0, Rk.useCallback)((function(kk) {
          kk.preventDefault(), kk.persist(), MF(kk), bF.current = [], xk(kk) && Promise.resolve(ak(kk)).then((function(Fk) {
            Kk(kk) && !Ek || iF(Fk, kk)
          })).catch((function(kk) {
            return eF(kk)
          })), hk({
            type: "reset"
          })
        }), [ak, iF, eF, Ek]),
        oF = (0, Rk.useCallback)((function() {
          if (aF.current) {
            hk({
              type: "openDialog"
            }), Gk();
            var kk = {
              multiple: wk,
              types: ck
            };
            window.showOpenFilePicker(kk).then((function(kk) {
              return ak(kk)
            })).then((function(kk) {
              iF(kk, null), hk({
                type: "closeDialog"
              })
            })).catch((function(kk) {
              var Fk;
              (Fk = kk) instanceof DOMException && ("AbortError" === Fk.name || Fk.code === Fk.ABORT_ERR) ? (Tk(kk), hk({
                type: "closeDialog"
              })) : ! function(kk) {
                return kk instanceof DOMException && ("SecurityError" === kk.name || kk.code === kk.SECURITY_ERR)
              }(kk) ? eF(kk) : (aF.current = !1, Dk.current ? (Dk.current.value = null, Dk.current.click()) : eF(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))
            }))
          } else Dk.current && (hk({
            type: "openDialog"
          }), Gk(), Dk.current.value = null, Dk.current.click())
        }), [hk, Gk, Tk, Wk, iF, eF, ck, wk]),
        LF = (0, Rk.useCallback)((function(kk) {
          rk.current && rk.current.isEqualNode(kk.target) && (" " !== kk.key && "Enter" !== kk.key && 32 !== kk.keyCode && 13 !== kk.keyCode || (kk.preventDefault(), oF()))
        }), [rk, oF]),
        OF = (0, Rk.useCallback)((function() {
          hk({
            type: "focus"
          })
        }), []),
        EF = (0, Rk.useCallback)((function() {
          hk({
            type: "blur"
          })
        }), []),
        SF = (0, Rk.useCallback)((function() {
          Yk || (! function() {
            var kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
            return function(kk) {
              return -1 !== kk.indexOf("MSIE") || -1 !== kk.indexOf("Trident/")
            }(kk) || function(kk) {
              return -1 !== kk.indexOf("Edge/")
            }(kk)
          }() ? oF() : setTimeout(oF, 0))
        }), [Yk, oF]),
        NF = function(kk) {
          return tk ? null : kk
        },
        HF = function(kk) {
          return Lk ? null : NF(kk)
        },
        uF = function(kk) {
          return Ok ? null : NF(kk)
        },
        MF = function(kk) {
          Ek && kk.stopPropagation()
        },
        gF = (0, Rk.useMemo)((function() {
          return function() {
            var kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              Fk = kk.refKey,
              Bk = void 0 === Fk ? "ref" : Fk,
              Rk = kk.role,
              ak = kk.onKeyDown,
              Xk = kk.onFocus,
              bk = kk.onBlur,
              wk = kk.onClick,
              dk = kk.onDragEnter,
              sk = kk.onDragOver,
              Vk = kk.onDragLeave,
              Jk = kk.onDrop,
              Ak = sF(kk, FF);
            return wF(wF(dF({
              onKeyDown: HF(lk(ak, LF)),
              onFocus: HF(lk(Xk, OF)),
              onBlur: HF(lk(bk, EF)),
              onClick: NF(lk(wk, SF)),
              onDragEnter: uF(lk(dk, mF)),
              onDragOver: uF(lk(sk, WF)),
              onDragLeave: uF(lk(Vk, vF)),
              onDrop: uF(lk(Jk, YF)),
              role: "string" === typeof Rk && "" !== Rk ? Rk : "presentation"
            }, Bk, rk), tk || Lk ? {} : {
              tabIndex: 0
            }), Ak)
          }
        }), [rk, LF, OF, EF, SF, mF, WF, vF, YF, Lk, Ok, tk]),
        UF = (0, Rk.useCallback)((function(kk) {
          kk.stopPropagation()
        }), []),
        cF = (0, Rk.useMemo)((function() {
          return function() {
            var kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              Fk = kk.refKey,
              Bk = void 0 === Fk ? "ref" : Fk,
              Rk = kk.onChange,
              tk = kk.onClick,
              ak = sF(kk, BF);
            return wF(wF({}, dF({
              accept: Uk,
              multiple: wk,
              type: "file",
              style: {
                display: "none"
              },
              onChange: NF(lk(Rk, YF)),
              onClick: NF(lk(tk, UF)),
              tabIndex: -1
            }, Bk, Dk)), ak)
          }
        }), [Dk, Bk, wk, YF, tk]);
      return wF(wF({}, Pk), {}, {
        qE: Qk && !tk,
        getRootProps: gF,
        getInputProps: cF,
        rootRef: rk,
        inputRef: Dk,
        open: NF(oF)
      })
    }

    function yF(kk, Fk) {
      switch (Fk.type) {
        case "focus":
          return wF(wF({}, kk), {}, {
            qE: !0
          });
        case "blur":
          return wF(wF({}, kk), {}, {
            qE: !1
          });
        case "openDialog":
          return wF(wF({}, AF), {}, {
            isFileDialogActive: !0
          });
        case "closeDialog":
          return wF(wF({}, kk), {}, {
            isFileDialogActive: !1
          });
        case "setDraggedFiles":
          return wF(wF({}, kk), {}, {
            isDragActive: Fk.isDragActive,
            isDragAccept: Fk.isDragAccept,
            isDragReject: Fk.isDragReject
          });
        case "setFiles":
          return wF(wF({}, kk), {}, {
            acceptedFiles: Fk.acceptedFiles,
            fileRejections: Fk.fileRejections
          });
        case "reset":
          return wF({}, AF);
        default:
          return kk
      }
    }

    function fF() {}
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);