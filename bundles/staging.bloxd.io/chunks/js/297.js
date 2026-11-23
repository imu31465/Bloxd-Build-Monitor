export const id = 297;
export const ids = [297];
export const modules = {
  41385: (kk, Fk, Ik) => {
    function Xk() {
      return Xk = Object.assign ? Object.assign.bind() : function(kk) {
        for (var Fk = 1; Fk < arguments.length; Fk++) {
          var Ik = arguments[Fk];
          for (var Xk in Ik)({}).hasOwnProperty.call(Ik, Xk) && (kk[Xk] = Ik[Xk])
        }
        return kk
      }, Xk.apply(null, arguments)
    }
    Ik.d(Fk, {
      c: () => Zk,
      e: () => lk
    });
    var Tk = !1;
    try {
      Tk = "undefined" !== typeof localStorage
    } catch (ek) {}
    var ik = "undefined" !== typeof process,
      yk = Tk && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || ik && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.DEBUG ? console.log : function(kk) {
        return ""
      };

    function lk(kk, Fk, Ik, Tk, ik) {
      void 0 === Tk && (Tk = {});
      var yk = Xk({}, Lk(Ik), Tk),
        lk = function(kk, Fk, Ik, Tk, ik) {
          var yk = [].concat(Fk),
            lk = jk(kk, Ik, Tk),
            ak = lk.compilerHost,
            qk = lk.updateFile,
            Lk = lk.deleteFile,
            tk = new Map,
            Zk = 0,
            ek = Xk({}, ak, {
              getProjectVersion: function() {
                return Zk.toString()
              },
              getCompilationSettings: function() {
                return Ik
              },
              getCustomTransformers: function() {
                return ik
              },
              getScriptFileNames: function() {
                return yk.slice()
              },
              getScriptSnapshot: function(Fk) {
                var Ik = kk.readFile(Fk);
                if (Ik && "string" === typeof Ik) return Tk.ScriptSnapshot.fromString(Ik)
              },
              getScriptVersion: function(kk) {
                return tk.get(kk) || "0"
              },
              writeFile: kk.writeFile
            }),
            wk = {
              languageServiceHost: ek,
              updateFile: function(kk) {
                Zk++, tk.set(kk.fileName, Zk.toString()), yk.includes(kk.fileName) || yk.push(kk.fileName), qk(kk)
              },
              deleteFile: function(kk) {
                Zk++, tk.set(kk.fileName, Zk.toString());
                var Fk = yk.indexOf(kk.fileName); - 1 !== Fk && yk.splice(Fk, 1), Lk(kk)
              }
            };
          return wk
        }(kk, Fk, yk, Ik, ik),
        ak = lk.languageServiceHost,
        qk = lk.updateFile,
        tk = lk.deleteFile,
        Zk = Ik.createLanguageService(ak),
        ek = Zk.getCompilerOptionsDiagnostics();
      if (ek.length) {
        var wk = jk(kk, Tk, Ik);
        throw new Error(Ik.formatDiagnostics(ek, wk.compilerHost))
      }
      return {
        name: "vfs",
        sys: kk,
        languageService: Zk,
        getSourceFile: function(kk) {
          var Fk;
          return null == (Fk = Zk.getProgram()) ? void 0 : Fk.getSourceFile(kk)
        },
        createFile: function(kk, Fk) {
          qk(Ik.createSourceFile(kk, Fk, yk.target, !1))
        },
        updateFile: function(kk, Fk, Xk) {
          var Tk = Zk.getProgram().getSourceFile(kk);
          if (!Tk) throw new Error("Did not find a source file for " + kk);
          var ik = Tk.text,
            yk = null != Xk ? Xk : Ik.createTextSpan(0, ik.length),
            lk = ik.slice(0, yk.start) + Fk + ik.slice(yk.start + yk.length),
            ak = Ik.updateSourceFile(Tk, lk, {
              span: yk,
              newLength: Fk.length
            });
          qk(ak)
        },
        deleteFile: function(kk) {
          var Fk = Zk.getProgram().getSourceFile(kk);
          Fk && tk(Fk)
        }
      }
    }

    function ak(kk) {
      throw new Error("Method '" + kk + "' is not implemented.")
    }

    function qk(kk, Fk) {
      return function() {
        for (var Ik = arguments.length, Xk = new Array(Ik), Tk = 0; Tk < Ik; Tk++) Xk[Tk] = arguments[Tk];
        var ik = Fk.apply(void 0, Xk),
          lk = "string" === typeof ik ? ik.slice(0, 80) + "..." : ik;
        return yk.apply(void 0, ["> " + kk].concat(Xk)), yk("< " + lk), ik
      }
    }
    var Lk = function(kk) {
        return Xk({}, kk.getDefaultCompilerOptions(), {
          jsx: kk.JsxEmit.React,
          strict: !0,
          esModuleInterop: !0,
          module: kk.ModuleKind.ESNext,
          suppressOutputPathCheck: !0,
          skipLibCheck: !0,
          skipDefaultLibCheck: !0
        }, kk.versionMajorMinor && Number(kk.versionMajorMinor.split(".")[0]) >= 6 ? {
          ignoreDeprecations: "6.0"
        } : {
          moduleResolution: kk.ModuleResolutionKind.NodeJs
        })
      },
      tk = function(kk) {
        return kk.replace("/", "/lib.").toLowerCase()
      };

    function Zk(kk) {
      return {
        args: [],
        createDirectory: function() {
          return ak("createDirectory")
        },
        directoryExists: qk("directoryExists", (function(Fk) {
          return Array.from(kk.keys()).some((function(kk) {
            return kk.startsWith(Fk)
          }))
        })),
        exit: function() {
          return ak("exit")
        },
        fileExists: qk("fileExists", (function(Fk) {
          return kk.has(Fk) || kk.has(tk(Fk))
        })),
        getCurrentDirectory: function() {
          return "/"
        },
        getDirectories: function() {
          return []
        },
        getExecutingFilePath: function() {
          return ak("getExecutingFilePath")
        },
        readDirectory: qk("readDirectory", (function(Fk) {
          return "/" === Fk ? Array.from(kk.keys()) : []
        })),
        readFile: qk("readFile", (function(Fk) {
          var Ik;
          return null != (Ik = kk.get(Fk)) ? Ik : kk.get(tk(Fk))
        })),
        resolvePath: function(kk) {
          return kk
        },
        newLine: "\n",
        useCaseSensitiveFileNames: !0,
        write: function() {
          return ak("write")
        },
        writeFile: function(Fk, Ik) {
          kk.set(Fk, Ik)
        },
        deleteFile: function(Fk) {
          kk.delete(Fk)
        }
      }
    }

    function jk(kk, Fk, Ik) {
      var Tk = new Map;
      return {
        compilerHost: Xk({}, kk, {
          getCanonicalFileName: function(kk) {
            return kk
          },
          getDefaultLibFileName: function() {
            return "/" + Ik.getDefaultLibFileName(Fk)
          },
          getNewLine: function() {
            return kk.newLine
          },
          getSourceFile: function(Xk, ik) {
            var yk, lk;
            return Tk.get(Xk) || (lk = Ik.createSourceFile(Xk, kk.readFile(Xk), null != (yk = null != ik ? ik : Fk.target) ? yk : Lk(Ik).target, !1), Tk.set(lk.fileName, lk), lk)
          },
          useCaseSensitiveFileNames: function() {
            return kk.useCaseSensitiveFileNames
          }
        }),
        updateFile: function(Fk) {
          var Ik = Tk.has(Fk.fileName);
          return kk.writeFile(Fk.fileName, Fk.text), Tk.set(Fk.fileName, Fk), Ik
        },
        deleteFile: function(Fk) {
          var Ik = Tk.has(Fk.fileName);
          return Tk.delete(Fk.fileName), kk.deleteFile(Fk.fileName), Ik
        }
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);