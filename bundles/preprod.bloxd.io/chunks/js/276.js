export const id = 276;
export const ids = [276];
export const modules = {
  39831: (yb, bb, Wy) => {
    function Uy() {
      return Uy = Object.assign ? Object.assign.bind() : function(yb) {
        for (var bb = 1; bb < arguments.length; bb++) {
          var Wy = arguments[bb];
          for (var Uy in Wy)({}).hasOwnProperty.call(Wy, Uy) && (yb[Uy] = Wy[Uy])
        }
        return yb
      }, Uy.apply(null, arguments)
    }
    Wy.d(bb, {
      c: () => ey,
      g: () => cb
    });
    var hy = !1;
    try {
      hy = "undefined" !== typeof localStorage
    } catch (sy) {}
    var fy = "undefined" !== typeof process,
      Zy = hy && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || fy && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.DEBUG ? console.log : function(yb) {
        return ""
      };

    function cb(yb, bb, Wy, hy, fy) {
      void 0 === hy && (hy = {});
      var Zy = Uy({}, By(Wy), hy),
        cb = function(yb, bb, Wy, hy, fy) {
          var Zy = [].concat(bb),
            cb = qb(yb, Wy, hy),
            Py = cb.compilerHost,
            oy = cb.updateFile,
            By = cb.deleteFile,
            Ky = new Map,
            ey = 0,
            sy = Uy({}, Py, {
              getProjectVersion: function() {
                return ey.toString()
              },
              getCompilationSettings: function() {
                return Wy
              },
              getCustomTransformers: function() {
                return fy
              },
              getScriptFileNames: function() {
                return Zy.slice()
              },
              getScriptSnapshot: function(bb) {
                var Wy = yb.readFile(bb);
                if (Wy && "string" === typeof Wy) return hy.ScriptSnapshot.fromString(Wy)
              },
              getScriptVersion: function(yb) {
                return Ky.get(yb) || "0"
              },
              writeFile: yb.writeFile
            }),
            Sy = {
              languageServiceHost: sy,
              updateFile: function(yb) {
                ey++, Ky.set(yb.fileName, ey.toString()), Zy.includes(yb.fileName) || Zy.push(yb.fileName), oy(yb)
              },
              deleteFile: function(yb) {
                ey++, Ky.set(yb.fileName, ey.toString());
                var bb = Zy.indexOf(yb.fileName); - 1 !== bb && Zy.splice(bb, 1), By(yb)
              }
            };
          return Sy
        }(yb, bb, Zy, Wy, fy),
        Py = cb.languageServiceHost,
        oy = cb.updateFile,
        Ky = cb.deleteFile,
        ey = Wy.createLanguageService(Py),
        sy = ey.getCompilerOptionsDiagnostics();
      if (sy.length) {
        var Sy = qb(yb, hy, Wy);
        throw new Error(Wy.formatDiagnostics(sy, Sy.compilerHost))
      }
      return {
        name: "vfs",
        sys: yb,
        languageService: ey,
        getSourceFile: function(yb) {
          var bb;
          return null == (bb = ey.getProgram()) ? void 0 : bb.getSourceFile(yb)
        },
        createFile: function(yb, bb) {
          oy(Wy.createSourceFile(yb, bb, Zy.target, !1))
        },
        updateFile: function(yb, bb, Uy) {
          var hy = ey.getProgram().getSourceFile(yb);
          if (!hy) throw new Error("Did not find a source file for " + yb);
          var fy = hy.text,
            Zy = null != Uy ? Uy : Wy.createTextSpan(0, fy.length),
            cb = fy.slice(0, Zy.start) + bb + fy.slice(Zy.start + Zy.length),
            Py = Wy.updateSourceFile(hy, cb, {
              span: Zy,
              newLength: bb.length
            });
          oy(Py)
        },
        deleteFile: function(yb) {
          var bb = ey.getProgram().getSourceFile(yb);
          bb && Ky(bb)
        }
      }
    }

    function Py(yb) {
      throw new Error("Method '" + yb + "' is not implemented.")
    }

    function oy(yb, bb) {
      return function() {
        for (var Wy = arguments.length, Uy = new Array(Wy), hy = 0; hy < Wy; hy++) Uy[hy] = arguments[hy];
        var fy = bb.apply(void 0, Uy),
          cb = "string" === typeof fy ? fy.slice(0, 80) + "..." : fy;
        return Zy.apply(void 0, ["> " + yb].concat(Uy)), Zy("< " + cb), fy
      }
    }
    var By = function(yb) {
        return Uy({}, yb.getDefaultCompilerOptions(), {
          jsx: yb.JsxEmit.React,
          strict: !0,
          esModuleInterop: !0,
          module: yb.ModuleKind.ESNext,
          suppressOutputPathCheck: !0,
          skipLibCheck: !0,
          skipDefaultLibCheck: !0
        }, yb.versionMajorMinor && Number(yb.versionMajorMinor.split(".")[0]) >= 6 ? {
          ignoreDeprecations: "6.0"
        } : {
          moduleResolution: yb.ModuleResolutionKind.NodeJs
        })
      },
      Ky = function(yb) {
        return yb.replace("/", "/lib.").toLowerCase()
      };

    function ey(yb) {
      return {
        args: [],
        createDirectory: function() {
          return Py("createDirectory")
        },
        directoryExists: oy("directoryExists", (function(bb) {
          return Array.from(yb.keys()).some((function(yb) {
            return yb.startsWith(bb)
          }))
        })),
        exit: function() {
          return Py("exit")
        },
        fileExists: oy("fileExists", (function(bb) {
          return yb.has(bb) || yb.has(Ky(bb))
        })),
        getCurrentDirectory: function() {
          return "/"
        },
        getDirectories: function() {
          return []
        },
        getExecutingFilePath: function() {
          return Py("getExecutingFilePath")
        },
        readDirectory: oy("readDirectory", (function(bb) {
          return "/" === bb ? Array.from(yb.keys()) : []
        })),
        readFile: oy("readFile", (function(bb) {
          var Wy;
          return null != (Wy = yb.get(bb)) ? Wy : yb.get(Ky(bb))
        })),
        resolvePath: function(yb) {
          return yb
        },
        newLine: "\n",
        useCaseSensitiveFileNames: !0,
        write: function() {
          return Py("write")
        },
        writeFile: function(bb, Wy) {
          yb.set(bb, Wy)
        },
        deleteFile: function(bb) {
          yb.delete(bb)
        }
      }
    }

    function qb(yb, bb, Wy) {
      var hy = new Map;
      return {
        compilerHost: Uy({}, yb, {
          getCanonicalFileName: function(yb) {
            return yb
          },
          getDefaultLibFileName: function() {
            return "/" + Wy.getDefaultLibFileName(bb)
          },
          getNewLine: function() {
            return yb.newLine
          },
          getSourceFile: function(Uy, fy) {
            var Zy, cb;
            return hy.get(Uy) || (cb = Wy.createSourceFile(Uy, yb.readFile(Uy), null != (Zy = null != fy ? fy : bb.target) ? Zy : By(Wy).target, !1), hy.set(cb.fileName, cb), cb)
          },
          useCaseSensitiveFileNames: function() {
            return yb.useCaseSensitiveFileNames
          }
        }),
        updateFile: function(bb) {
          var Wy = hy.has(bb.fileName);
          return yb.writeFile(bb.fileName, bb.text), hy.set(bb.fileName, bb), Wy
        },
        deleteFile: function(bb) {
          var Wy = hy.has(bb.fileName);
          return hy.delete(bb.fileName), yb.deleteFile(bb.fileName), Wy
        }
      }
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);