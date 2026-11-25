export const id = 607;
export const ids = [607];
export const modules = {
  44056: (MM, rM, iM) => {
    function OM() {
      return OM = Object.assign ? Object.assign.bind() : function(MM) {
        for (var rM = 1; rM < arguments.length; rM++) {
          var iM = arguments[rM];
          for (var OM in iM)({}).hasOwnProperty.call(iM, OM) && (MM[OM] = iM[OM])
        }
        return MM
      }, OM.apply(null, arguments)
    }
    iM.d(rM, {
      c: () => mM,
      e: () => PM
    });
    var SM = !1;
    try {
      SM = "undefined" !== typeof localStorage
    } catch (hM) {}
    var jM = "undefined" !== typeof process,
      aM = SM && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || jM && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.DEBUG ? console.log : function(MM) {
        return ""
      };

    function PM(MM, rM, iM, SM, jM) {
      void 0 === SM && (SM = {});
      var aM = OM({}, zM(iM), SM),
        PM = function(MM, rM, iM, SM, jM) {
          var aM = [].concat(rM),
            PM = HM(MM, iM, SM),
            nM = PM.compilerHost,
            QM = PM.updateFile,
            zM = PM.deleteFile,
            LM = new Map,
            mM = 0,
            hM = OM({}, nM, {
              getProjectVersion: function() {
                return mM.toString()
              },
              getCompilationSettings: function() {
                return iM
              },
              getCustomTransformers: function() {
                return jM
              },
              getScriptFileNames: function() {
                return aM.slice()
              },
              getScriptSnapshot: function(rM) {
                var iM = MM.readFile(rM);
                if (iM && "string" === typeof iM) return SM.ScriptSnapshot.fromString(iM)
              },
              getScriptVersion: function(MM) {
                return LM.get(MM) || "0"
              },
              writeFile: MM.writeFile
            }),
            JM = {
              languageServiceHost: hM,
              updateFile: function(MM) {
                mM++, LM.set(MM.fileName, mM.toString()), aM.includes(MM.fileName) || aM.push(MM.fileName), QM(MM)
              },
              deleteFile: function(MM) {
                mM++, LM.set(MM.fileName, mM.toString());
                var rM = aM.indexOf(MM.fileName); - 1 !== rM && aM.splice(rM, 1), zM(MM)
              }
            };
          return JM
        }(MM, rM, aM, iM, jM),
        nM = PM.languageServiceHost,
        QM = PM.updateFile,
        LM = PM.deleteFile,
        mM = iM.createLanguageService(nM),
        hM = mM.getCompilerOptionsDiagnostics();
      if (hM.length) {
        var JM = HM(MM, SM, iM);
        throw new Error(iM.formatDiagnostics(hM, JM.compilerHost))
      }
      return {
        name: "vfs",
        sys: MM,
        languageService: mM,
        getSourceFile: function(MM) {
          var rM;
          return null == (rM = mM.getProgram()) ? void 0 : rM.getSourceFile(MM)
        },
        createFile: function(MM, rM) {
          QM(iM.createSourceFile(MM, rM, aM.target, !1))
        },
        updateFile: function(MM, rM, OM) {
          var SM = mM.getProgram().getSourceFile(MM);
          if (!SM) throw new Error("Did not find a source file for " + MM);
          var jM = SM.text,
            aM = null != OM ? OM : iM.createTextSpan(0, jM.length),
            PM = jM.slice(0, aM.start) + rM + jM.slice(aM.start + aM.length),
            nM = iM.updateSourceFile(SM, PM, {
              span: aM,
              newLength: rM.length
            });
          QM(nM)
        },
        deleteFile: function(MM) {
          var rM = mM.getProgram().getSourceFile(MM);
          rM && LM(rM)
        }
      }
    }

    function nM(MM) {
      throw new Error("Method '" + MM + "' is not implemented.")
    }

    function QM(MM, rM) {
      return function() {
        for (var iM = arguments.length, OM = new Array(iM), SM = 0; SM < iM; SM++) OM[SM] = arguments[SM];
        var jM = rM.apply(void 0, OM),
          PM = "string" === typeof jM ? jM.slice(0, 80) + "..." : jM;
        return aM.apply(void 0, ["> " + MM].concat(OM)), aM("< " + PM), jM
      }
    }
    var zM = function(MM) {
        return OM({}, MM.getDefaultCompilerOptions(), {
          jsx: MM.JsxEmit.React,
          strict: !0,
          esModuleInterop: !0,
          module: MM.ModuleKind.ESNext,
          suppressOutputPathCheck: !0,
          skipLibCheck: !0,
          skipDefaultLibCheck: !0
        }, MM.versionMajorMinor && Number(MM.versionMajorMinor.split(".")[0]) >= 6 ? {
          ignoreDeprecations: "6.0"
        } : {
          moduleResolution: MM.ModuleResolutionKind.NodeJs
        })
      },
      LM = function(MM) {
        return MM.replace("/", "/lib.").toLowerCase()
      };

    function mM(MM) {
      return {
        args: [],
        createDirectory: function() {
          return nM("createDirectory")
        },
        directoryExists: QM("directoryExists", (function(rM) {
          return Array.from(MM.keys()).some((function(MM) {
            return MM.startsWith(rM)
          }))
        })),
        exit: function() {
          return nM("exit")
        },
        fileExists: QM("fileExists", (function(rM) {
          return MM.has(rM) || MM.has(LM(rM))
        })),
        getCurrentDirectory: function() {
          return "/"
        },
        getDirectories: function() {
          return []
        },
        getExecutingFilePath: function() {
          return nM("getExecutingFilePath")
        },
        readDirectory: QM("readDirectory", (function(rM) {
          return "/" === rM ? Array.from(MM.keys()) : []
        })),
        readFile: QM("readFile", (function(rM) {
          var iM;
          return null != (iM = MM.get(rM)) ? iM : MM.get(LM(rM))
        })),
        resolvePath: function(MM) {
          return MM
        },
        newLine: "\n",
        useCaseSensitiveFileNames: !0,
        write: function() {
          return nM("write")
        },
        writeFile: function(rM, iM) {
          MM.set(rM, iM)
        },
        deleteFile: function(rM) {
          MM.delete(rM)
        }
      }
    }

    function HM(MM, rM, iM) {
      var SM = new Map;
      return {
        compilerHost: OM({}, MM, {
          getCanonicalFileName: function(MM) {
            return MM
          },
          getDefaultLibFileName: function() {
            return "/" + iM.getDefaultLibFileName(rM)
          },
          getNewLine: function() {
            return MM.newLine
          },
          getSourceFile: function(OM, jM) {
            var aM, PM;
            return SM.get(OM) || (PM = iM.createSourceFile(OM, MM.readFile(OM), null != (aM = null != jM ? jM : rM.target) ? aM : zM(iM).target, !1), SM.set(PM.fileName, PM), PM)
          },
          useCaseSensitiveFileNames: function() {
            return MM.useCaseSensitiveFileNames
          }
        }),
        updateFile: function(rM) {
          var iM = SM.has(rM.fileName);
          return MM.writeFile(rM.fileName, rM.text), SM.set(rM.fileName, rM), iM
        },
        deleteFile: function(rM) {
          var iM = SM.has(rM.fileName);
          return SM.delete(rM.fileName), MM.deleteFile(rM.fileName), iM
        }
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);