export const id = 616;
export const ids = [616];
export const modules = {
  53395: (RR, JR, GR) => {
    function yR() {
      return yR = Object.assign ? Object.assign.bind() : function(RR) {
        for (var JR = 1; JR < arguments.length; JR++) {
          var GR = arguments[JR];
          for (var yR in GR)({}).hasOwnProperty.call(GR, yR) && (RR[yR] = GR[yR])
        }
        return RR
      }, yR.apply(null, arguments)
    }
    GR.d(JR, {
      e: () => wR,
      g: () => qR
    });
    var tR = !1;
    try {
      tR = "undefined" !== typeof localStorage
    } catch (eR) {}
    var uR = "undefined" !== typeof process,
      ZR = tR && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || uR && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.DEBUG ? console.log : function(RR) {
        return ""
      };

    function qR(RR, JR, GR, tR, uR) {
      void 0 === tR && (tR = {});
      var ZR = yR({}, VR(GR), tR),
        qR = function(RR, JR, GR, tR, uR) {
          var ZR = [].concat(JR),
            qR = rR(RR, GR, tR),
            iR = qR.compilerHost,
            fR = qR.updateFile,
            VR = qR.deleteFile,
            KR = new Map,
            wR = 0,
            eR = yR({}, iR, {
              getProjectVersion: function() {
                return wR.toString()
              },
              getCompilationSettings: function() {
                return GR
              },
              getCustomTransformers: function() {
                return uR
              },
              getScriptFileNames: function() {
                return ZR.slice()
              },
              getScriptSnapshot: function(JR) {
                var GR = RR.readFile(JR);
                if (GR && "string" === typeof GR) return tR.ScriptSnapshot.fromString(GR)
              },
              getScriptVersion: function(RR) {
                return KR.get(RR) || "0"
              },
              writeFile: RR.writeFile
            }),
            aR = {
              languageServiceHost: eR,
              updateFile: function(RR) {
                wR++, KR.set(RR.fileName, wR.toString()), ZR.includes(RR.fileName) || ZR.push(RR.fileName), fR(RR)
              },
              deleteFile: function(RR) {
                wR++, KR.set(RR.fileName, wR.toString());
                var JR = ZR.indexOf(RR.fileName); - 1 !== JR && ZR.splice(JR, 1), VR(RR)
              }
            };
          return aR
        }(RR, JR, ZR, GR, uR),
        iR = qR.languageServiceHost,
        fR = qR.updateFile,
        KR = qR.deleteFile,
        wR = GR.createLanguageService(iR),
        eR = wR.getCompilerOptionsDiagnostics();
      if (eR.length) {
        var aR = rR(RR, tR, GR);
        throw new Error(GR.formatDiagnostics(eR, aR.compilerHost))
      }
      return {
        name: "vfs",
        sys: RR,
        languageService: wR,
        getSourceFile: function(RR) {
          var JR;
          return null == (JR = wR.getProgram()) ? void 0 : JR.getSourceFile(RR)
        },
        createFile: function(RR, JR) {
          fR(GR.createSourceFile(RR, JR, ZR.target, !1))
        },
        updateFile: function(RR, JR, yR) {
          var tR = wR.getProgram().getSourceFile(RR);
          if (!tR) throw new Error("Did not find a source file for " + RR);
          var uR = tR.text,
            ZR = null != yR ? yR : GR.createTextSpan(0, uR.length),
            qR = uR.slice(0, ZR.start) + JR + uR.slice(ZR.start + ZR.length),
            iR = GR.updateSourceFile(tR, qR, {
              span: ZR,
              newLength: JR.length
            });
          fR(iR)
        },
        deleteFile: function(RR) {
          var JR = wR.getProgram().getSourceFile(RR);
          JR && KR(JR)
        }
      }
    }

    function iR(RR) {
      throw new Error("Method '" + RR + "' is not implemented.")
    }

    function fR(RR, JR) {
      return function() {
        for (var GR = arguments.length, yR = new Array(GR), tR = 0; tR < GR; tR++) yR[tR] = arguments[tR];
        var uR = JR.apply(void 0, yR),
          qR = "string" === typeof uR ? uR.slice(0, 80) + "..." : uR;
        return ZR.apply(void 0, ["> " + RR].concat(yR)), ZR("< " + qR), uR
      }
    }
    var VR = function(RR) {
        return yR({}, RR.getDefaultCompilerOptions(), {
          jsx: RR.JsxEmit.React,
          strict: !0,
          esModuleInterop: !0,
          module: RR.ModuleKind.ESNext,
          suppressOutputPathCheck: !0,
          skipLibCheck: !0,
          skipDefaultLibCheck: !0
        }, RR.versionMajorMinor && Number(RR.versionMajorMinor.split(".")[0]) >= 6 ? {
          ignoreDeprecations: "6.0"
        } : {
          moduleResolution: RR.ModuleResolutionKind.NodeJs
        })
      },
      KR = function(RR) {
        return RR.replace("/", "/lib.").toLowerCase()
      };

    function wR(RR) {
      return {
        args: [],
        createDirectory: function() {
          return iR("createDirectory")
        },
        directoryExists: fR("directoryExists", (function(JR) {
          return Array.from(RR.keys()).some((function(RR) {
            return RR.startsWith(JR)
          }))
        })),
        exit: function() {
          return iR("exit")
        },
        fileExists: fR("fileExists", (function(JR) {
          return RR.has(JR) || RR.has(KR(JR))
        })),
        getCurrentDirectory: function() {
          return "/"
        },
        getDirectories: function() {
          return []
        },
        getExecutingFilePath: function() {
          return iR("getExecutingFilePath")
        },
        readDirectory: fR("readDirectory", (function(JR) {
          return "/" === JR ? Array.from(RR.keys()) : []
        })),
        readFile: fR("readFile", (function(JR) {
          var GR;
          return null != (GR = RR.get(JR)) ? GR : RR.get(KR(JR))
        })),
        resolvePath: function(RR) {
          return RR
        },
        newLine: "\n",
        useCaseSensitiveFileNames: !0,
        write: function() {
          return iR("write")
        },
        writeFile: function(JR, GR) {
          RR.set(JR, GR)
        },
        deleteFile: function(JR) {
          RR.delete(JR)
        }
      }
    }

    function rR(RR, JR, GR) {
      var tR = new Map;
      return {
        compilerHost: yR({}, RR, {
          getCanonicalFileName: function(RR) {
            return RR
          },
          getDefaultLibFileName: function() {
            return "/" + GR.getDefaultLibFileName(JR)
          },
          getNewLine: function() {
            return RR.newLine
          },
          getSourceFile: function(yR, uR) {
            var ZR, qR;
            return tR.get(yR) || (qR = GR.createSourceFile(yR, RR.readFile(yR), null != (ZR = null != uR ? uR : JR.target) ? ZR : VR(GR).target, !1), tR.set(qR.fileName, qR), qR)
          },
          useCaseSensitiveFileNames: function() {
            return RR.useCaseSensitiveFileNames
          }
        }),
        updateFile: function(JR) {
          var GR = tR.has(JR.fileName);
          return RR.writeFile(JR.fileName, JR.text), tR.set(JR.fileName, JR), GR
        },
        deleteFile: function(JR) {
          var GR = tR.has(JR.fileName);
          return tR.delete(JR.fileName), RR.deleteFile(JR.fileName), GR
        }
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);