export const id = 194;
export const ids = [194];
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
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);