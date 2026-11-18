export const id = 184;
export const ids = [184];
export const modules = {
  33189: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      packDisplayName: () => sy,
      packModelMessage: () => Sy,
      packModelSummary: () => ly,
      refusedPackModels: () => Ey
    });
    var Uy = Wy(33194),
      hy = Wy(33198);
    const fy = "DRACO",
      Zy = 0,
      cb = 1,
      Py = 0,
      oy = 1,
      By = 32768;

    function Ky(yb) {
      const bb = new DataView(yb.buffer, yb.byteOffset, yb.byteLength);
      let Wy = 0;
      const Uy = () => {
          if (Wy >= yb.byteLength) throw new RangeError("past the stream");
          return yb[Wy++]
        },
        hy = () => {
          if (Wy + 4 > yb.byteLength) throw new RangeError("past the stream");
          const Uy = bb.getUint32(Wy, !0);
          return Wy += 4, Uy
        },
        Ky = () => {
          let yb = 0;
          for (let bb = 0; bb < 35; bb += 7) {
            const Wy = Uy();
            if (yb += (127 & Wy) * 2 ** bb, 0 === (128 & Wy)) return yb
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let yb = 0; yb < fy.length; yb++)
          if (Uy() !== fy.charCodeAt(yb)) return null;
        const bb = Uy(),
          ey = Uy(),
          qb = Uy(),
          sy = Uy(),
          Sy = Uy() | Uy() << 8;
        if (2 !== bb) return null;
        0 !== (Sy & By) && function(yb, bb, Wy) {
          const Uy = () => {
              bb(Wy())
            },
            hy = () => {
              let Wy = 1,
                hy = !0;
              for (; Wy > 0;) {
                Wy--, hy || Uy(), hy = !1;
                const fy = yb();
                for (let Wy = 0; Wy < fy; Wy++) Uy(), bb(yb());
                Wy += yb()
              }
            },
            fy = yb();
          for (let Zy = 0; Zy < fy; Zy++) yb(), hy();
          hy()
        }(Ky, (bb => {
          if (Wy + bb > yb.byteLength) throw new RangeError("past the stream");
          Wy += bb
        }), Uy);
        const Ey = ey < 2 ? hy : Ky;
        if (qb === Zy) return {
          faces: 0,
          vertices: hy()
        };
        if (qb !== cb) return null;
        if (sy === Py) {
          return {
            faces: Ey(),
            vertices: Ey()
          }
        }
        if (sy !== oy) return null;
        Uy(), ey < 2 && Ky();
        const ly = Ky();
        return {
          faces: Ky(),
          vertices: ly
        }
      } catch {
        return null
      }
    }

    function ey(yb, bb, Wy) {
      var Uy, hy;
      if (null === (Uy = null === (hy = yb.extensionsUsed) || void 0 === hy ? void 0 : hy.includes("KHR_draco_mesh_compression")) || void 0 === Uy || !Uy) return null;
      for (const sy of null !== (fy = yb.meshes) && void 0 !== fy ? fy : []) {
        var fy;
        for (const Uy of sy.primitives) {
          var Zy, cb, Py, oy, By, ey;
          const hy = null === (Zy = Uy.extensions) || void 0 === Zy ? void 0 : Zy.KHR_draco_mesh_compression;
          if ("object" !== typeof hy || null === hy) continue;
          const fy = null === (cb = yb.bufferViews) || void 0 === cb ? void 0 : cb[hy.bufferView];
          if (null === bb || void 0 === fy) return qb;
          const sy = null !== (Py = fy.byteOffset) && void 0 !== Py ? Py : 0,
            Sy = Ky(bb.subarray(sy, sy + fy.byteLength));
          if (null === Sy && !Wy) continue;
          const Ey = null !== (oy = yb.accessors) && void 0 !== oy ? oy : [],
            ly = null === (By = Ey[Uy.attributes.POSITION]) || void 0 === By ? void 0 : By.count,
            mb = void 0 === Uy.indices ? 0 : null === (ey = Ey[Uy.indices]) || void 0 === ey ? void 0 : ey.count;
          if (null === Sy || void 0 === ly || void 0 === mb || 3 * Sy.faces !== mb || Sy.vertices > ly) return qb
        }
      }
      return null
    }
    const qb = "has a Draco stream whose counts don't match its accessors";

    function sy(yb) {
      var bb;
      return null !== (bb = yb.name) && void 0 !== bb ? bb : yb.fromFolderName || yb.id
    }

    function Sy(yb, bb, Wy) {
      return `Texture pack "${yb}": model "${bb}" was not loaded because it ${Wy}. The default model is used instead.`
    }

    function Ey(yb, bb, Wy) {
      let {
        strictDraco: fy = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Zy = {};
      for (const [cb, Py] of Object.entries(bb)) {
        let bb;
        if (Py.startsWith("data:")) try {
          const yb = new Uint8Array((0, hy.t)(Py));
          if (bb = (0, Uy.c)(yb), null === bb) {
            const {
              json: Wy,
              bin: Uy
            } = (0, hy.A)(yb);
            bb = ey(Wy, Uy, fy)
          }
        } catch {
          bb = "is not a binary glTF 2.0 file"
        } else bb = "loads data from outside the file";
        bb && (Zy[cb] = bb, Wy && console.warn(Sy(yb, cb, bb)))
      }
      return Zy
    }

    function ly(yb, bb) {
      const Wy = Object.keys(bb);
      if (0 === Wy.length) return null;
      if (1 === Wy.length) return Sy(yb, Wy[0], bb[Wy[0]]);
      const Uy = Wy.map((yb => `"${yb}" ${bb[yb]}`)).join("; ");
      return `Texture pack "${yb}": ${Wy.length} models were not loaded (${Uy}). The default models are used instead.`
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);