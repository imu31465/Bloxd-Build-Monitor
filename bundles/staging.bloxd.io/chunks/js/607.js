export const id = 607;
export const ids = [607];
export const modules = {
  44302: (VV, eV, xV) => {
    function JV() {
      return JV = Object.assign ? Object.assign.bind() : function(VV) {
        for (var eV = 1; eV < arguments.length; eV++) {
          var xV = arguments[eV];
          for (var JV in xV)({}).hasOwnProperty.call(xV, JV) && (VV[JV] = xV[JV])
        }
        return VV
      }, JV.apply(null, arguments)
    }
    xV.d(eV, {
      e: () => vV,
      f: () => pV
    });
    var YV = !1;
    try {
      YV = "undefined" !== typeof localStorage
    } catch (kV) {}
    var UV = "undefined" !== typeof process,
      yV = YV && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || UV && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.DEBUG ? console.log : function(VV) {
        return ""
      };

    function pV(VV, eV, xV, YV, UV) {
      void 0 === YV && (YV = {});
      var yV = JV({}, wV(xV), YV),
        pV = function(VV, eV, xV, YV, UV) {
          var yV = [].concat(eV),
            pV = rV(VV, xV, YV),
            QV = pV.compilerHost,
            nV = pV.updateFile,
            wV = pV.deleteFile,
            ZV = new Map,
            vV = 0,
            kV = JV({}, QV, {
              getProjectVersion: function() {
                return vV.toString()
              },
              getCompilationSettings: function() {
                return xV
              },
              getCustomTransformers: function() {
                return UV
              },
              getScriptFileNames: function() {
                return yV.slice()
              },
              getScriptSnapshot: function(eV) {
                var xV = VV.readFile(eV);
                if (xV && "string" === typeof xV) return YV.ScriptSnapshot.fromString(xV)
              },
              getScriptVersion: function(VV) {
                return ZV.get(VV) || "0"
              },
              writeFile: VV.writeFile
            }),
            bV = {
              languageServiceHost: kV,
              updateFile: function(VV) {
                vV++, ZV.set(VV.fileName, vV.toString()), yV.includes(VV.fileName) || yV.push(VV.fileName), nV(VV)
              },
              deleteFile: function(VV) {
                vV++, ZV.set(VV.fileName, vV.toString());
                var eV = yV.indexOf(VV.fileName); - 1 !== eV && yV.splice(eV, 1), wV(VV)
              }
            };
          return bV
        }(VV, eV, yV, xV, UV),
        QV = pV.languageServiceHost,
        nV = pV.updateFile,
        ZV = pV.deleteFile,
        vV = xV.createLanguageService(QV),
        kV = vV.getCompilerOptionsDiagnostics();
      if (kV.length) {
        var bV = rV(VV, YV, xV);
        throw new Error(xV.formatDiagnostics(kV, bV.compilerHost))
      }
      return {
        name: "vfs",
        sys: VV,
        languageService: vV,
        getSourceFile: function(VV) {
          var eV;
          return null == (eV = vV.getProgram()) ? void 0 : eV.getSourceFile(VV)
        },
        createFile: function(VV, eV) {
          nV(xV.createSourceFile(VV, eV, yV.target, !1))
        },
        updateFile: function(VV, eV, JV) {
          var YV = vV.getProgram().getSourceFile(VV);
          if (!YV) throw new Error("Did not find a source file for " + VV);
          var UV = YV.text,
            yV = null != JV ? JV : xV.createTextSpan(0, UV.length),
            pV = UV.slice(0, yV.start) + eV + UV.slice(yV.start + yV.length),
            QV = xV.updateSourceFile(YV, pV, {
              span: yV,
              newLength: eV.length
            });
          nV(QV)
        },
        deleteFile: function(VV) {
          var eV = vV.getProgram().getSourceFile(VV);
          eV && ZV(eV)
        }
      }
    }

    function QV(VV) {
      throw new Error("Method '" + VV + "' is not implemented.")
    }

    function nV(VV, eV) {
      return function() {
        for (var xV = arguments.length, JV = new Array(xV), YV = 0; YV < xV; YV++) JV[YV] = arguments[YV];
        var UV = eV.apply(void 0, JV),
          pV = "string" === typeof UV ? UV.slice(0, 80) + "..." : UV;
        return yV.apply(void 0, ["> " + VV].concat(JV)), yV("< " + pV), UV
      }
    }
    var wV = function(VV) {
        return JV({}, VV.getDefaultCompilerOptions(), {
          jsx: VV.JsxEmit.React,
          strict: !0,
          esModuleInterop: !0,
          module: VV.ModuleKind.ESNext,
          suppressOutputPathCheck: !0,
          skipLibCheck: !0,
          skipDefaultLibCheck: !0
        }, VV.versionMajorMinor && Number(VV.versionMajorMinor.split(".")[0]) >= 6 ? {
          ignoreDeprecations: "6.0"
        } : {
          moduleResolution: VV.ModuleResolutionKind.NodeJs
        })
      },
      ZV = function(VV) {
        return VV.replace("/", "/lib.").toLowerCase()
      };

    function vV(VV) {
      return {
        args: [],
        createDirectory: function() {
          return QV("createDirectory")
        },
        directoryExists: nV("directoryExists", (function(eV) {
          return Array.from(VV.keys()).some((function(VV) {
            return VV.startsWith(eV)
          }))
        })),
        exit: function() {
          return QV("exit")
        },
        fileExists: nV("fileExists", (function(eV) {
          return VV.has(eV) || VV.has(ZV(eV))
        })),
        getCurrentDirectory: function() {
          return "/"
        },
        getDirectories: function() {
          return []
        },
        getExecutingFilePath: function() {
          return QV("getExecutingFilePath")
        },
        readDirectory: nV("readDirectory", (function(eV) {
          return "/" === eV ? Array.from(VV.keys()) : []
        })),
        readFile: nV("readFile", (function(eV) {
          var xV;
          return null != (xV = VV.get(eV)) ? xV : VV.get(ZV(eV))
        })),
        resolvePath: function(VV) {
          return VV
        },
        newLine: "\n",
        useCaseSensitiveFileNames: !0,
        write: function() {
          return QV("write")
        },
        writeFile: function(eV, xV) {
          VV.set(eV, xV)
        },
        deleteFile: function(eV) {
          VV.delete(eV)
        }
      }
    }

    function rV(VV, eV, xV) {
      var YV = new Map;
      return {
        compilerHost: JV({}, VV, {
          getCanonicalFileName: function(VV) {
            return VV
          },
          getDefaultLibFileName: function() {
            return "/" + xV.getDefaultLibFileName(eV)
          },
          getNewLine: function() {
            return VV.newLine
          },
          getSourceFile: function(JV, UV) {
            var yV, pV;
            return YV.get(JV) || (pV = xV.createSourceFile(JV, VV.readFile(JV), null != (yV = null != UV ? UV : eV.target) ? yV : wV(xV).target, !1), YV.set(pV.fileName, pV), pV)
          },
          useCaseSensitiveFileNames: function() {
            return VV.useCaseSensitiveFileNames
          }
        }),
        updateFile: function(eV) {
          var xV = YV.has(eV.fileName);
          return VV.writeFile(eV.fileName, eV.text), YV.set(eV.fileName, eV), xV
        },
        deleteFile: function(eV) {
          var xV = YV.has(eV.fileName);
          return YV.delete(eV.fileName), VV.deleteFile(eV.fileName), xV
        }
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);