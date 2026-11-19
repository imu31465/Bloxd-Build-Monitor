export const id = 288;
export const ids = [288];
export const modules = {
  40199: (TT, oT, IT) => {
    function iT() {
      return iT = Object.assign ? Object.assign.bind() : function(TT) {
        for (var oT = 1; oT < arguments.length; oT++) {
          var IT = arguments[oT];
          for (var iT in IT)({}).hasOwnProperty.call(IT, iT) && (TT[iT] = IT[iT])
        }
        return TT
      }, iT.apply(null, arguments)
    }
    IT.d(oT, {
      d: () => LT,
      f: () => XT
    });
    var zT = !1;
    try {
      zT = "undefined" !== typeof localStorage
    } catch (cT) {}
    var kT = "undefined" !== typeof process,
      WT = zT && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || kT && {
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

    function XT(TT, oT, IT, zT, kT) {
      void 0 === zT && (zT = {});
      var WT = iT({}, ST(IT), zT),
        XT = function(TT, oT, IT, zT, kT) {
          var WT = [].concat(oT),
            XT = xT(TT, IT, zT),
            BT = XT.compilerHost,
            FT = XT.updateFile,
            ST = XT.deleteFile,
            DT = new Map,
            LT = 0,
            cT = iT({}, BT, {
              getProjectVersion: function() {
                return LT.toString()
              },
              getCompilationSettings: function() {
                return IT
              },
              getCustomTransformers: function() {
                return kT
              },
              getScriptFileNames: function() {
                return WT.slice()
              },
              getScriptSnapshot: function(oT) {
                var IT = TT.readFile(oT);
                if (IT && "string" === typeof IT) return zT.ScriptSnapshot.fromString(IT)
              },
              getScriptVersion: function(TT) {
                return DT.get(TT) || "0"
              },
              writeFile: TT.writeFile
            }),
            KT = {
              languageServiceHost: cT,
              updateFile: function(TT) {
                LT++, DT.set(TT.fileName, LT.toString()), WT.includes(TT.fileName) || WT.push(TT.fileName), FT(TT)
              },
              deleteFile: function(TT) {
                LT++, DT.set(TT.fileName, LT.toString());
                var oT = WT.indexOf(TT.fileName); - 1 !== oT && WT.splice(oT, 1), ST(TT)
              }
            };
          return KT
        }(TT, oT, WT, IT, kT),
        BT = XT.languageServiceHost,
        FT = XT.updateFile,
        DT = XT.deleteFile,
        LT = IT.createLanguageService(BT),
        cT = LT.getCompilerOptionsDiagnostics();
      if (cT.length) {
        var KT = xT(TT, zT, IT);
        throw new Error(IT.formatDiagnostics(cT, KT.compilerHost))
      }
      return {
        name: "vfs",
        sys: TT,
        languageService: LT,
        getSourceFile: function(TT) {
          var oT;
          return null == (oT = LT.getProgram()) ? void 0 : oT.getSourceFile(TT)
        },
        createFile: function(TT, oT) {
          FT(IT.createSourceFile(TT, oT, WT.target, !1))
        },
        updateFile: function(TT, oT, iT) {
          var zT = LT.getProgram().getSourceFile(TT);
          if (!zT) throw new Error("Did not find a source file for " + TT);
          var kT = zT.text,
            WT = null != iT ? iT : IT.createTextSpan(0, kT.length),
            XT = kT.slice(0, WT.start) + oT + kT.slice(WT.start + WT.length),
            BT = IT.updateSourceFile(zT, XT, {
              span: WT,
              newLength: oT.length
            });
          FT(BT)
        },
        deleteFile: function(TT) {
          var oT = LT.getProgram().getSourceFile(TT);
          oT && DT(oT)
        }
      }
    }

    function BT(TT) {
      throw new Error("Method '" + TT + "' is not implemented.")
    }

    function FT(TT, oT) {
      return function() {
        for (var IT = arguments.length, iT = new Array(IT), zT = 0; zT < IT; zT++) iT[zT] = arguments[zT];
        var kT = oT.apply(void 0, iT),
          XT = "string" === typeof kT ? kT.slice(0, 80) + "..." : kT;
        return WT.apply(void 0, ["> " + TT].concat(iT)), WT("< " + XT), kT
      }
    }
    var ST = function(TT) {
        return iT({}, TT.getDefaultCompilerOptions(), {
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
      DT = function(TT) {
        return TT.replace("/", "/lib.").toLowerCase()
      };

    function LT(TT) {
      return {
        args: [],
        createDirectory: function() {
          return BT("createDirectory")
        },
        directoryExists: FT("directoryExists", (function(oT) {
          return Array.from(TT.keys()).some((function(TT) {
            return TT.startsWith(oT)
          }))
        })),
        exit: function() {
          return BT("exit")
        },
        fileExists: FT("fileExists", (function(oT) {
          return TT.has(oT) || TT.has(DT(oT))
        })),
        getCurrentDirectory: function() {
          return "/"
        },
        getDirectories: function() {
          return []
        },
        getExecutingFilePath: function() {
          return BT("getExecutingFilePath")
        },
        readDirectory: FT("readDirectory", (function(oT) {
          return "/" === oT ? Array.from(TT.keys()) : []
        })),
        readFile: FT("readFile", (function(oT) {
          var IT;
          return null != (IT = TT.get(oT)) ? IT : TT.get(DT(oT))
        })),
        resolvePath: function(TT) {
          return TT
        },
        newLine: "\n",
        useCaseSensitiveFileNames: !0,
        write: function() {
          return BT("write")
        },
        writeFile: function(oT, IT) {
          TT.set(oT, IT)
        },
        deleteFile: function(oT) {
          TT.delete(oT)
        }
      }
    }

    function xT(TT, oT, IT) {
      var zT = new Map;
      return {
        compilerHost: iT({}, TT, {
          getCanonicalFileName: function(TT) {
            return TT
          },
          getDefaultLibFileName: function() {
            return "/" + IT.getDefaultLibFileName(oT)
          },
          getNewLine: function() {
            return TT.newLine
          },
          getSourceFile: function(iT, kT) {
            var WT, XT;
            return zT.get(iT) || (XT = IT.createSourceFile(iT, TT.readFile(iT), null != (WT = null != kT ? kT : oT.target) ? WT : ST(IT).target, !1), zT.set(XT.fileName, XT), XT)
          },
          useCaseSensitiveFileNames: function() {
            return TT.useCaseSensitiveFileNames
          }
        }),
        updateFile: function(oT) {
          var IT = zT.has(oT.fileName);
          return TT.writeFile(oT.fileName, oT.text), zT.set(oT.fileName, oT), IT
        },
        deleteFile: function(oT) {
          var IT = zT.has(oT.fileName);
          return zT.delete(oT.fileName), TT.deleteFile(oT.fileName), IT
        }
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);