export const id = 288;
export const ids = [288];
export const modules = {
  40487: (bb, ab, Ub) => {
    function Ab() {
      return Ab = Object.assign ? Object.assign.bind() : function(bb) {
        for (var ab = 1; ab < arguments.length; ab++) {
          var Ub = arguments[ab];
          for (var Ab in Ub)({}).hasOwnProperty.call(Ub, Ab) && (bb[Ab] = Ub[Ab])
        }
        return bb
      }, Ab.apply(null, arguments)
    }
    Ub.d(ab, {
      c: () => Pb,
      g: () => Yb
    });
    var Mb = !1;
    try {
      Mb = "undefined" !== typeof localStorage
    } catch (jb) {}
    var Tb = "undefined" !== typeof process,
      Eb = Mb && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || Tb && {
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

    function Yb(bb, ab, Ub, Mb, Tb) {
      void 0 === Mb && (Mb = {});
      var Eb = Ab({}, vb(Ub), Mb),
        Yb = function(bb, ab, Ub, Mb, Tb) {
          var Eb = [].concat(ab),
            Yb = Xb(bb, Ub, Mb),
            Bb = Yb.compilerHost,
            eb = Yb.updateFile,
            vb = Yb.deleteFile,
            Lb = new Map,
            Pb = 0,
            jb = Ab({}, Bb, {
              getProjectVersion: function() {
                return Pb.toString()
              },
              getCompilationSettings: function() {
                return Ub
              },
              getCustomTransformers: function() {
                return Tb
              },
              getScriptFileNames: function() {
                return Eb.slice()
              },
              getScriptSnapshot: function(ab) {
                var Ub = bb.readFile(ab);
                if (Ub && "string" === typeof Ub) return Mb.ScriptSnapshot.fromString(Ub)
              },
              getScriptVersion: function(bb) {
                return Lb.get(bb) || "0"
              },
              writeFile: bb.writeFile
            }),
            Rb = {
              languageServiceHost: jb,
              updateFile: function(bb) {
                Pb++, Lb.set(bb.fileName, Pb.toString()), Eb.includes(bb.fileName) || Eb.push(bb.fileName), eb(bb)
              },
              deleteFile: function(bb) {
                Pb++, Lb.set(bb.fileName, Pb.toString());
                var ab = Eb.indexOf(bb.fileName); - 1 !== ab && Eb.splice(ab, 1), vb(bb)
              }
            };
          return Rb
        }(bb, ab, Eb, Ub, Tb),
        Bb = Yb.languageServiceHost,
        eb = Yb.updateFile,
        Lb = Yb.deleteFile,
        Pb = Ub.createLanguageService(Bb),
        jb = Pb.getCompilerOptionsDiagnostics();
      if (jb.length) {
        var Rb = Xb(bb, Mb, Ub);
        throw new Error(Ub.formatDiagnostics(jb, Rb.compilerHost))
      }
      return {
        name: "vfs",
        sys: bb,
        languageService: Pb,
        getSourceFile: function(bb) {
          var ab;
          return null == (ab = Pb.getProgram()) ? void 0 : ab.getSourceFile(bb)
        },
        createFile: function(bb, ab) {
          eb(Ub.createSourceFile(bb, ab, Eb.target, !1))
        },
        updateFile: function(bb, ab, Ab) {
          var Mb = Pb.getProgram().getSourceFile(bb);
          if (!Mb) throw new Error("Did not find a source file for " + bb);
          var Tb = Mb.text,
            Eb = null != Ab ? Ab : Ub.createTextSpan(0, Tb.length),
            Yb = Tb.slice(0, Eb.start) + ab + Tb.slice(Eb.start + Eb.length),
            Bb = Ub.updateSourceFile(Mb, Yb, {
              span: Eb,
              newLength: ab.length
            });
          eb(Bb)
        },
        deleteFile: function(bb) {
          var ab = Pb.getProgram().getSourceFile(bb);
          ab && Lb(ab)
        }
      }
    }

    function Bb(bb) {
      throw new Error("Method '" + bb + "' is not implemented.")
    }

    function eb(bb, ab) {
      return function() {
        for (var Ub = arguments.length, Ab = new Array(Ub), Mb = 0; Mb < Ub; Mb++) Ab[Mb] = arguments[Mb];
        var Tb = ab.apply(void 0, Ab),
          Yb = "string" === typeof Tb ? Tb.slice(0, 80) + "..." : Tb;
        return Eb.apply(void 0, ["> " + bb].concat(Ab)), Eb("< " + Yb), Tb
      }
    }
    var vb = function(bb) {
        return Ab({}, bb.getDefaultCompilerOptions(), {
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
      Lb = function(bb) {
        return bb.replace("/", "/lib.").toLowerCase()
      };

    function Pb(bb) {
      return {
        args: [],
        createDirectory: function() {
          return Bb("createDirectory")
        },
        directoryExists: eb("directoryExists", (function(ab) {
          return Array.from(bb.keys()).some((function(bb) {
            return bb.startsWith(ab)
          }))
        })),
        exit: function() {
          return Bb("exit")
        },
        fileExists: eb("fileExists", (function(ab) {
          return bb.has(ab) || bb.has(Lb(ab))
        })),
        getCurrentDirectory: function() {
          return "/"
        },
        getDirectories: function() {
          return []
        },
        getExecutingFilePath: function() {
          return Bb("getExecutingFilePath")
        },
        readDirectory: eb("readDirectory", (function(ab) {
          return "/" === ab ? Array.from(bb.keys()) : []
        })),
        readFile: eb("readFile", (function(ab) {
          var Ub;
          return null != (Ub = bb.get(ab)) ? Ub : bb.get(Lb(ab))
        })),
        resolvePath: function(bb) {
          return bb
        },
        newLine: "\n",
        useCaseSensitiveFileNames: !0,
        write: function() {
          return Bb("write")
        },
        writeFile: function(ab, Ub) {
          bb.set(ab, Ub)
        },
        deleteFile: function(ab) {
          bb.delete(ab)
        }
      }
    }

    function Xb(bb, ab, Ub) {
      var Mb = new Map;
      return {
        compilerHost: Ab({}, bb, {
          getCanonicalFileName: function(bb) {
            return bb
          },
          getDefaultLibFileName: function() {
            return "/" + Ub.getDefaultLibFileName(ab)
          },
          getNewLine: function() {
            return bb.newLine
          },
          getSourceFile: function(Ab, Tb) {
            var Eb, Yb;
            return Mb.get(Ab) || (Yb = Ub.createSourceFile(Ab, bb.readFile(Ab), null != (Eb = null != Tb ? Tb : ab.target) ? Eb : vb(Ub).target, !1), Mb.set(Yb.fileName, Yb), Yb)
          },
          useCaseSensitiveFileNames: function() {
            return bb.useCaseSensitiveFileNames
          }
        }),
        updateFile: function(ab) {
          var Ub = Mb.has(ab.fileName);
          return bb.writeFile(ab.fileName, ab.text), Mb.set(ab.fileName, ab), Ub
        },
        deleteFile: function(ab) {
          var Ub = Mb.has(ab.fileName);
          return Mb.delete(ab.fileName), bb.deleteFile(ab.fileName), Ub
        }
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);