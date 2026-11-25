export const id = 306;
export const ids = [306];
export const modules = {
  41615: (QQ, WQ, XQ) => {
    function wQ() {
      return wQ = Object.assign ? Object.assign.bind() : function(QQ) {
        for (var WQ = 1; WQ < arguments.length; WQ++) {
          var XQ = arguments[WQ];
          for (var wQ in XQ)({}).hasOwnProperty.call(XQ, wQ) && (QQ[wQ] = XQ[wQ])
        }
        return QQ
      }, wQ.apply(null, arguments)
    }
    XQ.d(WQ, {
      c: () => rQ,
      g: () => sQ
    });
    var qQ = !1;
    try {
      qQ = "undefined" !== typeof localStorage
    } catch (jQ) {}
    var TQ = "undefined" !== typeof process,
      zQ = qQ && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || TQ && {
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

    function sQ(QQ, WQ, XQ, qQ, TQ) {
      void 0 === qQ && (qQ = {});
      var zQ = wQ({}, gQ(XQ), qQ),
        sQ = function(QQ, WQ, XQ, qQ, TQ) {
          var zQ = [].concat(WQ),
            sQ = IQ(QQ, XQ, qQ),
            FQ = sQ.compilerHost,
            PQ = sQ.updateFile,
            gQ = sQ.deleteFile,
            JQ = new Map,
            rQ = 0,
            jQ = wQ({}, FQ, {
              getProjectVersion: function() {
                return rQ.toString()
              },
              getCompilationSettings: function() {
                return XQ
              },
              getCustomTransformers: function() {
                return TQ
              },
              getScriptFileNames: function() {
                return zQ.slice()
              },
              getScriptSnapshot: function(WQ) {
                var XQ = QQ.readFile(WQ);
                if (XQ && "string" === typeof XQ) return qQ.ScriptSnapshot.fromString(XQ)
              },
              getScriptVersion: function(QQ) {
                return JQ.get(QQ) || "0"
              },
              writeFile: QQ.writeFile
            }),
            BQ = {
              languageServiceHost: jQ,
              updateFile: function(QQ) {
                rQ++, JQ.set(QQ.fileName, rQ.toString()), zQ.includes(QQ.fileName) || zQ.push(QQ.fileName), PQ(QQ)
              },
              deleteFile: function(QQ) {
                rQ++, JQ.set(QQ.fileName, rQ.toString());
                var WQ = zQ.indexOf(QQ.fileName); - 1 !== WQ && zQ.splice(WQ, 1), gQ(QQ)
              }
            };
          return BQ
        }(QQ, WQ, zQ, XQ, TQ),
        FQ = sQ.languageServiceHost,
        PQ = sQ.updateFile,
        JQ = sQ.deleteFile,
        rQ = XQ.createLanguageService(FQ),
        jQ = rQ.getCompilerOptionsDiagnostics();
      if (jQ.length) {
        var BQ = IQ(QQ, qQ, XQ);
        throw new Error(XQ.formatDiagnostics(jQ, BQ.compilerHost))
      }
      return {
        name: "vfs",
        sys: QQ,
        languageService: rQ,
        getSourceFile: function(QQ) {
          var WQ;
          return null == (WQ = rQ.getProgram()) ? void 0 : WQ.getSourceFile(QQ)
        },
        createFile: function(QQ, WQ) {
          PQ(XQ.createSourceFile(QQ, WQ, zQ.target, !1))
        },
        updateFile: function(QQ, WQ, wQ) {
          var qQ = rQ.getProgram().getSourceFile(QQ);
          if (!qQ) throw new Error("Did not find a source file for " + QQ);
          var TQ = qQ.text,
            zQ = null != wQ ? wQ : XQ.createTextSpan(0, TQ.length),
            sQ = TQ.slice(0, zQ.start) + WQ + TQ.slice(zQ.start + zQ.length),
            FQ = XQ.updateSourceFile(qQ, sQ, {
              span: zQ,
              newLength: WQ.length
            });
          PQ(FQ)
        },
        deleteFile: function(QQ) {
          var WQ = rQ.getProgram().getSourceFile(QQ);
          WQ && JQ(WQ)
        }
      }
    }

    function FQ(QQ) {
      throw new Error("Method '" + QQ + "' is not implemented.")
    }

    function PQ(QQ, WQ) {
      return function() {
        for (var XQ = arguments.length, wQ = new Array(XQ), qQ = 0; qQ < XQ; qQ++) wQ[qQ] = arguments[qQ];
        var TQ = WQ.apply(void 0, wQ),
          sQ = "string" === typeof TQ ? TQ.slice(0, 80) + "..." : TQ;
        return zQ.apply(void 0, ["> " + QQ].concat(wQ)), zQ("< " + sQ), TQ
      }
    }
    var gQ = function(QQ) {
        return wQ({}, QQ.getDefaultCompilerOptions(), {
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
      JQ = function(QQ) {
        return QQ.replace("/", "/lib.").toLowerCase()
      };

    function rQ(QQ) {
      return {
        args: [],
        createDirectory: function() {
          return FQ("createDirectory")
        },
        directoryExists: PQ("directoryExists", (function(WQ) {
          return Array.from(QQ.keys()).some((function(QQ) {
            return QQ.startsWith(WQ)
          }))
        })),
        exit: function() {
          return FQ("exit")
        },
        fileExists: PQ("fileExists", (function(WQ) {
          return QQ.has(WQ) || QQ.has(JQ(WQ))
        })),
        getCurrentDirectory: function() {
          return "/"
        },
        getDirectories: function() {
          return []
        },
        getExecutingFilePath: function() {
          return FQ("getExecutingFilePath")
        },
        readDirectory: PQ("readDirectory", (function(WQ) {
          return "/" === WQ ? Array.from(QQ.keys()) : []
        })),
        readFile: PQ("readFile", (function(WQ) {
          var XQ;
          return null != (XQ = QQ.get(WQ)) ? XQ : QQ.get(JQ(WQ))
        })),
        resolvePath: function(QQ) {
          return QQ
        },
        newLine: "\n",
        useCaseSensitiveFileNames: !0,
        write: function() {
          return FQ("write")
        },
        writeFile: function(WQ, XQ) {
          QQ.set(WQ, XQ)
        },
        deleteFile: function(WQ) {
          QQ.delete(WQ)
        }
      }
    }

    function IQ(QQ, WQ, XQ) {
      var qQ = new Map;
      return {
        compilerHost: wQ({}, QQ, {
          getCanonicalFileName: function(QQ) {
            return QQ
          },
          getDefaultLibFileName: function() {
            return "/" + XQ.getDefaultLibFileName(WQ)
          },
          getNewLine: function() {
            return QQ.newLine
          },
          getSourceFile: function(wQ, TQ) {
            var zQ, sQ;
            return qQ.get(wQ) || (sQ = XQ.createSourceFile(wQ, QQ.readFile(wQ), null != (zQ = null != TQ ? TQ : WQ.target) ? zQ : gQ(XQ).target, !1), qQ.set(sQ.fileName, sQ), sQ)
          },
          useCaseSensitiveFileNames: function() {
            return QQ.useCaseSensitiveFileNames
          }
        }),
        updateFile: function(WQ) {
          var XQ = qQ.has(WQ.fileName);
          return QQ.writeFile(WQ.fileName, WQ.text), qQ.set(WQ.fileName, WQ), XQ
        },
        deleteFile: function(WQ) {
          var XQ = qQ.has(WQ.fileName);
          return qQ.delete(WQ.fileName), QQ.deleteFile(WQ.fileName), XQ
        }
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);