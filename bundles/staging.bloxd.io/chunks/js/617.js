export const id = 617;
export const ids = [617];
export const modules = {
  53589: (bb, wb, Mb) => {
    function eb() {
      return eb = Object.assign ? Object.assign.bind() : function(bb) {
        for (var wb = 1; wb < arguments.length; wb++) {
          var Mb = arguments[wb];
          for (var eb in Mb)({}).hasOwnProperty.call(Mb, eb) && (bb[eb] = Mb[eb])
        }
        return bb
      }, eb.apply(null, arguments)
    }
    Mb.d(wb, {
      c: () => Ub,
      e: () => gb
    });
    var Hb = !1;
    try {
      Hb = "undefined" !== typeof localStorage
    } catch (Cb) {}
    var pb = "undefined" !== typeof process,
      Vb = Hb && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || pb && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.DEBUG ? console.log : function(bb) {
        return ""
      };

    function gb(bb, wb, Mb, Hb, pb) {
      void 0 === Hb && (Hb = {});
      var Vb = eb({}, Ib(Mb), Hb),
        gb = function(bb, wb, Mb, Hb, pb) {
          var Vb = [].concat(wb),
            gb = tb(bb, Mb, Hb),
            lb = gb.compilerHost,
            Lb = gb.updateFile,
            Ib = gb.deleteFile,
            Ob = new Map,
            Ub = 0,
            Cb = eb({}, lb, {
              getProjectVersion: function() {
                return Ub.toString()
              },
              getCompilationSettings: function() {
                return Mb
              },
              getCustomTransformers: function() {
                return pb
              },
              getScriptFileNames: function() {
                return Vb.slice()
              },
              getScriptSnapshot: function(wb) {
                var Mb = bb.readFile(wb);
                if (Mb && "string" === typeof Mb) return Hb.ScriptSnapshot.fromString(Mb)
              },
              getScriptVersion: function(bb) {
                return Ob.get(bb) || "0"
              },
              writeFile: bb.writeFile
            }),
            Eb = {
              languageServiceHost: Cb,
              updateFile: function(bb) {
                Ub++, Ob.set(bb.fileName, Ub.toString()), Vb.includes(bb.fileName) || Vb.push(bb.fileName), Lb(bb)
              },
              deleteFile: function(bb) {
                Ub++, Ob.set(bb.fileName, Ub.toString());
                var wb = Vb.indexOf(bb.fileName); - 1 !== wb && Vb.splice(wb, 1), Ib(bb)
              }
            };
          return Eb
        }(bb, wb, Vb, Mb, pb),
        lb = gb.languageServiceHost,
        Lb = gb.updateFile,
        Ob = gb.deleteFile,
        Ub = Mb.createLanguageService(lb),
        Cb = Ub.getCompilerOptionsDiagnostics();
      if (Cb.length) {
        var Eb = tb(bb, Hb, Mb);
        throw new Error(Mb.formatDiagnostics(Cb, Eb.compilerHost))
      }
      return {
        name: "vfs",
        sys: bb,
        languageService: Ub,
        getSourceFile: function(bb) {
          var wb;
          return null == (wb = Ub.getProgram()) ? void 0 : wb.getSourceFile(bb)
        },
        createFile: function(bb, wb) {
          Lb(Mb.createSourceFile(bb, wb, Vb.target, !1))
        },
        updateFile: function(bb, wb, eb) {
          var Hb = Ub.getProgram().getSourceFile(bb);
          if (!Hb) throw new Error("Did not find a source file for " + bb);
          var pb = Hb.text,
            Vb = null != eb ? eb : Mb.createTextSpan(0, pb.length),
            gb = pb.slice(0, Vb.start) + wb + pb.slice(Vb.start + Vb.length),
            lb = Mb.updateSourceFile(Hb, gb, {
              span: Vb,
              newLength: wb.length
            });
          Lb(lb)
        },
        deleteFile: function(bb) {
          var wb = Ub.getProgram().getSourceFile(bb);
          wb && Ob(wb)
        }
      }
    }

    function lb(bb) {
      throw new Error("Method '" + bb + "' is not implemented.")
    }

    function Lb(bb, wb) {
      return function() {
        for (var Mb = arguments.length, eb = new Array(Mb), Hb = 0; Hb < Mb; Hb++) eb[Hb] = arguments[Hb];
        var pb = wb.apply(void 0, eb),
          gb = "string" === typeof pb ? pb.slice(0, 80) + "..." : pb;
        return Vb.apply(void 0, ["> " + bb].concat(eb)), Vb("< " + gb), pb
      }
    }
    var Ib = function(bb) {
        return eb({}, bb.getDefaultCompilerOptions(), {
          jsx: bb.JsxEmit.React,
          strict: !0,
          esModuleInterop: !0,
          module: bb.ModuleKind.ESNext,
          suppressOutputPathCheck: !0,
          skipLibCheck: !0,
          skipDefaultLibCheck: !0
        }, bb.versionMajorMinor && Number(bb.versionMajorMinor.split(".")[0]) >= 6 ? {
          ignoreDeprecations: "6.0"
        } : {
          moduleResolution: bb.ModuleResolutionKind.NodeJs
        })
      },
      Ob = function(bb) {
        return bb.replace("/", "/lib.").toLowerCase()
      };

    function Ub(bb) {
      return {
        args: [],
        createDirectory: function() {
          return lb("createDirectory")
        },
        directoryExists: Lb("directoryExists", (function(wb) {
          return Array.from(bb.keys()).some((function(bb) {
            return bb.startsWith(wb)
          }))
        })),
        exit: function() {
          return lb("exit")
        },
        fileExists: Lb("fileExists", (function(wb) {
          return bb.has(wb) || bb.has(Ob(wb))
        })),
        getCurrentDirectory: function() {
          return "/"
        },
        getDirectories: function() {
          return []
        },
        getExecutingFilePath: function() {
          return lb("getExecutingFilePath")
        },
        readDirectory: Lb("readDirectory", (function(wb) {
          return "/" === wb ? Array.from(bb.keys()) : []
        })),
        readFile: Lb("readFile", (function(wb) {
          var Mb;
          return null != (Mb = bb.get(wb)) ? Mb : bb.get(Ob(wb))
        })),
        resolvePath: function(bb) {
          return bb
        },
        newLine: "\n",
        useCaseSensitiveFileNames: !0,
        write: function() {
          return lb("write")
        },
        writeFile: function(wb, Mb) {
          bb.set(wb, Mb)
        },
        deleteFile: function(wb) {
          bb.delete(wb)
        }
      }
    }

    function tb(bb, wb, Mb) {
      var Hb = new Map;
      return {
        compilerHost: eb({}, bb, {
          getCanonicalFileName: function(bb) {
            return bb
          },
          getDefaultLibFileName: function() {
            return "/" + Mb.getDefaultLibFileName(wb)
          },
          getNewLine: function() {
            return bb.newLine
          },
          getSourceFile: function(eb, pb) {
            var Vb, gb;
            return Hb.get(eb) || (gb = Mb.createSourceFile(eb, bb.readFile(eb), null != (Vb = null != pb ? pb : wb.target) ? Vb : Ib(Mb).target, !1), Hb.set(gb.fileName, gb), gb)
          },
          useCaseSensitiveFileNames: function() {
            return bb.useCaseSensitiveFileNames
          }
        }),
        updateFile: function(wb) {
          var Mb = Hb.has(wb.fileName);
          return bb.writeFile(wb.fileName, wb.text), Hb.set(wb.fileName, wb), Mb
        },
        deleteFile: function(wb) {
          var Mb = Hb.has(wb.fileName);
          return Hb.delete(wb.fileName), bb.deleteFile(wb.fileName), Mb
        }
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);