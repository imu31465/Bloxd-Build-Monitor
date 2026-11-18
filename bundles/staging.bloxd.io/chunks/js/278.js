export const id = 278;
export const ids = [278];
export const modules = {
  40115: (BB, TB, dB) => {
    function VB() {
      return VB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var TB = 1; TB < arguments.length; TB++) {
          var dB = arguments[TB];
          for (var VB in dB)({}).hasOwnProperty.call(dB, VB) && (BB[VB] = dB[VB])
        }
        return BB
      }, VB.apply(null, arguments)
    }
    dB.d(TB, {
      d: () => LB,
      f: () => JB
    });
    var yB = !1;
    try {
      yB = "undefined" !== typeof localStorage
    } catch (DB) {}
    var pB = "undefined" !== typeof process,
      lB = yB && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || pB && {
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

    function JB(BB, TB, dB, yB, pB) {
      void 0 === yB && (yB = {});
      var lB = VB({}, oB(dB), yB),
        JB = function(BB, TB, dB, yB, pB) {
          var lB = [].concat(TB),
            JB = OB(BB, dB, yB),
            YB = JB.compilerHost,
            gB = JB.updateFile,
            oB = JB.deleteFile,
            kB = new Map,
            LB = 0,
            DB = VB({}, YB, {
              getProjectVersion: function() {
                return LB.toString()
              },
              getCompilationSettings: function() {
                return dB
              },
              getCustomTransformers: function() {
                return pB
              },
              getScriptFileNames: function() {
                return lB.slice()
              },
              getScriptSnapshot: function(TB) {
                var dB = BB.readFile(TB);
                if (dB && "string" === typeof dB) return yB.ScriptSnapshot.fromString(dB)
              },
              getScriptVersion: function(BB) {
                return kB.get(BB) || "0"
              },
              writeFile: BB.writeFile
            }),
            uB = {
              languageServiceHost: DB,
              updateFile: function(BB) {
                LB++, kB.set(BB.fileName, LB.toString()), lB.includes(BB.fileName) || lB.push(BB.fileName), gB(BB)
              },
              deleteFile: function(BB) {
                LB++, kB.set(BB.fileName, LB.toString());
                var TB = lB.indexOf(BB.fileName); - 1 !== TB && lB.splice(TB, 1), oB(BB)
              }
            };
          return uB
        }(BB, TB, lB, dB, pB),
        YB = JB.languageServiceHost,
        gB = JB.updateFile,
        kB = JB.deleteFile,
        LB = dB.createLanguageService(YB),
        DB = LB.getCompilerOptionsDiagnostics();
      if (DB.length) {
        var uB = OB(BB, yB, dB);
        throw new Error(dB.formatDiagnostics(DB, uB.compilerHost))
      }
      return {
        name: "vfs",
        sys: BB,
        languageService: LB,
        getSourceFile: function(BB) {
          var TB;
          return null == (TB = LB.getProgram()) ? void 0 : TB.getSourceFile(BB)
        },
        createFile: function(BB, TB) {
          gB(dB.createSourceFile(BB, TB, lB.target, !1))
        },
        updateFile: function(BB, TB, VB) {
          var yB = LB.getProgram().getSourceFile(BB);
          if (!yB) throw new Error("Did not find a source file for " + BB);
          var pB = yB.text,
            lB = null != VB ? VB : dB.createTextSpan(0, pB.length),
            JB = pB.slice(0, lB.start) + TB + pB.slice(lB.start + lB.length),
            YB = dB.updateSourceFile(yB, JB, {
              span: lB,
              newLength: TB.length
            });
          gB(YB)
        },
        deleteFile: function(BB) {
          var TB = LB.getProgram().getSourceFile(BB);
          TB && kB(TB)
        }
      }
    }

    function YB(BB) {
      throw new Error("Method '" + BB + "' is not implemented.")
    }

    function gB(BB, TB) {
      return function() {
        for (var dB = arguments.length, VB = new Array(dB), yB = 0; yB < dB; yB++) VB[yB] = arguments[yB];
        var pB = TB.apply(void 0, VB),
          JB = "string" === typeof pB ? pB.slice(0, 80) + "..." : pB;
        return lB.apply(void 0, ["> " + BB].concat(VB)), lB("< " + JB), pB
      }
    }
    var oB = function(BB) {
        return VB({}, BB.getDefaultCompilerOptions(), {
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
      kB = function(BB) {
        return BB.replace("/", "/lib.").toLowerCase()
      };

    function LB(BB) {
      return {
        args: [],
        createDirectory: function() {
          return YB("createDirectory")
        },
        directoryExists: gB("directoryExists", (function(TB) {
          return Array.from(BB.keys()).some((function(BB) {
            return BB.startsWith(TB)
          }))
        })),
        exit: function() {
          return YB("exit")
        },
        fileExists: gB("fileExists", (function(TB) {
          return BB.has(TB) || BB.has(kB(TB))
        })),
        getCurrentDirectory: function() {
          return "/"
        },
        getDirectories: function() {
          return []
        },
        getExecutingFilePath: function() {
          return YB("getExecutingFilePath")
        },
        readDirectory: gB("readDirectory", (function(TB) {
          return "/" === TB ? Array.from(BB.keys()) : []
        })),
        readFile: gB("readFile", (function(TB) {
          var dB;
          return null != (dB = BB.get(TB)) ? dB : BB.get(kB(TB))
        })),
        resolvePath: function(BB) {
          return BB
        },
        newLine: "\n",
        useCaseSensitiveFileNames: !0,
        write: function() {
          return YB("write")
        },
        writeFile: function(TB, dB) {
          BB.set(TB, dB)
        },
        deleteFile: function(TB) {
          BB.delete(TB)
        }
      }
    }

    function OB(BB, TB, dB) {
      var yB = new Map;
      return {
        compilerHost: VB({}, BB, {
          getCanonicalFileName: function(BB) {
            return BB
          },
          getDefaultLibFileName: function() {
            return "/" + dB.getDefaultLibFileName(TB)
          },
          getNewLine: function() {
            return BB.newLine
          },
          getSourceFile: function(VB, pB) {
            var lB, JB;
            return yB.get(VB) || (JB = dB.createSourceFile(VB, BB.readFile(VB), null != (lB = null != pB ? pB : TB.target) ? lB : oB(dB).target, !1), yB.set(JB.fileName, JB), JB)
          },
          useCaseSensitiveFileNames: function() {
            return BB.useCaseSensitiveFileNames
          }
        }),
        updateFile: function(TB) {
          var dB = yB.has(TB.fileName);
          return BB.writeFile(TB.fileName, TB.text), yB.set(TB.fileName, TB), dB
        },
        deleteFile: function(TB) {
          var dB = yB.has(TB.fileName);
          return yB.delete(TB.fileName), BB.deleteFile(TB.fileName), dB
        }
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);