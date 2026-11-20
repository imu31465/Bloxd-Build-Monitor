export const id = 305;
export const ids = [305];
export const modules = {
  41176: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      _TGATextureLoader: () => pv
    });
    var hv = Pv(38209);

    function Sv(vv) {
      let zv = 0;
      return {
        id_length: vv[zv++],
        colormap_type: vv[zv++],
        image_type: vv[zv++],
        colormap_index: vv[zv++] | vv[zv++] << 8,
        colormap_length: vv[zv++] | vv[zv++] << 8,
        colormap_size: vv[zv++],
        origin: [vv[zv++] | vv[zv++] << 8, vv[zv++] | vv[zv++] << 8],
        width: vv[zv++] | vv[zv++] << 8,
        height: vv[zv++] | vv[zv++] << 8,
        pixel_size: vv[zv++],
        flags: vv[17]
      }
    }

    function ev(vv, zv) {
      if (zv.length < 19) return void hv.d.Error("Unable to load TGA file - Not enough data to contain header");
      let Pv = 18;
      const ev = Sv(zv);
      if (ev.id_length + Pv > zv.length) return void hv.d.Error("Unable to load TGA file - Not enough data");
      Pv += ev.id_length;
      let pv, dv = !1,
        Nv = !1,
        lv = !1;
      switch (ev.image_type) {
        case 9:
          dv = !0;
        case 1:
          Nv = !0;
          break;
        case 10:
          dv = !0;
        case 2:
          break;
        case 11:
          dv = !0;
        case 3:
          lv = !0
      }
      const Tv = ev.pixel_size >> 3,
        Wv = ev.width * ev.height * Tv;
      let wv, av, sv, Cv, iv, cv, Gv;
      if (Nv && (wv = zv.subarray(Pv, Pv += ev.colormap_length * (ev.colormap_size >> 3))), dv) {
        let vv, hv, Sv;
        pv = new Uint8Array(Wv);
        let ev = 0;
        const gv = new Uint8Array(Tv);
        for (; Pv < Wv && ev < Wv;)
          if (vv = zv[Pv++], hv = 1 + (127 & vv), 128 & vv) {
            for (Sv = 0; Sv < Tv; ++Sv) gv[Sv] = zv[Pv++];
            for (Sv = 0; Sv < hv; ++Sv) pv.set(gv, ev + Sv * Tv);
            ev += Tv * hv
          } else {
            for (hv *= Tv, Sv = 0; Sv < hv; ++Sv) pv[ev + Sv] = zv[Pv++];
            ev += hv
          }
      } else pv = zv.subarray(Pv, Pv + (Nv ? ev.width * ev.height : Wv));
      switch ((48 & ev.flags) >> 4) {
        default:
        case 2:
          av = 0, Cv = 1, Gv = ev.width, sv = 0, iv = 1, cv = ev.height;
          break;
        case 0:
          av = 0, Cv = 1, Gv = ev.width, sv = ev.height - 1, iv = -1, cv = -1;
          break;
        case 3:
          av = ev.width - 1, Cv = -1, Gv = -1, sv = 0, iv = 1, cv = ev.height;
          break;
        case 1:
          av = ev.width - 1, Cv = -1, Gv = -1, sv = ev.height - 1, iv = -1, cv = -1
      }
      const mv = "_getImageData" + (lv ? "Grey" : "") + ev.pixel_size + "bits",
        jv = gv[mv](ev, wv, pv, sv, iv, cv, av, Cv, Gv);
      vv.ma()._uploadDataToTextureDirectly(vv, jv)
    }
    const gv = {
      GetTGAHeader: Sv,
      UploadContent: ev,
      _getImageData8bits: function(vv, zv, Pv, hv, Sv, ev, gv, pv, dv) {
        const Nv = Pv,
          lv = zv,
          Tv = vv.width,
          Wv = vv.height;
        let wv, av, sv, Cv = 0;
        const iv = new Uint8Array(Tv * Wv * 4);
        for (sv = hv; sv !== ev; sv += Sv)
          for (av = gv; av !== dv; av += pv, Cv++) wv = Nv[Cv], iv[4 * (av + Tv * sv) + 3] = 255, iv[4 * (av + Tv * sv) + 2] = lv[3 * wv + 0], iv[4 * (av + Tv * sv) + 1] = lv[3 * wv + 1], iv[4 * (av + Tv * sv) + 0] = lv[3 * wv + 2];
        return iv
      },
      _getImageData16bits: function(vv, zv, Pv, hv, Sv, ev, gv, pv, dv) {
        const Nv = Pv,
          lv = vv.width,
          Tv = vv.height;
        let Wv, wv, av, sv = 0;
        const Cv = new Uint8Array(lv * Tv * 4);
        for (av = hv; av !== ev; av += Sv)
          for (wv = gv; wv !== dv; wv += pv, sv += 2) {
            Wv = Nv[sv + 0] + (Nv[sv + 1] << 8);
            const vv = 255 * ((31744 & Wv) >> 10) / 31 | 0,
              zv = 255 * ((992 & Wv) >> 5) / 31 | 0,
              Pv = 255 * (31 & Wv) / 31 | 0;
            Cv[4 * (wv + lv * av) + 0] = vv, Cv[4 * (wv + lv * av) + 1] = zv, Cv[4 * (wv + lv * av) + 2] = Pv, Cv[4 * (wv + lv * av) + 3] = 32768 & Wv ? 0 : 255
          }
        return Cv
      },
      _getImageData24bits: function(vv, zv, Pv, hv, Sv, ev, gv, pv, dv) {
        const Nv = Pv,
          lv = vv.width,
          Tv = vv.height;
        let Wv, wv, av = 0;
        const sv = new Uint8Array(lv * Tv * 4);
        for (wv = hv; wv !== ev; wv += Sv)
          for (Wv = gv; Wv !== dv; Wv += pv, av += 3) sv[4 * (Wv + lv * wv) + 3] = 255, sv[4 * (Wv + lv * wv) + 2] = Nv[av + 0], sv[4 * (Wv + lv * wv) + 1] = Nv[av + 1], sv[4 * (Wv + lv * wv) + 0] = Nv[av + 2];
        return sv
      },
      _getImageData32bits: function(vv, zv, Pv, hv, Sv, ev, gv, pv, dv) {
        const Nv = Pv,
          lv = vv.width,
          Tv = vv.height;
        let Wv, wv, av = 0;
        const sv = new Uint8Array(lv * Tv * 4);
        for (wv = hv; wv !== ev; wv += Sv)
          for (Wv = gv; Wv !== dv; Wv += pv, av += 4) sv[4 * (Wv + lv * wv) + 2] = Nv[av + 0], sv[4 * (Wv + lv * wv) + 1] = Nv[av + 1], sv[4 * (Wv + lv * wv) + 0] = Nv[av + 2], sv[4 * (Wv + lv * wv) + 3] = Nv[av + 3];
        return sv
      },
      _getImageDataGrey8bits: function(vv, zv, Pv, hv, Sv, ev, gv, pv, dv) {
        const Nv = Pv,
          lv = vv.width,
          Tv = vv.height;
        let Wv, wv, av, sv = 0;
        const Cv = new Uint8Array(lv * Tv * 4);
        for (av = hv; av !== ev; av += Sv)
          for (wv = gv; wv !== dv; wv += pv, sv++) Wv = Nv[sv], Cv[4 * (wv + lv * av) + 0] = Wv, Cv[4 * (wv + lv * av) + 1] = Wv, Cv[4 * (wv + lv * av) + 2] = Wv, Cv[4 * (wv + lv * av) + 3] = 255;
        return Cv
      },
      _getImageDataGrey16bits: function(vv, zv, Pv, hv, Sv, ev, gv, pv, dv) {
        const Nv = Pv,
          lv = vv.width,
          Tv = vv.height;
        let Wv, wv, av = 0;
        const sv = new Uint8Array(lv * Tv * 4);
        for (wv = hv; wv !== ev; wv += Sv)
          for (Wv = gv; Wv !== dv; Wv += pv, av += 2) sv[4 * (Wv + lv * wv) + 0] = Nv[av + 0], sv[4 * (Wv + lv * wv) + 1] = Nv[av + 0], sv[4 * (Wv + lv * wv) + 2] = Nv[av + 0], sv[4 * (Wv + lv * wv) + 3] = Nv[av + 1];
        return sv
      }
    };
    class pv {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".env not supported in Cube."
      }
      loadData(vv, zv, Pv) {
        const hv = new Uint8Array(vv.buffer, vv.byteOffset, vv.byteLength),
          gv = Sv(hv);
        Pv(gv.width, gv.height, zv.generateMipMaps, !1, (() => {
          ev(zv, hv)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);