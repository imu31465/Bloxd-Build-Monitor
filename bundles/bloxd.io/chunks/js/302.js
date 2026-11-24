export const id = 302;
export const ids = [302];
export const modules = {
  41491: (BB, jB, zB) => {
    function QB() {
      return QB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var jB = 1; jB < arguments.length; jB++) {
          var zB = arguments[jB];
          for (var QB in zB)({}).hasOwnProperty.call(zB, QB) && (BB[QB] = zB[QB])
        }
        return BB
      }, QB.apply(null, arguments)
    }
    zB.d(jB, {
      c: () => rB,
      g: () => NB
    });
    var nB = !1;
    try {
      nB = "undefined" !== typeof localStorage
    } catch (JB) {}
    var dB = "undefined" !== typeof process,
      IB = nB && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || dB && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.DEBUG ? console.log : function(BB) {
        return ""
      };

    function NB(BB, jB, zB, nB, dB) {
      void 0 === nB && (nB = {});
      var IB = QB({}, aB(zB), nB),
        NB = function(BB, jB, zB, nB, dB) {
          var IB = [].concat(jB),
            NB = sB(BB, zB, nB),
            uB = NB.compilerHost,
            UB = NB.updateFile,
            aB = NB.deleteFile,
            pB = new Map,
            rB = 0,
            JB = QB({}, uB, {
              getProjectVersion: function() {
                return rB.toString()
              },
              getCompilationSettings: function() {
                return zB
              },
              getCustomTransformers: function() {
                return dB
              },
              getScriptFileNames: function() {
                return IB.slice()
              },
              getScriptSnapshot: function(jB) {
                var zB = BB.readFile(jB);
                if (zB && "string" === typeof zB) return nB.ScriptSnapshot.fromString(zB)
              },
              getScriptVersion: function(BB) {
                return pB.get(BB) || "0"
              },
              writeFile: BB.writeFile
            }),
            mB = {
              languageServiceHost: JB,
              updateFile: function(BB) {
                rB++, pB.set(BB.fileName, rB.toString()), IB.includes(BB.fileName) || IB.push(BB.fileName), UB(BB)
              },
              deleteFile: function(BB) {
                rB++, pB.set(BB.fileName, rB.toString());
                var jB = IB.indexOf(BB.fileName); - 1 !== jB && IB.splice(jB, 1), aB(BB)
              }
            };
          return mB
        }(BB, jB, IB, zB, dB),
        uB = NB.languageServiceHost,
        UB = NB.updateFile,
        pB = NB.deleteFile,
        rB = zB.createLanguageService(uB),
        JB = rB.getCompilerOptionsDiagnostics();
      if (JB.length) {
        var mB = sB(BB, nB, zB);
        throw new Error(zB.formatDiagnostics(JB, mB.compilerHost))
      }
      return {
        name: "vfs",
        sys: BB,
        languageService: rB,
        getSourceFile: function(BB) {
          var jB;
          return null == (jB = rB.getProgram()) ? void 0 : jB.getSourceFile(BB)
        },
        createFile: function(BB, jB) {
          UB(zB.createSourceFile(BB, jB, IB.target, !1))
        },
        updateFile: function(BB, jB, QB) {
          var nB = rB.getProgram().getSourceFile(BB);
          if (!nB) throw new Error("Did not find a source file for " + BB);
          var dB = nB.text,
            IB = null != QB ? QB : zB.createTextSpan(0, dB.length),
            NB = dB.slice(0, IB.start) + jB + dB.slice(IB.start + IB.length),
            uB = zB.updateSourceFile(nB, NB, {
              span: IB,
              newLength: jB.length
            });
          UB(uB)
        },
        deleteFile: function(BB) {
          var jB = rB.getProgram().getSourceFile(BB);
          jB && pB(jB)
        }
      }
    }

    function uB(BB) {
      throw new Error("Method '" + BB + "' is not implemented.")
    }

    function UB(BB, jB) {
      return function() {
        for (var zB = arguments.length, QB = new Array(zB), nB = 0; nB < zB; nB++) QB[nB] = arguments[nB];
        var dB = jB.apply(void 0, QB),
          NB = "string" === typeof dB ? dB.slice(0, 80) + "..." : dB;
        return IB.apply(void 0, ["> " + BB].concat(QB)), IB("< " + NB), dB
      }
    }
    var aB = function(BB) {
        return QB({}, BB.getDefaultCompilerOptions(), {
          jsx: BB.JsxEmit.React,
          strict: !0,
          esModuleInterop: !0,
          module: BB.ModuleKind.ESNext,
          suppressOutputPathCheck: !0,
          skipLibCheck: !0,
          skipDefaultLibCheck: !0
        }, BB.versionMajorMinor && Number(BB.versionMajorMinor.split(".")[0]) >= 6 ? {
          ignoreDeprecations: "6.0"
        } : {
          moduleResolution: BB.ModuleResolutionKind.NodeJs
        })
      },
      pB = function(BB) {
        return BB.replace("/", "/lib.").toLowerCase()
      };

    function rB(BB) {
      return {
        args: [],
        createDirectory: function() {
          return uB("createDirectory")
        },
        directoryExists: UB("directoryExists", (function(jB) {
          return Array.from(BB.keys()).some((function(BB) {
            return BB.startsWith(jB)
          }))
        })),
        exit: function() {
          return uB("exit")
        },
        fileExists: UB("fileExists", (function(jB) {
          return BB.has(jB) || BB.has(pB(jB))
        })),
        getCurrentDirectory: function() {
          return "/"
        },
        getDirectories: function() {
          return []
        },
        getExecutingFilePath: function() {
          return uB("getExecutingFilePath")
        },
        readDirectory: UB("readDirectory", (function(jB) {
          return "/" === jB ? Array.from(BB.keys()) : []
        })),
        readFile: UB("readFile", (function(jB) {
          var zB;
          return null != (zB = BB.get(jB)) ? zB : BB.get(pB(jB))
        })),
        resolvePath: function(BB) {
          return BB
        },
        newLine: "\n",
        useCaseSensitiveFileNames: !0,
        write: function() {
          return uB("write")
        },
        writeFile: function(jB, zB) {
          BB.set(jB, zB)
        },
        deleteFile: function(jB) {
          BB.delete(jB)
        }
      }
    }

    function sB(BB, jB, zB) {
      var nB = new Map;
      return {
        compilerHost: QB({}, BB, {
          getCanonicalFileName: function(BB) {
            return BB
          },
          getDefaultLibFileName: function() {
            return "/" + zB.getDefaultLibFileName(jB)
          },
          getNewLine: function() {
            return BB.newLine
          },
          getSourceFile: function(QB, dB) {
            var IB, NB;
            return nB.get(QB) || (NB = zB.createSourceFile(QB, BB.readFile(QB), null != (IB = null != dB ? dB : jB.target) ? IB : aB(zB).target, !1), nB.set(NB.fileName, NB), NB)
          },
          useCaseSensitiveFileNames: function() {
            return BB.useCaseSensitiveFileNames
          }
        }),
        updateFile: function(jB) {
          var zB = nB.has(jB.fileName);
          return BB.writeFile(jB.fileName, jB.text), nB.set(jB.fileName, jB), zB
        },
        deleteFile: function(jB) {
          var zB = nB.has(jB.fileName);
          return nB.delete(jB.fileName), BB.deleteFile(jB.fileName), zB
        }
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);