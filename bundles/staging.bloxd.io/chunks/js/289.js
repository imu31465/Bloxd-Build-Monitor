export const id = 289;
export const ids = [289];
export const modules = {
  41125: (qq, Eq, gq) => {
    function Yq() {
      return Yq = Object.assign ? Object.assign.bind() : function(qq) {
        for (var Eq = 1; Eq < arguments.length; Eq++) {
          var gq = arguments[Eq];
          for (var Yq in gq)({}).hasOwnProperty.call(gq, Yq) && (qq[Yq] = gq[Yq])
        }
        return qq
      }, Yq.apply(null, arguments)
    }
    gq.d(Eq, {
      c: () => Wq,
      d: () => xq
    });
    var lq = !1;
    try {
      lq = "undefined" !== typeof localStorage
    } catch (aq) {}
    var Oq = "undefined" !== typeof process,
      mq = lq && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || Oq && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.DEBUG ? console.log : function(qq) {
        return ""
      };

    function xq(qq, Eq, gq, lq, Oq) {
      void 0 === lq && (lq = {});
      var mq = Yq({}, uq(gq), lq),
        xq = function(qq, Eq, gq, lq, Oq) {
          var mq = [].concat(Eq),
            xq = Nq(qq, gq, lq),
            Aq = xq.compilerHost,
            cq = xq.updateFile,
            uq = xq.deleteFile,
            Bq = new Map,
            Wq = 0,
            aq = Yq({}, Aq, {
              getProjectVersion: function() {
                return Wq.toString()
              },
              getCompilationSettings: function() {
                return gq
              },
              getCustomTransformers: function() {
                return Oq
              },
              getScriptFileNames: function() {
                return mq.slice()
              },
              getScriptSnapshot: function(Eq) {
                var gq = qq.readFile(Eq);
                if (gq && "string" === typeof gq) return lq.ScriptSnapshot.fromString(gq)
              },
              getScriptVersion: function(qq) {
                return Bq.get(qq) || "0"
              },
              writeFile: qq.writeFile
            }),
            Vq = {
              languageServiceHost: aq,
              updateFile: function(qq) {
                Wq++, Bq.set(qq.fileName, Wq.toString()), mq.includes(qq.fileName) || mq.push(qq.fileName), cq(qq)
              },
              deleteFile: function(qq) {
                Wq++, Bq.set(qq.fileName, Wq.toString());
                var Eq = mq.indexOf(qq.fileName); - 1 !== Eq && mq.splice(Eq, 1), uq(qq)
              }
            };
          return Vq
        }(qq, Eq, mq, gq, Oq),
        Aq = xq.languageServiceHost,
        cq = xq.updateFile,
        Bq = xq.deleteFile,
        Wq = gq.createLanguageService(Aq),
        aq = Wq.getCompilerOptionsDiagnostics();
      if (aq.length) {
        var Vq = Nq(qq, lq, gq);
        throw new Error(gq.formatDiagnostics(aq, Vq.compilerHost))
      }
      return {
        name: "vfs",
        sys: qq,
        languageService: Wq,
        getSourceFile: function(qq) {
          var Eq;
          return null == (Eq = Wq.getProgram()) ? void 0 : Eq.getSourceFile(qq)
        },
        createFile: function(qq, Eq) {
          cq(gq.createSourceFile(qq, Eq, mq.target, !1))
        },
        updateFile: function(qq, Eq, Yq) {
          var lq = Wq.getProgram().getSourceFile(qq);
          if (!lq) throw new Error("Did not find a source file for " + qq);
          var Oq = lq.text,
            mq = null != Yq ? Yq : gq.createTextSpan(0, Oq.length),
            xq = Oq.slice(0, mq.start) + Eq + Oq.slice(mq.start + mq.length),
            Aq = gq.updateSourceFile(lq, xq, {
              span: mq,
              newLength: Eq.length
            });
          cq(Aq)
        },
        deleteFile: function(qq) {
          var Eq = Wq.getProgram().getSourceFile(qq);
          Eq && Bq(Eq)
        }
      }
    }

    function Aq(qq) {
      throw new Error("Method '" + qq + "' is not implemented.")
    }

    function cq(qq, Eq) {
      return function() {
        for (var gq = arguments.length, Yq = new Array(gq), lq = 0; lq < gq; lq++) Yq[lq] = arguments[lq];
        var Oq = Eq.apply(void 0, Yq),
          xq = "string" === typeof Oq ? Oq.slice(0, 80) + "..." : Oq;
        return mq.apply(void 0, ["> " + qq].concat(Yq)), mq("< " + xq), Oq
      }
    }
    var uq = function(qq) {
        return Yq({}, qq.getDefaultCompilerOptions(), {
          jsx: qq.JsxEmit.React,
          strict: !0,
          esModuleInterop: !0,
          module: qq.ModuleKind.ESNext,
          suppressOutputPathCheck: !0,
          skipLibCheck: !0,
          skipDefaultLibCheck: !0
        }, qq.versionMajorMinor && Number(qq.versionMajorMinor.split(".")[0]) >= 6 ? {
          ignoreDeprecations: "6.0"
        } : {
          moduleResolution: qq.ModuleResolutionKind.NodeJs
        })
      },
      Bq = function(qq) {
        return qq.replace("/", "/lib.").toLowerCase()
      };

    function Wq(qq) {
      return {
        args: [],
        createDirectory: function() {
          return Aq("createDirectory")
        },
        directoryExists: cq("directoryExists", (function(Eq) {
          return Array.from(qq.keys()).some((function(qq) {
            return qq.startsWith(Eq)
          }))
        })),
        exit: function() {
          return Aq("exit")
        },
        fileExists: cq("fileExists", (function(Eq) {
          return qq.has(Eq) || qq.has(Bq(Eq))
        })),
        getCurrentDirectory: function() {
          return "/"
        },
        getDirectories: function() {
          return []
        },
        getExecutingFilePath: function() {
          return Aq("getExecutingFilePath")
        },
        readDirectory: cq("readDirectory", (function(Eq) {
          return "/" === Eq ? Array.from(qq.keys()) : []
        })),
        readFile: cq("readFile", (function(Eq) {
          var gq;
          return null != (gq = qq.get(Eq)) ? gq : qq.get(Bq(Eq))
        })),
        resolvePath: function(qq) {
          return qq
        },
        newLine: "\n",
        useCaseSensitiveFileNames: !0,
        write: function() {
          return Aq("write")
        },
        writeFile: function(Eq, gq) {
          qq.set(Eq, gq)
        },
        deleteFile: function(Eq) {
          qq.delete(Eq)
        }
      }
    }

    function Nq(qq, Eq, gq) {
      var lq = new Map;
      return {
        compilerHost: Yq({}, qq, {
          getCanonicalFileName: function(qq) {
            return qq
          },
          getDefaultLibFileName: function() {
            return "/" + gq.getDefaultLibFileName(Eq)
          },
          getNewLine: function() {
            return qq.newLine
          },
          getSourceFile: function(Yq, Oq) {
            var mq, xq;
            return lq.get(Yq) || (xq = gq.createSourceFile(Yq, qq.readFile(Yq), null != (mq = null != Oq ? Oq : Eq.target) ? mq : uq(gq).target, !1), lq.set(xq.fileName, xq), xq)
          },
          useCaseSensitiveFileNames: function() {
            return qq.useCaseSensitiveFileNames
          }
        }),
        updateFile: function(Eq) {
          var gq = lq.has(Eq.fileName);
          return qq.writeFile(Eq.fileName, Eq.text), lq.set(Eq.fileName, Eq), gq
        },
        deleteFile: function(Eq) {
          var gq = lq.has(Eq.fileName);
          return lq.delete(Eq.fileName), qq.deleteFile(Eq.fileName), gq
        }
      }
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);