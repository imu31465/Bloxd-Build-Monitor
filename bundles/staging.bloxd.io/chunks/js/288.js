export const id = 288;
export const ids = [288];
export const modules = {
  40811: (kk, Fk, Bk) => {
    function Rk() {
      return Rk = Object.assign ? Object.assign.bind() : function(kk) {
        for (var Fk = 1; Fk < arguments.length; Fk++) {
          var Bk = arguments[Fk];
          for (var Rk in Bk)({}).hasOwnProperty.call(Bk, Rk) && (kk[Rk] = Bk[Rk])
        }
        return kk
      }, Rk.apply(null, arguments)
    }
    Bk.d(Fk, {
      b: () => Jk,
      f: () => bk
    });
    var tk = !1;
    try {
      tk = "undefined" !== typeof localStorage
    } catch (ek) {}
    var ak = "undefined" !== typeof process,
      Xk = tk && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || ak && {
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

    function bk(kk, Fk, Bk, tk, ak) {
      void 0 === tk && (tk = {});
      var Xk = Rk({}, sk(Bk), tk),
        bk = function(kk, Fk, Bk, tk, ak) {
          var Xk = [].concat(Fk),
            bk = Ak(kk, Bk, tk),
            wk = bk.compilerHost,
            dk = bk.updateFile,
            sk = bk.deleteFile,
            Vk = new Map,
            Jk = 0,
            ek = Rk({}, wk, {
              getProjectVersion: function() {
                return Jk.toString()
              },
              getCompilationSettings: function() {
                return Bk
              },
              getCustomTransformers: function() {
                return ak
              },
              getScriptFileNames: function() {
                return Xk.slice()
              },
              getScriptSnapshot: function(Fk) {
                var Bk = kk.readFile(Fk);
                if (Bk && "string" === typeof Bk) return tk.ScriptSnapshot.fromString(Bk)
              },
              getScriptVersion: function(kk) {
                return Vk.get(kk) || "0"
              },
              writeFile: kk.writeFile
            }),
            yk = {
              languageServiceHost: ek,
              updateFile: function(kk) {
                Jk++, Vk.set(kk.fileName, Jk.toString()), Xk.includes(kk.fileName) || Xk.push(kk.fileName), dk(kk)
              },
              deleteFile: function(kk) {
                Jk++, Vk.set(kk.fileName, Jk.toString());
                var Fk = Xk.indexOf(kk.fileName); - 1 !== Fk && Xk.splice(Fk, 1), sk(kk)
              }
            };
          return yk
        }(kk, Fk, Xk, Bk, ak),
        wk = bk.languageServiceHost,
        dk = bk.updateFile,
        Vk = bk.deleteFile,
        Jk = Bk.createLanguageService(wk),
        ek = Jk.getCompilerOptionsDiagnostics();
      if (ek.length) {
        var yk = Ak(kk, tk, Bk);
        throw new Error(Bk.formatDiagnostics(ek, yk.compilerHost))
      }
      return {
        name: "vfs",
        sys: kk,
        languageService: Jk,
        getSourceFile: function(kk) {
          var Fk;
          return null == (Fk = Jk.getProgram()) ? void 0 : Fk.getSourceFile(kk)
        },
        createFile: function(kk, Fk) {
          dk(Bk.createSourceFile(kk, Fk, Xk.target, !1))
        },
        updateFile: function(kk, Fk, Rk) {
          var tk = Jk.getProgram().getSourceFile(kk);
          if (!tk) throw new Error("Did not find a source file for " + kk);
          var ak = tk.text,
            Xk = null != Rk ? Rk : Bk.createTextSpan(0, ak.length),
            bk = ak.slice(0, Xk.start) + Fk + ak.slice(Xk.start + Xk.length),
            wk = Bk.updateSourceFile(tk, bk, {
              span: Xk,
              newLength: Fk.length
            });
          dk(wk)
        },
        deleteFile: function(kk) {
          var Fk = Jk.getProgram().getSourceFile(kk);
          Fk && Vk(Fk)
        }
      }
    }

    function wk(kk) {
      throw new Error("Method '" + kk + "' is not implemented.")
    }

    function dk(kk, Fk) {
      return function() {
        for (var Bk = arguments.length, Rk = new Array(Bk), tk = 0; tk < Bk; tk++) Rk[tk] = arguments[tk];
        var ak = Fk.apply(void 0, Rk),
          bk = "string" === typeof ak ? ak.slice(0, 80) + "..." : ak;
        return Xk.apply(void 0, ["> " + kk].concat(Rk)), Xk("< " + bk), ak
      }
    }
    var sk = function(kk) {
        return Rk({}, kk.getDefaultCompilerOptions(), {
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
      Vk = function(kk) {
        return kk.replace("/", "/lib.").toLowerCase()
      };

    function Jk(kk) {
      return {
        args: [],
        createDirectory: function() {
          return wk("createDirectory")
        },
        directoryExists: dk("directoryExists", (function(Fk) {
          return Array.from(kk.keys()).some((function(kk) {
            return kk.startsWith(Fk)
          }))
        })),
        exit: function() {
          return wk("exit")
        },
        fileExists: dk("fileExists", (function(Fk) {
          return kk.has(Fk) || kk.has(Vk(Fk))
        })),
        getCurrentDirectory: function() {
          return "/"
        },
        getDirectories: function() {
          return []
        },
        getExecutingFilePath: function() {
          return wk("getExecutingFilePath")
        },
        readDirectory: dk("readDirectory", (function(Fk) {
          return "/" === Fk ? Array.from(kk.keys()) : []
        })),
        readFile: dk("readFile", (function(Fk) {
          var Bk;
          return null != (Bk = kk.get(Fk)) ? Bk : kk.get(Vk(Fk))
        })),
        resolvePath: function(kk) {
          return kk
        },
        newLine: "\n",
        useCaseSensitiveFileNames: !0,
        write: function() {
          return wk("write")
        },
        writeFile: function(Fk, Bk) {
          kk.set(Fk, Bk)
        },
        deleteFile: function(Fk) {
          kk.delete(Fk)
        }
      }
    }

    function Ak(kk, Fk, Bk) {
      var tk = new Map;
      return {
        compilerHost: Rk({}, kk, {
          getCanonicalFileName: function(kk) {
            return kk
          },
          getDefaultLibFileName: function() {
            return "/" + Bk.getDefaultLibFileName(Fk)
          },
          getNewLine: function() {
            return kk.newLine
          },
          getSourceFile: function(Rk, ak) {
            var Xk, bk;
            return tk.get(Rk) || (bk = Bk.createSourceFile(Rk, kk.readFile(Rk), null != (Xk = null != ak ? ak : Fk.target) ? Xk : sk(Bk).target, !1), tk.set(bk.fileName, bk), bk)
          },
          useCaseSensitiveFileNames: function() {
            return kk.useCaseSensitiveFileNames
          }
        }),
        updateFile: function(Fk) {
          var Bk = tk.has(Fk.fileName);
          return kk.writeFile(Fk.fileName, Fk.text), tk.set(Fk.fileName, Fk), Bk
        },
        deleteFile: function(Fk) {
          var Bk = tk.has(Fk.fileName);
          return tk.delete(Fk.fileName), kk.deleteFile(Fk.fileName), Bk
        }
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);