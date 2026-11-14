export const id = 289;
export const ids = [289];
export const modules = {
  39794: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      _TGATextureLoader: () => sc
    });
    var Vc = nc(37191);

    function Ic(cB) {
      let Bc = 0;
      return {
        id_length: cB[Bc++],
        colormap_type: cB[Bc++],
        image_type: cB[Bc++],
        colormap_index: cB[Bc++] | cB[Bc++] << 8,
        colormap_length: cB[Bc++] | cB[Bc++] << 8,
        colormap_size: cB[Bc++],
        origin: [cB[Bc++] | cB[Bc++] << 8, cB[Bc++] | cB[Bc++] << 8],
        width: cB[Bc++] | cB[Bc++] << 8,
        height: cB[Bc++] | cB[Bc++] << 8,
        pixel_size: cB[Bc++],
        flags: cB[17]
      }
    }

    function rB(cB, Bc) {
      if (Bc.length < 19) return void Vc.c.Error("Unable to load TGA file - Not enough data to contain header");
      let nc = 18;
      const rB = Ic(Bc);
      if (rB.id_length + nc > Bc.length) return void Vc.c.Error("Unable to load TGA file - Not enough data");
      nc += rB.id_length;
      let sc, Mc = !1,
        Pc = !1,
        qB = !1;
      switch (rB.image_type) {
        case 9:
          Mc = !0;
        case 1:
          Pc = !0;
          break;
        case 10:
          Mc = !0;
        case 2:
          break;
        case 11:
          Mc = !0;
        case 3:
          qB = !0
      }
      const Oc = rB.pixel_size >> 3,
        Tc = rB.width * rB.height * Oc;
      let fc, mB, ec, tB, Sc, yB, zB;
      if (Pc && (fc = Bc.subarray(nc, nc += rB.colormap_length * (rB.colormap_size >> 3))), Mc) {
        let cB, Vc, Ic;
        sc = new Uint8Array(Tc);
        let rB = 0;
        const uc = new Uint8Array(Oc);
        for (; nc < Tc && rB < Tc;)
          if (cB = Bc[nc++], Vc = 1 + (127 & cB), 128 & cB) {
            for (Ic = 0; Ic < Oc; ++Ic) uc[Ic] = Bc[nc++];
            for (Ic = 0; Ic < Vc; ++Ic) sc.set(uc, rB + Ic * Oc);
            rB += Oc * Vc
          } else {
            for (Vc *= Oc, Ic = 0; Ic < Vc; ++Ic) sc[rB + Ic] = Bc[nc++];
            rB += Vc
          }
      } else sc = Bc.subarray(nc, nc + (Pc ? rB.width * rB.height : Tc));
      switch ((48 & rB.flags) >> 4) {
        default:
        case 2:
          mB = 0, tB = 1, zB = rB.width, ec = 0, Sc = 1, yB = rB.height;
          break;
        case 0:
          mB = 0, tB = 1, zB = rB.width, ec = rB.height - 1, Sc = -1, yB = -1;
          break;
        case 3:
          mB = rB.width - 1, tB = -1, zB = -1, ec = 0, Sc = 1, yB = rB.height;
          break;
        case 1:
          mB = rB.width - 1, tB = -1, zB = -1, ec = rB.height - 1, Sc = -1, yB = -1
      }
      const pc = "_getImageData" + (qB ? "Grey" : "") + rB.pixel_size + "bits",
        hc = uc[pc](rB, fc, sc, ec, Sc, yB, mB, tB, zB);
      cB.RV()._uploadDataToTextureDirectly(cB, hc)
    }
    const uc = {
      GetTGAHeader: Ic,
      UploadContent: rB,
      _getImageData8bits: function(cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc) {
        const Pc = nc,
          qB = Bc,
          Oc = cB.width,
          Tc = cB.height;
        let fc, mB, ec, tB = 0;
        const Sc = new Uint8Array(Oc * Tc * 4);
        for (ec = Vc; ec !== rB; ec += Ic)
          for (mB = uc; mB !== Mc; mB += sc, tB++) fc = Pc[tB], Sc[4 * (mB + Oc * ec) + 3] = 255, Sc[4 * (mB + Oc * ec) + 2] = qB[3 * fc + 0], Sc[4 * (mB + Oc * ec) + 1] = qB[3 * fc + 1], Sc[4 * (mB + Oc * ec) + 0] = qB[3 * fc + 2];
        return Sc
      },
      _getImageData16bits: function(cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc) {
        const Pc = nc,
          qB = cB.width,
          Oc = cB.height;
        let Tc, fc, mB, ec = 0;
        const tB = new Uint8Array(qB * Oc * 4);
        for (mB = Vc; mB !== rB; mB += Ic)
          for (fc = uc; fc !== Mc; fc += sc, ec += 2) {
            Tc = Pc[ec + 0] + (Pc[ec + 1] << 8);
            const cB = 255 * ((31744 & Tc) >> 10) / 31 | 0,
              Bc = 255 * ((992 & Tc) >> 5) / 31 | 0,
              nc = 255 * (31 & Tc) / 31 | 0;
            tB[4 * (fc + qB * mB) + 0] = cB, tB[4 * (fc + qB * mB) + 1] = Bc, tB[4 * (fc + qB * mB) + 2] = nc, tB[4 * (fc + qB * mB) + 3] = 32768 & Tc ? 0 : 255
          }
        return tB
      },
      _getImageData24bits: function(cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc) {
        const Pc = nc,
          qB = cB.width,
          Oc = cB.height;
        let Tc, fc, mB = 0;
        const ec = new Uint8Array(qB * Oc * 4);
        for (fc = Vc; fc !== rB; fc += Ic)
          for (Tc = uc; Tc !== Mc; Tc += sc, mB += 3) ec[4 * (Tc + qB * fc) + 3] = 255, ec[4 * (Tc + qB * fc) + 2] = Pc[mB + 0], ec[4 * (Tc + qB * fc) + 1] = Pc[mB + 1], ec[4 * (Tc + qB * fc) + 0] = Pc[mB + 2];
        return ec
      },
      _getImageData32bits: function(cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc) {
        const Pc = nc,
          qB = cB.width,
          Oc = cB.height;
        let Tc, fc, mB = 0;
        const ec = new Uint8Array(qB * Oc * 4);
        for (fc = Vc; fc !== rB; fc += Ic)
          for (Tc = uc; Tc !== Mc; Tc += sc, mB += 4) ec[4 * (Tc + qB * fc) + 2] = Pc[mB + 0], ec[4 * (Tc + qB * fc) + 1] = Pc[mB + 1], ec[4 * (Tc + qB * fc) + 0] = Pc[mB + 2], ec[4 * (Tc + qB * fc) + 3] = Pc[mB + 3];
        return ec
      },
      _getImageDataGrey8bits: function(cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc) {
        const Pc = nc,
          qB = cB.width,
          Oc = cB.height;
        let Tc, fc, mB, ec = 0;
        const tB = new Uint8Array(qB * Oc * 4);
        for (mB = Vc; mB !== rB; mB += Ic)
          for (fc = uc; fc !== Mc; fc += sc, ec++) Tc = Pc[ec], tB[4 * (fc + qB * mB) + 0] = Tc, tB[4 * (fc + qB * mB) + 1] = Tc, tB[4 * (fc + qB * mB) + 2] = Tc, tB[4 * (fc + qB * mB) + 3] = 255;
        return tB
      },
      _getImageDataGrey16bits: function(cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc) {
        const Pc = nc,
          qB = cB.width,
          Oc = cB.height;
        let Tc, fc, mB = 0;
        const ec = new Uint8Array(qB * Oc * 4);
        for (fc = Vc; fc !== rB; fc += Ic)
          for (Tc = uc; Tc !== Mc; Tc += sc, mB += 2) ec[4 * (Tc + qB * fc) + 0] = Pc[mB + 0], ec[4 * (Tc + qB * fc) + 1] = Pc[mB + 0], ec[4 * (Tc + qB * fc) + 2] = Pc[mB + 0], ec[4 * (Tc + qB * fc) + 3] = Pc[mB + 1];
        return ec
      }
    };
    class sc {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".env not supported in Cube."
      }
      loadData(cB, Bc, nc) {
        const Vc = new Uint8Array(cB.buffer, cB.byteOffset, cB.byteLength),
          uc = Ic(Vc);
        nc(uc.width, uc.height, Bc.generateMipMaps, !1, (() => {
          rB(Bc, Vc)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);