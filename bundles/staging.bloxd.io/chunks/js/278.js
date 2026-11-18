export const id = 278;
export const ids = [278];
export const modules = {
  40118: (JJ, cJ, ZJ) => {
    function FJ() {
      return FJ = Object.assign ? Object.assign.bind() : function(JJ) {
        for (var cJ = 1; cJ < arguments.length; cJ++) {
          var ZJ = arguments[cJ];
          for (var FJ in ZJ)({}).hasOwnProperty.call(ZJ, FJ) && (JJ[FJ] = ZJ[FJ])
        }
        return JJ
      }, FJ.apply(null, arguments)
    }
    ZJ.d(cJ, {
      b: () => DJ,
      c: () => AJ
    });
    var UJ = !1;
    try {
      UJ = "undefined" !== typeof localStorage
    } catch (nJ) {}
    var eJ = "undefined" !== typeof process,
      XJ = UJ && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || eJ && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.DEBUG ? console.log : function(JJ) {
        return ""
      };

    function AJ(JJ, cJ, ZJ, UJ, eJ) {
      void 0 === UJ && (UJ = {});
      var XJ = FJ({}, YJ(ZJ), UJ),
        AJ = function(JJ, cJ, ZJ, UJ, eJ) {
          var XJ = [].concat(cJ),
            AJ = sJ(JJ, ZJ, UJ),
            qJ = AJ.compilerHost,
            jJ = AJ.updateFile,
            YJ = AJ.deleteFile,
            hJ = new Map,
            DJ = 0,
            nJ = FJ({}, qJ, {
              getProjectVersion: function() {
                return DJ.toString()
              },
              getCompilationSettings: function() {
                return ZJ
              },
              getCustomTransformers: function() {
                return eJ
              },
              getScriptFileNames: function() {
                return XJ.slice()
              },
              getScriptSnapshot: function(cJ) {
                var ZJ = JJ.readFile(cJ);
                if (ZJ && "string" === typeof ZJ) return UJ.ScriptSnapshot.fromString(ZJ)
              },
              getScriptVersion: function(JJ) {
                return hJ.get(JJ) || "0"
              },
              writeFile: JJ.writeFile
            }),
            GJ = {
              languageServiceHost: nJ,
              updateFile: function(JJ) {
                DJ++, hJ.set(JJ.fileName, DJ.toString()), XJ.includes(JJ.fileName) || XJ.push(JJ.fileName), jJ(JJ)
              },
              deleteFile: function(JJ) {
                DJ++, hJ.set(JJ.fileName, DJ.toString());
                var cJ = XJ.indexOf(JJ.fileName); - 1 !== cJ && XJ.splice(cJ, 1), YJ(JJ)
              }
            };
          return GJ
        }(JJ, cJ, XJ, ZJ, eJ),
        qJ = AJ.languageServiceHost,
        jJ = AJ.updateFile,
        hJ = AJ.deleteFile,
        DJ = ZJ.createLanguageService(qJ),
        nJ = DJ.getCompilerOptionsDiagnostics();
      if (nJ.length) {
        var GJ = sJ(JJ, UJ, ZJ);
        throw new Error(ZJ.formatDiagnostics(nJ, GJ.compilerHost))
      }
      return {
        name: "vfs",
        sys: JJ,
        languageService: DJ,
        getSourceFile: function(JJ) {
          var cJ;
          return null == (cJ = DJ.getProgram()) ? void 0 : cJ.getSourceFile(JJ)
        },
        createFile: function(JJ, cJ) {
          jJ(ZJ.createSourceFile(JJ, cJ, XJ.target, !1))
        },
        updateFile: function(JJ, cJ, FJ) {
          var UJ = DJ.getProgram().getSourceFile(JJ);
          if (!UJ) throw new Error("Did not find a source file for " + JJ);
          var eJ = UJ.text,
            XJ = null != FJ ? FJ : ZJ.createTextSpan(0, eJ.length),
            AJ = eJ.slice(0, XJ.start) + cJ + eJ.slice(XJ.start + XJ.length),
            qJ = ZJ.updateSourceFile(UJ, AJ, {
              span: XJ,
              newLength: cJ.length
            });
          jJ(qJ)
        },
        deleteFile: function(JJ) {
          var cJ = DJ.getProgram().getSourceFile(JJ);
          cJ && hJ(cJ)
        }
      }
    }

    function qJ(JJ) {
      throw new Error("Method '" + JJ + "' is not implemented.")
    }

    function jJ(JJ, cJ) {
      return function() {
        for (var ZJ = arguments.length, FJ = new Array(ZJ), UJ = 0; UJ < ZJ; UJ++) FJ[UJ] = arguments[UJ];
        var eJ = cJ.apply(void 0, FJ),
          AJ = "string" === typeof eJ ? eJ.slice(0, 80) + "..." : eJ;
        return XJ.apply(void 0, ["> " + JJ].concat(FJ)), XJ("< " + AJ), eJ
      }
    }
    var YJ = function(JJ) {
        return FJ({}, JJ.getDefaultCompilerOptions(), {
          jsx: JJ.JsxEmit.React,
          strict: !0,
          esModuleInterop: !0,
          module: JJ.ModuleKind.ESNext,
          suppressOutputPathCheck: !0,
          skipLibCheck: !0,
          skipDefaultLibCheck: !0
        }, JJ.versionMajorMinor && Number(JJ.versionMajorMinor.split(".")[0]) >= 6 ? {
          ignoreDeprecations: "6.0"
        } : {
          moduleResolution: JJ.ModuleResolutionKind.NodeJs
        })
      },
      hJ = function(JJ) {
        return JJ.replace("/", "/lib.").toLowerCase()
      };

    function DJ(JJ) {
      return {
        args: [],
        createDirectory: function() {
          return qJ("createDirectory")
        },
        directoryExists: jJ("directoryExists", (function(cJ) {
          return Array.from(JJ.keys()).some((function(JJ) {
            return JJ.startsWith(cJ)
          }))
        })),
        exit: function() {
          return qJ("exit")
        },
        fileExists: jJ("fileExists", (function(cJ) {
          return JJ.has(cJ) || JJ.has(hJ(cJ))
        })),
        getCurrentDirectory: function() {
          return "/"
        },
        getDirectories: function() {
          return []
        },
        getExecutingFilePath: function() {
          return qJ("getExecutingFilePath")
        },
        readDirectory: jJ("readDirectory", (function(cJ) {
          return "/" === cJ ? Array.from(JJ.keys()) : []
        })),
        readFile: jJ("readFile", (function(cJ) {
          var ZJ;
          return null != (ZJ = JJ.get(cJ)) ? ZJ : JJ.get(hJ(cJ))
        })),
        resolvePath: function(JJ) {
          return JJ
        },
        newLine: "\n",
        useCaseSensitiveFileNames: !0,
        write: function() {
          return qJ("write")
        },
        writeFile: function(cJ, ZJ) {
          JJ.set(cJ, ZJ)
        },
        deleteFile: function(cJ) {
          JJ.delete(cJ)
        }
      }
    }

    function sJ(JJ, cJ, ZJ) {
      var UJ = new Map;
      return {
        compilerHost: FJ({}, JJ, {
          getCanonicalFileName: function(JJ) {
            return JJ
          },
          getDefaultLibFileName: function() {
            return "/" + ZJ.getDefaultLibFileName(cJ)
          },
          getNewLine: function() {
            return JJ.newLine
          },
          getSourceFile: function(FJ, eJ) {
            var XJ, AJ;
            return UJ.get(FJ) || (AJ = ZJ.createSourceFile(FJ, JJ.readFile(FJ), null != (XJ = null != eJ ? eJ : cJ.target) ? XJ : YJ(ZJ).target, !1), UJ.set(AJ.fileName, AJ), AJ)
          },
          useCaseSensitiveFileNames: function() {
            return JJ.useCaseSensitiveFileNames
          }
        }),
        updateFile: function(cJ) {
          var ZJ = UJ.has(cJ.fileName);
          return JJ.writeFile(cJ.fileName, cJ.text), UJ.set(cJ.fileName, cJ), ZJ
        },
        deleteFile: function(cJ) {
          var ZJ = UJ.has(cJ.fileName);
          return UJ.delete(cJ.fileName), JJ.deleteFile(cJ.fileName), ZJ
        }
      }
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);