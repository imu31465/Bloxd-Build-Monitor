export const id = 213;
export const ids = [212, 213];
export const modules = {
  34708: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      CAPPED_COUNTS_VISIT_CAP: () => Me,
      reportCappedWasmFailure: () => Fe,
      reportUncappedWasmFailure: () => Ue,
      reportWasmCrash: () => be,
      reportWasmFailure: () => Ke
    });
    var ye = He(1814);

    function be(ee) {
      (0, ye.reportClientError)("wasm_load", ee.message, ee.code)
    }
    const Me = ye.MAX_ERRORS_PER_VISIT - 4;

    function Ke(ee, ie, He, be) {
      (0, ye.reportClientError)(ee, ie, He, !1, ye.MAX_ERRORS_PER_VISIT, {
        context: be
      })
    }

    function Ue(ee, ie, He, be) {
      (0, ye.reportClientError)(ee, ie, He, !1, 1 / 0, {
        context: be
      })
    }

    function Fe(ee, ie, He, be) {
      (0, ye.reportClientError)(ee, ie, He, !1, Me, {
        context: be
      })
    }
  },
  36942: (ee, ie, He) => {
    He.d(ie, {
      b: () => Oe,
      c: () => te,
      e: () => Ze,
      g: () => de
    });
    var ye = He(36973),
      be = He(3094),
      Me = He(36987),
      Ke = He(3101),
      Ue = He(34708),
      Fe = He(3159),
      Je = He(3550),
      oe = He(3543),
      Re = He(36950),
      ke = He(1814),
      qe = He(36956),
      fe = He(36965),
      Te = He(4097);
    let pe = !1;
    const Xe = 40;
    var ze = He(3565),
      Be = He(3977);
    const Ee = "bloxdWasmFailureReported";

    function ge() {
      return "undefined" === typeof WebAssembly
    }

    function Oe() {
      return (0, ye.g)()
    }

    function de() {
      if (ge()) return "this browser has no WebAssembly";
      const ee = (0, be.o)();
      return "compile" === ee || "instantiate" === ee ? `the core wasm didn't load here (${(0,be.j)()})` : null
    }
    async function We(ee) {
      return await (0, ze.g)(), await (0, Me.f)(Me.c, void 0, ee)
    }

    function te() {
      ge() || (0, Be.e)((() => {
        We()
      }))
    }

    function Ze() {
      if (ge()) return async () => ((0, Fe.i)("unsupported", 0), we("unsupported", "This browser has no WebAssembly"), !1);
      const ee = {
        reloadFailedDownload: !0
      };
      return We(ee), async () => {
        var ie;
        const He = performance.now();
        await We(ee);
        const ye = (performance.now() - He) / 1e3;
        if ((0, be.Y)()) return (0, Fe.i)("ready", ye), pe || (pe = !0, (0, be.$)((() => {
          if ("call" !== (0, be.o)()) return;
          const ee = (0, be.m)(),
            ie = (0, Re.k)(ee, be.J, be.lb),
            He = (0, be.t)().buffer.byteLength,
            ye = (0, Re.g)(ie.kind, ie.refusedBytes),
            Me = ye ? "alloc_failed" : ie.kind,
            Ke = (0, qe.k)(He),
            Ue = ye ? `_r${Math.floor(Math.log2(ie.refusedBytes))}` : "",
            Fe = (0, Te.d)();
          null === Fe && console.warn("A JS client wasm call turned wasm off without naming its site: call markWasmFailedAt, not markBloxdWasmFailed");
          const Je = new Error((0, fe.d)(ee, He, ie));
          if (ee instanceof Error && void 0 !== ee.stack) {
            const ie = ee.stack.split("\n"),
              He = ie.length > Xe ? [...ie.slice(0, Xe / 2), ...ie.slice(-Xe / 2)] : ie;
            Je.stack = He.join("\n")
          }(0, ke.reportClientError)("wasm_load", Je, `wasm_call_${Me}_${null!==Fe&&void 0!==Fe?Fe:"unnamed"}_m${Ke}${Ue}`)
        }))), (0, Ke.N)(Me.c.url()) && (0, Ue.reportCappedWasmFailure)("wasm_load", Je.c.message, Je.c.code), !0;
        const ze = oe.d[null !== (ie = (0, be.o)()) && void 0 !== ie ? ie : "call"];
        return (0, Fe.i)(ze, ye), we(ze, (0, be.j)()), !1
      }
    }

    function we(ee, ie) {
      (0, oe.h)(Ee, `Bloxd wasm ${ee}, so the game can't start: ${ie}`, ie, ee)
    }
  },
  36965: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ue,
      g: () => Je,
      k: () => Ke,
      n: () => Re
    });
    var ye = He(36950),
      be = He(8);
    const Me = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function Ke(ee) {
      if (ee instanceof WebAssembly.RuntimeError) return !0;
      const ie = ee instanceof Error ? ee.stack : void 0;
      return "string" === typeof ie && Me.test(ie)
    }

    function Ue(ee, ie, He) {
      var be;
      const Ke = ee instanceof Error ? ee.name : "thrown",
        Ue = (ee instanceof Error && null !== (be = ee.stack) && void 0 !== be ? be : "").split("\n").filter((ee => Me.test(ee))).slice(0, 8).map((ee => ee.trim())),
        Fe = null === ie ? "wasm memory unknown" : `wasm memory ${Math.round(ie/2**20)} MB`,
        Je = null === He.panic ? "" : `, panic: ${(0,ye.i)(He.panic)}`,
        oe = `${Ke}: ${ee instanceof Error?ee.message:String(ee)}`;
      return `${(0,ye.m)(He.kind,He.refusedBytes)} ${oe} (${Fe})${Je}${Ue.length>0?` | ${Ue.join(" < ")}`:""}`
    }
    const Fe = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function Je(ee) {
      var ie;
      let He = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(ee instanceof Error) || !Fe.test(ee.message)) return {};
      if (!("detached" in He)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, be.S)(null === (ie = (0, be.J)(He, "detached")) || void 0 === ie ? void 0 : ie.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const oe = 500;

    function Re(ee) {
      let ie = "[object Object]";
      try {
        ie = String(ee)
      } catch {}
      if ("[object Object]" !== ie) return ie;
      try {
        var He, ye;
        return null !== (He = null === (ye = JSON.stringify(ee)) || void 0 === ye ? void 0 : ye.slice(0, oe)) && void 0 !== He ? He : ie
      } catch {
        return ie
      }
    }
  },
  37008: (ee, ie, He) => {
    ee.exports = He.p + "static/media/bloxd_wasm_bg.79dbad279890d8558b9f.wasm"
  },
  36983: (ee, ie, He) => {
    ee.exports = He.p + "static/media/bloxd_wasm_textures_bg.668c19de2c2f3722e444.wasm"
  },
  36996: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      ve: () => ye,
      EnvelopeKind: () => be,
      le: () => Me,
      PhysicsEngine: () => Ke,
      MH: () => Ue,
      LH: () => Fe,
      sy: () => Je,
      OF: () => oe,
      Do: () => Re,
      Lo: () => ke,
      TR: () => qe,
      LR: () => fe,
      CR: () => Te,
      vR: () => pe,
      default: () => Wi,
      initSync: () => di,
      uR: () => Xe,
      mR: () => ze,
      lR: () => Be,
      SR: () => Ee,
      nR: () => ge,
      jR: () => Oe,
      sR: () => de,
      IR: () => We,
      hR: () => te,
      NR: () => Ze,
      GR: () => we,
      rR: () => De,
      QR: () => Pe,
      ik: () => Ae,
      Hk: () => Ye
    });
    class ye {
      __destroy_into_raw() {
        const ee = this.__wbg_ptr;
        return this.__wbg_ptr = 0, ae.unregister(this), ee
      }
      free() {
        const ee = this.__destroy_into_raw();
        Ei.e0bn(ee, 0)
      }
      yk() {
        const ee = Ei.CE5c(this.__wbg_ptr);
        if (ee[2]) throw ki(ee[1]);
        return ee[0] >>> 0
      }
      bk() {
        return Ei.zw44(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const ee = Ei.Q3xp();
        return this.__wbg_ptr = ee, ae.register(this, this.__wbg_ptr, this), this
      }
      Mk() {
        return Ei.asmD(this.__wbg_ptr) >>> 0
      }
      Kk(ee) {
        const ie = Ei.Rt2k(this.__wbg_ptr, ee);
        if (ie[2]) throw ki(ie[1]);
        return ie[0] >>> 0
      }
      Uk(ee) {
        const ie = Ei.I9yn(this.__wbg_ptr, ee);
        if (ie[2]) throw ki(ie[1]);
        return ie[0] >>> 0
      }
    }
    Symbol.dispose && (ye.prototype[Symbol.dispose] = ye.prototype.free);
    const be = Object.freeze({
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
    class Me {
      __destroy_into_raw() {
        const ee = this.__wbg_ptr;
        return this.__wbg_ptr = 0, ce.unregister(this), ee
      }
      free() {
        const ee = this.__destroy_into_raw();
        Ei.YuGD(ee, 0)
      }
      Rk(ee, ie) {
        const He = Ei.fQ6s(this.__wbg_ptr, ee, ie);
        if (He[2]) throw ki(He[1]);
        return He[0] >>> 0
      }
      kk(ee) {
        const ie = Ei.BOjU(this.__wbg_ptr, ee);
        if (ie[2]) throw ki(ie[1]);
        return ie[0] >>> 0
      }
      qk() {
        Ei.EEnH(this.__wbg_ptr)
      }
      static fk() {
        return Ei.ULfU() >>> 0
      }
      Tk() {
        return Ei.vzIP(this.__wbg_ptr) >>> 0
      }
      Xk() {
        const ee = Ei.nQhO(this.__wbg_ptr);
        return 0 === ee[0] ? void 0 : ee[1]
      }
      zk() {
        return Ei.QN21(this.__wbg_ptr) >>> 0
      }
      Bk() {
        return Ei.KKwP(this.__wbg_ptr) >>> 0
      }
      static Jk() {
        return Ei.tphK() >>> 0
      }
      constructor() {
        const ee = Ei.oeGc();
        return this.__wbg_ptr = ee, ce.register(this, this.__wbg_ptr, this), this
      }
      Ek() {
        return Ei.l70o(this.__wbg_ptr) >>> 0
      }
      gk() {
        return Ei.YUsX(this.__wbg_ptr) >>> 0
      }
      Ok() {
        return Ei.kqPu(this.__wbg_ptr) >>> 0
      }
      Fk(ee) {
        return Ei.tVdZ(this.__wbg_ptr, ee) >>> 0
      }
      reserve(ee, ie) {
        const He = Ei.vnOe(this.__wbg_ptr, ee, ie);
        if (He[1]) throw ki(He[0])
      }
      Zk(ee, ie) {
        const He = Fi(ee, Ei.cnOV),
          ye = gi;
        Ei.Ab6b(this.__wbg_ptr, He, ye, ie)
      }
      text() {
        let ee, ie;
        try {
          const He = Ei.IO99(this.__wbg_ptr);
          return ee = He[0], ie = He[1], Ge(He[0], He[1])
        } finally {
          Ei.o0dT(ee, ie, 1)
        }
      }
    }
    Symbol.dispose && (Me.prototype[Symbol.dispose] = Me.prototype.free);
    class Ke {
      __destroy_into_raw() {
        const ee = this.__wbg_ptr;
        return this.__wbg_ptr = 0, xe.unregister(this), ee
      }
      free() {
        const ee = this.__destroy_into_raw();
        Ei.IjwJ(ee, 0)
      }
      Dk(ee, ie) {
        Se(ie, ye);
        const He = Ei.c7O9(this.__wbg_ptr, ee, ie.__wbg_ptr);
        if (He[2]) throw ki(He[1]);
        return He[0] >>> 0
      }
      Pk() {
        const ee = Ei.wJyW(this.__wbg_ptr);
        if (ee[1]) throw ki(ee[0])
      }
      ak(ee, ie, He, ye, be, Me, Ke, Fe, Je, oe, Re) {
        Se(ee, Ue);
        const ke = Ei.Rt9o(this.__wbg_ptr, ee.__wbg_ptr, ie, He, ye, be, Me, Ke, Fe, Je, oe, Re);
        if (ke[2]) throw ki(ke[1]);
        return ke[0]
      }
      xk() {
        const ee = Ei.rHmP(this.__wbg_ptr);
        var ie = ne(ee[0], ee[1]).slice();
        return Ei.o0dT(ee[0], 8 * ee[1], 8), ie
      }
      Lk() {
        return Ei.YcNe(this.__wbg_ptr) >>> 0
      }
      Ck() {
        return Ei.MRqj(this.__wbg_ptr) >>> 0
      }
      vk() {
        return Ei.CxxW(this.__wbg_ptr) >>> 0
      }
      constructor(ee, ie, He, ye, be, Me, Ke, Ue) {
        const Fe = Ei.Y8w7(ee, ie, He, ye, be, Me, Ke, Ue);
        if (Fe[2]) throw ki(Fe[1]);
        return this.__wbg_ptr = Fe[0], xe.register(this, this.__wbg_ptr, this), this
      }
      lk(ee) {
        Se(ee, ye);
        const ie = Ei.msLu(this.__wbg_ptr, ee.__wbg_ptr);
        if (ie[2]) throw ki(ie[1]);
        return ie[0] >>> 0
      }
      Sk(ee) {
        const ie = Ei.gzT2(this.__wbg_ptr, ee);
        if (ie[1]) throw ki(ie[0])
      }
      nk() {
        return Ei.VIxo(this.__wbg_ptr) >>> 0
      }
      resume(ee, ie) {
        Se(ee, Ue), Se(ie, ye);
        const He = Ei.AunY(this.__wbg_ptr, ee.__wbg_ptr, ie.__wbg_ptr);
        if (He[2]) throw ki(He[1]);
        return He[0] >>> 0
      }
      Nk(ee) {
        const ie = Ei.bGjf(this.__wbg_ptr, ee);
        if (ie[1]) throw ki(ie[0])
      }
      Qk(ee, ie) {
        Se(ie, ye);
        const He = Ei.rO6G(this.__wbg_ptr, ee, ie.__wbg_ptr);
        if (He[1]) throw ki(He[0])
      }
      Hq(ee) {
        const ie = oi(ee, Ei.cnOV),
          He = gi,
          ye = Ei.MFka(this.__wbg_ptr, ie, He);
        if (ye[1]) throw ki(ye[0])
      }
      Yk(ee, ie, He, ye, be, Me) {
        const Ke = Ei.zUr5(this.__wbg_ptr, ee, ie, He, ye, be, Me);
        if (Ke[1]) throw ki(Ke[0])
      }
      Vk(ee, ie, He, ye) {
        const be = Fi(ee, Ei.cnOV),
          Me = gi,
          Ke = oi(ie, Ei.cnOV),
          Ue = gi,
          Fe = oi(He, Ei.cnOV),
          Je = gi,
          oe = oi(ye, Ei.cnOV),
          Re = gi,
          ke = Ei.al4d(this.__wbg_ptr, be, Me, Ke, Ue, Fe, Je, oe, Re);
        if (ke[1]) throw ki(ke[0])
      }
      bq(ee, ie) {
        Se(ie, ye);
        const He = Ei.oOAe(this.__wbg_ptr, ee, ie.__wbg_ptr);
        if (He[1]) throw ki(He[0])
      }
      mk(ee, ie, He) {
        const ye = Ei.RySv(this.__wbg_ptr, ee, ie, He);
        if (ye[1]) throw ki(ye[0])
      }
      Kq(ee, ie, He, ye, be, Me, Ke, Fe, Je, oe) {
        Se(ee, Ue);
        return Ei.q5mt(this.__wbg_ptr, ee.__wbg_ptr, ie, He, ye, be, Me, Ke, Fe, Je, oe)
      }
    }
    Symbol.dispose && (Ke.prototype[Symbol.dispose] = Ke.prototype.free);
    class Ue {
      static __wrap(ee) {
        const ie = Object.create(Ue.prototype);
        return ie.__wbg_ptr = ee, Le.register(ie, ie.__wbg_ptr, ie), ie
      }
      __destroy_into_raw() {
        const ee = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Le.unregister(this), ee
      }
      free() {
        const ee = this.__destroy_into_raw();
        Ei.PyI4(ee, 0)
      }
      Fq(ee) {
        const ie = Ei.tB95(this.__wbg_ptr, ee);
        if (ie[2]) throw ki(ie[1]);
        return ie[0] >>> 0
      }
      Jq(ee, ie, He) {
        return Ei.QkZT(this.__wbg_ptr, ee, ie, He)
      }
      oq(ee, ie, He) {
        return Ei.IUlR(this.__wbg_ptr, ee, ie, He) >>> 0
      }
      Rq(ee, ie, He, ye) {
        return 0 !== Ei.YXaR(this.__wbg_ptr, ee, ie, He, ye)
      }
      kq() {
        Ei.Zjay(this.__wbg_ptr)
      }
      qq(ee) {
        const ie = Ei.CDcu(this.__wbg_ptr, ee);
        if (ie[3]) throw ki(ie[2]);
        var He = se(ie[0], ie[1]).slice();
        return Ei.o0dT(ie[0], 1 * ie[1], 1), He
      }
      evict(ee, ie) {
        return Ei.MVPb(this.__wbg_ptr, ee, ie) >>> 0
      }
      fq() {
        Ei.U88Z(this.__wbg_ptr)
      }
      Tq(ee, ie, He) {
        Ei.EAUt(this.__wbg_ptr, ee, ie, He)
      }
      pq(ee) {
        const ie = Ei.YGDh(this.__wbg_ptr, ee);
        if (ie[1]) throw ki(ie[0])
      }
      Xq() {
        return Ei.Ucm7(this.__wbg_ptr) >>> 0
      }
      zq() {
        return Ei.riqw(this.__wbg_ptr) >>> 0
      }
      Bq(ee, ie, He) {
        Ei.Ocv4(this.__wbg_ptr, ee, ie, He)
      }
      Eq(ee, ie, He) {
        Ei.mLly(this.__wbg_ptr, ee, ie, He)
      }
      Oq() {
        return Ei.LOSx(this.__wbg_ptr) >>> 0
      }
      dq() {
        return Ei.CXpd(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const ee = Ei.duYT();
        return this.__wbg_ptr = ee, Le.register(this, this.__wbg_ptr, this), this
      }
      static Wq() {
        const ee = Ei.ToWo();
        return Ue.__wrap(ee)
      }
      tq() {
        return Ei.yzDv(this.__wbg_ptr) >>> 0
      }
      Zq() {
        return Ei.atAH(this.__wbg_ptr) >>> 0
      }
      wq(ee, ie, He, ye) {
        const be = Ei.XBfZ(this.__wbg_ptr, ee, ie, He, ye);
        if (be[1]) throw ki(be[0])
      }
      Dq() {
        return Ei.togA(this.__wbg_ptr) >>> 0
      }
      Pq() {
        return Ei.eb51(this.__wbg_ptr) >>> 0
      }
      Aq(ee, ie, He, ye) {
        Ei.A7Yf(this.__wbg_ptr, ee, ie, He, ye)
      }
      Yq(ee) {
        Ei.VlMu(this.__wbg_ptr, ee)
      }
      aq(ee, ie, He, ye, be) {
        const Me = Ji(ie, Ei.cnOV),
          Ke = gi,
          Ue = Fi(He, Ei.cnOV),
          Fe = gi,
          Je = oi(ye, Ei.cnOV),
          oe = gi,
          Re = Ei.r67S(this.__wbg_ptr, ee, Me, Ke, Ue, Fe, Je, oe, be);
        if (Re[1]) throw ki(Re[0])
      }
      Vq(ee, ie, He, ye) {
        const be = Ji(ee, Ei.cnOV),
          Me = gi,
          Ke = Fi(ie, Ei.cnOV),
          Ue = gi,
          Fe = oi(He, Ei.cnOV),
          Je = gi,
          oe = Ji(ye, Ei.cnOV),
          Re = gi,
          ke = Ei.WQ3r(this.__wbg_ptr, be, Me, Ke, Ue, Fe, Je, oe, Re);
        if (ke[1]) throw ki(ke[0])
      }
      vq(ee) {
        const ie = Ji(ee, Ei.cnOV),
          He = gi,
          ye = Ei.NPFv(this.__wbg_ptr, ie, He);
        if (ye[1]) throw ki(ye[0])
      }
      uq() {
        return Ei.Q5is(this.__wbg_ptr) >>> 0
      }
      mq(ee) {
        const ie = Ei.fqf0(this.__wbg_ptr, ee);
        if (ie[2]) throw ki(ie[1]);
        return ie[0] >>> 0
      }
      steer() {
        return Ei.ZaQd(this.__wbg_ptr) >>> 0
      }
      lq() {
        const ee = Ei.fuQg(this.__wbg_ptr);
        var ie = ne(ee[0], ee[1]).slice();
        return Ei.o0dT(ee[0], 8 * ee[1], 8), ie
      }
      Sq() {
        return Ei.f8E2(this.__wbg_ptr) >>> 0
      }
      sk() {
        const ee = Ei.WFwq(this.__wbg_ptr);
        var ie, He, ye = (ie = ee[0], He = ee[1], ie >>>= 0, (null !== Ne && 0 !== Ne.byteLength || (Ne = new Int32Array(Ei.memory.buffer)), Ne).subarray(ie / 4, ie / 4 + He)).slice();
        return Ei.o0dT(ee[0], 4 * ee[1], 4), ye
      }
    }
    Symbol.dispose && (Ue.prototype[Symbol.dispose] = Ue.prototype.free);
    class Fe {
      __destroy_into_raw() {
        const ee = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Ce.unregister(this), ee
      }
      free() {
        const ee = this.__destroy_into_raw();
        Ei.nzEd(ee, 0)
      }
      gR(ee) {
        const ie = Fi(ee, Ei.cnOV),
          He = gi,
          ye = Ei.oiAS(this.__wbg_ptr, ie, He);
        if (ye[1]) throw ki(ye[0])
      }
      nq() {
        return Ei.duku(this.__wbg_ptr) >>> 0
      }
      jq() {
        return Ei.i0dB(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const ee = Ei.kAhV();
        return this.__wbg_ptr = ee, Ce.register(this, this.__wbg_ptr, this), this
      }
      run(ee, ie) {
        Se(ee, Ue);
        const He = Ei.aYWP(this.__wbg_ptr, ee.__wbg_ptr, ie);
        if (He[2]) throw ki(He[1]);
        return He[0] >>> 0
      }
      Iq(ee) {
        const ie = Fi(ee, Ei.cnOV),
          He = gi;
        Ei.NvRw(this.__wbg_ptr, ie, He)
      }
      hq(ee) {
        const ie = Fi(ee, Ei.cnOV),
          He = gi;
        Ei.D9LI(this.__wbg_ptr, ie, He)
      }
    }
    Symbol.dispose && (Fe.prototype[Symbol.dispose] = Fe.prototype.free);
    class Je {
      __destroy_into_raw() {
        const ee = this.__wbg_ptr;
        return this.__wbg_ptr = 0, ve.unregister(this), ee
      }
      free() {
        const ee = this.__destroy_into_raw();
        Ei.nTXk(ee, 0)
      }
      Gq(ee, ie) {
        const He = Ji(ee, Ei.cnOV),
          ye = gi;
        return Ei.k6SR(this.__wbg_ptr, He, ye, ie) >>> 0
      }
      rq(ee, ie, He) {
        Se(ee, Ue);
        const ye = Ji(He, Ei.cnOV),
          be = gi,
          Me = Ei.nKGC(this.__wbg_ptr, ee.__wbg_ptr, ie, ye, be);
        if (Me[2]) throw ki(Me[1]);
        return Me[0] >>> 0
      }
      Nq(ee) {
        return Ei.pARO(this.__wbg_ptr, ee) >>> 0
      }
      constructor() {
        const ee = Ei.IEMw();
        return this.__wbg_ptr = ee, ve.register(this, this.__wbg_ptr, this), this
      }
      scan(ee, ie) {
        Se(ee, Ue);
        const He = Ei.rbts(this.__wbg_ptr, ee.__wbg_ptr, ie);
        if (He[2]) throw ki(He[1]);
        return He[0] >>> 0
      }
      Hf(ee) {
        const ie = Ji(ee, Ei.cnOV),
          He = gi;
        Ei.B8Wi(this.__wbg_ptr, ie, He)
      }
      ef() {
        return Ei.aFFU(this.__wbg_ptr) >>> 0
      }
      Qq() {
        return Ei.RKVJ(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (Je.prototype[Symbol.dispose] = Je.prototype.free);
    class oe {
      __destroy_into_raw() {
        const ee = this.__wbg_ptr;
        return this.__wbg_ptr = 0, ue.unregister(this), ee
      }
      free() {
        const ee = this.__destroy_into_raw();
        Ei.ev1b(ee, 0)
      }
      bf(ee) {
        const ie = Ei.u8O6(this.__wbg_ptr, ee);
        if (ie[2]) throw ki(ie[1]);
        return ie[0] >>> 0
      }
      compute(ee, ie, He, ye) {
        var be = Ki(ye) ? 0 : Ri(ye, Ei.cnOV, Ei.JWc6),
          Me = gi;
        const Ke = Ei.tPss(this.__wbg_ptr, ee, Ki(ie) ? Number.MAX_SAFE_INTEGER : ie | 0, He, be, Me);
        if (Ke[2]) throw ki(Ke[1]);
        return Ke[0] >>> 0
      }
      Kf(ee) {
        const ie = Ri(ee, Ei.cnOV, Ei.JWc6),
          He = gi;
        Ei.SzY6(this.__wbg_ptr, ie, He)
      }
      Uf() {
        return Ei.nVoU(this.__wbg_ptr)
      }
      Ff(ee) {
        return Ei.X9fn(this.__wbg_ptr, ee) >>> 0
      }
      Jf() {
        return Ei.FCIp(this.__wbg_ptr) >>> 0
      }
      Rf() {
        return Ei.Yv4c(this.__wbg_ptr) >>> 0
      }
      kf(ee, ie) {
        const He = Ei.LiQj(this.__wbg_ptr, ee, ie);
        if (He[1]) throw ki(He[0])
      }
      qf() {
        return Ei.M1Z9(this.__wbg_ptr) >>> 0
      }
      ff() {
        return Ei.X8Is(this.__wbg_ptr) >>> 0
      }
      Tf() {
        return Ei.uLqN(this.__wbg_ptr) >>> 0
      }
      Mf(ee, ie, He) {
        const ye = Fi(ee, Ei.cnOV),
          be = gi,
          Me = Fi(ie, Ei.cnOV),
          Ke = gi,
          Ue = Ei.P7PQ(this.__wbg_ptr, ye, be, Me, Ke, He);
        if (Ue[1]) throw ki(Ue[0])
      }
      Xf() {
        return Ei.zrFA(this.__wbg_ptr) >>> 0
      }
      mesh(ee, ie, He, ye, be) {
        const Me = Ei.ULJ5(this.__wbg_ptr, ee, ie, He, ye, be);
        if (Me[2]) throw ki(Me[1]);
        return Me[0] >>> 0
      }
      constructor(ee, ie, He, ye, be, Me, Ke, Ue, Fe, Je, oe, Re, ke, qe, fe, Te, pe, Xe, ze, Be, Ee) {
        const ge = Ui(ee, Ei.cnOV),
          Oe = gi,
          de = oi(ie, Ei.cnOV),
          We = gi,
          te = Fi(He, Ei.cnOV),
          Ze = gi,
          we = Ji(ye, Ei.cnOV),
          De = gi,
          Pe = Ji(be, Ei.cnOV),
          Ae = gi,
          Ye = Fi(Me, Ei.cnOV),
          Ve = gi,
          ae = Fi(Ke, Ei.cnOV),
          ce = gi,
          xe = oi(Ue, Ei.cnOV),
          Le = gi,
          Ce = oi(Fe, Ei.cnOV),
          ve = gi,
          me = Ji(Je, Ei.cnOV),
          le = gi;
        var Se = Ki(oe) ? 0 : Ui(oe, Ei.cnOV),
          ne = gi;
        const je = Fi(Re, Ei.cnOV),
          se = gi,
          Ie = Ji(ke, Ei.cnOV),
          he = gi;
        var Ne = Ki(qe) ? 0 : Ji(qe, Ei.cnOV),
          Ge = gi,
          re = Ki(fe) ? 0 : Ji(fe, Ei.cnOV),
          Qe = gi;
        const ei = oi(Te, Ei.cnOV),
          ii = gi,
          Hi = Ei.bp1Q(ge, Oe, de, We, te, Ze, we, De, Pe, Ae, Ye, Ve, ae, ce, xe, Le, Ce, ve, me, le, Se, ne, je, se, Ie, he, Ne, Ge, re, Qe, ei, ii, pe, Xe, ze, Be, Ee);
        if (Hi[2]) throw ki(Hi[1]);
        return this.__wbg_ptr = Hi[0], ue.register(this, this.__wbg_ptr, this), this
      }
      pf(ee, ie) {
        const He = Fi(ee, Ei.cnOV),
          ye = gi,
          be = Ei.Se7x(this.__wbg_ptr, He, ye, ie);
        if (be[3]) throw ki(be[2]);
        var Me = se(be[0], be[1]).slice();
        return Ei.o0dT(be[0], 1 * be[1], 1), Me
      }
      zf(ee) {
        Ei.cmpq(this.__wbg_ptr, Ki(ee) ? 16777215 : ee)
      }
      Bf(ee) {
        return Ei.IOzR(this.__wbg_ptr, ee) >>> 0
      }
      gf() {
        return Ei.mZ5L(this.__wbg_ptr) >>> 0
      }
      Ef() {
        const ee = Ei.mZBO(this.__wbg_ptr);
        if (ee[2]) throw ki(ee[1]);
        return 0 !== ee[0]
      }
      df() {
        return Ei.Yl9p(this.__wbg_ptr) >>> 0
      }
      Wf() {
        return Ei.Dv9E(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (oe.prototype[Symbol.dispose] = oe.prototype.free);
    class Re {
      __destroy_into_raw() {
        const ee = this.__wbg_ptr;
        return this.__wbg_ptr = 0, me.unregister(this), ee
      }
      free() {
        const ee = this.__destroy_into_raw();
        Ei.vSJx(ee, 0)
      }
      compute(ee, ie, He, ye) {
        var be = Ki(ye) ? 0 : Ri(ye, Ei.cnOV, Ei.JWc6),
          Me = gi;
        const Ke = Ei.TV3p(this.__wbg_ptr, ee, Ki(ie) ? Number.MAX_SAFE_INTEGER : ie | 0, He, be, Me);
        if (Ke[2]) throw ki(Ke[1]);
        return Ke[0] >>> 0
      }
      Kf(ee) {
        const ie = Ri(ee, Ei.cnOV, Ei.JWc6),
          He = gi;
        Ei.pDj3(this.__wbg_ptr, ie, He)
      }
      ff() {
        return Ei.fXSt(this.__wbg_ptr) >>> 0
      }
      Tf() {
        return Ei.Nd6T(this.__wbg_ptr) >>> 0
      }
      tf(ee) {
        const ie = Ei.VCWJ(this.__wbg_ptr, ee);
        if (ie[2]) throw ki(ie[1]);
        return ie[0] >>> 0
      }
      constructor(ee, ie, He, ye, be, Me) {
        const Ke = Ui(ee, Ei.cnOV),
          Ue = gi,
          Fe = oi(ie, Ei.cnOV),
          Je = gi,
          oe = Fi(He, Ei.cnOV),
          Re = gi,
          ke = Ji(ye, Ei.cnOV),
          qe = gi,
          fe = Ei.r2pr(Ke, Ue, Fe, Je, oe, Re, ke, qe, be, Me);
        if (fe[2]) throw ki(fe[1]);
        return this.__wbg_ptr = fe[0], me.register(this, this.__wbg_ptr, this), this
      }
      gf() {
        return Ei.W8yK(this.__wbg_ptr) >>> 0
      }
      Ef() {
        const ee = Ei.paKu(this.__wbg_ptr);
        if (ee[2]) throw ki(ee[1]);
        return 0 !== ee[0]
      }
      df() {
        return Ei.uOIx(this.__wbg_ptr) >>> 0
      }
    }

    function ke() {
      const ee = Ei.C3yX();
      var ie = je(ee[0], ee[1]).slice();
      return Ei.o0dT(ee[0], 4 * ee[1], 4), ie
    }

    function qe(ee, ie) {
      let He, ye;
      try {
        const be = Ui(ee, Ei.cnOV),
          Me = gi,
          Ke = Ri(ie, Ei.cnOV, Ei.JWc6),
          Ue = gi,
          Fe = Ei.tgQ7(be, Me, Ke, Ue);
        return He = Fe[0], ye = Fe[1], Ge(Fe[0], Fe[1])
      } finally {
        Ei.o0dT(He, ye, 1)
      }
    }

    function fe() {
      const ee = Ei.VmYG();
      var ie = je(ee[0], ee[1]).slice();
      return Ei.o0dT(ee[0], 4 * ee[1], 4), ie
    }

    function Te(ee) {
      return 0 !== Ei.LvXv(ee)
    }

    function pe(ee, ie) {
      const He = Ri(ee, Ei.cnOV, Ei.JWc6),
        ye = gi,
        be = Ei.xl4b(He, ye, ie);
      if (be[1]) throw ki(be[0])
    }

    function Xe() {
      Ei.RoZG()
    }

    function ze() {
      return Ei.ndDX() >>> 0
    }

    function Be(ee) {
      return 0 !== Ei.Nl69(ee)
    }

    function Ee(ee) {
      return 0 !== Ei.HEOT(ee)
    }

    function ge(ee) {
      Ei.mVF6(ee)
    }

    function Oe() {
      return Ei.pfmP() >>> 0
    }

    function de() {
      return Ei.dqfn() >>> 0
    }

    function We() {
      return 0 !== Ei.fXFG()
    }

    function te() {
      const ee = Ei.hvc1();
      var ie = je(ee[0], ee[1]).slice();
      return Ei.o0dT(ee[0], 4 * ee[1], 4), ie
    }

    function Ze() {
      const ee = Ei.OFKu();
      var ie = je(ee[0], ee[1]).slice();
      return Ei.o0dT(ee[0], 4 * ee[1], 4), ie
    }

    function we() {
      const ee = Ei.ckSU();
      var ie = je(ee[0], ee[1]).slice();
      return Ei.o0dT(ee[0], 4 * ee[1], 4), ie
    }

    function De() {
      return Ei.yXeh() >>> 0
    }

    function Pe() {
      Ei.yS42()
    }

    function Ae() {
      let ee, ie;
      try {
        const He = Ei.YOOB();
        return ee = He[0], ie = He[1], Ge(He[0], He[1])
      } finally {
        Ei.o0dT(ee, ie, 1)
      }
    }

    function Ye(ee) {
      Ei.VGxH(le(ee))
    }

    function Ve() {
      return {
        __proto__: null,
        mLKo: {
          __proto__: null,
          WEqb: function(ee, ie) {
            return le(Error(Ge(ee, ie)))
          },
          hPbt: function(ee, ie) {
            throw new Error(Ge(ee, ie))
          },
          nCIU: function(ee) {
            yi(ee).call()
          },
          ciTc: function(ee, ie) {
            console.error(Ge(ee, ie))
          },
          kUDi: function() {
            return performance.now()
          },
          mbyC: function(ee) {
            ki(ee)
          }
        }
      }
    }
    Symbol.dispose && (Re.prototype[Symbol.dispose] = Re.prototype.free);
    const ae = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((ee => Ei.e0bn(ee, 1))),
      ce = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((ee => Ei.YuGD(ee, 1))),
      xe = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((ee => Ei.IjwJ(ee, 1))),
      Le = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((ee => Ei.PyI4(ee, 1))),
      Ce = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((ee => Ei.nzEd(ee, 1))),
      ve = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((ee => Ei.nTXk(ee, 1))),
      ue = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((ee => Ei.ev1b(ee, 1))),
      me = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((ee => Ei.vSJx(ee, 1)));

    function le(ee) {
      Mi === bi.length && bi.push(bi.length + 1);
      const ie = Mi;
      return Mi = bi[ie], bi[ie] = ee, ie
    }

    function Se(ee, ie) {
      if (!(ee instanceof ie)) throw new Error(`expected instance of ${ie.name}`)
    }

    function ne(ee, ie) {
      return ee >>>= 0, he().subarray(ee / 8, ee / 8 + ie)
    }

    function je(ee, ie) {
      return ee >>>= 0, ei().subarray(ee / 4, ee / 4 + ie)
    }

    function se(ee, ie) {
      return ee >>>= 0, Hi().subarray(ee / 1, ee / 1 + ie)
    }
    let Ie = null;

    function he() {
      return null !== Ie && 0 !== Ie.byteLength || (Ie = new Float64Array(Ei.memory.buffer)), Ie
    }
    let Ne = null;

    function Ge(ee, ie) {
      return function(ee, ie) {
        Ti += ie, Ti >= fi && (qi = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), qi.decode(), Ti = ie);
        return qi.decode(Hi().subarray(ee, ee + ie))
      }(ee >>> 0, ie)
    }
    let re = null;
    let Qe = null;

    function ei() {
      return null !== Qe && 0 !== Qe.byteLength || (Qe = new Uint32Array(Ei.memory.buffer)), Qe
    }
    let ii = null;

    function Hi() {
      return null !== ii && 0 !== ii.byteLength || (ii = new Uint8Array(Ei.memory.buffer)), ii
    }

    function yi(ee) {
      return bi[ee]
    }
    let bi = new Array(1024).fill(void 0);
    bi.push(void 0, null, !0, !1);
    let Mi = bi.length;

    function Ki(ee) {
      return void 0 === ee || null === ee
    }

    function Ui(ee, ie) {
      const He = ie(2 * ee.length, 2) >>> 0;
      return (null !== re && 0 !== re.byteLength || (re = new Uint16Array(Ei.memory.buffer)), re).set(ee, He / 2), gi = ee.length, He
    }

    function Fi(ee, ie) {
      const He = ie(4 * ee.length, 4) >>> 0;
      return ei().set(ee, He / 4), gi = ee.length, He
    }

    function Ji(ee, ie) {
      const He = ie(1 * ee.length, 1) >>> 0;
      return Hi().set(ee, He / 1), gi = ee.length, He
    }

    function oi(ee, ie) {
      const He = ie(8 * ee.length, 8) >>> 0;
      return he().set(ee, He / 8), gi = ee.length, He
    }

    function Ri(ee, ie, He) {
      if (void 0 === He) {
        const He = Xi.encode(ee),
          ye = ie(He.length, 1) >>> 0;
        return Hi().subarray(ye, ye + He.length).set(He), gi = He.length, ye
      }
      let ye = ee.length,
        be = ie(ye, 1) >>> 0;
      const Me = Hi();
      let Ke = 0;
      for (; Ke < ye; Ke++) {
        const ie = ee.charCodeAt(Ke);
        if (ie > 127) break;
        Me[be + Ke] = ie
      }
      if (Ke !== ye) {
        0 !== Ke && (ee = ee.slice(Ke)), be = He(be, ye, ye = Ke + 3 * ee.length, 1) >>> 0;
        const ie = Hi().subarray(be + Ke, be + ye);
        Ke += Xi.encodeInto(ee, ie).written, be = He(be, ye, Ke, 1) >>> 0
      }
      return gi = Ke, be
    }

    function ki(ee) {
      const ie = yi(ee);
      return function(ee) {
        ee < 1028 || (bi[ee] = Mi, Mi = ee)
      }(ee), ie
    }
    let qi = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    qi.decode();
    const fi = 2146435072;
    let Ti = 0;
    const Xi = new TextEncoder;
    "encodeInto" in Xi || (Xi.encodeInto = function(ee, ie) {
      const He = Xi.encode(ee);
      return ie.set(He), {
        read: ee.length,
        written: He.length
      }
    });
    let zi, Bi, Ei, gi = 0;

    function Oi(ee, ie) {
      return Bi = ee, Ei = ee.exports, zi = ie, Ie = null, Ne = null, re = null, Qe = null, ii = null, Ei.X0W7(), Ei
    }

    function di(ee) {
      if (void 0 !== Ei) return Ei;
      void 0 !== ee && (Object.getPrototypeOf(ee) === Object.prototype ? ({
        module: ee
      } = ee) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const ie = Ve();
      ee instanceof WebAssembly.Module || (ee = new WebAssembly.Module(ee));
      return Oi(new WebAssembly.Instance(ee, ie), ee)
    }
    async function Wi(ee) {
      if (void 0 !== Ei) return Ei;
      void 0 !== ee && (Object.getPrototypeOf(ee) === Object.prototype ? ({
        module_or_path: ee
      } = ee) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const ie = Ve();
      ("string" === typeof ee || "function" === typeof Request && ee instanceof Request || "function" === typeof URL && ee instanceof URL) && (ee = fetch(ee));
      const {
        instance: He,
        module: ye
      } = await async function(ee, ie) {
        if ("function" === typeof Response && ee instanceof Response) {
          if (!ee.ok) throw new Error(`failed to fetch Wasm: ${ee.status} ${ee.statusText} fetching '${ee.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(ee, ie)
          } catch (He) {
            if (! function(ee) {
                switch (ee) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(ee.type) || "application/wasm" === ee.headers.get("Content-Type")) throw He;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", He)
          }
          const ye = await ee.arrayBuffer();
          return await WebAssembly.instantiate(ye, ie)
        } {
          const He = await WebAssembly.instantiate(ee, ie);
          return He instanceof WebAssembly.Instance ? {
            instance: He,
            module: ee
          } : He
        }
      }(await ee, ie);
      return Oi(He, ye)
    }
  },
  36987: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ke,
      f: () => Ue,
      i: () => Fe
    });
    var ye = He(36996),
      be = He(3094),
      Me = He(37003);
    const Ke = {
      name: be.c,
      url: () => new He.U(He(37008)),
      init: ye.default,
      bindings: ye
    };

    function Ue() {
      let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ke,
        ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ke,
        He = arguments.length > 2 ? arguments[2] : void 0;
      return (0, Me.m)(ee, ie, He)
    }

    function Fe(ee) {
      return (0, be.Q)((() => ee), ye, Ke)
    }
  },
  36981: (ee, ie, He) => {
    function ye(ee, ie) {
      return new Error(`${ee}: ${ie instanceof Error?`${ie.name}: ${ie.message}`:String(ie)}`, {
        cause: ie
      })
    }
    He.d(ie, {
      b: () => ye
    })
  },
  36973: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ke,
      g: () => Fe
    });
    var ye = He(3101),
      be = He(7251),
      Me = He(36981);

    function Ke() {
      return new URL(new He.U(He(36983)).href, globalThis.location?.href).href
    }
    let Ue = null;

    function Fe() {
      return Ue ??= (async () => (0, ye.B)(new URL(Ke()), (0, be.d)("bloxd_wasm_textures")))().catch((ee => {
        throw (0, Me.b)((0, ye.J)(ee), ee)
      })), Ue
    }
  },
  36950: (ee, ie, He) => {
    He.d(ie, {
      e: () => ye,
      g: () => Me,
      i: () => Fe,
      k: () => Ke,
      m: () => be
    });
    const ye = /^alloc_failed (\d+) bytes$/;

    function be(ee, ie) {
      return Me(ee, ie) ? `trap=alloc_failed ${ie} bytes` : `trap=${ee}`
    }

    function Me(ee, ie) {
      return "unreachable" === ee && ie > 0
    }

    function Ke(ee, ie, He) {
      const ye = function(ee) {
        return ee instanceof WebAssembly.RuntimeError ? /unreachable/i.test(ee.message) ? "unreachable" : /out of bounds/i.test(ee.message) ? "out_of_bounds" : "runtime_error" : (ee instanceof RangeError || ee instanceof Error && "InternalError" === ee.name) && /call stack|recursion/i.test(ee.message) ? "stack_overflow" : "js_error"
      }(ee);
      if ("unreachable" !== ye) return {
        kind: ye,
        panic: null,
        refusedBytes: 0
      };
      const be = ie(),
        Me = He();
      return {
        kind: ye,
        panic: Me > 0 ? null : be,
        refusedBytes: Me
      }
    }
    const Ue = 300;

    function Fe(ee) {
      return ee.replace(/\s*\n\s*/g, " / ").slice(0, Ue)
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);