export const id = 289;
export const ids = [289];
export const modules = {
  41359: (dd, Jd, kd) => {
    function pd() {
      return pd = Object.assign ? Object.assign.bind() : function(dd) {
        for (var Jd = 1; Jd < arguments.length; Jd++) {
          var kd = arguments[Jd];
          for (var pd in kd)({}).hasOwnProperty.call(kd, pd) && (dd[pd] = kd[pd])
        }
        return dd
      }, pd.apply(null, arguments)
    }
    kd.d(Jd, {
      b: () => ld,
      d: () => Zd
    });
    var Nd = !1;
    try {
      Nd = "undefined" !== typeof localStorage
    } catch (Ld) {}
    var Wd = "undefined" !== typeof process,
      Pd = Nd && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || Wd && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.DEBUG ? console.log : function(dd) {
        return ""
      };

    function Zd(dd, Jd, kd, Nd, Wd) {
      void 0 === Nd && (Nd = {});
      var Pd = pd({}, Kd(kd), Nd),
        Zd = function(dd, Jd, kd, Nd, Wd) {
          var Pd = [].concat(Jd),
            Zd = Qd(dd, kd, Nd),
            gd = Zd.compilerHost,
            Cd = Zd.updateFile,
            Kd = Zd.deleteFile,
            od = new Map,
            ld = 0,
            Ld = pd({}, gd, {
              getProjectVersion: function() {
                return ld.toString()
              },
              getCompilationSettings: function() {
                return kd
              },
              getCustomTransformers: function() {
                return Wd
              },
              getScriptFileNames: function() {
                return Pd.slice()
              },
              getScriptSnapshot: function(Jd) {
                var kd = dd.readFile(Jd);
                if (kd && "string" === typeof kd) return Nd.ScriptSnapshot.fromString(kd)
              },
              getScriptVersion: function(dd) {
                return od.get(dd) || "0"
              },
              writeFile: dd.writeFile
            }),
            Od = {
              languageServiceHost: Ld,
              updateFile: function(dd) {
                ld++, od.set(dd.fileName, ld.toString()), Pd.includes(dd.fileName) || Pd.push(dd.fileName), Cd(dd)
              },
              deleteFile: function(dd) {
                ld++, od.set(dd.fileName, ld.toString());
                var Jd = Pd.indexOf(dd.fileName); - 1 !== Jd && Pd.splice(Jd, 1), Kd(dd)
              }
            };
          return Od
        }(dd, Jd, Pd, kd, Wd),
        gd = Zd.languageServiceHost,
        Cd = Zd.updateFile,
        od = Zd.deleteFile,
        ld = kd.createLanguageService(gd),
        Ld = ld.getCompilerOptionsDiagnostics();
      if (Ld.length) {
        var Od = Qd(dd, Nd, kd);
        throw new Error(kd.formatDiagnostics(Ld, Od.compilerHost))
      }
      return {
        name: "vfs",
        sys: dd,
        languageService: ld,
        getSourceFile: function(dd) {
          var Jd;
          return null == (Jd = ld.getProgram()) ? void 0 : Jd.getSourceFile(dd)
        },
        createFile: function(dd, Jd) {
          Cd(kd.createSourceFile(dd, Jd, Pd.target, !1))
        },
        updateFile: function(dd, Jd, pd) {
          var Nd = ld.getProgram().getSourceFile(dd);
          if (!Nd) throw new Error("Did not find a source file for " + dd);
          var Wd = Nd.text,
            Pd = null != pd ? pd : kd.createTextSpan(0, Wd.length),
            Zd = Wd.slice(0, Pd.start) + Jd + Wd.slice(Pd.start + Pd.length),
            gd = kd.updateSourceFile(Nd, Zd, {
              span: Pd,
              newLength: Jd.length
            });
          Cd(gd)
        },
        deleteFile: function(dd) {
          var Jd = ld.getProgram().getSourceFile(dd);
          Jd && od(Jd)
        }
      }
    }

    function gd(dd) {
      throw new Error("Method '" + dd + "' is not implemented.")
    }

    function Cd(dd, Jd) {
      return function() {
        for (var kd = arguments.length, pd = new Array(kd), Nd = 0; Nd < kd; Nd++) pd[Nd] = arguments[Nd];
        var Wd = Jd.apply(void 0, pd),
          Zd = "string" === typeof Wd ? Wd.slice(0, 80) + "..." : Wd;
        return Pd.apply(void 0, ["> " + dd].concat(pd)), Pd("< " + Zd), Wd
      }
    }
    var Kd = function(dd) {
        return pd({}, dd.getDefaultCompilerOptions(), {
          jsx: dd.JsxEmit.React,
          strict: !0,
          esModuleInterop: !0,
          module: dd.ModuleKind.ESNext,
          suppressOutputPathCheck: !0,
          skipLibCheck: !0,
          skipDefaultLibCheck: !0
        }, dd.versionMajorMinor && Number(dd.versionMajorMinor.split(".")[0]) >= 6 ? {
          ignoreDeprecations: "6.0"
        } : {
          moduleResolution: dd.ModuleResolutionKind.NodeJs
        })
      },
      od = function(dd) {
        return dd.replace("/", "/lib.").toLowerCase()
      };

    function ld(dd) {
      return {
        args: [],
        createDirectory: function() {
          return gd("createDirectory")
        },
        directoryExists: Cd("directoryExists", (function(Jd) {
          return Array.from(dd.keys()).some((function(dd) {
            return dd.startsWith(Jd)
          }))
        })),
        exit: function() {
          return gd("exit")
        },
        fileExists: Cd("fileExists", (function(Jd) {
          return dd.has(Jd) || dd.has(od(Jd))
        })),
        getCurrentDirectory: function() {
          return "/"
        },
        getDirectories: function() {
          return []
        },
        getExecutingFilePath: function() {
          return gd("getExecutingFilePath")
        },
        readDirectory: Cd("readDirectory", (function(Jd) {
          return "/" === Jd ? Array.from(dd.keys()) : []
        })),
        readFile: Cd("readFile", (function(Jd) {
          var kd;
          return null != (kd = dd.get(Jd)) ? kd : dd.get(od(Jd))
        })),
        resolvePath: function(dd) {
          return dd
        },
        newLine: "\n",
        useCaseSensitiveFileNames: !0,
        write: function() {
          return gd("write")
        },
        writeFile: function(Jd, kd) {
          dd.set(Jd, kd)
        },
        deleteFile: function(Jd) {
          dd.delete(Jd)
        }
      }
    }

    function Qd(dd, Jd, kd) {
      var Nd = new Map;
      return {
        compilerHost: pd({}, dd, {
          getCanonicalFileName: function(dd) {
            return dd
          },
          getDefaultLibFileName: function() {
            return "/" + kd.getDefaultLibFileName(Jd)
          },
          getNewLine: function() {
            return dd.newLine
          },
          getSourceFile: function(pd, Wd) {
            var Pd, Zd;
            return Nd.get(pd) || (Zd = kd.createSourceFile(pd, dd.readFile(pd), null != (Pd = null != Wd ? Wd : Jd.target) ? Pd : Kd(kd).target, !1), Nd.set(Zd.fileName, Zd), Zd)
          },
          useCaseSensitiveFileNames: function() {
            return dd.useCaseSensitiveFileNames
          }
        }),
        updateFile: function(Jd) {
          var kd = Nd.has(Jd.fileName);
          return dd.writeFile(Jd.fileName, Jd.text), Nd.set(Jd.fileName, Jd), kd
        },
        deleteFile: function(Jd) {
          var kd = Nd.has(Jd.fileName);
          return Nd.delete(Jd.fileName), dd.deleteFile(Jd.fileName), kd
        }
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);