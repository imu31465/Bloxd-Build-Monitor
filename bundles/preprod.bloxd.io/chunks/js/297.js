export const id = 297;
export const ids = [297];
export const modules = {
  41191: (CC, zC, ZC) => {
    function QC() {
      return QC = Object.assign ? Object.assign.bind() : function(CC) {
        for (var zC = 1; zC < arguments.length; zC++) {
          var ZC = arguments[zC];
          for (var QC in ZC)({}).hasOwnProperty.call(ZC, QC) && (CC[QC] = ZC[QC])
        }
        return CC
      }, QC.apply(null, arguments)
    }
    ZC.d(zC, {
      e: () => NC,
      h: () => fC
    });
    var wC = !1;
    try {
      wC = "undefined" !== typeof localStorage
    } catch (gC) {}
    var bC = "undefined" !== typeof process,
      nC = wC && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || bC && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.DEBUG ? console.log : function(CC) {
        return ""
      };

    function fC(CC, zC, ZC, wC, bC) {
      void 0 === wC && (wC = {});
      var nC = QC({}, FC(ZC), wC),
        fC = function(CC, zC, ZC, wC, bC) {
          var nC = [].concat(zC),
            fC = MC(CC, ZC, wC),
            oC = fC.compilerHost,
            qC = fC.updateFile,
            FC = fC.deleteFile,
            WC = new Map,
            NC = 0,
            gC = QC({}, oC, {
              getProjectVersion: function() {
                return NC.toString()
              },
              getCompilationSettings: function() {
                return ZC
              },
              getCustomTransformers: function() {
                return bC
              },
              getScriptFileNames: function() {
                return nC.slice()
              },
              getScriptSnapshot: function(zC) {
                var ZC = CC.readFile(zC);
                if (ZC && "string" === typeof ZC) return wC.ScriptSnapshot.fromString(ZC)
              },
              getScriptVersion: function(CC) {
                return WC.get(CC) || "0"
              },
              writeFile: CC.writeFile
            }),
            SC = {
              languageServiceHost: gC,
              updateFile: function(CC) {
                NC++, WC.set(CC.fileName, NC.toString()), nC.includes(CC.fileName) || nC.push(CC.fileName), qC(CC)
              },
              deleteFile: function(CC) {
                NC++, WC.set(CC.fileName, NC.toString());
                var zC = nC.indexOf(CC.fileName); - 1 !== zC && nC.splice(zC, 1), FC(CC)
              }
            };
          return SC
        }(CC, zC, nC, ZC, bC),
        oC = fC.languageServiceHost,
        qC = fC.updateFile,
        WC = fC.deleteFile,
        NC = ZC.createLanguageService(oC),
        gC = NC.getCompilerOptionsDiagnostics();
      if (gC.length) {
        var SC = MC(CC, wC, ZC);
        throw new Error(ZC.formatDiagnostics(gC, SC.compilerHost))
      }
      return {
        name: "vfs",
        sys: CC,
        languageService: NC,
        getSourceFile: function(CC) {
          var zC;
          return null == (zC = NC.getProgram()) ? void 0 : zC.getSourceFile(CC)
        },
        createFile: function(CC, zC) {
          qC(ZC.createSourceFile(CC, zC, nC.target, !1))
        },
        updateFile: function(CC, zC, QC) {
          var wC = NC.getProgram().getSourceFile(CC);
          if (!wC) throw new Error("Did not find a source file for " + CC);
          var bC = wC.text,
            nC = null != QC ? QC : ZC.createTextSpan(0, bC.length),
            fC = bC.slice(0, nC.start) + zC + bC.slice(nC.start + nC.length),
            oC = ZC.updateSourceFile(wC, fC, {
              span: nC,
              newLength: zC.length
            });
          qC(oC)
        },
        deleteFile: function(CC) {
          var zC = NC.getProgram().getSourceFile(CC);
          zC && WC(zC)
        }
      }
    }

    function oC(CC) {
      throw new Error("Method '" + CC + "' is not implemented.")
    }

    function qC(CC, zC) {
      return function() {
        for (var ZC = arguments.length, QC = new Array(ZC), wC = 0; wC < ZC; wC++) QC[wC] = arguments[wC];
        var bC = zC.apply(void 0, QC),
          fC = "string" === typeof bC ? bC.slice(0, 80) + "..." : bC;
        return nC.apply(void 0, ["> " + CC].concat(QC)), nC("< " + fC), bC
      }
    }
    var FC = function(CC) {
        return QC({}, CC.getDefaultCompilerOptions(), {
          jsx: CC.JsxEmit.React,
          strict: !0,
          esModuleInterop: !0,
          module: CC.ModuleKind.ESNext,
          suppressOutputPathCheck: !0,
          skipLibCheck: !0,
          skipDefaultLibCheck: !0
        }, CC.versionMajorMinor && Number(CC.versionMajorMinor.split(".")[0]) >= 6 ? {
          ignoreDeprecations: "6.0"
        } : {
          moduleResolution: CC.ModuleResolutionKind.NodeJs
        })
      },
      WC = function(CC) {
        return CC.replace("/", "/lib.").toLowerCase()
      };

    function NC(CC) {
      return {
        args: [],
        createDirectory: function() {
          return oC("createDirectory")
        },
        directoryExists: qC("directoryExists", (function(zC) {
          return Array.from(CC.keys()).some((function(CC) {
            return CC.startsWith(zC)
          }))
        })),
        exit: function() {
          return oC("exit")
        },
        fileExists: qC("fileExists", (function(zC) {
          return CC.has(zC) || CC.has(WC(zC))
        })),
        getCurrentDirectory: function() {
          return "/"
        },
        getDirectories: function() {
          return []
        },
        getExecutingFilePath: function() {
          return oC("getExecutingFilePath")
        },
        readDirectory: qC("readDirectory", (function(zC) {
          return "/" === zC ? Array.from(CC.keys()) : []
        })),
        readFile: qC("readFile", (function(zC) {
          var ZC;
          return null != (ZC = CC.get(zC)) ? ZC : CC.get(WC(zC))
        })),
        resolvePath: function(CC) {
          return CC
        },
        newLine: "\n",
        useCaseSensitiveFileNames: !0,
        write: function() {
          return oC("write")
        },
        writeFile: function(zC, ZC) {
          CC.set(zC, ZC)
        },
        deleteFile: function(zC) {
          CC.delete(zC)
        }
      }
    }

    function MC(CC, zC, ZC) {
      var wC = new Map;
      return {
        compilerHost: QC({}, CC, {
          getCanonicalFileName: function(CC) {
            return CC
          },
          getDefaultLibFileName: function() {
            return "/" + ZC.getDefaultLibFileName(zC)
          },
          getNewLine: function() {
            return CC.newLine
          },
          getSourceFile: function(QC, bC) {
            var nC, fC;
            return wC.get(QC) || (fC = ZC.createSourceFile(QC, CC.readFile(QC), null != (nC = null != bC ? bC : zC.target) ? nC : FC(ZC).target, !1), wC.set(fC.fileName, fC), fC)
          },
          useCaseSensitiveFileNames: function() {
            return CC.useCaseSensitiveFileNames
          }
        }),
        updateFile: function(zC) {
          var ZC = wC.has(zC.fileName);
          return CC.writeFile(zC.fileName, zC.text), wC.set(zC.fileName, zC), ZC
        },
        deleteFile: function(zC) {
          var ZC = wC.has(zC.fileName);
          return wC.delete(zC.fileName), CC.deleteFile(zC.fileName), ZC
        }
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);