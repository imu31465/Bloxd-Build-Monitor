export const id = 302;
export const ids = [302];
export const modules = {
  41421: (BB, IB, ZB) => {
    function TB() {
      return TB = Object.assign ? Object.assign.bind() : function(BB) {
        for (var IB = 1; IB < arguments.length; IB++) {
          var ZB = arguments[IB];
          for (var TB in ZB)({}).hasOwnProperty.call(ZB, TB) && (BB[TB] = ZB[TB])
        }
        return BB
      }, TB.apply(null, arguments)
    }
    ZB.d(IB, {
      d: () => zB,
      h: () => vB
    });
    var JB = !1;
    try {
      JB = "undefined" !== typeof localStorage
    } catch (NB) {}
    var oB = "undefined" !== typeof process,
      GB = JB && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || oB && {
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

    function vB(BB, IB, ZB, JB, oB) {
      void 0 === JB && (JB = {});
      var GB = TB({}, nB(ZB), JB),
        vB = function(BB, IB, ZB, JB, oB) {
          var GB = [].concat(IB),
            vB = FB(BB, ZB, JB),
            kB = vB.compilerHost,
            cB = vB.updateFile,
            nB = vB.deleteFile,
            hB = new Map,
            zB = 0,
            NB = TB({}, kB, {
              getProjectVersion: function() {
                return zB.toString()
              },
              getCompilationSettings: function() {
                return ZB
              },
              getCustomTransformers: function() {
                return oB
              },
              getScriptFileNames: function() {
                return GB.slice()
              },
              getScriptSnapshot: function(IB) {
                var ZB = BB.readFile(IB);
                if (ZB && "string" === typeof ZB) return JB.ScriptSnapshot.fromString(ZB)
              },
              getScriptVersion: function(BB) {
                return hB.get(BB) || "0"
              },
              writeFile: BB.writeFile
            }),
            gB = {
              languageServiceHost: NB,
              updateFile: function(BB) {
                zB++, hB.set(BB.fileName, zB.toString()), GB.includes(BB.fileName) || GB.push(BB.fileName), cB(BB)
              },
              deleteFile: function(BB) {
                zB++, hB.set(BB.fileName, zB.toString());
                var IB = GB.indexOf(BB.fileName); - 1 !== IB && GB.splice(IB, 1), nB(BB)
              }
            };
          return gB
        }(BB, IB, GB, ZB, oB),
        kB = vB.languageServiceHost,
        cB = vB.updateFile,
        hB = vB.deleteFile,
        zB = ZB.createLanguageService(kB),
        NB = zB.getCompilerOptionsDiagnostics();
      if (NB.length) {
        var gB = FB(BB, JB, ZB);
        throw new Error(ZB.formatDiagnostics(NB, gB.compilerHost))
      }
      return {
        name: "vfs",
        sys: BB,
        languageService: zB,
        getSourceFile: function(BB) {
          var IB;
          return null == (IB = zB.getProgram()) ? void 0 : IB.getSourceFile(BB)
        },
        createFile: function(BB, IB) {
          cB(ZB.createSourceFile(BB, IB, GB.target, !1))
        },
        updateFile: function(BB, IB, TB) {
          var JB = zB.getProgram().getSourceFile(BB);
          if (!JB) throw new Error("Did not find a source file for " + BB);
          var oB = JB.text,
            GB = null != TB ? TB : ZB.createTextSpan(0, oB.length),
            vB = oB.slice(0, GB.start) + IB + oB.slice(GB.start + GB.length),
            kB = ZB.updateSourceFile(JB, vB, {
              span: GB,
              newLength: IB.length
            });
          cB(kB)
        },
        deleteFile: function(BB) {
          var IB = zB.getProgram().getSourceFile(BB);
          IB && hB(IB)
        }
      }
    }

    function kB(BB) {
      throw new Error("Method '" + BB + "' is not implemented.")
    }

    function cB(BB, IB) {
      return function() {
        for (var ZB = arguments.length, TB = new Array(ZB), JB = 0; JB < ZB; JB++) TB[JB] = arguments[JB];
        var oB = IB.apply(void 0, TB),
          vB = "string" === typeof oB ? oB.slice(0, 80) + "..." : oB;
        return GB.apply(void 0, ["> " + BB].concat(TB)), GB("< " + vB), oB
      }
    }
    var nB = function(BB) {
        return TB({}, BB.getDefaultCompilerOptions(), {
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
      hB = function(BB) {
        return BB.replace("/", "/lib.").toLowerCase()
      };

    function zB(BB) {
      return {
        args: [],
        createDirectory: function() {
          return kB("createDirectory")
        },
        directoryExists: cB("directoryExists", (function(IB) {
          return Array.from(BB.keys()).some((function(BB) {
            return BB.startsWith(IB)
          }))
        })),
        exit: function() {
          return kB("exit")
        },
        fileExists: cB("fileExists", (function(IB) {
          return BB.has(IB) || BB.has(hB(IB))
        })),
        getCurrentDirectory: function() {
          return "/"
        },
        getDirectories: function() {
          return []
        },
        getExecutingFilePath: function() {
          return kB("getExecutingFilePath")
        },
        readDirectory: cB("readDirectory", (function(IB) {
          return "/" === IB ? Array.from(BB.keys()) : []
        })),
        readFile: cB("readFile", (function(IB) {
          var ZB;
          return null != (ZB = BB.get(IB)) ? ZB : BB.get(hB(IB))
        })),
        resolvePath: function(BB) {
          return BB
        },
        newLine: "\n",
        useCaseSensitiveFileNames: !0,
        write: function() {
          return kB("write")
        },
        writeFile: function(IB, ZB) {
          BB.set(IB, ZB)
        },
        deleteFile: function(IB) {
          BB.delete(IB)
        }
      }
    }

    function FB(BB, IB, ZB) {
      var JB = new Map;
      return {
        compilerHost: TB({}, BB, {
          getCanonicalFileName: function(BB) {
            return BB
          },
          getDefaultLibFileName: function() {
            return "/" + ZB.getDefaultLibFileName(IB)
          },
          getNewLine: function() {
            return BB.newLine
          },
          getSourceFile: function(TB, oB) {
            var GB, vB;
            return JB.get(TB) || (vB = ZB.createSourceFile(TB, BB.readFile(TB), null != (GB = null != oB ? oB : IB.target) ? GB : nB(ZB).target, !1), JB.set(vB.fileName, vB), vB)
          },
          useCaseSensitiveFileNames: function() {
            return BB.useCaseSensitiveFileNames
          }
        }),
        updateFile: function(IB) {
          var ZB = JB.has(IB.fileName);
          return BB.writeFile(IB.fileName, IB.text), JB.set(IB.fileName, IB), ZB
        },
        deleteFile: function(IB) {
          var ZB = JB.has(IB.fileName);
          return JB.delete(IB.fileName), BB.deleteFile(IB.fileName), ZB
        }
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);