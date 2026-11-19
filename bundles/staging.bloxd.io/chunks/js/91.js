export const id = 91;
export const ids = [91];
export const modules = {
  4434: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      Howl: () => AY.Howl,
      Howler: () => AY.Howler,
      iosAudio: () => gY,
      musicOutput: () => oY,
      readyAudioContext: () => WY
    });
    var FY, AY = DY(4438),
      IY = DY(99);
    const RY = AY.Howler;
    let OY;

    function gY() {
      return OY ??= "ios" === (0, IY.getOperatingSystem)(), OY
    }

    function aY() {
      var YY, rY;
      if (RY.ctx || !RY.usingWebAudio || "undefined" === typeof AudioContext || !gY()) return;
      const DY = navigator.audioSession;
      let FY;
      "auto" === (null === DY || void 0 === DY ? void 0 : DY.type) && (DY.type = "ambient");
      try {
        FY = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const AY = FY.createGain();
      AY.gain.setValueAtTime(RY._muted ? 0 : null !== (YY = RY._volume) && void 0 !== YY ? YY : 1, FY.currentTime), AY.connect(FY.destination), RY.ctx = FY, RY.masterGain = AY, null === (rY = RY._setup) || void 0 === rY || rY.call(RY)
    }
    RY._mobileUnloaded = !0;
    const vY = RY.volume.bind(AY.Howler);
    RY.volume = function() {
      return aY(), vY(...arguments)
    };
    const uY = RY.mute.bind(AY.Howler);
    RY.mute = YY => (aY(), uY(YY));
    const sY = AY.Howl.prototype,
      iY = sY.init;
    sY.init = function(YY) {
      return aY(), iY.call(this, YY)
    };
    let yY = 0;
    const QY = null === (FY = RY._autoSuspend) || void 0 === FY ? void 0 : FY.bind(AY.Howler);

    function oY() {
      WY();
      const {
        ctx: YY,
        masterGain: rY
      } = RY;
      return YY && rY ? {
        ctx: YY,
        destination: rY,
        holdAwake: YY => {
          var rY, DY;
          (yY += YY ? 1 : -1, YY) ? null === (rY = RY._autoResume) || void 0 === rY || rY.call(RY): null === (DY = RY._autoSuspend) || void 0 === DY || DY.call(RY)
        },
        wake: () => {
          var rY;
          "running" !== YY.state && (null === (rY = RY._autoResume) || void 0 === rY || rY.call(RY), YY.resume().catch((() => {})))
        }
      } : null
    }

    function WY() {
      var YY;
      (RY.volume(), RY.ctx && RY.autoUnlock) && (null === (YY = RY._unlockAudio) || void 0 === YY || YY.call(RY))
    }
    QY && (RY._autoSuspend = () => yY > 0 ? AY.Howler : QY())
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);