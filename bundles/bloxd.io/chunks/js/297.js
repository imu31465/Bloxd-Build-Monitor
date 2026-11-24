export const id = 297;
export const ids = [297];
export const modules = {
  41441: (mm, Tm, fm) => {
    function hm() {
      return hm = Object.assign ? Object.assign.bind() : function(mm) {
        for (var Tm = 1; Tm < arguments.length; Tm++) {
          var fm = arguments[Tm];
          for (var hm in fm)({}).hasOwnProperty.call(fm, hm) && (mm[hm] = fm[hm])
        }
        return mm
      }, hm.apply(null, arguments)
    }
    fm.d(Tm, {
      d: () => Em,
      h: () => wm
    });
    var Am = !1;
    try {
      Am = "undefined" !== typeof localStorage
    } catch (Om) {}
    var am = "undefined" !== typeof process,
      xm = Am && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || am && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.DEBUG ? console.log : function(mm) {
        return ""
      };

    function wm(mm, Tm, fm, Am, am) {
      void 0 === Am && (Am = {});
      var xm = hm({}, Rm(fm), Am),
        wm = function(mm, Tm, fm, Am, am) {
          var xm = [].concat(Tm),
            wm = om(mm, fm, Am),
            Dm = wm.compilerHost,
            im = wm.updateFile,
            Rm = wm.deleteFile,
            pm = new Map,
            Em = 0,
            Om = hm({}, Dm, {
              getProjectVersion: function() {
                return Em.toString()
              },
              getCompilationSettings: function() {
                return fm
              },
              getCustomTransformers: function() {
                return am
              },
              getScriptFileNames: function() {
                return xm.slice()
              },
              getScriptSnapshot: function(Tm) {
                var fm = mm.readFile(Tm);
                if (fm && "string" === typeof fm) return Am.ScriptSnapshot.fromString(fm)
              },
              getScriptVersion: function(mm) {
                return pm.get(mm) || "0"
              },
              writeFile: mm.writeFile
            }),
            Ym = {
              languageServiceHost: Om,
              updateFile: function(mm) {
                Em++, pm.set(mm.fileName, Em.toString()), xm.includes(mm.fileName) || xm.push(mm.fileName), im(mm)
              },
              deleteFile: function(mm) {
                Em++, pm.set(mm.fileName, Em.toString());
                var Tm = xm.indexOf(mm.fileName); - 1 !== Tm && xm.splice(Tm, 1), Rm(mm)
              }
            };
          return Ym
        }(mm, Tm, xm, fm, am),
        Dm = wm.languageServiceHost,
        im = wm.updateFile,
        pm = wm.deleteFile,
        Em = fm.createLanguageService(Dm),
        Om = Em.getCompilerOptionsDiagnostics();
      if (Om.length) {
        var Ym = om(mm, Am, fm);
        throw new Error(fm.formatDiagnostics(Om, Ym.compilerHost))
      }
      return {
        name: "vfs",
        sys: mm,
        languageService: Em,
        getSourceFile: function(mm) {
          var Tm;
          return null == (Tm = Em.getProgram()) ? void 0 : Tm.getSourceFile(mm)
        },
        createFile: function(mm, Tm) {
          im(fm.createSourceFile(mm, Tm, xm.target, !1))
        },
        updateFile: function(mm, Tm, hm) {
          var Am = Em.getProgram().getSourceFile(mm);
          if (!Am) throw new Error("Did not find a source file for " + mm);
          var am = Am.text,
            xm = null != hm ? hm : fm.createTextSpan(0, am.length),
            wm = am.slice(0, xm.start) + Tm + am.slice(xm.start + xm.length),
            Dm = fm.updateSourceFile(Am, wm, {
              span: xm,
              newLength: Tm.length
            });
          im(Dm)
        },
        deleteFile: function(mm) {
          var Tm = Em.getProgram().getSourceFile(mm);
          Tm && pm(Tm)
        }
      }
    }

    function Dm(mm) {
      throw new Error("Method '" + mm + "' is not implemented.")
    }

    function im(mm, Tm) {
      return function() {
        for (var fm = arguments.length, hm = new Array(fm), Am = 0; Am < fm; Am++) hm[Am] = arguments[Am];
        var am = Tm.apply(void 0, hm),
          wm = "string" === typeof am ? am.slice(0, 80) + "..." : am;
        return xm.apply(void 0, ["> " + mm].concat(hm)), xm("< " + wm), am
      }
    }
    var Rm = function(mm) {
        return hm({}, mm.getDefaultCompilerOptions(), {
          jsx: mm.JsxEmit.React,
          strict: !0,
          esModuleInterop: !0,
          module: mm.ModuleKind.ESNext,
          suppressOutputPathCheck: !0,
          skipLibCheck: !0,
          skipDefaultLibCheck: !0
        }, mm.versionMajorMinor && Number(mm.versionMajorMinor.split(".")[0]) >= 6 ? {
          ignoreDeprecations: "6.0"
        } : {
          moduleResolution: mm.ModuleResolutionKind.NodeJs
        })
      },
      pm = function(mm) {
        return mm.replace("/", "/lib.").toLowerCase()
      };

    function Em(mm) {
      return {
        args: [],
        createDirectory: function() {
          return Dm("createDirectory")
        },
        directoryExists: im("directoryExists", (function(Tm) {
          return Array.from(mm.keys()).some((function(mm) {
            return mm.startsWith(Tm)
          }))
        })),
        exit: function() {
          return Dm("exit")
        },
        fileExists: im("fileExists", (function(Tm) {
          return mm.has(Tm) || mm.has(pm(Tm))
        })),
        getCurrentDirectory: function() {
          return "/"
        },
        getDirectories: function() {
          return []
        },
        getExecutingFilePath: function() {
          return Dm("getExecutingFilePath")
        },
        readDirectory: im("readDirectory", (function(Tm) {
          return "/" === Tm ? Array.from(mm.keys()) : []
        })),
        readFile: im("readFile", (function(Tm) {
          var fm;
          return null != (fm = mm.get(Tm)) ? fm : mm.get(pm(Tm))
        })),
        resolvePath: function(mm) {
          return mm
        },
        newLine: "\n",
        useCaseSensitiveFileNames: !0,
        write: function() {
          return Dm("write")
        },
        writeFile: function(Tm, fm) {
          mm.set(Tm, fm)
        },
        deleteFile: function(Tm) {
          mm.delete(Tm)
        }
      }
    }

    function om(mm, Tm, fm) {
      var Am = new Map;
      return {
        compilerHost: hm({}, mm, {
          getCanonicalFileName: function(mm) {
            return mm
          },
          getDefaultLibFileName: function() {
            return "/" + fm.getDefaultLibFileName(Tm)
          },
          getNewLine: function() {
            return mm.newLine
          },
          getSourceFile: function(hm, am) {
            var xm, wm;
            return Am.get(hm) || (wm = fm.createSourceFile(hm, mm.readFile(hm), null != (xm = null != am ? am : Tm.target) ? xm : Rm(fm).target, !1), Am.set(wm.fileName, wm), wm)
          },
          useCaseSensitiveFileNames: function() {
            return mm.useCaseSensitiveFileNames
          }
        }),
        updateFile: function(Tm) {
          var fm = Am.has(Tm.fileName);
          return mm.writeFile(Tm.fileName, Tm.text), Am.set(Tm.fileName, Tm), fm
        },
        deleteFile: function(Tm) {
          var fm = Am.has(Tm.fileName);
          return Am.delete(Tm.fileName), mm.deleteFile(Tm.fileName), fm
        }
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);