export const id = 302;
export const ids = [302];
export const modules = {
  41627: (uu, Eu, ju) => {
    function su() {
      return su = Object.assign ? Object.assign.bind() : function(uu) {
        for (var Eu = 1; Eu < arguments.length; Eu++) {
          var ju = arguments[Eu];
          for (var su in ju)({}).hasOwnProperty.call(ju, su) && (uu[su] = ju[su])
        }
        return uu
      }, su.apply(null, arguments)
    }
    ju.d(Eu, {
      c: () => cu,
      g: () => lu
    });
    var Uu = !1;
    try {
      Uu = "undefined" !== typeof localStorage
    } catch (Ou) {}
    var Zu = "undefined" !== typeof process,
      Xu = Uu && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || Zu && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.DEBUG ? console.log : function(uu) {
        return ""
      };

    function lu(uu, Eu, ju, Uu, Zu) {
      void 0 === Uu && (Uu = {});
      var Xu = su({}, Cu(ju), Uu),
        lu = function(uu, Eu, ju, Uu, Zu) {
          var Xu = [].concat(Eu),
            lu = Nu(uu, ju, Uu),
            qu = lu.compilerHost,
            fu = lu.updateFile,
            Cu = lu.deleteFile,
            bu = new Map,
            cu = 0,
            Ou = su({}, qu, {
              getProjectVersion: function() {
                return cu.toString()
              },
              getCompilationSettings: function() {
                return ju
              },
              getCustomTransformers: function() {
                return Zu
              },
              getScriptFileNames: function() {
                return Xu.slice()
              },
              getScriptSnapshot: function(Eu) {
                var ju = uu.readFile(Eu);
                if (ju && "string" === typeof ju) return Uu.ScriptSnapshot.fromString(ju)
              },
              getScriptVersion: function(uu) {
                return bu.get(uu) || "0"
              },
              writeFile: uu.writeFile
            }),
            Yu = {
              languageServiceHost: Ou,
              updateFile: function(uu) {
                cu++, bu.set(uu.fileName, cu.toString()), Xu.includes(uu.fileName) || Xu.push(uu.fileName), fu(uu)
              },
              deleteFile: function(uu) {
                cu++, bu.set(uu.fileName, cu.toString());
                var Eu = Xu.indexOf(uu.fileName); - 1 !== Eu && Xu.splice(Eu, 1), Cu(uu)
              }
            };
          return Yu
        }(uu, Eu, Xu, ju, Zu),
        qu = lu.languageServiceHost,
        fu = lu.updateFile,
        bu = lu.deleteFile,
        cu = ju.createLanguageService(qu),
        Ou = cu.getCompilerOptionsDiagnostics();
      if (Ou.length) {
        var Yu = Nu(uu, Uu, ju);
        throw new Error(ju.formatDiagnostics(Ou, Yu.compilerHost))
      }
      return {
        name: "vfs",
        sys: uu,
        languageService: cu,
        getSourceFile: function(uu) {
          var Eu;
          return null == (Eu = cu.getProgram()) ? void 0 : Eu.getSourceFile(uu)
        },
        createFile: function(uu, Eu) {
          fu(ju.createSourceFile(uu, Eu, Xu.target, !1))
        },
        updateFile: function(uu, Eu, su) {
          var Uu = cu.getProgram().getSourceFile(uu);
          if (!Uu) throw new Error("Did not find a source file for " + uu);
          var Zu = Uu.text,
            Xu = null != su ? su : ju.createTextSpan(0, Zu.length),
            lu = Zu.slice(0, Xu.start) + Eu + Zu.slice(Xu.start + Xu.length),
            qu = ju.updateSourceFile(Uu, lu, {
              span: Xu,
              newLength: Eu.length
            });
          fu(qu)
        },
        deleteFile: function(uu) {
          var Eu = cu.getProgram().getSourceFile(uu);
          Eu && bu(Eu)
        }
      }
    }

    function qu(uu) {
      throw new Error("Method '" + uu + "' is not implemented.")
    }

    function fu(uu, Eu) {
      return function() {
        for (var ju = arguments.length, su = new Array(ju), Uu = 0; Uu < ju; Uu++) su[Uu] = arguments[Uu];
        var Zu = Eu.apply(void 0, su),
          lu = "string" === typeof Zu ? Zu.slice(0, 80) + "..." : Zu;
        return Xu.apply(void 0, ["> " + uu].concat(su)), Xu("< " + lu), Zu
      }
    }
    var Cu = function(uu) {
        return su({}, uu.getDefaultCompilerOptions(), {
          jsx: uu.JsxEmit.React,
          strict: !0,
          esModuleInterop: !0,
          module: uu.ModuleKind.ESNext,
          suppressOutputPathCheck: !0,
          skipLibCheck: !0,
          skipDefaultLibCheck: !0
        }, uu.versionMajorMinor && Number(uu.versionMajorMinor.split(".")[0]) >= 6 ? {
          ignoreDeprecations: "6.0"
        } : {
          moduleResolution: uu.ModuleResolutionKind.NodeJs
        })
      },
      bu = function(uu) {
        return uu.replace("/", "/lib.").toLowerCase()
      };

    function cu(uu) {
      return {
        args: [],
        createDirectory: function() {
          return qu("createDirectory")
        },
        directoryExists: fu("directoryExists", (function(Eu) {
          return Array.from(uu.keys()).some((function(uu) {
            return uu.startsWith(Eu)
          }))
        })),
        exit: function() {
          return qu("exit")
        },
        fileExists: fu("fileExists", (function(Eu) {
          return uu.has(Eu) || uu.has(bu(Eu))
        })),
        getCurrentDirectory: function() {
          return "/"
        },
        getDirectories: function() {
          return []
        },
        getExecutingFilePath: function() {
          return qu("getExecutingFilePath")
        },
        readDirectory: fu("readDirectory", (function(Eu) {
          return "/" === Eu ? Array.from(uu.keys()) : []
        })),
        readFile: fu("readFile", (function(Eu) {
          var ju;
          return null != (ju = uu.get(Eu)) ? ju : uu.get(bu(Eu))
        })),
        resolvePath: function(uu) {
          return uu
        },
        newLine: "\n",
        useCaseSensitiveFileNames: !0,
        write: function() {
          return qu("write")
        },
        writeFile: function(Eu, ju) {
          uu.set(Eu, ju)
        },
        deleteFile: function(Eu) {
          uu.delete(Eu)
        }
      }
    }

    function Nu(uu, Eu, ju) {
      var Uu = new Map;
      return {
        compilerHost: su({}, uu, {
          getCanonicalFileName: function(uu) {
            return uu
          },
          getDefaultLibFileName: function() {
            return "/" + ju.getDefaultLibFileName(Eu)
          },
          getNewLine: function() {
            return uu.newLine
          },
          getSourceFile: function(su, Zu) {
            var Xu, lu;
            return Uu.get(su) || (lu = ju.createSourceFile(su, uu.readFile(su), null != (Xu = null != Zu ? Zu : Eu.target) ? Xu : Cu(ju).target, !1), Uu.set(lu.fileName, lu), lu)
          },
          useCaseSensitiveFileNames: function() {
            return uu.useCaseSensitiveFileNames
          }
        }),
        updateFile: function(Eu) {
          var ju = Uu.has(Eu.fileName);
          return uu.writeFile(Eu.fileName, Eu.text), Uu.set(Eu.fileName, Eu), ju
        },
        deleteFile: function(Eu) {
          var ju = Uu.has(Eu.fileName);
          return Uu.delete(Eu.fileName), uu.deleteFile(Eu.fileName), ju
        }
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);