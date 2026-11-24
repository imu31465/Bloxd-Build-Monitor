export const id = 297;
export const ids = [297];
export const modules = {
  41390: (SS, HS, gS) => {
    function tS() {
      return tS = Object.assign ? Object.assign.bind() : function(SS) {
        for (var HS = 1; HS < arguments.length; HS++) {
          var gS = arguments[HS];
          for (var tS in gS)({}).hasOwnProperty.call(gS, tS) && (SS[tS] = gS[tS])
        }
        return SS
      }, tS.apply(null, arguments)
    }
    gS.d(HS, {
      e: () => kS,
      i: () => NS
    });
    var bS = !1;
    try {
      bS = "undefined" !== typeof localStorage
    } catch (KS) {}
    var XS = "undefined" !== typeof process,
      xS = bS && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || XS && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.DEBUG ? console.log : function(SS) {
        return ""
      };

    function NS(SS, HS, gS, bS, XS) {
      void 0 === bS && (bS = {});
      var xS = tS({}, IS(gS), bS),
        NS = function(SS, HS, gS, bS, XS) {
          var xS = [].concat(HS),
            NS = aS(SS, gS, bS),
            qS = NS.compilerHost,
            uS = NS.updateFile,
            IS = NS.deleteFile,
            fS = new Map,
            kS = 0,
            KS = tS({}, qS, {
              getProjectVersion: function() {
                return kS.toString()
              },
              getCompilationSettings: function() {
                return gS
              },
              getCustomTransformers: function() {
                return XS
              },
              getScriptFileNames: function() {
                return xS.slice()
              },
              getScriptSnapshot: function(HS) {
                var gS = SS.readFile(HS);
                if (gS && "string" === typeof gS) return bS.ScriptSnapshot.fromString(gS)
              },
              getScriptVersion: function(SS) {
                return fS.get(SS) || "0"
              },
              writeFile: SS.writeFile
            }),
            jS = {
              languageServiceHost: KS,
              updateFile: function(SS) {
                kS++, fS.set(SS.fileName, kS.toString()), xS.includes(SS.fileName) || xS.push(SS.fileName), uS(SS)
              },
              deleteFile: function(SS) {
                kS++, fS.set(SS.fileName, kS.toString());
                var HS = xS.indexOf(SS.fileName); - 1 !== HS && xS.splice(HS, 1), IS(SS)
              }
            };
          return jS
        }(SS, HS, xS, gS, XS),
        qS = NS.languageServiceHost,
        uS = NS.updateFile,
        fS = NS.deleteFile,
        kS = gS.createLanguageService(qS),
        KS = kS.getCompilerOptionsDiagnostics();
      if (KS.length) {
        var jS = aS(SS, bS, gS);
        throw new Error(gS.formatDiagnostics(KS, jS.compilerHost))
      }
      return {
        name: "vfs",
        sys: SS,
        languageService: kS,
        getSourceFile: function(SS) {
          var HS;
          return null == (HS = kS.getProgram()) ? void 0 : HS.getSourceFile(SS)
        },
        createFile: function(SS, HS) {
          uS(gS.createSourceFile(SS, HS, xS.target, !1))
        },
        updateFile: function(SS, HS, tS) {
          var bS = kS.getProgram().getSourceFile(SS);
          if (!bS) throw new Error("Did not find a source file for " + SS);
          var XS = bS.text,
            xS = null != tS ? tS : gS.createTextSpan(0, XS.length),
            NS = XS.slice(0, xS.start) + HS + XS.slice(xS.start + xS.length),
            qS = gS.updateSourceFile(bS, NS, {
              span: xS,
              newLength: HS.length
            });
          uS(qS)
        },
        deleteFile: function(SS) {
          var HS = kS.getProgram().getSourceFile(SS);
          HS && fS(HS)
        }
      }
    }

    function qS(SS) {
      throw new Error("Method '" + SS + "' is not implemented.")
    }

    function uS(SS, HS) {
      return function() {
        for (var gS = arguments.length, tS = new Array(gS), bS = 0; bS < gS; bS++) tS[bS] = arguments[bS];
        var XS = HS.apply(void 0, tS),
          NS = "string" === typeof XS ? XS.slice(0, 80) + "..." : XS;
        return xS.apply(void 0, ["> " + SS].concat(tS)), xS("< " + NS), XS
      }
    }
    var IS = function(SS) {
        return tS({}, SS.getDefaultCompilerOptions(), {
          jsx: SS.JsxEmit.React,
          strict: !0,
          esModuleInterop: !0,
          module: SS.ModuleKind.ESNext,
          suppressOutputPathCheck: !0,
          skipLibCheck: !0,
          skipDefaultLibCheck: !0
        }, SS.versionMajorMinor && Number(SS.versionMajorMinor.split(".")[0]) >= 6 ? {
          ignoreDeprecations: "6.0"
        } : {
          moduleResolution: SS.ModuleResolutionKind.NodeJs
        })
      },
      fS = function(SS) {
        return SS.replace("/", "/lib.").toLowerCase()
      };

    function kS(SS) {
      return {
        args: [],
        createDirectory: function() {
          return qS("createDirectory")
        },
        directoryExists: uS("directoryExists", (function(HS) {
          return Array.from(SS.keys()).some((function(SS) {
            return SS.startsWith(HS)
          }))
        })),
        exit: function() {
          return qS("exit")
        },
        fileExists: uS("fileExists", (function(HS) {
          return SS.has(HS) || SS.has(fS(HS))
        })),
        getCurrentDirectory: function() {
          return "/"
        },
        getDirectories: function() {
          return []
        },
        getExecutingFilePath: function() {
          return qS("getExecutingFilePath")
        },
        readDirectory: uS("readDirectory", (function(HS) {
          return "/" === HS ? Array.from(SS.keys()) : []
        })),
        readFile: uS("readFile", (function(HS) {
          var gS;
          return null != (gS = SS.get(HS)) ? gS : SS.get(fS(HS))
        })),
        resolvePath: function(SS) {
          return SS
        },
        newLine: "\n",
        useCaseSensitiveFileNames: !0,
        write: function() {
          return qS("write")
        },
        writeFile: function(HS, gS) {
          SS.set(HS, gS)
        },
        deleteFile: function(HS) {
          SS.delete(HS)
        }
      }
    }

    function aS(SS, HS, gS) {
      var bS = new Map;
      return {
        compilerHost: tS({}, SS, {
          getCanonicalFileName: function(SS) {
            return SS
          },
          getDefaultLibFileName: function() {
            return "/" + gS.getDefaultLibFileName(HS)
          },
          getNewLine: function() {
            return SS.newLine
          },
          getSourceFile: function(tS, XS) {
            var xS, NS;
            return bS.get(tS) || (NS = gS.createSourceFile(tS, SS.readFile(tS), null != (xS = null != XS ? XS : HS.target) ? xS : IS(gS).target, !1), bS.set(NS.fileName, NS), NS)
          },
          useCaseSensitiveFileNames: function() {
            return SS.useCaseSensitiveFileNames
          }
        }),
        updateFile: function(HS) {
          var gS = bS.has(HS.fileName);
          return SS.writeFile(HS.fileName, HS.text), bS.set(HS.fileName, HS), gS
        },
        deleteFile: function(HS) {
          var gS = bS.has(HS.fileName);
          return bS.delete(HS.fileName), SS.deleteFile(HS.fileName), gS
        }
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);