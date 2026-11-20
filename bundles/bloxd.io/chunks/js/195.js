export const id = 195;
export const ids = [195];
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
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);