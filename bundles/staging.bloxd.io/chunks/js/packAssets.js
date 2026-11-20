export const id = 44;
export const ids = [44, 194];
export const modules = {
  8993: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      packDisplayName: () => mb,
      packModelMessage: () => lb,
      packModelSummary: () => eb,
      refusedPackModels: () => Qb
    });
    var kb = sb(8995),
      Wb = sb(8999);
    const ab = "DRACO",
      Tb = 0,
      Ub = 1,
      Ib = 0,
      Hb = 1,
      fb = 32768;

    function Mb(bb) {
      const cb = new DataView(bb.buffer, bb.byteOffset, bb.byteLength);
      let sb = 0;
      const kb = () => {
          if (sb >= bb.byteLength) throw new RangeError("past the stream");
          return bb[sb++]
        },
        Wb = () => {
          if (sb + 4 > bb.byteLength) throw new RangeError("past the stream");
          const kb = cb.getUint32(sb, !0);
          return sb += 4, kb
        },
        Mb = () => {
          let bb = 0;
          for (let cb = 0; cb < 35; cb += 7) {
            const sb = kb();
            if (bb += (127 & sb) * 2 ** cb, 0 === (128 & sb)) return bb
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let bb = 0; bb < ab.length; bb++)
          if (kb() !== ab.charCodeAt(bb)) return null;
        const cb = kb(),
          Xb = kb(),
          nb = kb(),
          mb = kb(),
          lb = kb() | kb() << 8;
        if (2 !== cb) return null;
        0 !== (lb & fb) && function(bb, cb, sb) {
          const kb = () => {
              cb(sb())
            },
            Wb = () => {
              let sb = 1,
                Wb = !0;
              for (; sb > 0;) {
                sb--, Wb || kb(), Wb = !1;
                const ab = bb();
                for (let sb = 0; sb < ab; sb++) kb(), cb(bb());
                sb += bb()
              }
            },
            ab = bb();
          for (let Tb = 0; Tb < ab; Tb++) bb(), Wb();
          Wb()
        }(Mb, (cb => {
          if (sb + cb > bb.byteLength) throw new RangeError("past the stream");
          sb += cb
        }), kb);
        const Qb = Xb < 2 ? Wb : Mb;
        if (nb === Tb) return {
          faces: 0,
          vertices: Wb()
        };
        if (nb !== Ub) return null;
        if (mb === Ib) {
          return {
            faces: Qb(),
            vertices: Qb()
          }
        }
        if (mb !== Hb) return null;
        kb(), Xb < 2 && Mb();
        const eb = Mb();
        return {
          faces: Mb(),
          vertices: eb
        }
      } catch {
        return null
      }
    }

    function Xb(bb, cb, sb) {
      var kb, Wb;
      if (null === (kb = null === (Wb = bb.extensionsUsed) || void 0 === Wb ? void 0 : Wb.includes("KHR_draco_mesh_compression")) || void 0 === kb || !kb) return null;
      for (const mb of null !== (ab = bb.meshes) && void 0 !== ab ? ab : []) {
        var ab;
        for (const kb of mb.primitives) {
          var Tb, Ub, Ib, Hb, fb, Xb;
          const Wb = null === (Tb = kb.extensions) || void 0 === Tb ? void 0 : Tb.KHR_draco_mesh_compression;
          if ("object" !== typeof Wb || null === Wb) continue;
          const ab = null === (Ub = bb.bufferViews) || void 0 === Ub ? void 0 : Ub[Wb.bufferView];
          if (null === cb || void 0 === ab) return nb;
          const mb = null !== (Ib = ab.byteOffset) && void 0 !== Ib ? Ib : 0,
            lb = Mb(cb.subarray(mb, mb + ab.byteLength));
          if (null === lb && !sb) continue;
          const Qb = null !== (Hb = bb.accessors) && void 0 !== Hb ? Hb : [],
            eb = null === (fb = Qb[kb.attributes.POSITION]) || void 0 === fb ? void 0 : fb.count,
            Cb = void 0 === kb.indices ? 0 : null === (Xb = Qb[kb.indices]) || void 0 === Xb ? void 0 : Xb.count;
          if (null === lb || void 0 === eb || void 0 === Cb || 3 * lb.faces !== Cb || lb.vertices > eb) return nb
        }
      }
      return null
    }
    const nb = "has a Draco stream whose counts don't match its accessors";

    function mb(bb) {
      var cb;
      return null !== (cb = bb.name) && void 0 !== cb ? cb : bb.fromFolderName || bb.id
    }

    function lb(bb, cb, sb) {
      return `Texture pack "${bb}": model "${cb}" was not loaded because it ${sb}. The default model is used instead.`
    }

    function Qb(bb, cb, sb) {
      let {
        strictDraco: ab = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Tb = {};
      for (const [Ub, Ib] of Object.entries(cb)) {
        let cb;
        if (Ib.startsWith("data:")) try {
          const bb = new Uint8Array((0, Wb.u)(Ib));
          if (cb = (0, kb.d)(bb), null === cb) {
            const {
              json: sb,
              bin: kb
            } = (0, Wb.z)(bb);
            cb = Xb(sb, kb, ab)
          }
        } catch {
          cb = "is not a binary glTF 2.0 file"
        } else cb = "loads data from outside the file";
        cb && (Tb[Ub] = cb, sb && console.warn(lb(bb, Ub, cb)))
      }
      return Tb
    }

    function eb(bb, cb) {
      const sb = Object.keys(cb);
      if (0 === sb.length) return null;
      if (1 === sb.length) return lb(bb, sb[0], cb[sb[0]]);
      const kb = sb.map((bb => `"${bb}" ${cb[bb]}`)).join("; ");
      return `Texture pack "${bb}": ${sb.length} models were not loaded (${kb}). The default models are used instead.`
    }
  },
  60911: (bb, cb, sb) => {
    sb.d(cb, {
      packAssets: () => eb
    });
    var kb = sb(2916),
      Wb = sb(2946),
      ab = sb(8993),
      Tb = sb(2967),
      Ub = sb(3019);

    function Ib(bb, cb, sb, kb) {
      const Wb = `${(0,Tb.b)(bb,cb)}|sheets${sb}`;
      return kb === Ub.b ? Wb : `${Wb}|layers${kb}`
    }
    var Hb = sb(3024),
      fb = sb(2930),
      Mb = sb(2920),
      Xb = sb(2974);
    var nb = sb(42678);
    const mb = 256;
    let lb = null,
      Qb = null;

    function eb(bb) {
      var cb;
      let sb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ub.b;
      if ((null === (cb = lb) || void 0 === cb ? void 0 : cb.pack) === bb.pack && lb.maxLayerWidth === sb) return lb.assets;
      const eb = (0, nb.d)(bb.pack, (0, nb.f)(bb));
      if (null === eb || !(0, Wb.h)(eb)) return Promise.resolve(null);
      const Nb = async function(bb, cb, sb) {
        var nb;
        const lb = null !== (nb = bb.textureOverrides) && void 0 !== nb ? nb : {},
          {
            id: eb,
            version: Nb
          } = bb.metaData,
          Vb = cb && eb !== kb.o.CUSTOM,
          Lb = {};
        Vb && (Qb = Lb);
        let ub, Yb, hb = Vb ? await async function(bb, cb, sb, kb) {
          const Wb = Ib(bb, cb, sb, Ub.b),
            ab = Ib(bb, cb, sb, kb),
            Hb = await (0, Tb.h)((bb => bb === Wb || bb === ab));
          return null !== Hb && (kb === Ub.b || Hb.blockAtlasWidth <= kb) ? Hb : null
        }(eb, Nb, mb, sb): null;
        if (null === hb) {
          const {
            blockMetadata: bb,
            getDefaultTexture: cb,
            textureNameToIndex: ab
          } = await (0, Wb.m)(), Ub = (0, fb.b)(bb, ((bb, sb) => ({
            url: Cb(lb, cb, bb, "block" === sb ? Mb.f.BLOCK : Mb.f.ITEM)
          }))), Hb = await
          function(bb, cb, sb, kb, Wb, ab) {
            return (0, Xb.e)((Tb => Tb.WasmTextureWorker.generateRequired(bb, cb, sb, kb, Wb, ab)))
          }(bb, ab, Ub, eb === kb.c, sb, mb), nb = Hb.assets;
          hb = {
            ...nb,
            averageColors: {}
          }, ub = Hb.averageColors(), Vb && (Yb = ub.then((async bb => {
            null !== bb && Qb === Lb && await
            function(bb, cb, sb, kb, Wb) {
              return (0, Tb.k)(Ib(bb, cb, kb, Wb), sb)
            }(eb, Nb, {
              ...nb,
              averageColors: bb
            }, mb, Hb.layerCap)
          })))
        }
        return function(bb, cb) {
          var sb, kb;
          let Wb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Promise.resolve((Ub = bb.averageColors, 0 === Object.keys(null !== Ub && void 0 !== Ub ? Ub : {}).length ? null : bb.averageColors)),
            Tb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Promise.resolve();
          var Ub;
          const Ib = null !== (sb = cb.textureOverrides) && void 0 !== sb ? sb : {},
            fb = null !== (kb = cb.modelOverrides) && void 0 !== kb ? kb : {},
            Mb = 0 === Object.keys(fb).length ? {} : (0, ab.refusedPackModels)((0, ab.packDisplayName)(cb.metaData), fb, !0, {
              strictDraco: !0
            }),
            {
              animatedBlockTextures: Xb,
              rotatedBlockTextures: nb
            } = bb,
            mb = bb => {
              var cb, sb;
              return null !== (cb = null !== (sb = Xb[bb]) && void 0 !== sb ? sb : nb[bb]) && void 0 !== cb ? cb : null
            };
          return {
            terrain: {
              atlasSheets: bb.blockAtlasArr,
              texture: mb
            },
            sheetPixels: [...bb.blockAtlasPixels],
            heldUntil: Tb,
            sheetLayout: bb.imagesPerAtlas,
            sheetWidth: bb.blockAtlasWidth,
            armourAtlasUrl: bb.armourAtlas,
            texture: bb => {
              var cb, sb;
              return null !== (cb = null !== (sb = mb(bb)) && void 0 !== sb ? sb : (0, Hb.c)(Ib, bb)) && void 0 !== cb ? cb : null
            },
            model: bb => void 0 === Mb[bb] && fb[bb] || null,
            averageColours: Wb
          }
        }(hb, bb, ub, Yb)
      }(eb, null === bb.gameSource, sb), Vb = {
        pack: bb.pack,
        maxLayerWidth: sb,
        assets: Nb
      };
      return lb = Vb, Nb.catch((() => {
        lb === Vb && (lb = null)
      })), Nb
    }

    function Cb(bb, cb, kb, Wb) {
      const ab = (0, Hb.c)(bb, kb);
      if (ab) return ab;
      try {
        return cb(kb, Wb).url
      } catch {
        return sb(3080)
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);