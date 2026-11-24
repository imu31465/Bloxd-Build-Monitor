export const id = 208;
export const ids = [208, 209];
export const modules = {
  36340: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      CAPPED_COUNTS_VISIT_CAP: () => am,
      reportCappedWasmFailure: () => Dm,
      reportUncappedWasmFailure: () => wm,
      reportWasmCrash: () => Am,
      reportWasmFailure: () => xm
    });
    var hm = fm(2932);

    function Am(mm) {
      (0, hm.reportClientError)("wasm_load", mm.message, mm.code)
    }
    const am = hm.d - 4;

    function xm(mm, Tm, fm) {
      (0, hm.reportClientError)(mm, Tm, fm, !1)
    }

    function wm(mm, Tm, fm) {
      (0, hm.reportClientError)(mm, Tm, fm, !1, 1 / 0)
    }

    function Dm(mm, Tm, fm) {
      (0, hm.reportClientError)(mm, Tm, fm, !1, am)
    }
  },
  36337: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => Qm,
      f: () => cm,
      j: () => zm,
      l: () => nm
    });
    var hm = fm(36369),
      Am = fm(2873),
      am = fm(36384),
      xm = fm(2876),
      wm = fm(36340),
      Dm = fm(2915),
      im = fm(3224),
      Rm = fm(3217),
      pm = fm(36348),
      Em = fm(2932),
      om = fm(36355),
      Om = fm(36363),
      Ym = fm(3696);
    let qm = !1;
    const jm = 40;
    var Vm = fm(736);
    const Im = "bloxdWasmFailureReported";

    function Km() {
      return "undefined" === typeof WebAssembly
    }

    function Qm() {
      return (0, hm.e)()
    }

    function nm() {
      if (Km()) return "this browser has no WebAssembly";
      const mm = (0, Am.p)();
      return "compile" === mm || "instantiate" === mm ? `the core wasm didn't load here (${(0,Am.h)()})` : null
    }
    async function Jm(mm) {
      return await (0, am.f)(am.c, void 0, mm)
    }

    function cm() {
      Km() || (0, Vm.b)((() => {
        Jm()
      }))
    }

    function zm() {
      if (Km()) return async () => ((0, Dm.i)("unsupported", 0), Zm("unsupported", "This browser has no WebAssembly"), !1);
      const mm = {
        reloadFailedDownload: !0
      };
      return Jm(mm), async () => {
        var Tm;
        const fm = performance.now();
        await Jm(mm);
        const hm = (performance.now() - fm) / 1e3;
        if ((0, Am.U)()) return (0, Dm.i)("ready", hm), qm || (qm = !0, (0, Am.X)((() => {
          if ("call" !== (0, Am.p)()) return;
          const mm = (0, Am.m)(),
            Tm = (0, pm.m)(mm, Am.G, Am.fb),
            fm = (0, Am.w)().buffer.byteLength,
            hm = (0, pm.g)(Tm.kind, Tm.refusedBytes),
            am = hm ? "alloc_failed" : Tm.kind,
            xm = (0, om.h)(fm),
            wm = hm ? `_r${Math.floor(Math.log2(Tm.refusedBytes))}` : "",
            Dm = (0, Ym.b)();
          null === Dm && console.warn("A JS client wasm call turned wasm off without naming its site: call markWasmFailedAt, not markBloxdWasmFailed");
          const im = new Error((0, Om.b)(mm, fm, Tm));
          if (mm instanceof Error && void 0 !== mm.stack) {
            const Tm = mm.stack.split("\n"),
              fm = Tm.length > jm ? [...Tm.slice(0, jm / 2), ...Tm.slice(-jm / 2)] : Tm;
            im.stack = fm.join("\n")
          }(0, Em.reportClientError)("wasm_load", im, `wasm_call_${am}_${null!==Dm&&void 0!==Dm?Dm:"unnamed"}_m${xm}${wm}`)
        }))), (0, xm.R)(am.c.url()) && (0, wm.reportCappedWasmFailure)("wasm_load", im.e.message, im.e.code), !0;
        const Vm = Rm.b[null !== (Tm = (0, Am.p)()) && void 0 !== Tm ? Tm : "call"];
        return (0, Dm.i)(Vm, hm), Zm(Vm, (0, Am.h)()), !1
      }
    }

    function Zm(mm, Tm) {
      (0, Rm.f)(Im, `Bloxd wasm ${mm}, so the game can't start: ${Tm}`, Tm, mm)
    }
  },
  36363: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => wm,
      f: () => im,
      h: () => xm,
      l: () => pm
    });
    var hm = fm(36348),
      Am = fm(16);
    const am = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function xm(mm) {
      if (mm instanceof WebAssembly.RuntimeError) return !0;
      const Tm = mm instanceof Error ? mm.stack : void 0;
      return "string" === typeof Tm && am.test(Tm)
    }

    function wm(mm, Tm, fm) {
      var Am;
      const xm = mm instanceof Error ? mm.name : "thrown",
        wm = (mm instanceof Error && null !== (Am = mm.stack) && void 0 !== Am ? Am : "").split("\n").filter((mm => am.test(mm))).slice(0, 8).map((mm => mm.trim())),
        Dm = null === Tm ? "wasm memory unknown" : `wasm memory ${Math.round(Tm/2**20)} MB`,
        im = null === fm.panic ? "" : `, panic: ${(0,hm.i)(fm.panic)}`,
        Rm = `${xm}: ${mm instanceof Error?mm.message:String(mm)}`;
      return `${(0,hm.q)(fm.kind,fm.refusedBytes)} ${Rm} (${Dm})${im}${wm.length>0?` | ${wm.join(" < ")}`:""}`
    }
    const Dm = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function im(mm) {
      var Tm;
      let fm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(mm instanceof Error) || !Dm.test(mm.message)) return {};
      if (!("detached" in fm)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, Am.R)(null === (Tm = (0, Am.K)(fm, "detached")) || void 0 === Tm ? void 0 : Tm.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const Rm = 500;

    function pm(mm) {
      let Tm = "[object Object]";
      try {
        Tm = String(mm)
      } catch {}
      if ("[object Object]" !== Tm) return Tm;
      try {
        var fm, hm;
        return null !== (fm = null === (hm = JSON.stringify(mm)) || void 0 === hm ? void 0 : hm.slice(0, Rm)) && void 0 !== fm ? fm : Tm
      } catch {
        return Tm
      }
    }
  },
  36401: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/bloxd_wasm_bg.a1990935b232763da059.wasm"
  },
  36379: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/bloxd_wasm_textures_bg.d4f01f506a853b0d4e83.wasm"
  },
  36390: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      ap: () => hm,
      EnvelopeKind: () => Am,
      xp: () => am,
      PhysicsEngine: () => xm,
      wp: () => wm,
      Dp: () => Dm,
      ip: () => im,
      Rp: () => Rm,
      Ep: () => pm,
      Op: () => Em,
      Yp: () => om,
      qp: () => Om,
      jp: () => Ym,
      Vp: () => qm,
      default: () => cT,
      initSync: () => JT,
      Ip: () => jm,
      Kp: () => Vm,
      Qp: () => Im,
      np: () => Km,
      Jp: () => Qm,
      cp: () => nm,
      zp: () => Jm,
      Zp: () => cm,
      kp: () => zm,
      bp: () => Zm,
      Sp: () => km,
      Np: () => bm,
      Gp: () => Sm,
      Xp: () => em,
      Pp: () => Nm
    });
    class hm {
      __destroy_into_raw() {
        const mm = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Xm.unregister(this), mm
      }
      free() {
        const mm = this.__destroy_into_raw();
        KT.xho1(mm, 0)
      }
      Hp() {
        const mm = KT.Rc6W(this.__wbg_ptr);
        if (mm[2]) throw oT(mm[1]);
        return mm[0] >>> 0
      }
      yp() {
        return KT.LsY0(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const mm = KT.fUt1();
        return this.__wbg_ptr = mm, Xm.register(this, this.__wbg_ptr, this), this
      }
      Cp() {
        return KT.d0GP(this.__wbg_ptr) >>> 0
      }
      rp(mm) {
        const Tm = KT.GlH0(this.__wbg_ptr, mm);
        if (Tm[2]) throw oT(Tm[1]);
        return Tm[0] >>> 0
      }
      sp(mm) {
        const Tm = KT.nB4K(this.__wbg_ptr, mm);
        if (Tm[2]) throw oT(Tm[1]);
        return Tm[0] >>> 0
      }
    }
    Symbol.dispose && (hm.prototype[Symbol.dispose] = hm.prototype.free);
    const Am = Object.freeze({
      Js: 0,
      0: "Js",
      Error: 1,
      1: "Error",
      LeaveRoom: 2,
      2: "LeaveRoom",
      RoomState: 3,
      3: "RoomState",
      RoomStatePatch: 4,
      4: "RoomStatePatch",
      RoomDataNone: 5,
      5: "RoomDataNone",
      RoomDataBin: 6,
      6: "RoomDataBin",
      RoomDataBytes: 7,
      7: "RoomDataBytes",
      Ignored: 8,
      8: "Ignored",
      StringType: 16,
      16: "StringType"
    });
    class am {
      __destroy_into_raw() {
        const mm = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Pm.unregister(this), mm
      }
      free() {
        const mm = this.__destroy_into_raw();
        KT.Y1T1(mm, 0)
      }
      Bp(mm, Tm) {
        const fm = KT.DeOT(this.__wbg_ptr, mm, Tm);
        if (fm[2]) throw oT(fm[1]);
        return fm[0] >>> 0
      }
      Lp(mm) {
        const Tm = KT.EsIK(this.__wbg_ptr, mm);
        if (Tm[2]) throw oT(Tm[1]);
        return Tm[0] >>> 0
      }
      vp() {
        KT.ZBMA(this.__wbg_ptr)
      }
      static tp() {
        return KT.NRVf() >>> 0
      }
      Up() {
        return KT.KjAn(this.__wbg_ptr) >>> 0
      }
      dp() {
        const mm = KT.kH2W(this.__wbg_ptr);
        return 0 === mm[0] ? void 0 : mm[1]
      }
      Wp() {
        return KT.Oxpm(this.__wbg_ptr) >>> 0
      }
      Fp() {
        return KT.Obxy(this.__wbg_ptr) >>> 0
      }
      static Mp() {
        return KT.Twpe() >>> 0
      }
      constructor() {
        const mm = KT.z3qa();
        return this.__wbg_ptr = mm, Pm.register(this, this.__wbg_ptr, this), this
      }
      mE() {
        return KT.YftN(this.__wbg_ptr) >>> 0
      }
      TE() {
        return KT.Qbl4(this.__wbg_ptr) >>> 0
      }
      fE() {
        return KT.ScZG(this.__wbg_ptr) >>> 0
      }
      lp(mm) {
        return KT.FYN5(this.__wbg_ptr, mm) >>> 0
      }
      reserve(mm, Tm) {
        const fm = KT.p4Q8(this.__wbg_ptr, mm, Tm);
        if (fm[1]) throw oT(fm[0])
      }
      aE(mm, Tm) {
        const fm = iT(mm, KT.WTOE),
          hm = QT;
        KT.dlpx(this.__wbg_ptr, fm, hm, Tm)
      }
      text() {
        let mm, Tm;
        try {
          const fm = KT.XVHT(this.__wbg_ptr);
          return mm = fm[0], Tm = fm[1], Wm(fm[0], fm[1])
        } finally {
          KT.bNoJ(mm, Tm, 1)
        }
      }
    }
    Symbol.dispose && (am.prototype[Symbol.dispose] = am.prototype.free);
    class xm {
      __destroy_into_raw() {
        const mm = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Hm.unregister(this), mm
      }
      free() {
        const mm = this.__destroy_into_raw();
        KT.Is5A(mm, 0)
      }
      wE(mm, Tm) {
        um(Tm, hm);
        const fm = KT.bBvl(this.__wbg_ptr, mm, Tm.__wbg_ptr);
        if (fm[2]) throw oT(fm[1]);
        return fm[0] >>> 0
      }
      iE() {
        const mm = KT.Xdd3(this.__wbg_ptr);
        if (mm[1]) throw oT(mm[0])
      }
      OE(mm, Tm, fm, hm, Am, am, xm, Dm, im, Rm, pm) {
        um(mm, wm);
        const Em = KT.lU4g(this.__wbg_ptr, mm.__wbg_ptr, Tm, fm, hm, Am, am, xm, Dm, im, Rm, pm);
        if (Em[2]) throw oT(Em[1]);
        return Em[0]
      }
      YE() {
        const mm = KT.ODVm(this.__wbg_ptr);
        var Tm = Bm(mm[0], mm[1]).slice();
        return KT.bNoJ(mm[0], 8 * mm[1], 8), Tm
      }
      qE() {
        return KT.Xr7O(this.__wbg_ptr) >>> 0
      }
      jE() {
        return KT.spLU(this.__wbg_ptr) >>> 0
      }
      VE() {
        return KT.eFuH(this.__wbg_ptr) >>> 0
      }
      constructor(mm, Tm, fm, hm, Am, am, xm, wm) {
        const Dm = KT.EB9u(mm, Tm, fm, hm, Am, am, xm, wm);
        if (Dm[2]) throw oT(Dm[1]);
        return this.__wbg_ptr = Dm[0], Hm.register(this, this.__wbg_ptr, this), this
      }
      QE(mm) {
        um(mm, hm);
        const Tm = KT.GFCE(this.__wbg_ptr, mm.__wbg_ptr);
        if (Tm[2]) throw oT(Tm[1]);
        return Tm[0] >>> 0
      }
      nE(mm) {
        const Tm = KT.iPFi(this.__wbg_ptr, mm);
        if (Tm[1]) throw oT(Tm[0])
      }
      JE() {
        return KT.uqPb(this.__wbg_ptr) >>> 0
      }
      resume(mm, Tm) {
        um(mm, wm), um(Tm, hm);
        const fm = KT.pFlh(this.__wbg_ptr, mm.__wbg_ptr, Tm.__wbg_ptr);
        if (fm[2]) throw oT(fm[1]);
        return fm[0] >>> 0
      }
      bE(mm) {
        const Tm = KT.yYLd(this.__wbg_ptr, mm);
        if (Tm[1]) throw oT(Tm[0])
      }
      NE(mm, Tm) {
        um(Tm, hm);
        const fm = KT.vSGD(this.__wbg_ptr, mm, Tm.__wbg_ptr);
        if (fm[1]) throw oT(fm[0])
      }
      PE(mm) {
        const Tm = pT(mm, KT.WTOE),
          fm = QT,
          hm = KT.djiW(this.__wbg_ptr, Tm, fm);
        if (hm[1]) throw oT(hm[0])
      }
      pE(mm, Tm, fm, hm, Am, am) {
        const xm = KT.Hi9o(this.__wbg_ptr, mm, Tm, fm, hm, Am, am);
        if (xm[1]) throw oT(xm[0])
      }
      EE(mm, Tm, fm, hm) {
        const Am = iT(mm, KT.WTOE),
          am = QT,
          xm = pT(Tm, KT.WTOE),
          wm = QT,
          Dm = pT(fm, KT.WTOE),
          im = QT,
          Rm = pT(hm, KT.WTOE),
          pm = QT,
          Em = KT.u5Py(this.__wbg_ptr, Am, am, xm, wm, Dm, im, Rm, pm);
        if (Em[1]) throw oT(Em[0])
      }
      yE(mm, Tm) {
        um(Tm, hm);
        const fm = KT.n87k(this.__wbg_ptr, mm, Tm.__wbg_ptr);
        if (fm[1]) throw oT(fm[0])
      }
      KE(mm, Tm, fm) {
        const hm = KT.y3o1(this.__wbg_ptr, mm, Tm, fm);
        if (hm[1]) throw oT(hm[0])
      }
      rE(mm, Tm, fm, hm, Am, am, xm, Dm, im, Rm) {
        um(mm, wm);
        return KT.ouFN(this.__wbg_ptr, mm.__wbg_ptr, Tm, fm, hm, Am, am, xm, Dm, im, Rm)
      }
    }
    Symbol.dispose && (xm.prototype[Symbol.dispose] = xm.prototype.free);
    class wm {
      static __wrap(mm) {
        const Tm = Object.create(wm.prototype);
        return Tm.__wbg_ptr = mm, ym.register(Tm, Tm.__wbg_ptr, Tm), Tm
      }
      __destroy_into_raw() {
        const mm = this.__wbg_ptr;
        return this.__wbg_ptr = 0, ym.unregister(this), mm
      }
      free() {
        const mm = this.__destroy_into_raw();
        KT.C9E5(mm, 0)
      }
      ME(mm) {
        const Tm = KT.UTqO(this.__wbg_ptr, mm);
        if (Tm[2]) throw oT(Tm[1]);
        return Tm[0] >>> 0
      }
      uE(mm, Tm, fm) {
        return KT.qdki(this.__wbg_ptr, mm, Tm, fm)
      }
      BE(mm, Tm, fm) {
        return KT.Aeni(this.__wbg_ptr, mm, Tm, fm) >>> 0
      }
      LE(mm, Tm, fm, hm) {
        return 0 !== KT.K7Vu(this.__wbg_ptr, mm, Tm, fm, hm)
      }
      vE() {
        KT.aPVu(this.__wbg_ptr)
      }
      UE(mm) {
        const Tm = KT.cFMq(this.__wbg_ptr, mm);
        if (Tm[3]) throw oT(Tm[2]);
        var fm = tm(Tm[0], Tm[1]).slice();
        return KT.bNoJ(Tm[0], 1 * Tm[1], 1), fm
      }
      evict(mm, Tm) {
        return KT.GhUM(this.__wbg_ptr, mm, Tm) >>> 0
      }
      dE() {
        KT.qm17(this.__wbg_ptr)
      }
      gE(mm, Tm, fm) {
        KT.lDLH(this.__wbg_ptr, mm, Tm, fm)
      }
      WE(mm) {
        const Tm = KT.CVXG(this.__wbg_ptr, mm);
        if (Tm[1]) throw oT(Tm[0])
      }
      FE() {
        return KT.UMr0(this.__wbg_ptr) >>> 0
      }
      fo() {
        return KT.pvYx(this.__wbg_ptr) >>> 0
      }
      ho(mm, Tm, fm) {
        KT.vVO3(this.__wbg_ptr, mm, Tm, fm)
      }
      Ao(mm, Tm, fm) {
        KT.o0ei(this.__wbg_ptr, mm, Tm, fm)
      }
      ao() {
        return KT.KkHV(this.__wbg_ptr) >>> 0
      }
      xo() {
        return KT.tXYL(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const mm = KT.ntPZ();
        return this.__wbg_ptr = mm, ym.register(this, this.__wbg_ptr, this), this
      }
      static wo() {
        const mm = KT.z7yU();
        return wm.__wrap(mm)
      }
      Do() {
        return KT.Jo5Q(this.__wbg_ptr) >>> 0
      }
      Ro() {
        return KT.rze3(this.__wbg_ptr) >>> 0
      }
      po(mm, Tm, fm, hm) {
        const Am = KT.NsSo(this.__wbg_ptr, mm, Tm, fm, hm);
        if (Am[1]) throw oT(Am[0])
      }
      Eo() {
        return KT.Dvuw(this.__wbg_ptr) >>> 0
      }
      oo() {
        return KT.IPuB(this.__wbg_ptr) >>> 0
      }
      Oo(mm, Tm, fm, hm) {
        KT.PVLJ(this.__wbg_ptr, mm, Tm, fm, hm)
      }
      Yo(mm) {
        KT.ASsi(this.__wbg_ptr, mm)
      }
      jo(mm, Tm, fm, hm, Am) {
        const am = RT(Tm, KT.WTOE),
          xm = QT,
          wm = iT(fm, KT.WTOE),
          Dm = QT,
          im = pT(hm, KT.WTOE),
          Rm = QT,
          pm = KT.bF4P(this.__wbg_ptr, mm, am, xm, wm, Dm, im, Rm, Am);
        if (pm[1]) throw oT(pm[0])
      }
      qo(mm, Tm, fm, hm) {
        const Am = RT(mm, KT.WTOE),
          am = QT,
          xm = iT(Tm, KT.WTOE),
          wm = QT,
          Dm = pT(fm, KT.WTOE),
          im = QT,
          Rm = RT(hm, KT.WTOE),
          pm = QT,
          Em = KT.fsr0(this.__wbg_ptr, Am, am, xm, wm, Dm, im, Rm, pm);
        if (Em[1]) throw oT(Em[0])
      }
      zo(mm) {
        const Tm = RT(mm, KT.WTOE),
          fm = QT,
          hm = KT.nXkd(this.__wbg_ptr, Tm, fm);
        if (hm[1]) throw oT(hm[0])
      }
      Zo() {
        return KT.KDVb(this.__wbg_ptr) >>> 0
      }
      ko(mm) {
        const Tm = KT.heVR(this.__wbg_ptr, mm);
        if (Tm[2]) throw oT(Tm[1]);
        return Tm[0] >>> 0
      }
      steer() {
        return KT.TGok(this.__wbg_ptr) >>> 0
      }
      bo() {
        const mm = KT.Prhy(this.__wbg_ptr);
        var Tm = Bm(mm[0], mm[1]).slice();
        return KT.bNoJ(mm[0], 8 * mm[1], 8), Tm
      }
      eo() {
        return KT.gIrc(this.__wbg_ptr) >>> 0
      }
      zE() {
        const mm = KT.nGl5(this.__wbg_ptr);
        var Tm, fm, hm = (Tm = mm[0], fm = mm[1], Tm >>>= 0, (null !== gm && 0 !== gm.byteLength || (gm = new Int32Array(KT.memory.buffer)), gm).subarray(Tm / 4, Tm / 4 + fm)).slice();
        return KT.bNoJ(mm[0], 4 * mm[1], 4), hm
      }
    }
    Symbol.dispose && (wm.prototype[Symbol.dispose] = wm.prototype.free);
    class Dm {
      __destroy_into_raw() {
        const mm = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Cm.unregister(this), mm
      }
      free() {
        const mm = this.__destroy_into_raw();
        KT.RgXK(mm, 0)
      }
      Go(mm) {
        const Tm = iT(mm, KT.WTOE),
          fm = QT,
          hm = KT.HbHE(this.__wbg_ptr, Tm, fm);
        if (hm[1]) throw oT(hm[0])
      }
      Xo() {
        return KT.Y0Be(this.__wbg_ptr) >>> 0
      }
      Po() {
        return KT.Dvwj(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const mm = KT.Cc0h();
        return this.__wbg_ptr = mm, Cm.register(this, this.__wbg_ptr, this), this
      }
      run(mm, Tm) {
        um(mm, wm);
        const fm = KT.sn7g(this.__wbg_ptr, mm.__wbg_ptr, Tm);
        if (fm[2]) throw oT(fm[1]);
        return fm[0] >>> 0
      }
      Ho(mm) {
        const Tm = iT(mm, KT.WTOE),
          fm = QT;
        KT.hyFe(this.__wbg_ptr, Tm, fm)
      }
      yo(mm) {
        const Tm = iT(mm, KT.WTOE),
          fm = QT;
        KT.AHQF(this.__wbg_ptr, Tm, fm)
      }
    }
    Symbol.dispose && (Dm.prototype[Symbol.dispose] = Dm.prototype.free);
    class im {
      __destroy_into_raw() {
        const mm = this.__wbg_ptr;
        return this.__wbg_ptr = 0, rm.unregister(this), mm
      }
      free() {
        const mm = this.__destroy_into_raw();
        KT.isX8(mm, 0)
      }
      ro(mm, Tm) {
        const fm = RT(mm, KT.WTOE),
          hm = QT;
        return KT.UDlB(this.__wbg_ptr, fm, hm, Tm) >>> 0
      }
      Mo(mm, Tm, fm) {
        um(mm, wm);
        const hm = RT(fm, KT.WTOE),
          Am = QT,
          am = KT.zxLg(this.__wbg_ptr, mm.__wbg_ptr, Tm, hm, Am);
        if (am[2]) throw oT(am[1]);
        return am[0] >>> 0
      }
      Co(mm) {
        return KT.qDgr(this.__wbg_ptr, mm) >>> 0
      }
      constructor() {
        const mm = KT.JEvF();
        return this.__wbg_ptr = mm, rm.register(this, this.__wbg_ptr, this), this
      }
      scan(mm, Tm) {
        um(mm, wm);
        const fm = KT.NmjU(this.__wbg_ptr, mm.__wbg_ptr, Tm);
        if (fm[2]) throw oT(fm[1]);
        return fm[0] >>> 0
      }
      Lo(mm) {
        const Tm = RT(mm, KT.WTOE),
          fm = QT;
        KT.DuXv(this.__wbg_ptr, Tm, fm)
      }
      Bo() {
        return KT.bfqq(this.__wbg_ptr) >>> 0
      }
      uo() {
        return KT.Ptv5(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (im.prototype[Symbol.dispose] = im.prototype.free);
    class Rm {
      __destroy_into_raw() {
        const mm = this.__wbg_ptr;
        return this.__wbg_ptr = 0, sm.unregister(this), mm
      }
      free() {
        const mm = this.__destroy_into_raw();
        KT.cWQE(mm, 0)
      }
      Uo(mm) {
        const Tm = KT.EJeT(this.__wbg_ptr, mm);
        if (Tm[2]) throw oT(Tm[1]);
        return Tm[0] >>> 0
      }
      compute(mm, Tm, fm, hm) {
        var Am = wT(hm) ? 0 : ET(hm, KT.WTOE, KT.M1TV),
          am = QT;
        const xm = KT.NcBM(this.__wbg_ptr, mm, wT(Tm) ? Number.MAX_SAFE_INTEGER : Tm | 0, fm, Am, am);
        if (xm[2]) throw oT(xm[1]);
        return xm[0] >>> 0
      }
      Fo(mm) {
        const Tm = ET(mm, KT.WTOE, KT.M1TV),
          fm = QT;
        KT.aoc9(this.__wbg_ptr, Tm, fm)
      }
      TO() {
        return KT.PnsD(this.__wbg_ptr)
      }
      fO(mm) {
        return KT.YRkw(this.__wbg_ptr, mm) >>> 0
      }
      hO() {
        return KT.ugkd(this.__wbg_ptr) >>> 0
      }
      aO() {
        return KT.oRUn(this.__wbg_ptr) >>> 0
      }
      xO(mm, Tm) {
        const fm = KT.Upzl(this.__wbg_ptr, mm, Tm);
        if (fm[1]) throw oT(fm[0])
      }
      wO() {
        return KT.lw5Y(this.__wbg_ptr) >>> 0
      }
      DO() {
        return KT.w4t7(this.__wbg_ptr) >>> 0
      }
      iO() {
        return KT.cxyk(this.__wbg_ptr) >>> 0
      }
      Wo(mm, Tm, fm) {
        const hm = iT(mm, KT.WTOE),
          Am = QT,
          am = iT(Tm, KT.WTOE),
          xm = QT,
          wm = KT.riHs(this.__wbg_ptr, hm, Am, am, xm, fm);
        if (wm[1]) throw oT(wm[0])
      }
      pO() {
        return KT.dAOh(this.__wbg_ptr) >>> 0
      }
      mesh(mm, Tm, fm, hm, Am) {
        const am = KT.xigm(this.__wbg_ptr, mm, Tm, fm, hm, Am);
        if (am[2]) throw oT(am[1]);
        return am[0] >>> 0
      }
      constructor(mm, Tm, fm, hm, Am, am, xm, wm, Dm, im, Rm, pm, Em, om, Om, Ym, qm, jm, Vm, Im) {
        const Km = DT(mm, KT.WTOE),
          Qm = QT,
          nm = pT(Tm, KT.WTOE),
          Jm = QT,
          cm = iT(fm, KT.WTOE),
          zm = QT,
          Zm = RT(hm, KT.WTOE),
          km = QT,
          bm = RT(Am, KT.WTOE),
          Sm = QT,
          em = iT(am, KT.WTOE),
          Nm = QT,
          Gm = iT(xm, KT.WTOE),
          Xm = QT,
          Pm = pT(wm, KT.WTOE),
          Hm = QT,
          ym = pT(Dm, KT.WTOE),
          Cm = QT,
          rm = RT(im, KT.WTOE),
          lm = QT;
        var Mm = wT(Rm) ? 0 : DT(Rm, KT.WTOE),
          um = QT;
        const Bm = iT(pm, KT.WTOE),
          Lm = QT,
          tm = RT(Em, KT.WTOE),
          Um = QT;
        var dm = wT(om) ? 0 : RT(om, KT.WTOE),
          gm = QT;
        const Wm = pT(Om, KT.WTOE),
          Fm = QT,
          mT = KT.Xlko(Km, Qm, nm, Jm, cm, zm, Zm, km, bm, Sm, em, Nm, Gm, Xm, Pm, Hm, ym, Cm, rm, lm, Mm, um, Bm, Lm, tm, Um, dm, gm, Wm, Fm, Ym, qm, jm, Vm, Im);
        if (mT[2]) throw oT(mT[1]);
        return this.__wbg_ptr = mT[0], sm.register(this, this.__wbg_ptr, this), this
      }
      RO(mm, Tm) {
        const fm = iT(mm, KT.WTOE),
          hm = QT,
          Am = KT.oSy8(this.__wbg_ptr, fm, hm, Tm);
        if (Am[3]) throw oT(Am[2]);
        var am = tm(Am[0], Am[1]).slice();
        return KT.bNoJ(Am[0], 1 * Am[1], 1), am
      }
      EO(mm) {
        KT.Y9I4(this.__wbg_ptr, wT(mm) ? 16777215 : mm)
      }
      oO(mm) {
        return KT.s9Qs(this.__wbg_ptr, mm) >>> 0
      }
      YO() {
        return KT.d8I7(this.__wbg_ptr) >>> 0
      }
      OO() {
        const mm = KT.Il7j(this.__wbg_ptr);
        if (mm[2]) throw oT(mm[1]);
        return 0 !== mm[0]
      }
      qO() {
        return KT.QdBo(this.__wbg_ptr) >>> 0
      }
      jO() {
        return KT.hgxn(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (Rm.prototype[Symbol.dispose] = Rm.prototype.free);
    class pm {
      __destroy_into_raw() {
        const mm = this.__wbg_ptr;
        return this.__wbg_ptr = 0, lm.unregister(this), mm
      }
      free() {
        const mm = this.__destroy_into_raw();
        KT.AUC0(mm, 0)
      }
      compute(mm, Tm, fm, hm) {
        var Am = wT(hm) ? 0 : ET(hm, KT.WTOE, KT.M1TV),
          am = QT;
        const xm = KT.BmOy(this.__wbg_ptr, mm, wT(Tm) ? Number.MAX_SAFE_INTEGER : Tm | 0, fm, Am, am);
        if (xm[2]) throw oT(xm[1]);
        return xm[0] >>> 0
      }
      Fo(mm) {
        const Tm = ET(mm, KT.WTOE, KT.M1TV),
          fm = QT;
        KT.MkJL(this.__wbg_ptr, Tm, fm)
      }
      DO() {
        return KT.AP98(this.__wbg_ptr) >>> 0
      }
      iO() {
        return KT.FoEt(this.__wbg_ptr) >>> 0
      }
      VO(mm) {
        const Tm = KT.LscO(this.__wbg_ptr, mm);
        if (Tm[2]) throw oT(Tm[1]);
        return Tm[0] >>> 0
      }
      constructor(mm, Tm, fm, hm, Am, am) {
        const xm = DT(mm, KT.WTOE),
          wm = QT,
          Dm = pT(Tm, KT.WTOE),
          im = QT,
          Rm = iT(fm, KT.WTOE),
          pm = QT,
          Em = RT(hm, KT.WTOE),
          om = QT,
          Om = KT.O7kS(xm, wm, Dm, im, Rm, pm, Em, om, Am, am);
        if (Om[2]) throw oT(Om[1]);
        return this.__wbg_ptr = Om[0], lm.register(this, this.__wbg_ptr, this), this
      }
      YO() {
        return KT.pLPp(this.__wbg_ptr) >>> 0
      }
      OO() {
        const mm = KT.ZbDi(this.__wbg_ptr);
        if (mm[2]) throw oT(mm[1]);
        return 0 !== mm[0]
      }
      qO() {
        return KT.Lass(this.__wbg_ptr) >>> 0
      }
    }

    function Em() {
      const mm = KT.AaYm();
      var Tm = Lm(mm[0], mm[1]).slice();
      return KT.bNoJ(mm[0], 4 * mm[1], 4), Tm
    }

    function om(mm, Tm) {
      let fm, hm;
      try {
        const Am = DT(mm, KT.WTOE),
          am = QT,
          xm = ET(Tm, KT.WTOE, KT.M1TV),
          wm = QT,
          Dm = KT.nxVR(Am, am, xm, wm);
        return fm = Dm[0], hm = Dm[1], Wm(Dm[0], Dm[1])
      } finally {
        KT.bNoJ(fm, hm, 1)
      }
    }

    function Om() {
      const mm = KT.upS4();
      var Tm = Lm(mm[0], mm[1]).slice();
      return KT.bNoJ(mm[0], 4 * mm[1], 4), Tm
    }

    function Ym(mm) {
      return 0 !== KT.cX6o(mm)
    }

    function qm(mm, Tm) {
      const fm = ET(mm, KT.WTOE, KT.M1TV),
        hm = QT,
        Am = KT.IkBW(fm, hm, Tm);
      if (Am[1]) throw oT(Am[0])
    }

    function jm() {
      KT.AoYu()
    }

    function Vm() {
      return KT.r2uS() >>> 0
    }

    function Im(mm) {
      return 0 !== KT.oR93(mm)
    }

    function Km(mm) {
      return 0 !== KT.OeRF(mm)
    }

    function Qm(mm) {
      KT.Uze3(mm)
    }

    function nm() {
      return KT.pZvX() >>> 0
    }

    function Jm() {
      return KT.JC6P() >>> 0
    }

    function cm() {
      return 0 !== KT.yJn8()
    }

    function zm() {
      const mm = KT.U3vo();
      var Tm = Lm(mm[0], mm[1]).slice();
      return KT.bNoJ(mm[0], 4 * mm[1], 4), Tm
    }

    function Zm() {
      const mm = KT.yjTu();
      var Tm = Lm(mm[0], mm[1]).slice();
      return KT.bNoJ(mm[0], 4 * mm[1], 4), Tm
    }

    function km() {
      const mm = KT.f4VM();
      var Tm = Lm(mm[0], mm[1]).slice();
      return KT.bNoJ(mm[0], 4 * mm[1], 4), Tm
    }

    function bm() {
      return KT.kVgw() >>> 0
    }

    function Sm() {
      KT.fKNE()
    }

    function em() {
      let mm, Tm;
      try {
        const fm = KT.WSDB();
        return mm = fm[0], Tm = fm[1], Wm(fm[0], fm[1])
      } finally {
        KT.bNoJ(mm, Tm, 1)
      }
    }

    function Nm(mm) {
      KT.gVY9(Mm(mm))
    }

    function Gm() {
      return {
        __proto__: null,
        sMqr: {
          __proto__: null,
          EPRD: function(mm, Tm) {
            return Mm(Error(Wm(mm, Tm)))
          },
          OxyO: function(mm, Tm) {
            throw new Error(Wm(mm, Tm))
          },
          cyay: function(mm) {
            AT(mm).call()
          },
          M2vs: function(mm, Tm) {
            console.error(Wm(mm, Tm))
          },
          kewC: function() {
            return performance.now()
          },
          WrjM: function(mm) {
            oT(mm)
          }
        }
      }
    }
    Symbol.dispose && (pm.prototype[Symbol.dispose] = pm.prototype.free);
    const Xm = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((mm => KT.xho1(mm, 1))),
      Pm = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((mm => KT.Y1T1(mm, 1))),
      Hm = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((mm => KT.Is5A(mm, 1))),
      ym = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((mm => KT.C9E5(mm, 1))),
      Cm = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((mm => KT.RgXK(mm, 1))),
      rm = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((mm => KT.isX8(mm, 1))),
      sm = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((mm => KT.cWQE(mm, 1))),
      lm = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((mm => KT.AUC0(mm, 1)));

    function Mm(mm) {
      xT === aT.length && aT.push(aT.length + 1);
      const Tm = xT;
      return xT = aT[Tm], aT[Tm] = mm, Tm
    }

    function um(mm, Tm) {
      if (!(mm instanceof Tm)) throw new Error(`expected instance of ${Tm.name}`)
    }

    function Bm(mm, Tm) {
      return mm >>>= 0, dm().subarray(mm / 8, mm / 8 + Tm)
    }

    function Lm(mm, Tm) {
      return mm >>>= 0, TT().subarray(mm / 4, mm / 4 + Tm)
    }

    function tm(mm, Tm) {
      return mm >>>= 0, hT().subarray(mm / 1, mm / 1 + Tm)
    }
    let Um = null;

    function dm() {
      return null !== Um && 0 !== Um.byteLength || (Um = new Float64Array(KT.memory.buffer)), Um
    }
    let gm = null;

    function Wm(mm, Tm) {
      return function(mm, Tm) {
        qT += Tm, qT >= YT && (OT = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), OT.decode(), qT = Tm);
        return OT.decode(hT().subarray(mm, mm + Tm))
      }(mm >>> 0, Tm)
    }
    let Fm = null;
    let mT = null;

    function TT() {
      return null !== mT && 0 !== mT.byteLength || (mT = new Uint32Array(KT.memory.buffer)), mT
    }
    let fT = null;

    function hT() {
      return null !== fT && 0 !== fT.byteLength || (fT = new Uint8Array(KT.memory.buffer)), fT
    }

    function AT(mm) {
      return aT[mm]
    }
    let aT = new Array(1024).fill(void 0);
    aT.push(void 0, null, !0, !1);
    let xT = aT.length;

    function wT(mm) {
      return void 0 === mm || null === mm
    }

    function DT(mm, Tm) {
      const fm = Tm(2 * mm.length, 2) >>> 0;
      return (null !== Fm && 0 !== Fm.byteLength || (Fm = new Uint16Array(KT.memory.buffer)), Fm).set(mm, fm / 2), QT = mm.length, fm
    }

    function iT(mm, Tm) {
      const fm = Tm(4 * mm.length, 4) >>> 0;
      return TT().set(mm, fm / 4), QT = mm.length, fm
    }

    function RT(mm, Tm) {
      const fm = Tm(1 * mm.length, 1) >>> 0;
      return hT().set(mm, fm / 1), QT = mm.length, fm
    }

    function pT(mm, Tm) {
      const fm = Tm(8 * mm.length, 8) >>> 0;
      return dm().set(mm, fm / 8), QT = mm.length, fm
    }

    function ET(mm, Tm, fm) {
      if (void 0 === fm) {
        const fm = jT.encode(mm),
          hm = Tm(fm.length, 1) >>> 0;
        return hT().subarray(hm, hm + fm.length).set(fm), QT = fm.length, hm
      }
      let hm = mm.length,
        Am = Tm(hm, 1) >>> 0;
      const am = hT();
      let xm = 0;
      for (; xm < hm; xm++) {
        const Tm = mm.charCodeAt(xm);
        if (Tm > 127) break;
        am[Am + xm] = Tm
      }
      if (xm !== hm) {
        0 !== xm && (mm = mm.slice(xm)), Am = fm(Am, hm, hm = xm + 3 * mm.length, 1) >>> 0;
        const Tm = hT().subarray(Am + xm, Am + hm);
        xm += jT.encodeInto(mm, Tm).written, Am = fm(Am, hm, xm, 1) >>> 0
      }
      return QT = xm, Am
    }

    function oT(mm) {
      const Tm = AT(mm);
      return function(mm) {
        mm < 1028 || (aT[mm] = xT, xT = mm)
      }(mm), Tm
    }
    let OT = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    OT.decode();
    const YT = 2146435072;
    let qT = 0;
    const jT = new TextEncoder;
    "encodeInto" in jT || (jT.encodeInto = function(mm, Tm) {
      const fm = jT.encode(mm);
      return Tm.set(fm), {
        read: mm.length,
        written: fm.length
      }
    });
    let VT, IT, KT, QT = 0;

    function nT(mm, Tm) {
      return IT = mm, KT = mm.exports, VT = Tm, Um = null, gm = null, Fm = null, mT = null, fT = null, KT.l2Yj(), KT
    }

    function JT(mm) {
      if (void 0 !== KT) return KT;
      void 0 !== mm && (Object.getPrototypeOf(mm) === Object.prototype ? ({
        module: mm
      } = mm) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const Tm = Gm();
      mm instanceof WebAssembly.Module || (mm = new WebAssembly.Module(mm));
      return nT(new WebAssembly.Instance(mm, Tm), mm)
    }
    async function cT(mm) {
      if (void 0 !== KT) return KT;
      void 0 !== mm && (Object.getPrototypeOf(mm) === Object.prototype ? ({
        module_or_path: mm
      } = mm) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const Tm = Gm();
      ("string" === typeof mm || "function" === typeof Request && mm instanceof Request || "function" === typeof URL && mm instanceof URL) && (mm = fetch(mm));
      const {
        instance: fm,
        module: hm
      } = await async function(mm, Tm) {
        if ("function" === typeof Response && mm instanceof Response) {
          if (!mm.ok) throw new Error(`failed to fetch Wasm: ${mm.status} ${mm.statusText} fetching '${mm.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(mm, Tm)
          } catch (fm) {
            if (! function(mm) {
                switch (mm) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(mm.type) || "application/wasm" === mm.headers.get("Content-Type")) throw fm;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", fm)
          }
          const hm = await mm.arrayBuffer();
          return await WebAssembly.instantiate(hm, Tm)
        } {
          const fm = await WebAssembly.instantiate(mm, Tm);
          return fm instanceof WebAssembly.Instance ? {
            instance: fm,
            module: mm
          } : fm
        }
      }(await mm, Tm);
      return nT(fm, hm)
    }
  },
  36384: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => xm,
      f: () => wm,
      g: () => Dm
    });
    var hm = fm(36390),
      Am = fm(2873),
      am = fm(36395);
    const xm = {
      name: Am.b,
      url: () => new fm.U(fm(36401)),
      init: hm.default,
      bindings: hm
    };

    function wm() {
      let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xm,
        Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : xm,
        fm = arguments.length > 2 ? arguments[2] : void 0;
      return (0, am.i)(mm, Tm, fm)
    }

    function Dm(mm) {
      return (0, Am.N)((() => mm), hm, xm)
    }
  },
  36372: (mm, Tm, fm) => {
    function hm(mm, Tm) {
      return new Error(`${mm}: ${Tm instanceof Error?`${Tm.name}: ${Tm.message}`:String(Tm)}`, {
        cause: Tm
      })
    }
    fm.d(Tm, {
      c: () => hm
    })
  },
  36369: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => xm,
      e: () => Dm
    });
    var hm = fm(2876),
      Am = fm(6571),
      am = fm(36372);

    function xm() {
      return new URL(new fm.U(fm(36379)).href, globalThis.location?.href).href
    }
    let wm = null;

    function Dm() {
      return wm ??= (async () => (0, hm.G)(new URL(xm()), (0, Am.c)("bloxd_wasm_textures")))().catch((mm => {
        throw (0, am.c)((0, hm.M)(mm), mm)
      })), wm
    }
  },
  36348: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => hm,
      g: () => am,
      i: () => Dm,
      m: () => xm,
      q: () => Am
    });
    const hm = /^alloc_failed (\d+) bytes$/;

    function Am(mm, Tm) {
      return am(mm, Tm) ? `trap=alloc_failed ${Tm} bytes` : `trap=${mm}`
    }

    function am(mm, Tm) {
      return "unreachable" === mm && Tm > 0
    }

    function xm(mm, Tm, fm) {
      const hm = function(mm) {
        return mm instanceof WebAssembly.RuntimeError ? /unreachable/i.test(mm.message) ? "unreachable" : /out of bounds/i.test(mm.message) ? "out_of_bounds" : "runtime_error" : (mm instanceof RangeError || mm instanceof Error && "InternalError" === mm.name) && /call stack|recursion/i.test(mm.message) ? "stack_overflow" : "js_error"
      }(mm);
      if ("unreachable" !== hm) return {
        kind: hm,
        panic: null,
        refusedBytes: 0
      };
      const Am = Tm(),
        am = fm();
      return {
        kind: hm,
        panic: am > 0 ? null : Am,
        refusedBytes: am
      }
    }
    const wm = 300;

    function Dm(mm) {
      return mm.replace(/\s*\n\s*/g, " / ").slice(0, wm)
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);