export const id = 607;
export const ids = [607];
export const modules = {
  44581: (ee, ie, He) => {
    function ye() {
      return ye = Object.assign ? Object.assign.bind() : function(ee) {
        for (var ie = 1; ie < arguments.length; ie++) {
          var He = arguments[ie];
          for (var ye in He)({}).hasOwnProperty.call(He, ye) && (ee[ye] = He[ye])
        }
        return ee
      }, ye.apply(null, arguments)
    }
    He.d(ie, {
      d: () => ke,
      g: () => Ue
    });
    var be = !1;
    try {
      be = "undefined" !== typeof localStorage
    } catch (fe) {}
    var Me = "undefined" !== typeof process,
      Ke = be && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || Me && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.DEBUG ? console.log : function(ee) {
        return ""
      };

    function Ue(ee, ie, He, be, Me) {
      void 0 === be && (be = {});
      var Ke = ye({}, oe(He), be),
        Ue = function(ee, ie, He, be, Me) {
          var Ke = [].concat(ie),
            Ue = qe(ee, He, be),
            Fe = Ue.compilerHost,
            Je = Ue.updateFile,
            oe = Ue.deleteFile,
            Re = new Map,
            ke = 0,
            fe = ye({}, Fe, {
              getProjectVersion: function() {
                return ke.toString()
              },
              getCompilationSettings: function() {
                return He
              },
              getCustomTransformers: function() {
                return Me
              },
              getScriptFileNames: function() {
                return Ke.slice()
              },
              getScriptSnapshot: function(ie) {
                var He = ee.readFile(ie);
                if (He && "string" === typeof He) return be.ScriptSnapshot.fromString(He)
              },
              getScriptVersion: function(ee) {
                return Re.get(ee) || "0"
              },
              writeFile: ee.writeFile
            }),
            Te = {
              languageServiceHost: fe,
              updateFile: function(ee) {
                ke++, Re.set(ee.fileName, ke.toString()), Ke.includes(ee.fileName) || Ke.push(ee.fileName), Je(ee)
              },
              deleteFile: function(ee) {
                ke++, Re.set(ee.fileName, ke.toString());
                var ie = Ke.indexOf(ee.fileName); - 1 !== ie && Ke.splice(ie, 1), oe(ee)
              }
            };
          return Te
        }(ee, ie, Ke, He, Me),
        Fe = Ue.languageServiceHost,
        Je = Ue.updateFile,
        Re = Ue.deleteFile,
        ke = He.createLanguageService(Fe),
        fe = ke.getCompilerOptionsDiagnostics();
      if (fe.length) {
        var Te = qe(ee, be, He);
        throw new Error(He.formatDiagnostics(fe, Te.compilerHost))
      }
      return {
        name: "vfs",
        sys: ee,
        languageService: ke,
        getSourceFile: function(ee) {
          var ie;
          return null == (ie = ke.getProgram()) ? void 0 : ie.getSourceFile(ee)
        },
        createFile: function(ee, ie) {
          Je(He.createSourceFile(ee, ie, Ke.target, !1))
        },
        updateFile: function(ee, ie, ye) {
          var be = ke.getProgram().getSourceFile(ee);
          if (!be) throw new Error("Did not find a source file for " + ee);
          var Me = be.text,
            Ke = null != ye ? ye : He.createTextSpan(0, Me.length),
            Ue = Me.slice(0, Ke.start) + ie + Me.slice(Ke.start + Ke.length),
            Fe = He.updateSourceFile(be, Ue, {
              span: Ke,
              newLength: ie.length
            });
          Je(Fe)
        },
        deleteFile: function(ee) {
          var ie = ke.getProgram().getSourceFile(ee);
          ie && Re(ie)
        }
      }
    }

    function Fe(ee) {
      throw new Error("Method '" + ee + "' is not implemented.")
    }

    function Je(ee, ie) {
      return function() {
        for (var He = arguments.length, ye = new Array(He), be = 0; be < He; be++) ye[be] = arguments[be];
        var Me = ie.apply(void 0, ye),
          Ue = "string" === typeof Me ? Me.slice(0, 80) + "..." : Me;
        return Ke.apply(void 0, ["> " + ee].concat(ye)), Ke("< " + Ue), Me
      }
    }
    var oe = function(ee) {
        return ye({}, ee.getDefaultCompilerOptions(), {
          jsx: ee.JsxEmit.React,
          strict: !0,
          esModuleInterop: !0,
          module: ee.ModuleKind.ESNext,
          suppressOutputPathCheck: !0,
          skipLibCheck: !0,
          skipDefaultLibCheck: !0
        }, ee.versionMajorMinor && Number(ee.versionMajorMinor.split(".")[0]) >= 6 ? {
          ignoreDeprecations: "6.0"
        } : {
          moduleResolution: ee.ModuleResolutionKind.NodeJs
        })
      },
      Re = function(ee) {
        return ee.replace("/", "/lib.").toLowerCase()
      };

    function ke(ee) {
      return {
        args: [],
        createDirectory: function() {
          return Fe("createDirectory")
        },
        directoryExists: Je("directoryExists", (function(ie) {
          return Array.from(ee.keys()).some((function(ee) {
            return ee.startsWith(ie)
          }))
        })),
        exit: function() {
          return Fe("exit")
        },
        fileExists: Je("fileExists", (function(ie) {
          return ee.has(ie) || ee.has(Re(ie))
        })),
        getCurrentDirectory: function() {
          return "/"
        },
        getDirectories: function() {
          return []
        },
        getExecutingFilePath: function() {
          return Fe("getExecutingFilePath")
        },
        readDirectory: Je("readDirectory", (function(ie) {
          return "/" === ie ? Array.from(ee.keys()) : []
        })),
        readFile: Je("readFile", (function(ie) {
          var He;
          return null != (He = ee.get(ie)) ? He : ee.get(Re(ie))
        })),
        resolvePath: function(ee) {
          return ee
        },
        newLine: "\n",
        useCaseSensitiveFileNames: !0,
        write: function() {
          return Fe("write")
        },
        writeFile: function(ie, He) {
          ee.set(ie, He)
        },
        deleteFile: function(ie) {
          ee.delete(ie)
        }
      }
    }

    function qe(ee, ie, He) {
      var be = new Map;
      return {
        compilerHost: ye({}, ee, {
          getCanonicalFileName: function(ee) {
            return ee
          },
          getDefaultLibFileName: function() {
            return "/" + He.getDefaultLibFileName(ie)
          },
          getNewLine: function() {
            return ee.newLine
          },
          getSourceFile: function(ye, Me) {
            var Ke, Ue;
            return be.get(ye) || (Ue = He.createSourceFile(ye, ee.readFile(ye), null != (Ke = null != Me ? Me : ie.target) ? Ke : oe(He).target, !1), be.set(Ue.fileName, Ue), Ue)
          },
          useCaseSensitiveFileNames: function() {
            return ee.useCaseSensitiveFileNames
          }
        }),
        updateFile: function(ie) {
          var He = be.has(ie.fileName);
          return ee.writeFile(ie.fileName, ie.text), be.set(ie.fileName, ie), He
        },
        deleteFile: function(ie) {
          var He = be.has(ie.fileName);
          return be.delete(ie.fileName), ee.deleteFile(ie.fileName), He
        }
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);