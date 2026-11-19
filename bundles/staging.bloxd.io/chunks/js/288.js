export const id = 288;
export const ids = [288];
export const modules = {
  40444: (DD, CD, cD) => {
    function ID() {
      return ID = Object.assign ? Object.assign.bind() : function(DD) {
        for (var CD = 1; CD < arguments.length; CD++) {
          var cD = arguments[CD];
          for (var ID in cD)({}).hasOwnProperty.call(cD, ID) && (DD[ID] = cD[ID])
        }
        return DD
      }, ID.apply(null, arguments)
    }
    cD.d(CD, {
      c: () => yD,
      e: () => bD
    });
    var pD = !1;
    try {
      pD = "undefined" !== typeof localStorage
    } catch (tD) {}
    var iD = "undefined" !== typeof process,
      fD = pD && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || iD && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.DEBUG ? console.log : function(DD) {
        return ""
      };

    function bD(DD, CD, cD, pD, iD) {
      void 0 === pD && (pD = {});
      var fD = ID({}, SD(cD), pD),
        bD = function(DD, CD, cD, pD, iD) {
          var fD = [].concat(CD),
            bD = MD(DD, cD, pD),
            QD = bD.compilerHost,
            wD = bD.updateFile,
            SD = bD.deleteFile,
            BD = new Map,
            yD = 0,
            tD = ID({}, QD, {
              getProjectVersion: function() {
                return yD.toString()
              },
              getCompilationSettings: function() {
                return cD
              },
              getCustomTransformers: function() {
                return iD
              },
              getScriptFileNames: function() {
                return fD.slice()
              },
              getScriptSnapshot: function(CD) {
                var cD = DD.readFile(CD);
                if (cD && "string" === typeof cD) return pD.ScriptSnapshot.fromString(cD)
              },
              getScriptVersion: function(DD) {
                return BD.get(DD) || "0"
              },
              writeFile: DD.writeFile
            }),
            ZD = {
              languageServiceHost: tD,
              updateFile: function(DD) {
                yD++, BD.set(DD.fileName, yD.toString()), fD.includes(DD.fileName) || fD.push(DD.fileName), wD(DD)
              },
              deleteFile: function(DD) {
                yD++, BD.set(DD.fileName, yD.toString());
                var CD = fD.indexOf(DD.fileName); - 1 !== CD && fD.splice(CD, 1), SD(DD)
              }
            };
          return ZD
        }(DD, CD, fD, cD, iD),
        QD = bD.languageServiceHost,
        wD = bD.updateFile,
        BD = bD.deleteFile,
        yD = cD.createLanguageService(QD),
        tD = yD.getCompilerOptionsDiagnostics();
      if (tD.length) {
        var ZD = MD(DD, pD, cD);
        throw new Error(cD.formatDiagnostics(tD, ZD.compilerHost))
      }
      return {
        name: "vfs",
        sys: DD,
        languageService: yD,
        getSourceFile: function(DD) {
          var CD;
          return null == (CD = yD.getProgram()) ? void 0 : CD.getSourceFile(DD)
        },
        createFile: function(DD, CD) {
          wD(cD.createSourceFile(DD, CD, fD.target, !1))
        },
        updateFile: function(DD, CD, ID) {
          var pD = yD.getProgram().getSourceFile(DD);
          if (!pD) throw new Error("Did not find a source file for " + DD);
          var iD = pD.text,
            fD = null != ID ? ID : cD.createTextSpan(0, iD.length),
            bD = iD.slice(0, fD.start) + CD + iD.slice(fD.start + fD.length),
            QD = cD.updateSourceFile(pD, bD, {
              span: fD,
              newLength: CD.length
            });
          wD(QD)
        },
        deleteFile: function(DD) {
          var CD = yD.getProgram().getSourceFile(DD);
          CD && BD(CD)
        }
      }
    }

    function QD(DD) {
      throw new Error("Method '" + DD + "' is not implemented.")
    }

    function wD(DD, CD) {
      return function() {
        for (var cD = arguments.length, ID = new Array(cD), pD = 0; pD < cD; pD++) ID[pD] = arguments[pD];
        var iD = CD.apply(void 0, ID),
          bD = "string" === typeof iD ? iD.slice(0, 80) + "..." : iD;
        return fD.apply(void 0, ["> " + DD].concat(ID)), fD("< " + bD), iD
      }
    }
    var SD = function(DD) {
        return ID({}, DD.getDefaultCompilerOptions(), {
          jsx: DD.JsxEmit.React,
          strict: !0,
          esModuleInterop: !0,
          module: DD.ModuleKind.ESNext,
          suppressOutputPathCheck: !0,
          skipLibCheck: !0,
          skipDefaultLibCheck: !0
        }, DD.versionMajorMinor && Number(DD.versionMajorMinor.split(".")[0]) >= 6 ? {
          ignoreDeprecations: "6.0"
        } : {
          moduleResolution: DD.ModuleResolutionKind.NodeJs
        })
      },
      BD = function(DD) {
        return DD.replace("/", "/lib.").toLowerCase()
      };

    function yD(DD) {
      return {
        args: [],
        createDirectory: function() {
          return QD("createDirectory")
        },
        directoryExists: wD("directoryExists", (function(CD) {
          return Array.from(DD.keys()).some((function(DD) {
            return DD.startsWith(CD)
          }))
        })),
        exit: function() {
          return QD("exit")
        },
        fileExists: wD("fileExists", (function(CD) {
          return DD.has(CD) || DD.has(BD(CD))
        })),
        getCurrentDirectory: function() {
          return "/"
        },
        getDirectories: function() {
          return []
        },
        getExecutingFilePath: function() {
          return QD("getExecutingFilePath")
        },
        readDirectory: wD("readDirectory", (function(CD) {
          return "/" === CD ? Array.from(DD.keys()) : []
        })),
        readFile: wD("readFile", (function(CD) {
          var cD;
          return null != (cD = DD.get(CD)) ? cD : DD.get(BD(CD))
        })),
        resolvePath: function(DD) {
          return DD
        },
        newLine: "\n",
        useCaseSensitiveFileNames: !0,
        write: function() {
          return QD("write")
        },
        writeFile: function(CD, cD) {
          DD.set(CD, cD)
        },
        deleteFile: function(CD) {
          DD.delete(CD)
        }
      }
    }

    function MD(DD, CD, cD) {
      var pD = new Map;
      return {
        compilerHost: ID({}, DD, {
          getCanonicalFileName: function(DD) {
            return DD
          },
          getDefaultLibFileName: function() {
            return "/" + cD.getDefaultLibFileName(CD)
          },
          getNewLine: function() {
            return DD.newLine
          },
          getSourceFile: function(ID, iD) {
            var fD, bD;
            return pD.get(ID) || (bD = cD.createSourceFile(ID, DD.readFile(ID), null != (fD = null != iD ? iD : CD.target) ? fD : SD(cD).target, !1), pD.set(bD.fileName, bD), bD)
          },
          useCaseSensitiveFileNames: function() {
            return DD.useCaseSensitiveFileNames
          }
        }),
        updateFile: function(CD) {
          var cD = pD.has(CD.fileName);
          return DD.writeFile(CD.fileName, CD.text), pD.set(CD.fileName, CD), cD
        },
        deleteFile: function(CD) {
          var cD = pD.has(CD.fileName);
          return pD.delete(CD.fileName), DD.deleteFile(CD.fileName), cD
        }
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);