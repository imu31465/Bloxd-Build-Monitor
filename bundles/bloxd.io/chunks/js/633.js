export const id = 633;
export const ids = [633];
export const modules = {
  54383: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      _TGATextureLoader: () => Ir
    });
    var Zr = Qr(40246);

    function Wr(rr) {
      let Sr = 0;
      return {
        id_length: rr[Sr++],
        colormap_type: rr[Sr++],
        image_type: rr[Sr++],
        colormap_index: rr[Sr++] | rr[Sr++] << 8,
        colormap_length: rr[Sr++] | rr[Sr++] << 8,
        colormap_size: rr[Sr++],
        origin: [rr[Sr++] | rr[Sr++] << 8, rr[Sr++] | rr[Sr++] << 8],
        width: rr[Sr++] | rr[Sr++] << 8,
        height: rr[Sr++] | rr[Sr++] << 8,
        pixel_size: rr[Sr++],
        flags: rr[17]
      }
    }

    function ar(rr, Sr) {
      if (Sr.length < 19) return void Zr.c.Error("Unable to load TGA file - Not enough data to contain header");
      let Qr = 18;
      const ar = Wr(Sr);
      if (ar.id_length + Qr > Sr.length) return void Zr.c.Error("Unable to load TGA file - Not enough data");
      Qr += ar.id_length;
      let Ir, fr = !1,
        Er = !1,
        pr = !1;
      switch (ar.image_type) {
        case 9:
          fr = !0;
        case 1:
          Er = !0;
          break;
        case 10:
          fr = !0;
        case 2:
          break;
        case 11:
          fr = !0;
        case 3:
          pr = !0
      }
      const xr = ar.pixel_size >> 3,
        mr = ar.width * ar.height * xr;
      let Nr, Ur, tr, hr, zr, Yr, nr;
      if (Er && (Nr = Sr.subarray(Qr, Qr += ar.colormap_length * (ar.colormap_size >> 3))), fr) {
        let rr, Zr, Wr;
        Ir = new Uint8Array(mr);
        let ar = 0;
        const jr = new Uint8Array(xr);
        for (; Qr < mr && ar < mr;)
          if (rr = Sr[Qr++], Zr = 1 + (127 & rr), 128 & rr) {
            for (Wr = 0; Wr < xr; ++Wr) jr[Wr] = Sr[Qr++];
            for (Wr = 0; Wr < Zr; ++Wr) Ir.set(jr, ar + Wr * xr);
            ar += xr * Zr
          } else {
            for (Zr *= xr, Wr = 0; Wr < Zr; ++Wr) Ir[ar + Wr] = Sr[Qr++];
            ar += Zr
          }
      } else Ir = Sr.subarray(Qr, Qr + (Er ? ar.width * ar.height : mr));
      switch ((48 & ar.flags) >> 4) {
        default:
        case 2:
          Ur = 0, hr = 1, nr = ar.width, tr = 0, zr = 1, Yr = ar.height;
          break;
        case 0:
          Ur = 0, hr = 1, nr = ar.width, tr = ar.height - 1, zr = -1, Yr = -1;
          break;
        case 3:
          Ur = ar.width - 1, hr = -1, nr = -1, tr = 0, zr = 1, Yr = ar.height;
          break;
        case 1:
          Ur = ar.width - 1, hr = -1, nr = -1, tr = ar.height - 1, zr = -1, Yr = -1
      }
      const er = "_getImageData" + (pr ? "Grey" : "") + ar.pixel_size + "bits",
        Kr = jr[er](ar, Nr, Ir, tr, zr, Yr, Ur, hr, nr);
      rr.MU()._uploadDataToTextureDirectly(rr, Kr)
    }
    const jr = {
      GetTGAHeader: Wr,
      UploadContent: ar,
      _getImageData8bits: function(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr) {
        const Er = Qr,
          pr = Sr,
          xr = rr.width,
          mr = rr.height;
        let Nr, Ur, tr, hr = 0;
        const zr = new Uint8Array(xr * mr * 4);
        for (tr = Zr; tr !== ar; tr += Wr)
          for (Ur = jr; Ur !== fr; Ur += Ir, hr++) Nr = Er[hr], zr[4 * (Ur + xr * tr) + 3] = 255, zr[4 * (Ur + xr * tr) + 2] = pr[3 * Nr + 0], zr[4 * (Ur + xr * tr) + 1] = pr[3 * Nr + 1], zr[4 * (Ur + xr * tr) + 0] = pr[3 * Nr + 2];
        return zr
      },
      _getImageData16bits: function(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr) {
        const Er = Qr,
          pr = rr.width,
          xr = rr.height;
        let mr, Nr, Ur, tr = 0;
        const hr = new Uint8Array(pr * xr * 4);
        for (Ur = Zr; Ur !== ar; Ur += Wr)
          for (Nr = jr; Nr !== fr; Nr += Ir, tr += 2) {
            mr = Er[tr + 0] + (Er[tr + 1] << 8);
            const rr = 255 * ((31744 & mr) >> 10) / 31 | 0,
              Sr = 255 * ((992 & mr) >> 5) / 31 | 0,
              Qr = 255 * (31 & mr) / 31 | 0;
            hr[4 * (Nr + pr * Ur) + 0] = rr, hr[4 * (Nr + pr * Ur) + 1] = Sr, hr[4 * (Nr + pr * Ur) + 2] = Qr, hr[4 * (Nr + pr * Ur) + 3] = 32768 & mr ? 0 : 255
          }
        return hr
      },
      _getImageData24bits: function(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr) {
        const Er = Qr,
          pr = rr.width,
          xr = rr.height;
        let mr, Nr, Ur = 0;
        const tr = new Uint8Array(pr * xr * 4);
        for (Nr = Zr; Nr !== ar; Nr += Wr)
          for (mr = jr; mr !== fr; mr += Ir, Ur += 3) tr[4 * (mr + pr * Nr) + 3] = 255, tr[4 * (mr + pr * Nr) + 2] = Er[Ur + 0], tr[4 * (mr + pr * Nr) + 1] = Er[Ur + 1], tr[4 * (mr + pr * Nr) + 0] = Er[Ur + 2];
        return tr
      },
      _getImageData32bits: function(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr) {
        const Er = Qr,
          pr = rr.width,
          xr = rr.height;
        let mr, Nr, Ur = 0;
        const tr = new Uint8Array(pr * xr * 4);
        for (Nr = Zr; Nr !== ar; Nr += Wr)
          for (mr = jr; mr !== fr; mr += Ir, Ur += 4) tr[4 * (mr + pr * Nr) + 2] = Er[Ur + 0], tr[4 * (mr + pr * Nr) + 1] = Er[Ur + 1], tr[4 * (mr + pr * Nr) + 0] = Er[Ur + 2], tr[4 * (mr + pr * Nr) + 3] = Er[Ur + 3];
        return tr
      },
      _getImageDataGrey8bits: function(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr) {
        const Er = Qr,
          pr = rr.width,
          xr = rr.height;
        let mr, Nr, Ur, tr = 0;
        const hr = new Uint8Array(pr * xr * 4);
        for (Ur = Zr; Ur !== ar; Ur += Wr)
          for (Nr = jr; Nr !== fr; Nr += Ir, tr++) mr = Er[tr], hr[4 * (Nr + pr * Ur) + 0] = mr, hr[4 * (Nr + pr * Ur) + 1] = mr, hr[4 * (Nr + pr * Ur) + 2] = mr, hr[4 * (Nr + pr * Ur) + 3] = 255;
        return hr
      },
      _getImageDataGrey16bits: function(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr) {
        const Er = Qr,
          pr = rr.width,
          xr = rr.height;
        let mr, Nr, Ur = 0;
        const tr = new Uint8Array(pr * xr * 4);
        for (Nr = Zr; Nr !== ar; Nr += Wr)
          for (mr = jr; mr !== fr; mr += Ir, Ur += 2) tr[4 * (mr + pr * Nr) + 0] = Er[Ur + 0], tr[4 * (mr + pr * Nr) + 1] = Er[Ur + 0], tr[4 * (mr + pr * Nr) + 2] = Er[Ur + 0], tr[4 * (mr + pr * Nr) + 3] = Er[Ur + 1];
        return tr
      }
    };
    class Ir {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".env not supported in Cube."
      }
      loadData(rr, Sr, Qr) {
        const Zr = new Uint8Array(rr.buffer, rr.byteOffset, rr.byteLength),
          jr = Wr(Zr);
        Qr(jr.width, jr.height, Sr.generateMipMaps, !1, (() => {
          ar(Sr, Zr)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);