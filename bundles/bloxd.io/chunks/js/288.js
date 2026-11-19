export const id = 288;
export const ids = [288];
export const modules = {
  40472: (YY, rY, DY) => {
    function FY() {
      return FY = Object.assign ? Object.assign.bind() : function(YY) {
        for (var rY = 1; rY < arguments.length; rY++) {
          var DY = arguments[rY];
          for (var FY in DY)({}).hasOwnProperty.call(DY, FY) && (YY[FY] = DY[FY])
        }
        return YY
      }, FY.apply(null, arguments)
    }
    DY.d(rY, {
      b: () => sY,
      e: () => OY
    });
    var AY = !1;
    try {
      AY = "undefined" !== typeof localStorage
    } catch (yY) {}
    var IY = "undefined" !== typeof process,
      RY = AY && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || IY && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.DEBUG ? console.log : function(YY) {
        return ""
      };

    function OY(YY, rY, DY, AY, IY) {
      void 0 === AY && (AY = {});
      var RY = FY({}, vY(DY), AY),
        OY = function(YY, rY, DY, AY, IY) {
          var RY = [].concat(rY),
            OY = iY(YY, DY, AY),
            gY = OY.compilerHost,
            aY = OY.updateFile,
            vY = OY.deleteFile,
            uY = new Map,
            sY = 0,
            yY = FY({}, gY, {
              getProjectVersion: function() {
                return sY.toString()
              },
              getCompilationSettings: function() {
                return DY
              },
              getCustomTransformers: function() {
                return IY
              },
              getScriptFileNames: function() {
                return RY.slice()
              },
              getScriptSnapshot: function(rY) {
                var DY = YY.readFile(rY);
                if (DY && "string" === typeof DY) return AY.ScriptSnapshot.fromString(DY)
              },
              getScriptVersion: function(YY) {
                return uY.get(YY) || "0"
              },
              writeFile: YY.writeFile
            }),
            QY = {
              languageServiceHost: yY,
              updateFile: function(YY) {
                sY++, uY.set(YY.fileName, sY.toString()), RY.includes(YY.fileName) || RY.push(YY.fileName), aY(YY)
              },
              deleteFile: function(YY) {
                sY++, uY.set(YY.fileName, sY.toString());
                var rY = RY.indexOf(YY.fileName); - 1 !== rY && RY.splice(rY, 1), vY(YY)
              }
            };
          return QY
        }(YY, rY, RY, DY, IY),
        gY = OY.languageServiceHost,
        aY = OY.updateFile,
        uY = OY.deleteFile,
        sY = DY.createLanguageService(gY),
        yY = sY.getCompilerOptionsDiagnostics();
      if (yY.length) {
        var QY = iY(YY, AY, DY);
        throw new Error(DY.formatDiagnostics(yY, QY.compilerHost))
      }
      return {
        name: "vfs",
        sys: YY,
        languageService: sY,
        getSourceFile: function(YY) {
          var rY;
          return null == (rY = sY.getProgram()) ? void 0 : rY.getSourceFile(YY)
        },
        createFile: function(YY, rY) {
          aY(DY.createSourceFile(YY, rY, RY.target, !1))
        },
        updateFile: function(YY, rY, FY) {
          var AY = sY.getProgram().getSourceFile(YY);
          if (!AY) throw new Error("Did not find a source file for " + YY);
          var IY = AY.text,
            RY = null != FY ? FY : DY.createTextSpan(0, IY.length),
            OY = IY.slice(0, RY.start) + rY + IY.slice(RY.start + RY.length),
            gY = DY.updateSourceFile(AY, OY, {
              span: RY,
              newLength: rY.length
            });
          aY(gY)
        },
        deleteFile: function(YY) {
          var rY = sY.getProgram().getSourceFile(YY);
          rY && uY(rY)
        }
      }
    }

    function gY(YY) {
      throw new Error("Method '" + YY + "' is not implemented.")
    }

    function aY(YY, rY) {
      return function() {
        for (var DY = arguments.length, FY = new Array(DY), AY = 0; AY < DY; AY++) FY[AY] = arguments[AY];
        var IY = rY.apply(void 0, FY),
          OY = "string" === typeof IY ? IY.slice(0, 80) + "..." : IY;
        return RY.apply(void 0, ["> " + YY].concat(FY)), RY("< " + OY), IY
      }
    }
    var vY = function(YY) {
        return FY({}, YY.getDefaultCompilerOptions(), {
          jsx: YY.JsxEmit.React,
          strict: !0,
          esModuleInterop: !0,
          module: YY.ModuleKind.ESNext,
          suppressOutputPathCheck: !0,
          skipLibCheck: !0,
          skipDefaultLibCheck: !0
        }, YY.versionMajorMinor && Number(YY.versionMajorMinor.split(".")[0]) >= 6 ? {
          ignoreDeprecations: "6.0"
        } : {
          moduleResolution: YY.ModuleResolutionKind.NodeJs
        })
      },
      uY = function(YY) {
        return YY.replace("/", "/lib.").toLowerCase()
      };

    function sY(YY) {
      return {
        args: [],
        createDirectory: function() {
          return gY("createDirectory")
        },
        directoryExists: aY("directoryExists", (function(rY) {
          return Array.from(YY.keys()).some((function(YY) {
            return YY.startsWith(rY)
          }))
        })),
        exit: function() {
          return gY("exit")
        },
        fileExists: aY("fileExists", (function(rY) {
          return YY.has(rY) || YY.has(uY(rY))
        })),
        getCurrentDirectory: function() {
          return "/"
        },
        getDirectories: function() {
          return []
        },
        getExecutingFilePath: function() {
          return gY("getExecutingFilePath")
        },
        readDirectory: aY("readDirectory", (function(rY) {
          return "/" === rY ? Array.from(YY.keys()) : []
        })),
        readFile: aY("readFile", (function(rY) {
          var DY;
          return null != (DY = YY.get(rY)) ? DY : YY.get(uY(rY))
        })),
        resolvePath: function(YY) {
          return YY
        },
        newLine: "\n",
        useCaseSensitiveFileNames: !0,
        write: function() {
          return gY("write")
        },
        writeFile: function(rY, DY) {
          YY.set(rY, DY)
        },
        deleteFile: function(rY) {
          YY.delete(rY)
        }
      }
    }

    function iY(YY, rY, DY) {
      var AY = new Map;
      return {
        compilerHost: FY({}, YY, {
          getCanonicalFileName: function(YY) {
            return YY
          },
          getDefaultLibFileName: function() {
            return "/" + DY.getDefaultLibFileName(rY)
          },
          getNewLine: function() {
            return YY.newLine
          },
          getSourceFile: function(FY, IY) {
            var RY, OY;
            return AY.get(FY) || (OY = DY.createSourceFile(FY, YY.readFile(FY), null != (RY = null != IY ? IY : rY.target) ? RY : vY(DY).target, !1), AY.set(OY.fileName, OY), OY)
          },
          useCaseSensitiveFileNames: function() {
            return YY.useCaseSensitiveFileNames
          }
        }),
        updateFile: function(rY) {
          var DY = AY.has(rY.fileName);
          return YY.writeFile(rY.fileName, rY.text), AY.set(rY.fileName, rY), DY
        },
        deleteFile: function(rY) {
          var DY = AY.has(rY.fileName);
          return AY.delete(rY.fileName), YY.deleteFile(rY.fileName), DY
        }
      }
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);