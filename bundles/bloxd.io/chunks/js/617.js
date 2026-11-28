export const id = 617;
export const ids = [617];
export const modules = {
  53845: (dd, Od, md) => {
    function Wd() {
      return Wd = Object.assign ? Object.assign.bind() : function(dd) {
        for (var Od = 1; Od < arguments.length; Od++) {
          var md = arguments[Od];
          for (var Wd in md)({}).hasOwnProperty.call(md, Wd) && (dd[Wd] = md[Wd])
        }
        return dd
      }, Wd.apply(null, arguments)
    }
    md.d(Od, {
      e: () => od,
      h: () => Kd
    });
    var Fd = !1;
    try {
      Fd = "undefined" !== typeof localStorage
    } catch (qd) {}
    var Rd = "undefined" !== typeof process,
      Xd = Fd && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || Rd && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.DEBUG ? console.log : function(dd) {
        return ""
      };

    function Kd(dd, Od, md, Fd, Rd) {
      void 0 === Fd && (Fd = {});
      var Xd = Wd({}, Qd(md), Fd),
        Kd = function(dd, Od, md, Fd, Rd) {
          var Xd = [].concat(Od),
            Kd = Nd(dd, md, Fd),
            hd = Kd.compilerHost,
            vd = Kd.updateFile,
            Qd = Kd.deleteFile,
            td = new Map,
            od = 0,
            qd = Wd({}, hd, {
              getProjectVersion: function() {
                return od.toString()
              },
              getCompilationSettings: function() {
                return md
              },
              getCustomTransformers: function() {
                return Rd
              },
              getScriptFileNames: function() {
                return Xd.slice()
              },
              getScriptSnapshot: function(Od) {
                var md = dd.readFile(Od);
                if (md && "string" === typeof md) return Fd.ScriptSnapshot.fromString(md)
              },
              getScriptVersion: function(dd) {
                return td.get(dd) || "0"
              },
              writeFile: dd.writeFile
            }),
            Hd = {
              languageServiceHost: qd,
              updateFile: function(dd) {
                od++, td.set(dd.fileName, od.toString()), Xd.includes(dd.fileName) || Xd.push(dd.fileName), vd(dd)
              },
              deleteFile: function(dd) {
                od++, td.set(dd.fileName, od.toString());
                var Od = Xd.indexOf(dd.fileName); - 1 !== Od && Xd.splice(Od, 1), Qd(dd)
              }
            };
          return Hd
        }(dd, Od, Xd, md, Rd),
        hd = Kd.languageServiceHost,
        vd = Kd.updateFile,
        td = Kd.deleteFile,
        od = md.createLanguageService(hd),
        qd = od.getCompilerOptionsDiagnostics();
      if (qd.length) {
        var Hd = Nd(dd, Fd, md);
        throw new Error(md.formatDiagnostics(qd, Hd.compilerHost))
      }
      return {
        name: "vfs",
        sys: dd,
        languageService: od,
        getSourceFile: function(dd) {
          var Od;
          return null == (Od = od.getProgram()) ? void 0 : Od.getSourceFile(dd)
        },
        createFile: function(dd, Od) {
          vd(md.createSourceFile(dd, Od, Xd.target, !1))
        },
        updateFile: function(dd, Od, Wd) {
          var Fd = od.getProgram().getSourceFile(dd);
          if (!Fd) throw new Error("Did not find a source file for " + dd);
          var Rd = Fd.text,
            Xd = null != Wd ? Wd : md.createTextSpan(0, Rd.length),
            Kd = Rd.slice(0, Xd.start) + Od + Rd.slice(Xd.start + Xd.length),
            hd = md.updateSourceFile(Fd, Kd, {
              span: Xd,
              newLength: Od.length
            });
          vd(hd)
        },
        deleteFile: function(dd) {
          var Od = od.getProgram().getSourceFile(dd);
          Od && td(Od)
        }
      }
    }

    function hd(dd) {
      throw new Error("Method '" + dd + "' is not implemented.")
    }

    function vd(dd, Od) {
      return function() {
        for (var md = arguments.length, Wd = new Array(md), Fd = 0; Fd < md; Fd++) Wd[Fd] = arguments[Fd];
        var Rd = Od.apply(void 0, Wd),
          Kd = "string" === typeof Rd ? Rd.slice(0, 80) + "..." : Rd;
        return Xd.apply(void 0, ["> " + dd].concat(Wd)), Xd("< " + Kd), Rd
      }
    }
    var Qd = function(dd) {
        return Wd({}, dd.getDefaultCompilerOptions(), {
          jsx: dd.JsxEmit.React,
          strict: !0,
          esModuleInterop: !0,
          module: dd.ModuleKind.ESNext,
          suppressOutputPathCheck: !0,
          skipLibCheck: !0,
          skipDefaultLibCheck: !0
        }, dd.versionMajorMinor && Number(dd.versionMajorMinor.split(".")[0]) >= 6 ? {
          ignoreDeprecations: "6.0"
        } : {
          moduleResolution: dd.ModuleResolutionKind.NodeJs
        })
      },
      td = function(dd) {
        return dd.replace("/", "/lib.").toLowerCase()
      };

    function od(dd) {
      return {
        args: [],
        createDirectory: function() {
          return hd("createDirectory")
        },
        directoryExists: vd("directoryExists", (function(Od) {
          return Array.from(dd.keys()).some((function(dd) {
            return dd.startsWith(Od)
          }))
        })),
        exit: function() {
          return hd("exit")
        },
        fileExists: vd("fileExists", (function(Od) {
          return dd.has(Od) || dd.has(td(Od))
        })),
        getCurrentDirectory: function() {
          return "/"
        },
        getDirectories: function() {
          return []
        },
        getExecutingFilePath: function() {
          return hd("getExecutingFilePath")
        },
        readDirectory: vd("readDirectory", (function(Od) {
          return "/" === Od ? Array.from(dd.keys()) : []
        })),
        readFile: vd("readFile", (function(Od) {
          var md;
          return null != (md = dd.get(Od)) ? md : dd.get(td(Od))
        })),
        resolvePath: function(dd) {
          return dd
        },
        newLine: "\n",
        useCaseSensitiveFileNames: !0,
        write: function() {
          return hd("write")
        },
        writeFile: function(Od, md) {
          dd.set(Od, md)
        },
        deleteFile: function(Od) {
          dd.delete(Od)
        }
      }
    }

    function Nd(dd, Od, md) {
      var Fd = new Map;
      return {
        compilerHost: Wd({}, dd, {
          getCanonicalFileName: function(dd) {
            return dd
          },
          getDefaultLibFileName: function() {
            return "/" + md.getDefaultLibFileName(Od)
          },
          getNewLine: function() {
            return dd.newLine
          },
          getSourceFile: function(Wd, Rd) {
            var Xd, Kd;
            return Fd.get(Wd) || (Kd = md.createSourceFile(Wd, dd.readFile(Wd), null != (Xd = null != Rd ? Rd : Od.target) ? Xd : Qd(md).target, !1), Fd.set(Kd.fileName, Kd), Kd)
          },
          useCaseSensitiveFileNames: function() {
            return dd.useCaseSensitiveFileNames
          }
        }),
        updateFile: function(Od) {
          var md = Fd.has(Od.fileName);
          return dd.writeFile(Od.fileName, Od.text), Fd.set(Od.fileName, Od), md
        },
        deleteFile: function(Od) {
          var md = Fd.has(Od.fileName);
          return Fd.delete(Od.fileName), dd.deleteFile(Od.fileName), md
        }
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);