export const id = 212;
export const ids = [212, 213];
export const modules = {
  36487: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      CAPPED_COUNTS_VISIT_CAP: () => Dt,
      reportCappedWasmFailure: () => jt,
      reportUncappedWasmFailure: () => dt,
      reportWasmCrash: () => qt,
      reportWasmFailure: () => mt
    });
    var Ot = Vt(3012);

    function qt(tt) {
      (0, Ot.reportClientError)("wasm_load", tt.message, tt.code)
    }
    const Dt = Ot.MAX_ERRORS_PER_VISIT - 4;

    function mt(tt, et, Vt) {
      (0, Ot.reportClientError)(tt, et, Vt, !1)
    }

    function dt(tt, et, Vt) {
      (0, Ot.reportClientError)(tt, et, Vt, !1, 1 / 0)
    }

    function jt(tt, et, Vt) {
      (0, Ot.reportClientError)(tt, et, Vt, !1, Dt)
    }
  },
  36479: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Ct,
      i: () => ht,
      l: () => vt,
      p: () => ut
    });
    var Ot = Vt(36510),
      qt = Vt(2961),
      Dt = Vt(36524),
      mt = Vt(2965),
      dt = Vt(36487),
      jt = Vt(3005),
      Ht = Vt(3295),
      Xt = Vt(3290),
      Qt = Vt(36489),
      lt = Vt(3012),
      Et = Vt(36498),
      ft = Vt(36507),
      wt = Vt(3772);
    let yt = !1;
    const Nt = 40;
    var Mt = Vt(3643);
    const bt = "bloxdWasmFailureReported";

    function Jt() {
      return "undefined" === typeof WebAssembly
    }

    function Ct() {
      return (0, Ot.c)()
    }

    function ut() {
      if (Jt()) return "this browser has no WebAssembly";
      const tt = (0, qt.s)();
      return "compile" === tt || "instantiate" === tt ? `the core wasm didn't load here (${(0,qt.k)()})` : null
    }
    async function Kt(tt) {
      return await (0, Dt.e)(Dt.d, void 0, tt)
    }

    function ht() {
      Jt() || (0, Mt.e)((() => {
        Kt()
      }))
    }

    function vt() {
      if (Jt()) return async () => ((0, jt.h)("unsupported", 0), Wt("unsupported", "This browser has no WebAssembly"), !1);
      const tt = {
        reloadFailedDownload: !0
      };
      return Kt(tt), async () => {
        var et;
        const Vt = performance.now();
        await Kt(tt);
        const Ot = (performance.now() - Vt) / 1e3;
        if ((0, qt.W)()) return (0, jt.h)("ready", Ot), yt || (yt = !0, (0, qt.$)((() => {
          if ("call" !== (0, qt.s)()) return;
          const tt = (0, qt.q)(),
            et = (0, Qt.h)(tt, qt.J, qt.hb),
            Vt = (0, qt.z)().buffer.byteLength,
            Ot = (0, Qt.d)(et.kind, et.refusedBytes),
            Dt = Ot ? "alloc_failed" : et.kind,
            mt = (0, Et.j)(Vt),
            dt = Ot ? `_r${Math.floor(Math.log2(et.refusedBytes))}` : "",
            jt = (0, wt.c)();
          null === jt && console.warn("A JS client wasm call turned wasm off without naming its site: call markWasmFailedAt, not markBloxdWasmFailed");
          const Ht = new Error((0, ft.d)(tt, Vt, et));
          if (tt instanceof Error && void 0 !== tt.stack) {
            const et = tt.stack.split("\n"),
              Vt = et.length > Nt ? [...et.slice(0, Nt / 2), ...et.slice(-Nt / 2)] : et;
            Ht.stack = Vt.join("\n")
          }(0, lt.reportClientError)("wasm_load", Ht, `wasm_call_${Dt}_${null!==jt&&void 0!==jt?jt:"unnamed"}_m${mt}${dt}`)
        }))), (0, mt.M)(Dt.d.url()) && (0, dt.reportCappedWasmFailure)("wasm_load", Ht.d.message, Ht.d.code), !0;
        const Mt = Xt.c[null !== (et = (0, qt.s)()) && void 0 !== et ? et : "call"];
        return (0, jt.h)(Mt, Ot), Wt(Mt, (0, qt.k)()), !1
      }
    }

    function Wt(tt, et) {
      (0, Xt.h)(bt, `Bloxd wasm ${tt}, so the game can't start: ${et}`, et, tt)
    }
  },
  36507: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => dt,
      e: () => Ht,
      i: () => mt,
      j: () => Qt
    });
    var Ot = Vt(36489),
      qt = Vt(17);
    const Dt = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function mt(tt) {
      if (tt instanceof WebAssembly.RuntimeError) return !0;
      const et = tt instanceof Error ? tt.stack : void 0;
      return "string" === typeof et && Dt.test(et)
    }

    function dt(tt, et, Vt) {
      var qt;
      const mt = tt instanceof Error ? tt.name : "thrown",
        dt = (tt instanceof Error && null !== (qt = tt.stack) && void 0 !== qt ? qt : "").split("\n").filter((tt => Dt.test(tt))).slice(0, 8).map((tt => tt.trim())),
        jt = null === et ? "wasm memory unknown" : `wasm memory ${Math.round(et/2**20)} MB`,
        Ht = null === Vt.panic ? "" : `, panic: ${(0,Ot.e)(Vt.panic)}`,
        Xt = `${mt}: ${tt instanceof Error?tt.message:String(tt)}`;
      return `${(0,Ot.j)(Vt.kind,Vt.refusedBytes)} ${Xt} (${jt})${Ht}${dt.length>0?` | ${dt.join(" < ")}`:""}`
    }
    const jt = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function Ht(tt) {
      var et;
      let Vt = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(tt instanceof Error) || !jt.test(tt.message)) return {};
      if (!("detached" in Vt)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, qt.$)(null === (et = (0, qt.Q)(Vt, "detached")) || void 0 === et ? void 0 : et.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const Xt = 500;

    function Qt(tt) {
      let et = "[object Object]";
      try {
        et = String(tt)
      } catch {}
      if ("[object Object]" !== et) return et;
      try {
        var Vt, Ot;
        return null !== (Vt = null === (Ot = JSON.stringify(tt)) || void 0 === Ot ? void 0 : Ot.slice(0, Xt)) && void 0 !== Vt ? Vt : et
      } catch {
        return et
      }
    }
  },
  36542: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/bloxd_wasm_bg.64474d163218655c8ebd.wasm"
  },
  36522: (tt, et, Vt) => {
    tt.exports = Vt.p + "static/media/bloxd_wasm_textures_bg.52666f4d79ce0a0e58bc.wasm"
  },
  36533: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      pX: () => Ot,
      EnvelopeKind: () => qt,
      xX: () => Dt,
      PhysicsEngine: () => mt,
      TX: () => dt,
      gX: () => jt,
      sX: () => Ht,
      tQ: () => Xt,
      eQ: () => Qt,
      VQ: () => lt,
      OQ: () => Et,
      qQ: () => ft,
      DQ: () => wt,
      mQ: () => yt,
      default: () => Ke,
      initSync: () => ue,
      dQ: () => Nt,
      jQ: () => Mt,
      HQ: () => bt,
      XQ: () => Jt,
      QQ: () => Ct,
      lQ: () => ut,
      EQ: () => Kt,
      fQ: () => ht,
      wQ: () => vt,
      yQ: () => Wt,
      NQ: () => St,
      aQ: () => ct,
      MQ: () => Rt,
      bQ: () => It,
      JQ: () => Pt
    });
    class Ot {
      __destroy_into_raw() {
        const tt = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Lt.unregister(this), tt
      }
      free() {
        const tt = this.__destroy_into_raw();
        be.x2Af(tt, 0)
      }
      CQ() {
        const tt = be.rLMm(this.__wbg_ptr);
        if (tt[2]) throw Ee(tt[1]);
        return tt[0] >>> 0
      }
      uQ() {
        return be.D8cT(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const tt = be.itQy();
        return this.__wbg_ptr = tt, Lt.register(this, this.__wbg_ptr, this), this
      }
      KQ() {
        return be.ICYr(this.__wbg_ptr) >>> 0
      }
      hQ(tt) {
        const et = be.jY71(this.__wbg_ptr, tt);
        if (et[2]) throw Ee(et[1]);
        return et[0] >>> 0
      }
      vQ(tt) {
        const et = be.p7wJ(this.__wbg_ptr, tt);
        if (et[2]) throw Ee(et[1]);
        return et[0] >>> 0
      }
    }
    Symbol.dispose && (Ot.prototype[Symbol.dispose] = Ot.prototype.free);
    const qt = Object.freeze({
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
    class Dt {
      __destroy_into_raw() {
        const tt = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Ft.unregister(this), tt
      }
      free() {
        const tt = this.__destroy_into_raw();
        be.AJoG(tt, 0)
      }
      cQ(tt, et) {
        const Vt = be.CAuP(this.__wbg_ptr, tt, et);
        if (Vt[2]) throw Ee(Vt[1]);
        return Vt[0] >>> 0
      }
      RQ(tt) {
        const et = be.waCJ(this.__wbg_ptr, tt);
        if (et[2]) throw Ee(et[1]);
        return et[0] >>> 0
      }
      IQ() {
        be.Jsqi(this.__wbg_ptr)
      }
      static PQ() {
        return be.tGHt() >>> 0
      }
      ZQ() {
        return be.yoaD(this.__wbg_ptr) >>> 0
      }
      LQ() {
        const tt = be.Sbrw(this.__wbg_ptr);
        return 0 === tt[0] ? void 0 : tt[1]
      }
      FQ() {
        return be.FYA2(this.__wbg_ptr) >>> 0
      }
      kQ() {
        return be.sqee(this.__wbg_ptr) >>> 0
      }
      static SQ() {
        return be.YGdI() >>> 0
      }
      constructor() {
        const tt = be.ymW8();
        return this.__wbg_ptr = tt, Ft.register(this, this.__wbg_ptr, this), this
      }
      GQ() {
        return be.cvUE(this.__wbg_ptr) >>> 0
      }
      zQ() {
        return be.pMKG(this.__wbg_ptr) >>> 0
      }
      oQ() {
        return be.UmqC(this.__wbg_ptr) >>> 0
      }
      WQ(tt) {
        return be.wvQ5(this.__wbg_ptr, tt) >>> 0
      }
      reserve(tt, et) {
        const Vt = be.qSYI(this.__wbg_ptr, tt, et);
        if (Vt[1]) throw Ee(Vt[0])
      }
      AQ(tt, et) {
        const Vt = He(tt, be.l2E5),
          Ot = Je;
        be.Q46E(this.__wbg_ptr, Vt, Ot, et)
      }
      text() {
        let tt, et;
        try {
          const Vt = be.Kfqe(this.__wbg_ptr);
          return tt = Vt[0], et = Vt[1], st(Vt[0], Vt[1])
        } finally {
          be.dTko(tt, et, 1)
        }
      }
    }
    Symbol.dispose && (Dt.prototype[Symbol.dispose] = Dt.prototype.free);
    class mt {
      __destroy_into_raw() {
        const tt = this.__wbg_ptr;
        return this.__wbg_ptr = 0, kt.unregister(this), tt
      }
      free() {
        const tt = this.__destroy_into_raw();
        be.pTae(tt, 0)
      }
      YQ(tt, et) {
        it(et, Ot);
        const Vt = be.oN2Q(this.__wbg_ptr, tt, et.__wbg_ptr);
        if (Vt[2]) throw Ee(Vt[1]);
        return Vt[0] >>> 0
      }
      pQ() {
        const tt = be.uS6N(this.__wbg_ptr);
        if (tt[1]) throw Ee(tt[0])
      }
      nQ(tt, et, Vt, Ot, qt, Dt, mt, jt, Ht, Xt, Qt) {
        it(tt, dt);
        const lt = be.WUsQ(this.__wbg_ptr, tt.__wbg_ptr, et, Vt, Ot, qt, Dt, mt, jt, Ht, Xt, Qt);
        if (lt[2]) throw Ee(lt[1]);
        return lt[0]
      }
      tl() {
        const tt = be.BSSk(this.__wbg_ptr);
        var et = Yt(tt[0], tt[1]).slice();
        return be.dTko(tt[0], 8 * tt[1], 8), et
      }
      el() {
        return be.nz47(this.__wbg_ptr) >>> 0
      }
      Vl() {
        return be.xiky(this.__wbg_ptr) >>> 0
      }
      Ol() {
        return be.UgdC(this.__wbg_ptr) >>> 0
      }
      constructor(tt, et, Vt, Ot, qt, Dt, mt, dt) {
        const jt = be.Qubx(tt, et, Vt, Ot, qt, Dt, mt, dt);
        if (jt[2]) throw Ee(jt[1]);
        return this.__wbg_ptr = jt[0], kt.register(this, this.__wbg_ptr, this), this
      }
      ml(tt) {
        it(tt, Ot);
        const et = be.eekZ(this.__wbg_ptr, tt.__wbg_ptr);
        if (et[2]) throw Ee(et[1]);
        return et[0] >>> 0
      }
      dl(tt) {
        const et = be.ZdKq(this.__wbg_ptr, tt);
        if (et[1]) throw Ee(et[0])
      }
      jl() {
        return be.oYqx(this.__wbg_ptr) >>> 0
      }
      resume(tt, et) {
        it(tt, dt), it(et, Ot);
        const Vt = be.ZLfW(this.__wbg_ptr, tt.__wbg_ptr, et.__wbg_ptr);
        if (Vt[2]) throw Ee(Vt[1]);
        return Vt[0] >>> 0
      }
      El(tt) {
        const et = be.pJ7A(this.__wbg_ptr, tt);
        if (et[1]) throw Ee(et[0])
      }
      yl(tt, et) {
        it(et, Ot);
        const Vt = be.n4Jo(this.__wbg_ptr, tt, et.__wbg_ptr);
        if (Vt[1]) throw Ee(Vt[0])
      }
      Ml(tt) {
        const et = Qe(tt, be.l2E5),
          Vt = Je,
          Ot = be.Fn1y(this.__wbg_ptr, et, Vt);
        if (Ot[1]) throw Ee(Ot[0])
      }
      TQ(tt, et, Vt, Ot, qt, Dt) {
        const mt = be.Axma(this.__wbg_ptr, tt, et, Vt, Ot, qt, Dt);
        if (mt[1]) throw Ee(mt[0])
      }
      gQ(tt, et, Vt, Ot) {
        const qt = He(tt, be.l2E5),
          Dt = Je,
          mt = Qe(et, be.l2E5),
          dt = Je,
          jt = Qe(Vt, be.l2E5),
          Ht = Je,
          Xt = Qe(Ot, be.l2E5),
          Qt = Je,
          lt = be.kpT4(this.__wbg_ptr, qt, Dt, mt, dt, jt, Ht, Xt, Qt);
        if (lt[1]) throw Ee(lt[0])
      }
      Jl(tt, et) {
        it(et, Ot);
        const Vt = be.ngoX(this.__wbg_ptr, tt, et.__wbg_ptr);
        if (Vt[1]) throw Ee(Vt[0])
      }
      Dl(tt, et, Vt) {
        const Ot = be.j1Ix(this.__wbg_ptr, tt, et, Vt);
        if (Ot[1]) throw Ee(Ot[0])
      }
      ul(tt, et, Vt, Ot, qt, Dt, mt, jt, Ht, Xt) {
        it(tt, dt);
        return be.Pa5B(this.__wbg_ptr, tt.__wbg_ptr, et, Vt, Ot, qt, Dt, mt, jt, Ht, Xt)
      }
    }
    Symbol.dispose && (mt.prototype[Symbol.dispose] = mt.prototype.free);
    class dt {
      static __wrap(tt) {
        const et = Object.create(dt.prototype);
        return et.__wbg_ptr = tt, Gt.register(et, et.__wbg_ptr, et), et
      }
      __destroy_into_raw() {
        const tt = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Gt.unregister(this), tt
      }
      free() {
        const tt = this.__destroy_into_raw();
        be.bExh(tt, 0)
      }
      vl(tt) {
        const et = be.kf55(this.__wbg_ptr, tt);
        if (et[2]) throw Ee(et[1]);
        return et[0] >>> 0
      }
      Wl(tt, et, Vt) {
        return be.udwU(this.__wbg_ptr, tt, et, Vt)
      }
      Sl(tt, et, Vt) {
        return be.Dnz0(this.__wbg_ptr, tt, et, Vt) >>> 0
      }
      cl(tt, et, Vt, Ot) {
        return 0 !== be.QegG(this.__wbg_ptr, tt, et, Vt, Ot)
      }
      Rl() {
        be.phlL(this.__wbg_ptr)
      }
      Pl(tt) {
        const et = be.BcBT(this.__wbg_ptr, tt);
        if (et[3]) throw Ee(et[2]);
        var Vt = pt(et[0], et[1]).slice();
        return be.dTko(et[0], 1 * et[1], 1), Vt
      }
      evict(tt, et) {
        return be.RSxS(this.__wbg_ptr, tt, et) >>> 0
      }
      Zl() {
        be.qih3(this.__wbg_ptr)
      }
      Ll(tt, et, Vt) {
        be.kzxB(this.__wbg_ptr, tt, et, Vt)
      }
      Fl(tt) {
        const et = be.k3TQ(this.__wbg_ptr, tt);
        if (et[1]) throw Ee(et[0])
      }
      kl() {
        return be.alIW(this.__wbg_ptr) >>> 0
      }
      Gl() {
        return be.flKk(this.__wbg_ptr) >>> 0
      }
      zl(tt, et, Vt) {
        be.q5fN(this.__wbg_ptr, tt, et, Vt)
      }
      ol(tt, et, Vt) {
        be.P040(this.__wbg_ptr, tt, et, Vt)
      }
      rl() {
        return be.JLQc(this.__wbg_ptr) >>> 0
      }
      Ul() {
        return be.mlsF(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const tt = be.Z0LA();
        return this.__wbg_ptr = tt, Gt.register(this, this.__wbg_ptr, this), this
      }
      static Al() {
        const tt = be.rslU();
        return dt.__wrap(tt)
      }
      il() {
        return be.FLPI(this.__wbg_ptr) >>> 0
      }
      Yl() {
        return be.bCMj(this.__wbg_ptr) >>> 0
      }
      Bl(tt, et, Vt, Ot) {
        const qt = be.mHIX(this.__wbg_ptr, tt, et, Vt, Ot);
        if (qt[1]) throw Ee(qt[0])
      }
      pl() {
        return be.KkCS(this.__wbg_ptr) >>> 0
      }
      xl() {
        return be.RaaD(this.__wbg_ptr) >>> 0
      }
      Tl(tt, et, Vt, Ot) {
        be.S6v3(this.__wbg_ptr, tt, et, Vt, Ot)
      }
      gl(tt) {
        be.gYlc(this.__wbg_ptr, tt)
      }
      nl(tt, et, Vt, Ot, qt) {
        const Dt = Xe(et, be.l2E5),
          mt = Je,
          dt = He(Vt, be.l2E5),
          jt = Je,
          Ht = Qe(Ot, be.l2E5),
          Xt = Je,
          Qt = be.Jx9x(this.__wbg_ptr, tt, Dt, mt, dt, jt, Ht, Xt, qt);
        if (Qt[1]) throw Ee(Qt[0])
      }
      sl(tt, et, Vt, Ot) {
        const qt = Xe(tt, be.l2E5),
          Dt = Je,
          mt = He(et, be.l2E5),
          dt = Je,
          jt = Qe(Vt, be.l2E5),
          Ht = Je,
          Xt = Xe(Ot, be.l2E5),
          Qt = Je,
          lt = be.MF2I(this.__wbg_ptr, qt, Dt, mt, dt, jt, Ht, Xt, Qt);
        if (lt[1]) throw Ee(lt[0])
      }
      DE(tt) {
        const et = Xe(tt, be.l2E5),
          Vt = Je,
          Ot = be.prPt(this.__wbg_ptr, et, Vt);
        if (Ot[1]) throw Ee(Ot[0])
      }
      mE() {
        return be.svmN(this.__wbg_ptr) >>> 0
      }
      dE(tt) {
        const et = be.ENTa(this.__wbg_ptr, tt);
        if (et[2]) throw Ee(et[1]);
        return et[0] >>> 0
      }
      steer() {
        return be.dzB9(this.__wbg_ptr) >>> 0
      }
      jE() {
        const tt = be.Zkdx(this.__wbg_ptr);
        var et = Yt(tt[0], tt[1]).slice();
        return be.dTko(tt[0], 8 * tt[1], 8), et
      }
      HE() {
        return be.L4gj(this.__wbg_ptr) >>> 0
      }
      Xl() {
        const tt = be.PJDG(this.__wbg_ptr);
        var et, Vt, Ot = (et = tt[0], Vt = tt[1], et >>>= 0, (null !== gt && 0 !== gt.byteLength || (gt = new Int32Array(be.memory.buffer)), gt).subarray(et / 4, et / 4 + Vt)).slice();
        return be.dTko(tt[0], 4 * tt[1], 4), Ot
      }
    }
    Symbol.dispose && (dt.prototype[Symbol.dispose] = dt.prototype.free);
    class jt {
      __destroy_into_raw() {
        const tt = this.__wbg_ptr;
        return this.__wbg_ptr = 0, zt.unregister(this), tt
      }
      free() {
        const tt = this.__destroy_into_raw();
        be.FH5G(tt, 0)
      }
      XE(tt) {
        const et = He(tt, be.l2E5),
          Vt = Je,
          Ot = be.eUw4(this.__wbg_ptr, et, Vt);
        if (Ot[1]) throw Ee(Ot[0])
      }
      QE() {
        return be.i5iD(this.__wbg_ptr) >>> 0
      }
      lE() {
        return be.mvXi(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const tt = be.EYlT();
        return this.__wbg_ptr = tt, zt.register(this, this.__wbg_ptr, this), this
      }
      run(tt, et) {
        it(tt, dt);
        const Vt = be.wGvu(this.__wbg_ptr, tt.__wbg_ptr, et);
        if (Vt[2]) throw Ee(Vt[1]);
        return Vt[0] >>> 0
      }
      EE(tt) {
        const et = He(tt, be.l2E5),
          Vt = Je;
        be.r8Zz(this.__wbg_ptr, et, Vt)
      }
      fE(tt) {
        const et = He(tt, be.l2E5),
          Vt = Je;
        be.I7Sa(this.__wbg_ptr, et, Vt)
      }
    }
    Symbol.dispose && (jt.prototype[Symbol.dispose] = jt.prototype.free);
    class Ht {
      __destroy_into_raw() {
        const tt = this.__wbg_ptr;
        return this.__wbg_ptr = 0, ot.unregister(this), tt
      }
      free() {
        const tt = this.__destroy_into_raw();
        be.rloY(tt, 0)
      }
      yE(tt, et) {
        const Vt = Xe(tt, be.l2E5),
          Ot = Je;
        return be.NGZz(this.__wbg_ptr, Vt, Ot, et) >>> 0
      }
      NE(tt, et, Vt) {
        it(tt, dt);
        const Ot = Xe(Vt, be.l2E5),
          qt = Je,
          Dt = be.G8AS(this.__wbg_ptr, tt.__wbg_ptr, et, Ot, qt);
        if (Dt[2]) throw Ee(Dt[1]);
        return Dt[0] >>> 0
      }
      wE(tt) {
        return be.XhEL(this.__wbg_ptr, tt) >>> 0
      }
      constructor() {
        const tt = be.fOkw();
        return this.__wbg_ptr = tt, ot.register(this, this.__wbg_ptr, this), this
      }
      scan(tt, et) {
        it(tt, dt);
        const Vt = be.U5Va(this.__wbg_ptr, tt.__wbg_ptr, et);
        if (Vt[2]) throw Ee(Vt[1]);
        return Vt[0] >>> 0
      }
      bE(tt) {
        const et = Xe(tt, be.l2E5),
          Vt = Je;
        be.D1Qk(this.__wbg_ptr, et, Vt)
      }
      ME() {
        return be.a4Ce(this.__wbg_ptr) >>> 0
      }
      aE() {
        return be.NrZb(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (Ht.prototype[Symbol.dispose] = Ht.prototype.free);
    class Xt {
      __destroy_into_raw() {
        const tt = this.__wbg_ptr;
        return this.__wbg_ptr = 0, rt.unregister(this), tt
      }
      free() {
        const tt = this.__destroy_into_raw();
        be.R34H(tt, 0)
      }
      CE(tt) {
        const et = be.keKH(this.__wbg_ptr, tt);
        if (et[2]) throw Ee(et[1]);
        return et[0] >>> 0
      }
      compute(tt, et, Vt, Ot) {
        var qt = de(Ot) ? 0 : le(Ot, be.l2E5, be.LBdo),
          Dt = Je;
        const mt = be.vkH4(this.__wbg_ptr, tt, de(et) ? Number.MAX_SAFE_INTEGER : et | 0, Vt, qt, Dt);
        if (mt[2]) throw Ee(mt[1]);
        return mt[0] >>> 0
      }
      KE(tt) {
        const et = le(tt, be.l2E5, be.LBdo),
          Vt = Je;
        be.PXNV(this.__wbg_ptr, et, Vt)
      }
      vE() {
        return be.zAtO(this.__wbg_ptr)
      }
      WE(tt) {
        return be.Fpcx(this.__wbg_ptr, tt) >>> 0
      }
      SE() {
        return be.CaWr(this.__wbg_ptr) >>> 0
      }
      cE() {
        return be.xdk7(this.__wbg_ptr) >>> 0
      }
      RE(tt, et) {
        const Vt = be.jhPv(this.__wbg_ptr, tt, et);
        if (Vt[1]) throw Ee(Vt[0])
      }
      IE() {
        return be.uvgD(this.__wbg_ptr) >>> 0
      }
      PE() {
        return be.jmSn(this.__wbg_ptr) >>> 0
      }
      ZE() {
        return be.Ga55(this.__wbg_ptr) >>> 0
      }
      uE(tt, et, Vt) {
        const Ot = He(tt, be.l2E5),
          qt = Je,
          Dt = He(et, be.l2E5),
          mt = Je,
          dt = be.tjQp(this.__wbg_ptr, Ot, qt, Dt, mt, Vt);
        if (dt[1]) throw Ee(dt[0])
      }
      FE() {
        return be.gPNC(this.__wbg_ptr) >>> 0
      }
      mesh(tt, et, Vt, Ot, qt) {
        const Dt = be.u6Vb(this.__wbg_ptr, tt, et, Vt, Ot, qt);
        if (Dt[2]) throw Ee(Dt[1]);
        return Dt[0] >>> 0
      }
      constructor(tt, et, Vt, Ot, qt, Dt, mt, dt, jt, Ht, Xt, Qt, lt, Et, ft, wt, yt, Nt, Mt, bt) {
        const Jt = je(tt, be.l2E5),
          Ct = Je,
          ut = Qe(et, be.l2E5),
          Kt = Je,
          ht = He(Vt, be.l2E5),
          vt = Je,
          Wt = Xe(Ot, be.l2E5),
          St = Je,
          ct = Xe(qt, be.l2E5),
          Rt = Je,
          It = He(Dt, be.l2E5),
          Pt = Je,
          Zt = He(mt, be.l2E5),
          Lt = Je,
          Ft = Qe(dt, be.l2E5),
          kt = Je,
          Gt = Qe(jt, be.l2E5),
          zt = Je,
          ot = Xe(Ht, be.l2E5),
          Ut = Je;
        var At = de(Xt) ? 0 : je(Xt, be.l2E5),
          it = Je;
        const Yt = He(Qt, be.l2E5),
          Bt = Je,
          pt = Xe(lt, be.l2E5),
          xt = Je;
        var Tt = de(Et) ? 0 : Xe(Et, be.l2E5),
          gt = Je;
        const st = Qe(ft, be.l2E5),
          nt = Je,
          te = be.EpxD(Jt, Ct, ut, Kt, ht, vt, Wt, St, ct, Rt, It, Pt, Zt, Lt, Ft, kt, Gt, zt, ot, Ut, At, it, Yt, Bt, pt, xt, Tt, gt, st, nt, wt, yt, Nt, Mt, bt);
        if (te[2]) throw Ee(te[1]);
        return this.__wbg_ptr = te[0], rt.register(this, this.__wbg_ptr, this), this
      }
      LE(tt, et) {
        const Vt = He(tt, be.l2E5),
          Ot = Je,
          qt = be.HtdN(this.__wbg_ptr, Vt, Ot, et);
        if (qt[3]) throw Ee(qt[2]);
        var Dt = pt(qt[0], qt[1]).slice();
        return be.dTko(qt[0], 1 * qt[1], 1), Dt
      }
      kE(tt) {
        be.fkNM(this.__wbg_ptr, de(tt) ? 16777215 : tt)
      }
      GE(tt) {
        return be.e7l6(this.__wbg_ptr, tt) >>> 0
      }
      oE() {
        return be.S8RC(this.__wbg_ptr) >>> 0
      }
      zE() {
        const tt = be.jSqk(this.__wbg_ptr);
        if (tt[2]) throw Ee(tt[1]);
        return 0 !== tt[0]
      }
      rE() {
        return be.vfaB(this.__wbg_ptr) >>> 0
      }
      UE() {
        return be.gt1F(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (Xt.prototype[Symbol.dispose] = Xt.prototype.free);
    class Qt {
      __destroy_into_raw() {
        const tt = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Ut.unregister(this), tt
      }
      free() {
        const tt = this.__destroy_into_raw();
        be.Bh5f(tt, 0)
      }
      compute(tt, et, Vt, Ot) {
        var qt = de(Ot) ? 0 : le(Ot, be.l2E5, be.LBdo),
          Dt = Je;
        const mt = be.mtt4(this.__wbg_ptr, tt, de(et) ? Number.MAX_SAFE_INTEGER : et | 0, Vt, qt, Dt);
        if (mt[2]) throw Ee(mt[1]);
        return mt[0] >>> 0
      }
      KE(tt) {
        const et = le(tt, be.l2E5, be.LBdo),
          Vt = Je;
        be.eych(this.__wbg_ptr, et, Vt)
      }
      PE() {
        return be.sHJw(this.__wbg_ptr) >>> 0
      }
      ZE() {
        return be.AX0m(this.__wbg_ptr) >>> 0
      }
      AE(tt) {
        const et = be.gWbY(this.__wbg_ptr, tt);
        if (et[2]) throw Ee(et[1]);
        return et[0] >>> 0
      }
      constructor(tt, et, Vt, Ot, qt, Dt) {
        const mt = je(tt, be.l2E5),
          dt = Je,
          jt = Qe(et, be.l2E5),
          Ht = Je,
          Xt = He(Vt, be.l2E5),
          Qt = Je,
          lt = Xe(Ot, be.l2E5),
          Et = Je,
          ft = be.jBeN(mt, dt, jt, Ht, Xt, Qt, lt, Et, qt, Dt);
        if (ft[2]) throw Ee(ft[1]);
        return this.__wbg_ptr = ft[0], Ut.register(this, this.__wbg_ptr, this), this
      }
      oE() {
        return be.q5uf(this.__wbg_ptr) >>> 0
      }
      zE() {
        const tt = be.LQWK(this.__wbg_ptr);
        if (tt[2]) throw Ee(tt[1]);
        return 0 !== tt[0]
      }
      rE() {
        return be.Bmty(this.__wbg_ptr) >>> 0
      }
    }

    function lt() {
      const tt = be.DGHA();
      var et = Bt(tt[0], tt[1]).slice();
      return be.dTko(tt[0], 4 * tt[1], 4), et
    }

    function Et(tt, et) {
      let Vt, Ot;
      try {
        const qt = je(tt, be.l2E5),
          Dt = Je,
          mt = le(et, be.l2E5, be.LBdo),
          dt = Je,
          jt = be.pvs8(qt, Dt, mt, dt);
        return Vt = jt[0], Ot = jt[1], st(jt[0], jt[1])
      } finally {
        be.dTko(Vt, Ot, 1)
      }
    }

    function ft() {
      const tt = be.yHux();
      var et = Bt(tt[0], tt[1]).slice();
      return be.dTko(tt[0], 4 * tt[1], 4), et
    }

    function wt(tt) {
      return 0 !== be.MqLd(tt)
    }

    function yt(tt, et) {
      const Vt = le(tt, be.l2E5, be.LBdo),
        Ot = Je,
        qt = be.uyLs(Vt, Ot, et);
      if (qt[1]) throw Ee(qt[0])
    }

    function Nt() {
      be.UfnI()
    }

    function Mt() {
      return be.gaW3() >>> 0
    }

    function bt(tt) {
      return 0 !== be.VRk1(tt)
    }

    function Jt(tt) {
      return 0 !== be.MMVb(tt)
    }

    function Ct(tt) {
      be.M7Sw(tt)
    }

    function ut() {
      return be.IDlU() >>> 0
    }

    function Kt() {
      return be.s03M() >>> 0
    }

    function ht() {
      return 0 !== be.bysj()
    }

    function vt() {
      const tt = be.bsRj();
      var et = Bt(tt[0], tt[1]).slice();
      return be.dTko(tt[0], 4 * tt[1], 4), et
    }

    function Wt() {
      const tt = be.YFkK();
      var et = Bt(tt[0], tt[1]).slice();
      return be.dTko(tt[0], 4 * tt[1], 4), et
    }

    function St() {
      const tt = be.WhYC();
      var et = Bt(tt[0], tt[1]).slice();
      return be.dTko(tt[0], 4 * tt[1], 4), et
    }

    function ct() {
      return be.mlvT() >>> 0
    }

    function Rt() {
      be.iWbT()
    }

    function It() {
      let tt, et;
      try {
        const Vt = be.s3uE();
        return tt = Vt[0], et = Vt[1], st(Vt[0], Vt[1])
      } finally {
        be.dTko(tt, et, 1)
      }
    }

    function Pt(tt) {
      be.ONRI(At(tt))
    }

    function Zt() {
      return {
        __proto__: null,
        baO7: {
          __proto__: null,
          QUmg: function(tt, et) {
            return At(Error(st(tt, et)))
          },
          jgk9: function(tt, et) {
            throw new Error(st(tt, et))
          },
          ClE0: function(tt) {
            qe(tt).call()
          },
          YwCw: function(tt, et) {
            console.error(st(tt, et))
          },
          w27p: function() {
            return performance.now()
          },
          xW2v: function(tt) {
            Ee(tt)
          }
        }
      }
    }
    Symbol.dispose && (Qt.prototype[Symbol.dispose] = Qt.prototype.free);
    const Lt = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((tt => be.x2Af(tt, 1))),
      Ft = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((tt => be.AJoG(tt, 1))),
      kt = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((tt => be.pTae(tt, 1))),
      Gt = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((tt => be.bExh(tt, 1))),
      zt = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((tt => be.FH5G(tt, 1))),
      ot = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((tt => be.rloY(tt, 1))),
      rt = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((tt => be.R34H(tt, 1))),
      Ut = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((tt => be.Bh5f(tt, 1)));

    function At(tt) {
      me === De.length && De.push(De.length + 1);
      const et = me;
      return me = De[et], De[et] = tt, et
    }

    function it(tt, et) {
      if (!(tt instanceof et)) throw new Error(`expected instance of ${et.name}`)
    }

    function Yt(tt, et) {
      return tt >>>= 0, Tt().subarray(tt / 8, tt / 8 + et)
    }

    function Bt(tt, et) {
      return tt >>>= 0, ee().subarray(tt / 4, tt / 4 + et)
    }

    function pt(tt, et) {
      return tt >>>= 0, Oe().subarray(tt / 1, tt / 1 + et)
    }
    let xt = null;

    function Tt() {
      return null !== xt && 0 !== xt.byteLength || (xt = new Float64Array(be.memory.buffer)), xt
    }
    let gt = null;

    function st(tt, et) {
      return function(tt, et) {
        ye += et, ye >= we && (fe = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), fe.decode(), ye = et);
        return fe.decode(Oe().subarray(tt, tt + et))
      }(tt >>> 0, et)
    }
    let nt = null;
    let te = null;

    function ee() {
      return null !== te && 0 !== te.byteLength || (te = new Uint32Array(be.memory.buffer)), te
    }
    let Ve = null;

    function Oe() {
      return null !== Ve && 0 !== Ve.byteLength || (Ve = new Uint8Array(be.memory.buffer)), Ve
    }

    function qe(tt) {
      return De[tt]
    }
    let De = new Array(1024).fill(void 0);
    De.push(void 0, null, !0, !1);
    let me = De.length;

    function de(tt) {
      return void 0 === tt || null === tt
    }

    function je(tt, et) {
      const Vt = et(2 * tt.length, 2) >>> 0;
      return (null !== nt && 0 !== nt.byteLength || (nt = new Uint16Array(be.memory.buffer)), nt).set(tt, Vt / 2), Je = tt.length, Vt
    }

    function He(tt, et) {
      const Vt = et(4 * tt.length, 4) >>> 0;
      return ee().set(tt, Vt / 4), Je = tt.length, Vt
    }

    function Xe(tt, et) {
      const Vt = et(1 * tt.length, 1) >>> 0;
      return Oe().set(tt, Vt / 1), Je = tt.length, Vt
    }

    function Qe(tt, et) {
      const Vt = et(8 * tt.length, 8) >>> 0;
      return Tt().set(tt, Vt / 8), Je = tt.length, Vt
    }

    function le(tt, et, Vt) {
      if (void 0 === Vt) {
        const Vt = Ne.encode(tt),
          Ot = et(Vt.length, 1) >>> 0;
        return Oe().subarray(Ot, Ot + Vt.length).set(Vt), Je = Vt.length, Ot
      }
      let Ot = tt.length,
        qt = et(Ot, 1) >>> 0;
      const Dt = Oe();
      let mt = 0;
      for (; mt < Ot; mt++) {
        const et = tt.charCodeAt(mt);
        if (et > 127) break;
        Dt[qt + mt] = et
      }
      if (mt !== Ot) {
        0 !== mt && (tt = tt.slice(mt)), qt = Vt(qt, Ot, Ot = mt + 3 * tt.length, 1) >>> 0;
        const et = Oe().subarray(qt + mt, qt + Ot);
        mt += Ne.encodeInto(tt, et).written, qt = Vt(qt, Ot, mt, 1) >>> 0
      }
      return Je = mt, qt
    }

    function Ee(tt) {
      const et = qe(tt);
      return function(tt) {
        tt < 1028 || (De[tt] = me, me = tt)
      }(tt), et
    }
    let fe = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    fe.decode();
    const we = 2146435072;
    let ye = 0;
    const Ne = new TextEncoder;
    "encodeInto" in Ne || (Ne.encodeInto = function(tt, et) {
      const Vt = Ne.encode(tt);
      return et.set(Vt), {
        read: tt.length,
        written: Vt.length
      }
    });
    let ae, Me, be, Je = 0;

    function Ce(tt, et) {
      return Me = tt, be = tt.exports, ae = et, xt = null, gt = null, nt = null, te = null, Ve = null, be.m8vZ(), be
    }

    function ue(tt) {
      if (void 0 !== be) return be;
      void 0 !== tt && (Object.getPrototypeOf(tt) === Object.prototype ? ({
        module: tt
      } = tt) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const et = Zt();
      tt instanceof WebAssembly.Module || (tt = new WebAssembly.Module(tt));
      return Ce(new WebAssembly.Instance(tt, et), tt)
    }
    async function Ke(tt) {
      if (void 0 !== be) return be;
      void 0 !== tt && (Object.getPrototypeOf(tt) === Object.prototype ? ({
        module_or_path: tt
      } = tt) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const et = Zt();
      ("string" === typeof tt || "function" === typeof Request && tt instanceof Request || "function" === typeof URL && tt instanceof URL) && (tt = fetch(tt));
      const {
        instance: Vt,
        module: Ot
      } = await async function(tt, et) {
        if ("function" === typeof Response && tt instanceof Response) {
          if (!tt.ok) throw new Error(`failed to fetch Wasm: ${tt.status} ${tt.statusText} fetching '${tt.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(tt, et)
          } catch (Vt) {
            if (! function(tt) {
                switch (tt) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(tt.type) || "application/wasm" === tt.headers.get("Content-Type")) throw Vt;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", Vt)
          }
          const Ot = await tt.arrayBuffer();
          return await WebAssembly.instantiate(Ot, et)
        } {
          const Vt = await WebAssembly.instantiate(tt, et);
          return Vt instanceof WebAssembly.Instance ? {
            instance: Vt,
            module: tt
          } : Vt
        }
      }(await tt, et);
      return Ce(Vt, Ot)
    }
  },
  36524: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => mt,
      e: () => dt,
      f: () => jt
    });
    var Ot = Vt(36533),
      qt = Vt(2961),
      Dt = Vt(36535);
    const mt = {
      name: qt.d,
      url: () => new Vt.U(Vt(36542)),
      init: Ot.default,
      bindings: Ot
    };

    function dt() {
      let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mt,
        et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mt,
        Vt = arguments.length > 2 ? arguments[2] : void 0;
      return (0, Dt.o)(tt, et, Vt)
    }

    function jt(tt) {
      return (0, qt.P)((() => tt), Ot, mt)
    }
  },
  36515: (tt, et, Vt) => {
    function Ot(tt, et) {
      return new Error(`${tt}: ${et instanceof Error?`${et.name}: ${et.message}`:String(et)}`, {
        cause: et
      })
    }
    Vt.d(et, {
      e: () => Ot
    })
  },
  36510: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => mt,
      c: () => jt
    });
    var Ot = Vt(2965),
      qt = Vt(6820),
      Dt = Vt(36515);

    function mt() {
      return new URL(new Vt.U(Vt(36522)).href, globalThis.location?.href).href
    }
    let dt = null;

    function jt() {
      return dt ??= (async () => (0, Ot.G)(new URL(mt()), (0, qt.c)("bloxd_wasm_textures")))().catch((tt => {
        throw (0, Dt.e)((0, Ot.J)(tt), tt)
      })), dt
    }
  },
  36489: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Ot,
      d: () => Dt,
      e: () => jt,
      h: () => mt,
      j: () => qt
    });
    const Ot = /^alloc_failed (\d+) bytes$/;

    function qt(tt, et) {
      return Dt(tt, et) ? `trap=alloc_failed ${et} bytes` : `trap=${tt}`
    }

    function Dt(tt, et) {
      return "unreachable" === tt && et > 0
    }

    function mt(tt, et, Vt) {
      const Ot = function(tt) {
        return tt instanceof WebAssembly.RuntimeError ? /unreachable/i.test(tt.message) ? "unreachable" : /out of bounds/i.test(tt.message) ? "out_of_bounds" : "runtime_error" : (tt instanceof RangeError || tt instanceof Error && "InternalError" === tt.name) && /call stack|recursion/i.test(tt.message) ? "stack_overflow" : "js_error"
      }(tt);
      if ("unreachable" !== Ot) return {
        kind: Ot,
        panic: null,
        refusedBytes: 0
      };
      const qt = et(),
        Dt = Vt();
      return {
        kind: Ot,
        panic: Dt > 0 ? null : qt,
        refusedBytes: Dt
      }
    }
    const dt = 300;

    function jt(tt) {
      return tt.replace(/\s*\n\s*/g, " / ").slice(0, dt)
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);