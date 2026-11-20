export const id = 93;
export const ids = [91, 93];
export const modules = {
  36203: (UU, RU, gU) => {
    function tU(UU, RU, gU, tU) {
      return !(gU && !UU.aimable) && (!RU || UU.gun && "head" !== tU)
    }

    function pU(UU) {
      return Math.max(.1 * UU, 1)
    }

    function EU(UU, RU) {
      return !UU && RU
    }
    gU.d(RU, {
      b: () => EU,
      d: () => pU,
      e: () => tU
    })
  },
  36209: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => TU,
      f: () => PU
    });
    let tU = null;
    const pU = {
        crosshairAccuracy: [],
        turnDamageIndicators: []
      },
      EU = {
        crosshairAccuracy: UU => {
          const RU = pU.crosshairAccuracy.at(-1);
          RU ? RU.hook(UU) : tU = UU
        },
        turnDamageIndicators: UU => {
          var RU;
          null === (RU = pU.turnDamageIndicators.at(-1)) || void 0 === RU || RU.hook(UU)
        }
      };

    function PU(UU, RU) {
      const gU = {
          hook: RU
        },
        PU = pU[UU];
      if (PU.push(gU), "crosshairAccuracy" === UU && null !== tU) {
        const UU = tU;
        tU = null, EU.crosshairAccuracy(UU)
      }
      return () => {
        const UU = PU.indexOf(gU); - 1 !== UU && PU.splice(UU, 1)
      }
    }

    function TU() {
      return EU
    }
  },
  4512: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      Howl: () => pU.Howl,
      Howler: () => pU.Howler,
      iosAudio: () => qU,
      musicOutput: () => QU,
      readyAudioContext: () => eU
    });
    var tU, pU = gU(4518),
      EU = gU(96);
    const PU = pU.Howler;
    let TU;

    function qU() {
      return TU ??= "ios" === (0, EU.getOperatingSystem)(), TU
    }

    function KU() {
      var UU, RU;
      if (PU.ctx || !PU.usingWebAudio || "undefined" === typeof AudioContext || !qU()) return;
      const gU = navigator.audioSession;
      let tU;
      "auto" === (null === gU || void 0 === gU ? void 0 : gU.type) && (gU.type = "ambient");
      try {
        tU = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const pU = tU.createGain();
      pU.gain.setValueAtTime(PU._muted ? 0 : null !== (UU = PU._volume) && void 0 !== UU ? UU : 1, tU.currentTime), pU.connect(tU.destination), PU.ctx = tU, PU.masterGain = pU, null === (RU = PU._setup) || void 0 === RU || RU.call(PU)
    }
    PU._mobileUnloaded = !0;
    const cU = PU.volume.bind(pU.Howler);
    PU.volume = function() {
      return KU(), cU(...arguments)
    };
    const GU = PU.mute.bind(pU.Howler);
    PU.mute = UU => (KU(), GU(UU));
    const jU = pU.Howl.prototype,
      uU = jU.init;
    jU.init = function(UU) {
      return KU(), uU.call(this, UU)
    };
    let CU = 0;
    const hU = null === (tU = PU._autoSuspend) || void 0 === tU ? void 0 : tU.bind(pU.Howler);

    function QU() {
      eU();
      const {
        ctx: UU,
        masterGain: RU
      } = PU;
      return UU && RU ? {
        ctx: UU,
        destination: RU,
        holdAwake: UU => {
          var RU, gU;
          (CU += UU ? 1 : -1, UU) ? null === (RU = PU._autoResume) || void 0 === RU || RU.call(PU): null === (gU = PU._autoSuspend) || void 0 === gU || gU.call(PU)
        },
        wake: () => {
          var RU;
          "running" !== UU.state && (null === (RU = PU._autoResume) || void 0 === RU || RU.call(PU), UU.resume().catch((() => {})))
        }
      } : null
    }

    function eU() {
      var UU;
      (PU.volume(), PU.ctx && PU.autoUnlock) && (null === (UU = PU._unlockAudio) || void 0 === UU || UU.call(PU))
    }
    hU && (PU._autoSuspend = () => CU > 0 ? pU.Howler : hU())
  },
  36319: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => PU,
      f: () => pU,
      g: () => tU
    });

    function tU(UU) {
      return UU.replace(/[_\-\s]*\d+$/, "") || UU
    }

    function pU(UU, RU, gU) {
      return gU <= 0 ? 0 : UU * gU / Math.max(RU, gU)
    }

    function EU(UU, RU) {
      const gU = UU.getDurationMs();
      return gU > 0 ? UU.loudness * Math.max(0, 1 - (RU - UU.startMs) / gU) : 0
    }
    class PU {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
          RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
        this.maxVoices = UU, this.maxPerGroup = RU, this.voices = []
      }
      admit(UU) {
        if (this.voices = this.voices.filter((UU => UU.isAlive())), null !== UU.group) {
          const RU = this.voices.filter((RU => RU.group === UU.group));
          if (RU.length >= this.maxPerGroup && !this.dropLeastWorth(RU, UU)) return !1
        }
        return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, UU)) && (this.voices.push(UU), !0)
      }
      dropLeastWorth(UU, RU) {
        let gU = null,
          tU = 1 / 0;
        for (const pU of UU) {
          if (!pU.canStop()) continue;
          const UU = EU(pU, RU.startMs);
          UU < tU && (gU = pU, tU = UU)
        }
        return !(!gU || RU.loudness < tU) && (this.voices.splice(this.voices.indexOf(gU), 1), gU.stop(), !0)
      }
    }
  },
  36329: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => EU,
      d: () => PU,
      e: () => tU
    });
    class tU {
      constructor(UU) {
        this.multipliers = {}, this._onUpdate = void 0, this._onUpdate = UU
      }
      setMultiplierType(UU, RU) {
        var gU;
        this.multipliers[UU] = RU, null === (gU = this._onUpdate) || void 0 === gU || gU.call(this)
      }
      removeMultiplier(UU) {
        var RU;
        delete this.multipliers[UU], null === (RU = this._onUpdate) || void 0 === RU || RU.call(this)
      }
      getMultiplierType(UU) {
        return this.multipliers[UU]
      }
      getTotalMultipliedVal() {
        let UU = 1;
        for (const RU in this.multipliers) UU *= this.multipliers[RU];
        return UU
      }
    }
    class pU {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.booleans = {}, this._onUpdate = void 0, this._onUpdate = UU
      }
      setBooleanType(UU, RU) {
        const gU = this._getTotalBooleanVal();
        this.booleans[UU] = !!RU;
        const tU = this.getTotalBooleanVal();
        var pU;
        tU !== gU && (null === (pU = this._onUpdate) || void 0 === pU || pU.call(this, tU, this.booleans));
        return tU
      }
      removeBoolean(UU) {
        const RU = this._getTotalBooleanVal();
        delete this.booleans[UU];
        const gU = this._getTotalBooleanVal();
        var tU;
        null !== gU && gU !== RU && (null === (tU = this._onUpdate) || void 0 === tU || tU.call(this, gU, this.booleans));
        return null !== gU && void 0 !== gU && gU
      }
      getBooleanType(UU) {
        return this.booleans[UU]
      }
      getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
      forceUpdate() {
        var UU;
        null === (UU = this._onUpdate) || void 0 === UU || UU.call(this, this.getTotalBooleanVal(), this.booleans)
      }
      _getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
    }
    class EU extends pU {
      getTotalBooleanVal() {
        const UU = this._getTotalBooleanVal();
        if (null === UU) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return UU
      }
      _getTotalBooleanVal() {
        let UU = !1,
          RU = !0;
        for (const gU in this.booleans) UU = !0, RU &&= this.booleans[gU];
        return UU ? RU : null
      }
    }
    class PU extends pU {
      getTotalBooleanVal() {
        const UU = this._getTotalBooleanVal();
        if (null === UU) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return UU
      }
      _getTotalBooleanVal() {
        let UU = !1,
          RU = !1;
        for (const gU in this.booleans) UU = !0, RU ||= this.booleans[gU];
        return UU ? RU : null
      }
    }
  },
  37335: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => GU,
      e: () => PU
    });
    var tU = gU(9101),
      pU = gU(9078),
      EU = gU(311);
    const PU = {
      "Maple Door": {
        positions: [{
          block: "Maple Door",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Maple Door Top",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Maple Door|meta|rot1|open": {
        positions: [{
          block: "Maple Door|meta|rot1|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Maple Door Top|meta|rot1|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Maple Door|meta|rot2|closed": {
        positions: [{
          block: "Maple Door|meta|rot2|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Maple Door Top|meta|rot2|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Maple Door|meta|rot2|open": {
        positions: [{
          block: "Maple Door|meta|rot2|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Maple Door Top|meta|rot2|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Maple Door|meta|rot3|closed": {
        positions: [{
          block: "Maple Door|meta|rot3|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Maple Door Top|meta|rot3|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Maple Door|meta|rot3|open": {
        positions: [{
          block: "Maple Door|meta|rot3|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Maple Door Top|meta|rot3|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Maple Door|meta|rot4|closed": {
        positions: [{
          block: "Maple Door|meta|rot4|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Maple Door Top|meta|rot4|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Maple Door|meta|rot4|open": {
        positions: [{
          block: "Maple Door|meta|rot4|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Maple Door Top|meta|rot4|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Pine Door": {
        positions: [{
          block: "Pine Door",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Pine Door Top",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Pine Door|meta|rot1|open": {
        positions: [{
          block: "Pine Door|meta|rot1|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Pine Door Top|meta|rot1|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Pine Door|meta|rot2|closed": {
        positions: [{
          block: "Pine Door|meta|rot2|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Pine Door Top|meta|rot2|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Pine Door|meta|rot2|open": {
        positions: [{
          block: "Pine Door|meta|rot2|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Pine Door Top|meta|rot2|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Pine Door|meta|rot3|closed": {
        positions: [{
          block: "Pine Door|meta|rot3|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Pine Door Top|meta|rot3|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Pine Door|meta|rot3|open": {
        positions: [{
          block: "Pine Door|meta|rot3|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Pine Door Top|meta|rot3|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Pine Door|meta|rot4|closed": {
        positions: [{
          block: "Pine Door|meta|rot4|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Pine Door Top|meta|rot4|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Pine Door|meta|rot4|open": {
        positions: [{
          block: "Pine Door|meta|rot4|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Pine Door Top|meta|rot4|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Plum Door": {
        positions: [{
          block: "Plum Door",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Plum Door Top",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Plum Door|meta|rot1|open": {
        positions: [{
          block: "Plum Door|meta|rot1|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Plum Door Top|meta|rot1|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Plum Door|meta|rot2|closed": {
        positions: [{
          block: "Plum Door|meta|rot2|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Plum Door Top|meta|rot2|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Plum Door|meta|rot2|open": {
        positions: [{
          block: "Plum Door|meta|rot2|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Plum Door Top|meta|rot2|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Plum Door|meta|rot3|closed": {
        positions: [{
          block: "Plum Door|meta|rot3|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Plum Door Top|meta|rot3|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Plum Door|meta|rot3|open": {
        positions: [{
          block: "Plum Door|meta|rot3|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Plum Door Top|meta|rot3|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Plum Door|meta|rot4|closed": {
        positions: [{
          block: "Plum Door|meta|rot4|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Plum Door Top|meta|rot4|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Plum Door|meta|rot4|open": {
        positions: [{
          block: "Plum Door|meta|rot4|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Plum Door Top|meta|rot4|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Cedar Door": {
        positions: [{
          block: "Cedar Door",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Cedar Door Top",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Cedar Door|meta|rot1|open": {
        positions: [{
          block: "Cedar Door|meta|rot1|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Cedar Door Top|meta|rot1|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Cedar Door|meta|rot2|closed": {
        positions: [{
          block: "Cedar Door|meta|rot2|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Cedar Door Top|meta|rot2|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Cedar Door|meta|rot2|open": {
        positions: [{
          block: "Cedar Door|meta|rot2|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Cedar Door Top|meta|rot2|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Cedar Door|meta|rot3|closed": {
        positions: [{
          block: "Cedar Door|meta|rot3|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Cedar Door Top|meta|rot3|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Cedar Door|meta|rot3|open": {
        positions: [{
          block: "Cedar Door|meta|rot3|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Cedar Door Top|meta|rot3|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Cedar Door|meta|rot4|closed": {
        positions: [{
          block: "Cedar Door|meta|rot4|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Cedar Door Top|meta|rot4|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Cedar Door|meta|rot4|open": {
        positions: [{
          block: "Cedar Door|meta|rot4|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Cedar Door Top|meta|rot4|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Aspen Door": {
        positions: [{
          block: "Aspen Door",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Aspen Door Top",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Aspen Door|meta|rot1|open": {
        positions: [{
          block: "Aspen Door|meta|rot1|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Aspen Door Top|meta|rot1|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Aspen Door|meta|rot2|closed": {
        positions: [{
          block: "Aspen Door|meta|rot2|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Aspen Door Top|meta|rot2|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Aspen Door|meta|rot2|open": {
        positions: [{
          block: "Aspen Door|meta|rot2|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Aspen Door Top|meta|rot2|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Aspen Door|meta|rot3|closed": {
        positions: [{
          block: "Aspen Door|meta|rot3|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Aspen Door Top|meta|rot3|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Aspen Door|meta|rot3|open": {
        positions: [{
          block: "Aspen Door|meta|rot3|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Aspen Door Top|meta|rot3|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Aspen Door|meta|rot4|closed": {
        positions: [{
          block: "Aspen Door|meta|rot4|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Aspen Door Top|meta|rot4|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Aspen Door|meta|rot4|open": {
        positions: [{
          block: "Aspen Door|meta|rot4|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Aspen Door Top|meta|rot4|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Jungle Door": {
        positions: [{
          block: "Jungle Door",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Jungle Door Top",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Jungle Door|meta|rot1|open": {
        positions: [{
          block: "Jungle Door|meta|rot1|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Jungle Door Top|meta|rot1|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Jungle Door|meta|rot2|closed": {
        positions: [{
          block: "Jungle Door|meta|rot2|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Jungle Door Top|meta|rot2|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Jungle Door|meta|rot2|open": {
        positions: [{
          block: "Jungle Door|meta|rot2|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Jungle Door Top|meta|rot2|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Jungle Door|meta|rot3|closed": {
        positions: [{
          block: "Jungle Door|meta|rot3|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Jungle Door Top|meta|rot3|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Jungle Door|meta|rot3|open": {
        positions: [{
          block: "Jungle Door|meta|rot3|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Jungle Door Top|meta|rot3|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Jungle Door|meta|rot4|closed": {
        positions: [{
          block: "Jungle Door|meta|rot4|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Jungle Door Top|meta|rot4|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Jungle Door|meta|rot4|open": {
        positions: [{
          block: "Jungle Door|meta|rot4|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Jungle Door Top|meta|rot4|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Palm Door": {
        positions: [{
          block: "Palm Door",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Palm Door Top",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Palm Door|meta|rot1|open": {
        positions: [{
          block: "Palm Door|meta|rot1|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Palm Door Top|meta|rot1|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Palm Door|meta|rot2|closed": {
        positions: [{
          block: "Palm Door|meta|rot2|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Palm Door Top|meta|rot2|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Palm Door|meta|rot2|open": {
        positions: [{
          block: "Palm Door|meta|rot2|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Palm Door Top|meta|rot2|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Palm Door|meta|rot3|closed": {
        positions: [{
          block: "Palm Door|meta|rot3|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Palm Door Top|meta|rot3|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Palm Door|meta|rot3|open": {
        positions: [{
          block: "Palm Door|meta|rot3|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Palm Door Top|meta|rot3|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Palm Door|meta|rot4|closed": {
        positions: [{
          block: "Palm Door|meta|rot4|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Palm Door Top|meta|rot4|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Palm Door|meta|rot4|open": {
        positions: [{
          block: "Palm Door|meta|rot4|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Palm Door Top|meta|rot4|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Pear Door": {
        positions: [{
          block: "Pear Door",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Pear Door Top",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Pear Door|meta|rot1|open": {
        positions: [{
          block: "Pear Door|meta|rot1|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Pear Door Top|meta|rot1|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Pear Door|meta|rot2|closed": {
        positions: [{
          block: "Pear Door|meta|rot2|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Pear Door Top|meta|rot2|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Pear Door|meta|rot2|open": {
        positions: [{
          block: "Pear Door|meta|rot2|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Pear Door Top|meta|rot2|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Pear Door|meta|rot3|closed": {
        positions: [{
          block: "Pear Door|meta|rot3|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Pear Door Top|meta|rot3|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Pear Door|meta|rot3|open": {
        positions: [{
          block: "Pear Door|meta|rot3|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Pear Door Top|meta|rot3|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Pear Door|meta|rot4|closed": {
        positions: [{
          block: "Pear Door|meta|rot4|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Pear Door Top|meta|rot4|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Pear Door|meta|rot4|open": {
        positions: [{
          block: "Pear Door|meta|rot4|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Pear Door Top|meta|rot4|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Cherry Door": {
        positions: [{
          block: "Cherry Door",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Cherry Door Top",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Cherry Door|meta|rot1|open": {
        positions: [{
          block: "Cherry Door|meta|rot1|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Cherry Door Top|meta|rot1|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Cherry Door|meta|rot2|closed": {
        positions: [{
          block: "Cherry Door|meta|rot2|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Cherry Door Top|meta|rot2|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Cherry Door|meta|rot2|open": {
        positions: [{
          block: "Cherry Door|meta|rot2|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Cherry Door Top|meta|rot2|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Cherry Door|meta|rot3|closed": {
        positions: [{
          block: "Cherry Door|meta|rot3|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Cherry Door Top|meta|rot3|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Cherry Door|meta|rot3|open": {
        positions: [{
          block: "Cherry Door|meta|rot3|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Cherry Door Top|meta|rot3|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Cherry Door|meta|rot4|closed": {
        positions: [{
          block: "Cherry Door|meta|rot4|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Cherry Door Top|meta|rot4|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Cherry Door|meta|rot4|open": {
        positions: [{
          block: "Cherry Door|meta|rot4|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Cherry Door Top|meta|rot4|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Spectral Door": {
        positions: [{
          block: "Spectral Door",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Spectral Door Top",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Spectral Door|meta|rot1|open": {
        positions: [{
          block: "Spectral Door|meta|rot1|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Spectral Door Top|meta|rot1|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Spectral Door|meta|rot2|closed": {
        positions: [{
          block: "Spectral Door|meta|rot2|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Spectral Door Top|meta|rot2|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Spectral Door|meta|rot2|open": {
        positions: [{
          block: "Spectral Door|meta|rot2|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Spectral Door Top|meta|rot2|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Spectral Door|meta|rot3|closed": {
        positions: [{
          block: "Spectral Door|meta|rot3|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Spectral Door Top|meta|rot3|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Spectral Door|meta|rot3|open": {
        positions: [{
          block: "Spectral Door|meta|rot3|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Spectral Door Top|meta|rot3|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Spectral Door|meta|rot4|closed": {
        positions: [{
          block: "Spectral Door|meta|rot4|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Spectral Door Top|meta|rot4|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Spectral Door|meta|rot4|open": {
        positions: [{
          block: "Spectral Door|meta|rot4|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Spectral Door Top|meta|rot4|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Mango Door": {
        positions: [{
          block: "Mango Door",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Mango Door Top",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Mango Door|meta|rot1|open": {
        positions: [{
          block: "Mango Door|meta|rot1|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Mango Door Top|meta|rot1|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Mango Door|meta|rot2|closed": {
        positions: [{
          block: "Mango Door|meta|rot2|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Mango Door Top|meta|rot2|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Mango Door|meta|rot2|open": {
        positions: [{
          block: "Mango Door|meta|rot2|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Mango Door Top|meta|rot2|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Mango Door|meta|rot3|closed": {
        positions: [{
          block: "Mango Door|meta|rot3|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Mango Door Top|meta|rot3|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Mango Door|meta|rot3|open": {
        positions: [{
          block: "Mango Door|meta|rot3|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Mango Door Top|meta|rot3|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Mango Door|meta|rot4|closed": {
        positions: [{
          block: "Mango Door|meta|rot4|closed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Mango Door Top|meta|rot4|closed",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Mango Door|meta|rot4|open": {
        positions: [{
          block: "Mango Door|meta|rot4|open",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Mango Door Top|meta|rot4|open",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "White Bed": {
        positions: [{
          block: "White Bed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_White Bed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "White Bed|meta|rot2": {
        positions: [{
          block: "White Bed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_White Bed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "White Bed|meta|rot3": {
        positions: [{
          block: "White Bed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_White Bed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "White Bed|meta|rot4": {
        positions: [{
          block: "White Bed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_White Bed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Orange Bed": {
        positions: [{
          block: "Orange Bed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Orange Bed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Orange Bed|meta|rot2": {
        positions: [{
          block: "Orange Bed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Orange Bed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Orange Bed|meta|rot3": {
        positions: [{
          block: "Orange Bed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Orange Bed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Orange Bed|meta|rot4": {
        positions: [{
          block: "Orange Bed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Orange Bed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Magenta Bed": {
        positions: [{
          block: "Magenta Bed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Magenta Bed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Magenta Bed|meta|rot2": {
        positions: [{
          block: "Magenta Bed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Magenta Bed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Magenta Bed|meta|rot3": {
        positions: [{
          block: "Magenta Bed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Magenta Bed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Magenta Bed|meta|rot4": {
        positions: [{
          block: "Magenta Bed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Magenta Bed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Light Blue Bed": {
        positions: [{
          block: "Light Blue Bed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Light Blue Bed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Light Blue Bed|meta|rot2": {
        positions: [{
          block: "Light Blue Bed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Light Blue Bed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Light Blue Bed|meta|rot3": {
        positions: [{
          block: "Light Blue Bed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Light Blue Bed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Light Blue Bed|meta|rot4": {
        positions: [{
          block: "Light Blue Bed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Light Blue Bed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Yellow Bed": {
        positions: [{
          block: "Yellow Bed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Yellow Bed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Yellow Bed|meta|rot2": {
        positions: [{
          block: "Yellow Bed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Yellow Bed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Yellow Bed|meta|rot3": {
        positions: [{
          block: "Yellow Bed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Yellow Bed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Yellow Bed|meta|rot4": {
        positions: [{
          block: "Yellow Bed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Yellow Bed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Lime Bed": {
        positions: [{
          block: "Lime Bed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Lime Bed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Lime Bed|meta|rot2": {
        positions: [{
          block: "Lime Bed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Lime Bed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Lime Bed|meta|rot3": {
        positions: [{
          block: "Lime Bed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Lime Bed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Lime Bed|meta|rot4": {
        positions: [{
          block: "Lime Bed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Lime Bed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Pink Bed": {
        positions: [{
          block: "Pink Bed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Pink Bed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Pink Bed|meta|rot2": {
        positions: [{
          block: "Pink Bed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Pink Bed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Pink Bed|meta|rot3": {
        positions: [{
          block: "Pink Bed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Pink Bed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Pink Bed|meta|rot4": {
        positions: [{
          block: "Pink Bed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Pink Bed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Gray Bed": {
        positions: [{
          block: "Gray Bed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Gray Bed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Gray Bed|meta|rot2": {
        positions: [{
          block: "Gray Bed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Gray Bed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Gray Bed|meta|rot3": {
        positions: [{
          block: "Gray Bed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Gray Bed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Gray Bed|meta|rot4": {
        positions: [{
          block: "Gray Bed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Gray Bed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Light Gray Bed": {
        positions: [{
          block: "Light Gray Bed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Light Gray Bed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Light Gray Bed|meta|rot2": {
        positions: [{
          block: "Light Gray Bed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Light Gray Bed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Light Gray Bed|meta|rot3": {
        positions: [{
          block: "Light Gray Bed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Light Gray Bed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Light Gray Bed|meta|rot4": {
        positions: [{
          block: "Light Gray Bed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Light Gray Bed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Cyan Bed": {
        positions: [{
          block: "Cyan Bed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Cyan Bed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Cyan Bed|meta|rot2": {
        positions: [{
          block: "Cyan Bed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Cyan Bed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Cyan Bed|meta|rot3": {
        positions: [{
          block: "Cyan Bed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Cyan Bed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Cyan Bed|meta|rot4": {
        positions: [{
          block: "Cyan Bed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Cyan Bed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Purple Bed": {
        positions: [{
          block: "Purple Bed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Purple Bed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Purple Bed|meta|rot2": {
        positions: [{
          block: "Purple Bed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Purple Bed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Purple Bed|meta|rot3": {
        positions: [{
          block: "Purple Bed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Purple Bed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Purple Bed|meta|rot4": {
        positions: [{
          block: "Purple Bed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Purple Bed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Blue Bed": {
        positions: [{
          block: "Blue Bed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Blue Bed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Blue Bed|meta|rot2": {
        positions: [{
          block: "Blue Bed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Blue Bed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Blue Bed|meta|rot3": {
        positions: [{
          block: "Blue Bed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Blue Bed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Blue Bed|meta|rot4": {
        positions: [{
          block: "Blue Bed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Blue Bed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Brown Bed": {
        positions: [{
          block: "Brown Bed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Brown Bed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Brown Bed|meta|rot2": {
        positions: [{
          block: "Brown Bed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Brown Bed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Brown Bed|meta|rot3": {
        positions: [{
          block: "Brown Bed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Brown Bed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Brown Bed|meta|rot4": {
        positions: [{
          block: "Brown Bed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Brown Bed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Green Bed": {
        positions: [{
          block: "Green Bed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Green Bed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Green Bed|meta|rot2": {
        positions: [{
          block: "Green Bed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Green Bed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Green Bed|meta|rot3": {
        positions: [{
          block: "Green Bed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Green Bed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Green Bed|meta|rot4": {
        positions: [{
          block: "Green Bed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Green Bed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Red Bed": {
        positions: [{
          block: "Red Bed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Red Bed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Red Bed|meta|rot2": {
        positions: [{
          block: "Red Bed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Red Bed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Red Bed|meta|rot3": {
        positions: [{
          block: "Red Bed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Red Bed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Red Bed|meta|rot4": {
        positions: [{
          block: "Red Bed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Red Bed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Black Bed": {
        positions: [{
          block: "Black Bed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Black Bed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Black Bed|meta|rot2": {
        positions: [{
          block: "Black Bed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Black Bed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Black Bed|meta|rot3": {
        positions: [{
          block: "Black Bed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Black Bed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Black Bed|meta|rot4": {
        positions: [{
          block: "Black Bed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Black Bed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Tall Grass": {
        positions: [{
          block: "Tall Grass",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "Tall Grass|Top",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Jungle Tall Grass": {
        positions: [{
          block: "Jungle Tall Grass",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "Jungle Tall Grass|Top",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "White Strongbed": {
        positions: [{
          block: "White Strongbed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_White Strongbed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "White Strongbed|meta|rot2": {
        positions: [{
          block: "White Strongbed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_White Strongbed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "White Strongbed|meta|rot3": {
        positions: [{
          block: "White Strongbed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_White Strongbed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "White Strongbed|meta|rot4": {
        positions: [{
          block: "White Strongbed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_White Strongbed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Orange Strongbed": {
        positions: [{
          block: "Orange Strongbed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Orange Strongbed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Orange Strongbed|meta|rot2": {
        positions: [{
          block: "Orange Strongbed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Orange Strongbed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Orange Strongbed|meta|rot3": {
        positions: [{
          block: "Orange Strongbed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Orange Strongbed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Orange Strongbed|meta|rot4": {
        positions: [{
          block: "Orange Strongbed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Orange Strongbed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Magenta Strongbed": {
        positions: [{
          block: "Magenta Strongbed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Magenta Strongbed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Magenta Strongbed|meta|rot2": {
        positions: [{
          block: "Magenta Strongbed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Magenta Strongbed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Magenta Strongbed|meta|rot3": {
        positions: [{
          block: "Magenta Strongbed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Magenta Strongbed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Magenta Strongbed|meta|rot4": {
        positions: [{
          block: "Magenta Strongbed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Magenta Strongbed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Light Blue Strongbed": {
        positions: [{
          block: "Light Blue Strongbed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Light Blue Strongbed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Light Blue Strongbed|meta|rot2": {
        positions: [{
          block: "Light Blue Strongbed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Light Blue Strongbed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Light Blue Strongbed|meta|rot3": {
        positions: [{
          block: "Light Blue Strongbed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Light Blue Strongbed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Light Blue Strongbed|meta|rot4": {
        positions: [{
          block: "Light Blue Strongbed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Light Blue Strongbed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Yellow Strongbed": {
        positions: [{
          block: "Yellow Strongbed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Yellow Strongbed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Yellow Strongbed|meta|rot2": {
        positions: [{
          block: "Yellow Strongbed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Yellow Strongbed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Yellow Strongbed|meta|rot3": {
        positions: [{
          block: "Yellow Strongbed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Yellow Strongbed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Yellow Strongbed|meta|rot4": {
        positions: [{
          block: "Yellow Strongbed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Yellow Strongbed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Lime Strongbed": {
        positions: [{
          block: "Lime Strongbed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Lime Strongbed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Lime Strongbed|meta|rot2": {
        positions: [{
          block: "Lime Strongbed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Lime Strongbed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Lime Strongbed|meta|rot3": {
        positions: [{
          block: "Lime Strongbed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Lime Strongbed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Lime Strongbed|meta|rot4": {
        positions: [{
          block: "Lime Strongbed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Lime Strongbed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Pink Strongbed": {
        positions: [{
          block: "Pink Strongbed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Pink Strongbed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Pink Strongbed|meta|rot2": {
        positions: [{
          block: "Pink Strongbed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Pink Strongbed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Pink Strongbed|meta|rot3": {
        positions: [{
          block: "Pink Strongbed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Pink Strongbed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Pink Strongbed|meta|rot4": {
        positions: [{
          block: "Pink Strongbed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Pink Strongbed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Gray Strongbed": {
        positions: [{
          block: "Gray Strongbed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Gray Strongbed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Gray Strongbed|meta|rot2": {
        positions: [{
          block: "Gray Strongbed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Gray Strongbed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Gray Strongbed|meta|rot3": {
        positions: [{
          block: "Gray Strongbed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Gray Strongbed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Gray Strongbed|meta|rot4": {
        positions: [{
          block: "Gray Strongbed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Gray Strongbed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Light Gray Strongbed": {
        positions: [{
          block: "Light Gray Strongbed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Light Gray Strongbed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Light Gray Strongbed|meta|rot2": {
        positions: [{
          block: "Light Gray Strongbed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Light Gray Strongbed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Light Gray Strongbed|meta|rot3": {
        positions: [{
          block: "Light Gray Strongbed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Light Gray Strongbed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Light Gray Strongbed|meta|rot4": {
        positions: [{
          block: "Light Gray Strongbed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Light Gray Strongbed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Cyan Strongbed": {
        positions: [{
          block: "Cyan Strongbed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Cyan Strongbed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Cyan Strongbed|meta|rot2": {
        positions: [{
          block: "Cyan Strongbed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Cyan Strongbed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Cyan Strongbed|meta|rot3": {
        positions: [{
          block: "Cyan Strongbed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Cyan Strongbed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Cyan Strongbed|meta|rot4": {
        positions: [{
          block: "Cyan Strongbed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Cyan Strongbed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Purple Strongbed": {
        positions: [{
          block: "Purple Strongbed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Purple Strongbed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Purple Strongbed|meta|rot2": {
        positions: [{
          block: "Purple Strongbed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Purple Strongbed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Purple Strongbed|meta|rot3": {
        positions: [{
          block: "Purple Strongbed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Purple Strongbed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Purple Strongbed|meta|rot4": {
        positions: [{
          block: "Purple Strongbed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Purple Strongbed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Blue Strongbed": {
        positions: [{
          block: "Blue Strongbed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Blue Strongbed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Blue Strongbed|meta|rot2": {
        positions: [{
          block: "Blue Strongbed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Blue Strongbed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Blue Strongbed|meta|rot3": {
        positions: [{
          block: "Blue Strongbed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Blue Strongbed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Blue Strongbed|meta|rot4": {
        positions: [{
          block: "Blue Strongbed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Blue Strongbed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Brown Strongbed": {
        positions: [{
          block: "Brown Strongbed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Brown Strongbed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Brown Strongbed|meta|rot2": {
        positions: [{
          block: "Brown Strongbed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Brown Strongbed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Brown Strongbed|meta|rot3": {
        positions: [{
          block: "Brown Strongbed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Brown Strongbed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Brown Strongbed|meta|rot4": {
        positions: [{
          block: "Brown Strongbed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Brown Strongbed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Green Strongbed": {
        positions: [{
          block: "Green Strongbed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Green Strongbed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Green Strongbed|meta|rot2": {
        positions: [{
          block: "Green Strongbed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Green Strongbed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Green Strongbed|meta|rot3": {
        positions: [{
          block: "Green Strongbed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Green Strongbed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Green Strongbed|meta|rot4": {
        positions: [{
          block: "Green Strongbed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Green Strongbed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Red Strongbed": {
        positions: [{
          block: "Red Strongbed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Red Strongbed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Red Strongbed|meta|rot2": {
        positions: [{
          block: "Red Strongbed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Red Strongbed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Red Strongbed|meta|rot3": {
        positions: [{
          block: "Red Strongbed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Red Strongbed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Red Strongbed|meta|rot4": {
        positions: [{
          block: "Red Strongbed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Red Strongbed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Black Strongbed": {
        positions: [{
          block: "Black Strongbed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Black Strongbed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Black Strongbed|meta|rot2": {
        positions: [{
          block: "Black Strongbed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Black Strongbed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Black Strongbed|meta|rot3": {
        positions: [{
          block: "Black Strongbed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Black Strongbed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Black Strongbed|meta|rot4": {
        positions: [{
          block: "Black Strongbed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Black Strongbed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Leaf Bed": {
        positions: [{
          block: "Leaf Bed",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Leaf Bed Head",
          x: 0,
          y: 0,
          z: -1
        }]
      },
      "Leaf Bed|meta|rot2": {
        positions: [{
          block: "Leaf Bed|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Leaf Bed Head|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }]
      },
      "Leaf Bed|meta|rot3": {
        positions: [{
          block: "Leaf Bed|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Leaf Bed Head|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }]
      },
      "Leaf Bed|meta|rot4": {
        positions: [{
          block: "Leaf Bed|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Leaf Bed Head|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }]
      },
      "Vending Machine": {
        positions: [{
          block: "Vending Machine",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Vending Machine Top",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Vending Machine|meta|rot2": {
        positions: [{
          block: "Vending Machine|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Vending Machine Top|meta|rot2",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Vending Machine|meta|rot3": {
        positions: [{
          block: "Vending Machine|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Vending Machine Top|meta|rot3",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      "Vending Machine|meta|rot4": {
        positions: [{
          block: "Vending Machine|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Vending Machine Top|meta|rot4",
          x: 0,
          y: 1,
          z: 0
        }]
      },
      ...TU("White"),
      ...TU("Orange"),
      ...TU("Magenta"),
      ...TU("Light Blue"),
      ...TU("Yellow"),
      ...TU("Lime"),
      ...TU("Pink"),
      ...TU("Gray"),
      ...TU("Light Gray"),
      ...TU("Cyan"),
      ...TU("Purple"),
      ...TU("Blue"),
      ...TU("Brown"),
      ...TU("Green"),
      ...TU("Red"),
      ...TU("Black"),
      ...TU("Draugr"),
      ...TU("Skull"),
      ...TU("Rainbow"),
      ...qU("Sheep"),
      ...qU("Cow"),
      ...qU("Pig"),
      ...qU("Horse"),
      ...qU("Camel"),
      ...qU("Wolf"),
      ...qU("Deer"),
      ...qU("Wildcat"),
      ...KU("Radar"),
      ...KU("Inactive Radar"),
      ...KU("Active Radar"),
      ...cU("Magenta"),
      ...cU("Light Gray"),
      ...cU("Red"),
      ...cU("White"),
      ...cU("Orange"),
      ...cU("Light Blue"),
      ...cU("Yellow"),
      ...cU("Lime"),
      ...cU("Pink"),
      ...cU("Gray"),
      ...cU("Cyan"),
      ...cU("Purple"),
      ...cU("Blue"),
      ...cU("Brown"),
      ...cU("Green"),
      ...cU("Black"),
      "Auto Miner": {
        positions: [{
          block: "Auto Miner",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Auto Miner Body",
          x: 0,
          y: 1,
          z: -1
        }, {
          block: "_Auto Miner Drill Front",
          x: 0,
          y: 1,
          z: -2
        }, {
          block: "_Auto Miner Drill Back",
          x: 0,
          y: 1,
          z: 0
        }, {
          block: "_Auto Miner Foot Front",
          x: 0,
          y: 0,
          z: -2
        }]
      },
      "Auto Miner|meta|rot2": {
        positions: [{
          block: "Auto Miner|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Auto Miner Body|meta|rot2",
          x: -1,
          y: 1,
          z: 0
        }, {
          block: "_Auto Miner Drill Front|meta|rot2",
          x: -2,
          y: 1,
          z: 0
        }, {
          block: "_Auto Miner Drill Back|meta|rot2",
          x: 0,
          y: 1,
          z: 0
        }, {
          block: "_Auto Miner Foot Front|meta|rot2",
          x: -2,
          y: 0,
          z: 0
        }]
      },
      "Auto Miner|meta|rot3": {
        positions: [{
          block: "Auto Miner|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Auto Miner Body|meta|rot3",
          x: 0,
          y: 1,
          z: 1
        }, {
          block: "_Auto Miner Drill Front|meta|rot3",
          x: 0,
          y: 1,
          z: 2
        }, {
          block: "_Auto Miner Drill Back|meta|rot3",
          x: 0,
          y: 1,
          z: 0
        }, {
          block: "_Auto Miner Foot Front|meta|rot3",
          x: 0,
          y: 0,
          z: 2
        }]
      },
      "Auto Miner|meta|rot4": {
        positions: [{
          block: "Auto Miner|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Auto Miner Body|meta|rot4",
          x: 1,
          y: 1,
          z: 0
        }, {
          block: "_Auto Miner Drill Front|meta|rot4",
          x: 2,
          y: 1,
          z: 0
        }, {
          block: "_Auto Miner Drill Back|meta|rot4",
          x: 0,
          y: 1,
          z: 0
        }, {
          block: "_Auto Miner Foot Front|meta|rot4",
          x: 2,
          y: 0,
          z: 0
        }]
      },
      ... function() {
        const UU = "Lunite Auto Miner";
        return {
          [UU]: {
            positions: [{
              block: UU,
              x: 0,
              y: 0,
              z: 0
            }, {
              block: "_Lunite Auto Miner Body",
              x: 0,
              y: 1,
              z: -1
            }, {
              block: "_Lunite Auto Miner Drill Front",
              x: 0,
              y: 1,
              z: -2
            }, {
              block: "_Lunite Auto Miner Drill Back",
              x: 0,
              y: 1,
              z: 0
            }, {
              block: "_Lunite Auto Miner Foot Front",
              x: 0,
              y: 0,
              z: -2
            }]
          },
          [`${UU}|meta|rot2`]: {
            positions: [{
              block: `${UU}|meta|rot2`,
              x: 0,
              y: 0,
              z: 0
            }, {
              block: "_Lunite Auto Miner Body|meta|rot2",
              x: -1,
              y: 1,
              z: 0
            }, {
              block: "_Lunite Auto Miner Drill Front|meta|rot2",
              x: -2,
              y: 1,
              z: 0
            }, {
              block: "_Lunite Auto Miner Drill Back|meta|rot2",
              x: 0,
              y: 1,
              z: 0
            }, {
              block: "_Lunite Auto Miner Foot Front|meta|rot2",
              x: -2,
              y: 0,
              z: 0
            }]
          },
          [`${UU}|meta|rot3`]: {
            positions: [{
              block: `${UU}|meta|rot3`,
              x: 0,
              y: 0,
              z: 0
            }, {
              block: "_Lunite Auto Miner Body|meta|rot3",
              x: 0,
              y: 1,
              z: 1
            }, {
              block: "_Lunite Auto Miner Drill Front|meta|rot3",
              x: 0,
              y: 1,
              z: 2
            }, {
              block: "_Lunite Auto Miner Drill Back|meta|rot3",
              x: 0,
              y: 1,
              z: 0
            }, {
              block: "_Lunite Auto Miner Foot Front|meta|rot3",
              x: 0,
              y: 0,
              z: 2
            }]
          },
          [`${UU}|meta|rot4`]: {
            positions: [{
              block: `${UU}|meta|rot4`,
              x: 0,
              y: 0,
              z: 0
            }, {
              block: "_Lunite Auto Miner Body|meta|rot4",
              x: 1,
              y: 1,
              z: 0
            }, {
              block: "_Lunite Auto Miner Drill Front|meta|rot4",
              x: 2,
              y: 1,
              z: 0
            }, {
              block: "_Lunite Auto Miner Drill Back|meta|rot4",
              x: 0,
              y: 1,
              z: 0
            }, {
              block: "_Lunite Auto Miner Foot Front|meta|rot4",
              x: 2,
              y: 0,
              z: 0
            }]
          }
        }
      }(),
      ... function() {
        const UU = {
            1: UU => ({
              x: 0,
              z: UU
            }),
            2: UU => ({
              x: UU,
              z: 0
            }),
            3: UU => ({
              x: 0,
              z: -UU
            }),
            4: UU => ({
              x: -UU,
              z: 0
            })
          },
          RU = {};
        for (let gU = 1; gU <= 4; gU++) {
          const pU = 1 === gU ? "" : `|meta|rot${gU}`;
          RU[`${tU.b[0].block}${pU}`] = {
            positions: tU.b.map((RU => {
              let {
                block: tU,
                y: EU,
                z: PU
              } = RU;
              return {
                block: `${tU}${pU}`,
                y: EU,
                ...UU[gU](PU)
              }
            }))
          }
        }
        return RU
      }(),
      ... function() {
        const UU = {};
        for (let RU = 1; RU <= tU.k; RU++) {
          const gU = (0, tU.bc)(RU),
            pU = tU.l[RU - 1],
            EU = [{
              block: gU,
              x: 0,
              y: 0,
              z: 0
            }];
          for (const UU of tU.e)
            for (let RU = 1; RU <= pU; RU++) {
              if ("southwest" === UU && 1 === RU) continue;
              const {
                x: gU,
                z: pU
              } = tU.h[UU];
              EU.push({
                block: (0, tU.$b)(UU, RU),
                x: gU,
                y: RU - 1,
                z: pU
              })
            }
          UU[gU] = {
            positions: EU
          }
        }
        return UU
      }(),
      "Solar Panel": {
        positions: [{
          block: "Solar Panel",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Solar Panel SE",
          x: 1,
          y: 0,
          z: 0
        }, {
          block: "_Solar Panel NW",
          x: 0,
          y: 0,
          z: -1
        }, {
          block: "_Solar Panel NE",
          x: 1,
          y: 0,
          z: -1
        }]
      },
      "Solar Panel|meta|rot2": {
        positions: [{
          block: "Solar Panel|meta|rot2",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Solar Panel SE|meta|rot2",
          x: 0,
          y: 0,
          z: -1
        }, {
          block: "_Solar Panel NW|meta|rot2",
          x: -1,
          y: 0,
          z: 0
        }, {
          block: "_Solar Panel NE|meta|rot2",
          x: -1,
          y: 0,
          z: -1
        }]
      },
      "Solar Panel|meta|rot3": {
        positions: [{
          block: "Solar Panel|meta|rot3",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Solar Panel SE|meta|rot3",
          x: -1,
          y: 0,
          z: 0
        }, {
          block: "_Solar Panel NW|meta|rot3",
          x: 0,
          y: 0,
          z: 1
        }, {
          block: "_Solar Panel NE|meta|rot3",
          x: -1,
          y: 0,
          z: 1
        }]
      },
      "Solar Panel|meta|rot4": {
        positions: [{
          block: "Solar Panel|meta|rot4",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Solar Panel SE|meta|rot4",
          x: 0,
          y: 0,
          z: 1
        }, {
          block: "_Solar Panel NW|meta|rot4",
          x: 1,
          y: 0,
          z: 0
        }, {
          block: "_Solar Panel NE|meta|rot4",
          x: 1,
          y: 0,
          z: 1
        }]
      },
      "Homestead Core": {
        positions: [{
          block: "Homestead Core",
          x: 0,
          y: 0,
          z: 0
        }, {
          block: "_Homestead Core Mid",
          x: 0,
          y: 1,
          z: 0
        }, {
          block: "_Homestead Core Top",
          x: 0,
          y: 2,
          z: 0
        }]
      }
    };

    function TU(UU) {
      return {
        [`${UU} Banner`]: {
          positions: [{
            block: `${UU} Banner`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${UU} Banner Flag|meta|rot1|bot`,
            x: 0,
            y: 1,
            z: 0
          }]
        },
        [`${UU} Banner|meta|rot2|bot`]: {
          positions: [{
            block: `${UU} Banner|meta|rot2|bot`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${UU} Banner Flag|meta|rot2|bot`,
            x: 0,
            y: 1,
            z: 0
          }]
        },
        [`${UU} Banner|meta|rot3|bot`]: {
          positions: [{
            block: `${UU} Banner|meta|rot3|bot`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${UU} Banner Flag|meta|rot3|bot`,
            x: 0,
            y: 1,
            z: 0
          }]
        },
        [`${UU} Banner|meta|rot4|bot`]: {
          positions: [{
            block: `${UU} Banner|meta|rot4|bot`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${UU} Banner Flag|meta|rot4|bot`,
            x: 0,
            y: 1,
            z: 0
          }]
        },
        [`${UU} Banner|meta|rot1|side`]: {
          positions: [{
            block: `${UU} Banner|meta|rot1|side`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${UU} Banner Flag|meta|rot1|side`,
            x: 0,
            y: -1,
            z: 0
          }]
        },
        [`${UU} Banner|meta|rot2|side`]: {
          positions: [{
            block: `${UU} Banner|meta|rot2|side`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${UU} Banner Flag|meta|rot2|side`,
            x: 0,
            y: -1,
            z: 0
          }]
        },
        [`${UU} Banner|meta|rot3|side`]: {
          positions: [{
            block: `${UU} Banner|meta|rot3|side`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${UU} Banner Flag|meta|rot3|side`,
            x: 0,
            y: -1,
            z: 0
          }]
        },
        [`${UU} Banner|meta|rot4|side`]: {
          positions: [{
            block: `${UU} Banner|meta|rot4|side`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${UU} Banner Flag|meta|rot4|side`,
            x: 0,
            y: -1,
            z: 0
          }]
        },
        [`${UU} Banner|meta|rot1|top`]: {
          positions: [{
            block: `${UU} Banner|meta|rot1|top`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${UU} Banner Flag`,
            x: 0,
            y: -1,
            z: 0
          }]
        },
        [`${UU} Banner|meta|rot2|top`]: {
          positions: [{
            block: `${UU} Banner|meta|rot2|top`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${UU} Banner Flag|meta|rot2|top`,
            x: 0,
            y: -1,
            z: 0
          }]
        },
        [`${UU} Banner|meta|rot3|top`]: {
          positions: [{
            block: `${UU} Banner|meta|rot3|top`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${UU} Banner Flag|meta|rot3|top`,
            x: 0,
            y: -1,
            z: 0
          }]
        },
        [`${UU} Banner|meta|rot4|top`]: {
          positions: [{
            block: `${UU} Banner|meta|rot4|top`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${UU} Banner Flag|meta|rot4|top`,
            x: 0,
            y: -1,
            z: 0
          }]
        }
      }
    }

    function qU(UU) {
      const RU = (0, EU.Zb)(UU);
      return {
        [RU]: {
          positions: [{
            block: RU,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${RU} Top Left`,
            x: 0,
            y: 1,
            z: 0
          }, {
            block: `_${RU} Top Right`,
            x: -1,
            y: 1,
            z: 0
          }, {
            block: `_${RU} Bottom Right`,
            x: -1,
            y: 0,
            z: 0
          }]
        },
        [`${RU}|meta|rot2`]: {
          positions: [{
            block: `${RU}|meta|rot2`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${RU} Top Left|meta|rot2`,
            x: 0,
            y: 1,
            z: 0
          }, {
            block: `_${RU} Top Right|meta|rot2`,
            x: 0,
            y: 1,
            z: 1
          }, {
            block: `_${RU} Bottom Right|meta|rot2`,
            x: 0,
            y: 0,
            z: 1
          }]
        },
        [`${RU}|meta|rot3`]: {
          positions: [{
            block: `${RU}|meta|rot3`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${RU} Top Left|meta|rot3`,
            x: 0,
            y: 1,
            z: 0
          }, {
            block: `_${RU} Top Right|meta|rot3`,
            x: 1,
            y: 1,
            z: 0
          }, {
            block: `_${RU} Bottom Right|meta|rot3`,
            x: 1,
            y: 0,
            z: 0
          }]
        },
        [`${RU}|meta|rot4`]: {
          positions: [{
            block: `${RU}|meta|rot4`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_${RU} Top Left|meta|rot4`,
            x: 0,
            y: 1,
            z: 0
          }, {
            block: `_${RU} Top Right|meta|rot4`,
            x: 0,
            y: 1,
            z: -1
          }, {
            block: `_${RU} Bottom Right|meta|rot4`,
            x: 0,
            y: 0,
            z: -1
          }]
        }
      }
    }

    function KU(UU) {
      const RU = `_${UU} Back`,
        gU = `_${UU} Dish`;
      return {
        [UU]: {
          positions: [{
            block: UU,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: RU,
            x: 0,
            y: 0,
            z: -1
          }, {
            block: gU,
            x: 0,
            y: 1,
            z: -1
          }]
        },
        [`${UU}|meta|rot2`]: {
          positions: [{
            block: `${UU}|meta|rot2`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `${RU}|meta|rot2`,
            x: -1,
            y: 0,
            z: 0
          }, {
            block: `${gU}|meta|rot2`,
            x: -1,
            y: 1,
            z: 0
          }]
        },
        [`${UU}|meta|rot3`]: {
          positions: [{
            block: `${UU}|meta|rot3`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `${RU}|meta|rot3`,
            x: 0,
            y: 0,
            z: 1
          }, {
            block: `${gU}|meta|rot3`,
            x: 0,
            y: 1,
            z: 1
          }]
        },
        [`${UU}|meta|rot4`]: {
          positions: [{
            block: `${UU}|meta|rot4`,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `${RU}|meta|rot4`,
            x: 1,
            y: 0,
            z: 0
          }, {
            block: `${gU}|meta|rot4`,
            x: 1,
            y: 1,
            z: 0
          }]
        }
      }
    }

    function cU(UU) {
      const RU = `Small ${UU} Pod`;
      return {
        [RU]: {
          positions: [{
            block: RU,
            x: 0,
            y: 0,
            z: 0
          }, {
            block: `_Small ${UU} Pod Mid`,
            x: 0,
            y: 1,
            z: 0
          }, {
            block: `_Small ${UU} Pod Top`,
            x: 0,
            y: 2,
            z: 0
          }]
        }
      }
    }
    for (const jU in PU) {
      for (const UU of PU[jU].positions)
        if (UU.id = pU.f[UU.block].id, jU === UU.block && (0 !== UU.x || 0 !== UU.y || 0 !== UU.z)) throw new Error(`Multiblock "${jU}" has main block "${UU.block}" at non-origin position (${UU.x}, ${UU.y}, ${UU.z}) - if you need to do something like this, you'll need to rethink your approach: Banners are a good template to follow.`);
      PU[pU.f[jU].id] = PU[jU]
    }
    const GU = {};
    for (const jU in PU)
      for (const {
          block: UU,
          x: RU,
          y: gU,
          z: tU
        }
        of PU[jU].positions) {
        const EU = {
          mainMultiblock: jU,
          compX: RU,
          compY: gU,
          compZ: tU
        };
        GU[UU] = EU, GU[pU.f[UU].id] = EU
      }
  },
  37781: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => qU,
      h: () => TU
    });
    var tU = gU(9078),
      pU = gU(9125),
      EU = gU(9127);
    const PU = pU.p.map((UU => {
      let {
        dx: RU,
        dz: gU
      } = UU;
      return [RU, 0, gU]
    }));

    function TU(UU) {
      const RU = tU.f[UU];
      return !!RU && UU !== tU.c && !RU.model && !RU.Nj && !1 !== RU.solid && !RU.du
    }
    class qU {
      constructor(UU) {
        this.model = UU, this.reshapeOffsets = [...PU, [0, -1, 0]]
      }
      handles(UU) {
        const RU = tU.f[UU];
        return (null === RU || void 0 === RU ? void 0 : RU.model) === this.model && void 0 !== RU.attachedTop
      }
      affects(UU) {
        return this.handles(UU) || TU(UU) || (0, EU.y)(tU.f[UU])
      }
      shape(UU, RU, gU, PU, qU) {
        let KU = this.handles(UU(RU, gU + 1, PU)) ? pU.g : 0;
        return pU.p.forEach(((qU, cU) => {
          let {
            dx: GU,
            dz: jU
          } = qU;
          const uU = UU(RU + GU, gU, PU + jU);
          (this.handles(uU) || TU(uU) || function(UU, RU) {
            const gU = tU.f[UU];
            return (0, EU.y)(gU) && (0, EU.t)(gU.meta.rot) === (0 !== pU.p[RU].dx)
          }(uU, cU)) && (KU |= 1 << cU)
        })), (0, tU.i)((0, pU.j)(tU.f[qU].meta.rootName, KU))
      }
    }
  },
  37534: (UU, RU, gU) => {
    function tU(UU, RU) {
      var gU;
      RU || (RU = {});
      const tU = null !== (gU = RU.customAttributes) && void 0 !== gU ? gU : {};
      var pU, EU, PU;
      "Gun" === (null === UU || void 0 === UU ? void 0 : UU.type) && (tU.shotsLeft = null !== (pU = null !== (EU = tU.shotsLeft) && void 0 !== EU ? EU : null === (PU = tU.gunStats) || void 0 === PU ? void 0 : PU.clipSize) && void 0 !== pU ? pU : UU.clipSize);
      if (tU.enchantmentTier && (tU.enchantmentTier = tU.enchantmentTier.toString()), tU.enchantments)
        for (const GU in tU.enchantments) {
          const UU = tU.enchantments[GU];
          if ("number" !== typeof UU) {
            const RU = parseInt(UU);
            isNaN(RU) || RU < 0 ? tU.enchantments[GU] = void 0 : tU.enchantments[GU] = RU > 1e9 ? 1e9 : RU
          }
        }
      if (tU.enchantmentData)
        for (const GU in tU.enchantmentData) {
          const UU = tU.enchantmentData[GU];
          if (!UU) continue;
          if ("object" !== typeof UU) {
            tU.enchantmentData[GU] = void 0;
            continue
          }
          const RU = UU.icon,
            gU = UU.description;
          var TU, qU, KU, cU;
          if ("string" !== typeof RU) tU.enchantmentData[GU].icon = null !== (TU = null === RU || void 0 === RU || null === (qU = RU.toString) || void 0 === qU ? void 0 : qU.call(RU)) && void 0 !== TU ? TU : void 0;
          if ("string" !== typeof gU) tU.enchantmentData[GU].description = null !== (KU = null === gU || void 0 === gU || null === (cU = gU.toString) || void 0 === cU ? void 0 : cU.call(gU)) && void 0 !== KU ? KU : void 0
        }
      return RU.customAttributes = tU, RU
    }
    gU.d(RU, {
      e: () => tU
    })
  },
  37777: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => JU,
      d: () => eU,
      g: () => qU,
      k: () => GU,
      o: () => wU
    });
    var tU = gU(9078),
      pU = gU(9110),
      EU = gU(37781);
    const PU = (0, tU.i)("Noticeboard"),
      TU = (0, tU.i)("Standing Noticeboard|meta|rot4|lrud");

    function qU(UU) {
      return PU <= UU && UU <= TU
    }
    const KU = new Uint8Array(TU - PU + 1);
    for (let nU = PU; nU <= TU; nU++) KU[nU - PU] = (0, pU.s)(tU.f[nU].meta.metaStr);
    const cU = 64,
      GU = cU * cU,
      [jU, uU, CU, hU] = [0, 1, 2, 3];

    function QU(UU) {
      var RU, gU;
      return "string" === typeof(null === UU || void 0 === UU || null === (RU = UU.persisted) || void 0 === RU || null === (gU = RU.shared) || void 0 === gU ? void 0 : gU.text)
    }

    function eU(UU) {
      return QU(UU) && "" !== UU.persisted.shared.text.trim()
    }

    function WU(UU, RU) {
      let [gU, , tU] = RU;
      const [EU, , PU] = pU.v[UU][uU];
      return gU * EU + tU * PU
    }

    function fU(UU, RU, gU) {
      return gU[1] - RU[1] || WU(UU, RU) - WU(UU, gU)
    }

    function xU(UU, RU, gU, EU, TU) {
      var qU;
      let cU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : UU(RU[0], RU[1], RU[2]);
      if (!(KU[cU - PU] & 1 << gU)) return null;
      const [GU, jU, uU] = pU.v[TU][gU], CU = [RU[0] + GU, RU[1] + jU, RU[2] + uU], hU = UU(CU[0], CU[1], CU[2]), QU = null === (qU = tU.f[hU]) || void 0 === qU ? void 0 : qU.meta;
      return (null === QU || void 0 === QU ? void 0 : QU.rootId) === EU && QU.rot === TU && KU[hU - PU] & 1 << (1 ^ gU) ? CU : null
    }

    function mU(UU, RU, gU, EU) {
      const PU = UU(RU, gU, EU);
      if (!qU(PU)) return null;
      const {
        rootId: TU,
        rot: KU
      } = tU.f[PU].meta, GU = (RU, gU) => {
        let tU = RU,
          pU = 1;
        for (let EU = xU(UU, tU, gU, TU, KU); EU && pU < cU; EU = xU(UU, tU, gU, TU, KU)) tU = EU, pU++;
        return {
          end: tU,
          cells: pU
        }
      }, QU = GU(GU([RU, gU, EU], jU).end, CU).end, eU = GU(QU, uU).cells, [WU, , fU] = pU.v[KU][uU];
      let mU = 1;
      UU: for (; mU < cU; mU++)
        for (let RU = 0; RU < eU; RU++)
          if (!xU(UU, [QU[0] + WU * RU, QU[1] - mU + 1, QU[2] + fU * RU], hU, TU, KU)) break UU;
      return {
        anchor: QU,
        rootId: TU,
        rot: KU,
        width: eU,
        height: mU
      }
    }

    function IU(UU, RU) {
      for (const gU of function(UU) {
          let {
            anchor: RU,
            rot: gU,
            width: tU,
            height: EU
          } = UU;
          const [PU, , TU] = pU.v[gU][uU], qU = [];
          for (let pU = 0; pU < EU; pU++)
            for (let UU = 0; UU < tU; UU++) qU.push([RU[0] + PU * UU, RU[1] - pU, RU[2] + TU * UU]);
          return qU
        }(UU))
        if (QU(RU(gU[0], gU[1], gU[2]))) return gU;
      return null
    }

    function JU(UU, RU, gU, pU, EU) {
      const PU = UU(gU, pU, EU);
      if (!qU(PU)) return null;
      const {
        rootId: TU,
        rot: KU
      } = tU.f[PU].meta, cU = [
        [gU, pU, EU]
      ], jU = new Set([cU[0].join()]);
      let uU = cU[0],
        CU = null;
      for (let tU = 0; tU < cU.length; tU++) {
        const gU = cU[tU];
        if (fU(KU, gU, uU) < 0 && (uU = gU), QU(RU(gU[0], gU[1], gU[2]))) {
          const RU = mU(UU, gU[0], gU[1], gU[2]);
          (!CU || fU(KU, RU.anchor, CU.anchor) < 0) && (CU = RU)
        }
        for (let RU = 0; RU < 4 && cU.length < GU; RU++) {
          const tU = xU(UU, gU, RU, TU, KU);
          tU && !jU.has(tU.join()) && (jU.add(tU.join()), cU.push(tU))
        }
      }
      return CU ??= mU(UU, uU[0], uU[1], uU[2]), {
        cells: cU,
        topLeft: uU,
        rect: CU,
        textCell: IU(CU, RU)
      }
    }

    function wU(UU, RU, gU, PU, TU) {
      if (null !== gU && qU(gU)) {
        const {
          rootName: UU,
          rot: RU
        } = tU.f[gU].meta;
        if (pU.v[RU].some((UU => {
            let [RU, gU, tU] = UU;
            return RU === PU[0] && gU === PU[1] && tU === PU[2]
          }))) return {
          root: UU,
          rot: RU
        }
      }
      const [KU, cU] = pU.n[TU], GU = UU(RU[0] - KU, RU[1], RU[2] - cU);
      return {
        root: (0, EU.h)(GU) ? pU.B : pU.y,
        rot: TU
      }
    }
  },
  36324: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => EU,
      d: () => tU,
      e: () => pU
    });
    const tU = 15,
      pU = 3,
      EU = 30
  },
  37789: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => EU,
      h: () => PU,
      j: () => pU,
      m: () => TU
    });
    var tU = gU(314);
    const pU = ["Snowball", "Snowball Launcher", "Pebble", "Reinforced Pebble", "Ball", "Reinforced Ball", "Mango", "Moonstone Orb", ...gU(572).p.map((UU => `${UU} Spawn Orb`)), "Fireball", "RPG", "Obby RPG", "Super RPG", "Grenade Launcher", "Iceball", "Bouncy Bomb", "Coconut", "Splash Speed Potion", "Splash Speed Potion II", "Splash Defense Potion", "Splash Defense Potion II", "Splash Strength Potion", "Splash Strength Potion II", "Splash Invisibility Potion", "Splash Jump Potion", "Splash Jump Potion II", "Splash Knockback Potion", "Splash Knockback Potion II", "Splash Poison Potion", "Splash Poison Potion II", "Splash Slowness Potion", "Splash Slowness Potion II", "Splash Weakness Potion", "Splash Weakness Potion II", "Splash Milk Potion", "Splash Instant Damage Potion", "Splash Instant Damage Potion II", "Splash Regeneration Potion", "Splash Regeneration Potion II", "Splash Instant Healing Potion", "Splash Instant Healing Potion II", "Splash Haste Potion", "Splash Haste Potion II", "Splash Shield Potion", "Splash Shield Potion II", "Splash Double Jump Potion", "Splash Heat Resistance Potion", "Splash X-Ray Vision Potion", "Splash Mining Yield Potion", "Splash Mining Yield Potion II", "Splash Brain Rot Potion", "Yellow Paintball Gun", "White Paintball Gun", "Red Paintball Gun", "Purple Paintball Gun", "Pink Paintball Gun", "Orange Paintball Gun", "Magenta Paintball Gun", "Lime Paintball Gun", "Light Gray Paintball Gun", "Light Blue Paintball Gun", "Green Paintball Gun", "Gray Paintball Gun", "Cyan Paintball Gun", "Brown Paintball Gun", "Blue Paintball Gun", "Black Paintball Gun", "Yellow Heavy Paintball Gun", "White Heavy Paintball Gun", "Red Heavy Paintball Gun", "Purple Heavy Paintball Gun", "Pink Heavy Paintball Gun", "Orange Heavy Paintball Gun", "Magenta Heavy Paintball Gun", "Lime Heavy Paintball Gun", "Light Gray Heavy Paintball Gun", "Light Blue Heavy Paintball Gun", "Green Heavy Paintball Gun", "Gray Heavy Paintball Gun", "Cyan Heavy Paintball Gun", "Brown Heavy Paintball Gun", "Blue Heavy Paintball Gun", "Black Heavy Paintball Gun", "Toxin Ball", "Splash Aura XP Potion", "Splash Aura XP Potion II", "Firecracker", "Rainbow Firecracker", "White Firecracker", "Orange Firecracker", "Magenta Firecracker", "Light Blue Firecracker", "Yellow Firecracker", "Lime Firecracker", "Pink Firecracker", "Gray Firecracker", "Light Gray Firecracker", "Cyan Firecracker", "Purple Firecracker", "Blue Firecracker", "Brown Firecracker", "Green Firecracker", "Red Firecracker", "Black Firecracker", "Firecracker Pebble", "Rainbow Firecracker Pebble", "White Firecracker Pebble", "Orange Firecracker Pebble", "Magenta Firecracker Pebble", "Light Blue Firecracker Pebble", "Yellow Firecracker Pebble", "Lime Firecracker Pebble", "Pink Firecracker Pebble", "Gray Firecracker Pebble", "Light Gray Firecracker Pebble", "Cyan Firecracker Pebble", "Purple Firecracker Pebble", "Blue Firecracker Pebble", "Brown Firecracker Pebble", "Green Firecracker Pebble", "Red Firecracker Pebble", "Black Firecracker Pebble", "Blinding Pebble", "Poop", "Wood Boomerang", "Stone Boomerang", "Iron Boomerang", "Gold Boomerang", "Diamond Boomerang", "Moonstone Boomerang", ...tU.l, "67 Base Projectile", "67 Boosted Projectile", "Capitano Grenade", "Scatter Pellet", "Lucky Bomb", "Unlucky Bomb", "Swap Orb"],
      EU = ["Obby RPG"];

    function PU(UU) {
      const RU = UU.indexOf("|");
      return -1 === RU ? {
        item: UU,
        clientPredictedThrower: null
      } : {
        item: UU.slice(0, RU),
        clientPredictedThrower: UU.slice(RU + 1)
      }
    }
    const TU = [...pU, "Arrow", "Arrow of Speed", "Arrow of Slowness", "Arrow of Poison", "Arrow of Weakness", "Arrow of Knockback", "Arrow of Strength", "Arrow of Defense", "Arrow of Invisibility", "Arrow of Jumping", "Arrow of Milk", "Arrow of Instant Damage", "Arrow of Regeneration", "Arrow of Instant Healing", "Arrow of Haste", "Arrow of Shield", "Arrow of Double Jump", "Arrow of Heat Resistance", "Arrow of X-Ray Vision", "Arrow of Mining Yield", "Arrow of Brain Rot", "Arrow of Aura XP", "Bullet"]
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);