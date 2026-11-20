export const id = 289;
export const ids = [289];
export const modules = {
  40842: (bb, ub, hb) => {
    function Bb() {
      return Bb = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ub = 1; ub < arguments.length; ub++) {
          var hb = arguments[ub];
          for (var Bb in hb)({}).hasOwnProperty.call(hb, Bb) && (bb[Bb] = hb[Bb])
        }
        return bb
      }, Bb.apply(null, arguments)
    }
    hb.d(ub, {
      b: () => wb,
      d: () => Lb
    });
    var Ob = !1;
    try {
      Ob = "undefined" !== typeof localStorage
    } catch (Xb) {}
    var Gb = "undefined" !== typeof process,
      Ub = Ob && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || Gb && {
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

    function Lb(bb, ub, hb, Ob, Gb) {
      void 0 === Ob && (Ob = {});
      var Ub = Bb({}, ab(hb), Ob),
        Lb = function(bb, ub, hb, Ob, Gb) {
          var Ub = [].concat(ub),
            Lb = Zb(bb, hb, Ob),
            Yb = Lb.compilerHost,
            Sb = Lb.updateFile,
            ab = Lb.deleteFile,
            Hb = new Map,
            wb = 0,
            Xb = Bb({}, Yb, {
              getProjectVersion: function() {
                return wb.toString()
              },
              getCompilationSettings: function() {
                return hb
              },
              getCustomTransformers: function() {
                return Gb
              },
              getScriptFileNames: function() {
                return Ub.slice()
              },
              getScriptSnapshot: function(ub) {
                var hb = bb.readFile(ub);
                if (hb && "string" === typeof hb) return Ob.ScriptSnapshot.fromString(hb)
              },
              getScriptVersion: function(bb) {
                return Hb.get(bb) || "0"
              },
              writeFile: bb.writeFile
            }),
            pb = {
              languageServiceHost: Xb,
              updateFile: function(bb) {
                wb++, Hb.set(bb.fileName, wb.toString()), Ub.includes(bb.fileName) || Ub.push(bb.fileName), Sb(bb)
              },
              deleteFile: function(bb) {
                wb++, Hb.set(bb.fileName, wb.toString());
                var ub = Ub.indexOf(bb.fileName); - 1 !== ub && Ub.splice(ub, 1), ab(bb)
              }
            };
          return pb
        }(bb, ub, Ub, hb, Gb),
        Yb = Lb.languageServiceHost,
        Sb = Lb.updateFile,
        Hb = Lb.deleteFile,
        wb = hb.createLanguageService(Yb),
        Xb = wb.getCompilerOptionsDiagnostics();
      if (Xb.length) {
        var pb = Zb(bb, Ob, hb);
        throw new Error(hb.formatDiagnostics(Xb, pb.compilerHost))
      }
      return {
        name: "vfs",
        sys: bb,
        languageService: wb,
        getSourceFile: function(bb) {
          var ub;
          return null == (ub = wb.getProgram()) ? void 0 : ub.getSourceFile(bb)
        },
        createFile: function(bb, ub) {
          Sb(hb.createSourceFile(bb, ub, Ub.target, !1))
        },
        updateFile: function(bb, ub, Bb) {
          var Ob = wb.getProgram().getSourceFile(bb);
          if (!Ob) throw new Error("Did not find a source file for " + bb);
          var Gb = Ob.text,
            Ub = null != Bb ? Bb : hb.createTextSpan(0, Gb.length),
            Lb = Gb.slice(0, Ub.start) + ub + Gb.slice(Ub.start + Ub.length),
            Yb = hb.updateSourceFile(Ob, Lb, {
              span: Ub,
              newLength: ub.length
            });
          Sb(Yb)
        },
        deleteFile: function(bb) {
          var ub = wb.getProgram().getSourceFile(bb);
          ub && Hb(ub)
        }
      }
    }

    function Yb(bb) {
      throw new Error("Method '" + bb + "' is not implemented.")
    }

    function Sb(bb, ub) {
      return function() {
        for (var hb = arguments.length, Bb = new Array(hb), Ob = 0; Ob < hb; Ob++) Bb[Ob] = arguments[Ob];
        var Gb = ub.apply(void 0, Bb),
          Lb = "string" === typeof Gb ? Gb.slice(0, 80) + "..." : Gb;
        return Ub.apply(void 0, ["> " + bb].concat(Bb)), Ub("< " + Lb), Gb
      }
    }
    var ab = function(bb) {
        return Bb({}, bb.getDefaultCompilerOptions(), {
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
      Hb = function(bb) {
        return bb.replace("/", "/lib.").toLowerCase()
      };

    function wb(bb) {
      return {
        args: [],
        createDirectory: function() {
          return Yb("createDirectory")
        },
        directoryExists: Sb("directoryExists", (function(ub) {
          return Array.from(bb.keys()).some((function(bb) {
            return bb.startsWith(ub)
          }))
        })),
        exit: function() {
          return Yb("exit")
        },
        fileExists: Sb("fileExists", (function(ub) {
          return bb.has(ub) || bb.has(Hb(ub))
        })),
        getCurrentDirectory: function() {
          return "/"
        },
        getDirectories: function() {
          return []
        },
        getExecutingFilePath: function() {
          return Yb("getExecutingFilePath")
        },
        readDirectory: Sb("readDirectory", (function(ub) {
          return "/" === ub ? Array.from(bb.keys()) : []
        })),
        readFile: Sb("readFile", (function(ub) {
          var hb;
          return null != (hb = bb.get(ub)) ? hb : bb.get(Hb(ub))
        })),
        resolvePath: function(bb) {
          return bb
        },
        newLine: "\n",
        useCaseSensitiveFileNames: !0,
        write: function() {
          return Yb("write")
        },
        writeFile: function(ub, hb) {
          bb.set(ub, hb)
        },
        deleteFile: function(ub) {
          bb.delete(ub)
        }
      }
    }

    function Zb(bb, ub, hb) {
      var Ob = new Map;
      return {
        compilerHost: Bb({}, bb, {
          getCanonicalFileName: function(bb) {
            return bb
          },
          getDefaultLibFileName: function() {
            return "/" + hb.getDefaultLibFileName(ub)
          },
          getNewLine: function() {
            return bb.newLine
          },
          getSourceFile: function(Bb, Gb) {
            var Ub, Lb;
            return Ob.get(Bb) || (Lb = hb.createSourceFile(Bb, bb.readFile(Bb), null != (Ub = null != Gb ? Gb : ub.target) ? Ub : ab(hb).target, !1), Ob.set(Lb.fileName, Lb), Lb)
          },
          useCaseSensitiveFileNames: function() {
            return bb.useCaseSensitiveFileNames
          }
        }),
        updateFile: function(ub) {
          var hb = Ob.has(ub.fileName);
          return bb.writeFile(ub.fileName, ub.text), Ob.set(ub.fileName, ub), hb
        },
        deleteFile: function(ub) {
          var hb = Ob.has(ub.fileName);
          return Ob.delete(ub.fileName), bb.deleteFile(ub.fileName), hb
        }
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);