export const id = 106;
export const ids = [106];
export const modules = {
  4815: (qq, Eq) => {
    Eq.c = function(qq, Eq) {
      if (qq && Eq) {
        var gq = Array.isArray(Eq) ? Eq : Eq.split(","),
          Yq = qq.name || "",
          lq = (qq.type || "").toLowerCase(),
          Oq = lq.replace(/\/.*$/, "");
        return gq.some((function(qq) {
          var Eq = qq.trim().toLowerCase();
          return "." === Eq.charAt(0) ? Yq.toLowerCase().endsWith(Eq) : Eq.endsWith("/*") ? Oq === Eq.replace(/\/.*$/, "") : lq === Eq
        }))
      }
      return !0
    }
  },
  4792: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => NE
    });
    var Yq = gq(57),
      lq = gq(4800),
      Oq = gq.n(lq);

    function mq(qq, Eq, gq, Yq) {
      return new(gq || (gq = Promise))((function(lq, Oq) {
        function mq(qq) {
          try {
            Aq(Yq.next(qq))
          } catch (Eq) {
            Oq(Eq)
          }
        }

        function xq(qq) {
          try {
            Aq(Yq.throw(qq))
          } catch (Eq) {
            Oq(Eq)
          }
        }

        function Aq(qq) {
          var Eq;
          qq.done ? lq(qq.value) : (Eq = qq.value, Eq instanceof gq ? Eq : new gq((function(qq) {
            qq(Eq)
          }))).then(mq, xq)
        }
        Aq((Yq = Yq.apply(qq, Eq || [])).next())
      }))
    }

    function xq(qq, Eq) {
      var gq, Yq, lq, Oq, mq = {
        label: 0,
        sent: function() {
          if (1 & lq[0]) throw lq[1];
          return lq[1]
        },
        trys: [],
        ops: []
      };
      return Oq = {
        next: xq(0),
        throw: xq(1),
        return: xq(2)
      }, "function" === typeof Symbol && (Oq[Symbol.iterator] = function() {
        return this
      }), Oq;

      function xq(xq) {
        return function(Aq) {
          return function(xq) {
            if (gq) throw new TypeError("Generator is already executing.");
            for (; Oq && (Oq = 0, xq[0] && (mq = 0)), mq;) try {
              if (gq = 1, Yq && (lq = 2 & xq[0] ? Yq.return : xq[0] ? Yq.throw || ((lq = Yq.return) && lq.call(Yq), 0) : Yq.next) && !(lq = lq.call(Yq, xq[1])).done) return lq;
              switch (Yq = 0, lq && (xq = [2 & xq[0], lq.value]), xq[0]) {
                case 0:
                case 1:
                  lq = xq;
                  break;
                case 4:
                  return mq.label++, {
                    value: xq[1],
                    done: !1
                  };
                case 5:
                  mq.label++, Yq = xq[1], xq = [0];
                  continue;
                case 7:
                  xq = mq.ops.pop(), mq.trys.pop();
                  continue;
                default:
                  if (!(lq = (lq = mq.trys).length > 0 && lq[lq.length - 1]) && (6 === xq[0] || 2 === xq[0])) {
                    mq = 0;
                    continue
                  }
                  if (3 === xq[0] && (!lq || xq[1] > lq[0] && xq[1] < lq[3])) {
                    mq.label = xq[1];
                    break
                  }
                  if (6 === xq[0] && mq.label < lq[1]) {
                    mq.label = lq[1], lq = xq;
                    break
                  }
                  if (lq && mq.label < lq[2]) {
                    mq.label = lq[2], mq.ops.push(xq);
                    break
                  }
                  lq[2] && mq.ops.pop(), mq.trys.pop();
                  continue
              }
              xq = Eq.call(qq, mq)
            } catch (Aq) {
              xq = [6, Aq], Yq = 0
            } finally {
              gq = lq = 0
            }
            if (5 & xq[0]) throw xq[1];
            return {
              value: xq[0] ? xq[1] : void 0,
              done: !0
            }
          }([xq, Aq])
        }
      }
    }
    Object.create;

    function Aq(qq, Eq) {
      var gq = "function" === typeof Symbol && qq[Symbol.iterator];
      if (!gq) return qq;
      var Yq, lq, Oq = gq.call(qq),
        mq = [];
      try {
        for (;
          (void 0 === Eq || Eq-- > 0) && !(Yq = Oq.next()).done;) mq.push(Yq.value)
      } catch (xq) {
        lq = {
          error: xq
        }
      } finally {
        try {
          Yq && !Yq.done && (gq = Oq.return) && gq.call(Oq)
        } finally {
          if (lq) throw lq.error
        }
      }
      return mq
    }

    function cq(qq, Eq, gq) {
      if (gq || 2 === arguments.length)
        for (var Yq, lq = 0, Oq = Eq.length; lq < Oq; lq++) !Yq && lq in Eq || (Yq || (Yq = Array.prototype.slice.call(Eq, 0, lq)), Yq[lq] = Eq[lq]);
      return qq.concat(Yq || Array.prototype.slice.call(Eq))
    }
    Object.create;
    "function" === typeof SuppressedError && SuppressedError;
    var uq = new Map([
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
      ["Hc", "application/vnd.ms-outlook"]
    ]);

    function Bq(qq, Eq) {
      var gq = function(qq) {
        var Eq = qq.name;
        if (Eq && -1 !== Eq.lastIndexOf(".") && !qq.type) {
          var gq = Eq.split(".").pop().toLowerCase(),
            Yq = uq.get(gq);
          Yq && Object.defineProperty(qq, "type", {
            value: Yq,
            writable: !1,
            configurable: !1,
            enumerable: !0
          })
        }
        return qq
      }(qq);
      if ("string" !== typeof gq.path) {
        var Yq = qq.webkitRelativePath;
        Object.defineProperty(gq, "path", {
          value: "string" === typeof Eq ? Eq : "string" === typeof Yq && Yq.length > 0 ? Yq : qq.name,
          writable: !1,
          configurable: !1,
          enumerable: !0
        })
      }
      return gq
    }
    var Wq = [".DS_Store", "Thumbs.db"];

    function Nq(qq) {
      return "object" === typeof qq && null !== qq
    }

    function aq(qq) {
      return Hq(qq.target.files).map((function(qq) {
        return Bq(qq)
      }))
    }

    function Vq(qq) {
      return mq(this, void 0, void 0, (function() {
        return xq(this, (function(Eq) {
          switch (Eq.label) {
            case 0:
              return [4, Promise.all(qq.map((function(qq) {
                return qq.getFile()
              })))];
            case 1:
              return [2, Eq.sent().map((function(qq) {
                return Bq(qq)
              }))]
          }
        }))
      }))
    }

    function dq(qq, Eq) {
      return mq(this, void 0, void 0, (function() {
        var gq;
        return xq(this, (function(Yq) {
          switch (Yq.label) {
            case 0:
              return qq.items ? (gq = Hq(qq.items).filter((function(qq) {
                return "file" === qq.kind
              })), "drop" !== Eq ? [2, gq] : [4, Promise.all(gq.map(oq))]) : [3, 2];
            case 1:
              return [2, jq(Pq(Yq.sent()))];
            case 2:
              return [2, jq(Hq(qq.files).map((function(qq) {
                return Bq(qq)
              })))]
          }
        }))
      }))
    }

    function jq(qq) {
      return qq.filter((function(qq) {
        return -1 === Wq.indexOf(qq.name)
      }))
    }

    function Hq(qq) {
      if (null === qq) return [];
      for (var Eq = [], gq = 0; gq < qq.length; gq++) {
        var Yq = qq[gq];
        Eq.push(Yq)
      }
      return Eq
    }

    function oq(qq) {
      if ("function" !== typeof qq.webkitGetAsEntry) return Qq(qq);
      var Eq = qq.webkitGetAsEntry();
      return Eq && Eq.isDirectory ? tq(Eq) : Qq(qq)
    }

    function Pq(qq) {
      return qq.reduce((function(qq, Eq) {
        return cq(cq([], Aq(qq), !1), Aq(Array.isArray(Eq) ? Pq(Eq) : [Eq]), !1)
      }), [])
    }

    function Qq(qq) {
      var Eq = qq.getAsFile();
      if (!Eq) return Promise.reject("".concat(qq, " is not a File"));
      var gq = Bq(Eq);
      return Promise.resolve(gq)
    }

    function yq(qq) {
      return mq(this, void 0, void 0, (function() {
        return xq(this, (function(Eq) {
          return [2, qq.isDirectory ? tq(qq) : rq(qq)]
        }))
      }))
    }

    function tq(qq) {
      var Eq = qq.createReader();
      return new Promise((function(qq, gq) {
        var Yq = [];
        ! function lq() {
          var Oq = this;
          Eq.readEntries((function(Eq) {
            return mq(Oq, void 0, void 0, (function() {
              var Oq, mq, Aq;
              return xq(this, (function(xq) {
                switch (xq.label) {
                  case 0:
                    if (Eq.length) return [3, 5];
                    xq.label = 1;
                  case 1:
                    return xq.trys.push([1, 3, , 4]), [4, Promise.all(Yq)];
                  case 2:
                    return Oq = xq.sent(), qq(Oq), [3, 4];
                  case 3:
                    return mq = xq.sent(), gq(mq), [3, 4];
                  case 4:
                    return [3, 6];
                  case 5:
                    Aq = Promise.all(Eq.map(yq)), Yq.push(Aq), lq(), xq.label = 6;
                  case 6:
                    return [2]
                }
              }))
            }))
          }), (function(qq) {
            gq(qq)
          }))
        }()
      }))
    }

    function rq(qq) {
      return mq(this, void 0, void 0, (function() {
        return xq(this, (function(Eq) {
          return [2, new Promise((function(Eq, gq) {
            qq.file((function(gq) {
              var Yq = Bq(gq, qq.fullPath);
              Eq(Yq)
            }), (function(qq) {
              gq(qq)
            }))
          }))]
        }))
      }))
    }
    var vq = gq(4815);

    function hq(qq) {
      return function(qq) {
        if (Array.isArray(qq)) return Mq(qq)
      }(qq) || function(qq) {
        if ("undefined" !== typeof Symbol && null != qq[Symbol.iterator] || null != qq["@@iterator"]) return Array.from(qq)
      }(qq) || fq(qq) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function nq(qq, Eq) {
      var gq = Object.keys(qq);
      if (Object.getOwnPropertySymbols) {
        var Yq = Object.getOwnPropertySymbols(qq);
        Eq && (Yq = Yq.filter((function(Eq) {
          return Object.getOwnPropertyDescriptor(qq, Eq).enumerable
        }))), gq.push.apply(gq, Yq)
      }
      return gq
    }

    function bq(qq) {
      for (var Eq = 1; Eq < arguments.length; Eq++) {
        var gq = null != arguments[Eq] ? arguments[Eq] : {};
        Eq % 2 ? nq(Object(gq), !0).forEach((function(Eq) {
          iq(qq, Eq, gq[Eq])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(qq, Object.getOwnPropertyDescriptors(gq)) : nq(Object(gq)).forEach((function(Eq) {
          Object.defineProperty(qq, Eq, Object.getOwnPropertyDescriptor(gq, Eq))
        }))
      }
      return qq
    }

    function iq(qq, Eq, gq) {
      return Eq in qq ? Object.defineProperty(qq, Eq, {
        value: gq,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : qq[Eq] = gq, qq
    }

    function Zq(qq, Eq) {
      return function(qq) {
        if (Array.isArray(qq)) return qq
      }(qq) || function(qq, Eq) {
        var gq = null == qq ? null : "undefined" !== typeof Symbol && qq[Symbol.iterator] || qq["@@iterator"];
        if (null == gq) return;
        var Yq, lq, Oq = [],
          mq = !0,
          xq = !1;
        try {
          for (gq = gq.call(qq); !(mq = (Yq = gq.next()).done) && (Oq.push(Yq.value), !Eq || Oq.length !== Eq); mq = !0);
        } catch (Aq) {
          xq = !0, lq = Aq
        } finally {
          try {
            mq || null == gq.return || gq.return()
          } finally {
            if (xq) throw lq
          }
        }
        return Oq
      }(qq, Eq) || fq(qq, Eq) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function fq(qq, Eq) {
      if (qq) {
        if ("string" === typeof qq) return Mq(qq, Eq);
        var gq = Object.prototype.toString.call(qq).slice(8, -1);
        return "Object" === gq && qq.constructor && (gq = qq.constructor.name), "Map" === gq || "Set" === gq ? Array.from(qq) : "Arguments" === gq || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gq) ? Mq(qq, Eq) : void 0
      }
    }

    function Mq(qq, Eq) {
      (null == Eq || Eq > qq.length) && (Eq = qq.length);
      for (var gq = 0, Yq = new Array(Eq); gq < Eq; gq++) Yq[gq] = qq[gq];
      return Yq
    }
    var Tq = "file-invalid-type",
      zq = "file-too-large",
      Sq = "file-too-small",
      pq = "too-many-files",
      Gq = function(qq) {
        qq = Array.isArray(qq) && 1 === qq.length ? qq[0] : qq;
        var Eq = Array.isArray(qq) ? "one of ".concat(qq.join(", ")) : qq;
        return {
          code: Tq,
          message: "File type must be ".concat(Eq)
        }
      },
      Lq = function(qq) {
        return {
          code: zq,
          message: "File is larger than ".concat(qq, " ").concat(1 === qq ? "byte" : "bytes")
        }
      },
      Jq = function(qq) {
        return {
          code: Sq,
          message: "File is smaller than ".concat(qq, " ").concat(1 === qq ? "byte" : "bytes")
        }
      },
      kq = {
        code: pq,
        message: "Too many files"
      };

    function Rq(qq, Eq) {
      var gq = "application/x-moz-file" === qq.type || (0, vq.c)(qq, Eq);
      return [gq, gq ? null : Gq(Eq)]
    }

    function Uq(qq, Eq, gq) {
      if (Fq(qq.size))
        if (Fq(Eq) && Fq(gq)) {
          if (qq.size > gq) return [!1, Lq(gq)];
          if (qq.size < Eq) return [!1, Jq(Eq)]
        } else {
          if (Fq(Eq) && qq.size < Eq) return [!1, Jq(Eq)];
          if (Fq(gq) && qq.size > gq) return [!1, Lq(gq)]
        } return [!0, null]
    }

    function Fq(qq) {
      return void 0 !== qq && null !== qq
    }

    function sq(qq) {
      return "function" === typeof qq.isPropagationStopped ? qq.isPropagationStopped() : "undefined" !== typeof qq.cancelBubble && qq.cancelBubble
    }

    function Xq(qq) {
      return qq.dataTransfer ? Array.prototype.some.call(qq.dataTransfer.types, (function(qq) {
        return "Files" === qq || "application/x-moz-file" === qq
      })) : !!qq.target && !!qq.target.files
    }

    function wq(qq) {
      qq.preventDefault()
    }

    function Kq() {
      for (var qq = arguments.length, Eq = new Array(qq), gq = 0; gq < qq; gq++) Eq[gq] = arguments[gq];
      return function(qq) {
        for (var gq = arguments.length, Yq = new Array(gq > 1 ? gq - 1 : 0), lq = 1; lq < gq; lq++) Yq[lq - 1] = arguments[lq];
        return Eq.some((function(Eq) {
          return !sq(qq) && Eq && Eq.apply(void 0, [qq].concat(Yq)), sq(qq)
        }))
      }
    }

    function Cq(qq) {
      return "audio/*" === qq || "video/*" === qq || "image/*" === qq || "text/*" === qq || /\w+\/[-+.\w]+/g.test(qq)
    }

    function Iq(qq) {
      return /^.*\.[\w]+$/.test(qq)
    }
    var eq = ["children"],
      Dq = ["open"],
      qE = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
      EE = ["refKey", "onChange", "onClick"];

    function gE(qq) {
      return function(qq) {
        if (Array.isArray(qq)) return OE(qq)
      }(qq) || function(qq) {
        if ("undefined" !== typeof Symbol && null != qq[Symbol.iterator] || null != qq["@@iterator"]) return Array.from(qq)
      }(qq) || lE(qq) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function YE(qq, Eq) {
      return function(qq) {
        if (Array.isArray(qq)) return qq
      }(qq) || function(qq, Eq) {
        var gq = null == qq ? null : "undefined" !== typeof Symbol && qq[Symbol.iterator] || qq["@@iterator"];
        if (null == gq) return;
        var Yq, lq, Oq = [],
          mq = !0,
          xq = !1;
        try {
          for (gq = gq.call(qq); !(mq = (Yq = gq.next()).done) && (Oq.push(Yq.value), !Eq || Oq.length !== Eq); mq = !0);
        } catch (Aq) {
          xq = !0, lq = Aq
        } finally {
          try {
            mq || null == gq.return || gq.return()
          } finally {
            if (xq) throw lq
          }
        }
        return Oq
      }(qq, Eq) || lE(qq, Eq) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function lE(qq, Eq) {
      if (qq) {
        if ("string" === typeof qq) return OE(qq, Eq);
        var gq = Object.prototype.toString.call(qq).slice(8, -1);
        return "Object" === gq && qq.constructor && (gq = qq.constructor.name), "Map" === gq || "Set" === gq ? Array.from(qq) : "Arguments" === gq || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gq) ? OE(qq, Eq) : void 0
      }
    }

    function OE(qq, Eq) {
      (null == Eq || Eq > qq.length) && (Eq = qq.length);
      for (var gq = 0, Yq = new Array(Eq); gq < Eq; gq++) Yq[gq] = qq[gq];
      return Yq
    }

    function mE(qq, Eq) {
      var gq = Object.keys(qq);
      if (Object.getOwnPropertySymbols) {
        var Yq = Object.getOwnPropertySymbols(qq);
        Eq && (Yq = Yq.filter((function(Eq) {
          return Object.getOwnPropertyDescriptor(qq, Eq).enumerable
        }))), gq.push.apply(gq, Yq)
      }
      return gq
    }

    function xE(qq) {
      for (var Eq = 1; Eq < arguments.length; Eq++) {
        var gq = null != arguments[Eq] ? arguments[Eq] : {};
        Eq % 2 ? mE(Object(gq), !0).forEach((function(Eq) {
          AE(qq, Eq, gq[Eq])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(qq, Object.getOwnPropertyDescriptors(gq)) : mE(Object(gq)).forEach((function(Eq) {
          Object.defineProperty(qq, Eq, Object.getOwnPropertyDescriptor(gq, Eq))
        }))
      }
      return qq
    }

    function AE(qq, Eq, gq) {
      return Eq in qq ? Object.defineProperty(qq, Eq, {
        value: gq,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : qq[Eq] = gq, qq
    }

    function cE(qq, Eq) {
      if (null == qq) return {};
      var gq, Yq, lq = function(qq, Eq) {
        if (null == qq) return {};
        var gq, Yq, lq = {},
          Oq = Object.keys(qq);
        for (Yq = 0; Yq < Oq.length; Yq++) gq = Oq[Yq], Eq.indexOf(gq) >= 0 || (lq[gq] = qq[gq]);
        return lq
      }(qq, Eq);
      if (Object.getOwnPropertySymbols) {
        var Oq = Object.getOwnPropertySymbols(qq);
        for (Yq = 0; Yq < Oq.length; Yq++) gq = Oq[Yq], Eq.indexOf(gq) >= 0 || Object.prototype.propertyIsEnumerable.call(qq, gq) && (lq[gq] = qq[gq])
      }
      return lq
    }
    var uE = (0, Yq.forwardRef)((function(qq, Eq) {
      var gq = qq.children,
        lq = NE(cE(qq, eq)),
        Oq = lq.open,
        mq = cE(lq, Dq);
      return (0, Yq.useImperativeHandle)(Eq, (function() {
        return {
          open: Oq
        }
      }), [Oq]), Yq.createElement(Yq.Fragment, null, gq(xE(xE({}, mq), {}, {
        open: Oq
      })))
    }));
    uE.displayName = "Dropzone";
    var BE = {
      disabled: !1,
      getFilesFromEvent: function(qq) {
        return mq(this, void 0, void 0, (function() {
          return xq(this, (function(Eq) {
            return Nq(qq) && Nq(qq.dataTransfer) ? [2, dq(qq.dataTransfer, qq.type)] : function(qq) {
              return Nq(qq) && Nq(qq.target)
            }(qq) ? [2, aq(qq)] : Array.isArray(qq) && qq.every((function(qq) {
              return "getFile" in qq && "function" === typeof qq.getFile
            })) ? [2, Vq(qq)] : [2, []]
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
    uE.defaultProps = BE, uE.propTypes = {
      children: Oq().func,
      accept: Oq().objectOf(Oq().arrayOf(Oq().string)),
      multiple: Oq().bool,
      preventDropOnDocument: Oq().bool,
      noClick: Oq().bool,
      noKeyboard: Oq().bool,
      noDrag: Oq().bool,
      noDragEventsBubbling: Oq().bool,
      minSize: Oq().number,
      maxSize: Oq().number,
      maxFiles: Oq().number,
      disabled: Oq().bool,
      getFilesFromEvent: Oq().func,
      onFileDialogCancel: Oq().func,
      onFileDialogOpen: Oq().func,
      useFsAccessApi: Oq().bool,
      autoFocus: Oq().bool,
      onDragEnter: Oq().func,
      onDragLeave: Oq().func,
      onDragOver: Oq().func,
      onDrop: Oq().func,
      onDropAccepted: Oq().func,
      onDropRejected: Oq().func,
      onError: Oq().func,
      validator: Oq().func
    };
    var WE = {
      aJ: !1,
      isFileDialogActive: !1,
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1,
      acceptedFiles: [],
      fileRejections: []
    };

    function NE() {
      var qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        Eq = xE(xE({}, BE), qq),
        gq = Eq.accept,
        lq = Eq.disabled,
        Oq = Eq.getFilesFromEvent,
        mq = Eq.maxSize,
        xq = Eq.minSize,
        Aq = Eq.multiple,
        cq = Eq.maxFiles,
        uq = Eq.onDragEnter,
        Bq = Eq.onDragLeave,
        Wq = Eq.onDragOver,
        Nq = Eq.onDrop,
        aq = Eq.onDropAccepted,
        Vq = Eq.onDropRejected,
        dq = Eq.onFileDialogCancel,
        jq = Eq.onFileDialogOpen,
        Hq = Eq.useFsAccessApi,
        oq = Eq.autoFocus,
        Pq = Eq.preventDropOnDocument,
        Qq = Eq.noClick,
        yq = Eq.noKeyboard,
        tq = Eq.noDrag,
        rq = Eq.noDragEventsBubbling,
        vq = Eq.onError,
        nq = Eq.validator,
        fq = (0, Yq.useMemo)((function() {
          return function(qq) {
            if (Fq(qq)) return Object.entries(qq).reduce((function(qq, Eq) {
              var gq = Zq(Eq, 2),
                Yq = gq[0],
                lq = gq[1];
              return [].concat(hq(qq), [Yq], hq(lq))
            }), []).filter((function(qq) {
              return Cq(qq) || Iq(qq)
            })).join(",")
          }(gq)
        }), [gq]),
        Mq = (0, Yq.useMemo)((function() {
          return function(qq) {
            return Fq(qq) ? [{
              description: "Files",
              accept: Object.entries(qq).filter((function(qq) {
                var Eq = Zq(qq, 2),
                  gq = Eq[0],
                  Yq = Eq[1],
                  lq = !0;
                return Cq(gq) || (console.warn('Skipped "'.concat(gq, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), lq = !1), Array.isArray(Yq) && Yq.every(Iq) || (console.warn('Skipped "'.concat(gq, '" because an invalid file extension was provided.')), lq = !1), lq
              })).reduce((function(qq, Eq) {
                var gq = Zq(Eq, 2),
                  Yq = gq[0],
                  lq = gq[1];
                return bq(bq({}, qq), {}, iq({}, Yq, lq))
              }), {})
            }] : qq
          }(gq)
        }), [gq]),
        Tq = (0, Yq.useMemo)((function() {
          return "function" === typeof jq ? jq : VE
        }), [jq]),
        zq = (0, Yq.useMemo)((function() {
          return "function" === typeof dq ? dq : VE
        }), [dq]),
        Sq = (0, Yq.useRef)(null),
        pq = (0, Yq.useRef)(null),
        Gq = YE((0, Yq.useReducer)(aE, WE), 2),
        Lq = Gq[0],
        Jq = Gq[1],
        eq = Lq.aJ,
        Dq = Lq.isFileDialogActive,
        lE = (0, Yq.useRef)("undefined" !== typeof window && window.isSecureContext && Hq && "showOpenFilePicker" in window),
        OE = function() {
          !lE.current && Dq && setTimeout((function() {
            pq.current && (pq.current.files.length || (Jq({
              type: "closeDialog"
            }), zq()))
          }), 300)
        };
      (0, Yq.useEffect)((function() {
        return window.addEventListener("focus", OE, !1),
          function() {
            window.removeEventListener("focus", OE, !1)
          }
      }), [pq, Dq, zq, lE]);
      var mE = (0, Yq.useRef)([]),
        uE = function(qq) {
          Sq.current && Sq.current.contains(qq.target) || (qq.preventDefault(), mE.current = [])
        };
      (0, Yq.useEffect)((function() {
        return Pq && (document.addEventListener("dragover", wq, !1), document.addEventListener("drop", uE, !1)),
          function() {
            Pq && (document.removeEventListener("dragover", wq), document.removeEventListener("drop", uE))
          }
      }), [Sq, Pq]), (0, Yq.useEffect)((function() {
        return !lq && oq && Sq.current && Sq.current.focus(),
          function() {}
      }), [Sq, oq, lq]);
      var NE = (0, Yq.useCallback)((function(qq) {
          vq ? vq(qq) : console.error(qq)
        }), [vq]),
        dE = (0, Yq.useCallback)((function(qq) {
          qq.preventDefault(), qq.persist(), iE(qq), mE.current = [].concat(gE(mE.current), [qq.target]), Xq(qq) && Promise.resolve(Oq(qq)).then((function(Eq) {
            if (!sq(qq) || rq) {
              var gq = Eq.length,
                Yq = gq > 0 && function(qq) {
                  var Eq = qq.files,
                    gq = qq.accept,
                    Yq = qq.minSize,
                    lq = qq.maxSize,
                    Oq = qq.multiple,
                    mq = qq.maxFiles,
                    xq = qq.validator;
                  return !(!Oq && Eq.length > 1 || Oq && mq >= 1 && Eq.length > mq) && Eq.every((function(qq) {
                    var Eq = Zq(Rq(qq, gq), 1)[0],
                      Oq = Zq(Uq(qq, Yq, lq), 1)[0],
                      mq = xq ? xq(qq) : null;
                    return Eq && Oq && !mq
                  }))
                }({
                  files: Eq,
                  accept: fq,
                  minSize: xq,
                  maxSize: mq,
                  multiple: Aq,
                  maxFiles: cq,
                  validator: nq
                });
              Jq({
                isDragAccept: Yq,
                isDragReject: gq > 0 && !Yq,
                isDragActive: !0,
                type: "setDraggedFiles"
              }), uq && uq(qq)
            }
          })).catch((function(qq) {
            return NE(qq)
          }))
        }), [Oq, uq, NE, rq, fq, xq, mq, Aq, cq, nq]),
        jE = (0, Yq.useCallback)((function(qq) {
          qq.preventDefault(), qq.persist(), iE(qq);
          var Eq = Xq(qq);
          if (Eq && qq.dataTransfer) try {
            qq.dataTransfer.dropEffect = "copy"
          } catch (gq) {}
          return Eq && Wq && Wq(qq), !1
        }), [Wq, rq]),
        HE = (0, Yq.useCallback)((function(qq) {
          qq.preventDefault(), qq.persist(), iE(qq);
          var Eq = mE.current.filter((function(qq) {
              return Sq.current && Sq.current.contains(qq)
            })),
            gq = Eq.indexOf(qq.target); - 1 !== gq && Eq.splice(gq, 1), mE.current = Eq, Eq.length > 0 || (Jq({
            type: "setDraggedFiles",
            isDragActive: !1,
            isDragAccept: !1,
            isDragReject: !1
          }), Xq(qq) && Bq && Bq(qq))
        }), [Sq, Bq, rq]),
        oE = (0, Yq.useCallback)((function(qq, Eq) {
          var gq = [],
            Yq = [];
          qq.forEach((function(qq) {
            var Eq = YE(Rq(qq, fq), 2),
              lq = Eq[0],
              Oq = Eq[1],
              Aq = YE(Uq(qq, xq, mq), 2),
              cq = Aq[0],
              uq = Aq[1],
              Bq = nq ? nq(qq) : null;
            if (lq && cq && !Bq) gq.push(qq);
            else {
              var Wq = [Oq, uq];
              Bq && (Wq = Wq.concat(Bq)), Yq.push({
                file: qq,
                errors: Wq.filter((function(qq) {
                  return qq
                }))
              })
            }
          })), (!Aq && gq.length > 1 || Aq && cq >= 1 && gq.length > cq) && (gq.forEach((function(qq) {
            Yq.push({
              file: qq,
              errors: [kq]
            })
          })), gq.splice(0)), Jq({
            acceptedFiles: gq,
            fileRejections: Yq,
            type: "setFiles"
          }), Nq && Nq(gq, Yq, Eq), Yq.length > 0 && Vq && Vq(Yq, Eq), gq.length > 0 && aq && aq(gq, Eq)
        }), [Jq, Aq, fq, xq, mq, cq, Nq, aq, Vq, nq]),
        PE = (0, Yq.useCallback)((function(qq) {
          qq.preventDefault(), qq.persist(), iE(qq), mE.current = [], Xq(qq) && Promise.resolve(Oq(qq)).then((function(Eq) {
            sq(qq) && !rq || oE(Eq, qq)
          })).catch((function(qq) {
            return NE(qq)
          })), Jq({
            type: "reset"
          })
        }), [Oq, oE, NE, rq]),
        QE = (0, Yq.useCallback)((function() {
          if (lE.current) {
            Jq({
              type: "openDialog"
            }), Tq();
            var qq = {
              multiple: Aq,
              types: Mq
            };
            window.showOpenFilePicker(qq).then((function(qq) {
              return Oq(qq)
            })).then((function(qq) {
              oE(qq, null), Jq({
                type: "closeDialog"
              })
            })).catch((function(qq) {
              var Eq;
              (Eq = qq) instanceof DOMException && ("AbortError" === Eq.name || Eq.code === Eq.ABORT_ERR) ? (zq(qq), Jq({
                type: "closeDialog"
              })) : ! function(qq) {
                return qq instanceof DOMException && ("SecurityError" === qq.name || qq.code === qq.SECURITY_ERR)
              }(qq) ? NE(qq) : (lE.current = !1, pq.current ? (pq.current.value = null, pq.current.click()) : NE(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))
            }))
          } else pq.current && (Jq({
            type: "openDialog"
          }), Tq(), pq.current.value = null, pq.current.click())
        }), [Jq, Tq, zq, Hq, oE, NE, Mq, Aq]),
        yE = (0, Yq.useCallback)((function(qq) {
          Sq.current && Sq.current.isEqualNode(qq.target) && (" " !== qq.key && "Enter" !== qq.key && 32 !== qq.keyCode && 13 !== qq.keyCode || (qq.preventDefault(), QE()))
        }), [Sq, QE]),
        tE = (0, Yq.useCallback)((function() {
          Jq({
            type: "focus"
          })
        }), []),
        rE = (0, Yq.useCallback)((function() {
          Jq({
            type: "blur"
          })
        }), []),
        vE = (0, Yq.useCallback)((function() {
          Qq || (! function() {
            var qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
            return function(qq) {
              return -1 !== qq.indexOf("MSIE") || -1 !== qq.indexOf("Trident/")
            }(qq) || function(qq) {
              return -1 !== qq.indexOf("Edge/")
            }(qq)
          }() ? QE() : setTimeout(QE, 0))
        }), [Qq, QE]),
        hE = function(qq) {
          return lq ? null : qq
        },
        nE = function(qq) {
          return yq ? null : hE(qq)
        },
        bE = function(qq) {
          return tq ? null : hE(qq)
        },
        iE = function(qq) {
          rq && qq.stopPropagation()
        },
        ZE = (0, Yq.useMemo)((function() {
          return function() {
            var qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              Eq = qq.refKey,
              gq = void 0 === Eq ? "ref" : Eq,
              Yq = qq.role,
              Oq = qq.onKeyDown,
              mq = qq.onFocus,
              xq = qq.onBlur,
              Aq = qq.onClick,
              cq = qq.onDragEnter,
              uq = qq.onDragOver,
              Bq = qq.onDragLeave,
              Wq = qq.onDrop,
              Nq = cE(qq, qE);
            return xE(xE(AE({
              onKeyDown: nE(Kq(Oq, yE)),
              onFocus: nE(Kq(mq, tE)),
              onBlur: nE(Kq(xq, rE)),
              onClick: hE(Kq(Aq, vE)),
              onDragEnter: bE(Kq(cq, dE)),
              onDragOver: bE(Kq(uq, jE)),
              onDragLeave: bE(Kq(Bq, HE)),
              onDrop: bE(Kq(Wq, PE)),
              role: "string" === typeof Yq && "" !== Yq ? Yq : "presentation"
            }, gq, Sq), lq || yq ? {} : {
              tabIndex: 0
            }), Nq)
          }
        }), [Sq, yE, tE, rE, vE, dE, jE, HE, PE, yq, tq, lq]),
        fE = (0, Yq.useCallback)((function(qq) {
          qq.stopPropagation()
        }), []),
        ME = (0, Yq.useMemo)((function() {
          return function() {
            var qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              Eq = qq.refKey,
              gq = void 0 === Eq ? "ref" : Eq,
              Yq = qq.onChange,
              lq = qq.onClick,
              Oq = cE(qq, EE);
            return xE(xE({}, AE({
              accept: fq,
              multiple: Aq,
              type: "file",
              style: {
                display: "none"
              },
              onChange: hE(Kq(Yq, PE)),
              onClick: hE(Kq(lq, fE)),
              tabIndex: -1
            }, gq, pq)), Oq)
          }
        }), [pq, gq, Aq, PE, lq]);
      return xE(xE({}, Lq), {}, {
        aJ: eq && !lq,
        getRootProps: ZE,
        getInputProps: ME,
        rootRef: Sq,
        inputRef: pq,
        open: hE(QE)
      })
    }

    function aE(qq, Eq) {
      switch (Eq.type) {
        case "focus":
          return xE(xE({}, qq), {}, {
            aJ: !0
          });
        case "blur":
          return xE(xE({}, qq), {}, {
            aJ: !1
          });
        case "openDialog":
          return xE(xE({}, WE), {}, {
            isFileDialogActive: !0
          });
        case "closeDialog":
          return xE(xE({}, qq), {}, {
            isFileDialogActive: !1
          });
        case "setDraggedFiles":
          return xE(xE({}, qq), {}, {
            isDragActive: Eq.isDragActive,
            isDragAccept: Eq.isDragAccept,
            isDragReject: Eq.isDragReject
          });
        case "setFiles":
          return xE(xE({}, qq), {}, {
            acceptedFiles: Eq.acceptedFiles,
            fileRejections: Eq.fileRejections
          });
        case "reset":
          return xE({}, WE);
        default:
          return qq
      }
    }

    function VE() {}
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);