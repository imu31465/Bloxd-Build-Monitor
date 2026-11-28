export const id = 53;
export const ids = [53, 233];
export const modules = {
  35416: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      packDisplayName: () => Eb,
      packModelMessage: () => Fb,
      packModelSummary: () => sb,
      refusedPackModels: () => Bb
    });
    var eb = Mb(35420),
      Hb = Mb(35423);
    const pb = "DRACO",
      Vb = 0,
      gb = 1,
      lb = 0,
      Lb = 1,
      Ib = 32768;

    function Ob(bb) {
      const wb = new DataView(bb.buffer, bb.byteOffset, bb.byteLength);
      let Mb = 0;
      const eb = () => {
          if (Mb >= bb.byteLength) throw new RangeError("past the stream");
          return bb[Mb++]
        },
        Hb = () => {
          if (Mb + 4 > bb.byteLength) throw new RangeError("past the stream");
          const eb = wb.getUint32(Mb, !0);
          return Mb += 4, eb
        },
        Ob = () => {
          let bb = 0;
          for (let wb = 0; wb < 35; wb += 7) {
            const Mb = eb();
            if (bb += (127 & Mb) * 2 ** wb, 0 === (128 & Mb)) return bb
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let bb = 0; bb < pb.length; bb++)
          if (eb() !== pb.charCodeAt(bb)) return null;
        const wb = eb(),
          Ub = eb(),
          tb = eb(),
          Cb = eb(),
          Eb = eb() | eb() << 8;
        if (2 !== wb) return null;
        0 !== (Eb & Ib) && function(bb, wb, Mb) {
          const eb = () => {
              wb(Mb())
            },
            Hb = () => {
              let Mb = 1,
                Hb = !0;
              for (; Mb > 0;) {
                Mb--, Hb || eb(), Hb = !1;
                const pb = bb();
                for (let Mb = 0; Mb < pb; Mb++) eb(), wb(bb());
                Mb += bb()
              }
            },
            pb = bb();
          for (let Vb = 0; Vb < pb; Vb++) bb(), Hb();
          Hb()
        }(Ob, (wb => {
          if (Mb + wb > bb.byteLength) throw new RangeError("past the stream");
          Mb += wb
        }), eb);
        const Fb = Ub < 2 ? Hb : Ob;
        if (tb === Vb) return {
          faces: 0,
          vertices: Hb(),
          minor: Ub
        };
        if (tb !== gb) return null;
        if (Cb === lb) {
          return {
            faces: Fb(),
            vertices: Fb(),
            minor: Ub
          }
        }
        if (Cb !== Lb) return null;
        eb(), Ub < 2 && Ob();
        const Bb = Ob();
        return {
          faces: Ob(),
          vertices: Bb,
          minor: Ub
        }
      } catch {
        return null
      }
    }

    function Ub(bb, wb, Mb) {
      var eb, Hb;
      if (null === (eb = null === (Hb = bb.extensionsUsed) || void 0 === Hb ? void 0 : Hb.includes("KHR_draco_mesh_compression")) || void 0 === eb || !eb) return null;
      for (const Eb of null !== (pb = bb.meshes) && void 0 !== pb ? pb : []) {
        var pb;
        for (const eb of Eb.primitives) {
          var Vb, gb, lb, Lb, Ib, Ub;
          const Hb = null === (Vb = eb.extensions) || void 0 === Vb ? void 0 : Vb.KHR_draco_mesh_compression;
          if ("object" !== typeof Hb || null === Hb) continue;
          const pb = null === (gb = bb.bufferViews) || void 0 === gb ? void 0 : gb[Hb.bufferView];
          if (null === wb || void 0 === pb) return tb;
          const Eb = null !== (lb = pb.byteOffset) && void 0 !== lb ? lb : 0,
            Fb = Ob(wb.subarray(Eb, Eb + pb.byteLength));
          if (null === Fb && !Mb) continue;
          const Bb = null !== (Lb = bb.accessors) && void 0 !== Lb ? Lb : [],
            sb = null === (Ib = Bb[eb.attributes.POSITION]) || void 0 === Ib ? void 0 : Ib.count,
            mb = void 0 === eb.indices ? 0 : null === (Ub = Bb[eb.indices]) || void 0 === Ub ? void 0 : Ub.count;
          if (null === Fb || void 0 === sb || void 0 === mb || 3 * Fb.faces !== mb || Fb.vertices > sb) return tb;
          if (Mb && Fb.minor < 2) return Cb
        }
      }
      return null
    }
    const tb = "has a Draco stream whose counts don't match its accessors",
      Cb = "has a Draco stream too old to decode: export it again";

    function Eb(bb) {
      var wb;
      return null !== (wb = bb.name) && void 0 !== wb ? wb : bb.fromFolderName || bb.id
    }

    function Fb(bb, wb, Mb) {
      return `Texture pack "${bb}": model "${wb}" was not loaded because it ${Mb}. The default model is used instead.`
    }

    function Bb(bb, wb, Mb) {
      let {
        strictDraco: pb = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Vb = {};
      for (const [gb, lb] of Object.entries(wb)) {
        let wb;
        if (lb.startsWith("data:")) try {
          const bb = new Uint8Array((0, Hb.u)(lb));
          if (wb = (0, eb.e)(bb), null === wb) {
            const {
              json: Mb,
              bin: eb
            } = (0, Hb.C)(bb);
            wb = Ub(Mb, eb, pb)
          }
        } catch {
          wb = "is not a binary glTF 2.0 file"
        } else wb = "loads data from outside the file";
        wb && (Vb[gb] = wb, Mb && console.warn(Fb(bb, gb, wb)))
      }
      return Vb
    }

    function sb(bb, wb) {
      const Mb = Object.keys(wb);
      if (0 === Mb.length) return null;
      if (1 === Mb.length) return Fb(bb, Mb[0], wb[Mb[0]]);
      const eb = Mb.map((bb => `"${bb}" ${wb[bb]}`)).join("; ");
      return `Texture pack "${bb}": ${Mb.length} models were not loaded (${eb}). The default models are used instead.`
    }
  },
  64631: (bb, wb, Mb) => {
    Mb.d(wb, {
      packAssets: () => Bb
    });
    var eb = Mb(2380),
      Hb = Mb(2364),
      pb = Mb(35416),
      Vb = Mb(4581),
      gb = Mb(4604);

    function lb(bb, wb, Mb, eb) {
      const Hb = `${(0,Vb.d)(bb,wb)}|sheets${Mb}`;
      return eb === gb.d ? Hb : `${Hb}|layers${eb}`
    }
    var Lb = Mb(4607),
      Ib = Mb(4551),
      Ob = Mb(4539),
      Ub = Mb(4587);
    var tb = Mb(54897);
    const Cb = 256;
    let Eb = null,
      Fb = null;

    function Bb(bb) {
      var wb;
      let Mb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gb.d;
      if ((null === (wb = Eb) || void 0 === wb ? void 0 : wb.pack) === bb.pack && Eb.maxLayerWidth === Mb) return Eb.assets;
      const Bb = (0, tb.f)(bb.pack, (0, tb.l)(bb));
      if (null === Bb || !(0, Hb.f)(Bb)) return Promise.resolve(null);
      const mb = async function(bb, wb, Mb) {
        var tb;
        const Eb = null !== (tb = bb.textureOverrides) && void 0 !== tb ? tb : {},
          {
            id: Bb,
            version: mb
          } = bb.metaData,
          hb = wb && Bb !== eb.t.CUSTOM,
          zb = {};
        hb && (Fb = zb);
        let Xb, xb, jb = hb ? await async function(bb, wb, Mb, eb) {
          const Hb = lb(bb, wb, Mb, gb.d),
            pb = lb(bb, wb, Mb, eb),
            Lb = await (0, Vb.i)((bb => bb === Hb || bb === pb));
          return null !== Lb && (eb === gb.d || Lb.blockAtlasWidth <= eb) ? Lb : null
        }(Bb, mb, Cb, Mb): null;
        if (null === jb) {
          const {
            blockMetadata: bb,
            getDefaultTexture: wb,
            textureNameToIndex: pb
          } = await (0, Hb.m)(), gb = (0, Ib.e)(bb, ((bb, Mb) => ({
            url: sb(Eb, wb, bb, "block" === Mb ? Ob.d.BLOCK : Ob.d.ITEM)
          }))), Lb = await
          function(bb, wb, Mb, eb, Hb, pb) {
            return (0, Ub.e)((Vb => Vb.WasmTextureWorker.generateRequired(bb, wb, Mb, eb, Hb, pb)))
          }(bb, pb, gb, Bb === eb.d, Mb, Cb), tb = Lb.assets;
          jb = {
            ...tb,
            averageColors: {}
          }, Xb = Lb.averageColors(), hb && (xb = Xb.then((async bb => {
            null !== bb && Fb === zb && await
            function(bb, wb, Mb, eb, Hb) {
              return (0, Vb.o)(lb(bb, wb, eb, Hb), Mb)
            }(Bb, mb, {
              ...tb,
              averageColors: bb
            }, Cb, Lb.layerCap)
          })))
        }
        return function(bb, wb) {
          var Mb, eb;
          let Hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Promise.resolve((gb = bb.averageColors, 0 === Object.keys(null !== gb && void 0 !== gb ? gb : {}).length ? null : bb.averageColors)),
            Vb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Promise.resolve();
          var gb;
          const lb = null !== (Mb = wb.textureOverrides) && void 0 !== Mb ? Mb : {},
            Ib = null !== (eb = wb.modelOverrides) && void 0 !== eb ? eb : {},
            Ob = 0 === Object.keys(Ib).length ? {} : (0, pb.refusedPackModels)((0, pb.packDisplayName)(wb.metaData), Ib, !0, {
              strictDraco: !0
            }),
            {
              animatedBlockTextures: Ub,
              rotatedBlockTextures: tb
            } = bb,
            Cb = bb => {
              var wb, Mb;
              return null !== (wb = null !== (Mb = Ub[bb]) && void 0 !== Mb ? Mb : tb[bb]) && void 0 !== wb ? wb : null
            };
          return {
            terrain: {
              atlasSheets: bb.blockAtlasArr,
              texture: Cb
            },
            sheetPixels: [...bb.blockAtlasPixels],
            heldUntil: Vb,
            sheetLayout: bb.imagesPerAtlas,
            sheetWidth: bb.blockAtlasWidth,
            armourAtlasUrl: bb.armourAtlas,
            texture: bb => {
              var wb, Mb;
              return null !== (wb = null !== (Mb = Cb(bb)) && void 0 !== Mb ? Mb : (0, Lb.d)(lb, bb)) && void 0 !== wb ? wb : null
            },
            model: bb => void 0 === Ob[bb] && Ib[bb] || null,
            averageColours: Hb
          }
        }(jb, bb, Xb, xb)
      }(Bb, null === bb.gameSource, Mb), hb = {
        pack: bb.pack,
        maxLayerWidth: Mb,
        assets: mb
      };
      return Eb = hb, mb.catch((() => {
        Eb === hb && (Eb = null)
      })), mb
    }

    function sb(bb, wb, eb, Hb) {
      const pb = (0, Lb.d)(bb, eb);
      if (pb) return pb;
      try {
        return wb(eb, Hb).url
      } catch {
        return Mb(4682)
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);