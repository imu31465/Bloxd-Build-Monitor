export const id = 120;
export const ids = [120];
export const modules = {
  5482: (ee, ie) => {
    ie.e = function(ee, ie) {
      if (ee && ie) {
        var He = Array.isArray(ie) ? ie : ie.split(","),
          ye = ee.name || "",
          be = (ee.type || "").toLowerCase(),
          Me = be.replace(/\/.*$/, "");
        return He.some((function(ee) {
          var ie = ee.trim().toLowerCase();
          return "." === ie.charAt(0) ? ye.toLowerCase().endsWith(ie) : ie.endsWith("/*") ? Me === ie.replace(/\/.*$/, "") : be === ie
        }))
      }
      return !0
    }
  },
  5454: (ee, ie, He) => {
    He.d(ie, {
      d: () => qi
    });
    var ye = He(59),
      be = He(5461),
      Me = He.n(be);

    function Ke(ee, ie, He, ye) {
      return new(He || (He = Promise))((function(be, Me) {
        function Ke(ee) {
          try {
            Fe(ye.next(ee))
          } catch (ie) {
            Me(ie)
          }
        }

        function Ue(ee) {
          try {
            Fe(ye.throw(ee))
          } catch (ie) {
            Me(ie)
          }
        }

        function Fe(ee) {
          var ie;
          ee.done ? be(ee.value) : (ie = ee.value, ie instanceof He ? ie : new He((function(ee) {
            ee(ie)
          }))).then(Ke, Ue)
        }
        Fe((ye = ye.apply(ee, ie || [])).next())
      }))
    }

    function Ue(ee, ie) {
      var He, ye, be, Me, Ke = {
        label: 0,
        sent: function() {
          if (1 & be[0]) throw be[1];
          return be[1]
        },
        trys: [],
        ops: []
      };
      return Me = {
        next: Ue(0),
        throw: Ue(1),
        return: Ue(2)
      }, "function" === typeof Symbol && (Me[Symbol.iterator] = function() {
        return this
      }), Me;

      function Ue(Ue) {
        return function(Fe) {
          return function(Ue) {
            if (He) throw new TypeError("Generator is already executing.");
            for (; Me && (Me = 0, Ue[0] && (Ke = 0)), Ke;) try {
              if (He = 1, ye && (be = 2 & Ue[0] ? ye.return : Ue[0] ? ye.throw || ((be = ye.return) && be.call(ye), 0) : ye.next) && !(be = be.call(ye, Ue[1])).done) return be;
              switch (ye = 0, be && (Ue = [2 & Ue[0], be.value]), Ue[0]) {
                case 0:
                case 1:
                  be = Ue;
                  break;
                case 4:
                  return Ke.label++, {
                    value: Ue[1],
                    done: !1
                  };
                case 5:
                  Ke.label++, ye = Ue[1], Ue = [0];
                  continue;
                case 7:
                  Ue = Ke.ops.pop(), Ke.trys.pop();
                  continue;
                default:
                  if (!(be = (be = Ke.trys).length > 0 && be[be.length - 1]) && (6 === Ue[0] || 2 === Ue[0])) {
                    Ke = 0;
                    continue
                  }
                  if (3 === Ue[0] && (!be || Ue[1] > be[0] && Ue[1] < be[3])) {
                    Ke.label = Ue[1];
                    break
                  }
                  if (6 === Ue[0] && Ke.label < be[1]) {
                    Ke.label = be[1], be = Ue;
                    break
                  }
                  if (be && Ke.label < be[2]) {
                    Ke.label = be[2], Ke.ops.push(Ue);
                    break
                  }
                  be[2] && Ke.ops.pop(), Ke.trys.pop();
                  continue
              }
              Ue = ie.call(ee, Ke)
            } catch (Fe) {
              Ue = [6, Fe], ye = 0
            } finally {
              He = be = 0
            }
            if (5 & Ue[0]) throw Ue[1];
            return {
              value: Ue[0] ? Ue[1] : void 0,
              done: !0
            }
          }([Ue, Fe])
        }
      }
    }
    Object.create;

    function Fe(ee, ie) {
      var He = "function" === typeof Symbol && ee[Symbol.iterator];
      if (!He) return ee;
      var ye, be, Me = He.call(ee),
        Ke = [];
      try {
        for (;
          (void 0 === ie || ie-- > 0) && !(ye = Me.next()).done;) Ke.push(ye.value)
      } catch (Ue) {
        be = {
          error: Ue
        }
      } finally {
        try {
          ye && !ye.done && (He = Me.return) && He.call(Me)
        } finally {
          if (be) throw be.error
        }
      }
      return Ke
    }

    function Je(ee, ie, He) {
      if (He || 2 === arguments.length)
        for (var ye, be = 0, Me = ie.length; be < Me; be++) !ye && be in ie || (ye || (ye = Array.prototype.slice.call(ie, 0, be)), ye[be] = ie[be]);
      return ee.concat(ye || Array.prototype.slice.call(ie))
    }
    Object.create;
    "function" === typeof SuppressedError && SuppressedError;
    var oe = new Map([
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
      ["nF", "application/vnd.ms-outlook"]
    ]);

    function Re(ee, ie) {
      var He = function(ee) {
        var ie = ee.name;
        if (ie && -1 !== ie.lastIndexOf(".") && !ee.type) {
          var He = ie.split(".").pop().toLowerCase(),
            ye = oe.get(He);
          ye && Object.defineProperty(ee, "type", {
            value: ye,
            writable: !1,
            configurable: !1,
            enumerable: !0
          })
        }
        return ee
      }(ee);
      if ("string" !== typeof He.path) {
        var ye = ee.webkitRelativePath;
        Object.defineProperty(He, "path", {
          value: "string" === typeof ie ? ie : "string" === typeof ye && ye.length > 0 ? ye : ee.name,
          writable: !1,
          configurable: !1,
          enumerable: !0
        })
      }
      return He
    }
    var ke = [".DS_Store", "Thumbs.db"];

    function qe(ee) {
      return "object" === typeof ee && null !== ee
    }

    function fe(ee) {
      return ze(ee.target.files).map((function(ee) {
        return Re(ee)
      }))
    }

    function Te(ee) {
      return Ke(this, void 0, void 0, (function() {
        return Ue(this, (function(ie) {
          switch (ie.label) {
            case 0:
              return [4, Promise.all(ee.map((function(ee) {
                return ee.getFile()
              })))];
            case 1:
              return [2, ie.sent().map((function(ee) {
                return Re(ee)
              }))]
          }
        }))
      }))
    }

    function pe(ee, ie) {
      return Ke(this, void 0, void 0, (function() {
        var He;
        return Ue(this, (function(ye) {
          switch (ye.label) {
            case 0:
              return ee.items ? (He = ze(ee.items).filter((function(ee) {
                return "file" === ee.kind
              })), "drop" !== ie ? [2, He] : [4, Promise.all(He.map(Be))]) : [3, 2];
            case 1:
              return [2, Xe(Ee(ye.sent()))];
            case 2:
              return [2, Xe(ze(ee.files).map((function(ee) {
                return Re(ee)
              })))]
          }
        }))
      }))
    }

    function Xe(ee) {
      return ee.filter((function(ee) {
        return -1 === ke.indexOf(ee.name)
      }))
    }

    function ze(ee) {
      if (null === ee) return [];
      for (var ie = [], He = 0; He < ee.length; He++) {
        var ye = ee[He];
        ie.push(ye)
      }
      return ie
    }

    function Be(ee) {
      if ("function" !== typeof ee.webkitGetAsEntry) return ge(ee);
      var ie = ee.webkitGetAsEntry();
      return ie && ie.isDirectory ? de(ie) : ge(ee)
    }

    function Ee(ee) {
      return ee.reduce((function(ee, ie) {
        return Je(Je([], Fe(ee), !1), Fe(Array.isArray(ie) ? Ee(ie) : [ie]), !1)
      }), [])
    }

    function ge(ee) {
      var ie = ee.getAsFile();
      if (!ie) return Promise.reject("".concat(ee, " is not a File"));
      var He = Re(ie);
      return Promise.resolve(He)
    }

    function Oe(ee) {
      return Ke(this, void 0, void 0, (function() {
        return Ue(this, (function(ie) {
          return [2, ee.isDirectory ? de(ee) : We(ee)]
        }))
      }))
    }

    function de(ee) {
      var ie = ee.createReader();
      return new Promise((function(ee, He) {
        var ye = [];
        ! function be() {
          var Me = this;
          ie.readEntries((function(ie) {
            return Ke(Me, void 0, void 0, (function() {
              var Me, Ke, Fe;
              return Ue(this, (function(Ue) {
                switch (Ue.label) {
                  case 0:
                    if (ie.length) return [3, 5];
                    Ue.label = 1;
                  case 1:
                    return Ue.trys.push([1, 3, , 4]), [4, Promise.all(ye)];
                  case 2:
                    return Me = Ue.sent(), ee(Me), [3, 4];
                  case 3:
                    return Ke = Ue.sent(), He(Ke), [3, 4];
                  case 4:
                    return [3, 6];
                  case 5:
                    Fe = Promise.all(ie.map(Oe)), ye.push(Fe), be(), Ue.label = 6;
                  case 6:
                    return [2]
                }
              }))
            }))
          }), (function(ee) {
            He(ee)
          }))
        }()
      }))
    }

    function We(ee) {
      return Ke(this, void 0, void 0, (function() {
        return Ue(this, (function(ie) {
          return [2, new Promise((function(ie, He) {
            ee.file((function(He) {
              var ye = Re(He, ee.fullPath);
              ie(ye)
            }), (function(ee) {
              He(ee)
            }))
          }))]
        }))
      }))
    }
    var te = He(5482);

    function Ze(ee) {
      return function(ee) {
        if (Array.isArray(ee)) return Ve(ee)
      }(ee) || function(ee) {
        if ("undefined" !== typeof Symbol && null != ee[Symbol.iterator] || null != ee["@@iterator"]) return Array.from(ee)
      }(ee) || Ye(ee) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function we(ee, ie) {
      var He = Object.keys(ee);
      if (Object.getOwnPropertySymbols) {
        var ye = Object.getOwnPropertySymbols(ee);
        ie && (ye = ye.filter((function(ie) {
          return Object.getOwnPropertyDescriptor(ee, ie).enumerable
        }))), He.push.apply(He, ye)
      }
      return He
    }

    function De(ee) {
      for (var ie = 1; ie < arguments.length; ie++) {
        var He = null != arguments[ie] ? arguments[ie] : {};
        ie % 2 ? we(Object(He), !0).forEach((function(ie) {
          Pe(ee, ie, He[ie])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(ee, Object.getOwnPropertyDescriptors(He)) : we(Object(He)).forEach((function(ie) {
          Object.defineProperty(ee, ie, Object.getOwnPropertyDescriptor(He, ie))
        }))
      }
      return ee
    }

    function Pe(ee, ie, He) {
      return ie in ee ? Object.defineProperty(ee, ie, {
        value: He,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : ee[ie] = He, ee
    }

    function Ae(ee, ie) {
      return function(ee) {
        if (Array.isArray(ee)) return ee
      }(ee) || function(ee, ie) {
        var He = null == ee ? null : "undefined" !== typeof Symbol && ee[Symbol.iterator] || ee["@@iterator"];
        if (null == He) return;
        var ye, be, Me = [],
          Ke = !0,
          Ue = !1;
        try {
          for (He = He.call(ee); !(Ke = (ye = He.next()).done) && (Me.push(ye.value), !ie || Me.length !== ie); Ke = !0);
        } catch (Fe) {
          Ue = !0, be = Fe
        } finally {
          try {
            Ke || null == He.return || He.return()
          } finally {
            if (Ue) throw be
          }
        }
        return Me
      }(ee, ie) || Ye(ee, ie) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Ye(ee, ie) {
      if (ee) {
        if ("string" === typeof ee) return Ve(ee, ie);
        var He = Object.prototype.toString.call(ee).slice(8, -1);
        return "Object" === He && ee.constructor && (He = ee.constructor.name), "Map" === He || "Set" === He ? Array.from(ee) : "Arguments" === He || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(He) ? Ve(ee, ie) : void 0
      }
    }

    function Ve(ee, ie) {
      (null == ie || ie > ee.length) && (ie = ee.length);
      for (var He = 0, ye = new Array(ie); He < ie; He++) ye[He] = ee[He];
      return ye
    }
    var ae = "file-invalid-type",
      ce = "file-too-large",
      xe = "file-too-small",
      Le = "too-many-files",
      Ce = function(ee) {
        ee = Array.isArray(ee) && 1 === ee.length ? ee[0] : ee;
        var ie = Array.isArray(ee) ? "one of ".concat(ee.join(", ")) : ee;
        return {
          code: ae,
          message: "File type must be ".concat(ie)
        }
      },
      ve = function(ee) {
        return {
          code: ce,
          message: "File is larger than ".concat(ee, " ").concat(1 === ee ? "byte" : "bytes")
        }
      },
      ue = function(ee) {
        return {
          code: xe,
          message: "File is smaller than ".concat(ee, " ").concat(1 === ee ? "byte" : "bytes")
        }
      },
      me = {
        code: Le,
        message: "Too many files"
      };

    function le(ee, ie) {
      var He = "application/x-moz-file" === ee.type || (0, te.e)(ee, ie);
      return [He, He ? null : Ce(ie)]
    }

    function Se(ee, ie, He) {
      if (ne(ee.size))
        if (ne(ie) && ne(He)) {
          if (ee.size > He) return [!1, ve(He)];
          if (ee.size < ie) return [!1, ue(ie)]
        } else {
          if (ne(ie) && ee.size < ie) return [!1, ue(ie)];
          if (ne(He) && ee.size > He) return [!1, ve(He)]
        } return [!0, null]
    }

    function ne(ee) {
      return void 0 !== ee && null !== ee
    }

    function je(ee) {
      return "function" === typeof ee.isPropagationStopped ? ee.isPropagationStopped() : "undefined" !== typeof ee.cancelBubble && ee.cancelBubble
    }

    function se(ee) {
      return ee.dataTransfer ? Array.prototype.some.call(ee.dataTransfer.types, (function(ee) {
        return "Files" === ee || "application/x-moz-file" === ee
      })) : !!ee.target && !!ee.target.files
    }

    function Ie(ee) {
      ee.preventDefault()
    }

    function he() {
      for (var ee = arguments.length, ie = new Array(ee), He = 0; He < ee; He++) ie[He] = arguments[He];
      return function(ee) {
        for (var He = arguments.length, ye = new Array(He > 1 ? He - 1 : 0), be = 1; be < He; be++) ye[be - 1] = arguments[be];
        return ie.some((function(ie) {
          return !je(ee) && ie && ie.apply(void 0, [ee].concat(ye)), je(ee)
        }))
      }
    }

    function Ne(ee) {
      return "audio/*" === ee || "video/*" === ee || "image/*" === ee || "text/*" === ee || /\w+\/[-+.\w]+/g.test(ee)
    }

    function Ge(ee) {
      return /^.*\.[\w]+$/.test(ee)
    }
    var re = ["children"],
      Qe = ["open"],
      ei = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
      ii = ["refKey", "onChange", "onClick"];

    function Hi(ee) {
      return function(ee) {
        if (Array.isArray(ee)) return Mi(ee)
      }(ee) || function(ee) {
        if ("undefined" !== typeof Symbol && null != ee[Symbol.iterator] || null != ee["@@iterator"]) return Array.from(ee)
      }(ee) || bi(ee) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function yi(ee, ie) {
      return function(ee) {
        if (Array.isArray(ee)) return ee
      }(ee) || function(ee, ie) {
        var He = null == ee ? null : "undefined" !== typeof Symbol && ee[Symbol.iterator] || ee["@@iterator"];
        if (null == He) return;
        var ye, be, Me = [],
          Ke = !0,
          Ue = !1;
        try {
          for (He = He.call(ee); !(Ke = (ye = He.next()).done) && (Me.push(ye.value), !ie || Me.length !== ie); Ke = !0);
        } catch (Fe) {
          Ue = !0, be = Fe
        } finally {
          try {
            Ke || null == He.return || He.return()
          } finally {
            if (Ue) throw be
          }
        }
        return Me
      }(ee, ie) || bi(ee, ie) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function bi(ee, ie) {
      if (ee) {
        if ("string" === typeof ee) return Mi(ee, ie);
        var He = Object.prototype.toString.call(ee).slice(8, -1);
        return "Object" === He && ee.constructor && (He = ee.constructor.name), "Map" === He || "Set" === He ? Array.from(ee) : "Arguments" === He || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(He) ? Mi(ee, ie) : void 0
      }
    }

    function Mi(ee, ie) {
      (null == ie || ie > ee.length) && (ie = ee.length);
      for (var He = 0, ye = new Array(ie); He < ie; He++) ye[He] = ee[He];
      return ye
    }

    function Ki(ee, ie) {
      var He = Object.keys(ee);
      if (Object.getOwnPropertySymbols) {
        var ye = Object.getOwnPropertySymbols(ee);
        ie && (ye = ye.filter((function(ie) {
          return Object.getOwnPropertyDescriptor(ee, ie).enumerable
        }))), He.push.apply(He, ye)
      }
      return He
    }

    function Ui(ee) {
      for (var ie = 1; ie < arguments.length; ie++) {
        var He = null != arguments[ie] ? arguments[ie] : {};
        ie % 2 ? Ki(Object(He), !0).forEach((function(ie) {
          Fi(ee, ie, He[ie])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(ee, Object.getOwnPropertyDescriptors(He)) : Ki(Object(He)).forEach((function(ie) {
          Object.defineProperty(ee, ie, Object.getOwnPropertyDescriptor(He, ie))
        }))
      }
      return ee
    }

    function Fi(ee, ie, He) {
      return ie in ee ? Object.defineProperty(ee, ie, {
        value: He,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : ee[ie] = He, ee
    }

    function Ji(ee, ie) {
      if (null == ee) return {};
      var He, ye, be = function(ee, ie) {
        if (null == ee) return {};
        var He, ye, be = {},
          Me = Object.keys(ee);
        for (ye = 0; ye < Me.length; ye++) He = Me[ye], ie.indexOf(He) >= 0 || (be[He] = ee[He]);
        return be
      }(ee, ie);
      if (Object.getOwnPropertySymbols) {
        var Me = Object.getOwnPropertySymbols(ee);
        for (ye = 0; ye < Me.length; ye++) He = Me[ye], ie.indexOf(He) >= 0 || Object.prototype.propertyIsEnumerable.call(ee, He) && (be[He] = ee[He])
      }
      return be
    }
    var oi = (0, ye.forwardRef)((function(ee, ie) {
      var He = ee.children,
        be = qi(Ji(ee, re)),
        Me = be.open,
        Ke = Ji(be, Qe);
      return (0, ye.useImperativeHandle)(ie, (function() {
        return {
          open: Me
        }
      }), [Me]), ye.createElement(ye.Fragment, null, He(Ui(Ui({}, Ke), {}, {
        open: Me
      })))
    }));
    oi.displayName = "Dropzone";
    var Ri = {
      disabled: !1,
      getFilesFromEvent: function(ee) {
        return Ke(this, void 0, void 0, (function() {
          return Ue(this, (function(ie) {
            return qe(ee) && qe(ee.dataTransfer) ? [2, pe(ee.dataTransfer, ee.type)] : function(ee) {
              return qe(ee) && qe(ee.target)
            }(ee) ? [2, fe(ee)] : Array.isArray(ee) && ee.every((function(ee) {
              return "getFile" in ee && "function" === typeof ee.getFile
            })) ? [2, Te(ee)] : [2, []]
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
    oi.defaultProps = Ri, oi.propTypes = {
      children: Me().func,
      accept: Me().objectOf(Me().arrayOf(Me().string)),
      multiple: Me().bool,
      preventDropOnDocument: Me().bool,
      noClick: Me().bool,
      noKeyboard: Me().bool,
      noDrag: Me().bool,
      noDragEventsBubbling: Me().bool,
      minSize: Me().number,
      maxSize: Me().number,
      maxFiles: Me().number,
      disabled: Me().bool,
      getFilesFromEvent: Me().func,
      onFileDialogCancel: Me().func,
      onFileDialogOpen: Me().func,
      useFsAccessApi: Me().bool,
      autoFocus: Me().bool,
      onDragEnter: Me().func,
      onDragLeave: Me().func,
      onDragOver: Me().func,
      onDrop: Me().func,
      onDropAccepted: Me().func,
      onDropRejected: Me().func,
      onError: Me().func,
      validator: Me().func
    };
    var ki = {
      qV: !1,
      isFileDialogActive: !1,
      isDragActive: !1,
      isDragAccept: !1,
      isDragReject: !1,
      acceptedFiles: [],
      fileRejections: []
    };

    function qi() {
      var ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        ie = Ui(Ui({}, Ri), ee),
        He = ie.accept,
        be = ie.disabled,
        Me = ie.getFilesFromEvent,
        Ke = ie.maxSize,
        Ue = ie.minSize,
        Fe = ie.multiple,
        Je = ie.maxFiles,
        oe = ie.onDragEnter,
        Re = ie.onDragLeave,
        ke = ie.onDragOver,
        qe = ie.onDrop,
        fe = ie.onDropAccepted,
        Te = ie.onDropRejected,
        pe = ie.onFileDialogCancel,
        Xe = ie.onFileDialogOpen,
        ze = ie.useFsAccessApi,
        Be = ie.autoFocus,
        Ee = ie.preventDropOnDocument,
        ge = ie.noClick,
        Oe = ie.noKeyboard,
        de = ie.noDrag,
        We = ie.noDragEventsBubbling,
        te = ie.onError,
        we = ie.validator,
        Ye = (0, ye.useMemo)((function() {
          return function(ee) {
            if (ne(ee)) return Object.entries(ee).reduce((function(ee, ie) {
              var He = Ae(ie, 2),
                ye = He[0],
                be = He[1];
              return [].concat(Ze(ee), [ye], Ze(be))
            }), []).filter((function(ee) {
              return Ne(ee) || Ge(ee)
            })).join(",")
          }(He)
        }), [He]),
        Ve = (0, ye.useMemo)((function() {
          return function(ee) {
            return ne(ee) ? [{
              description: "Files",
              accept: Object.entries(ee).filter((function(ee) {
                var ie = Ae(ee, 2),
                  He = ie[0],
                  ye = ie[1],
                  be = !0;
                return Ne(He) || (console.warn('Skipped "'.concat(He, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), be = !1), Array.isArray(ye) && ye.every(Ge) || (console.warn('Skipped "'.concat(He, '" because an invalid file extension was provided.')), be = !1), be
              })).reduce((function(ee, ie) {
                var He = Ae(ie, 2),
                  ye = He[0],
                  be = He[1];
                return De(De({}, ee), {}, Pe({}, ye, be))
              }), {})
            }] : ee
          }(He)
        }), [He]),
        ae = (0, ye.useMemo)((function() {
          return "function" === typeof Xe ? Xe : Ti
        }), [Xe]),
        ce = (0, ye.useMemo)((function() {
          return "function" === typeof pe ? pe : Ti
        }), [pe]),
        xe = (0, ye.useRef)(null),
        Le = (0, ye.useRef)(null),
        Ce = yi((0, ye.useReducer)(fi, ki), 2),
        ve = Ce[0],
        ue = Ce[1],
        re = ve.qV,
        Qe = ve.isFileDialogActive,
        bi = (0, ye.useRef)("undefined" !== typeof window && window.isSecureContext && ze && "showOpenFilePicker" in window),
        Mi = function() {
          !bi.current && Qe && setTimeout((function() {
            Le.current && (Le.current.files.length || (ue({
              type: "closeDialog"
            }), ce()))
          }), 300)
        };
      (0, ye.useEffect)((function() {
        return window.addEventListener("focus", Mi, !1),
          function() {
            window.removeEventListener("focus", Mi, !1)
          }
      }), [Le, Qe, ce, bi]);
      var Ki = (0, ye.useRef)([]),
        oi = function(ee) {
          xe.current && xe.current.contains(ee.target) || (ee.preventDefault(), Ki.current = [])
        };
      (0, ye.useEffect)((function() {
        return Ee && (document.addEventListener("dragover", Ie, !1), document.addEventListener("drop", oi, !1)),
          function() {
            Ee && (document.removeEventListener("dragover", Ie), document.removeEventListener("drop", oi))
          }
      }), [xe, Ee]), (0, ye.useEffect)((function() {
        return !be && Be && xe.current && xe.current.focus(),
          function() {}
      }), [xe, Be, be]);
      var qi = (0, ye.useCallback)((function(ee) {
          te ? te(ee) : console.error(ee)
        }), [te]),
        Xi = (0, ye.useCallback)((function(ee) {
          ee.preventDefault(), ee.persist(), Ai(ee), Ki.current = [].concat(Hi(Ki.current), [ee.target]), se(ee) && Promise.resolve(Me(ee)).then((function(ie) {
            if (!je(ee) || We) {
              var He = ie.length,
                ye = He > 0 && function(ee) {
                  var ie = ee.files,
                    He = ee.accept,
                    ye = ee.minSize,
                    be = ee.maxSize,
                    Me = ee.multiple,
                    Ke = ee.maxFiles,
                    Ue = ee.validator;
                  return !(!Me && ie.length > 1 || Me && Ke >= 1 && ie.length > Ke) && ie.every((function(ee) {
                    var ie = Ae(le(ee, He), 1)[0],
                      Me = Ae(Se(ee, ye, be), 1)[0],
                      Ke = Ue ? Ue(ee) : null;
                    return ie && Me && !Ke
                  }))
                }({
                  files: ie,
                  accept: Ye,
                  minSize: Ue,
                  maxSize: Ke,
                  multiple: Fe,
                  maxFiles: Je,
                  validator: we
                });
              ue({
                isDragAccept: ye,
                isDragReject: He > 0 && !ye,
                isDragActive: !0,
                type: "setDraggedFiles"
              }), oe && oe(ee)
            }
          })).catch((function(ee) {
            return qi(ee)
          }))
        }), [Me, oe, qi, We, Ye, Ue, Ke, Fe, Je, we]),
        zi = (0, ye.useCallback)((function(ee) {
          ee.preventDefault(), ee.persist(), Ai(ee);
          var ie = se(ee);
          if (ie && ee.dataTransfer) try {
            ee.dataTransfer.dropEffect = "copy"
          } catch (He) {}
          return ie && ke && ke(ee), !1
        }), [ke, We]),
        Bi = (0, ye.useCallback)((function(ee) {
          ee.preventDefault(), ee.persist(), Ai(ee);
          var ie = Ki.current.filter((function(ee) {
              return xe.current && xe.current.contains(ee)
            })),
            He = ie.indexOf(ee.target); - 1 !== He && ie.splice(He, 1), Ki.current = ie, ie.length > 0 || (ue({
            type: "setDraggedFiles",
            isDragActive: !1,
            isDragAccept: !1,
            isDragReject: !1
          }), se(ee) && Re && Re(ee))
        }), [xe, Re, We]),
        Ei = (0, ye.useCallback)((function(ee, ie) {
          var He = [],
            ye = [];
          ee.forEach((function(ee) {
            var ie = yi(le(ee, Ye), 2),
              be = ie[0],
              Me = ie[1],
              Fe = yi(Se(ee, Ue, Ke), 2),
              Je = Fe[0],
              oe = Fe[1],
              Re = we ? we(ee) : null;
            if (be && Je && !Re) He.push(ee);
            else {
              var ke = [Me, oe];
              Re && (ke = ke.concat(Re)), ye.push({
                file: ee,
                errors: ke.filter((function(ee) {
                  return ee
                }))
              })
            }
          })), (!Fe && He.length > 1 || Fe && Je >= 1 && He.length > Je) && (He.forEach((function(ee) {
            ye.push({
              file: ee,
              errors: [me]
            })
          })), He.splice(0)), ue({
            acceptedFiles: He,
            fileRejections: ye,
            type: "setFiles"
          }), qe && qe(He, ye, ie), ye.length > 0 && Te && Te(ye, ie), He.length > 0 && fe && fe(He, ie)
        }), [ue, Fe, Ye, Ue, Ke, Je, qe, fe, Te, we]),
        gi = (0, ye.useCallback)((function(ee) {
          ee.preventDefault(), ee.persist(), Ai(ee), Ki.current = [], se(ee) && Promise.resolve(Me(ee)).then((function(ie) {
            je(ee) && !We || Ei(ie, ee)
          })).catch((function(ee) {
            return qi(ee)
          })), ue({
            type: "reset"
          })
        }), [Me, Ei, qi, We]),
        Oi = (0, ye.useCallback)((function() {
          if (bi.current) {
            ue({
              type: "openDialog"
            }), ae();
            var ee = {
              multiple: Fe,
              types: Ve
            };
            window.showOpenFilePicker(ee).then((function(ee) {
              return Me(ee)
            })).then((function(ee) {
              Ei(ee, null), ue({
                type: "closeDialog"
              })
            })).catch((function(ee) {
              var ie;
              (ie = ee) instanceof DOMException && ("AbortError" === ie.name || ie.code === ie.ABORT_ERR) ? (ce(ee), ue({
                type: "closeDialog"
              })) : ! function(ee) {
                return ee instanceof DOMException && ("SecurityError" === ee.name || ee.code === ee.SECURITY_ERR)
              }(ee) ? qi(ee) : (bi.current = !1, Le.current ? (Le.current.value = null, Le.current.click()) : qi(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))
            }))
          } else Le.current && (ue({
            type: "openDialog"
          }), ae(), Le.current.value = null, Le.current.click())
        }), [ue, ae, ce, ze, Ei, qi, Ve, Fe]),
        di = (0, ye.useCallback)((function(ee) {
          xe.current && xe.current.isEqualNode(ee.target) && (" " !== ee.key && "Enter" !== ee.key && 32 !== ee.keyCode && 13 !== ee.keyCode || (ee.preventDefault(), Oi()))
        }), [xe, Oi]),
        Wi = (0, ye.useCallback)((function() {
          ue({
            type: "focus"
          })
        }), []),
        ti = (0, ye.useCallback)((function() {
          ue({
            type: "blur"
          })
        }), []),
        Zi = (0, ye.useCallback)((function() {
          ge || (! function() {
            var ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
            return function(ee) {
              return -1 !== ee.indexOf("MSIE") || -1 !== ee.indexOf("Trident/")
            }(ee) || function(ee) {
              return -1 !== ee.indexOf("Edge/")
            }(ee)
          }() ? Oi() : setTimeout(Oi, 0))
        }), [ge, Oi]),
        wi = function(ee) {
          return be ? null : ee
        },
        Di = function(ee) {
          return Oe ? null : wi(ee)
        },
        Pi = function(ee) {
          return de ? null : wi(ee)
        },
        Ai = function(ee) {
          We && ee.stopPropagation()
        },
        Yi = (0, ye.useMemo)((function() {
          return function() {
            var ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              ie = ee.refKey,
              He = void 0 === ie ? "ref" : ie,
              ye = ee.role,
              Me = ee.onKeyDown,
              Ke = ee.onFocus,
              Ue = ee.onBlur,
              Fe = ee.onClick,
              Je = ee.onDragEnter,
              oe = ee.onDragOver,
              Re = ee.onDragLeave,
              ke = ee.onDrop,
              qe = Ji(ee, ei);
            return Ui(Ui(Fi({
              onKeyDown: Di(he(Me, di)),
              onFocus: Di(he(Ke, Wi)),
              onBlur: Di(he(Ue, ti)),
              onClick: wi(he(Fe, Zi)),
              onDragEnter: Pi(he(Je, Xi)),
              onDragOver: Pi(he(oe, zi)),
              onDragLeave: Pi(he(Re, Bi)),
              onDrop: Pi(he(ke, gi)),
              role: "string" === typeof ye && "" !== ye ? ye : "presentation"
            }, He, xe), be || Oe ? {} : {
              tabIndex: 0
            }), qe)
          }
        }), [xe, di, Wi, ti, Zi, Xi, zi, Bi, gi, Oe, de, be]),
        Vi = (0, ye.useCallback)((function(ee) {
          ee.stopPropagation()
        }), []),
        ai = (0, ye.useMemo)((function() {
          return function() {
            var ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              ie = ee.refKey,
              He = void 0 === ie ? "ref" : ie,
              ye = ee.onChange,
              be = ee.onClick,
              Me = Ji(ee, ii);
            return Ui(Ui({}, Fi({
              accept: Ye,
              multiple: Fe,
              type: "file",
              style: {
                display: "none"
              },
              onChange: wi(he(ye, gi)),
              onClick: wi(he(be, Vi)),
              tabIndex: -1
            }, He, Le)), Me)
          }
        }), [Le, He, Fe, gi, be]);
      return Ui(Ui({}, ve), {}, {
        qV: re && !be,
        getRootProps: Yi,
        getInputProps: ai,
        rootRef: xe,
        inputRef: Le,
        open: wi(Oi)
      })
    }

    function fi(ee, ie) {
      switch (ie.type) {
        case "focus":
          return Ui(Ui({}, ee), {}, {
            qV: !0
          });
        case "blur":
          return Ui(Ui({}, ee), {}, {
            qV: !1
          });
        case "openDialog":
          return Ui(Ui({}, ki), {}, {
            isFileDialogActive: !0
          });
        case "closeDialog":
          return Ui(Ui({}, ee), {}, {
            isFileDialogActive: !1
          });
        case "setDraggedFiles":
          return Ui(Ui({}, ee), {}, {
            isDragActive: ie.isDragActive,
            isDragAccept: ie.isDragAccept,
            isDragReject: ie.isDragReject
          });
        case "setFiles":
          return Ui(Ui({}, ee), {}, {
            acceptedFiles: ie.acceptedFiles,
            fileRejections: ie.fileRejections
          });
        case "reset":
          return Ui({}, ki);
        default:
          return ee
      }
    }

    function Ti() {}
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);