export const id = 289;
export const ids = [289];
export const modules = {
  40681: (vv, zv, Pv) => {
    function hv() {
      return hv = Object.assign ? Object.assign.bind() : function(vv) {
        for (var zv = 1; zv < arguments.length; zv++) {
          var Pv = arguments[zv];
          for (var hv in Pv)({}).hasOwnProperty.call(Pv, hv) && (vv[hv] = Pv[hv])
        }
        return vv
      }, hv.apply(null, arguments)
    }
    Pv.d(zv, {
      b: () => Wv,
      f: () => pv
    });
    var Sv = !1;
    try {
      Sv = "undefined" !== typeof localStorage
    } catch (av) {}
    var ev = "undefined" !== typeof process,
      gv = Sv && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || ev && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.DEBUG ? console.log : function(vv) {
        return ""
      };

    function pv(vv, zv, Pv, Sv, ev) {
      void 0 === Sv && (Sv = {});
      var gv = hv({}, lv(Pv), Sv),
        pv = function(vv, zv, Pv, Sv, ev) {
          var gv = [].concat(zv),
            pv = wv(vv, Pv, Sv),
            dv = pv.compilerHost,
            Nv = pv.updateFile,
            lv = pv.deleteFile,
            Tv = new Map,
            Wv = 0,
            av = hv({}, dv, {
              getProjectVersion: function() {
                return Wv.toString()
              },
              getCompilationSettings: function() {
                return Pv
              },
              getCustomTransformers: function() {
                return ev
              },
              getScriptFileNames: function() {
                return gv.slice()
              },
              getScriptSnapshot: function(zv) {
                var Pv = vv.readFile(zv);
                if (Pv && "string" === typeof Pv) return Sv.ScriptSnapshot.fromString(Pv)
              },
              getScriptVersion: function(vv) {
                return Tv.get(vv) || "0"
              },
              writeFile: vv.writeFile
            }),
            sv = {
              languageServiceHost: av,
              updateFile: function(vv) {
                Wv++, Tv.set(vv.fileName, Wv.toString()), gv.includes(vv.fileName) || gv.push(vv.fileName), Nv(vv)
              },
              deleteFile: function(vv) {
                Wv++, Tv.set(vv.fileName, Wv.toString());
                var zv = gv.indexOf(vv.fileName); - 1 !== zv && gv.splice(zv, 1), lv(vv)
              }
            };
          return sv
        }(vv, zv, gv, Pv, ev),
        dv = pv.languageServiceHost,
        Nv = pv.updateFile,
        Tv = pv.deleteFile,
        Wv = Pv.createLanguageService(dv),
        av = Wv.getCompilerOptionsDiagnostics();
      if (av.length) {
        var sv = wv(vv, Sv, Pv);
        throw new Error(Pv.formatDiagnostics(av, sv.compilerHost))
      }
      return {
        name: "vfs",
        sys: vv,
        languageService: Wv,
        getSourceFile: function(vv) {
          var zv;
          return null == (zv = Wv.getProgram()) ? void 0 : zv.getSourceFile(vv)
        },
        createFile: function(vv, zv) {
          Nv(Pv.createSourceFile(vv, zv, gv.target, !1))
        },
        updateFile: function(vv, zv, hv) {
          var Sv = Wv.getProgram().getSourceFile(vv);
          if (!Sv) throw new Error("Did not find a source file for " + vv);
          var ev = Sv.text,
            gv = null != hv ? hv : Pv.createTextSpan(0, ev.length),
            pv = ev.slice(0, gv.start) + zv + ev.slice(gv.start + gv.length),
            dv = Pv.updateSourceFile(Sv, pv, {
              span: gv,
              newLength: zv.length
            });
          Nv(dv)
        },
        deleteFile: function(vv) {
          var zv = Wv.getProgram().getSourceFile(vv);
          zv && Tv(zv)
        }
      }
    }

    function dv(vv) {
      throw new Error("Method '" + vv + "' is not implemented.")
    }

    function Nv(vv, zv) {
      return function() {
        for (var Pv = arguments.length, hv = new Array(Pv), Sv = 0; Sv < Pv; Sv++) hv[Sv] = arguments[Sv];
        var ev = zv.apply(void 0, hv),
          pv = "string" === typeof ev ? ev.slice(0, 80) + "..." : ev;
        return gv.apply(void 0, ["> " + vv].concat(hv)), gv("< " + pv), ev
      }
    }
    var lv = function(vv) {
        return hv({}, vv.getDefaultCompilerOptions(), {
          jsx: vv.JsxEmit.React,
          strict: !0,
          esModuleInterop: !0,
          module: vv.ModuleKind.ESNext,
          suppressOutputPathCheck: !0,
          skipLibCheck: !0,
          skipDefaultLibCheck: !0
        }, vv.versionMajorMinor && Number(vv.versionMajorMinor.split(".")[0]) >= 6 ? {
          ignoreDeprecations: "6.0"
        } : {
          moduleResolution: vv.ModuleResolutionKind.NodeJs
        })
      },
      Tv = function(vv) {
        return vv.replace("/", "/lib.").toLowerCase()
      };

    function Wv(vv) {
      return {
        args: [],
        createDirectory: function() {
          return dv("createDirectory")
        },
        directoryExists: Nv("directoryExists", (function(zv) {
          return Array.from(vv.keys()).some((function(vv) {
            return vv.startsWith(zv)
          }))
        })),
        exit: function() {
          return dv("exit")
        },
        fileExists: Nv("fileExists", (function(zv) {
          return vv.has(zv) || vv.has(Tv(zv))
        })),
        getCurrentDirectory: function() {
          return "/"
        },
        getDirectories: function() {
          return []
        },
        getExecutingFilePath: function() {
          return dv("getExecutingFilePath")
        },
        readDirectory: Nv("readDirectory", (function(zv) {
          return "/" === zv ? Array.from(vv.keys()) : []
        })),
        readFile: Nv("readFile", (function(zv) {
          var Pv;
          return null != (Pv = vv.get(zv)) ? Pv : vv.get(Tv(zv))
        })),
        resolvePath: function(vv) {
          return vv
        },
        newLine: "\n",
        useCaseSensitiveFileNames: !0,
        write: function() {
          return dv("write")
        },
        writeFile: function(zv, Pv) {
          vv.set(zv, Pv)
        },
        deleteFile: function(zv) {
          vv.delete(zv)
        }
      }
    }

    function wv(vv, zv, Pv) {
      var Sv = new Map;
      return {
        compilerHost: hv({}, vv, {
          getCanonicalFileName: function(vv) {
            return vv
          },
          getDefaultLibFileName: function() {
            return "/" + Pv.getDefaultLibFileName(zv)
          },
          getNewLine: function() {
            return vv.newLine
          },
          getSourceFile: function(hv, ev) {
            var gv, pv;
            return Sv.get(hv) || (pv = Pv.createSourceFile(hv, vv.readFile(hv), null != (gv = null != ev ? ev : zv.target) ? gv : lv(Pv).target, !1), Sv.set(pv.fileName, pv), pv)
          },
          useCaseSensitiveFileNames: function() {
            return vv.useCaseSensitiveFileNames
          }
        }),
        updateFile: function(zv) {
          var Pv = Sv.has(zv.fileName);
          return vv.writeFile(zv.fileName, zv.text), Sv.set(zv.fileName, zv), Pv
        },
        deleteFile: function(zv) {
          var Pv = Sv.has(zv.fileName);
          return Sv.delete(zv.fileName), vv.deleteFile(zv.fileName), Pv
        }
      }
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);