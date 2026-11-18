export const id = 120;
export const ids = [119, 120, 122];
export const modules = {
  5852: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Uy.h,
      d: () => hy,
      e: () => Uy.o
    });
    var Uy = Wy(5835);
    const hy = [!1, !0].flatMap((yb => ["terrain", "liquid", "model"].map((bb => ({
      strict: yb,
      program: bb
    })))))
  },
  5915: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      forgetShaderPackActiveHint: () => ib,
      isOtherApiVersion: () => Gy,
      isShaderPackActive: () => Ty,
      isShaderPackChangePending: () => gb,
      markShaderPackChangePending: () => Jy,
      pageShaderPackValidationVersion: () => Oy,
      reconcileStoredShaderPackHint: () => vb,
      removeShaderPack: () => Cy,
      replaceShaderPack: () => Ey,
      saveShaderPack: () => Sy,
      shaderPackNeedsCheck: () => Ry,
      storedPackOutcome: () => Vy,
      storedShaderPackFiles: () => ey,
      toStoredShaderPack: () => Ky
    });
    var Uy = Wy(5835),
      hy = Wy(5852),
      fy = Wy(33),
      Zy = Wy(2754),
      cb = Wy(5923),
      Py = Wy(5893);
    const oy = "shaderPackChangePending";
    let By = null;

    function Ky(yb, bb, Wy) {
      return {
        manifest: yb.manifest,
        files: (0, Uy.u)(yb.files),
        validation: bb,
        ...Wy && {
          listing: Wy
        }
      }
    }

    function ey(yb) {
      return Object.keys(yb.files).map((bb => ({
        path: bb,
        source: yb.files[bb]
      })))
    }
    let qb = Promise.resolve();

    function sy(yb) {
      const bb = qb.then(yb);
      return qb = bb.catch((() => {})), bb
    }

    function Sy(yb, bb) {
      return sy((() => ly(yb, bb)))
    }

    function Ey(yb, bb, Wy) {
      return sy((async () => JSON.stringify(await (0, cb.g)()) === JSON.stringify(yb) && (null === bb ? (await mb(), !0) : ly(bb, Wy))))
    }
    async function ly(yb, bb) {
      const Wy = await fy.d.setItem(cb.d, yb);
      return Wy && My(yb, bb), Wy
    }
    async function mb() {
      await fy.d.removeItem(cb.d), fy.e.removeItem(Zy.c)
    }

    function Cy() {
      return sy(mb)
    }

    function Ty(yb, bb) {
      return "active" === Vy(yb, bb).kind
    }

    function Vy(yb, bb) {
      var Wy;
      return null === yb ? {
        kind: "none",
        reason: "nothingStored"
      } : Gy(yb) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (Wy = yb.validation) || void 0 === Wy ? void 0 : Wy.ok) || yb.validation.fromRecheck ? null === bb ? {
        kind: "none",
        reason: "noCompiler"
      } : Ry(yb, bb) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : yb.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function Jy() {
      fy.g.setItem(oy, performance.timeOrigin)
    }

    function gb() {
      return fy.g.getItem(oy) === performance.timeOrigin
    }

    function Gy(yb) {
      return !(0, hy.e)(yb.manifest.apiVersion)
    }

    function Oy(yb) {
      return By ??= yb.jWy((0, Py.shaderPackTextures)()), By
    }

    function Ry(yb, bb) {
      var Wy;
      return (null === (Wy = yb.validation) || void 0 === Wy ? void 0 : Wy.headerVersion) !== Oy(bb)
    }

    function vb(yb) {
      return sy((async () => {
        My(await (0, cb.g)(!0), yb)
      }))
    }

    function ib() {
      return sy((async () => {
        fy.e.removeItem(Zy.c)
      }))
    }

    function My(yb, bb) {
      Ty(yb, bb) ? fy.e.setItem(Zy.c, !0) : fy.e.removeItem(Zy.c)
    }
  },
  5923: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => hy,
      g: () => fy
    });
    var Uy = Wy(33);
    const hy = "shaderPack";
    async function fy() {
      var yb;
      let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (yb = await Uy.d.getItem(hy, bb)) && void 0 !== yb ? yb : null
    }
  },
  5893: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      loadShaderPackTextures: () => Zy,
      shaderPackTextures: () => cb
    });
    var Uy = Wy(5835);
    let hy = null,
      fy = null;

    function Zy() {
      return fy ??= Promise.all([Wy.e(63), Wy.e(181)]).then((() => Wy(38999))).then((yb => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: bb,
          textureNameToIndex: Wy,
          textureAnimationData: fy
        } = yb;
        return hy ??= (0, Uy.k)(Wy, fy, bb), hy
      })), fy
    }

    function cb() {
      if (null === hy) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return hy
    }
  },
  5835: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Zy,
      f: () => fy,
      h: () => Uy,
      k: () => sy,
      l: () => By,
      o: () => hy,
      s: () => Py,
      u: () => oy,
      x: () => Ky
    });
    const Uy = 5;

    function hy(yb) {
      return yb === Uy
    }
    const fy = 262144,
      Zy = 256,
      cb = 256;

    function Py(yb) {
      if ("object" !== typeof yb || null === yb || Array.isArray(yb)) return "The pack has no files.";
      const bb = [];
      for (const [Wy, Uy] of Object.entries(yb)) {
        if ("string" !== typeof Uy) return `${Wy} isn't text.`;
        bb.push({
          path: Wy,
          source: Uy
        })
      }
      return bb.sort(((yb, bb) => By(yb.path, bb.path))),
        function(yb) {
          if (0 === yb.length) return "The pack has no .wgsl files.";
          if (yb.length > Zy) return `The pack has more than ${Zy} .wgsl files.`;
          const bb = new Set;
          for (const {
              path: Wy
            }
            of yb) {
            const yb = ey(Wy);
            if (null !== yb) return yb;
            if (bb.has(Wy)) return `The pack has two files at ${Wy}.`;
            bb.add(Wy)
          }
          return Ky(yb) > fy ? `The pack's .wgsl files are over ${fy/1024} KB in total.` : null
        }(bb) ?? bb
    }

    function oy(yb) {
      const bb = {};
      for (const Wy of yb) bb[Wy.path] = Wy.source;
      return bb
    }

    function By(yb, bb) {
      return yb < bb ? -1 : yb > bb ? 1 : 0
    }

    function Ky(yb) {
      const bb = new TextEncoder;
      let Wy = 0;
      for (const {
          source: Uy
        }
        of yb) Wy += bb.encode(Uy).byteLength;
      return Wy
    }

    function ey(yb) {
      if (!yb.toLowerCase().endsWith(".wgsl")) return `${yb} isn't a .wgsl file.`;
      if (yb.length > cb) return `A file path is over ${cb} characters.`;
      if (yb.includes("\\") || /[\u0000-\u001f]/.test(yb)) return `${yb} isn't a valid file path.`;
      return yb.split("/").some((yb => "" === yb || "." === yb || ".." === yb)) ? `${yb} isn't a valid file path.` : null
    }
    const qb = /^(.*)\[rot\[([1-4])$/;

    function sy(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const Uy = new Map;
      bb.forEach(((yb, bb) => {
        let {
          numAnimStates: Wy,
          animStartIdx: hy
        } = yb;
        for (let fy = 1; fy < Wy; fy++) Uy.set(hy + fy - 1, bb)
      }));
      const hy = Object.entries(yb),
        fy = new Map;
      for (const [Sy, Ey] of hy) {
        const yb = qb.exec(Sy);
        "1" === yb?.[2] && fy.set(yb[1], Ey + 1)
      }
      const Zy = yb => {
          const bb = qb.exec(yb);
          return bb && fy.has(bb[1]) ? {
            root: bb[1],
            rotation: Number(bb[2]) - 1
          } : null
        },
        cb = new Set(hy.map((yb => {
          let [bb] = yb;
          return Zy(bb)?.root ?? bb
        }))),
        Py = (yb, Wy) => {
          const Uy = yb.replace(/_?0$/, "");
          return (bb[Wy]?.numAnimStates ?? 0) > 1 && !cb.has(Uy) ? Uy : yb
        },
        oy = new Map;
      for (const [qb, Sy] of hy) oy.set(Sy, Py(Zy(qb)?.root ?? qb, Sy));
      const By = hy.reduce(((yb, bb) => {
          let [, Wy] = bb;
          return Math.max(yb, Wy + 1)
        }), 0),
        Ky = Array.from({
          length: By
        }, ((yb, bb) => ({
          id: bb + 1,
          rotation: 0
        }))),
        ey = new Map,
        sy = new Map;
      for (const [qb, Sy] of hy) {
        const yb = Zy(qb),
          bb = Uy.get(Sy);
        if (void 0 !== bb) {
          const Wy = oy.get(bb);
          sy.set(qb, {
            name: qb,
            texture: Wy,
            kind: "frame"
          }), yb && !sy.has(yb.root) && sy.set(yb.root, {
            name: yb.root,
            texture: Wy,
            kind: "frame"
          });
          continue
        }
        const Wy = oy.get(Sy),
          hy = yb?.root ?? qb;
        if (Wy !== hy && sy.set(hy, {
            name: hy,
            texture: Wy,
            kind: "frame"
          }), yb) {
          const bb = fy.get(yb.root);
          Ky[Sy] = {
            id: bb,
            rotation: yb.rotation
          }, ey.set(Wy, bb), sy.set(qb, {
            name: qb,
            texture: Wy,
            kind: "rotation"
          })
        } else ey.set(Wy, Sy + 1)
      }
      for (const qb of ey.keys()) sy.delete(qb);
      for (const [qb, Sy] of Wy) {
        const yb = ey.get(Sy);
        void 0 === yb || ey.has(qb) || (ey.set(qb, yb), sy.delete(qb))
      }
      return {
        named: [...ey].sort(((yb, bb) => {
          let [Wy] = yb, [Uy] = bb;
          return Wy < Uy ? -1 : Wy > Uy ? 1 : 0
        })).map((yb => {
          let [bb, Wy] = yb;
          return {
            name: bb,
            id: Wy
          }
        })),
        aliases: [...sy.values()],
        layers: Ky
      }
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);