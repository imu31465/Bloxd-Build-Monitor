export const id = 128;
export const ids = [128, 131];
export const modules = {
  6482: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Yq.h,
      c: () => lq,
      e: () => Yq.o
    });
    var Yq = gq(6458);
    const lq = [!1, !0].flatMap((qq => ["terrain", "liquid", "model"].map((Eq => ({
      strict: qq,
      program: Eq
    })))))
  },
  6531: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      forgetShaderPackActiveHint: () => bq,
      isOtherApiVersion: () => rq,
      isShaderPackActive: () => Pq,
      isShaderPackChangePending: () => tq,
      markShaderPackChangePending: () => yq,
      pageShaderPackValidationVersion: () => vq,
      reconcileStoredShaderPackHint: () => nq,
      removeShaderPack: () => oq,
      replaceShaderPack: () => dq,
      saveShaderPack: () => Vq,
      shaderPackNeedsCheck: () => hq,
      storedPackOutcome: () => Qq,
      storedShaderPackFiles: () => Wq,
      toStoredShaderPack: () => Bq
    });
    var Yq = gq(6458),
      lq = gq(6482),
      Oq = gq(38),
      mq = gq(3324),
      xq = gq(6535),
      Aq = gq(6514);
    const cq = "shaderPackChangePending";
    let uq = null;

    function Bq(qq, Eq, gq) {
      return {
        manifest: qq.manifest,
        files: (0, Yq.w)(qq.files),
        validation: Eq,
        ...gq && {
          listing: gq
        }
      }
    }

    function Wq(qq) {
      return Object.keys(qq.files).map((Eq => ({
        path: Eq,
        source: qq.files[Eq]
      })))
    }
    let Nq = Promise.resolve();

    function aq(qq) {
      const Eq = Nq.then(qq);
      return Nq = Eq.catch((() => {})), Eq
    }

    function Vq(qq, Eq) {
      return aq((() => jq(qq, Eq)))
    }

    function dq(qq, Eq, gq) {
      return aq((async () => JSON.stringify(await (0, xq.d)()) === JSON.stringify(qq) && (null === Eq ? (await Hq(), !0) : jq(Eq, gq))))
    }
    async function jq(qq, Eq) {
      const gq = await Oq.f.setItem(xq.b, qq);
      return gq && iq(qq, Eq), gq
    }
    async function Hq() {
      await Oq.f.removeItem(xq.b), Oq.i.removeItem(mq.c)
    }

    function oq() {
      return aq(Hq)
    }

    function Pq(qq, Eq) {
      return "active" === Qq(qq, Eq).kind
    }

    function Qq(qq, Eq) {
      var gq;
      return null === qq ? {
        kind: "none",
        reason: "nothingStored"
      } : rq(qq) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (gq = qq.validation) || void 0 === gq ? void 0 : gq.ok) || qq.validation.fromRecheck ? null === Eq ? {
        kind: "none",
        reason: "noCompiler"
      } : hq(qq, Eq) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : qq.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function yq() {
      Oq.k.setItem(cq, performance.timeOrigin)
    }

    function tq() {
      return Oq.k.getItem(cq) === performance.timeOrigin
    }

    function rq(qq) {
      return !(0, lq.e)(qq.manifest.apiVersion)
    }

    function vq(qq) {
      return uq ??= qq.yJ((0, Aq.shaderPackTextures)()), uq
    }

    function hq(qq, Eq) {
      var gq;
      return (null === (gq = qq.validation) || void 0 === gq ? void 0 : gq.headerVersion) !== vq(Eq)
    }

    function nq(qq) {
      return aq((async () => {
        iq(await (0, xq.d)(!0), qq)
      }))
    }

    function bq() {
      return aq((async () => {
        Oq.i.removeItem(mq.c)
      }))
    }

    function iq(qq, Eq) {
      Pq(qq, Eq) ? Oq.i.setItem(mq.c, !0) : Oq.i.removeItem(mq.c)
    }
  },
  6514: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      loadShaderPackTextures: () => mq,
      shaderPackTextures: () => xq
    });
    var Yq = gq(6458);
    let lq = null,
      Oq = null;

    function mq() {
      return Oq ??= Promise.all([gq.e(70), gq.e(199)]).then((() => gq(40244))).then((qq => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: Eq,
          textureNameToIndex: gq,
          textureAnimationData: Oq
        } = qq;
        return lq ??= (0, Yq.j)(gq, Oq, Eq), lq
      })), Oq
    }

    function xq() {
      if (null === lq) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return lq
    }
  },
  6458: (qq, Eq, gq) => {
    gq.d(Eq, {
      A: () => Bq,
      d: () => mq,
      f: () => Oq,
      h: () => Yq,
      j: () => aq,
      k: () => uq,
      o: () => lq,
      s: () => Aq,
      w: () => cq
    });
    const Yq = 5;

    function lq(qq) {
      return qq === Yq
    }
    const Oq = 262144,
      mq = 256,
      xq = 256;

    function Aq(qq) {
      if ("object" !== typeof qq || null === qq || Array.isArray(qq)) return "The pack has no files.";
      const Eq = [];
      for (const [gq, Yq] of Object.entries(qq)) {
        if ("string" !== typeof Yq) return `${gq} isn't text.`;
        Eq.push({
          path: gq,
          source: Yq
        })
      }
      return Eq.sort(((qq, Eq) => uq(qq.path, Eq.path))),
        function(qq) {
          if (0 === qq.length) return "The pack has no .wgsl files.";
          if (qq.length > mq) return `The pack has more than ${mq} .wgsl files.`;
          const Eq = new Set;
          for (const {
              path: gq
            }
            of qq) {
            const qq = Wq(gq);
            if (null !== qq) return qq;
            if (Eq.has(gq)) return `The pack has two files at ${gq}.`;
            Eq.add(gq)
          }
          return Bq(qq) > Oq ? `The pack's .wgsl files are over ${Oq/1024} KB in total.` : null
        }(Eq) ?? Eq
    }

    function cq(qq) {
      const Eq = {};
      for (const gq of qq) Eq[gq.path] = gq.source;
      return Eq
    }

    function uq(qq, Eq) {
      return qq < Eq ? -1 : qq > Eq ? 1 : 0
    }

    function Bq(qq) {
      const Eq = new TextEncoder;
      let gq = 0;
      for (const {
          source: Yq
        }
        of qq) gq += Eq.encode(Yq).byteLength;
      return gq
    }

    function Wq(qq) {
      if (!qq.toLowerCase().endsWith(".wgsl")) return `${qq} isn't a .wgsl file.`;
      if (qq.length > xq) return `A file path is over ${xq} characters.`;
      if (qq.includes("\\") || /[\u0000-\u001f]/.test(qq)) return `${qq} isn't a valid file path.`;
      return qq.split("/").some((qq => "" === qq || "." === qq || ".." === qq)) ? `${qq} isn't a valid file path.` : null
    }
    const Nq = /^(.*)\[rot\[([1-4])$/;

    function aq(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const Yq = new Map;
      Eq.forEach(((qq, Eq) => {
        let {
          numAnimStates: gq,
          animStartIdx: lq
        } = qq;
        for (let Oq = 1; Oq < gq; Oq++) Yq.set(lq + Oq - 1, Eq)
      }));
      const lq = Object.entries(qq),
        Oq = new Map;
      for (const [Vq, dq] of lq) {
        const qq = Nq.exec(Vq);
        "1" === qq?.[2] && Oq.set(qq[1], dq + 1)
      }
      const mq = qq => {
          const Eq = Nq.exec(qq);
          return Eq && Oq.has(Eq[1]) ? {
            root: Eq[1],
            rotation: Number(Eq[2]) - 1
          } : null
        },
        xq = new Set(lq.map((qq => {
          let [Eq] = qq;
          return mq(Eq)?.root ?? Eq
        }))),
        Aq = (qq, gq) => {
          const Yq = qq.replace(/_?0$/, "");
          return (Eq[gq]?.numAnimStates ?? 0) > 1 && !xq.has(Yq) ? Yq : qq
        },
        cq = new Map;
      for (const [Nq, Vq] of lq) cq.set(Vq, Aq(mq(Nq)?.root ?? Nq, Vq));
      const uq = lq.reduce(((qq, Eq) => {
          let [, gq] = Eq;
          return Math.max(qq, gq + 1)
        }), 0),
        Bq = Array.from({
          length: uq
        }, ((qq, Eq) => ({
          id: Eq + 1,
          rotation: 0
        }))),
        Wq = new Map,
        aq = new Map;
      for (const [Nq, Vq] of lq) {
        const qq = mq(Nq),
          Eq = Yq.get(Vq);
        if (void 0 !== Eq) {
          const gq = cq.get(Eq);
          aq.set(Nq, {
            name: Nq,
            texture: gq,
            kind: "frame"
          }), qq && !aq.has(qq.root) && aq.set(qq.root, {
            name: qq.root,
            texture: gq,
            kind: "frame"
          });
          continue
        }
        const gq = cq.get(Vq),
          lq = qq?.root ?? Nq;
        if (gq !== lq && aq.set(lq, {
            name: lq,
            texture: gq,
            kind: "frame"
          }), qq) {
          const Eq = Oq.get(qq.root);
          Bq[Vq] = {
            id: Eq,
            rotation: qq.rotation
          }, Wq.set(gq, Eq), aq.set(Nq, {
            name: Nq,
            texture: gq,
            kind: "rotation"
          })
        } else Wq.set(gq, Vq + 1)
      }
      for (const Nq of Wq.keys()) aq.delete(Nq);
      for (const [Nq, Vq] of gq) {
        const qq = Wq.get(Vq);
        void 0 === qq || Wq.has(Nq) || (Wq.set(Nq, qq), aq.delete(Nq))
      }
      return {
        named: [...Wq].sort(((qq, Eq) => {
          let [gq] = qq, [Yq] = Eq;
          return gq < Yq ? -1 : gq > Yq ? 1 : 0
        })).map((qq => {
          let [Eq, gq] = qq;
          return {
            name: Eq,
            id: gq
          }
        })),
        aliases: [...aq.values()],
        layers: Bq
      }
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);