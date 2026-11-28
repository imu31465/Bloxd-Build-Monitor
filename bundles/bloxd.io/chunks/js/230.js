export const id = 230;
export const ids = [230];
export const modules = {
  53968: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      MobPreview: () => td
    });
    var Wd = md(66),
      Fd = md(1155),
      Rd = md.n(Fd),
      Xd = md(53739),
      Kd = md(35582),
      hd = md(53737),
      vd = md(1341);

    function Qd(dd) {
      return Kd.i.openMob(dd)
    }
    const td = (0, Wd.memo)((function(dd) {
      let {
        mobType: Od,
        variation: md = null,
        animation: Fd = hd.j,
        className: Kd
      } = dd;
      const td = (0, Wd.useRef)(null),
        od = (0, Wd.useMemo)((() => ({
          mobType: Od,
          variation: md,
          animation: Fd
        })), [Od, md, Fd]);
      return (0, Xd.c)(td, Qd, od), (0, vd.jsx)("div", {
        className: Rd()("MobPreview", Kd),
        ref: td
      })
    }))
  },
  53739: (dd, Od, md) => {
    md.d(Od, {
      c: () => Rd
    });
    var Wd = md(66),
      Fd = md(3851);

    function Rd(dd, Od, md) {
      const Rd = (0, Wd.useRef)(null),
        {
          width: Xd,
          height: Kd
        } = (0, Fd.b)(dd);
      (0, Wd.useEffect)((() => {
        const md = Od(dd.current);
        return Rd.current = md, () => {
          md.close(), Rd.current = null
        }
      }), [dd, Od]), (0, Wd.useEffect)((() => {
        Xd <= 0 || Kd <= 0 || Rd.current.resize(Xd, Kd)
      }), [Xd, Kd]), (0, Wd.useEffect)((() => {
        Rd.current.show(md)
      }), [md])
    }
  },
  53737: (dd, Od, md) => {
    md.d(Od, {
      d: () => od,
      h: () => td,
      j: () => hd
    });
    var Wd = md(38682),
      Fd = md(40230);

    function Rd(dd, Od) {
      let [md, Wd, Fd] = dd;
      return [0, .5, 1].map((dd => ({
        timeFraction: dd,
        rotation: {
          Um: "catmull-rom-spline",
          point: [md, Wd, Fd + (.5 === dd ? Od : 0)]
        }
      })))
    }

    function Xd(dd, Od, md) {
      return {
        gm: 3200,
        loop: !0,
        am: {
          Root: {
            timeline: [0, .5, 1].map((dd => ({
              timeFraction: dd,
              position: {
                Um: "catmull-rom-spline",
                point: [0, .5 === dd ? .18 : 0, 0]
              }
            })))
          },
          HeadMesh: {
            timeline: [0, .25, .75, 1].map((dd => ({
              timeFraction: dd,
              rotation: {
                Um: "catmull-rom-spline",
                point: [0, .25 === dd ? .12 : .75 === dd ? -.12 : 0, 0]
              }
            })))
          },
          ArmLeftMesh: {
            timeline: Rd(dd, md)
          },
          ArmRightMesh: {
            timeline: Rd(Od, -md)
          }
        }
      }
    }
    const Kd = Xd([0, 0, 0], [0, 0, 0], .07),
      hd = (0, Fd.d)((0, Wd.h)(Kd), "mobIdle"),
      vd = Xd([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
      Qd = Xd([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
      td = (0, Fd.d)((0, Wd.h)(vd), "gunReady"),
      od = (0, Fd.d)((0, Wd.h)(Qd), "gunAimed")
  },
  35587: (dd, Od, md) => {
    md.d(Od, {
      c: () => Kd,
      g: () => Fd,
      j: () => td
    });
    var Wd = md(1685);

    function Fd(dd) {
      var Od;
      return {
        ...Kd.store,
        yaw: Kd.store.yaw + (null !== (Od = Wd.b[dd].previewYaw) && void 0 !== Od ? Od : 0)
      }
    }
    const Rd = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      Xd = {
        ...Rd,
        radius: 33,
        target: [0, 3.9, 0]
      },
      Kd = {
        player: Rd,
        store: Xd,
        showcase: {
          ...Xd,
          target: [0, 1.9, 0]
        }
      };

    function hd(dd, Od) {
      dd instanceof Promise ? dd.then(Od).catch((dd => {
        console.error("Couldn't open the preview", dd)
      })) : Od(dd)
    }
    class vd {
      constructor(dd) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, hd(dd, (dd => {
          this.closed ? dd.close() : (this.opened = dd, null !== this.size && dd.resize(this.size.width, this.size.height), null !== this.view && dd.show(this.view))
        }))
      }
      show(dd) {
        var Od;
        this.view = dd, null === (Od = this.opened) || void 0 === Od || Od.show(dd)
      }
      resize(dd, Od) {
        var md;
        this.size = {
          width: dd,
          height: Od
        }, null === (md = this.opened) || void 0 === md || md.resize(dd, Od)
      }
      close() {
        var dd;
        this.closed = !0, null === (dd = this.opened) || void 0 === dd || dd.close(), this.opened = null
      }
    }
    class Qd {
      constructor(dd) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(dd).then((dd => dd.ready)), hd(dd, (dd => {
          this.closed ? dd.close() : (this.opened = dd, null !== this.size && dd.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var dd, Od;
        return null !== (dd = null === (Od = this.opened) || void 0 === Od ? void 0 : Od.isReady()) && void 0 !== dd && dd
      }
      setCosmetic(dd, Od) {
        var md;
        null === (md = this.opened) || void 0 === md || md.setCosmetic(dd, Od)
      }
      setNametag(dd) {
        var Od;
        null === (Od = this.opened) || void 0 === Od || Od.setNametag(dd)
      }
      playEmote(dd) {
        var Od;
        null === (Od = this.opened) || void 0 === Od || Od.playEmote(dd)
      }
      setOrbit(dd) {
        var Od;
        null === (Od = this.opened) || void 0 === Od || Od.setOrbit(dd)
      }
      resetCamera() {
        var dd;
        null === (dd = this.opened) || void 0 === dd || dd.resetCamera()
      }
      async untilDrawn(dd) {
        var Od;
        await this.ready, await (null === (Od = this.opened) || void 0 === Od ? void 0 : Od.untilDrawn(dd))
      }
      resize(dd, Od) {
        var md;
        this.size = {
          width: dd,
          height: Od
        }, null === (md = this.opened) || void 0 === md || md.resize(dd, Od)
      }
      close() {
        var dd;
        this.closed = !0, null === (dd = this.opened) || void 0 === dd || dd.close(), this.opened = null
      }
    }
    const td = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(dd) {
        this.host = dd
      }
      setDefaultHost(dd) {
        this.makeDefault = dd
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(dd) {
        return new vd(this.current().openMob(dd))
      }
      openPet(dd) {
        return new vd(this.current().openPet(dd))
      }
      openMobLineup(dd) {
        return new vd(this.current().openMobLineup(dd))
      }
      sharesCharacter() {
        return !0 === this.current().sharesCharacter
      }
      openCharacter(dd, Od) {
        return new Qd(this.current().openCharacter(dd, Od))
      }
    }
  },
  35582: (dd, Od, md) => {
    md.d(Od, {
      c: () => Wd.c,
      g: () => Wd.g,
      i: () => Wd.j
    });
    var Wd = md(35587);
    class Fd {
      constructor(dd) {
        this.load = dd, this.loaded = null, this.loading = null
      }
      run(dd) {
        return null !== this.loaded ? dd(this.loaded) : (this.loading ??= this.load().then((dd => (this.loaded = dd, dd)), (dd => {
          throw this.loading = null, dd
        })), this.loading.then(dd))
      }
    }
    class Rd {
      constructor() {
        this.sharesCharacter = !0, this.mobScene = new Fd((() => Promise.all([md.e(85), md.e(265), md.e(264), md.e(290), md.e(113), md.e(291), md.e(89), md.e(86), md.e(288), md.e(87), md.e(88), md.e(298), md.e(292), md.e(297), md.e(295), md.e(287), md.e(312), md.e(261), md.e(279), md.e(293), md.e(296), md.e(91), md.e(253), md.e(267), md.e(112), md.e(124), md.e(258), md.e(142), md.e(90), md.e(122), md.e(311)]).then((() => md(43035))))), this.characterScene = new Fd((() => Promise.all([md.e(85), md.e(265), md.e(264), md.e(290), md.e(113), md.e(291), md.e(89), md.e(86), md.e(288), md.e(87), md.e(88), md.e(298), md.e(292), md.e(297), md.e(295), md.e(287), md.e(312), md.e(177), md.e(261), md.e(279), md.e(293), md.e(296), md.e(91), md.e(225), md.e(253), md.e(267), md.e(112), md.e(124), md.e(258), md.e(142), md.e(90), md.e(122), md.e(280), md.e(184)]).then((() => md(43148)))))
      }
      openMob(dd) {
        return this.mobScene.run((Od => Od.openMobPreview(dd)))
      }
      openPet(dd) {
        return this.mobScene.run((Od => Od.openPetPreview(dd)))
      }
      openMobLineup(dd) {
        return this.mobScene.run((Od => Od.openMobLineupPreview(dd)))
      }
      openCharacter(dd, Od) {
        return this.characterScene.run((md => md.openCharacterPreview(dd, Od)))
      }
    }
    Wd.j.setDefaultHost((() => new Rd))
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);