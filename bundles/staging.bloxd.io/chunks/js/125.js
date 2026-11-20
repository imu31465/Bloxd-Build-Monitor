export const id = 125;
export const ids = [125, 127, 130];
export const modules = {
  6370: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => mu
    });
    var Eu = yu(6379),
      Ku = yu(1079);
    const Qu = {
      strict: "shaderPack:variantStrict",
      nonStrict: "shaderPack:variantNonStrict",
      terrain: "shaderPack:variantTerrain",
      liquid: "shaderPack:variantLiquid",
      model: "shaderPack:variantModel"
    };

    function mu(uu) {
      let {
        diagnostics: Ru,
        more: yu = 0,
        t: mu
      } = uu;
      return (0, Ku.jsxs)("ul", {
        className: "ShaderPackDiagnostics",
        children: [Ru.map(((uu, Ru) => {
          const yu = (0, Eu.i)(uu),
            Ju = function(uu, Ru) {
              const yu = (0, Eu.e)(null !== uu && void 0 !== uu ? uu : []);
              if (0 === yu.length) return null;
              return yu.map((uu => uu.map((uu => Ru(Qu[uu]))).join(", "))).join("; ")
            }(uu.variants, mu);
          return (0, Ku.jsxs)("li", {
            children: [yu && (0, Ku.jsx)("span", {
              className: "ShaderPackDiagnosticLocation",
              children: yu
            }), uu.message, Ju && (0, Ku.jsx)("span", {
              className: "ShaderPackDiagnosticVariants",
              children: mu("shaderPack:onlyIn", {
                variants: Ju
              })
            })]
          }, Ru)
        })), yu > 0 && (0, Ku.jsx)("li", {
          children: mu("shaderPack:moreErrors", {
            count: String(yu)
          })
        })]
      })
    }
  },
  6389: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Zu,
      d: () => hu
    });
    var Eu = yu(64),
      Ku = yu(1035),
      Qu = yu.n(Ku),
      mu = yu(4740),
      Ju = yu(1300),
      Nu = yu(1043),
      Xu = yu(1408),
      Vu = yu(1170),
      ru = yu(106),
      Bu = yu(6362),
      xu = yu(6381);
    class Su extends Error {
      constructor(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        super(uu, arguments.length > 2 ? arguments[2] : void 0), this.translationKey = uu, this.params = Ru
      }
    }
    const pu = 1024,
      Tu = 101010256,
      Wu = 33639248,
      ju = 67324752,
      Hu = 22,
      du = 46,
      bu = 30,
      Cu = 65535,
      ku = 65535,
      eu = 4294967295,
      Au = 0,
      Du = 8,
      Mu = new TextDecoder;

    function Iu(uu) {
      const Ru = new DataView(uu.buffer, uu.byteOffset, uu.byteLength),
        yu = function(uu) {
          const Ru = uu.byteLength - Hu;
          for (let yu = Ru; yu >= Math.max(0, Ru - Cu); yu--)
            if (uu.getUint32(yu, !0) === Tu && yu + Hu + uu.getUint16(yu + 20, !0) <= uu.byteLength) return yu;
          throw new Su("shaderPack:loadNotZip")
        }(Ru),
        Eu = Ru.getUint16(yu + 8, !0),
        Ku = Ru.getUint16(yu + 10, !0),
        Qu = Ru.getUint32(yu + 12, !0),
        mu = Ru.getUint32(yu + 16, !0);
      if (Ku === ku || Qu === eu || mu === eu) throw su();
      if (0 !== Ru.getUint16(yu + 4, !0) || 0 !== Ru.getUint16(yu + 6, !0) || Eu !== Ku) throw new Su("shaderPack:loadSplitZip");
      if (Ku > pu) throw new Su("shaderPack:loadTooManyZipEntries", {
        count: String(pu)
      });
      const Ju = mu + Qu;
      if (Ju > yu) throw nu();
      const Nu = [];
      let Xu = mu;
      for (let Vu = 0; Vu < Ku; Vu++) {
        if (Xu + du > Ju || Ru.getUint32(Xu, !0) !== Wu) throw nu();
        const yu = Ru.getUint16(Xu + 8, !0),
          Eu = Ru.getUint16(Xu + 10, !0),
          Ku = Ru.getUint32(Xu + 20, !0),
          Qu = Ru.getUint32(Xu + 24, !0),
          Vu = Ru.getUint16(Xu + 28, !0),
          ru = Ru.getUint16(Xu + 30, !0),
          Bu = Ru.getUint16(Xu + 32, !0),
          xu = Ru.getUint32(Xu + 42, !0),
          Su = Xu + du;
        if (Xu = Su + Vu + ru + Bu, Xu > Ju) throw nu();
        if (Ku === eu || Qu === eu || xu === eu) throw su();
        const pu = Mu.decode(uu.subarray(Su, Su + Vu)).replace(/\\/g, "/");
        pu.endsWith("/") || Nu.push({
          path: pu,
          method: Eu,
          encrypted: 0 !== (1 & yu),
          compressedSize: Ku,
          dataOffset: Uu(Ru, xu, Ku, mu)
        })
      }
      return Nu
    }
    async function Gu(uu, Ru, yu) {
      if (Ru.encrypted) throw new Su("shaderPack:loadEncrypted", {
        path: Ru.path
      });
      if (Ru.method === Au) return Ru.compressedSize > yu ? null : uu.subarray(Ru.dataOffset, Ru.dataOffset + Ru.compressedSize);
      if (Ru.method === Du) return async function(uu, Ru, yu) {
        const Eu = new Blob([uu]).stream().pipeThrough(new DecompressionStream("deflate-raw")).getReader(),
          Ku = [];
        let Qu = 0;
        try {
          for (;;) {
            const {
              done: uu,
              value: yu
            } = await Eu.read();
            if (uu) break;
            if (Qu += yu.byteLength, Qu > Ru) return await Eu.cancel(), null;
            Ku.push(yu)
          }
        } catch (Nu) {
          throw new Su("shaderPack:loadDecompressFailed", {
            path: yu
          }, {
            cause: Nu
          })
        }
        const mu = new Uint8Array(Qu);
        let Ju = 0;
        for (const Xu of Ku) mu.set(Xu, Ju), Ju += Xu.byteLength;
        return mu
      }(uu.slice(Ru.dataOffset, Ru.dataOffset + Ru.compressedSize), yu, Ru.path);
      throw new Su("shaderPack:loadUnsupportedCompression", {
        path: Ru.path,
        method: String(Ru.method)
      })
    }

    function Uu(uu, Ru, yu, Eu) {
      if (Ru + bu > Eu || uu.getUint32(Ru, !0) !== ju) throw nu();
      const Ku = Ru + bu + uu.getUint16(Ru + 26, !0) + uu.getUint16(Ru + 28, !0);
      if (Ku + yu > Eu) throw nu();
      return Ku
    }

    function nu() {
      return new Su("shaderPack:loadZipDamaged")
    }

    function su() {
      return new Su("shaderPack:loadZip64")
    }
    const tu = 33554432,
      lu = 65536;
    async function gu(uu) {
      if (1 === uu.length && uu[0].name.toLowerCase().endsWith(".zip")) {
        const Ru = uu[0];
        if (Ru.size > tu) throw new Su("shaderPack:loadZipTooBig", {
          megabytes: String(tu / 1048576)
        });
        return async function(uu) {
          return cu(Iu(uu).map((Ru => ({
            path: Ru.path,
            read: yu => Gu(uu, Ru, yu)
          }))))
        }(new Uint8Array(await Ru.arrayBuffer()))
      }
      return cu(uu.map((uu => ({
        path: Lu(uu),
        read: Ru => async function(uu, Ru) {
          return uu.size > Ru ? null : new Uint8Array(await uu.arrayBuffer())
        }(uu, Ru)
      }))))
    }
    async function cu(uu) {
      const Ru = function(uu) {
          const Ru = uu.length > 0 ? uu[0].path.indexOf("/") : -1;
          if (-1 === Ru) return uu;
          const yu = uu[0].path.slice(0, Ru + 1);
          if (!uu.every((uu => uu.path.startsWith(yu)))) return uu;
          return uu.map((uu => ({
            ...uu,
            path: uu.path.slice(yu.length)
          })))
        }(uu.filter((uu => ! function(uu) {
          const Ru = uu.split("/"),
            yu = Ru[Ru.length - 1];
          return Ru.includes("__MACOSX") || yu.startsWith("._") || ".DS_Store" === yu
        }(uu.path)))),
        yu = Ru.filter((uu => "pack.json" === uu.path.toLowerCase()));
      if (0 === yu.length) throw new Su("shaderPack:loadNoManifest");
      if (yu.length > 1) throw new Su("shaderPack:loadDuplicateManifest");
      const Eu = yu[0],
        Ku = await Eu.read(lu);
      if (null === Ku) throw new Su("shaderPack:loadManifestTooBig", {
        kilobytes: String(lu / 1024)
      });
      const Qu = function(uu) {
          let Ru;
          try {
            Ru = JSON.parse(uu)
          } catch (Ju) {
            throw new Su("shaderPack:loadManifestNotJson", {
              error: Ju.message
            }, {
              cause: Ju
            })
          }
          if ("object" !== typeof Ru || null === Ru || Array.isArray(Ru)) throw new Su("shaderPack:loadManifestNotObject");
          const {
            apiVersion: yu,
            name: Eu,
            author: Ku,
            description: Qu,
            keepCircleShadows: mu
          } = Ru;
          if (void 0 === yu) throw new Su("shaderPack:loadNoApiVersion", {
            version: String(xu.b)
          });
          if (!(0, xu.i)(yu)) throw new Su("shaderPack:loadWrongApiVersion", {
            packVersion: JSON.stringify(yu),
            version: String(xu.b)
          });
          if ("string" !== typeof Eu || "" === Eu.trim()) throw new Su("shaderPack:loadNoName");
          if (void 0 !== Ku && null !== Ku && "string" !== typeof Ku) throw new Su("shaderPack:loadAuthorNotString");
          if (void 0 !== Qu && null !== Qu && "string" !== typeof Qu) throw new Su("shaderPack:loadDescriptionNotString");
          if (void 0 !== mu && "boolean" !== typeof mu) throw new Su("shaderPack:loadKeepCircleShadowsNotBoolean");
          return {
            apiVersion: yu,
            name: Eu,
            author: "string" === typeof Ku ? Ku : null,
            description: "string" === typeof Qu && "" !== Qu.trim() ? Qu : null,
            keepCircleShadows: !0 === mu
          }
        }(zu(Ku, Eu.path)),
        mu = Ru.filter((uu => uu.path.toLowerCase().endsWith(".wgsl"))).sort(((uu, Ru) => (0, Bu.o)(uu.path, Ru.path)));
      if (0 === mu.length) throw new Su("shaderPack:loadNoWgsl");
      if (mu.length > Bu.d) throw new Su("shaderPack:loadTooManyWgsl", {
        count: String(Bu.d)
      });
      const Ju = mu.find(((uu, Ru) => Ru > 0 && uu.path === mu[Ru - 1].path));
      if (Ju) throw new Su("shaderPack:loadDuplicatePath", {
        path: Ju.path
      });
      const Nu = [];
      let Xu = Bu.g;
      for (const Vu of mu) {
        const uu = await Vu.read(Xu);
        if (null === uu) throw new Su("shaderPack:loadSourceTooBig", {
          kilobytes: String(Bu.g / 1024)
        });
        Xu -= uu.byteLength, Nu.push({
          path: Vu.path,
          source: zu(uu, Vu.path)
        })
      }
      return {
        manifest: Qu,
        files: Nu
      }
    }

    function Lu(uu) {
      return (uu.webkitRelativePath || uu.path || uu.name).replace(/^\.?\//, "")
    }

    function zu(uu, Ru) {
      try {
        return new TextDecoder("utf-8", {
          fatal: !0
        }).decode(uu)
      } catch (yu) {
        throw new Su("shaderPack:loadNotUtf8", {
          path: Ru
        }, {
          cause: yu
        })
      }
    }
    var Fu = yu(6379),
      wu = yu(1079);

    function Zu(uu) {
      let {
        busy: Ru,
        disabled: yu,
        onFiles: Ku
      } = uu;
      const {
        t: Bu
      } = (0, Vu.E)(), xu = (0, Eu.useRef)(null), Su = !(0, ru.isMobile)(), {
        getRootProps: pu,
        getInputProps: Tu,
        isDragActive: Wu,
        open: ju
      } = (0, mu.d)({
        onDrop: Ku,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: yu
      });
      return (0, wu.jsxs)("div", {
        ...pu({
          className: Qu()("ShaderPackDropZone", {
            ActiveDrag: Wu,
            Disabled: yu
          })
        }),
        children: [(0, wu.jsx)("input", {
          ...Tu({
            webkitdirectory: "true"
          })
        }), (0, wu.jsx)("input", {
          ref: xu,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(uu) {
            const Ru = Array.from(uu.target.files);
            uu.target.value = "", Ku(Ru)
          }
        }), Ru && (0, wu.jsx)(Ju.b, {}), !Ru && (0, wu.jsxs)(wu.Fragment, {
          children: [(0, wu.jsx)("div", {
            className: "ShaderPackDropZoneIcon",
            children: (0, wu.jsx)(Nu.c, {
              name: "up-from-bracket"
            })
          }), (0, wu.jsx)("div", {
            className: "ShaderPackDropZoneInstructions",
            children: Bu(Su ? "shaderPack:dropHere" : "shaderPack:chooseZipInstructions")
          }), (0, wu.jsxs)("div", {
            className: "ShaderPackDropZoneButtons",
            "data-pad-mouse-only": !0,
            children: [Su && (0, wu.jsx)(Xu.e, {
              disabled: yu,
              onClick: ju,
              children: Bu("shaderPack:chooseFolder")
            }), (0, wu.jsx)(Xu.e, {
              disabled: yu,
              onClick: () => {
                xu.current.click()
              },
              children: Bu("shaderPack:chooseZip")
            })]
          })]
        })]
      })
    }

    function hu(uu) {
      const {
        t: Ru
      } = (0, Vu.E)(), [yu, Ku] = (0, Eu.useState)(!1), [Qu, mu] = (0, Eu.useState)(null), Ju = (0, Eu.useRef)(!1);
      return {
        loading: yu,
        error: Qu,
        setError: mu,
        onFiles: async function(yu) {
          if (!Ju.current) {
            Ju.current = !0, Ku(!0), mu(null);
            try {
              await uu(await gu(yu))
            } catch (Eu) {
              Eu instanceof Su ? mu((0, Fu.j)(Ru, Eu.translationKey, Eu.params)) : (console.error("Failed to load the shader pack", Eu), mu(Ru("shaderPack:unexpectedError")))
            } finally {
              Ju.current = !1, Ku(!1)
            }
          }
        }
      }
    }
  },
  6379: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Ju,
      i: () => mu,
      j: () => Qu
    });
    var Eu = yu(6381);
    const Ku = [uu => uu.strict ? "strict" : "nonStrict", uu => uu.program];

    function Qu(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Eu = {};
      for (const Ku in yu) Eu[Ku] = `\0${Ku}\0`;
      return uu(Ru, Eu).replace(/\0(\w+)\0/g, ((uu, Ru) => yu[Ru]))
    }

    function mu(uu) {
      return null === uu.file ? null : uu.line > 0 ? `${uu.file}:${uu.line}` : uu.file
    }

    function Ju(uu) {
      const Ru = new Map(uu.map((uu => [Nu(uu).join("."), uu])));
      if (0 === Ru.size) return [];
      const yu = Vu([...Ru.values()]);
      return 0 === yu[0].length ? [] : yu
    }

    function Nu(uu) {
      return Ku.map((Ru => Ru(uu)))
    }
    const Xu = Ku.map((uu => new Set(Eu.e.map(uu)).size));

    function Vu(uu) {
      const Ru = Ku.map((Ru => new Set(uu.map(Ru)))),
        yu = Ru.reduce(((uu, Ru) => uu * Ru.size), 1),
        Eu = Ru.every(((uu, Ru) => 1 === uu.size || uu.size === Xu[Ru]));
      if (yu === uu.length && Eu) return [Ku.filter(((uu, yu) => 1 === Ru[yu].size)).map((Ru => Ru(uu[0])))];
      let Qu = null;
      for (let mu = 0; mu < Ku.length; mu++) {
        if (1 === Ru[mu].size) continue;
        const yu = ru(uu, Ku[mu]).flatMap(Vu);
        (null === Qu || yu.length < Qu.length) && (Qu = yu)
      }
      return Qu
    }

    function ru(uu, Ru) {
      const yu = new Map;
      for (const Ku of uu) {
        var Eu;
        const uu = Ru(Ku);
        yu.set(uu, [...null !== (Eu = yu.get(uu)) && void 0 !== Eu ? Eu : [], Ku])
      }
      return [...yu.values()]
    }
  },
  6381: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Eu.j,
      e: () => Ku,
      i: () => Eu.q
    });
    var Eu = yu(6362);
    const Ku = [!1, !0].flatMap((uu => ["terrain", "liquid", "model"].map((Ru => ({
      strict: uu,
      program: Ru
    })))))
  },
  6430: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      forgetShaderPackActiveHint: () => Iu,
      isOtherApiVersion: () => eu,
      isShaderPackActive: () => du,
      isShaderPackChangePending: () => ku,
      markShaderPackChangePending: () => Cu,
      pageShaderPackValidationVersion: () => Au,
      reconcileStoredShaderPackHint: () => Mu,
      removeShaderPack: () => Hu,
      replaceShaderPack: () => Tu,
      saveShaderPack: () => pu,
      shaderPackNeedsCheck: () => Du,
      storedPackOutcome: () => bu,
      storedShaderPackFiles: () => Bu,
      toStoredShaderPack: () => ru
    });
    var Eu = yu(6362),
      Ku = yu(6381),
      Qu = yu(47),
      mu = yu(3255),
      Ju = yu(6436),
      Nu = yu(6407);
    const Xu = "shaderPackChangePending";
    let Vu = null;

    function ru(uu, Ru, yu) {
      return {
        manifest: uu.manifest,
        files: (0, Eu.w)(uu.files),
        validation: Ru,
        ...yu && {
          listing: yu
        }
      }
    }

    function Bu(uu) {
      return Object.keys(uu.files).map((Ru => ({
        path: Ru,
        source: uu.files[Ru]
      })))
    }
    let xu = Promise.resolve();

    function Su(uu) {
      const Ru = xu.then(uu);
      return xu = Ru.catch((() => {})), Ru
    }

    function pu(uu, Ru) {
      return Su((() => Wu(uu, Ru)))
    }

    function Tu(uu, Ru, yu) {
      return Su((async () => JSON.stringify(await (0, Ju.h)()) === JSON.stringify(uu) && (null === Ru ? (await ju(), !0) : Wu(Ru, yu))))
    }
    async function Wu(uu, Ru) {
      const yu = await Qu.f.setItem(Ju.e, uu);
      return yu && Gu(uu, Ru), yu
    }
    async function ju() {
      await Qu.f.removeItem(Ju.e), Qu.i.removeItem(mu.d)
    }

    function Hu() {
      return Su(ju)
    }

    function du(uu, Ru) {
      return "active" === bu(uu, Ru).kind
    }

    function bu(uu, Ru) {
      var yu;
      return null === uu ? {
        kind: "none",
        reason: "nothingStored"
      } : eu(uu) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (yu = uu.validation) || void 0 === yu ? void 0 : yu.ok) || uu.validation.fromRecheck ? null === Ru ? {
        kind: "none",
        reason: "noCompiler"
      } : Du(uu, Ru) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : uu.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function Cu() {
      Qu.j.setItem(Xu, performance.timeOrigin)
    }

    function ku() {
      return Qu.j.getItem(Xu) === performance.timeOrigin
    }

    function eu(uu) {
      return !(0, Ku.i)(uu.manifest.apiVersion)
    }

    function Au(uu) {
      return Vu ??= uu.dD((0, Nu.shaderPackTextures)()), Vu
    }

    function Du(uu, Ru) {
      var yu;
      return (null === (yu = uu.validation) || void 0 === yu ? void 0 : yu.headerVersion) !== Au(Ru)
    }

    function Mu(uu) {
      return Su((async () => {
        Gu(await (0, Ju.h)(!0), uu)
      }))
    }

    function Iu() {
      return Su((async () => {
        Qu.i.removeItem(mu.d)
      }))
    }

    function Gu(uu, Ru) {
      du(uu, Ru) ? Qu.i.setItem(mu.d, !0) : Qu.i.removeItem(mu.d)
    }
  },
  6407: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      loadShaderPackTextures: () => mu,
      shaderPackTextures: () => Ju
    });
    var Eu = yu(6362);
    let Ku = null,
      Qu = null;

    function mu() {
      return Qu ??= Promise.all([yu.e(69), yu.e(198)]).then((() => yu(40062))).then((uu => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: Ru,
          textureNameToIndex: yu,
          textureAnimationData: Qu
        } = uu;
        return Ku ??= (0, Eu.l)(yu, Qu, Ru), Ku
      })), Qu
    }

    function Ju() {
      if (null === Ku) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return Ku
    }
  },
  6424: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Nu,
      g: () => Ju
    });
    var Eu = yu(6430),
      Ku = yu(6407),
      Qu = yu(129);
    const mu = 100;
    async function Ju(uu, Ru) {
      var yu;
      let Eu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (yu = navigator.gpu) && void 0 !== yu ? yu : null;
      const mu = uu.juu(Ru, (0, Ku.shaderPackTextures)());
      if (mu.errors.length > 0) return Xu(uu, mu.errors, mu.offInStrict);
      const Ju = await async function(uu) {
        if (!uu) return null;
        try {
          const Ru = await (0, Qu.y)(uu);
          return Ru ? await Ru.requestDevice() : null
        } catch (Ru) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", Ru), null
        }
      }(Eu);
      if (!Ju) return null;
      let Nu = !1;
      Ju.lost.then((() => {
        Nu = !0
      }));
      try {
        const Ru = await Promise.all(mu.validationModules.map((Ru => async function(uu, Ru, yu) {
          Ru.pushErrorScope("validation");
          const Eu = Ru.createShaderModule({
              code: yu.code
            }),
            Ku = Ru.popErrorScope(),
            {
              messages: Qu
            } = await Eu.getCompilationInfo(),
            mu = Qu.filter((uu => "error" === uu.type)).map((Ru => uu.mapValidationMessage(yu, Ru))),
            Ju = await Ku;
          Ju && 0 === mu.length && mu.push({
            file: null,
            line: 0,
            message: Ju.message,
            variants: [yu.key]
          });
          return mu
        }(uu, Ju, Ru))));
        return Nu ? null : Xu(uu, uu.rEu(Ru.flat()), mu.offInStrict)
      } catch (Vu) {
        return console.error("Couldn't validate the shader pack on WebGPU.", Vu), null
      } finally {
        Ju.destroy()
      }
    }
    async function Nu(uu, Ru) {
      var yu;
      if (!(0, Eu.shaderPackNeedsCheck)(uu, Ru) || (0, Eu.isOtherApiVersion)(uu)) return uu;
      const Ku = await Ju(Ru, (0, Eu.storedShaderPackFiles)(uu));
      if (!Ku) return uu;
      const Qu = !1 === (null === (yu = uu.validation) || void 0 === yu ? void 0 : yu.ok) && !uu.validation.fromRecheck,
        mu = {
          ...uu,
          validation: Qu ? Ku : {
            ...Ku,
            fromRecheck: !0
          }
        };
      return await (0, Eu.replaceShaderPack)(uu, mu, Ru) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), mu
    }

    function Xu(uu, Ru, yu) {
      return {
        headerVersion: (0, Eu.pageShaderPackValidationVersion)(uu),
        ok: 0 === Ru.length,
        errors: Ru.slice(0, mu),
        moreErrors: Math.max(0, Ru.length - mu),
        offInStrict: yu
      }
    }
  },
  6362: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => mu,
      g: () => Qu,
      j: () => Eu,
      l: () => Su,
      o: () => Vu,
      q: () => Ku,
      s: () => Nu,
      w: () => Xu,
      x: () => ru
    });
    const Eu = 5;

    function Ku(uu) {
      return uu === Eu
    }
    const Qu = 262144,
      mu = 256,
      Ju = 256;

    function Nu(uu) {
      if ("object" !== typeof uu || null === uu || Array.isArray(uu)) return "The pack has no files.";
      const Ru = [];
      for (const [yu, Eu] of Object.entries(uu)) {
        if ("string" !== typeof Eu) return `${yu} isn't text.`;
        Ru.push({
          path: yu,
          source: Eu
        })
      }
      return Ru.sort(((uu, Ru) => Vu(uu.path, Ru.path))),
        function(uu) {
          if (0 === uu.length) return "The pack has no .wgsl files.";
          if (uu.length > mu) return `The pack has more than ${mu} .wgsl files.`;
          const Ru = new Set;
          for (const {
              path: yu
            }
            of uu) {
            const uu = Bu(yu);
            if (null !== uu) return uu;
            if (Ru.has(yu)) return `The pack has two files at ${yu}.`;
            Ru.add(yu)
          }
          return ru(uu) > Qu ? `The pack's .wgsl files are over ${Qu/1024} KB in total.` : null
        }(Ru) ?? Ru
    }

    function Xu(uu) {
      const Ru = {};
      for (const yu of uu) Ru[yu.path] = yu.source;
      return Ru
    }

    function Vu(uu, Ru) {
      return uu < Ru ? -1 : uu > Ru ? 1 : 0
    }

    function ru(uu) {
      const Ru = new TextEncoder;
      let yu = 0;
      for (const {
          source: Eu
        }
        of uu) yu += Ru.encode(Eu).byteLength;
      return yu
    }

    function Bu(uu) {
      if (!uu.toLowerCase().endsWith(".wgsl")) return `${uu} isn't a .wgsl file.`;
      if (uu.length > Ju) return `A file path is over ${Ju} characters.`;
      if (uu.includes("\\") || /[\u0000-\u001f]/.test(uu)) return `${uu} isn't a valid file path.`;
      return uu.split("/").some((uu => "" === uu || "." === uu || ".." === uu)) ? `${uu} isn't a valid file path.` : null
    }
    const xu = /^(.*)\[rot\[([1-4])$/;

    function Su(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const Eu = new Map;
      Ru.forEach(((uu, Ru) => {
        let {
          numAnimStates: yu,
          animStartIdx: Ku
        } = uu;
        for (let Qu = 1; Qu < yu; Qu++) Eu.set(Ku + Qu - 1, Ru)
      }));
      const Ku = Object.entries(uu),
        Qu = new Map;
      for (const [pu, Tu] of Ku) {
        const uu = xu.exec(pu);
        "1" === uu?.[2] && Qu.set(uu[1], Tu + 1)
      }
      const mu = uu => {
          const Ru = xu.exec(uu);
          return Ru && Qu.has(Ru[1]) ? {
            root: Ru[1],
            rotation: Number(Ru[2]) - 1
          } : null
        },
        Ju = new Set(Ku.map((uu => {
          let [Ru] = uu;
          return mu(Ru)?.root ?? Ru
        }))),
        Nu = (uu, yu) => {
          const Eu = uu.replace(/_?0$/, "");
          return (Ru[yu]?.numAnimStates ?? 0) > 1 && !Ju.has(Eu) ? Eu : uu
        },
        Xu = new Map;
      for (const [xu, pu] of Ku) Xu.set(pu, Nu(mu(xu)?.root ?? xu, pu));
      const Vu = Ku.reduce(((uu, Ru) => {
          let [, yu] = Ru;
          return Math.max(uu, yu + 1)
        }), 0),
        ru = Array.from({
          length: Vu
        }, ((uu, Ru) => ({
          id: Ru + 1,
          rotation: 0
        }))),
        Bu = new Map,
        Su = new Map;
      for (const [xu, pu] of Ku) {
        const uu = mu(xu),
          Ru = Eu.get(pu);
        if (void 0 !== Ru) {
          const yu = Xu.get(Ru);
          Su.set(xu, {
            name: xu,
            texture: yu,
            kind: "frame"
          }), uu && !Su.has(uu.root) && Su.set(uu.root, {
            name: uu.root,
            texture: yu,
            kind: "frame"
          });
          continue
        }
        const yu = Xu.get(pu),
          Ku = uu?.root ?? xu;
        if (yu !== Ku && Su.set(Ku, {
            name: Ku,
            texture: yu,
            kind: "frame"
          }), uu) {
          const Ru = Qu.get(uu.root);
          ru[pu] = {
            id: Ru,
            rotation: uu.rotation
          }, Bu.set(yu, Ru), Su.set(xu, {
            name: xu,
            texture: yu,
            kind: "rotation"
          })
        } else Bu.set(yu, pu + 1)
      }
      for (const xu of Bu.keys()) Su.delete(xu);
      for (const [xu, pu] of yu) {
        const uu = Bu.get(pu);
        void 0 === uu || Bu.has(xu) || (Bu.set(xu, uu), Su.delete(xu))
      }
      return {
        named: [...Bu].sort(((uu, Ru) => {
          let [yu] = uu, [Eu] = Ru;
          return yu < Eu ? -1 : yu > Eu ? 1 : 0
        })).map((uu => {
          let [Ru, yu] = uu;
          return {
            name: Ru,
            id: yu
          }
        })),
        aliases: [...Su.values()],
        layers: ru
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);