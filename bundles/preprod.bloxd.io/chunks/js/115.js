export const id = 115;
export const ids = [115, 118, 119, 122];
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
  39003: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Ky,
      installListedShaderPack: () => By
    });
    var Uy = Wy(5801),
      hy = Wy(5835),
      fy = Wy(1052),
      Zy = Wy(5867),
      cb = Wy(5852),
      Py = Wy(5915),
      oy = Wy(5911);
    async function By(yb) {
      const bb = await (0, Zy.loadPageShaderPackCompiler)();
      if (null === bb) return {
        kind: "failed",
        reason: "compiler"
      };
      const Wy = await Ky(yb, bb);
      return "failed" === Wy.kind ? Wy : await (0, Py.saveShaderPack)(Wy.stored, bb) ? ((0, Py.markShaderPackChangePending)(), Wy) : {
        kind: "failed",
        reason: "save"
      }
    }
    async function Ky(yb, bb) {
      const Wy = await async function(yb) {
        let {
          packId: bb,
          sourceHash: Wy
        } = yb;
        try {
          const yb = await fetch(`${fy.clientSideServerUrls.s3Url}/${(0,Uy.U)(bb,Wy)}`, {
            headers: {
              Accept: "application/json"
            }
          });
          if (!yb.ok) return console.error(`Failed to download shader pack ${bb} (${yb.status})`), null;
          const hy = await yb.json();
          return "object" !== typeof hy || null === hy ? (console.error(`Shader pack ${bb}'s source isn't an object`), null) : hy
        } catch (hy) {
          return console.error(`Failed to download shader pack ${bb}`, hy), null
        }
      }(yb);
      if (null === Wy) return {
        kind: "failed",
        reason: "download"
      };
      if (!(0, cb.e)(Wy.apiVersion)) return {
        kind: "failed",
        reason: "apiVersion"
      };
      const Zy = (0, hy.s)(Wy.files);
      if ("string" === typeof Zy) return console.error(`A listed shader pack breaks the pack rules: ${Zy}`), {
        kind: "failed",
        reason: "invalid"
      };
      const By = await (0, oy.e)(bb, Zy);
      if (!1 === (null === By || void 0 === By ? void 0 : By.ok)) return {
        kind: "failed",
        reason: "errors"
      };
      const Ky = {
        manifest: {
          apiVersion: Wy.apiVersion,
          name: yb.name,
          author: yb.ownerName,
          description: yb.description || null,
          keepCircleShadows: !0 === Wy.keepCircleShadows
        },
        files: Zy
      };
      return {
        kind: "loaded",
        stored: (0, Py.toStoredShaderPack)(Ky, By, {
          packId: yb.packId,
          sourceHash: yb.sourceHash
        })
      }
    }
  },
  39656: (yb, bb, Wy) => {
    Wy.d(bb, {
      followListingUpdates: () => ey
    });
    var Uy = Wy(618),
      hy = Wy(19),
      fy = Wy(1339),
      Zy = Wy(987),
      cb = Wy(5867),
      Py = Wy(5852),
      oy = Wy(39003),
      By = Wy(5915);
    const Ky = ["apiVersion", "invalid", "errors"];
    async function ey(yb, bb) {
      const Wy = await Zy.userContextManager.getCurrentUserContext(),
        ey = await fy.c.getShaderPackVersions(Wy, [bb.packId]),
        qb = function(yb, bb, Wy) {
          var Uy;
          if (void 0 === Wy || "unlisted" === Wy.status) return {
            kind: "none"
          };
          if ("banned" === Wy.status) return {
            kind: "remove"
          };
          if (!(0, Py.e)(Wy.apiVersion)) return {
            kind: "none"
          };
          const {
            sourceHash: hy,
            name: fy,
            ownerName: Zy,
            description: cb
          } = Wy;
          return hy !== bb.sourceHash && hy !== bb.rejectedSourceHash ? {
            kind: "update",
            sourceHash: hy,
            name: fy,
            ownerName: Zy,
            description: cb
          } : fy !== yb.manifest.name || Zy !== yb.manifest.author || (cb || null) !== (null !== (Uy = yb.manifest.description) && void 0 !== Uy ? Uy : null) ? {
            kind: "rename",
            name: fy,
            ownerName: Zy,
            description: cb
          } : {
            kind: "none"
          }
        }(yb, bb, (0, Uy.c)(ey, bb.packId));
      if ("update" === qb.kind && "landingPage" !== hy.d.get("gameState")) return !1;
      const sy = "update" === qb.kind || "rename" === qb.kind,
        Sy = sy ? await (0, cb.loadPageShaderPackCompiler)() : null;
      if (sy && null === Sy) return console.warn(`Didn't follow shader pack ${bb.packId}'s listing: the shader pack compiler couldn't load`), !0;
      const Ey = await async function(yb, bb, Wy, Uy) {
        switch (Wy.kind) {
          case "none":
            return;
          case "remove":
            return null;
          case "rename":
            return {
              ...yb, manifest: {
                ...yb.manifest,
                name: Wy.name,
                author: Wy.ownerName,
                description: Wy.description || null
              }
            };
          case "update": {
            if (null === Uy) return;
            const {
              sourceHash: hy,
              name: fy,
              ownerName: Zy,
              description: cb
            } = Wy, Py = await (0, oy.e)({
              packId: bb.packId,
              sourceHash: hy,
              name: fy,
              ownerName: Zy,
              description: cb
            }, Uy);
            if ("loaded" === Py.kind && null !== Py.stored.validation) return Py.stored;
            const By = "failed" === Py.kind ? Py.reason : "no WebGPU device could check it";
            return console.warn(`Didn't update shader pack ${bb.packId}: ${By}`), "failed" === Py.kind && Ky.includes(Py.reason) ? {
              ...yb,
              listing: {
                ...bb,
                rejectedSourceHash: hy
              }
            } : void 0
          }
        }
      }(yb, bb, qb, Sy);
      return void 0 === Ey || (await (0, By.replaceShaderPack)(yb, Ey, Sy) ? (null !== Ey && Ey.files === yb.files || (0, By.markShaderPackChangePending)(), !0) : (console.warn("Didn't apply the shader pack listing's update: the stored pack changed or couldn't be written"), !0))
    }
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
  5911: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Py,
      e: () => cb
    });
    var Uy = Wy(5915),
      hy = Wy(5893),
      fy = Wy(107);
    const Zy = 100;
    async function cb(yb, bb) {
      var Wy;
      let Uy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (Wy = navigator.gpu) && void 0 !== Wy ? Wy : null;
      const Zy = yb.pZy(bb, (0, hy.shaderPackTextures)());
      if (Zy.errors.length > 0) return oy(yb, Zy.errors, Zy.offInStrict);
      const cb = await async function(yb) {
        if (!yb) return null;
        try {
          const bb = await (0, fy.r)(yb);
          return bb ? await bb.requestDevice() : null
        } catch (bb) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", bb), null
        }
      }(Uy);
      if (!cb) return null;
      let Py = !1;
      cb.lost.then((() => {
        Py = !0
      }));
      try {
        const bb = await Promise.all(Zy.validationModules.map((bb => async function(yb, bb, Wy) {
          bb.pushErrorScope("validation");
          const Uy = bb.createShaderModule({
              code: Wy.code
            }),
            hy = bb.popErrorScope(),
            {
              messages: fy
            } = await Uy.getCompilationInfo(),
            Zy = fy.filter((yb => "error" === yb.type)).map((bb => yb.mapValidationMessage(Wy, bb))),
            cb = await hy;
          cb && 0 === Zy.length && Zy.push({
            file: null,
            line: 0,
            message: cb.message,
            variants: [Wy.key]
          });
          return Zy
        }(yb, cb, bb))));
        return Py ? null : oy(yb, yb.aBy(bb.flat()), Zy.offInStrict)
      } catch (By) {
        return console.error("Couldn't validate the shader pack on WebGPU.", By), null
      } finally {
        cb.destroy()
      }
    }
    async function Py(yb, bb) {
      var Wy;
      if (!(0, Uy.shaderPackNeedsCheck)(yb, bb) || (0, Uy.isOtherApiVersion)(yb)) return yb;
      const hy = await cb(bb, (0, Uy.storedShaderPackFiles)(yb));
      if (!hy) return yb;
      const fy = !1 === (null === (Wy = yb.validation) || void 0 === Wy ? void 0 : Wy.ok) && !yb.validation.fromRecheck,
        Zy = {
          ...yb,
          validation: fy ? hy : {
            ...hy,
            fromRecheck: !0
          }
        };
      return await (0, Uy.replaceShaderPack)(yb, Zy, bb) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), Zy
    }

    function oy(yb, bb, Wy) {
      return {
        headerVersion: (0, Uy.pageShaderPackValidationVersion)(yb),
        ok: 0 === bb.length,
        errors: bb.slice(0, Zy),
        moreErrors: Math.max(0, bb.length - Zy),
        offInStrict: Wy
      }
    }
  },
  5801: (yb, bb, Wy) => {
    Wy.d(bb, {
      D: () => fy,
      H: () => cb,
      J: () => Zy,
      N: () => Uy,
      R: () => ey,
      S: () => By,
      U: () => Cy,
      V: () => Ky,
      Y: () => oy,
      e: () => qb,
      h: () => Sy,
      l: () => sy,
      m: () => mb,
      p: () => Vy,
      r: () => Py,
      v: () => hy,
      z: () => Ty
    });
    const Uy = ["forest", "desert", "water", "night", "cave"];
    const hy = {
        full: {
          width: 3840,
          height: 2160
        },
        large: {
          width: 1920,
          height: 1080
        },
        thumb: {
          width: 640,
          height: 360
        }
      },
      fy = ["popular", "updated", "newest"],
      Zy = 3,
      cb = 32,
      Py = 300;

    function oy(yb, bb) {
      return yb.slice(0, bb).replace(/[\uD800-\uDBFF]$/, "")
    }
    const By = 64,
      Ky = 512,
      ey = 18e5;
    const qb = "Bloxdhub",
      sy = "https://bloxdhub.com/shaders";

    function Sy(yb) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(yb)}`
    }
    const Ey = "Screenshot generation failed.",
      ly = "Its screenshots couldn't be generated:";

    function mb(yb) {
      var bb;
      return yb === Ey || null !== (bb = null === yb || void 0 === yb ? void 0 : yb.startsWith(ly)) && void 0 !== bb && bb
    }

    function Cy(yb, bb) {
      return `shaderPacks/${yb}/${bb}.json`
    }

    function Ty(yb, bb, Wy, Uy) {
      return null === bb.renderId ? Vy(yb, bb.baselineVersion, Wy, Uy) : `${yb}/${function(yb,bb,Wy,Uy){return`shaderPacks/${yb}/${bb}/${Wy}-${Uy}.webp`}(bb.packId,bb.renderId,Wy,Uy)}`
    }

    function Vy(yb, bb, Wy, Uy) {
      return `${yb}/${function(yb,bb,Wy){return`shaderPacks/baseline/${yb}/${bb}-${Wy}.webp`}(bb,Wy,Uy)}`
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