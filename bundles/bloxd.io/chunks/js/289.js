export const id = 289;
export const ids = [289];
export const modules = {
  40778: (QQ, FQ, wQ) => {
    function LQ() {
      return LQ = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var FQ = 1; FQ < arguments.length; FQ++) {
          var wQ = arguments[FQ];
          for (var LQ in wQ)({}).hasOwnProperty.call(wQ, LQ) && (QQ[LQ] = wQ[LQ])
        }
        return QQ
      }, LQ.apply(null, arguments)
    }
    wQ.d(FQ, {
      d: () => bQ,
      h: () => kQ
    });
    var qQ = !1;
    try {
      qQ = "undefined" !== typeof localStorage
    } catch (xQ) {}
    var oQ = "undefined" !== typeof process,
      DQ = qQ && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || oQ && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.DEBUG ? console.log : function(QQ) {
        return ""
      };

    function kQ(QQ, FQ, wQ, qQ, oQ) {
      void 0 === qQ && (qQ = {});
      var DQ = LQ({}, uQ(wQ), qQ),
        kQ = function(QQ, FQ, wQ, qQ, oQ) {
          var DQ = [].concat(FQ),
            kQ = YQ(QQ, wQ, qQ),
            vQ = kQ.compilerHost,
            mQ = kQ.updateFile,
            uQ = kQ.deleteFile,
            HQ = new Map,
            bQ = 0,
            xQ = LQ({}, vQ, {
              getProjectVersion: function() {
                return bQ.toString()
              },
              getCompilationSettings: function() {
                return wQ
              },
              getCustomTransformers: function() {
                return oQ
              },
              getScriptFileNames: function() {
                return DQ.slice()
              },
              getScriptSnapshot: function(FQ) {
                var wQ = QQ.readFile(FQ);
                if (wQ && "string" === typeof wQ) return qQ.ScriptSnapshot.fromString(wQ)
              },
              getScriptVersion: function(QQ) {
                return HQ.get(QQ) || "0"
              },
              writeFile: QQ.writeFile
            }),
            AQ = {
              languageServiceHost: xQ,
              updateFile: function(QQ) {
                bQ++, HQ.set(QQ.fileName, bQ.toString()), DQ.includes(QQ.fileName) || DQ.push(QQ.fileName), mQ(QQ)
              },
              deleteFile: function(QQ) {
                bQ++, HQ.set(QQ.fileName, bQ.toString());
                var FQ = DQ.indexOf(QQ.fileName); - 1 !== FQ && DQ.splice(FQ, 1), uQ(QQ)
              }
            };
          return AQ
        }(QQ, FQ, DQ, wQ, oQ),
        vQ = kQ.languageServiceHost,
        mQ = kQ.updateFile,
        HQ = kQ.deleteFile,
        bQ = wQ.createLanguageService(vQ),
        xQ = bQ.getCompilerOptionsDiagnostics();
      if (xQ.length) {
        var AQ = YQ(QQ, qQ, wQ);
        throw new Error(wQ.formatDiagnostics(xQ, AQ.compilerHost))
      }
      return {
        name: "vfs",
        sys: QQ,
        languageService: bQ,
        getSourceFile: function(QQ) {
          var FQ;
          return null == (FQ = bQ.getProgram()) ? void 0 : FQ.getSourceFile(QQ)
        },
        createFile: function(QQ, FQ) {
          mQ(wQ.createSourceFile(QQ, FQ, DQ.target, !1))
        },
        updateFile: function(QQ, FQ, LQ) {
          var qQ = bQ.getProgram().getSourceFile(QQ);
          if (!qQ) throw new Error("Did not find a source file for " + QQ);
          var oQ = qQ.text,
            DQ = null != LQ ? LQ : wQ.createTextSpan(0, oQ.length),
            kQ = oQ.slice(0, DQ.start) + FQ + oQ.slice(DQ.start + DQ.length),
            vQ = wQ.updateSourceFile(qQ, kQ, {
              span: DQ,
              newLength: FQ.length
            });
          mQ(vQ)
        },
        deleteFile: function(QQ) {
          var FQ = bQ.getProgram().getSourceFile(QQ);
          FQ && HQ(FQ)
        }
      }
    }

    function vQ(QQ) {
      throw new Error("Method '" + QQ + "' is not implemented.")
    }

    function mQ(QQ, FQ) {
      return function() {
        for (var wQ = arguments.length, LQ = new Array(wQ), qQ = 0; qQ < wQ; qQ++) LQ[qQ] = arguments[qQ];
        var oQ = FQ.apply(void 0, LQ),
          kQ = "string" === typeof oQ ? oQ.slice(0, 80) + "..." : oQ;
        return DQ.apply(void 0, ["> " + QQ].concat(LQ)), DQ("< " + kQ), oQ
      }
    }
    var uQ = function(QQ) {
        return LQ({}, QQ.getDefaultCompilerOptions(), {
          jsx: QQ.JsxEmit.React,
          strict: !0,
          esModuleInterop: !0,
          module: QQ.ModuleKind.ESNext,
          suppressOutputPathCheck: !0,
          skipLibCheck: !0,
          skipDefaultLibCheck: !0
        }, QQ.versionMajorMinor && Number(QQ.versionMajorMinor.split(".")[0]) >= 6 ? {
          ignoreDeprecations: "6.0"
        } : {
          moduleResolution: QQ.ModuleResolutionKind.NodeJs
        })
      },
      HQ = function(QQ) {
        return QQ.replace("/", "/lib.").toLowerCase()
      };

    function bQ(QQ) {
      return {
        args: [],
        createDirectory: function() {
          return vQ("createDirectory")
        },
        directoryExists: mQ("directoryExists", (function(FQ) {
          return Array.from(QQ.keys()).some((function(QQ) {
            return QQ.startsWith(FQ)
          }))
        })),
        exit: function() {
          return vQ("exit")
        },
        fileExists: mQ("fileExists", (function(FQ) {
          return QQ.has(FQ) || QQ.has(HQ(FQ))
        })),
        getCurrentDirectory: function() {
          return "/"
        },
        getDirectories: function() {
          return []
        },
        getExecutingFilePath: function() {
          return vQ("getExecutingFilePath")
        },
        readDirectory: mQ("readDirectory", (function(FQ) {
          return "/" === FQ ? Array.from(QQ.keys()) : []
        })),
        readFile: mQ("readFile", (function(FQ) {
          var wQ;
          return null != (wQ = QQ.get(FQ)) ? wQ : QQ.get(HQ(FQ))
        })),
        resolvePath: function(QQ) {
          return QQ
        },
        newLine: "\n",
        useCaseSensitiveFileNames: !0,
        write: function() {
          return vQ("write")
        },
        writeFile: function(FQ, wQ) {
          QQ.set(FQ, wQ)
        },
        deleteFile: function(FQ) {
          QQ.delete(FQ)
        }
      }
    }

    function YQ(QQ, FQ, wQ) {
      var qQ = new Map;
      return {
        compilerHost: LQ({}, QQ, {
          getCanonicalFileName: function(QQ) {
            return QQ
          },
          getDefaultLibFileName: function() {
            return "/" + wQ.getDefaultLibFileName(FQ)
          },
          getNewLine: function() {
            return QQ.newLine
          },
          getSourceFile: function(LQ, oQ) {
            var DQ, kQ;
            return qQ.get(LQ) || (kQ = wQ.createSourceFile(LQ, QQ.readFile(LQ), null != (DQ = null != oQ ? oQ : FQ.target) ? DQ : uQ(wQ).target, !1), qQ.set(kQ.fileName, kQ), kQ)
          },
          useCaseSensitiveFileNames: function() {
            return QQ.useCaseSensitiveFileNames
          }
        }),
        updateFile: function(FQ) {
          var wQ = qQ.has(FQ.fileName);
          return QQ.writeFile(FQ.fileName, FQ.text), qQ.set(FQ.fileName, FQ), wQ
        },
        deleteFile: function(FQ) {
          var wQ = qQ.has(FQ.fileName);
          return qQ.delete(FQ.fileName), QQ.deleteFile(FQ.fileName), wQ
        }
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);