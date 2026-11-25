export const id = 109;
export const ids = [109];
export const modules = {
  5141: (uu, Eu) => {
    Eu.e = function(uu, Eu) {
      if (uu && Eu) {
        var ju = Array.isArray(Eu) ? Eu : Eu.split(","),
          su = uu.name || "",
          Uu = (uu.type || "").toLowerCase(),
          Zu = Uu.replace(/\/.*$/, "");
        return ju.some((function(uu) {
          var Eu = uu.trim().toLowerCase();
          return "." === Eu.charAt(0) ? su.toLowerCase().endsWith(Eu) : Eu.endsWith("/*") ? Zu === Eu.replace(/\/.*$/, "") : Uu === Eu
        }))
      }
      return !0
    }
  },
  5120: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => NE
    });
    var su = ju(58),
      Uu = ju(5128),
      Zu = ju.n(Uu);

    function Xu(uu, Eu, ju, su) {
      return new(ju || (ju = Promise))((function(Uu, Zu) {
        function Xu(uu) {
          try {
            qu(su.next(uu))
          } catch (Eu) {
            Zu(Eu)
          }
        }

        function lu(uu) {
          try {
            qu(su.throw(uu))
          } catch (Eu) {
            Zu(Eu)
          }
        }

        function qu(uu) {
          var Eu;
          uu.done ? Uu(uu.value) : (Eu = uu.value, Eu instanceof ju ? Eu : new ju((function(uu) {
            uu(Eu)
          }))).then(Xu, lu)
        }
        qu((su = su.apply(uu, Eu || [])).next())
      }))
    }

    function lu(uu, Eu) {
      var ju, su, Uu, Zu, Xu = {
        label: 0,
        sent: function() {
          if (1 & Uu[0]) throw Uu[1];
          return Uu[1]
        },
        trys: [],
        ops: []
      };
      return Zu = {
        next: lu(0),
        throw: lu(1),
        return: lu(2)
      }, "function" === typeof Symbol && (Zu[Symbol.iterator] = function() {
        return this
      }), Zu;

      function lu(lu) {
        return function(qu) {
          return function(lu) {
            if (ju) throw new TypeError("Generator is already executing.");
            for (; Zu && (Zu = 0, lu[0] && (Xu = 0)), Xu;) try {
              if (ju = 1, su && (Uu = 2 & lu[0] ? su.return : lu[0] ? su.throw || ((Uu = su.return) && Uu.call(su), 0) : su.next) && !(Uu = Uu.call(su, lu[1])).done) return Uu;
              switch (su = 0, Uu && (lu = [2 & lu[0], Uu.value]), lu[0]) {
                case 0:
                case 1:
                  Uu = lu;
                  break;
                case 4:
                  return Xu.label++, {
                    value: lu[1],
                    done: !1
                  };
                case 5:
                  Xu.label++, su = lu[1], lu = [0];
                  continue;
                case 7:
                  lu = Xu.ops.pop(), Xu.trys.pop();
                  continue;
                default:
                  if (!(Uu = (Uu = Xu.trys).length > 0 && Uu[Uu.length - 1]) && (6 === lu[0] || 2 === lu[0])) {
                    Xu = 0;
                    continue
                  }
                  if (3 === lu[0] && (!Uu || lu[1] > Uu[0] && lu[1] < Uu[3])) {
                    Xu.label = lu[1];
                    break
                  }
                  if (6 === lu[0] && Xu.label < Uu[1]) {
                    Xu.label = Uu[1], Uu = lu;
                    break
                  }
                  if (Uu && Xu.label < Uu[2]) {
                    Xu.label = Uu[2], Xu.ops.push(lu);
                    break
                  }
                  Uu[2] && Xu.ops.pop(), Xu.trys.pop();
                  continue
              }
              lu = Eu.call(uu, Xu)
            } catch (qu) {
              lu = [6, qu], su = 0
            } finally {
              ju = Uu = 0
            }
            if (5 & lu[0]) throw lu[1];
            return {
              value: lu[0] ? lu[1] : void 0,
              done: !0
            }
          }([lu, qu])
        }
      }
    }
    Object.create;

    function qu(uu, Eu) {
      var ju = "function" === typeof Symbol && uu[Symbol.iterator];
      if (!ju) return uu;
      var su, Uu, Zu = ju.call(uu),
        Xu = [];
      try {
        for (;
          (void 0 === Eu || Eu-- > 0) && !(su = Zu.next()).done;) Xu.push(su.value)
      } catch (lu) {
        Uu = {
          error: lu
        }
      } finally {
        try {
          su && !su.done && (ju = Zu.return) && ju.call(Zu)
        } finally {
          if (Uu) throw Uu.error
        }
      }
      return Xu
    }

    function fu(uu, Eu, ju) {
      if (ju || 2 === arguments.length)
        for (var su, Uu = 0, Zu = Eu.length; Uu < Zu; Uu++) !su && Uu in Eu || (su || (su = Array.prototype.slice.call(Eu, 0, Uu)), su[Uu] = Eu[Uu]);
      return uu.concat(su || Array.prototype.slice.call(Eu))
    }
    Object.create;
    "function" === typeof SuppressedError && SuppressedError;
    var Cu = new Map([
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
      ["VC", "application/vnd.ms-outlook"]
    ]);

    function bu(uu, Eu) {
      var ju = function(uu) {
        var Eu = uu.name;
        if (Eu && -1 !== Eu.lastIndexOf(".") && !uu.type) {
          var ju = Eu.split(".").pop().toLowerCase(),
            su = Cu.get(ju);
          su && Object.defineProperty(uu, "type", {
            value: su,
            writable: !1,
            configurable: !1,
            enumerable: !0
          })
        }
        return uu
      }(uu);
      if ("string" !== typeof ju.path) {
        var su = uu.webkitRelativePath;
        Object.defineProperty(ju, "path", {
          value: "string" === typeof Eu ? Eu : "string" === typeof su && su.length > 0 ? su : uu.name,
          writable: !1,
          configurable: !1,
          enumerable: !0
        })
      }
      return ju
    }
    var cu = [".DS_Store", "Thumbs.db"];

    function Nu(uu) {
      return "object" === typeof uu && null !== uu
    }

    function Ou(uu) {
      return gu(uu.target.files).map((function(uu) {
        return bu(uu)
      }))
    }

    function Yu(uu) {
      return Xu(this, void 0, void 0, (function() {
        return lu(this, (function(Eu) {
          switch (Eu.label) {
            case 0:
              return [4, Promise.all(uu.map((function(uu) {
                return uu.getFile()
              })))];
            case 1:
              return [2, Eu.sent().map((function(uu) {
                return bu(uu)
              }))]
          }
        }))
      }))
    }

    function hu(uu, Eu) {
      return Xu(this, void 0, void 0, (function() {
        var ju;
        return lu(this, (function(su) {
          switch (su.label) {
            case 0:
              return uu.items ? (ju = gu(uu.items).filter((function(uu) {
                return "file" === uu.kind
              })), "drop" !== Eu ? [2, ju] : [4, Promise.all(ju.map(Mu))]) : [3, 2];
            case 1:
              return [2, Du(eu(su.sent()))];
            case 2:
              return [2, Du(gu(uu.files).map((function(uu) {
                return bu(uu)
              })))]
          }
        }))
      }))
    }

    function Du(uu) {
      return uu.filter((function(uu) {
        return -1 === cu.indexOf(uu.name)
      }))
    }

    function gu(uu) {
      if (null === uu) return [];
      for (var Eu = [], ju = 0; ju < uu.length; ju++) {
        var su = uu[ju];
        Eu.push(su)
      }
      return Eu
    }

    function Mu(uu) {
      if ("function" !== typeof uu.webkitGetAsEntry) return Gu(uu);
      var Eu = uu.webkitGetAsEntry();
      return Eu && Eu.isDirectory ? wu(Eu) : Gu(uu)
    }

    function eu(uu) {
      return uu.reduce((function(uu, Eu) {
        return fu(fu([], qu(uu), !1), qu(Array.isArray(Eu) ? eu(Eu) : [Eu]), !1)
      }), [])
    }

    function Gu(uu) {
      var Eu = uu.getAsFile();
      if (!Eu) return Promise.reject("".concat(uu, " is not a File"));
      var ju = bu(Eu);
      return Promise.resolve(ju)
    }

    function pu(uu) {
      return Xu(this, void 0, void 0, (function() {
        return lu(this, (function(Eu) {
          return [2, uu.isDirectory ? wu(uu) : Ju(uu)]
        }))
      }))
    }

    function wu(uu) {
      var Eu = uu.createReader();
      return new Promise((function(uu, ju) {
        var su = [];
        ! function Uu() {
          var Zu = this;
          Eu.readEntries((function(Eu) {
            return Xu(Zu, void 0, void 0, (function() {
              var Zu, Xu, qu;
              return lu(this, (function(lu) {
                switch (lu.label) {
                  case 0:
                    if (Eu.length) return [3, 5];
                    lu.label = 1;
                  case 1:
                    return lu.trys.push([1, 3, , 4]), [4, Promise.all(su)];
                  case 2:
                    return Zu = lu.sent(), uu(Zu), [3, 4];
                  case 3:
                    return Xu = lu.sent(), ju(Xu), [3, 4];
                  case 4:
                    return [3, 6];
                  case 5:
                    qu = Promise.all(Eu.map(pu)), su.push(qu), Uu(), lu.label = 6;
                  case 6:
                    return [2]
                }
              }))
            }))
          }), (function(uu) {
            ju(uu)
          }))
        }()
      }))
    }

    function Ju(uu) {
      return Xu(this, void 0, void 0, (function() {
        return lu(this, (function(Eu) {
          return [2, new Promise((function(Eu, ju) {
            uu.file((function(ju) {
              var su = bu(ju, uu.fullPath);
              Eu(su)
            }), (function(uu) {
              ju(uu)
            }))
          }))]
        }))
      }))
    }
    var du = ju(5141);

    function au(uu) {
      return function(uu) {
        if (Array.isArray(uu)) return Ku(uu)
      }(uu) || function(uu) {
        if ("undefined" !== typeof Symbol && null != uu[Symbol.iterator] || null != uu["@@iterator"]) return Array.from(uu)
      }(uu) || vu(uu) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Pu(uu, Eu) {
      var ju = Object.keys(uu);
      if (Object.getOwnPropertySymbols) {
        var su = Object.getOwnPropertySymbols(uu);
        Eu && (su = su.filter((function(Eu) {
          return Object.getOwnPropertyDescriptor(uu, Eu).enumerable
        }))), ju.push.apply(ju, su)
      }
      return ju
    }

    function ou(uu) {
      for (var Eu = 1; Eu < arguments.length; Eu++) {
        var ju = null != arguments[Eu] ? arguments[Eu] : {};
        Eu % 2 ? Pu(Object(ju), !0).forEach((function(Eu) {
          ku(uu, Eu, ju[Eu])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(uu, Object.getOwnPropertyDescriptors(ju)) : Pu(Object(ju)).forEach((function(Eu) {
          Object.defineProperty(uu, Eu, Object.getOwnPropertyDescriptor(ju, Eu))
        }))
      }
      return uu
    }

    function ku(uu, Eu, ju) {
      return Eu in uu ? Object.defineProperty(uu, Eu, {
        value: ju,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : uu[Eu] = ju, uu
    }

    function mu(uu, Eu) {
      return function(uu) {
        if (Array.isArray(uu)) return uu
      }(uu) || function(uu, Eu) {
        var ju = null == uu ? null : "undefined" !== typeof Symbol && uu[Symbol.iterator] || uu["@@iterator"];
        if (null == ju) return;
        var su, Uu, Zu = [],
          Xu = !0,
          lu = !1;
        try {
          for (ju = ju.call(uu); !(Xu = (su = ju.next()).done) && (Zu.push(su.value), !Eu || Zu.length !== Eu); Xu = !0);
        } catch (qu) {
          lu = !0, Uu = qu
        } finally {
          try {
            Xu || null == ju.return || ju.return()
          } finally {
            if (lu) throw Uu
          }
        }
        return Zu
      }(uu, Eu) || vu(uu, Eu) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function vu(uu, Eu) {
      if (uu) {
        if ("string" === typeof uu) return Ku(uu, Eu);
        var ju = Object.prototype.toString.call(uu).slice(8, -1);
        return "Object" === ju && uu.constructor && (ju = uu.constructor.name), "Map" === ju || "Set" === ju ? Array.from(uu) : "Arguments" === ju || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ju) ? Ku(uu, Eu) : void 0
      }
    }

    function Ku(uu, Eu) {
      (null == Eu || Eu > uu.length) && (Eu = uu.length);
      for (var ju = 0, su = new Array(Eu); ju < Eu; ju++) su[ju] = uu[ju];
      return su
    }
    var Vu = "file-invalid-type",
      ru = "file-too-large",
      Qu = "file-too-small",
      iu = "too-many-files",
      Wu = function(uu) {
        uu = Array.isArray(uu) && 1 === uu.length ? uu[0] : uu;
        var Eu = Array.isArray(uu) ? "one of ".concat(uu.join(", ")) : uu;
        return {
          code: Vu,
          message: "File type must be ".concat(Eu)
        }
      },
      Su = function(uu) {
        return {
          code: ru,
          message: "File is larger than ".concat(uu, " ").concat(1 === uu ? "byte" : "bytes")
        }
      },
      Iu = function(uu) {
        return {
          code: Qu,
          message: "File is smaller than ".concat(uu, " ").concat(1 === uu ? "byte" : "bytes")
        }
      },
      Fu = {
        code: iu,
        message: "Too many files"
      };

    function Bu(uu, Eu) {
      var ju = "application/x-moz-file" === uu.type || (0, du.e)(uu, Eu);
      return [ju, ju ? null : Wu(Eu)]
    }

    function Lu(uu, Eu, ju) {
      if (tu(uu.size))
        if (tu(Eu) && tu(ju)) {
          if (uu.size > ju) return [!1, Su(ju)];
          if (uu.size < Eu) return [!1, Iu(Eu)]
        } else {
          if (tu(Eu) && uu.size < Eu) return [!1, Iu(Eu)];
          if (tu(ju) && uu.size > ju) return [!1, Su(ju)]
        } return [!0, null]
    }

    function tu(uu) {
      return void 0 !== uu && null !== uu
    }

    function xu(uu) {
      return "function" === typeof uu.isPropagationStopped ? uu.isPropagationStopped() : "undefined" !== typeof uu.cancelBubble && uu.cancelBubble
    }

    function Tu(uu) {
      return uu.dataTransfer ? Array.prototype.some.call(uu.dataTransfer.types, (function(uu) {
        return "Files" === uu || "application/x-moz-file" === uu
      })) : !!uu.target && !!uu.target.files
    }

    function Hu(uu) {
      uu.preventDefault()
    }

    function Au() {
      for (var uu = arguments.length, Eu = new Array(uu), ju = 0; ju < uu; ju++) Eu[ju] = arguments[ju];
      return function(uu) {
        for (var ju = arguments.length, su = new Array(ju > 1 ? ju - 1 : 0), Uu = 1; Uu < ju; Uu++) su[Uu - 1] = arguments[Uu];
        return Eu.some((function(Eu) {
          return !xu(uu) && Eu && Eu.apply(void 0, [uu].concat(su)), xu(uu)
        }))
      }
    }

    function nu(uu) {
      return "audio/*" === uu || "video/*" === uu || "image/*" === uu || "text/*" === uu || /\w+\/[-+.\w]+/g.test(uu)
    }

    function yu(uu) {
      return /^.*\.[\w]+$/.test(uu)
    }
    var zu = ["children"],
      Ru = ["open"],
      uE = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
      EE = ["refKey", "onChange", "onClick"];

    function jE(uu) {
      return function(uu) {
        if (Array.isArray(uu)) return ZE(uu)
      }(uu) || function(uu) {
        if ("undefined" !== typeof Symbol && null != uu[Symbol.iterator] || null != uu["@@iterator"]) return Array.from(uu)
      }(uu) || UE(uu) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function sE(uu, Eu) {
      return function(uu) {
        if (Array.isArray(uu)) return uu
      }(uu) || function(uu, Eu) {
        var ju = null == uu ? null : "undefined" !== typeof Symbol && uu[Symbol.iterator] || uu["@@iterator"];
        if (null == ju) return;
        var su, Uu, Zu = [],
          Xu = !0,
          lu = !1;
        try {
          for (ju = ju.call(uu); !(Xu = (su = ju.next()).done) && (Zu.push(su.value), !Eu || Zu.length !== Eu); Xu = !0);
        } catch (qu) {
          lu = !0, Uu = qu
        } finally {
          try {
            Xu || null == ju.return || ju.return()
          } finally {
            if (lu) throw Uu
          }
        }
        return Zu
      }(uu, Eu) || UE(uu, Eu) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function UE(uu, Eu) {
      if (uu) {
        if ("string" === typeof uu) return ZE(uu, Eu);
        var ju = Object.prototype.toString.call(uu).slice(8, -1);
        return "Object" === ju && uu.constructor && (ju = uu.constructor.name), "Map" === ju || "Set" === ju ? Array.from(uu) : "Arguments" === ju || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ju) ? ZE(uu, Eu) : void 0
      }
    }

    function ZE(uu, Eu) {
      (null == Eu || Eu > uu.length) && (Eu = uu.length);
      for (var ju = 0, su = new Array(Eu); ju < Eu; ju++) su[ju] = uu[ju];
      return su
    }

    function XE(uu, Eu) {
      var ju = Object.keys(uu);
      if (Object.getOwnPropertySymbols) {
        var su = Object.getOwnPropertySymbols(uu);
        Eu && (su = su.filter((function(Eu) {
          return Object.getOwnPropertyDescriptor(uu, Eu).enumerable
        }))), ju.push.apply(ju, su)
      }
      return ju
    }

    function lE(uu) {
      for (var Eu = 1; Eu < arguments.length; Eu++) {
        var ju = null != arguments[Eu] ? arguments[Eu] : {};
        Eu % 2 ? XE(Object(ju), !0).forEach((function(Eu) {
          qE(uu, Eu, ju[Eu])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(uu, Object.getOwnPropertyDescriptors(ju)) : XE(Object(ju)).forEach((function(Eu) {
          Object.defineProperty(uu, Eu, Object.getOwnPropertyDescriptor(ju, Eu))
        }))
      }
      return uu
    }

    function qE(uu, Eu, ju) {
      return Eu in uu ? Object.defineProperty(uu, Eu, {
        value: ju,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : uu[Eu] = ju, uu
    }

    function fE(uu, Eu) {
      if (null == uu) return {};
      var ju, su, Uu = function(uu, Eu) {
        if (null == uu) return {};
        var ju, su, Uu = {},
          Zu = Object.keys(uu);
        for (su = 0; su < Zu.length; su++) ju = Zu[su], Eu.indexOf(ju) >= 0 || (Uu[ju] = uu[ju]);
        return Uu
      }(uu, Eu);
      if (Object.getOwnPropertySymbols) {
        var Zu = Object.getOwnPropertySymbols(uu);
        for (su = 0; su < Zu.length; su++) ju = Zu[su], Eu.indexOf(ju) >= 0 || Object.prototype.propertyIsEnumerable.call(uu, ju) && (Uu[ju] = uu[ju])
      }
      return Uu
    }
    var CE = (0, su.forwardRef)((function(uu, Eu) {
      var ju = uu.children,
        Uu = NE(fE(uu, zu)),
        Zu = Uu.open,
        Xu = fE(Uu, Ru);
      return (0, su.useImperativeHandle)(Eu, (function() {
        return {
          open: Zu
        }
      }), [Zu]), su.createElement(su.Fragment, null, ju(lE(lE({}, Xu), {}, {
        open: Zu
      })))
    }));
    CE.displayName = "Dropzone";
    var bE = {
      disabled: !1,
      getFilesFromEvent: function(uu) {
        return Xu(this, void 0, void 0, (function() {
          return lu(this, (function(Eu) {
            return Nu(uu) && Nu(uu.dataTransfer) ? [2, hu(uu.dataTransfer, uu.type)] : function(uu) {
              return Nu(uu) && Nu(uu.target)
            }(uu) ? [2, Ou(uu)] : Array.isArray(uu) && uu.every((function(uu) {
              return "getFile" in uu && "function" === typeof uu.getFile
            })) ? [2, Yu(uu)] : [2, []]
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
    CE.defaultProps = bE, CE.propTypes = {
      children: Zu().func,
      accept: Zu().objectOf(Zu().arrayOf(Zu().string)),
      multiple: Zu().bool,
      preventDropOnDocument: Zu().bool,
      noClick: Zu().bool,
      noKeyboard: Zu().bool,
      noDrag: Zu().bool,
      noDragEventsBubbling: Zu().bool,
      minSize: Zu().number,
      maxSize: Zu().number,
      maxFiles: Zu().number,
      disabled: Zu().bool,
      getFilesFromEvent: Zu().func,
      onFileDialogCancel: Zu().func,
      onFileDialogOpen: Zu().func,
      useFsAccessApi: Zu().bool,
      autoFocus: Zu().bool,
      onDragEnter: Zu().func,
      onDragLeave: Zu().func,
      onDragOver: Zu().func,
      onDrop: Zu().func,
      onDropAccepted: Zu().func,
      onDropRejected: Zu().func,
      onError: Zu().func,
      validator: Zu().func
    };
    var cE = {
      NK: !1,
      isFileDialogActive: !1,
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1,
      acceptedFiles: [],
      fileRejections: []
    };

    function NE() {
      var uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        Eu = lE(lE({}, bE), uu),
        ju = Eu.accept,
        Uu = Eu.disabled,
        Zu = Eu.getFilesFromEvent,
        Xu = Eu.maxSize,
        lu = Eu.minSize,
        qu = Eu.multiple,
        fu = Eu.maxFiles,
        Cu = Eu.onDragEnter,
        bu = Eu.onDragLeave,
        cu = Eu.onDragOver,
        Nu = Eu.onDrop,
        Ou = Eu.onDropAccepted,
        Yu = Eu.onDropRejected,
        hu = Eu.onFileDialogCancel,
        Du = Eu.onFileDialogOpen,
        gu = Eu.useFsAccessApi,
        Mu = Eu.autoFocus,
        eu = Eu.preventDropOnDocument,
        Gu = Eu.noClick,
        pu = Eu.noKeyboard,
        wu = Eu.noDrag,
        Ju = Eu.noDragEventsBubbling,
        du = Eu.onError,
        Pu = Eu.validator,
        vu = (0, su.useMemo)((function() {
          return function(uu) {
            if (tu(uu)) return Object.entries(uu).reduce((function(uu, Eu) {
              var ju = mu(Eu, 2),
                su = ju[0],
                Uu = ju[1];
              return [].concat(au(uu), [su], au(Uu))
            }), []).filter((function(uu) {
              return nu(uu) || yu(uu)
            })).join(",")
          }(ju)
        }), [ju]),
        Ku = (0, su.useMemo)((function() {
          return function(uu) {
            return tu(uu) ? [{
              description: "Files",
              accept: Object.entries(uu).filter((function(uu) {
                var Eu = mu(uu, 2),
                  ju = Eu[0],
                  su = Eu[1],
                  Uu = !0;
                return nu(ju) || (console.warn('Skipped "'.concat(ju, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), Uu = !1), Array.isArray(su) && su.every(yu) || (console.warn('Skipped "'.concat(ju, '" because an invalid file extension was provided.')), Uu = !1), Uu
              })).reduce((function(uu, Eu) {
                var ju = mu(Eu, 2),
                  su = ju[0],
                  Uu = ju[1];
                return ou(ou({}, uu), {}, ku({}, su, Uu))
              }), {})
            }] : uu
          }(ju)
        }), [ju]),
        Vu = (0, su.useMemo)((function() {
          return "function" === typeof Du ? Du : YE
        }), [Du]),
        ru = (0, su.useMemo)((function() {
          return "function" === typeof hu ? hu : YE
        }), [hu]),
        Qu = (0, su.useRef)(null),
        iu = (0, su.useRef)(null),
        Wu = sE((0, su.useReducer)(OE, cE), 2),
        Su = Wu[0],
        Iu = Wu[1],
        zu = Su.NK,
        Ru = Su.isFileDialogActive,
        UE = (0, su.useRef)("undefined" !== typeof window && window.isSecureContext && gu && "showOpenFilePicker" in window),
        ZE = function() {
          !UE.current && Ru && setTimeout((function() {
            iu.current && (iu.current.files.length || (Iu({
              type: "closeDialog"
            }), ru()))
          }), 300)
        };
      (0, su.useEffect)((function() {
        return window.addEventListener("focus", ZE, !1),
          function() {
            window.removeEventListener("focus", ZE, !1)
          }
      }), [iu, Ru, ru, UE]);
      var XE = (0, su.useRef)([]),
        CE = function(uu) {
          Qu.current && Qu.current.contains(uu.target) || (uu.preventDefault(), XE.current = [])
        };
      (0, su.useEffect)((function() {
        return eu && (document.addEventListener("dragover", Hu, !1), document.addEventListener("drop", CE, !1)),
          function() {
            eu && (document.removeEventListener("dragover", Hu), document.removeEventListener("drop", CE))
          }
      }), [Qu, eu]), (0, su.useEffect)((function() {
        return !Uu && Mu && Qu.current && Qu.current.focus(),
          function() {}
      }), [Qu, Mu, Uu]);
      var NE = (0, su.useCallback)((function(uu) {
          du ? du(uu) : console.error(uu)
        }), [du]),
        hE = (0, su.useCallback)((function(uu) {
          uu.preventDefault(), uu.persist(), kE(uu), XE.current = [].concat(jE(XE.current), [uu.target]), Tu(uu) && Promise.resolve(Zu(uu)).then((function(Eu) {
            if (!xu(uu) || Ju) {
              var ju = Eu.length,
                su = ju > 0 && function(uu) {
                  var Eu = uu.files,
                    ju = uu.accept,
                    su = uu.minSize,
                    Uu = uu.maxSize,
                    Zu = uu.multiple,
                    Xu = uu.maxFiles,
                    lu = uu.validator;
                  return !(!Zu && Eu.length > 1 || Zu && Xu >= 1 && Eu.length > Xu) && Eu.every((function(uu) {
                    var Eu = mu(Bu(uu, ju), 1)[0],
                      Zu = mu(Lu(uu, su, Uu), 1)[0],
                      Xu = lu ? lu(uu) : null;
                    return Eu && Zu && !Xu
                  }))
                }({
                  files: Eu,
                  accept: vu,
                  minSize: lu,
                  maxSize: Xu,
                  multiple: qu,
                  maxFiles: fu,
                  validator: Pu
                });
              Iu({
                isDragAccept: su,
                isDragReject: ju > 0 && !su,
                isDragActive: !0,
                type: "setDraggedFiles"
              }), Cu && Cu(uu)
            }
          })).catch((function(uu) {
            return NE(uu)
          }))
        }), [Zu, Cu, NE, Ju, vu, lu, Xu, qu, fu, Pu]),
        DE = (0, su.useCallback)((function(uu) {
          uu.preventDefault(), uu.persist(), kE(uu);
          var Eu = Tu(uu);
          if (Eu && uu.dataTransfer) try {
            uu.dataTransfer.dropEffect = "copy"
          } catch (ju) {}
          return Eu && cu && cu(uu), !1
        }), [cu, Ju]),
        gE = (0, su.useCallback)((function(uu) {
          uu.preventDefault(), uu.persist(), kE(uu);
          var Eu = XE.current.filter((function(uu) {
              return Qu.current && Qu.current.contains(uu)
            })),
            ju = Eu.indexOf(uu.target); - 1 !== ju && Eu.splice(ju, 1), XE.current = Eu, Eu.length > 0 || (Iu({
            type: "setDraggedFiles",
            isDragActive: !1,
            isDragAccept: !1,
            isDragReject: !1
          }), Tu(uu) && bu && bu(uu))
        }), [Qu, bu, Ju]),
        ME = (0, su.useCallback)((function(uu, Eu) {
          var ju = [],
            su = [];
          uu.forEach((function(uu) {
            var Eu = sE(Bu(uu, vu), 2),
              Uu = Eu[0],
              Zu = Eu[1],
              qu = sE(Lu(uu, lu, Xu), 2),
              fu = qu[0],
              Cu = qu[1],
              bu = Pu ? Pu(uu) : null;
            if (Uu && fu && !bu) ju.push(uu);
            else {
              var cu = [Zu, Cu];
              bu && (cu = cu.concat(bu)), su.push({
                file: uu,
                errors: cu.filter((function(uu) {
                  return uu
                }))
              })
            }
          })), (!qu && ju.length > 1 || qu && fu >= 1 && ju.length > fu) && (ju.forEach((function(uu) {
            su.push({
              file: uu,
              errors: [Fu]
            })
          })), ju.splice(0)), Iu({
            acceptedFiles: ju,
            fileRejections: su,
            type: "setFiles"
          }), Nu && Nu(ju, su, Eu), su.length > 0 && Yu && Yu(su, Eu), ju.length > 0 && Ou && Ou(ju, Eu)
        }), [Iu, qu, vu, lu, Xu, fu, Nu, Ou, Yu, Pu]),
        eE = (0, su.useCallback)((function(uu) {
          uu.preventDefault(), uu.persist(), kE(uu), XE.current = [], Tu(uu) && Promise.resolve(Zu(uu)).then((function(Eu) {
            xu(uu) && !Ju || ME(Eu, uu)
          })).catch((function(uu) {
            return NE(uu)
          })), Iu({
            type: "reset"
          })
        }), [Zu, ME, NE, Ju]),
        GE = (0, su.useCallback)((function() {
          if (UE.current) {
            Iu({
              type: "openDialog"
            }), Vu();
            var uu = {
              multiple: qu,
              types: Ku
            };
            window.showOpenFilePicker(uu).then((function(uu) {
              return Zu(uu)
            })).then((function(uu) {
              ME(uu, null), Iu({
                type: "closeDialog"
              })
            })).catch((function(uu) {
              var Eu;
              (Eu = uu) instanceof DOMException && ("AbortError" === Eu.name || Eu.code === Eu.ABORT_ERR) ? (ru(uu), Iu({
                type: "closeDialog"
              })) : ! function(uu) {
                return uu instanceof DOMException && ("SecurityError" === uu.name || uu.code === uu.SECURITY_ERR)
              }(uu) ? NE(uu) : (UE.current = !1, iu.current ? (iu.current.value = null, iu.current.click()) : NE(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))
            }))
          } else iu.current && (Iu({
            type: "openDialog"
          }), Vu(), iu.current.value = null, iu.current.click())
        }), [Iu, Vu, ru, gu, ME, NE, Ku, qu]),
        pE = (0, su.useCallback)((function(uu) {
          Qu.current && Qu.current.isEqualNode(uu.target) && (" " !== uu.key && "Enter" !== uu.key && 32 !== uu.keyCode && 13 !== uu.keyCode || (uu.preventDefault(), GE()))
        }), [Qu, GE]),
        wE = (0, su.useCallback)((function() {
          Iu({
            type: "focus"
          })
        }), []),
        JE = (0, su.useCallback)((function() {
          Iu({
            type: "blur"
          })
        }), []),
        dE = (0, su.useCallback)((function() {
          Gu || (! function() {
            var uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
            return function(uu) {
              return -1 !== uu.indexOf("MSIE") || -1 !== uu.indexOf("Trident/")
            }(uu) || function(uu) {
              return -1 !== uu.indexOf("Edge/")
            }(uu)
          }() ? GE() : setTimeout(GE, 0))
        }), [Gu, GE]),
        aE = function(uu) {
          return Uu ? null : uu
        },
        PE = function(uu) {
          return pu ? null : aE(uu)
        },
        oE = function(uu) {
          return wu ? null : aE(uu)
        },
        kE = function(uu) {
          Ju && uu.stopPropagation()
        },
        mE = (0, su.useMemo)((function() {
          return function() {
            var uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              Eu = uu.refKey,
              ju = void 0 === Eu ? "ref" : Eu,
              su = uu.role,
              Zu = uu.onKeyDown,
              Xu = uu.onFocus,
              lu = uu.onBlur,
              qu = uu.onClick,
              fu = uu.onDragEnter,
              Cu = uu.onDragOver,
              bu = uu.onDragLeave,
              cu = uu.onDrop,
              Nu = fE(uu, uE);
            return lE(lE(qE({
              onKeyDown: PE(Au(Zu, pE)),
              onFocus: PE(Au(Xu, wE)),
              onBlur: PE(Au(lu, JE)),
              onClick: aE(Au(qu, dE)),
              onDragEnter: oE(Au(fu, hE)),
              onDragOver: oE(Au(Cu, DE)),
              onDragLeave: oE(Au(bu, gE)),
              onDrop: oE(Au(cu, eE)),
              role: "string" === typeof su && "" !== su ? su : "presentation"
            }, ju, Qu), Uu || pu ? {} : {
              tabIndex: 0
            }), Nu)
          }
        }), [Qu, pE, wE, JE, dE, hE, DE, gE, eE, pu, wu, Uu]),
        vE = (0, su.useCallback)((function(uu) {
          uu.stopPropagation()
        }), []),
        KE = (0, su.useMemo)((function() {
          return function() {
            var uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              Eu = uu.refKey,
              ju = void 0 === Eu ? "ref" : Eu,
              su = uu.onChange,
              Uu = uu.onClick,
              Zu = fE(uu, EE);
            return lE(lE({}, qE({
              accept: vu,
              multiple: qu,
              type: "file",
              style: {
                display: "none"
              },
              onChange: aE(Au(su, eE)),
              onClick: aE(Au(Uu, vE)),
              tabIndex: -1
            }, ju, iu)), Zu)
          }
        }), [iu, ju, qu, eE, Uu]);
      return lE(lE({}, Su), {}, {
        NK: zu && !Uu,
        getRootProps: mE,
        getInputProps: KE,
        rootRef: Qu,
        inputRef: iu,
        open: aE(GE)
      })
    }

    function OE(uu, Eu) {
      switch (Eu.type) {
        case "focus":
          return lE(lE({}, uu), {}, {
            NK: !0
          });
        case "blur":
          return lE(lE({}, uu), {}, {
            NK: !1
          });
        case "openDialog":
          return lE(lE({}, cE), {}, {
            isFileDialogActive: !0
          });
        case "closeDialog":
          return lE(lE({}, uu), {}, {
            isFileDialogActive: !1
          });
        case "setDraggedFiles":
          return lE(lE({}, uu), {}, {
            isDragActive: Eu.isDragActive,
            isDragAccept: Eu.isDragAccept,
            isDragReject: Eu.isDragReject
          });
        case "setFiles":
          return lE(lE({}, uu), {}, {
            acceptedFiles: Eu.acceptedFiles,
            fileRejections: Eu.fileRejections
          });
        case "reset":
          return lE({}, cE);
        default:
          return uu
      }
    }

    function YE() {}
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);