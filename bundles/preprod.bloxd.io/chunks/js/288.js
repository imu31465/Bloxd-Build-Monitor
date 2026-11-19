export const id = 288;
export const ids = [288];
export const modules = {
  40611: (zz, uz, bz) => {
    function Ez() {
      return Ez = Object.assign ? Object.assign.bind() : function(zz) {
        for (var uz = 1; uz < arguments.length; uz++) {
          var bz = arguments[uz];
          for (var Ez in bz)({}).hasOwnProperty.call(bz, Ez) && (zz[Ez] = bz[Ez])
        }
        return zz
      }, Ez.apply(null, arguments)
    }
    bz.d(uz, {
      d: () => dz,
      h: () => Mz
    });
    var nz = !1;
    try {
      nz = "undefined" !== typeof localStorage
    } catch (Zz) {}
    var iz = "undefined" !== typeof process,
      lz = nz && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || iz && {
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

    function Mz(zz, uz, bz, nz, iz) {
      void 0 === nz && (nz = {});
      var lz = Ez({}, Oz(bz), nz),
        Mz = function(zz, uz, bz, nz, iz) {
          var lz = [].concat(uz),
            Mz = Fz(zz, bz, nz),
            tz = Mz.compilerHost,
            Hz = Mz.updateFile,
            Oz = Mz.deleteFile,
            pz = new Map,
            dz = 0,
            Zz = Ez({}, tz, {
              getProjectVersion: function() {
                return dz.toString()
              },
              getCompilationSettings: function() {
                return bz
              },
              getCustomTransformers: function() {
                return iz
              },
              getScriptFileNames: function() {
                return lz.slice()
              },
              getScriptSnapshot: function(uz) {
                var bz = zz.readFile(uz);
                if (bz && "string" === typeof bz) return nz.ScriptSnapshot.fromString(bz)
              },
              getScriptVersion: function(zz) {
                return pz.get(zz) || "0"
              },
              writeFile: zz.writeFile
            }),
            Rz = {
              languageServiceHost: Zz,
              updateFile: function(zz) {
                dz++, pz.set(zz.fileName, dz.toString()), lz.includes(zz.fileName) || lz.push(zz.fileName), Hz(zz)
              },
              deleteFile: function(zz) {
                dz++, pz.set(zz.fileName, dz.toString());
                var uz = lz.indexOf(zz.fileName); - 1 !== uz && lz.splice(uz, 1), Oz(zz)
              }
            };
          return Rz
        }(zz, uz, lz, bz, iz),
        tz = Mz.languageServiceHost,
        Hz = Mz.updateFile,
        pz = Mz.deleteFile,
        dz = bz.createLanguageService(tz),
        Zz = dz.getCompilerOptionsDiagnostics();
      if (Zz.length) {
        var Rz = Fz(zz, nz, bz);
        throw new Error(bz.formatDiagnostics(Zz, Rz.compilerHost))
      }
      return {
        name: "vfs",
        sys: zz,
        languageService: dz,
        getSourceFile: function(zz) {
          var uz;
          return null == (uz = dz.getProgram()) ? void 0 : uz.getSourceFile(zz)
        },
        createFile: function(zz, uz) {
          Hz(bz.createSourceFile(zz, uz, lz.target, !1))
        },
        updateFile: function(zz, uz, Ez) {
          var nz = dz.getProgram().getSourceFile(zz);
          if (!nz) throw new Error("Did not find a source file for " + zz);
          var iz = nz.text,
            lz = null != Ez ? Ez : bz.createTextSpan(0, iz.length),
            Mz = iz.slice(0, lz.start) + uz + iz.slice(lz.start + lz.length),
            tz = bz.updateSourceFile(nz, Mz, {
              span: lz,
              newLength: uz.length
            });
          Hz(tz)
        },
        deleteFile: function(zz) {
          var uz = dz.getProgram().getSourceFile(zz);
          uz && pz(uz)
        }
      }
    }

    function tz(zz) {
      throw new Error("Method '" + zz + "' is not implemented.")
    }

    function Hz(zz, uz) {
      return function() {
        for (var bz = arguments.length, Ez = new Array(bz), nz = 0; nz < bz; nz++) Ez[nz] = arguments[nz];
        var iz = uz.apply(void 0, Ez),
          Mz = "string" === typeof iz ? iz.slice(0, 80) + "..." : iz;
        return lz.apply(void 0, ["> " + zz].concat(Ez)), lz("< " + Mz), iz
      }
    }
    var Oz = function(zz) {
        return Ez({}, zz.getDefaultCompilerOptions(), {
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
      pz = function(zz) {
        return zz.replace("/", "/lib.").toLowerCase()
      };

    function dz(zz) {
      return {
        args: [],
        createDirectory: function() {
          return tz("createDirectory")
        },
        directoryExists: Hz("directoryExists", (function(uz) {
          return Array.from(zz.keys()).some((function(zz) {
            return zz.startsWith(uz)
          }))
        })),
        exit: function() {
          return tz("exit")
        },
        fileExists: Hz("fileExists", (function(uz) {
          return zz.has(uz) || zz.has(pz(uz))
        })),
        getCurrentDirectory: function() {
          return "/"
        },
        getDirectories: function() {
          return []
        },
        getExecutingFilePath: function() {
          return tz("getExecutingFilePath")
        },
        readDirectory: Hz("readDirectory", (function(uz) {
          return "/" === uz ? Array.from(zz.keys()) : []
        })),
        readFile: Hz("readFile", (function(uz) {
          var bz;
          return null != (bz = zz.get(uz)) ? bz : zz.get(pz(uz))
        })),
        resolvePath: function(zz) {
          return zz
        },
        newLine: "\n",
        useCaseSensitiveFileNames: !0,
        write: function() {
          return tz("write")
        },
        writeFile: function(uz, bz) {
          zz.set(uz, bz)
        },
        deleteFile: function(uz) {
          zz.delete(uz)
        }
      }
    }

    function Fz(zz, uz, bz) {
      var nz = new Map;
      return {
        compilerHost: Ez({}, zz, {
          getCanonicalFileName: function(zz) {
            return zz
          },
          getDefaultLibFileName: function() {
            return "/" + bz.getDefaultLibFileName(uz)
          },
          getNewLine: function() {
            return zz.newLine
          },
          getSourceFile: function(Ez, iz) {
            var lz, Mz;
            return nz.get(Ez) || (Mz = bz.createSourceFile(Ez, zz.readFile(Ez), null != (lz = null != iz ? iz : uz.target) ? lz : Oz(bz).target, !1), nz.set(Mz.fileName, Mz), Mz)
          },
          useCaseSensitiveFileNames: function() {
            return zz.useCaseSensitiveFileNames
          }
        }),
        updateFile: function(uz) {
          var bz = nz.has(uz.fileName);
          return zz.writeFile(uz.fileName, uz.text), nz.set(uz.fileName, uz), bz
        },
        deleteFile: function(uz) {
          var bz = nz.has(uz.fileName);
          return nz.delete(uz.fileName), zz.deleteFile(uz.fileName), bz
        }
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);