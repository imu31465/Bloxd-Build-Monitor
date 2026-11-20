export const id = 288;
export const ids = [288];
export const modules = {
  40514: (zz, tz, sz) => {
    function Fz() {
      return Fz = Object.assign ? Object.assign.bind() : function(zz) {
        for (var tz = 1; tz < arguments.length; tz++) {
          var sz = arguments[tz];
          for (var Fz in sz)({}).hasOwnProperty.call(sz, Fz) && (zz[Fz] = sz[Fz])
        }
        return zz
      }, Fz.apply(null, arguments)
    }
    sz.d(tz, {
      e: () => Nz,
      h: () => oz
    });
    var Wz = !1;
    try {
      Wz = "undefined" !== typeof localStorage
    } catch (wz) {}
    var Xz = "undefined" !== typeof process,
      Oz = Wz && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || Xz && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.DEBUG ? console.log : function(zz) {
        return ""
      };

    function oz(zz, tz, sz, Wz, Xz) {
      void 0 === Wz && (Wz = {});
      var Oz = Fz({}, Kz(sz), Wz),
        oz = function(zz, tz, sz, Wz, Xz) {
          var Oz = [].concat(tz),
            oz = bz(zz, sz, Wz),
            vz = oz.compilerHost,
            Uz = oz.updateFile,
            Kz = oz.deleteFile,
            uz = new Map,
            Nz = 0,
            wz = Fz({}, vz, {
              getProjectVersion: function() {
                return Nz.toString()
              },
              getCompilationSettings: function() {
                return sz
              },
              getCustomTransformers: function() {
                return Xz
              },
              getScriptFileNames: function() {
                return Oz.slice()
              },
              getScriptSnapshot: function(tz) {
                var sz = zz.readFile(tz);
                if (sz && "string" === typeof sz) return Wz.ScriptSnapshot.fromString(sz)
              },
              getScriptVersion: function(zz) {
                return uz.get(zz) || "0"
              },
              writeFile: zz.writeFile
            }),
            Dz = {
              languageServiceHost: wz,
              updateFile: function(zz) {
                Nz++, uz.set(zz.fileName, Nz.toString()), Oz.includes(zz.fileName) || Oz.push(zz.fileName), Uz(zz)
              },
              deleteFile: function(zz) {
                Nz++, uz.set(zz.fileName, Nz.toString());
                var tz = Oz.indexOf(zz.fileName); - 1 !== tz && Oz.splice(tz, 1), Kz(zz)
              }
            };
          return Dz
        }(zz, tz, Oz, sz, Xz),
        vz = oz.languageServiceHost,
        Uz = oz.updateFile,
        uz = oz.deleteFile,
        Nz = sz.createLanguageService(vz),
        wz = Nz.getCompilerOptionsDiagnostics();
      if (wz.length) {
        var Dz = bz(zz, Wz, sz);
        throw new Error(sz.formatDiagnostics(wz, Dz.compilerHost))
      }
      return {
        name: "vfs",
        sys: zz,
        languageService: Nz,
        getSourceFile: function(zz) {
          var tz;
          return null == (tz = Nz.getProgram()) ? void 0 : tz.getSourceFile(zz)
        },
        createFile: function(zz, tz) {
          Uz(sz.createSourceFile(zz, tz, Oz.target, !1))
        },
        updateFile: function(zz, tz, Fz) {
          var Wz = Nz.getProgram().getSourceFile(zz);
          if (!Wz) throw new Error("Did not find a source file for " + zz);
          var Xz = Wz.text,
            Oz = null != Fz ? Fz : sz.createTextSpan(0, Xz.length),
            oz = Xz.slice(0, Oz.start) + tz + Xz.slice(Oz.start + Oz.length),
            vz = sz.updateSourceFile(Wz, oz, {
              span: Oz,
              newLength: tz.length
            });
          Uz(vz)
        },
        deleteFile: function(zz) {
          var tz = Nz.getProgram().getSourceFile(zz);
          tz && uz(tz)
        }
      }
    }

    function vz(zz) {
      throw new Error("Method '" + zz + "' is not implemented.")
    }

    function Uz(zz, tz) {
      return function() {
        for (var sz = arguments.length, Fz = new Array(sz), Wz = 0; Wz < sz; Wz++) Fz[Wz] = arguments[Wz];
        var Xz = tz.apply(void 0, Fz),
          oz = "string" === typeof Xz ? Xz.slice(0, 80) + "..." : Xz;
        return Oz.apply(void 0, ["> " + zz].concat(Fz)), Oz("< " + oz), Xz
      }
    }
    var Kz = function(zz) {
        return Fz({}, zz.getDefaultCompilerOptions(), {
          jsx: zz.JsxEmit.React,
          strict: !0,
          esModuleInterop: !0,
          module: zz.ModuleKind.ESNext,
          suppressOutputPathCheck: !0,
          skipLibCheck: !0,
          skipDefaultLibCheck: !0
        }, zz.versionMajorMinor && Number(zz.versionMajorMinor.split(".")[0]) >= 6 ? {
          ignoreDeprecations: "6.0"
        } : {
          moduleResolution: zz.ModuleResolutionKind.NodeJs
        })
      },
      uz = function(zz) {
        return zz.replace("/", "/lib.").toLowerCase()
      };

    function Nz(zz) {
      return {
        args: [],
        createDirectory: function() {
          return vz("createDirectory")
        },
        directoryExists: Uz("directoryExists", (function(tz) {
          return Array.from(zz.keys()).some((function(zz) {
            return zz.startsWith(tz)
          }))
        })),
        exit: function() {
          return vz("exit")
        },
        fileExists: Uz("fileExists", (function(tz) {
          return zz.has(tz) || zz.has(uz(tz))
        })),
        getCurrentDirectory: function() {
          return "/"
        },
        getDirectories: function() {
          return []
        },
        getExecutingFilePath: function() {
          return vz("getExecutingFilePath")
        },
        readDirectory: Uz("readDirectory", (function(tz) {
          return "/" === tz ? Array.from(zz.keys()) : []
        })),
        readFile: Uz("readFile", (function(tz) {
          var sz;
          return null != (sz = zz.get(tz)) ? sz : zz.get(uz(tz))
        })),
        resolvePath: function(zz) {
          return zz
        },
        newLine: "\n",
        useCaseSensitiveFileNames: !0,
        write: function() {
          return vz("write")
        },
        writeFile: function(tz, sz) {
          zz.set(tz, sz)
        },
        deleteFile: function(tz) {
          zz.delete(tz)
        }
      }
    }

    function bz(zz, tz, sz) {
      var Wz = new Map;
      return {
        compilerHost: Fz({}, zz, {
          getCanonicalFileName: function(zz) {
            return zz
          },
          getDefaultLibFileName: function() {
            return "/" + sz.getDefaultLibFileName(tz)
          },
          getNewLine: function() {
            return zz.newLine
          },
          getSourceFile: function(Fz, Xz) {
            var Oz, oz;
            return Wz.get(Fz) || (oz = sz.createSourceFile(Fz, zz.readFile(Fz), null != (Oz = null != Xz ? Xz : tz.target) ? Oz : Kz(sz).target, !1), Wz.set(oz.fileName, oz), oz)
          },
          useCaseSensitiveFileNames: function() {
            return zz.useCaseSensitiveFileNames
          }
        }),
        updateFile: function(tz) {
          var sz = Wz.has(tz.fileName);
          return zz.writeFile(tz.fileName, tz.text), Wz.set(tz.fileName, tz), sz
        },
        deleteFile: function(tz) {
          var sz = Wz.has(tz.fileName);
          return Wz.delete(tz.fileName), zz.deleteFile(tz.fileName), sz
        }
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);