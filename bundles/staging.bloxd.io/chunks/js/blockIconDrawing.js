export const id = 2;
export const ids = [2];
export const modules = {
  37185: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      drawBlockIcon: () => ze,
      drawBlockIconUrl: () => Be,
      getDrawnBlockIcon: () => Xe,
      resetBlockIconDrawingForTests: () => fe
    });
    var ye = He(37187);
    const be = {
        boxes: [
          [0, 0, 0, 1, 1, 1]
        ],
        cropFaces: !1
      },
      Me = {
        boxes: [
          [0, 0, 0, 1, .5, 1]
        ],
        cropFaces: !1
      },
      Ke = {
        boxes: [
          [0, 0, 0, 1, .5, 1],
          [0, .5, 0, .5, 1, 1]
        ],
        cropFaces: !0
      };
    const Ue = 1e-6;

    function Fe(ee, ie, He, ye) {
      let {
        origin: be,
        across: Me,
        down: Ke,
        texture: Fe,
        rect: [Je, oe, Re, ke],
        shade: qe
      } = ye;
      const fe = Me.x * Ke.y - Me.y * Ke.x;
      if (Math.abs(fe) < 1e-9) return;
      const Te = [be.x, be.x + Me.x, be.x + Ke.x, be.x + Me.x + Ke.x],
        pe = [be.y, be.y + Me.y, be.y + Ke.y, be.y + Me.y + Ke.y],
        Xe = Math.max(0, Math.floor(Math.min(...Te))),
        ze = Math.min(He - 1, Math.ceil(Math.max(...Te))),
        Be = Math.max(0, Math.floor(Math.min(...pe))),
        Ee = Math.min(He - 1, Math.ceil(Math.max(...pe)));
      for (let ge = Be; ge <= Ee; ge++)
        for (let ye = Xe; ye <= ze; ye++) {
          const Te = ye + .5 - be.x,
            pe = ge + .5 - be.y,
            Xe = (Te * Ke.y - pe * Ke.x) / fe,
            ze = (Me.x * pe - Me.y * Te) / fe;
          if (Xe < -Ue || Xe > 1 + Ue || ze < -Ue || ze > 1 + Ue) continue;
          const Be = ge * He + ye;
          ie[Be] = 1;
          const Ee = Je + Math.min(Math.max(Xe, 0), 1) * (Re - Je),
            Oe = oe + Math.min(Math.max(ze, 0), 1) * (ke - oe),
            de = Math.min(Fe.width - 1, Math.floor(Ee * Fe.width)),
            We = 4 * (Math.min(Fe.height - 1, Math.floor(Oe * Fe.height)) * Fe.width + de),
            te = Fe.pixels[We + 3] / 255;
          if (0 === te) continue;
          const Ze = 4 * Be,
            we = ee[Ze + 3] / 255 * (1 - te),
            De = te + we;
          for (let ie = 0; ie < 3; ie++) ee[Ze + ie] = (Fe.pixels[We + ie] * qe * te + ee[Ze + ie] * we) / De;
          ee[Ze + 3] = 255 * De
        }
    }
    var Je = He(37190);
    const oe = new Map,
      Re = new Map,
      ke = new Map,
      qe = new Map;

    function fe() {
      oe.clear(), Re.clear(), ke.clear(), qe.clear()
    }

    function Te(ee, ie, He) {
      return `${ie}|${He}|${ee}`
    }

    function pe(ee, ie, He) {
      let ye = ee.get(ie);
      return void 0 === ye && (ye = He().catch((He => {
        throw ee.delete(ie), He
      })), ee.set(ie, ye)), ye
    }

    function Xe(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Re.get(Te(ee, ie, He))
    }

    function ze(ee, ie, He, ye) {
      const be = Te(ee, ie, He);
      return pe(oe, be, (async () => {
        const Me = await Ee(ye(ee), ie, He);
        return Re.set(be, Me), Me
      }))
    }

    function Be(ee, ie, He, ye) {
      return pe(ke, Te(ee, ie, He), (async () => {
        var be;
        const Me = ye(ee);
        return null !== (be = await (0, Je.e)(Me, ie, He)) && void 0 !== be ? be : (await Ee(Me, ie, He)).toDataURL()
      }))
    }
    async function Ee(ee, ie, He) {
      let {
        top: Ue,
        left: Je,
        right: oe,
        itemType: Re
      } = ee;
      const [ke, qe, fe] = await Promise.all([ge(Ue), ge(Je), ge(oe)]), Te = function(ee, ie, He, be) {
        const Me = (0, ye.h)(He, be),
          Ke = Me * ye.c.across,
          Ue = Me * ye.c.down,
          Je = Me * ye.c.up,
          oe = Math.max(...ie.boxes.map((ee => ee[4]))),
          Re = He / 2,
          ke = Ue + (He - Ue - Ue - oe * Je) / 2,
          qe = (ee, ie, He) => ({
            x: Re + (ee - He) * Ke,
            y: ke - Ue + (ee + He) * Ue + (oe - ie) * Je
          }),
          fe = (ee, He, ye, be, Me, Ke) => ({
            origin: ee,
            across: {
              x: He.x - ee.x,
              y: He.y - ee.y
            },
            down: {
              x: ye.x - ee.x,
              y: ye.y - ee.y
            },
            texture: be,
            rect: ie.cropFaces ? Me : [0, 0, 1, 1],
            shade: Ke
          }),
          Te = new Uint8ClampedArray(He * He * 4),
          pe = new Uint8Array(He * He),
          Xe = ye.d;
        for (const [ye, ze, Be, Ee, ge, Oe] of ie.boxes) {
          const ie = fe(qe(Ee, ge, Oe), qe(Ee, ge, Be), qe(Ee, ze, Oe), ee.right, [1 - Oe, 1 - ge, 1 - Be, 1 - ze], Xe.right),
            be = fe(qe(ye, ge, Oe), qe(Ee, ge, Oe), qe(ye, ze, Oe), ee.left, [ye, 1 - ge, Ee, 1 - ze], Xe.left),
            Me = fe(qe(ye, ge, Be), qe(Ee, ge, Be), qe(ye, ge, Oe), ee.top, [ye, Be, Ee, Oe], Xe.top);
          for (const ee of [ie, be, Me]) Fe(Te, pe, He, ee)
        }
        return (0, ye.j)(Te, He, be, (ee => 1 === pe[ee])), Te
      }({
        top: ke,
        left: qe,
        right: fe
      }, function(ee) {
        return "SlabBlock" === ee ? Me : "StairsBlock" === ee ? Ke : be
      }(Re), ie, He), pe = document.createElement("canvas");
      pe.width = ie, pe.height = ie;
      const Xe = pe.getContext("2d");
      if (!Xe) throw new Error("Failed to get 2D context");
      return Xe.putImageData(new ImageData(Te, ie, ie), 0, 0), pe
    }

    function ge(ee) {
      return pe(qe, ee, (async () => {
        const ie = await (0, Je.m)(ee),
          He = document.createElement("canvas");
        He.width = ie.width, He.height = ie.height;
        const ye = He.getContext("2d");
        if (!ye) throw new Error("Failed to get 2D context");
        return ye.drawImage(ie, 0, 0), {
          width: ie.width,
          height: ie.height,
          pixels: ye.getImageData(0, 0, ie.width, ie.height).data
        }
      }))
    }
  },
  37190: (ee, ie, He) => {
    He.d(ie, {
      e: () => we,
      i: () => De,
      k: () => ge,
      m: () => Be,
      p: () => Oe
    });
    var ye = He(272),
      be = He(97);
    const Me = new(He(37192).b)(new URL(He.p + He.u(3), He.b), {
      name: "blockIconWorker",
      type: "module"
    });
    var Ke = He(1851),
      Ue = He(2173);
    const Fe = 1e4,
      Je = 3e4;
    let oe = null,
      Re = null,
      ke = null,
      qe = !1,
      fe = 0;
    const Te = new Map;
    let pe = null;
    const Xe = new Map,
      ze = new Map;

    function Be(ee) {
      const ie = new Promise(((ie, He) => {
        const ye = new Image;
        ye.crossOrigin = "anonymous", ye.fetchPriority = "high", ye.onload = () => {
          ie(ye)
        }, ye.onerror = () => {
          He(new Error(`A block icon's texture did not load: ${ee.slice(0,100)}`))
        }, ye.src = ee
      }));
      return (0, Ue.f)(ie)
    }

    function Ee(ee) {
      var ie, He;
      qe || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${ee}`), qe = !0, null === (ie = oe) || void 0 === ie || ie.terminate(), oe = null, Re = null, Xe.clear(), ze.clear();
      for (const ye of Te.values()) ye(null);
      Te.clear(), null === (He = pe) || void 0 === He || He()
    }

    function ge() {
      return null !== Re
    }

    function Oe() {
      return ke ??= async function() {
        if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
        if ("page" === ye.c.ios_icon_worker_v1 && (0, be.isWebKit)()) return;
        try {
          oe = await async function() {
            return await Me.ready(), Me.start()
          }()
        } catch (Ue) {
          return void Ee(`did not start (${String(Ue)})`)
        }
        let ee = () => {};
        const ie = new Promise((ie => {
          ee = ie
        }));
        oe.onmessage = ie => {
          let {
            data: He
          } = ie;
          if ("started" === He.type) Re = oe, ee();
          else if ("failed" === He.type) Ee(`failed a draw (${He.message})`);
          else {
            var ye, be;
            null === (ye = Te.get(He.id)) || void 0 === ye || ye(He.url), Te.delete(He.id), null === (be = pe) || void 0 === be || be()
          }
        }, oe.onerror = ie => {
          ie.preventDefault(), Ee(`stopped (${ie.message||"its script did not load or run"})`), ee()
        };
        const He = `did not start in ${Je/1e3} s`;
        await (0, Ke.k)(ie, Je, He).catch((() => {
          Ee(He)
        }))
      }(), ke
    }

    function de() {
      if (null !== pe || 0 === Te.size) return;
      const ee = new Promise((ee => {
          pe = ee
        })),
        ie = `did not answer in ${Fe/1e3} s`;
      (0, Ke.k)(ee, Fe, ie).then((() => {
        pe = null, de()
      }), (() => {
        pe = null, Ee(ie)
      }))
    }

    function We(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      ee.postMessage(ie, He)
    }

    function te(ee, ie, He, ye) {
      let be = ie.get(He);
      return void 0 === be && (be = ye().then((async ie => {
        let {
          image: He,
          request: ye
        } = ie;
        try {
          const ie = await createImageBitmap(He);
          We(ee, ye(ie), [ie])
        } catch (be) {
          Ee(`could not take an image (${String(be)})`)
        }
      })), be.catch((() => {
        ie.get(He) === be && ie.delete(He)
      })), ie.set(He, be)), be
    }
    async function Ze(ee, ie) {
      Oe();
      const He = Re;
      if (null === He) return null;
      if (await ee(He), Re !== He) return null;
      const ye = ++fe;
      return new Promise((ee => {
        Te.set(ye, ee), We(He, ie(ye)), de()
      }))
    }

    function we(ee, ie, He) {
      return Ze((ie => Promise.all([ee.top, ee.left, ee.right].map((ee => function(ee, ie) {
        return te(ee, Xe, ie, (async () => ({
          image: await Be(ie),
          request: ee => ({
            type: "texture",
            url: ie,
            bitmap: ee
          })
        })))
      }(ie, ee))))), (ye => ({
        type: "draw",
        id: ye,
        ...ee,
        size: ie,
        outlineWidth: He
      })))
    }

    function De(ee, ie, He, ye) {
      return Ze((He => function(ee, ie, He) {
        return te(ee, ze, ie, (async () => {
          const {
            texture: ee,
            ...ye
          } = await He();
          return {
            image: await Be(ee),
            request: ee => ({
              type: "model",
              name: ie,
              bitmap: ee,
              geometry: ye
            })
          }
        }))
      }(He, ee, ie)), (ie => ({
        type: "drawModel",
        id: ie,
        name: ee,
        size: He,
        outlineWidth: ye
      })))
    }
  },
  37187: (ee, ie, He) => {
    He.d(ie, {
      c: () => ye,
      d: () => Fe,
      h: () => Ke,
      j: () => ke,
      m: () => Je
    });
    const ye = {
        across: Math.SQRT1_2,
        down: Math.SQRT1_2 / 2,
        up: Math.sqrt(3) / 2
      },
      be = .6,
      Me = {
        width: 2 * ye.across,
        height: 2 * ye.down + ye.up
      };

    function Ke(ee, ie) {
      const He = ie > 0 ? ie + 1 : 0,
        Ke = ee * be - ie / ye.across;
      return Math.max(0, Math.min(Ke, (ee - 2 * He) / Me.height))
    }
    const Ue = [15, 15, 15],
      Fe = {
        top: 1,
        left: .85,
        right: .7
      };

    function Je(ee, ie, He, ye) {
      const {
        vertices: be,
        uvs: Ue,
        indices: Fe,
        shades: Je
      } = ee, oe = function(ee, ie) {
        const He = Ke(ee, ie),
          ye = Me.width * He,
          be = Me.height * He;
        return {
          left: (ee - ye) / 2,
          top: (ee - be) / 2,
          width: ye,
          height: be
        }
      }(He, ye), Re = new Float32Array(be.length);
      for (let Me = 0; Me < be.length; Me += 3) Re[Me] = oe.left + be[Me] * oe.width, Re[Me + 1] = oe.top + be[Me + 1] * oe.height, Re[Me + 2] = be[Me + 2];
      const qe = new Float32Array(He * He).fill(-1 / 0),
        fe = new Uint8ClampedArray(He * He * 4),
        Te = 255 * ee.alphaCutoff;
      for (let Me = 0; Me < Fe.length; Me += 3) {
        const [ee, ye, be] = [Fe[Me], Fe[Me + 1], Fe[Me + 2]], [Ke, oe, ke] = [3 * ee, 3 * ye, 3 * be], [pe, Xe, ze, Be, Ee, ge] = [Re[Ke], Re[Ke + 1], Re[oe], Re[oe + 1], Re[ke], Re[ke + 1]], Oe = (ze - pe) * (ge - Xe) - (Ee - pe) * (Be - Xe);
        if (Math.abs(Oe) < 1e-9) continue;
        const de = Je[Me / 3],
          [We, te, Ze, we, De, Pe] = [Ue[2 * ee], Ue[2 * ee + 1], Ue[2 * ye], Ue[2 * ye + 1], Ue[2 * be], Ue[2 * be + 1]],
          Ae = Math.max(0, Math.floor(Math.min(pe, ze, Ee))),
          Ye = Math.min(He - 1, Math.ceil(Math.max(pe, ze, Ee))),
          Ve = Math.max(0, Math.floor(Math.min(Xe, Be, ge))),
          ae = Math.min(He - 1, Math.ceil(Math.max(Xe, Be, ge)));
        for (let Me = Ve; Me <= ae; Me++)
          for (let ee = Ae; ee <= Ye; ee++) {
            const [ye, be] = [ee + .5, Me + .5], Ue = ((ye - pe) * (ge - Xe) - (Ee - pe) * (be - Xe)) / Oe, Fe = ((ze - pe) * (be - Xe) - (ye - pe) * (Be - Xe)) / Oe, Je = 1 - Ue - Fe;
            if (Je < 0 || Ue < 0 || Fe < 0) continue;
            const Ae = Je * Re[Ke + 2] + Ue * Re[oe + 2] + Fe * Re[ke + 2],
              Ye = Me * He + ee;
            if (Ae <= qe[Ye]) continue;
            const Ve = Math.max(0, Math.min(ie.width - 1, Math.floor((Je * We + Ue * Ze + Fe * De) * ie.width))),
              ae = 4 * (Math.max(0, Math.min(ie.height - 1, Math.floor((Je * te + Ue * we + Fe * Pe) * ie.height))) * ie.width + Ve);
            ie.pixels[ae + 3] < Te || (qe[Ye] = Ae, fe[4 * Ye] = ie.pixels[ae] * de, fe[4 * Ye + 1] = ie.pixels[ae + 1] * de, fe[4 * Ye + 2] = ie.pixels[ae + 2] * de, fe[4 * Ye + 3] = 255)
          }
      }
      return ke(fe, He, ye), fe
    }
    let oe = NaN,
      Re = new Int32Array(0);

    function ke(ee, ie, He) {
      let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ie => 0 !== ee[4 * ie + 3];
      const be = new Uint8Array(ie * ie);
      for (let Ue = 0; Ue < ie * ie; Ue++) be[Ue] = ye(Ue) ? 1 : 0;
      const Me = (ee, He) => ee >= 0 && He >= 0 && ee < ie && He < ie && 0 === be[He * ie + ee],
        Ke = new Float32Array(ie * ie).fill(1 / 0),
        Fe = function(ee) {
          if (ee !== oe) {
            const ie = Math.ceil(ee + 1),
              He = [];
            for (let ye = -ie; ye <= ie; ye++)
              for (let be = -ie; be <= ie; be++) {
                const ie = be * be + ye * ye;
                ie > 0 && ie < (ee + 1) ** 2 && He.push(be, ye, ie)
              }
            oe = ee, Re = Int32Array.from(He)
          }
          return Re
        }(He);
      for (let Ue = 0; Ue < ie; Ue++)
        for (let ee = 0; ee < ie; ee++) {
          if (1 === be[Ue * ie + ee] && (Me(ee - 1, Ue) || Me(ee + 1, Ue) || Me(ee, Ue - 1) || Me(ee, Ue + 1)))
            for (let He = 0; He < Fe.length; He += 3) {
              const ye = ee + Fe[He],
                be = Ue + Fe[He + 1];
              if (ye >= 0 && be >= 0 && ye < ie && be < ie) {
                const ee = be * ie + ye;
                Ke[ee] = Math.min(Ke[ee], Fe[He + 2])
              }
            }
        }
      for (let Je = 0; Je < ie * ie; Je++) 1 !== be[Je] && Ke[Je] !== 1 / 0 && (ee.set(Ue, 4 * Je), ee[4 * Je + 3] = Math.round(255 * Math.min(1, He + 1 - Math.sqrt(Ke[Je]))))
    }
  },
  37192: (ee, ie, He) => {
    He.d(ie, {
      b: () => be
    });
    const ye = {
      wait: function(ee) {
        return new Promise((ie => {
          setTimeout(ie, ee)
        }))
      },
      stallMs: 2e4
    };
    class be {
      constructor(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ye;
        this.url = ee, this.options = ie, this.timing = He, this.fetched = null, this.fetchAbort = null, this.scriptUrl = void 0, this.scriptUrl = ee
      }
      ready() {
        if (null === this.fetched) {
          const ee = new AbortController;
          this.fetchAbort = ee, this.fetched = this.fetchWithRetries(ee.signal).then((ie => (this.fetchAbort === ee && (this.fetchAbort = null), ie)))
        }
        return this.fetched
      }
      cancel() {
        null !== this.fetchAbort && (this.fetchAbort.abort(), this.fetchAbort = null, this.fetched = null)
      }
      forgetFailedFetch() {
        this.fetched = null
      }
      get href() {
        return this.url.href
      }
      start() {
        return new Worker(this.scriptUrl, this.options)
      }
      async fetchWithRetries(ee) {
        for (let ie = 0;; ie++) {
          const He = new URL(this.url);
          if (ie > 0 && He.searchParams.set("cache-bust", `${Date.now()}-${ie}`), await this.fetchWhole(He, ee)) return this.scriptUrl = He, !0;
          if (ie >= 3 || ee.aborted) return !1;
          if (await this.timing.wait(500 * 2 ** ie), ee.aborted) return !1
        }
      }
      async fetchWhole(ee, ie) {
        const He = new AbortController;
        let ye;
        const be = () => {
            clearTimeout(ye), ye = setTimeout((() => {
              He.abort()
            }), this.timing.stallMs)
          },
          Me = () => {
            He.abort()
          };
        ie.addEventListener("abort", Me, {
          once: !0
        }), be();
        try {
          var Ke;
          const ie = await fetch(ee, {
            signal: He.signal
          });
          if (!ie.ok) return !1;
          const ye = null === (Ke = ie.body) || void 0 === Ke ? void 0 : Ke.getReader();
          if (!ye) return !1;
          for (;;) {
            const {
              done: ee
            } = await ye.read();
            if (ee) return !0;
            be()
          }
        } catch {
          return !1
        } finally {
          clearTimeout(ye), ie.removeEventListener("abort", Me)
        }
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);