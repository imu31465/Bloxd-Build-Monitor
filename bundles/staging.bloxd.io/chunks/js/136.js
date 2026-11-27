export const id = 136;
export const ids = [136, 139, 159, 160];
export const modules = {
  6005: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Zr.j,
      e: () => Wr,
      i: () => Zr.r
    });
    var Zr = Qr(6007);
    const Wr = [!1, !0].flatMap((rr => ["terrain", "liquid", "model"].map((Sr => ({
      strict: rr,
      program: Sr
    })))))
  },
  42339: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => xr,
      installListedShaderPack: () => pr
    });
    var Zr = Qr(7533),
      Wr = Qr(6007),
      ar = Qr(1262),
      jr = Qr(7575),
      Ir = Qr(6005),
      fr = Qr(7615),
      Er = Qr(7610);
    async function pr(rr) {
      const Sr = await (0, jr.loadPageShaderPackCompiler)();
      if (null === Sr) return {
        kind: "failed",
        reason: "compiler"
      };
      const Qr = await xr(rr, Sr);
      return "failed" === Qr.kind ? Qr : await (0, fr.saveShaderPack)(Qr.stored, Sr) ? ((0, fr.markShaderPackChangePending)(), Qr) : {
        kind: "failed",
        reason: "save"
      }
    }
    async function xr(rr, Sr) {
      const Qr = await async function(rr) {
        let {
          packId: Sr,
          sourceHash: Qr
        } = rr;
        try {
          const rr = await fetch(`${ar.clientSideServerUrls.s3Url}/${(0,Zr.J)(Sr,Qr)}`, {
            headers: {
              Accept: "application/json"
            }
          });
          if (!rr.ok) return console.error(`Failed to download shader pack ${Sr} (${rr.status})`), null;
          const Wr = await rr.json();
          return "object" !== typeof Wr || null === Wr ? (console.error(`Shader pack ${Sr}'s source isn't an object`), null) : Wr
        } catch (Wr) {
          return console.error(`Failed to download shader pack ${Sr}`, Wr), null
        }
      }(rr);
      if (null === Qr) return {
        kind: "failed",
        reason: "download"
      };
      if (!(0, Ir.i)(Qr.apiVersion)) return {
        kind: "failed",
        reason: "apiVersion"
      };
      const jr = (0, Wr.v)(Qr.files);
      if ("string" === typeof jr) return console.error(`A listed shader pack breaks the pack rules: ${jr}`), {
        kind: "failed",
        reason: "invalid"
      };
      const pr = await (0, Er.e)(Sr, jr);
      if (!1 === (null === pr || void 0 === pr ? void 0 : pr.ok)) return {
        kind: "failed",
        reason: "errors"
      };
      const xr = {
        manifest: {
          apiVersion: Qr.apiVersion,
          name: rr.name,
          author: rr.ownerName,
          description: rr.description || null,
          keepCircleShadows: !0 === Qr.keepCircleShadows
        },
        files: jr
      };
      return {
        kind: "loaded",
        stored: (0, fr.toStoredShaderPack)(xr, pr, {
          packId: rr.packId,
          sourceHash: rr.sourceHash
        })
      }
    }
  },
  7615: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      forgetShaderPackActiveHint: () => lr,
      isOtherApiVersion: () => Tr,
      isShaderPackActive: () => er,
      isShaderPackChangePending: () => Br,
      markShaderPackChangePending: () => yr,
      pageShaderPackValidationVersion: () => vr,
      reconcileStoredShaderPackHint: () => Lr,
      removeShaderPack: () => nr,
      replaceShaderPack: () => hr,
      saveShaderPack: () => tr,
      shaderPackNeedsCheck: () => Or,
      storedPackOutcome: () => Kr,
      storedShaderPackFiles: () => mr,
      toStoredShaderPack: () => xr
    });
    var Zr = Qr(6007),
      Wr = Qr(6005),
      ar = Qr(43),
      jr = Qr(4690),
      Ir = Qr(7617),
      fr = Qr(7588);
    const Er = "shaderPackChangePending";
    let pr = null;

    function xr(rr, Sr, Qr) {
      return {
        manifest: rr.manifest,
        files: (0, Zr.w)(rr.files),
        validation: Sr,
        ...Qr && {
          listing: Qr
        }
      }
    }

    function mr(rr) {
      return Object.keys(rr.files).map((Sr => ({
        path: Sr,
        source: rr.files[Sr]
      })))
    }
    let Nr = Promise.resolve();

    function Ur(rr) {
      const Sr = Nr.then(rr);
      return Nr = Sr.catch((() => {})), Sr
    }

    function tr(rr, Sr) {
      return Ur((() => zr(rr, Sr)))
    }

    function hr(rr, Sr, Qr) {
      return Ur((async () => JSON.stringify(await (0, Ir.e)()) === JSON.stringify(rr) && (null === Sr ? (await Yr(), !0) : zr(Sr, Qr))))
    }
    async function zr(rr, Sr) {
      const Qr = await ar.h.setItem(Ir.b, rr);
      return Qr && Xr(rr, Sr), Qr
    }
    async function Yr() {
      await ar.h.removeItem(Ir.b), ar.j.removeItem(jr.b)
    }

    function nr() {
      return Ur(Yr)
    }

    function er(rr, Sr) {
      return "active" === Kr(rr, Sr).kind
    }

    function Kr(rr, Sr) {
      var Qr;
      return null === rr ? {
        kind: "none",
        reason: "nothingStored"
      } : Tr(rr) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (Qr = rr.validation) || void 0 === Qr ? void 0 : Qr.ok) || rr.validation.fromRecheck ? null === Sr ? {
        kind: "none",
        reason: "noCompiler"
      } : Or(rr, Sr) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : rr.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function yr() {
      ar.n.setItem(Er, performance.timeOrigin)
    }

    function Br() {
      return ar.n.getItem(Er) === performance.timeOrigin
    }

    function Tr(rr) {
      return !(0, Wr.i)(rr.manifest.apiVersion)
    }

    function vr(rr) {
      return pr ??= rr.rC((0, fr.shaderPackTextures)()), pr
    }

    function Or(rr, Sr) {
      var Qr;
      return (null === (Qr = rr.validation) || void 0 === Qr ? void 0 : Qr.headerVersion) !== vr(Sr)
    }

    function Lr(rr) {
      return Ur((async () => {
        Xr(await (0, Ir.e)(!0), rr)
      }))
    }

    function lr() {
      return Ur((async () => {
        ar.j.removeItem(jr.b)
      }))
    }

    function Xr(rr, Sr) {
      er(rr, Sr) ? ar.j.setItem(jr.b, !0) : ar.j.removeItem(jr.b)
    }
  },
  7588: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      loadShaderPackTextures: () => jr,
      shaderPackTextures: () => Ir
    });
    var Zr = Qr(6007);
    let Wr = null,
      ar = null;

    function jr() {
      return ar ??= Promise.all([Qr.e(85), Qr.e(126)]).then((() => Qr(42330))).then((rr => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: Sr,
          textureNameToIndex: Qr,
          textureAnimationData: ar
        } = rr;
        return Wr ??= (0, Zr.k)(Qr, ar, Sr), Wr
      })), ar
    }

    function Ir() {
      if (null === Wr) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return Wr
    }
  },
  7610: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => fr,
      e: () => Ir
    });
    var Zr = Qr(7615),
      Wr = Qr(7588),
      ar = Qr(127);
    const jr = 100;
    async function Ir(rr, Sr) {
      var Qr;
      let Zr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (Qr = navigator.gpu) && void 0 !== Qr ? Qr : null;
      const jr = rr.Vrr(Sr, (0, Wr.shaderPackTextures)());
      if (jr.errors.length > 0) return Er(rr, jr.errors, jr.offInStrict);
      const Ir = await async function(rr) {
        if (!rr) return null;
        try {
          const Sr = await (0, ar.t)(rr);
          return Sr ? await Sr.requestDevice() : null
        } catch (Sr) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", Sr), null
        }
      }(Zr);
      if (!Ir) return null;
      let fr = !1;
      Ir.lost.then((() => {
        fr = !0
      }));
      try {
        const Sr = await Promise.all(jr.validationModules.map((Sr => async function(rr, Sr, Qr) {
          Sr.pushErrorScope("validation");
          const Zr = Sr.createShaderModule({
              code: Qr.code
            }),
            Wr = Sr.popErrorScope(),
            {
              messages: ar
            } = await Zr.getCompilationInfo(),
            jr = ar.filter((rr => "error" === rr.type)).map((Sr => rr.mapValidationMessage(Qr, Sr))),
            Ir = await Wr;
          Ir && 0 === jr.length && jr.push({
            file: null,
            line: 0,
            message: Ir.message,
            variants: [Qr.key]
          });
          return jr
        }(rr, Ir, Sr))));
        return fr ? null : Er(rr, rr.RZr(Sr.flat()), jr.offInStrict)
      } catch (pr) {
        return console.error("Couldn't validate the shader pack on WebGPU.", pr), null
      } finally {
        Ir.destroy()
      }
    }
    async function fr(rr, Sr) {
      var Qr;
      if (!(0, Zr.shaderPackNeedsCheck)(rr, Sr) || (0, Zr.isOtherApiVersion)(rr)) return rr;
      const Wr = await Ir(Sr, (0, Zr.storedShaderPackFiles)(rr));
      if (!Wr) return rr;
      const ar = !1 === (null === (Qr = rr.validation) || void 0 === Qr ? void 0 : Qr.ok) && !rr.validation.fromRecheck,
        jr = {
          ...rr,
          validation: ar ? Wr : {
            ...Wr,
            fromRecheck: !0
          }
        };
      return await (0, Zr.replaceShaderPack)(rr, jr, Sr) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), jr
    }

    function Er(rr, Sr, Qr) {
      return {
        headerVersion: (0, Zr.pageShaderPackValidationVersion)(rr),
        ok: 0 === Sr.length,
        errors: Sr.slice(0, jr),
        moreErrors: Math.max(0, Sr.length - jr),
        offInStrict: Qr
      }
    }
  },
  6007: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Ir,
      g: () => jr,
      j: () => Zr,
      k: () => tr,
      n: () => xr,
      r: () => Wr,
      s: () => ar,
      v: () => Er,
      w: () => pr,
      z: () => mr
    });
    const Zr = 5;

    function Wr(rr) {
      return rr === Zr
    }

    function ar(rr) {
      return [...rr.features]
    }
    const jr = 262144,
      Ir = 256,
      fr = 256;

    function Er(rr) {
      if ("object" !== typeof rr || null === rr || Array.isArray(rr)) return "The pack has no files.";
      const Sr = [];
      for (const [Qr, Zr] of Object.entries(rr)) {
        if ("string" !== typeof Zr) return `${Qr} isn't text.`;
        Sr.push({
          path: Qr,
          source: Zr
        })
      }
      return Sr.sort(((rr, Sr) => xr(rr.path, Sr.path))),
        function(rr) {
          if (0 === rr.length) return "The pack has no .wgsl files.";
          if (rr.length > Ir) return `The pack has more than ${Ir} .wgsl files.`;
          const Sr = new Set;
          for (const {
              path: Qr
            }
            of rr) {
            const rr = Nr(Qr);
            if (null !== rr) return rr;
            if (Sr.has(Qr)) return `The pack has two files at ${Qr}.`;
            Sr.add(Qr)
          }
          return mr(rr) > jr ? `The pack's .wgsl files are over ${jr/1024} KB in total.` : null
        }(Sr) ?? Sr
    }

    function pr(rr) {
      const Sr = {};
      for (const Qr of rr) Sr[Qr.path] = Qr.source;
      return Sr
    }

    function xr(rr, Sr) {
      return rr < Sr ? -1 : rr > Sr ? 1 : 0
    }

    function mr(rr) {
      const Sr = new TextEncoder;
      let Qr = 0;
      for (const {
          source: Zr
        }
        of rr) Qr += Sr.encode(Zr).byteLength;
      return Qr
    }

    function Nr(rr) {
      if (!rr.toLowerCase().endsWith(".wgsl")) return `${rr} isn't a .wgsl file.`;
      if (rr.length > fr) return `A file path is over ${fr} characters.`;
      if (rr.includes("\\") || /[\u0000-\u001f]/.test(rr)) return `${rr} isn't a valid file path.`;
      return rr.split("/").some((rr => "" === rr || "." === rr || ".." === rr)) ? `${rr} isn't a valid file path.` : null
    }
    const Ur = /^(.*)\[rot\[([1-4])$/;

    function tr(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const Zr = new Map;
      Sr.forEach(((rr, Sr) => {
        let {
          numAnimStates: Qr,
          animStartIdx: Wr
        } = rr;
        for (let ar = 1; ar < Qr; ar++) Zr.set(Wr + ar - 1, Sr)
      }));
      const Wr = Object.entries(rr),
        ar = new Map;
      for (const [tr, hr] of Wr) {
        const rr = Ur.exec(tr);
        "1" === rr?.[2] && ar.set(rr[1], hr + 1)
      }
      const jr = rr => {
          const Sr = Ur.exec(rr);
          return Sr && ar.has(Sr[1]) ? {
            root: Sr[1],
            rotation: Number(Sr[2]) - 1
          } : null
        },
        Ir = new Set(Wr.map((rr => {
          let [Sr] = rr;
          return jr(Sr)?.root ?? Sr
        }))),
        fr = (rr, Qr) => {
          const Zr = rr.replace(/_?0$/, "");
          return (Sr[Qr]?.numAnimStates ?? 0) > 1 && !Ir.has(Zr) ? Zr : rr
        },
        Er = new Map;
      for (const [Ur, tr] of Wr) Er.set(tr, fr(jr(Ur)?.root ?? Ur, tr));
      const pr = Wr.reduce(((rr, Sr) => {
          let [, Qr] = Sr;
          return Math.max(rr, Qr + 1)
        }), 0),
        xr = Array.from({
          length: pr
        }, ((rr, Sr) => ({
          id: Sr + 1,
          rotation: 0
        }))),
        mr = new Map,
        Nr = new Map;
      for (const [Ur, tr] of Wr) {
        const rr = jr(Ur),
          Sr = Zr.get(tr);
        if (void 0 !== Sr) {
          const Qr = Er.get(Sr);
          Nr.set(Ur, {
            name: Ur,
            texture: Qr,
            kind: "frame"
          }), rr && !Nr.has(rr.root) && Nr.set(rr.root, {
            name: rr.root,
            texture: Qr,
            kind: "frame"
          });
          continue
        }
        const Qr = Er.get(tr),
          Wr = rr?.root ?? Ur;
        if (Qr !== Wr && Nr.set(Wr, {
            name: Wr,
            texture: Qr,
            kind: "frame"
          }), rr) {
          const Sr = ar.get(rr.root);
          xr[tr] = {
            id: Sr,
            rotation: rr.rotation
          }, mr.set(Qr, Sr), Nr.set(Ur, {
            name: Ur,
            texture: Qr,
            kind: "rotation"
          })
        } else mr.set(Qr, tr + 1)
      }
      for (const Ur of mr.keys()) Nr.delete(Ur);
      for (const [Ur, tr] of Qr) {
        const rr = mr.get(tr);
        void 0 === rr || mr.has(Ur) || (mr.set(Ur, rr), Nr.delete(Ur))
      }
      return {
        named: [...mr].sort(((rr, Sr) => {
          let [Qr] = rr, [Zr] = Sr;
          return Qr < Zr ? -1 : Qr > Zr ? 1 : 0
        })).map((rr => {
          let [Sr, Qr] = rr;
          return {
            name: Sr,
            id: Qr
          }
        })),
        aliases: [...Nr.values()],
        layers: xr
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);