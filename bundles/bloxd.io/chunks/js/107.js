export const id = 107;
export const ids = [107];
export const modules = {
  4912: (kk, ek) => {
    ek.c = function(kk, ek) {
      if (kk && ek) {
        var ik = Array.isArray(ek) ? ek : ek.split(","),
          Dk = kk.name || "",
          fk = (kk.type || "").toLowerCase(),
          Sk = fk.replace(/\/.*$/, "");
        return ik.some((function(kk) {
          var ek = kk.trim().toLowerCase();
          return "." === ek.charAt(0) ? Dk.toLowerCase().endsWith(ek) : ek.endsWith("/*") ? Sk === ek.replace(/\/.*$/, "") : fk === ek
        }))
      }
      return !0
    }
  },
  4888: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Ue
    });
    var Dk = ik(60),
      fk = ik(4893),
      Sk = ik.n(fk);

    function bk(kk, ek, ik, Dk) {
      return new(ik || (ik = Promise))((function(fk, Sk) {
        function bk(kk) {
          try {
            Pk(Dk.next(kk))
          } catch (ek) {
            Sk(ek)
          }
        }

        function rk(kk) {
          try {
            Pk(Dk.throw(kk))
          } catch (ek) {
            Sk(ek)
          }
        }

        function Pk(kk) {
          var ek;
          kk.done ? fk(kk.value) : (ek = kk.value, ek instanceof ik ? ek : new ik((function(kk) {
            kk(ek)
          }))).then(bk, rk)
        }
        Pk((Dk = Dk.apply(kk, ek || [])).next())
      }))
    }

    function rk(kk, ek) {
      var ik, Dk, fk, Sk, bk = {
        label: 0,
        sent: function() {
          if (1 & fk[0]) throw fk[1];
          return fk[1]
        },
        trys: [],
        ops: []
      };
      return Sk = {
        next: rk(0),
        throw: rk(1),
        return: rk(2)
      }, "function" === typeof Symbol && (Sk[Symbol.iterator] = function() {
        return this
      }), Sk;

      function rk(rk) {
        return function(Pk) {
          return function(rk) {
            if (ik) throw new TypeError("Generator is already executing.");
            for (; Sk && (Sk = 0, rk[0] && (bk = 0)), bk;) try {
              if (ik = 1, Dk && (fk = 2 & rk[0] ? Dk.return : rk[0] ? Dk.throw || ((fk = Dk.return) && fk.call(Dk), 0) : Dk.next) && !(fk = fk.call(Dk, rk[1])).done) return fk;
              switch (Dk = 0, fk && (rk = [2 & rk[0], fk.value]), rk[0]) {
                case 0:
                case 1:
                  fk = rk;
                  break;
                case 4:
                  return bk.label++, {
                    value: rk[1],
                    done: !1
                  };
                case 5:
                  bk.label++, Dk = rk[1], rk = [0];
                  continue;
                case 7:
                  rk = bk.ops.pop(), bk.trys.pop();
                  continue;
                default:
                  if (!(fk = (fk = bk.trys).length > 0 && fk[fk.length - 1]) && (6 === rk[0] || 2 === rk[0])) {
                    bk = 0;
                    continue
                  }
                  if (3 === rk[0] && (!fk || rk[1] > fk[0] && rk[1] < fk[3])) {
                    bk.label = rk[1];
                    break
                  }
                  if (6 === rk[0] && bk.label < fk[1]) {
                    bk.label = fk[1], fk = rk;
                    break
                  }
                  if (fk && bk.label < fk[2]) {
                    bk.label = fk[2], bk.ops.push(rk);
                    break
                  }
                  fk[2] && bk.ops.pop(), bk.trys.pop();
                  continue
              }
              rk = ek.call(kk, bk)
            } catch (Pk) {
              rk = [6, Pk], Dk = 0
            } finally {
              ik = fk = 0
            }
            if (5 & rk[0]) throw rk[1];
            return {
              value: rk[0] ? rk[1] : void 0,
              done: !0
            }
          }([rk, Pk])
        }
      }
    }
    Object.create;

    function Pk(kk, ek) {
      var ik = "function" === typeof Symbol && kk[Symbol.iterator];
      if (!ik) return kk;
      var Dk, fk, Sk = ik.call(kk),
        bk = [];
      try {
        for (;
          (void 0 === ek || ek-- > 0) && !(Dk = Sk.next()).done;) bk.push(Dk.value)
      } catch (rk) {
        fk = {
          error: rk
        }
      } finally {
        try {
          Dk && !Dk.done && (ik = Sk.return) && ik.call(Sk)
        } finally {
          if (fk) throw fk.error
        }
      }
      return bk
    }

    function mk(kk, ek, ik) {
      if (ik || 2 === arguments.length)
        for (var Dk, fk = 0, Sk = ek.length; fk < Sk; fk++) !Dk && fk in ek || (Dk || (Dk = Array.prototype.slice.call(ek, 0, fk)), Dk[fk] = ek[fk]);
      return kk.concat(Dk || Array.prototype.slice.call(ek))
    }
    Object.create;
    "function" === typeof SuppressedError && SuppressedError;
    var Mk = new Map([
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
      ["hM", "application/vnd.ms-outlook"]
    ]);

    function Kk(kk, ek) {
      var ik = function(kk) {
        var ek = kk.name;
        if (ek && -1 !== ek.lastIndexOf(".") && !kk.type) {
          var ik = ek.split(".").pop().toLowerCase(),
            Dk = Mk.get(ik);
          Dk && Object.defineProperty(kk, "type", {
            value: Dk,
            writable: !1,
            configurable: !1,
            enumerable: !0
          })
        }
        return kk
      }(kk);
      if ("string" !== typeof ik.path) {
        var Dk = kk.webkitRelativePath;
        Object.defineProperty(ik, "path", {
          value: "string" === typeof ek ? ek : "string" === typeof Dk && Dk.length > 0 ? Dk : kk.name,
          writable: !1,
          configurable: !1,
          enumerable: !0
        })
      }
      return ik
    }
    var xk = [".DS_Store", "Thumbs.db"];

    function nk(kk) {
      return "object" === typeof kk && null !== kk
    }

    function Uk(kk) {
      return pk(kk.target.files).map((function(kk) {
        return Kk(kk)
      }))
    }

    function Hk(kk) {
      return bk(this, void 0, void 0, (function() {
        return rk(this, (function(ek) {
          switch (ek.label) {
            case 0:
              return [4, Promise.all(kk.map((function(kk) {
                return kk.getFile()
              })))];
            case 1:
              return [2, ek.sent().map((function(kk) {
                return Kk(kk)
              }))]
          }
        }))
      }))
    }

    function wk(kk, ek) {
      return bk(this, void 0, void 0, (function() {
        var ik;
        return rk(this, (function(Dk) {
          switch (Dk.label) {
            case 0:
              return kk.items ? (ik = pk(kk.items).filter((function(kk) {
                return "file" === kk.kind
              })), "drop" !== ek ? [2, ik] : [4, Promise.all(ik.map(yk))]) : [3, 2];
            case 1:
              return [2, lk(Yk(Dk.sent()))];
            case 2:
              return [2, lk(pk(kk.files).map((function(kk) {
                return Kk(kk)
              })))]
          }
        }))
      }))
    }

    function lk(kk) {
      return kk.filter((function(kk) {
        return -1 === xk.indexOf(kk.name)
      }))
    }

    function pk(kk) {
      if (null === kk) return [];
      for (var ek = [], ik = 0; ik < kk.length; ik++) {
        var Dk = kk[ik];
        ek.push(Dk)
      }
      return ek
    }

    function yk(kk) {
      if ("function" !== typeof kk.webkitGetAsEntry) return Lk(kk);
      var ek = kk.webkitGetAsEntry();
      return ek && ek.isDirectory ? Ak(ek) : Lk(kk)
    }

    function Yk(kk) {
      return kk.reduce((function(kk, ek) {
        return mk(mk([], Pk(kk), !1), Pk(Array.isArray(ek) ? Yk(ek) : [ek]), !1)
      }), [])
    }

    function Lk(kk) {
      var ek = kk.getAsFile();
      if (!ek) return Promise.reject("".concat(kk, " is not a File"));
      var ik = Kk(ek);
      return Promise.resolve(ik)
    }

    function Ck(kk) {
      return bk(this, void 0, void 0, (function() {
        return rk(this, (function(ek) {
          return [2, kk.isDirectory ? Ak(kk) : jk(kk)]
        }))
      }))
    }

    function Ak(kk) {
      var ek = kk.createReader();
      return new Promise((function(kk, ik) {
        var Dk = [];
        ! function fk() {
          var Sk = this;
          ek.readEntries((function(ek) {
            return bk(Sk, void 0, void 0, (function() {
              var Sk, bk, Pk;
              return rk(this, (function(rk) {
                switch (rk.label) {
                  case 0:
                    if (ek.length) return [3, 5];
                    rk.label = 1;
                  case 1:
                    return rk.trys.push([1, 3, , 4]), [4, Promise.all(Dk)];
                  case 2:
                    return Sk = rk.sent(), kk(Sk), [3, 4];
                  case 3:
                    return bk = rk.sent(), ik(bk), [3, 4];
                  case 4:
                    return [3, 6];
                  case 5:
                    Pk = Promise.all(ek.map(Ck)), Dk.push(Pk), fk(), rk.label = 6;
                  case 6:
                    return [2]
                }
              }))
            }))
          }), (function(kk) {
            ik(kk)
          }))
        }()
      }))
    }

    function jk(kk) {
      return bk(this, void 0, void 0, (function() {
        return rk(this, (function(ek) {
          return [2, new Promise((function(ek, ik) {
            kk.file((function(ik) {
              var Dk = Kk(ik, kk.fullPath);
              ek(Dk)
            }), (function(kk) {
              ik(kk)
            }))
          }))]
        }))
      }))
    }
    var sk = ik(4912);

    function dk(kk) {
      return function(kk) {
        if (Array.isArray(kk)) return zk(kk)
      }(kk) || function(kk) {
        if ("undefined" !== typeof Symbol && null != kk[Symbol.iterator] || null != kk["@@iterator"]) return Array.from(kk)
      }(kk) || Ik(kk) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Vk(kk, ek) {
      var ik = Object.keys(kk);
      if (Object.getOwnPropertySymbols) {
        var Dk = Object.getOwnPropertySymbols(kk);
        ek && (Dk = Dk.filter((function(ek) {
          return Object.getOwnPropertyDescriptor(kk, ek).enumerable
        }))), ik.push.apply(ik, Dk)
      }
      return ik
    }

    function Fk(kk) {
      for (var ek = 1; ek < arguments.length; ek++) {
        var ik = null != arguments[ek] ? arguments[ek] : {};
        ek % 2 ? Vk(Object(ik), !0).forEach((function(ek) {
          uk(kk, ek, ik[ek])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(ik)) : Vk(Object(ik)).forEach((function(ek) {
          Object.defineProperty(kk, ek, Object.getOwnPropertyDescriptor(ik, ek))
        }))
      }
      return kk
    }

    function uk(kk, ek, ik) {
      return ek in kk ? Object.defineProperty(kk, ek, {
        value: ik,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[ek] = ik, kk
    }

    function qk(kk, ek) {
      return function(kk) {
        if (Array.isArray(kk)) return kk
      }(kk) || function(kk, ek) {
        var ik = null == kk ? null : "undefined" !== typeof Symbol && kk[Symbol.iterator] || kk["@@iterator"];
        if (null == ik) return;
        var Dk, fk, Sk = [],
          bk = !0,
          rk = !1;
        try {
          for (ik = ik.call(kk); !(bk = (Dk = ik.next()).done) && (Sk.push(Dk.value), !ek || Sk.length !== ek); bk = !0);
        } catch (Pk) {
          rk = !0, fk = Pk
        } finally {
          try {
            bk || null == ik.return || ik.return()
          } finally {
            if (rk) throw fk
          }
        }
        return Sk
      }(kk, ek) || Ik(kk, ek) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Ik(kk, ek) {
      if (kk) {
        if ("string" === typeof kk) return zk(kk, ek);
        var ik = Object.prototype.toString.call(kk).slice(8, -1);
        return "Object" === ik && kk.constructor && (ik = kk.constructor.name), "Map" === ik || "Set" === ik ? Array.from(kk) : "Arguments" === ik || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ik) ? zk(kk, ek) : void 0
      }
    }

    function zk(kk, ek) {
      (null == ek || ek > kk.length) && (ek = kk.length);
      for (var ik = 0, Dk = new Array(ek); ik < ek; ik++) Dk[ik] = kk[ik];
      return Dk
    }
    var Qk = "file-invalid-type",
      vk = "file-too-large",
      Ek = "file-too-small",
      hk = "too-many-files",
      ak = function(kk) {
        kk = Array.isArray(kk) && 1 === kk.length ? kk[0] : kk;
        var ek = Array.isArray(kk) ? "one of ".concat(kk.join(", ")) : kk;
        return {
          code: Qk,
          message: "File type must be ".concat(ek)
        }
      },
      Wk = function(kk) {
        return {
          code: vk,
          message: "File is larger than ".concat(kk, " ").concat(1 === kk ? "byte" : "bytes")
        }
      },
      tk = function(kk) {
        return {
          code: Ek,
          message: "File is smaller than ".concat(kk, " ").concat(1 === kk ? "byte" : "bytes")
        }
      },
      Xk = {
        code: hk,
        message: "Too many files"
      };

    function Bk(kk, ek) {
      var ik = "application/x-moz-file" === kk.type || (0, sk.c)(kk, ek);
      return [ik, ik ? null : ak(ek)]
    }

    function ck(kk, ek, ik) {
      if (Tk(kk.size))
        if (Tk(ek) && Tk(ik)) {
          if (kk.size > ik) return [!1, Wk(ik)];
          if (kk.size < ek) return [!1, tk(ek)]
        } else {
          if (Tk(ek) && kk.size < ek) return [!1, tk(ek)];
          if (Tk(ik) && kk.size > ik) return [!1, Wk(ik)]
        } return [!0, null]
    }

    function Tk(kk) {
      return void 0 !== kk && null !== kk
    }

    function Zk(kk) {
      return "function" === typeof kk.isPropagationStopped ? kk.isPropagationStopped() : "undefined" !== typeof kk.cancelBubble && kk.cancelBubble
    }

    function Ok(kk) {
      return kk.dataTransfer ? Array.prototype.some.call(kk.dataTransfer.types, (function(kk) {
        return "Files" === kk || "application/x-moz-file" === kk
      })) : !!kk.target && !!kk.target.files
    }

    function gk(kk) {
      kk.preventDefault()
    }

    function Gk() {
      for (var kk = arguments.length, ek = new Array(kk), ik = 0; ik < kk; ik++) ek[ik] = arguments[ik];
      return function(kk) {
        for (var ik = arguments.length, Dk = new Array(ik > 1 ? ik - 1 : 0), fk = 1; fk < ik; fk++) Dk[fk - 1] = arguments[fk];
        return ek.some((function(ek) {
          return !Zk(kk) && ek && ek.apply(void 0, [kk].concat(Dk)), Zk(kk)
        }))
      }
    }

    function Nk(kk) {
      return "audio/*" === kk || "video/*" === kk || "image/*" === kk || "text/*" === kk || /\w+\/[-+.\w]+/g.test(kk)
    }

    function Rk(kk) {
      return /^.*\.[\w]+$/.test(kk)
    }
    var Jk = ["children"],
      ke = ["open"],
      ee = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
      ie = ["refKey", "onChange", "onClick"];

    function De(kk) {
      return function(kk) {
        if (Array.isArray(kk)) return be(kk)
      }(kk) || function(kk) {
        if ("undefined" !== typeof Symbol && null != kk[Symbol.iterator] || null != kk["@@iterator"]) return Array.from(kk)
      }(kk) || Se(kk) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function fe(kk, ek) {
      return function(kk) {
        if (Array.isArray(kk)) return kk
      }(kk) || function(kk, ek) {
        var ik = null == kk ? null : "undefined" !== typeof Symbol && kk[Symbol.iterator] || kk["@@iterator"];
        if (null == ik) return;
        var Dk, fk, Sk = [],
          bk = !0,
          rk = !1;
        try {
          for (ik = ik.call(kk); !(bk = (Dk = ik.next()).done) && (Sk.push(Dk.value), !ek || Sk.length !== ek); bk = !0);
        } catch (Pk) {
          rk = !0, fk = Pk
        } finally {
          try {
            bk || null == ik.return || ik.return()
          } finally {
            if (rk) throw fk
          }
        }
        return Sk
      }(kk, ek) || Se(kk, ek) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Se(kk, ek) {
      if (kk) {
        if ("string" === typeof kk) return be(kk, ek);
        var ik = Object.prototype.toString.call(kk).slice(8, -1);
        return "Object" === ik && kk.constructor && (ik = kk.constructor.name), "Map" === ik || "Set" === ik ? Array.from(kk) : "Arguments" === ik || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ik) ? be(kk, ek) : void 0
      }
    }

    function be(kk, ek) {
      (null == ek || ek > kk.length) && (ek = kk.length);
      for (var ik = 0, Dk = new Array(ek); ik < ek; ik++) Dk[ik] = kk[ik];
      return Dk
    }

    function re(kk, ek) {
      var ik = Object.keys(kk);
      if (Object.getOwnPropertySymbols) {
        var Dk = Object.getOwnPropertySymbols(kk);
        ek && (Dk = Dk.filter((function(ek) {
          return Object.getOwnPropertyDescriptor(kk, ek).enumerable
        }))), ik.push.apply(ik, Dk)
      }
      return ik
    }

    function Pe(kk) {
      for (var ek = 1; ek < arguments.length; ek++) {
        var ik = null != arguments[ek] ? arguments[ek] : {};
        ek % 2 ? re(Object(ik), !0).forEach((function(ek) {
          me(kk, ek, ik[ek])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(kk, Object.getOwnPropertyDescriptors(ik)) : re(Object(ik)).forEach((function(ek) {
          Object.defineProperty(kk, ek, Object.getOwnPropertyDescriptor(ik, ek))
        }))
      }
      return kk
    }

    function me(kk, ek, ik) {
      return ek in kk ? Object.defineProperty(kk, ek, {
        value: ik,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : kk[ek] = ik, kk
    }

    function Me(kk, ek) {
      if (null == kk) return {};
      var ik, Dk, fk = function(kk, ek) {
        if (null == kk) return {};
        var ik, Dk, fk = {},
          Sk = Object.keys(kk);
        for (Dk = 0; Dk < Sk.length; Dk++) ik = Sk[Dk], ek.indexOf(ik) >= 0 || (fk[ik] = kk[ik]);
        return fk
      }(kk, ek);
      if (Object.getOwnPropertySymbols) {
        var Sk = Object.getOwnPropertySymbols(kk);
        for (Dk = 0; Dk < Sk.length; Dk++) ik = Sk[Dk], ek.indexOf(ik) >= 0 || Object.prototype.propertyIsEnumerable.call(kk, ik) && (fk[ik] = kk[ik])
      }
      return fk
    }
    var Ke = (0, Dk.forwardRef)((function(kk, ek) {
      var ik = kk.children,
        fk = Ue(Me(kk, Jk)),
        Sk = fk.open,
        bk = Me(fk, ke);
      return (0, Dk.useImperativeHandle)(ek, (function() {
        return {
          open: Sk
        }
      }), [Sk]), Dk.createElement(Dk.Fragment, null, ik(Pe(Pe({}, bk), {}, {
        open: Sk
      })))
    }));
    Ke.displayName = "Dropzone";
    var xe = {
      disabled: !1,
      getFilesFromEvent: function(kk) {
        return bk(this, void 0, void 0, (function() {
          return rk(this, (function(ek) {
            return nk(kk) && nk(kk.dataTransfer) ? [2, wk(kk.dataTransfer, kk.type)] : function(kk) {
              return nk(kk) && nk(kk.target)
            }(kk) ? [2, Uk(kk)] : Array.isArray(kk) && kk.every((function(kk) {
              return "getFile" in kk && "function" === typeof kk.getFile
            })) ? [2, Hk(kk)] : [2, []]
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
    Ke.defaultProps = xe, Ke.propTypes = {
      children: Sk().func,
      accept: Sk().objectOf(Sk().arrayOf(Sk().string)),
      multiple: Sk().bool,
      preventDropOnDocument: Sk().bool,
      noClick: Sk().bool,
      noKeyboard: Sk().bool,
      noDrag: Sk().bool,
      noDragEventsBubbling: Sk().bool,
      minSize: Sk().number,
      maxSize: Sk().number,
      maxFiles: Sk().number,
      disabled: Sk().bool,
      getFilesFromEvent: Sk().func,
      onFileDialogCancel: Sk().func,
      onFileDialogOpen: Sk().func,
      useFsAccessApi: Sk().bool,
      autoFocus: Sk().bool,
      onDragEnter: Sk().func,
      onDragLeave: Sk().func,
      onDragOver: Sk().func,
      onDrop: Sk().func,
      onDropAccepted: Sk().func,
      onDropRejected: Sk().func,
      onError: Sk().func,
      validator: Sk().func
    };
    var ne = {
      kF: !1,
      isFileDialogActive: !1,
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1,
      acceptedFiles: [],
      fileRejections: []
    };

    function Ue() {
      var kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        ek = Pe(Pe({}, xe), kk),
        ik = ek.accept,
        fk = ek.disabled,
        Sk = ek.getFilesFromEvent,
        bk = ek.maxSize,
        rk = ek.minSize,
        Pk = ek.multiple,
        mk = ek.maxFiles,
        Mk = ek.onDragEnter,
        Kk = ek.onDragLeave,
        xk = ek.onDragOver,
        nk = ek.onDrop,
        Uk = ek.onDropAccepted,
        Hk = ek.onDropRejected,
        wk = ek.onFileDialogCancel,
        lk = ek.onFileDialogOpen,
        pk = ek.useFsAccessApi,
        yk = ek.autoFocus,
        Yk = ek.preventDropOnDocument,
        Lk = ek.noClick,
        Ck = ek.noKeyboard,
        Ak = ek.noDrag,
        jk = ek.noDragEventsBubbling,
        sk = ek.onError,
        Vk = ek.validator,
        Ik = (0, Dk.useMemo)((function() {
          return function(kk) {
            if (Tk(kk)) return Object.entries(kk).reduce((function(kk, ek) {
              var ik = qk(ek, 2),
                Dk = ik[0],
                fk = ik[1];
              return [].concat(dk(kk), [Dk], dk(fk))
            }), []).filter((function(kk) {
              return Nk(kk) || Rk(kk)
            })).join(",")
          }(ik)
        }), [ik]),
        zk = (0, Dk.useMemo)((function() {
          return function(kk) {
            return Tk(kk) ? [{
              description: "Files",
              accept: Object.entries(kk).filter((function(kk) {
                var ek = qk(kk, 2),
                  ik = ek[0],
                  Dk = ek[1],
                  fk = !0;
                return Nk(ik) || (console.warn('Skipped "'.concat(ik, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), fk = !1), Array.isArray(Dk) && Dk.every(Rk) || (console.warn('Skipped "'.concat(ik, '" because an invalid file extension was provided.')), fk = !1), fk
              })).reduce((function(kk, ek) {
                var ik = qk(ek, 2),
                  Dk = ik[0],
                  fk = ik[1];
                return Fk(Fk({}, kk), {}, uk({}, Dk, fk))
              }), {})
            }] : kk
          }(ik)
        }), [ik]),
        Qk = (0, Dk.useMemo)((function() {
          return "function" === typeof lk ? lk : we
        }), [lk]),
        vk = (0, Dk.useMemo)((function() {
          return "function" === typeof wk ? wk : we
        }), [wk]),
        Ek = (0, Dk.useRef)(null),
        hk = (0, Dk.useRef)(null),
        ak = fe((0, Dk.useReducer)(He, ne), 2),
        Wk = ak[0],
        tk = ak[1],
        Jk = Wk.kF,
        ke = Wk.isFileDialogActive,
        Se = (0, Dk.useRef)("undefined" !== typeof window && window.isSecureContext && pk && "showOpenFilePicker" in window),
        be = function() {
          !Se.current && ke && setTimeout((function() {
            hk.current && (hk.current.files.length || (tk({
              type: "closeDialog"
            }), vk()))
          }), 300)
        };
      (0, Dk.useEffect)((function() {
        return window.addEventListener("focus", be, !1),
          function() {
            window.removeEventListener("focus", be, !1)
          }
      }), [hk, ke, vk, Se]);
      var re = (0, Dk.useRef)([]),
        Ke = function(kk) {
          Ek.current && Ek.current.contains(kk.target) || (kk.preventDefault(), re.current = [])
        };
      (0, Dk.useEffect)((function() {
        return Yk && (document.addEventListener("dragover", gk, !1), document.addEventListener("drop", Ke, !1)),
          function() {
            Yk && (document.removeEventListener("dragover", gk), document.removeEventListener("drop", Ke))
          }
      }), [Ek, Yk]), (0, Dk.useEffect)((function() {
        return !fk && yk && Ek.current && Ek.current.focus(),
          function() {}
      }), [Ek, yk, fk]);
      var Ue = (0, Dk.useCallback)((function(kk) {
          sk ? sk(kk) : console.error(kk)
        }), [sk]),
        le = (0, Dk.useCallback)((function(kk) {
          kk.preventDefault(), kk.persist(), qe(kk), re.current = [].concat(De(re.current), [kk.target]), Ok(kk) && Promise.resolve(Sk(kk)).then((function(ek) {
            if (!Zk(kk) || jk) {
              var ik = ek.length,
                Dk = ik > 0 && function(kk) {
                  var ek = kk.files,
                    ik = kk.accept,
                    Dk = kk.minSize,
                    fk = kk.maxSize,
                    Sk = kk.multiple,
                    bk = kk.maxFiles,
                    rk = kk.validator;
                  return !(!Sk && ek.length > 1 || Sk && bk >= 1 && ek.length > bk) && ek.every((function(kk) {
                    var ek = qk(Bk(kk, ik), 1)[0],
                      Sk = qk(ck(kk, Dk, fk), 1)[0],
                      bk = rk ? rk(kk) : null;
                    return ek && Sk && !bk
                  }))
                }({
                  files: ek,
                  accept: Ik,
                  minSize: rk,
                  maxSize: bk,
                  multiple: Pk,
                  maxFiles: mk,
                  validator: Vk
                });
              tk({
                isDragAccept: Dk,
                isDragReject: ik > 0 && !Dk,
                isDragActive: !0,
                type: "setDraggedFiles"
              }), Mk && Mk(kk)
            }
          })).catch((function(kk) {
            return Ue(kk)
          }))
        }), [Sk, Mk, Ue, jk, Ik, rk, bk, Pk, mk, Vk]),
        pe = (0, Dk.useCallback)((function(kk) {
          kk.preventDefault(), kk.persist(), qe(kk);
          var ek = Ok(kk);
          if (ek && kk.dataTransfer) try {
            kk.dataTransfer.dropEffect = "copy"
          } catch (ik) {}
          return ek && xk && xk(kk), !1
        }), [xk, jk]),
        ye = (0, Dk.useCallback)((function(kk) {
          kk.preventDefault(), kk.persist(), qe(kk);
          var ek = re.current.filter((function(kk) {
              return Ek.current && Ek.current.contains(kk)
            })),
            ik = ek.indexOf(kk.target); - 1 !== ik && ek.splice(ik, 1), re.current = ek, ek.length > 0 || (tk({
            type: "setDraggedFiles",
            isDragActive: !1,
            isDragAccept: !1,
            isDragReject: !1
          }), Ok(kk) && Kk && Kk(kk))
        }), [Ek, Kk, jk]),
        Ye = (0, Dk.useCallback)((function(kk, ek) {
          var ik = [],
            Dk = [];
          kk.forEach((function(kk) {
            var ek = fe(Bk(kk, Ik), 2),
              fk = ek[0],
              Sk = ek[1],
              Pk = fe(ck(kk, rk, bk), 2),
              mk = Pk[0],
              Mk = Pk[1],
              Kk = Vk ? Vk(kk) : null;
            if (fk && mk && !Kk) ik.push(kk);
            else {
              var xk = [Sk, Mk];
              Kk && (xk = xk.concat(Kk)), Dk.push({
                file: kk,
                errors: xk.filter((function(kk) {
                  return kk
                }))
              })
            }
          })), (!Pk && ik.length > 1 || Pk && mk >= 1 && ik.length > mk) && (ik.forEach((function(kk) {
            Dk.push({
              file: kk,
              errors: [Xk]
            })
          })), ik.splice(0)), tk({
            acceptedFiles: ik,
            fileRejections: Dk,
            type: "setFiles"
          }), nk && nk(ik, Dk, ek), Dk.length > 0 && Hk && Hk(Dk, ek), ik.length > 0 && Uk && Uk(ik, ek)
        }), [tk, Pk, Ik, rk, bk, mk, nk, Uk, Hk, Vk]),
        Le = (0, Dk.useCallback)((function(kk) {
          kk.preventDefault(), kk.persist(), qe(kk), re.current = [], Ok(kk) && Promise.resolve(Sk(kk)).then((function(ek) {
            Zk(kk) && !jk || Ye(ek, kk)
          })).catch((function(kk) {
            return Ue(kk)
          })), tk({
            type: "reset"
          })
        }), [Sk, Ye, Ue, jk]),
        Ce = (0, Dk.useCallback)((function() {
          if (Se.current) {
            tk({
              type: "openDialog"
            }), Qk();
            var kk = {
              multiple: Pk,
              types: zk
            };
            window.showOpenFilePicker(kk).then((function(kk) {
              return Sk(kk)
            })).then((function(kk) {
              Ye(kk, null), tk({
                type: "closeDialog"
              })
            })).catch((function(kk) {
              var ek;
              (ek = kk) instanceof DOMException && ("AbortError" === ek.name || ek.code === ek.ABORT_ERR) ? (vk(kk), tk({
                type: "closeDialog"
              })) : ! function(kk) {
                return kk instanceof DOMException && ("SecurityError" === kk.name || kk.code === kk.SECURITY_ERR)
              }(kk) ? Ue(kk) : (Se.current = !1, hk.current ? (hk.current.value = null, hk.current.click()) : Ue(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))
            }))
          } else hk.current && (tk({
            type: "openDialog"
          }), Qk(), hk.current.value = null, hk.current.click())
        }), [tk, Qk, vk, pk, Ye, Ue, zk, Pk]),
        Ae = (0, Dk.useCallback)((function(kk) {
          Ek.current && Ek.current.isEqualNode(kk.target) && (" " !== kk.key && "Enter" !== kk.key && 32 !== kk.keyCode && 13 !== kk.keyCode || (kk.preventDefault(), Ce()))
        }), [Ek, Ce]),
        je = (0, Dk.useCallback)((function() {
          tk({
            type: "focus"
          })
        }), []),
        se = (0, Dk.useCallback)((function() {
          tk({
            type: "blur"
          })
        }), []),
        de = (0, Dk.useCallback)((function() {
          Lk || (! function() {
            var kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
            return function(kk) {
              return -1 !== kk.indexOf("MSIE") || -1 !== kk.indexOf("Trident/")
            }(kk) || function(kk) {
              return -1 !== kk.indexOf("Edge/")
            }(kk)
          }() ? Ce() : setTimeout(Ce, 0))
        }), [Lk, Ce]),
        Ve = function(kk) {
          return fk ? null : kk
        },
        Fe = function(kk) {
          return Ck ? null : Ve(kk)
        },
        ue = function(kk) {
          return Ak ? null : Ve(kk)
        },
        qe = function(kk) {
          jk && kk.stopPropagation()
        },
        Ie = (0, Dk.useMemo)((function() {
          return function() {
            var kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              ek = kk.refKey,
              ik = void 0 === ek ? "ref" : ek,
              Dk = kk.role,
              Sk = kk.onKeyDown,
              bk = kk.onFocus,
              rk = kk.onBlur,
              Pk = kk.onClick,
              mk = kk.onDragEnter,
              Mk = kk.onDragOver,
              Kk = kk.onDragLeave,
              xk = kk.onDrop,
              nk = Me(kk, ee);
            return Pe(Pe(me({
              onKeyDown: Fe(Gk(Sk, Ae)),
              onFocus: Fe(Gk(bk, je)),
              onBlur: Fe(Gk(rk, se)),
              onClick: Ve(Gk(Pk, de)),
              onDragEnter: ue(Gk(mk, le)),
              onDragOver: ue(Gk(Mk, pe)),
              onDragLeave: ue(Gk(Kk, ye)),
              onDrop: ue(Gk(xk, Le)),
              role: "string" === typeof Dk && "" !== Dk ? Dk : "presentation"
            }, ik, Ek), fk || Ck ? {} : {
              tabIndex: 0
            }), nk)
          }
        }), [Ek, Ae, je, se, de, le, pe, ye, Le, Ck, Ak, fk]),
        ze = (0, Dk.useCallback)((function(kk) {
          kk.stopPropagation()
        }), []),
        Qe = (0, Dk.useMemo)((function() {
          return function() {
            var kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              ek = kk.refKey,
              ik = void 0 === ek ? "ref" : ek,
              Dk = kk.onChange,
              fk = kk.onClick,
              Sk = Me(kk, ie);
            return Pe(Pe({}, me({
              accept: Ik,
              multiple: Pk,
              type: "file",
              style: {
                display: "none"
              },
              onChange: Ve(Gk(Dk, Le)),
              onClick: Ve(Gk(fk, ze)),
              tabIndex: -1
            }, ik, hk)), Sk)
          }
        }), [hk, ik, Pk, Le, fk]);
      return Pe(Pe({}, Wk), {}, {
        kF: Jk && !fk,
        getRootProps: Ie,
        getInputProps: Qe,
        rootRef: Ek,
        inputRef: hk,
        open: Ve(Ce)
      })
    }

    function He(kk, ek) {
      switch (ek.type) {
        case "focus":
          return Pe(Pe({}, kk), {}, {
            kF: !0
          });
        case "blur":
          return Pe(Pe({}, kk), {}, {
            kF: !1
          });
        case "openDialog":
          return Pe(Pe({}, ne), {}, {
            isFileDialogActive: !0
          });
        case "closeDialog":
          return Pe(Pe({}, kk), {}, {
            isFileDialogActive: !1
          });
        case "setDraggedFiles":
          return Pe(Pe({}, kk), {}, {
            isDragActive: ek.isDragActive,
            isDragAccept: ek.isDragAccept,
            isDragReject: ek.isDragReject
          });
        case "setFiles":
          return Pe(Pe({}, kk), {}, {
            acceptedFiles: ek.acceptedFiles,
            fileRejections: ek.fileRejections
          });
        case "reset":
          return Pe({}, ne);
        default:
          return kk
      }
    }

    function we() {}
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);