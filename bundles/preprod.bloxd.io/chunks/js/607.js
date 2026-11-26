export const id = 607;
export const ids = [607];
export const modules = {
  44538: (BB, OB, GB) => {
    function YB() {
      return YB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var OB = 1; OB < arguments.length; OB++) {
          var GB = arguments[OB];
          for (var YB in GB)({}).hasOwnProperty.call(GB, YB) && (BB[YB] = GB[YB])
        }
        return BB
      }, YB.apply(null, arguments)
    }
    GB.d(OB, {
      e: () => zB,
      h: () => jB
    });
    var DB = !1;
    try {
      DB = "undefined" !== typeof localStorage
    } catch (pB) {}
    var QB = "undefined" !== typeof process,
      oB = DB && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || QB && {
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

    function jB(BB, OB, GB, DB, QB) {
      void 0 === DB && (DB = {});
      var oB = YB({}, MB(GB), DB),
        jB = function(BB, OB, GB, DB, QB) {
          var oB = [].concat(OB),
            jB = lB(BB, GB, DB),
            yB = jB.compilerHost,
            JB = jB.updateFile,
            MB = jB.deleteFile,
            PB = new Map,
            zB = 0,
            pB = YB({}, yB, {
              getProjectVersion: function() {
                return zB.toString()
              },
              getCompilationSettings: function() {
                return GB
              },
              getCustomTransformers: function() {
                return QB
              },
              getScriptFileNames: function() {
                return oB.slice()
              },
              getScriptSnapshot: function(OB) {
                var GB = BB.readFile(OB);
                if (GB && "string" === typeof GB) return DB.ScriptSnapshot.fromString(GB)
              },
              getScriptVersion: function(BB) {
                return PB.get(BB) || "0"
              },
              writeFile: BB.writeFile
            }),
            qB = {
              languageServiceHost: pB,
              updateFile: function(BB) {
                zB++, PB.set(BB.fileName, zB.toString()), oB.includes(BB.fileName) || oB.push(BB.fileName), JB(BB)
              },
              deleteFile: function(BB) {
                zB++, PB.set(BB.fileName, zB.toString());
                var OB = oB.indexOf(BB.fileName); - 1 !== OB && oB.splice(OB, 1), MB(BB)
              }
            };
          return qB
        }(BB, OB, oB, GB, QB),
        yB = jB.languageServiceHost,
        JB = jB.updateFile,
        PB = jB.deleteFile,
        zB = GB.createLanguageService(yB),
        pB = zB.getCompilerOptionsDiagnostics();
      if (pB.length) {
        var qB = lB(BB, DB, GB);
        throw new Error(GB.formatDiagnostics(pB, qB.compilerHost))
      }
      return {
        name: "vfs",
        sys: BB,
        languageService: zB,
        getSourceFile: function(BB) {
          var OB;
          return null == (OB = zB.getProgram()) ? void 0 : OB.getSourceFile(BB)
        },
        createFile: function(BB, OB) {
          JB(GB.createSourceFile(BB, OB, oB.target, !1))
        },
        updateFile: function(BB, OB, YB) {
          var DB = zB.getProgram().getSourceFile(BB);
          if (!DB) throw new Error("Did not find a source file for " + BB);
          var QB = DB.text,
            oB = null != YB ? YB : GB.createTextSpan(0, QB.length),
            jB = QB.slice(0, oB.start) + OB + QB.slice(oB.start + oB.length),
            yB = GB.updateSourceFile(DB, jB, {
              span: oB,
              newLength: OB.length
            });
          JB(yB)
        },
        deleteFile: function(BB) {
          var OB = zB.getProgram().getSourceFile(BB);
          OB && PB(OB)
        }
      }
    }

    function yB(BB) {
      throw new Error("Method '" + BB + "' is not implemented.")
    }

    function JB(BB, OB) {
      return function() {
        for (var GB = arguments.length, YB = new Array(GB), DB = 0; DB < GB; DB++) YB[DB] = arguments[DB];
        var QB = OB.apply(void 0, YB),
          jB = "string" === typeof QB ? QB.slice(0, 80) + "..." : QB;
        return oB.apply(void 0, ["> " + BB].concat(YB)), oB("< " + jB), QB
      }
    }
    var MB = function(BB) {
        return YB({}, BB.getDefaultCompilerOptions(), {
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
      PB = function(BB) {
        return BB.replace("/", "/lib.").toLowerCase()
      };

    function zB(BB) {
      return {
        args: [],
        createDirectory: function() {
          return yB("createDirectory")
        },
        directoryExists: JB("directoryExists", (function(OB) {
          return Array.from(BB.keys()).some((function(BB) {
            return BB.startsWith(OB)
          }))
        })),
        exit: function() {
          return yB("exit")
        },
        fileExists: JB("fileExists", (function(OB) {
          return BB.has(OB) || BB.has(PB(OB))
        })),
        getCurrentDirectory: function() {
          return "/"
        },
        getDirectories: function() {
          return []
        },
        getExecutingFilePath: function() {
          return yB("getExecutingFilePath")
        },
        readDirectory: JB("readDirectory", (function(OB) {
          return "/" === OB ? Array.from(BB.keys()) : []
        })),
        readFile: JB("readFile", (function(OB) {
          var GB;
          return null != (GB = BB.get(OB)) ? GB : BB.get(PB(OB))
        })),
        resolvePath: function(BB) {
          return BB
        },
        newLine: "\n",
        useCaseSensitiveFileNames: !0,
        write: function() {
          return yB("write")
        },
        writeFile: function(OB, GB) {
          BB.set(OB, GB)
        },
        deleteFile: function(OB) {
          BB.delete(OB)
        }
      }
    }

    function lB(BB, OB, GB) {
      var DB = new Map;
      return {
        compilerHost: YB({}, BB, {
          getCanonicalFileName: function(BB) {
            return BB
          },
          getDefaultLibFileName: function() {
            return "/" + GB.getDefaultLibFileName(OB)
          },
          getNewLine: function() {
            return BB.newLine
          },
          getSourceFile: function(YB, QB) {
            var oB, jB;
            return DB.get(YB) || (jB = GB.createSourceFile(YB, BB.readFile(YB), null != (oB = null != QB ? QB : OB.target) ? oB : MB(GB).target, !1), DB.set(jB.fileName, jB), jB)
          },
          useCaseSensitiveFileNames: function() {
            return BB.useCaseSensitiveFileNames
          }
        }),
        updateFile: function(OB) {
          var GB = DB.has(OB.fileName);
          return BB.writeFile(OB.fileName, OB.text), DB.set(OB.fileName, OB), GB
        },
        deleteFile: function(OB) {
          var GB = DB.has(OB.fileName);
          return DB.delete(OB.fileName), BB.deleteFile(OB.fileName), GB
        }
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);