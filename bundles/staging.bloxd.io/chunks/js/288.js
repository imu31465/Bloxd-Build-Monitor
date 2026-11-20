export const id = 288;
export const ids = [288];
export const modules = {
  40810: (bb, cb, sb) => {
    function kb() {
      return kb = Object.assign ? Object.assign.bind() : function(bb) {
        for (var cb = 1; cb < arguments.length; cb++) {
          var sb = arguments[cb];
          for (var kb in sb)({}).hasOwnProperty.call(sb, kb) && (bb[kb] = sb[kb])
        }
        return bb
      }, kb.apply(null, arguments)
    }
    sb.d(cb, {
      c: () => Xb,
      d: () => Ub
    });
    var Wb = !1;
    try {
      Wb = "undefined" !== typeof localStorage
    } catch (mb) {}
    var ab = "undefined" !== typeof process,
      Tb = Wb && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || ab && {
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

    function Ub(bb, cb, sb, Wb, ab) {
      void 0 === Wb && (Wb = {});
      var Tb = kb({}, fb(sb), Wb),
        Ub = function(bb, cb, sb, Wb, ab) {
          var Tb = [].concat(cb),
            Ub = nb(bb, sb, Wb),
            Ib = Ub.compilerHost,
            Hb = Ub.updateFile,
            fb = Ub.deleteFile,
            Mb = new Map,
            Xb = 0,
            mb = kb({}, Ib, {
              getProjectVersion: function() {
                return Xb.toString()
              },
              getCompilationSettings: function() {
                return sb
              },
              getCustomTransformers: function() {
                return ab
              },
              getScriptFileNames: function() {
                return Tb.slice()
              },
              getScriptSnapshot: function(cb) {
                var sb = bb.readFile(cb);
                if (sb && "string" === typeof sb) return Wb.ScriptSnapshot.fromString(sb)
              },
              getScriptVersion: function(bb) {
                return Mb.get(bb) || "0"
              },
              writeFile: bb.writeFile
            }),
            lb = {
              languageServiceHost: mb,
              updateFile: function(bb) {
                Xb++, Mb.set(bb.fileName, Xb.toString()), Tb.includes(bb.fileName) || Tb.push(bb.fileName), Hb(bb)
              },
              deleteFile: function(bb) {
                Xb++, Mb.set(bb.fileName, Xb.toString());
                var cb = Tb.indexOf(bb.fileName); - 1 !== cb && Tb.splice(cb, 1), fb(bb)
              }
            };
          return lb
        }(bb, cb, Tb, sb, ab),
        Ib = Ub.languageServiceHost,
        Hb = Ub.updateFile,
        Mb = Ub.deleteFile,
        Xb = sb.createLanguageService(Ib),
        mb = Xb.getCompilerOptionsDiagnostics();
      if (mb.length) {
        var lb = nb(bb, Wb, sb);
        throw new Error(sb.formatDiagnostics(mb, lb.compilerHost))
      }
      return {
        name: "vfs",
        sys: bb,
        languageService: Xb,
        getSourceFile: function(bb) {
          var cb;
          return null == (cb = Xb.getProgram()) ? void 0 : cb.getSourceFile(bb)
        },
        createFile: function(bb, cb) {
          Hb(sb.createSourceFile(bb, cb, Tb.target, !1))
        },
        updateFile: function(bb, cb, kb) {
          var Wb = Xb.getProgram().getSourceFile(bb);
          if (!Wb) throw new Error("Did not find a source file for " + bb);
          var ab = Wb.text,
            Tb = null != kb ? kb : sb.createTextSpan(0, ab.length),
            Ub = ab.slice(0, Tb.start) + cb + ab.slice(Tb.start + Tb.length),
            Ib = sb.updateSourceFile(Wb, Ub, {
              span: Tb,
              newLength: cb.length
            });
          Hb(Ib)
        },
        deleteFile: function(bb) {
          var cb = Xb.getProgram().getSourceFile(bb);
          cb && Mb(cb)
        }
      }
    }

    function Ib(bb) {
      throw new Error("Method '" + bb + "' is not implemented.")
    }

    function Hb(bb, cb) {
      return function() {
        for (var sb = arguments.length, kb = new Array(sb), Wb = 0; Wb < sb; Wb++) kb[Wb] = arguments[Wb];
        var ab = cb.apply(void 0, kb),
          Ub = "string" === typeof ab ? ab.slice(0, 80) + "..." : ab;
        return Tb.apply(void 0, ["> " + bb].concat(kb)), Tb("< " + Ub), ab
      }
    }
    var fb = function(bb) {
        return kb({}, bb.getDefaultCompilerOptions(), {
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
      Mb = function(bb) {
        return bb.replace("/", "/lib.").toLowerCase()
      };

    function Xb(bb) {
      return {
        args: [],
        createDirectory: function() {
          return Ib("createDirectory")
        },
        directoryExists: Hb("directoryExists", (function(cb) {
          return Array.from(bb.keys()).some((function(bb) {
            return bb.startsWith(cb)
          }))
        })),
        exit: function() {
          return Ib("exit")
        },
        fileExists: Hb("fileExists", (function(cb) {
          return bb.has(cb) || bb.has(Mb(cb))
        })),
        getCurrentDirectory: function() {
          return "/"
        },
        getDirectories: function() {
          return []
        },
        getExecutingFilePath: function() {
          return Ib("getExecutingFilePath")
        },
        readDirectory: Hb("readDirectory", (function(cb) {
          return "/" === cb ? Array.from(bb.keys()) : []
        })),
        readFile: Hb("readFile", (function(cb) {
          var sb;
          return null != (sb = bb.get(cb)) ? sb : bb.get(Mb(cb))
        })),
        resolvePath: function(bb) {
          return bb
        },
        newLine: "\n",
        useCaseSensitiveFileNames: !0,
        write: function() {
          return Ib("write")
        },
        writeFile: function(cb, sb) {
          bb.set(cb, sb)
        },
        deleteFile: function(cb) {
          bb.delete(cb)
        }
      }
    }

    function nb(bb, cb, sb) {
      var Wb = new Map;
      return {
        compilerHost: kb({}, bb, {
          getCanonicalFileName: function(bb) {
            return bb
          },
          getDefaultLibFileName: function() {
            return "/" + sb.getDefaultLibFileName(cb)
          },
          getNewLine: function() {
            return bb.newLine
          },
          getSourceFile: function(kb, ab) {
            var Tb, Ub;
            return Wb.get(kb) || (Ub = sb.createSourceFile(kb, bb.readFile(kb), null != (Tb = null != ab ? ab : cb.target) ? Tb : fb(sb).target, !1), Wb.set(Ub.fileName, Ub), Ub)
          },
          useCaseSensitiveFileNames: function() {
            return bb.useCaseSensitiveFileNames
          }
        }),
        updateFile: function(cb) {
          var sb = Wb.has(cb.fileName);
          return bb.writeFile(cb.fileName, cb.text), Wb.set(cb.fileName, cb), sb
        },
        deleteFile: function(cb) {
          var sb = Wb.has(cb.fileName);
          return Wb.delete(cb.fileName), bb.deleteFile(cb.fileName), sb
        }
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);