export const id = 302;
export const ids = [302];
export const modules = {
  41805: (GG, bG, ZG) => {
    function wG() {
      return wG = Object.assign ? Object.assign.bind() : function(GG) {
        for (var bG = 1; bG < arguments.length; bG++) {
          var ZG = arguments[bG];
          for (var wG in ZG)({}).hasOwnProperty.call(ZG, wG) && (GG[wG] = ZG[wG])
        }
        return GG
      }, wG.apply(null, arguments)
    }
    ZG.d(bG, {
      c: () => fG,
      d: () => kG
    });
    var SG = !1;
    try {
      SG = "undefined" !== typeof localStorage
    } catch (KG) {}
    var LG = "undefined" !== typeof process,
      yG = SG && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || LG && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.DEBUG ? console.log : function(GG) {
        return ""
      };

    function kG(GG, bG, ZG, SG, LG) {
      void 0 === SG && (SG = {});
      var yG = wG({}, VG(ZG), SG),
        kG = function(GG, bG, ZG, SG, LG) {
          var yG = [].concat(bG),
            kG = QG(GG, ZG, SG),
            UG = kG.compilerHost,
            YG = kG.updateFile,
            VG = kG.deleteFile,
            pG = new Map,
            fG = 0,
            KG = wG({}, UG, {
              getProjectVersion: function() {
                return fG.toString()
              },
              getCompilationSettings: function() {
                return ZG
              },
              getCustomTransformers: function() {
                return LG
              },
              getScriptFileNames: function() {
                return yG.slice()
              },
              getScriptSnapshot: function(bG) {
                var ZG = GG.readFile(bG);
                if (ZG && "string" === typeof ZG) return SG.ScriptSnapshot.fromString(ZG)
              },
              getScriptVersion: function(GG) {
                return pG.get(GG) || "0"
              },
              writeFile: GG.writeFile
            }),
            hG = {
              languageServiceHost: KG,
              updateFile: function(GG) {
                fG++, pG.set(GG.fileName, fG.toString()), yG.includes(GG.fileName) || yG.push(GG.fileName), YG(GG)
              },
              deleteFile: function(GG) {
                fG++, pG.set(GG.fileName, fG.toString());
                var bG = yG.indexOf(GG.fileName); - 1 !== bG && yG.splice(bG, 1), VG(GG)
              }
            };
          return hG
        }(GG, bG, yG, ZG, LG),
        UG = kG.languageServiceHost,
        YG = kG.updateFile,
        pG = kG.deleteFile,
        fG = ZG.createLanguageService(UG),
        KG = fG.getCompilerOptionsDiagnostics();
      if (KG.length) {
        var hG = QG(GG, SG, ZG);
        throw new Error(ZG.formatDiagnostics(KG, hG.compilerHost))
      }
      return {
        name: "vfs",
        sys: GG,
        languageService: fG,
        getSourceFile: function(GG) {
          var bG;
          return null == (bG = fG.getProgram()) ? void 0 : bG.getSourceFile(GG)
        },
        createFile: function(GG, bG) {
          YG(ZG.createSourceFile(GG, bG, yG.target, !1))
        },
        updateFile: function(GG, bG, wG) {
          var SG = fG.getProgram().getSourceFile(GG);
          if (!SG) throw new Error("Did not find a source file for " + GG);
          var LG = SG.text,
            yG = null != wG ? wG : ZG.createTextSpan(0, LG.length),
            kG = LG.slice(0, yG.start) + bG + LG.slice(yG.start + yG.length),
            UG = ZG.updateSourceFile(SG, kG, {
              span: yG,
              newLength: bG.length
            });
          YG(UG)
        },
        deleteFile: function(GG) {
          var bG = fG.getProgram().getSourceFile(GG);
          bG && pG(bG)
        }
      }
    }

    function UG(GG) {
      throw new Error("Method '" + GG + "' is not implemented.")
    }

    function YG(GG, bG) {
      return function() {
        for (var ZG = arguments.length, wG = new Array(ZG), SG = 0; SG < ZG; SG++) wG[SG] = arguments[SG];
        var LG = bG.apply(void 0, wG),
          kG = "string" === typeof LG ? LG.slice(0, 80) + "..." : LG;
        return yG.apply(void 0, ["> " + GG].concat(wG)), yG("< " + kG), LG
      }
    }
    var VG = function(GG) {
        return wG({}, GG.getDefaultCompilerOptions(), {
          jsx: GG.JsxEmit.React,
          strict: !0,
          esModuleInterop: !0,
          module: GG.ModuleKind.ESNext,
          suppressOutputPathCheck: !0,
          skipLibCheck: !0,
          skipDefaultLibCheck: !0
        }, GG.versionMajorMinor && Number(GG.versionMajorMinor.split(".")[0]) >= 6 ? {
          ignoreDeprecations: "6.0"
        } : {
          moduleResolution: GG.ModuleResolutionKind.NodeJs
        })
      },
      pG = function(GG) {
        return GG.replace("/", "/lib.").toLowerCase()
      };

    function fG(GG) {
      return {
        args: [],
        createDirectory: function() {
          return UG("createDirectory")
        },
        directoryExists: YG("directoryExists", (function(bG) {
          return Array.from(GG.keys()).some((function(GG) {
            return GG.startsWith(bG)
          }))
        })),
        exit: function() {
          return UG("exit")
        },
        fileExists: YG("fileExists", (function(bG) {
          return GG.has(bG) || GG.has(pG(bG))
        })),
        getCurrentDirectory: function() {
          return "/"
        },
        getDirectories: function() {
          return []
        },
        getExecutingFilePath: function() {
          return UG("getExecutingFilePath")
        },
        readDirectory: YG("readDirectory", (function(bG) {
          return "/" === bG ? Array.from(GG.keys()) : []
        })),
        readFile: YG("readFile", (function(bG) {
          var ZG;
          return null != (ZG = GG.get(bG)) ? ZG : GG.get(pG(bG))
        })),
        resolvePath: function(GG) {
          return GG
        },
        newLine: "\n",
        useCaseSensitiveFileNames: !0,
        write: function() {
          return UG("write")
        },
        writeFile: function(bG, ZG) {
          GG.set(bG, ZG)
        },
        deleteFile: function(bG) {
          GG.delete(bG)
        }
      }
    }

    function QG(GG, bG, ZG) {
      var SG = new Map;
      return {
        compilerHost: wG({}, GG, {
          getCanonicalFileName: function(GG) {
            return GG
          },
          getDefaultLibFileName: function() {
            return "/" + ZG.getDefaultLibFileName(bG)
          },
          getNewLine: function() {
            return GG.newLine
          },
          getSourceFile: function(wG, LG) {
            var yG, kG;
            return SG.get(wG) || (kG = ZG.createSourceFile(wG, GG.readFile(wG), null != (yG = null != LG ? LG : bG.target) ? yG : VG(ZG).target, !1), SG.set(kG.fileName, kG), kG)
          },
          useCaseSensitiveFileNames: function() {
            return GG.useCaseSensitiveFileNames
          }
        }),
        updateFile: function(bG) {
          var ZG = SG.has(bG.fileName);
          return GG.writeFile(bG.fileName, bG.text), SG.set(bG.fileName, bG), ZG
        },
        deleteFile: function(bG) {
          var ZG = SG.has(bG.fileName);
          return SG.delete(bG.fileName), GG.deleteFile(bG.fileName), ZG
        }
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);