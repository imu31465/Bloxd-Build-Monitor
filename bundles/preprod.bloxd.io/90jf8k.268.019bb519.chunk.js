export const id = 268;
export const ids = [268];
export const modules = {
  39242: (FF, WF, SF) => {
    function CF() {
      return CF = Object.assign ? Object.assign.bind() : function(FF) {
        for (var WF = 1; WF < arguments.length; WF++) {
          var SF = arguments[WF];
          for (var CF in SF)({}).hasOwnProperty.call(SF, CF) && (FF[CF] = SF[CF])
        }
        return FF
      }, CF.apply(null, arguments)
    }
    SF.d(WF, {
      b: () => eF,
      c: () => bW
    });
    var AF = !1;
    try {
      AF = "undefined" !== typeof localStorage
    } catch (QF) {}
    var uF = "undefined" !== typeof process,
      hF = AF && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || uF && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.DEBUG ? console.log : function(FF) {
        return ""
      };

    function bW(FF, WF, SF, AF, uF) {
      void 0 === AF && (AF = {});
      var hF = CF({}, RF(SF), AF),
        bW = function(FF, WF, SF, AF, uF) {
          var hF = [].concat(WF),
            bW = EF(FF, SF, AF),
            dF = bW.compilerHost,
            PF = bW.updateFile,
            RF = bW.deleteFile,
            iW = new Map,
            eF = 0,
            QF = CF({}, dF, {
              getProjectVersion: function() {
                return eF.toString()
              },
              getCompilationSettings: function() {
                return SF
              },
              getCustomTransformers: function() {
                return uF
              },
              getScriptFileNames: function() {
                return hF.slice()
              },
              getScriptSnapshot: function(WF) {
                var SF = FF.readFile(WF);
                if (SF && "string" === typeof SF) return AF.ScriptSnapshot.fromString(SF)
              },
              getScriptVersion: function(FF) {
                return iW.get(FF) || "0"
              },
              writeFile: FF.writeFile
            }),
            rW = {
              languageServiceHost: QF,
              updateFile: function(FF) {
                eF++, iW.set(FF.fileName, eF.toString()), hF.includes(FF.fileName) || hF.push(FF.fileName), PF(FF)
              },
              deleteFile: function(FF) {
                eF++, iW.set(FF.fileName, eF.toString());
                var WF = hF.indexOf(FF.fileName); - 1 !== WF && hF.splice(WF, 1), RF(FF)
              }
            };
          return rW
        }(FF, WF, hF, SF, uF),
        dF = bW.languageServiceHost,
        PF = bW.updateFile,
        iW = bW.deleteFile,
        eF = SF.createLanguageService(dF),
        QF = eF.getCompilerOptionsDiagnostics();
      if (QF.length) {
        var rW = EF(FF, AF, SF);
        throw new Error(SF.formatDiagnostics(QF, rW.compilerHost))
      }
      return {
        name: "vfs",
        sys: FF,
        languageService: eF,
        getSourceFile: function(FF) {
          var WF;
          return null == (WF = eF.getProgram()) ? void 0 : WF.getSourceFile(FF)
        },
        createFile: function(FF, WF) {
          PF(SF.createSourceFile(FF, WF, hF.target, !1))
        },
        updateFile: function(FF, WF, CF) {
          var AF = eF.getProgram().getSourceFile(FF);
          if (!AF) throw new Error("Did not find a source file for " + FF);
          var uF = AF.text,
            hF = null != CF ? CF : SF.createTextSpan(0, uF.length),
            bW = uF.slice(0, hF.start) + WF + uF.slice(hF.start + hF.length),
            dF = SF.updateSourceFile(AF, bW, {
              span: hF,
              newLength: WF.length
            });
          PF(dF)
        },
        deleteFile: function(FF) {
          var WF = eF.getProgram().getSourceFile(FF);
          WF && iW(WF)
        }
      }
    }

    function dF(FF) {
      throw new Error("Method '" + FF + "' is not implemented.")
    }

    function PF(FF, WF) {
      return function() {
        for (var SF = arguments.length, CF = new Array(SF), AF = 0; AF < SF; AF++) CF[AF] = arguments[AF];
        var uF = WF.apply(void 0, CF),
          bW = "string" === typeof uF ? uF.slice(0, 80) + "..." : uF;
        return hF.apply(void 0, ["> " + FF].concat(CF)), hF("< " + bW), uF
      }
    }
    var RF = function(FF) {
        return CF({}, FF.getDefaultCompilerOptions(), {
          jsx: FF.JsxEmit.React,
          strict: !0,
          esModuleInterop: !0,
          module: FF.ModuleKind.ESNext,
          suppressOutputPathCheck: !0,
          skipLibCheck: !0,
          skipDefaultLibCheck: !0
        }, FF.versionMajorMinor && Number(FF.versionMajorMinor.split(".")[0]) >= 6 ? {
          ignoreDeprecations: "6.0"
        } : {
          moduleResolution: FF.ModuleResolutionKind.NodeJs
        })
      },
      iW = function(FF) {
        return FF.replace("/", "/lib.").toLowerCase()
      };

    function eF(FF) {
      return {
        args: [],
        createDirectory: function() {
          return dF("createDirectory")
        },
        directoryExists: PF("directoryExists", (function(WF) {
          return Array.from(FF.keys()).some((function(FF) {
            return FF.startsWith(WF)
          }))
        })),
        exit: function() {
          return dF("exit")
        },
        fileExists: PF("fileExists", (function(WF) {
          return FF.has(WF) || FF.has(iW(WF))
        })),
        getCurrentDirectory: function() {
          return "/"
        },
        getDirectories: function() {
          return []
        },
        getExecutingFilePath: function() {
          return dF("getExecutingFilePath")
        },
        readDirectory: PF("readDirectory", (function(WF) {
          return "/" === WF ? Array.from(FF.keys()) : []
        })),
        readFile: PF("readFile", (function(WF) {
          var SF;
          return null != (SF = FF.get(WF)) ? SF : FF.get(iW(WF))
        })),
        resolvePath: function(FF) {
          return FF
        },
        newLine: "\n",
        useCaseSensitiveFileNames: !0,
        write: function() {
          return dF("write")
        },
        writeFile: function(WF, SF) {
          FF.set(WF, SF)
        },
        deleteFile: function(WF) {
          FF.delete(WF)
        }
      }
    }

    function EF(FF, WF, SF) {
      var AF = new Map;
      return {
        compilerHost: CF({}, FF, {
          getCanonicalFileName: function(FF) {
            return FF
          },
          getDefaultLibFileName: function() {
            return "/" + SF.getDefaultLibFileName(WF)
          },
          getNewLine: function() {
            return FF.newLine
          },
          getSourceFile: function(CF, uF) {
            var hF, bW;
            return AF.get(CF) || (bW = SF.createSourceFile(CF, FF.readFile(CF), null != (hF = null != uF ? uF : WF.target) ? hF : RF(SF).target, !1), AF.set(bW.fileName, bW), bW)
          },
          useCaseSensitiveFileNames: function() {
            return FF.useCaseSensitiveFileNames
          }
        }),
        updateFile: function(WF) {
          var SF = AF.has(WF.fileName);
          return FF.writeFile(WF.fileName, WF.text), AF.set(WF.fileName, WF), SF
        },
        deleteFile: function(WF) {
          var SF = AF.has(WF.fileName);
          return AF.delete(WF.fileName), FF.deleteFile(WF.fileName), SF
        }
      }
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);