export const id = 203;
export const ids = [203];
export const modules = {
  41768: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      MobPreview: () => Ap
    });
    var Op = cp(62),
      op = cp(1049),
      Ip = cp.n(op),
      Sp = cp(41773),
      xp = cp(34462),
      Lp = cp(41776),
      Yp = cp(1112);

    function Dp(pp) {
      return xp.j.openMob(pp)
    }
    const Ap = (0, Op.memo)((function(pp) {
      let {
        mobType: ip,
        variation: cp = null,
        animation: op = Lp.f,
        className: xp
      } = pp;
      const Ap = (0, Op.useRef)(null),
        Pp = (0, Op.useMemo)((() => ({
          mobType: ip,
          variation: cp,
          animation: op
        })), [ip, cp, op]);
      return (0, Sp.b)(Ap, Dp, Pp), (0, Yp.jsx)("div", {
        className: Ip()("MobPreview", xp),
        ref: Ap
      })
    }))
  },
  41773: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Ip
    });
    var Op = cp(62),
      op = cp(2835);

    function Ip(pp, ip, cp) {
      const Ip = (0, Op.useRef)(null),
        {
          width: Sp,
          height: xp
        } = (0, op.d)(pp);
      (0, Op.useEffect)((() => {
        const cp = ip(pp.current);
        return Ip.current = cp, () => {
          cp.close(), Ip.current = null
        }
      }), [pp, ip]), (0, Op.useEffect)((() => {
        Sp <= 0 || xp <= 0 || Ip.current.resize(Sp, xp)
      }), [Sp, xp]), (0, Op.useEffect)((() => {
        Ip.current.show(cp)
      }), [cp])
    }
  },
  41776: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Pp,
      e: () => Ap,
      f: () => Lp
    });
    var Op = cp(37395),
      op = cp(38856);

    function Ip(pp, ip) {
      let [cp, Op, op] = pp;
      return [0, .5, 1].map((pp => ({
        timeFraction: pp,
        rotation: {
          Wo: "catmull-rom-spline",
          point: [cp, Op, op + (.5 === pp ? ip : 0)]
        }
      })))
    }

    function Sp(pp, ip, cp) {
      return {
        Lo: 3200,
        loop: !0,
        Do: {
          Root: {
            timeline: [0, .5, 1].map((pp => ({
              timeFraction: pp,
              position: {
                Wo: "catmull-rom-spline",
                point: [0, .5 === pp ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((pp => ({
              timeFraction: pp,
              rotation: {
                Wo: "catmull-rom-spline",
                point: [0, .25 === pp ? .12 : .75 === pp ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: Ip(pp, cp)
          },
          ArmRightMesh: {
            timeline: Ip(ip, -cp)
          }
        }
      }
    }
    const xp = Sp([0, 0, 0], [0, 0, 0], .07),
      Lp = (0, op.b)((0, Op.d)(xp), "mobIdle"),
      Yp = Sp([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      Dp = Sp([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      Ap = (0, op.b)((0, Op.d)(Yp), "gunReady"),
      Pp = (0, op.b)((0, Op.d)(Dp), "gunAimed")
  },
  34466: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Sp,
      e: () => op,
      i: () => Dp
    });
    var Op = cp(1579);

    function op(pp) {
      var ip;
      return {
        ...Sp.store,
        yaw: Sp.store.yaw + (null !== (ip = Op.b[pp].previewYaw) && void 0 !== ip ? ip : 0)
      }
    }
    const Ip = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      Sp = {
        player: Ip,
        store: {
          ...Ip,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function xp(pp, ip) {
      pp instanceof Promise ? pp.then(ip).catch((pp => {
        console.error("Couldn't open the preview", pp)
      })) : ip(pp)
    }
    class Lp {
      constructor(pp) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, xp(pp, (pp => {
          this.closed ? pp.close() : (this.opened = pp, null !== this.size && pp.resize(this.size.width, this.size.height), null !== this.view && pp.show(this.view))
        }))
      }
      show(pp) {
        var ip;
        this.view = pp, null === (ip = this.opened) || void 0 === ip || ip.show(pp)
      }
      resize(pp, ip) {
        var cp;
        this.size = {
          width: pp,
          height: ip
        }, null === (cp = this.opened) || void 0 === cp || cp.resize(pp, ip)
      }
      close() {
        var pp;
        this.closed = !0, null === (pp = this.opened) || void 0 === pp || pp.close(), this.opened = null
      }
    }
    class Yp {
      constructor(pp) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(pp).then((pp => pp.ready)), xp(pp, (pp => {
          this.closed ? pp.close() : (this.opened = pp, null !== this.size && pp.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var pp, ip;
        return null !== (pp = null === (ip = this.opened) || void 0 === ip ? void 0 : ip.isReady()) && void 0 !== pp && pp
      }
      setCosmetic(pp, ip) {
        var cp;
        null === (cp = this.opened) || void 0 === cp || cp.setCosmetic(pp, ip)
      }
      playEmote(pp) {
        var ip;
        null === (ip = this.opened) || void 0 === ip || ip.playEmote(pp)
      }
      setOrbit(pp) {
        var ip;
        null === (ip = this.opened) || void 0 === ip || ip.setOrbit(pp)
      }
      resetCamera() {
        var pp;
        null === (pp = this.opened) || void 0 === pp || pp.resetCamera()
      }
      async untilDrawn(pp) {
        var ip;
        await this.ready, await (null === (ip = this.opened) || void 0 === ip ? void 0 : ip.untilDrawn(pp))
      }
      resize(pp, ip) {
        var cp;
        this.size = {
          width: pp,
          height: ip
        }, null === (cp = this.opened) || void 0 === cp || cp.resize(pp, ip)
      }
      close() {
        var pp;
        this.closed = !0, null === (pp = this.opened) || void 0 === pp || pp.close(), this.opened = null
      }
    }
    const Dp = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(pp) {
        this.host = pp
      }
      setDefaultHost(pp) {
        this.makeDefault = pp
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(pp) {
        return new Lp(this.current().openMob(pp))
      }
      openPet(pp) {
        return new Lp(this.current().openPet(pp))
      }
      openMobLineup(pp) {
        return new Lp(this.current().openMobLineup(pp))
      }
      openCharacter(pp, ip) {
        return new Yp(this.current().openCharacter(pp, ip))
      }
    }
  },
  34462: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Op.b,
      h: () => Op.e,
      j: () => Op.i
    });
    var Op = cp(34466);
    class op {
      constructor(pp) {
        this.load = pp, this.loaded = null, this.loading = null
      }
      run(pp) {
        return null !== this.loaded ? pp(this.loaded) : (this.loading ??= this.load().then((pp => (this.loaded = pp, pp)), (pp => {
          throw this.loading = null, pp
        })), this.loading.then(pp))
      }
    }
    class Ip {
      constructor() {
        this.mobScene = new op((() => Promise.all([cp.e(73), cp.e(237), cp.e(236), cp.e(258), cp.e(98), cp.e(259), cp.e(76), cp.e(75), cp.e(256), cp.e(74), cp.e(266), cp.e(260), cp.e(265), cp.e(263), cp.e(255), cp.e(279), cp.e(233), cp.e(249), cp.e(261), cp.e(264), cp.e(78), cp.e(188), cp.e(227), cp.e(97), cp.e(239), cp.e(230), cp.e(246), cp.e(121), cp.e(247), cp.e(77), cp.e(251)]).then((() => cp(41295))))), this.characterScene = new op((() => Promise.all([cp.e(73), cp.e(237), cp.e(236), cp.e(258), cp.e(98), cp.e(259), cp.e(76), cp.e(75), cp.e(256), cp.e(74), cp.e(266), cp.e(260), cp.e(265), cp.e(263), cp.e(255), cp.e(279), cp.e(233), cp.e(249), cp.e(261), cp.e(264), cp.e(78), cp.e(188), cp.e(227), cp.e(97), cp.e(239), cp.e(230), cp.e(246), cp.e(121), cp.e(247), cp.e(77), cp.e(250)]).then((() => cp(41400)))))
      }
      openMob(pp) {
        return this.mobScene.run((ip => ip.openMobPreview(pp)))
      }
      openPet(pp) {
        return this.mobScene.run((ip => ip.openPetPreview(pp)))
      }
      openMobLineup(pp) {
        return this.mobScene.run((ip => ip.openMobLineupPreview(pp)))
      }
      openCharacter(pp, ip) {
        return this.characterScene.run((cp => cp.openCharacterPreview(pp, ip)))
      }
    }
    Op.i.setDefaultHost((() => new Ip))
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);