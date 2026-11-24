export const id = 132;
export const ids = [132, 136, 137];
export const modules = {
  6589: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => yk
    });
    var Xk = Ik(5038),
      Tk = Ik(1096);
    const ik = {
      strict: "shaderPack:variantStrict",
      nonStrict: "shaderPack:variantNonStrict",
      terrain: "shaderPack:variantTerrain",
      liquid: "shaderPack:variantLiquid",
      model: "shaderPack:variantModel"
    };

    function yk(kk) {
      let {
        diagnostics: Fk,
        more: Ik = 0,
        t: yk
      } = kk;
      return (0, Tk.jsxs)("ul", {
        className: "ShaderPackDiagnostics",
        children: [Fk.map(((kk, Fk) => {
          const Ik = (0, Xk.h)(kk),
            lk = function(kk, Fk) {
              const Ik = (0, Xk.e)(null !== kk && void 0 !== kk ? kk : []);
              if (0 === Ik.length) return null;
              return Ik.map((kk => kk.map((kk => Fk(ik[kk]))).join(", "))).join("; ")
            }(kk.variants, yk);
          return (0, Tk.jsxs)("li", {
            children: [Ik && (0, Tk.jsx)("span", {
              className: "ShaderPackDiagnosticLocation",
              children: Ik
            }), kk.message, lk && (0, Tk.jsx)("span", {
              className: "ShaderPackDiagnosticVariants",
              children: yk("shaderPack:onlyIn", {
                variants: lk
              })
            })]
          }, Fk)
        })), Ik > 0 && (0, Tk.jsx)("li", {
          children: yk("shaderPack:moreErrors", {
            count: String(Ik)
          })
        })]
      })
    }
  },
  6591: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => sk,
      h: () => Vk
    });
    var Xk = Ik(58),
      Tk = Ik(1055),
      ik = Ik.n(Tk),
      yk = Ik(4944),
      lk = Ik(1318),
      ak = Ik(1066),
      qk = Ik(1179),
      Lk = Ik(5053),
      tk = Ik(5047),
      Zk = Ik(3103);
    const jk = 33554432,
      ek = 1024,
      wk = 65536;
    async function Hk(kk) {
      const Fk = (0, Zk.o)(kk);
      if (Fk) {
        if (Fk.size > jk) throw new Zk.e("shaderPack:loadZipTooBig", {
          megabytes: String(jk / 1048576)
        });
        return async function(kk) {
          return Jk((0, Zk.i)(kk, ek).map((Fk => ({
            path: Fk.path,
            read: Ik => (0, Zk.n)(kk, Fk, Ik)
          }))))
        }(new Uint8Array(await Fk.arrayBuffer()))
      }
      return Jk(kk.map((kk => ({
        path: (0, Zk.m)(kk),
        read: Fk => async function(kk, Fk) {
          return kk.size > Fk ? null : new Uint8Array(await kk.arrayBuffer())
        }(kk, Fk)
      }))))
    }
    async function Jk(kk) {
      const Fk = function(kk) {
          const Fk = kk.length > 0 ? kk[0].path.indexOf("/") : -1;
          if (-1 === Fk) return kk;
          const Ik = kk[0].path.slice(0, Fk + 1);
          if (!kk.every((kk => kk.path.startsWith(Ik)))) return kk;
          return kk.map((kk => ({
            ...kk,
            path: kk.path.slice(Ik.length)
          })))
        }(kk.filter((kk => !(0, Zk.g)(kk.path)))),
        Ik = Fk.filter((kk => "pack.json" === kk.path.toLowerCase()));
      if (0 === Ik.length) throw new Zk.e("shaderPack:loadNoManifest");
      if (Ik.length > 1) throw new Zk.e("shaderPack:loadDuplicateManifest");
      const Xk = Ik[0],
        Tk = await Xk.read(wk);
      if (null === Tk) throw new Zk.e("shaderPack:loadManifestTooBig", {
        kilobytes: String(wk / 1024)
      });
      const ik = function(kk) {
          let Fk;
          try {
            Fk = JSON.parse(kk)
          } catch (lk) {
            throw new Zk.e("shaderPack:loadManifestNotJson", {
              error: lk.message
            }, {
              cause: lk
            })
          }
          if ("object" !== typeof Fk || null === Fk || Array.isArray(Fk)) throw new Zk.e("shaderPack:loadManifestNotObject");
          const {
            apiVersion: Ik,
            name: Xk,
            author: Tk,
            description: ik,
            keepCircleShadows: yk
          } = Fk;
          if (void 0 === Ik) throw new Zk.e("shaderPack:loadNoApiVersion", {
            version: String(tk.b)
          });
          if (!(0, tk.i)(Ik)) throw new Zk.e("shaderPack:loadWrongApiVersion", {
            packVersion: JSON.stringify(Ik),
            version: String(tk.b)
          });
          if ("string" !== typeof Xk || "" === Xk.trim()) throw new Zk.e("shaderPack:loadNoName");
          if (void 0 !== Tk && null !== Tk && "string" !== typeof Tk) throw new Zk.e("shaderPack:loadAuthorNotString");
          if (void 0 !== ik && null !== ik && "string" !== typeof ik) throw new Zk.e("shaderPack:loadDescriptionNotString");
          if (void 0 !== yk && "boolean" !== typeof yk) throw new Zk.e("shaderPack:loadKeepCircleShadowsNotBoolean");
          return {
            apiVersion: Ik,
            name: Xk,
            author: "string" === typeof Tk ? Tk : null,
            description: "string" === typeof ik && "" !== ik.trim() ? ik : null,
            keepCircleShadows: !0 === yk
          }
        }(xk(Tk, Xk.path)),
        yk = Fk.filter((kk => kk.path.toLowerCase().endsWith(".wgsl"))).sort(((kk, Fk) => (0, Lk.k)(kk.path, Fk.path)));
      if (0 === yk.length) throw new Zk.e("shaderPack:loadNoWgsl");
      if (yk.length > Lk.b) throw new Zk.e("shaderPack:loadTooManyWgsl", {
        count: String(Lk.b)
      });
      const lk = yk.find(((kk, Fk) => Fk > 0 && kk.path === yk[Fk - 1].path));
      if (lk) throw new Zk.e("shaderPack:loadDuplicatePath", {
        path: lk.path
      });
      const ak = [];
      let qk = Lk.c;
      for (const tk of yk) {
        const kk = await tk.read(qk);
        if (null === kk) throw new Zk.e("shaderPack:loadSourceTooBig", {
          kilobytes: String(Lk.c / 1024)
        });
        qk -= kk.byteLength, ak.push({
          path: tk.path,
          source: xk(kk, tk.path)
        })
      }
      return {
        manifest: ik,
        files: ak
      }
    }

    function xk(kk, Fk) {
      try {
        return new TextDecoder("utf-8", {
          fatal: !0
        }).decode(kk)
      } catch (Ik) {
        throw new Zk.e("shaderPack:loadNotUtf8", {
          path: Fk
        }, {
          cause: Ik
        })
      }
    }
    var Pk = Ik(5038),
      Kk = Ik(5060),
      Qk = Ik(1096);

    function sk(kk) {
      let {
        busy: Fk,
        disabled: Ik,
        onFiles: Xk
      } = kk;
      const {
        t: Tk
      } = (0, qk.y)(), {
        getRootProps: Lk,
        getInputProps: tk,
        isDragActive: Zk,
        open: jk
      } = (0, yk.c)({
        onDrop: Xk,
        noClick: !0,
        noKeyboard: !0,
        useFsAccessApi: !1,
        disabled: Ik
      });
      return (0, Qk.jsxs)("div", {
        ...Lk({
          className: ik()("ShaderPackDropZone", {
            ActiveDrag: Zk,
            Disabled: Ik
          })
        }),
        children: [(0, Qk.jsx)("input", {
          ...tk({
            webkitdirectory: "true"
          })
        }), Fk && (0, Qk.jsx)(lk.c, {}), !Fk && (0, Qk.jsxs)(Qk.Fragment, {
          children: [(0, Qk.jsx)("div", {
            className: "ShaderPackDropZoneIcon",
            children: (0, Qk.jsx)(ak.e, {
              name: "up-from-bracket"
            })
          }), (0, Qk.jsx)("div", {
            className: "ShaderPackDropZoneInstructions",
            children: Tk((0, Kk.d)() ? "shaderPack:dropHere" : "shaderPack:chooseZipInstructions")
          }), (0, Qk.jsx)(Kk.c, {
            disabled: Ik,
            openFolderPicker: jk,
            onFiles: Xk
          })]
        })]
      })
    }

    function Vk(kk) {
      const {
        t: Fk
      } = (0, qk.y)(), [Ik, Tk] = (0, Xk.useState)(!1), [ik, yk] = (0, Xk.useState)(null), lk = (0, Xk.useRef)(!1);
      return {
        loading: Ik,
        error: ik,
        setError: yk,
        onFiles: async function(Ik) {
          if (!lk.current) {
            lk.current = !0, Tk(!0), yk(null);
            try {
              await kk(await Hk(Ik))
            } catch (Xk) {
              Xk instanceof Zk.e ? yk((0, Pk.k)(Fk, Xk.translationKey, Xk.params)) : (console.error("Failed to load the shader pack", Xk), yk(Fk("shaderPack:unexpectedError")))
            } finally {
              lk.current = !1, Tk(!1)
            }
          }
        }
      }
    }
  },
  6639: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      forgetShaderPackActiveHint: () => Ok,
      isOtherApiVersion: () => zk,
      isShaderPackActive: () => Kk,
      isShaderPackChangePending: () => Vk,
      markShaderPackChangePending: () => sk,
      pageShaderPackValidationVersion: () => Sk,
      reconcileStoredShaderPackHint: () => Ek,
      removeShaderPack: () => Pk,
      replaceShaderPack: () => Hk,
      saveShaderPack: () => wk,
      shaderPackNeedsCheck: () => vk,
      storedPackOutcome: () => Qk,
      storedShaderPackFiles: () => Zk,
      toStoredShaderPack: () => tk
    });
    var Xk = Ik(5053),
      Tk = Ik(5047),
      ik = Ik(41),
      yk = Ik(3396),
      lk = Ik(6644),
      ak = Ik(6611);
    const qk = "shaderPackChangePending";
    let Lk = null;

    function tk(kk, Fk, Ik) {
      return {
        manifest: kk.manifest,
        files: (0, Xk.w)(kk.files),
        validation: Fk,
        ...Ik && {
          listing: Ik
        }
      }
    }

    function Zk(kk) {
      return Object.keys(kk.files).map((Fk => ({
        path: Fk,
        source: kk.files[Fk]
      })))
    }
    let jk = Promise.resolve();

    function ek(kk) {
      const Fk = jk.then(kk);
      return jk = Fk.catch((() => {})), Fk
    }

    function wk(kk, Fk) {
      return ek((() => Jk(kk, Fk)))
    }

    function Hk(kk, Fk, Ik) {
      return ek((async () => JSON.stringify(await (0, lk.i)()) === JSON.stringify(kk) && (null === Fk ? (await xk(), !0) : Jk(Fk, Ik))))
    }
    async function Jk(kk, Fk) {
      const Ik = await ik.g.setItem(lk.e, kk);
      return Ik && nk(kk, Fk), Ik
    }
    async function xk() {
      await ik.g.removeItem(lk.e), ik.j.removeItem(yk.e)
    }

    function Pk() {
      return ek(xk)
    }

    function Kk(kk, Fk) {
      return "active" === Qk(kk, Fk).kind
    }

    function Qk(kk, Fk) {
      var Ik;
      return null === kk ? {
        kind: "none",
        reason: "nothingStored"
      } : zk(kk) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (Ik = kk.validation) || void 0 === Ik ? void 0 : Ik.ok) || kk.validation.fromRecheck ? null === Fk ? {
        kind: "none",
        reason: "noCompiler"
      } : vk(kk, Fk) ? {
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

    function sk() {
      ik.m.setItem(qk, performance.timeOrigin)
    }

    function Vk() {
      return ik.m.getItem(qk) === performance.timeOrigin
    }

    function zk(kk) {
      return !(0, Tk.i)(kk.manifest.apiVersion)
    }

    function Sk(kk) {
      return Lk ??= kk.nG((0, ak.shaderPackTextures)()), Lk
    }

    function vk(kk, Fk) {
      var Ik;
      return (null === (Ik = kk.validation) || void 0 === Ik ? void 0 : Ik.headerVersion) !== Sk(Fk)
    }

    function Ek(kk) {
      return ek((async () => {
        nk(await (0, lk.i)(!0), kk)
      }))
    }

    function Ok() {
      return ek((async () => {
        ik.j.removeItem(yk.e)
      }))
    }

    function nk(kk, Fk) {
      Kk(kk, Fk) ? ik.j.setItem(yk.e, !0) : ik.j.removeItem(yk.e)
    }
  },
  6611: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      loadShaderPackTextures: () => yk,
      shaderPackTextures: () => lk
    });
    var Xk = Ik(5053);
    let Tk = null,
      ik = null;

    function yk() {
      return ik ??= Promise.all([Ik.e(72), Ik.e(188)]).then((() => Ik(40500))).then((kk => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: Fk,
          textureNameToIndex: Ik,
          textureAnimationData: ik
        } = kk;
        return Tk ??= (0, Xk.g)(Ik, ik, Fk), Tk
      })), ik
    }

    function lk() {
      if (null === Tk) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return Tk
    }
  },
  6631: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => ak,
      f: () => lk
    });
    var Xk = Ik(6639),
      Tk = Ik(6611),
      ik = Ik(113);
    const yk = 100;
    async function lk(kk, Fk) {
      var Ik;
      let Xk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (Ik = navigator.gpu) && void 0 !== Ik ? Ik : null;
      const yk = kk.N7(Fk, (0, Tk.shaderPackTextures)());
      if (yk.errors.length > 0) return qk(kk, yk.errors, yk.offInStrict);
      const lk = await async function(kk) {
        if (!kk) return null;
        try {
          const Fk = await (0, ik.t)(kk);
          return Fk ? await Fk.requestDevice() : null
        } catch (Fk) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", Fk), null
        }
      }(Xk);
      if (!lk) return null;
      let ak = !1;
      lk.lost.then((() => {
        ak = !0
      }));
      try {
        const Fk = await Promise.all(yk.validationModules.map((Fk => async function(kk, Fk, Ik) {
          Fk.pushErrorScope("validation");
          const Xk = Fk.createShaderModule({
              code: Ik.code
            }),
            Tk = Fk.popErrorScope(),
            {
              messages: ik
            } = await Xk.getCompilationInfo(),
            yk = ik.filter((kk => "error" === kk.type)).map((Fk => kk.mapValidationMessage(Ik, Fk))),
            lk = await Tk;
          lk && 0 === yk.length && yk.push({
            file: null,
            line: 0,
            message: lk.message,
            variants: [Ik.key]
          });
          return yk
        }(kk, lk, Fk))));
        return ak ? null : qk(kk, kk.YIk(Fk.flat()), yk.offInStrict)
      } catch (Lk) {
        return console.error("Couldn't validate the shader pack on WebGPU.", Lk), null
      } finally {
        lk.destroy()
      }
    }
    async function ak(kk, Fk) {
      var Ik;
      if (!(0, Xk.shaderPackNeedsCheck)(kk, Fk) || (0, Xk.isOtherApiVersion)(kk)) return kk;
      const Tk = await lk(Fk, (0, Xk.storedShaderPackFiles)(kk));
      if (!Tk) return kk;
      const ik = !1 === (null === (Ik = kk.validation) || void 0 === Ik ? void 0 : Ik.ok) && !kk.validation.fromRecheck,
        yk = {
          ...kk,
          validation: ik ? Tk : {
            ...Tk,
            fromRecheck: !0
          }
        };
      return await (0, Xk.replaceShaderPack)(kk, yk, Fk) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), yk
    }

    function qk(kk, Fk, Ik) {
      return {
        headerVersion: (0, Xk.pageShaderPackValidationVersion)(kk),
        ok: 0 === Fk.length,
        errors: Fk.slice(0, yk),
        moreErrors: Math.max(0, Fk.length - yk),
        offInStrict: Ik
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);