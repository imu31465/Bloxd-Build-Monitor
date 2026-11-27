export const id = 617;
export const ids = [617];
export const modules = {
  53943: (rr, Sr, Qr) => {
    function Zr() {
      return Zr = Object.assign ? Object.assign.bind() : function(rr) {
        for (var Sr = 1; Sr < arguments.length; Sr++) {
          var Qr = arguments[Sr];
          for (var Zr in Qr)({}).hasOwnProperty.call(Qr, Zr) && (rr[Zr] = Qr[Zr])
        }
        return rr
      }, Zr.apply(null, arguments)
    }
    Qr.d(Sr, {
      e: () => mr,
      h: () => Ir
    });
    var Wr = !1;
    try {
      Wr = "undefined" !== typeof localStorage
    } catch (Ur) {}
    var ar = "undefined" !== typeof process,
      jr = Wr && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || ar && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.DEBUG ? console.log : function(rr) {
        return ""
      };

    function Ir(rr, Sr, Qr, Wr, ar) {
      void 0 === Wr && (Wr = {});
      var jr = Zr({}, pr(Qr), Wr),
        Ir = function(rr, Sr, Qr, Wr, ar) {
          var jr = [].concat(Sr),
            Ir = Nr(rr, Qr, Wr),
            fr = Ir.compilerHost,
            Er = Ir.updateFile,
            pr = Ir.deleteFile,
            xr = new Map,
            mr = 0,
            Ur = Zr({}, fr, {
              getProjectVersion: function() {
                return mr.toString()
              },
              getCompilationSettings: function() {
                return Qr
              },
              getCustomTransformers: function() {
                return ar
              },
              getScriptFileNames: function() {
                return jr.slice()
              },
              getScriptSnapshot: function(Sr) {
                var Qr = rr.readFile(Sr);
                if (Qr && "string" === typeof Qr) return Wr.ScriptSnapshot.fromString(Qr)
              },
              getScriptVersion: function(rr) {
                return xr.get(rr) || "0"
              },
              writeFile: rr.writeFile
            }),
            tr = {
              languageServiceHost: Ur,
              updateFile: function(rr) {
                mr++, xr.set(rr.fileName, mr.toString()), jr.includes(rr.fileName) || jr.push(rr.fileName), Er(rr)
              },
              deleteFile: function(rr) {
                mr++, xr.set(rr.fileName, mr.toString());
                var Sr = jr.indexOf(rr.fileName); - 1 !== Sr && jr.splice(Sr, 1), pr(rr)
              }
            };
          return tr
        }(rr, Sr, jr, Qr, ar),
        fr = Ir.languageServiceHost,
        Er = Ir.updateFile,
        xr = Ir.deleteFile,
        mr = Qr.createLanguageService(fr),
        Ur = mr.getCompilerOptionsDiagnostics();
      if (Ur.length) {
        var tr = Nr(rr, Wr, Qr);
        throw new Error(Qr.formatDiagnostics(Ur, tr.compilerHost))
      }
      return {
        name: "vfs",
        sys: rr,
        languageService: mr,
        getSourceFile: function(rr) {
          var Sr;
          return null == (Sr = mr.getProgram()) ? void 0 : Sr.getSourceFile(rr)
        },
        createFile: function(rr, Sr) {
          Er(Qr.createSourceFile(rr, Sr, jr.target, !1))
        },
        updateFile: function(rr, Sr, Zr) {
          var Wr = mr.getProgram().getSourceFile(rr);
          if (!Wr) throw new Error("Did not find a source file for " + rr);
          var ar = Wr.text,
            jr = null != Zr ? Zr : Qr.createTextSpan(0, ar.length),
            Ir = ar.slice(0, jr.start) + Sr + ar.slice(jr.start + jr.length),
            fr = Qr.updateSourceFile(Wr, Ir, {
              span: jr,
              newLength: Sr.length
            });
          Er(fr)
        },
        deleteFile: function(rr) {
          var Sr = mr.getProgram().getSourceFile(rr);
          Sr && xr(Sr)
        }
      }
    }

    function fr(rr) {
      throw new Error("Method '" + rr + "' is not implemented.")
    }

    function Er(rr, Sr) {
      return function() {
        for (var Qr = arguments.length, Zr = new Array(Qr), Wr = 0; Wr < Qr; Wr++) Zr[Wr] = arguments[Wr];
        var ar = Sr.apply(void 0, Zr),
          Ir = "string" === typeof ar ? ar.slice(0, 80) + "..." : ar;
        return jr.apply(void 0, ["> " + rr].concat(Zr)), jr("< " + Ir), ar
      }
    }
    var pr = function(rr) {
        return Zr({}, rr.getDefaultCompilerOptions(), {
          jsx: rr.JsxEmit.React,
          strict: !0,
          esModuleInterop: !0,
          module: rr.ModuleKind.ESNext,
          suppressOutputPathCheck: !0,
          skipLibCheck: !0,
          skipDefaultLibCheck: !0
        }, rr.versionMajorMinor && Number(rr.versionMajorMinor.split(".")[0]) >= 6 ? {
          ignoreDeprecations: "6.0"
        } : {
          moduleResolution: rr.ModuleResolutionKind.NodeJs
        })
      },
      xr = function(rr) {
        return rr.replace("/", "/lib.").toLowerCase()
      };

    function mr(rr) {
      return {
        args: [],
        createDirectory: function() {
          return fr("createDirectory")
        },
        directoryExists: Er("directoryExists", (function(Sr) {
          return Array.from(rr.keys()).some((function(rr) {
            return rr.startsWith(Sr)
          }))
        })),
        exit: function() {
          return fr("exit")
        },
        fileExists: Er("fileExists", (function(Sr) {
          return rr.has(Sr) || rr.has(xr(Sr))
        })),
        getCurrentDirectory: function() {
          return "/"
        },
        getDirectories: function() {
          return []
        },
        getExecutingFilePath: function() {
          return fr("getExecutingFilePath")
        },
        readDirectory: Er("readDirectory", (function(Sr) {
          return "/" === Sr ? Array.from(rr.keys()) : []
        })),
        readFile: Er("readFile", (function(Sr) {
          var Qr;
          return null != (Qr = rr.get(Sr)) ? Qr : rr.get(xr(Sr))
        })),
        resolvePath: function(rr) {
          return rr
        },
        newLine: "\n",
        useCaseSensitiveFileNames: !0,
        write: function() {
          return fr("write")
        },
        writeFile: function(Sr, Qr) {
          rr.set(Sr, Qr)
        },
        deleteFile: function(Sr) {
          rr.delete(Sr)
        }
      }
    }

    function Nr(rr, Sr, Qr) {
      var Wr = new Map;
      return {
        compilerHost: Zr({}, rr, {
          getCanonicalFileName: function(rr) {
            return rr
          },
          getDefaultLibFileName: function() {
            return "/" + Qr.getDefaultLibFileName(Sr)
          },
          getNewLine: function() {
            return rr.newLine
          },
          getSourceFile: function(Zr, ar) {
            var jr, Ir;
            return Wr.get(Zr) || (Ir = Qr.createSourceFile(Zr, rr.readFile(Zr), null != (jr = null != ar ? ar : Sr.target) ? jr : pr(Qr).target, !1), Wr.set(Ir.fileName, Ir), Ir)
          },
          useCaseSensitiveFileNames: function() {
            return rr.useCaseSensitiveFileNames
          }
        }),
        updateFile: function(Sr) {
          var Qr = Wr.has(Sr.fileName);
          return rr.writeFile(Sr.fileName, Sr.text), Wr.set(Sr.fileName, Sr), Qr
        },
        deleteFile: function(Sr) {
          var Qr = Wr.has(Sr.fileName);
          return Wr.delete(Sr.fileName), rr.deleteFile(Sr.fileName), Qr
        }
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);