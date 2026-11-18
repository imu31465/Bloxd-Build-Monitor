export const id = 292;
export const ids = [292];
export const modules = {
  40344: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      _TGATextureLoader: () => cb
    });
    var Uy = Wy(37350);

    function hy(yb) {
      let bb = 0;
      return {
        id_length: yb[bb++],
        colormap_type: yb[bb++],
        image_type: yb[bb++],
        colormap_index: yb[bb++] | yb[bb++] << 8,
        colormap_length: yb[bb++] | yb[bb++] << 8,
        colormap_size: yb[bb++],
        origin: [yb[bb++] | yb[bb++] << 8, yb[bb++] | yb[bb++] << 8],
        width: yb[bb++] | yb[bb++] << 8,
        height: yb[bb++] | yb[bb++] << 8,
        pixel_size: yb[bb++],
        flags: yb[17]
      }
    }

    function fy(yb, bb) {
      if (bb.length < 19) return void Uy.b.Error("Unable to load TGA file - Not enough data to contain header");
      let Wy = 18;
      const fy = hy(bb);
      if (fy.id_length + Wy > bb.length) return void Uy.b.Error("Unable to load TGA file - Not enough data");
      Wy += fy.id_length;
      let cb, Py = !1,
        oy = !1,
        By = !1;
      switch (fy.image_type) {
        case 9:
          Py = !0;
        case 1:
          oy = !0;
          break;
        case 10:
          Py = !0;
        case 2:
          break;
        case 11:
          Py = !0;
        case 3:
          By = !0
      }
      const Ky = fy.pixel_size >> 3,
        ey = fy.width * fy.height * Ky;
      let qb, sy, Sy, Ey, ly, mb, Cy;
      if (oy && (qb = bb.subarray(Wy, Wy += fy.colormap_length * (fy.colormap_size >> 3))), Py) {
        let yb, Uy, hy;
        cb = new Uint8Array(ey);
        let fy = 0;
        const Zy = new Uint8Array(Ky);
        for (; Wy < ey && fy < ey;)
          if (yb = bb[Wy++], Uy = 1 + (127 & yb), 128 & yb) {
            for (hy = 0; hy < Ky; ++hy) Zy[hy] = bb[Wy++];
            for (hy = 0; hy < Uy; ++hy) cb.set(Zy, fy + hy * Ky);
            fy += Ky * Uy
          } else {
            for (Uy *= Ky, hy = 0; hy < Uy; ++hy) cb[fy + hy] = bb[Wy++];
            fy += Uy
          }
      } else cb = bb.subarray(Wy, Wy + (oy ? fy.width * fy.height : ey));
      switch ((48 & fy.flags) >> 4) {
        default:
        case 2:
          sy = 0, Ey = 1, Cy = fy.width, Sy = 0, ly = 1, mb = fy.height;
          break;
        case 0:
          sy = 0, Ey = 1, Cy = fy.width, Sy = fy.height - 1, ly = -1, mb = -1;
          break;
        case 3:
          sy = fy.width - 1, Ey = -1, Cy = -1, Sy = 0, ly = 1, mb = fy.height;
          break;
        case 1:
          sy = fy.width - 1, Ey = -1, Cy = -1, Sy = fy.height - 1, ly = -1, mb = -1
      }
      const Ty = "_getImageData" + (By ? "Grey" : "") + fy.pixel_size + "bits",
        Vy = Zy[Ty](fy, qb, cb, Sy, ly, mb, sy, Ey, Cy);
      yb.xh()._uploadDataToTextureDirectly(yb, Vy)
    }
    const Zy = {
      GetTGAHeader: hy,
      UploadContent: fy,
      _getImageData8bits: function(yb, bb, Wy, Uy, hy, fy, Zy, cb, Py) {
        const oy = Wy,
          By = bb,
          Ky = yb.width,
          ey = yb.height;
        let qb, sy, Sy, Ey = 0;
        const ly = new Uint8Array(Ky * ey * 4);
        for (Sy = Uy; Sy !== fy; Sy += hy)
          for (sy = Zy; sy !== Py; sy += cb, Ey++) qb = oy[Ey], ly[4 * (sy + Ky * Sy) + 3] = 255, ly[4 * (sy + Ky * Sy) + 2] = By[3 * qb + 0], ly[4 * (sy + Ky * Sy) + 1] = By[3 * qb + 1], ly[4 * (sy + Ky * Sy) + 0] = By[3 * qb + 2];
        return ly
      },
      _getImageData16bits: function(yb, bb, Wy, Uy, hy, fy, Zy, cb, Py) {
        const oy = Wy,
          By = yb.width,
          Ky = yb.height;
        let ey, qb, sy, Sy = 0;
        const Ey = new Uint8Array(By * Ky * 4);
        for (sy = Uy; sy !== fy; sy += hy)
          for (qb = Zy; qb !== Py; qb += cb, Sy += 2) {
            ey = oy[Sy + 0] + (oy[Sy + 1] << 8);
            const yb = 255 * ((31744 & ey) >> 10) / 31 | 0,
              bb = 255 * ((992 & ey) >> 5) / 31 | 0,
              Wy = 255 * (31 & ey) / 31 | 0;
            Ey[4 * (qb + By * sy) + 0] = yb, Ey[4 * (qb + By * sy) + 1] = bb, Ey[4 * (qb + By * sy) + 2] = Wy, Ey[4 * (qb + By * sy) + 3] = 32768 & ey ? 0 : 255
          }
        return Ey
      },
      _getImageData24bits: function(yb, bb, Wy, Uy, hy, fy, Zy, cb, Py) {
        const oy = Wy,
          By = yb.width,
          Ky = yb.height;
        let ey, qb, sy = 0;
        const Sy = new Uint8Array(By * Ky * 4);
        for (qb = Uy; qb !== fy; qb += hy)
          for (ey = Zy; ey !== Py; ey += cb, sy += 3) Sy[4 * (ey + By * qb) + 3] = 255, Sy[4 * (ey + By * qb) + 2] = oy[sy + 0], Sy[4 * (ey + By * qb) + 1] = oy[sy + 1], Sy[4 * (ey + By * qb) + 0] = oy[sy + 2];
        return Sy
      },
      _getImageData32bits: function(yb, bb, Wy, Uy, hy, fy, Zy, cb, Py) {
        const oy = Wy,
          By = yb.width,
          Ky = yb.height;
        let ey, qb, sy = 0;
        const Sy = new Uint8Array(By * Ky * 4);
        for (qb = Uy; qb !== fy; qb += hy)
          for (ey = Zy; ey !== Py; ey += cb, sy += 4) Sy[4 * (ey + By * qb) + 2] = oy[sy + 0], Sy[4 * (ey + By * qb) + 1] = oy[sy + 1], Sy[4 * (ey + By * qb) + 0] = oy[sy + 2], Sy[4 * (ey + By * qb) + 3] = oy[sy + 3];
        return Sy
      },
      _getImageDataGrey8bits: function(yb, bb, Wy, Uy, hy, fy, Zy, cb, Py) {
        const oy = Wy,
          By = yb.width,
          Ky = yb.height;
        let ey, qb, sy, Sy = 0;
        const Ey = new Uint8Array(By * Ky * 4);
        for (sy = Uy; sy !== fy; sy += hy)
          for (qb = Zy; qb !== Py; qb += cb, Sy++) ey = oy[Sy], Ey[4 * (qb + By * sy) + 0] = ey, Ey[4 * (qb + By * sy) + 1] = ey, Ey[4 * (qb + By * sy) + 2] = ey, Ey[4 * (qb + By * sy) + 3] = 255;
        return Ey
      },
      _getImageDataGrey16bits: function(yb, bb, Wy, Uy, hy, fy, Zy, cb, Py) {
        const oy = Wy,
          By = yb.width,
          Ky = yb.height;
        let ey, qb, sy = 0;
        const Sy = new Uint8Array(By * Ky * 4);
        for (qb = Uy; qb !== fy; qb += hy)
          for (ey = Zy; ey !== Py; ey += cb, sy += 2) Sy[4 * (ey + By * qb) + 0] = oy[sy + 0], Sy[4 * (ey + By * qb) + 1] = oy[sy + 0], Sy[4 * (ey + By * qb) + 2] = oy[sy + 0], Sy[4 * (ey + By * qb) + 3] = oy[sy + 1];
        return Sy
      }
    };
    class cb {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".env not supported in Cube."
      }
      loadData(yb, bb, Wy) {
        const Uy = new Uint8Array(yb.buffer, yb.byteOffset, yb.byteLength),
          Zy = hy(Uy);
        Wy(Zy.width, Zy.height, bb.generateMipMaps, !1, (() => {
          fy(bb, Uy)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);