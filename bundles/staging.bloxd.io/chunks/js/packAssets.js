export const id = 44;
export const ids = [44, 194];
export const modules = {
  8979: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      packDisplayName: () => jb,
      packModelMessage: () => Rb,
      packModelSummary: () => yb,
      refusedPackModels: () => kb
    });
    var Ab = Ub(8982),
      Mb = Ub(8985);
    const Tb = "DRACO",
      Eb = 0,
      Yb = 1,
      Bb = 0,
      eb = 1,
      vb = 32768;

    function Lb(bb) {
      const ab = new DataView(bb.buffer, bb.byteOffset, bb.byteLength);
      let Ub = 0;
      const Ab = () => {
          if (Ub >= bb.byteLength) throw new RangeError("past the stream");
          return bb[Ub++]
        },
        Mb = () => {
          if (Ub + 4 > bb.byteLength) throw new RangeError("past the stream");
          const Ab = ab.getUint32(Ub, !0);
          return Ub += 4, Ab
        },
        Lb = () => {
          let bb = 0;
          for (let ab = 0; ab < 35; ab += 7) {
            const Ub = Ab();
            if (bb += (127 & Ub) * 2 ** ab, 0 === (128 & Ub)) return bb
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let bb = 0; bb < Tb.length; bb++)
          if (Ab() !== Tb.charCodeAt(bb)) return null;
        const ab = Ab(),
          Pb = Ab(),
          Xb = Ab(),
          jb = Ab(),
          Rb = Ab() | Ab() << 8;
        if (2 !== ab) return null;
        0 !== (Rb & vb) && function(bb, ab, Ub) {
          const Ab = () => {
              ab(Ub())
            },
            Mb = () => {
              let Ub = 1,
                Mb = !0;
              for (; Ub > 0;) {
                Ub--, Mb || Ab(), Mb = !1;
                const Tb = bb();
                for (let Ub = 0; Ub < Tb; Ub++) Ab(), ab(bb());
                Ub += bb()
              }
            },
            Tb = bb();
          for (let Eb = 0; Eb < Tb; Eb++) bb(), Mb();
          Mb()
        }(Lb, (ab => {
          if (Ub + ab > bb.byteLength) throw new RangeError("past the stream");
          Ub += ab
        }), Ab);
        const kb = Pb < 2 ? Mb : Lb;
        if (Xb === Eb) return {
          faces: 0,
          vertices: Mb()
        };
        if (Xb !== Yb) return null;
        if (jb === Bb) {
          return {
            faces: kb(),
            vertices: kb()
          }
        }
        if (jb !== eb) return null;
        Ab(), Pb < 2 && Lb();
        const yb = Lb();
        return {
          faces: Lb(),
          vertices: yb
        }
      } catch {
        return null
      }
    }

    function Pb(bb, ab, Ub) {
      var Ab, Mb;
      if (null === (Ab = null === (Mb = bb.extensionsUsed) || void 0 === Mb ? void 0 : Mb.includes("KHR_draco_mesh_compression")) || void 0 === Ab || !Ab) return null;
      for (const jb of null !== (Tb = bb.meshes) && void 0 !== Tb ? Tb : []) {
        var Tb;
        for (const Ab of jb.primitives) {
          var Eb, Yb, Bb, eb, vb, Pb;
          const Mb = null === (Eb = Ab.extensions) || void 0 === Eb ? void 0 : Eb.KHR_draco_mesh_compression;
          if ("object" !== typeof Mb || null === Mb) continue;
          const Tb = null === (Yb = bb.bufferViews) || void 0 === Yb ? void 0 : Yb[Mb.bufferView];
          if (null === ab || void 0 === Tb) return Xb;
          const jb = null !== (Bb = Tb.byteOffset) && void 0 !== Bb ? Bb : 0,
            Rb = Lb(ab.subarray(jb, jb + Tb.byteLength));
          if (null === Rb && !Ub) continue;
          const kb = null !== (eb = bb.accessors) && void 0 !== eb ? eb : [],
            yb = null === (vb = kb[Ab.attributes.POSITION]) || void 0 === vb ? void 0 : vb.count,
            Zb = void 0 === Ab.indices ? 0 : null === (Pb = kb[Ab.indices]) || void 0 === Pb ? void 0 : Pb.count;
          if (null === Rb || void 0 === yb || void 0 === Zb || 3 * Rb.faces !== Zb || Rb.vertices > yb) return Xb
        }
      }
      return null
    }
    const Xb = "has a Draco stream whose counts don't match its accessors";

    function jb(bb) {
      var ab;
      return null !== (ab = bb.name) && void 0 !== ab ? ab : bb.fromFolderName || bb.id
    }

    function Rb(bb, ab, Ub) {
      return `Texture pack "${bb}": model "${ab}" was not loaded because it ${Ub}. The default model is used instead.`
    }

    function kb(bb, ab, Ub) {
      let {
        strictDraco: Tb = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Eb = {};
      for (const [Yb, Bb] of Object.entries(ab)) {
        let ab;
        if (Bb.startsWith("data:")) try {
          const bb = new Uint8Array((0, Mb.n)(Bb));
          if (ab = (0, Ab.c)(bb), null === ab) {
            const {
              json: Ub,
              bin: Ab
            } = (0, Mb.v)(bb);
            ab = Pb(Ub, Ab, Tb)
          }
        } catch {
          ab = "is not a binary glTF 2.0 file"
        } else ab = "loads data from outside the file";
        ab && (Eb[Yb] = ab, Ub && console.warn(Rb(bb, Yb, ab)))
      }
      return Eb
    }

    function yb(bb, ab) {
      const Ub = Object.keys(ab);
      if (0 === Ub.length) return null;
      if (1 === Ub.length) return Rb(bb, Ub[0], ab[Ub[0]]);
      const Ab = Ub.map((bb => `"${bb}" ${ab[bb]}`)).join("; ");
      return `Texture pack "${bb}": ${Ub.length} models were not loaded (${Ab}). The default models are used instead.`
    }
  },
  60618: (bb, ab, Ub) => {
    Ub.d(ab, {
      packAssets: () => yb
    });
    var Ab = Ub(2890),
      Mb = Ub(2927),
      Tb = Ub(8979),
      Eb = Ub(2946),
      Yb = Ub(2965);

    function Bb(bb, ab, Ub, Ab) {
      const Mb = `${(0,Eb.c)(bb,ab)}|sheets${Ub}`;
      return Ab === Yb.b ? Mb : `${Mb}|layers${Ab}`
    }
    var eb = Ub(2967),
      vb = Ub(2910),
      Lb = Ub(2897),
      Pb = Ub(2951);
    var Xb = Ub(42434);
    const jb = 256;
    let Rb = null,
      kb = null;

    function yb(bb) {
      var ab;
      let Ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Yb.b;
      if ((null === (ab = Rb) || void 0 === ab ? void 0 : ab.pack) === bb.pack && Rb.maxLayerWidth === Ub) return Rb.assets;
      const yb = (0, Xb.g)(bb.pack, (0, Xb.k)(bb));
      if (null === yb || !(0, Mb.h)(yb)) return Promise.resolve(null);
      const Db = async function(bb, ab, Ub) {
        var Xb;
        const Rb = null !== (Xb = bb.textureOverrides) && void 0 !== Xb ? Xb : {},
          {
            id: yb,
            version: Db
          } = bb.metaData,
          zb = ab && yb !== Ab.q.CUSTOM,
          xb = {};
        zb && (kb = xb);
        let ib, fb, mb = zb ? await async function(bb, ab, Ub, Ab) {
          const Mb = Bb(bb, ab, Ub, Yb.b),
            Tb = Bb(bb, ab, Ub, Ab),
            eb = await (0, Eb.h)((bb => bb === Mb || bb === Tb));
          return null !== eb && (Ab === Yb.b || eb.blockAtlasWidth <= Ab) ? eb : null
        }(yb, Db, jb, Ub): null;
        if (null === mb) {
          const {
            blockMetadata: bb,
            getDefaultTexture: ab,
            textureNameToIndex: Tb
          } = await (0, Mb.m)(), Yb = (0, vb.d)(bb, ((bb, Ub) => ({
            url: Zb(Rb, ab, bb, "block" === Ub ? Lb.f.BLOCK : Lb.f.ITEM)
          }))), eb = await
          function(bb, ab, Ub, Ab, Mb, Tb) {
            return (0, Pb.d)((Eb => Eb.WasmTextureWorker.generateRequired(bb, ab, Ub, Ab, Mb, Tb)))
          }(bb, Tb, Yb, yb === Ab.b, Ub, jb), Xb = eb.assets;
          mb = {
            ...Xb,
            averageColors: {}
          }, ib = eb.averageColors(), zb && (fb = ib.then((async bb => {
            null !== bb && kb === xb && await
            function(bb, ab, Ub, Ab, Mb) {
              return (0, Eb.l)(Bb(bb, ab, Ab, Mb), Ub)
            }(yb, Db, {
              ...Xb,
              averageColors: bb
            }, jb, eb.layerCap)
          })))
        }
        return function(bb, ab) {
          var Ub, Ab;
          let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Promise.resolve((Yb = bb.averageColors, 0 === Object.keys(null !== Yb && void 0 !== Yb ? Yb : {}).length ? null : bb.averageColors)),
            Eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Promise.resolve();
          var Yb;
          const Bb = null !== (Ub = ab.textureOverrides) && void 0 !== Ub ? Ub : {},
            vb = null !== (Ab = ab.modelOverrides) && void 0 !== Ab ? Ab : {},
            Lb = 0 === Object.keys(vb).length ? {} : (0, Tb.refusedPackModels)((0, Tb.packDisplayName)(ab.metaData), vb, !0, {
              strictDraco: !0
            }),
            {
              animatedBlockTextures: Pb,
              rotatedBlockTextures: Xb
            } = bb,
            jb = bb => {
              var ab, Ub;
              return null !== (ab = null !== (Ub = Pb[bb]) && void 0 !== Ub ? Ub : Xb[bb]) && void 0 !== ab ? ab : null
            };
          return {
            terrain: {
              atlasSheets: bb.blockAtlasArr,
              texture: jb
            },
            sheetPixels: [...bb.blockAtlasPixels],
            heldUntil: Eb,
            sheetLayout: bb.imagesPerAtlas,
            sheetWidth: bb.blockAtlasWidth,
            armourAtlasUrl: bb.armourAtlas,
            texture: bb => {
              var ab, Ub;
              return null !== (ab = null !== (Ub = jb(bb)) && void 0 !== Ub ? Ub : (0, eb.b)(Bb, bb)) && void 0 !== ab ? ab : null
            },
            model: bb => void 0 === Lb[bb] && vb[bb] || null,
            averageColours: Mb
          }
        }(mb, bb, ib, fb)
      }(yb, null === bb.gameSource, Ub), zb = {
        pack: bb.pack,
        maxLayerWidth: Ub,
        assets: Db
      };
      return Rb = zb, Db.catch((() => {
        Rb === zb && (Rb = null)
      })), Db
    }

    function Zb(bb, ab, Ab, Mb) {
      const Tb = (0, eb.b)(bb, Ab);
      if (Tb) return Tb;
      try {
        return ab(Ab, Mb).url
      } catch {
        return Ub(3009)
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);