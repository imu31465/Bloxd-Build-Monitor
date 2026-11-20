export const id = 288;
export const ids = [288];
export const modules = {
  40788: (UU, RU, gU) => {
    function tU() {
      return tU = Object.assign ? Object.assign.bind() : function(UU) {
        for (var RU = 1; RU < arguments.length; RU++) {
          var gU = arguments[RU];
          for (var tU in gU)({}).hasOwnProperty.call(gU, tU) && (UU[tU] = gU[tU])
        }
        return UU
      }, tU.apply(null, arguments)
    }
    gU.d(RU, {
      e: () => jU,
      f: () => TU
    });
    var pU = !1;
    try {
      pU = "undefined" !== typeof localStorage
    } catch (CU) {}
    var EU = "undefined" !== typeof process,
      PU = pU && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || EU && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.DEBUG ? console.log : function(UU) {
        return ""
      };

    function TU(UU, RU, gU, pU, EU) {
      void 0 === pU && (pU = {});
      var PU = tU({}, cU(gU), pU),
        TU = function(UU, RU, gU, pU, EU) {
          var PU = [].concat(RU),
            TU = uU(UU, gU, pU),
            qU = TU.compilerHost,
            KU = TU.updateFile,
            cU = TU.deleteFile,
            GU = new Map,
            jU = 0,
            CU = tU({}, qU, {
              getProjectVersion: function() {
                return jU.toString()
              },
              getCompilationSettings: function() {
                return gU
              },
              getCustomTransformers: function() {
                return EU
              },
              getScriptFileNames: function() {
                return PU.slice()
              },
              getScriptSnapshot: function(RU) {
                var gU = UU.readFile(RU);
                if (gU && "string" === typeof gU) return pU.ScriptSnapshot.fromString(gU)
              },
              getScriptVersion: function(UU) {
                return GU.get(UU) || "0"
              },
              writeFile: UU.writeFile
            }),
            hU = {
              languageServiceHost: CU,
              updateFile: function(UU) {
                jU++, GU.set(UU.fileName, jU.toString()), PU.includes(UU.fileName) || PU.push(UU.fileName), KU(UU)
              },
              deleteFile: function(UU) {
                jU++, GU.set(UU.fileName, jU.toString());
                var RU = PU.indexOf(UU.fileName); - 1 !== RU && PU.splice(RU, 1), cU(UU)
              }
            };
          return hU
        }(UU, RU, PU, gU, EU),
        qU = TU.languageServiceHost,
        KU = TU.updateFile,
        GU = TU.deleteFile,
        jU = gU.createLanguageService(qU),
        CU = jU.getCompilerOptionsDiagnostics();
      if (CU.length) {
        var hU = uU(UU, pU, gU);
        throw new Error(gU.formatDiagnostics(CU, hU.compilerHost))
      }
      return {
        name: "vfs",
        sys: UU,
        languageService: jU,
        getSourceFile: function(UU) {
          var RU;
          return null == (RU = jU.getProgram()) ? void 0 : RU.getSourceFile(UU)
        },
        createFile: function(UU, RU) {
          KU(gU.createSourceFile(UU, RU, PU.target, !1))
        },
        updateFile: function(UU, RU, tU) {
          var pU = jU.getProgram().getSourceFile(UU);
          if (!pU) throw new Error("Did not find a source file for " + UU);
          var EU = pU.text,
            PU = null != tU ? tU : gU.createTextSpan(0, EU.length),
            TU = EU.slice(0, PU.start) + RU + EU.slice(PU.start + PU.length),
            qU = gU.updateSourceFile(pU, TU, {
              span: PU,
              newLength: RU.length
            });
          KU(qU)
        },
        deleteFile: function(UU) {
          var RU = jU.getProgram().getSourceFile(UU);
          RU && GU(RU)
        }
      }
    }

    function qU(UU) {
      throw new Error("Method '" + UU + "' is not implemented.")
    }

    function KU(UU, RU) {
      return function() {
        for (var gU = arguments.length, tU = new Array(gU), pU = 0; pU < gU; pU++) tU[pU] = arguments[pU];
        var EU = RU.apply(void 0, tU),
          TU = "string" === typeof EU ? EU.slice(0, 80) + "..." : EU;
        return PU.apply(void 0, ["> " + UU].concat(tU)), PU("< " + TU), EU
      }
    }
    var cU = function(UU) {
        return tU({}, UU.getDefaultCompilerOptions(), {
          jsx: UU.JsxEmit.React,
          strict: !0,
          esModuleInterop: !0,
          module: UU.ModuleKind.ESNext,
          suppressOutputPathCheck: !0,
          skipLibCheck: !0,
          skipDefaultLibCheck: !0
        }, UU.versionMajorMinor && Number(UU.versionMajorMinor.split(".")[0]) >= 6 ? {
          ignoreDeprecations: "6.0"
        } : {
          moduleResolution: UU.ModuleResolutionKind.NodeJs
        })
      },
      GU = function(UU) {
        return UU.replace("/", "/lib.").toLowerCase()
      };

    function jU(UU) {
      return {
        args: [],
        createDirectory: function() {
          return qU("createDirectory")
        },
        directoryExists: KU("directoryExists", (function(RU) {
          return Array.from(UU.keys()).some((function(UU) {
            return UU.startsWith(RU)
          }))
        })),
        exit: function() {
          return qU("exit")
        },
        fileExists: KU("fileExists", (function(RU) {
          return UU.has(RU) || UU.has(GU(RU))
        })),
        getCurrentDirectory: function() {
          return "/"
        },
        getDirectories: function() {
          return []
        },
        getExecutingFilePath: function() {
          return qU("getExecutingFilePath")
        },
        readDirectory: KU("readDirectory", (function(RU) {
          return "/" === RU ? Array.from(UU.keys()) : []
        })),
        readFile: KU("readFile", (function(RU) {
          var gU;
          return null != (gU = UU.get(RU)) ? gU : UU.get(GU(RU))
        })),
        resolvePath: function(UU) {
          return UU
        },
        newLine: "\n",
        useCaseSensitiveFileNames: !0,
        write: function() {
          return qU("write")
        },
        writeFile: function(RU, gU) {
          UU.set(RU, gU)
        },
        deleteFile: function(RU) {
          UU.delete(RU)
        }
      }
    }

    function uU(UU, RU, gU) {
      var pU = new Map;
      return {
        compilerHost: tU({}, UU, {
          getCanonicalFileName: function(UU) {
            return UU
          },
          getDefaultLibFileName: function() {
            return "/" + gU.getDefaultLibFileName(RU)
          },
          getNewLine: function() {
            return UU.newLine
          },
          getSourceFile: function(tU, EU) {
            var PU, TU;
            return pU.get(tU) || (TU = gU.createSourceFile(tU, UU.readFile(tU), null != (PU = null != EU ? EU : RU.target) ? PU : cU(gU).target, !1), pU.set(TU.fileName, TU), TU)
          },
          useCaseSensitiveFileNames: function() {
            return UU.useCaseSensitiveFileNames
          }
        }),
        updateFile: function(RU) {
          var gU = pU.has(RU.fileName);
          return UU.writeFile(RU.fileName, RU.text), pU.set(RU.fileName, RU), gU
        },
        deleteFile: function(RU) {
          var gU = pU.has(RU.fileName);
          return pU.delete(RU.fileName), UU.deleteFile(RU.fileName), gU
        }
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);