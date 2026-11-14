export const id = 273;
export const ids = [273];
export const modules = {
  39353: (cB, Bc, nc) => {
    function Vc() {
      return Vc = Object.assign ? Object.assign.bind() : function(cB) {
        for (var Bc = 1; Bc < arguments.length; Bc++) {
          var nc = arguments[Bc];
          for (var Vc in nc)({}).hasOwnProperty.call(nc, Vc) && (cB[Vc] = nc[Vc])
        }
        return cB
      }, Vc.apply(null, arguments)
    }
    nc.d(Bc, {
      c: () => Tc,
      g: () => sc
    });
    var Ic = !1;
    try {
      Ic = "undefined" !== typeof localStorage
    } catch (mB) {}
    var rB = "undefined" !== typeof process,
      uc = Ic && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || rB && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.DEBUG ? console.log : function(cB) {
        return ""
      };

    function sc(cB, Bc, nc, Ic, rB) {
      void 0 === Ic && (Ic = {});
      var uc = Vc({}, qB(nc), Ic),
        sc = function(cB, Bc, nc, Ic, rB) {
          var uc = [].concat(Bc),
            sc = fc(cB, nc, Ic),
            Mc = sc.compilerHost,
            Pc = sc.updateFile,
            qB = sc.deleteFile,
            Oc = new Map,
            Tc = 0,
            mB = Vc({}, Mc, {
              getProjectVersion: function() {
                return Tc.toString()
              },
              getCompilationSettings: function() {
                return nc
              },
              getCustomTransformers: function() {
                return rB
              },
              getScriptFileNames: function() {
                return uc.slice()
              },
              getScriptSnapshot: function(Bc) {
                var nc = cB.readFile(Bc);
                if (nc && "string" === typeof nc) return Ic.ScriptSnapshot.fromString(nc)
              },
              getScriptVersion: function(cB) {
                return Oc.get(cB) || "0"
              },
              writeFile: cB.writeFile
            }),
            ec = {
              languageServiceHost: mB,
              updateFile: function(cB) {
                Tc++, Oc.set(cB.fileName, Tc.toString()), uc.includes(cB.fileName) || uc.push(cB.fileName), Pc(cB)
              },
              deleteFile: function(cB) {
                Tc++, Oc.set(cB.fileName, Tc.toString());
                var Bc = uc.indexOf(cB.fileName); - 1 !== Bc && uc.splice(Bc, 1), qB(cB)
              }
            };
          return ec
        }(cB, Bc, uc, nc, rB),
        Mc = sc.languageServiceHost,
        Pc = sc.updateFile,
        Oc = sc.deleteFile,
        Tc = nc.createLanguageService(Mc),
        mB = Tc.getCompilerOptionsDiagnostics();
      if (mB.length) {
        var ec = fc(cB, Ic, nc);
        throw new Error(nc.formatDiagnostics(mB, ec.compilerHost))
      }
      return {
        name: "vfs",
        sys: cB,
        languageService: Tc,
        getSourceFile: function(cB) {
          var Bc;
          return null == (Bc = Tc.getProgram()) ? void 0 : Bc.getSourceFile(cB)
        },
        createFile: function(cB, Bc) {
          Pc(nc.createSourceFile(cB, Bc, uc.target, !1))
        },
        updateFile: function(cB, Bc, Vc) {
          var Ic = Tc.getProgram().getSourceFile(cB);
          if (!Ic) throw new Error("Did not find a source file for " + cB);
          var rB = Ic.text,
            uc = null != Vc ? Vc : nc.createTextSpan(0, rB.length),
            sc = rB.slice(0, uc.start) + Bc + rB.slice(uc.start + uc.length),
            Mc = nc.updateSourceFile(Ic, sc, {
              span: uc,
              newLength: Bc.length
            });
          Pc(Mc)
        },
        deleteFile: function(cB) {
          var Bc = Tc.getProgram().getSourceFile(cB);
          Bc && Oc(Bc)
        }
      }
    }

    function Mc(cB) {
      throw new Error("Method '" + cB + "' is not implemented.")
    }

    function Pc(cB, Bc) {
      return function() {
        for (var nc = arguments.length, Vc = new Array(nc), Ic = 0; Ic < nc; Ic++) Vc[Ic] = arguments[Ic];
        var rB = Bc.apply(void 0, Vc),
          sc = "string" === typeof rB ? rB.slice(0, 80) + "..." : rB;
        return uc.apply(void 0, ["> " + cB].concat(Vc)), uc("< " + sc), rB
      }
    }
    var qB = function(cB) {
        return Vc({}, cB.getDefaultCompilerOptions(), {
          jsx: cB.JsxEmit.React,
          strict: !0,
          esModuleInterop: !0,
          module: cB.ModuleKind.ESNext,
          suppressOutputPathCheck: !0,
          skipLibCheck: !0,
          skipDefaultLibCheck: !0
        }, cB.versionMajorMinor && Number(cB.versionMajorMinor.split(".")[0]) >= 6 ? {
          ignoreDeprecations: "6.0"
        } : {
          moduleResolution: cB.ModuleResolutionKind.NodeJs
        })
      },
      Oc = function(cB) {
        return cB.replace("/", "/lib.").toLowerCase()
      };

    function Tc(cB) {
      return {
        args: [],
        createDirectory: function() {
          return Mc("createDirectory")
        },
        directoryExists: Pc("directoryExists", (function(Bc) {
          return Array.from(cB.keys()).some((function(cB) {
            return cB.startsWith(Bc)
          }))
        })),
        exit: function() {
          return Mc("exit")
        },
        fileExists: Pc("fileExists", (function(Bc) {
          return cB.has(Bc) || cB.has(Oc(Bc))
        })),
        getCurrentDirectory: function() {
          return "/"
        },
        getDirectories: function() {
          return []
        },
        getExecutingFilePath: function() {
          return Mc("getExecutingFilePath")
        },
        readDirectory: Pc("readDirectory", (function(Bc) {
          return "/" === Bc ? Array.from(cB.keys()) : []
        })),
        readFile: Pc("readFile", (function(Bc) {
          var nc;
          return null != (nc = cB.get(Bc)) ? nc : cB.get(Oc(Bc))
        })),
        resolvePath: function(cB) {
          return cB
        },
        newLine: "\n",
        useCaseSensitiveFileNames: !0,
        write: function() {
          return Mc("write")
        },
        writeFile: function(Bc, nc) {
          cB.set(Bc, nc)
        },
        deleteFile: function(Bc) {
          cB.delete(Bc)
        }
      }
    }

    function fc(cB, Bc, nc) {
      var Ic = new Map;
      return {
        compilerHost: Vc({}, cB, {
          getCanonicalFileName: function(cB) {
            return cB
          },
          getDefaultLibFileName: function() {
            return "/" + nc.getDefaultLibFileName(Bc)
          },
          getNewLine: function() {
            return cB.newLine
          },
          getSourceFile: function(Vc, rB) {
            var uc, sc;
            return Ic.get(Vc) || (sc = nc.createSourceFile(Vc, cB.readFile(Vc), null != (uc = null != rB ? rB : Bc.target) ? uc : qB(nc).target, !1), Ic.set(sc.fileName, sc), sc)
          },
          useCaseSensitiveFileNames: function() {
            return cB.useCaseSensitiveFileNames
          }
        }),
        updateFile: function(Bc) {
          var nc = Ic.has(Bc.fileName);
          return cB.writeFile(Bc.fileName, Bc.text), Ic.set(Bc.fileName, Bc), nc
        },
        deleteFile: function(Bc) {
          var nc = Ic.has(Bc.fileName);
          return Ic.delete(Bc.fileName), cB.deleteFile(Bc.fileName), nc
        }
      }
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);