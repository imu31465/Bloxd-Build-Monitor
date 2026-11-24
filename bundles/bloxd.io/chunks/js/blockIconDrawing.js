export const id = 2;
export const ids = [2];
export const modules = {
  36477: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      drawBlockIcon: () => jm,
      drawBlockIconUrl: () => Vm,
      getDrawnBlockIcon: () => qm
    });
    var hm = fm(36481);
    const Am = {
        boxes: [
          [0, 0, 0, 1, 1, 1]
        ],
        cropFaces: !1
      },
      am = {
        boxes: [
          [0, 0, 0, 1, .5, 1]
        ],
        cropFaces: !1
      },
      xm = {
        boxes: [
          [0, 0, 0, 1, .5, 1],
          [0, .5, 0, .5, 1, 1]
        ],
        cropFaces: !0
      };
    const wm = 1e-6;

    function Dm(mm, Tm, fm, hm) {
      let {
        origin: Am,
        across: am,
        down: xm,
        texture: Dm,
        rect: [im, Rm, pm, Em],
        shade: om
      } = hm;
      const Om = am.x * xm.y - am.y * xm.x;
      if (Math.abs(Om) < 1e-9) return;
      const Ym = [Am.x, Am.x + am.x, Am.x + xm.x, Am.x + am.x + xm.x],
        qm = [Am.y, Am.y + am.y, Am.y + xm.y, Am.y + am.y + xm.y],
        jm = Math.max(0, Math.floor(Math.min(...Ym))),
        Vm = Math.min(fm - 1, Math.ceil(Math.max(...Ym))),
        Im = Math.max(0, Math.floor(Math.min(...qm))),
        Km = Math.min(fm - 1, Math.ceil(Math.max(...qm)));
      for (let Qm = Im; Qm <= Km; Qm++)
        for (let hm = jm; hm <= Vm; hm++) {
          const Ym = hm + .5 - Am.x,
            qm = Qm + .5 - Am.y,
            jm = (Ym * xm.y - qm * xm.x) / Om,
            Vm = (am.x * qm - am.y * Ym) / Om;
          if (jm < -wm || jm > 1 + wm || Vm < -wm || Vm > 1 + wm) continue;
          const Im = Qm * fm + hm;
          Tm[Im] = 1;
          const Km = im + Math.min(Math.max(jm, 0), 1) * (pm - im),
            nm = Rm + Math.min(Math.max(Vm, 0), 1) * (Em - Rm),
            Jm = Math.min(Dm.width - 1, Math.floor(Km * Dm.width)),
            cm = 4 * (Math.min(Dm.height - 1, Math.floor(nm * Dm.height)) * Dm.width + Jm),
            zm = Dm.pixels[cm + 3] / 255;
          if (0 === zm) continue;
          const Zm = 4 * Im,
            km = mm[Zm + 3] / 255 * (1 - zm),
            bm = zm + km;
          for (let Tm = 0; Tm < 3; Tm++) mm[Zm + Tm] = (Dm.pixels[cm + Tm] * om * zm + mm[Zm + Tm] * km) / bm;
          mm[Zm + 3] = 255 * bm
        }
    }
    var im = fm(36484);
    const Rm = new Map,
      pm = new Map,
      Em = new Map,
      om = new Map;

    function Om(mm, Tm, fm) {
      return `${Tm}|${fm}|${mm}`
    }

    function Ym(mm, Tm, fm) {
      let hm = mm.get(Tm);
      return void 0 === hm && (hm = fm().catch((fm => {
        throw mm.delete(Tm), fm
      })), mm.set(Tm, hm)), hm
    }

    function qm(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return pm.get(Om(mm, Tm, fm))
    }

    function jm(mm, Tm, fm, hm) {
      const Am = Om(mm, Tm, fm);
      return Ym(Rm, Am, (async () => {
        const am = await Im(hm(mm), Tm, fm);
        return pm.set(Am, am), am
      }))
    }

    function Vm(mm, Tm, fm, hm) {
      return Ym(Em, Om(mm, Tm, fm), (async () => {
        var Am;
        const am = hm(mm);
        return null !== (Am = await (0, im.c)(am, Tm, fm)) && void 0 !== Am ? Am : (await Im(am, Tm, fm)).toDataURL()
      }))
    }
    async function Im(mm, Tm, fm) {
      let {
        top: wm,
        left: im,
        right: Rm,
        itemType: pm
      } = mm;
      const [Em, om, Om] = await Promise.all([Km(wm), Km(im), Km(Rm)]), Ym = function(mm, Tm, fm, Am) {
        const am = (0, hm.f)(fm, Am),
          xm = am * hm.c.across,
          wm = am * hm.c.down,
          im = am * hm.c.up,
          Rm = Math.max(...Tm.boxes.map((mm => mm[4]))),
          pm = fm / 2,
          Em = wm + (fm - wm - wm - Rm * im) / 2,
          om = (mm, Tm, fm) => ({
            x: pm + (mm - fm) * xm,
            y: Em - wm + (mm + fm) * wm + (Rm - Tm) * im
          }),
          Om = (mm, fm, hm, Am, am, xm) => ({
            origin: mm,
            across: {
              x: fm.x - mm.x,
              y: fm.y - mm.y
            },
            down: {
              x: hm.x - mm.x,
              y: hm.y - mm.y
            },
            texture: Am,
            rect: Tm.cropFaces ? am : [0, 0, 1, 1],
            shade: xm
          }),
          Ym = new Uint8ClampedArray(fm * fm * 4),
          qm = new Uint8Array(fm * fm),
          jm = hm.d;
        for (const [hm, Vm, Im, Km, Qm, nm] of Tm.boxes) {
          const Tm = Om(om(Km, Qm, nm), om(Km, Qm, Im), om(Km, Vm, nm), mm.right, [1 - nm, 1 - Qm, 1 - Im, 1 - Vm], jm.right),
            Am = Om(om(hm, Qm, nm), om(Km, Qm, nm), om(hm, Vm, nm), mm.left, [hm, 1 - Qm, Km, 1 - Vm], jm.left),
            am = Om(om(hm, Qm, Im), om(Km, Qm, Im), om(hm, Qm, nm), mm.top, [hm, Im, Km, nm], jm.top);
          for (const mm of [Tm, Am, am]) Dm(Ym, qm, fm, mm)
        }
        return (0, hm.g)(Ym, fm, Am, (mm => 1 === qm[mm])), Ym
      }({
        top: Em,
        left: om,
        right: Om
      }, function(mm) {
        return "SlabBlock" === mm ? am : "StairsBlock" === mm ? xm : Am
      }(pm), Tm, fm), qm = document.createElement("canvas");
      qm.width = Tm, qm.height = Tm;
      const jm = qm.getContext("2d");
      if (!jm) throw new Error("Failed to get 2D context");
      return jm.putImageData(new ImageData(Ym, Tm, Tm), 0, 0), qm
    }

    function Km(mm) {
      return Ym(om, mm, (async () => {
        const Tm = await (0, im.i)(mm),
          fm = document.createElement("canvas");
        fm.width = Tm.width, fm.height = Tm.height;
        const hm = fm.getContext("2d");
        if (!hm) throw new Error("Failed to get 2D context");
        return hm.drawImage(Tm, 0, 0), {
          width: Tm.width,
          height: Tm.height,
          pixels: hm.getImageData(0, 0, Tm.width, Tm.height).data
        }
      }))
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);