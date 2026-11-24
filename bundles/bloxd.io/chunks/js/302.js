export const id = 302;
export const ids = [302];
export const modules = {
  41538: (TT, UT, mT) => {
    function WT() {
      return WT = Object.assign ? Object.assign.bind() : function(TT) {
        for (var UT = 1; UT < arguments.length; UT++) {
          var mT = arguments[UT];
          for (var WT in mT)({}).hasOwnProperty.call(mT, WT) && (TT[WT] = mT[WT])
        }
        return TT
      }, WT.apply(null, arguments)
    }
    mT.d(UT, {
      c: () => LT,
      d: () => nT
    });
    var zT = !1;
    try {
      zT = "undefined" !== typeof localStorage
    } catch (BT) {}
    var MT = "undefined" !== typeof process,
      gT = zT && "function" === typeof localStorage.getItem && localStorage.getItem("DEBUG") || MT && {
        NODE_ENV: "production",
        PUBLIC_URL: "",
        WDS_SOCKET_HOST: void 0,
        WDS_SOCKET_PATH: void 0,
        WDS_SOCKET_PORT: void 0,
        FAST_REFRESH: !0,
        REACT_APP_DEV_URLS: "false"
      }.DEBUG ? console.log : function(TT) {
        return ""
      };

    function nT(TT, UT, mT, zT, MT) {
      void 0 === zT && (zT = {});
      var gT = WT({}, jT(mT), zT),
        nT = function(TT, UT, mT, zT, MT) {
          var gT = [].concat(UT),
            nT = pT(TT, mT, zT),
            HT = nT.compilerHost,
            kT = nT.updateFile,
            jT = nT.deleteFile,
            lT = new Map,
            LT = 0,
            BT = WT({}, HT, {
              getProjectVersion: function() {
                return LT.toString()
              },
              getCompilationSettings: function() {
                return mT
              },
              getCustomTransformers: function() {
                return MT
              },
              getScriptFileNames: function() {
                return gT.slice()
              },
              getScriptSnapshot: function(UT) {
                var mT = TT.readFile(UT);
                if (mT && "string" === typeof mT) return zT.ScriptSnapshot.fromString(mT)
              },
              getScriptVersion: function(TT) {
                return lT.get(TT) || "0"
              },
              writeFile: TT.writeFile
            }),
            ZT = {
              languageServiceHost: BT,
              updateFile: function(TT) {
                LT++, lT.set(TT.fileName, LT.toString()), gT.includes(TT.fileName) || gT.push(TT.fileName), kT(TT)
              },
              deleteFile: function(TT) {
                LT++, lT.set(TT.fileName, LT.toString());
                var UT = gT.indexOf(TT.fileName); - 1 !== UT && gT.splice(UT, 1), jT(TT)
              }
            };
          return ZT
        }(TT, UT, gT, mT, MT),
        HT = nT.languageServiceHost,
        kT = nT.updateFile,
        lT = nT.deleteFile,
        LT = mT.createLanguageService(HT),
        BT = LT.getCompilerOptionsDiagnostics();
      if (BT.length) {
        var ZT = pT(TT, zT, mT);
        throw new Error(mT.formatDiagnostics(BT, ZT.compilerHost))
      }
      return {
        name: "vfs",
        sys: TT,
        languageService: LT,
        getSourceFile: function(TT) {
          var UT;
          return null == (UT = LT.getProgram()) ? void 0 : UT.getSourceFile(TT)
        },
        createFile: function(TT, UT) {
          kT(mT.createSourceFile(TT, UT, gT.target, !1))
        },
        updateFile: function(TT, UT, WT) {
          var zT = LT.getProgram().getSourceFile(TT);
          if (!zT) throw new Error("Did not find a source file for " + TT);
          var MT = zT.text,
            gT = null != WT ? WT : mT.createTextSpan(0, MT.length),
            nT = MT.slice(0, gT.start) + UT + MT.slice(gT.start + gT.length),
            HT = mT.updateSourceFile(zT, nT, {
              span: gT,
              newLength: UT.length
            });
          kT(HT)
        },
        deleteFile: function(TT) {
          var UT = LT.getProgram().getSourceFile(TT);
          UT && lT(UT)
        }
      }
    }

    function HT(TT) {
      throw new Error("Method '" + TT + "' is not implemented.")
    }

    function kT(TT, UT) {
      return function() {
        for (var mT = arguments.length, WT = new Array(mT), zT = 0; zT < mT; zT++) WT[zT] = arguments[zT];
        var MT = UT.apply(void 0, WT),
          nT = "string" === typeof MT ? MT.slice(0, 80) + "..." : MT;
        return gT.apply(void 0, ["> " + TT].concat(WT)), gT("< " + nT), MT
      }
    }
    var jT = function(TT) {
        return WT({}, TT.getDefaultCompilerOptions(), {
          jsx: TT.JsxEmit.React,
          strict: !0,
          esModuleInterop: !0,
          module: TT.ModuleKind.ESNext,
          suppressOutputPathCheck: !0,
          skipLibCheck: !0,
          skipDefaultLibCheck: !0
        }, TT.versionMajorMinor && Number(TT.versionMajorMinor.split(".")[0]) >= 6 ? {
          ignoreDeprecations: "6.0"
        } : {
          moduleResolution: TT.ModuleResolutionKind.NodeJs
        })
      },
      lT = function(TT) {
        return TT.replace("/", "/lib.").toLowerCase()
      };

    function LT(TT) {
      return {
        args: [],
        createDirectory: function() {
          return HT("createDirectory")
        },
        directoryExists: kT("directoryExists", (function(UT) {
          return Array.from(TT.keys()).some((function(TT) {
            return TT.startsWith(UT)
          }))
        })),
        exit: function() {
          return HT("exit")
        },
        fileExists: kT("fileExists", (function(UT) {
          return TT.has(UT) || TT.has(lT(UT))
        })),
        getCurrentDirectory: function() {
          return "/"
        },
        getDirectories: function() {
          return []
        },
        getExecutingFilePath: function() {
          return HT("getExecutingFilePath")
        },
        readDirectory: kT("readDirectory", (function(UT) {
          return "/" === UT ? Array.from(TT.keys()) : []
        })),
        readFile: kT("readFile", (function(UT) {
          var mT;
          return null != (mT = TT.get(UT)) ? mT : TT.get(lT(UT))
        })),
        resolvePath: function(TT) {
          return TT
        },
        newLine: "\n",
        useCaseSensitiveFileNames: !0,
        write: function() {
          return HT("write")
        },
        writeFile: function(UT, mT) {
          TT.set(UT, mT)
        },
        deleteFile: function(UT) {
          TT.delete(UT)
        }
      }
    }

    function pT(TT, UT, mT) {
      var zT = new Map;
      return {
        compilerHost: WT({}, TT, {
          getCanonicalFileName: function(TT) {
            return TT
          },
          getDefaultLibFileName: function() {
            return "/" + mT.getDefaultLibFileName(UT)
          },
          getNewLine: function() {
            return TT.newLine
          },
          getSourceFile: function(WT, MT) {
            var gT, nT;
            return zT.get(WT) || (nT = mT.createSourceFile(WT, TT.readFile(WT), null != (gT = null != MT ? MT : UT.target) ? gT : jT(mT).target, !1), zT.set(nT.fileName, nT), nT)
          },
          useCaseSensitiveFileNames: function() {
            return TT.useCaseSensitiveFileNames
          }
        }),
        updateFile: function(UT) {
          var mT = zT.has(UT.fileName);
          return TT.writeFile(UT.fileName, UT.text), zT.set(UT.fileName, UT), mT
        },
        deleteFile: function(UT) {
          var mT = zT.has(UT.fileName);
          return zT.delete(UT.fileName), TT.deleteFile(UT.fileName), mT
        }
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);