export const id = 297;
export const ids = [297];
export const modules = {
  41282: (DD, zD, wD) => {
    function pD() {
      return pD = Object.assign ? Object.assign.bind() : function(DD) {
        for (var zD = 1; zD < arguments.length; zD++) {
          var wD = arguments[zD];
          for (var pD in wD)({}).hasOwnProperty.call(wD, pD) && (DD[pD] = wD[pD])
        }
        return DD
      }, pD.apply(null, arguments)
    }
    wD.d(zD, {
      b: () => UD,
      d: () => LD
    });
    var sD = !1;
    try {
      sD = "undefined" !== typeof localStorage
    } catch (ID) {}
    var KD = "undefined" !== typeof process,
      rD = sD && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || KD && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.DEBUG ? console.log : function(DD) {
        return ""
      };

    function LD(DD, zD, wD, sD, KD) {
      void 0 === sD && (sD = {});
      var rD = pD({}, RD(wD), sD),
        LD = function(DD, zD, wD, sD, KD) {
          var rD = [].concat(zD),
            LD = fD(DD, wD, sD),
            cD = LD.compilerHost,
            gD = LD.updateFile,
            RD = LD.deleteFile,
            AD = new Map,
            UD = 0,
            ID = pD({}, cD, {
              getProjectVersion: function() {
                return UD.toString()
              },
              getCompilationSettings: function() {
                return wD
              },
              getCustomTransformers: function() {
                return KD
              },
              getScriptFileNames: function() {
                return rD.slice()
              },
              getScriptSnapshot: function(zD) {
                var wD = DD.readFile(zD);
                if (wD && "string" === typeof wD) return sD.ScriptSnapshot.fromString(wD)
              },
              getScriptVersion: function(DD) {
                return AD.get(DD) || "0"
              },
              writeFile: DD.writeFile
            }),
            BD = {
              languageServiceHost: ID,
              updateFile: function(DD) {
                UD++, AD.set(DD.fileName, UD.toString()), rD.includes(DD.fileName) || rD.push(DD.fileName), gD(DD)
              },
              deleteFile: function(DD) {
                UD++, AD.set(DD.fileName, UD.toString());
                var zD = rD.indexOf(DD.fileName); - 1 !== zD && rD.splice(zD, 1), RD(DD)
              }
            };
          return BD
        }(DD, zD, rD, wD, KD),
        cD = LD.languageServiceHost,
        gD = LD.updateFile,
        AD = LD.deleteFile,
        UD = wD.createLanguageService(cD),
        ID = UD.getCompilerOptionsDiagnostics();
      if (ID.length) {
        var BD = fD(DD, sD, wD);
        throw new Error(wD.formatDiagnostics(ID, BD.compilerHost))
      }
      return {
        name: "vfs",
        sys: DD,
        languageService: UD,
        getSourceFile: function(DD) {
          var zD;
          return null == (zD = UD.getProgram()) ? void 0 : zD.getSourceFile(DD)
        },
        createFile: function(DD, zD) {
          gD(wD.createSourceFile(DD, zD, rD.target, !1))
        },
        updateFile: function(DD, zD, pD) {
          var sD = UD.getProgram().getSourceFile(DD);
          if (!sD) throw new Error("Did not find a source file for " + DD);
          var KD = sD.text,
            rD = null != pD ? pD : wD.createTextSpan(0, KD.length),
            LD = KD.slice(0, rD.start) + zD + KD.slice(rD.start + rD.length),
            cD = wD.updateSourceFile(sD, LD, {
              span: rD,
              newLength: zD.length
            });
          gD(cD)
        },
        deleteFile: function(DD) {
          var zD = UD.getProgram().getSourceFile(DD);
          zD && AD(zD)
        }
      }
    }

    function cD(DD) {
      throw new Error("Method '" + DD + "' is not implemented.")
    }

    function gD(DD, zD) {
      return function() {
        for (var wD = arguments.length, pD = new Array(wD), sD = 0; sD < wD; sD++) pD[sD] = arguments[sD];
        var KD = zD.apply(void 0, pD),
          LD = "string" === typeof KD ? KD.slice(0, 80) + "..." : KD;
        return rD.apply(void 0, ["> " + DD].concat(pD)), rD("< " + LD), KD
      }
    }
    var RD = function(DD) {
        return pD({}, DD.getDefaultCompilerOptions(), {
          jsx: DD.JsxEmit.React,
          strict: !0,
          esModuleInterop: !0,
          module: DD.ModuleKind.ESNext,
          suppressOutputPathCheck: !0,
          skipLibCheck: !0,
          skipDefaultLibCheck: !0
        }, DD.versionMajorMinor && Number(DD.versionMajorMinor.split(".")[0]) >= 6 ? {
          ignoreDeprecations: "6.0"
        } : {
          moduleResolution: DD.ModuleResolutionKind.NodeJs
        })
      },
      AD = function(DD) {
        return DD.replace("/", "/lib.").toLowerCase()
      };

    function UD(DD) {
      return {
        args: [],
        createDirectory: function() {
          return cD("createDirectory")
        },
        directoryExists: gD("directoryExists", (function(zD) {
          return Array.from(DD.keys()).some((function(DD) {
            return DD.startsWith(zD)
          }))
        })),
        exit: function() {
          return cD("exit")
        },
        fileExists: gD("fileExists", (function(zD) {
          return DD.has(zD) || DD.has(AD(zD))
        })),
        getCurrentDirectory: function() {
          return "/"
        },
        getDirectories: function() {
          return []
        },
        getExecutingFilePath: function() {
          return cD("getExecutingFilePath")
        },
        readDirectory: gD("readDirectory", (function(zD) {
          return "/" === zD ? Array.from(DD.keys()) : []
        })),
        readFile: gD("readFile", (function(zD) {
          var wD;
          return null != (wD = DD.get(zD)) ? wD : DD.get(AD(zD))
        })),
        resolvePath: function(DD) {
          return DD
        },
        newLine: "\n",
        useCaseSensitiveFileNames: !0,
        write: function() {
          return cD("write")
        },
        writeFile: function(zD, wD) {
          DD.set(zD, wD)
        },
        deleteFile: function(zD) {
          DD.delete(zD)
        }
      }
    }

    function fD(DD, zD, wD) {
      var sD = new Map;
      return {
        compilerHost: pD({}, DD, {
          getCanonicalFileName: function(DD) {
            return DD
          },
          getDefaultLibFileName: function() {
            return "/" + wD.getDefaultLibFileName(zD)
          },
          getNewLine: function() {
            return DD.newLine
          },
          getSourceFile: function(pD, KD) {
            var rD, LD;
            return sD.get(pD) || (LD = wD.createSourceFile(pD, DD.readFile(pD), null != (rD = null != KD ? KD : zD.target) ? rD : RD(wD).target, !1), sD.set(LD.fileName, LD), LD)
          },
          useCaseSensitiveFileNames: function() {
            return DD.useCaseSensitiveFileNames
          }
        }),
        updateFile: function(zD) {
          var wD = sD.has(zD.fileName);
          return DD.writeFile(zD.fileName, zD.text), sD.set(zD.fileName, zD), wD
        },
        deleteFile: function(zD) {
          var wD = sD.has(zD.fileName);
          return sD.delete(zD.fileName), DD.deleteFile(zD.fileName), wD
        }
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);