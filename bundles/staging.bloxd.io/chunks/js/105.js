export const id = 105;
export const ids = [105];
export const modules = {
  4766: (uu, Ru) => {
    Ru.b = function(uu, Ru) {
      if (uu && Ru) {
        var yu = Array.isArray(Ru) ? Ru : Ru.split(","),
          Eu = uu.name || "",
          Ku = (uu.type || "").toLowerCase(),
          Qu = Ku.replace(/\/.*$/, "");
        return yu.some((function(uu) {
          var Ru = uu.trim().toLowerCase();
          return "." === Ru.charAt(0) ? Eu.toLowerCase().endsWith(Ru) : Ru.endsWith("/*") ? Qu === Ru.replace(/\/.*$/, "") : Ku === Ru
        }))
      }
      return !0
    }
  },
  4740: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => xR
    });
    var Eu = yu(64),
      Ku = yu(4745),
      Qu = yu.n(Ku);

    function mu(uu, Ru, yu, Eu) {
      return new(yu || (yu = Promise))((function(Ku, Qu) {
        function mu(uu) {
          try {
            Nu(Eu.next(uu))
          } catch (Ru) {
            Qu(Ru)
          }
        }

        function Ju(uu) {
          try {
            Nu(Eu.throw(uu))
          } catch (Ru) {
            Qu(Ru)
          }
        }

        function Nu(uu) {
          var Ru;
          uu.done ? Ku(uu.value) : (Ru = uu.value, Ru instanceof yu ? Ru : new yu((function(uu) {
            uu(Ru)
          }))).then(mu, Ju)
        }
        Nu((Eu = Eu.apply(uu, Ru || [])).next())
      }))
    }

    function Ju(uu, Ru) {
      var yu, Eu, Ku, Qu, mu = {
        label: 0,
        sent: function() {
          if (1 & Ku[0]) throw Ku[1];
          return Ku[1]
        },
        trys: [],
        ops: []
      };
      return Qu = {
        next: Ju(0),
        throw: Ju(1),
        return: Ju(2)
      }, "function" === typeof Symbol && (Qu[Symbol.iterator] = function() {
        return this
      }), Qu;

      function Ju(Ju) {
        return function(Nu) {
          return function(Ju) {
            if (yu) throw new TypeError("Generator is already executing.");
            for (; Qu && (Qu = 0, Ju[0] && (mu = 0)), mu;) try {
              if (yu = 1, Eu && (Ku = 2 & Ju[0] ? Eu.return : Ju[0] ? Eu.throw || ((Ku = Eu.return) && Ku.call(Eu), 0) : Eu.next) && !(Ku = Ku.call(Eu, Ju[1])).done) return Ku;
              switch (Eu = 0, Ku && (Ju = [2 & Ju[0], Ku.value]), Ju[0]) {
                case 0:
                case 1:
                  Ku = Ju;
                  break;
                case 4:
                  return mu.label++, {
                    value: Ju[1],
                    done: !1
                  };
                case 5:
                  mu.label++, Eu = Ju[1], Ju = [0];
                  continue;
                case 7:
                  Ju = mu.ops.pop(), mu.trys.pop();
                  continue;
                default:
                  if (!(Ku = (Ku = mu.trys).length > 0 && Ku[Ku.length - 1]) && (6 === Ju[0] || 2 === Ju[0])) {
                    mu = 0;
                    continue
                  }
                  if (3 === Ju[0] && (!Ku || Ju[1] > Ku[0] && Ju[1] < Ku[3])) {
                    mu.label = Ju[1];
                    break
                  }
                  if (6 === Ju[0] && mu.label < Ku[1]) {
                    mu.label = Ku[1], Ku = Ju;
                    break
                  }
                  if (Ku && mu.label < Ku[2]) {
                    mu.label = Ku[2], mu.ops.push(Ju);
                    break
                  }
                  Ku[2] && mu.ops.pop(), mu.trys.pop();
                  continue
              }
              Ju = Ru.call(uu, mu)
            } catch (Nu) {
              Ju = [6, Nu], Eu = 0
            } finally {
              yu = Ku = 0
            }
            if (5 & Ju[0]) throw Ju[1];
            return {
              value: Ju[0] ? Ju[1] : void 0,
              done: !0
            }
          }([Ju, Nu])
        }
      }
    }
    Object.create;

    function Nu(uu, Ru) {
      var yu = "function" === typeof Symbol && uu[Symbol.iterator];
      if (!yu) return uu;
      var Eu, Ku, Qu = yu.call(uu),
        mu = [];
      try {
        for (;
          (void 0 === Ru || Ru-- > 0) && !(Eu = Qu.next()).done;) mu.push(Eu.value)
      } catch (Ju) {
        Ku = {
          error: Ju
        }
      } finally {
        try {
          Eu && !Eu.done && (yu = Qu.return) && yu.call(Qu)
        } finally {
          if (Ku) throw Ku.error
        }
      }
      return mu
    }

    function Xu(uu, Ru, yu) {
      if (yu || 2 === arguments.length)
        for (var Eu, Ku = 0, Qu = Ru.length; Ku < Qu; Ku++) !Eu && Ku in Ru || (Eu || (Eu = Array.prototype.slice.call(Ru, 0, Ku)), Eu[Ku] = Ru[Ku]);
      return uu.concat(Eu || Array.prototype.slice.call(Ru))
    }
    Object.create;
    "function" === typeof SuppressedError && SuppressedError;
    var Vu = new Map([
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
      ["Dm", "application/vnd.ms-outlook"]
    ]);

    function ru(uu, Ru) {
      var yu = function(uu) {
        var Ru = uu.name;
        if (Ru && -1 !== Ru.lastIndexOf(".") && !uu.type) {
          var yu = Ru.split(".").pop().toLowerCase(),
            Eu = Vu.get(yu);
          Eu && Object.defineProperty(uu, "type", {
            value: Eu,
            writable: !1,
            configurable: !1,
            enumerable: !0
          })
        }
        return uu
      }(uu);
      if ("string" !== typeof yu.path) {
        var Eu = uu.webkitRelativePath;
        Object.defineProperty(yu, "path", {
          value: "string" === typeof Ru ? Ru : "string" === typeof Eu && Eu.length > 0 ? Eu : uu.name,
          writable: !1,
          configurable: !1,
          enumerable: !0
        })
      }
      return yu
    }
    var Bu = [".DS_Store", "Thumbs.db"];

    function xu(uu) {
      return "object" === typeof uu && null !== uu
    }

    function Su(uu) {
      return ju(uu.target.files).map((function(uu) {
        return ru(uu)
      }))
    }

    function pu(uu) {
      return mu(this, void 0, void 0, (function() {
        return Ju(this, (function(Ru) {
          switch (Ru.label) {
            case 0:
              return [4, Promise.all(uu.map((function(uu) {
                return uu.getFile()
              })))];
            case 1:
              return [2, Ru.sent().map((function(uu) {
                return ru(uu)
              }))]
          }
        }))
      }))
    }

    function Tu(uu, Ru) {
      return mu(this, void 0, void 0, (function() {
        var yu;
        return Ju(this, (function(Eu) {
          switch (Eu.label) {
            case 0:
              return uu.items ? (yu = ju(uu.items).filter((function(uu) {
                return "file" === uu.kind
              })), "drop" !== Ru ? [2, yu] : [4, Promise.all(yu.map(Hu))]) : [3, 2];
            case 1:
              return [2, Wu(du(Eu.sent()))];
            case 2:
              return [2, Wu(ju(uu.files).map((function(uu) {
                return ru(uu)
              })))]
          }
        }))
      }))
    }

    function Wu(uu) {
      return uu.filter((function(uu) {
        return -1 === Bu.indexOf(uu.name)
      }))
    }

    function ju(uu) {
      if (null === uu) return [];
      for (var Ru = [], yu = 0; yu < uu.length; yu++) {
        var Eu = uu[yu];
        Ru.push(Eu)
      }
      return Ru
    }

    function Hu(uu) {
      if ("function" !== typeof uu.webkitGetAsEntry) return bu(uu);
      var Ru = uu.webkitGetAsEntry();
      return Ru && Ru.isDirectory ? ku(Ru) : bu(uu)
    }

    function du(uu) {
      return uu.reduce((function(uu, Ru) {
        return Xu(Xu([], Nu(uu), !1), Nu(Array.isArray(Ru) ? du(Ru) : [Ru]), !1)
      }), [])
    }

    function bu(uu) {
      var Ru = uu.getAsFile();
      if (!Ru) return Promise.reject("".concat(uu, " is not a File"));
      var yu = ru(Ru);
      return Promise.resolve(yu)
    }

    function Cu(uu) {
      return mu(this, void 0, void 0, (function() {
        return Ju(this, (function(Ru) {
          return [2, uu.isDirectory ? ku(uu) : eu(uu)]
        }))
      }))
    }

    function ku(uu) {
      var Ru = uu.createReader();
      return new Promise((function(uu, yu) {
        var Eu = [];
        ! function Ku() {
          var Qu = this;
          Ru.readEntries((function(Ru) {
            return mu(Qu, void 0, void 0, (function() {
              var Qu, mu, Nu;
              return Ju(this, (function(Ju) {
                switch (Ju.label) {
                  case 0:
                    if (Ru.length) return [3, 5];
                    Ju.label = 1;
                  case 1:
                    return Ju.trys.push([1, 3, , 4]), [4, Promise.all(Eu)];
                  case 2:
                    return Qu = Ju.sent(), uu(Qu), [3, 4];
                  case 3:
                    return mu = Ju.sent(), yu(mu), [3, 4];
                  case 4:
                    return [3, 6];
                  case 5:
                    Nu = Promise.all(Ru.map(Cu)), Eu.push(Nu), Ku(), Ju.label = 6;
                  case 6:
                    return [2]
                }
              }))
            }))
          }), (function(uu) {
            yu(uu)
          }))
        }()
      }))
    }

    function eu(uu) {
      return mu(this, void 0, void 0, (function() {
        return Ju(this, (function(Ru) {
          return [2, new Promise((function(Ru, yu) {
            uu.file((function(yu) {
              var Eu = ru(yu, uu.fullPath);
              Ru(Eu)
            }), (function(uu) {
              yu(uu)
            }))
          }))]
        }))
      }))
    }
    var Au = yu(4766);

    function Du(uu) {
      return function(uu) {
        if (Array.isArray(uu)) return su(uu)
      }(uu) || function(uu) {
        if ("undefined" !== typeof Symbol && null != uu[Symbol.iterator] || null != uu["@@iterator"]) return Array.from(uu)
      }(uu) || nu(uu) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Mu(uu, Ru) {
      var yu = Object.keys(uu);
      if (Object.getOwnPropertySymbols) {
        var Eu = Object.getOwnPropertySymbols(uu);
        Ru && (Eu = Eu.filter((function(Ru) {
          return Object.getOwnPropertyDescriptor(uu, Ru).enumerable
        }))), yu.push.apply(yu, Eu)
      }
      return yu
    }

    function Iu(uu) {
      for (var Ru = 1; Ru < arguments.length; Ru++) {
        var yu = null != arguments[Ru] ? arguments[Ru] : {};
        Ru % 2 ? Mu(Object(yu), !0).forEach((function(Ru) {
          Gu(uu, Ru, yu[Ru])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(uu, Object.getOwnPropertyDescriptors(yu)) : Mu(Object(yu)).forEach((function(Ru) {
          Object.defineProperty(uu, Ru, Object.getOwnPropertyDescriptor(yu, Ru))
        }))
      }
      return uu
    }

    function Gu(uu, Ru, yu) {
      return Ru in uu ? Object.defineProperty(uu, Ru, {
        value: yu,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : uu[Ru] = yu, uu
    }

    function Uu(uu, Ru) {
      return function(uu) {
        if (Array.isArray(uu)) return uu
      }(uu) || function(uu, Ru) {
        var yu = null == uu ? null : "undefined" !== typeof Symbol && uu[Symbol.iterator] || uu["@@iterator"];
        if (null == yu) return;
        var Eu, Ku, Qu = [],
          mu = !0,
          Ju = !1;
        try {
          for (yu = yu.call(uu); !(mu = (Eu = yu.next()).done) && (Qu.push(Eu.value), !Ru || Qu.length !== Ru); mu = !0);
        } catch (Nu) {
          Ju = !0, Ku = Nu
        } finally {
          try {
            mu || null == yu.return || yu.return()
          } finally {
            if (Ju) throw Ku
          }
        }
        return Qu
      }(uu, Ru) || nu(uu, Ru) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function nu(uu, Ru) {
      if (uu) {
        if ("string" === typeof uu) return su(uu, Ru);
        var yu = Object.prototype.toString.call(uu).slice(8, -1);
        return "Object" === yu && uu.constructor && (yu = uu.constructor.name), "Map" === yu || "Set" === yu ? Array.from(uu) : "Arguments" === yu || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(yu) ? su(uu, Ru) : void 0
      }
    }

    function su(uu, Ru) {
      (null == Ru || Ru > uu.length) && (Ru = uu.length);
      for (var yu = 0, Eu = new Array(Ru); yu < Ru; yu++) Eu[yu] = uu[yu];
      return Eu
    }
    var tu = "file-invalid-type",
      lu = "file-too-large",
      gu = "file-too-small",
      cu = "too-many-files",
      Lu = function(uu) {
        uu = Array.isArray(uu) && 1 === uu.length ? uu[0] : uu;
        var Ru = Array.isArray(uu) ? "one of ".concat(uu.join(", ")) : uu;
        return {
          code: tu,
          message: "File type must be ".concat(Ru)
        }
      },
      zu = function(uu) {
        return {
          code: lu,
          message: "File is larger than ".concat(uu, " ").concat(1 === uu ? "byte" : "bytes")
        }
      },
      Fu = function(uu) {
        return {
          code: gu,
          message: "File is smaller than ".concat(uu, " ").concat(1 === uu ? "byte" : "bytes")
        }
      },
      wu = {
        code: cu,
        message: "Too many files"
      };

    function Zu(uu, Ru) {
      var yu = "application/x-moz-file" === uu.type || (0, Au.b)(uu, Ru);
      return [yu, yu ? null : Lu(Ru)]
    }

    function hu(uu, Ru, yu) {
      if (Pu(uu.size))
        if (Pu(Ru) && Pu(yu)) {
          if (uu.size > yu) return [!1, zu(yu)];
          if (uu.size < Ru) return [!1, Fu(Ru)]
        } else {
          if (Pu(Ru) && uu.size < Ru) return [!1, Fu(Ru)];
          if (Pu(yu) && uu.size > yu) return [!1, zu(yu)]
        } return [!0, null]
    }

    function Pu(uu) {
      return void 0 !== uu && null !== uu
    }

    function iu(uu) {
      return "function" === typeof uu.isPropagationStopped ? uu.isPropagationStopped() : "undefined" !== typeof uu.cancelBubble && uu.cancelBubble
    }

    function Yu(uu) {
      return uu.dataTransfer ? Array.prototype.some.call(uu.dataTransfer.types, (function(uu) {
        return "Files" === uu || "application/x-moz-file" === uu
      })) : !!uu.target && !!uu.target.files
    }

    function ou(uu) {
      uu.preventDefault()
    }

    function qu() {
      for (var uu = arguments.length, Ru = new Array(uu), yu = 0; yu < uu; yu++) Ru[yu] = arguments[yu];
      return function(uu) {
        for (var yu = arguments.length, Eu = new Array(yu > 1 ? yu - 1 : 0), Ku = 1; Ku < yu; Ku++) Eu[Ku - 1] = arguments[Ku];
        return Ru.some((function(Ru) {
          return !iu(uu) && Ru && Ru.apply(void 0, [uu].concat(Eu)), iu(uu)
        }))
      }
    }

    function Ou(uu) {
      return "audio/*" === uu || "video/*" === uu || "image/*" === uu || "text/*" === uu || /\w+\/[-+.\w]+/g.test(uu)
    }

    function vu(uu) {
      return /^.*\.[\w]+$/.test(uu)
    }
    var au = ["children"],
      fu = ["open"],
      uR = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
      RR = ["refKey", "onChange", "onClick"];

    function yR(uu) {
      return function(uu) {
        if (Array.isArray(uu)) return QR(uu)
      }(uu) || function(uu) {
        if ("undefined" !== typeof Symbol && null != uu[Symbol.iterator] || null != uu["@@iterator"]) return Array.from(uu)
      }(uu) || KR(uu) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function ER(uu, Ru) {
      return function(uu) {
        if (Array.isArray(uu)) return uu
      }(uu) || function(uu, Ru) {
        var yu = null == uu ? null : "undefined" !== typeof Symbol && uu[Symbol.iterator] || uu["@@iterator"];
        if (null == yu) return;
        var Eu, Ku, Qu = [],
          mu = !0,
          Ju = !1;
        try {
          for (yu = yu.call(uu); !(mu = (Eu = yu.next()).done) && (Qu.push(Eu.value), !Ru || Qu.length !== Ru); mu = !0);
        } catch (Nu) {
          Ju = !0, Ku = Nu
        } finally {
          try {
            mu || null == yu.return || yu.return()
          } finally {
            if (Ju) throw Ku
          }
        }
        return Qu
      }(uu, Ru) || KR(uu, Ru) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function KR(uu, Ru) {
      if (uu) {
        if ("string" === typeof uu) return QR(uu, Ru);
        var yu = Object.prototype.toString.call(uu).slice(8, -1);
        return "Object" === yu && uu.constructor && (yu = uu.constructor.name), "Map" === yu || "Set" === yu ? Array.from(uu) : "Arguments" === yu || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(yu) ? QR(uu, Ru) : void 0
      }
    }

    function QR(uu, Ru) {
      (null == Ru || Ru > uu.length) && (Ru = uu.length);
      for (var yu = 0, Eu = new Array(Ru); yu < Ru; yu++) Eu[yu] = uu[yu];
      return Eu
    }

    function mR(uu, Ru) {
      var yu = Object.keys(uu);
      if (Object.getOwnPropertySymbols) {
        var Eu = Object.getOwnPropertySymbols(uu);
        Ru && (Eu = Eu.filter((function(Ru) {
          return Object.getOwnPropertyDescriptor(uu, Ru).enumerable
        }))), yu.push.apply(yu, Eu)
      }
      return yu
    }

    function JR(uu) {
      for (var Ru = 1; Ru < arguments.length; Ru++) {
        var yu = null != arguments[Ru] ? arguments[Ru] : {};
        Ru % 2 ? mR(Object(yu), !0).forEach((function(Ru) {
          NR(uu, Ru, yu[Ru])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(uu, Object.getOwnPropertyDescriptors(yu)) : mR(Object(yu)).forEach((function(Ru) {
          Object.defineProperty(uu, Ru, Object.getOwnPropertyDescriptor(yu, Ru))
        }))
      }
      return uu
    }

    function NR(uu, Ru, yu) {
      return Ru in uu ? Object.defineProperty(uu, Ru, {
        value: yu,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : uu[Ru] = yu, uu
    }

    function XR(uu, Ru) {
      if (null == uu) return {};
      var yu, Eu, Ku = function(uu, Ru) {
        if (null == uu) return {};
        var yu, Eu, Ku = {},
          Qu = Object.keys(uu);
        for (Eu = 0; Eu < Qu.length; Eu++) yu = Qu[Eu], Ru.indexOf(yu) >= 0 || (Ku[yu] = uu[yu]);
        return Ku
      }(uu, Ru);
      if (Object.getOwnPropertySymbols) {
        var Qu = Object.getOwnPropertySymbols(uu);
        for (Eu = 0; Eu < Qu.length; Eu++) yu = Qu[Eu], Ru.indexOf(yu) >= 0 || Object.prototype.propertyIsEnumerable.call(uu, yu) && (Ku[yu] = uu[yu])
      }
      return Ku
    }
    var VR = (0, Eu.forwardRef)((function(uu, Ru) {
      var yu = uu.children,
        Ku = xR(XR(uu, au)),
        Qu = Ku.open,
        mu = XR(Ku, fu);
      return (0, Eu.useImperativeHandle)(Ru, (function() {
        return {
          open: Qu
        }
      }), [Qu]), Eu.createElement(Eu.Fragment, null, yu(JR(JR({}, mu), {}, {
        open: Qu
      })))
    }));
    VR.displayName = "Dropzone";
    var rR = {
      disabled: !1,
      getFilesFromEvent: function(uu) {
        return mu(this, void 0, void 0, (function() {
          return Ju(this, (function(Ru) {
            return xu(uu) && xu(uu.dataTransfer) ? [2, Tu(uu.dataTransfer, uu.type)] : function(uu) {
              return xu(uu) && xu(uu.target)
            }(uu) ? [2, Su(uu)] : Array.isArray(uu) && uu.every((function(uu) {
              return "getFile" in uu && "function" === typeof uu.getFile
            })) ? [2, pu(uu)] : [2, []]
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
    VR.defaultProps = rR, VR.propTypes = {
      children: Qu().func,
      accept: Qu().objectOf(Qu().arrayOf(Qu().string)),
      multiple: Qu().bool,
      preventDropOnDocument: Qu().bool,
      noClick: Qu().bool,
      noKeyboard: Qu().bool,
      noDrag: Qu().bool,
      noDragEventsBubbling: Qu().bool,
      minSize: Qu().number,
      maxSize: Qu().number,
      maxFiles: Qu().number,
      disabled: Qu().bool,
      getFilesFromEvent: Qu().func,
      onFileDialogCancel: Qu().func,
      onFileDialogOpen: Qu().func,
      useFsAccessApi: Qu().bool,
      autoFocus: Qu().bool,
      onDragEnter: Qu().func,
      onDragLeave: Qu().func,
      onDragOver: Qu().func,
      onDrop: Qu().func,
      onDropAccepted: Qu().func,
      onDropRejected: Qu().func,
      onError: Qu().func,
      validator: Qu().func
    };
    var BR = {
      uD: !1,
      isFileDialogActive: !1,
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1,
      acceptedFiles: [],
      fileRejections: []
    };

    function xR() {
      var uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        Ru = JR(JR({}, rR), uu),
        yu = Ru.accept,
        Ku = Ru.disabled,
        Qu = Ru.getFilesFromEvent,
        mu = Ru.maxSize,
        Ju = Ru.minSize,
        Nu = Ru.multiple,
        Xu = Ru.maxFiles,
        Vu = Ru.onDragEnter,
        ru = Ru.onDragLeave,
        Bu = Ru.onDragOver,
        xu = Ru.onDrop,
        Su = Ru.onDropAccepted,
        pu = Ru.onDropRejected,
        Tu = Ru.onFileDialogCancel,
        Wu = Ru.onFileDialogOpen,
        ju = Ru.useFsAccessApi,
        Hu = Ru.autoFocus,
        du = Ru.preventDropOnDocument,
        bu = Ru.noClick,
        Cu = Ru.noKeyboard,
        ku = Ru.noDrag,
        eu = Ru.noDragEventsBubbling,
        Au = Ru.onError,
        Mu = Ru.validator,
        nu = (0, Eu.useMemo)((function() {
          return function(uu) {
            if (Pu(uu)) return Object.entries(uu).reduce((function(uu, Ru) {
              var yu = Uu(Ru, 2),
                Eu = yu[0],
                Ku = yu[1];
              return [].concat(Du(uu), [Eu], Du(Ku))
            }), []).filter((function(uu) {
              return Ou(uu) || vu(uu)
            })).join(",")
          }(yu)
        }), [yu]),
        su = (0, Eu.useMemo)((function() {
          return function(uu) {
            return Pu(uu) ? [{
              description: "Files",
              accept: Object.entries(uu).filter((function(uu) {
                var Ru = Uu(uu, 2),
                  yu = Ru[0],
                  Eu = Ru[1],
                  Ku = !0;
                return Ou(yu) || (console.warn('Skipped "'.concat(yu, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), Ku = !1), Array.isArray(Eu) && Eu.every(vu) || (console.warn('Skipped "'.concat(yu, '" because an invalid file extension was provided.')), Ku = !1), Ku
              })).reduce((function(uu, Ru) {
                var yu = Uu(Ru, 2),
                  Eu = yu[0],
                  Ku = yu[1];
                return Iu(Iu({}, uu), {}, Gu({}, Eu, Ku))
              }), {})
            }] : uu
          }(yu)
        }), [yu]),
        tu = (0, Eu.useMemo)((function() {
          return "function" === typeof Wu ? Wu : pR
        }), [Wu]),
        lu = (0, Eu.useMemo)((function() {
          return "function" === typeof Tu ? Tu : pR
        }), [Tu]),
        gu = (0, Eu.useRef)(null),
        cu = (0, Eu.useRef)(null),
        Lu = ER((0, Eu.useReducer)(SR, BR), 2),
        zu = Lu[0],
        Fu = Lu[1],
        au = zu.uD,
        fu = zu.isFileDialogActive,
        KR = (0, Eu.useRef)("undefined" !== typeof window && window.isSecureContext && ju && "showOpenFilePicker" in window),
        QR = function() {
          !KR.current && fu && setTimeout((function() {
            cu.current && (cu.current.files.length || (Fu({
              type: "closeDialog"
            }), lu()))
          }), 300)
        };
      (0, Eu.useEffect)((function() {
        return window.addEventListener("focus", QR, !1),
          function() {
            window.removeEventListener("focus", QR, !1)
          }
      }), [cu, fu, lu, KR]);
      var mR = (0, Eu.useRef)([]),
        VR = function(uu) {
          gu.current && gu.current.contains(uu.target) || (uu.preventDefault(), mR.current = [])
        };
      (0, Eu.useEffect)((function() {
        return du && (document.addEventListener("dragover", ou, !1), document.addEventListener("drop", VR, !1)),
          function() {
            du && (document.removeEventListener("dragover", ou), document.removeEventListener("drop", VR))
          }
      }), [gu, du]), (0, Eu.useEffect)((function() {
        return !Ku && Hu && gu.current && gu.current.focus(),
          function() {}
      }), [gu, Hu, Ku]);
      var xR = (0, Eu.useCallback)((function(uu) {
          Au ? Au(uu) : console.error(uu)
        }), [Au]),
        TR = (0, Eu.useCallback)((function(uu) {
          uu.preventDefault(), uu.persist(), GR(uu), mR.current = [].concat(yR(mR.current), [uu.target]), Yu(uu) && Promise.resolve(Qu(uu)).then((function(Ru) {
            if (!iu(uu) || eu) {
              var yu = Ru.length,
                Eu = yu > 0 && function(uu) {
                  var Ru = uu.files,
                    yu = uu.accept,
                    Eu = uu.minSize,
                    Ku = uu.maxSize,
                    Qu = uu.multiple,
                    mu = uu.maxFiles,
                    Ju = uu.validator;
                  return !(!Qu && Ru.length > 1 || Qu && mu >= 1 && Ru.length > mu) && Ru.every((function(uu) {
                    var Ru = Uu(Zu(uu, yu), 1)[0],
                      Qu = Uu(hu(uu, Eu, Ku), 1)[0],
                      mu = Ju ? Ju(uu) : null;
                    return Ru && Qu && !mu
                  }))
                }({
                  files: Ru,
                  accept: nu,
                  minSize: Ju,
                  maxSize: mu,
                  multiple: Nu,
                  maxFiles: Xu,
                  validator: Mu
                });
              Fu({
                isDragAccept: Eu,
                isDragReject: yu > 0 && !Eu,
                isDragActive: !0,
                type: "setDraggedFiles"
              }), Vu && Vu(uu)
            }
          })).catch((function(uu) {
            return xR(uu)
          }))
        }), [Qu, Vu, xR, eu, nu, Ju, mu, Nu, Xu, Mu]),
        WR = (0, Eu.useCallback)((function(uu) {
          uu.preventDefault(), uu.persist(), GR(uu);
          var Ru = Yu(uu);
          if (Ru && uu.dataTransfer) try {
            uu.dataTransfer.dropEffect = "copy"
          } catch (yu) {}
          return Ru && Bu && Bu(uu), !1
        }), [Bu, eu]),
        jR = (0, Eu.useCallback)((function(uu) {
          uu.preventDefault(), uu.persist(), GR(uu);
          var Ru = mR.current.filter((function(uu) {
              return gu.current && gu.current.contains(uu)
            })),
            yu = Ru.indexOf(uu.target); - 1 !== yu && Ru.splice(yu, 1), mR.current = Ru, Ru.length > 0 || (Fu({
            type: "setDraggedFiles",
            isDragActive: !1,
            isDragAccept: !1,
            isDragReject: !1
          }), Yu(uu) && ru && ru(uu))
        }), [gu, ru, eu]),
        HR = (0, Eu.useCallback)((function(uu, Ru) {
          var yu = [],
            Eu = [];
          uu.forEach((function(uu) {
            var Ru = ER(Zu(uu, nu), 2),
              Ku = Ru[0],
              Qu = Ru[1],
              Nu = ER(hu(uu, Ju, mu), 2),
              Xu = Nu[0],
              Vu = Nu[1],
              ru = Mu ? Mu(uu) : null;
            if (Ku && Xu && !ru) yu.push(uu);
            else {
              var Bu = [Qu, Vu];
              ru && (Bu = Bu.concat(ru)), Eu.push({
                file: uu,
                errors: Bu.filter((function(uu) {
                  return uu
                }))
              })
            }
          })), (!Nu && yu.length > 1 || Nu && Xu >= 1 && yu.length > Xu) && (yu.forEach((function(uu) {
            Eu.push({
              file: uu,
              errors: [wu]
            })
          })), yu.splice(0)), Fu({
            acceptedFiles: yu,
            fileRejections: Eu,
            type: "setFiles"
          }), xu && xu(yu, Eu, Ru), Eu.length > 0 && pu && pu(Eu, Ru), yu.length > 0 && Su && Su(yu, Ru)
        }), [Fu, Nu, nu, Ju, mu, Xu, xu, Su, pu, Mu]),
        dR = (0, Eu.useCallback)((function(uu) {
          uu.preventDefault(), uu.persist(), GR(uu), mR.current = [], Yu(uu) && Promise.resolve(Qu(uu)).then((function(Ru) {
            iu(uu) && !eu || HR(Ru, uu)
          })).catch((function(uu) {
            return xR(uu)
          })), Fu({
            type: "reset"
          })
        }), [Qu, HR, xR, eu]),
        bR = (0, Eu.useCallback)((function() {
          if (KR.current) {
            Fu({
              type: "openDialog"
            }), tu();
            var uu = {
              multiple: Nu,
              types: su
            };
            window.showOpenFilePicker(uu).then((function(uu) {
              return Qu(uu)
            })).then((function(uu) {
              HR(uu, null), Fu({
                type: "closeDialog"
              })
            })).catch((function(uu) {
              var Ru;
              (Ru = uu) instanceof DOMException && ("AbortError" === Ru.name || Ru.code === Ru.ABORT_ERR) ? (lu(uu), Fu({
                type: "closeDialog"
              })) : ! function(uu) {
                return uu instanceof DOMException && ("SecurityError" === uu.name || uu.code === uu.SECURITY_ERR)
              }(uu) ? xR(uu) : (KR.current = !1, cu.current ? (cu.current.value = null, cu.current.click()) : xR(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))
            }))
          } else cu.current && (Fu({
            type: "openDialog"
          }), tu(), cu.current.value = null, cu.current.click())
        }), [Fu, tu, lu, ju, HR, xR, su, Nu]),
        CR = (0, Eu.useCallback)((function(uu) {
          gu.current && gu.current.isEqualNode(uu.target) && (" " !== uu.key && "Enter" !== uu.key && 32 !== uu.keyCode && 13 !== uu.keyCode || (uu.preventDefault(), bR()))
        }), [gu, bR]),
        kR = (0, Eu.useCallback)((function() {
          Fu({
            type: "focus"
          })
        }), []),
        eR = (0, Eu.useCallback)((function() {
          Fu({
            type: "blur"
          })
        }), []),
        AR = (0, Eu.useCallback)((function() {
          bu || (! function() {
            var uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
            return function(uu) {
              return -1 !== uu.indexOf("MSIE") || -1 !== uu.indexOf("Trident/")
            }(uu) || function(uu) {
              return -1 !== uu.indexOf("Edge/")
            }(uu)
          }() ? bR() : setTimeout(bR, 0))
        }), [bu, bR]),
        DR = function(uu) {
          return Ku ? null : uu
        },
        MR = function(uu) {
          return Cu ? null : DR(uu)
        },
        IR = function(uu) {
          return ku ? null : DR(uu)
        },
        GR = function(uu) {
          eu && uu.stopPropagation()
        },
        UR = (0, Eu.useMemo)((function() {
          return function() {
            var uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              Ru = uu.refKey,
              yu = void 0 === Ru ? "ref" : Ru,
              Eu = uu.role,
              Qu = uu.onKeyDown,
              mu = uu.onFocus,
              Ju = uu.onBlur,
              Nu = uu.onClick,
              Xu = uu.onDragEnter,
              Vu = uu.onDragOver,
              ru = uu.onDragLeave,
              Bu = uu.onDrop,
              xu = XR(uu, uR);
            return JR(JR(NR({
              onKeyDown: MR(qu(Qu, CR)),
              onFocus: MR(qu(mu, kR)),
              onBlur: MR(qu(Ju, eR)),
              onClick: DR(qu(Nu, AR)),
              onDragEnter: IR(qu(Xu, TR)),
              onDragOver: IR(qu(Vu, WR)),
              onDragLeave: IR(qu(ru, jR)),
              onDrop: IR(qu(Bu, dR)),
              role: "string" === typeof Eu && "" !== Eu ? Eu : "presentation"
            }, yu, gu), Ku || Cu ? {} : {
              tabIndex: 0
            }), xu)
          }
        }), [gu, CR, kR, eR, AR, TR, WR, jR, dR, Cu, ku, Ku]),
        nR = (0, Eu.useCallback)((function(uu) {
          uu.stopPropagation()
        }), []),
        sR = (0, Eu.useMemo)((function() {
          return function() {
            var uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              Ru = uu.refKey,
              yu = void 0 === Ru ? "ref" : Ru,
              Eu = uu.onChange,
              Ku = uu.onClick,
              Qu = XR(uu, RR);
            return JR(JR({}, NR({
              accept: nu,
              multiple: Nu,
              type: "file",
              style: {
                display: "none"
              },
              onChange: DR(qu(Eu, dR)),
              onClick: DR(qu(Ku, nR)),
              tabIndex: -1
            }, yu, cu)), Qu)
          }
        }), [cu, yu, Nu, dR, Ku]);
      return JR(JR({}, zu), {}, {
        uD: au && !Ku,
        getRootProps: UR,
        getInputProps: sR,
        rootRef: gu,
        inputRef: cu,
        open: DR(bR)
      })
    }

    function SR(uu, Ru) {
      switch (Ru.type) {
        case "focus":
          return JR(JR({}, uu), {}, {
            uD: !0
          });
        case "blur":
          return JR(JR({}, uu), {}, {
            uD: !1
          });
        case "openDialog":
          return JR(JR({}, BR), {}, {
            isFileDialogActive: !0
          });
        case "closeDialog":
          return JR(JR({}, uu), {}, {
            isFileDialogActive: !1
          });
        case "setDraggedFiles":
          return JR(JR({}, uu), {}, {
            isDragActive: Ru.isDragActive,
            isDragAccept: Ru.isDragAccept,
            isDragReject: Ru.isDragReject
          });
        case "setFiles":
          return JR(JR({}, uu), {}, {
            acceptedFiles: Ru.acceptedFiles,
            fileRejections: Ru.fileRejections
          });
        case "reset":
          return JR({}, BR);
        default:
          return uu
      }
    }

    function pR() {}
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);