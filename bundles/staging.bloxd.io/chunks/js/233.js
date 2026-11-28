export const id = 233;
export const ids = [233];
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
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);