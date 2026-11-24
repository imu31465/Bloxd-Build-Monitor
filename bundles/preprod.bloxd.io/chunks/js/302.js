export const id = 302;
export const ids = [302];
export const modules = {
  41637: (pp, ip, cp) => {
    function Op() {
      return Op = Object.assign ? Object.assign.bind() : function(pp) {
        for (var ip = 1; ip < arguments.length; ip++) {
          var cp = arguments[ip];
          for (var Op in cp)({}).hasOwnProperty.call(cp, Op) && (pp[Op] = cp[Op])
        }
        return pp
      }, Op.apply(null, arguments)
    }
    cp.d(ip, {
      d: () => Pp,
      e: () => xp
    });
    var op = !1;
    try {
      op = "undefined" !== typeof localStorage
    } catch (yp) {}
    var Ip = "undefined" !== typeof process,
      Sp = op && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || Ip && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.DEBUG ? console.log : function(pp) {
        return ""
      };

    function xp(pp, ip, cp, op, Ip) {
      void 0 === op && (op = {});
      var Sp = Op({}, Dp(cp), op),
        xp = function(pp, ip, cp, op, Ip) {
          var Sp = [].concat(ip),
            xp = Wp(pp, cp, op),
            Lp = xp.compilerHost,
            Yp = xp.updateFile,
            Dp = xp.deleteFile,
            Ap = new Map,
            Pp = 0,
            yp = Op({}, Lp, {
              getProjectVersion: function() {
                return Pp.toString()
              },
              getCompilationSettings: function() {
                return cp
              },
              getCustomTransformers: function() {
                return Ip
              },
              getScriptFileNames: function() {
                return Sp.slice()
              },
              getScriptSnapshot: function(ip) {
                var cp = pp.readFile(ip);
                if (cp && "string" === typeof cp) return op.ScriptSnapshot.fromString(cp)
              },
              getScriptVersion: function(pp) {
                return Ap.get(pp) || "0"
              },
              writeFile: pp.writeFile
            }),
            Up = {
              languageServiceHost: yp,
              updateFile: function(pp) {
                Pp++, Ap.set(pp.fileName, Pp.toString()), Sp.includes(pp.fileName) || Sp.push(pp.fileName), Yp(pp)
              },
              deleteFile: function(pp) {
                Pp++, Ap.set(pp.fileName, Pp.toString());
                var ip = Sp.indexOf(pp.fileName); - 1 !== ip && Sp.splice(ip, 1), Dp(pp)
              }
            };
          return Up
        }(pp, ip, Sp, cp, Ip),
        Lp = xp.languageServiceHost,
        Yp = xp.updateFile,
        Ap = xp.deleteFile,
        Pp = cp.createLanguageService(Lp),
        yp = Pp.getCompilerOptionsDiagnostics();
      if (yp.length) {
        var Up = Wp(pp, op, cp);
        throw new Error(cp.formatDiagnostics(yp, Up.compilerHost))
      }
      return {
        name: "vfs",
        sys: pp,
        languageService: Pp,
        getSourceFile: function(pp) {
          var ip;
          return null == (ip = Pp.getProgram()) ? void 0 : ip.getSourceFile(pp)
        },
        createFile: function(pp, ip) {
          Yp(cp.createSourceFile(pp, ip, Sp.target, !1))
        },
        updateFile: function(pp, ip, Op) {
          var op = Pp.getProgram().getSourceFile(pp);
          if (!op) throw new Error("Did not find a source file for " + pp);
          var Ip = op.text,
            Sp = null != Op ? Op : cp.createTextSpan(0, Ip.length),
            xp = Ip.slice(0, Sp.start) + ip + Ip.slice(Sp.start + Sp.length),
            Lp = cp.updateSourceFile(op, xp, {
              span: Sp,
              newLength: ip.length
            });
          Yp(Lp)
        },
        deleteFile: function(pp) {
          var ip = Pp.getProgram().getSourceFile(pp);
          ip && Ap(ip)
        }
      }
    }

    function Lp(pp) {
      throw new Error("Method '" + pp + "' is not implemented.")
    }

    function Yp(pp, ip) {
      return function() {
        for (var cp = arguments.length, Op = new Array(cp), op = 0; op < cp; op++) Op[op] = arguments[op];
        var Ip = ip.apply(void 0, Op),
          xp = "string" === typeof Ip ? Ip.slice(0, 80) + "..." : Ip;
        return Sp.apply(void 0, ["> " + pp].concat(Op)), Sp("< " + xp), Ip
      }
    }
    var Dp = function(pp) {
        return Op({}, pp.getDefaultCompilerOptions(), {
          jsx: pp.JsxEmit.React,
          strict: !0,
          esModuleInterop: !0,
          module: pp.ModuleKind.ESNext,
          suppressOutputPathCheck: !0,
          skipLibCheck: !0,
          skipDefaultLibCheck: !0
        }, pp.versionMajorMinor && Number(pp.versionMajorMinor.split(".")[0]) >= 6 ? {
          ignoreDeprecations: "6.0"
        } : {
          moduleResolution: pp.ModuleResolutionKind.NodeJs
        })
      },
      Ap = function(pp) {
        return pp.replace("/", "/lib.").toLowerCase()
      };

    function Pp(pp) {
      return {
        args: [],
        createDirectory: function() {
          return Lp("createDirectory")
        },
        directoryExists: Yp("directoryExists", (function(ip) {
          return Array.from(pp.keys()).some((function(pp) {
            return pp.startsWith(ip)
          }))
        })),
        exit: function() {
          return Lp("exit")
        },
        fileExists: Yp("fileExists", (function(ip) {
          return pp.has(ip) || pp.has(Ap(ip))
        })),
        getCurrentDirectory: function() {
          return "/"
        },
        getDirectories: function() {
          return []
        },
        getExecutingFilePath: function() {
          return Lp("getExecutingFilePath")
        },
        readDirectory: Yp("readDirectory", (function(ip) {
          return "/" === ip ? Array.from(pp.keys()) : []
        })),
        readFile: Yp("readFile", (function(ip) {
          var cp;
          return null != (cp = pp.get(ip)) ? cp : pp.get(Ap(ip))
        })),
        resolvePath: function(pp) {
          return pp
        },
        newLine: "\n",
        useCaseSensitiveFileNames: !0,
        write: function() {
          return Lp("write")
        },
        writeFile: function(ip, cp) {
          pp.set(ip, cp)
        },
        deleteFile: function(ip) {
          pp.delete(ip)
        }
      }
    }

    function Wp(pp, ip, cp) {
      var op = new Map;
      return {
        compilerHost: Op({}, pp, {
          getCanonicalFileName: function(pp) {
            return pp
          },
          getDefaultLibFileName: function() {
            return "/" + cp.getDefaultLibFileName(ip)
          },
          getNewLine: function() {
            return pp.newLine
          },
          getSourceFile: function(Op, Ip) {
            var Sp, xp;
            return op.get(Op) || (xp = cp.createSourceFile(Op, pp.readFile(Op), null != (Sp = null != Ip ? Ip : ip.target) ? Sp : Dp(cp).target, !1), op.set(xp.fileName, xp), xp)
          },
          useCaseSensitiveFileNames: function() {
            return pp.useCaseSensitiveFileNames
          }
        }),
        updateFile: function(ip) {
          var cp = op.has(ip.fileName);
          return pp.writeFile(ip.fileName, ip.text), op.set(ip.fileName, ip), cp
        },
        deleteFile: function(ip) {
          var cp = op.has(ip.fileName);
          return op.delete(ip.fileName), pp.deleteFile(ip.fileName), cp
        }
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);