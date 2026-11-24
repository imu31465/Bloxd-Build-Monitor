(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var mm = __webpack_require__.u,
        Tm = __webpack_require__.e,
        fm = {},
        hm = {};
      __webpack_require__.u = function(Tm) {
        return mm(Tm) + (fm.hasOwnProperty(Tm) ? "?" + fm[Tm] : "")
      }, __webpack_require__.e = function(Am) {
        return Tm(Am).catch((function(Tm) {
          var am = hm.hasOwnProperty(Am) ? hm[Am] : 4;
          if (am < 1) {
            var xm = mm(Am);
            throw Tm.message = "Loading chunk " + Am + " failed after 4 retries.\n(" + xm + ")", Tm.request = xm, fm[Am] = "cache-bust=" + Date.now(), setTimeout((function() {
              delete hm[Am]
            }), 0), Tm
          }
          return new Promise((function(mm) {
            var Tm = 4 - am + 1;
            setTimeout((function() {
              var Tm = "cache-bust=" + Date.now();
              fm[Am] = Tm, hm[Am] = am - 1, mm(__webpack_require__.e(Am))
            }), function(mm) {
              return 500 * Math.pow(2, mm)
            }(Tm))
          }))
        }))
      }
    }
  })();
  const mm = Math.SQRT1_2,
    Tm = Math.SQRT1_2 / 2,
    fm = Math.sqrt(3) / 2,
    hm = 2 * mm,
    Am = 2 * Tm + fm;

  function am(Tm, fm) {
    const hm = fm > 0 ? fm + 1 : 0,
      am = .6 * Tm - fm / mm;
    return Math.max(0, Math.min(am, (Tm - 2 * hm) / Am))
  }
  const xm = [15, 15, 15],
    wm = {
      top: 1,
      left: .85,
      right: .7
    };

  function Dm(mm, Tm, fm, xm) {
    const {
      vertices: wm,
      uvs: Dm,
      indices: im,
      shades: Rm
    } = mm, Em = function(mm, Tm) {
      const fm = am(mm, Tm),
        xm = hm * fm,
        wm = Am * fm;
      return {
        left: (mm - xm) / 2,
        top: (mm - wm) / 2,
        width: xm,
        height: wm
      }
    }(fm, xm), om = new Float32Array(wm.length);
    for (let hm = 0; hm < wm.length; hm += 3) om[hm] = Em.left + wm[hm] * Em.width, om[hm + 1] = Em.top + wm[hm + 1] * Em.height, om[hm + 2] = wm[hm + 2];
    const Om = new Float32Array(fm * fm).fill(-1 / 0),
      Ym = new Uint8ClampedArray(fm * fm * 4),
      qm = 255 * mm.alphaCutoff;
    for (let hm = 0; hm < im.length; hm += 3) {
      const [mm, Am, am] = [im[hm], im[hm + 1], im[hm + 2]], [xm, wm, pm] = [3 * mm, 3 * Am, 3 * am], [Em, jm, Vm, Im, Km, Qm] = [om[xm], om[xm + 1], om[wm], om[wm + 1], om[pm], om[pm + 1]], nm = (Vm - Em) * (Qm - jm) - (Km - Em) * (Im - jm);
      if (Math.abs(nm) < 1e-9) continue;
      const Jm = Rm[hm / 3],
        [cm, zm, Zm, km, bm, Sm] = [Dm[2 * mm], Dm[2 * mm + 1], Dm[2 * Am], Dm[2 * Am + 1], Dm[2 * am], Dm[2 * am + 1]],
        em = Math.max(0, Math.floor(Math.min(Em, Vm, Km))),
        Nm = Math.min(fm - 1, Math.ceil(Math.max(Em, Vm, Km))),
        Gm = Math.max(0, Math.floor(Math.min(jm, Im, Qm))),
        Xm = Math.min(fm - 1, Math.ceil(Math.max(jm, Im, Qm)));
      for (let hm = Gm; hm <= Xm; hm++)
        for (let mm = em; mm <= Nm; mm++) {
          const [Am, am] = [mm + .5, hm + .5], Dm = ((Am - Em) * (Qm - jm) - (Km - Em) * (am - jm)) / nm, im = ((Vm - Em) * (am - jm) - (Am - Em) * (Im - jm)) / nm, Rm = 1 - Dm - im;
          if (Rm < 0 || Dm < 0 || im < 0) continue;
          const em = Rm * om[xm + 2] + Dm * om[wm + 2] + im * om[pm + 2],
            Nm = hm * fm + mm;
          if (em <= Om[Nm]) continue;
          const Gm = Math.max(0, Math.min(Tm.width - 1, Math.floor((Rm * cm + Dm * Zm + im * bm) * Tm.width))),
            Xm = 4 * (Math.max(0, Math.min(Tm.height - 1, Math.floor((Rm * zm + Dm * km + im * Sm) * Tm.height))) * Tm.width + Gm);
          Tm.pixels[Xm + 3] < qm || (Om[Nm] = em, Ym[4 * Nm] = Tm.pixels[Xm] * Jm, Ym[4 * Nm + 1] = Tm.pixels[Xm + 1] * Jm, Ym[4 * Nm + 2] = Tm.pixels[Xm + 2] * Jm, Ym[4 * Nm + 3] = 255)
        }
    }
    return pm(Ym, fm, xm), Ym
  }
  let im = NaN,
    Rm = new Int32Array(0);

  function pm(mm, Tm, fm) {
    let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Tm => 0 !== mm[4 * Tm + 3];
    const Am = new Uint8Array(Tm * Tm);
    for (let xm = 0; xm < Tm * Tm; xm++) Am[xm] = hm(xm) ? 1 : 0;
    const am = (mm, fm) => mm >= 0 && fm >= 0 && mm < Tm && fm < Tm && 0 === Am[fm * Tm + mm],
      wm = new Float32Array(Tm * Tm).fill(1 / 0),
      Dm = function(mm) {
        if (mm !== im) {
          const Tm = Math.ceil(mm + 1),
            fm = [];
          for (let hm = -Tm; hm <= Tm; hm++)
            for (let Am = -Tm; Am <= Tm; Am++) {
              const Tm = Am * Am + hm * hm;
              Tm > 0 && Tm < (mm + 1) ** 2 && fm.push(Am, hm, Tm)
            }
          im = mm, Rm = Int32Array.from(fm)
        }
        return Rm
      }(fm);
    for (let xm = 0; xm < Tm; xm++)
      for (let mm = 0; mm < Tm; mm++) {
        if (1 === Am[xm * Tm + mm] && (am(mm - 1, xm) || am(mm + 1, xm) || am(mm, xm - 1) || am(mm, xm + 1)))
          for (let fm = 0; fm < Dm.length; fm += 3) {
            const hm = mm + Dm[fm],
              Am = xm + Dm[fm + 1];
            if (hm >= 0 && Am >= 0 && hm < Tm && Am < Tm) {
              const mm = Am * Tm + hm;
              wm[mm] = Math.min(wm[mm], Dm[fm + 2])
            }
          }
      }
    for (let im = 0; im < Tm * Tm; im++) 1 !== Am[im] && wm[im] !== 1 / 0 && (mm.set(xm, 4 * im), mm[4 * im + 3] = Math.round(255 * Math.min(1, fm + 1 - Math.sqrt(wm[im]))))
  }
  const Em = {
      boxes: [
        [0, 0, 0, 1, 1, 1]
      ],
      cropFaces: !1
    },
    om = {
      boxes: [
        [0, 0, 0, 1, .5, 1]
      ],
      cropFaces: !1
    },
    Om = {
      boxes: [
        [0, 0, 0, 1, .5, 1],
        [0, .5, 0, .5, 1, 1]
      ],
      cropFaces: !0
    };
  const Ym = 1e-6;

  function qm(mm, Tm, fm, hm) {
    let {
      origin: Am,
      across: am,
      down: xm,
      texture: wm,
      rect: [Dm, im, Rm, pm],
      shade: Em
    } = hm;
    const om = am.x * xm.y - am.y * xm.x;
    if (Math.abs(om) < 1e-9) return;
    const Om = [Am.x, Am.x + am.x, Am.x + xm.x, Am.x + am.x + xm.x],
      qm = [Am.y, Am.y + am.y, Am.y + xm.y, Am.y + am.y + xm.y],
      jm = Math.max(0, Math.floor(Math.min(...Om))),
      Vm = Math.min(fm - 1, Math.ceil(Math.max(...Om))),
      Im = Math.max(0, Math.floor(Math.min(...qm))),
      Km = Math.min(fm - 1, Math.ceil(Math.max(...qm)));
    for (let Qm = Im; Qm <= Km; Qm++)
      for (let hm = jm; hm <= Vm; hm++) {
        const Om = hm + .5 - Am.x,
          qm = Qm + .5 - Am.y,
          jm = (Om * xm.y - qm * xm.x) / om,
          Vm = (am.x * qm - am.y * Om) / om;
        if (jm < -Ym || jm > 1 + Ym || Vm < -Ym || Vm > 1 + Ym) continue;
        const Im = Qm * fm + hm;
        Tm[Im] = 1;
        const Km = Dm + Math.min(Math.max(jm, 0), 1) * (Rm - Dm),
          nm = im + Math.min(Math.max(Vm, 0), 1) * (pm - im),
          Jm = Math.min(wm.width - 1, Math.floor(Km * wm.width)),
          cm = 4 * (Math.min(wm.height - 1, Math.floor(nm * wm.height)) * wm.width + Jm),
          zm = wm.pixels[cm + 3] / 255;
        if (0 === zm) continue;
        const Zm = 4 * Im,
          km = mm[Zm + 3] / 255 * (1 - zm),
          bm = zm + km;
        for (let Tm = 0; Tm < 3; Tm++) mm[Zm + Tm] = (wm.pixels[cm + Tm] * Em * zm + mm[Zm + Tm] * km) / bm;
        mm[Zm + 3] = 255 * bm
      }
  }

  function jm(mm, Tm, fm) {
    const hm = mm.get(Tm);
    if (void 0 === hm) throw new Error(`no ${fm} was sent for ${Tm.slice(0,100)}`);
    return hm
  }
  const Vm = {
      pixelsOf(mm) {
        const Tm = new OffscreenCanvas(mm.width, mm.height),
          fm = Tm.getContext("2d");
        if (!fm) throw new Error("no 2D context");
        return fm.drawImage(mm, 0, 0), mm.close(), {
          width: Tm.width,
          height: Tm.height,
          pixels: fm.getImageData(0, 0, Tm.width, Tm.height).data
        }
      },
      async encode(mm, Tm) {
        const fm = new OffscreenCanvas(Tm, Tm),
          hm = fm.getContext("2d");
        if (!hm) throw new Error("no 2D context");
        hm.putImageData(new ImageData(mm, Tm, Tm), 0, 0);
        const Am = await fm.convertToBlob();
        return new Promise(((mm, Tm) => {
          const fm = new FileReader;
          fm.onload = () => {
            mm(fm.result)
          }, fm.onerror = () => {
            var mm;
            Tm(null !== (mm = fm.error) && void 0 !== mm ? mm : new Error("the icon did not encode"))
          }, fm.readAsDataURL(Am)
        }))
      }
    },
    Im = globalThis.WorkerGlobalScope;
  void 0 !== Im && globalThis instanceof Im && function(hm, Am) {
    const xm = new Map,
      im = new Map,
      Rm = (mm, Tm, fm) => {
        (async () => {
          try {
            hm.postMessage({
              type: "drawn",
              id: mm,
              url: await Am.encode(fm(), Tm)
            })
          } catch (am) {
            hm.postMessage({
              type: "failed",
              message: String(am)
            })
          }
        })()
      };
    hm.onmessage = hm => {
      let {
        data: Ym
      } = hm;
      if ("texture" === Ym.type) xm.set(Ym.url, Am.pixelsOf(Ym.bitmap));
      else if ("model" === Ym.type) im.set(Ym.name, {
        geometry: Ym.geometry,
        texture: Am.pixelsOf(Ym.bitmap)
      });
      else if ("draw" === Ym.type) {
        const {
          id: hm,
          top: Am,
          left: Dm,
          right: im,
          itemType: Vm,
          size: Im,
          outlineWidth: Km
        } = Ym;
        Rm(hm, Im, (() => function(hm, Am, xm, Dm) {
          const im = am(xm, Dm),
            Rm = im * mm,
            Em = im * Tm,
            om = im * fm,
            Om = Math.max(...Am.boxes.map((mm => mm[4]))),
            Ym = xm / 2,
            jm = Em + (xm - Em - Em - Om * om) / 2,
            Vm = (mm, Tm, fm) => ({
              x: Ym + (mm - fm) * Rm,
              y: jm - Em + (mm + fm) * Em + (Om - Tm) * om
            }),
            Im = (mm, Tm, fm, hm, am, xm) => ({
              origin: mm,
              across: {
                x: Tm.x - mm.x,
                y: Tm.y - mm.y
              },
              down: {
                x: fm.x - mm.x,
                y: fm.y - mm.y
              },
              texture: hm,
              rect: Am.cropFaces ? am : [0, 0, 1, 1],
              shade: xm
            }),
            Km = new Uint8ClampedArray(xm * xm * 4),
            Qm = new Uint8Array(xm * xm),
            nm = wm;
          for (const [mm, Tm, fm, am, wm, pm] of Am.boxes) {
            const Am = Im(Vm(am, wm, pm), Vm(am, wm, fm), Vm(am, Tm, pm), hm.right, [1 - pm, 1 - wm, 1 - fm, 1 - Tm], nm.right),
              Dm = Im(Vm(mm, wm, pm), Vm(am, wm, pm), Vm(mm, Tm, pm), hm.left, [mm, 1 - wm, am, 1 - Tm], nm.left),
              im = Im(Vm(mm, wm, fm), Vm(am, wm, fm), Vm(mm, wm, pm), hm.top, [mm, fm, am, pm], nm.top);
            for (const mm of [Am, Dm, im]) qm(Km, Qm, xm, mm)
          }
          return pm(Km, xm, Dm, (mm => 1 === Qm[mm])), Km
        }({
          top: jm(xm, Am, "texture"),
          left: jm(xm, Dm, "texture"),
          right: jm(xm, im, "texture")
        }, function(mm) {
          return "SlabBlock" === mm ? om : "StairsBlock" === mm ? Om : Em
        }(Vm), Im, Km)))
      } else {
        const {
          id: mm,
          name: Tm,
          size: fm,
          outlineWidth: hm
        } = Ym;
        Rm(mm, fm, (() => {
          const {
            geometry: mm,
            texture: Am
          } = jm(im, Tm, "model");
          return Dm(mm, Am, fm, hm)
        }))
      }
    }, hm.postMessage({
      type: "started"
    })
  }(globalThis, Vm)
})();