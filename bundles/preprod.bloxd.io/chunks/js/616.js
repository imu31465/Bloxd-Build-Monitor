export const id = 616;
export const ids = [616];
export const modules = {
  53583: (WW, iW, OW) => {
    function mW() {
      return mW = Object.assign ? Object.assign.bind() : function(WW) {
        for (var iW = 1; iW < arguments.length; iW++) {
          var OW = arguments[iW];
          for (var mW in OW)({}).hasOwnProperty.call(OW, mW) && (WW[mW] = OW[mW])
        }
        return WW
      }, mW.apply(null, arguments)
    }
    OW.d(iW, {
      b: () => xW,
      d: () => LW
    });
    var EW = !1;
    try {
      EW = "undefined" !== typeof localStorage
    } catch (AW) {}
    var NW = "undefined" !== typeof process,
      PW = EW && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || NW && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.DEBUG ? console.log : function(WW) {
        return ""
      };

    function LW(WW, iW, OW, EW, NW) {
      void 0 === EW && (EW = {});
      var PW = mW({}, tW(OW), EW),
        LW = function(WW, iW, OW, EW, NW) {
          var PW = [].concat(iW),
            LW = lW(WW, OW, EW),
            cW = LW.compilerHost,
            wW = LW.updateFile,
            tW = LW.deleteFile,
            ZW = new Map,
            xW = 0,
            AW = mW({}, cW, {
              getProjectVersion: function() {
                return xW.toString()
              },
              getCompilationSettings: function() {
                return OW
              },
              getCustomTransformers: function() {
                return NW
              },
              getScriptFileNames: function() {
                return PW.slice()
              },
              getScriptSnapshot: function(iW) {
                var OW = WW.readFile(iW);
                if (OW && "string" === typeof OW) return EW.ScriptSnapshot.fromString(OW)
              },
              getScriptVersion: function(WW) {
                return ZW.get(WW) || "0"
              },
              writeFile: WW.writeFile
            }),
            bW = {
              languageServiceHost: AW,
              updateFile: function(WW) {
                xW++, ZW.set(WW.fileName, xW.toString()), PW.includes(WW.fileName) || PW.push(WW.fileName), wW(WW)
              },
              deleteFile: function(WW) {
                xW++, ZW.set(WW.fileName, xW.toString());
                var iW = PW.indexOf(WW.fileName); - 1 !== iW && PW.splice(iW, 1), tW(WW)
              }
            };
          return bW
        }(WW, iW, PW, OW, NW),
        cW = LW.languageServiceHost,
        wW = LW.updateFile,
        ZW = LW.deleteFile,
        xW = OW.createLanguageService(cW),
        AW = xW.getCompilerOptionsDiagnostics();
      if (AW.length) {
        var bW = lW(WW, EW, OW);
        throw new Error(OW.formatDiagnostics(AW, bW.compilerHost))
      }
      return {
        name: "vfs",
        sys: WW,
        languageService: xW,
        getSourceFile: function(WW) {
          var iW;
          return null == (iW = xW.getProgram()) ? void 0 : iW.getSourceFile(WW)
        },
        createFile: function(WW, iW) {
          wW(OW.createSourceFile(WW, iW, PW.target, !1))
        },
        updateFile: function(WW, iW, mW) {
          var EW = xW.getProgram().getSourceFile(WW);
          if (!EW) throw new Error("Did not find a source file for " + WW);
          var NW = EW.text,
            PW = null != mW ? mW : OW.createTextSpan(0, NW.length),
            LW = NW.slice(0, PW.start) + iW + NW.slice(PW.start + PW.length),
            cW = OW.updateSourceFile(EW, LW, {
              span: PW,
              newLength: iW.length
            });
          wW(cW)
        },
        deleteFile: function(WW) {
          var iW = xW.getProgram().getSourceFile(WW);
          iW && ZW(iW)
        }
      }
    }

    function cW(WW) {
      throw new Error("Method '" + WW + "' is not implemented.")
    }

    function wW(WW, iW) {
      return function() {
        for (var OW = arguments.length, mW = new Array(OW), EW = 0; EW < OW; EW++) mW[EW] = arguments[EW];
        var NW = iW.apply(void 0, mW),
          LW = "string" === typeof NW ? NW.slice(0, 80) + "..." : NW;
        return PW.apply(void 0, ["> " + WW].concat(mW)), PW("< " + LW), NW
      }
    }
    var tW = function(WW) {
        return mW({}, WW.getDefaultCompilerOptions(), {
          jsx: WW.JsxEmit.React,
          strict: !0,
          esModuleInterop: !0,
          module: WW.ModuleKind.ESNext,
          suppressOutputPathCheck: !0,
          skipLibCheck: !0,
          skipDefaultLibCheck: !0
        }, WW.versionMajorMinor && Number(WW.versionMajorMinor.split(".")[0]) >= 6 ? {
          ignoreDeprecations: "6.0"
        } : {
          moduleResolution: WW.ModuleResolutionKind.NodeJs
        })
      },
      ZW = function(WW) {
        return WW.replace("/", "/lib.").toLowerCase()
      };

    function xW(WW) {
      return {
        args: [],
        createDirectory: function() {
          return cW("createDirectory")
        },
        directoryExists: wW("directoryExists", (function(iW) {
          return Array.from(WW.keys()).some((function(WW) {
            return WW.startsWith(iW)
          }))
        })),
        exit: function() {
          return cW("exit")
        },
        fileExists: wW("fileExists", (function(iW) {
          return WW.has(iW) || WW.has(ZW(iW))
        })),
        getCurrentDirectory: function() {
          return "/"
        },
        getDirectories: function() {
          return []
        },
        getExecutingFilePath: function() {
          return cW("getExecutingFilePath")
        },
        readDirectory: wW("readDirectory", (function(iW) {
          return "/" === iW ? Array.from(WW.keys()) : []
        })),
        readFile: wW("readFile", (function(iW) {
          var OW;
          return null != (OW = WW.get(iW)) ? OW : WW.get(ZW(iW))
        })),
        resolvePath: function(WW) {
          return WW
        },
        newLine: "\n",
        useCaseSensitiveFileNames: !0,
        write: function() {
          return cW("write")
        },
        writeFile: function(iW, OW) {
          WW.set(iW, OW)
        },
        deleteFile: function(iW) {
          WW.delete(iW)
        }
      }
    }

    function lW(WW, iW, OW) {
      var EW = new Map;
      return {
        compilerHost: mW({}, WW, {
          getCanonicalFileName: function(WW) {
            return WW
          },
          getDefaultLibFileName: function() {
            return "/" + OW.getDefaultLibFileName(iW)
          },
          getNewLine: function() {
            return WW.newLine
          },
          getSourceFile: function(mW, NW) {
            var PW, LW;
            return EW.get(mW) || (LW = OW.createSourceFile(mW, WW.readFile(mW), null != (PW = null != NW ? NW : iW.target) ? PW : tW(OW).target, !1), EW.set(LW.fileName, LW), LW)
          },
          useCaseSensitiveFileNames: function() {
            return WW.useCaseSensitiveFileNames
          }
        }),
        updateFile: function(iW) {
          var OW = EW.has(iW.fileName);
          return WW.writeFile(iW.fileName, iW.text), EW.set(iW.fileName, iW), OW
        },
        deleteFile: function(iW) {
          var OW = EW.has(iW.fileName);
          return EW.delete(iW.fileName), WW.deleteFile(iW.fileName), OW
        }
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);