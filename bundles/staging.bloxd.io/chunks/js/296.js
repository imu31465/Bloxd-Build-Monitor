export const id = 296;
export const ids = [296];
export const modules = {
  40957: (kk, ek, ik) => {
    function Dk() {
      return Dk = Object.assign ? Object.assign.bind() : function(kk) {
        for (var ek = 1; ek < arguments.length; ek++) {
          var ik = arguments[ek];
          for (var Dk in ik)({}).hasOwnProperty.call(ik, Dk) && (kk[Dk] = ik[Dk])
        }
        return kk
      }, Dk.apply(null, arguments)
    }
    ik.d(ek, {
      e: () => xk,
      g: () => rk
    });
    var fk = !1;
    try {
      fk = "undefined" !== typeof localStorage
    } catch (Uk) {}
    var Sk = "undefined" !== typeof process,
      bk = fk && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || Sk && {
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

    function rk(kk, ek, ik, fk, Sk) {
      void 0 === fk && (fk = {});
      var bk = Dk({}, Mk(ik), fk),
        rk = function(kk, ek, ik, fk, Sk) {
          var bk = [].concat(ek),
            rk = nk(kk, ik, fk),
            Pk = rk.compilerHost,
            mk = rk.updateFile,
            Mk = rk.deleteFile,
            Kk = new Map,
            xk = 0,
            Uk = Dk({}, Pk, {
              getProjectVersion: function() {
                return xk.toString()
              },
              getCompilationSettings: function() {
                return ik
              },
              getCustomTransformers: function() {
                return Sk
              },
              getScriptFileNames: function() {
                return bk.slice()
              },
              getScriptSnapshot: function(ek) {
                var ik = kk.readFile(ek);
                if (ik && "string" === typeof ik) return fk.ScriptSnapshot.fromString(ik)
              },
              getScriptVersion: function(kk) {
                return Kk.get(kk) || "0"
              },
              writeFile: kk.writeFile
            }),
            Hk = {
              languageServiceHost: Uk,
              updateFile: function(kk) {
                xk++, Kk.set(kk.fileName, xk.toString()), bk.includes(kk.fileName) || bk.push(kk.fileName), mk(kk)
              },
              deleteFile: function(kk) {
                xk++, Kk.set(kk.fileName, xk.toString());
                var ek = bk.indexOf(kk.fileName); - 1 !== ek && bk.splice(ek, 1), Mk(kk)
              }
            };
          return Hk
        }(kk, ek, bk, ik, Sk),
        Pk = rk.languageServiceHost,
        mk = rk.updateFile,
        Kk = rk.deleteFile,
        xk = ik.createLanguageService(Pk),
        Uk = xk.getCompilerOptionsDiagnostics();
      if (Uk.length) {
        var Hk = nk(kk, fk, ik);
        throw new Error(ik.formatDiagnostics(Uk, Hk.compilerHost))
      }
      return {
        name: "vfs",
        sys: kk,
        languageService: xk,
        getSourceFile: function(kk) {
          var ek;
          return null == (ek = xk.getProgram()) ? void 0 : ek.getSourceFile(kk)
        },
        createFile: function(kk, ek) {
          mk(ik.createSourceFile(kk, ek, bk.target, !1))
        },
        updateFile: function(kk, ek, Dk) {
          var fk = xk.getProgram().getSourceFile(kk);
          if (!fk) throw new Error("Did not find a source file for " + kk);
          var Sk = fk.text,
            bk = null != Dk ? Dk : ik.createTextSpan(0, Sk.length),
            rk = Sk.slice(0, bk.start) + ek + Sk.slice(bk.start + bk.length),
            Pk = ik.updateSourceFile(fk, rk, {
              span: bk,
              newLength: ek.length
            });
          mk(Pk)
        },
        deleteFile: function(kk) {
          var ek = xk.getProgram().getSourceFile(kk);
          ek && Kk(ek)
        }
      }
    }

    function Pk(kk) {
      throw new Error("Method '" + kk + "' is not implemented.")
    }

    function mk(kk, ek) {
      return function() {
        for (var ik = arguments.length, Dk = new Array(ik), fk = 0; fk < ik; fk++) Dk[fk] = arguments[fk];
        var Sk = ek.apply(void 0, Dk),
          rk = "string" === typeof Sk ? Sk.slice(0, 80) + "..." : Sk;
        return bk.apply(void 0, ["> " + kk].concat(Dk)), bk("< " + rk), Sk
      }
    }
    var Mk = function(kk) {
        return Dk({}, kk.getDefaultCompilerOptions(), {
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
      Kk = function(kk) {
        return kk.replace("/", "/lib.").toLowerCase()
      };

    function xk(kk) {
      return {
        args: [],
        createDirectory: function() {
          return Pk("createDirectory")
        },
        directoryExists: mk("directoryExists", (function(ek) {
          return Array.from(kk.keys()).some((function(kk) {
            return kk.startsWith(ek)
          }))
        })),
        exit: function() {
          return Pk("exit")
        },
        fileExists: mk("fileExists", (function(ek) {
          return kk.has(ek) || kk.has(Kk(ek))
        })),
        getCurrentDirectory: function() {
          return "/"
        },
        getDirectories: function() {
          return []
        },
        getExecutingFilePath: function() {
          return Pk("getExecutingFilePath")
        },
        readDirectory: mk("readDirectory", (function(ek) {
          return "/" === ek ? Array.from(kk.keys()) : []
        })),
        readFile: mk("readFile", (function(ek) {
          var ik;
          return null != (ik = kk.get(ek)) ? ik : kk.get(Kk(ek))
        })),
        resolvePath: function(kk) {
          return kk
        },
        newLine: "\n",
        useCaseSensitiveFileNames: !0,
        write: function() {
          return Pk("write")
        },
        writeFile: function(ek, ik) {
          kk.set(ek, ik)
        },
        deleteFile: function(ek) {
          kk.delete(ek)
        }
      }
    }

    function nk(kk, ek, ik) {
      var fk = new Map;
      return {
        compilerHost: Dk({}, kk, {
          getCanonicalFileName: function(kk) {
            return kk
          },
          getDefaultLibFileName: function() {
            return "/" + ik.getDefaultLibFileName(ek)
          },
          getNewLine: function() {
            return kk.newLine
          },
          getSourceFile: function(Dk, Sk) {
            var bk, rk;
            return fk.get(Dk) || (rk = ik.createSourceFile(Dk, kk.readFile(Dk), null != (bk = null != Sk ? Sk : ek.target) ? bk : Mk(ik).target, !1), fk.set(rk.fileName, rk), rk)
          },
          useCaseSensitiveFileNames: function() {
            return kk.useCaseSensitiveFileNames
          }
        }),
        updateFile: function(ek) {
          var ik = fk.has(ek.fileName);
          return kk.writeFile(ek.fileName, ek.text), fk.set(ek.fileName, ek), ik
        },
        deleteFile: function(ek) {
          var ik = fk.has(ek.fileName);
          return fk.delete(ek.fileName), kk.deleteFile(ek.fileName), ik
        }
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);