export const id = 288;
export const ids = [288];
export const modules = {
  40991: (uu, Ru, yu) => {
    function Eu() {
      return Eu = Object.assign ? Object.assign.bind() : function(uu) {
        for (var Ru = 1; Ru < arguments.length; Ru++) {
          var yu = arguments[Ru];
          for (var Eu in yu)({}).hasOwnProperty.call(yu, Eu) && (uu[Eu] = yu[Eu])
        }
        return uu
      }, Eu.apply(null, arguments)
    }
    yu.d(Ru, {
      e: () => Bu,
      f: () => Ju
    });
    var Ku = !1;
    try {
      Ku = "undefined" !== typeof localStorage
    } catch (Su) {}
    var Qu = "undefined" !== typeof process,
      mu = Ku && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || Qu && {
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

    function Ju(uu, Ru, yu, Ku, Qu) {
      void 0 === Ku && (Ku = {});
      var mu = Eu({}, Vu(yu), Ku),
        Ju = function(uu, Ru, yu, Ku, Qu) {
          var mu = [].concat(Ru),
            Ju = xu(uu, yu, Ku),
            Nu = Ju.compilerHost,
            Xu = Ju.updateFile,
            Vu = Ju.deleteFile,
            ru = new Map,
            Bu = 0,
            Su = Eu({}, Nu, {
              getProjectVersion: function() {
                return Bu.toString()
              },
              getCompilationSettings: function() {
                return yu
              },
              getCustomTransformers: function() {
                return Qu
              },
              getScriptFileNames: function() {
                return mu.slice()
              },
              getScriptSnapshot: function(Ru) {
                var yu = uu.readFile(Ru);
                if (yu && "string" === typeof yu) return Ku.ScriptSnapshot.fromString(yu)
              },
              getScriptVersion: function(uu) {
                return ru.get(uu) || "0"
              },
              writeFile: uu.writeFile
            }),
            pu = {
              languageServiceHost: Su,
              updateFile: function(uu) {
                Bu++, ru.set(uu.fileName, Bu.toString()), mu.includes(uu.fileName) || mu.push(uu.fileName), Xu(uu)
              },
              deleteFile: function(uu) {
                Bu++, ru.set(uu.fileName, Bu.toString());
                var Ru = mu.indexOf(uu.fileName); - 1 !== Ru && mu.splice(Ru, 1), Vu(uu)
              }
            };
          return pu
        }(uu, Ru, mu, yu, Qu),
        Nu = Ju.languageServiceHost,
        Xu = Ju.updateFile,
        ru = Ju.deleteFile,
        Bu = yu.createLanguageService(Nu),
        Su = Bu.getCompilerOptionsDiagnostics();
      if (Su.length) {
        var pu = xu(uu, Ku, yu);
        throw new Error(yu.formatDiagnostics(Su, pu.compilerHost))
      }
      return {
        name: "vfs",
        sys: uu,
        languageService: Bu,
        getSourceFile: function(uu) {
          var Ru;
          return null == (Ru = Bu.getProgram()) ? void 0 : Ru.getSourceFile(uu)
        },
        createFile: function(uu, Ru) {
          Xu(yu.createSourceFile(uu, Ru, mu.target, !1))
        },
        updateFile: function(uu, Ru, Eu) {
          var Ku = Bu.getProgram().getSourceFile(uu);
          if (!Ku) throw new Error("Did not find a source file for " + uu);
          var Qu = Ku.text,
            mu = null != Eu ? Eu : yu.createTextSpan(0, Qu.length),
            Ju = Qu.slice(0, mu.start) + Ru + Qu.slice(mu.start + mu.length),
            Nu = yu.updateSourceFile(Ku, Ju, {
              span: mu,
              newLength: Ru.length
            });
          Xu(Nu)
        },
        deleteFile: function(uu) {
          var Ru = Bu.getProgram().getSourceFile(uu);
          Ru && ru(Ru)
        }
      }
    }

    function Nu(uu) {
      throw new Error("Method '" + uu + "' is not implemented.")
    }

    function Xu(uu, Ru) {
      return function() {
        for (var yu = arguments.length, Eu = new Array(yu), Ku = 0; Ku < yu; Ku++) Eu[Ku] = arguments[Ku];
        var Qu = Ru.apply(void 0, Eu),
          Ju = "string" === typeof Qu ? Qu.slice(0, 80) + "..." : Qu;
        return mu.apply(void 0, ["> " + uu].concat(Eu)), mu("< " + Ju), Qu
      }
    }
    var Vu = function(uu) {
        return Eu({}, uu.getDefaultCompilerOptions(), {
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
      ru = function(uu) {
        return uu.replace("/", "/lib.").toLowerCase()
      };

    function Bu(uu) {
      return {
        args: [],
        createDirectory: function() {
          return Nu("createDirectory")
        },
        directoryExists: Xu("directoryExists", (function(Ru) {
          return Array.from(uu.keys()).some((function(uu) {
            return uu.startsWith(Ru)
          }))
        })),
        exit: function() {
          return Nu("exit")
        },
        fileExists: Xu("fileExists", (function(Ru) {
          return uu.has(Ru) || uu.has(ru(Ru))
        })),
        getCurrentDirectory: function() {
          return "/"
        },
        getDirectories: function() {
          return []
        },
        getExecutingFilePath: function() {
          return Nu("getExecutingFilePath")
        },
        readDirectory: Xu("readDirectory", (function(Ru) {
          return "/" === Ru ? Array.from(uu.keys()) : []
        })),
        readFile: Xu("readFile", (function(Ru) {
          var yu;
          return null != (yu = uu.get(Ru)) ? yu : uu.get(ru(Ru))
        })),
        resolvePath: function(uu) {
          return uu
        },
        newLine: "\n",
        useCaseSensitiveFileNames: !0,
        write: function() {
          return Nu("write")
        },
        writeFile: function(Ru, yu) {
          uu.set(Ru, yu)
        },
        deleteFile: function(Ru) {
          uu.delete(Ru)
        }
      }
    }

    function xu(uu, Ru, yu) {
      var Ku = new Map;
      return {
        compilerHost: Eu({}, uu, {
          getCanonicalFileName: function(uu) {
            return uu
          },
          getDefaultLibFileName: function() {
            return "/" + yu.getDefaultLibFileName(Ru)
          },
          getNewLine: function() {
            return uu.newLine
          },
          getSourceFile: function(Eu, Qu) {
            var mu, Ju;
            return Ku.get(Eu) || (Ju = yu.createSourceFile(Eu, uu.readFile(Eu), null != (mu = null != Qu ? Qu : Ru.target) ? mu : Vu(yu).target, !1), Ku.set(Ju.fileName, Ju), Ju)
          },
          useCaseSensitiveFileNames: function() {
            return uu.useCaseSensitiveFileNames
          }
        }),
        updateFile: function(Ru) {
          var yu = Ku.has(Ru.fileName);
          return uu.writeFile(Ru.fileName, Ru.text), Ku.set(Ru.fileName, Ru), yu
        },
        deleteFile: function(Ru) {
          var yu = Ku.has(Ru.fileName);
          return Ku.delete(Ru.fileName), uu.deleteFile(Ru.fileName), yu
        }
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);