export const id = 289;
export const ids = [289];
export const modules = {
  40996: (TT, kT, cT) => {
    function lT() {
      return lT = Object.assign ? Object.assign.bind() : function(TT) {
        for (var kT = 1; kT < arguments.length; kT++) {
          var cT = arguments[kT];
          for (var lT in cT)({}).hasOwnProperty.call(cT, lT) && (TT[lT] = cT[lT])
        }
        return TT
      }, lT.apply(null, arguments)
    }
    cT.d(kT, {
      d: () => CT,
      h: () => yT
    });
    var MT = !1;
    try {
      MT = "undefined" !== typeof localStorage
    } catch (vT) {}
    var KT = "undefined" !== typeof process,
      OT = MT && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || KT && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.DEBUG ? console.log : function(TT) {
        return ""
      };

    function yT(TT, kT, cT, MT, KT) {
      void 0 === MT && (MT = {});
      var OT = lT({}, IT(cT), MT),
        yT = function(TT, kT, cT, MT, KT) {
          var OT = [].concat(kT),
            yT = jT(TT, cT, MT),
            fT = yT.compilerHost,
            xT = yT.updateFile,
            IT = yT.deleteFile,
            AT = new Map,
            CT = 0,
            vT = lT({}, fT, {
              getProjectVersion: function() {
                return CT.toString()
              },
              getCompilationSettings: function() {
                return cT
              },
              getCustomTransformers: function() {
                return KT
              },
              getScriptFileNames: function() {
                return OT.slice()
              },
              getScriptSnapshot: function(kT) {
                var cT = TT.readFile(kT);
                if (cT && "string" === typeof cT) return MT.ScriptSnapshot.fromString(cT)
              },
              getScriptVersion: function(TT) {
                return AT.get(TT) || "0"
              },
              writeFile: TT.writeFile
            }),
            tT = {
              languageServiceHost: vT,
              updateFile: function(TT) {
                CT++, AT.set(TT.fileName, CT.toString()), OT.includes(TT.fileName) || OT.push(TT.fileName), xT(TT)
              },
              deleteFile: function(TT) {
                CT++, AT.set(TT.fileName, CT.toString());
                var kT = OT.indexOf(TT.fileName); - 1 !== kT && OT.splice(kT, 1), IT(TT)
              }
            };
          return tT
        }(TT, kT, OT, cT, KT),
        fT = yT.languageServiceHost,
        xT = yT.updateFile,
        AT = yT.deleteFile,
        CT = cT.createLanguageService(fT),
        vT = CT.getCompilerOptionsDiagnostics();
      if (vT.length) {
        var tT = jT(TT, MT, cT);
        throw new Error(cT.formatDiagnostics(vT, tT.compilerHost))
      }
      return {
        name: "vfs",
        sys: TT,
        languageService: CT,
        getSourceFile: function(TT) {
          var kT;
          return null == (kT = CT.getProgram()) ? void 0 : kT.getSourceFile(TT)
        },
        createFile: function(TT, kT) {
          xT(cT.createSourceFile(TT, kT, OT.target, !1))
        },
        updateFile: function(TT, kT, lT) {
          var MT = CT.getProgram().getSourceFile(TT);
          if (!MT) throw new Error("Did not find a source file for " + TT);
          var KT = MT.text,
            OT = null != lT ? lT : cT.createTextSpan(0, KT.length),
            yT = KT.slice(0, OT.start) + kT + KT.slice(OT.start + OT.length),
            fT = cT.updateSourceFile(MT, yT, {
              span: OT,
              newLength: kT.length
            });
          xT(fT)
        },
        deleteFile: function(TT) {
          var kT = CT.getProgram().getSourceFile(TT);
          kT && AT(kT)
        }
      }
    }

    function fT(TT) {
      throw new Error("Method '" + TT + "' is not implemented.")
    }

    function xT(TT, kT) {
      return function() {
        for (var cT = arguments.length, lT = new Array(cT), MT = 0; MT < cT; MT++) lT[MT] = arguments[MT];
        var KT = kT.apply(void 0, lT),
          yT = "string" === typeof KT ? KT.slice(0, 80) + "..." : KT;
        return OT.apply(void 0, ["> " + TT].concat(lT)), OT("< " + yT), KT
      }
    }
    var IT = function(TT) {
        return lT({}, TT.getDefaultCompilerOptions(), {
          jsx: TT.JsxEmit.React,
          strict: !0,
          esModuleInterop: !0,
          module: TT.ModuleKind.ESNext,
          suppressOutputPathCheck: !0,
          skipLibCheck: !0,
          skipDefaultLibCheck: !0
        }, TT.versionMajorMinor && Number(TT.versionMajorMinor.split(".")[0]) >= 6 ? {
          ignoreDeprecations: "6.0"
        } : {
          moduleResolution: TT.ModuleResolutionKind.NodeJs
        })
      },
      AT = function(TT) {
        return TT.replace("/", "/lib.").toLowerCase()
      };

    function CT(TT) {
      return {
        args: [],
        createDirectory: function() {
          return fT("createDirectory")
        },
        directoryExists: xT("directoryExists", (function(kT) {
          return Array.from(TT.keys()).some((function(TT) {
            return TT.startsWith(kT)
          }))
        })),
        exit: function() {
          return fT("exit")
        },
        fileExists: xT("fileExists", (function(kT) {
          return TT.has(kT) || TT.has(AT(kT))
        })),
        getCurrentDirectory: function() {
          return "/"
        },
        getDirectories: function() {
          return []
        },
        getExecutingFilePath: function() {
          return fT("getExecutingFilePath")
        },
        readDirectory: xT("readDirectory", (function(kT) {
          return "/" === kT ? Array.from(TT.keys()) : []
        })),
        readFile: xT("readFile", (function(kT) {
          var cT;
          return null != (cT = TT.get(kT)) ? cT : TT.get(AT(kT))
        })),
        resolvePath: function(TT) {
          return TT
        },
        newLine: "\n",
        useCaseSensitiveFileNames: !0,
        write: function() {
          return fT("write")
        },
        writeFile: function(kT, cT) {
          TT.set(kT, cT)
        },
        deleteFile: function(kT) {
          TT.delete(kT)
        }
      }
    }

    function jT(TT, kT, cT) {
      var MT = new Map;
      return {
        compilerHost: lT({}, TT, {
          getCanonicalFileName: function(TT) {
            return TT
          },
          getDefaultLibFileName: function() {
            return "/" + cT.getDefaultLibFileName(kT)
          },
          getNewLine: function() {
            return TT.newLine
          },
          getSourceFile: function(lT, KT) {
            var OT, yT;
            return MT.get(lT) || (yT = cT.createSourceFile(lT, TT.readFile(lT), null != (OT = null != KT ? KT : kT.target) ? OT : IT(cT).target, !1), MT.set(yT.fileName, yT), yT)
          },
          useCaseSensitiveFileNames: function() {
            return TT.useCaseSensitiveFileNames
          }
        }),
        updateFile: function(kT) {
          var cT = MT.has(kT.fileName);
          return TT.writeFile(kT.fileName, kT.text), MT.set(kT.fileName, kT), cT
        },
        deleteFile: function(kT) {
          var cT = MT.has(kT.fileName);
          return MT.delete(kT.fileName), TT.deleteFile(kT.fileName), cT
        }
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);