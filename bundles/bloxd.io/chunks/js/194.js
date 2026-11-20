export const id = 194;
export const ids = [194];
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
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);