export const id = 212;
export const ids = [212, 213];
export const modules = {
  36668: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      CAPPED_COUNTS_VISIT_CAP: () => Zu,
      reportCappedWasmFailure: () => qu,
      reportUncappedWasmFailure: () => lu,
      reportWasmCrash: () => Uu,
      reportWasmFailure: () => Xu
    });
    var su = ju(3099);

    function Uu(uu) {
      (0, su.reportClientError)("wasm_load", uu.message, uu.code)
    }
    const Zu = su.MAX_ERRORS_PER_VISIT - 4;

    function Xu(uu, Eu, ju) {
      (0, su.reportClientError)(uu, Eu, ju, !1)
    }

    function lu(uu, Eu, ju) {
      (0, su.reportClientError)(uu, Eu, ju, !1, 1 / 0)
    }

    function qu(uu, Eu, ju) {
      (0, su.reportClientError)(uu, Eu, ju, !1, Zu)
    }
  },
  36666: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Gu,
      f: () => Ju,
      i: () => du,
      k: () => pu
    });
    var su = ju(36687),
      Uu = ju(3017),
      Zu = ju(36703),
      Xu = ju(3020),
      lu = ju(36668),
      qu = ju(3089),
      fu = ju(3405),
      Cu = ju(3396),
      bu = ju(36670),
      cu = ju(3099),
      Nu = ju(36675),
      Ou = ju(36684),
      Yu = ju(3900);
    let hu = !1;
    const Du = 40;
    var gu = ju(3774);
    const Mu = "bloxdWasmFailureReported";

    function eu() {
      return "undefined" === typeof WebAssembly
    }

    function Gu() {
      return (0, su.f)()
    }

    function pu() {
      if (eu()) return "this browser has no WebAssembly";
      const uu = (0, Uu.r)();
      return "compile" === uu || "instantiate" === uu ? `the core wasm didn't load here (${(0,Uu.i)()})` : null
    }
    async function wu(uu) {
      return await (0, Zu.e)(Zu.b, void 0, uu)
    }

    function Ju() {
      eu() || (0, gu.e)((() => {
        wu()
      }))
    }

    function du() {
      if (eu()) return async () => ((0, qu.h)("unsupported", 0), au("unsupported", "This browser has no WebAssembly"), !1);
      const uu = {
        reloadFailedDownload: !0
      };
      return wu(uu), async () => {
        var Eu;
        const ju = performance.now();
        await wu(uu);
        const su = (performance.now() - ju) / 1e3;
        if ((0, Uu.S)()) return (0, qu.h)("ready", su), hu || (hu = !0, (0, Uu.W)((() => {
          if ("call" !== (0, Uu.r)()) return;
          const uu = (0, Uu.q)(),
            Eu = (0, bu.j)(uu, Uu.J, Uu.ab),
            ju = (0, Uu.z)().buffer.byteLength,
            su = (0, bu.h)(Eu.kind, Eu.refusedBytes),
            Zu = su ? "alloc_failed" : Eu.kind,
            Xu = (0, Nu.k)(ju),
            lu = su ? `_r${Math.floor(Math.log2(Eu.refusedBytes))}` : "",
            qu = (0, Yu.d)();
          null === qu && console.warn("A JS client wasm call turned wasm off without naming its site: call markWasmFailedAt, not markBloxdWasmFailed");
          const fu = new Error((0, Ou.e)(uu, ju, Eu));
          if (uu instanceof Error && void 0 !== uu.stack) {
            const Eu = uu.stack.split("\n"),
              ju = Eu.length > Du ? [...Eu.slice(0, Du / 2), ...Eu.slice(-Du / 2)] : Eu;
            fu.stack = ju.join("\n")
          }(0, cu.reportClientError)("wasm_load", fu, `wasm_call_${Zu}_${null!==qu&&void 0!==qu?qu:"unnamed"}_m${Xu}${lu}`)
        }))), (0, Xu.T)(Zu.b.url()) && (0, lu.reportCappedWasmFailure)("wasm_load", fu.b.message, fu.b.code), !0;
        const gu = Cu.e[null !== (Eu = (0, Uu.r)()) && void 0 !== Eu ? Eu : "call"];
        return (0, qu.h)(gu, su), au(gu, (0, Uu.i)()), !1
      }
    }

    function au(uu, Eu) {
      (0, Cu.m)(Mu, `Bloxd wasm ${uu}, so the game can't start: ${Eu}`, Eu, uu)
    }
  },
  36684: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => lu,
      f: () => fu,
      h: () => Xu,
      j: () => bu
    });
    var su = ju(36670),
      Uu = ju(13);
    const Zu = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function Xu(uu) {
      if (uu instanceof WebAssembly.RuntimeError) return !0;
      const Eu = uu instanceof Error ? uu.stack : void 0;
      return "string" === typeof Eu && Zu.test(Eu)
    }

    function lu(uu, Eu, ju) {
      var Uu;
      const Xu = uu instanceof Error ? uu.name : "thrown",
        lu = (uu instanceof Error && null !== (Uu = uu.stack) && void 0 !== Uu ? Uu : "").split("\n").filter((uu => Zu.test(uu))).slice(0, 8).map((uu => uu.trim())),
        qu = null === Eu ? "wasm memory unknown" : `wasm memory ${Math.round(Eu/2**20)} MB`,
        fu = null === ju.panic ? "" : `, panic: ${(0,su.i)(ju.panic)}`,
        Cu = `${Xu}: ${uu instanceof Error?uu.message:String(uu)}`;
      return `${(0,su.n)(ju.kind,ju.refusedBytes)} ${Cu} (${qu})${fu}${lu.length>0?` | ${lu.join(" < ")}`:""}`
    }
    const qu = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function fu(uu) {
      var Eu;
      let ju = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(uu instanceof Error) || !qu.test(uu.message)) return {};
      if (!("detached" in ju)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, Uu.T)(null === (Eu = (0, Uu.N)(ju, "detached")) || void 0 === Eu ? void 0 : Eu.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const Cu = 500;

    function bu(uu) {
      let Eu = "[object Object]";
      try {
        Eu = String(uu)
      } catch {}
      if ("[object Object]" !== Eu) return Eu;
      try {
        var ju, su;
        return null !== (ju = null === (su = JSON.stringify(uu)) || void 0 === su ? void 0 : su.slice(0, Cu)) && void 0 !== ju ? ju : Eu
      } catch {
        return Eu
      }
    }
  },
  36716: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/bloxd_wasm_bg.bccc155dacfcdfd926d3.wasm"
  },
  36697: (uu, Eu, ju) => {
    uu.exports = ju.p + "static/media/bloxd_wasm_textures_bg.469e7b15cb5e4af8c71c.wasm"
  },
  36711: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      tC: () => su,
      EnvelopeKind: () => Uu,
      xC: () => Zu,
      PhysicsEngine: () => Xu,
      TC: () => lu,
      HC: () => qu,
      AC: () => fu,
      nC: () => Cu,
      yC: () => bu,
      zC: () => cu,
      RC: () => Nu,
      ub: () => Ou,
      Eb: () => Yu,
      jb: () => hu,
      default: () => wE,
      initSync: () => pE,
      sb: () => Du,
      Ub: () => gu,
      Zb: () => Mu,
      Xb: () => eu,
      lb: () => Gu,
      qb: () => pu,
      fb: () => wu,
      Cb: () => Ju,
      bb: () => du,
      cb: () => au,
      Nb: () => Pu,
      Ob: () => ou,
      Yb: () => ku,
      hb: () => mu,
      Db: () => vu
    });
    class su {
      __destroy_into_raw() {
        const uu = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Vu.unregister(this), uu
      }
      free() {
        const uu = this.__destroy_into_raw();
        ME.nusS(uu, 0)
      }
      gb() {
        const uu = ME.opnp(this.__wbg_ptr);
        if (uu[2]) throw cE(uu[1]);
        return uu[0] >>> 0
      }
      Mb() {
        return ME.Fy5r(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const uu = ME.njf0();
        return this.__wbg_ptr = uu, Vu.register(this, this.__wbg_ptr, this), this
      }
      eb() {
        return ME.Oiu3(this.__wbg_ptr) >>> 0
      }
      Gb(uu) {
        const Eu = ME.K0Ej(this.__wbg_ptr, uu);
        if (Eu[2]) throw cE(Eu[1]);
        return Eu[0] >>> 0
      }
      pb(uu) {
        const Eu = ME.QiBD(this.__wbg_ptr, uu);
        if (Eu[2]) throw cE(Eu[1]);
        return Eu[0] >>> 0
      }
    }
    Symbol.dispose && (su.prototype[Symbol.dispose] = su.prototype.free);
    const Uu = Object.freeze({
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
    class Zu {
      __destroy_into_raw() {
        const uu = this.__wbg_ptr;
        return this.__wbg_ptr = 0, ru.unregister(this), uu
      }
      free() {
        const uu = this.__destroy_into_raw();
        ME.wB2j(uu, 0)
      }
      Pb(uu, Eu) {
        const ju = ME.WBO6(this.__wbg_ptr, uu, Eu);
        if (ju[2]) throw cE(ju[1]);
        return ju[0] >>> 0
      }
      ob(uu) {
        const Eu = ME.QcDK(this.__wbg_ptr, uu);
        if (Eu[2]) throw cE(Eu[1]);
        return Eu[0] >>> 0
      }
      kb() {
        ME.gADM(this.__wbg_ptr)
      }
      static Kb() {
        return ME.A62S() >>> 0
      }
      Vb() {
        return ME.cgWZ(this.__wbg_ptr) >>> 0
      }
      rb() {
        const uu = ME.nmXE(this.__wbg_ptr);
        return 0 === uu[0] ? void 0 : uu[1]
      }
      Qb() {
        return ME.fm5H(this.__wbg_ptr) >>> 0
      }
      ib() {
        return ME.fEFL(this.__wbg_ptr) >>> 0
      }
      static ab() {
        return ME.WW2o() >>> 0
      }
      constructor() {
        const uu = ME.QZ0t();
        return this.__wbg_ptr = uu, ru.register(this, this.__wbg_ptr, this), this
      }
      Wb() {
        return ME.NsDZ(this.__wbg_ptr) >>> 0
      }
      Sb() {
        return ME.HNJ1(this.__wbg_ptr) >>> 0
      }
      Ib() {
        return ME.U5to(this.__wbg_ptr) >>> 0
      }
      Jb(uu) {
        return ME.Y614(this.__wbg_ptr, uu) >>> 0
      }
      reserve(uu, Eu) {
        const ju = ME.P1B9(this.__wbg_ptr, uu, Eu);
        if (ju[1]) throw cE(ju[0])
      }
      Lb(uu, Eu) {
        const ju = qE(uu, ME.mNX4),
          su = eE;
        ME.Zb64(this.__wbg_ptr, ju, su, Eu)
      }
      text() {
        let uu, Eu;
        try {
          const ju = ME.uK1O(this.__wbg_ptr);
          return uu = ju[0], Eu = ju[1], yu(ju[0], ju[1])
        } finally {
          ME.l6az(uu, Eu, 1)
        }
      }
    }
    Symbol.dispose && (Zu.prototype[Symbol.dispose] = Zu.prototype.free);
    class Xu {
      __destroy_into_raw() {
        const uu = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Qu.unregister(this), uu
      }
      free() {
        const uu = this.__destroy_into_raw();
        ME.lL7U(uu, 0)
      }
      xb(uu, Eu) {
        Lu(Eu, su);
        const ju = ME.yXxG(this.__wbg_ptr, uu, Eu.__wbg_ptr);
        if (ju[2]) throw cE(ju[1]);
        return ju[0] >>> 0
      }
      Hb() {
        const uu = ME.CwPX(this.__wbg_ptr);
        if (uu[1]) throw cE(uu[0])
      }
      Rb(uu, Eu, ju, su, Uu, Zu, Xu, qu, fu, Cu, bu) {
        Lu(uu, lu);
        const cu = ME.AWbt(this.__wbg_ptr, uu.__wbg_ptr, Eu, ju, su, Uu, Zu, Xu, qu, fu, Cu, bu);
        if (cu[2]) throw cE(cu[1]);
        return cu[0]
      }
      uc() {
        const uu = ME.C7f3(this.__wbg_ptr);
        var Eu = tu(uu[0], uu[1]).slice();
        return ME.l6az(uu[0], 8 * uu[1], 8), Eu
      }
      Ec() {
        return ME.RfEs(this.__wbg_ptr) >>> 0
      }
      jc() {
        return ME.e6BQ(this.__wbg_ptr) >>> 0
      }
      sc() {
        return ME.pKcb(this.__wbg_ptr) >>> 0
      }
      constructor(uu, Eu, ju, su, Uu, Zu, Xu, lu) {
        const qu = ME.APjT(uu, Eu, ju, su, Uu, Zu, Xu, lu);
        if (qu[2]) throw cE(qu[1]);
        return this.__wbg_ptr = qu[0], Qu.register(this, this.__wbg_ptr, this), this
      }
      Xc(uu) {
        Lu(uu, su);
        const Eu = ME.ONrj(this.__wbg_ptr, uu.__wbg_ptr);
        if (Eu[2]) throw cE(Eu[1]);
        return Eu[0] >>> 0
      }
      lc(uu) {
        const Eu = ME.VI2p(this.__wbg_ptr, uu);
        if (Eu[1]) throw cE(Eu[0])
      }
      qc() {
        return ME.vMjr(this.__wbg_ptr) >>> 0
      }
      resume(uu, Eu) {
        Lu(uu, lu), Lu(Eu, su);
        const ju = ME.yhdk(this.__wbg_ptr, uu.__wbg_ptr, Eu.__wbg_ptr);
        if (ju[2]) throw cE(ju[1]);
        return ju[0] >>> 0
      }
      Nc(uu) {
        const Eu = ME.q5HD(this.__wbg_ptr, uu);
        if (Eu[1]) throw cE(Eu[0])
      }
      hc(uu, Eu) {
        Lu(Eu, su);
        const ju = ME.NWri(this.__wbg_ptr, uu, Eu.__wbg_ptr);
        if (ju[1]) throw cE(ju[0])
      }
      Mc(uu) {
        const Eu = CE(uu, ME.mNX4),
          ju = eE,
          su = ME.obqJ(this.__wbg_ptr, Eu, ju);
        if (su[1]) throw cE(su[0])
      }
      nb(uu, Eu, ju, su, Uu, Zu) {
        const Xu = ME.zyW3(this.__wbg_ptr, uu, Eu, ju, su, Uu, Zu);
        if (Xu[1]) throw cE(Xu[0])
      }
      yb(uu, Eu, ju, su) {
        const Uu = qE(uu, ME.mNX4),
          Zu = eE,
          Xu = CE(Eu, ME.mNX4),
          lu = eE,
          qu = CE(ju, ME.mNX4),
          fu = eE,
          Cu = CE(su, ME.mNX4),
          bu = eE,
          cu = ME.CtHg(this.__wbg_ptr, Uu, Zu, Xu, lu, qu, fu, Cu, bu);
        if (cu[1]) throw cE(cu[0])
      }
      Gc(uu, Eu) {
        Lu(Eu, su);
        const ju = ME.f78g(this.__wbg_ptr, uu, Eu.__wbg_ptr);
        if (ju[1]) throw cE(ju[0])
      }
      Zc(uu, Eu, ju) {
        const su = ME.pxhd(this.__wbg_ptr, uu, Eu, ju);
        if (su[1]) throw cE(su[0])
      }
      Jc(uu, Eu, ju, su, Uu, Zu, Xu, qu, fu, Cu) {
        Lu(uu, lu);
        return ME.Pt1S(this.__wbg_ptr, uu.__wbg_ptr, Eu, ju, su, Uu, Zu, Xu, qu, fu, Cu)
      }
    }
    Symbol.dispose && (Xu.prototype[Symbol.dispose] = Xu.prototype.free);
    class lu {
      static __wrap(uu) {
        const Eu = Object.create(lu.prototype);
        return Eu.__wbg_ptr = uu, iu.register(Eu, Eu.__wbg_ptr, Eu), Eu
      }
      __destroy_into_raw() {
        const uu = this.__wbg_ptr;
        return this.__wbg_ptr = 0, iu.unregister(this), uu
      }
      free() {
        const uu = this.__destroy_into_raw();
        ME.KsCa(uu, 0)
      }
      Pc(uu) {
        const Eu = ME.zciE(this.__wbg_ptr, uu);
        if (Eu[2]) throw cE(Eu[1]);
        return Eu[0] >>> 0
      }
      oc(uu, Eu, ju) {
        return ME.nNDH(this.__wbg_ptr, uu, Eu, ju)
      }
      kc(uu, Eu, ju) {
        return ME.NbIs(this.__wbg_ptr, uu, Eu, ju) >>> 0
      }
      mc(uu, Eu, ju, su) {
        return 0 !== ME.Dhn8(this.__wbg_ptr, uu, Eu, ju, su)
      }
      vc() {
        ME.ikQJ(this.__wbg_ptr)
      }
      Vc(uu) {
        const Eu = ME.W4f9(this.__wbg_ptr, uu);
        if (Eu[3]) throw cE(Eu[2]);
        var ju = Tu(Eu[0], Eu[1]).slice();
        return ME.l6az(Eu[0], 1 * Eu[1], 1), ju
      }
      evict(uu, Eu) {
        return ME.EaDl(this.__wbg_ptr, uu, Eu) >>> 0
      }
      Qc() {
        ME.aLP0(this.__wbg_ptr)
      }
      Wc(uu, Eu, ju) {
        ME.KwjR(this.__wbg_ptr, uu, Eu, ju)
      }
      Sc(uu) {
        const Eu = ME.jX3f(this.__wbg_ptr, uu);
        if (Eu[1]) throw cE(Eu[0])
      }
      Ic() {
        return ME.U7wA(this.__wbg_ptr) >>> 0
      }
      Fc() {
        return ME.uSoF(this.__wbg_ptr) >>> 0
      }
      Bc(uu, Eu, ju) {
        ME.Td90(this.__wbg_ptr, uu, Eu, ju)
      }
      Lc(uu, Eu, ju) {
        ME.no0N(this.__wbg_ptr, uu, Eu, ju)
      }
      tc() {
        return ME.ujKn(this.__wbg_ptr) >>> 0
      }
      xc() {
        return ME.zOfU(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const uu = ME.SFy2();
        return this.__wbg_ptr = uu, iu.register(this, this.__wbg_ptr, this), this
      }
      static Tc() {
        const uu = ME.JPa7();
        return lu.__wrap(uu)
      }
      Hc() {
        return ME.cOmT(this.__wbg_ptr) >>> 0
      }
      Ac() {
        return ME.Izcy(this.__wbg_ptr) >>> 0
      }
      nc(uu, Eu, ju, su) {
        const Uu = ME.V7jX(this.__wbg_ptr, uu, Eu, ju, su);
        if (Uu[1]) throw cE(Uu[0])
      }
      yc() {
        return ME.UWr7(this.__wbg_ptr) >>> 0
      }
      zc() {
        return ME.ANlf(this.__wbg_ptr) >>> 0
      }
      Rc(uu, Eu, ju, su) {
        ME.FL2K(this.__wbg_ptr, uu, Eu, ju, su)
      }
      uN(uu) {
        ME.PvLN(this.__wbg_ptr, uu)
      }
      jN(uu, Eu, ju, su, Uu) {
        const Zu = fE(Eu, ME.mNX4),
          Xu = eE,
          lu = qE(ju, ME.mNX4),
          qu = eE,
          fu = CE(su, ME.mNX4),
          Cu = eE,
          bu = ME.ipDp(this.__wbg_ptr, uu, Zu, Xu, lu, qu, fu, Cu, Uu);
        if (bu[1]) throw cE(bu[0])
      }
      EN(uu, Eu, ju, su) {
        const Uu = fE(uu, ME.mNX4),
          Zu = eE,
          Xu = qE(Eu, ME.mNX4),
          lu = eE,
          qu = CE(ju, ME.mNX4),
          fu = eE,
          Cu = fE(su, ME.mNX4),
          bu = eE,
          cu = ME.u4J9(this.__wbg_ptr, Uu, Zu, Xu, lu, qu, fu, Cu, bu);
        if (cu[1]) throw cE(cu[0])
      }
      qN(uu) {
        const Eu = fE(uu, ME.mNX4),
          ju = eE,
          su = ME.wPpJ(this.__wbg_ptr, Eu, ju);
        if (su[1]) throw cE(su[0])
      }
      fN() {
        return ME.cXnM(this.__wbg_ptr) >>> 0
      }
      CN(uu) {
        const Eu = ME.pIIA(this.__wbg_ptr, uu);
        if (Eu[2]) throw cE(Eu[1]);
        return Eu[0] >>> 0
      }
      steer() {
        return ME.o41U(this.__wbg_ptr) >>> 0
      }
      bN() {
        const uu = ME.C1Wo(this.__wbg_ptr);
        var Eu = tu(uu[0], uu[1]).slice();
        return ME.l6az(uu[0], 8 * uu[1], 8), Eu
      }
      cN() {
        return ME.fRF6(this.__wbg_ptr) >>> 0
      }
      Cc() {
        const uu = ME.XdyP(this.__wbg_ptr);
        var Eu, ju, su = (Eu = uu[0], ju = uu[1], Eu >>>= 0, (null !== nu && 0 !== nu.byteLength || (nu = new Int32Array(ME.memory.buffer)), nu).subarray(Eu / 4, Eu / 4 + ju)).slice();
        return ME.l6az(uu[0], 4 * uu[1], 4), su
      }
    }
    Symbol.dispose && (lu.prototype[Symbol.dispose] = lu.prototype.free);
    class qu {
      __destroy_into_raw() {
        const uu = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Wu.unregister(this), uu
      }
      free() {
        const uu = this.__destroy_into_raw();
        ME.NjWJ(uu, 0)
      }
      NN(uu) {
        const Eu = qE(uu, ME.mNX4),
          ju = eE,
          su = ME.WqyE(this.__wbg_ptr, Eu, ju);
        if (su[1]) throw cE(su[0])
      }
      ON() {
        return ME.cNk6(this.__wbg_ptr) >>> 0
      }
      YN() {
        return ME.gfn3(this.__wbg_ptr) >>> 0
      }
      constructor() {
        const uu = ME.vl2M();
        return this.__wbg_ptr = uu, Wu.register(this, this.__wbg_ptr, this), this
      }
      run(uu, Eu) {
        Lu(uu, lu);
        const ju = ME.yJed(this.__wbg_ptr, uu.__wbg_ptr, Eu);
        if (ju[2]) throw cE(ju[1]);
        return ju[0] >>> 0
      }
      hN(uu) {
        const Eu = qE(uu, ME.mNX4),
          ju = eE;
        ME.I1US(this.__wbg_ptr, Eu, ju)
      }
      DN(uu) {
        const Eu = qE(uu, ME.mNX4),
          ju = eE;
        ME.zR4d(this.__wbg_ptr, Eu, ju)
      }
    }
    Symbol.dispose && (qu.prototype[Symbol.dispose] = qu.prototype.free);
    class fu {
      __destroy_into_raw() {
        const uu = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Su.unregister(this), uu
      }
      free() {
        const uu = this.__destroy_into_raw();
        ME.P56x(uu, 0)
      }
      MN(uu, Eu) {
        const ju = fE(uu, ME.mNX4),
          su = eE;
        return ME.YXin(this.__wbg_ptr, ju, su, Eu) >>> 0
      }
      eN(uu, Eu, ju) {
        Lu(uu, lu);
        const su = fE(ju, ME.mNX4),
          Uu = eE,
          Zu = ME.rbNz(this.__wbg_ptr, uu.__wbg_ptr, Eu, su, Uu);
        if (Zu[2]) throw cE(Zu[1]);
        return Zu[0] >>> 0
      }
      gN(uu) {
        return ME.o4Ys(this.__wbg_ptr, uu) >>> 0
      }
      constructor() {
        const uu = ME.tsNy();
        return this.__wbg_ptr = uu, Su.register(this, this.__wbg_ptr, this), this
      }
      scan(uu, Eu) {
        Lu(uu, lu);
        const ju = ME.fJAR(this.__wbg_ptr, uu.__wbg_ptr, Eu);
        if (ju[2]) throw cE(ju[1]);
        return ju[0] >>> 0
      }
      wN(uu) {
        const Eu = fE(uu, ME.mNX4),
          ju = eE;
        ME.BCbW(this.__wbg_ptr, Eu, ju)
      }
      pN() {
        return ME.R6mD(this.__wbg_ptr) >>> 0
      }
      GN() {
        return ME.Zsld(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (fu.prototype[Symbol.dispose] = fu.prototype.free);
    class Cu {
      __destroy_into_raw() {
        const uu = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Iu.unregister(this), uu
      }
      free() {
        const uu = this.__destroy_into_raw();
        ME.ao7z(uu, 0)
      }
      dN(uu) {
        const Eu = ME.q7PX(this.__wbg_ptr, uu);
        if (Eu[2]) throw cE(Eu[1]);
        return Eu[0] >>> 0
      }
      compute(uu, Eu, ju, su) {
        var Uu = XE(su) ? 0 : bE(su, ME.mNX4, ME.MCQ8),
          Zu = eE;
        const Xu = ME.NHj7(this.__wbg_ptr, uu, XE(Eu) ? Number.MAX_SAFE_INTEGER : Eu | 0, ju, Uu, Zu);
        if (Xu[2]) throw cE(Xu[1]);
        return Xu[0] >>> 0
      }
      PN(uu) {
        const Eu = bE(uu, ME.mNX4, ME.MCQ8),
          ju = eE;
        ME.v4AH(this.__wbg_ptr, Eu, ju)
      }
      kN() {
        return ME.Gb8u(this.__wbg_ptr)
      }
      mN(uu) {
        return ME.FTDe(this.__wbg_ptr, uu) >>> 0
      }
      vN() {
        return ME.Ffq7(this.__wbg_ptr) >>> 0
      }
      KN() {
        return ME.iQHe(this.__wbg_ptr) >>> 0
      }
      VN(uu, Eu) {
        const ju = ME.Ahr2(this.__wbg_ptr, uu, Eu);
        if (ju[1]) throw cE(ju[0])
      }
      rN() {
        return ME.wOrU(this.__wbg_ptr) >>> 0
      }
      QN() {
        return ME.JZf5(this.__wbg_ptr) >>> 0
      }
      iN() {
        return ME.JUF9(this.__wbg_ptr) >>> 0
      }
      aN(uu, Eu, ju) {
        const su = qE(uu, ME.mNX4),
          Uu = eE,
          Zu = qE(Eu, ME.mNX4),
          Xu = eE,
          lu = ME.GTqp(this.__wbg_ptr, su, Uu, Zu, Xu, ju);
        if (lu[1]) throw cE(lu[0])
      }
      SN() {
        return ME.FEel(this.__wbg_ptr) >>> 0
      }
      mesh(uu, Eu, ju, su, Uu) {
        const Zu = ME.LLuJ(this.__wbg_ptr, uu, Eu, ju, su, Uu);
        if (Zu[2]) throw cE(Zu[1]);
        return Zu[0] >>> 0
      }
      constructor(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu, fu, Cu, bu, cu, Nu, Ou, Yu, hu, Du, gu, Mu) {
        const eu = lE(uu, ME.mNX4),
          Gu = eE,
          pu = CE(Eu, ME.mNX4),
          wu = eE,
          Ju = qE(ju, ME.mNX4),
          du = eE,
          au = fE(su, ME.mNX4),
          Pu = eE,
          ou = fE(Uu, ME.mNX4),
          ku = eE,
          mu = qE(Zu, ME.mNX4),
          vu = eE,
          Ku = qE(Xu, ME.mNX4),
          Vu = eE,
          ru = CE(lu, ME.mNX4),
          Qu = eE,
          iu = CE(qu, ME.mNX4),
          Wu = eE,
          Su = fE(fu, ME.mNX4),
          Fu = eE;
        var Bu = XE(Cu) ? 0 : lE(Cu, ME.mNX4),
          Lu = eE;
        const tu = qE(bu, ME.mNX4),
          xu = eE,
          Tu = fE(cu, ME.mNX4),
          Hu = eE;
        var Au = XE(Nu) ? 0 : fE(Nu, ME.mNX4),
          nu = eE;
        const yu = CE(Ou, ME.mNX4),
          zu = eE,
          Ru = ME.Gw7S(eu, Gu, pu, wu, Ju, du, au, Pu, ou, ku, mu, vu, Ku, Vu, ru, Qu, iu, Wu, Su, Fu, Bu, Lu, tu, xu, Tu, Hu, Au, nu, yu, zu, Yu, hu, Du, gu, Mu);
        if (Ru[2]) throw cE(Ru[1]);
        return this.__wbg_ptr = Ru[0], Iu.register(this, this.__wbg_ptr, this), this
      }
      WN(uu, Eu) {
        const ju = qE(uu, ME.mNX4),
          su = eE,
          Uu = ME.ILXD(this.__wbg_ptr, ju, su, Eu);
        if (Uu[3]) throw cE(Uu[2]);
        var Zu = Tu(Uu[0], Uu[1]).slice();
        return ME.l6az(Uu[0], 1 * Uu[1], 1), Zu
      }
      IN(uu) {
        ME.Zgs0(this.__wbg_ptr, XE(uu) ? 16777215 : uu)
      }
      FN(uu) {
        return ME.TkNW(this.__wbg_ptr, uu) >>> 0
      }
      LN() {
        return ME.QHag(this.__wbg_ptr) >>> 0
      }
      BN() {
        const uu = ME.CDe0(this.__wbg_ptr);
        if (uu[2]) throw cE(uu[1]);
        return 0 !== uu[0]
      }
      tN() {
        return ME.afHv(this.__wbg_ptr) >>> 0
      }
      xN() {
        return ME.mWho(this.__wbg_ptr) >>> 0
      }
    }
    Symbol.dispose && (Cu.prototype[Symbol.dispose] = Cu.prototype.free);
    class bu {
      __destroy_into_raw() {
        const uu = this.__wbg_ptr;
        return this.__wbg_ptr = 0, Fu.unregister(this), uu
      }
      free() {
        const uu = this.__destroy_into_raw();
        ME.Tygy(uu, 0)
      }
      compute(uu, Eu, ju, su) {
        var Uu = XE(su) ? 0 : bE(su, ME.mNX4, ME.MCQ8),
          Zu = eE;
        const Xu = ME.IZTi(this.__wbg_ptr, uu, XE(Eu) ? Number.MAX_SAFE_INTEGER : Eu | 0, ju, Uu, Zu);
        if (Xu[2]) throw cE(Xu[1]);
        return Xu[0] >>> 0
      }
      PN(uu) {
        const Eu = bE(uu, ME.mNX4, ME.MCQ8),
          ju = eE;
        ME.kvqC(this.__wbg_ptr, Eu, ju)
      }
      QN() {
        return ME.CjRl(this.__wbg_ptr) >>> 0
      }
      iN() {
        return ME.h4Nk(this.__wbg_ptr) >>> 0
      }
      TN(uu) {
        const Eu = ME.AESw(this.__wbg_ptr, uu);
        if (Eu[2]) throw cE(Eu[1]);
        return Eu[0] >>> 0
      }
      constructor(uu, Eu, ju, su, Uu, Zu) {
        const Xu = lE(uu, ME.mNX4),
          lu = eE,
          qu = CE(Eu, ME.mNX4),
          fu = eE,
          Cu = qE(ju, ME.mNX4),
          bu = eE,
          cu = fE(su, ME.mNX4),
          Nu = eE,
          Ou = ME.LNUo(Xu, lu, qu, fu, Cu, bu, cu, Nu, Uu, Zu);
        if (Ou[2]) throw cE(Ou[1]);
        return this.__wbg_ptr = Ou[0], Fu.register(this, this.__wbg_ptr, this), this
      }
      LN() {
        return ME.qEmP(this.__wbg_ptr) >>> 0
      }
      BN() {
        const uu = ME.mhmQ(this.__wbg_ptr);
        if (uu[2]) throw cE(uu[1]);
        return 0 !== uu[0]
      }
      tN() {
        return ME.g6v6(this.__wbg_ptr) >>> 0
      }
    }

    function cu() {
      const uu = ME.xJCt();
      var Eu = xu(uu[0], uu[1]).slice();
      return ME.l6az(uu[0], 4 * uu[1], 4), Eu
    }

    function Nu(uu, Eu) {
      let ju, su;
      try {
        const Uu = lE(uu, ME.mNX4),
          Zu = eE,
          Xu = bE(Eu, ME.mNX4, ME.MCQ8),
          lu = eE,
          qu = ME.MNmd(Uu, Zu, Xu, lu);
        return ju = qu[0], su = qu[1], yu(qu[0], qu[1])
      } finally {
        ME.l6az(ju, su, 1)
      }
    }

    function Ou() {
      const uu = ME.TSvS();
      var Eu = xu(uu[0], uu[1]).slice();
      return ME.l6az(uu[0], 4 * uu[1], 4), Eu
    }

    function Yu(uu) {
      return 0 !== ME.XhAm(uu)
    }

    function hu(uu, Eu) {
      const ju = bE(uu, ME.mNX4, ME.MCQ8),
        su = eE,
        Uu = ME.LYda(ju, su, Eu);
      if (Uu[1]) throw cE(Uu[0])
    }

    function Du() {
      ME.DLLv()
    }

    function gu() {
      return ME.beYb() >>> 0
    }

    function Mu(uu) {
      return 0 !== ME.AB3O(uu)
    }

    function eu(uu) {
      return 0 !== ME.IcAt(uu)
    }

    function Gu(uu) {
      ME.qKcL(uu)
    }

    function pu() {
      return ME.PEAC() >>> 0
    }

    function wu() {
      return ME.OBa9() >>> 0
    }

    function Ju() {
      return 0 !== ME.wqen()
    }

    function du() {
      const uu = ME.CPPk();
      var Eu = xu(uu[0], uu[1]).slice();
      return ME.l6az(uu[0], 4 * uu[1], 4), Eu
    }

    function au() {
      const uu = ME.n1sW();
      var Eu = xu(uu[0], uu[1]).slice();
      return ME.l6az(uu[0], 4 * uu[1], 4), Eu
    }

    function Pu() {
      const uu = ME.WHkT();
      var Eu = xu(uu[0], uu[1]).slice();
      return ME.l6az(uu[0], 4 * uu[1], 4), Eu
    }

    function ou() {
      return ME.xF2t() >>> 0
    }

    function ku() {
      ME.um1L()
    }

    function mu() {
      let uu, Eu;
      try {
        const ju = ME.HmUp();
        return uu = ju[0], Eu = ju[1], yu(ju[0], ju[1])
      } finally {
        ME.l6az(uu, Eu, 1)
      }
    }

    function vu(uu) {
      ME.jIIA(Bu(uu))
    }

    function Ku() {
      return {
        __proto__: null,
        AvV1: {
          __proto__: null,
          HQKE: function(uu, Eu) {
            return Bu(Error(yu(uu, Eu)))
          },
          b408: function(uu, Eu) {
            throw new Error(yu(uu, Eu))
          },
          onBg: function(uu) {
            sE(uu).call()
          },
          qXVW: function(uu, Eu) {
            console.error(yu(uu, Eu))
          },
          p1PJ: function() {
            return performance.now()
          },
          jtDU: function(uu) {
            cE(uu)
          }
        }
      }
    }
    Symbol.dispose && (bu.prototype[Symbol.dispose] = bu.prototype.free);
    const Vu = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((uu => ME.nusS(uu, 1))),
      ru = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((uu => ME.wB2j(uu, 1))),
      Qu = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((uu => ME.lL7U(uu, 1))),
      iu = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((uu => ME.KsCa(uu, 1))),
      Wu = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((uu => ME.NjWJ(uu, 1))),
      Su = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((uu => ME.P56x(uu, 1))),
      Iu = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((uu => ME.ao7z(uu, 1))),
      Fu = "undefined" === typeof FinalizationRegistry ? {
        register: () => {},
        unregister: () => {}
      } : new FinalizationRegistry((uu => ME.Tygy(uu, 1)));

    function Bu(uu) {
      ZE === UE.length && UE.push(UE.length + 1);
      const Eu = ZE;
      return ZE = UE[Eu], UE[Eu] = uu, Eu
    }

    function Lu(uu, Eu) {
      if (!(uu instanceof Eu)) throw new Error(`expected instance of ${Eu.name}`)
    }

    function tu(uu, Eu) {
      return uu >>>= 0, Au().subarray(uu / 8, uu / 8 + Eu)
    }

    function xu(uu, Eu) {
      return uu >>>= 0, uE().subarray(uu / 4, uu / 4 + Eu)
    }

    function Tu(uu, Eu) {
      return uu >>>= 0, jE().subarray(uu / 1, uu / 1 + Eu)
    }
    let Hu = null;

    function Au() {
      return null !== Hu && 0 !== Hu.byteLength || (Hu = new Float64Array(ME.memory.buffer)), Hu
    }
    let nu = null;

    function yu(uu, Eu) {
      return function(uu, Eu) {
        YE += Eu, YE >= OE && (NE = new TextDecoder("utf-8", {
          ignoreBOM: !0,
          fatal: !0
        }), NE.decode(), YE = Eu);
        return NE.decode(jE().subarray(uu, uu + Eu))
      }(uu >>> 0, Eu)
    }
    let zu = null;
    let Ru = null;

    function uE() {
      return null !== Ru && 0 !== Ru.byteLength || (Ru = new Uint32Array(ME.memory.buffer)), Ru
    }
    let EE = null;

    function jE() {
      return null !== EE && 0 !== EE.byteLength || (EE = new Uint8Array(ME.memory.buffer)), EE
    }

    function sE(uu) {
      return UE[uu]
    }
    let UE = new Array(1024).fill(void 0);
    UE.push(void 0, null, !0, !1);
    let ZE = UE.length;

    function XE(uu) {
      return void 0 === uu || null === uu
    }

    function lE(uu, Eu) {
      const ju = Eu(2 * uu.length, 2) >>> 0;
      return (null !== zu && 0 !== zu.byteLength || (zu = new Uint16Array(ME.memory.buffer)), zu).set(uu, ju / 2), eE = uu.length, ju
    }

    function qE(uu, Eu) {
      const ju = Eu(4 * uu.length, 4) >>> 0;
      return uE().set(uu, ju / 4), eE = uu.length, ju
    }

    function fE(uu, Eu) {
      const ju = Eu(1 * uu.length, 1) >>> 0;
      return jE().set(uu, ju / 1), eE = uu.length, ju
    }

    function CE(uu, Eu) {
      const ju = Eu(8 * uu.length, 8) >>> 0;
      return Au().set(uu, ju / 8), eE = uu.length, ju
    }

    function bE(uu, Eu, ju) {
      if (void 0 === ju) {
        const ju = hE.encode(uu),
          su = Eu(ju.length, 1) >>> 0;
        return jE().subarray(su, su + ju.length).set(ju), eE = ju.length, su
      }
      let su = uu.length,
        Uu = Eu(su, 1) >>> 0;
      const Zu = jE();
      let Xu = 0;
      for (; Xu < su; Xu++) {
        const Eu = uu.charCodeAt(Xu);
        if (Eu > 127) break;
        Zu[Uu + Xu] = Eu
      }
      if (Xu !== su) {
        0 !== Xu && (uu = uu.slice(Xu)), Uu = ju(Uu, su, su = Xu + 3 * uu.length, 1) >>> 0;
        const Eu = jE().subarray(Uu + Xu, Uu + su);
        Xu += hE.encodeInto(uu, Eu).written, Uu = ju(Uu, su, Xu, 1) >>> 0
      }
      return eE = Xu, Uu
    }

    function cE(uu) {
      const Eu = sE(uu);
      return function(uu) {
        uu < 1028 || (UE[uu] = ZE, ZE = uu)
      }(uu), Eu
    }
    let NE = new TextDecoder("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    NE.decode();
    const OE = 2146435072;
    let YE = 0;
    const hE = new TextEncoder;
    "encodeInto" in hE || (hE.encodeInto = function(uu, Eu) {
      const ju = hE.encode(uu);
      return Eu.set(ju), {
        read: uu.length,
        written: ju.length
      }
    });
    let DE, gE, ME, eE = 0;

    function GE(uu, Eu) {
      return gE = uu, ME = uu.exports, DE = Eu, Hu = null, nu = null, zu = null, Ru = null, EE = null, ME.QppY(), ME
    }

    function pE(uu) {
      if (void 0 !== ME) return ME;
      void 0 !== uu && (Object.getPrototypeOf(uu) === Object.prototype ? ({
        module: uu
      } = uu) : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
      const Eu = Ku();
      uu instanceof WebAssembly.Module || (uu = new WebAssembly.Module(uu));
      return GE(new WebAssembly.Instance(uu, Eu), uu)
    }
    async function wE(uu) {
      if (void 0 !== ME) return ME;
      void 0 !== uu && (Object.getPrototypeOf(uu) === Object.prototype ? ({
        module_or_path: uu
      } = uu) : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
      const Eu = Ku();
      ("string" === typeof uu || "function" === typeof Request && uu instanceof Request || "function" === typeof URL && uu instanceof URL) && (uu = fetch(uu));
      const {
        instance: ju,
        module: su
      } = await async function(uu, Eu) {
        if ("function" === typeof Response && uu instanceof Response) {
          if (!uu.ok) throw new Error(`failed to fetch Wasm: ${uu.status} ${uu.statusText} fetching '${uu.url}'`);
          if ("function" === typeof WebAssembly.instantiateStreaming) try {
            return await WebAssembly.instantiateStreaming(uu, Eu)
          } catch (ju) {
            if (! function(uu) {
                switch (uu) {
                  case "basic":
                  case "cors":
                  case "default":
                    return !0
                }
                return !1
              }(uu.type) || "application/wasm" === uu.headers.get("Content-Type")) throw ju;
            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", ju)
          }
          const su = await uu.arrayBuffer();
          return await WebAssembly.instantiate(su, Eu)
        } {
          const ju = await WebAssembly.instantiate(uu, Eu);
          return ju instanceof WebAssembly.Instance ? {
            instance: ju,
            module: uu
          } : ju
        }
      }(await uu, Eu);
      return GE(ju, su)
    }
  },
  36703: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Xu,
      e: () => lu,
      f: () => qu
    });
    var su = ju(36711),
      Uu = ju(3017),
      Zu = ju(36713);
    const Xu = {
      name: Uu.e,
      url: () => new ju.U(ju(36716)),
      init: su.default,
      bindings: su
    };

    function lu() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xu,
        Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Xu,
        ju = arguments.length > 2 ? arguments[2] : void 0;
      return (0, Zu.o)(uu, Eu, ju)
    }

    function qu(uu) {
      return (0, Uu.O)((() => uu), su, Xu)
    }
  },
  36691: (uu, Eu, ju) => {
    function su(uu, Eu) {
      return new Error(`${uu}: ${Eu instanceof Error?`${Eu.name}: ${Eu.message}`:String(Eu)}`, {
        cause: Eu
      })
    }
    ju.d(Eu, {
      e: () => su
    })
  },
  36687: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Xu,
      f: () => qu
    });
    var su = ju(3020),
      Uu = ju(6818),
      Zu = ju(36691);

    function Xu() {
      return new URL(new ju.U(ju(36697)).href, globalThis.location?.href).href
    }
    let lu = null;

    function qu() {
      return lu ??= (async () => (0, su.I)(new URL(Xu()), (0, Uu.b)("bloxd_wasm_textures")))().catch((uu => {
        throw (0, Zu.e)((0, su.L)(uu), uu)
      })), lu
    }
  },
  36670: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => su,
      h: () => Zu,
      i: () => qu,
      j: () => Xu,
      n: () => Uu
    });
    const su = /^alloc_failed (\d+) bytes$/;

    function Uu(uu, Eu) {
      return Zu(uu, Eu) ? `trap=alloc_failed ${Eu} bytes` : `trap=${uu}`
    }

    function Zu(uu, Eu) {
      return "unreachable" === uu && Eu > 0
    }

    function Xu(uu, Eu, ju) {
      const su = function(uu) {
        return uu instanceof WebAssembly.RuntimeError ? /unreachable/i.test(uu.message) ? "unreachable" : /out of bounds/i.test(uu.message) ? "out_of_bounds" : "runtime_error" : (uu instanceof RangeError || uu instanceof Error && "InternalError" === uu.name) && /call stack|recursion/i.test(uu.message) ? "stack_overflow" : "js_error"
      }(uu);
      if ("unreachable" !== su) return {
        kind: su,
        panic: null,
        refusedBytes: 0
      };
      const Uu = Eu(),
        Zu = ju();
      return {
        kind: su,
        panic: Zu > 0 ? null : Uu,
        refusedBytes: Zu
      }
    }
    const lu = 300;

    function qu(uu) {
      return uu.replace(/\s*\n\s*/g, " / ").slice(0, lu)
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);