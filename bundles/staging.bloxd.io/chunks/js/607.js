export const id = 607;
export const ids = [607];
export const modules = {
  44881: (HH, BH, LH) => {
    function AH() {
      return AH = Object.assign ? Object.assign.bind() : function(HH) {
        for (var BH = 1; BH < arguments.length; BH++) {
          var LH = arguments[BH];
          for (var AH in LH)({}).hasOwnProperty.call(LH, AH) && (HH[AH] = LH[AH])
        }
        return HH
      }, AH.apply(null, arguments)
    }
    LH.d(BH, {
      c: () => GH,
      d: () => tH
    });
    var rH = !1;
    try {
      rH = "undefined" !== typeof localStorage
    } catch (uH) {}
    var SH = "undefined" !== typeof process,
      hH = rH && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || SH && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.DEBUG ? console.log : function(HH) {
        return ""
      };

    function tH(HH, BH, LH, rH, SH) {
      void 0 === rH && (rH = {});
      var hH = AH({}, EH(LH), rH),
        tH = function(HH, BH, LH, rH, SH) {
          var hH = [].concat(BH),
            tH = YH(HH, LH, rH),
            zH = tH.compilerHost,
            CH = tH.updateFile,
            EH = tH.deleteFile,
            XH = new Map,
            GH = 0,
            uH = AH({}, zH, {
              getProjectVersion: function() {
                return GH.toString()
              },
              getCompilationSettings: function() {
                return LH
              },
              getCustomTransformers: function() {
                return SH
              },
              getScriptFileNames: function() {
                return hH.slice()
              },
              getScriptSnapshot: function(BH) {
                var LH = HH.readFile(BH);
                if (LH && "string" === typeof LH) return rH.ScriptSnapshot.fromString(LH)
              },
              getScriptVersion: function(HH) {
                return XH.get(HH) || "0"
              },
              writeFile: HH.writeFile
            }),
            QH = {
              languageServiceHost: uH,
              updateFile: function(HH) {
                GH++, XH.set(HH.fileName, GH.toString()), hH.includes(HH.fileName) || hH.push(HH.fileName), CH(HH)
              },
              deleteFile: function(HH) {
                GH++, XH.set(HH.fileName, GH.toString());
                var BH = hH.indexOf(HH.fileName); - 1 !== BH && hH.splice(BH, 1), EH(HH)
              }
            };
          return QH
        }(HH, BH, hH, LH, SH),
        zH = tH.languageServiceHost,
        CH = tH.updateFile,
        XH = tH.deleteFile,
        GH = LH.createLanguageService(zH),
        uH = GH.getCompilerOptionsDiagnostics();
      if (uH.length) {
        var QH = YH(HH, rH, LH);
        throw new Error(LH.formatDiagnostics(uH, QH.compilerHost))
      }
      return {
        name: "vfs",
        sys: HH,
        languageService: GH,
        getSourceFile: function(HH) {
          var BH;
          return null == (BH = GH.getProgram()) ? void 0 : BH.getSourceFile(HH)
        },
        createFile: function(HH, BH) {
          CH(LH.createSourceFile(HH, BH, hH.target, !1))
        },
        updateFile: function(HH, BH, AH) {
          var rH = GH.getProgram().getSourceFile(HH);
          if (!rH) throw new Error("Did not find a source file for " + HH);
          var SH = rH.text,
            hH = null != AH ? AH : LH.createTextSpan(0, SH.length),
            tH = SH.slice(0, hH.start) + BH + SH.slice(hH.start + hH.length),
            zH = LH.updateSourceFile(rH, tH, {
              span: hH,
              newLength: BH.length
            });
          CH(zH)
        },
        deleteFile: function(HH) {
          var BH = GH.getProgram().getSourceFile(HH);
          BH && XH(BH)
        }
      }
    }

    function zH(HH) {
      throw new Error("Method '" + HH + "' is not implemented.")
    }

    function CH(HH, BH) {
      return function() {
        for (var LH = arguments.length, AH = new Array(LH), rH = 0; rH < LH; rH++) AH[rH] = arguments[rH];
        var SH = BH.apply(void 0, AH),
          tH = "string" === typeof SH ? SH.slice(0, 80) + "..." : SH;
        return hH.apply(void 0, ["> " + HH].concat(AH)), hH("< " + tH), SH
      }
    }
    var EH = function(HH) {
        return AH({}, HH.getDefaultCompilerOptions(), {
          jsx: HH.JsxEmit.React,
          strict: !0,
          esModuleInterop: !0,
          module: HH.ModuleKind.ESNext,
          suppressOutputPathCheck: !0,
          skipLibCheck: !0,
          skipDefaultLibCheck: !0
        }, HH.versionMajorMinor && Number(HH.versionMajorMinor.split(".")[0]) >= 6 ? {
          ignoreDeprecations: "6.0"
        } : {
          moduleResolution: HH.ModuleResolutionKind.NodeJs
        })
      },
      XH = function(HH) {
        return HH.replace("/", "/lib.").toLowerCase()
      };

    function GH(HH) {
      return {
        args: [],
        createDirectory: function() {
          return zH("createDirectory")
        },
        directoryExists: CH("directoryExists", (function(BH) {
          return Array.from(HH.keys()).some((function(HH) {
            return HH.startsWith(BH)
          }))
        })),
        exit: function() {
          return zH("exit")
        },
        fileExists: CH("fileExists", (function(BH) {
          return HH.has(BH) || HH.has(XH(BH))
        })),
        getCurrentDirectory: function() {
          return "/"
        },
        getDirectories: function() {
          return []
        },
        getExecutingFilePath: function() {
          return zH("getExecutingFilePath")
        },
        readDirectory: CH("readDirectory", (function(BH) {
          return "/" === BH ? Array.from(HH.keys()) : []
        })),
        readFile: CH("readFile", (function(BH) {
          var LH;
          return null != (LH = HH.get(BH)) ? LH : HH.get(XH(BH))
        })),
        resolvePath: function(HH) {
          return HH
        },
        newLine: "\n",
        useCaseSensitiveFileNames: !0,
        write: function() {
          return zH("write")
        },
        writeFile: function(BH, LH) {
          HH.set(BH, LH)
        },
        deleteFile: function(BH) {
          HH.delete(BH)
        }
      }
    }

    function YH(HH, BH, LH) {
      var rH = new Map;
      return {
        compilerHost: AH({}, HH, {
          getCanonicalFileName: function(HH) {
            return HH
          },
          getDefaultLibFileName: function() {
            return "/" + LH.getDefaultLibFileName(BH)
          },
          getNewLine: function() {
            return HH.newLine
          },
          getSourceFile: function(AH, SH) {
            var hH, tH;
            return rH.get(AH) || (tH = LH.createSourceFile(AH, HH.readFile(AH), null != (hH = null != SH ? SH : BH.target) ? hH : EH(LH).target, !1), rH.set(tH.fileName, tH), tH)
          },
          useCaseSensitiveFileNames: function() {
            return HH.useCaseSensitiveFileNames
          }
        }),
        updateFile: function(BH) {
          var LH = rH.has(BH.fileName);
          return HH.writeFile(BH.fileName, BH.text), rH.set(BH.fileName, BH), LH
        },
        deleteFile: function(BH) {
          var LH = rH.has(BH.fileName);
          return rH.delete(BH.fileName), HH.deleteFile(BH.fileName), LH
        }
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);