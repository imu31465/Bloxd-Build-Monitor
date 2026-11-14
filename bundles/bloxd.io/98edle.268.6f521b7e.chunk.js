export const id = 268;
export const ids = [268];
export const modules = {
  38861: (WW, RW, MW) => {
    function wW() {
      return wW = Object.assign ? Object.assign.bind() : function(WW) {
        for (var RW = 1; RW < arguments.length; RW++) {
          var MW = arguments[RW];
          for (var wW in MW)({}).hasOwnProperty.call(MW, wW) && (WW[wW] = MW[wW])
        }
        return WW
      }, wW.apply(null, arguments)
    }
    MW.d(RW, {
      e: () => tR,
      h: () => bR
    });
    var CW = !1;
    try {
      CW = "undefined" !== typeof localStorage
    } catch (gR) {}
    var zR = "undefined" !== typeof process,
      AW = CW && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || zR && {
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

    function bR(WW, RW, MW, CW, zR) {
      void 0 === CW && (CW = {});
      var AW = wW({}, eW(MW), CW),
        bR = function(WW, RW, MW, CW, zR) {
          var AW = [].concat(RW),
            bR = TW(WW, MW, CW),
            yR = bR.compilerHost,
            NW = bR.updateFile,
            eW = bR.deleteFile,
            BW = new Map,
            tR = 0,
            gR = wW({}, yR, {
              getProjectVersion: function() {
                return tR.toString()
              },
              getCompilationSettings: function() {
                return MW
              },
              getCustomTransformers: function() {
                return zR
              },
              getScriptFileNames: function() {
                return AW.slice()
              },
              getScriptSnapshot: function(RW) {
                var MW = WW.readFile(RW);
                if (MW && "string" === typeof MW) return CW.ScriptSnapshot.fromString(MW)
              },
              getScriptVersion: function(WW) {
                return BW.get(WW) || "0"
              },
              writeFile: WW.writeFile
            }),
            iR = {
              languageServiceHost: gR,
              updateFile: function(WW) {
                tR++, BW.set(WW.fileName, tR.toString()), AW.includes(WW.fileName) || AW.push(WW.fileName), NW(WW)
              },
              deleteFile: function(WW) {
                tR++, BW.set(WW.fileName, tR.toString());
                var RW = AW.indexOf(WW.fileName); - 1 !== RW && AW.splice(RW, 1), eW(WW)
              }
            };
          return iR
        }(WW, RW, AW, MW, zR),
        yR = bR.languageServiceHost,
        NW = bR.updateFile,
        BW = bR.deleteFile,
        tR = MW.createLanguageService(yR),
        gR = tR.getCompilerOptionsDiagnostics();
      if (gR.length) {
        var iR = TW(WW, CW, MW);
        throw new Error(MW.formatDiagnostics(gR, iR.compilerHost))
      }
      return {
        name: "vfs",
        sys: WW,
        languageService: tR,
        getSourceFile: function(WW) {
          var RW;
          return null == (RW = tR.getProgram()) ? void 0 : RW.getSourceFile(WW)
        },
        createFile: function(WW, RW) {
          NW(MW.createSourceFile(WW, RW, AW.target, !1))
        },
        updateFile: function(WW, RW, wW) {
          var CW = tR.getProgram().getSourceFile(WW);
          if (!CW) throw new Error("Did not find a source file for " + WW);
          var zR = CW.text,
            AW = null != wW ? wW : MW.createTextSpan(0, zR.length),
            bR = zR.slice(0, AW.start) + RW + zR.slice(AW.start + AW.length),
            yR = MW.updateSourceFile(CW, bR, {
              span: AW,
              newLength: RW.length
            });
          NW(yR)
        },
        deleteFile: function(WW) {
          var RW = tR.getProgram().getSourceFile(WW);
          RW && BW(RW)
        }
      }
    }

    function yR(WW) {
      throw new Error("Method '" + WW + "' is not implemented.")
    }

    function NW(WW, RW) {
      return function() {
        for (var MW = arguments.length, wW = new Array(MW), CW = 0; CW < MW; CW++) wW[CW] = arguments[CW];
        var zR = RW.apply(void 0, wW),
          bR = "string" === typeof zR ? zR.slice(0, 80) + "..." : zR;
        return AW.apply(void 0, ["> " + WW].concat(wW)), AW("< " + bR), zR
      }
    }
    var eW = function(WW) {
        return wW({}, WW.getDefaultCompilerOptions(), {
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
      BW = function(WW) {
        return WW.replace("/", "/lib.").toLowerCase()
      };

    function tR(WW) {
      return {
        args: [],
        createDirectory: function() {
          return yR("createDirectory")
        },
        directoryExists: NW("directoryExists", (function(RW) {
          return Array.from(WW.keys()).some((function(WW) {
            return WW.startsWith(RW)
          }))
        })),
        exit: function() {
          return yR("exit")
        },
        fileExists: NW("fileExists", (function(RW) {
          return WW.has(RW) || WW.has(BW(RW))
        })),
        getCurrentDirectory: function() {
          return "/"
        },
        getDirectories: function() {
          return []
        },
        getExecutingFilePath: function() {
          return yR("getExecutingFilePath")
        },
        readDirectory: NW("readDirectory", (function(RW) {
          return "/" === RW ? Array.from(WW.keys()) : []
        })),
        readFile: NW("readFile", (function(RW) {
          var MW;
          return null != (MW = WW.get(RW)) ? MW : WW.get(BW(RW))
        })),
        resolvePath: function(WW) {
          return WW
        },
        newLine: "\n",
        useCaseSensitiveFileNames: !0,
        write: function() {
          return yR("write")
        },
        writeFile: function(RW, MW) {
          WW.set(RW, MW)
        },
        deleteFile: function(RW) {
          WW.delete(RW)
        }
      }
    }

    function TW(WW, RW, MW) {
      var CW = new Map;
      return {
        compilerHost: wW({}, WW, {
          getCanonicalFileName: function(WW) {
            return WW
          },
          getDefaultLibFileName: function() {
            return "/" + MW.getDefaultLibFileName(RW)
          },
          getNewLine: function() {
            return WW.newLine
          },
          getSourceFile: function(wW, zR) {
            var AW, bR;
            return CW.get(wW) || (bR = MW.createSourceFile(wW, WW.readFile(wW), null != (AW = null != zR ? zR : RW.target) ? AW : eW(MW).target, !1), CW.set(bR.fileName, bR), bR)
          },
          useCaseSensitiveFileNames: function() {
            return WW.useCaseSensitiveFileNames
          }
        }),
        updateFile: function(RW) {
          var MW = CW.has(RW.fileName);
          return WW.writeFile(RW.fileName, RW.text), CW.set(RW.fileName, RW), MW
        },
        deleteFile: function(RW) {
          var MW = CW.has(RW.fileName);
          return CW.delete(RW.fileName), WW.deleteFile(RW.fileName), MW
        }
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);