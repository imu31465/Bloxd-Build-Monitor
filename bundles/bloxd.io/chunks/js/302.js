export const id = 302;
export const ids = [302];
export const modules = {
  41620: (tt, et, Vt) => {
    function Ot() {
      return Ot = Object.assign ? Object.assign.bind() : function(tt) {
        for (var et = 1; et < arguments.length; et++) {
          var Vt = arguments[et];
          for (var Ot in Vt)({}).hasOwnProperty.call(Vt, Ot) && (tt[Ot] = Vt[Ot])
        }
        return tt
      }, Ot.apply(null, arguments)
    }
    Vt.d(et, {
      c: () => lt,
      e: () => dt
    });
    var qt = !1;
    try {
      qt = "undefined" !== typeof localStorage
    } catch (ft) {}
    var Dt = "undefined" !== typeof process,
      mt = qt && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || Dt && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.DEBUG ? console.log : function(tt) {
        return ""
      };

    function dt(tt, et, Vt, qt, Dt) {
      void 0 === qt && (qt = {});
      var mt = Ot({}, Xt(Vt), qt),
        dt = function(tt, et, Vt, qt, Dt) {
          var mt = [].concat(et),
            dt = Et(tt, Vt, qt),
            jt = dt.compilerHost,
            Ht = dt.updateFile,
            Xt = dt.deleteFile,
            Qt = new Map,
            lt = 0,
            ft = Ot({}, jt, {
              getProjectVersion: function() {
                return lt.toString()
              },
              getCompilationSettings: function() {
                return Vt
              },
              getCustomTransformers: function() {
                return Dt
              },
              getScriptFileNames: function() {
                return mt.slice()
              },
              getScriptSnapshot: function(et) {
                var Vt = tt.readFile(et);
                if (Vt && "string" === typeof Vt) return qt.ScriptSnapshot.fromString(Vt)
              },
              getScriptVersion: function(tt) {
                return Qt.get(tt) || "0"
              },
              writeFile: tt.writeFile
            }),
            wt = {
              languageServiceHost: ft,
              updateFile: function(tt) {
                lt++, Qt.set(tt.fileName, lt.toString()), mt.includes(tt.fileName) || mt.push(tt.fileName), Ht(tt)
              },
              deleteFile: function(tt) {
                lt++, Qt.set(tt.fileName, lt.toString());
                var et = mt.indexOf(tt.fileName); - 1 !== et && mt.splice(et, 1), Xt(tt)
              }
            };
          return wt
        }(tt, et, mt, Vt, Dt),
        jt = dt.languageServiceHost,
        Ht = dt.updateFile,
        Qt = dt.deleteFile,
        lt = Vt.createLanguageService(jt),
        ft = lt.getCompilerOptionsDiagnostics();
      if (ft.length) {
        var wt = Et(tt, qt, Vt);
        throw new Error(Vt.formatDiagnostics(ft, wt.compilerHost))
      }
      return {
        name: "vfs",
        sys: tt,
        languageService: lt,
        getSourceFile: function(tt) {
          var et;
          return null == (et = lt.getProgram()) ? void 0 : et.getSourceFile(tt)
        },
        createFile: function(tt, et) {
          Ht(Vt.createSourceFile(tt, et, mt.target, !1))
        },
        updateFile: function(tt, et, Ot) {
          var qt = lt.getProgram().getSourceFile(tt);
          if (!qt) throw new Error("Did not find a source file for " + tt);
          var Dt = qt.text,
            mt = null != Ot ? Ot : Vt.createTextSpan(0, Dt.length),
            dt = Dt.slice(0, mt.start) + et + Dt.slice(mt.start + mt.length),
            jt = Vt.updateSourceFile(qt, dt, {
              span: mt,
              newLength: et.length
            });
          Ht(jt)
        },
        deleteFile: function(tt) {
          var et = lt.getProgram().getSourceFile(tt);
          et && Qt(et)
        }
      }
    }

    function jt(tt) {
      throw new Error("Method '" + tt + "' is not implemented.")
    }

    function Ht(tt, et) {
      return function() {
        for (var Vt = arguments.length, Ot = new Array(Vt), qt = 0; qt < Vt; qt++) Ot[qt] = arguments[qt];
        var Dt = et.apply(void 0, Ot),
          dt = "string" === typeof Dt ? Dt.slice(0, 80) + "..." : Dt;
        return mt.apply(void 0, ["> " + tt].concat(Ot)), mt("< " + dt), Dt
      }
    }
    var Xt = function(tt) {
        return Ot({}, tt.getDefaultCompilerOptions(), {
          jsx: tt.JsxEmit.React,
          strict: !0,
          esModuleInterop: !0,
          module: tt.ModuleKind.ESNext,
          suppressOutputPathCheck: !0,
          skipLibCheck: !0,
          skipDefaultLibCheck: !0
        }, tt.versionMajorMinor && Number(tt.versionMajorMinor.split(".")[0]) >= 6 ? {
          ignoreDeprecations: "6.0"
        } : {
          moduleResolution: tt.ModuleResolutionKind.NodeJs
        })
      },
      Qt = function(tt) {
        return tt.replace("/", "/lib.").toLowerCase()
      };

    function lt(tt) {
      return {
        args: [],
        createDirectory: function() {
          return jt("createDirectory")
        },
        directoryExists: Ht("directoryExists", (function(et) {
          return Array.from(tt.keys()).some((function(tt) {
            return tt.startsWith(et)
          }))
        })),
        exit: function() {
          return jt("exit")
        },
        fileExists: Ht("fileExists", (function(et) {
          return tt.has(et) || tt.has(Qt(et))
        })),
        getCurrentDirectory: function() {
          return "/"
        },
        getDirectories: function() {
          return []
        },
        getExecutingFilePath: function() {
          return jt("getExecutingFilePath")
        },
        readDirectory: Ht("readDirectory", (function(et) {
          return "/" === et ? Array.from(tt.keys()) : []
        })),
        readFile: Ht("readFile", (function(et) {
          var Vt;
          return null != (Vt = tt.get(et)) ? Vt : tt.get(Qt(et))
        })),
        resolvePath: function(tt) {
          return tt
        },
        newLine: "\n",
        useCaseSensitiveFileNames: !0,
        write: function() {
          return jt("write")
        },
        writeFile: function(et, Vt) {
          tt.set(et, Vt)
        },
        deleteFile: function(et) {
          tt.delete(et)
        }
      }
    }

    function Et(tt, et, Vt) {
      var qt = new Map;
      return {
        compilerHost: Ot({}, tt, {
          getCanonicalFileName: function(tt) {
            return tt
          },
          getDefaultLibFileName: function() {
            return "/" + Vt.getDefaultLibFileName(et)
          },
          getNewLine: function() {
            return tt.newLine
          },
          getSourceFile: function(Ot, Dt) {
            var mt, dt;
            return qt.get(Ot) || (dt = Vt.createSourceFile(Ot, tt.readFile(Ot), null != (mt = null != Dt ? Dt : et.target) ? mt : Xt(Vt).target, !1), qt.set(dt.fileName, dt), dt)
          },
          useCaseSensitiveFileNames: function() {
            return tt.useCaseSensitiveFileNames
          }
        }),
        updateFile: function(et) {
          var Vt = qt.has(et.fileName);
          return tt.writeFile(et.fileName, et.text), qt.set(et.fileName, et), Vt
        },
        deleteFile: function(et) {
          var Vt = qt.has(et.fileName);
          return qt.delete(et.fileName), tt.deleteFile(et.fileName), Vt
        }
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);