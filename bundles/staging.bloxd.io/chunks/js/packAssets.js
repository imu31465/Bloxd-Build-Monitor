export const id = 44;
export const ids = [44, 195];
export const modules = {
  9156: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      packDisplayName: () => Xb,
      packModelMessage: () => pb,
      packModelSummary: () => Ab,
      refusedPackModels: () => ob
    });
    var Bb = hb(9163),
      Ob = hb(9170);
    const Gb = "DRACO",
      Ub = 0,
      Lb = 1,
      Yb = 0,
      Sb = 1,
      ab = 32768;

    function Hb(bb) {
      const ub = new DataView(bb.buffer, bb.byteOffset, bb.byteLength);
      let hb = 0;
      const Bb = () => {
          if (hb >= bb.byteLength) throw new RangeError("past the stream");
          return bb[hb++]
        },
        Ob = () => {
          if (hb + 4 > bb.byteLength) throw new RangeError("past the stream");
          const Bb = ub.getUint32(hb, !0);
          return hb += 4, Bb
        },
        Hb = () => {
          let bb = 0;
          for (let ub = 0; ub < 35; ub += 7) {
            const hb = Bb();
            if (bb += (127 & hb) * 2 ** ub, 0 === (128 & hb)) return bb
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let bb = 0; bb < Gb.length; bb++)
          if (Bb() !== Gb.charCodeAt(bb)) return null;
        const ub = Bb(),
          wb = Bb(),
          Zb = Bb(),
          Xb = Bb(),
          pb = Bb() | Bb() << 8;
        if (2 !== ub) return null;
        0 !== (pb & ab) && function(bb, ub, hb) {
          const Bb = () => {
              ub(hb())
            },
            Ob = () => {
              let hb = 1,
                Ob = !0;
              for (; hb > 0;) {
                hb--, Ob || Bb(), Ob = !1;
                const Gb = bb();
                for (let hb = 0; hb < Gb; hb++) Bb(), ub(bb());
                hb += bb()
              }
            },
            Gb = bb();
          for (let Ub = 0; Ub < Gb; Ub++) bb(), Ob();
          Ob()
        }(Hb, (ub => {
          if (hb + ub > bb.byteLength) throw new RangeError("past the stream");
          hb += ub
        }), Bb);
        const ob = wb < 2 ? Ob : Hb;
        if (Zb === Ub) return {
          faces: 0,
          vertices: Ob()
        };
        if (Zb !== Lb) return null;
        if (Xb === Yb) {
          return {
            faces: ob(),
            vertices: ob()
          }
        }
        if (Xb !== Sb) return null;
        Bb(), wb < 2 && Hb();
        const Ab = Hb();
        return {
          faces: Hb(),
          vertices: Ab
        }
      } catch {
        return null
      }
    }

    function wb(bb, ub, hb) {
      var Bb, Ob;
      if (null === (Bb = null === (Ob = bb.extensionsUsed) || void 0 === Ob ? void 0 : Ob.includes("KHR_draco_mesh_compression")) || void 0 === Bb || !Bb) return null;
      for (const Xb of null !== (Gb = bb.meshes) && void 0 !== Gb ? Gb : []) {
        var Gb;
        for (const Bb of Xb.primitives) {
          var Ub, Lb, Yb, Sb, ab, wb;
          const Ob = null === (Ub = Bb.extensions) || void 0 === Ub ? void 0 : Ub.KHR_draco_mesh_compression;
          if ("object" !== typeof Ob || null === Ob) continue;
          const Gb = null === (Lb = bb.bufferViews) || void 0 === Lb ? void 0 : Lb[Ob.bufferView];
          if (null === ub || void 0 === Gb) return Zb;
          const Xb = null !== (Yb = Gb.byteOffset) && void 0 !== Yb ? Yb : 0,
            pb = Hb(ub.subarray(Xb, Xb + Gb.byteLength));
          if (null === pb && !hb) continue;
          const ob = null !== (Sb = bb.accessors) && void 0 !== Sb ? Sb : [],
            Ab = null === (ab = ob[Bb.attributes.POSITION]) || void 0 === ab ? void 0 : ab.count,
            lb = void 0 === Bb.indices ? 0 : null === (wb = ob[Bb.indices]) || void 0 === wb ? void 0 : wb.count;
          if (null === pb || void 0 === Ab || void 0 === lb || 3 * pb.faces !== lb || pb.vertices > Ab) return Zb
        }
      }
      return null
    }
    const Zb = "has a Draco stream whose counts don't match its accessors";

    function Xb(bb) {
      var ub;
      return null !== (ub = bb.name) && void 0 !== ub ? ub : bb.fromFolderName || bb.id
    }

    function pb(bb, ub, hb) {
      return `Texture pack "${bb}": model "${ub}" was not loaded because it ${hb}. The default model is used instead.`
    }

    function ob(bb, ub, hb) {
      let {
        strictDraco: Gb = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Ub = {};
      for (const [Lb, Yb] of Object.entries(ub)) {
        let ub;
        if (Yb.startsWith("data:")) try {
          const bb = new Uint8Array((0, Ob.t)(Yb));
          if (ub = (0, Bb.c)(bb), null === ub) {
            const {
              json: hb,
              bin: Bb
            } = (0, Ob.B)(bb);
            ub = wb(hb, Bb, Gb)
          }
        } catch {
          ub = "is not a binary glTF 2.0 file"
        } else ub = "loads data from outside the file";
        ub && (Ub[Lb] = ub, hb && console.warn(pb(bb, Lb, ub)))
      }
      return Ub
    }

    function Ab(bb, ub) {
      const hb = Object.keys(ub);
      if (0 === hb.length) return null;
      if (1 === hb.length) return pb(bb, hb[0], ub[hb[0]]);
      const Bb = hb.map((bb => `"${bb}" ${ub[bb]}`)).join("; ");
      return `Texture pack "${bb}": ${hb.length} models were not loaded (${Bb}). The default models are used instead.`
    }
  },
  60933: (bb, ub, hb) => {
    hb.d(ub, {
      packAssets: () => Ab
    });
    var Bb = hb(2951),
      Ob = hb(2987),
      Gb = hb(9156),
      Ub = hb(3008),
      Lb = hb(3036);

    function Yb(bb, ub, hb, Bb) {
      const Ob = `${(0,Ub.b)(bb,ub)}|sheets${hb}`;
      return Bb === Lb.e ? Ob : `${Ob}|layers${Bb}`
    }
    var Sb = hb(3040),
      ab = hb(2969),
      Hb = hb(2956),
      wb = hb(3017);
    var Zb = hb(42730);
    const Xb = 256;
    let pb = null,
      ob = null;

    function Ab(bb) {
      var ub;
      let hb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Lb.e;
      if ((null === (ub = pb) || void 0 === ub ? void 0 : ub.pack) === bb.pack && pb.maxLayerWidth === hb) return pb.assets;
      const Ab = (0, Zb.g)(bb.pack, (0, Zb.j)(bb));
      if (null === Ab || !(0, Ob.g)(Ab)) return Promise.resolve(null);
      const Kb = async function(bb, ub, hb) {
        var Zb;
        const pb = null !== (Zb = bb.textureOverrides) && void 0 !== Zb ? Zb : {},
          {
            id: Ab,
            version: Kb
          } = bb.metaData,
          Wb = ub && Ab !== Bb.m.CUSTOM,
          Cb = {};
        Wb && (ob = Cb);
        let db, rb, jb = Wb ? await async function(bb, ub, hb, Bb) {
          const Ob = Yb(bb, ub, hb, Lb.e),
            Gb = Yb(bb, ub, hb, Bb),
            Sb = await (0, Ub.e)((bb => bb === Ob || bb === Gb));
          return null !== Sb && (Bb === Lb.e || Sb.blockAtlasWidth <= Bb) ? Sb : null
        }(Ab, Kb, Xb, hb): null;
        if (null === jb) {
          const {
            blockMetadata: bb,
            getDefaultTexture: ub,
            textureNameToIndex: Gb
          } = await (0, Ob.k)(), Lb = (0, ab.e)(bb, ((bb, hb) => ({
            url: lb(pb, ub, bb, "block" === hb ? Hb.g.BLOCK : Hb.g.ITEM)
          }))), Sb = await
          function(bb, ub, hb, Bb, Ob, Gb) {
            return (0, wb.c)((Ub => Ub.WasmTextureWorker.generateRequired(bb, ub, hb, Bb, Ob, Gb)))
          }(bb, Gb, Lb, Ab === Bb.c, hb, Xb), Zb = Sb.assets;
          jb = {
            ...Zb,
            averageColors: {}
          }, db = Sb.averageColors(), Wb && (rb = db.then((async bb => {
            null !== bb && ob === Cb && await
            function(bb, ub, hb, Bb, Ob) {
              return (0, Ub.j)(Yb(bb, ub, Bb, Ob), hb)
            }(Ab, Kb, {
              ...Zb,
              averageColors: bb
            }, Xb, Sb.layerCap)
          })))
        }
        return function(bb, ub) {
          var hb, Bb;
          let Ob = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Promise.resolve((Lb = bb.averageColors, 0 === Object.keys(null !== Lb && void 0 !== Lb ? Lb : {}).length ? null : bb.averageColors)),
            Ub = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Promise.resolve();
          var Lb;
          const Yb = null !== (hb = ub.textureOverrides) && void 0 !== hb ? hb : {},
            ab = null !== (Bb = ub.modelOverrides) && void 0 !== Bb ? Bb : {},
            Hb = 0 === Object.keys(ab).length ? {} : (0, Gb.refusedPackModels)((0, Gb.packDisplayName)(ub.metaData), ab, !0, {
              strictDraco: !0
            }),
            {
              animatedBlockTextures: wb,
              rotatedBlockTextures: Zb
            } = bb,
            Xb = bb => {
              var ub, hb;
              return null !== (ub = null !== (hb = wb[bb]) && void 0 !== hb ? hb : Zb[bb]) && void 0 !== ub ? ub : null
            };
          return {
            terrain: {
              atlasSheets: bb.blockAtlasArr,
              texture: Xb
            },
            sheetPixels: [...bb.blockAtlasPixels],
            heldUntil: Ub,
            sheetLayout: bb.imagesPerAtlas,
            sheetWidth: bb.blockAtlasWidth,
            armourAtlasUrl: bb.armourAtlas,
            texture: bb => {
              var ub, hb;
              return null !== (ub = null !== (hb = Xb(bb)) && void 0 !== hb ? hb : (0, Sb.d)(Yb, bb)) && void 0 !== ub ? ub : null
            },
            model: bb => void 0 === Hb[bb] && ab[bb] || null,
            averageColours: Ob
          }
        }(jb, bb, db, rb)
      }(Ab, null === bb.gameSource, hb), Wb = {
        pack: bb.pack,
        maxLayerWidth: hb,
        assets: Kb
      };
      return pb = Wb, Kb.catch((() => {
        pb === Wb && (pb = null)
      })), Kb
    }

    function lb(bb, ub, Bb, Ob) {
      const Gb = (0, Sb.d)(bb, Bb);
      if (Gb) return Gb;
      try {
        return ub(Bb, Ob).url
      } catch {
        return hb(3088)
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);