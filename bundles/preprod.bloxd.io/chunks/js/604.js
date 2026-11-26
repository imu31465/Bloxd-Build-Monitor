export const id = 604;
export const ids = [604];
export const modules = {
  44093: (UU, XU, zU) => {
    function cU() {
      return cU = Object.assign ? Object.assign.bind() : function(UU) {
        for (var XU = 1; XU < arguments.length; XU++) {
          var zU = arguments[XU];
          for (var cU in zU)({}).hasOwnProperty.call(zU, cU) && (UU[cU] = zU[cU])
        }
        return UU
      }, cU.apply(null, arguments)
    }
    zU.d(XU, {
      e: () => NU,
      g: () => FU
    });
    var yU = !1;
    try {
      yU = "undefined" !== typeof localStorage
    } catch (pU) {}
    var QU = "undefined" !== typeof process,
      AU = yU && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || QU && {
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

    function FU(UU, XU, zU, yU, QU) {
      void 0 === yU && (yU = {});
      var AU = cU({}, EU(zU), yU),
        FU = function(UU, XU, zU, yU, QU) {
          var AU = [].concat(XU),
            FU = IU(UU, zU, yU),
            oU = FU.compilerHost,
            DU = FU.updateFile,
            EU = FU.deleteFile,
            YU = new Map,
            NU = 0,
            pU = cU({}, oU, {
              getProjectVersion: function() {
                return NU.toString()
              },
              getCompilationSettings: function() {
                return zU
              },
              getCustomTransformers: function() {
                return QU
              },
              getScriptFileNames: function() {
                return AU.slice()
              },
              getScriptSnapshot: function(XU) {
                var zU = UU.readFile(XU);
                if (zU && "string" === typeof zU) return yU.ScriptSnapshot.fromString(zU)
              },
              getScriptVersion: function(UU) {
                return YU.get(UU) || "0"
              },
              writeFile: UU.writeFile
            }),
            aU = {
              languageServiceHost: pU,
              updateFile: function(UU) {
                NU++, YU.set(UU.fileName, NU.toString()), AU.includes(UU.fileName) || AU.push(UU.fileName), DU(UU)
              },
              deleteFile: function(UU) {
                NU++, YU.set(UU.fileName, NU.toString());
                var XU = AU.indexOf(UU.fileName); - 1 !== XU && AU.splice(XU, 1), EU(UU)
              }
            };
          return aU
        }(UU, XU, AU, zU, QU),
        oU = FU.languageServiceHost,
        DU = FU.updateFile,
        YU = FU.deleteFile,
        NU = zU.createLanguageService(oU),
        pU = NU.getCompilerOptionsDiagnostics();
      if (pU.length) {
        var aU = IU(UU, yU, zU);
        throw new Error(zU.formatDiagnostics(pU, aU.compilerHost))
      }
      return {
        name: "vfs",
        sys: UU,
        languageService: NU,
        getSourceFile: function(UU) {
          var XU;
          return null == (XU = NU.getProgram()) ? void 0 : XU.getSourceFile(UU)
        },
        createFile: function(UU, XU) {
          DU(zU.createSourceFile(UU, XU, AU.target, !1))
        },
        updateFile: function(UU, XU, cU) {
          var yU = NU.getProgram().getSourceFile(UU);
          if (!yU) throw new Error("Did not find a source file for " + UU);
          var QU = yU.text,
            AU = null != cU ? cU : zU.createTextSpan(0, QU.length),
            FU = QU.slice(0, AU.start) + XU + QU.slice(AU.start + AU.length),
            oU = zU.updateSourceFile(yU, FU, {
              span: AU,
              newLength: XU.length
            });
          DU(oU)
        },
        deleteFile: function(UU) {
          var XU = NU.getProgram().getSourceFile(UU);
          XU && YU(XU)
        }
      }
    }

    function oU(UU) {
      throw new Error("Method '" + UU + "' is not implemented.")
    }

    function DU(UU, XU) {
      return function() {
        for (var zU = arguments.length, cU = new Array(zU), yU = 0; yU < zU; yU++) cU[yU] = arguments[yU];
        var QU = XU.apply(void 0, cU),
          FU = "string" === typeof QU ? QU.slice(0, 80) + "..." : QU;
        return AU.apply(void 0, ["> " + UU].concat(cU)), AU("< " + FU), QU
      }
    }
    var EU = function(UU) {
        return cU({}, UU.getDefaultCompilerOptions(), {
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
      YU = function(UU) {
        return UU.replace("/", "/lib.").toLowerCase()
      };

    function NU(UU) {
      return {
        args: [],
        createDirectory: function() {
          return oU("createDirectory")
        },
        directoryExists: DU("directoryExists", (function(XU) {
          return Array.from(UU.keys()).some((function(UU) {
            return UU.startsWith(XU)
          }))
        })),
        exit: function() {
          return oU("exit")
        },
        fileExists: DU("fileExists", (function(XU) {
          return UU.has(XU) || UU.has(YU(XU))
        })),
        getCurrentDirectory: function() {
          return "/"
        },
        getDirectories: function() {
          return []
        },
        getExecutingFilePath: function() {
          return oU("getExecutingFilePath")
        },
        readDirectory: DU("readDirectory", (function(XU) {
          return "/" === XU ? Array.from(UU.keys()) : []
        })),
        readFile: DU("readFile", (function(XU) {
          var zU;
          return null != (zU = UU.get(XU)) ? zU : UU.get(YU(XU))
        })),
        resolvePath: function(UU) {
          return UU
        },
        newLine: "\n",
        useCaseSensitiveFileNames: !0,
        write: function() {
          return oU("write")
        },
        writeFile: function(XU, zU) {
          UU.set(XU, zU)
        },
        deleteFile: function(XU) {
          UU.delete(XU)
        }
      }
    }

    function IU(UU, XU, zU) {
      var yU = new Map;
      return {
        compilerHost: cU({}, UU, {
          getCanonicalFileName: function(UU) {
            return UU
          },
          getDefaultLibFileName: function() {
            return "/" + zU.getDefaultLibFileName(XU)
          },
          getNewLine: function() {
            return UU.newLine
          },
          getSourceFile: function(cU, QU) {
            var AU, FU;
            return yU.get(cU) || (FU = zU.createSourceFile(cU, UU.readFile(cU), null != (AU = null != QU ? QU : XU.target) ? AU : EU(zU).target, !1), yU.set(FU.fileName, FU), FU)
          },
          useCaseSensitiveFileNames: function() {
            return UU.useCaseSensitiveFileNames
          }
        }),
        updateFile: function(XU) {
          var zU = yU.has(XU.fileName);
          return UU.writeFile(XU.fileName, XU.text), yU.set(XU.fileName, XU), zU
        },
        deleteFile: function(XU) {
          var zU = yU.has(XU.fileName);
          return yU.delete(XU.fileName), UU.deleteFile(XU.fileName), zU
        }
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);