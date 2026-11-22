export const id = 132;
export const ids = [132, 135, 136];
export const modules = {
  6436: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => bk
    });
    var Dk = ik(4959),
      fk = ik(1066);
    const Sk = {
      strict: "shaderPack:variantStrict",
      nonStrict: "shaderPack:variantNonStrict",
      terrain: "shaderPack:variantTerrain",
      liquid: "shaderPack:variantLiquid",
      model: "shaderPack:variantModel"
    };

    function bk(kk) {
      let {
        diagnostics: ek,
        more: ik = 0,
        t: bk
      } = kk;
      return (0, fk.jsxs)("ul", {
        className: "ShaderPackDiagnostics",
        children: [ek.map(((kk, ek) => {
          const ik = (0, Dk.g)(kk),
            rk = function(kk, ek) {
              const ik = (0, Dk.c)(null !== kk && void 0 !== kk ? kk : []);
              if (0 === ik.length) return null;
              return ik.map((kk => kk.map((kk => ek(Sk[kk]))).join(", "))).join("; ")
            }(kk.variants, bk);
          return (0, fk.jsxs)("li", {
            children: [ik && (0, fk.jsx)("span", {
              className: "ShaderPackDiagnosticLocation",
              children: ik
            }), kk.message, rk && (0, fk.jsx)("span", {
              className: "ShaderPackDiagnosticVariants",
              children: bk("shaderPack:onlyIn", {
                variants: rk
              })
            })]
          }, ek)
        })), ik > 0 && (0, fk.jsx)("li", {
          children: bk("shaderPack:moreErrors", {
            count: String(ik)
          })
        })]
      })
    }
  },
  6445: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Ck,
      i: () => Ak
    });
    var Dk = ik(60),
      fk = ik(1021),
      Sk = ik.n(fk),
      bk = ik(4888),
      rk = ik(1327),
      Pk = ik(1033),
      mk = ik(1172),
      Mk = ik(4965),
      Kk = ik(4961),
      xk = ik(3131);
    const nk = 33554432,
      Uk = 1024,
      Hk = 65536;
    async function wk(kk) {
      const ek = (0, xk.l)(kk);
      if (ek) {
        if (ek.size > nk) throw new xk.c("shaderPack:loadZipTooBig", {
          megabytes: String(nk / 1048576)
        });
        return async function(kk) {
          return lk((0, xk.g)(kk, Uk).map((ek => ({
            path: ek.path,
            read: ik => (0, xk.j)(kk, ek, ik)
          }))))
        }(new Uint8Array(await ek.arrayBuffer()))
      }
      return lk(kk.map((kk => ({
        path: (0, xk.i)(kk),
        read: ek => async function(kk, ek) {
          return kk.size > ek ? null : new Uint8Array(await kk.arrayBuffer())
        }(kk, ek)
      }))))
    }
    async function lk(kk) {
      const ek = function(kk) {
          const ek = kk.length > 0 ? kk[0].path.indexOf("/") : -1;
          if (-1 === ek) return kk;
          const ik = kk[0].path.slice(0, ek + 1);
          if (!kk.every((kk => kk.path.startsWith(ik)))) return kk;
          return kk.map((kk => ({
            ...kk,
            path: kk.path.slice(ik.length)
          })))
        }(kk.filter((kk => !(0, xk.e)(kk.path)))),
        ik = ek.filter((kk => "pack.json" === kk.path.toLowerCase()));
      if (0 === ik.length) throw new xk.c("shaderPack:loadNoManifest");
      if (ik.length > 1) throw new xk.c("shaderPack:loadDuplicateManifest");
      const Dk = ik[0],
        fk = await Dk.read(Hk);
      if (null === fk) throw new xk.c("shaderPack:loadManifestTooBig", {
        kilobytes: String(Hk / 1024)
      });
      const Sk = function(kk) {
          let ek;
          try {
            ek = JSON.parse(kk)
          } catch (rk) {
            throw new xk.c("shaderPack:loadManifestNotJson", {
              error: rk.message
            }, {
              cause: rk
            })
          }
          if ("object" !== typeof ek || null === ek || Array.isArray(ek)) throw new xk.c("shaderPack:loadManifestNotObject");
          const {
            apiVersion: ik,
            name: Dk,
            author: fk,
            description: Sk,
            keepCircleShadows: bk
          } = ek;
          if (void 0 === ik) throw new xk.c("shaderPack:loadNoApiVersion", {
            version: String(Kk.c)
          });
          if (!(0, Kk.g)(ik)) throw new xk.c("shaderPack:loadWrongApiVersion", {
            packVersion: JSON.stringify(ik),
            version: String(Kk.c)
          });
          if ("string" !== typeof Dk || "" === Dk.trim()) throw new xk.c("shaderPack:loadNoName");
          if (void 0 !== fk && null !== fk && "string" !== typeof fk) throw new xk.c("shaderPack:loadAuthorNotString");
          if (void 0 !== Sk && null !== Sk && "string" !== typeof Sk) throw new xk.c("shaderPack:loadDescriptionNotString");
          if (void 0 !== bk && "boolean" !== typeof bk) throw new xk.c("shaderPack:loadKeepCircleShadowsNotBoolean");
          return {
            apiVersion: ik,
            name: Dk,
            author: "string" === typeof fk ? fk : null,
            description: "string" === typeof Sk && "" !== Sk.trim() ? Sk : null,
            keepCircleShadows: !0 === bk
          }
        }(pk(fk, Dk.path)),
        bk = ek.filter((kk => kk.path.toLowerCase().endsWith(".wgsl"))).sort(((kk, ek) => (0, Mk.i)(kk.path, ek.path)));
      if (0 === bk.length) throw new xk.c("shaderPack:loadNoWgsl");
      if (bk.length > Mk.b) throw new xk.c("shaderPack:loadTooManyWgsl", {
        count: String(Mk.b)
      });
      const rk = bk.find(((kk, ek) => ek > 0 && kk.path === bk[ek - 1].path));
      if (rk) throw new xk.c("shaderPack:loadDuplicatePath", {
        path: rk.path
      });
      const Pk = [];
      let mk = Mk.c;
      for (const Kk of bk) {
        const kk = await Kk.read(mk);
        if (null === kk) throw new xk.c("shaderPack:loadSourceTooBig", {
          kilobytes: String(Mk.c / 1024)
        });
        mk -= kk.byteLength, Pk.push({
          path: Kk.path,
          source: pk(kk, Kk.path)
        })
      }
      return {
        manifest: Sk,
        files: Pk
      }
    }

    function pk(kk, ek) {
      try {
        return new TextDecoder("utf-8", {
          fatal: !0
        }).decode(kk)
      } catch (ik) {
        throw new xk.c("shaderPack:loadNotUtf8", {
          path: ek
        }, {
          cause: ik
        })
      }
    }
    var yk = ik(4959),
      Yk = ik(4970),
      Lk = ik(1066);

    function Ck(kk) {
      let {
        busy: ek,
        disabled: ik,
        onFiles: Dk
      } = kk;
      const {
        t: fk
      } = (0, mk.D)(), {
        getRootProps: Mk,
        getInputProps: Kk,
        isDragActive: xk,
        open: nk
      } = (0, bk.e)({
        onDrop: Dk,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: ik
      });
      return (0, Lk.jsxs)("div", {
        ...Mk({
          className: Sk()("ShaderPackDropZone", {
            ActiveDrag: xk,
            Disabled: ik
          })
        }),
        children: [(0, Lk.jsx)("input", {
          ...Kk({
            webkitdirectory: "true"
          })
        }), ek && (0, Lk.jsx)(rk.d, {}), !ek && (0, Lk.jsxs)(Lk.Fragment, {
          children: [(0, Lk.jsx)("div", {
            className: "ShaderPackDropZoneIcon",
            children: (0, Lk.jsx)(Pk.d, {
              name: "up-from-bracket"
            })
          }), (0, Lk.jsx)("div", {
            className: "ShaderPackDropZoneInstructions",
            children: fk((0, Yk.e)() ? "shaderPack:dropHere" : "shaderPack:chooseZipInstructions")
          }), (0, Lk.jsx)(Yk.d, {
            disabled: ik,
            openFolderPicker: nk,
            onFiles: Dk
          })]
        })]
      })
    }

    function Ak(kk) {
      const {
        t: ek
      } = (0, mk.D)(), [ik, fk] = (0, Dk.useState)(!1), [Sk, bk] = (0, Dk.useState)(null), rk = (0, Dk.useRef)(!1);
      return {
        loading: ik,
        error: Sk,
        setError: bk,
        onFiles: async function(ik) {
          if (!rk.current) {
            rk.current = !0, fk(!0), bk(null);
            try {
              await kk(await wk(ik))
            } catch (Dk) {
              Dk instanceof xk.c ? bk((0, yk.j)(ek, Dk.translationKey, Dk.params)) : (console.error("Failed to load the shader pack", Dk), bk(ek("shaderPack:unexpectedError")))
            } finally {
              rk.current = !1, fk(!1)
            }
          }
        }
      }
    }
  },
  6498: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      forgetShaderPackActiveHint: () => Fk,
      isOtherApiVersion: () => jk,
      isShaderPackActive: () => Yk,
      isShaderPackChangePending: () => Ak,
      markShaderPackChangePending: () => Ck,
      pageShaderPackValidationVersion: () => sk,
      reconcileStoredShaderPackHint: () => Vk,
      removeShaderPack: () => yk,
      replaceShaderPack: () => wk,
      saveShaderPack: () => Hk,
      shaderPackNeedsCheck: () => dk,
      storedPackOutcome: () => Lk,
      storedShaderPackFiles: () => xk,
      toStoredShaderPack: () => Kk
    });
    var Dk = ik(4965),
      fk = ik(4961),
      Sk = ik(38),
      bk = ik(3419),
      rk = ik(6505),
      Pk = ik(6477);
    const mk = "shaderPackChangePending";
    let Mk = null;

    function Kk(kk, ek, ik) {
      return {
        manifest: kk.manifest,
        files: (0, Dk.t)(kk.files),
        validation: ek,
        ...ik && {
          listing: ik
        }
      }
    }

    function xk(kk) {
      return Object.keys(kk.files).map((ek => ({
        path: ek,
        source: kk.files[ek]
      })))
    }
    let nk = Promise.resolve();

    function Uk(kk) {
      const ek = nk.then(kk);
      return nk = ek.catch((() => {})), ek
    }

    function Hk(kk, ek) {
      return Uk((() => lk(kk, ek)))
    }

    function wk(kk, ek, ik) {
      return Uk((async () => JSON.stringify(await (0, rk.f)()) === JSON.stringify(kk) && (null === ek ? (await pk(), !0) : lk(ek, ik))))
    }
    async function lk(kk, ek) {
      const ik = await Sk.e.setItem(rk.c, kk);
      return ik && uk(kk, ek), ik
    }
    async function pk() {
      await Sk.e.removeItem(rk.c), Sk.f.removeItem(bk.e)
    }

    function yk() {
      return Uk(pk)
    }

    function Yk(kk, ek) {
      return "active" === Lk(kk, ek).kind
    }

    function Lk(kk, ek) {
      var ik;
      return null === kk ? {
        kind: "none",
        reason: "nothingStored"
      } : jk(kk) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (ik = kk.validation) || void 0 === ik ? void 0 : ik.ok) || kk.validation.fromRecheck ? null === ek ? {
        kind: "none",
        reason: "noCompiler"
      } : dk(kk, ek) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : kk.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function Ck() {
      Sk.g.setItem(mk, performance.timeOrigin)
    }

    function Ak() {
      return Sk.g.getItem(mk) === performance.timeOrigin
    }

    function jk(kk) {
      return !(0, fk.g)(kk.manifest.apiVersion)
    }

    function sk(kk) {
      return Mk ??= kk.jF((0, Pk.shaderPackTextures)()), Mk
    }

    function dk(kk, ek) {
      var ik;
      return (null === (ik = kk.validation) || void 0 === ik ? void 0 : ik.headerVersion) !== sk(ek)
    }

    function Vk(kk) {
      return Uk((async () => {
        uk(await (0, rk.f)(!0), kk)
      }))
    }

    function Fk() {
      return Uk((async () => {
        Sk.f.removeItem(bk.e)
      }))
    }

    function uk(kk, ek) {
      Yk(kk, ek) ? Sk.f.setItem(bk.e, !0) : Sk.f.removeItem(bk.e)
    }
  },
  6477: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      loadShaderPackTextures: () => bk,
      shaderPackTextures: () => rk
    });
    var Dk = ik(4965);
    let fk = null,
      Sk = null;

    function bk() {
      return Sk ??= Promise.all([ik.e(72), ik.e(190)]).then((() => ik(40060))).then((kk => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: ek,
          textureNameToIndex: ik,
          textureAnimationData: Sk
        } = kk;
        return fk ??= (0, Dk.h)(ik, Sk, ek), fk
      })), Sk
    }

    function rk() {
      if (null === fk) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return fk
    }
  },
  6493: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Pk,
      c: () => rk
    });
    var Dk = ik(6498),
      fk = ik(6477),
      Sk = ik(115);
    const bk = 100;
    async function rk(kk, ek) {
      var ik;
      let Dk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (ik = navigator.gpu) && void 0 !== ik ? ik : null;
      const bk = kk.B5(ek, (0, fk.shaderPackTextures)());
      if (bk.errors.length > 0) return mk(kk, bk.errors, bk.offInStrict);
      const rk = await async function(kk) {
        if (!kk) return null;
        try {
          const ek = await (0, Sk.t)(kk);
          return ek ? await ek.requestDevice() : null
        } catch (ek) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", ek), null
        }
      }(Dk);
      if (!rk) return null;
      let Pk = !1;
      rk.lost.then((() => {
        Pk = !0
      }));
      try {
        const ek = await Promise.all(bk.validationModules.map((ek => async function(kk, ek, ik) {
          ek.pushErrorScope("validation");
          const Dk = ek.createShaderModule({
              code: ik.code
            }),
            fk = ek.popErrorScope(),
            {
              messages: Sk
            } = await Dk.getCompilationInfo(),
            bk = Sk.filter((kk => "error" === kk.type)).map((ek => kk.mapValidationMessage(ik, ek))),
            rk = await fk;
          rk && 0 === bk.length && bk.push({
            file: null,
            line: 0,
            message: rk.message,
            variants: [ik.key]
          });
          return bk
        }(kk, rk, ek))));
        return Pk ? null : mk(kk, kk.uik(ek.flat()), bk.offInStrict)
      } catch (Mk) {
        return console.error("Couldn't validate the shader pack on WebGPU.", Mk), null
      } finally {
        rk.destroy()
      }
    }
    async function Pk(kk, ek) {
      var ik;
      if (!(0, Dk.shaderPackNeedsCheck)(kk, ek) || (0, Dk.isOtherApiVersion)(kk)) return kk;
      const fk = await rk(ek, (0, Dk.storedShaderPackFiles)(kk));
      if (!fk) return kk;
      const Sk = !1 === (null === (ik = kk.validation) || void 0 === ik ? void 0 : ik.ok) && !kk.validation.fromRecheck,
        bk = {
          ...kk,
          validation: Sk ? fk : {
            ...fk,
            fromRecheck: !0
          }
        };
      return await (0, Dk.replaceShaderPack)(kk, bk, ek) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), bk
    }

    function mk(kk, ek, ik) {
      return {
        headerVersion: (0, Dk.pageShaderPackValidationVersion)(kk),
        ok: 0 === ek.length,
        errors: ek.slice(0, bk),
        moreErrors: Math.max(0, ek.length - bk),
        offInStrict: ik
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);